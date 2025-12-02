use serde::{Serialize, Deserialize};
use uuid::Uuid;
#[allow(dead_code)]
#[derive(Debug, Serialize, Deserialize)]
pub struct UserAuth {
    pub user_id: Uuid,
    pub email: String,
}
