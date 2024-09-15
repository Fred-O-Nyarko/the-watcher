export * from "./enums";

export enum AppearanceStates {
  Automatic = "Automatic",
  Light = "Light Theme",
  Dark = "Dark Theme",
}

export enum ModalInView {
  None,
  Appearance,
  LogOut,
}

export type FindOperatorType =
  | "not"
  | "lessThan"
  | "lessThanOrEqual"
  | "moreThan"
  | "moreThanOrEqual"
  | "equal"
  | "between"
  | "in"
  | "any"
  | "isNull"
  | "ilike"
  | "like"
  | "raw"
  | "arrayContains"
  | "arrayContainedBy"
  | "arrayOverlap"
  | "and"
  | "jsonContains";

export type TPartialOperatorMap<V> = Partial<TOperatorMap<V>>;

export interface TOperatorMap<V> {
  $not: V | TPartialOperatorMap<V>;
  $lessThan: V | TPartialOperatorMap<V>;
  $lessThanOrEqual: V | TPartialOperatorMap<V>;
  $moreThan: V | TPartialOperatorMap<V>;
  $moreThanOrEqual: V | TPartialOperatorMap<V>;
  $equal: V | TPartialOperatorMap<V>;
  $like: V | TPartialOperatorMap<V>;
  $ilike: V | TPartialOperatorMap<V>;
  $between: [V | TPartialOperatorMap<V>, V | TPartialOperatorMap<V>];
  $in: V[] | TPartialOperatorMap<V>;
  $any: V[] | TPartialOperatorMap<V>;
  $isNull: null;
  $arrayContains: V[] | TPartialOperatorMap<V>;
  $arrayContainedBy: V[] | TPartialOperatorMap<V>;
  $arrayOverlap: V[] | TPartialOperatorMap<V>;
  $raw: V;
}

export type TFindOptionsWhereProperty<Property> = Property extends object
  ? NonNullable<Property>
  : NonNullable<TPartialOperatorMap<Property>>;

export type FindFilter<Entity> = {
  [P in keyof Entity]?: P extends "toString"
    ? unknown
    : TFindOptionsWhereProperty<
        Entity[P] extends (infer I)[]
          ? NonNullable<TPartialOperatorMap<I>>
          : Entity[P] extends "toString"
            ? NonNullable<TPartialOperatorMap<Entity[P]>>
            : NonNullable<FindFilter<Entity[P]>>
      >;
};

export type TOperatorMapKey = `$${FindOperatorType}`;

export type FindOptionsOrderProperty<Property> =
  Property extends Promise<infer I>
    ? FindOptionsOrderProperty<NonNullable<I>>
    : Property extends (infer I)[]
      ? FindOptionsOrderProperty<NonNullable<I>>
      : Property extends () => void
        ? never
        : Property extends string
          ? FindOptionsOrderValue
          : Property extends number
            ? FindOptionsOrderValue
            : Property extends boolean
              ? FindOptionsOrderValue
              : Property extends Buffer
                ? FindOptionsOrderValue
                : Property extends Date
                  ? FindOptionsOrderValue
                  : Property extends object
                    ? FindOrder<Property> | FindOptionsOrderValue
                    : FindOptionsOrderValue;
/**
 * Order by find options.
 */
export type FindOrder<Entity> = {
  [P in keyof Entity]?: P extends "toString"
    ? unknown
    : FindOptionsOrderProperty<NonNullable<Entity[P]>>;
};
/**
 * Value of order by in find options.
 */
type FindOptionsOrderValue =
  | "ASC"
  | "DESC"
  | "asc"
  | "desc"
  | 1
  | -1
  | {
      direction?: "asc" | "desc" | "ASC" | "DESC";
      nulls?: "first" | "last" | "FIRST" | "LAST";
    };

export type Filter<E> = FindFilter<E>[] | FindFilter<E>;
