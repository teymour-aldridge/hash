import {
  Block,
  BlockProperties,
  Org,
  Page,
  UnknownEntity,
  User,
} from "../graphql/apiTypes.gen";

// These are mock types for quick prototyping
// The real types will need to be synced with the db schema
// Not based on the GraphQL schema types

export type DbEntity = DbBlock | DbPage | DbUnknownEntity | DbUser | DbOrg;

export type DbBlock = Omit<Block, "properties"> & {
  properties: DbBlockProperties;
};

export type DbBlockProperties = Omit<BlockProperties, "entity">;

export type DbPageProperties = Omit<Page["properties"], "contents"> & {
  contents: {
    accountId: string;
    entityId: string;
  }[];
};

export type DbPage = Omit<Page, "properties" | "type"> & {
  properties: DbPageProperties;
  type: "Page";
};

export type DbUser = Omit<User, "type"> & { type: "User" };

export type DBVerificationCode = {
  id: string;
  code: string;
  emailAddress: string;
  userId: string;
  numberOfAttempts: number;
  createdAt: Date;
};

export type DbOrg = Omit<Org, "type"> & { type: "Org" };

export type DbUnknownEntity = Omit<UnknownEntity, "type" | "__typename"> & {
  createdById: string;
  type: string;
  __typename?: string;
  metadataId: string;
  metadata: any; // TODO: type as JSON object
};
