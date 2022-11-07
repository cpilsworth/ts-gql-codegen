import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Calendar: any;
  Date: any;
  Json: any;
  Time: any;
};

export type AllFragmentModels = CatalogNboModel | CatalogProductModel | ComponentCardModel | ComponentCarouselModel | ComponentStorytellingTextSlideModel | ComponentVideoModel | PageModel;

export type ArchiveRef = {
  __typename?: 'ArchiveRef';
  _authorUrl?: Maybe<Scalars['String']>;
  _path?: Maybe<Scalars['ID']>;
  _publishUrl?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export enum ArrayMode {
  All = 'ALL',
  AllOrEmpty = 'ALL_OR_EMPTY',
  AtLeastOnce = 'AT_LEAST_ONCE',
  Instances = 'INSTANCES'
}

export type BooleanArrayFilter = {
  _expressions: Array<InputMaybe<BooleanArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type BooleanArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']>;
  _operator?: InputMaybe<BooleanOperator>;
  value?: InputMaybe<Scalars['Boolean']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type BooleanArrayMetadata = {
  __typename?: 'BooleanArrayMetadata';
  name: Scalars['String'];
  value: Array<Maybe<Scalars['Boolean']>>;
};

export type BooleanFilter = {
  _expressions: Array<InputMaybe<BooleanFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type BooleanFilterExpression = {
  _operator?: InputMaybe<BooleanOperator>;
  value?: InputMaybe<Scalars['Boolean']>;
};

export type BooleanMetadata = {
  __typename?: 'BooleanMetadata';
  name: Scalars['String'];
  value: Scalars['Boolean'];
};

export enum BooleanOperator {
  Equals = 'EQUALS'
}

export type CalendarArrayFilter = {
  _expressions: Array<InputMaybe<CalendarArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type CalendarArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']>;
  _operator?: InputMaybe<CalendarOperator>;
  value?: InputMaybe<Scalars['Calendar']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['Calendar']>>>;
};

export type CalendarArrayMetadata = {
  __typename?: 'CalendarArrayMetadata';
  name: Scalars['String'];
  value: Array<Maybe<Scalars['Calendar']>>;
};

export type CalendarFilter = {
  _expressions: Array<InputMaybe<CalendarFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type CalendarFilterExpression = {
  _operator?: InputMaybe<CalendarOperator>;
  value?: InputMaybe<Scalars['Calendar']>;
};

export type CalendarMetadata = {
  __typename?: 'CalendarMetadata';
  name: Scalars['String'];
  value: Scalars['Calendar'];
};

export enum CalendarOperator {
  After = 'AFTER',
  At = 'AT',
  AtOrAfter = 'AT_OR_AFTER',
  AtOrBefore = 'AT_OR_BEFORE',
  Before = 'BEFORE',
  NotAt = 'NOT_AT'
}

export type CatalogNboModel = {
  __typename?: 'CatalogNboModel';
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']>;
  _variation?: Maybe<Scalars['String']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']>>>;
  costActivation?: Maybe<Scalars['Float']>;
  costRecurring?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  product?: Maybe<CatalogProductModel>;
};

export type CatalogNboModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']>;
  _match?: InputMaybe<CatalogNboModelFilter>;
};

export type CatalogNboModelConnection = {
  __typename?: 'CatalogNboModelConnection';
  edges: Array<Maybe<CatalogNboModelEdge>>;
  pageInfo: PageInfo;
};

export type CatalogNboModelEdge = {
  __typename?: 'CatalogNboModelEdge';
  cursor: Scalars['String'];
  node: CatalogNboModel;
};

export type CatalogNboModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  costActivation?: InputMaybe<FloatFilter>;
  costRecurring?: InputMaybe<FloatFilter>;
  id?: InputMaybe<StringFilter>;
  product?: InputMaybe<CatalogProductModelFilter>;
};

export type CatalogNboModelResult = {
  __typename?: 'CatalogNboModelResult';
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: CatalogNboModel;
};

export type CatalogNboModelResults = {
  __typename?: 'CatalogNboModelResults';
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<CatalogNboModel>>;
};

export type CatalogProductModel = {
  __typename?: 'CatalogProductModel';
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']>;
  _variation?: Maybe<Scalars['String']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']>>>;
  activationType?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  clickToCallChannel?: Maybe<Scalars['String']>;
  costActivationDescription?: Maybe<Scalars['String']>;
  costActivationFrequency?: Maybe<Scalars['String']>;
  costAdditionalInformation?: Maybe<Scalars['String']>;
  costPrefix?: Maybe<Scalars['String']>;
  costRecurringFrequency?: Maybe<Scalars['String']>;
  extraTypCta?: Maybe<Scalars['String']>;
  extraTypDescription?: Maybe<Scalars['String']>;
  extraTypUrl?: Maybe<Scalars['String']>;
  moreInfo?: Maybe<MultiFormatString>;
  name?: Maybe<Scalars['String']>;
  whatsappChannel?: Maybe<Scalars['String']>;
  whatsappNumber?: Maybe<Scalars['String']>;
};

export type CatalogProductModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']>;
  _match?: InputMaybe<CatalogProductModelFilter>;
};

export type CatalogProductModelConnection = {
  __typename?: 'CatalogProductModelConnection';
  edges: Array<Maybe<CatalogProductModelEdge>>;
  pageInfo: PageInfo;
};

export type CatalogProductModelEdge = {
  __typename?: 'CatalogProductModelEdge';
  cursor: Scalars['String'];
  node: CatalogProductModel;
};

export type CatalogProductModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  activationType?: InputMaybe<StringFilter>;
  category?: InputMaybe<StringFilter>;
  clickToCallChannel?: InputMaybe<StringFilter>;
  costActivationDescription?: InputMaybe<StringFilter>;
  costActivationFrequency?: InputMaybe<StringFilter>;
  costAdditionalInformation?: InputMaybe<StringFilter>;
  costPrefix?: InputMaybe<StringFilter>;
  costRecurringFrequency?: InputMaybe<StringFilter>;
  extraTypCta?: InputMaybe<StringFilter>;
  extraTypDescription?: InputMaybe<StringFilter>;
  extraTypUrl?: InputMaybe<StringFilter>;
  moreInfo?: InputMaybe<MultiFormatStringFilter>;
  name?: InputMaybe<StringFilter>;
  whatsappChannel?: InputMaybe<StringFilter>;
  whatsappNumber?: InputMaybe<StringFilter>;
};

export type CatalogProductModelResult = {
  __typename?: 'CatalogProductModelResult';
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: CatalogProductModel;
};

export type CatalogProductModelResults = {
  __typename?: 'CatalogProductModelResults';
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<CatalogProductModel>>;
};

export type ComponentCardModel = {
  __typename?: 'ComponentCardModel';
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']>;
  _variation?: Maybe<Scalars['String']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']>>>;
  content?: Maybe<MultiFormatString>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Reference>;
  imagePosition?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentCardModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']>;
  _match?: InputMaybe<ComponentCardModelFilter>;
};

export type ComponentCardModelConnection = {
  __typename?: 'ComponentCardModelConnection';
  edges: Array<Maybe<ComponentCardModelEdge>>;
  pageInfo: PageInfo;
};

export type ComponentCardModelEdge = {
  __typename?: 'ComponentCardModelEdge';
  cursor: Scalars['String'];
  node: ComponentCardModel;
};

export type ComponentCardModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  content?: InputMaybe<MultiFormatStringFilter>;
  id?: InputMaybe<StringFilter>;
  imagePosition?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ComponentCardModelResult = {
  __typename?: 'ComponentCardModelResult';
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: ComponentCardModel;
};

export type ComponentCardModelResults = {
  __typename?: 'ComponentCardModelResults';
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<ComponentCardModel>>;
};

export type ComponentCarouselModel = {
  __typename?: 'ComponentCarouselModel';
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']>;
  _variation?: Maybe<Scalars['String']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
  slides?: Maybe<Array<Maybe<AllFragmentModels>>>;
  type?: Maybe<Scalars['String']>;
};

export type ComponentCarouselModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']>;
  _match?: InputMaybe<ComponentCarouselModelFilter>;
};

export type ComponentCarouselModelConnection = {
  __typename?: 'ComponentCarouselModelConnection';
  edges: Array<Maybe<ComponentCarouselModelEdge>>;
  pageInfo: PageInfo;
};

export type ComponentCarouselModelEdge = {
  __typename?: 'ComponentCarouselModelEdge';
  cursor: Scalars['String'];
  node: ComponentCarouselModel;
};

