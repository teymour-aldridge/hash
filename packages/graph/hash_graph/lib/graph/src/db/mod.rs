use sqlx::{PgPool};
use error_stack::{IntoReport, Result, ResultExt};

pub async fn get_conn_pool(connect_url: &str) -> Result<PgPool, sqlx::Error> {
    PgPool::connect(connect_url).await.report()
}
