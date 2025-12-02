use axum::{Router, routing::post, Json, extract::State};
use serde::{Deserialize, Serialize};
use sqlx::{PgPool, Row};
use std::sync::Arc;

pub fn router(pool: PgPool) -> Router {
    Router::new()
        .route("/login", post(login))
        .with_state(Arc::new(pool))
}

#[derive(Deserialize)]
pub(crate) struct LoginPayload {
    email: String,
    password: String,
}

#[derive(Serialize)]
pub(crate) struct LoginResponse {
    success: bool,
    user_id: String,
    email: String,
    full_name: Option<String>,
}

pub async fn login(
    State(pool): State<Arc<PgPool>>,
    Json(payload): Json<LoginPayload>,
) -> Result<Json<LoginResponse>, (axum::http::StatusCode, String)> {
    
    println!("🔍 Login attempt for: {}", payload.email);
    
    // Validar credenciales con crypt() de PostgreSQL
    let result = sqlx::query(
        r#"
        SELECT id, email, full_name
        FROM users_auth
        WHERE email = $1 
        AND password_hash = crypt($2, password_hash)
        AND is_active = true
        "#
    )
    .bind(&payload.email.to_lowercase().trim())
    .bind(&payload.password)
    .fetch_optional(pool.as_ref())  // ← Corregido aquí
    .await
    .map_err(|e| {
        eprintln!("❌ Database error: {}", e);
        (
            axum::http::StatusCode::INTERNAL_SERVER_ERROR,
            format!("Database error: {}", e)
        )
    })?;

    match result {
        Some(row) => {
            let user_id: uuid::Uuid = row.get("id");
            let email: String = row.get("email");
            let full_name: Option<String> = row.get("full_name");

            // Actualizar last_login
            let _ = sqlx::query("UPDATE users_auth SET last_login = now() WHERE id = $1")
                .bind(user_id)
                .execute(pool.as_ref())  // ← Corregido aquí
                .await;

            println!("✅ Login successful for: {}", email);

            Ok(Json(LoginResponse {
                success: true,
                user_id: user_id.to_string(),
                email,
                full_name,
            }))
        }
        None => {
            println!("❌ Invalid credentials for: {}", payload.email);
            Err((
                axum::http::StatusCode::UNAUTHORIZED,
                "Invalid email or password".to_string()
            ))
        }
    }
}