export type ComponentCarouselModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  id?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
};

export type ComponentCarouselModelResult = {
  __typename?: 'ComponentCarouselModelResult';
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: ComponentCarouselModel;
};

export type ComponentCarouselModelResults = {
  __typename?: 'ComponentCarouselModelResults';
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<ComponentCarouselModel>>;
};

export type ComponentStorytellingTextSlideModel = {
  __typename?: 'ComponentStorytellingTextSlideModel';
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']>;
  _variation?: Maybe<Scalars['String']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']>>>;
  background?: Maybe<Reference>;
  content?: Maybe<MultiFormatString>;
  internalName?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ComponentStorytellingTextSlideModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']>;
  _match?: InputMaybe<ComponentStorytellingTextSlideModelFilter>;
};

export type ComponentStorytellingTextSlideModelConnection = {
  __typename?: 'ComponentStorytellingTextSlideModelConnection';
  edges: Array<Maybe<ComponentStorytellingTextSlideModelEdge>>;
  pageInfo: PageInfo;
};

export type ComponentStorytellingTextSlideModelEdge = {
  __typename?: 'ComponentStorytellingTextSlideModelEdge';
  cursor: Scalars['String'];
  node: ComponentStorytellingTextSlideModel;
};

export type ComponentStorytellingTextSlideModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  content?: InputMaybe<MultiFormatStringFilter>;
  internalName?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
};

export type ComponentStorytellingTextSlideModelResult = {
  __typename?: 'ComponentStorytellingTextSlideModelResult';
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: ComponentStorytellingTextSlideModel;
};

export type ComponentStorytellingTextSlideModelResults = {
  __typename?: 'ComponentStorytellingTextSlideModelResults';
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<ComponentStorytellingTextSlideModel>>;
};

export type ComponentVideoModel = {
  __typename?: 'ComponentVideoModel';
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']>;
  _variation?: Maybe<Scalars['String']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
  poster?: Maybe<Reference>;
  source?: Maybe<Reference>;
};

export type ComponentVideoModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']>;
  _match?: InputMaybe<ComponentVideoModelFilter>;
};

export type ComponentVideoModelConnection = {
  __typename?: 'ComponentVideoModelConnection';
  edges: Array<Maybe<ComponentVideoModelEdge>>;
  pageInfo: PageInfo;
};

export type ComponentVideoModelEdge = {
  __typename?: 'ComponentVideoModelEdge';
  cursor: Scalars['String'];
  node: ComponentVideoModel;
};

export type ComponentVideoModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  id?: InputMaybe<StringFilter>;
};

export type ComponentVideoModelResult = {
  __typename?: 'ComponentVideoModelResult';
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: ComponentVideoModel;
};

export type ComponentVideoModelResults = {
  __typename?: 'ComponentVideoModelResults';
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<ComponentVideoModel>>;
};

