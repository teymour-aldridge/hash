import { gql } from "@apollo/client";

const pageFieldsFragment = gql`
  fragment PageFields on Page {
    __typename
    id
    properties {
      __typename
      archived
      summary
      title
      contents {
        properties {
          componentId
          entityType
          entity {
            __typename
            id
            ... on UnknownEntity {
              unknownProperties: properties
            }
            ... on Text {
              textProperties: properties {
                text
                bold
                underline
                italics
              }
            }
          }
        }
      }
    }
  }
`;

export const getPageQuery = gql`
  query getPage($pageId: ID!) {
    page(id: $pageId) {
      ...PageFields
    }
  }
  ${pageFieldsFragment}
`;

export const createPage = gql`
  mutation createPage(
    $namespaceId: ID!
    $createdById: ID!
    $properties: PageCreationData!
  ) {
    createPage(
      namespaceId: $namespaceId
      createdById: $createdById
      properties: $properties
    ) {
      ...PageFields
    }
  }
  ${pageFieldsFragment}
`;

export const updatePage = gql`
  mutation updatePage($id: ID!, $properties: PageUpdateData!) {
    updatePage(id: $id, properties: $properties) {
      ...PageFields
    }
  }
  ${pageFieldsFragment}
`;
