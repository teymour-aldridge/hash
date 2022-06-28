//! Descriptions, and implementation logic, of the Types of elements of the graph

/// A placeholder enum denoting the possible types
pub enum GraphElementType {
    DataType(DataType),
    PropertyType(PropertyType),
    EntityType(EntityType),
    LinkType(LinkType),
}

// TODO - Investigate if we can generate the structure of these from the same source of truth as the DB schemas
pub struct DataType;

pub struct PropertyType;

pub struct EntityType;

pub struct LinkType;

// placeholder type to be replaced
pub struct GraphElementIdentifier(String);
