use sqlx::{PgPool};
use error_stack::{IntoReport, Result};
use crate::datastore::{Datastore, DatastoreError};
use crate::types::{GraphElementIdentifier, GraphElementType};

/// A Postgres-backed Datastore
pub struct PostgresDatabase {
    pub pool: PgPool,
}

impl PostgresDatabase {
    pub async fn new(connect_url: &str) -> Result<Self, sqlx::Error> {
        Ok(Self {
            pool: PgPool::connect(connect_url).await.report()?
        })
    }
}

impl Datastore for PostgresDatabase {
    fn create(element: GraphElementType) -> Result<(), DatastoreError> {
        match element {
            GraphElementType::DataType(_) => {
                unimplemented!();
            }
            GraphElementType::PropertyType(_) => {
                unimplemented!();
            }
            GraphElementType::EntityType(_) => {
                unimplemented!();
            }
            GraphElementType::LinkType(_) => {
                unimplemented!();
            }
        }
    }

    fn read_one(_id: GraphElementIdentifier) -> Result<GraphElementType, DatastoreError> {
        unimplemented!()
    }

    fn read_many(_ids: &[GraphElementIdentifier]) -> Result<Vec<GraphElementType>, DatastoreError> {
        unimplemented!()
    }

    fn update(_id: GraphElementIdentifier, element: GraphElementType) -> Result<(), DatastoreError> {
        match element {
            GraphElementType::DataType(_) => {
                unimplemented!();
            }
            GraphElementType::PropertyType(_) => {
                unimplemented!();
            }
            GraphElementType::EntityType(_) => {
                unimplemented!();
            }
            GraphElementType::LinkType(_) => {
                unimplemented!();
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    const CONNECTION_STRING: &str = "postgres://postgres:postgres@localhost/postgres";

    // TODO - long term we likely want to gate these behind config or something, probably do not
    //  want to add a dependency on the external service for *unit* tests

    #[tokio::test]
    async fn can_connect() {
        PostgresDatabase::new(CONNECTION_STRING)
            .await
            .expect("Couldn't connect to the Postgres DB");
    }

    #[tokio::test]
    async fn get_entity_types() {
        let db = PostgresDatabase::new(CONNECTION_STRING)
            .await
            .expect("Couldn't connect to the Postgres DB");

        let entity_types = sqlx::query!("SELECT * from entity_types")
            .fetch_all(&db.pool)
            .await
            .expect("Failed to select all entity_types");
    }
}