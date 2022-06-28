use std::fmt;
use error_stack::{Result, Context};

mod postgres;

pub use postgres::PostgresDatabase;
use crate::types::{GraphElementIdentifier, GraphElementType};

#[derive(Debug)]
pub struct DatastoreError;

impl Context for DatastoreError {}

impl fmt::Display for DatastoreError {
    fn fmt(&self, fmt: &mut fmt::Formatter<'_>) -> fmt::Result {
        fmt.write_str("The Datastore encountered an error")
    }
}

/// Describes the API of a Datastore implementation
trait Datastore {
    // TODO - Perhaps we want explicit `create_entity_type` methods and such rather than trying to
    //  make this general
    fn create(element: GraphElementType) -> Result<(), DatastoreError>;

    fn read_one(id: GraphElementIdentifier) -> Result<GraphElementType, DatastoreError>;

    fn read_many(ids: &[GraphElementIdentifier]) -> Result<Vec<GraphElementType>, DatastoreError>;

    fn update(id: GraphElementIdentifier, element: GraphElementType) -> Result<(), DatastoreError>;
}
