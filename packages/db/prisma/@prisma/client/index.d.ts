
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Refund
 * 
 */
export type Refund = $Result.DefaultSelection<Prisma.$RefundPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model Subsection
 * 
 */
export type Subsection = $Result.DefaultSelection<Prisma.$SubsectionPayload>
/**
 * Model RatingAndReview
 * 
 */
export type RatingAndReview = $Result.DefaultSelection<Prisma.$RatingAndReviewPayload>
/**
 * Model CourseProgress
 * 
 */
export type CourseProgress = $Result.DefaultSelection<Prisma.$CourseProgressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CourseStatus: {
  Draft: 'Draft',
  Published: 'Published'
};

export type CourseStatus = (typeof CourseStatus)[keyof typeof CourseStatus]

}

export type CourseStatus = $Enums.CourseStatus

export const CourseStatus: typeof $Enums.CourseStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Orders
 * const orders = await prisma.order.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Orders
   * const orders = await prisma.order.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refund`: Exposes CRUD operations for the **Refund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refunds
    * const refunds = await prisma.refund.findMany()
    * ```
    */
  get refund(): Prisma.RefundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subsection`: Exposes CRUD operations for the **Subsection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subsections
    * const subsections = await prisma.subsection.findMany()
    * ```
    */
  get subsection(): Prisma.SubsectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ratingAndReview`: Exposes CRUD operations for the **RatingAndReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RatingAndReviews
    * const ratingAndReviews = await prisma.ratingAndReview.findMany()
    * ```
    */
  get ratingAndReview(): Prisma.RatingAndReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseProgress`: Exposes CRUD operations for the **CourseProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseProgresses
    * const courseProgresses = await prisma.courseProgress.findMany()
    * ```
    */
  get courseProgress(): Prisma.CourseProgressDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Order: 'Order',
    Refund: 'Refund',
    User: 'User',
    RefreshToken: 'RefreshToken',
    Course: 'Course',
    Category: 'Category',
    Section: 'Section',
    Subsection: 'Subsection',
    RatingAndReview: 'RatingAndReview',
    CourseProgress: 'CourseProgress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "order" | "refund" | "user" | "refreshToken" | "course" | "category" | "section" | "subsection" | "ratingAndReview" | "courseProgress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Refund: {
        payload: Prisma.$RefundPayload<ExtArgs>
        fields: Prisma.RefundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          findFirst: {
            args: Prisma.RefundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          findMany: {
            args: Prisma.RefundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>[]
          }
          create: {
            args: Prisma.RefundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          createMany: {
            args: Prisma.RefundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>[]
          }
          delete: {
            args: Prisma.RefundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          update: {
            args: Prisma.RefundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          deleteMany: {
            args: Prisma.RefundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>[]
          }
          upsert: {
            args: Prisma.RefundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          aggregate: {
            args: Prisma.RefundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefund>
          }
          groupBy: {
            args: Prisma.RefundGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefundGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefundCountArgs<ExtArgs>
            result: $Utils.Optional<RefundCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      Subsection: {
        payload: Prisma.$SubsectionPayload<ExtArgs>
        fields: Prisma.SubsectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubsectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubsectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload>
          }
          findFirst: {
            args: Prisma.SubsectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubsectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload>
          }
          findMany: {
            args: Prisma.SubsectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload>[]
          }
          create: {
            args: Prisma.SubsectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload>
          }
          createMany: {
            args: Prisma.SubsectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubsectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload>[]
          }
          delete: {
            args: Prisma.SubsectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload>
          }
          update: {
            args: Prisma.SubsectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload>
          }
          deleteMany: {
            args: Prisma.SubsectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubsectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubsectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload>[]
          }
          upsert: {
            args: Prisma.SubsectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload>
          }
          aggregate: {
            args: Prisma.SubsectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubsection>
          }
          groupBy: {
            args: Prisma.SubsectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubsectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubsectionCountArgs<ExtArgs>
            result: $Utils.Optional<SubsectionCountAggregateOutputType> | number
          }
        }
      }
      RatingAndReview: {
        payload: Prisma.$RatingAndReviewPayload<ExtArgs>
        fields: Prisma.RatingAndReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingAndReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingAndReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingAndReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingAndReviewPayload>
          }
          findFirst: {
            args: Prisma.RatingAndReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingAndReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingAndReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingAndReviewPayload>
          }
          findMany: {
            args: Prisma.RatingAndReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingAndReviewPayload>[]
          }
          create: {
            args: Prisma.RatingAndReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingAndReviewPayload>
          }
          createMany: {
            args: Prisma.RatingAndReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingAndReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingAndReviewPayload>[]
          }
          delete: {
            args: Prisma.RatingAndReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingAndReviewPayload>
          }
          update: {
            args: Prisma.RatingAndReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingAndReviewPayload>
          }
          deleteMany: {
            args: Prisma.RatingAndReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingAndReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingAndReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingAndReviewPayload>[]
          }
          upsert: {
            args: Prisma.RatingAndReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingAndReviewPayload>
          }
          aggregate: {
            args: Prisma.RatingAndReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRatingAndReview>
          }
          groupBy: {
            args: Prisma.RatingAndReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingAndReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingAndReviewCountArgs<ExtArgs>
            result: $Utils.Optional<RatingAndReviewCountAggregateOutputType> | number
          }
        }
      }
      CourseProgress: {
        payload: Prisma.$CourseProgressPayload<ExtArgs>
        fields: Prisma.CourseProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          findFirst: {
            args: Prisma.CourseProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          findMany: {
            args: Prisma.CourseProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>[]
          }
          create: {
            args: Prisma.CourseProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          createMany: {
            args: Prisma.CourseProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>[]
          }
          delete: {
            args: Prisma.CourseProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          update: {
            args: Prisma.CourseProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          deleteMany: {
            args: Prisma.CourseProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>[]
          }
          upsert: {
            args: Prisma.CourseProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          aggregate: {
            args: Prisma.CourseProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseProgress>
          }
          groupBy: {
            args: Prisma.CourseProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseProgressCountArgs<ExtArgs>
            result: $Utils.Optional<CourseProgressCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    order?: OrderOmit
    refund?: RefundOmit
    user?: UserOmit
    refreshToken?: RefreshTokenOmit
    course?: CourseOmit
    category?: CategoryOmit
    section?: SectionOmit
    subsection?: SubsectionOmit
    ratingAndReview?: RatingAndReviewOmit
    courseProgress?: CourseProgressOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    refunds: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refunds?: boolean | OrderCountOutputTypeCountRefundsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountRefundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefundWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
    coursesCreated: number
    coursesEnrolled: number
    ratings: number
    courseProgress: number
    refreshTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    coursesCreated?: boolean | UserCountOutputTypeCountCoursesCreatedArgs
    coursesEnrolled?: boolean | UserCountOutputTypeCountCoursesEnrolledArgs
    ratings?: boolean | UserCountOutputTypeCountRatingsArgs
    courseProgress?: boolean | UserCountOutputTypeCountCourseProgressArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoursesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoursesEnrolledArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingAndReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCourseProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    studentsEnrolled: number
    sections: number
    ratings: number
    courseProgress: number
    orders: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentsEnrolled?: boolean | CourseCountOutputTypeCountStudentsEnrolledArgs
    sections?: boolean | CourseCountOutputTypeCountSectionsArgs
    ratings?: boolean | CourseCountOutputTypeCountRatingsArgs
    courseProgress?: boolean | CourseCountOutputTypeCountCourseProgressArgs
    orders?: boolean | CourseCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountStudentsEnrolledArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingAndReviewWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseProgressWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    courses: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | CategoryCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    subsections: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subsections?: boolean | SectionCountOutputTypeCountSubsectionsArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountSubsectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubsectionWhereInput
  }


  /**
   * Count Type SubsectionCountOutputType
   */

  export type SubsectionCountOutputType = {
    completedBy: number
  }

  export type SubsectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedBy?: boolean | SubsectionCountOutputTypeCountCompletedByArgs
  }

  // Custom InputTypes
  /**
   * SubsectionCountOutputType without action
   */
  export type SubsectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsectionCountOutputType
     */
    select?: SubsectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubsectionCountOutputType without action
   */
  export type SubsectionCountOutputTypeCountCompletedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseProgressWhereInput
  }


  /**
   * Count Type CourseProgressCountOutputType
   */

  export type CourseProgressCountOutputType = {
    completedVideos: number
  }

  export type CourseProgressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedVideos?: boolean | CourseProgressCountOutputTypeCountCompletedVideosArgs
  }

  // Custom InputTypes
  /**
   * CourseProgressCountOutputType without action
   */
  export type CourseProgressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgressCountOutputType
     */
    select?: CourseProgressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseProgressCountOutputType without action
   */
  export type CourseProgressCountOutputTypeCountCompletedVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubsectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    amount: number | null
  }

  export type OrderSumAggregateOutputType = {
    amount: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    currency: string | null
    status: string | null
    paymentId: string | null
    razorpayOrderId: string | null
    razorpaySignature: string | null
    paymentMethod: string | null
    receipt: string | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    currency: string | null
    status: string | null
    paymentId: string | null
    razorpayOrderId: string | null
    razorpaySignature: string | null
    paymentMethod: string | null
    receipt: string | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    currency: number
    status: number
    paymentId: number
    razorpayOrderId: number
    razorpaySignature: number
    paymentMethod: number
    receipt: number
    courseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    amount?: true
  }

  export type OrderSumAggregateInputType = {
    amount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    currency?: true
    status?: true
    paymentId?: true
    razorpayOrderId?: true
    razorpaySignature?: true
    paymentMethod?: true
    receipt?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    currency?: true
    status?: true
    paymentId?: true
    razorpayOrderId?: true
    razorpaySignature?: true
    paymentMethod?: true
    receipt?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    currency?: true
    status?: true
    paymentId?: true
    razorpayOrderId?: true
    razorpaySignature?: true
    paymentMethod?: true
    receipt?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string
    amount: number
    currency: string
    status: string
    paymentId: string | null
    razorpayOrderId: string
    razorpaySignature: string | null
    paymentMethod: string | null
    receipt: string | null
    courseId: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentId?: boolean
    razorpayOrderId?: boolean
    razorpaySignature?: boolean
    paymentMethod?: boolean
    receipt?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    refunds?: boolean | Order$refundsArgs<ExtArgs>
    course?: boolean | Order$courseArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentId?: boolean
    razorpayOrderId?: boolean
    razorpaySignature?: boolean
    paymentMethod?: boolean
    receipt?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | Order$courseArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentId?: boolean
    razorpayOrderId?: boolean
    razorpaySignature?: boolean
    paymentMethod?: boolean
    receipt?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | Order$courseArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentId?: boolean
    razorpayOrderId?: boolean
    razorpaySignature?: boolean
    paymentMethod?: boolean
    receipt?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "currency" | "status" | "paymentId" | "razorpayOrderId" | "razorpaySignature" | "paymentMethod" | "receipt" | "courseId" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refunds?: boolean | Order$refundsArgs<ExtArgs>
    course?: boolean | Order$courseArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | Order$courseArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | Order$courseArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      refunds: Prisma.$RefundPayload<ExtArgs>[]
      course: Prisma.$CoursePayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      currency: string
      status: string
      paymentId: string | null
      razorpayOrderId: string
      razorpaySignature: string | null
      paymentMethod: string | null
      receipt: string | null
      courseId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    refunds<T extends Order$refundsArgs<ExtArgs> = {}>(args?: Subset<T, Order$refundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    course<T extends Order$courseArgs<ExtArgs> = {}>(args?: Subset<T, Order$courseArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly amount: FieldRef<"Order", 'Float'>
    readonly currency: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'String'>
    readonly paymentId: FieldRef<"Order", 'String'>
    readonly razorpayOrderId: FieldRef<"Order", 'String'>
    readonly razorpaySignature: FieldRef<"Order", 'String'>
    readonly paymentMethod: FieldRef<"Order", 'String'>
    readonly receipt: FieldRef<"Order", 'String'>
    readonly courseId: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.refunds
   */
  export type Order$refundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    where?: RefundWhereInput
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    cursor?: RefundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Order.course
   */
  export type Order$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Refund
   */

  export type AggregateRefund = {
    _count: RefundCountAggregateOutputType | null
    _avg: RefundAvgAggregateOutputType | null
    _sum: RefundSumAggregateOutputType | null
    _min: RefundMinAggregateOutputType | null
    _max: RefundMaxAggregateOutputType | null
  }

  export type RefundAvgAggregateOutputType = {
    amount: number | null
  }

  export type RefundSumAggregateOutputType = {
    amount: number | null
  }

  export type RefundMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    amount: number | null
    status: string | null
    reason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefundMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    amount: number | null
    status: string | null
    reason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefundCountAggregateOutputType = {
    id: number
    orderId: number
    amount: number
    status: number
    reason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RefundAvgAggregateInputType = {
    amount?: true
  }

  export type RefundSumAggregateInputType = {
    amount?: true
  }

  export type RefundMinAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    status?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefundMaxAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    status?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefundCountAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    status?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RefundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refund to aggregate.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Refunds
    **/
    _count?: true | RefundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefundMaxAggregateInputType
  }

  export type GetRefundAggregateType<T extends RefundAggregateArgs> = {
        [P in keyof T & keyof AggregateRefund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefund[P]>
      : GetScalarType<T[P], AggregateRefund[P]>
  }




  export type RefundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefundWhereInput
    orderBy?: RefundOrderByWithAggregationInput | RefundOrderByWithAggregationInput[]
    by: RefundScalarFieldEnum[] | RefundScalarFieldEnum
    having?: RefundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefundCountAggregateInputType | true
    _avg?: RefundAvgAggregateInputType
    _sum?: RefundSumAggregateInputType
    _min?: RefundMinAggregateInputType
    _max?: RefundMaxAggregateInputType
  }

  export type RefundGroupByOutputType = {
    id: string
    orderId: string
    amount: number
    status: string
    reason: string | null
    createdAt: Date
    updatedAt: Date
    _count: RefundCountAggregateOutputType | null
    _avg: RefundAvgAggregateOutputType | null
    _sum: RefundSumAggregateOutputType | null
    _min: RefundMinAggregateOutputType | null
    _max: RefundMaxAggregateOutputType | null
  }

  type GetRefundGroupByPayload<T extends RefundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefundGroupByOutputType[P]>
            : GetScalarType<T[P], RefundGroupByOutputType[P]>
        }
      >
    >


  export type RefundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    amount?: boolean
    status?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refund"]>

  export type RefundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    amount?: boolean
    status?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refund"]>

  export type RefundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    amount?: boolean
    status?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refund"]>

  export type RefundSelectScalar = {
    id?: boolean
    orderId?: boolean
    amount?: boolean
    status?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RefundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "amount" | "status" | "reason" | "createdAt" | "updatedAt", ExtArgs["result"]["refund"]>
  export type RefundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type RefundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type RefundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $RefundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Refund"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      amount: number
      status: string
      reason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["refund"]>
    composites: {}
  }

  type RefundGetPayload<S extends boolean | null | undefined | RefundDefaultArgs> = $Result.GetResult<Prisma.$RefundPayload, S>

  type RefundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefundCountAggregateInputType | true
    }

  export interface RefundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Refund'], meta: { name: 'Refund' } }
    /**
     * Find zero or one Refund that matches the filter.
     * @param {RefundFindUniqueArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefundFindUniqueArgs>(args: SelectSubset<T, RefundFindUniqueArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Refund that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefundFindUniqueOrThrowArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefundFindUniqueOrThrowArgs>(args: SelectSubset<T, RefundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundFindFirstArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefundFindFirstArgs>(args?: SelectSubset<T, RefundFindFirstArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundFindFirstOrThrowArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefundFindFirstOrThrowArgs>(args?: SelectSubset<T, RefundFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Refunds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refunds
     * const refunds = await prisma.refund.findMany()
     * 
     * // Get first 10 Refunds
     * const refunds = await prisma.refund.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refundWithIdOnly = await prisma.refund.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefundFindManyArgs>(args?: SelectSubset<T, RefundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Refund.
     * @param {RefundCreateArgs} args - Arguments to create a Refund.
     * @example
     * // Create one Refund
     * const Refund = await prisma.refund.create({
     *   data: {
     *     // ... data to create a Refund
     *   }
     * })
     * 
     */
    create<T extends RefundCreateArgs>(args: SelectSubset<T, RefundCreateArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Refunds.
     * @param {RefundCreateManyArgs} args - Arguments to create many Refunds.
     * @example
     * // Create many Refunds
     * const refund = await prisma.refund.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefundCreateManyArgs>(args?: SelectSubset<T, RefundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Refunds and returns the data saved in the database.
     * @param {RefundCreateManyAndReturnArgs} args - Arguments to create many Refunds.
     * @example
     * // Create many Refunds
     * const refund = await prisma.refund.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Refunds and only return the `id`
     * const refundWithIdOnly = await prisma.refund.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefundCreateManyAndReturnArgs>(args?: SelectSubset<T, RefundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Refund.
     * @param {RefundDeleteArgs} args - Arguments to delete one Refund.
     * @example
     * // Delete one Refund
     * const Refund = await prisma.refund.delete({
     *   where: {
     *     // ... filter to delete one Refund
     *   }
     * })
     * 
     */
    delete<T extends RefundDeleteArgs>(args: SelectSubset<T, RefundDeleteArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Refund.
     * @param {RefundUpdateArgs} args - Arguments to update one Refund.
     * @example
     * // Update one Refund
     * const refund = await prisma.refund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefundUpdateArgs>(args: SelectSubset<T, RefundUpdateArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Refunds.
     * @param {RefundDeleteManyArgs} args - Arguments to filter Refunds to delete.
     * @example
     * // Delete a few Refunds
     * const { count } = await prisma.refund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefundDeleteManyArgs>(args?: SelectSubset<T, RefundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refunds
     * const refund = await prisma.refund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefundUpdateManyArgs>(args: SelectSubset<T, RefundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refunds and returns the data updated in the database.
     * @param {RefundUpdateManyAndReturnArgs} args - Arguments to update many Refunds.
     * @example
     * // Update many Refunds
     * const refund = await prisma.refund.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Refunds and only return the `id`
     * const refundWithIdOnly = await prisma.refund.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefundUpdateManyAndReturnArgs>(args: SelectSubset<T, RefundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Refund.
     * @param {RefundUpsertArgs} args - Arguments to update or create a Refund.
     * @example
     * // Update or create a Refund
     * const refund = await prisma.refund.upsert({
     *   create: {
     *     // ... data to create a Refund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refund we want to update
     *   }
     * })
     */
    upsert<T extends RefundUpsertArgs>(args: SelectSubset<T, RefundUpsertArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Refunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundCountArgs} args - Arguments to filter Refunds to count.
     * @example
     * // Count the number of Refunds
     * const count = await prisma.refund.count({
     *   where: {
     *     // ... the filter for the Refunds we want to count
     *   }
     * })
    **/
    count<T extends RefundCountArgs>(
      args?: Subset<T, RefundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefundAggregateArgs>(args: Subset<T, RefundAggregateArgs>): Prisma.PrismaPromise<GetRefundAggregateType<T>>

    /**
     * Group by Refund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefundGroupByArgs['orderBy'] }
        : { orderBy?: RefundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Refund model
   */
  readonly fields: RefundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Refund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Refund model
   */
  interface RefundFieldRefs {
    readonly id: FieldRef<"Refund", 'String'>
    readonly orderId: FieldRef<"Refund", 'String'>
    readonly amount: FieldRef<"Refund", 'Float'>
    readonly status: FieldRef<"Refund", 'String'>
    readonly reason: FieldRef<"Refund", 'String'>
    readonly createdAt: FieldRef<"Refund", 'DateTime'>
    readonly updatedAt: FieldRef<"Refund", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Refund findUnique
   */
  export type RefundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund findUniqueOrThrow
   */
  export type RefundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund findFirst
   */
  export type RefundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refunds.
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refunds.
     */
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Refund findFirstOrThrow
   */
  export type RefundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refunds.
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refunds.
     */
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Refund findMany
   */
  export type RefundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refunds to fetch.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Refunds.
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Refund create
   */
  export type RefundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * The data needed to create a Refund.
     */
    data: XOR<RefundCreateInput, RefundUncheckedCreateInput>
  }

  /**
   * Refund createMany
   */
  export type RefundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Refunds.
     */
    data: RefundCreateManyInput | RefundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Refund createManyAndReturn
   */
  export type RefundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * The data used to create many Refunds.
     */
    data: RefundCreateManyInput | RefundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Refund update
   */
  export type RefundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * The data needed to update a Refund.
     */
    data: XOR<RefundUpdateInput, RefundUncheckedUpdateInput>
    /**
     * Choose, which Refund to update.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund updateMany
   */
  export type RefundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Refunds.
     */
    data: XOR<RefundUpdateManyMutationInput, RefundUncheckedUpdateManyInput>
    /**
     * Filter which Refunds to update
     */
    where?: RefundWhereInput
    /**
     * Limit how many Refunds to update.
     */
    limit?: number
  }

  /**
   * Refund updateManyAndReturn
   */
  export type RefundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * The data used to update Refunds.
     */
    data: XOR<RefundUpdateManyMutationInput, RefundUncheckedUpdateManyInput>
    /**
     * Filter which Refunds to update
     */
    where?: RefundWhereInput
    /**
     * Limit how many Refunds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Refund upsert
   */
  export type RefundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * The filter to search for the Refund to update in case it exists.
     */
    where: RefundWhereUniqueInput
    /**
     * In case the Refund found by the `where` argument doesn't exist, create a new Refund with this data.
     */
    create: XOR<RefundCreateInput, RefundUncheckedCreateInput>
    /**
     * In case the Refund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefundUpdateInput, RefundUncheckedUpdateInput>
  }

  /**
   * Refund delete
   */
  export type RefundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter which Refund to delete.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund deleteMany
   */
  export type RefundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refunds to delete
     */
    where?: RefundWhereInput
    /**
     * Limit how many Refunds to delete.
     */
    limit?: number
  }

  /**
   * Refund without action
   */
  export type RefundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    password: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    otp: string | null
    otpExpiry: Date | null
    accountType: string | null
    isActive: boolean | null
    isApproved: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    password: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    otp: string | null
    otpExpiry: Date | null
    accountType: string | null
    isActive: boolean | null
    isApproved: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    lastName: number
    password: number
    resetToken: number
    resetTokenExpiry: number
    otp: number
    otpExpiry: number
    accountType: number
    isActive: number
    isApproved: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    password?: true
    resetToken?: true
    resetTokenExpiry?: true
    otp?: true
    otpExpiry?: true
    accountType?: true
    isActive?: true
    isApproved?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    password?: true
    resetToken?: true
    resetTokenExpiry?: true
    otp?: true
    otpExpiry?: true
    accountType?: true
    isActive?: true
    isApproved?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    password?: true
    resetToken?: true
    resetTokenExpiry?: true
    otp?: true
    otpExpiry?: true
    accountType?: true
    isActive?: true
    isApproved?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    firstName: string
    lastName: string
    password: string
    resetToken: string | null
    resetTokenExpiry: Date | null
    otp: string | null
    otpExpiry: Date | null
    accountType: string | null
    isActive: boolean
    isApproved: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    otp?: boolean
    otpExpiry?: boolean
    accountType?: boolean
    isActive?: boolean
    isApproved?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | User$ordersArgs<ExtArgs>
    coursesCreated?: boolean | User$coursesCreatedArgs<ExtArgs>
    coursesEnrolled?: boolean | User$coursesEnrolledArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    courseProgress?: boolean | User$courseProgressArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    otp?: boolean
    otpExpiry?: boolean
    accountType?: boolean
    isActive?: boolean
    isApproved?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    otp?: boolean
    otpExpiry?: boolean
    accountType?: boolean
    isActive?: boolean
    isApproved?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    otp?: boolean
    otpExpiry?: boolean
    accountType?: boolean
    isActive?: boolean
    isApproved?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "firstName" | "lastName" | "password" | "resetToken" | "resetTokenExpiry" | "otp" | "otpExpiry" | "accountType" | "isActive" | "isApproved" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs>
    coursesCreated?: boolean | User$coursesCreatedArgs<ExtArgs>
    coursesEnrolled?: boolean | User$coursesEnrolledArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    courseProgress?: boolean | User$courseProgressArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      coursesCreated: Prisma.$CoursePayload<ExtArgs>[]
      coursesEnrolled: Prisma.$CoursePayload<ExtArgs>[]
      ratings: Prisma.$RatingAndReviewPayload<ExtArgs>[]
      courseProgress: Prisma.$CourseProgressPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      firstName: string
      lastName: string
      password: string
      resetToken: string | null
      resetTokenExpiry: Date | null
      otp: string | null
      otpExpiry: Date | null
      accountType: string | null
      isActive: boolean
      isApproved: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coursesCreated<T extends User$coursesCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$coursesCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coursesEnrolled<T extends User$coursesEnrolledArgs<ExtArgs> = {}>(args?: Subset<T, User$coursesEnrolledArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends User$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingAndReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courseProgress<T extends User$courseProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$courseProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly otp: FieldRef<"User", 'String'>
    readonly otpExpiry: FieldRef<"User", 'DateTime'>
    readonly accountType: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly isApproved: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.coursesCreated
   */
  export type User$coursesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.coursesEnrolled
   */
  export type User$coursesEnrolledArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.ratings
   */
  export type User$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingAndReview
     */
    select?: RatingAndReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingAndReview
     */
    omit?: RatingAndReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingAndReviewInclude<ExtArgs> | null
    where?: RatingAndReviewWhereInput
    orderBy?: RatingAndReviewOrderByWithRelationInput | RatingAndReviewOrderByWithRelationInput[]
    cursor?: RatingAndReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingAndReviewScalarFieldEnum | RatingAndReviewScalarFieldEnum[]
  }

  /**
   * User.courseProgress
   */
  export type User$courseProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    where?: CourseProgressWhereInput
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    cursor?: CourseProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseProgressScalarFieldEnum | CourseProgressScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    revoked: boolean | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    revoked: boolean | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    revoked: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    revoked?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    revoked?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    revoked?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    expiresAt: Date
    revoked: boolean
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    revoked?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    revoked?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    revoked?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    revoked?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "revoked" | "createdAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      expiresAt: Date
      revoked: boolean
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly revoked: FieldRef<"RefreshToken", 'Boolean'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    price: number | null
  }

  export type CourseSumAggregateOutputType = {
    price: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    courseName: string | null
    courseDescription: string | null
    whatYouWillLearn: string | null
    price: number | null
    thumbnail: string | null
    status: $Enums.CourseStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    instructorId: string | null
    categoryId: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    courseName: string | null
    courseDescription: string | null
    whatYouWillLearn: string | null
    price: number | null
    thumbnail: string | null
    status: $Enums.CourseStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    instructorId: string | null
    categoryId: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    courseName: number
    courseDescription: number
    whatYouWillLearn: number
    price: number
    thumbnail: number
    tag: number
    instructions: number
    status: number
    createdAt: number
    updatedAt: number
    instructorId: number
    categoryId: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    price?: true
  }

  export type CourseSumAggregateInputType = {
    price?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    courseName?: true
    courseDescription?: true
    whatYouWillLearn?: true
    price?: true
    thumbnail?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    instructorId?: true
    categoryId?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    courseName?: true
    courseDescription?: true
    whatYouWillLearn?: true
    price?: true
    thumbnail?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    instructorId?: true
    categoryId?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    courseName?: true
    courseDescription?: true
    whatYouWillLearn?: true
    price?: true
    thumbnail?: true
    tag?: true
    instructions?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    instructorId?: true
    categoryId?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    courseName: string
    courseDescription: string
    whatYouWillLearn: string | null
    price: number
    thumbnail: string | null
    tag: string[]
    instructions: string[]
    status: $Enums.CourseStatus
    createdAt: Date
    updatedAt: Date
    instructorId: string
    categoryId: string | null
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseName?: boolean
    courseDescription?: boolean
    whatYouWillLearn?: boolean
    price?: boolean
    thumbnail?: boolean
    tag?: boolean
    instructions?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructorId?: boolean
    categoryId?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Course$categoryArgs<ExtArgs>
    studentsEnrolled?: boolean | Course$studentsEnrolledArgs<ExtArgs>
    sections?: boolean | Course$sectionsArgs<ExtArgs>
    ratings?: boolean | Course$ratingsArgs<ExtArgs>
    courseProgress?: boolean | Course$courseProgressArgs<ExtArgs>
    orders?: boolean | Course$ordersArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseName?: boolean
    courseDescription?: boolean
    whatYouWillLearn?: boolean
    price?: boolean
    thumbnail?: boolean
    tag?: boolean
    instructions?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructorId?: boolean
    categoryId?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Course$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseName?: boolean
    courseDescription?: boolean
    whatYouWillLearn?: boolean
    price?: boolean
    thumbnail?: boolean
    tag?: boolean
    instructions?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructorId?: boolean
    categoryId?: boolean
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Course$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    courseName?: boolean
    courseDescription?: boolean
    whatYouWillLearn?: boolean
    price?: boolean
    thumbnail?: boolean
    tag?: boolean
    instructions?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructorId?: boolean
    categoryId?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseName" | "courseDescription" | "whatYouWillLearn" | "price" | "thumbnail" | "tag" | "instructions" | "status" | "createdAt" | "updatedAt" | "instructorId" | "categoryId", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Course$categoryArgs<ExtArgs>
    studentsEnrolled?: boolean | Course$studentsEnrolledArgs<ExtArgs>
    sections?: boolean | Course$sectionsArgs<ExtArgs>
    ratings?: boolean | Course$ratingsArgs<ExtArgs>
    courseProgress?: boolean | Course$courseProgressArgs<ExtArgs>
    orders?: boolean | Course$ordersArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Course$categoryArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Course$categoryArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      instructor: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
      studentsEnrolled: Prisma.$UserPayload<ExtArgs>[]
      sections: Prisma.$SectionPayload<ExtArgs>[]
      ratings: Prisma.$RatingAndReviewPayload<ExtArgs>[]
      courseProgress: Prisma.$CourseProgressPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseName: string
      courseDescription: string
      whatYouWillLearn: string | null
      price: number
      thumbnail: string | null
      tag: string[]
      instructions: string[]
      status: $Enums.CourseStatus
      createdAt: Date
      updatedAt: Date
      instructorId: string
      categoryId: string | null
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends Course$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Course$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    studentsEnrolled<T extends Course$studentsEnrolledArgs<ExtArgs> = {}>(args?: Subset<T, Course$studentsEnrolledArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sections<T extends Course$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Course$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends Course$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Course$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingAndReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courseProgress<T extends Course$courseProgressArgs<ExtArgs> = {}>(args?: Subset<T, Course$courseProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Course$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Course$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly courseName: FieldRef<"Course", 'String'>
    readonly courseDescription: FieldRef<"Course", 'String'>
    readonly whatYouWillLearn: FieldRef<"Course", 'String'>
    readonly price: FieldRef<"Course", 'Float'>
    readonly thumbnail: FieldRef<"Course", 'String'>
    readonly tag: FieldRef<"Course", 'String[]'>
    readonly instructions: FieldRef<"Course", 'String[]'>
    readonly status: FieldRef<"Course", 'CourseStatus'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
    readonly instructorId: FieldRef<"Course", 'String'>
    readonly categoryId: FieldRef<"Course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.category
   */
  export type Course$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Course.studentsEnrolled
   */
  export type Course$studentsEnrolledArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Course.sections
   */
  export type Course$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Course.ratings
   */
  export type Course$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingAndReview
     */
    select?: RatingAndReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingAndReview
     */
    omit?: RatingAndReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingAndReviewInclude<ExtArgs> | null
    where?: RatingAndReviewWhereInput
    orderBy?: RatingAndReviewOrderByWithRelationInput | RatingAndReviewOrderByWithRelationInput[]
    cursor?: RatingAndReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingAndReviewScalarFieldEnum | RatingAndReviewScalarFieldEnum[]
  }

  /**
   * Course.courseProgress
   */
  export type Course$courseProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    where?: CourseProgressWhereInput
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    cursor?: CourseProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseProgressScalarFieldEnum | CourseProgressScalarFieldEnum[]
  }

  /**
   * Course.orders
   */
  export type Course$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courses?: boolean | Category$coursesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | Category$coursesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends Category$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Category$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.courses
   */
  export type Category$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionMinAggregateOutputType = {
    id: string | null
    sectionName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    courseId: string | null
  }

  export type SectionMaxAggregateOutputType = {
    id: string | null
    sectionName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    courseId: string | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    sectionName: number
    createdAt: number
    updatedAt: number
    courseId: number
    _all: number
  }


  export type SectionMinAggregateInputType = {
    id?: true
    sectionName?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    sectionName?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    sectionName?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: string
    sectionName: string
    createdAt: Date
    updatedAt: Date
    courseId: string
    _count: SectionCountAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    subsections?: boolean | Section$subsectionsArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectScalar = {
    id?: boolean
    sectionName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
  }

  export type SectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sectionName" | "createdAt" | "updatedAt" | "courseId", ExtArgs["result"]["section"]>
  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    subsections?: boolean | Section$subsectionsArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type SectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      subsections: Prisma.$SubsectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sectionName: string
      createdAt: Date
      updatedAt: Date
      courseId: string
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {SectionCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections and returns the data updated in the database.
     * @param {SectionUpdateManyAndReturnArgs} args - Arguments to update many Sections.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subsections<T extends Section$subsectionsArgs<ExtArgs> = {}>(args?: Subset<T, Section$subsectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Section model
   */
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'String'>
    readonly sectionName: FieldRef<"Section", 'String'>
    readonly createdAt: FieldRef<"Section", 'DateTime'>
    readonly updatedAt: FieldRef<"Section", 'DateTime'>
    readonly courseId: FieldRef<"Section", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section createManyAndReturn
   */
  export type SectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section updateManyAndReturn
   */
  export type SectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Section.subsections
   */
  export type Section$subsectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    where?: SubsectionWhereInput
    orderBy?: SubsectionOrderByWithRelationInput | SubsectionOrderByWithRelationInput[]
    cursor?: SubsectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubsectionScalarFieldEnum | SubsectionScalarFieldEnum[]
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model Subsection
   */

  export type AggregateSubsection = {
    _count: SubsectionCountAggregateOutputType | null
    _min: SubsectionMinAggregateOutputType | null
    _max: SubsectionMaxAggregateOutputType | null
  }

  export type SubsectionMinAggregateOutputType = {
    id: string | null
    title: string | null
    timeDuration: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    sectionId: string | null
  }

  export type SubsectionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    timeDuration: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    sectionId: string | null
  }

  export type SubsectionCountAggregateOutputType = {
    id: number
    title: number
    timeDuration: number
    description: number
    videoUrls: number
    createdAt: number
    updatedAt: number
    sectionId: number
    _all: number
  }


  export type SubsectionMinAggregateInputType = {
    id?: true
    title?: true
    timeDuration?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    sectionId?: true
  }

  export type SubsectionMaxAggregateInputType = {
    id?: true
    title?: true
    timeDuration?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    sectionId?: true
  }

  export type SubsectionCountAggregateInputType = {
    id?: true
    title?: true
    timeDuration?: true
    description?: true
    videoUrls?: true
    createdAt?: true
    updatedAt?: true
    sectionId?: true
    _all?: true
  }

  export type SubsectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subsection to aggregate.
     */
    where?: SubsectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subsections to fetch.
     */
    orderBy?: SubsectionOrderByWithRelationInput | SubsectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubsectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subsections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subsections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subsections
    **/
    _count?: true | SubsectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubsectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubsectionMaxAggregateInputType
  }

  export type GetSubsectionAggregateType<T extends SubsectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubsection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubsection[P]>
      : GetScalarType<T[P], AggregateSubsection[P]>
  }




  export type SubsectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubsectionWhereInput
    orderBy?: SubsectionOrderByWithAggregationInput | SubsectionOrderByWithAggregationInput[]
    by: SubsectionScalarFieldEnum[] | SubsectionScalarFieldEnum
    having?: SubsectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubsectionCountAggregateInputType | true
    _min?: SubsectionMinAggregateInputType
    _max?: SubsectionMaxAggregateInputType
  }

  export type SubsectionGroupByOutputType = {
    id: string
    title: string
    timeDuration: string
    description: string | null
    videoUrls: string[]
    createdAt: Date
    updatedAt: Date
    sectionId: string
    _count: SubsectionCountAggregateOutputType | null
    _min: SubsectionMinAggregateOutputType | null
    _max: SubsectionMaxAggregateOutputType | null
  }

  type GetSubsectionGroupByPayload<T extends SubsectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubsectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubsectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubsectionGroupByOutputType[P]>
            : GetScalarType<T[P], SubsectionGroupByOutputType[P]>
        }
      >
    >


  export type SubsectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    timeDuration?: boolean
    description?: boolean
    videoUrls?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sectionId?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
    completedBy?: boolean | Subsection$completedByArgs<ExtArgs>
    _count?: boolean | SubsectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subsection"]>

  export type SubsectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    timeDuration?: boolean
    description?: boolean
    videoUrls?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sectionId?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subsection"]>

  export type SubsectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    timeDuration?: boolean
    description?: boolean
    videoUrls?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sectionId?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subsection"]>

  export type SubsectionSelectScalar = {
    id?: boolean
    title?: boolean
    timeDuration?: boolean
    description?: boolean
    videoUrls?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sectionId?: boolean
  }

  export type SubsectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "timeDuration" | "description" | "videoUrls" | "createdAt" | "updatedAt" | "sectionId", ExtArgs["result"]["subsection"]>
  export type SubsectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
    completedBy?: boolean | Subsection$completedByArgs<ExtArgs>
    _count?: boolean | SubsectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubsectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }
  export type SubsectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }

  export type $SubsectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subsection"
    objects: {
      section: Prisma.$SectionPayload<ExtArgs>
      completedBy: Prisma.$CourseProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      timeDuration: string
      description: string | null
      videoUrls: string[]
      createdAt: Date
      updatedAt: Date
      sectionId: string
    }, ExtArgs["result"]["subsection"]>
    composites: {}
  }

  type SubsectionGetPayload<S extends boolean | null | undefined | SubsectionDefaultArgs> = $Result.GetResult<Prisma.$SubsectionPayload, S>

  type SubsectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubsectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubsectionCountAggregateInputType | true
    }

  export interface SubsectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subsection'], meta: { name: 'Subsection' } }
    /**
     * Find zero or one Subsection that matches the filter.
     * @param {SubsectionFindUniqueArgs} args - Arguments to find a Subsection
     * @example
     * // Get one Subsection
     * const subsection = await prisma.subsection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubsectionFindUniqueArgs>(args: SelectSubset<T, SubsectionFindUniqueArgs<ExtArgs>>): Prisma__SubsectionClient<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subsection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubsectionFindUniqueOrThrowArgs} args - Arguments to find a Subsection
     * @example
     * // Get one Subsection
     * const subsection = await prisma.subsection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubsectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubsectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubsectionClient<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subsection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionFindFirstArgs} args - Arguments to find a Subsection
     * @example
     * // Get one Subsection
     * const subsection = await prisma.subsection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubsectionFindFirstArgs>(args?: SelectSubset<T, SubsectionFindFirstArgs<ExtArgs>>): Prisma__SubsectionClient<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subsection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionFindFirstOrThrowArgs} args - Arguments to find a Subsection
     * @example
     * // Get one Subsection
     * const subsection = await prisma.subsection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubsectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubsectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubsectionClient<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subsections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subsections
     * const subsections = await prisma.subsection.findMany()
     * 
     * // Get first 10 Subsections
     * const subsections = await prisma.subsection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subsectionWithIdOnly = await prisma.subsection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubsectionFindManyArgs>(args?: SelectSubset<T, SubsectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subsection.
     * @param {SubsectionCreateArgs} args - Arguments to create a Subsection.
     * @example
     * // Create one Subsection
     * const Subsection = await prisma.subsection.create({
     *   data: {
     *     // ... data to create a Subsection
     *   }
     * })
     * 
     */
    create<T extends SubsectionCreateArgs>(args: SelectSubset<T, SubsectionCreateArgs<ExtArgs>>): Prisma__SubsectionClient<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subsections.
     * @param {SubsectionCreateManyArgs} args - Arguments to create many Subsections.
     * @example
     * // Create many Subsections
     * const subsection = await prisma.subsection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubsectionCreateManyArgs>(args?: SelectSubset<T, SubsectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subsections and returns the data saved in the database.
     * @param {SubsectionCreateManyAndReturnArgs} args - Arguments to create many Subsections.
     * @example
     * // Create many Subsections
     * const subsection = await prisma.subsection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subsections and only return the `id`
     * const subsectionWithIdOnly = await prisma.subsection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubsectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubsectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subsection.
     * @param {SubsectionDeleteArgs} args - Arguments to delete one Subsection.
     * @example
     * // Delete one Subsection
     * const Subsection = await prisma.subsection.delete({
     *   where: {
     *     // ... filter to delete one Subsection
     *   }
     * })
     * 
     */
    delete<T extends SubsectionDeleteArgs>(args: SelectSubset<T, SubsectionDeleteArgs<ExtArgs>>): Prisma__SubsectionClient<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subsection.
     * @param {SubsectionUpdateArgs} args - Arguments to update one Subsection.
     * @example
     * // Update one Subsection
     * const subsection = await prisma.subsection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubsectionUpdateArgs>(args: SelectSubset<T, SubsectionUpdateArgs<ExtArgs>>): Prisma__SubsectionClient<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subsections.
     * @param {SubsectionDeleteManyArgs} args - Arguments to filter Subsections to delete.
     * @example
     * // Delete a few Subsections
     * const { count } = await prisma.subsection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubsectionDeleteManyArgs>(args?: SelectSubset<T, SubsectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subsections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subsections
     * const subsection = await prisma.subsection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubsectionUpdateManyArgs>(args: SelectSubset<T, SubsectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subsections and returns the data updated in the database.
     * @param {SubsectionUpdateManyAndReturnArgs} args - Arguments to update many Subsections.
     * @example
     * // Update many Subsections
     * const subsection = await prisma.subsection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subsections and only return the `id`
     * const subsectionWithIdOnly = await prisma.subsection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubsectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubsectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subsection.
     * @param {SubsectionUpsertArgs} args - Arguments to update or create a Subsection.
     * @example
     * // Update or create a Subsection
     * const subsection = await prisma.subsection.upsert({
     *   create: {
     *     // ... data to create a Subsection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subsection we want to update
     *   }
     * })
     */
    upsert<T extends SubsectionUpsertArgs>(args: SelectSubset<T, SubsectionUpsertArgs<ExtArgs>>): Prisma__SubsectionClient<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subsections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionCountArgs} args - Arguments to filter Subsections to count.
     * @example
     * // Count the number of Subsections
     * const count = await prisma.subsection.count({
     *   where: {
     *     // ... the filter for the Subsections we want to count
     *   }
     * })
    **/
    count<T extends SubsectionCountArgs>(
      args?: Subset<T, SubsectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubsectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subsection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubsectionAggregateArgs>(args: Subset<T, SubsectionAggregateArgs>): Prisma.PrismaPromise<GetSubsectionAggregateType<T>>

    /**
     * Group by Subsection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubsectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubsectionGroupByArgs['orderBy'] }
        : { orderBy?: SubsectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubsectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubsectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subsection model
   */
  readonly fields: SubsectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subsection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubsectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    completedBy<T extends Subsection$completedByArgs<ExtArgs> = {}>(args?: Subset<T, Subsection$completedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subsection model
   */
  interface SubsectionFieldRefs {
    readonly id: FieldRef<"Subsection", 'String'>
    readonly title: FieldRef<"Subsection", 'String'>
    readonly timeDuration: FieldRef<"Subsection", 'String'>
    readonly description: FieldRef<"Subsection", 'String'>
    readonly videoUrls: FieldRef<"Subsection", 'String[]'>
    readonly createdAt: FieldRef<"Subsection", 'DateTime'>
    readonly updatedAt: FieldRef<"Subsection", 'DateTime'>
    readonly sectionId: FieldRef<"Subsection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subsection findUnique
   */
  export type SubsectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    /**
     * Filter, which Subsection to fetch.
     */
    where: SubsectionWhereUniqueInput
  }

  /**
   * Subsection findUniqueOrThrow
   */
  export type SubsectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    /**
     * Filter, which Subsection to fetch.
     */
    where: SubsectionWhereUniqueInput
  }

  /**
   * Subsection findFirst
   */
  export type SubsectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    /**
     * Filter, which Subsection to fetch.
     */
    where?: SubsectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subsections to fetch.
     */
    orderBy?: SubsectionOrderByWithRelationInput | SubsectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subsections.
     */
    cursor?: SubsectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subsections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subsections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subsections.
     */
    distinct?: SubsectionScalarFieldEnum | SubsectionScalarFieldEnum[]
  }

  /**
   * Subsection findFirstOrThrow
   */
  export type SubsectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    /**
     * Filter, which Subsection to fetch.
     */
    where?: SubsectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subsections to fetch.
     */
    orderBy?: SubsectionOrderByWithRelationInput | SubsectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subsections.
     */
    cursor?: SubsectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subsections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subsections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subsections.
     */
    distinct?: SubsectionScalarFieldEnum | SubsectionScalarFieldEnum[]
  }

  /**
   * Subsection findMany
   */
  export type SubsectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    /**
     * Filter, which Subsections to fetch.
     */
    where?: SubsectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subsections to fetch.
     */
    orderBy?: SubsectionOrderByWithRelationInput | SubsectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subsections.
     */
    cursor?: SubsectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subsections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subsections.
     */
    skip?: number
    distinct?: SubsectionScalarFieldEnum | SubsectionScalarFieldEnum[]
  }

  /**
   * Subsection create
   */
  export type SubsectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subsection.
     */
    data: XOR<SubsectionCreateInput, SubsectionUncheckedCreateInput>
  }

  /**
   * Subsection createMany
   */
  export type SubsectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subsections.
     */
    data: SubsectionCreateManyInput | SubsectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subsection createManyAndReturn
   */
  export type SubsectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * The data used to create many Subsections.
     */
    data: SubsectionCreateManyInput | SubsectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subsection update
   */
  export type SubsectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subsection.
     */
    data: XOR<SubsectionUpdateInput, SubsectionUncheckedUpdateInput>
    /**
     * Choose, which Subsection to update.
     */
    where: SubsectionWhereUniqueInput
  }

  /**
   * Subsection updateMany
   */
  export type SubsectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subsections.
     */
    data: XOR<SubsectionUpdateManyMutationInput, SubsectionUncheckedUpdateManyInput>
    /**
     * Filter which Subsections to update
     */
    where?: SubsectionWhereInput
    /**
     * Limit how many Subsections to update.
     */
    limit?: number
  }

  /**
   * Subsection updateManyAndReturn
   */
  export type SubsectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * The data used to update Subsections.
     */
    data: XOR<SubsectionUpdateManyMutationInput, SubsectionUncheckedUpdateManyInput>
    /**
     * Filter which Subsections to update
     */
    where?: SubsectionWhereInput
    /**
     * Limit how many Subsections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subsection upsert
   */
  export type SubsectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subsection to update in case it exists.
     */
    where: SubsectionWhereUniqueInput
    /**
     * In case the Subsection found by the `where` argument doesn't exist, create a new Subsection with this data.
     */
    create: XOR<SubsectionCreateInput, SubsectionUncheckedCreateInput>
    /**
     * In case the Subsection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubsectionUpdateInput, SubsectionUncheckedUpdateInput>
  }

  /**
   * Subsection delete
   */
  export type SubsectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    /**
     * Filter which Subsection to delete.
     */
    where: SubsectionWhereUniqueInput
  }

  /**
   * Subsection deleteMany
   */
  export type SubsectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subsections to delete
     */
    where?: SubsectionWhereInput
    /**
     * Limit how many Subsections to delete.
     */
    limit?: number
  }

  /**
   * Subsection.completedBy
   */
  export type Subsection$completedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    where?: CourseProgressWhereInput
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    cursor?: CourseProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseProgressScalarFieldEnum | CourseProgressScalarFieldEnum[]
  }

  /**
   * Subsection without action
   */
  export type SubsectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
  }


  /**
   * Model RatingAndReview
   */

  export type AggregateRatingAndReview = {
    _count: RatingAndReviewCountAggregateOutputType | null
    _avg: RatingAndReviewAvgAggregateOutputType | null
    _sum: RatingAndReviewSumAggregateOutputType | null
    _min: RatingAndReviewMinAggregateOutputType | null
    _max: RatingAndReviewMaxAggregateOutputType | null
  }

  export type RatingAndReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type RatingAndReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type RatingAndReviewMinAggregateOutputType = {
    id: string | null
    rating: number | null
    review: string | null
    createdAt: Date | null
    courseId: string | null
    userId: string | null
  }

  export type RatingAndReviewMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    review: string | null
    createdAt: Date | null
    courseId: string | null
    userId: string | null
  }

  export type RatingAndReviewCountAggregateOutputType = {
    id: number
    rating: number
    review: number
    createdAt: number
    courseId: number
    userId: number
    _all: number
  }


  export type RatingAndReviewAvgAggregateInputType = {
    rating?: true
  }

  export type RatingAndReviewSumAggregateInputType = {
    rating?: true
  }

  export type RatingAndReviewMinAggregateInputType = {
    id?: true
    rating?: true
    review?: true
    createdAt?: true
    courseId?: true
    userId?: true
  }

  export type RatingAndReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    review?: true
    createdAt?: true
    courseId?: true
    userId?: true
  }

  export type RatingAndReviewCountAggregateInputType = {
    id?: true
    rating?: true
    review?: true
    createdAt?: true
    courseId?: true
    userId?: true
    _all?: true
  }

  export type RatingAndReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RatingAndReview to aggregate.
     */
    where?: RatingAndReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingAndReviews to fetch.
     */
    orderBy?: RatingAndReviewOrderByWithRelationInput | RatingAndReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingAndReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingAndReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingAndReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RatingAndReviews
    **/
    _count?: true | RatingAndReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAndReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingAndReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingAndReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingAndReviewMaxAggregateInputType
  }

  export type GetRatingAndReviewAggregateType<T extends RatingAndReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateRatingAndReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRatingAndReview[P]>
      : GetScalarType<T[P], AggregateRatingAndReview[P]>
  }




  export type RatingAndReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingAndReviewWhereInput
    orderBy?: RatingAndReviewOrderByWithAggregationInput | RatingAndReviewOrderByWithAggregationInput[]
    by: RatingAndReviewScalarFieldEnum[] | RatingAndReviewScalarFieldEnum
    having?: RatingAndReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingAndReviewCountAggregateInputType | true
    _avg?: RatingAndReviewAvgAggregateInputType
    _sum?: RatingAndReviewSumAggregateInputType
    _min?: RatingAndReviewMinAggregateInputType
    _max?: RatingAndReviewMaxAggregateInputType
  }

  export type RatingAndReviewGroupByOutputType = {
    id: string
    rating: number
    review: string
    createdAt: Date
    courseId: string
    userId: string
    _count: RatingAndReviewCountAggregateOutputType | null
    _avg: RatingAndReviewAvgAggregateOutputType | null
    _sum: RatingAndReviewSumAggregateOutputType | null
    _min: RatingAndReviewMinAggregateOutputType | null
    _max: RatingAndReviewMaxAggregateOutputType | null
  }

  type GetRatingAndReviewGroupByPayload<T extends RatingAndReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingAndReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingAndReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingAndReviewGroupByOutputType[P]>
            : GetScalarType<T[P], RatingAndReviewGroupByOutputType[P]>
        }
      >
    >


  export type RatingAndReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    review?: boolean
    createdAt?: boolean
    courseId?: boolean
    userId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratingAndReview"]>

  export type RatingAndReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    review?: boolean
    createdAt?: boolean
    courseId?: boolean
    userId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratingAndReview"]>

  export type RatingAndReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    review?: boolean
    createdAt?: boolean
    courseId?: boolean
    userId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratingAndReview"]>

  export type RatingAndReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    review?: boolean
    createdAt?: boolean
    courseId?: boolean
    userId?: boolean
  }

  export type RatingAndReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "review" | "createdAt" | "courseId" | "userId", ExtArgs["result"]["ratingAndReview"]>
  export type RatingAndReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RatingAndReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RatingAndReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RatingAndReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RatingAndReview"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number
      review: string
      createdAt: Date
      courseId: string
      userId: string
    }, ExtArgs["result"]["ratingAndReview"]>
    composites: {}
  }

  type RatingAndReviewGetPayload<S extends boolean | null | undefined | RatingAndReviewDefaultArgs> = $Result.GetResult<Prisma.$RatingAndReviewPayload, S>

  type RatingAndReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingAndReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingAndReviewCountAggregateInputType | true
    }

  export interface RatingAndReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RatingAndReview'], meta: { name: 'RatingAndReview' } }
    /**
     * Find zero or one RatingAndReview that matches the filter.
     * @param {RatingAndReviewFindUniqueArgs} args - Arguments to find a RatingAndReview
     * @example
     * // Get one RatingAndReview
     * const ratingAndReview = await prisma.ratingAndReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingAndReviewFindUniqueArgs>(args: SelectSubset<T, RatingAndReviewFindUniqueArgs<ExtArgs>>): Prisma__RatingAndReviewClient<$Result.GetResult<Prisma.$RatingAndReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RatingAndReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingAndReviewFindUniqueOrThrowArgs} args - Arguments to find a RatingAndReview
     * @example
     * // Get one RatingAndReview
     * const ratingAndReview = await prisma.ratingAndReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingAndReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingAndReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingAndReviewClient<$Result.GetResult<Prisma.$RatingAndReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RatingAndReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAndReviewFindFirstArgs} args - Arguments to find a RatingAndReview
     * @example
     * // Get one RatingAndReview
     * const ratingAndReview = await prisma.ratingAndReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingAndReviewFindFirstArgs>(args?: SelectSubset<T, RatingAndReviewFindFirstArgs<ExtArgs>>): Prisma__RatingAndReviewClient<$Result.GetResult<Prisma.$RatingAndReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RatingAndReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAndReviewFindFirstOrThrowArgs} args - Arguments to find a RatingAndReview
     * @example
     * // Get one RatingAndReview
     * const ratingAndReview = await prisma.ratingAndReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingAndReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingAndReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingAndReviewClient<$Result.GetResult<Prisma.$RatingAndReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RatingAndReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAndReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RatingAndReviews
     * const ratingAndReviews = await prisma.ratingAndReview.findMany()
     * 
     * // Get first 10 RatingAndReviews
     * const ratingAndReviews = await prisma.ratingAndReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingAndReviewWithIdOnly = await prisma.ratingAndReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingAndReviewFindManyArgs>(args?: SelectSubset<T, RatingAndReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingAndReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RatingAndReview.
     * @param {RatingAndReviewCreateArgs} args - Arguments to create a RatingAndReview.
     * @example
     * // Create one RatingAndReview
     * const RatingAndReview = await prisma.ratingAndReview.create({
     *   data: {
     *     // ... data to create a RatingAndReview
     *   }
     * })
     * 
     */
    create<T extends RatingAndReviewCreateArgs>(args: SelectSubset<T, RatingAndReviewCreateArgs<ExtArgs>>): Prisma__RatingAndReviewClient<$Result.GetResult<Prisma.$RatingAndReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RatingAndReviews.
     * @param {RatingAndReviewCreateManyArgs} args - Arguments to create many RatingAndReviews.
     * @example
     * // Create many RatingAndReviews
     * const ratingAndReview = await prisma.ratingAndReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingAndReviewCreateManyArgs>(args?: SelectSubset<T, RatingAndReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RatingAndReviews and returns the data saved in the database.
     * @param {RatingAndReviewCreateManyAndReturnArgs} args - Arguments to create many RatingAndReviews.
     * @example
     * // Create many RatingAndReviews
     * const ratingAndReview = await prisma.ratingAndReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RatingAndReviews and only return the `id`
     * const ratingAndReviewWithIdOnly = await prisma.ratingAndReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingAndReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingAndReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingAndReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RatingAndReview.
     * @param {RatingAndReviewDeleteArgs} args - Arguments to delete one RatingAndReview.
     * @example
     * // Delete one RatingAndReview
     * const RatingAndReview = await prisma.ratingAndReview.delete({
     *   where: {
     *     // ... filter to delete one RatingAndReview
     *   }
     * })
     * 
     */
    delete<T extends RatingAndReviewDeleteArgs>(args: SelectSubset<T, RatingAndReviewDeleteArgs<ExtArgs>>): Prisma__RatingAndReviewClient<$Result.GetResult<Prisma.$RatingAndReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RatingAndReview.
     * @param {RatingAndReviewUpdateArgs} args - Arguments to update one RatingAndReview.
     * @example
     * // Update one RatingAndReview
     * const ratingAndReview = await prisma.ratingAndReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingAndReviewUpdateArgs>(args: SelectSubset<T, RatingAndReviewUpdateArgs<ExtArgs>>): Prisma__RatingAndReviewClient<$Result.GetResult<Prisma.$RatingAndReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RatingAndReviews.
     * @param {RatingAndReviewDeleteManyArgs} args - Arguments to filter RatingAndReviews to delete.
     * @example
     * // Delete a few RatingAndReviews
     * const { count } = await prisma.ratingAndReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingAndReviewDeleteManyArgs>(args?: SelectSubset<T, RatingAndReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RatingAndReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAndReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RatingAndReviews
     * const ratingAndReview = await prisma.ratingAndReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingAndReviewUpdateManyArgs>(args: SelectSubset<T, RatingAndReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RatingAndReviews and returns the data updated in the database.
     * @param {RatingAndReviewUpdateManyAndReturnArgs} args - Arguments to update many RatingAndReviews.
     * @example
     * // Update many RatingAndReviews
     * const ratingAndReview = await prisma.ratingAndReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RatingAndReviews and only return the `id`
     * const ratingAndReviewWithIdOnly = await prisma.ratingAndReview.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RatingAndReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingAndReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingAndReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RatingAndReview.
     * @param {RatingAndReviewUpsertArgs} args - Arguments to update or create a RatingAndReview.
     * @example
     * // Update or create a RatingAndReview
     * const ratingAndReview = await prisma.ratingAndReview.upsert({
     *   create: {
     *     // ... data to create a RatingAndReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RatingAndReview we want to update
     *   }
     * })
     */
    upsert<T extends RatingAndReviewUpsertArgs>(args: SelectSubset<T, RatingAndReviewUpsertArgs<ExtArgs>>): Prisma__RatingAndReviewClient<$Result.GetResult<Prisma.$RatingAndReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RatingAndReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAndReviewCountArgs} args - Arguments to filter RatingAndReviews to count.
     * @example
     * // Count the number of RatingAndReviews
     * const count = await prisma.ratingAndReview.count({
     *   where: {
     *     // ... the filter for the RatingAndReviews we want to count
     *   }
     * })
    **/
    count<T extends RatingAndReviewCountArgs>(
      args?: Subset<T, RatingAndReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingAndReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RatingAndReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAndReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RatingAndReviewAggregateArgs>(args: Subset<T, RatingAndReviewAggregateArgs>): Prisma.PrismaPromise<GetRatingAndReviewAggregateType<T>>

    /**
     * Group by RatingAndReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAndReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RatingAndReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingAndReviewGroupByArgs['orderBy'] }
        : { orderBy?: RatingAndReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RatingAndReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingAndReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RatingAndReview model
   */
  readonly fields: RatingAndReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RatingAndReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingAndReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RatingAndReview model
   */
  interface RatingAndReviewFieldRefs {
    readonly id: FieldRef<"RatingAndReview", 'String'>
    readonly rating: FieldRef<"RatingAndReview", 'Int'>
    readonly review: FieldRef<"RatingAndReview", 'String'>
    readonly createdAt: FieldRef<"RatingAndReview", 'DateTime'>
    readonly courseId: FieldRef<"RatingAndReview", 'String'>
    readonly userId: FieldRef<"RatingAndReview", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RatingAndReview findUnique
   */
  export type RatingAndReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingAndReview
     */
    select?: RatingAndReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingAndReview
     */
    omit?: RatingAndReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingAndReviewInclude<ExtArgs> | null
    /**
     * Filter, which RatingAndReview to fetch.
     */
    where: RatingAndReviewWhereUniqueInput
  }

  /**
   * RatingAndReview findUniqueOrThrow
   */
  export type RatingAndReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingAndReview
     */
    select?: RatingAndReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingAndReview
     */
    omit?: RatingAndReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingAndReviewInclude<ExtArgs> | null
    /**
     * Filter, which RatingAndReview to fetch.
     */
    where: RatingAndReviewWhereUniqueInput
  }

  /**
   * RatingAndReview findFirst
   */
  export type RatingAndReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingAndReview
     */
    select?: RatingAndReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingAndReview
     */
    omit?: RatingAndReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingAndReviewInclude<ExtArgs> | null
    /**
     * Filter, which RatingAndReview to fetch.
     */
    where?: RatingAndReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingAndReviews to fetch.
     */
    orderBy?: RatingAndReviewOrderByWithRelationInput | RatingAndReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RatingAndReviews.
     */
    cursor?: RatingAndReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingAndReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingAndReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RatingAndReviews.
     */
    distinct?: RatingAndReviewScalarFieldEnum | RatingAndReviewScalarFieldEnum[]
  }

  /**
   * RatingAndReview findFirstOrThrow
   */
  export type RatingAndReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingAndReview
     */
    select?: RatingAndReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingAndReview
     */
    omit?: RatingAndReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingAndReviewInclude<ExtArgs> | null
    /**
     * Filter, which RatingAndReview to fetch.
     */
    where?: RatingAndReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingAndReviews to fetch.
     */
    orderBy?: RatingAndReviewOrderByWithRelationInput | RatingAndReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RatingAndReviews.
     */
    cursor?: RatingAndReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingAndReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingAndReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RatingAndReviews.
     */
    distinct?: RatingAndReviewScalarFieldEnum | RatingAndReviewScalarFieldEnum[]
  }

  /**
   * RatingAndReview findMany
   */
  export type RatingAndReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingAndReview
     */
    select?: RatingAndReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingAndReview
     */
    omit?: RatingAndReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingAndReviewInclude<ExtArgs> | null
    /**
     * Filter, which RatingAndReviews to fetch.
     */
    where?: RatingAndReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingAndReviews to fetch.
     */
    orderBy?: RatingAndReviewOrderByWithRelationInput | RatingAndReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RatingAndReviews.
     */
    cursor?: RatingAndReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingAndReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingAndReviews.
     */
    skip?: number
    distinct?: RatingAndReviewScalarFieldEnum | RatingAndReviewScalarFieldEnum[]
  }

  /**
   * RatingAndReview create
   */
  export type RatingAndReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingAndReview
     */
    select?: RatingAndReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingAndReview
     */
    omit?: RatingAndReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingAndReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a RatingAndReview.
     */
    data: XOR<RatingAndReviewCreateInput, RatingAndReviewUncheckedCreateInput>
  }

  /**
   * RatingAndReview createMany
   */
  export type RatingAndReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RatingAndReviews.
     */
    data: RatingAndReviewCreateManyInput | RatingAndReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RatingAndReview createManyAndReturn
   */
  export type RatingAndReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingAndReview
     */
    select?: RatingAndReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RatingAndReview
     */
    omit?: RatingAndReviewOmit<ExtArgs> | null
    /**
     * The data used to create many RatingAndReviews.
     */
    data: RatingAndReviewCreateManyInput | RatingAndReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingAndReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RatingAndReview update
   */
  export type RatingAndReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingAndReview
     */
    select?: RatingAndReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingAndReview
     */
    omit?: RatingAndReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingAndReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a RatingAndReview.
     */
    data: XOR<RatingAndReviewUpdateInput, RatingAndReviewUncheckedUpdateInput>
    /**
     * Choose, which RatingAndReview to update.
     */
    where: RatingAndReviewWhereUniqueInput
  }

  /**
   * RatingAndReview updateMany
   */
  export type RatingAndReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RatingAndReviews.
     */
    data: XOR<RatingAndReviewUpdateManyMutationInput, RatingAndReviewUncheckedUpdateManyInput>
    /**
     * Filter which RatingAndReviews to update
     */
    where?: RatingAndReviewWhereInput
    /**
     * Limit how many RatingAndReviews to update.
     */
    limit?: number
  }

  /**
   * RatingAndReview updateManyAndReturn
   */
  export type RatingAndReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingAndReview
     */
    select?: RatingAndReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RatingAndReview
     */
    omit?: RatingAndReviewOmit<ExtArgs> | null
    /**
     * The data used to update RatingAndReviews.
     */
    data: XOR<RatingAndReviewUpdateManyMutationInput, RatingAndReviewUncheckedUpdateManyInput>
    /**
     * Filter which RatingAndReviews to update
     */
    where?: RatingAndReviewWhereInput
    /**
     * Limit how many RatingAndReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingAndReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RatingAndReview upsert
   */
  export type RatingAndReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingAndReview
     */
    select?: RatingAndReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingAndReview
     */
    omit?: RatingAndReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingAndReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the RatingAndReview to update in case it exists.
     */
    where: RatingAndReviewWhereUniqueInput
    /**
     * In case the RatingAndReview found by the `where` argument doesn't exist, create a new RatingAndReview with this data.
     */
    create: XOR<RatingAndReviewCreateInput, RatingAndReviewUncheckedCreateInput>
    /**
     * In case the RatingAndReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingAndReviewUpdateInput, RatingAndReviewUncheckedUpdateInput>
  }

  /**
   * RatingAndReview delete
   */
  export type RatingAndReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingAndReview
     */
    select?: RatingAndReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingAndReview
     */
    omit?: RatingAndReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingAndReviewInclude<ExtArgs> | null
    /**
     * Filter which RatingAndReview to delete.
     */
    where: RatingAndReviewWhereUniqueInput
  }

  /**
   * RatingAndReview deleteMany
   */
  export type RatingAndReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RatingAndReviews to delete
     */
    where?: RatingAndReviewWhereInput
    /**
     * Limit how many RatingAndReviews to delete.
     */
    limit?: number
  }

  /**
   * RatingAndReview without action
   */
  export type RatingAndReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingAndReview
     */
    select?: RatingAndReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingAndReview
     */
    omit?: RatingAndReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingAndReviewInclude<ExtArgs> | null
  }


  /**
   * Model CourseProgress
   */

  export type AggregateCourseProgress = {
    _count: CourseProgressCountAggregateOutputType | null
    _min: CourseProgressMinAggregateOutputType | null
    _max: CourseProgressMaxAggregateOutputType | null
  }

  export type CourseProgressMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    courseId: string | null
    userId: string | null
  }

  export type CourseProgressMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    courseId: string | null
    userId: string | null
  }

  export type CourseProgressCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    courseId: number
    userId: number
    _all: number
  }


  export type CourseProgressMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
    userId?: true
  }

  export type CourseProgressMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
    userId?: true
  }

  export type CourseProgressCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
    userId?: true
    _all?: true
  }

  export type CourseProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseProgress to aggregate.
     */
    where?: CourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProgresses to fetch.
     */
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseProgresses
    **/
    _count?: true | CourseProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseProgressMaxAggregateInputType
  }

  export type GetCourseProgressAggregateType<T extends CourseProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseProgress[P]>
      : GetScalarType<T[P], AggregateCourseProgress[P]>
  }




  export type CourseProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseProgressWhereInput
    orderBy?: CourseProgressOrderByWithAggregationInput | CourseProgressOrderByWithAggregationInput[]
    by: CourseProgressScalarFieldEnum[] | CourseProgressScalarFieldEnum
    having?: CourseProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseProgressCountAggregateInputType | true
    _min?: CourseProgressMinAggregateInputType
    _max?: CourseProgressMaxAggregateInputType
  }

  export type CourseProgressGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    courseId: string
    userId: string
    _count: CourseProgressCountAggregateOutputType | null
    _min: CourseProgressMinAggregateOutputType | null
    _max: CourseProgressMaxAggregateOutputType | null
  }

  type GetCourseProgressGroupByPayload<T extends CourseProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseProgressGroupByOutputType[P]>
            : GetScalarType<T[P], CourseProgressGroupByOutputType[P]>
        }
      >
    >


  export type CourseProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    userId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    completedVideos?: boolean | CourseProgress$completedVideosArgs<ExtArgs>
    _count?: boolean | CourseProgressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseProgress"]>

  export type CourseProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    userId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseProgress"]>

  export type CourseProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    userId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseProgress"]>

  export type CourseProgressSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    userId?: boolean
  }

  export type CourseProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "courseId" | "userId", ExtArgs["result"]["courseProgress"]>
  export type CourseProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    completedVideos?: boolean | CourseProgress$completedVideosArgs<ExtArgs>
    _count?: boolean | CourseProgressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CourseProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CourseProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseProgress"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      completedVideos: Prisma.$SubsectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      courseId: string
      userId: string
    }, ExtArgs["result"]["courseProgress"]>
    composites: {}
  }

  type CourseProgressGetPayload<S extends boolean | null | undefined | CourseProgressDefaultArgs> = $Result.GetResult<Prisma.$CourseProgressPayload, S>

  type CourseProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseProgressCountAggregateInputType | true
    }

  export interface CourseProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseProgress'], meta: { name: 'CourseProgress' } }
    /**
     * Find zero or one CourseProgress that matches the filter.
     * @param {CourseProgressFindUniqueArgs} args - Arguments to find a CourseProgress
     * @example
     * // Get one CourseProgress
     * const courseProgress = await prisma.courseProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseProgressFindUniqueArgs>(args: SelectSubset<T, CourseProgressFindUniqueArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseProgressFindUniqueOrThrowArgs} args - Arguments to find a CourseProgress
     * @example
     * // Get one CourseProgress
     * const courseProgress = await prisma.courseProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressFindFirstArgs} args - Arguments to find a CourseProgress
     * @example
     * // Get one CourseProgress
     * const courseProgress = await prisma.courseProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseProgressFindFirstArgs>(args?: SelectSubset<T, CourseProgressFindFirstArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressFindFirstOrThrowArgs} args - Arguments to find a CourseProgress
     * @example
     * // Get one CourseProgress
     * const courseProgress = await prisma.courseProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseProgresses
     * const courseProgresses = await prisma.courseProgress.findMany()
     * 
     * // Get first 10 CourseProgresses
     * const courseProgresses = await prisma.courseProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseProgressWithIdOnly = await prisma.courseProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseProgressFindManyArgs>(args?: SelectSubset<T, CourseProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseProgress.
     * @param {CourseProgressCreateArgs} args - Arguments to create a CourseProgress.
     * @example
     * // Create one CourseProgress
     * const CourseProgress = await prisma.courseProgress.create({
     *   data: {
     *     // ... data to create a CourseProgress
     *   }
     * })
     * 
     */
    create<T extends CourseProgressCreateArgs>(args: SelectSubset<T, CourseProgressCreateArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseProgresses.
     * @param {CourseProgressCreateManyArgs} args - Arguments to create many CourseProgresses.
     * @example
     * // Create many CourseProgresses
     * const courseProgress = await prisma.courseProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseProgressCreateManyArgs>(args?: SelectSubset<T, CourseProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseProgresses and returns the data saved in the database.
     * @param {CourseProgressCreateManyAndReturnArgs} args - Arguments to create many CourseProgresses.
     * @example
     * // Create many CourseProgresses
     * const courseProgress = await prisma.courseProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseProgresses and only return the `id`
     * const courseProgressWithIdOnly = await prisma.courseProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseProgress.
     * @param {CourseProgressDeleteArgs} args - Arguments to delete one CourseProgress.
     * @example
     * // Delete one CourseProgress
     * const CourseProgress = await prisma.courseProgress.delete({
     *   where: {
     *     // ... filter to delete one CourseProgress
     *   }
     * })
     * 
     */
    delete<T extends CourseProgressDeleteArgs>(args: SelectSubset<T, CourseProgressDeleteArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseProgress.
     * @param {CourseProgressUpdateArgs} args - Arguments to update one CourseProgress.
     * @example
     * // Update one CourseProgress
     * const courseProgress = await prisma.courseProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseProgressUpdateArgs>(args: SelectSubset<T, CourseProgressUpdateArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseProgresses.
     * @param {CourseProgressDeleteManyArgs} args - Arguments to filter CourseProgresses to delete.
     * @example
     * // Delete a few CourseProgresses
     * const { count } = await prisma.courseProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseProgressDeleteManyArgs>(args?: SelectSubset<T, CourseProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseProgresses
     * const courseProgress = await prisma.courseProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseProgressUpdateManyArgs>(args: SelectSubset<T, CourseProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseProgresses and returns the data updated in the database.
     * @param {CourseProgressUpdateManyAndReturnArgs} args - Arguments to update many CourseProgresses.
     * @example
     * // Update many CourseProgresses
     * const courseProgress = await prisma.courseProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseProgresses and only return the `id`
     * const courseProgressWithIdOnly = await prisma.courseProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseProgress.
     * @param {CourseProgressUpsertArgs} args - Arguments to update or create a CourseProgress.
     * @example
     * // Update or create a CourseProgress
     * const courseProgress = await prisma.courseProgress.upsert({
     *   create: {
     *     // ... data to create a CourseProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseProgress we want to update
     *   }
     * })
     */
    upsert<T extends CourseProgressUpsertArgs>(args: SelectSubset<T, CourseProgressUpsertArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressCountArgs} args - Arguments to filter CourseProgresses to count.
     * @example
     * // Count the number of CourseProgresses
     * const count = await prisma.courseProgress.count({
     *   where: {
     *     // ... the filter for the CourseProgresses we want to count
     *   }
     * })
    **/
    count<T extends CourseProgressCountArgs>(
      args?: Subset<T, CourseProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseProgressAggregateArgs>(args: Subset<T, CourseProgressAggregateArgs>): Prisma.PrismaPromise<GetCourseProgressAggregateType<T>>

    /**
     * Group by CourseProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseProgressGroupByArgs['orderBy'] }
        : { orderBy?: CourseProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseProgress model
   */
  readonly fields: CourseProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    completedVideos<T extends CourseProgress$completedVideosArgs<ExtArgs> = {}>(args?: Subset<T, CourseProgress$completedVideosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseProgress model
   */
  interface CourseProgressFieldRefs {
    readonly id: FieldRef<"CourseProgress", 'String'>
    readonly createdAt: FieldRef<"CourseProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseProgress", 'DateTime'>
    readonly courseId: FieldRef<"CourseProgress", 'String'>
    readonly userId: FieldRef<"CourseProgress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CourseProgress findUnique
   */
  export type CourseProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgress to fetch.
     */
    where: CourseProgressWhereUniqueInput
  }

  /**
   * CourseProgress findUniqueOrThrow
   */
  export type CourseProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgress to fetch.
     */
    where: CourseProgressWhereUniqueInput
  }

  /**
   * CourseProgress findFirst
   */
  export type CourseProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgress to fetch.
     */
    where?: CourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProgresses to fetch.
     */
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseProgresses.
     */
    cursor?: CourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseProgresses.
     */
    distinct?: CourseProgressScalarFieldEnum | CourseProgressScalarFieldEnum[]
  }

  /**
   * CourseProgress findFirstOrThrow
   */
  export type CourseProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgress to fetch.
     */
    where?: CourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProgresses to fetch.
     */
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseProgresses.
     */
    cursor?: CourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseProgresses.
     */
    distinct?: CourseProgressScalarFieldEnum | CourseProgressScalarFieldEnum[]
  }

  /**
   * CourseProgress findMany
   */
  export type CourseProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgresses to fetch.
     */
    where?: CourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProgresses to fetch.
     */
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseProgresses.
     */
    cursor?: CourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProgresses.
     */
    skip?: number
    distinct?: CourseProgressScalarFieldEnum | CourseProgressScalarFieldEnum[]
  }

  /**
   * CourseProgress create
   */
  export type CourseProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseProgress.
     */
    data: XOR<CourseProgressCreateInput, CourseProgressUncheckedCreateInput>
  }

  /**
   * CourseProgress createMany
   */
  export type CourseProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseProgresses.
     */
    data: CourseProgressCreateManyInput | CourseProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseProgress createManyAndReturn
   */
  export type CourseProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * The data used to create many CourseProgresses.
     */
    data: CourseProgressCreateManyInput | CourseProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseProgress update
   */
  export type CourseProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseProgress.
     */
    data: XOR<CourseProgressUpdateInput, CourseProgressUncheckedUpdateInput>
    /**
     * Choose, which CourseProgress to update.
     */
    where: CourseProgressWhereUniqueInput
  }

  /**
   * CourseProgress updateMany
   */
  export type CourseProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseProgresses.
     */
    data: XOR<CourseProgressUpdateManyMutationInput, CourseProgressUncheckedUpdateManyInput>
    /**
     * Filter which CourseProgresses to update
     */
    where?: CourseProgressWhereInput
    /**
     * Limit how many CourseProgresses to update.
     */
    limit?: number
  }

  /**
   * CourseProgress updateManyAndReturn
   */
  export type CourseProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * The data used to update CourseProgresses.
     */
    data: XOR<CourseProgressUpdateManyMutationInput, CourseProgressUncheckedUpdateManyInput>
    /**
     * Filter which CourseProgresses to update
     */
    where?: CourseProgressWhereInput
    /**
     * Limit how many CourseProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseProgress upsert
   */
  export type CourseProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseProgress to update in case it exists.
     */
    where: CourseProgressWhereUniqueInput
    /**
     * In case the CourseProgress found by the `where` argument doesn't exist, create a new CourseProgress with this data.
     */
    create: XOR<CourseProgressCreateInput, CourseProgressUncheckedCreateInput>
    /**
     * In case the CourseProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseProgressUpdateInput, CourseProgressUncheckedUpdateInput>
  }

  /**
   * CourseProgress delete
   */
  export type CourseProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter which CourseProgress to delete.
     */
    where: CourseProgressWhereUniqueInput
  }

  /**
   * CourseProgress deleteMany
   */
  export type CourseProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseProgresses to delete
     */
    where?: CourseProgressWhereInput
    /**
     * Limit how many CourseProgresses to delete.
     */
    limit?: number
  }

  /**
   * CourseProgress.completedVideos
   */
  export type CourseProgress$completedVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    where?: SubsectionWhereInput
    orderBy?: SubsectionOrderByWithRelationInput | SubsectionOrderByWithRelationInput[]
    cursor?: SubsectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubsectionScalarFieldEnum | SubsectionScalarFieldEnum[]
  }

  /**
   * CourseProgress without action
   */
  export type CourseProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    paymentId: 'paymentId',
    razorpayOrderId: 'razorpayOrderId',
    razorpaySignature: 'razorpaySignature',
    paymentMethod: 'paymentMethod',
    receipt: 'receipt',
    courseId: 'courseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const RefundScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    amount: 'amount',
    status: 'status',
    reason: 'reason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RefundScalarFieldEnum = (typeof RefundScalarFieldEnum)[keyof typeof RefundScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    password: 'password',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    otp: 'otp',
    otpExpiry: 'otpExpiry',
    accountType: 'accountType',
    isActive: 'isActive',
    isApproved: 'isApproved',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    revoked: 'revoked',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    courseName: 'courseName',
    courseDescription: 'courseDescription',
    whatYouWillLearn: 'whatYouWillLearn',
    price: 'price',
    thumbnail: 'thumbnail',
    tag: 'tag',
    instructions: 'instructions',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    instructorId: 'instructorId',
    categoryId: 'categoryId'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    sectionName: 'sectionName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    courseId: 'courseId'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const SubsectionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    timeDuration: 'timeDuration',
    description: 'description',
    videoUrls: 'videoUrls',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    sectionId: 'sectionId'
  };

  export type SubsectionScalarFieldEnum = (typeof SubsectionScalarFieldEnum)[keyof typeof SubsectionScalarFieldEnum]


  export const RatingAndReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    review: 'review',
    createdAt: 'createdAt',
    courseId: 'courseId',
    userId: 'userId'
  };

  export type RatingAndReviewScalarFieldEnum = (typeof RatingAndReviewScalarFieldEnum)[keyof typeof RatingAndReviewScalarFieldEnum]


  export const CourseProgressScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    courseId: 'courseId',
    userId: 'userId'
  };

  export type CourseProgressScalarFieldEnum = (typeof CourseProgressScalarFieldEnum)[keyof typeof CourseProgressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CourseStatus'
   */
  export type EnumCourseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseStatus'>
    


  /**
   * Reference to a field of type 'CourseStatus[]'
   */
  export type ListEnumCourseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    amount?: FloatFilter<"Order"> | number
    currency?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    paymentId?: StringNullableFilter<"Order"> | string | null
    razorpayOrderId?: StringFilter<"Order"> | string
    razorpaySignature?: StringNullableFilter<"Order"> | string | null
    paymentMethod?: StringNullableFilter<"Order"> | string | null
    receipt?: StringNullableFilter<"Order"> | string | null
    courseId?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    refunds?: RefundListRelationFilter
    course?: XOR<CourseNullableScalarRelationFilter, CourseWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    razorpayOrderId?: SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    receipt?: SortOrderInput | SortOrder
    courseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    refunds?: RefundOrderByRelationAggregateInput
    course?: CourseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    razorpayOrderId?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringFilter<"Order"> | string
    amount?: FloatFilter<"Order"> | number
    currency?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    paymentId?: StringNullableFilter<"Order"> | string | null
    razorpaySignature?: StringNullableFilter<"Order"> | string | null
    paymentMethod?: StringNullableFilter<"Order"> | string | null
    receipt?: StringNullableFilter<"Order"> | string | null
    courseId?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    refunds?: RefundListRelationFilter
    course?: XOR<CourseNullableScalarRelationFilter, CourseWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "razorpayOrderId">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    razorpayOrderId?: SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    receipt?: SortOrderInput | SortOrder
    courseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    amount?: FloatWithAggregatesFilter<"Order"> | number
    currency?: StringWithAggregatesFilter<"Order"> | string
    status?: StringWithAggregatesFilter<"Order"> | string
    paymentId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    razorpayOrderId?: StringWithAggregatesFilter<"Order"> | string
    razorpaySignature?: StringNullableWithAggregatesFilter<"Order"> | string | null
    paymentMethod?: StringNullableWithAggregatesFilter<"Order"> | string | null
    receipt?: StringNullableWithAggregatesFilter<"Order"> | string | null
    courseId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type RefundWhereInput = {
    AND?: RefundWhereInput | RefundWhereInput[]
    OR?: RefundWhereInput[]
    NOT?: RefundWhereInput | RefundWhereInput[]
    id?: StringFilter<"Refund"> | string
    orderId?: StringFilter<"Refund"> | string
    amount?: FloatFilter<"Refund"> | number
    status?: StringFilter<"Refund"> | string
    reason?: StringNullableFilter<"Refund"> | string | null
    createdAt?: DateTimeFilter<"Refund"> | Date | string
    updatedAt?: DateTimeFilter<"Refund"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type RefundOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type RefundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RefundWhereInput | RefundWhereInput[]
    OR?: RefundWhereInput[]
    NOT?: RefundWhereInput | RefundWhereInput[]
    orderId?: StringFilter<"Refund"> | string
    amount?: FloatFilter<"Refund"> | number
    status?: StringFilter<"Refund"> | string
    reason?: StringNullableFilter<"Refund"> | string | null
    createdAt?: DateTimeFilter<"Refund"> | Date | string
    updatedAt?: DateTimeFilter<"Refund"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type RefundOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RefundCountOrderByAggregateInput
    _avg?: RefundAvgOrderByAggregateInput
    _max?: RefundMaxOrderByAggregateInput
    _min?: RefundMinOrderByAggregateInput
    _sum?: RefundSumOrderByAggregateInput
  }

  export type RefundScalarWhereWithAggregatesInput = {
    AND?: RefundScalarWhereWithAggregatesInput | RefundScalarWhereWithAggregatesInput[]
    OR?: RefundScalarWhereWithAggregatesInput[]
    NOT?: RefundScalarWhereWithAggregatesInput | RefundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Refund"> | string
    orderId?: StringWithAggregatesFilter<"Refund"> | string
    amount?: FloatWithAggregatesFilter<"Refund"> | number
    status?: StringWithAggregatesFilter<"Refund"> | string
    reason?: StringNullableWithAggregatesFilter<"Refund"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Refund"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Refund"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    accountType?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isApproved?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
    coursesCreated?: CourseListRelationFilter
    coursesEnrolled?: CourseListRelationFilter
    ratings?: RatingAndReviewListRelationFilter
    courseProgress?: CourseProgressListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    accountType?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isApproved?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    coursesCreated?: CourseOrderByRelationAggregateInput
    coursesEnrolled?: CourseOrderByRelationAggregateInput
    ratings?: RatingAndReviewOrderByRelationAggregateInput
    courseProgress?: CourseProgressOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    accountType?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isApproved?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
    coursesCreated?: CourseListRelationFilter
    coursesEnrolled?: CourseListRelationFilter
    ratings?: RatingAndReviewListRelationFilter
    courseProgress?: CourseProgressListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    accountType?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isApproved?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    otp?: StringNullableWithAggregatesFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    accountType?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    isApproved?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    revoked?: BoolWithAggregatesFilter<"RefreshToken"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    courseName?: StringFilter<"Course"> | string
    courseDescription?: StringFilter<"Course"> | string
    whatYouWillLearn?: StringNullableFilter<"Course"> | string | null
    price?: FloatFilter<"Course"> | number
    thumbnail?: StringNullableFilter<"Course"> | string | null
    tag?: StringNullableListFilter<"Course">
    instructions?: StringNullableListFilter<"Course">
    status?: EnumCourseStatusFilter<"Course"> | $Enums.CourseStatus
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    instructorId?: StringFilter<"Course"> | string
    categoryId?: StringNullableFilter<"Course"> | string | null
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    studentsEnrolled?: UserListRelationFilter
    sections?: SectionListRelationFilter
    ratings?: RatingAndReviewListRelationFilter
    courseProgress?: CourseProgressListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    courseName?: SortOrder
    courseDescription?: SortOrder
    whatYouWillLearn?: SortOrderInput | SortOrder
    price?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    tag?: SortOrder
    instructions?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instructorId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    instructor?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    studentsEnrolled?: UserOrderByRelationAggregateInput
    sections?: SectionOrderByRelationAggregateInput
    ratings?: RatingAndReviewOrderByRelationAggregateInput
    courseProgress?: CourseProgressOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    courseName?: StringFilter<"Course"> | string
    courseDescription?: StringFilter<"Course"> | string
    whatYouWillLearn?: StringNullableFilter<"Course"> | string | null
    price?: FloatFilter<"Course"> | number
    thumbnail?: StringNullableFilter<"Course"> | string | null
    tag?: StringNullableListFilter<"Course">
    instructions?: StringNullableListFilter<"Course">
    status?: EnumCourseStatusFilter<"Course"> | $Enums.CourseStatus
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    instructorId?: StringFilter<"Course"> | string
    categoryId?: StringNullableFilter<"Course"> | string | null
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    studentsEnrolled?: UserListRelationFilter
    sections?: SectionListRelationFilter
    ratings?: RatingAndReviewListRelationFilter
    courseProgress?: CourseProgressListRelationFilter
    orders?: OrderListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    courseName?: SortOrder
    courseDescription?: SortOrder
    whatYouWillLearn?: SortOrderInput | SortOrder
    price?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    tag?: SortOrder
    instructions?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instructorId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    courseName?: StringWithAggregatesFilter<"Course"> | string
    courseDescription?: StringWithAggregatesFilter<"Course"> | string
    whatYouWillLearn?: StringNullableWithAggregatesFilter<"Course"> | string | null
    price?: FloatWithAggregatesFilter<"Course"> | number
    thumbnail?: StringNullableWithAggregatesFilter<"Course"> | string | null
    tag?: StringNullableListFilter<"Course">
    instructions?: StringNullableListFilter<"Course">
    status?: EnumCourseStatusWithAggregatesFilter<"Course"> | $Enums.CourseStatus
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    instructorId?: StringWithAggregatesFilter<"Course"> | string
    categoryId?: StringNullableWithAggregatesFilter<"Course"> | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    courses?: CourseListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    courses?: CourseListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: StringFilter<"Section"> | string
    sectionName?: StringFilter<"Section"> | string
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    courseId?: StringFilter<"Section"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    subsections?: SubsectionListRelationFilter
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    sectionName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
    subsections?: SubsectionOrderByRelationAggregateInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    sectionName?: StringFilter<"Section"> | string
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    courseId?: StringFilter<"Section"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    subsections?: SubsectionListRelationFilter
  }, "id">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    sectionName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Section"> | string
    sectionName?: StringWithAggregatesFilter<"Section"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
    courseId?: StringWithAggregatesFilter<"Section"> | string
  }

  export type SubsectionWhereInput = {
    AND?: SubsectionWhereInput | SubsectionWhereInput[]
    OR?: SubsectionWhereInput[]
    NOT?: SubsectionWhereInput | SubsectionWhereInput[]
    id?: StringFilter<"Subsection"> | string
    title?: StringFilter<"Subsection"> | string
    timeDuration?: StringFilter<"Subsection"> | string
    description?: StringNullableFilter<"Subsection"> | string | null
    videoUrls?: StringNullableListFilter<"Subsection">
    createdAt?: DateTimeFilter<"Subsection"> | Date | string
    updatedAt?: DateTimeFilter<"Subsection"> | Date | string
    sectionId?: StringFilter<"Subsection"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    completedBy?: CourseProgressListRelationFilter
  }

  export type SubsectionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    timeDuration?: SortOrder
    description?: SortOrderInput | SortOrder
    videoUrls?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrder
    section?: SectionOrderByWithRelationInput
    completedBy?: CourseProgressOrderByRelationAggregateInput
  }

  export type SubsectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubsectionWhereInput | SubsectionWhereInput[]
    OR?: SubsectionWhereInput[]
    NOT?: SubsectionWhereInput | SubsectionWhereInput[]
    title?: StringFilter<"Subsection"> | string
    timeDuration?: StringFilter<"Subsection"> | string
    description?: StringNullableFilter<"Subsection"> | string | null
    videoUrls?: StringNullableListFilter<"Subsection">
    createdAt?: DateTimeFilter<"Subsection"> | Date | string
    updatedAt?: DateTimeFilter<"Subsection"> | Date | string
    sectionId?: StringFilter<"Subsection"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    completedBy?: CourseProgressListRelationFilter
  }, "id">

  export type SubsectionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    timeDuration?: SortOrder
    description?: SortOrderInput | SortOrder
    videoUrls?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrder
    _count?: SubsectionCountOrderByAggregateInput
    _max?: SubsectionMaxOrderByAggregateInput
    _min?: SubsectionMinOrderByAggregateInput
  }

  export type SubsectionScalarWhereWithAggregatesInput = {
    AND?: SubsectionScalarWhereWithAggregatesInput | SubsectionScalarWhereWithAggregatesInput[]
    OR?: SubsectionScalarWhereWithAggregatesInput[]
    NOT?: SubsectionScalarWhereWithAggregatesInput | SubsectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subsection"> | string
    title?: StringWithAggregatesFilter<"Subsection"> | string
    timeDuration?: StringWithAggregatesFilter<"Subsection"> | string
    description?: StringNullableWithAggregatesFilter<"Subsection"> | string | null
    videoUrls?: StringNullableListFilter<"Subsection">
    createdAt?: DateTimeWithAggregatesFilter<"Subsection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subsection"> | Date | string
    sectionId?: StringWithAggregatesFilter<"Subsection"> | string
  }

  export type RatingAndReviewWhereInput = {
    AND?: RatingAndReviewWhereInput | RatingAndReviewWhereInput[]
    OR?: RatingAndReviewWhereInput[]
    NOT?: RatingAndReviewWhereInput | RatingAndReviewWhereInput[]
    id?: StringFilter<"RatingAndReview"> | string
    rating?: IntFilter<"RatingAndReview"> | number
    review?: StringFilter<"RatingAndReview"> | string
    createdAt?: DateTimeFilter<"RatingAndReview"> | Date | string
    courseId?: StringFilter<"RatingAndReview"> | string
    userId?: StringFilter<"RatingAndReview"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RatingAndReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    course?: CourseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RatingAndReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId_userId?: RatingAndReviewCourseIdUserIdCompoundUniqueInput
    AND?: RatingAndReviewWhereInput | RatingAndReviewWhereInput[]
    OR?: RatingAndReviewWhereInput[]
    NOT?: RatingAndReviewWhereInput | RatingAndReviewWhereInput[]
    rating?: IntFilter<"RatingAndReview"> | number
    review?: StringFilter<"RatingAndReview"> | string
    createdAt?: DateTimeFilter<"RatingAndReview"> | Date | string
    courseId?: StringFilter<"RatingAndReview"> | string
    userId?: StringFilter<"RatingAndReview"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "courseId_userId">

  export type RatingAndReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    _count?: RatingAndReviewCountOrderByAggregateInput
    _avg?: RatingAndReviewAvgOrderByAggregateInput
    _max?: RatingAndReviewMaxOrderByAggregateInput
    _min?: RatingAndReviewMinOrderByAggregateInput
    _sum?: RatingAndReviewSumOrderByAggregateInput
  }

  export type RatingAndReviewScalarWhereWithAggregatesInput = {
    AND?: RatingAndReviewScalarWhereWithAggregatesInput | RatingAndReviewScalarWhereWithAggregatesInput[]
    OR?: RatingAndReviewScalarWhereWithAggregatesInput[]
    NOT?: RatingAndReviewScalarWhereWithAggregatesInput | RatingAndReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RatingAndReview"> | string
    rating?: IntWithAggregatesFilter<"RatingAndReview"> | number
    review?: StringWithAggregatesFilter<"RatingAndReview"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RatingAndReview"> | Date | string
    courseId?: StringWithAggregatesFilter<"RatingAndReview"> | string
    userId?: StringWithAggregatesFilter<"RatingAndReview"> | string
  }

  export type CourseProgressWhereInput = {
    AND?: CourseProgressWhereInput | CourseProgressWhereInput[]
    OR?: CourseProgressWhereInput[]
    NOT?: CourseProgressWhereInput | CourseProgressWhereInput[]
    id?: StringFilter<"CourseProgress"> | string
    createdAt?: DateTimeFilter<"CourseProgress"> | Date | string
    updatedAt?: DateTimeFilter<"CourseProgress"> | Date | string
    courseId?: StringFilter<"CourseProgress"> | string
    userId?: StringFilter<"CourseProgress"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    completedVideos?: SubsectionListRelationFilter
  }

  export type CourseProgressOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    course?: CourseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    completedVideos?: SubsectionOrderByRelationAggregateInput
  }

  export type CourseProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId_userId?: CourseProgressCourseIdUserIdCompoundUniqueInput
    AND?: CourseProgressWhereInput | CourseProgressWhereInput[]
    OR?: CourseProgressWhereInput[]
    NOT?: CourseProgressWhereInput | CourseProgressWhereInput[]
    createdAt?: DateTimeFilter<"CourseProgress"> | Date | string
    updatedAt?: DateTimeFilter<"CourseProgress"> | Date | string
    courseId?: StringFilter<"CourseProgress"> | string
    userId?: StringFilter<"CourseProgress"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    completedVideos?: SubsectionListRelationFilter
  }, "id" | "courseId_userId">

  export type CourseProgressOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    _count?: CourseProgressCountOrderByAggregateInput
    _max?: CourseProgressMaxOrderByAggregateInput
    _min?: CourseProgressMinOrderByAggregateInput
  }

  export type CourseProgressScalarWhereWithAggregatesInput = {
    AND?: CourseProgressScalarWhereWithAggregatesInput | CourseProgressScalarWhereWithAggregatesInput[]
    OR?: CourseProgressScalarWhereWithAggregatesInput[]
    NOT?: CourseProgressScalarWhereWithAggregatesInput | CourseProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseProgress"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CourseProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseProgress"> | Date | string
    courseId?: StringWithAggregatesFilter<"CourseProgress"> | string
    userId?: StringWithAggregatesFilter<"CourseProgress"> | string
  }

  export type OrderCreateInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    paymentId?: string | null
    razorpayOrderId: string
    razorpaySignature?: string | null
    paymentMethod?: string | null
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refunds?: RefundCreateNestedManyWithoutOrderInput
    course?: CourseCreateNestedOneWithoutOrdersInput
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    currency?: string
    status?: string
    paymentId?: string | null
    razorpayOrderId: string
    razorpaySignature?: string | null
    paymentMethod?: string | null
    receipt?: string | null
    courseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refunds?: RefundUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refunds?: RefundUpdateManyWithoutOrderNestedInput
    course?: CourseUpdateOneWithoutOrdersNestedInput
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refunds?: RefundUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    userId: string
    amount: number
    currency?: string
    status?: string
    paymentId?: string | null
    razorpayOrderId: string
    razorpaySignature?: string | null
    paymentMethod?: string | null
    receipt?: string | null
    courseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundCreateInput = {
    id?: string
    amount: number
    status?: string
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutRefundsInput
  }

  export type RefundUncheckedCreateInput = {
    id?: string
    orderId: string
    amount: number
    status?: string
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutRefundsNestedInput
  }

  export type RefundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundCreateManyInput = {
    id?: string
    orderId: string
    amount: number
    status?: string
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    accountType?: string | null
    isActive?: boolean
    isApproved?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    coursesCreated?: CourseCreateNestedManyWithoutInstructorInput
    coursesEnrolled?: CourseCreateNestedManyWithoutStudentsEnrolledInput
    ratings?: RatingAndReviewCreateNestedManyWithoutUserInput
    courseProgress?: CourseProgressCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    accountType?: string | null
    isActive?: boolean
    isApproved?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    coursesCreated?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    coursesEnrolled?: CourseUncheckedCreateNestedManyWithoutStudentsEnrolledInput
    ratings?: RatingAndReviewUncheckedCreateNestedManyWithoutUserInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    coursesCreated?: CourseUpdateManyWithoutInstructorNestedInput
    coursesEnrolled?: CourseUpdateManyWithoutStudentsEnrolledNestedInput
    ratings?: RatingAndReviewUpdateManyWithoutUserNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    coursesCreated?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    coursesEnrolled?: CourseUncheckedUpdateManyWithoutStudentsEnrolledNestedInput
    ratings?: RatingAndReviewUncheckedUpdateManyWithoutUserNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    accountType?: string | null
    isActive?: boolean
    isApproved?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    revoked?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    revoked?: boolean
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    revoked?: boolean
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    id?: string
    courseName: string
    courseDescription: string
    whatYouWillLearn?: string | null
    price: number
    thumbnail?: string | null
    tag?: CourseCreatetagInput | string[]
    instructions?: CourseCreateinstructionsInput | string[]
    status?: $Enums.CourseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: UserCreateNestedOneWithoutCoursesCreatedInput
    category?: CategoryCreateNestedOneWithoutCoursesInput
    studentsEnrolled?: UserCreateNestedManyWithoutCoursesEnrolledInput
    sections?: SectionCreateNestedManyWithoutCourseInput
    ratings?: RatingAndReviewCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressCreateNestedManyWithoutCourseInput
    orders?: OrderCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    courseName: string
    courseDescription: string
    whatYouWillLearn?: string | null
    price: number
    thumbnail?: string | null
    tag?: CourseCreatetagInput | string[]
    instructions?: CourseCreateinstructionsInput | string[]
    status?: $Enums.CourseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorId: string
    categoryId?: string | null
    studentsEnrolled?: UserUncheckedCreateNestedManyWithoutCoursesEnrolledInput
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput
    ratings?: RatingAndReviewUncheckedCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutCourseInput
    orders?: OrderUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutCoursesCreatedNestedInput
    category?: CategoryUpdateOneWithoutCoursesNestedInput
    studentsEnrolled?: UserUpdateManyWithoutCoursesEnrolledNestedInput
    sections?: SectionUpdateManyWithoutCourseNestedInput
    ratings?: RatingAndReviewUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutCourseNestedInput
    orders?: OrderUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    studentsEnrolled?: UserUncheckedUpdateManyWithoutCoursesEnrolledNestedInput
    sections?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    ratings?: RatingAndReviewUncheckedUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutCourseNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    courseName: string
    courseDescription: string
    whatYouWillLearn?: string | null
    price: number
    thumbnail?: string | null
    tag?: CourseCreatetagInput | string[]
    instructions?: CourseCreateinstructionsInput | string[]
    status?: $Enums.CourseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorId: string
    categoryId?: string | null
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionCreateInput = {
    id?: string
    sectionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutSectionsInput
    subsections?: SubsectionCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateInput = {
    id?: string
    sectionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
    subsections?: SubsectionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutSectionsNestedInput
    subsections?: SubsectionUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    subsections?: SubsectionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: string
    sectionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
  }

  export type SectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type SubsectionCreateInput = {
    id?: string
    title: string
    timeDuration: string
    description?: string | null
    videoUrls?: SubsectionCreatevideoUrlsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    section: SectionCreateNestedOneWithoutSubsectionsInput
    completedBy?: CourseProgressCreateNestedManyWithoutCompletedVideosInput
  }

  export type SubsectionUncheckedCreateInput = {
    id?: string
    title: string
    timeDuration: string
    description?: string | null
    videoUrls?: SubsectionCreatevideoUrlsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId: string
    completedBy?: CourseProgressUncheckedCreateNestedManyWithoutCompletedVideosInput
  }

  export type SubsectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    timeDuration?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrls?: SubsectionUpdatevideoUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: SectionUpdateOneRequiredWithoutSubsectionsNestedInput
    completedBy?: CourseProgressUpdateManyWithoutCompletedVideosNestedInput
  }

  export type SubsectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    timeDuration?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrls?: SubsectionUpdatevideoUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: StringFieldUpdateOperationsInput | string
    completedBy?: CourseProgressUncheckedUpdateManyWithoutCompletedVideosNestedInput
  }

  export type SubsectionCreateManyInput = {
    id?: string
    title: string
    timeDuration: string
    description?: string | null
    videoUrls?: SubsectionCreatevideoUrlsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId: string
  }

  export type SubsectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    timeDuration?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrls?: SubsectionUpdatevideoUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubsectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    timeDuration?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrls?: SubsectionUpdatevideoUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type RatingAndReviewCreateInput = {
    id?: string
    rating: number
    review: string
    createdAt?: Date | string
    course: CourseCreateNestedOneWithoutRatingsInput
    user: UserCreateNestedOneWithoutRatingsInput
  }

  export type RatingAndReviewUncheckedCreateInput = {
    id?: string
    rating: number
    review: string
    createdAt?: Date | string
    courseId: string
    userId: string
  }

  export type RatingAndReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutRatingsNestedInput
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingAndReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RatingAndReviewCreateManyInput = {
    id?: string
    rating: number
    review: string
    createdAt?: Date | string
    courseId: string
    userId: string
  }

  export type RatingAndReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingAndReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseProgressCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutCourseProgressInput
    user: UserCreateNestedOneWithoutCourseProgressInput
    completedVideos?: SubsectionCreateNestedManyWithoutCompletedByInput
  }

  export type CourseProgressUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
    userId: string
    completedVideos?: SubsectionUncheckedCreateNestedManyWithoutCompletedByInput
  }

  export type CourseProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCourseProgressNestedInput
    user?: UserUpdateOneRequiredWithoutCourseProgressNestedInput
    completedVideos?: SubsectionUpdateManyWithoutCompletedByNestedInput
  }

  export type CourseProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completedVideos?: SubsectionUncheckedUpdateManyWithoutCompletedByNestedInput
  }

  export type CourseProgressCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
    userId: string
  }

  export type CourseProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RefundListRelationFilter = {
    every?: RefundWhereInput
    some?: RefundWhereInput
    none?: RefundWhereInput
  }

  export type CourseNullableScalarRelationFilter = {
    is?: CourseWhereInput | null
    isNot?: CourseWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RefundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpaySignature?: SortOrder
    paymentMethod?: SortOrder
    receipt?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpaySignature?: SortOrder
    paymentMethod?: SortOrder
    receipt?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpaySignature?: SortOrder
    paymentMethod?: SortOrder
    receipt?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type RefundCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefundAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type RefundMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefundMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefundSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type RatingAndReviewListRelationFilter = {
    every?: RatingAndReviewWhereInput
    some?: RatingAndReviewWhereInput
    none?: RatingAndReviewWhereInput
  }

  export type CourseProgressListRelationFilter = {
    every?: CourseProgressWhereInput
    some?: CourseProgressWhereInput
    none?: CourseProgressWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingAndReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    accountType?: SortOrder
    isActive?: SortOrder
    isApproved?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    accountType?: SortOrder
    isActive?: SortOrder
    isApproved?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    accountType?: SortOrder
    isActive?: SortOrder
    isApproved?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumCourseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseStatus | EnumCourseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseStatusFilter<$PrismaModel> | $Enums.CourseStatus
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SectionListRelationFilter = {
    every?: SectionWhereInput
    some?: SectionWhereInput
    none?: SectionWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    courseName?: SortOrder
    courseDescription?: SortOrder
    whatYouWillLearn?: SortOrder
    price?: SortOrder
    thumbnail?: SortOrder
    tag?: SortOrder
    instructions?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instructorId?: SortOrder
    categoryId?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    courseName?: SortOrder
    courseDescription?: SortOrder
    whatYouWillLearn?: SortOrder
    price?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instructorId?: SortOrder
    categoryId?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    courseName?: SortOrder
    courseDescription?: SortOrder
    whatYouWillLearn?: SortOrder
    price?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instructorId?: SortOrder
    categoryId?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumCourseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseStatus | EnumCourseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseStatusWithAggregatesFilter<$PrismaModel> | $Enums.CourseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseStatusFilter<$PrismaModel>
    _max?: NestedEnumCourseStatusFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type SubsectionListRelationFilter = {
    every?: SubsectionWhereInput
    some?: SubsectionWhereInput
    none?: SubsectionWhereInput
  }

  export type SubsectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    sectionName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    sectionName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    sectionName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
  }

  export type SectionScalarRelationFilter = {
    is?: SectionWhereInput
    isNot?: SectionWhereInput
  }

  export type SubsectionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    timeDuration?: SortOrder
    description?: SortOrder
    videoUrls?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrder
  }

  export type SubsectionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    timeDuration?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrder
  }

  export type SubsectionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    timeDuration?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sectionId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RatingAndReviewCourseIdUserIdCompoundUniqueInput = {
    courseId: string
    userId: string
  }

  export type RatingAndReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
  }

  export type RatingAndReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type RatingAndReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
  }

  export type RatingAndReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
  }

  export type RatingAndReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CourseProgressCourseIdUserIdCompoundUniqueInput = {
    courseId: string
    userId: string
  }

  export type CourseProgressCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
  }

  export type CourseProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
  }

  export type CourseProgressMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
  }

  export type RefundCreateNestedManyWithoutOrderInput = {
    create?: XOR<RefundCreateWithoutOrderInput, RefundUncheckedCreateWithoutOrderInput> | RefundCreateWithoutOrderInput[] | RefundUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: RefundCreateOrConnectWithoutOrderInput | RefundCreateOrConnectWithoutOrderInput[]
    createMany?: RefundCreateManyOrderInputEnvelope
    connect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
  }

  export type CourseCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CourseCreateWithoutOrdersInput, CourseUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CourseCreateOrConnectWithoutOrdersInput
    connect?: CourseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type RefundUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<RefundCreateWithoutOrderInput, RefundUncheckedCreateWithoutOrderInput> | RefundCreateWithoutOrderInput[] | RefundUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: RefundCreateOrConnectWithoutOrderInput | RefundCreateOrConnectWithoutOrderInput[]
    createMany?: RefundCreateManyOrderInputEnvelope
    connect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RefundUpdateManyWithoutOrderNestedInput = {
    create?: XOR<RefundCreateWithoutOrderInput, RefundUncheckedCreateWithoutOrderInput> | RefundCreateWithoutOrderInput[] | RefundUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: RefundCreateOrConnectWithoutOrderInput | RefundCreateOrConnectWithoutOrderInput[]
    upsert?: RefundUpsertWithWhereUniqueWithoutOrderInput | RefundUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: RefundCreateManyOrderInputEnvelope
    set?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    disconnect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    delete?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    connect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    update?: RefundUpdateWithWhereUniqueWithoutOrderInput | RefundUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: RefundUpdateManyWithWhereWithoutOrderInput | RefundUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: RefundScalarWhereInput | RefundScalarWhereInput[]
  }

  export type CourseUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<CourseCreateWithoutOrdersInput, CourseUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CourseCreateOrConnectWithoutOrdersInput
    upsert?: CourseUpsertWithoutOrdersInput
    disconnect?: CourseWhereInput | boolean
    delete?: CourseWhereInput | boolean
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutOrdersInput, CourseUpdateWithoutOrdersInput>, CourseUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type RefundUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<RefundCreateWithoutOrderInput, RefundUncheckedCreateWithoutOrderInput> | RefundCreateWithoutOrderInput[] | RefundUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: RefundCreateOrConnectWithoutOrderInput | RefundCreateOrConnectWithoutOrderInput[]
    upsert?: RefundUpsertWithWhereUniqueWithoutOrderInput | RefundUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: RefundCreateManyOrderInputEnvelope
    set?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    disconnect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    delete?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    connect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    update?: RefundUpdateWithWhereUniqueWithoutOrderInput | RefundUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: RefundUpdateManyWithWhereWithoutOrderInput | RefundUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: RefundScalarWhereInput | RefundScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutRefundsInput = {
    create?: XOR<OrderCreateWithoutRefundsInput, OrderUncheckedCreateWithoutRefundsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutRefundsInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutRefundsNestedInput = {
    create?: XOR<OrderCreateWithoutRefundsInput, OrderUncheckedCreateWithoutRefundsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutRefundsInput
    upsert?: OrderUpsertWithoutRefundsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutRefundsInput, OrderUpdateWithoutRefundsInput>, OrderUncheckedUpdateWithoutRefundsInput>
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutInstructorInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutStudentsEnrolledInput = {
    create?: XOR<CourseCreateWithoutStudentsEnrolledInput, CourseUncheckedCreateWithoutStudentsEnrolledInput> | CourseCreateWithoutStudentsEnrolledInput[] | CourseUncheckedCreateWithoutStudentsEnrolledInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutStudentsEnrolledInput | CourseCreateOrConnectWithoutStudentsEnrolledInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type RatingAndReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingAndReviewCreateWithoutUserInput, RatingAndReviewUncheckedCreateWithoutUserInput> | RatingAndReviewCreateWithoutUserInput[] | RatingAndReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingAndReviewCreateOrConnectWithoutUserInput | RatingAndReviewCreateOrConnectWithoutUserInput[]
    createMany?: RatingAndReviewCreateManyUserInputEnvelope
    connect?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
  }

  export type CourseProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseProgressCreateWithoutUserInput, CourseProgressUncheckedCreateWithoutUserInput> | CourseProgressCreateWithoutUserInput[] | CourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutUserInput | CourseProgressCreateOrConnectWithoutUserInput[]
    createMany?: CourseProgressCreateManyUserInputEnvelope
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutStudentsEnrolledInput = {
    create?: XOR<CourseCreateWithoutStudentsEnrolledInput, CourseUncheckedCreateWithoutStudentsEnrolledInput> | CourseCreateWithoutStudentsEnrolledInput[] | CourseUncheckedCreateWithoutStudentsEnrolledInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutStudentsEnrolledInput | CourseCreateOrConnectWithoutStudentsEnrolledInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type RatingAndReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingAndReviewCreateWithoutUserInput, RatingAndReviewUncheckedCreateWithoutUserInput> | RatingAndReviewCreateWithoutUserInput[] | RatingAndReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingAndReviewCreateOrConnectWithoutUserInput | RatingAndReviewCreateOrConnectWithoutUserInput[]
    createMany?: RatingAndReviewCreateManyUserInputEnvelope
    connect?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
  }

  export type CourseProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseProgressCreateWithoutUserInput, CourseProgressUncheckedCreateWithoutUserInput> | CourseProgressCreateWithoutUserInput[] | CourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutUserInput | CourseProgressCreateOrConnectWithoutUserInput[]
    createMany?: CourseProgressCreateManyUserInputEnvelope
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutInstructorInput | CourseUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutInstructorInput | CourseUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutInstructorInput | CourseUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutStudentsEnrolledNestedInput = {
    create?: XOR<CourseCreateWithoutStudentsEnrolledInput, CourseUncheckedCreateWithoutStudentsEnrolledInput> | CourseCreateWithoutStudentsEnrolledInput[] | CourseUncheckedCreateWithoutStudentsEnrolledInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutStudentsEnrolledInput | CourseCreateOrConnectWithoutStudentsEnrolledInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutStudentsEnrolledInput | CourseUpsertWithWhereUniqueWithoutStudentsEnrolledInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutStudentsEnrolledInput | CourseUpdateWithWhereUniqueWithoutStudentsEnrolledInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutStudentsEnrolledInput | CourseUpdateManyWithWhereWithoutStudentsEnrolledInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type RatingAndReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingAndReviewCreateWithoutUserInput, RatingAndReviewUncheckedCreateWithoutUserInput> | RatingAndReviewCreateWithoutUserInput[] | RatingAndReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingAndReviewCreateOrConnectWithoutUserInput | RatingAndReviewCreateOrConnectWithoutUserInput[]
    upsert?: RatingAndReviewUpsertWithWhereUniqueWithoutUserInput | RatingAndReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingAndReviewCreateManyUserInputEnvelope
    set?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
    disconnect?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
    delete?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
    connect?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
    update?: RatingAndReviewUpdateWithWhereUniqueWithoutUserInput | RatingAndReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingAndReviewUpdateManyWithWhereWithoutUserInput | RatingAndReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingAndReviewScalarWhereInput | RatingAndReviewScalarWhereInput[]
  }

  export type CourseProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseProgressCreateWithoutUserInput, CourseProgressUncheckedCreateWithoutUserInput> | CourseProgressCreateWithoutUserInput[] | CourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutUserInput | CourseProgressCreateOrConnectWithoutUserInput[]
    upsert?: CourseProgressUpsertWithWhereUniqueWithoutUserInput | CourseProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseProgressCreateManyUserInputEnvelope
    set?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    disconnect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    delete?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    update?: CourseProgressUpdateWithWhereUniqueWithoutUserInput | CourseProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseProgressUpdateManyWithWhereWithoutUserInput | CourseProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseProgressScalarWhereInput | CourseProgressScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput> | CourseCreateWithoutInstructorInput[] | CourseUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorInput | CourseCreateOrConnectWithoutInstructorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutInstructorInput | CourseUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: CourseCreateManyInstructorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutInstructorInput | CourseUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutInstructorInput | CourseUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutStudentsEnrolledNestedInput = {
    create?: XOR<CourseCreateWithoutStudentsEnrolledInput, CourseUncheckedCreateWithoutStudentsEnrolledInput> | CourseCreateWithoutStudentsEnrolledInput[] | CourseUncheckedCreateWithoutStudentsEnrolledInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutStudentsEnrolledInput | CourseCreateOrConnectWithoutStudentsEnrolledInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutStudentsEnrolledInput | CourseUpsertWithWhereUniqueWithoutStudentsEnrolledInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutStudentsEnrolledInput | CourseUpdateWithWhereUniqueWithoutStudentsEnrolledInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutStudentsEnrolledInput | CourseUpdateManyWithWhereWithoutStudentsEnrolledInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type RatingAndReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingAndReviewCreateWithoutUserInput, RatingAndReviewUncheckedCreateWithoutUserInput> | RatingAndReviewCreateWithoutUserInput[] | RatingAndReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingAndReviewCreateOrConnectWithoutUserInput | RatingAndReviewCreateOrConnectWithoutUserInput[]
    upsert?: RatingAndReviewUpsertWithWhereUniqueWithoutUserInput | RatingAndReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingAndReviewCreateManyUserInputEnvelope
    set?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
    disconnect?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
    delete?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
    connect?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
    update?: RatingAndReviewUpdateWithWhereUniqueWithoutUserInput | RatingAndReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingAndReviewUpdateManyWithWhereWithoutUserInput | RatingAndReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingAndReviewScalarWhereInput | RatingAndReviewScalarWhereInput[]
  }

  export type CourseProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseProgressCreateWithoutUserInput, CourseProgressUncheckedCreateWithoutUserInput> | CourseProgressCreateWithoutUserInput[] | CourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutUserInput | CourseProgressCreateOrConnectWithoutUserInput[]
    upsert?: CourseProgressUpsertWithWhereUniqueWithoutUserInput | CourseProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseProgressCreateManyUserInputEnvelope
    set?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    disconnect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    delete?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    update?: CourseProgressUpdateWithWhereUniqueWithoutUserInput | CourseProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseProgressUpdateManyWithWhereWithoutUserInput | CourseProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseProgressScalarWhereInput | CourseProgressScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type CourseCreatetagInput = {
    set: string[]
  }

  export type CourseCreateinstructionsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutCoursesCreatedInput = {
    create?: XOR<UserCreateWithoutCoursesCreatedInput, UserUncheckedCreateWithoutCoursesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutCoursesInput = {
    create?: XOR<CategoryCreateWithoutCoursesInput, CategoryUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCoursesInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCoursesEnrolledInput = {
    create?: XOR<UserCreateWithoutCoursesEnrolledInput, UserUncheckedCreateWithoutCoursesEnrolledInput> | UserCreateWithoutCoursesEnrolledInput[] | UserUncheckedCreateWithoutCoursesEnrolledInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesEnrolledInput | UserCreateOrConnectWithoutCoursesEnrolledInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SectionCreateNestedManyWithoutCourseInput = {
    create?: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput> | SectionCreateWithoutCourseInput[] | SectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseInput | SectionCreateOrConnectWithoutCourseInput[]
    createMany?: SectionCreateManyCourseInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type RatingAndReviewCreateNestedManyWithoutCourseInput = {
    create?: XOR<RatingAndReviewCreateWithoutCourseInput, RatingAndReviewUncheckedCreateWithoutCourseInput> | RatingAndReviewCreateWithoutCourseInput[] | RatingAndReviewUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RatingAndReviewCreateOrConnectWithoutCourseInput | RatingAndReviewCreateOrConnectWithoutCourseInput[]
    createMany?: RatingAndReviewCreateManyCourseInputEnvelope
    connect?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
  }

  export type CourseProgressCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseProgressCreateWithoutCourseInput, CourseProgressUncheckedCreateWithoutCourseInput> | CourseProgressCreateWithoutCourseInput[] | CourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutCourseInput | CourseProgressCreateOrConnectWithoutCourseInput[]
    createMany?: CourseProgressCreateManyCourseInputEnvelope
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutCourseInput = {
    create?: XOR<OrderCreateWithoutCourseInput, OrderUncheckedCreateWithoutCourseInput> | OrderCreateWithoutCourseInput[] | OrderUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCourseInput | OrderCreateOrConnectWithoutCourseInput[]
    createMany?: OrderCreateManyCourseInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCoursesEnrolledInput = {
    create?: XOR<UserCreateWithoutCoursesEnrolledInput, UserUncheckedCreateWithoutCoursesEnrolledInput> | UserCreateWithoutCoursesEnrolledInput[] | UserUncheckedCreateWithoutCoursesEnrolledInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesEnrolledInput | UserCreateOrConnectWithoutCoursesEnrolledInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SectionUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput> | SectionCreateWithoutCourseInput[] | SectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseInput | SectionCreateOrConnectWithoutCourseInput[]
    createMany?: SectionCreateManyCourseInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type RatingAndReviewUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<RatingAndReviewCreateWithoutCourseInput, RatingAndReviewUncheckedCreateWithoutCourseInput> | RatingAndReviewCreateWithoutCourseInput[] | RatingAndReviewUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RatingAndReviewCreateOrConnectWithoutCourseInput | RatingAndReviewCreateOrConnectWithoutCourseInput[]
    createMany?: RatingAndReviewCreateManyCourseInputEnvelope
    connect?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
  }

  export type CourseProgressUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseProgressCreateWithoutCourseInput, CourseProgressUncheckedCreateWithoutCourseInput> | CourseProgressCreateWithoutCourseInput[] | CourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutCourseInput | CourseProgressCreateOrConnectWithoutCourseInput[]
    createMany?: CourseProgressCreateManyCourseInputEnvelope
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<OrderCreateWithoutCourseInput, OrderUncheckedCreateWithoutCourseInput> | OrderCreateWithoutCourseInput[] | OrderUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCourseInput | OrderCreateOrConnectWithoutCourseInput[]
    createMany?: OrderCreateManyCourseInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CourseUpdatetagInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CourseUpdateinstructionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumCourseStatusFieldUpdateOperationsInput = {
    set?: $Enums.CourseStatus
  }

  export type UserUpdateOneRequiredWithoutCoursesCreatedNestedInput = {
    create?: XOR<UserCreateWithoutCoursesCreatedInput, UserUncheckedCreateWithoutCoursesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesCreatedInput
    upsert?: UserUpsertWithoutCoursesCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoursesCreatedInput, UserUpdateWithoutCoursesCreatedInput>, UserUncheckedUpdateWithoutCoursesCreatedInput>
  }

  export type CategoryUpdateOneWithoutCoursesNestedInput = {
    create?: XOR<CategoryCreateWithoutCoursesInput, CategoryUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCoursesInput
    upsert?: CategoryUpsertWithoutCoursesInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutCoursesInput, CategoryUpdateWithoutCoursesInput>, CategoryUncheckedUpdateWithoutCoursesInput>
  }

  export type UserUpdateManyWithoutCoursesEnrolledNestedInput = {
    create?: XOR<UserCreateWithoutCoursesEnrolledInput, UserUncheckedCreateWithoutCoursesEnrolledInput> | UserCreateWithoutCoursesEnrolledInput[] | UserUncheckedCreateWithoutCoursesEnrolledInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesEnrolledInput | UserCreateOrConnectWithoutCoursesEnrolledInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCoursesEnrolledInput | UserUpsertWithWhereUniqueWithoutCoursesEnrolledInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCoursesEnrolledInput | UserUpdateWithWhereUniqueWithoutCoursesEnrolledInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCoursesEnrolledInput | UserUpdateManyWithWhereWithoutCoursesEnrolledInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SectionUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput> | SectionCreateWithoutCourseInput[] | SectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseInput | SectionCreateOrConnectWithoutCourseInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutCourseInput | SectionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SectionCreateManyCourseInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutCourseInput | SectionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutCourseInput | SectionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type RatingAndReviewUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RatingAndReviewCreateWithoutCourseInput, RatingAndReviewUncheckedCreateWithoutCourseInput> | RatingAndReviewCreateWithoutCourseInput[] | RatingAndReviewUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RatingAndReviewCreateOrConnectWithoutCourseInput | RatingAndReviewCreateOrConnectWithoutCourseInput[]
    upsert?: RatingAndReviewUpsertWithWhereUniqueWithoutCourseInput | RatingAndReviewUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RatingAndReviewCreateManyCourseInputEnvelope
    set?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
    disconnect?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
    delete?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
    connect?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
    update?: RatingAndReviewUpdateWithWhereUniqueWithoutCourseInput | RatingAndReviewUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RatingAndReviewUpdateManyWithWhereWithoutCourseInput | RatingAndReviewUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RatingAndReviewScalarWhereInput | RatingAndReviewScalarWhereInput[]
  }

  export type CourseProgressUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseProgressCreateWithoutCourseInput, CourseProgressUncheckedCreateWithoutCourseInput> | CourseProgressCreateWithoutCourseInput[] | CourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutCourseInput | CourseProgressCreateOrConnectWithoutCourseInput[]
    upsert?: CourseProgressUpsertWithWhereUniqueWithoutCourseInput | CourseProgressUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseProgressCreateManyCourseInputEnvelope
    set?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    disconnect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    delete?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    update?: CourseProgressUpdateWithWhereUniqueWithoutCourseInput | CourseProgressUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseProgressUpdateManyWithWhereWithoutCourseInput | CourseProgressUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseProgressScalarWhereInput | CourseProgressScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutCourseNestedInput = {
    create?: XOR<OrderCreateWithoutCourseInput, OrderUncheckedCreateWithoutCourseInput> | OrderCreateWithoutCourseInput[] | OrderUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCourseInput | OrderCreateOrConnectWithoutCourseInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCourseInput | OrderUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: OrderCreateManyCourseInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCourseInput | OrderUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCourseInput | OrderUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCoursesEnrolledNestedInput = {
    create?: XOR<UserCreateWithoutCoursesEnrolledInput, UserUncheckedCreateWithoutCoursesEnrolledInput> | UserCreateWithoutCoursesEnrolledInput[] | UserUncheckedCreateWithoutCoursesEnrolledInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesEnrolledInput | UserCreateOrConnectWithoutCoursesEnrolledInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCoursesEnrolledInput | UserUpsertWithWhereUniqueWithoutCoursesEnrolledInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCoursesEnrolledInput | UserUpdateWithWhereUniqueWithoutCoursesEnrolledInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCoursesEnrolledInput | UserUpdateManyWithWhereWithoutCoursesEnrolledInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SectionUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput> | SectionCreateWithoutCourseInput[] | SectionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCourseInput | SectionCreateOrConnectWithoutCourseInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutCourseInput | SectionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SectionCreateManyCourseInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutCourseInput | SectionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutCourseInput | SectionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type RatingAndReviewUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RatingAndReviewCreateWithoutCourseInput, RatingAndReviewUncheckedCreateWithoutCourseInput> | RatingAndReviewCreateWithoutCourseInput[] | RatingAndReviewUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RatingAndReviewCreateOrConnectWithoutCourseInput | RatingAndReviewCreateOrConnectWithoutCourseInput[]
    upsert?: RatingAndReviewUpsertWithWhereUniqueWithoutCourseInput | RatingAndReviewUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RatingAndReviewCreateManyCourseInputEnvelope
    set?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
    disconnect?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
    delete?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
    connect?: RatingAndReviewWhereUniqueInput | RatingAndReviewWhereUniqueInput[]
    update?: RatingAndReviewUpdateWithWhereUniqueWithoutCourseInput | RatingAndReviewUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RatingAndReviewUpdateManyWithWhereWithoutCourseInput | RatingAndReviewUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RatingAndReviewScalarWhereInput | RatingAndReviewScalarWhereInput[]
  }

  export type CourseProgressUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseProgressCreateWithoutCourseInput, CourseProgressUncheckedCreateWithoutCourseInput> | CourseProgressCreateWithoutCourseInput[] | CourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutCourseInput | CourseProgressCreateOrConnectWithoutCourseInput[]
    upsert?: CourseProgressUpsertWithWhereUniqueWithoutCourseInput | CourseProgressUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseProgressCreateManyCourseInputEnvelope
    set?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    disconnect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    delete?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    update?: CourseProgressUpdateWithWhereUniqueWithoutCourseInput | CourseProgressUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseProgressUpdateManyWithWhereWithoutCourseInput | CourseProgressUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseProgressScalarWhereInput | CourseProgressScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<OrderCreateWithoutCourseInput, OrderUncheckedCreateWithoutCourseInput> | OrderCreateWithoutCourseInput[] | OrderUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCourseInput | OrderCreateOrConnectWithoutCourseInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCourseInput | OrderUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: OrderCreateManyCourseInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCourseInput | OrderUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCourseInput | OrderUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CourseCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCategoryInput | CourseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCategoryInput | CourseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCategoryInput | CourseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCategoryInput | CourseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCategoryInput | CourseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCategoryInput | CourseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutSectionsInput = {
    create?: XOR<CourseCreateWithoutSectionsInput, CourseUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSectionsInput
    connect?: CourseWhereUniqueInput
  }

  export type SubsectionCreateNestedManyWithoutSectionInput = {
    create?: XOR<SubsectionCreateWithoutSectionInput, SubsectionUncheckedCreateWithoutSectionInput> | SubsectionCreateWithoutSectionInput[] | SubsectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SubsectionCreateOrConnectWithoutSectionInput | SubsectionCreateOrConnectWithoutSectionInput[]
    createMany?: SubsectionCreateManySectionInputEnvelope
    connect?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
  }

  export type SubsectionUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<SubsectionCreateWithoutSectionInput, SubsectionUncheckedCreateWithoutSectionInput> | SubsectionCreateWithoutSectionInput[] | SubsectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SubsectionCreateOrConnectWithoutSectionInput | SubsectionCreateOrConnectWithoutSectionInput[]
    createMany?: SubsectionCreateManySectionInputEnvelope
    connect?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<CourseCreateWithoutSectionsInput, CourseUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSectionsInput
    upsert?: CourseUpsertWithoutSectionsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutSectionsInput, CourseUpdateWithoutSectionsInput>, CourseUncheckedUpdateWithoutSectionsInput>
  }

  export type SubsectionUpdateManyWithoutSectionNestedInput = {
    create?: XOR<SubsectionCreateWithoutSectionInput, SubsectionUncheckedCreateWithoutSectionInput> | SubsectionCreateWithoutSectionInput[] | SubsectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SubsectionCreateOrConnectWithoutSectionInput | SubsectionCreateOrConnectWithoutSectionInput[]
    upsert?: SubsectionUpsertWithWhereUniqueWithoutSectionInput | SubsectionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: SubsectionCreateManySectionInputEnvelope
    set?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    disconnect?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    delete?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    connect?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    update?: SubsectionUpdateWithWhereUniqueWithoutSectionInput | SubsectionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: SubsectionUpdateManyWithWhereWithoutSectionInput | SubsectionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: SubsectionScalarWhereInput | SubsectionScalarWhereInput[]
  }

  export type SubsectionUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<SubsectionCreateWithoutSectionInput, SubsectionUncheckedCreateWithoutSectionInput> | SubsectionCreateWithoutSectionInput[] | SubsectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SubsectionCreateOrConnectWithoutSectionInput | SubsectionCreateOrConnectWithoutSectionInput[]
    upsert?: SubsectionUpsertWithWhereUniqueWithoutSectionInput | SubsectionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: SubsectionCreateManySectionInputEnvelope
    set?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    disconnect?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    delete?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    connect?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    update?: SubsectionUpdateWithWhereUniqueWithoutSectionInput | SubsectionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: SubsectionUpdateManyWithWhereWithoutSectionInput | SubsectionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: SubsectionScalarWhereInput | SubsectionScalarWhereInput[]
  }

  export type SubsectionCreatevideoUrlsInput = {
    set: string[]
  }

  export type SectionCreateNestedOneWithoutSubsectionsInput = {
    create?: XOR<SectionCreateWithoutSubsectionsInput, SectionUncheckedCreateWithoutSubsectionsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutSubsectionsInput
    connect?: SectionWhereUniqueInput
  }

  export type CourseProgressCreateNestedManyWithoutCompletedVideosInput = {
    create?: XOR<CourseProgressCreateWithoutCompletedVideosInput, CourseProgressUncheckedCreateWithoutCompletedVideosInput> | CourseProgressCreateWithoutCompletedVideosInput[] | CourseProgressUncheckedCreateWithoutCompletedVideosInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutCompletedVideosInput | CourseProgressCreateOrConnectWithoutCompletedVideosInput[]
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
  }

  export type CourseProgressUncheckedCreateNestedManyWithoutCompletedVideosInput = {
    create?: XOR<CourseProgressCreateWithoutCompletedVideosInput, CourseProgressUncheckedCreateWithoutCompletedVideosInput> | CourseProgressCreateWithoutCompletedVideosInput[] | CourseProgressUncheckedCreateWithoutCompletedVideosInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutCompletedVideosInput | CourseProgressCreateOrConnectWithoutCompletedVideosInput[]
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
  }

  export type SubsectionUpdatevideoUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SectionUpdateOneRequiredWithoutSubsectionsNestedInput = {
    create?: XOR<SectionCreateWithoutSubsectionsInput, SectionUncheckedCreateWithoutSubsectionsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutSubsectionsInput
    upsert?: SectionUpsertWithoutSubsectionsInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutSubsectionsInput, SectionUpdateWithoutSubsectionsInput>, SectionUncheckedUpdateWithoutSubsectionsInput>
  }

  export type CourseProgressUpdateManyWithoutCompletedVideosNestedInput = {
    create?: XOR<CourseProgressCreateWithoutCompletedVideosInput, CourseProgressUncheckedCreateWithoutCompletedVideosInput> | CourseProgressCreateWithoutCompletedVideosInput[] | CourseProgressUncheckedCreateWithoutCompletedVideosInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutCompletedVideosInput | CourseProgressCreateOrConnectWithoutCompletedVideosInput[]
    upsert?: CourseProgressUpsertWithWhereUniqueWithoutCompletedVideosInput | CourseProgressUpsertWithWhereUniqueWithoutCompletedVideosInput[]
    set?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    disconnect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    delete?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    update?: CourseProgressUpdateWithWhereUniqueWithoutCompletedVideosInput | CourseProgressUpdateWithWhereUniqueWithoutCompletedVideosInput[]
    updateMany?: CourseProgressUpdateManyWithWhereWithoutCompletedVideosInput | CourseProgressUpdateManyWithWhereWithoutCompletedVideosInput[]
    deleteMany?: CourseProgressScalarWhereInput | CourseProgressScalarWhereInput[]
  }

  export type CourseProgressUncheckedUpdateManyWithoutCompletedVideosNestedInput = {
    create?: XOR<CourseProgressCreateWithoutCompletedVideosInput, CourseProgressUncheckedCreateWithoutCompletedVideosInput> | CourseProgressCreateWithoutCompletedVideosInput[] | CourseProgressUncheckedCreateWithoutCompletedVideosInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutCompletedVideosInput | CourseProgressCreateOrConnectWithoutCompletedVideosInput[]
    upsert?: CourseProgressUpsertWithWhereUniqueWithoutCompletedVideosInput | CourseProgressUpsertWithWhereUniqueWithoutCompletedVideosInput[]
    set?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    disconnect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    delete?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    update?: CourseProgressUpdateWithWhereUniqueWithoutCompletedVideosInput | CourseProgressUpdateWithWhereUniqueWithoutCompletedVideosInput[]
    updateMany?: CourseProgressUpdateManyWithWhereWithoutCompletedVideosInput | CourseProgressUpdateManyWithWhereWithoutCompletedVideosInput[]
    deleteMany?: CourseProgressScalarWhereInput | CourseProgressScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutRatingsInput = {
    create?: XOR<CourseCreateWithoutRatingsInput, CourseUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRatingsInput
    connect?: CourseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRatingsInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<CourseCreateWithoutRatingsInput, CourseUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRatingsInput
    upsert?: CourseUpsertWithoutRatingsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutRatingsInput, CourseUpdateWithoutRatingsInput>, CourseUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    upsert?: UserUpsertWithoutRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingsInput, UserUpdateWithoutRatingsInput>, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type CourseCreateNestedOneWithoutCourseProgressInput = {
    create?: XOR<CourseCreateWithoutCourseProgressInput, CourseUncheckedCreateWithoutCourseProgressInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseProgressInput
    connect?: CourseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCourseProgressInput = {
    create?: XOR<UserCreateWithoutCourseProgressInput, UserUncheckedCreateWithoutCourseProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourseProgressInput
    connect?: UserWhereUniqueInput
  }

  export type SubsectionCreateNestedManyWithoutCompletedByInput = {
    create?: XOR<SubsectionCreateWithoutCompletedByInput, SubsectionUncheckedCreateWithoutCompletedByInput> | SubsectionCreateWithoutCompletedByInput[] | SubsectionUncheckedCreateWithoutCompletedByInput[]
    connectOrCreate?: SubsectionCreateOrConnectWithoutCompletedByInput | SubsectionCreateOrConnectWithoutCompletedByInput[]
    connect?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
  }

  export type SubsectionUncheckedCreateNestedManyWithoutCompletedByInput = {
    create?: XOR<SubsectionCreateWithoutCompletedByInput, SubsectionUncheckedCreateWithoutCompletedByInput> | SubsectionCreateWithoutCompletedByInput[] | SubsectionUncheckedCreateWithoutCompletedByInput[]
    connectOrCreate?: SubsectionCreateOrConnectWithoutCompletedByInput | SubsectionCreateOrConnectWithoutCompletedByInput[]
    connect?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutCourseProgressNestedInput = {
    create?: XOR<CourseCreateWithoutCourseProgressInput, CourseUncheckedCreateWithoutCourseProgressInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseProgressInput
    upsert?: CourseUpsertWithoutCourseProgressInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCourseProgressInput, CourseUpdateWithoutCourseProgressInput>, CourseUncheckedUpdateWithoutCourseProgressInput>
  }

  export type UserUpdateOneRequiredWithoutCourseProgressNestedInput = {
    create?: XOR<UserCreateWithoutCourseProgressInput, UserUncheckedCreateWithoutCourseProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourseProgressInput
    upsert?: UserUpsertWithoutCourseProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCourseProgressInput, UserUpdateWithoutCourseProgressInput>, UserUncheckedUpdateWithoutCourseProgressInput>
  }

  export type SubsectionUpdateManyWithoutCompletedByNestedInput = {
    create?: XOR<SubsectionCreateWithoutCompletedByInput, SubsectionUncheckedCreateWithoutCompletedByInput> | SubsectionCreateWithoutCompletedByInput[] | SubsectionUncheckedCreateWithoutCompletedByInput[]
    connectOrCreate?: SubsectionCreateOrConnectWithoutCompletedByInput | SubsectionCreateOrConnectWithoutCompletedByInput[]
    upsert?: SubsectionUpsertWithWhereUniqueWithoutCompletedByInput | SubsectionUpsertWithWhereUniqueWithoutCompletedByInput[]
    set?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    disconnect?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    delete?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    connect?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    update?: SubsectionUpdateWithWhereUniqueWithoutCompletedByInput | SubsectionUpdateWithWhereUniqueWithoutCompletedByInput[]
    updateMany?: SubsectionUpdateManyWithWhereWithoutCompletedByInput | SubsectionUpdateManyWithWhereWithoutCompletedByInput[]
    deleteMany?: SubsectionScalarWhereInput | SubsectionScalarWhereInput[]
  }

  export type SubsectionUncheckedUpdateManyWithoutCompletedByNestedInput = {
    create?: XOR<SubsectionCreateWithoutCompletedByInput, SubsectionUncheckedCreateWithoutCompletedByInput> | SubsectionCreateWithoutCompletedByInput[] | SubsectionUncheckedCreateWithoutCompletedByInput[]
    connectOrCreate?: SubsectionCreateOrConnectWithoutCompletedByInput | SubsectionCreateOrConnectWithoutCompletedByInput[]
    upsert?: SubsectionUpsertWithWhereUniqueWithoutCompletedByInput | SubsectionUpsertWithWhereUniqueWithoutCompletedByInput[]
    set?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    disconnect?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    delete?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    connect?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    update?: SubsectionUpdateWithWhereUniqueWithoutCompletedByInput | SubsectionUpdateWithWhereUniqueWithoutCompletedByInput[]
    updateMany?: SubsectionUpdateManyWithWhereWithoutCompletedByInput | SubsectionUpdateManyWithWhereWithoutCompletedByInput[]
    deleteMany?: SubsectionScalarWhereInput | SubsectionScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumCourseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseStatus | EnumCourseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseStatusFilter<$PrismaModel> | $Enums.CourseStatus
  }

  export type NestedEnumCourseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseStatus | EnumCourseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseStatusWithAggregatesFilter<$PrismaModel> | $Enums.CourseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseStatusFilter<$PrismaModel>
    _max?: NestedEnumCourseStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type RefundCreateWithoutOrderInput = {
    id?: string
    amount: number
    status?: string
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefundUncheckedCreateWithoutOrderInput = {
    id?: string
    amount: number
    status?: string
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefundCreateOrConnectWithoutOrderInput = {
    where: RefundWhereUniqueInput
    create: XOR<RefundCreateWithoutOrderInput, RefundUncheckedCreateWithoutOrderInput>
  }

  export type RefundCreateManyOrderInputEnvelope = {
    data: RefundCreateManyOrderInput | RefundCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type CourseCreateWithoutOrdersInput = {
    id?: string
    courseName: string
    courseDescription: string
    whatYouWillLearn?: string | null
    price: number
    thumbnail?: string | null
    tag?: CourseCreatetagInput | string[]
    instructions?: CourseCreateinstructionsInput | string[]
    status?: $Enums.CourseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: UserCreateNestedOneWithoutCoursesCreatedInput
    category?: CategoryCreateNestedOneWithoutCoursesInput
    studentsEnrolled?: UserCreateNestedManyWithoutCoursesEnrolledInput
    sections?: SectionCreateNestedManyWithoutCourseInput
    ratings?: RatingAndReviewCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutOrdersInput = {
    id?: string
    courseName: string
    courseDescription: string
    whatYouWillLearn?: string | null
    price: number
    thumbnail?: string | null
    tag?: CourseCreatetagInput | string[]
    instructions?: CourseCreateinstructionsInput | string[]
    status?: $Enums.CourseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorId: string
    categoryId?: string | null
    studentsEnrolled?: UserUncheckedCreateNestedManyWithoutCoursesEnrolledInput
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput
    ratings?: RatingAndReviewUncheckedCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutOrdersInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutOrdersInput, CourseUncheckedCreateWithoutOrdersInput>
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    accountType?: string | null
    isActive?: boolean
    isApproved?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coursesCreated?: CourseCreateNestedManyWithoutInstructorInput
    coursesEnrolled?: CourseCreateNestedManyWithoutStudentsEnrolledInput
    ratings?: RatingAndReviewCreateNestedManyWithoutUserInput
    courseProgress?: CourseProgressCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    accountType?: string | null
    isActive?: boolean
    isApproved?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coursesCreated?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    coursesEnrolled?: CourseUncheckedCreateNestedManyWithoutStudentsEnrolledInput
    ratings?: RatingAndReviewUncheckedCreateNestedManyWithoutUserInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type RefundUpsertWithWhereUniqueWithoutOrderInput = {
    where: RefundWhereUniqueInput
    update: XOR<RefundUpdateWithoutOrderInput, RefundUncheckedUpdateWithoutOrderInput>
    create: XOR<RefundCreateWithoutOrderInput, RefundUncheckedCreateWithoutOrderInput>
  }

  export type RefundUpdateWithWhereUniqueWithoutOrderInput = {
    where: RefundWhereUniqueInput
    data: XOR<RefundUpdateWithoutOrderInput, RefundUncheckedUpdateWithoutOrderInput>
  }

  export type RefundUpdateManyWithWhereWithoutOrderInput = {
    where: RefundScalarWhereInput
    data: XOR<RefundUpdateManyMutationInput, RefundUncheckedUpdateManyWithoutOrderInput>
  }

  export type RefundScalarWhereInput = {
    AND?: RefundScalarWhereInput | RefundScalarWhereInput[]
    OR?: RefundScalarWhereInput[]
    NOT?: RefundScalarWhereInput | RefundScalarWhereInput[]
    id?: StringFilter<"Refund"> | string
    orderId?: StringFilter<"Refund"> | string
    amount?: FloatFilter<"Refund"> | number
    status?: StringFilter<"Refund"> | string
    reason?: StringNullableFilter<"Refund"> | string | null
    createdAt?: DateTimeFilter<"Refund"> | Date | string
    updatedAt?: DateTimeFilter<"Refund"> | Date | string
  }

  export type CourseUpsertWithoutOrdersInput = {
    update: XOR<CourseUpdateWithoutOrdersInput, CourseUncheckedUpdateWithoutOrdersInput>
    create: XOR<CourseCreateWithoutOrdersInput, CourseUncheckedCreateWithoutOrdersInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutOrdersInput, CourseUncheckedUpdateWithoutOrdersInput>
  }

  export type CourseUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutCoursesCreatedNestedInput
    category?: CategoryUpdateOneWithoutCoursesNestedInput
    studentsEnrolled?: UserUpdateManyWithoutCoursesEnrolledNestedInput
    sections?: SectionUpdateManyWithoutCourseNestedInput
    ratings?: RatingAndReviewUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    studentsEnrolled?: UserUncheckedUpdateManyWithoutCoursesEnrolledNestedInput
    sections?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    ratings?: RatingAndReviewUncheckedUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coursesCreated?: CourseUpdateManyWithoutInstructorNestedInput
    coursesEnrolled?: CourseUpdateManyWithoutStudentsEnrolledNestedInput
    ratings?: RatingAndReviewUpdateManyWithoutUserNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coursesCreated?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    coursesEnrolled?: CourseUncheckedUpdateManyWithoutStudentsEnrolledNestedInput
    ratings?: RatingAndReviewUncheckedUpdateManyWithoutUserNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderCreateWithoutRefundsInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    paymentId?: string | null
    razorpayOrderId: string
    razorpaySignature?: string | null
    paymentMethod?: string | null
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course?: CourseCreateNestedOneWithoutOrdersInput
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutRefundsInput = {
    id?: string
    userId: string
    amount: number
    currency?: string
    status?: string
    paymentId?: string | null
    razorpayOrderId: string
    razorpaySignature?: string | null
    paymentMethod?: string | null
    receipt?: string | null
    courseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutRefundsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutRefundsInput, OrderUncheckedCreateWithoutRefundsInput>
  }

  export type OrderUpsertWithoutRefundsInput = {
    update: XOR<OrderUpdateWithoutRefundsInput, OrderUncheckedUpdateWithoutRefundsInput>
    create: XOR<OrderCreateWithoutRefundsInput, OrderUncheckedCreateWithoutRefundsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutRefundsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutRefundsInput, OrderUncheckedUpdateWithoutRefundsInput>
  }

  export type OrderUpdateWithoutRefundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneWithoutOrdersNestedInput
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutRefundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    paymentId?: string | null
    razorpayOrderId: string
    razorpaySignature?: string | null
    paymentMethod?: string | null
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refunds?: RefundCreateNestedManyWithoutOrderInput
    course?: CourseCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    paymentId?: string | null
    razorpayOrderId: string
    razorpaySignature?: string | null
    paymentMethod?: string | null
    receipt?: string | null
    courseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refunds?: RefundUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CourseCreateWithoutInstructorInput = {
    id?: string
    courseName: string
    courseDescription: string
    whatYouWillLearn?: string | null
    price: number
    thumbnail?: string | null
    tag?: CourseCreatetagInput | string[]
    instructions?: CourseCreateinstructionsInput | string[]
    status?: $Enums.CourseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutCoursesInput
    studentsEnrolled?: UserCreateNestedManyWithoutCoursesEnrolledInput
    sections?: SectionCreateNestedManyWithoutCourseInput
    ratings?: RatingAndReviewCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressCreateNestedManyWithoutCourseInput
    orders?: OrderCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutInstructorInput = {
    id?: string
    courseName: string
    courseDescription: string
    whatYouWillLearn?: string | null
    price: number
    thumbnail?: string | null
    tag?: CourseCreatetagInput | string[]
    instructions?: CourseCreateinstructionsInput | string[]
    status?: $Enums.CourseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
    studentsEnrolled?: UserUncheckedCreateNestedManyWithoutCoursesEnrolledInput
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput
    ratings?: RatingAndReviewUncheckedCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutCourseInput
    orders?: OrderUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutInstructorInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput>
  }

  export type CourseCreateManyInstructorInputEnvelope = {
    data: CourseCreateManyInstructorInput | CourseCreateManyInstructorInput[]
    skipDuplicates?: boolean
  }

  export type CourseCreateWithoutStudentsEnrolledInput = {
    id?: string
    courseName: string
    courseDescription: string
    whatYouWillLearn?: string | null
    price: number
    thumbnail?: string | null
    tag?: CourseCreatetagInput | string[]
    instructions?: CourseCreateinstructionsInput | string[]
    status?: $Enums.CourseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: UserCreateNestedOneWithoutCoursesCreatedInput
    category?: CategoryCreateNestedOneWithoutCoursesInput
    sections?: SectionCreateNestedManyWithoutCourseInput
    ratings?: RatingAndReviewCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressCreateNestedManyWithoutCourseInput
    orders?: OrderCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutStudentsEnrolledInput = {
    id?: string
    courseName: string
    courseDescription: string
    whatYouWillLearn?: string | null
    price: number
    thumbnail?: string | null
    tag?: CourseCreatetagInput | string[]
    instructions?: CourseCreateinstructionsInput | string[]
    status?: $Enums.CourseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorId: string
    categoryId?: string | null
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput
    ratings?: RatingAndReviewUncheckedCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutCourseInput
    orders?: OrderUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutStudentsEnrolledInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutStudentsEnrolledInput, CourseUncheckedCreateWithoutStudentsEnrolledInput>
  }

  export type RatingAndReviewCreateWithoutUserInput = {
    id?: string
    rating: number
    review: string
    createdAt?: Date | string
    course: CourseCreateNestedOneWithoutRatingsInput
  }

  export type RatingAndReviewUncheckedCreateWithoutUserInput = {
    id?: string
    rating: number
    review: string
    createdAt?: Date | string
    courseId: string
  }

  export type RatingAndReviewCreateOrConnectWithoutUserInput = {
    where: RatingAndReviewWhereUniqueInput
    create: XOR<RatingAndReviewCreateWithoutUserInput, RatingAndReviewUncheckedCreateWithoutUserInput>
  }

  export type RatingAndReviewCreateManyUserInputEnvelope = {
    data: RatingAndReviewCreateManyUserInput | RatingAndReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CourseProgressCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutCourseProgressInput
    completedVideos?: SubsectionCreateNestedManyWithoutCompletedByInput
  }

  export type CourseProgressUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
    completedVideos?: SubsectionUncheckedCreateNestedManyWithoutCompletedByInput
  }

  export type CourseProgressCreateOrConnectWithoutUserInput = {
    where: CourseProgressWhereUniqueInput
    create: XOR<CourseProgressCreateWithoutUserInput, CourseProgressUncheckedCreateWithoutUserInput>
  }

  export type CourseProgressCreateManyUserInputEnvelope = {
    data: CourseProgressCreateManyUserInput | CourseProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    revoked?: boolean
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    revoked?: boolean
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    amount?: FloatFilter<"Order"> | number
    currency?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    paymentId?: StringNullableFilter<"Order"> | string | null
    razorpayOrderId?: StringFilter<"Order"> | string
    razorpaySignature?: StringNullableFilter<"Order"> | string | null
    paymentMethod?: StringNullableFilter<"Order"> | string | null
    receipt?: StringNullableFilter<"Order"> | string | null
    courseId?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type CourseUpsertWithWhereUniqueWithoutInstructorInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutInstructorInput, CourseUncheckedUpdateWithoutInstructorInput>
    create: XOR<CourseCreateWithoutInstructorInput, CourseUncheckedCreateWithoutInstructorInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutInstructorInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutInstructorInput, CourseUncheckedUpdateWithoutInstructorInput>
  }

  export type CourseUpdateManyWithWhereWithoutInstructorInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutInstructorInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    courseName?: StringFilter<"Course"> | string
    courseDescription?: StringFilter<"Course"> | string
    whatYouWillLearn?: StringNullableFilter<"Course"> | string | null
    price?: FloatFilter<"Course"> | number
    thumbnail?: StringNullableFilter<"Course"> | string | null
    tag?: StringNullableListFilter<"Course">
    instructions?: StringNullableListFilter<"Course">
    status?: EnumCourseStatusFilter<"Course"> | $Enums.CourseStatus
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    instructorId?: StringFilter<"Course"> | string
    categoryId?: StringNullableFilter<"Course"> | string | null
  }

  export type CourseUpsertWithWhereUniqueWithoutStudentsEnrolledInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutStudentsEnrolledInput, CourseUncheckedUpdateWithoutStudentsEnrolledInput>
    create: XOR<CourseCreateWithoutStudentsEnrolledInput, CourseUncheckedCreateWithoutStudentsEnrolledInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutStudentsEnrolledInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutStudentsEnrolledInput, CourseUncheckedUpdateWithoutStudentsEnrolledInput>
  }

  export type CourseUpdateManyWithWhereWithoutStudentsEnrolledInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutStudentsEnrolledInput>
  }

  export type RatingAndReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: RatingAndReviewWhereUniqueInput
    update: XOR<RatingAndReviewUpdateWithoutUserInput, RatingAndReviewUncheckedUpdateWithoutUserInput>
    create: XOR<RatingAndReviewCreateWithoutUserInput, RatingAndReviewUncheckedCreateWithoutUserInput>
  }

  export type RatingAndReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: RatingAndReviewWhereUniqueInput
    data: XOR<RatingAndReviewUpdateWithoutUserInput, RatingAndReviewUncheckedUpdateWithoutUserInput>
  }

  export type RatingAndReviewUpdateManyWithWhereWithoutUserInput = {
    where: RatingAndReviewScalarWhereInput
    data: XOR<RatingAndReviewUpdateManyMutationInput, RatingAndReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type RatingAndReviewScalarWhereInput = {
    AND?: RatingAndReviewScalarWhereInput | RatingAndReviewScalarWhereInput[]
    OR?: RatingAndReviewScalarWhereInput[]
    NOT?: RatingAndReviewScalarWhereInput | RatingAndReviewScalarWhereInput[]
    id?: StringFilter<"RatingAndReview"> | string
    rating?: IntFilter<"RatingAndReview"> | number
    review?: StringFilter<"RatingAndReview"> | string
    createdAt?: DateTimeFilter<"RatingAndReview"> | Date | string
    courseId?: StringFilter<"RatingAndReview"> | string
    userId?: StringFilter<"RatingAndReview"> | string
  }

  export type CourseProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: CourseProgressWhereUniqueInput
    update: XOR<CourseProgressUpdateWithoutUserInput, CourseProgressUncheckedUpdateWithoutUserInput>
    create: XOR<CourseProgressCreateWithoutUserInput, CourseProgressUncheckedCreateWithoutUserInput>
  }

  export type CourseProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: CourseProgressWhereUniqueInput
    data: XOR<CourseProgressUpdateWithoutUserInput, CourseProgressUncheckedUpdateWithoutUserInput>
  }

  export type CourseProgressUpdateManyWithWhereWithoutUserInput = {
    where: CourseProgressScalarWhereInput
    data: XOR<CourseProgressUpdateManyMutationInput, CourseProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type CourseProgressScalarWhereInput = {
    AND?: CourseProgressScalarWhereInput | CourseProgressScalarWhereInput[]
    OR?: CourseProgressScalarWhereInput[]
    NOT?: CourseProgressScalarWhereInput | CourseProgressScalarWhereInput[]
    id?: StringFilter<"CourseProgress"> | string
    createdAt?: DateTimeFilter<"CourseProgress"> | Date | string
    updatedAt?: DateTimeFilter<"CourseProgress"> | Date | string
    courseId?: StringFilter<"CourseProgress"> | string
    userId?: StringFilter<"CourseProgress"> | string
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    accountType?: string | null
    isActive?: boolean
    isApproved?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    coursesCreated?: CourseCreateNestedManyWithoutInstructorInput
    coursesEnrolled?: CourseCreateNestedManyWithoutStudentsEnrolledInput
    ratings?: RatingAndReviewCreateNestedManyWithoutUserInput
    courseProgress?: CourseProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    accountType?: string | null
    isActive?: boolean
    isApproved?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    coursesCreated?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    coursesEnrolled?: CourseUncheckedCreateNestedManyWithoutStudentsEnrolledInput
    ratings?: RatingAndReviewUncheckedCreateNestedManyWithoutUserInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    coursesCreated?: CourseUpdateManyWithoutInstructorNestedInput
    coursesEnrolled?: CourseUpdateManyWithoutStudentsEnrolledNestedInput
    ratings?: RatingAndReviewUpdateManyWithoutUserNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    coursesCreated?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    coursesEnrolled?: CourseUncheckedUpdateManyWithoutStudentsEnrolledNestedInput
    ratings?: RatingAndReviewUncheckedUpdateManyWithoutUserNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCoursesCreatedInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    accountType?: string | null
    isActive?: boolean
    isApproved?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    coursesEnrolled?: CourseCreateNestedManyWithoutStudentsEnrolledInput
    ratings?: RatingAndReviewCreateNestedManyWithoutUserInput
    courseProgress?: CourseProgressCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoursesCreatedInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    accountType?: string | null
    isActive?: boolean
    isApproved?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    coursesEnrolled?: CourseUncheckedCreateNestedManyWithoutStudentsEnrolledInput
    ratings?: RatingAndReviewUncheckedCreateNestedManyWithoutUserInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoursesCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursesCreatedInput, UserUncheckedCreateWithoutCoursesCreatedInput>
  }

  export type CategoryCreateWithoutCoursesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutCoursesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCoursesInput, CategoryUncheckedCreateWithoutCoursesInput>
  }

  export type UserCreateWithoutCoursesEnrolledInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    accountType?: string | null
    isActive?: boolean
    isApproved?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    coursesCreated?: CourseCreateNestedManyWithoutInstructorInput
    ratings?: RatingAndReviewCreateNestedManyWithoutUserInput
    courseProgress?: CourseProgressCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoursesEnrolledInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    accountType?: string | null
    isActive?: boolean
    isApproved?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    coursesCreated?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    ratings?: RatingAndReviewUncheckedCreateNestedManyWithoutUserInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoursesEnrolledInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursesEnrolledInput, UserUncheckedCreateWithoutCoursesEnrolledInput>
  }

  export type SectionCreateWithoutCourseInput = {
    id?: string
    sectionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subsections?: SubsectionCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutCourseInput = {
    id?: string
    sectionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subsections?: SubsectionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutCourseInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput>
  }

  export type SectionCreateManyCourseInputEnvelope = {
    data: SectionCreateManyCourseInput | SectionCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type RatingAndReviewCreateWithoutCourseInput = {
    id?: string
    rating: number
    review: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRatingsInput
  }

  export type RatingAndReviewUncheckedCreateWithoutCourseInput = {
    id?: string
    rating: number
    review: string
    createdAt?: Date | string
    userId: string
  }

  export type RatingAndReviewCreateOrConnectWithoutCourseInput = {
    where: RatingAndReviewWhereUniqueInput
    create: XOR<RatingAndReviewCreateWithoutCourseInput, RatingAndReviewUncheckedCreateWithoutCourseInput>
  }

  export type RatingAndReviewCreateManyCourseInputEnvelope = {
    data: RatingAndReviewCreateManyCourseInput | RatingAndReviewCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CourseProgressCreateWithoutCourseInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCourseProgressInput
    completedVideos?: SubsectionCreateNestedManyWithoutCompletedByInput
  }

  export type CourseProgressUncheckedCreateWithoutCourseInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    completedVideos?: SubsectionUncheckedCreateNestedManyWithoutCompletedByInput
  }

  export type CourseProgressCreateOrConnectWithoutCourseInput = {
    where: CourseProgressWhereUniqueInput
    create: XOR<CourseProgressCreateWithoutCourseInput, CourseProgressUncheckedCreateWithoutCourseInput>
  }

  export type CourseProgressCreateManyCourseInputEnvelope = {
    data: CourseProgressCreateManyCourseInput | CourseProgressCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutCourseInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    paymentId?: string | null
    razorpayOrderId: string
    razorpaySignature?: string | null
    paymentMethod?: string | null
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refunds?: RefundCreateNestedManyWithoutOrderInput
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutCourseInput = {
    id?: string
    userId: string
    amount: number
    currency?: string
    status?: string
    paymentId?: string | null
    razorpayOrderId: string
    razorpaySignature?: string | null
    paymentMethod?: string | null
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refunds?: RefundUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCourseInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCourseInput, OrderUncheckedCreateWithoutCourseInput>
  }

  export type OrderCreateManyCourseInputEnvelope = {
    data: OrderCreateManyCourseInput | OrderCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCoursesCreatedInput = {
    update: XOR<UserUpdateWithoutCoursesCreatedInput, UserUncheckedUpdateWithoutCoursesCreatedInput>
    create: XOR<UserCreateWithoutCoursesCreatedInput, UserUncheckedCreateWithoutCoursesCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoursesCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoursesCreatedInput, UserUncheckedUpdateWithoutCoursesCreatedInput>
  }

  export type UserUpdateWithoutCoursesCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    coursesEnrolled?: CourseUpdateManyWithoutStudentsEnrolledNestedInput
    ratings?: RatingAndReviewUpdateManyWithoutUserNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursesCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    coursesEnrolled?: CourseUncheckedUpdateManyWithoutStudentsEnrolledNestedInput
    ratings?: RatingAndReviewUncheckedUpdateManyWithoutUserNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutCoursesInput = {
    update: XOR<CategoryUpdateWithoutCoursesInput, CategoryUncheckedUpdateWithoutCoursesInput>
    create: XOR<CategoryCreateWithoutCoursesInput, CategoryUncheckedCreateWithoutCoursesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutCoursesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutCoursesInput, CategoryUncheckedUpdateWithoutCoursesInput>
  }

  export type CategoryUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutCoursesEnrolledInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCoursesEnrolledInput, UserUncheckedUpdateWithoutCoursesEnrolledInput>
    create: XOR<UserCreateWithoutCoursesEnrolledInput, UserUncheckedCreateWithoutCoursesEnrolledInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCoursesEnrolledInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCoursesEnrolledInput, UserUncheckedUpdateWithoutCoursesEnrolledInput>
  }

  export type UserUpdateManyWithWhereWithoutCoursesEnrolledInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCoursesEnrolledInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    accountType?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isApproved?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type SectionUpsertWithWhereUniqueWithoutCourseInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutCourseInput, SectionUncheckedUpdateWithoutCourseInput>
    create: XOR<SectionCreateWithoutCourseInput, SectionUncheckedCreateWithoutCourseInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutCourseInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutCourseInput, SectionUncheckedUpdateWithoutCourseInput>
  }

  export type SectionUpdateManyWithWhereWithoutCourseInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutCourseInput>
  }

  export type SectionScalarWhereInput = {
    AND?: SectionScalarWhereInput | SectionScalarWhereInput[]
    OR?: SectionScalarWhereInput[]
    NOT?: SectionScalarWhereInput | SectionScalarWhereInput[]
    id?: StringFilter<"Section"> | string
    sectionName?: StringFilter<"Section"> | string
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    courseId?: StringFilter<"Section"> | string
  }

  export type RatingAndReviewUpsertWithWhereUniqueWithoutCourseInput = {
    where: RatingAndReviewWhereUniqueInput
    update: XOR<RatingAndReviewUpdateWithoutCourseInput, RatingAndReviewUncheckedUpdateWithoutCourseInput>
    create: XOR<RatingAndReviewCreateWithoutCourseInput, RatingAndReviewUncheckedCreateWithoutCourseInput>
  }

  export type RatingAndReviewUpdateWithWhereUniqueWithoutCourseInput = {
    where: RatingAndReviewWhereUniqueInput
    data: XOR<RatingAndReviewUpdateWithoutCourseInput, RatingAndReviewUncheckedUpdateWithoutCourseInput>
  }

  export type RatingAndReviewUpdateManyWithWhereWithoutCourseInput = {
    where: RatingAndReviewScalarWhereInput
    data: XOR<RatingAndReviewUpdateManyMutationInput, RatingAndReviewUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseProgressUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseProgressWhereUniqueInput
    update: XOR<CourseProgressUpdateWithoutCourseInput, CourseProgressUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseProgressCreateWithoutCourseInput, CourseProgressUncheckedCreateWithoutCourseInput>
  }

  export type CourseProgressUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseProgressWhereUniqueInput
    data: XOR<CourseProgressUpdateWithoutCourseInput, CourseProgressUncheckedUpdateWithoutCourseInput>
  }

  export type CourseProgressUpdateManyWithWhereWithoutCourseInput = {
    where: CourseProgressScalarWhereInput
    data: XOR<CourseProgressUpdateManyMutationInput, CourseProgressUncheckedUpdateManyWithoutCourseInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutCourseInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCourseInput, OrderUncheckedUpdateWithoutCourseInput>
    create: XOR<OrderCreateWithoutCourseInput, OrderUncheckedCreateWithoutCourseInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCourseInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCourseInput, OrderUncheckedUpdateWithoutCourseInput>
  }

  export type OrderUpdateManyWithWhereWithoutCourseInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutCategoryInput = {
    id?: string
    courseName: string
    courseDescription: string
    whatYouWillLearn?: string | null
    price: number
    thumbnail?: string | null
    tag?: CourseCreatetagInput | string[]
    instructions?: CourseCreateinstructionsInput | string[]
    status?: $Enums.CourseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: UserCreateNestedOneWithoutCoursesCreatedInput
    studentsEnrolled?: UserCreateNestedManyWithoutCoursesEnrolledInput
    sections?: SectionCreateNestedManyWithoutCourseInput
    ratings?: RatingAndReviewCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressCreateNestedManyWithoutCourseInput
    orders?: OrderCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCategoryInput = {
    id?: string
    courseName: string
    courseDescription: string
    whatYouWillLearn?: string | null
    price: number
    thumbnail?: string | null
    tag?: CourseCreatetagInput | string[]
    instructions?: CourseCreateinstructionsInput | string[]
    status?: $Enums.CourseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorId: string
    studentsEnrolled?: UserUncheckedCreateNestedManyWithoutCoursesEnrolledInput
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput
    ratings?: RatingAndReviewUncheckedCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutCourseInput
    orders?: OrderUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCategoryInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput>
  }

  export type CourseCreateManyCategoryInputEnvelope = {
    data: CourseCreateManyCategoryInput | CourseCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutCategoryInput, CourseUncheckedUpdateWithoutCategoryInput>
    create: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutCategoryInput, CourseUncheckedUpdateWithoutCategoryInput>
  }

  export type CourseUpdateManyWithWhereWithoutCategoryInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CourseCreateWithoutSectionsInput = {
    id?: string
    courseName: string
    courseDescription: string
    whatYouWillLearn?: string | null
    price: number
    thumbnail?: string | null
    tag?: CourseCreatetagInput | string[]
    instructions?: CourseCreateinstructionsInput | string[]
    status?: $Enums.CourseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: UserCreateNestedOneWithoutCoursesCreatedInput
    category?: CategoryCreateNestedOneWithoutCoursesInput
    studentsEnrolled?: UserCreateNestedManyWithoutCoursesEnrolledInput
    ratings?: RatingAndReviewCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressCreateNestedManyWithoutCourseInput
    orders?: OrderCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutSectionsInput = {
    id?: string
    courseName: string
    courseDescription: string
    whatYouWillLearn?: string | null
    price: number
    thumbnail?: string | null
    tag?: CourseCreatetagInput | string[]
    instructions?: CourseCreateinstructionsInput | string[]
    status?: $Enums.CourseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorId: string
    categoryId?: string | null
    studentsEnrolled?: UserUncheckedCreateNestedManyWithoutCoursesEnrolledInput
    ratings?: RatingAndReviewUncheckedCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutCourseInput
    orders?: OrderUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutSectionsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutSectionsInput, CourseUncheckedCreateWithoutSectionsInput>
  }

  export type SubsectionCreateWithoutSectionInput = {
    id?: string
    title: string
    timeDuration: string
    description?: string | null
    videoUrls?: SubsectionCreatevideoUrlsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    completedBy?: CourseProgressCreateNestedManyWithoutCompletedVideosInput
  }

  export type SubsectionUncheckedCreateWithoutSectionInput = {
    id?: string
    title: string
    timeDuration: string
    description?: string | null
    videoUrls?: SubsectionCreatevideoUrlsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    completedBy?: CourseProgressUncheckedCreateNestedManyWithoutCompletedVideosInput
  }

  export type SubsectionCreateOrConnectWithoutSectionInput = {
    where: SubsectionWhereUniqueInput
    create: XOR<SubsectionCreateWithoutSectionInput, SubsectionUncheckedCreateWithoutSectionInput>
  }

  export type SubsectionCreateManySectionInputEnvelope = {
    data: SubsectionCreateManySectionInput | SubsectionCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutSectionsInput = {
    update: XOR<CourseUpdateWithoutSectionsInput, CourseUncheckedUpdateWithoutSectionsInput>
    create: XOR<CourseCreateWithoutSectionsInput, CourseUncheckedCreateWithoutSectionsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutSectionsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutSectionsInput, CourseUncheckedUpdateWithoutSectionsInput>
  }

  export type CourseUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutCoursesCreatedNestedInput
    category?: CategoryUpdateOneWithoutCoursesNestedInput
    studentsEnrolled?: UserUpdateManyWithoutCoursesEnrolledNestedInput
    ratings?: RatingAndReviewUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutCourseNestedInput
    orders?: OrderUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    studentsEnrolled?: UserUncheckedUpdateManyWithoutCoursesEnrolledNestedInput
    ratings?: RatingAndReviewUncheckedUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutCourseNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type SubsectionUpsertWithWhereUniqueWithoutSectionInput = {
    where: SubsectionWhereUniqueInput
    update: XOR<SubsectionUpdateWithoutSectionInput, SubsectionUncheckedUpdateWithoutSectionInput>
    create: XOR<SubsectionCreateWithoutSectionInput, SubsectionUncheckedCreateWithoutSectionInput>
  }

  export type SubsectionUpdateWithWhereUniqueWithoutSectionInput = {
    where: SubsectionWhereUniqueInput
    data: XOR<SubsectionUpdateWithoutSectionInput, SubsectionUncheckedUpdateWithoutSectionInput>
  }

  export type SubsectionUpdateManyWithWhereWithoutSectionInput = {
    where: SubsectionScalarWhereInput
    data: XOR<SubsectionUpdateManyMutationInput, SubsectionUncheckedUpdateManyWithoutSectionInput>
  }

  export type SubsectionScalarWhereInput = {
    AND?: SubsectionScalarWhereInput | SubsectionScalarWhereInput[]
    OR?: SubsectionScalarWhereInput[]
    NOT?: SubsectionScalarWhereInput | SubsectionScalarWhereInput[]
    id?: StringFilter<"Subsection"> | string
    title?: StringFilter<"Subsection"> | string
    timeDuration?: StringFilter<"Subsection"> | string
    description?: StringNullableFilter<"Subsection"> | string | null
    videoUrls?: StringNullableListFilter<"Subsection">
    createdAt?: DateTimeFilter<"Subsection"> | Date | string
    updatedAt?: DateTimeFilter<"Subsection"> | Date | string
    sectionId?: StringFilter<"Subsection"> | string
  }

  export type SectionCreateWithoutSubsectionsInput = {
    id?: string
    sectionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutSectionsInput
  }

  export type SectionUncheckedCreateWithoutSubsectionsInput = {
    id?: string
    sectionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
  }

  export type SectionCreateOrConnectWithoutSubsectionsInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutSubsectionsInput, SectionUncheckedCreateWithoutSubsectionsInput>
  }

  export type CourseProgressCreateWithoutCompletedVideosInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutCourseProgressInput
    user: UserCreateNestedOneWithoutCourseProgressInput
  }

  export type CourseProgressUncheckedCreateWithoutCompletedVideosInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
    userId: string
  }

  export type CourseProgressCreateOrConnectWithoutCompletedVideosInput = {
    where: CourseProgressWhereUniqueInput
    create: XOR<CourseProgressCreateWithoutCompletedVideosInput, CourseProgressUncheckedCreateWithoutCompletedVideosInput>
  }

  export type SectionUpsertWithoutSubsectionsInput = {
    update: XOR<SectionUpdateWithoutSubsectionsInput, SectionUncheckedUpdateWithoutSubsectionsInput>
    create: XOR<SectionCreateWithoutSubsectionsInput, SectionUncheckedCreateWithoutSubsectionsInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutSubsectionsInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutSubsectionsInput, SectionUncheckedUpdateWithoutSubsectionsInput>
  }

  export type SectionUpdateWithoutSubsectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionUncheckedUpdateWithoutSubsectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseProgressUpsertWithWhereUniqueWithoutCompletedVideosInput = {
    where: CourseProgressWhereUniqueInput
    update: XOR<CourseProgressUpdateWithoutCompletedVideosInput, CourseProgressUncheckedUpdateWithoutCompletedVideosInput>
    create: XOR<CourseProgressCreateWithoutCompletedVideosInput, CourseProgressUncheckedCreateWithoutCompletedVideosInput>
  }

  export type CourseProgressUpdateWithWhereUniqueWithoutCompletedVideosInput = {
    where: CourseProgressWhereUniqueInput
    data: XOR<CourseProgressUpdateWithoutCompletedVideosInput, CourseProgressUncheckedUpdateWithoutCompletedVideosInput>
  }

  export type CourseProgressUpdateManyWithWhereWithoutCompletedVideosInput = {
    where: CourseProgressScalarWhereInput
    data: XOR<CourseProgressUpdateManyMutationInput, CourseProgressUncheckedUpdateManyWithoutCompletedVideosInput>
  }

  export type CourseCreateWithoutRatingsInput = {
    id?: string
    courseName: string
    courseDescription: string
    whatYouWillLearn?: string | null
    price: number
    thumbnail?: string | null
    tag?: CourseCreatetagInput | string[]
    instructions?: CourseCreateinstructionsInput | string[]
    status?: $Enums.CourseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: UserCreateNestedOneWithoutCoursesCreatedInput
    category?: CategoryCreateNestedOneWithoutCoursesInput
    studentsEnrolled?: UserCreateNestedManyWithoutCoursesEnrolledInput
    sections?: SectionCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressCreateNestedManyWithoutCourseInput
    orders?: OrderCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutRatingsInput = {
    id?: string
    courseName: string
    courseDescription: string
    whatYouWillLearn?: string | null
    price: number
    thumbnail?: string | null
    tag?: CourseCreatetagInput | string[]
    instructions?: CourseCreateinstructionsInput | string[]
    status?: $Enums.CourseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorId: string
    categoryId?: string | null
    studentsEnrolled?: UserUncheckedCreateNestedManyWithoutCoursesEnrolledInput
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutCourseInput
    orders?: OrderUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutRatingsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutRatingsInput, CourseUncheckedCreateWithoutRatingsInput>
  }

  export type UserCreateWithoutRatingsInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    accountType?: string | null
    isActive?: boolean
    isApproved?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    coursesCreated?: CourseCreateNestedManyWithoutInstructorInput
    coursesEnrolled?: CourseCreateNestedManyWithoutStudentsEnrolledInput
    courseProgress?: CourseProgressCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRatingsInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    accountType?: string | null
    isActive?: boolean
    isApproved?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    coursesCreated?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    coursesEnrolled?: CourseUncheckedCreateNestedManyWithoutStudentsEnrolledInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
  }

  export type CourseUpsertWithoutRatingsInput = {
    update: XOR<CourseUpdateWithoutRatingsInput, CourseUncheckedUpdateWithoutRatingsInput>
    create: XOR<CourseCreateWithoutRatingsInput, CourseUncheckedCreateWithoutRatingsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutRatingsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutRatingsInput, CourseUncheckedUpdateWithoutRatingsInput>
  }

  export type CourseUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutCoursesCreatedNestedInput
    category?: CategoryUpdateOneWithoutCoursesNestedInput
    studentsEnrolled?: UserUpdateManyWithoutCoursesEnrolledNestedInput
    sections?: SectionUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutCourseNestedInput
    orders?: OrderUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    studentsEnrolled?: UserUncheckedUpdateManyWithoutCoursesEnrolledNestedInput
    sections?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutCourseNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserUpsertWithoutRatingsInput = {
    update: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    coursesCreated?: CourseUpdateManyWithoutInstructorNestedInput
    coursesEnrolled?: CourseUpdateManyWithoutStudentsEnrolledNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    coursesCreated?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    coursesEnrolled?: CourseUncheckedUpdateManyWithoutStudentsEnrolledNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseCreateWithoutCourseProgressInput = {
    id?: string
    courseName: string
    courseDescription: string
    whatYouWillLearn?: string | null
    price: number
    thumbnail?: string | null
    tag?: CourseCreatetagInput | string[]
    instructions?: CourseCreateinstructionsInput | string[]
    status?: $Enums.CourseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: UserCreateNestedOneWithoutCoursesCreatedInput
    category?: CategoryCreateNestedOneWithoutCoursesInput
    studentsEnrolled?: UserCreateNestedManyWithoutCoursesEnrolledInput
    sections?: SectionCreateNestedManyWithoutCourseInput
    ratings?: RatingAndReviewCreateNestedManyWithoutCourseInput
    orders?: OrderCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCourseProgressInput = {
    id?: string
    courseName: string
    courseDescription: string
    whatYouWillLearn?: string | null
    price: number
    thumbnail?: string | null
    tag?: CourseCreatetagInput | string[]
    instructions?: CourseCreateinstructionsInput | string[]
    status?: $Enums.CourseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorId: string
    categoryId?: string | null
    studentsEnrolled?: UserUncheckedCreateNestedManyWithoutCoursesEnrolledInput
    sections?: SectionUncheckedCreateNestedManyWithoutCourseInput
    ratings?: RatingAndReviewUncheckedCreateNestedManyWithoutCourseInput
    orders?: OrderUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCourseProgressInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCourseProgressInput, CourseUncheckedCreateWithoutCourseProgressInput>
  }

  export type UserCreateWithoutCourseProgressInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    accountType?: string | null
    isActive?: boolean
    isApproved?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    coursesCreated?: CourseCreateNestedManyWithoutInstructorInput
    coursesEnrolled?: CourseCreateNestedManyWithoutStudentsEnrolledInput
    ratings?: RatingAndReviewCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCourseProgressInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    otp?: string | null
    otpExpiry?: Date | string | null
    accountType?: string | null
    isActive?: boolean
    isApproved?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    coursesCreated?: CourseUncheckedCreateNestedManyWithoutInstructorInput
    coursesEnrolled?: CourseUncheckedCreateNestedManyWithoutStudentsEnrolledInput
    ratings?: RatingAndReviewUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCourseProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCourseProgressInput, UserUncheckedCreateWithoutCourseProgressInput>
  }

  export type SubsectionCreateWithoutCompletedByInput = {
    id?: string
    title: string
    timeDuration: string
    description?: string | null
    videoUrls?: SubsectionCreatevideoUrlsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    section: SectionCreateNestedOneWithoutSubsectionsInput
  }

  export type SubsectionUncheckedCreateWithoutCompletedByInput = {
    id?: string
    title: string
    timeDuration: string
    description?: string | null
    videoUrls?: SubsectionCreatevideoUrlsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionId: string
  }

  export type SubsectionCreateOrConnectWithoutCompletedByInput = {
    where: SubsectionWhereUniqueInput
    create: XOR<SubsectionCreateWithoutCompletedByInput, SubsectionUncheckedCreateWithoutCompletedByInput>
  }

  export type CourseUpsertWithoutCourseProgressInput = {
    update: XOR<CourseUpdateWithoutCourseProgressInput, CourseUncheckedUpdateWithoutCourseProgressInput>
    create: XOR<CourseCreateWithoutCourseProgressInput, CourseUncheckedCreateWithoutCourseProgressInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCourseProgressInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCourseProgressInput, CourseUncheckedUpdateWithoutCourseProgressInput>
  }

  export type CourseUpdateWithoutCourseProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutCoursesCreatedNestedInput
    category?: CategoryUpdateOneWithoutCoursesNestedInput
    studentsEnrolled?: UserUpdateManyWithoutCoursesEnrolledNestedInput
    sections?: SectionUpdateManyWithoutCourseNestedInput
    ratings?: RatingAndReviewUpdateManyWithoutCourseNestedInput
    orders?: OrderUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCourseProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    studentsEnrolled?: UserUncheckedUpdateManyWithoutCoursesEnrolledNestedInput
    sections?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    ratings?: RatingAndReviewUncheckedUpdateManyWithoutCourseNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserUpsertWithoutCourseProgressInput = {
    update: XOR<UserUpdateWithoutCourseProgressInput, UserUncheckedUpdateWithoutCourseProgressInput>
    create: XOR<UserCreateWithoutCourseProgressInput, UserUncheckedCreateWithoutCourseProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCourseProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCourseProgressInput, UserUncheckedUpdateWithoutCourseProgressInput>
  }

  export type UserUpdateWithoutCourseProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    coursesCreated?: CourseUpdateManyWithoutInstructorNestedInput
    coursesEnrolled?: CourseUpdateManyWithoutStudentsEnrolledNestedInput
    ratings?: RatingAndReviewUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCourseProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    coursesCreated?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    coursesEnrolled?: CourseUncheckedUpdateManyWithoutStudentsEnrolledNestedInput
    ratings?: RatingAndReviewUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubsectionUpsertWithWhereUniqueWithoutCompletedByInput = {
    where: SubsectionWhereUniqueInput
    update: XOR<SubsectionUpdateWithoutCompletedByInput, SubsectionUncheckedUpdateWithoutCompletedByInput>
    create: XOR<SubsectionCreateWithoutCompletedByInput, SubsectionUncheckedCreateWithoutCompletedByInput>
  }

  export type SubsectionUpdateWithWhereUniqueWithoutCompletedByInput = {
    where: SubsectionWhereUniqueInput
    data: XOR<SubsectionUpdateWithoutCompletedByInput, SubsectionUncheckedUpdateWithoutCompletedByInput>
  }

  export type SubsectionUpdateManyWithWhereWithoutCompletedByInput = {
    where: SubsectionScalarWhereInput
    data: XOR<SubsectionUpdateManyMutationInput, SubsectionUncheckedUpdateManyWithoutCompletedByInput>
  }

  export type RefundCreateManyOrderInput = {
    id?: string
    amount: number
    status?: string
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefundUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyUserInput = {
    id?: string
    amount: number
    currency?: string
    status?: string
    paymentId?: string | null
    razorpayOrderId: string
    razorpaySignature?: string | null
    paymentMethod?: string | null
    receipt?: string | null
    courseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCreateManyInstructorInput = {
    id?: string
    courseName: string
    courseDescription: string
    whatYouWillLearn?: string | null
    price: number
    thumbnail?: string | null
    tag?: CourseCreatetagInput | string[]
    instructions?: CourseCreateinstructionsInput | string[]
    status?: $Enums.CourseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
  }

  export type RatingAndReviewCreateManyUserInput = {
    id?: string
    rating: number
    review: string
    createdAt?: Date | string
    courseId: string
  }

  export type CourseProgressCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    revoked?: boolean
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refunds?: RefundUpdateManyWithoutOrderNestedInput
    course?: CourseUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refunds?: RefundUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutCoursesNestedInput
    studentsEnrolled?: UserUpdateManyWithoutCoursesEnrolledNestedInput
    sections?: SectionUpdateManyWithoutCourseNestedInput
    ratings?: RatingAndReviewUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutCourseNestedInput
    orders?: OrderUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    studentsEnrolled?: UserUncheckedUpdateManyWithoutCoursesEnrolledNestedInput
    sections?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    ratings?: RatingAndReviewUncheckedUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutCourseNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseUpdateWithoutStudentsEnrolledInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutCoursesCreatedNestedInput
    category?: CategoryUpdateOneWithoutCoursesNestedInput
    sections?: SectionUpdateManyWithoutCourseNestedInput
    ratings?: RatingAndReviewUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutCourseNestedInput
    orders?: OrderUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutStudentsEnrolledInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    sections?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    ratings?: RatingAndReviewUncheckedUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutCourseNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutStudentsEnrolledInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingAndReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingAndReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type RatingAndReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCourseProgressNestedInput
    completedVideos?: SubsectionUpdateManyWithoutCompletedByNestedInput
  }

  export type CourseProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    completedVideos?: SubsectionUncheckedUpdateManyWithoutCompletedByNestedInput
  }

  export type CourseProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionCreateManyCourseInput = {
    id?: string
    sectionName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingAndReviewCreateManyCourseInput = {
    id?: string
    rating: number
    review: string
    createdAt?: Date | string
    userId: string
  }

  export type CourseProgressCreateManyCourseInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type OrderCreateManyCourseInput = {
    id?: string
    userId: string
    amount: number
    currency?: string
    status?: string
    paymentId?: string | null
    razorpayOrderId: string
    razorpaySignature?: string | null
    paymentMethod?: string | null
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutCoursesEnrolledInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    coursesCreated?: CourseUpdateManyWithoutInstructorNestedInput
    ratings?: RatingAndReviewUpdateManyWithoutUserNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursesEnrolledInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    coursesCreated?: CourseUncheckedUpdateManyWithoutInstructorNestedInput
    ratings?: RatingAndReviewUncheckedUpdateManyWithoutUserNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCoursesEnrolledInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accountType?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subsections?: SubsectionUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subsections?: SubsectionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingAndReviewUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingAndReviewUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RatingAndReviewUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseProgressUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCourseProgressNestedInput
    completedVideos?: SubsectionUpdateManyWithoutCompletedByNestedInput
  }

  export type CourseProgressUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    completedVideos?: SubsectionUncheckedUpdateManyWithoutCompletedByNestedInput
  }

  export type CourseProgressUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refunds?: RefundUpdateManyWithoutOrderNestedInput
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refunds?: RefundUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateManyCategoryInput = {
    id?: string
    courseName: string
    courseDescription: string
    whatYouWillLearn?: string | null
    price: number
    thumbnail?: string | null
    tag?: CourseCreatetagInput | string[]
    instructions?: CourseCreateinstructionsInput | string[]
    status?: $Enums.CourseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorId: string
  }

  export type CourseUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutCoursesCreatedNestedInput
    studentsEnrolled?: UserUpdateManyWithoutCoursesEnrolledNestedInput
    sections?: SectionUpdateManyWithoutCourseNestedInput
    ratings?: RatingAndReviewUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutCourseNestedInput
    orders?: OrderUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: StringFieldUpdateOperationsInput | string
    studentsEnrolled?: UserUncheckedUpdateManyWithoutCoursesEnrolledNestedInput
    sections?: SectionUncheckedUpdateManyWithoutCourseNestedInput
    ratings?: RatingAndReviewUncheckedUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutCourseNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    courseDescription?: StringFieldUpdateOperationsInput | string
    whatYouWillLearn?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: CourseUpdatetagInput | string[]
    instructions?: CourseUpdateinstructionsInput | string[]
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: StringFieldUpdateOperationsInput | string
  }

  export type SubsectionCreateManySectionInput = {
    id?: string
    title: string
    timeDuration: string
    description?: string | null
    videoUrls?: SubsectionCreatevideoUrlsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubsectionUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    timeDuration?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrls?: SubsectionUpdatevideoUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedBy?: CourseProgressUpdateManyWithoutCompletedVideosNestedInput
  }

  export type SubsectionUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    timeDuration?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrls?: SubsectionUpdatevideoUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedBy?: CourseProgressUncheckedUpdateManyWithoutCompletedVideosNestedInput
  }

  export type SubsectionUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    timeDuration?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrls?: SubsectionUpdatevideoUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseProgressUpdateWithoutCompletedVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCourseProgressNestedInput
    user?: UserUpdateOneRequiredWithoutCourseProgressNestedInput
  }

  export type CourseProgressUncheckedUpdateWithoutCompletedVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseProgressUncheckedUpdateManyWithoutCompletedVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SubsectionUpdateWithoutCompletedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    timeDuration?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrls?: SubsectionUpdatevideoUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: SectionUpdateOneRequiredWithoutSubsectionsNestedInput
  }

  export type SubsectionUncheckedUpdateWithoutCompletedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    timeDuration?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrls?: SubsectionUpdatevideoUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type SubsectionUncheckedUpdateManyWithoutCompletedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    timeDuration?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrls?: SubsectionUpdatevideoUrlsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}