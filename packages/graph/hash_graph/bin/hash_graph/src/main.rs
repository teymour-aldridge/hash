use std::fmt;
use error_stack::{Context, IntoReport, Result, ResultExt};
use graph::db::get_conn_pool;

#[derive(Debug)]
pub struct GraphError;
impl Context for GraphError {}

impl fmt::Display for GraphError {
    fn fmt(&self, fmt: &mut fmt::Formatter<'_>) -> fmt::Result {
        fmt.write_str("The Graph query layer encountered an error during execution")
    }
}

#[tokio::main]
async fn main() -> Result<(), GraphError> {
    let connect_url = "postgres://postgres:postgres@localhost/postgres";
    let pool = get_conn_pool(&connect_url).await.change_context(GraphError)?;

    Ok(())
}
