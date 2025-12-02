use axum::{Router, http::{Method, HeaderValue}};
use dotenv::dotenv;
use sqlx::postgres::PgPoolOptions;
use std::env;
use tokio::net::TcpListener;
use tower_http::cors::CorsLayer;

mod auth;
mod models;

#[tokio::main]
async fn main() {
    dotenv().ok();

    // Conectar a PostgreSQL
    let database_url = env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set in .env");
    
    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect(&database_url)
        .await
        .expect("Failed to connect to database");

    println!("✅ Connected to database");

    // Configurar CORS
    let cors = CorsLayer::new()
        .allow_origin("http://localhost:3000".parse::<HeaderValue>().unwrap())
        .allow_methods([Method::GET, Method::POST, Method::PUT, Method::DELETE])
        .allow_headers([axum::http::header::CONTENT_TYPE]);

    // Crear router con pool
    let app = Router::new()
        .merge(auth::router(pool))
        .layer(cors);

    let host = env::var("SERVER_HOST").unwrap_or_else(|_| "0.0.0.0".to_string());
    let port: u16 = env::var("SERVER_PORT")
        .unwrap_or_else(|_| "8000".to_string())
        .parse()
        .expect("SERVER_PORT must be a number");

    let addr = format!("{}:{}", host, port);
    println!("🚀 Server running at http://{}", addr);

    let listener = TcpListener::bind(&addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}