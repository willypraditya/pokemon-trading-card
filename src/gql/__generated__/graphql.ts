/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AbilitiesListItem = {
  __typename?: 'AbilitiesListItem';
  effect?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AttacksListItem = {
  __typename?: 'AttacksListItem';
  cost?: Maybe<Array<Maybe<Scalars['String']>>>;
  damage?: Maybe<Scalars['String']>;
  effect?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type Card = {
  __typename?: 'Card';
  abilities?: Maybe<Array<Maybe<AbilitiesListItem>>>;
  attacks?: Maybe<Array<Maybe<AttacksListItem>>>;
  category: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  dexId?: Maybe<Array<Maybe<Scalars['Float']>>>;
  effect?: Maybe<Scalars['String']>;
  energyType?: Maybe<Scalars['String']>;
  evolveFrom?: Maybe<Scalars['String']>;
  hp?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  illustrator?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  item?: Maybe<Item>;
  legal: Legal;
  level?: Maybe<Scalars['Float']>;
  localId: Scalars['String'];
  name: Scalars['String'];
  rarity: Scalars['String'];
  regulationMark?: Maybe<Scalars['String']>;
  resistances?: Maybe<Array<Maybe<WeakResListItem>>>;
  retreat?: Maybe<Scalars['Float']>;
  set: Set;
  stage?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  trainerType?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  variants?: Maybe<Variants>;
  weaknesses?: Maybe<Array<Maybe<WeakResListItem>>>;
};

export type CardCount = {
  __typename?: 'CardCount';
  firstEd?: Maybe<Scalars['Float']>;
  holo?: Maybe<Scalars['Float']>;
  normal?: Maybe<Scalars['Float']>;
  official: Scalars['Float'];
  reverse?: Maybe<Scalars['Float']>;
  total: Scalars['Float'];
};

export type CardsFilters = {
  category?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dexId?: InputMaybe<Scalars['Float']>;
  energyType?: InputMaybe<Scalars['String']>;
  evolveFrom?: InputMaybe<Scalars['String']>;
  hp?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  illustrator?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Float']>;
  levelId?: InputMaybe<Scalars['String']>;
  localId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  rarity?: InputMaybe<Scalars['String']>;
  regulationMark?: InputMaybe<Scalars['String']>;
  retreat?: InputMaybe<Scalars['Float']>;
  stage?: InputMaybe<Scalars['String']>;
  suffix?: InputMaybe<Scalars['String']>;
  trainerType?: InputMaybe<Scalars['String']>;
};

export type Item = {
  __typename?: 'Item';
  effect: Scalars['String'];
  name: Scalars['String'];
};

export type Legal = {
  __typename?: 'Legal';
  expanded?: Maybe<Scalars['Boolean']>;
  standard?: Maybe<Scalars['Boolean']>;
};

export type Pagination = {
  count: Scalars['Float'];
  page: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  card?: Maybe<Card>;
  cards?: Maybe<Array<Maybe<Card>>>;
  serie?: Maybe<Serie>;
  series?: Maybe<Array<Maybe<Serie>>>;
  set?: Maybe<Set>;
  sets?: Maybe<Array<Maybe<Set>>>;
};


export type QueryCardArgs = {
  id: Scalars['ID'];
  set?: InputMaybe<Scalars['String']>;
};


export type QueryCardsArgs = {
  filters?: InputMaybe<CardsFilters>;
  pagination?: InputMaybe<Pagination>;
};


export type QuerySerieArgs = {
  id: Scalars['ID'];
};


export type QuerySetArgs = {
  id: Scalars['ID'];
};

export type Serie = {
  __typename?: 'Serie';
  id: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  sets: Array<Maybe<Set>>;
};

export type Set = {
  __typename?: 'Set';
  cardCount: CardCount;
  cards: Array<Maybe<Card>>;
  id: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  releaseDate: Scalars['String'];
  serie: Serie;
  symbol?: Maybe<Scalars['String']>;
  tcgOnline?: Maybe<Scalars['String']>;
};

export type StringEndpoint = {
  __typename?: 'StringEndpoint';
  cards: Array<Maybe<Card>>;
  name: Scalars['String'];
};

export type Variants = {
  __typename?: 'Variants';
  firstEdition: Scalars['Boolean'];
  holo: Scalars['Boolean'];
  normal: Scalars['Boolean'];
  reverse: Scalars['Boolean'];
  wPromo: Scalars['Boolean'];
};

export type WeakResListItem = {
  __typename?: 'WeakResListItem';
  type: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type CardsQueryVariables = Exact<{
  filters?: InputMaybe<CardsFilters>;
  pagination?: InputMaybe<Pagination>;
}>;


export type CardsQuery = { __typename?: 'Query', cards?: Array<{ __typename?: 'Card', id: string, name: string, image?: string | null, stage?: string | null, description?: string | null, types?: Array<string | null> | null, attacks?: Array<{ __typename?: 'AttacksListItem', name: string, damage?: string | null, effect?: string | null } | null> | null, weaknesses?: Array<{ __typename?: 'WeakResListItem', type: string, value?: string | null } | null> | null } | null> | null };


export const CardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"cards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CardsFilters"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"stage"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"attacks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"damage"}},{"kind":"Field","name":{"kind":"Name","value":"effect"}}]}},{"kind":"Field","name":{"kind":"Name","value":"weaknesses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<CardsQuery, CardsQueryVariables>;