export type DateArrayFilter = {
  _expressions: Array<InputMaybe<DateArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type DateArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']>;
  _operator?: InputMaybe<DateOperator>;
  value?: InputMaybe<Scalars['Date']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type DateFilter = {
  _expressions: Array<InputMaybe<DateFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type DateFilterExpression = {
  _operator?: InputMaybe<DateOperator>;
  value?: InputMaybe<Scalars['Date']>;
};

export enum DateOperator {
  After = 'AFTER',
  At = 'AT',
  AtOrAfter = 'AT_OR_AFTER',
  AtOrBefore = 'AT_OR_BEFORE',
  Before = 'BEFORE',
  NotAt = 'NOT_AT'
}

export type DocumentRef = {
  __typename?: 'DocumentRef';
  _authorUrl?: Maybe<Scalars['String']>;
  _path?: Maybe<Scalars['ID']>;
  _publishUrl?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type FloatArrayFilter = {
  _expressions: Array<InputMaybe<FloatArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type FloatArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']>;
  _operator?: InputMaybe<FloatOperator>;
  _sensitiveness?: InputMaybe<Scalars['Float']>;
  value?: InputMaybe<Scalars['Float']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type FloatArrayMetadata = {
  __typename?: 'FloatArrayMetadata';
  name: Scalars['String'];
  value: Array<Maybe<Scalars['Float']>>;
};

export type FloatFilter = {
  _expressions: Array<InputMaybe<FloatFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type FloatFilterExpression = {
  _operator?: InputMaybe<FloatOperator>;
  _sensitiveness?: InputMaybe<Scalars['Float']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FloatMetadata = {
  __typename?: 'FloatMetadata';
  name: Scalars['String'];
  value: Scalars['Float'];
};

export enum FloatOperator {
  Equal = 'EQUAL',
  Greater = 'GREATER',
  GreaterEqual = 'GREATER_EQUAL',
  Lower = 'LOWER',
  LowerEqual = 'LOWER_EQUAL',
  Unequal = 'UNEQUAL'
}

export type IdArrayFilter = {
  _expressions: Array<InputMaybe<IdArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type IdArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']>;
  _operator?: InputMaybe<IdOperator>;
  value?: InputMaybe<Scalars['ID']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type IdFilter = {
  _expressions: Array<InputMaybe<IdFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type IdFilterExpression = {
  _operator?: InputMaybe<IdOperator>;
  value?: InputMaybe<Scalars['ID']>;
};

export enum IdOperator {
  Equals = 'EQUALS',
  EqualsNot = 'EQUALS_NOT',
  StartsWith = 'STARTS_WITH'
}

export type ImageRef = {
  __typename?: 'ImageRef';
  _authorUrl?: Maybe<Scalars['String']>;
  _path?: Maybe<Scalars['ID']>;
  _publishUrl?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  mimeType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type IntArrayFilter = {
  _expressions: Array<InputMaybe<IntArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type IntArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']>;
  _operator?: InputMaybe<IntOperator>;
  value?: InputMaybe<Scalars['Int']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type IntArrayMetadata = {
  __typename?: 'IntArrayMetadata';
  name: Scalars['String'];
  value: Array<Maybe<Scalars['Int']>>;
};

export type IntFilter = {
  _expressions: Array<InputMaybe<IntFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type IntFilterExpression = {
  _operator?: InputMaybe<IntOperator>;
  value?: InputMaybe<Scalars['Int']>;
};

export type IntMetadata = {
  __typename?: 'IntMetadata';
  name: Scalars['String'];
  value: Scalars['Int'];
};

export enum IntOperator {
  Equal = 'EQUAL',
  Greater = 'GREATER',
  GreaterEqual = 'GREATER_EQUAL',
  Lower = 'LOWER',
  LowerEqual = 'LOWER_EQUAL',
  Unequal = 'UNEQUAL'
}

export enum LogOp {
  And = 'AND',
  Or = 'OR'
}

export type ModelInfo = {
  __typename?: 'ModelInfo';
  _path?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type MultiFormatString = {
  __typename?: 'MultiFormatString';
  html?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['Json']>;
  markdown?: Maybe<Scalars['String']>;
  plaintext?: Maybe<Scalars['String']>;
};

export type MultiFormatStringArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']>;
  _match?: InputMaybe<MultiFormatStringFilter>;
};

export type MultiFormatStringFilter = {
  _logOp?: InputMaybe<LogOp>;
  html?: InputMaybe<StringFilter>;
  markdown?: InputMaybe<StringFilter>;
  plaintext?: InputMaybe<StringFilter>;
};

export type MultimediaRef = {
  __typename?: 'MultimediaRef';
  _authorUrl?: Maybe<Scalars['String']>;
  _path?: Maybe<Scalars['ID']>;
  _publishUrl?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type PageModel = {
  __typename?: 'PageModel';
  _metadata?: Maybe<TypedMetaData>;
  _model?: Maybe<ModelInfo>;
  _path?: Maybe<Scalars['ID']>;
  _variation?: Maybe<Scalars['String']>;
  _variations?: Maybe<Array<Maybe<Scalars['String']>>>;
  children?: Maybe<Array<Maybe<AllFragmentModels>>>;
  title?: Maybe<Scalars['String']>;
};

export type PageModelArrayFilter = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']>;
  _match?: InputMaybe<PageModelFilter>;
};

export type PageModelConnection = {
  __typename?: 'PageModelConnection';
  edges: Array<Maybe<PageModelEdge>>;
  pageInfo: PageInfo;
};

export type PageModelEdge = {
  __typename?: 'PageModelEdge';
  cursor: Scalars['String'];
  node: PageModel;
};

export type PageModelFilter = {
  _logOp?: InputMaybe<LogOp>;
  _path?: InputMaybe<IdFilter>;
  _variation?: InputMaybe<StringFilter>;
  _variations?: InputMaybe<StringArrayFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageModelResult = {
  __typename?: 'PageModelResult';
  _references?: Maybe<Array<Maybe<Reference>>>;
  item: PageModel;
};

export type PageModelResults = {
  __typename?: 'PageModelResults';
  _references?: Maybe<Array<Maybe<Reference>>>;
  items: Array<Maybe<PageModel>>;
};

export type PageRef = {
  __typename?: 'PageRef';
  _authorUrl?: Maybe<Scalars['String']>;
  _path?: Maybe<Scalars['ID']>;
  _publishUrl?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type QueryType = {
  __typename?: 'QueryType';
  /** Get a single `catalogNbo`, specified by its path and optional variation */
  catalogNboByPath: CatalogNboModelResult;
  /** Get multiple `catalogNbo` objects */
  catalogNboList: CatalogNboModelResults;
  /** Get multiple `catalogNbo` objects with cursor-based pagination */
  catalogNboPaginated: CatalogNboModelConnection;
  /** Get a single `catalogProduct`, specified by its path and optional variation */
  catalogProductByPath: CatalogProductModelResult;
  /** Get multiple `catalogProduct` objects */
  catalogProductList: CatalogProductModelResults;
  /** Get multiple `catalogProduct` objects with cursor-based pagination */
  catalogProductPaginated: CatalogProductModelConnection;
  /** Get a single `componentCard`, specified by its path and optional variation */
  componentCardByPath: ComponentCardModelResult;
  /** Get multiple `componentCard` objects */
  componentCardList: ComponentCardModelResults;
  /** Get multiple `componentCard` objects with cursor-based pagination */
  componentCardPaginated: ComponentCardModelConnection;
  /** Get a single `componentCarousel`, specified by its path and optional variation */
  componentCarouselByPath: ComponentCarouselModelResult;
  /** Get multiple `componentCarousel` objects */
  componentCarouselList: ComponentCarouselModelResults;
  /** Get multiple `componentCarousel` objects with cursor-based pagination */
  componentCarouselPaginated: ComponentCarouselModelConnection;
  /** Get a single `componentStorytellingTextSlide`, specified by its path and optional variation */
  componentStorytellingTextSlideByPath: ComponentStorytellingTextSlideModelResult;
  /** Get multiple `componentStorytellingTextSlide` objects */
  componentStorytellingTextSlideList: ComponentStorytellingTextSlideModelResults;
  /** Get multiple `componentStorytellingTextSlide` objects with cursor-based pagination */
  componentStorytellingTextSlidePaginated: ComponentStorytellingTextSlideModelConnection;
  /** Get a single `componentVideo`, specified by its path and optional variation */
  componentVideoByPath: ComponentVideoModelResult;
  /** Get multiple `componentVideo` objects */
  componentVideoList: ComponentVideoModelResults;
  /** Get multiple `componentVideo` objects with cursor-based pagination */
  componentVideoPaginated: ComponentVideoModelConnection;
  /** Get a single `page`, specified by its path and optional variation */
  pageByPath: PageModelResult;
  /** Get multiple `page` objects */
  pageList: PageModelResults;
  /** Get multiple `page` objects with cursor-based pagination */
  pagePaginated: PageModelConnection;
};


export type QueryTypeCatalogNboByPathArgs = {
  _path: Scalars['String'];
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeCatalogNboListArgs = {
  _locale?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CatalogNboModelFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeCatalogNboPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CatalogNboModelFilter>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeCatalogProductByPathArgs = {
  _path: Scalars['String'];
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeCatalogProductListArgs = {
  _locale?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CatalogProductModelFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeCatalogProductPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CatalogProductModelFilter>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeComponentCardByPathArgs = {
  _path: Scalars['String'];
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeComponentCardListArgs = {
  _locale?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ComponentCardModelFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeComponentCardPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ComponentCardModelFilter>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeComponentCarouselByPathArgs = {
  _path: Scalars['String'];
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeComponentCarouselListArgs = {
  _locale?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ComponentCarouselModelFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeComponentCarouselPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ComponentCarouselModelFilter>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeComponentStorytellingTextSlideByPathArgs = {
  _path: Scalars['String'];
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeComponentStorytellingTextSlideListArgs = {
  _locale?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ComponentStorytellingTextSlideModelFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeComponentStorytellingTextSlidePaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ComponentStorytellingTextSlideModelFilter>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeComponentVideoByPathArgs = {
  _path: Scalars['String'];
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeComponentVideoListArgs = {
  _locale?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ComponentVideoModelFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypeComponentVideoPaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ComponentVideoModelFilter>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypePageByPathArgs = {
  _path: Scalars['String'];
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypePageListArgs = {
  _locale?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PageModelFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  variation?: InputMaybe<Scalars['String']>;
};


export type QueryTypePagePaginatedArgs = {
  _locale?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  variation?: InputMaybe<Scalars['String']>;
};

export type Reference = ArchiveRef | CatalogNboModel | CatalogProductModel | ComponentCardModel | ComponentCarouselModel | ComponentStorytellingTextSlideModel | ComponentVideoModel | DocumentRef | ImageRef | MultimediaRef | PageModel | PageRef;

export type StringArrayFilter = {
  _expressions: Array<InputMaybe<StringArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type StringArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']>;
  _operator?: InputMaybe<StringOperator>;
  value?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StringArrayMetadata = {
  __typename?: 'StringArrayMetadata';
  name: Scalars['String'];
  value: Array<Maybe<Scalars['String']>>;
};

export type StringFilter = {
  _expressions: Array<InputMaybe<StringFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type StringFilterExpression = {
  _ignoreCase?: InputMaybe<Scalars['Boolean']>;
  _operator?: InputMaybe<StringOperator>;
  value?: InputMaybe<Scalars['String']>;
};

export type StringMetadata = {
  __typename?: 'StringMetadata';
  name: Scalars['String'];
  value: Scalars['String'];
};

export enum StringOperator {
  Contains = 'CONTAINS',
  ContainsNot = 'CONTAINS_NOT',
  Equals = 'EQUALS',
  EqualsNot = 'EQUALS_NOT'
}

export type TimeArrayFilter = {
  _expressions: Array<InputMaybe<TimeArrayFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type TimeArrayFilterExpression = {
  _apply?: InputMaybe<ArrayMode>;
  _instances?: InputMaybe<Scalars['Int']>;
  _operator?: InputMaybe<TimeOperator>;
  value?: InputMaybe<Scalars['Time']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
};

export type TimeFilter = {
  _expressions: Array<InputMaybe<TimeFilterExpression>>;
  _logOp?: InputMaybe<LogOp>;
};

export type TimeFilterExpression = {
  _operator?: InputMaybe<TimeOperator>;
  value?: InputMaybe<Scalars['Time']>;
};

export enum TimeOperator {
  After = 'AFTER',
  At = 'AT',
  AtOrAfter = 'AT_OR_AFTER',
  AtOrBefore = 'AT_OR_BEFORE',
  Before = 'BEFORE',
  NotAt = 'NOT_AT'
}

export type TypedMetaData = {
  __typename?: 'TypedMetaData';
  booleanArrayMetadata: Array<Maybe<BooleanArrayMetadata>>;
  booleanMetadata: Array<Maybe<BooleanMetadata>>;
  calendarArrayMetadata: Array<Maybe<CalendarArrayMetadata>>;
  calendarMetadata: Array<Maybe<CalendarMetadata>>;
  floatArrayMetadata: Array<Maybe<FloatArrayMetadata>>;
  floatMetadata: Array<Maybe<FloatMetadata>>;
  intArrayMetadata: Array<Maybe<IntArrayMetadata>>;
  intMetadata: Array<Maybe<IntMetadata>>;
  stringArrayMetadata: Array<Maybe<StringArrayMetadata>>;
  stringMetadata: Array<Maybe<StringMetadata>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AllFragmentModels: ResolversTypes['CatalogNboModel'] | ResolversTypes['CatalogProductModel'] | ResolversTypes['ComponentCardModel'] | ResolversTypes['ComponentCarouselModel'] | ResolversTypes['ComponentStorytellingTextSlideModel'] | ResolversTypes['ComponentVideoModel'] | ResolversTypes['PageModel'];
  ArchiveRef: ResolverTypeWrapper<ArchiveRef>;
  ArrayMode: ArrayMode;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BooleanArrayFilter: BooleanArrayFilter;
  BooleanArrayFilterExpression: BooleanArrayFilterExpression;
  BooleanArrayMetadata: ResolverTypeWrapper<BooleanArrayMetadata>;
  BooleanFilter: BooleanFilter;
  BooleanFilterExpression: BooleanFilterExpression;
  BooleanMetadata: ResolverTypeWrapper<BooleanMetadata>;
  BooleanOperator: BooleanOperator;
  Calendar: ResolverTypeWrapper<Scalars['Calendar']>;
  CalendarArrayFilter: CalendarArrayFilter;
  CalendarArrayFilterExpression: CalendarArrayFilterExpression;
  CalendarArrayMetadata: ResolverTypeWrapper<CalendarArrayMetadata>;
  CalendarFilter: CalendarFilter;
  CalendarFilterExpression: CalendarFilterExpression;
  CalendarMetadata: ResolverTypeWrapper<CalendarMetadata>;
  CalendarOperator: CalendarOperator;
  CatalogNboModel: ResolverTypeWrapper<CatalogNboModel>;
  CatalogNboModelArrayFilter: CatalogNboModelArrayFilter;
  CatalogNboModelConnection: ResolverTypeWrapper<CatalogNboModelConnection>;
  CatalogNboModelEdge: ResolverTypeWrapper<CatalogNboModelEdge>;
  CatalogNboModelFilter: CatalogNboModelFilter;
  CatalogNboModelResult: ResolverTypeWrapper<Omit<CatalogNboModelResult, '_references'> & { _references?: Maybe<Array<Maybe<ResolversTypes['Reference']>>> }>;
  CatalogNboModelResults: ResolverTypeWrapper<Omit<CatalogNboModelResults, '_references'> & { _references?: Maybe<Array<Maybe<ResolversTypes['Reference']>>> }>;
  CatalogProductModel: ResolverTypeWrapper<CatalogProductModel>;
  CatalogProductModelArrayFilter: CatalogProductModelArrayFilter;
  CatalogProductModelConnection: ResolverTypeWrapper<CatalogProductModelConnection>;
  CatalogProductModelEdge: ResolverTypeWrapper<CatalogProductModelEdge>;
  CatalogProductModelFilter: CatalogProductModelFilter;
  CatalogProductModelResult: ResolverTypeWrapper<Omit<CatalogProductModelResult, '_references'> & { _references?: Maybe<Array<Maybe<ResolversTypes['Reference']>>> }>;
  CatalogProductModelResults: ResolverTypeWrapper<Omit<CatalogProductModelResults, '_references'> & { _references?: Maybe<Array<Maybe<ResolversTypes['Reference']>>> }>;
  ComponentCardModel: ResolverTypeWrapper<Omit<ComponentCardModel, 'image'> & { image?: Maybe<ResolversTypes['Reference']> }>;
  ComponentCardModelArrayFilter: ComponentCardModelArrayFilter;
  ComponentCardModelConnection: ResolverTypeWrapper<ComponentCardModelConnection>;
  ComponentCardModelEdge: ResolverTypeWrapper<ComponentCardModelEdge>;
  ComponentCardModelFilter: ComponentCardModelFilter;
  ComponentCardModelResult: ResolverTypeWrapper<Omit<ComponentCardModelResult, '_references'> & { _references?: Maybe<Array<Maybe<ResolversTypes['Reference']>>> }>;
  ComponentCardModelResults: ResolverTypeWrapper<Omit<ComponentCardModelResults, '_references'> & { _references?: Maybe<Array<Maybe<ResolversTypes['Reference']>>> }>;
  ComponentCarouselModel: ResolverTypeWrapper<Omit<ComponentCarouselModel, 'slides'> & { slides?: Maybe<Array<Maybe<ResolversTypes['AllFragmentModels']>>> }>;
  ComponentCarouselModelArrayFilter: ComponentCarouselModelArrayFilter;
  ComponentCarouselModelConnection: ResolverTypeWrapper<ComponentCarouselModelConnection>;
  ComponentCarouselModelEdge: ResolverTypeWrapper<ComponentCarouselModelEdge>;
  ComponentCarouselModelFilter: ComponentCarouselModelFilter;
  ComponentCarouselModelResult: ResolverTypeWrapper<Omit<ComponentCarouselModelResult, '_references'> & { _references?: Maybe<Array<Maybe<ResolversTypes['Reference']>>> }>;
  ComponentCarouselModelResults: ResolverTypeWrapper<Omit<ComponentCarouselModelResults, '_references'> & { _references?: Maybe<Array<Maybe<ResolversTypes['Reference']>>> }>;
  ComponentStorytellingTextSlideModel: ResolverTypeWrapper<Omit<ComponentStorytellingTextSlideModel, 'background'> & { background?: Maybe<ResolversTypes['Reference']> }>;
  ComponentStorytellingTextSlideModelArrayFilter: ComponentStorytellingTextSlideModelArrayFilter;
  ComponentStorytellingTextSlideModelConnection: ResolverTypeWrapper<ComponentStorytellingTextSlideModelConnection>;
  ComponentStorytellingTextSlideModelEdge: ResolverTypeWrapper<ComponentStorytellingTextSlideModelEdge>;
  ComponentStorytellingTextSlideModelFilter: ComponentStorytellingTextSlideModelFilter;
  ComponentStorytellingTextSlideModelResult: ResolverTypeWrapper<Omit<ComponentStorytellingTextSlideModelResult, '_references'> & { _references?: Maybe<Array<Maybe<ResolversTypes['Reference']>>> }>;
  ComponentStorytellingTextSlideModelResults: ResolverTypeWrapper<Omit<ComponentStorytellingTextSlideModelResults, '_references'> & { _references?: Maybe<Array<Maybe<ResolversTypes['Reference']>>> }>;
  ComponentVideoModel: ResolverTypeWrapper<Omit<ComponentVideoModel, 'poster' | 'source'> & { poster?: Maybe<ResolversTypes['Reference']>, source?: Maybe<ResolversTypes['Reference']> }>;
  ComponentVideoModelArrayFilter: ComponentVideoModelArrayFilter;
  ComponentVideoModelConnection: ResolverTypeWrapper<ComponentVideoModelConnection>;
  ComponentVideoModelEdge: ResolverTypeWrapper<ComponentVideoModelEdge>;
  ComponentVideoModelFilter: ComponentVideoModelFilter;
  ComponentVideoModelResult: ResolverTypeWrapper<Omit<ComponentVideoModelResult, '_references'> & { _references?: Maybe<Array<Maybe<ResolversTypes['Reference']>>> }>;
  ComponentVideoModelResults: ResolverTypeWrapper<Omit<ComponentVideoModelResults, '_references'> & { _references?: Maybe<Array<Maybe<ResolversTypes['Reference']>>> }>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateArrayFilter: DateArrayFilter;
  DateArrayFilterExpression: DateArrayFilterExpression;
  DateFilter: DateFilter;
  DateFilterExpression: DateFilterExpression;
  DateOperator: DateOperator;
  DocumentRef: ResolverTypeWrapper<DocumentRef>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  FloatArrayFilter: FloatArrayFilter;
  FloatArrayFilterExpression: FloatArrayFilterExpression;
  FloatArrayMetadata: ResolverTypeWrapper<FloatArrayMetadata>;
  FloatFilter: FloatFilter;
  FloatFilterExpression: FloatFilterExpression;
  FloatMetadata: ResolverTypeWrapper<FloatMetadata>;
  FloatOperator: FloatOperator;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IDArrayFilter: IdArrayFilter;
  IDArrayFilterExpression: IdArrayFilterExpression;
  IDFilter: IdFilter;
  IDFilterExpression: IdFilterExpression;
  IDOperator: IdOperator;
  ImageRef: ResolverTypeWrapper<ImageRef>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntArrayFilter: IntArrayFilter;
  IntArrayFilterExpression: IntArrayFilterExpression;
  IntArrayMetadata: ResolverTypeWrapper<IntArrayMetadata>;
  IntFilter: IntFilter;
  IntFilterExpression: IntFilterExpression;
  IntMetadata: ResolverTypeWrapper<IntMetadata>;
  IntOperator: IntOperator;
  Json: ResolverTypeWrapper<Scalars['Json']>;
  LogOp: LogOp;
  ModelInfo: ResolverTypeWrapper<ModelInfo>;
  MultiFormatString: ResolverTypeWrapper<MultiFormatString>;
  MultiFormatStringArrayFilter: MultiFormatStringArrayFilter;
  MultiFormatStringFilter: MultiFormatStringFilter;
  MultimediaRef: ResolverTypeWrapper<MultimediaRef>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PageModel: ResolverTypeWrapper<Omit<PageModel, 'children'> & { children?: Maybe<Array<Maybe<ResolversTypes['AllFragmentModels']>>> }>;
  PageModelArrayFilter: PageModelArrayFilter;
  PageModelConnection: ResolverTypeWrapper<PageModelConnection>;
  PageModelEdge: ResolverTypeWrapper<PageModelEdge>;
  PageModelFilter: PageModelFilter;
  PageModelResult: ResolverTypeWrapper<Omit<PageModelResult, '_references'> & { _references?: Maybe<Array<Maybe<ResolversTypes['Reference']>>> }>;
  PageModelResults: ResolverTypeWrapper<Omit<PageModelResults, '_references'> & { _references?: Maybe<Array<Maybe<ResolversTypes['Reference']>>> }>;
  PageRef: ResolverTypeWrapper<PageRef>;
  QueryType: ResolverTypeWrapper<{}>;
  Reference: ResolversTypes['ArchiveRef'] | ResolversTypes['CatalogNboModel'] | ResolversTypes['CatalogProductModel'] | ResolversTypes['ComponentCardModel'] | ResolversTypes['ComponentCarouselModel'] | ResolversTypes['ComponentStorytellingTextSlideModel'] | ResolversTypes['ComponentVideoModel'] | ResolversTypes['DocumentRef'] | ResolversTypes['ImageRef'] | ResolversTypes['MultimediaRef'] | ResolversTypes['PageModel'] | ResolversTypes['PageRef'];
  String: ResolverTypeWrapper<Scalars['String']>;
  StringArrayFilter: StringArrayFilter;
  StringArrayFilterExpression: StringArrayFilterExpression;
  StringArrayMetadata: ResolverTypeWrapper<StringArrayMetadata>;
  StringFilter: StringFilter;
  StringFilterExpression: StringFilterExpression;
  StringMetadata: ResolverTypeWrapper<StringMetadata>;
  StringOperator: StringOperator;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  TimeArrayFilter: TimeArrayFilter;
  TimeArrayFilterExpression: TimeArrayFilterExpression;
  TimeFilter: TimeFilter;
  TimeFilterExpression: TimeFilterExpression;
  TimeOperator: TimeOperator;
  TypedMetaData: ResolverTypeWrapper<TypedMetaData>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AllFragmentModels: ResolversParentTypes['CatalogNboModel'] | ResolversParentTypes['CatalogProductModel'] | ResolversParentTypes['ComponentCardModel'] | ResolversParentTypes['ComponentCarouselModel'] | ResolversParentTypes['ComponentStorytellingTextSlideModel'] | ResolversParentTypes['ComponentVideoModel'] | ResolversParentTypes['PageModel'];
  ArchiveRef: ArchiveRef;
  Boolean: Scalars['Boolean'];
  BooleanArrayFilter: BooleanArrayFilter;
  BooleanArrayFilterExpression: BooleanArrayFilterExpression;
  BooleanArrayMetadata: BooleanArrayMetadata;
  BooleanFilter: BooleanFilter;
  BooleanFilterExpression: BooleanFilterExpression;
  BooleanMetadata: BooleanMetadata;
  Calendar: Scalars['Calendar'];
  CalendarArrayFilter: CalendarArrayFilter;
  CalendarArrayFilterExpression: CalendarArrayFilterExpression;
  CalendarArrayMetadata: CalendarArrayMetadata;
  CalendarFilter: CalendarFilter;
  CalendarFilterExpression: CalendarFilterExpression;
  CalendarMetadata: CalendarMetadata;
  CatalogNboModel: CatalogNboModel;
  CatalogNboModelArrayFilter: CatalogNboModelArrayFilter;
  CatalogNboModelConnection: CatalogNboModelConnection;
  CatalogNboModelEdge: CatalogNboModelEdge;
  CatalogNboModelFilter: CatalogNboModelFilter;
  CatalogNboModelResult: Omit<CatalogNboModelResult, '_references'> & { _references?: Maybe<Array<Maybe<ResolversParentTypes['Reference']>>> };
  CatalogNboModelResults: Omit<CatalogNboModelResults, '_references'> & { _references?: Maybe<Array<Maybe<ResolversParentTypes['Reference']>>> };
  CatalogProductModel: CatalogProductModel;
  CatalogProductModelArrayFilter: CatalogProductModelArrayFilter;
  CatalogProductModelConnection: CatalogProductModelConnection;
  CatalogProductModelEdge: CatalogProductModelEdge;
  CatalogProductModelFilter: CatalogProductModelFilter;
  CatalogProductModelResult: Omit<CatalogProductModelResult, '_references'> & { _references?: Maybe<Array<Maybe<ResolversParentTypes['Reference']>>> };
  CatalogProductModelResults: Omit<CatalogProductModelResults, '_references'> & { _references?: Maybe<Array<Maybe<ResolversParentTypes['Reference']>>> };
  ComponentCardModel: Omit<ComponentCardModel, 'image'> & { image?: Maybe<ResolversParentTypes['Reference']> };
  ComponentCardModelArrayFilter: ComponentCardModelArrayFilter;
  ComponentCardModelConnection: ComponentCardModelConnection;
  ComponentCardModelEdge: ComponentCardModelEdge;
  ComponentCardModelFilter: ComponentCardModelFilter;
  ComponentCardModelResult: Omit<ComponentCardModelResult, '_references'> & { _references?: Maybe<Array<Maybe<ResolversParentTypes['Reference']>>> };
  ComponentCardModelResults: Omit<ComponentCardModelResults, '_references'> & { _references?: Maybe<Array<Maybe<ResolversParentTypes['Reference']>>> };
  ComponentCarouselModel: Omit<ComponentCarouselModel, 'slides'> & { slides?: Maybe<Array<Maybe<ResolversParentTypes['AllFragmentModels']>>> };
  ComponentCarouselModelArrayFilter: ComponentCarouselModelArrayFilter;
  ComponentCarouselModelConnection: ComponentCarouselModelConnection;
  ComponentCarouselModelEdge: ComponentCarouselModelEdge;
  ComponentCarouselModelFilter: ComponentCarouselModelFilter;
  ComponentCarouselModelResult: Omit<ComponentCarouselModelResult, '_references'> & { _references?: Maybe<Array<Maybe<ResolversParentTypes['Reference']>>> };
  ComponentCarouselModelResults: Omit<ComponentCarouselModelResults, '_references'> & { _references?: Maybe<Array<Maybe<ResolversParentTypes['Reference']>>> };
  ComponentStorytellingTextSlideModel: Omit<ComponentStorytellingTextSlideModel, 'background'> & { background?: Maybe<ResolversParentTypes['Reference']> };
  ComponentStorytellingTextSlideModelArrayFilter: ComponentStorytellingTextSlideModelArrayFilter;
  ComponentStorytellingTextSlideModelConnection: ComponentStorytellingTextSlideModelConnection;
  ComponentStorytellingTextSlideModelEdge: ComponentStorytellingTextSlideModelEdge;
  ComponentStorytellingTextSlideModelFilter: ComponentStorytellingTextSlideModelFilter;
  ComponentStorytellingTextSlideModelResult: Omit<ComponentStorytellingTextSlideModelResult, '_references'> & { _references?: Maybe<Array<Maybe<ResolversParentTypes['Reference']>>> };
  ComponentStorytellingTextSlideModelResults: Omit<ComponentStorytellingTextSlideModelResults, '_references'> & { _references?: Maybe<Array<Maybe<ResolversParentTypes['Reference']>>> };
  ComponentVideoModel: Omit<ComponentVideoModel, 'poster' | 'source'> & { poster?: Maybe<ResolversParentTypes['Reference']>, source?: Maybe<ResolversParentTypes['Reference']> };
  ComponentVideoModelArrayFilter: ComponentVideoModelArrayFilter;
  ComponentVideoModelConnection: ComponentVideoModelConnection;
  ComponentVideoModelEdge: ComponentVideoModelEdge;
  ComponentVideoModelFilter: ComponentVideoModelFilter;
  ComponentVideoModelResult: Omit<ComponentVideoModelResult, '_references'> & { _references?: Maybe<Array<Maybe<ResolversParentTypes['Reference']>>> };
  ComponentVideoModelResults: Omit<ComponentVideoModelResults, '_references'> & { _references?: Maybe<Array<Maybe<ResolversParentTypes['Reference']>>> };
  Date: Scalars['Date'];
  DateArrayFilter: DateArrayFilter;
  DateArrayFilterExpression: DateArrayFilterExpression;
  DateFilter: DateFilter;
  DateFilterExpression: DateFilterExpression;
  DocumentRef: DocumentRef;
  Float: Scalars['Float'];
  FloatArrayFilter: FloatArrayFilter;
  FloatArrayFilterExpression: FloatArrayFilterExpression;
  FloatArrayMetadata: FloatArrayMetadata;
  FloatFilter: FloatFilter;
  FloatFilterExpression: FloatFilterExpression;
  FloatMetadata: FloatMetadata;
  ID: Scalars['ID'];
  IDArrayFilter: IdArrayFilter;
  IDArrayFilterExpression: IdArrayFilterExpression;
  IDFilter: IdFilter;
  IDFilterExpression: IdFilterExpression;
  ImageRef: ImageRef;
  Int: Scalars['Int'];
  IntArrayFilter: IntArrayFilter;
  IntArrayFilterExpression: IntArrayFilterExpression;
  IntArrayMetadata: IntArrayMetadata;
  IntFilter: IntFilter;
  IntFilterExpression: IntFilterExpression;
  IntMetadata: IntMetadata;
  Json: Scalars['Json'];
  ModelInfo: ModelInfo;
  MultiFormatString: MultiFormatString;
  MultiFormatStringArrayFilter: MultiFormatStringArrayFilter;
  MultiFormatStringFilter: MultiFormatStringFilter;
  MultimediaRef: MultimediaRef;
  PageInfo: PageInfo;
  PageModel: Omit<PageModel, 'children'> & { children?: Maybe<Array<Maybe<ResolversParentTypes['AllFragmentModels']>>> };
  PageModelArrayFilter: PageModelArrayFilter;
  PageModelConnection: PageModelConnection;
  PageModelEdge: PageModelEdge;
  PageModelFilter: PageModelFilter;
  PageModelResult: Omit<PageModelResult, '_references'> & { _references?: Maybe<Array<Maybe<ResolversParentTypes['Reference']>>> };
  PageModelResults: Omit<PageModelResults, '_references'> & { _references?: Maybe<Array<Maybe<ResolversParentTypes['Reference']>>> };
  PageRef: PageRef;
  QueryType: {};
  Reference: ResolversParentTypes['ArchiveRef'] | ResolversParentTypes['CatalogNboModel'] | ResolversParentTypes['CatalogProductModel'] | ResolversParentTypes['ComponentCardModel'] | ResolversParentTypes['ComponentCarouselModel'] | ResolversParentTypes['ComponentStorytellingTextSlideModel'] | ResolversParentTypes['ComponentVideoModel'] | ResolversParentTypes['DocumentRef'] | ResolversParentTypes['ImageRef'] | ResolversParentTypes['MultimediaRef'] | ResolversParentTypes['PageModel'] | ResolversParentTypes['PageRef'];
  String: Scalars['String'];
  StringArrayFilter: StringArrayFilter;
  StringArrayFilterExpression: StringArrayFilterExpression;
  StringArrayMetadata: StringArrayMetadata;
  StringFilter: StringFilter;
  StringFilterExpression: StringFilterExpression;
  StringMetadata: StringMetadata;
  Time: Scalars['Time'];
  TimeArrayFilter: TimeArrayFilter;
  TimeArrayFilterExpression: TimeArrayFilterExpression;
  TimeFilter: TimeFilter;
  TimeFilterExpression: TimeFilterExpression;
  TypedMetaData: TypedMetaData;
};

export type ConnectionDirectiveArgs = {
  for: Scalars['String'];
};

export type ConnectionDirectiveResolver<Result, Parent, ContextType = any, Args = ConnectionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type FetcherDirectiveArgs = {
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type FetcherDirectiveResolver<Result, Parent, ContextType = any, Args = FetcherDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ResolverDirectiveArgs = {
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type ResolverDirectiveResolver<Result, Parent, ContextType = any, Args = ResolverDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AllFragmentModelsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AllFragmentModels'] = ResolversParentTypes['AllFragmentModels']> = {
  __resolveType: TypeResolveFn<'CatalogNboModel' | 'CatalogProductModel' | 'ComponentCardModel' | 'ComponentCarouselModel' | 'ComponentStorytellingTextSlideModel' | 'ComponentVideoModel' | 'PageModel', ParentType, ContextType>;
};

export type ArchiveRefResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArchiveRef'] = ResolversParentTypes['ArchiveRef']> = {
  _authorUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _path?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _publishUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BooleanArrayMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['BooleanArrayMetadata'] = ResolversParentTypes['BooleanArrayMetadata']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Array<Maybe<ResolversTypes['Boolean']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BooleanMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['BooleanMetadata'] = ResolversParentTypes['BooleanMetadata']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CalendarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Calendar'], any> {
  name: 'Calendar';
}

export type CalendarArrayMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalendarArrayMetadata'] = ResolversParentTypes['CalendarArrayMetadata']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Array<Maybe<ResolversTypes['Calendar']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CalendarMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalendarMetadata'] = ResolversParentTypes['CalendarMetadata']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Calendar'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CatalogNboModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['CatalogNboModel'] = ResolversParentTypes['CatalogNboModel']> = {
  _metadata?: Resolver<Maybe<ResolversTypes['TypedMetaData']>, ParentType, ContextType>;
  _model?: Resolver<Maybe<ResolversTypes['ModelInfo']>, ParentType, ContextType>;
  _path?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _variation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _variations?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  costActivation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  costRecurring?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['CatalogProductModel']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CatalogNboModelConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CatalogNboModelConnection'] = ResolversParentTypes['CatalogNboModelConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['CatalogNboModelEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CatalogNboModelEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CatalogNboModelEdge'] = ResolversParentTypes['CatalogNboModelEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CatalogNboModel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CatalogNboModelResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CatalogNboModelResult'] = ResolversParentTypes['CatalogNboModelResult']> = {
  _references?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reference']>>>, ParentType, ContextType>;
  item?: Resolver<ResolversTypes['CatalogNboModel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CatalogNboModelResultsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CatalogNboModelResults'] = ResolversParentTypes['CatalogNboModelResults']> = {
  _references?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reference']>>>, ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['CatalogNboModel']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CatalogProductModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['CatalogProductModel'] = ResolversParentTypes['CatalogProductModel']> = {
  _metadata?: Resolver<Maybe<ResolversTypes['TypedMetaData']>, ParentType, ContextType>;
  _model?: Resolver<Maybe<ResolversTypes['ModelInfo']>, ParentType, ContextType>;
  _path?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _variation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _variations?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  activationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  clickToCallChannel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costActivationDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costActivationFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costAdditionalInformation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  costRecurringFrequency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extraTypCta?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extraTypDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extraTypUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  moreInfo?: Resolver<Maybe<ResolversTypes['MultiFormatString']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  whatsappChannel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  whatsappNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CatalogProductModelConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CatalogProductModelConnection'] = ResolversParentTypes['CatalogProductModelConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['CatalogProductModelEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CatalogProductModelEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CatalogProductModelEdge'] = ResolversParentTypes['CatalogProductModelEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CatalogProductModel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CatalogProductModelResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CatalogProductModelResult'] = ResolversParentTypes['CatalogProductModelResult']> = {
  _references?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reference']>>>, ParentType, ContextType>;
  item?: Resolver<ResolversTypes['CatalogProductModel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CatalogProductModelResultsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CatalogProductModelResults'] = ResolversParentTypes['CatalogProductModelResults']> = {
  _references?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reference']>>>, ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['CatalogProductModel']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCardModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentCardModel'] = ResolversParentTypes['ComponentCardModel']> = {
  _metadata?: Resolver<Maybe<ResolversTypes['TypedMetaData']>, ParentType, ContextType>;
  _model?: Resolver<Maybe<ResolversTypes['ModelInfo']>, ParentType, ContextType>;
  _path?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _variation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _variations?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['MultiFormatString']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  imagePosition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCardModelConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentCardModelConnection'] = ResolversParentTypes['ComponentCardModelConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['ComponentCardModelEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCardModelEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentCardModelEdge'] = ResolversParentTypes['ComponentCardModelEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ComponentCardModel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCardModelResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentCardModelResult'] = ResolversParentTypes['ComponentCardModelResult']> = {
  _references?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reference']>>>, ParentType, ContextType>;
  item?: Resolver<ResolversTypes['ComponentCardModel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCardModelResultsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentCardModelResults'] = ResolversParentTypes['ComponentCardModelResults']> = {
  _references?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reference']>>>, ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentCardModel']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCarouselModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentCarouselModel'] = ResolversParentTypes['ComponentCarouselModel']> = {
  _metadata?: Resolver<Maybe<ResolversTypes['TypedMetaData']>, ParentType, ContextType>;
  _model?: Resolver<Maybe<ResolversTypes['ModelInfo']>, ParentType, ContextType>;
  _path?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _variation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _variations?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slides?: Resolver<Maybe<Array<Maybe<ResolversTypes['AllFragmentModels']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCarouselModelConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentCarouselModelConnection'] = ResolversParentTypes['ComponentCarouselModelConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['ComponentCarouselModelEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCarouselModelEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentCarouselModelEdge'] = ResolversParentTypes['ComponentCarouselModelEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ComponentCarouselModel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCarouselModelResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentCarouselModelResult'] = ResolversParentTypes['ComponentCarouselModelResult']> = {
  _references?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reference']>>>, ParentType, ContextType>;
  item?: Resolver<ResolversTypes['ComponentCarouselModel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCarouselModelResultsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentCarouselModelResults'] = ResolversParentTypes['ComponentCarouselModelResults']> = {
  _references?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reference']>>>, ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentCarouselModel']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentStorytellingTextSlideModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentStorytellingTextSlideModel'] = ResolversParentTypes['ComponentStorytellingTextSlideModel']> = {
  _metadata?: Resolver<Maybe<ResolversTypes['TypedMetaData']>, ParentType, ContextType>;
  _model?: Resolver<Maybe<ResolversTypes['ModelInfo']>, ParentType, ContextType>;
  _path?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _variation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _variations?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  background?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['MultiFormatString']>, ParentType, ContextType>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentStorytellingTextSlideModelConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentStorytellingTextSlideModelConnection'] = ResolversParentTypes['ComponentStorytellingTextSlideModelConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['ComponentStorytellingTextSlideModelEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentStorytellingTextSlideModelEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentStorytellingTextSlideModelEdge'] = ResolversParentTypes['ComponentStorytellingTextSlideModelEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ComponentStorytellingTextSlideModel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentStorytellingTextSlideModelResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentStorytellingTextSlideModelResult'] = ResolversParentTypes['ComponentStorytellingTextSlideModelResult']> = {
  _references?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reference']>>>, ParentType, ContextType>;
  item?: Resolver<ResolversTypes['ComponentStorytellingTextSlideModel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentStorytellingTextSlideModelResultsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentStorytellingTextSlideModelResults'] = ResolversParentTypes['ComponentStorytellingTextSlideModelResults']> = {
  _references?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reference']>>>, ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentStorytellingTextSlideModel']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentVideoModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentVideoModel'] = ResolversParentTypes['ComponentVideoModel']> = {
  _metadata?: Resolver<Maybe<ResolversTypes['TypedMetaData']>, ParentType, ContextType>;
  _model?: Resolver<Maybe<ResolversTypes['ModelInfo']>, ParentType, ContextType>;
  _path?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _variation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _variations?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  poster?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['Reference']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentVideoModelConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentVideoModelConnection'] = ResolversParentTypes['ComponentVideoModelConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['ComponentVideoModelEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentVideoModelEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentVideoModelEdge'] = ResolversParentTypes['ComponentVideoModelEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ComponentVideoModel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentVideoModelResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentVideoModelResult'] = ResolversParentTypes['ComponentVideoModelResult']> = {
  _references?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reference']>>>, ParentType, ContextType>;
  item?: Resolver<ResolversTypes['ComponentVideoModel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentVideoModelResultsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentVideoModelResults'] = ResolversParentTypes['ComponentVideoModelResults']> = {
  _references?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reference']>>>, ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentVideoModel']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DocumentRefResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentRef'] = ResolversParentTypes['DocumentRef']> = {
  _authorUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _path?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _publishUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FloatArrayMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['FloatArrayMetadata'] = ResolversParentTypes['FloatArrayMetadata']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Array<Maybe<ResolversTypes['Float']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FloatMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['FloatMetadata'] = ResolversParentTypes['FloatMetadata']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageRefResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageRef'] = ResolversParentTypes['ImageRef']> = {
  _authorUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _path?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _publishUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IntArrayMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['IntArrayMetadata'] = ResolversParentTypes['IntArrayMetadata']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IntMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['IntMetadata'] = ResolversParentTypes['IntMetadata']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
  name: 'Json';
}

export type ModelInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ModelInfo'] = ResolversParentTypes['ModelInfo']> = {
  _path?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MultiFormatStringResolvers<ContextType = any, ParentType extends ResolversParentTypes['MultiFormatString'] = ResolversParentTypes['MultiFormatString']> = {
  html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  json?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  markdown?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  plaintext?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MultimediaRefResolvers<ContextType = any, ParentType extends ResolversParentTypes['MultimediaRef'] = ResolversParentTypes['MultimediaRef']> = {
  _authorUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _path?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _publishUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageModel'] = ResolversParentTypes['PageModel']> = {
  _metadata?: Resolver<Maybe<ResolversTypes['TypedMetaData']>, ParentType, ContextType>;
  _model?: Resolver<Maybe<ResolversTypes['ModelInfo']>, ParentType, ContextType>;
  _path?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _variation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _variations?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<Maybe<ResolversTypes['AllFragmentModels']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageModelConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageModelConnection'] = ResolversParentTypes['PageModelConnection']> = {
  edges?: Resolver<Array<Maybe<ResolversTypes['PageModelEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageModelEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageModelEdge'] = ResolversParentTypes['PageModelEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PageModel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageModelResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageModelResult'] = ResolversParentTypes['PageModelResult']> = {
  _references?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reference']>>>, ParentType, ContextType>;
  item?: Resolver<ResolversTypes['PageModel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageModelResultsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageModelResults'] = ResolversParentTypes['PageModelResults']> = {
  _references?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reference']>>>, ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['PageModel']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageRefResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageRef'] = ResolversParentTypes['PageRef']> = {
  _authorUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _path?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _publishUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryType'] = ResolversParentTypes['QueryType']> = {
  catalogNboByPath?: Resolver<ResolversTypes['CatalogNboModelResult'], ParentType, ContextType, RequireFields<QueryTypeCatalogNboByPathArgs, '_path'>>;
  catalogNboList?: Resolver<ResolversTypes['CatalogNboModelResults'], ParentType, ContextType, Partial<QueryTypeCatalogNboListArgs>>;
  catalogNboPaginated?: Resolver<ResolversTypes['CatalogNboModelConnection'], ParentType, ContextType, Partial<QueryTypeCatalogNboPaginatedArgs>>;
  catalogProductByPath?: Resolver<ResolversTypes['CatalogProductModelResult'], ParentType, ContextType, RequireFields<QueryTypeCatalogProductByPathArgs, '_path'>>;
  catalogProductList?: Resolver<ResolversTypes['CatalogProductModelResults'], ParentType, ContextType, Partial<QueryTypeCatalogProductListArgs>>;
  catalogProductPaginated?: Resolver<ResolversTypes['CatalogProductModelConnection'], ParentType, ContextType, Partial<QueryTypeCatalogProductPaginatedArgs>>;
  componentCardByPath?: Resolver<ResolversTypes['ComponentCardModelResult'], ParentType, ContextType, RequireFields<QueryTypeComponentCardByPathArgs, '_path'>>;
  componentCardList?: Resolver<ResolversTypes['ComponentCardModelResults'], ParentType, ContextType, Partial<QueryTypeComponentCardListArgs>>;
  componentCardPaginated?: Resolver<ResolversTypes['ComponentCardModelConnection'], ParentType, ContextType, Partial<QueryTypeComponentCardPaginatedArgs>>;
  componentCarouselByPath?: Resolver<ResolversTypes['ComponentCarouselModelResult'], ParentType, ContextType, RequireFields<QueryTypeComponentCarouselByPathArgs, '_path'>>;
  componentCarouselList?: Resolver<ResolversTypes['ComponentCarouselModelResults'], ParentType, ContextType, Partial<QueryTypeComponentCarouselListArgs>>;
  componentCarouselPaginated?: Resolver<ResolversTypes['ComponentCarouselModelConnection'], ParentType, ContextType, Partial<QueryTypeComponentCarouselPaginatedArgs>>;
  componentStorytellingTextSlideByPath?: Resolver<ResolversTypes['ComponentStorytellingTextSlideModelResult'], ParentType, ContextType, RequireFields<QueryTypeComponentStorytellingTextSlideByPathArgs, '_path'>>;
  componentStorytellingTextSlideList?: Resolver<ResolversTypes['ComponentStorytellingTextSlideModelResults'], ParentType, ContextType, Partial<QueryTypeComponentStorytellingTextSlideListArgs>>;
  componentStorytellingTextSlidePaginated?: Resolver<ResolversTypes['ComponentStorytellingTextSlideModelConnection'], ParentType, ContextType, Partial<QueryTypeComponentStorytellingTextSlidePaginatedArgs>>;
  componentVideoByPath?: Resolver<ResolversTypes['ComponentVideoModelResult'], ParentType, ContextType, RequireFields<QueryTypeComponentVideoByPathArgs, '_path'>>;
  componentVideoList?: Resolver<ResolversTypes['ComponentVideoModelResults'], ParentType, ContextType, Partial<QueryTypeComponentVideoListArgs>>;
  componentVideoPaginated?: Resolver<ResolversTypes['ComponentVideoModelConnection'], ParentType, ContextType, Partial<QueryTypeComponentVideoPaginatedArgs>>;
  pageByPath?: Resolver<ResolversTypes['PageModelResult'], ParentType, ContextType, RequireFields<QueryTypePageByPathArgs, '_path'>>;
  pageList?: Resolver<ResolversTypes['PageModelResults'], ParentType, ContextType, Partial<QueryTypePageListArgs>>;
  pagePaginated?: Resolver<ResolversTypes['PageModelConnection'], ParentType, ContextType, Partial<QueryTypePagePaginatedArgs>>;
};

export type ReferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reference'] = ResolversParentTypes['Reference']> = {
  __resolveType: TypeResolveFn<'ArchiveRef' | 'CatalogNboModel' | 'CatalogProductModel' | 'ComponentCardModel' | 'ComponentCarouselModel' | 'ComponentStorytellingTextSlideModel' | 'ComponentVideoModel' | 'DocumentRef' | 'ImageRef' | 'MultimediaRef' | 'PageModel' | 'PageRef', ParentType, ContextType>;
};

export type StringArrayMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['StringArrayMetadata'] = ResolversParentTypes['StringArrayMetadata']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StringMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['StringMetadata'] = ResolversParentTypes['StringMetadata']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type TypedMetaDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['TypedMetaData'] = ResolversParentTypes['TypedMetaData']> = {
  booleanArrayMetadata?: Resolver<Array<Maybe<ResolversTypes['BooleanArrayMetadata']>>, ParentType, ContextType>;
  booleanMetadata?: Resolver<Array<Maybe<ResolversTypes['BooleanMetadata']>>, ParentType, ContextType>;
  calendarArrayMetadata?: Resolver<Array<Maybe<ResolversTypes['CalendarArrayMetadata']>>, ParentType, ContextType>;
  calendarMetadata?: Resolver<Array<Maybe<ResolversTypes['CalendarMetadata']>>, ParentType, ContextType>;
  floatArrayMetadata?: Resolver<Array<Maybe<ResolversTypes['FloatArrayMetadata']>>, ParentType, ContextType>;
  floatMetadata?: Resolver<Array<Maybe<ResolversTypes['FloatMetadata']>>, ParentType, ContextType>;
  intArrayMetadata?: Resolver<Array<Maybe<ResolversTypes['IntArrayMetadata']>>, ParentType, ContextType>;
  intMetadata?: Resolver<Array<Maybe<ResolversTypes['IntMetadata']>>, ParentType, ContextType>;
  stringArrayMetadata?: Resolver<Array<Maybe<ResolversTypes['StringArrayMetadata']>>, ParentType, ContextType>;
  stringMetadata?: Resolver<Array<Maybe<ResolversTypes['StringMetadata']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AllFragmentModels?: AllFragmentModelsResolvers<ContextType>;
  ArchiveRef?: ArchiveRefResolvers<ContextType>;
  BooleanArrayMetadata?: BooleanArrayMetadataResolvers<ContextType>;
  BooleanMetadata?: BooleanMetadataResolvers<ContextType>;
  Calendar?: GraphQLScalarType;
  CalendarArrayMetadata?: CalendarArrayMetadataResolvers<ContextType>;
  CalendarMetadata?: CalendarMetadataResolvers<ContextType>;
  CatalogNboModel?: CatalogNboModelResolvers<ContextType>;
  CatalogNboModelConnection?: CatalogNboModelConnectionResolvers<ContextType>;
  CatalogNboModelEdge?: CatalogNboModelEdgeResolvers<ContextType>;
  CatalogNboModelResult?: CatalogNboModelResultResolvers<ContextType>;
  CatalogNboModelResults?: CatalogNboModelResultsResolvers<ContextType>;
  CatalogProductModel?: CatalogProductModelResolvers<ContextType>;
  CatalogProductModelConnection?: CatalogProductModelConnectionResolvers<ContextType>;
  CatalogProductModelEdge?: CatalogProductModelEdgeResolvers<ContextType>;
  CatalogProductModelResult?: CatalogProductModelResultResolvers<ContextType>;
  CatalogProductModelResults?: CatalogProductModelResultsResolvers<ContextType>;
  ComponentCardModel?: ComponentCardModelResolvers<ContextType>;
  ComponentCardModelConnection?: ComponentCardModelConnectionResolvers<ContextType>;
  ComponentCardModelEdge?: ComponentCardModelEdgeResolvers<ContextType>;
  ComponentCardModelResult?: ComponentCardModelResultResolvers<ContextType>;
  ComponentCardModelResults?: ComponentCardModelResultsResolvers<ContextType>;
  ComponentCarouselModel?: ComponentCarouselModelResolvers<ContextType>;
  ComponentCarouselModelConnection?: ComponentCarouselModelConnectionResolvers<ContextType>;
  ComponentCarouselModelEdge?: ComponentCarouselModelEdgeResolvers<ContextType>;
  ComponentCarouselModelResult?: ComponentCarouselModelResultResolvers<ContextType>;
  ComponentCarouselModelResults?: ComponentCarouselModelResultsResolvers<ContextType>;
  ComponentStorytellingTextSlideModel?: ComponentStorytellingTextSlideModelResolvers<ContextType>;
  ComponentStorytellingTextSlideModelConnection?: ComponentStorytellingTextSlideModelConnectionResolvers<ContextType>;
  ComponentStorytellingTextSlideModelEdge?: ComponentStorytellingTextSlideModelEdgeResolvers<ContextType>;
  ComponentStorytellingTextSlideModelResult?: ComponentStorytellingTextSlideModelResultResolvers<ContextType>;
  ComponentStorytellingTextSlideModelResults?: ComponentStorytellingTextSlideModelResultsResolvers<ContextType>;
  ComponentVideoModel?: ComponentVideoModelResolvers<ContextType>;
  ComponentVideoModelConnection?: ComponentVideoModelConnectionResolvers<ContextType>;
  ComponentVideoModelEdge?: ComponentVideoModelEdgeResolvers<ContextType>;
  ComponentVideoModelResult?: ComponentVideoModelResultResolvers<ContextType>;
  ComponentVideoModelResults?: ComponentVideoModelResultsResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DocumentRef?: DocumentRefResolvers<ContextType>;
  FloatArrayMetadata?: FloatArrayMetadataResolvers<ContextType>;
  FloatMetadata?: FloatMetadataResolvers<ContextType>;
  ImageRef?: ImageRefResolvers<ContextType>;
  IntArrayMetadata?: IntArrayMetadataResolvers<ContextType>;
  IntMetadata?: IntMetadataResolvers<ContextType>;
  Json?: GraphQLScalarType;
  ModelInfo?: ModelInfoResolvers<ContextType>;
  MultiFormatString?: MultiFormatStringResolvers<ContextType>;
  MultimediaRef?: MultimediaRefResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PageModel?: PageModelResolvers<ContextType>;
  PageModelConnection?: PageModelConnectionResolvers<ContextType>;
  PageModelEdge?: PageModelEdgeResolvers<ContextType>;
  PageModelResult?: PageModelResultResolvers<ContextType>;
  PageModelResults?: PageModelResultsResolvers<ContextType>;
  PageRef?: PageRefResolvers<ContextType>;
  QueryType?: QueryTypeResolvers<ContextType>;
  Reference?: ReferenceResolvers<ContextType>;
  StringArrayMetadata?: StringArrayMetadataResolvers<ContextType>;
  StringMetadata?: StringMetadataResolvers<ContextType>;
  Time?: GraphQLScalarType;
  TypedMetaData?: TypedMetaDataResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  connection?: ConnectionDirectiveResolver<any, any, ContextType>;
  fetcher?: FetcherDirectiveResolver<any, any, ContextType>;
  resolver?: ResolverDirectiveResolver<any, any, ContextType>;
};
