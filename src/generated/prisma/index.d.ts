
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Executive
 * 
 */
export type Executive = $Result.DefaultSelection<Prisma.$ExecutivePayload>
/**
 * Model Package
 * 
 */
export type Package = $Result.DefaultSelection<Prisma.$PackagePayload>
/**
 * Model Webinar
 * 
 */
export type Webinar = $Result.DefaultSelection<Prisma.$WebinarPayload>
/**
 * Model UserPackage
 * 
 */
export type UserPackage = $Result.DefaultSelection<Prisma.$UserPackagePayload>
/**
 * Model WebinarAttendance
 * 
 */
export type WebinarAttendance = $Result.DefaultSelection<Prisma.$WebinarAttendancePayload>
/**
 * Model Referral
 * 
 */
export type Referral = $Result.DefaultSelection<Prisma.$ReferralPayload>
/**
 * Model CoinTransaction
 * 
 */
export type CoinTransaction = $Result.DefaultSelection<Prisma.$CoinTransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  EXECUTIVE: 'EXECUTIVE',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TransactionType: {
  PURCHASE: 'PURCHASE',
  SPEND: 'SPEND'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.executive`: Exposes CRUD operations for the **Executive** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Executives
    * const executives = await prisma.executive.findMany()
    * ```
    */
  get executive(): Prisma.ExecutiveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.package`: Exposes CRUD operations for the **Package** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packages
    * const packages = await prisma.package.findMany()
    * ```
    */
  get package(): Prisma.PackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webinar`: Exposes CRUD operations for the **Webinar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Webinars
    * const webinars = await prisma.webinar.findMany()
    * ```
    */
  get webinar(): Prisma.WebinarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPackage`: Exposes CRUD operations for the **UserPackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPackages
    * const userPackages = await prisma.userPackage.findMany()
    * ```
    */
  get userPackage(): Prisma.UserPackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webinarAttendance`: Exposes CRUD operations for the **WebinarAttendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebinarAttendances
    * const webinarAttendances = await prisma.webinarAttendance.findMany()
    * ```
    */
  get webinarAttendance(): Prisma.WebinarAttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referral`: Exposes CRUD operations for the **Referral** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Referrals
    * const referrals = await prisma.referral.findMany()
    * ```
    */
  get referral(): Prisma.ReferralDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coinTransaction`: Exposes CRUD operations for the **CoinTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoinTransactions
    * const coinTransactions = await prisma.coinTransaction.findMany()
    * ```
    */
  get coinTransaction(): Prisma.CoinTransactionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    User: 'User',
    Executive: 'Executive',
    Package: 'Package',
    Webinar: 'Webinar',
    UserPackage: 'UserPackage',
    WebinarAttendance: 'WebinarAttendance',
    Referral: 'Referral',
    CoinTransaction: 'CoinTransaction'
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
      modelProps: "user" | "executive" | "package" | "webinar" | "userPackage" | "webinarAttendance" | "referral" | "coinTransaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Executive: {
        payload: Prisma.$ExecutivePayload<ExtArgs>
        fields: Prisma.ExecutiveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutiveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutiveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload>
          }
          findFirst: {
            args: Prisma.ExecutiveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutiveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload>
          }
          findMany: {
            args: Prisma.ExecutiveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload>[]
          }
          create: {
            args: Prisma.ExecutiveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload>
          }
          createMany: {
            args: Prisma.ExecutiveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExecutiveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload>[]
          }
          delete: {
            args: Prisma.ExecutiveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload>
          }
          update: {
            args: Prisma.ExecutiveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload>
          }
          deleteMany: {
            args: Prisma.ExecutiveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutiveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExecutiveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload>[]
          }
          upsert: {
            args: Prisma.ExecutiveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutivePayload>
          }
          aggregate: {
            args: Prisma.ExecutiveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecutive>
          }
          groupBy: {
            args: Prisma.ExecutiveGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutiveGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecutiveCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutiveCountAggregateOutputType> | number
          }
        }
      }
      Package: {
        payload: Prisma.$PackagePayload<ExtArgs>
        fields: Prisma.PackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findFirst: {
            args: Prisma.PackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findMany: {
            args: Prisma.PackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          create: {
            args: Prisma.PackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          createMany: {
            args: Prisma.PackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          delete: {
            args: Prisma.PackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          update: {
            args: Prisma.PackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          deleteMany: {
            args: Prisma.PackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          upsert: {
            args: Prisma.PackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          aggregate: {
            args: Prisma.PackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackage>
          }
          groupBy: {
            args: Prisma.PackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageCountArgs<ExtArgs>
            result: $Utils.Optional<PackageCountAggregateOutputType> | number
          }
        }
      }
      Webinar: {
        payload: Prisma.$WebinarPayload<ExtArgs>
        fields: Prisma.WebinarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebinarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebinarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>
          }
          findFirst: {
            args: Prisma.WebinarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebinarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>
          }
          findMany: {
            args: Prisma.WebinarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>[]
          }
          create: {
            args: Prisma.WebinarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>
          }
          createMany: {
            args: Prisma.WebinarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebinarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>[]
          }
          delete: {
            args: Prisma.WebinarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>
          }
          update: {
            args: Prisma.WebinarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>
          }
          deleteMany: {
            args: Prisma.WebinarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebinarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebinarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>[]
          }
          upsert: {
            args: Prisma.WebinarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarPayload>
          }
          aggregate: {
            args: Prisma.WebinarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebinar>
          }
          groupBy: {
            args: Prisma.WebinarGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebinarGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebinarCountArgs<ExtArgs>
            result: $Utils.Optional<WebinarCountAggregateOutputType> | number
          }
        }
      }
      UserPackage: {
        payload: Prisma.$UserPackagePayload<ExtArgs>
        fields: Prisma.UserPackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload>
          }
          findFirst: {
            args: Prisma.UserPackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload>
          }
          findMany: {
            args: Prisma.UserPackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload>[]
          }
          create: {
            args: Prisma.UserPackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload>
          }
          createMany: {
            args: Prisma.UserPackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload>[]
          }
          delete: {
            args: Prisma.UserPackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload>
          }
          update: {
            args: Prisma.UserPackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload>
          }
          deleteMany: {
            args: Prisma.UserPackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload>[]
          }
          upsert: {
            args: Prisma.UserPackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPackagePayload>
          }
          aggregate: {
            args: Prisma.UserPackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPackage>
          }
          groupBy: {
            args: Prisma.UserPackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPackageCountArgs<ExtArgs>
            result: $Utils.Optional<UserPackageCountAggregateOutputType> | number
          }
        }
      }
      WebinarAttendance: {
        payload: Prisma.$WebinarAttendancePayload<ExtArgs>
        fields: Prisma.WebinarAttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebinarAttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarAttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebinarAttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarAttendancePayload>
          }
          findFirst: {
            args: Prisma.WebinarAttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarAttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebinarAttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarAttendancePayload>
          }
          findMany: {
            args: Prisma.WebinarAttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarAttendancePayload>[]
          }
          create: {
            args: Prisma.WebinarAttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarAttendancePayload>
          }
          createMany: {
            args: Prisma.WebinarAttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebinarAttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarAttendancePayload>[]
          }
          delete: {
            args: Prisma.WebinarAttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarAttendancePayload>
          }
          update: {
            args: Prisma.WebinarAttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarAttendancePayload>
          }
          deleteMany: {
            args: Prisma.WebinarAttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebinarAttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebinarAttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarAttendancePayload>[]
          }
          upsert: {
            args: Prisma.WebinarAttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebinarAttendancePayload>
          }
          aggregate: {
            args: Prisma.WebinarAttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebinarAttendance>
          }
          groupBy: {
            args: Prisma.WebinarAttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebinarAttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebinarAttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<WebinarAttendanceCountAggregateOutputType> | number
          }
        }
      }
      Referral: {
        payload: Prisma.$ReferralPayload<ExtArgs>
        fields: Prisma.ReferralFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findFirst: {
            args: Prisma.ReferralFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findMany: {
            args: Prisma.ReferralFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          create: {
            args: Prisma.ReferralCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          createMany: {
            args: Prisma.ReferralCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferralCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          delete: {
            args: Prisma.ReferralDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          update: {
            args: Prisma.ReferralUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          deleteMany: {
            args: Prisma.ReferralDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReferralUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          upsert: {
            args: Prisma.ReferralUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          aggregate: {
            args: Prisma.ReferralAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferral>
          }
          groupBy: {
            args: Prisma.ReferralGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralCountAggregateOutputType> | number
          }
        }
      }
      CoinTransaction: {
        payload: Prisma.$CoinTransactionPayload<ExtArgs>
        fields: Prisma.CoinTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoinTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoinTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload>
          }
          findFirst: {
            args: Prisma.CoinTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoinTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload>
          }
          findMany: {
            args: Prisma.CoinTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload>[]
          }
          create: {
            args: Prisma.CoinTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload>
          }
          createMany: {
            args: Prisma.CoinTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoinTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload>[]
          }
          delete: {
            args: Prisma.CoinTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload>
          }
          update: {
            args: Prisma.CoinTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload>
          }
          deleteMany: {
            args: Prisma.CoinTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoinTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoinTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload>[]
          }
          upsert: {
            args: Prisma.CoinTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinTransactionPayload>
          }
          aggregate: {
            args: Prisma.CoinTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoinTransaction>
          }
          groupBy: {
            args: Prisma.CoinTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoinTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoinTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<CoinTransactionCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    user?: UserOmit
    executive?: ExecutiveOmit
    package?: PackageOmit
    webinar?: WebinarOmit
    userPackage?: UserPackageOmit
    webinarAttendance?: WebinarAttendanceOmit
    referral?: ReferralOmit
    coinTransaction?: CoinTransactionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    webinars: number
    transactions: number
    referralsMade: number
    userPackages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    webinars?: boolean | UserCountOutputTypeCountWebinarsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    referralsMade?: boolean | UserCountOutputTypeCountReferralsMadeArgs
    userPackages?: boolean | UserCountOutputTypeCountUserPackagesArgs
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
  export type UserCountOutputTypeCountWebinarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebinarAttendanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoinTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferralsMadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPackageWhereInput
  }


  /**
   * Count Type ExecutiveCountOutputType
   */

  export type ExecutiveCountOutputType = {
    referredUsers: number
    referrals: number
  }

  export type ExecutiveCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredUsers?: boolean | ExecutiveCountOutputTypeCountReferredUsersArgs
    referrals?: boolean | ExecutiveCountOutputTypeCountReferralsArgs
  }

  // Custom InputTypes
  /**
   * ExecutiveCountOutputType without action
   */
  export type ExecutiveCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutiveCountOutputType
     */
    select?: ExecutiveCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExecutiveCountOutputType without action
   */
  export type ExecutiveCountOutputTypeCountReferredUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ExecutiveCountOutputType without action
   */
  export type ExecutiveCountOutputTypeCountReferralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
  }


  /**
   * Count Type PackageCountOutputType
   */

  export type PackageCountOutputType = {
    users: number
    webinars: number
    userPackages: number
  }

  export type PackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | PackageCountOutputTypeCountUsersArgs
    webinars?: boolean | PackageCountOutputTypeCountWebinarsArgs
    userPackages?: boolean | PackageCountOutputTypeCountUserPackagesArgs
  }

  // Custom InputTypes
  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageCountOutputType
     */
    select?: PackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountWebinarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebinarWhereInput
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountUserPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPackageWhereInput
  }


  /**
   * Count Type WebinarCountOutputType
   */

  export type WebinarCountOutputType = {
    attendees: number
  }

  export type WebinarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendees?: boolean | WebinarCountOutputTypeCountAttendeesArgs
  }

  // Custom InputTypes
  /**
   * WebinarCountOutputType without action
   */
  export type WebinarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebinarCountOutputType
     */
    select?: WebinarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WebinarCountOutputType without action
   */
  export type WebinarCountOutputTypeCountAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebinarAttendanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    coins: number | null
  }

  export type UserSumAggregateOutputType = {
    coins: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    joinedAt: Date | null
    role: $Enums.Role | null
    coins: number | null
    packageId: string | null
    executiveRefode: string | null
    isBanned: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    joinedAt: Date | null
    role: $Enums.Role | null
    coins: number | null
    packageId: string | null
    executiveRefode: string | null
    isBanned: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    joinedAt: number
    role: number
    coins: number
    packageId: number
    executiveRefode: number
    isBanned: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    coins?: true
  }

  export type UserSumAggregateInputType = {
    coins?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    joinedAt?: true
    role?: true
    coins?: true
    packageId?: true
    executiveRefode?: true
    isBanned?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    joinedAt?: true
    role?: true
    coins?: true
    packageId?: true
    executiveRefode?: true
    isBanned?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    joinedAt?: true
    role?: true
    coins?: true
    packageId?: true
    executiveRefode?: true
    isBanned?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    joinedAt: Date
    role: $Enums.Role
    coins: number
    packageId: string | null
    executiveRefode: string | null
    isBanned: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    joinedAt?: boolean
    role?: boolean
    coins?: boolean
    packageId?: boolean
    executiveRefode?: boolean
    isBanned?: boolean
    package?: boolean | User$packageArgs<ExtArgs>
    webinars?: boolean | User$webinarsArgs<ExtArgs>
    referredBy?: boolean | User$referredByArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    referralsMade?: boolean | User$referralsMadeArgs<ExtArgs>
    userPackages?: boolean | User$userPackagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    joinedAt?: boolean
    role?: boolean
    coins?: boolean
    packageId?: boolean
    executiveRefode?: boolean
    isBanned?: boolean
    package?: boolean | User$packageArgs<ExtArgs>
    referredBy?: boolean | User$referredByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    joinedAt?: boolean
    role?: boolean
    coins?: boolean
    packageId?: boolean
    executiveRefode?: boolean
    isBanned?: boolean
    package?: boolean | User$packageArgs<ExtArgs>
    referredBy?: boolean | User$referredByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    joinedAt?: boolean
    role?: boolean
    coins?: boolean
    packageId?: boolean
    executiveRefode?: boolean
    isBanned?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "joinedAt" | "role" | "coins" | "packageId" | "executiveRefode" | "isBanned", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | User$packageArgs<ExtArgs>
    webinars?: boolean | User$webinarsArgs<ExtArgs>
    referredBy?: boolean | User$referredByArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    referralsMade?: boolean | User$referralsMadeArgs<ExtArgs>
    userPackages?: boolean | User$userPackagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | User$packageArgs<ExtArgs>
    referredBy?: boolean | User$referredByArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | User$packageArgs<ExtArgs>
    referredBy?: boolean | User$referredByArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      package: Prisma.$PackagePayload<ExtArgs> | null
      webinars: Prisma.$WebinarAttendancePayload<ExtArgs>[]
      referredBy: Prisma.$ExecutivePayload<ExtArgs> | null
      transactions: Prisma.$CoinTransactionPayload<ExtArgs>[]
      referralsMade: Prisma.$ReferralPayload<ExtArgs>[]
      userPackages: Prisma.$UserPackagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      joinedAt: Date
      role: $Enums.Role
      coins: number
      packageId: string | null
      executiveRefode: string | null
      isBanned: boolean
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
    package<T extends User$packageArgs<ExtArgs> = {}>(args?: Subset<T, User$packageArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    webinars<T extends User$webinarsArgs<ExtArgs> = {}>(args?: Subset<T, User$webinarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebinarAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referredBy<T extends User$referredByArgs<ExtArgs> = {}>(args?: Subset<T, User$referredByArgs<ExtArgs>>): Prisma__ExecutiveClient<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referralsMade<T extends User$referralsMadeArgs<ExtArgs> = {}>(args?: Subset<T, User$referralsMadeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userPackages<T extends User$userPackagesArgs<ExtArgs> = {}>(args?: Subset<T, User$userPackagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly joinedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly coins: FieldRef<"User", 'Int'>
    readonly packageId: FieldRef<"User", 'String'>
    readonly executiveRefode: FieldRef<"User", 'String'>
    readonly isBanned: FieldRef<"User", 'Boolean'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.package
   */
  export type User$packageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    where?: PackageWhereInput
  }

  /**
   * User.webinars
   */
  export type User$webinarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebinarAttendance
     */
    select?: WebinarAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebinarAttendance
     */
    omit?: WebinarAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarAttendanceInclude<ExtArgs> | null
    where?: WebinarAttendanceWhereInput
    orderBy?: WebinarAttendanceOrderByWithRelationInput | WebinarAttendanceOrderByWithRelationInput[]
    cursor?: WebinarAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebinarAttendanceScalarFieldEnum | WebinarAttendanceScalarFieldEnum[]
  }

  /**
   * User.referredBy
   */
  export type User$referredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutiveInclude<ExtArgs> | null
    where?: ExecutiveWhereInput
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinTransaction
     */
    omit?: CoinTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    where?: CoinTransactionWhereInput
    orderBy?: CoinTransactionOrderByWithRelationInput | CoinTransactionOrderByWithRelationInput[]
    cursor?: CoinTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoinTransactionScalarFieldEnum | CoinTransactionScalarFieldEnum[]
  }

  /**
   * User.referralsMade
   */
  export type User$referralsMadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    cursor?: ReferralWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * User.userPackages
   */
  export type User$userPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    where?: UserPackageWhereInput
    orderBy?: UserPackageOrderByWithRelationInput | UserPackageOrderByWithRelationInput[]
    cursor?: UserPackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPackageScalarFieldEnum | UserPackageScalarFieldEnum[]
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
   * Model Executive
   */

  export type AggregateExecutive = {
    _count: ExecutiveCountAggregateOutputType | null
    _min: ExecutiveMinAggregateOutputType | null
    _max: ExecutiveMaxAggregateOutputType | null
  }

  export type ExecutiveMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    joinedAt: Date | null
    isBanned: boolean | null
    referralCode: string | null
  }

  export type ExecutiveMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    joinedAt: Date | null
    isBanned: boolean | null
    referralCode: string | null
  }

  export type ExecutiveCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    joinedAt: number
    isBanned: number
    referralCode: number
    _all: number
  }


  export type ExecutiveMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    joinedAt?: true
    isBanned?: true
    referralCode?: true
  }

  export type ExecutiveMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    joinedAt?: true
    isBanned?: true
    referralCode?: true
  }

  export type ExecutiveCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    joinedAt?: true
    isBanned?: true
    referralCode?: true
    _all?: true
  }

  export type ExecutiveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Executive to aggregate.
     */
    where?: ExecutiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executives to fetch.
     */
    orderBy?: ExecutiveOrderByWithRelationInput | ExecutiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Executives
    **/
    _count?: true | ExecutiveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutiveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutiveMaxAggregateInputType
  }

  export type GetExecutiveAggregateType<T extends ExecutiveAggregateArgs> = {
        [P in keyof T & keyof AggregateExecutive]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecutive[P]>
      : GetScalarType<T[P], AggregateExecutive[P]>
  }




  export type ExecutiveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutiveWhereInput
    orderBy?: ExecutiveOrderByWithAggregationInput | ExecutiveOrderByWithAggregationInput[]
    by: ExecutiveScalarFieldEnum[] | ExecutiveScalarFieldEnum
    having?: ExecutiveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutiveCountAggregateInputType | true
    _min?: ExecutiveMinAggregateInputType
    _max?: ExecutiveMaxAggregateInputType
  }

  export type ExecutiveGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    joinedAt: Date
    isBanned: boolean
    referralCode: string
    _count: ExecutiveCountAggregateOutputType | null
    _min: ExecutiveMinAggregateOutputType | null
    _max: ExecutiveMaxAggregateOutputType | null
  }

  type GetExecutiveGroupByPayload<T extends ExecutiveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutiveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutiveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutiveGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutiveGroupByOutputType[P]>
        }
      >
    >


  export type ExecutiveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    joinedAt?: boolean
    isBanned?: boolean
    referralCode?: boolean
    referredUsers?: boolean | Executive$referredUsersArgs<ExtArgs>
    referrals?: boolean | Executive$referralsArgs<ExtArgs>
    _count?: boolean | ExecutiveCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executive"]>

  export type ExecutiveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    joinedAt?: boolean
    isBanned?: boolean
    referralCode?: boolean
  }, ExtArgs["result"]["executive"]>

  export type ExecutiveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    joinedAt?: boolean
    isBanned?: boolean
    referralCode?: boolean
  }, ExtArgs["result"]["executive"]>

  export type ExecutiveSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    joinedAt?: boolean
    isBanned?: boolean
    referralCode?: boolean
  }

  export type ExecutiveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "joinedAt" | "isBanned" | "referralCode", ExtArgs["result"]["executive"]>
  export type ExecutiveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredUsers?: boolean | Executive$referredUsersArgs<ExtArgs>
    referrals?: boolean | Executive$referralsArgs<ExtArgs>
    _count?: boolean | ExecutiveCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExecutiveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExecutiveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExecutivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Executive"
    objects: {
      referredUsers: Prisma.$UserPayload<ExtArgs>[]
      referrals: Prisma.$ReferralPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      joinedAt: Date
      isBanned: boolean
      referralCode: string
    }, ExtArgs["result"]["executive"]>
    composites: {}
  }

  type ExecutiveGetPayload<S extends boolean | null | undefined | ExecutiveDefaultArgs> = $Result.GetResult<Prisma.$ExecutivePayload, S>

  type ExecutiveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExecutiveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExecutiveCountAggregateInputType | true
    }

  export interface ExecutiveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Executive'], meta: { name: 'Executive' } }
    /**
     * Find zero or one Executive that matches the filter.
     * @param {ExecutiveFindUniqueArgs} args - Arguments to find a Executive
     * @example
     * // Get one Executive
     * const executive = await prisma.executive.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecutiveFindUniqueArgs>(args: SelectSubset<T, ExecutiveFindUniqueArgs<ExtArgs>>): Prisma__ExecutiveClient<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Executive that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExecutiveFindUniqueOrThrowArgs} args - Arguments to find a Executive
     * @example
     * // Get one Executive
     * const executive = await prisma.executive.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecutiveFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecutiveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecutiveClient<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Executive that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutiveFindFirstArgs} args - Arguments to find a Executive
     * @example
     * // Get one Executive
     * const executive = await prisma.executive.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecutiveFindFirstArgs>(args?: SelectSubset<T, ExecutiveFindFirstArgs<ExtArgs>>): Prisma__ExecutiveClient<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Executive that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutiveFindFirstOrThrowArgs} args - Arguments to find a Executive
     * @example
     * // Get one Executive
     * const executive = await prisma.executive.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecutiveFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecutiveFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecutiveClient<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Executives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutiveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Executives
     * const executives = await prisma.executive.findMany()
     * 
     * // Get first 10 Executives
     * const executives = await prisma.executive.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executiveWithIdOnly = await prisma.executive.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecutiveFindManyArgs>(args?: SelectSubset<T, ExecutiveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Executive.
     * @param {ExecutiveCreateArgs} args - Arguments to create a Executive.
     * @example
     * // Create one Executive
     * const Executive = await prisma.executive.create({
     *   data: {
     *     // ... data to create a Executive
     *   }
     * })
     * 
     */
    create<T extends ExecutiveCreateArgs>(args: SelectSubset<T, ExecutiveCreateArgs<ExtArgs>>): Prisma__ExecutiveClient<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Executives.
     * @param {ExecutiveCreateManyArgs} args - Arguments to create many Executives.
     * @example
     * // Create many Executives
     * const executive = await prisma.executive.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecutiveCreateManyArgs>(args?: SelectSubset<T, ExecutiveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Executives and returns the data saved in the database.
     * @param {ExecutiveCreateManyAndReturnArgs} args - Arguments to create many Executives.
     * @example
     * // Create many Executives
     * const executive = await prisma.executive.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Executives and only return the `id`
     * const executiveWithIdOnly = await prisma.executive.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExecutiveCreateManyAndReturnArgs>(args?: SelectSubset<T, ExecutiveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Executive.
     * @param {ExecutiveDeleteArgs} args - Arguments to delete one Executive.
     * @example
     * // Delete one Executive
     * const Executive = await prisma.executive.delete({
     *   where: {
     *     // ... filter to delete one Executive
     *   }
     * })
     * 
     */
    delete<T extends ExecutiveDeleteArgs>(args: SelectSubset<T, ExecutiveDeleteArgs<ExtArgs>>): Prisma__ExecutiveClient<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Executive.
     * @param {ExecutiveUpdateArgs} args - Arguments to update one Executive.
     * @example
     * // Update one Executive
     * const executive = await prisma.executive.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecutiveUpdateArgs>(args: SelectSubset<T, ExecutiveUpdateArgs<ExtArgs>>): Prisma__ExecutiveClient<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Executives.
     * @param {ExecutiveDeleteManyArgs} args - Arguments to filter Executives to delete.
     * @example
     * // Delete a few Executives
     * const { count } = await prisma.executive.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecutiveDeleteManyArgs>(args?: SelectSubset<T, ExecutiveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Executives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutiveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Executives
     * const executive = await prisma.executive.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecutiveUpdateManyArgs>(args: SelectSubset<T, ExecutiveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Executives and returns the data updated in the database.
     * @param {ExecutiveUpdateManyAndReturnArgs} args - Arguments to update many Executives.
     * @example
     * // Update many Executives
     * const executive = await prisma.executive.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Executives and only return the `id`
     * const executiveWithIdOnly = await prisma.executive.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExecutiveUpdateManyAndReturnArgs>(args: SelectSubset<T, ExecutiveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Executive.
     * @param {ExecutiveUpsertArgs} args - Arguments to update or create a Executive.
     * @example
     * // Update or create a Executive
     * const executive = await prisma.executive.upsert({
     *   create: {
     *     // ... data to create a Executive
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Executive we want to update
     *   }
     * })
     */
    upsert<T extends ExecutiveUpsertArgs>(args: SelectSubset<T, ExecutiveUpsertArgs<ExtArgs>>): Prisma__ExecutiveClient<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Executives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutiveCountArgs} args - Arguments to filter Executives to count.
     * @example
     * // Count the number of Executives
     * const count = await prisma.executive.count({
     *   where: {
     *     // ... the filter for the Executives we want to count
     *   }
     * })
    **/
    count<T extends ExecutiveCountArgs>(
      args?: Subset<T, ExecutiveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutiveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Executive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExecutiveAggregateArgs>(args: Subset<T, ExecutiveAggregateArgs>): Prisma.PrismaPromise<GetExecutiveAggregateType<T>>

    /**
     * Group by Executive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutiveGroupByArgs} args - Group by arguments.
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
      T extends ExecutiveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutiveGroupByArgs['orderBy'] }
        : { orderBy?: ExecutiveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExecutiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Executive model
   */
  readonly fields: ExecutiveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Executive.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutiveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referredUsers<T extends Executive$referredUsersArgs<ExtArgs> = {}>(args?: Subset<T, Executive$referredUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referrals<T extends Executive$referralsArgs<ExtArgs> = {}>(args?: Subset<T, Executive$referralsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Executive model
   */
  interface ExecutiveFieldRefs {
    readonly id: FieldRef<"Executive", 'String'>
    readonly name: FieldRef<"Executive", 'String'>
    readonly email: FieldRef<"Executive", 'String'>
    readonly password: FieldRef<"Executive", 'String'>
    readonly joinedAt: FieldRef<"Executive", 'DateTime'>
    readonly isBanned: FieldRef<"Executive", 'Boolean'>
    readonly referralCode: FieldRef<"Executive", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Executive findUnique
   */
  export type ExecutiveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutiveInclude<ExtArgs> | null
    /**
     * Filter, which Executive to fetch.
     */
    where: ExecutiveWhereUniqueInput
  }

  /**
   * Executive findUniqueOrThrow
   */
  export type ExecutiveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutiveInclude<ExtArgs> | null
    /**
     * Filter, which Executive to fetch.
     */
    where: ExecutiveWhereUniqueInput
  }

  /**
   * Executive findFirst
   */
  export type ExecutiveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutiveInclude<ExtArgs> | null
    /**
     * Filter, which Executive to fetch.
     */
    where?: ExecutiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executives to fetch.
     */
    orderBy?: ExecutiveOrderByWithRelationInput | ExecutiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Executives.
     */
    cursor?: ExecutiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Executives.
     */
    distinct?: ExecutiveScalarFieldEnum | ExecutiveScalarFieldEnum[]
  }

  /**
   * Executive findFirstOrThrow
   */
  export type ExecutiveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutiveInclude<ExtArgs> | null
    /**
     * Filter, which Executive to fetch.
     */
    where?: ExecutiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executives to fetch.
     */
    orderBy?: ExecutiveOrderByWithRelationInput | ExecutiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Executives.
     */
    cursor?: ExecutiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Executives.
     */
    distinct?: ExecutiveScalarFieldEnum | ExecutiveScalarFieldEnum[]
  }

  /**
   * Executive findMany
   */
  export type ExecutiveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutiveInclude<ExtArgs> | null
    /**
     * Filter, which Executives to fetch.
     */
    where?: ExecutiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executives to fetch.
     */
    orderBy?: ExecutiveOrderByWithRelationInput | ExecutiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Executives.
     */
    cursor?: ExecutiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executives.
     */
    skip?: number
    distinct?: ExecutiveScalarFieldEnum | ExecutiveScalarFieldEnum[]
  }

  /**
   * Executive create
   */
  export type ExecutiveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutiveInclude<ExtArgs> | null
    /**
     * The data needed to create a Executive.
     */
    data: XOR<ExecutiveCreateInput, ExecutiveUncheckedCreateInput>
  }

  /**
   * Executive createMany
   */
  export type ExecutiveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Executives.
     */
    data: ExecutiveCreateManyInput | ExecutiveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Executive createManyAndReturn
   */
  export type ExecutiveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * The data used to create many Executives.
     */
    data: ExecutiveCreateManyInput | ExecutiveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Executive update
   */
  export type ExecutiveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutiveInclude<ExtArgs> | null
    /**
     * The data needed to update a Executive.
     */
    data: XOR<ExecutiveUpdateInput, ExecutiveUncheckedUpdateInput>
    /**
     * Choose, which Executive to update.
     */
    where: ExecutiveWhereUniqueInput
  }

  /**
   * Executive updateMany
   */
  export type ExecutiveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Executives.
     */
    data: XOR<ExecutiveUpdateManyMutationInput, ExecutiveUncheckedUpdateManyInput>
    /**
     * Filter which Executives to update
     */
    where?: ExecutiveWhereInput
    /**
     * Limit how many Executives to update.
     */
    limit?: number
  }

  /**
   * Executive updateManyAndReturn
   */
  export type ExecutiveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * The data used to update Executives.
     */
    data: XOR<ExecutiveUpdateManyMutationInput, ExecutiveUncheckedUpdateManyInput>
    /**
     * Filter which Executives to update
     */
    where?: ExecutiveWhereInput
    /**
     * Limit how many Executives to update.
     */
    limit?: number
  }

  /**
   * Executive upsert
   */
  export type ExecutiveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutiveInclude<ExtArgs> | null
    /**
     * The filter to search for the Executive to update in case it exists.
     */
    where: ExecutiveWhereUniqueInput
    /**
     * In case the Executive found by the `where` argument doesn't exist, create a new Executive with this data.
     */
    create: XOR<ExecutiveCreateInput, ExecutiveUncheckedCreateInput>
    /**
     * In case the Executive was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutiveUpdateInput, ExecutiveUncheckedUpdateInput>
  }

  /**
   * Executive delete
   */
  export type ExecutiveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutiveInclude<ExtArgs> | null
    /**
     * Filter which Executive to delete.
     */
    where: ExecutiveWhereUniqueInput
  }

  /**
   * Executive deleteMany
   */
  export type ExecutiveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Executives to delete
     */
    where?: ExecutiveWhereInput
    /**
     * Limit how many Executives to delete.
     */
    limit?: number
  }

  /**
   * Executive.referredUsers
   */
  export type Executive$referredUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Executive.referrals
   */
  export type Executive$referralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    cursor?: ReferralWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Executive without action
   */
  export type ExecutiveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Executive
     */
    select?: ExecutiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Executive
     */
    omit?: ExecutiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutiveInclude<ExtArgs> | null
  }


  /**
   * Model Package
   */

  export type AggregatePackage = {
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  export type PackageAvgAggregateOutputType = {
    priceInCoins: number | null
    validityDays: number | null
  }

  export type PackageSumAggregateOutputType = {
    priceInCoins: number | null
    validityDays: number | null
  }

  export type PackageMinAggregateOutputType = {
    id: string | null
    name: string | null
    priceInCoins: number | null
    validityDays: number | null
  }

  export type PackageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    priceInCoins: number | null
    validityDays: number | null
  }

  export type PackageCountAggregateOutputType = {
    id: number
    name: number
    priceInCoins: number
    validityDays: number
    _all: number
  }


  export type PackageAvgAggregateInputType = {
    priceInCoins?: true
    validityDays?: true
  }

  export type PackageSumAggregateInputType = {
    priceInCoins?: true
    validityDays?: true
  }

  export type PackageMinAggregateInputType = {
    id?: true
    name?: true
    priceInCoins?: true
    validityDays?: true
  }

  export type PackageMaxAggregateInputType = {
    id?: true
    name?: true
    priceInCoins?: true
    validityDays?: true
  }

  export type PackageCountAggregateInputType = {
    id?: true
    name?: true
    priceInCoins?: true
    validityDays?: true
    _all?: true
  }

  export type PackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Package to aggregate.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packages
    **/
    _count?: true | PackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageMaxAggregateInputType
  }

  export type GetPackageAggregateType<T extends PackageAggregateArgs> = {
        [P in keyof T & keyof AggregatePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackage[P]>
      : GetScalarType<T[P], AggregatePackage[P]>
  }




  export type PackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithAggregationInput | PackageOrderByWithAggregationInput[]
    by: PackageScalarFieldEnum[] | PackageScalarFieldEnum
    having?: PackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageCountAggregateInputType | true
    _avg?: PackageAvgAggregateInputType
    _sum?: PackageSumAggregateInputType
    _min?: PackageMinAggregateInputType
    _max?: PackageMaxAggregateInputType
  }

  export type PackageGroupByOutputType = {
    id: string
    name: string
    priceInCoins: number
    validityDays: number
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  type GetPackageGroupByPayload<T extends PackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageGroupByOutputType[P]>
            : GetScalarType<T[P], PackageGroupByOutputType[P]>
        }
      >
    >


  export type PackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priceInCoins?: boolean
    validityDays?: boolean
    users?: boolean | Package$usersArgs<ExtArgs>
    webinars?: boolean | Package$webinarsArgs<ExtArgs>
    userPackages?: boolean | Package$userPackagesArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>

  export type PackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priceInCoins?: boolean
    validityDays?: boolean
  }, ExtArgs["result"]["package"]>

  export type PackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priceInCoins?: boolean
    validityDays?: boolean
  }, ExtArgs["result"]["package"]>

  export type PackageSelectScalar = {
    id?: boolean
    name?: boolean
    priceInCoins?: boolean
    validityDays?: boolean
  }

  export type PackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "priceInCoins" | "validityDays", ExtArgs["result"]["package"]>
  export type PackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Package$usersArgs<ExtArgs>
    webinars?: boolean | Package$webinarsArgs<ExtArgs>
    userPackages?: boolean | Package$userPackagesArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Package"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      webinars: Prisma.$WebinarPayload<ExtArgs>[]
      userPackages: Prisma.$UserPackagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      priceInCoins: number
      validityDays: number
    }, ExtArgs["result"]["package"]>
    composites: {}
  }

  type PackageGetPayload<S extends boolean | null | undefined | PackageDefaultArgs> = $Result.GetResult<Prisma.$PackagePayload, S>

  type PackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageCountAggregateInputType | true
    }

  export interface PackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Package'], meta: { name: 'Package' } }
    /**
     * Find zero or one Package that matches the filter.
     * @param {PackageFindUniqueArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageFindUniqueArgs>(args: SelectSubset<T, PackageFindUniqueArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Package that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageFindUniqueOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageFindFirstArgs>(args?: SelectSubset<T, PackageFindFirstArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packages
     * const packages = await prisma.package.findMany()
     * 
     * // Get first 10 Packages
     * const packages = await prisma.package.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageWithIdOnly = await prisma.package.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageFindManyArgs>(args?: SelectSubset<T, PackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Package.
     * @param {PackageCreateArgs} args - Arguments to create a Package.
     * @example
     * // Create one Package
     * const Package = await prisma.package.create({
     *   data: {
     *     // ... data to create a Package
     *   }
     * })
     * 
     */
    create<T extends PackageCreateArgs>(args: SelectSubset<T, PackageCreateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Packages.
     * @param {PackageCreateManyArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageCreateManyArgs>(args?: SelectSubset<T, PackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Packages and returns the data saved in the database.
     * @param {PackageCreateManyAndReturnArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackageCreateManyAndReturnArgs>(args?: SelectSubset<T, PackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Package.
     * @param {PackageDeleteArgs} args - Arguments to delete one Package.
     * @example
     * // Delete one Package
     * const Package = await prisma.package.delete({
     *   where: {
     *     // ... filter to delete one Package
     *   }
     * })
     * 
     */
    delete<T extends PackageDeleteArgs>(args: SelectSubset<T, PackageDeleteArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Package.
     * @param {PackageUpdateArgs} args - Arguments to update one Package.
     * @example
     * // Update one Package
     * const package = await prisma.package.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageUpdateArgs>(args: SelectSubset<T, PackageUpdateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Packages.
     * @param {PackageDeleteManyArgs} args - Arguments to filter Packages to delete.
     * @example
     * // Delete a few Packages
     * const { count } = await prisma.package.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageDeleteManyArgs>(args?: SelectSubset<T, PackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageUpdateManyArgs>(args: SelectSubset<T, PackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages and returns the data updated in the database.
     * @param {PackageUpdateManyAndReturnArgs} args - Arguments to update many Packages.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.updateManyAndReturn({
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
    updateManyAndReturn<T extends PackageUpdateManyAndReturnArgs>(args: SelectSubset<T, PackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Package.
     * @param {PackageUpsertArgs} args - Arguments to update or create a Package.
     * @example
     * // Update or create a Package
     * const package = await prisma.package.upsert({
     *   create: {
     *     // ... data to create a Package
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Package we want to update
     *   }
     * })
     */
    upsert<T extends PackageUpsertArgs>(args: SelectSubset<T, PackageUpsertArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageCountArgs} args - Arguments to filter Packages to count.
     * @example
     * // Count the number of Packages
     * const count = await prisma.package.count({
     *   where: {
     *     // ... the filter for the Packages we want to count
     *   }
     * })
    **/
    count<T extends PackageCountArgs>(
      args?: Subset<T, PackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackageAggregateArgs>(args: Subset<T, PackageAggregateArgs>): Prisma.PrismaPromise<GetPackageAggregateType<T>>

    /**
     * Group by Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageGroupByArgs} args - Group by arguments.
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
      T extends PackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageGroupByArgs['orderBy'] }
        : { orderBy?: PackageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Package model
   */
  readonly fields: PackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Package.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Package$usersArgs<ExtArgs> = {}>(args?: Subset<T, Package$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    webinars<T extends Package$webinarsArgs<ExtArgs> = {}>(args?: Subset<T, Package$webinarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userPackages<T extends Package$userPackagesArgs<ExtArgs> = {}>(args?: Subset<T, Package$userPackagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Package model
   */
  interface PackageFieldRefs {
    readonly id: FieldRef<"Package", 'String'>
    readonly name: FieldRef<"Package", 'String'>
    readonly priceInCoins: FieldRef<"Package", 'Int'>
    readonly validityDays: FieldRef<"Package", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Package findUnique
   */
  export type PackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findUniqueOrThrow
   */
  export type PackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findFirst
   */
  export type PackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findFirstOrThrow
   */
  export type PackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findMany
   */
  export type PackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Packages to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package create
   */
  export type PackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to create a Package.
     */
    data: XOR<PackageCreateInput, PackageUncheckedCreateInput>
  }

  /**
   * Package createMany
   */
  export type PackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Package createManyAndReturn
   */
  export type PackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Package update
   */
  export type PackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to update a Package.
     */
    data: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
    /**
     * Choose, which Package to update.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package updateMany
   */
  export type PackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
  }

  /**
   * Package updateManyAndReturn
   */
  export type PackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
  }

  /**
   * Package upsert
   */
  export type PackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The filter to search for the Package to update in case it exists.
     */
    where: PackageWhereUniqueInput
    /**
     * In case the Package found by the `where` argument doesn't exist, create a new Package with this data.
     */
    create: XOR<PackageCreateInput, PackageUncheckedCreateInput>
    /**
     * In case the Package was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
  }

  /**
   * Package delete
   */
  export type PackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter which Package to delete.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package deleteMany
   */
  export type PackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packages to delete
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to delete.
     */
    limit?: number
  }

  /**
   * Package.users
   */
  export type Package$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Package.webinars
   */
  export type Package$webinarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    where?: WebinarWhereInput
    orderBy?: WebinarOrderByWithRelationInput | WebinarOrderByWithRelationInput[]
    cursor?: WebinarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebinarScalarFieldEnum | WebinarScalarFieldEnum[]
  }

  /**
   * Package.userPackages
   */
  export type Package$userPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    where?: UserPackageWhereInput
    orderBy?: UserPackageOrderByWithRelationInput | UserPackageOrderByWithRelationInput[]
    cursor?: UserPackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPackageScalarFieldEnum | UserPackageScalarFieldEnum[]
  }

  /**
   * Package without action
   */
  export type PackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
  }


  /**
   * Model Webinar
   */

  export type AggregateWebinar = {
    _count: WebinarCountAggregateOutputType | null
    _min: WebinarMinAggregateOutputType | null
    _max: WebinarMaxAggregateOutputType | null
  }

  export type WebinarMinAggregateOutputType = {
    id: string | null
    title: string | null
    date: Date | null
    zoomLink: string | null
    thumbnail: string | null
    packageId: string | null
    description: string | null
  }

  export type WebinarMaxAggregateOutputType = {
    id: string | null
    title: string | null
    date: Date | null
    zoomLink: string | null
    thumbnail: string | null
    packageId: string | null
    description: string | null
  }

  export type WebinarCountAggregateOutputType = {
    id: number
    title: number
    date: number
    zoomLink: number
    thumbnail: number
    packageId: number
    description: number
    _all: number
  }


  export type WebinarMinAggregateInputType = {
    id?: true
    title?: true
    date?: true
    zoomLink?: true
    thumbnail?: true
    packageId?: true
    description?: true
  }

  export type WebinarMaxAggregateInputType = {
    id?: true
    title?: true
    date?: true
    zoomLink?: true
    thumbnail?: true
    packageId?: true
    description?: true
  }

  export type WebinarCountAggregateInputType = {
    id?: true
    title?: true
    date?: true
    zoomLink?: true
    thumbnail?: true
    packageId?: true
    description?: true
    _all?: true
  }

  export type WebinarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Webinar to aggregate.
     */
    where?: WebinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webinars to fetch.
     */
    orderBy?: WebinarOrderByWithRelationInput | WebinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webinars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Webinars
    **/
    _count?: true | WebinarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebinarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebinarMaxAggregateInputType
  }

  export type GetWebinarAggregateType<T extends WebinarAggregateArgs> = {
        [P in keyof T & keyof AggregateWebinar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebinar[P]>
      : GetScalarType<T[P], AggregateWebinar[P]>
  }




  export type WebinarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebinarWhereInput
    orderBy?: WebinarOrderByWithAggregationInput | WebinarOrderByWithAggregationInput[]
    by: WebinarScalarFieldEnum[] | WebinarScalarFieldEnum
    having?: WebinarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebinarCountAggregateInputType | true
    _min?: WebinarMinAggregateInputType
    _max?: WebinarMaxAggregateInputType
  }

  export type WebinarGroupByOutputType = {
    id: string
    title: string
    date: Date
    zoomLink: string
    thumbnail: string
    packageId: string
    description: string | null
    _count: WebinarCountAggregateOutputType | null
    _min: WebinarMinAggregateOutputType | null
    _max: WebinarMaxAggregateOutputType | null
  }

  type GetWebinarGroupByPayload<T extends WebinarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebinarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebinarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebinarGroupByOutputType[P]>
            : GetScalarType<T[P], WebinarGroupByOutputType[P]>
        }
      >
    >


  export type WebinarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    zoomLink?: boolean
    thumbnail?: boolean
    packageId?: boolean
    description?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
    attendees?: boolean | Webinar$attendeesArgs<ExtArgs>
    _count?: boolean | WebinarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webinar"]>

  export type WebinarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    zoomLink?: boolean
    thumbnail?: boolean
    packageId?: boolean
    description?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webinar"]>

  export type WebinarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    zoomLink?: boolean
    thumbnail?: boolean
    packageId?: boolean
    description?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webinar"]>

  export type WebinarSelectScalar = {
    id?: boolean
    title?: boolean
    date?: boolean
    zoomLink?: boolean
    thumbnail?: boolean
    packageId?: boolean
    description?: boolean
  }

  export type WebinarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "date" | "zoomLink" | "thumbnail" | "packageId" | "description", ExtArgs["result"]["webinar"]>
  export type WebinarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
    attendees?: boolean | Webinar$attendeesArgs<ExtArgs>
    _count?: boolean | WebinarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WebinarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }
  export type WebinarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }

  export type $WebinarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Webinar"
    objects: {
      package: Prisma.$PackagePayload<ExtArgs>
      attendees: Prisma.$WebinarAttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      date: Date
      zoomLink: string
      thumbnail: string
      packageId: string
      description: string | null
    }, ExtArgs["result"]["webinar"]>
    composites: {}
  }

  type WebinarGetPayload<S extends boolean | null | undefined | WebinarDefaultArgs> = $Result.GetResult<Prisma.$WebinarPayload, S>

  type WebinarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebinarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebinarCountAggregateInputType | true
    }

  export interface WebinarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Webinar'], meta: { name: 'Webinar' } }
    /**
     * Find zero or one Webinar that matches the filter.
     * @param {WebinarFindUniqueArgs} args - Arguments to find a Webinar
     * @example
     * // Get one Webinar
     * const webinar = await prisma.webinar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebinarFindUniqueArgs>(args: SelectSubset<T, WebinarFindUniqueArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Webinar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebinarFindUniqueOrThrowArgs} args - Arguments to find a Webinar
     * @example
     * // Get one Webinar
     * const webinar = await prisma.webinar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebinarFindUniqueOrThrowArgs>(args: SelectSubset<T, WebinarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Webinar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarFindFirstArgs} args - Arguments to find a Webinar
     * @example
     * // Get one Webinar
     * const webinar = await prisma.webinar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebinarFindFirstArgs>(args?: SelectSubset<T, WebinarFindFirstArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Webinar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarFindFirstOrThrowArgs} args - Arguments to find a Webinar
     * @example
     * // Get one Webinar
     * const webinar = await prisma.webinar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebinarFindFirstOrThrowArgs>(args?: SelectSubset<T, WebinarFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Webinars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Webinars
     * const webinars = await prisma.webinar.findMany()
     * 
     * // Get first 10 Webinars
     * const webinars = await prisma.webinar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webinarWithIdOnly = await prisma.webinar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebinarFindManyArgs>(args?: SelectSubset<T, WebinarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Webinar.
     * @param {WebinarCreateArgs} args - Arguments to create a Webinar.
     * @example
     * // Create one Webinar
     * const Webinar = await prisma.webinar.create({
     *   data: {
     *     // ... data to create a Webinar
     *   }
     * })
     * 
     */
    create<T extends WebinarCreateArgs>(args: SelectSubset<T, WebinarCreateArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Webinars.
     * @param {WebinarCreateManyArgs} args - Arguments to create many Webinars.
     * @example
     * // Create many Webinars
     * const webinar = await prisma.webinar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebinarCreateManyArgs>(args?: SelectSubset<T, WebinarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Webinars and returns the data saved in the database.
     * @param {WebinarCreateManyAndReturnArgs} args - Arguments to create many Webinars.
     * @example
     * // Create many Webinars
     * const webinar = await prisma.webinar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Webinars and only return the `id`
     * const webinarWithIdOnly = await prisma.webinar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebinarCreateManyAndReturnArgs>(args?: SelectSubset<T, WebinarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Webinar.
     * @param {WebinarDeleteArgs} args - Arguments to delete one Webinar.
     * @example
     * // Delete one Webinar
     * const Webinar = await prisma.webinar.delete({
     *   where: {
     *     // ... filter to delete one Webinar
     *   }
     * })
     * 
     */
    delete<T extends WebinarDeleteArgs>(args: SelectSubset<T, WebinarDeleteArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Webinar.
     * @param {WebinarUpdateArgs} args - Arguments to update one Webinar.
     * @example
     * // Update one Webinar
     * const webinar = await prisma.webinar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebinarUpdateArgs>(args: SelectSubset<T, WebinarUpdateArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Webinars.
     * @param {WebinarDeleteManyArgs} args - Arguments to filter Webinars to delete.
     * @example
     * // Delete a few Webinars
     * const { count } = await prisma.webinar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebinarDeleteManyArgs>(args?: SelectSubset<T, WebinarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webinars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Webinars
     * const webinar = await prisma.webinar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebinarUpdateManyArgs>(args: SelectSubset<T, WebinarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webinars and returns the data updated in the database.
     * @param {WebinarUpdateManyAndReturnArgs} args - Arguments to update many Webinars.
     * @example
     * // Update many Webinars
     * const webinar = await prisma.webinar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Webinars and only return the `id`
     * const webinarWithIdOnly = await prisma.webinar.updateManyAndReturn({
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
    updateManyAndReturn<T extends WebinarUpdateManyAndReturnArgs>(args: SelectSubset<T, WebinarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Webinar.
     * @param {WebinarUpsertArgs} args - Arguments to update or create a Webinar.
     * @example
     * // Update or create a Webinar
     * const webinar = await prisma.webinar.upsert({
     *   create: {
     *     // ... data to create a Webinar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Webinar we want to update
     *   }
     * })
     */
    upsert<T extends WebinarUpsertArgs>(args: SelectSubset<T, WebinarUpsertArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Webinars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarCountArgs} args - Arguments to filter Webinars to count.
     * @example
     * // Count the number of Webinars
     * const count = await prisma.webinar.count({
     *   where: {
     *     // ... the filter for the Webinars we want to count
     *   }
     * })
    **/
    count<T extends WebinarCountArgs>(
      args?: Subset<T, WebinarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebinarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Webinar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebinarAggregateArgs>(args: Subset<T, WebinarAggregateArgs>): Prisma.PrismaPromise<GetWebinarAggregateType<T>>

    /**
     * Group by Webinar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarGroupByArgs} args - Group by arguments.
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
      T extends WebinarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebinarGroupByArgs['orderBy'] }
        : { orderBy?: WebinarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebinarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebinarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Webinar model
   */
  readonly fields: WebinarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Webinar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebinarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    package<T extends PackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageDefaultArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendees<T extends Webinar$attendeesArgs<ExtArgs> = {}>(args?: Subset<T, Webinar$attendeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebinarAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Webinar model
   */
  interface WebinarFieldRefs {
    readonly id: FieldRef<"Webinar", 'String'>
    readonly title: FieldRef<"Webinar", 'String'>
    readonly date: FieldRef<"Webinar", 'DateTime'>
    readonly zoomLink: FieldRef<"Webinar", 'String'>
    readonly thumbnail: FieldRef<"Webinar", 'String'>
    readonly packageId: FieldRef<"Webinar", 'String'>
    readonly description: FieldRef<"Webinar", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Webinar findUnique
   */
  export type WebinarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * Filter, which Webinar to fetch.
     */
    where: WebinarWhereUniqueInput
  }

  /**
   * Webinar findUniqueOrThrow
   */
  export type WebinarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * Filter, which Webinar to fetch.
     */
    where: WebinarWhereUniqueInput
  }

  /**
   * Webinar findFirst
   */
  export type WebinarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * Filter, which Webinar to fetch.
     */
    where?: WebinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webinars to fetch.
     */
    orderBy?: WebinarOrderByWithRelationInput | WebinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Webinars.
     */
    cursor?: WebinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webinars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Webinars.
     */
    distinct?: WebinarScalarFieldEnum | WebinarScalarFieldEnum[]
  }

  /**
   * Webinar findFirstOrThrow
   */
  export type WebinarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * Filter, which Webinar to fetch.
     */
    where?: WebinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webinars to fetch.
     */
    orderBy?: WebinarOrderByWithRelationInput | WebinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Webinars.
     */
    cursor?: WebinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webinars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Webinars.
     */
    distinct?: WebinarScalarFieldEnum | WebinarScalarFieldEnum[]
  }

  /**
   * Webinar findMany
   */
  export type WebinarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * Filter, which Webinars to fetch.
     */
    where?: WebinarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webinars to fetch.
     */
    orderBy?: WebinarOrderByWithRelationInput | WebinarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Webinars.
     */
    cursor?: WebinarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webinars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webinars.
     */
    skip?: number
    distinct?: WebinarScalarFieldEnum | WebinarScalarFieldEnum[]
  }

  /**
   * Webinar create
   */
  export type WebinarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * The data needed to create a Webinar.
     */
    data: XOR<WebinarCreateInput, WebinarUncheckedCreateInput>
  }

  /**
   * Webinar createMany
   */
  export type WebinarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Webinars.
     */
    data: WebinarCreateManyInput | WebinarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Webinar createManyAndReturn
   */
  export type WebinarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * The data used to create many Webinars.
     */
    data: WebinarCreateManyInput | WebinarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Webinar update
   */
  export type WebinarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * The data needed to update a Webinar.
     */
    data: XOR<WebinarUpdateInput, WebinarUncheckedUpdateInput>
    /**
     * Choose, which Webinar to update.
     */
    where: WebinarWhereUniqueInput
  }

  /**
   * Webinar updateMany
   */
  export type WebinarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Webinars.
     */
    data: XOR<WebinarUpdateManyMutationInput, WebinarUncheckedUpdateManyInput>
    /**
     * Filter which Webinars to update
     */
    where?: WebinarWhereInput
    /**
     * Limit how many Webinars to update.
     */
    limit?: number
  }

  /**
   * Webinar updateManyAndReturn
   */
  export type WebinarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * The data used to update Webinars.
     */
    data: XOR<WebinarUpdateManyMutationInput, WebinarUncheckedUpdateManyInput>
    /**
     * Filter which Webinars to update
     */
    where?: WebinarWhereInput
    /**
     * Limit how many Webinars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Webinar upsert
   */
  export type WebinarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * The filter to search for the Webinar to update in case it exists.
     */
    where: WebinarWhereUniqueInput
    /**
     * In case the Webinar found by the `where` argument doesn't exist, create a new Webinar with this data.
     */
    create: XOR<WebinarCreateInput, WebinarUncheckedCreateInput>
    /**
     * In case the Webinar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebinarUpdateInput, WebinarUncheckedUpdateInput>
  }

  /**
   * Webinar delete
   */
  export type WebinarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
    /**
     * Filter which Webinar to delete.
     */
    where: WebinarWhereUniqueInput
  }

  /**
   * Webinar deleteMany
   */
  export type WebinarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Webinars to delete
     */
    where?: WebinarWhereInput
    /**
     * Limit how many Webinars to delete.
     */
    limit?: number
  }

  /**
   * Webinar.attendees
   */
  export type Webinar$attendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebinarAttendance
     */
    select?: WebinarAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebinarAttendance
     */
    omit?: WebinarAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarAttendanceInclude<ExtArgs> | null
    where?: WebinarAttendanceWhereInput
    orderBy?: WebinarAttendanceOrderByWithRelationInput | WebinarAttendanceOrderByWithRelationInput[]
    cursor?: WebinarAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebinarAttendanceScalarFieldEnum | WebinarAttendanceScalarFieldEnum[]
  }

  /**
   * Webinar without action
   */
  export type WebinarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webinar
     */
    select?: WebinarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webinar
     */
    omit?: WebinarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarInclude<ExtArgs> | null
  }


  /**
   * Model UserPackage
   */

  export type AggregateUserPackage = {
    _count: UserPackageCountAggregateOutputType | null
    _min: UserPackageMinAggregateOutputType | null
    _max: UserPackageMaxAggregateOutputType | null
  }

  export type UserPackageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    packageId: string | null
    purchasedAt: Date | null
    validUntil: Date | null
    isActive: boolean | null
  }

  export type UserPackageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    packageId: string | null
    purchasedAt: Date | null
    validUntil: Date | null
    isActive: boolean | null
  }

  export type UserPackageCountAggregateOutputType = {
    id: number
    userId: number
    packageId: number
    purchasedAt: number
    validUntil: number
    isActive: number
    _all: number
  }


  export type UserPackageMinAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    purchasedAt?: true
    validUntil?: true
    isActive?: true
  }

  export type UserPackageMaxAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    purchasedAt?: true
    validUntil?: true
    isActive?: true
  }

  export type UserPackageCountAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    purchasedAt?: true
    validUntil?: true
    isActive?: true
    _all?: true
  }

  export type UserPackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPackage to aggregate.
     */
    where?: UserPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPackages to fetch.
     */
    orderBy?: UserPackageOrderByWithRelationInput | UserPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPackages
    **/
    _count?: true | UserPackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPackageMaxAggregateInputType
  }

  export type GetUserPackageAggregateType<T extends UserPackageAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPackage[P]>
      : GetScalarType<T[P], AggregateUserPackage[P]>
  }




  export type UserPackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPackageWhereInput
    orderBy?: UserPackageOrderByWithAggregationInput | UserPackageOrderByWithAggregationInput[]
    by: UserPackageScalarFieldEnum[] | UserPackageScalarFieldEnum
    having?: UserPackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPackageCountAggregateInputType | true
    _min?: UserPackageMinAggregateInputType
    _max?: UserPackageMaxAggregateInputType
  }

  export type UserPackageGroupByOutputType = {
    id: string
    userId: string
    packageId: string
    purchasedAt: Date
    validUntil: Date
    isActive: boolean
    _count: UserPackageCountAggregateOutputType | null
    _min: UserPackageMinAggregateOutputType | null
    _max: UserPackageMaxAggregateOutputType | null
  }

  type GetUserPackageGroupByPayload<T extends UserPackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPackageGroupByOutputType[P]>
            : GetScalarType<T[P], UserPackageGroupByOutputType[P]>
        }
      >
    >


  export type UserPackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    packageId?: boolean
    purchasedAt?: boolean
    validUntil?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPackage"]>

  export type UserPackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    packageId?: boolean
    purchasedAt?: boolean
    validUntil?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPackage"]>

  export type UserPackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    packageId?: boolean
    purchasedAt?: boolean
    validUntil?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPackage"]>

  export type UserPackageSelectScalar = {
    id?: boolean
    userId?: boolean
    packageId?: boolean
    purchasedAt?: boolean
    validUntil?: boolean
    isActive?: boolean
  }

  export type UserPackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "packageId" | "purchasedAt" | "validUntil" | "isActive", ExtArgs["result"]["userPackage"]>
  export type UserPackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }
  export type UserPackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }
  export type UserPackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    package?: boolean | PackageDefaultArgs<ExtArgs>
  }

  export type $UserPackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPackage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      package: Prisma.$PackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      packageId: string
      purchasedAt: Date
      validUntil: Date
      isActive: boolean
    }, ExtArgs["result"]["userPackage"]>
    composites: {}
  }

  type UserPackageGetPayload<S extends boolean | null | undefined | UserPackageDefaultArgs> = $Result.GetResult<Prisma.$UserPackagePayload, S>

  type UserPackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPackageCountAggregateInputType | true
    }

  export interface UserPackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPackage'], meta: { name: 'UserPackage' } }
    /**
     * Find zero or one UserPackage that matches the filter.
     * @param {UserPackageFindUniqueArgs} args - Arguments to find a UserPackage
     * @example
     * // Get one UserPackage
     * const userPackage = await prisma.userPackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPackageFindUniqueArgs>(args: SelectSubset<T, UserPackageFindUniqueArgs<ExtArgs>>): Prisma__UserPackageClient<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPackageFindUniqueOrThrowArgs} args - Arguments to find a UserPackage
     * @example
     * // Get one UserPackage
     * const userPackage = await prisma.userPackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPackageFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPackageClient<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPackageFindFirstArgs} args - Arguments to find a UserPackage
     * @example
     * // Get one UserPackage
     * const userPackage = await prisma.userPackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPackageFindFirstArgs>(args?: SelectSubset<T, UserPackageFindFirstArgs<ExtArgs>>): Prisma__UserPackageClient<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPackageFindFirstOrThrowArgs} args - Arguments to find a UserPackage
     * @example
     * // Get one UserPackage
     * const userPackage = await prisma.userPackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPackageFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPackageClient<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPackages
     * const userPackages = await prisma.userPackage.findMany()
     * 
     * // Get first 10 UserPackages
     * const userPackages = await prisma.userPackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPackageWithIdOnly = await prisma.userPackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPackageFindManyArgs>(args?: SelectSubset<T, UserPackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPackage.
     * @param {UserPackageCreateArgs} args - Arguments to create a UserPackage.
     * @example
     * // Create one UserPackage
     * const UserPackage = await prisma.userPackage.create({
     *   data: {
     *     // ... data to create a UserPackage
     *   }
     * })
     * 
     */
    create<T extends UserPackageCreateArgs>(args: SelectSubset<T, UserPackageCreateArgs<ExtArgs>>): Prisma__UserPackageClient<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPackages.
     * @param {UserPackageCreateManyArgs} args - Arguments to create many UserPackages.
     * @example
     * // Create many UserPackages
     * const userPackage = await prisma.userPackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPackageCreateManyArgs>(args?: SelectSubset<T, UserPackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPackages and returns the data saved in the database.
     * @param {UserPackageCreateManyAndReturnArgs} args - Arguments to create many UserPackages.
     * @example
     * // Create many UserPackages
     * const userPackage = await prisma.userPackage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPackages and only return the `id`
     * const userPackageWithIdOnly = await prisma.userPackage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPackageCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPackage.
     * @param {UserPackageDeleteArgs} args - Arguments to delete one UserPackage.
     * @example
     * // Delete one UserPackage
     * const UserPackage = await prisma.userPackage.delete({
     *   where: {
     *     // ... filter to delete one UserPackage
     *   }
     * })
     * 
     */
    delete<T extends UserPackageDeleteArgs>(args: SelectSubset<T, UserPackageDeleteArgs<ExtArgs>>): Prisma__UserPackageClient<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPackage.
     * @param {UserPackageUpdateArgs} args - Arguments to update one UserPackage.
     * @example
     * // Update one UserPackage
     * const userPackage = await prisma.userPackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPackageUpdateArgs>(args: SelectSubset<T, UserPackageUpdateArgs<ExtArgs>>): Prisma__UserPackageClient<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPackages.
     * @param {UserPackageDeleteManyArgs} args - Arguments to filter UserPackages to delete.
     * @example
     * // Delete a few UserPackages
     * const { count } = await prisma.userPackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPackageDeleteManyArgs>(args?: SelectSubset<T, UserPackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPackages
     * const userPackage = await prisma.userPackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPackageUpdateManyArgs>(args: SelectSubset<T, UserPackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPackages and returns the data updated in the database.
     * @param {UserPackageUpdateManyAndReturnArgs} args - Arguments to update many UserPackages.
     * @example
     * // Update many UserPackages
     * const userPackage = await prisma.userPackage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPackages and only return the `id`
     * const userPackageWithIdOnly = await prisma.userPackage.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserPackageUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPackage.
     * @param {UserPackageUpsertArgs} args - Arguments to update or create a UserPackage.
     * @example
     * // Update or create a UserPackage
     * const userPackage = await prisma.userPackage.upsert({
     *   create: {
     *     // ... data to create a UserPackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPackage we want to update
     *   }
     * })
     */
    upsert<T extends UserPackageUpsertArgs>(args: SelectSubset<T, UserPackageUpsertArgs<ExtArgs>>): Prisma__UserPackageClient<$Result.GetResult<Prisma.$UserPackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPackageCountArgs} args - Arguments to filter UserPackages to count.
     * @example
     * // Count the number of UserPackages
     * const count = await prisma.userPackage.count({
     *   where: {
     *     // ... the filter for the UserPackages we want to count
     *   }
     * })
    **/
    count<T extends UserPackageCountArgs>(
      args?: Subset<T, UserPackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPackageAggregateArgs>(args: Subset<T, UserPackageAggregateArgs>): Prisma.PrismaPromise<GetUserPackageAggregateType<T>>

    /**
     * Group by UserPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPackageGroupByArgs} args - Group by arguments.
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
      T extends UserPackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPackageGroupByArgs['orderBy'] }
        : { orderBy?: UserPackageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPackage model
   */
  readonly fields: UserPackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    package<T extends PackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageDefaultArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserPackage model
   */
  interface UserPackageFieldRefs {
    readonly id: FieldRef<"UserPackage", 'String'>
    readonly userId: FieldRef<"UserPackage", 'String'>
    readonly packageId: FieldRef<"UserPackage", 'String'>
    readonly purchasedAt: FieldRef<"UserPackage", 'DateTime'>
    readonly validUntil: FieldRef<"UserPackage", 'DateTime'>
    readonly isActive: FieldRef<"UserPackage", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserPackage findUnique
   */
  export type UserPackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    /**
     * Filter, which UserPackage to fetch.
     */
    where: UserPackageWhereUniqueInput
  }

  /**
   * UserPackage findUniqueOrThrow
   */
  export type UserPackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    /**
     * Filter, which UserPackage to fetch.
     */
    where: UserPackageWhereUniqueInput
  }

  /**
   * UserPackage findFirst
   */
  export type UserPackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    /**
     * Filter, which UserPackage to fetch.
     */
    where?: UserPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPackages to fetch.
     */
    orderBy?: UserPackageOrderByWithRelationInput | UserPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPackages.
     */
    cursor?: UserPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPackages.
     */
    distinct?: UserPackageScalarFieldEnum | UserPackageScalarFieldEnum[]
  }

  /**
   * UserPackage findFirstOrThrow
   */
  export type UserPackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    /**
     * Filter, which UserPackage to fetch.
     */
    where?: UserPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPackages to fetch.
     */
    orderBy?: UserPackageOrderByWithRelationInput | UserPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPackages.
     */
    cursor?: UserPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPackages.
     */
    distinct?: UserPackageScalarFieldEnum | UserPackageScalarFieldEnum[]
  }

  /**
   * UserPackage findMany
   */
  export type UserPackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    /**
     * Filter, which UserPackages to fetch.
     */
    where?: UserPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPackages to fetch.
     */
    orderBy?: UserPackageOrderByWithRelationInput | UserPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPackages.
     */
    cursor?: UserPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPackages.
     */
    skip?: number
    distinct?: UserPackageScalarFieldEnum | UserPackageScalarFieldEnum[]
  }

  /**
   * UserPackage create
   */
  export type UserPackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPackage.
     */
    data: XOR<UserPackageCreateInput, UserPackageUncheckedCreateInput>
  }

  /**
   * UserPackage createMany
   */
  export type UserPackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPackages.
     */
    data: UserPackageCreateManyInput | UserPackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPackage createManyAndReturn
   */
  export type UserPackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * The data used to create many UserPackages.
     */
    data: UserPackageCreateManyInput | UserPackageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPackage update
   */
  export type UserPackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPackage.
     */
    data: XOR<UserPackageUpdateInput, UserPackageUncheckedUpdateInput>
    /**
     * Choose, which UserPackage to update.
     */
    where: UserPackageWhereUniqueInput
  }

  /**
   * UserPackage updateMany
   */
  export type UserPackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPackages.
     */
    data: XOR<UserPackageUpdateManyMutationInput, UserPackageUncheckedUpdateManyInput>
    /**
     * Filter which UserPackages to update
     */
    where?: UserPackageWhereInput
    /**
     * Limit how many UserPackages to update.
     */
    limit?: number
  }

  /**
   * UserPackage updateManyAndReturn
   */
  export type UserPackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * The data used to update UserPackages.
     */
    data: XOR<UserPackageUpdateManyMutationInput, UserPackageUncheckedUpdateManyInput>
    /**
     * Filter which UserPackages to update
     */
    where?: UserPackageWhereInput
    /**
     * Limit how many UserPackages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPackage upsert
   */
  export type UserPackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPackage to update in case it exists.
     */
    where: UserPackageWhereUniqueInput
    /**
     * In case the UserPackage found by the `where` argument doesn't exist, create a new UserPackage with this data.
     */
    create: XOR<UserPackageCreateInput, UserPackageUncheckedCreateInput>
    /**
     * In case the UserPackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPackageUpdateInput, UserPackageUncheckedUpdateInput>
  }

  /**
   * UserPackage delete
   */
  export type UserPackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
    /**
     * Filter which UserPackage to delete.
     */
    where: UserPackageWhereUniqueInput
  }

  /**
   * UserPackage deleteMany
   */
  export type UserPackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPackages to delete
     */
    where?: UserPackageWhereInput
    /**
     * Limit how many UserPackages to delete.
     */
    limit?: number
  }

  /**
   * UserPackage without action
   */
  export type UserPackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPackage
     */
    select?: UserPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPackage
     */
    omit?: UserPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPackageInclude<ExtArgs> | null
  }


  /**
   * Model WebinarAttendance
   */

  export type AggregateWebinarAttendance = {
    _count: WebinarAttendanceCountAggregateOutputType | null
    _min: WebinarAttendanceMinAggregateOutputType | null
    _max: WebinarAttendanceMaxAggregateOutputType | null
  }

  export type WebinarAttendanceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    webinarId: string | null
    attendedAt: Date | null
  }

  export type WebinarAttendanceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    webinarId: string | null
    attendedAt: Date | null
  }

  export type WebinarAttendanceCountAggregateOutputType = {
    id: number
    userId: number
    webinarId: number
    attendedAt: number
    _all: number
  }


  export type WebinarAttendanceMinAggregateInputType = {
    id?: true
    userId?: true
    webinarId?: true
    attendedAt?: true
  }

  export type WebinarAttendanceMaxAggregateInputType = {
    id?: true
    userId?: true
    webinarId?: true
    attendedAt?: true
  }

  export type WebinarAttendanceCountAggregateInputType = {
    id?: true
    userId?: true
    webinarId?: true
    attendedAt?: true
    _all?: true
  }

  export type WebinarAttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebinarAttendance to aggregate.
     */
    where?: WebinarAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebinarAttendances to fetch.
     */
    orderBy?: WebinarAttendanceOrderByWithRelationInput | WebinarAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebinarAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebinarAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebinarAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebinarAttendances
    **/
    _count?: true | WebinarAttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebinarAttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebinarAttendanceMaxAggregateInputType
  }

  export type GetWebinarAttendanceAggregateType<T extends WebinarAttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateWebinarAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebinarAttendance[P]>
      : GetScalarType<T[P], AggregateWebinarAttendance[P]>
  }




  export type WebinarAttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebinarAttendanceWhereInput
    orderBy?: WebinarAttendanceOrderByWithAggregationInput | WebinarAttendanceOrderByWithAggregationInput[]
    by: WebinarAttendanceScalarFieldEnum[] | WebinarAttendanceScalarFieldEnum
    having?: WebinarAttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebinarAttendanceCountAggregateInputType | true
    _min?: WebinarAttendanceMinAggregateInputType
    _max?: WebinarAttendanceMaxAggregateInputType
  }

  export type WebinarAttendanceGroupByOutputType = {
    id: string
    userId: string
    webinarId: string
    attendedAt: Date
    _count: WebinarAttendanceCountAggregateOutputType | null
    _min: WebinarAttendanceMinAggregateOutputType | null
    _max: WebinarAttendanceMaxAggregateOutputType | null
  }

  type GetWebinarAttendanceGroupByPayload<T extends WebinarAttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebinarAttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebinarAttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebinarAttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], WebinarAttendanceGroupByOutputType[P]>
        }
      >
    >


  export type WebinarAttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    webinarId?: boolean
    attendedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    webinar?: boolean | WebinarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webinarAttendance"]>

  export type WebinarAttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    webinarId?: boolean
    attendedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    webinar?: boolean | WebinarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webinarAttendance"]>

  export type WebinarAttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    webinarId?: boolean
    attendedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    webinar?: boolean | WebinarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webinarAttendance"]>

  export type WebinarAttendanceSelectScalar = {
    id?: boolean
    userId?: boolean
    webinarId?: boolean
    attendedAt?: boolean
  }

  export type WebinarAttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "webinarId" | "attendedAt", ExtArgs["result"]["webinarAttendance"]>
  export type WebinarAttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    webinar?: boolean | WebinarDefaultArgs<ExtArgs>
  }
  export type WebinarAttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    webinar?: boolean | WebinarDefaultArgs<ExtArgs>
  }
  export type WebinarAttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    webinar?: boolean | WebinarDefaultArgs<ExtArgs>
  }

  export type $WebinarAttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebinarAttendance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      webinar: Prisma.$WebinarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      webinarId: string
      attendedAt: Date
    }, ExtArgs["result"]["webinarAttendance"]>
    composites: {}
  }

  type WebinarAttendanceGetPayload<S extends boolean | null | undefined | WebinarAttendanceDefaultArgs> = $Result.GetResult<Prisma.$WebinarAttendancePayload, S>

  type WebinarAttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebinarAttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebinarAttendanceCountAggregateInputType | true
    }

  export interface WebinarAttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebinarAttendance'], meta: { name: 'WebinarAttendance' } }
    /**
     * Find zero or one WebinarAttendance that matches the filter.
     * @param {WebinarAttendanceFindUniqueArgs} args - Arguments to find a WebinarAttendance
     * @example
     * // Get one WebinarAttendance
     * const webinarAttendance = await prisma.webinarAttendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebinarAttendanceFindUniqueArgs>(args: SelectSubset<T, WebinarAttendanceFindUniqueArgs<ExtArgs>>): Prisma__WebinarAttendanceClient<$Result.GetResult<Prisma.$WebinarAttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebinarAttendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebinarAttendanceFindUniqueOrThrowArgs} args - Arguments to find a WebinarAttendance
     * @example
     * // Get one WebinarAttendance
     * const webinarAttendance = await prisma.webinarAttendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebinarAttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, WebinarAttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebinarAttendanceClient<$Result.GetResult<Prisma.$WebinarAttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebinarAttendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarAttendanceFindFirstArgs} args - Arguments to find a WebinarAttendance
     * @example
     * // Get one WebinarAttendance
     * const webinarAttendance = await prisma.webinarAttendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebinarAttendanceFindFirstArgs>(args?: SelectSubset<T, WebinarAttendanceFindFirstArgs<ExtArgs>>): Prisma__WebinarAttendanceClient<$Result.GetResult<Prisma.$WebinarAttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebinarAttendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarAttendanceFindFirstOrThrowArgs} args - Arguments to find a WebinarAttendance
     * @example
     * // Get one WebinarAttendance
     * const webinarAttendance = await prisma.webinarAttendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebinarAttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, WebinarAttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebinarAttendanceClient<$Result.GetResult<Prisma.$WebinarAttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebinarAttendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarAttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebinarAttendances
     * const webinarAttendances = await prisma.webinarAttendance.findMany()
     * 
     * // Get first 10 WebinarAttendances
     * const webinarAttendances = await prisma.webinarAttendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webinarAttendanceWithIdOnly = await prisma.webinarAttendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebinarAttendanceFindManyArgs>(args?: SelectSubset<T, WebinarAttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebinarAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebinarAttendance.
     * @param {WebinarAttendanceCreateArgs} args - Arguments to create a WebinarAttendance.
     * @example
     * // Create one WebinarAttendance
     * const WebinarAttendance = await prisma.webinarAttendance.create({
     *   data: {
     *     // ... data to create a WebinarAttendance
     *   }
     * })
     * 
     */
    create<T extends WebinarAttendanceCreateArgs>(args: SelectSubset<T, WebinarAttendanceCreateArgs<ExtArgs>>): Prisma__WebinarAttendanceClient<$Result.GetResult<Prisma.$WebinarAttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebinarAttendances.
     * @param {WebinarAttendanceCreateManyArgs} args - Arguments to create many WebinarAttendances.
     * @example
     * // Create many WebinarAttendances
     * const webinarAttendance = await prisma.webinarAttendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebinarAttendanceCreateManyArgs>(args?: SelectSubset<T, WebinarAttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebinarAttendances and returns the data saved in the database.
     * @param {WebinarAttendanceCreateManyAndReturnArgs} args - Arguments to create many WebinarAttendances.
     * @example
     * // Create many WebinarAttendances
     * const webinarAttendance = await prisma.webinarAttendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebinarAttendances and only return the `id`
     * const webinarAttendanceWithIdOnly = await prisma.webinarAttendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebinarAttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, WebinarAttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebinarAttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebinarAttendance.
     * @param {WebinarAttendanceDeleteArgs} args - Arguments to delete one WebinarAttendance.
     * @example
     * // Delete one WebinarAttendance
     * const WebinarAttendance = await prisma.webinarAttendance.delete({
     *   where: {
     *     // ... filter to delete one WebinarAttendance
     *   }
     * })
     * 
     */
    delete<T extends WebinarAttendanceDeleteArgs>(args: SelectSubset<T, WebinarAttendanceDeleteArgs<ExtArgs>>): Prisma__WebinarAttendanceClient<$Result.GetResult<Prisma.$WebinarAttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebinarAttendance.
     * @param {WebinarAttendanceUpdateArgs} args - Arguments to update one WebinarAttendance.
     * @example
     * // Update one WebinarAttendance
     * const webinarAttendance = await prisma.webinarAttendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebinarAttendanceUpdateArgs>(args: SelectSubset<T, WebinarAttendanceUpdateArgs<ExtArgs>>): Prisma__WebinarAttendanceClient<$Result.GetResult<Prisma.$WebinarAttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebinarAttendances.
     * @param {WebinarAttendanceDeleteManyArgs} args - Arguments to filter WebinarAttendances to delete.
     * @example
     * // Delete a few WebinarAttendances
     * const { count } = await prisma.webinarAttendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebinarAttendanceDeleteManyArgs>(args?: SelectSubset<T, WebinarAttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebinarAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarAttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebinarAttendances
     * const webinarAttendance = await prisma.webinarAttendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebinarAttendanceUpdateManyArgs>(args: SelectSubset<T, WebinarAttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebinarAttendances and returns the data updated in the database.
     * @param {WebinarAttendanceUpdateManyAndReturnArgs} args - Arguments to update many WebinarAttendances.
     * @example
     * // Update many WebinarAttendances
     * const webinarAttendance = await prisma.webinarAttendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebinarAttendances and only return the `id`
     * const webinarAttendanceWithIdOnly = await prisma.webinarAttendance.updateManyAndReturn({
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
    updateManyAndReturn<T extends WebinarAttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, WebinarAttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebinarAttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebinarAttendance.
     * @param {WebinarAttendanceUpsertArgs} args - Arguments to update or create a WebinarAttendance.
     * @example
     * // Update or create a WebinarAttendance
     * const webinarAttendance = await prisma.webinarAttendance.upsert({
     *   create: {
     *     // ... data to create a WebinarAttendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebinarAttendance we want to update
     *   }
     * })
     */
    upsert<T extends WebinarAttendanceUpsertArgs>(args: SelectSubset<T, WebinarAttendanceUpsertArgs<ExtArgs>>): Prisma__WebinarAttendanceClient<$Result.GetResult<Prisma.$WebinarAttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebinarAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarAttendanceCountArgs} args - Arguments to filter WebinarAttendances to count.
     * @example
     * // Count the number of WebinarAttendances
     * const count = await prisma.webinarAttendance.count({
     *   where: {
     *     // ... the filter for the WebinarAttendances we want to count
     *   }
     * })
    **/
    count<T extends WebinarAttendanceCountArgs>(
      args?: Subset<T, WebinarAttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebinarAttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebinarAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarAttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebinarAttendanceAggregateArgs>(args: Subset<T, WebinarAttendanceAggregateArgs>): Prisma.PrismaPromise<GetWebinarAttendanceAggregateType<T>>

    /**
     * Group by WebinarAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarAttendanceGroupByArgs} args - Group by arguments.
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
      T extends WebinarAttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebinarAttendanceGroupByArgs['orderBy'] }
        : { orderBy?: WebinarAttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebinarAttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebinarAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebinarAttendance model
   */
  readonly fields: WebinarAttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebinarAttendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebinarAttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    webinar<T extends WebinarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WebinarDefaultArgs<ExtArgs>>): Prisma__WebinarClient<$Result.GetResult<Prisma.$WebinarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WebinarAttendance model
   */
  interface WebinarAttendanceFieldRefs {
    readonly id: FieldRef<"WebinarAttendance", 'String'>
    readonly userId: FieldRef<"WebinarAttendance", 'String'>
    readonly webinarId: FieldRef<"WebinarAttendance", 'String'>
    readonly attendedAt: FieldRef<"WebinarAttendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebinarAttendance findUnique
   */
  export type WebinarAttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebinarAttendance
     */
    select?: WebinarAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebinarAttendance
     */
    omit?: WebinarAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which WebinarAttendance to fetch.
     */
    where: WebinarAttendanceWhereUniqueInput
  }

  /**
   * WebinarAttendance findUniqueOrThrow
   */
  export type WebinarAttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebinarAttendance
     */
    select?: WebinarAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebinarAttendance
     */
    omit?: WebinarAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which WebinarAttendance to fetch.
     */
    where: WebinarAttendanceWhereUniqueInput
  }

  /**
   * WebinarAttendance findFirst
   */
  export type WebinarAttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebinarAttendance
     */
    select?: WebinarAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebinarAttendance
     */
    omit?: WebinarAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which WebinarAttendance to fetch.
     */
    where?: WebinarAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebinarAttendances to fetch.
     */
    orderBy?: WebinarAttendanceOrderByWithRelationInput | WebinarAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebinarAttendances.
     */
    cursor?: WebinarAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebinarAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebinarAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebinarAttendances.
     */
    distinct?: WebinarAttendanceScalarFieldEnum | WebinarAttendanceScalarFieldEnum[]
  }

  /**
   * WebinarAttendance findFirstOrThrow
   */
  export type WebinarAttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebinarAttendance
     */
    select?: WebinarAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebinarAttendance
     */
    omit?: WebinarAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which WebinarAttendance to fetch.
     */
    where?: WebinarAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebinarAttendances to fetch.
     */
    orderBy?: WebinarAttendanceOrderByWithRelationInput | WebinarAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebinarAttendances.
     */
    cursor?: WebinarAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebinarAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebinarAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebinarAttendances.
     */
    distinct?: WebinarAttendanceScalarFieldEnum | WebinarAttendanceScalarFieldEnum[]
  }

  /**
   * WebinarAttendance findMany
   */
  export type WebinarAttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebinarAttendance
     */
    select?: WebinarAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebinarAttendance
     */
    omit?: WebinarAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which WebinarAttendances to fetch.
     */
    where?: WebinarAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebinarAttendances to fetch.
     */
    orderBy?: WebinarAttendanceOrderByWithRelationInput | WebinarAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebinarAttendances.
     */
    cursor?: WebinarAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebinarAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebinarAttendances.
     */
    skip?: number
    distinct?: WebinarAttendanceScalarFieldEnum | WebinarAttendanceScalarFieldEnum[]
  }

  /**
   * WebinarAttendance create
   */
  export type WebinarAttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebinarAttendance
     */
    select?: WebinarAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebinarAttendance
     */
    omit?: WebinarAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a WebinarAttendance.
     */
    data: XOR<WebinarAttendanceCreateInput, WebinarAttendanceUncheckedCreateInput>
  }

  /**
   * WebinarAttendance createMany
   */
  export type WebinarAttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebinarAttendances.
     */
    data: WebinarAttendanceCreateManyInput | WebinarAttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebinarAttendance createManyAndReturn
   */
  export type WebinarAttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebinarAttendance
     */
    select?: WebinarAttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebinarAttendance
     */
    omit?: WebinarAttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many WebinarAttendances.
     */
    data: WebinarAttendanceCreateManyInput | WebinarAttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarAttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebinarAttendance update
   */
  export type WebinarAttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebinarAttendance
     */
    select?: WebinarAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebinarAttendance
     */
    omit?: WebinarAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a WebinarAttendance.
     */
    data: XOR<WebinarAttendanceUpdateInput, WebinarAttendanceUncheckedUpdateInput>
    /**
     * Choose, which WebinarAttendance to update.
     */
    where: WebinarAttendanceWhereUniqueInput
  }

  /**
   * WebinarAttendance updateMany
   */
  export type WebinarAttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebinarAttendances.
     */
    data: XOR<WebinarAttendanceUpdateManyMutationInput, WebinarAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which WebinarAttendances to update
     */
    where?: WebinarAttendanceWhereInput
    /**
     * Limit how many WebinarAttendances to update.
     */
    limit?: number
  }

  /**
   * WebinarAttendance updateManyAndReturn
   */
  export type WebinarAttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebinarAttendance
     */
    select?: WebinarAttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebinarAttendance
     */
    omit?: WebinarAttendanceOmit<ExtArgs> | null
    /**
     * The data used to update WebinarAttendances.
     */
    data: XOR<WebinarAttendanceUpdateManyMutationInput, WebinarAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which WebinarAttendances to update
     */
    where?: WebinarAttendanceWhereInput
    /**
     * Limit how many WebinarAttendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarAttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebinarAttendance upsert
   */
  export type WebinarAttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebinarAttendance
     */
    select?: WebinarAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebinarAttendance
     */
    omit?: WebinarAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarAttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the WebinarAttendance to update in case it exists.
     */
    where: WebinarAttendanceWhereUniqueInput
    /**
     * In case the WebinarAttendance found by the `where` argument doesn't exist, create a new WebinarAttendance with this data.
     */
    create: XOR<WebinarAttendanceCreateInput, WebinarAttendanceUncheckedCreateInput>
    /**
     * In case the WebinarAttendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebinarAttendanceUpdateInput, WebinarAttendanceUncheckedUpdateInput>
  }

  /**
   * WebinarAttendance delete
   */
  export type WebinarAttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebinarAttendance
     */
    select?: WebinarAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebinarAttendance
     */
    omit?: WebinarAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarAttendanceInclude<ExtArgs> | null
    /**
     * Filter which WebinarAttendance to delete.
     */
    where: WebinarAttendanceWhereUniqueInput
  }

  /**
   * WebinarAttendance deleteMany
   */
  export type WebinarAttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebinarAttendances to delete
     */
    where?: WebinarAttendanceWhereInput
    /**
     * Limit how many WebinarAttendances to delete.
     */
    limit?: number
  }

  /**
   * WebinarAttendance without action
   */
  export type WebinarAttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebinarAttendance
     */
    select?: WebinarAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebinarAttendance
     */
    omit?: WebinarAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebinarAttendanceInclude<ExtArgs> | null
  }


  /**
   * Model Referral
   */

  export type AggregateReferral = {
    _count: ReferralCountAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  export type ReferralMinAggregateOutputType = {
    id: string | null
    executiveRefode: string | null
    userId: string | null
    referredAt: Date | null
  }

  export type ReferralMaxAggregateOutputType = {
    id: string | null
    executiveRefode: string | null
    userId: string | null
    referredAt: Date | null
  }

  export type ReferralCountAggregateOutputType = {
    id: number
    executiveRefode: number
    userId: number
    referredAt: number
    _all: number
  }


  export type ReferralMinAggregateInputType = {
    id?: true
    executiveRefode?: true
    userId?: true
    referredAt?: true
  }

  export type ReferralMaxAggregateInputType = {
    id?: true
    executiveRefode?: true
    userId?: true
    referredAt?: true
  }

  export type ReferralCountAggregateInputType = {
    id?: true
    executiveRefode?: true
    userId?: true
    referredAt?: true
    _all?: true
  }

  export type ReferralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referral to aggregate.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Referrals
    **/
    _count?: true | ReferralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralMaxAggregateInputType
  }

  export type GetReferralAggregateType<T extends ReferralAggregateArgs> = {
        [P in keyof T & keyof AggregateReferral]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferral[P]>
      : GetScalarType<T[P], AggregateReferral[P]>
  }




  export type ReferralGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithAggregationInput | ReferralOrderByWithAggregationInput[]
    by: ReferralScalarFieldEnum[] | ReferralScalarFieldEnum
    having?: ReferralScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralCountAggregateInputType | true
    _min?: ReferralMinAggregateInputType
    _max?: ReferralMaxAggregateInputType
  }

  export type ReferralGroupByOutputType = {
    id: string
    executiveRefode: string
    userId: string
    referredAt: Date
    _count: ReferralCountAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  type GetReferralGroupByPayload<T extends ReferralGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralGroupByOutputType[P]>
        }
      >
    >


  export type ReferralSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    executiveRefode?: boolean
    userId?: boolean
    referredAt?: boolean
    executive?: boolean | ExecutiveDefaultArgs<ExtArgs>
    referredUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    executiveRefode?: boolean
    userId?: boolean
    referredAt?: boolean
    executive?: boolean | ExecutiveDefaultArgs<ExtArgs>
    referredUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    executiveRefode?: boolean
    userId?: boolean
    referredAt?: boolean
    executive?: boolean | ExecutiveDefaultArgs<ExtArgs>
    referredUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectScalar = {
    id?: boolean
    executiveRefode?: boolean
    userId?: boolean
    referredAt?: boolean
  }

  export type ReferralOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "executiveRefode" | "userId" | "referredAt", ExtArgs["result"]["referral"]>
  export type ReferralInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executive?: boolean | ExecutiveDefaultArgs<ExtArgs>
    referredUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executive?: boolean | ExecutiveDefaultArgs<ExtArgs>
    referredUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executive?: boolean | ExecutiveDefaultArgs<ExtArgs>
    referredUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReferralPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Referral"
    objects: {
      executive: Prisma.$ExecutivePayload<ExtArgs>
      referredUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      executiveRefode: string
      userId: string
      referredAt: Date
    }, ExtArgs["result"]["referral"]>
    composites: {}
  }

  type ReferralGetPayload<S extends boolean | null | undefined | ReferralDefaultArgs> = $Result.GetResult<Prisma.$ReferralPayload, S>

  type ReferralCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferralFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferralCountAggregateInputType | true
    }

  export interface ReferralDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Referral'], meta: { name: 'Referral' } }
    /**
     * Find zero or one Referral that matches the filter.
     * @param {ReferralFindUniqueArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralFindUniqueArgs>(args: SelectSubset<T, ReferralFindUniqueArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Referral that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferralFindUniqueOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralFindFirstArgs>(args?: SelectSubset<T, ReferralFindFirstArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Referrals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referrals
     * const referrals = await prisma.referral.findMany()
     * 
     * // Get first 10 Referrals
     * const referrals = await prisma.referral.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralWithIdOnly = await prisma.referral.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferralFindManyArgs>(args?: SelectSubset<T, ReferralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Referral.
     * @param {ReferralCreateArgs} args - Arguments to create a Referral.
     * @example
     * // Create one Referral
     * const Referral = await prisma.referral.create({
     *   data: {
     *     // ... data to create a Referral
     *   }
     * })
     * 
     */
    create<T extends ReferralCreateArgs>(args: SelectSubset<T, ReferralCreateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Referrals.
     * @param {ReferralCreateManyArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralCreateManyArgs>(args?: SelectSubset<T, ReferralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Referrals and returns the data saved in the database.
     * @param {ReferralCreateManyAndReturnArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Referrals and only return the `id`
     * const referralWithIdOnly = await prisma.referral.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferralCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferralCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Referral.
     * @param {ReferralDeleteArgs} args - Arguments to delete one Referral.
     * @example
     * // Delete one Referral
     * const Referral = await prisma.referral.delete({
     *   where: {
     *     // ... filter to delete one Referral
     *   }
     * })
     * 
     */
    delete<T extends ReferralDeleteArgs>(args: SelectSubset<T, ReferralDeleteArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Referral.
     * @param {ReferralUpdateArgs} args - Arguments to update one Referral.
     * @example
     * // Update one Referral
     * const referral = await prisma.referral.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralUpdateArgs>(args: SelectSubset<T, ReferralUpdateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Referrals.
     * @param {ReferralDeleteManyArgs} args - Arguments to filter Referrals to delete.
     * @example
     * // Delete a few Referrals
     * const { count } = await prisma.referral.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralDeleteManyArgs>(args?: SelectSubset<T, ReferralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralUpdateManyArgs>(args: SelectSubset<T, ReferralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals and returns the data updated in the database.
     * @param {ReferralUpdateManyAndReturnArgs} args - Arguments to update many Referrals.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Referrals and only return the `id`
     * const referralWithIdOnly = await prisma.referral.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReferralUpdateManyAndReturnArgs>(args: SelectSubset<T, ReferralUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Referral.
     * @param {ReferralUpsertArgs} args - Arguments to update or create a Referral.
     * @example
     * // Update or create a Referral
     * const referral = await prisma.referral.upsert({
     *   create: {
     *     // ... data to create a Referral
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referral we want to update
     *   }
     * })
     */
    upsert<T extends ReferralUpsertArgs>(args: SelectSubset<T, ReferralUpsertArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCountArgs} args - Arguments to filter Referrals to count.
     * @example
     * // Count the number of Referrals
     * const count = await prisma.referral.count({
     *   where: {
     *     // ... the filter for the Referrals we want to count
     *   }
     * })
    **/
    count<T extends ReferralCountArgs>(
      args?: Subset<T, ReferralCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferralAggregateArgs>(args: Subset<T, ReferralAggregateArgs>): Prisma.PrismaPromise<GetReferralAggregateType<T>>

    /**
     * Group by Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralGroupByArgs} args - Group by arguments.
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
      T extends ReferralGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralGroupByArgs['orderBy'] }
        : { orderBy?: ReferralGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReferralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Referral model
   */
  readonly fields: ReferralFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Referral.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    executive<T extends ExecutiveDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExecutiveDefaultArgs<ExtArgs>>): Prisma__ExecutiveClient<$Result.GetResult<Prisma.$ExecutivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    referredUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Referral model
   */
  interface ReferralFieldRefs {
    readonly id: FieldRef<"Referral", 'String'>
    readonly executiveRefode: FieldRef<"Referral", 'String'>
    readonly userId: FieldRef<"Referral", 'String'>
    readonly referredAt: FieldRef<"Referral", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Referral findUnique
   */
  export type ReferralFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findUniqueOrThrow
   */
  export type ReferralFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findFirst
   */
  export type ReferralFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findFirstOrThrow
   */
  export type ReferralFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findMany
   */
  export type ReferralFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referrals to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral create
   */
  export type ReferralCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to create a Referral.
     */
    data: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
  }

  /**
   * Referral createMany
   */
  export type ReferralCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Referral createManyAndReturn
   */
  export type ReferralCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Referral update
   */
  export type ReferralUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to update a Referral.
     */
    data: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
    /**
     * Choose, which Referral to update.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral updateMany
   */
  export type ReferralUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Referrals.
     */
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyInput>
    /**
     * Filter which Referrals to update
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to update.
     */
    limit?: number
  }

  /**
   * Referral updateManyAndReturn
   */
  export type ReferralUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * The data used to update Referrals.
     */
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyInput>
    /**
     * Filter which Referrals to update
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Referral upsert
   */
  export type ReferralUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The filter to search for the Referral to update in case it exists.
     */
    where: ReferralWhereUniqueInput
    /**
     * In case the Referral found by the `where` argument doesn't exist, create a new Referral with this data.
     */
    create: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
    /**
     * In case the Referral was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
  }

  /**
   * Referral delete
   */
  export type ReferralDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter which Referral to delete.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral deleteMany
   */
  export type ReferralDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referrals to delete
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to delete.
     */
    limit?: number
  }

  /**
   * Referral without action
   */
  export type ReferralDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
  }


  /**
   * Model CoinTransaction
   */

  export type AggregateCoinTransaction = {
    _count: CoinTransactionCountAggregateOutputType | null
    _avg: CoinTransactionAvgAggregateOutputType | null
    _sum: CoinTransactionSumAggregateOutputType | null
    _min: CoinTransactionMinAggregateOutputType | null
    _max: CoinTransactionMaxAggregateOutputType | null
  }

  export type CoinTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type CoinTransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type CoinTransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    type: $Enums.TransactionType | null
    createdAt: Date | null
  }

  export type CoinTransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    type: $Enums.TransactionType | null
    createdAt: Date | null
  }

  export type CoinTransactionCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    type: number
    createdAt: number
    _all: number
  }


  export type CoinTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type CoinTransactionSumAggregateInputType = {
    amount?: true
  }

  export type CoinTransactionMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    type?: true
    createdAt?: true
  }

  export type CoinTransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    type?: true
    createdAt?: true
  }

  export type CoinTransactionCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type CoinTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoinTransaction to aggregate.
     */
    where?: CoinTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinTransactions to fetch.
     */
    orderBy?: CoinTransactionOrderByWithRelationInput | CoinTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoinTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoinTransactions
    **/
    _count?: true | CoinTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoinTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoinTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoinTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoinTransactionMaxAggregateInputType
  }

  export type GetCoinTransactionAggregateType<T extends CoinTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateCoinTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoinTransaction[P]>
      : GetScalarType<T[P], AggregateCoinTransaction[P]>
  }




  export type CoinTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoinTransactionWhereInput
    orderBy?: CoinTransactionOrderByWithAggregationInput | CoinTransactionOrderByWithAggregationInput[]
    by: CoinTransactionScalarFieldEnum[] | CoinTransactionScalarFieldEnum
    having?: CoinTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoinTransactionCountAggregateInputType | true
    _avg?: CoinTransactionAvgAggregateInputType
    _sum?: CoinTransactionSumAggregateInputType
    _min?: CoinTransactionMinAggregateInputType
    _max?: CoinTransactionMaxAggregateInputType
  }

  export type CoinTransactionGroupByOutputType = {
    id: string
    userId: string
    amount: number
    type: $Enums.TransactionType
    createdAt: Date
    _count: CoinTransactionCountAggregateOutputType | null
    _avg: CoinTransactionAvgAggregateOutputType | null
    _sum: CoinTransactionSumAggregateOutputType | null
    _min: CoinTransactionMinAggregateOutputType | null
    _max: CoinTransactionMaxAggregateOutputType | null
  }

  type GetCoinTransactionGroupByPayload<T extends CoinTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoinTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoinTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoinTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], CoinTransactionGroupByOutputType[P]>
        }
      >
    >


  export type CoinTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coinTransaction"]>

  export type CoinTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coinTransaction"]>

  export type CoinTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coinTransaction"]>

  export type CoinTransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type CoinTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "type" | "createdAt", ExtArgs["result"]["coinTransaction"]>
  export type CoinTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoinTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoinTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoinTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoinTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      type: $Enums.TransactionType
      createdAt: Date
    }, ExtArgs["result"]["coinTransaction"]>
    composites: {}
  }

  type CoinTransactionGetPayload<S extends boolean | null | undefined | CoinTransactionDefaultArgs> = $Result.GetResult<Prisma.$CoinTransactionPayload, S>

  type CoinTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoinTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoinTransactionCountAggregateInputType | true
    }

  export interface CoinTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoinTransaction'], meta: { name: 'CoinTransaction' } }
    /**
     * Find zero or one CoinTransaction that matches the filter.
     * @param {CoinTransactionFindUniqueArgs} args - Arguments to find a CoinTransaction
     * @example
     * // Get one CoinTransaction
     * const coinTransaction = await prisma.coinTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoinTransactionFindUniqueArgs>(args: SelectSubset<T, CoinTransactionFindUniqueArgs<ExtArgs>>): Prisma__CoinTransactionClient<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoinTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoinTransactionFindUniqueOrThrowArgs} args - Arguments to find a CoinTransaction
     * @example
     * // Get one CoinTransaction
     * const coinTransaction = await prisma.coinTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoinTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, CoinTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoinTransactionClient<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoinTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionFindFirstArgs} args - Arguments to find a CoinTransaction
     * @example
     * // Get one CoinTransaction
     * const coinTransaction = await prisma.coinTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoinTransactionFindFirstArgs>(args?: SelectSubset<T, CoinTransactionFindFirstArgs<ExtArgs>>): Prisma__CoinTransactionClient<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoinTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionFindFirstOrThrowArgs} args - Arguments to find a CoinTransaction
     * @example
     * // Get one CoinTransaction
     * const coinTransaction = await prisma.coinTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoinTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, CoinTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoinTransactionClient<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoinTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoinTransactions
     * const coinTransactions = await prisma.coinTransaction.findMany()
     * 
     * // Get first 10 CoinTransactions
     * const coinTransactions = await prisma.coinTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coinTransactionWithIdOnly = await prisma.coinTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoinTransactionFindManyArgs>(args?: SelectSubset<T, CoinTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoinTransaction.
     * @param {CoinTransactionCreateArgs} args - Arguments to create a CoinTransaction.
     * @example
     * // Create one CoinTransaction
     * const CoinTransaction = await prisma.coinTransaction.create({
     *   data: {
     *     // ... data to create a CoinTransaction
     *   }
     * })
     * 
     */
    create<T extends CoinTransactionCreateArgs>(args: SelectSubset<T, CoinTransactionCreateArgs<ExtArgs>>): Prisma__CoinTransactionClient<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoinTransactions.
     * @param {CoinTransactionCreateManyArgs} args - Arguments to create many CoinTransactions.
     * @example
     * // Create many CoinTransactions
     * const coinTransaction = await prisma.coinTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoinTransactionCreateManyArgs>(args?: SelectSubset<T, CoinTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoinTransactions and returns the data saved in the database.
     * @param {CoinTransactionCreateManyAndReturnArgs} args - Arguments to create many CoinTransactions.
     * @example
     * // Create many CoinTransactions
     * const coinTransaction = await prisma.coinTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoinTransactions and only return the `id`
     * const coinTransactionWithIdOnly = await prisma.coinTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoinTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, CoinTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoinTransaction.
     * @param {CoinTransactionDeleteArgs} args - Arguments to delete one CoinTransaction.
     * @example
     * // Delete one CoinTransaction
     * const CoinTransaction = await prisma.coinTransaction.delete({
     *   where: {
     *     // ... filter to delete one CoinTransaction
     *   }
     * })
     * 
     */
    delete<T extends CoinTransactionDeleteArgs>(args: SelectSubset<T, CoinTransactionDeleteArgs<ExtArgs>>): Prisma__CoinTransactionClient<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoinTransaction.
     * @param {CoinTransactionUpdateArgs} args - Arguments to update one CoinTransaction.
     * @example
     * // Update one CoinTransaction
     * const coinTransaction = await prisma.coinTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoinTransactionUpdateArgs>(args: SelectSubset<T, CoinTransactionUpdateArgs<ExtArgs>>): Prisma__CoinTransactionClient<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoinTransactions.
     * @param {CoinTransactionDeleteManyArgs} args - Arguments to filter CoinTransactions to delete.
     * @example
     * // Delete a few CoinTransactions
     * const { count } = await prisma.coinTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoinTransactionDeleteManyArgs>(args?: SelectSubset<T, CoinTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoinTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoinTransactions
     * const coinTransaction = await prisma.coinTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoinTransactionUpdateManyArgs>(args: SelectSubset<T, CoinTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoinTransactions and returns the data updated in the database.
     * @param {CoinTransactionUpdateManyAndReturnArgs} args - Arguments to update many CoinTransactions.
     * @example
     * // Update many CoinTransactions
     * const coinTransaction = await prisma.coinTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoinTransactions and only return the `id`
     * const coinTransactionWithIdOnly = await prisma.coinTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends CoinTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, CoinTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoinTransaction.
     * @param {CoinTransactionUpsertArgs} args - Arguments to update or create a CoinTransaction.
     * @example
     * // Update or create a CoinTransaction
     * const coinTransaction = await prisma.coinTransaction.upsert({
     *   create: {
     *     // ... data to create a CoinTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoinTransaction we want to update
     *   }
     * })
     */
    upsert<T extends CoinTransactionUpsertArgs>(args: SelectSubset<T, CoinTransactionUpsertArgs<ExtArgs>>): Prisma__CoinTransactionClient<$Result.GetResult<Prisma.$CoinTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoinTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionCountArgs} args - Arguments to filter CoinTransactions to count.
     * @example
     * // Count the number of CoinTransactions
     * const count = await prisma.coinTransaction.count({
     *   where: {
     *     // ... the filter for the CoinTransactions we want to count
     *   }
     * })
    **/
    count<T extends CoinTransactionCountArgs>(
      args?: Subset<T, CoinTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoinTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoinTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoinTransactionAggregateArgs>(args: Subset<T, CoinTransactionAggregateArgs>): Prisma.PrismaPromise<GetCoinTransactionAggregateType<T>>

    /**
     * Group by CoinTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinTransactionGroupByArgs} args - Group by arguments.
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
      T extends CoinTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoinTransactionGroupByArgs['orderBy'] }
        : { orderBy?: CoinTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoinTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoinTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoinTransaction model
   */
  readonly fields: CoinTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoinTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoinTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CoinTransaction model
   */
  interface CoinTransactionFieldRefs {
    readonly id: FieldRef<"CoinTransaction", 'String'>
    readonly userId: FieldRef<"CoinTransaction", 'String'>
    readonly amount: FieldRef<"CoinTransaction", 'Int'>
    readonly type: FieldRef<"CoinTransaction", 'TransactionType'>
    readonly createdAt: FieldRef<"CoinTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoinTransaction findUnique
   */
  export type CoinTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinTransaction
     */
    omit?: CoinTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CoinTransaction to fetch.
     */
    where: CoinTransactionWhereUniqueInput
  }

  /**
   * CoinTransaction findUniqueOrThrow
   */
  export type CoinTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinTransaction
     */
    omit?: CoinTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CoinTransaction to fetch.
     */
    where: CoinTransactionWhereUniqueInput
  }

  /**
   * CoinTransaction findFirst
   */
  export type CoinTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinTransaction
     */
    omit?: CoinTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CoinTransaction to fetch.
     */
    where?: CoinTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinTransactions to fetch.
     */
    orderBy?: CoinTransactionOrderByWithRelationInput | CoinTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoinTransactions.
     */
    cursor?: CoinTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoinTransactions.
     */
    distinct?: CoinTransactionScalarFieldEnum | CoinTransactionScalarFieldEnum[]
  }

  /**
   * CoinTransaction findFirstOrThrow
   */
  export type CoinTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinTransaction
     */
    omit?: CoinTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CoinTransaction to fetch.
     */
    where?: CoinTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinTransactions to fetch.
     */
    orderBy?: CoinTransactionOrderByWithRelationInput | CoinTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoinTransactions.
     */
    cursor?: CoinTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoinTransactions.
     */
    distinct?: CoinTransactionScalarFieldEnum | CoinTransactionScalarFieldEnum[]
  }

  /**
   * CoinTransaction findMany
   */
  export type CoinTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinTransaction
     */
    omit?: CoinTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CoinTransactions to fetch.
     */
    where?: CoinTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinTransactions to fetch.
     */
    orderBy?: CoinTransactionOrderByWithRelationInput | CoinTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoinTransactions.
     */
    cursor?: CoinTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinTransactions.
     */
    skip?: number
    distinct?: CoinTransactionScalarFieldEnum | CoinTransactionScalarFieldEnum[]
  }

  /**
   * CoinTransaction create
   */
  export type CoinTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinTransaction
     */
    omit?: CoinTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a CoinTransaction.
     */
    data: XOR<CoinTransactionCreateInput, CoinTransactionUncheckedCreateInput>
  }

  /**
   * CoinTransaction createMany
   */
  export type CoinTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoinTransactions.
     */
    data: CoinTransactionCreateManyInput | CoinTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoinTransaction createManyAndReturn
   */
  export type CoinTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoinTransaction
     */
    omit?: CoinTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many CoinTransactions.
     */
    data: CoinTransactionCreateManyInput | CoinTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoinTransaction update
   */
  export type CoinTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinTransaction
     */
    omit?: CoinTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a CoinTransaction.
     */
    data: XOR<CoinTransactionUpdateInput, CoinTransactionUncheckedUpdateInput>
    /**
     * Choose, which CoinTransaction to update.
     */
    where: CoinTransactionWhereUniqueInput
  }

  /**
   * CoinTransaction updateMany
   */
  export type CoinTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoinTransactions.
     */
    data: XOR<CoinTransactionUpdateManyMutationInput, CoinTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CoinTransactions to update
     */
    where?: CoinTransactionWhereInput
    /**
     * Limit how many CoinTransactions to update.
     */
    limit?: number
  }

  /**
   * CoinTransaction updateManyAndReturn
   */
  export type CoinTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoinTransaction
     */
    omit?: CoinTransactionOmit<ExtArgs> | null
    /**
     * The data used to update CoinTransactions.
     */
    data: XOR<CoinTransactionUpdateManyMutationInput, CoinTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CoinTransactions to update
     */
    where?: CoinTransactionWhereInput
    /**
     * Limit how many CoinTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoinTransaction upsert
   */
  export type CoinTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinTransaction
     */
    omit?: CoinTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the CoinTransaction to update in case it exists.
     */
    where: CoinTransactionWhereUniqueInput
    /**
     * In case the CoinTransaction found by the `where` argument doesn't exist, create a new CoinTransaction with this data.
     */
    create: XOR<CoinTransactionCreateInput, CoinTransactionUncheckedCreateInput>
    /**
     * In case the CoinTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoinTransactionUpdateInput, CoinTransactionUncheckedUpdateInput>
  }

  /**
   * CoinTransaction delete
   */
  export type CoinTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinTransaction
     */
    omit?: CoinTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinTransactionInclude<ExtArgs> | null
    /**
     * Filter which CoinTransaction to delete.
     */
    where: CoinTransactionWhereUniqueInput
  }

  /**
   * CoinTransaction deleteMany
   */
  export type CoinTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoinTransactions to delete
     */
    where?: CoinTransactionWhereInput
    /**
     * Limit how many CoinTransactions to delete.
     */
    limit?: number
  }

  /**
   * CoinTransaction without action
   */
  export type CoinTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinTransaction
     */
    select?: CoinTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinTransaction
     */
    omit?: CoinTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinTransactionInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    joinedAt: 'joinedAt',
    role: 'role',
    coins: 'coins',
    packageId: 'packageId',
    executiveRefode: 'executiveRefode',
    isBanned: 'isBanned'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ExecutiveScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    joinedAt: 'joinedAt',
    isBanned: 'isBanned',
    referralCode: 'referralCode'
  };

  export type ExecutiveScalarFieldEnum = (typeof ExecutiveScalarFieldEnum)[keyof typeof ExecutiveScalarFieldEnum]


  export const PackageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    priceInCoins: 'priceInCoins',
    validityDays: 'validityDays'
  };

  export type PackageScalarFieldEnum = (typeof PackageScalarFieldEnum)[keyof typeof PackageScalarFieldEnum]


  export const WebinarScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    zoomLink: 'zoomLink',
    thumbnail: 'thumbnail',
    packageId: 'packageId',
    description: 'description'
  };

  export type WebinarScalarFieldEnum = (typeof WebinarScalarFieldEnum)[keyof typeof WebinarScalarFieldEnum]


  export const UserPackageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    packageId: 'packageId',
    purchasedAt: 'purchasedAt',
    validUntil: 'validUntil',
    isActive: 'isActive'
  };

  export type UserPackageScalarFieldEnum = (typeof UserPackageScalarFieldEnum)[keyof typeof UserPackageScalarFieldEnum]


  export const WebinarAttendanceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    webinarId: 'webinarId',
    attendedAt: 'attendedAt'
  };

  export type WebinarAttendanceScalarFieldEnum = (typeof WebinarAttendanceScalarFieldEnum)[keyof typeof WebinarAttendanceScalarFieldEnum]


  export const ReferralScalarFieldEnum: {
    id: 'id',
    executiveRefode: 'executiveRefode',
    userId: 'userId',
    referredAt: 'referredAt'
  };

  export type ReferralScalarFieldEnum = (typeof ReferralScalarFieldEnum)[keyof typeof ReferralScalarFieldEnum]


  export const CoinTransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type CoinTransactionScalarFieldEnum = (typeof CoinTransactionScalarFieldEnum)[keyof typeof CoinTransactionScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    joinedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    coins?: IntFilter<"User"> | number
    packageId?: StringNullableFilter<"User"> | string | null
    executiveRefode?: StringNullableFilter<"User"> | string | null
    isBanned?: BoolFilter<"User"> | boolean
    package?: XOR<PackageNullableScalarRelationFilter, PackageWhereInput> | null
    webinars?: WebinarAttendanceListRelationFilter
    referredBy?: XOR<ExecutiveNullableScalarRelationFilter, ExecutiveWhereInput> | null
    transactions?: CoinTransactionListRelationFilter
    referralsMade?: ReferralListRelationFilter
    userPackages?: UserPackageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joinedAt?: SortOrder
    role?: SortOrder
    coins?: SortOrder
    packageId?: SortOrderInput | SortOrder
    executiveRefode?: SortOrderInput | SortOrder
    isBanned?: SortOrder
    package?: PackageOrderByWithRelationInput
    webinars?: WebinarAttendanceOrderByRelationAggregateInput
    referredBy?: ExecutiveOrderByWithRelationInput
    transactions?: CoinTransactionOrderByRelationAggregateInput
    referralsMade?: ReferralOrderByRelationAggregateInput
    userPackages?: UserPackageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    joinedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    coins?: IntFilter<"User"> | number
    packageId?: StringNullableFilter<"User"> | string | null
    executiveRefode?: StringNullableFilter<"User"> | string | null
    isBanned?: BoolFilter<"User"> | boolean
    package?: XOR<PackageNullableScalarRelationFilter, PackageWhereInput> | null
    webinars?: WebinarAttendanceListRelationFilter
    referredBy?: XOR<ExecutiveNullableScalarRelationFilter, ExecutiveWhereInput> | null
    transactions?: CoinTransactionListRelationFilter
    referralsMade?: ReferralListRelationFilter
    userPackages?: UserPackageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joinedAt?: SortOrder
    role?: SortOrder
    coins?: SortOrder
    packageId?: SortOrderInput | SortOrder
    executiveRefode?: SortOrderInput | SortOrder
    isBanned?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    coins?: IntWithAggregatesFilter<"User"> | number
    packageId?: StringNullableWithAggregatesFilter<"User"> | string | null
    executiveRefode?: StringNullableWithAggregatesFilter<"User"> | string | null
    isBanned?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type ExecutiveWhereInput = {
    AND?: ExecutiveWhereInput | ExecutiveWhereInput[]
    OR?: ExecutiveWhereInput[]
    NOT?: ExecutiveWhereInput | ExecutiveWhereInput[]
    id?: StringFilter<"Executive"> | string
    name?: StringFilter<"Executive"> | string
    email?: StringFilter<"Executive"> | string
    password?: StringFilter<"Executive"> | string
    joinedAt?: DateTimeFilter<"Executive"> | Date | string
    isBanned?: BoolFilter<"Executive"> | boolean
    referralCode?: StringFilter<"Executive"> | string
    referredUsers?: UserListRelationFilter
    referrals?: ReferralListRelationFilter
  }

  export type ExecutiveOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joinedAt?: SortOrder
    isBanned?: SortOrder
    referralCode?: SortOrder
    referredUsers?: UserOrderByRelationAggregateInput
    referrals?: ReferralOrderByRelationAggregateInput
  }

  export type ExecutiveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    referralCode?: string
    AND?: ExecutiveWhereInput | ExecutiveWhereInput[]
    OR?: ExecutiveWhereInput[]
    NOT?: ExecutiveWhereInput | ExecutiveWhereInput[]
    name?: StringFilter<"Executive"> | string
    password?: StringFilter<"Executive"> | string
    joinedAt?: DateTimeFilter<"Executive"> | Date | string
    isBanned?: BoolFilter<"Executive"> | boolean
    referredUsers?: UserListRelationFilter
    referrals?: ReferralListRelationFilter
  }, "id" | "email" | "referralCode">

  export type ExecutiveOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joinedAt?: SortOrder
    isBanned?: SortOrder
    referralCode?: SortOrder
    _count?: ExecutiveCountOrderByAggregateInput
    _max?: ExecutiveMaxOrderByAggregateInput
    _min?: ExecutiveMinOrderByAggregateInput
  }

  export type ExecutiveScalarWhereWithAggregatesInput = {
    AND?: ExecutiveScalarWhereWithAggregatesInput | ExecutiveScalarWhereWithAggregatesInput[]
    OR?: ExecutiveScalarWhereWithAggregatesInput[]
    NOT?: ExecutiveScalarWhereWithAggregatesInput | ExecutiveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Executive"> | string
    name?: StringWithAggregatesFilter<"Executive"> | string
    email?: StringWithAggregatesFilter<"Executive"> | string
    password?: StringWithAggregatesFilter<"Executive"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"Executive"> | Date | string
    isBanned?: BoolWithAggregatesFilter<"Executive"> | boolean
    referralCode?: StringWithAggregatesFilter<"Executive"> | string
  }

  export type PackageWhereInput = {
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    id?: StringFilter<"Package"> | string
    name?: StringFilter<"Package"> | string
    priceInCoins?: IntFilter<"Package"> | number
    validityDays?: IntFilter<"Package"> | number
    users?: UserListRelationFilter
    webinars?: WebinarListRelationFilter
    userPackages?: UserPackageListRelationFilter
  }

  export type PackageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    priceInCoins?: SortOrder
    validityDays?: SortOrder
    users?: UserOrderByRelationAggregateInput
    webinars?: WebinarOrderByRelationAggregateInput
    userPackages?: UserPackageOrderByRelationAggregateInput
  }

  export type PackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    name?: StringFilter<"Package"> | string
    priceInCoins?: IntFilter<"Package"> | number
    validityDays?: IntFilter<"Package"> | number
    users?: UserListRelationFilter
    webinars?: WebinarListRelationFilter
    userPackages?: UserPackageListRelationFilter
  }, "id">

  export type PackageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    priceInCoins?: SortOrder
    validityDays?: SortOrder
    _count?: PackageCountOrderByAggregateInput
    _avg?: PackageAvgOrderByAggregateInput
    _max?: PackageMaxOrderByAggregateInput
    _min?: PackageMinOrderByAggregateInput
    _sum?: PackageSumOrderByAggregateInput
  }

  export type PackageScalarWhereWithAggregatesInput = {
    AND?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    OR?: PackageScalarWhereWithAggregatesInput[]
    NOT?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Package"> | string
    name?: StringWithAggregatesFilter<"Package"> | string
    priceInCoins?: IntWithAggregatesFilter<"Package"> | number
    validityDays?: IntWithAggregatesFilter<"Package"> | number
  }

  export type WebinarWhereInput = {
    AND?: WebinarWhereInput | WebinarWhereInput[]
    OR?: WebinarWhereInput[]
    NOT?: WebinarWhereInput | WebinarWhereInput[]
    id?: StringFilter<"Webinar"> | string
    title?: StringFilter<"Webinar"> | string
    date?: DateTimeFilter<"Webinar"> | Date | string
    zoomLink?: StringFilter<"Webinar"> | string
    thumbnail?: StringFilter<"Webinar"> | string
    packageId?: StringFilter<"Webinar"> | string
    description?: StringNullableFilter<"Webinar"> | string | null
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
    attendees?: WebinarAttendanceListRelationFilter
  }

  export type WebinarOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    zoomLink?: SortOrder
    thumbnail?: SortOrder
    packageId?: SortOrder
    description?: SortOrderInput | SortOrder
    package?: PackageOrderByWithRelationInput
    attendees?: WebinarAttendanceOrderByRelationAggregateInput
  }

  export type WebinarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebinarWhereInput | WebinarWhereInput[]
    OR?: WebinarWhereInput[]
    NOT?: WebinarWhereInput | WebinarWhereInput[]
    title?: StringFilter<"Webinar"> | string
    date?: DateTimeFilter<"Webinar"> | Date | string
    zoomLink?: StringFilter<"Webinar"> | string
    thumbnail?: StringFilter<"Webinar"> | string
    packageId?: StringFilter<"Webinar"> | string
    description?: StringNullableFilter<"Webinar"> | string | null
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
    attendees?: WebinarAttendanceListRelationFilter
  }, "id">

  export type WebinarOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    zoomLink?: SortOrder
    thumbnail?: SortOrder
    packageId?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: WebinarCountOrderByAggregateInput
    _max?: WebinarMaxOrderByAggregateInput
    _min?: WebinarMinOrderByAggregateInput
  }

  export type WebinarScalarWhereWithAggregatesInput = {
    AND?: WebinarScalarWhereWithAggregatesInput | WebinarScalarWhereWithAggregatesInput[]
    OR?: WebinarScalarWhereWithAggregatesInput[]
    NOT?: WebinarScalarWhereWithAggregatesInput | WebinarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Webinar"> | string
    title?: StringWithAggregatesFilter<"Webinar"> | string
    date?: DateTimeWithAggregatesFilter<"Webinar"> | Date | string
    zoomLink?: StringWithAggregatesFilter<"Webinar"> | string
    thumbnail?: StringWithAggregatesFilter<"Webinar"> | string
    packageId?: StringWithAggregatesFilter<"Webinar"> | string
    description?: StringNullableWithAggregatesFilter<"Webinar"> | string | null
  }

  export type UserPackageWhereInput = {
    AND?: UserPackageWhereInput | UserPackageWhereInput[]
    OR?: UserPackageWhereInput[]
    NOT?: UserPackageWhereInput | UserPackageWhereInput[]
    id?: StringFilter<"UserPackage"> | string
    userId?: StringFilter<"UserPackage"> | string
    packageId?: StringFilter<"UserPackage"> | string
    purchasedAt?: DateTimeFilter<"UserPackage"> | Date | string
    validUntil?: DateTimeFilter<"UserPackage"> | Date | string
    isActive?: BoolFilter<"UserPackage"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }

  export type UserPackageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    purchasedAt?: SortOrder
    validUntil?: SortOrder
    isActive?: SortOrder
    user?: UserOrderByWithRelationInput
    package?: PackageOrderByWithRelationInput
  }

  export type UserPackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserPackageWhereInput | UserPackageWhereInput[]
    OR?: UserPackageWhereInput[]
    NOT?: UserPackageWhereInput | UserPackageWhereInput[]
    userId?: StringFilter<"UserPackage"> | string
    packageId?: StringFilter<"UserPackage"> | string
    purchasedAt?: DateTimeFilter<"UserPackage"> | Date | string
    validUntil?: DateTimeFilter<"UserPackage"> | Date | string
    isActive?: BoolFilter<"UserPackage"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
  }, "id">

  export type UserPackageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    purchasedAt?: SortOrder
    validUntil?: SortOrder
    isActive?: SortOrder
    _count?: UserPackageCountOrderByAggregateInput
    _max?: UserPackageMaxOrderByAggregateInput
    _min?: UserPackageMinOrderByAggregateInput
  }

  export type UserPackageScalarWhereWithAggregatesInput = {
    AND?: UserPackageScalarWhereWithAggregatesInput | UserPackageScalarWhereWithAggregatesInput[]
    OR?: UserPackageScalarWhereWithAggregatesInput[]
    NOT?: UserPackageScalarWhereWithAggregatesInput | UserPackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPackage"> | string
    userId?: StringWithAggregatesFilter<"UserPackage"> | string
    packageId?: StringWithAggregatesFilter<"UserPackage"> | string
    purchasedAt?: DateTimeWithAggregatesFilter<"UserPackage"> | Date | string
    validUntil?: DateTimeWithAggregatesFilter<"UserPackage"> | Date | string
    isActive?: BoolWithAggregatesFilter<"UserPackage"> | boolean
  }

  export type WebinarAttendanceWhereInput = {
    AND?: WebinarAttendanceWhereInput | WebinarAttendanceWhereInput[]
    OR?: WebinarAttendanceWhereInput[]
    NOT?: WebinarAttendanceWhereInput | WebinarAttendanceWhereInput[]
    id?: StringFilter<"WebinarAttendance"> | string
    userId?: StringFilter<"WebinarAttendance"> | string
    webinarId?: StringFilter<"WebinarAttendance"> | string
    attendedAt?: DateTimeFilter<"WebinarAttendance"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    webinar?: XOR<WebinarScalarRelationFilter, WebinarWhereInput>
  }

  export type WebinarAttendanceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    webinarId?: SortOrder
    attendedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    webinar?: WebinarOrderByWithRelationInput
  }

  export type WebinarAttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebinarAttendanceWhereInput | WebinarAttendanceWhereInput[]
    OR?: WebinarAttendanceWhereInput[]
    NOT?: WebinarAttendanceWhereInput | WebinarAttendanceWhereInput[]
    userId?: StringFilter<"WebinarAttendance"> | string
    webinarId?: StringFilter<"WebinarAttendance"> | string
    attendedAt?: DateTimeFilter<"WebinarAttendance"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    webinar?: XOR<WebinarScalarRelationFilter, WebinarWhereInput>
  }, "id">

  export type WebinarAttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    webinarId?: SortOrder
    attendedAt?: SortOrder
    _count?: WebinarAttendanceCountOrderByAggregateInput
    _max?: WebinarAttendanceMaxOrderByAggregateInput
    _min?: WebinarAttendanceMinOrderByAggregateInput
  }

  export type WebinarAttendanceScalarWhereWithAggregatesInput = {
    AND?: WebinarAttendanceScalarWhereWithAggregatesInput | WebinarAttendanceScalarWhereWithAggregatesInput[]
    OR?: WebinarAttendanceScalarWhereWithAggregatesInput[]
    NOT?: WebinarAttendanceScalarWhereWithAggregatesInput | WebinarAttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebinarAttendance"> | string
    userId?: StringWithAggregatesFilter<"WebinarAttendance"> | string
    webinarId?: StringWithAggregatesFilter<"WebinarAttendance"> | string
    attendedAt?: DateTimeWithAggregatesFilter<"WebinarAttendance"> | Date | string
  }

  export type ReferralWhereInput = {
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    id?: StringFilter<"Referral"> | string
    executiveRefode?: StringFilter<"Referral"> | string
    userId?: StringFilter<"Referral"> | string
    referredAt?: DateTimeFilter<"Referral"> | Date | string
    executive?: XOR<ExecutiveScalarRelationFilter, ExecutiveWhereInput>
    referredUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReferralOrderByWithRelationInput = {
    id?: SortOrder
    executiveRefode?: SortOrder
    userId?: SortOrder
    referredAt?: SortOrder
    executive?: ExecutiveOrderByWithRelationInput
    referredUser?: UserOrderByWithRelationInput
  }

  export type ReferralWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    executiveRefode?: StringFilter<"Referral"> | string
    userId?: StringFilter<"Referral"> | string
    referredAt?: DateTimeFilter<"Referral"> | Date | string
    executive?: XOR<ExecutiveScalarRelationFilter, ExecutiveWhereInput>
    referredUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReferralOrderByWithAggregationInput = {
    id?: SortOrder
    executiveRefode?: SortOrder
    userId?: SortOrder
    referredAt?: SortOrder
    _count?: ReferralCountOrderByAggregateInput
    _max?: ReferralMaxOrderByAggregateInput
    _min?: ReferralMinOrderByAggregateInput
  }

  export type ReferralScalarWhereWithAggregatesInput = {
    AND?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    OR?: ReferralScalarWhereWithAggregatesInput[]
    NOT?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Referral"> | string
    executiveRefode?: StringWithAggregatesFilter<"Referral"> | string
    userId?: StringWithAggregatesFilter<"Referral"> | string
    referredAt?: DateTimeWithAggregatesFilter<"Referral"> | Date | string
  }

  export type CoinTransactionWhereInput = {
    AND?: CoinTransactionWhereInput | CoinTransactionWhereInput[]
    OR?: CoinTransactionWhereInput[]
    NOT?: CoinTransactionWhereInput | CoinTransactionWhereInput[]
    id?: StringFilter<"CoinTransaction"> | string
    userId?: StringFilter<"CoinTransaction"> | string
    amount?: IntFilter<"CoinTransaction"> | number
    type?: EnumTransactionTypeFilter<"CoinTransaction"> | $Enums.TransactionType
    createdAt?: DateTimeFilter<"CoinTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CoinTransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CoinTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CoinTransactionWhereInput | CoinTransactionWhereInput[]
    OR?: CoinTransactionWhereInput[]
    NOT?: CoinTransactionWhereInput | CoinTransactionWhereInput[]
    userId?: StringFilter<"CoinTransaction"> | string
    amount?: IntFilter<"CoinTransaction"> | number
    type?: EnumTransactionTypeFilter<"CoinTransaction"> | $Enums.TransactionType
    createdAt?: DateTimeFilter<"CoinTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CoinTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: CoinTransactionCountOrderByAggregateInput
    _avg?: CoinTransactionAvgOrderByAggregateInput
    _max?: CoinTransactionMaxOrderByAggregateInput
    _min?: CoinTransactionMinOrderByAggregateInput
    _sum?: CoinTransactionSumOrderByAggregateInput
  }

  export type CoinTransactionScalarWhereWithAggregatesInput = {
    AND?: CoinTransactionScalarWhereWithAggregatesInput | CoinTransactionScalarWhereWithAggregatesInput[]
    OR?: CoinTransactionScalarWhereWithAggregatesInput[]
    NOT?: CoinTransactionScalarWhereWithAggregatesInput | CoinTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CoinTransaction"> | string
    userId?: StringWithAggregatesFilter<"CoinTransaction"> | string
    amount?: IntWithAggregatesFilter<"CoinTransaction"> | number
    type?: EnumTransactionTypeWithAggregatesFilter<"CoinTransaction"> | $Enums.TransactionType
    createdAt?: DateTimeWithAggregatesFilter<"CoinTransaction"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    role?: $Enums.Role
    coins?: number
    isBanned?: boolean
    package?: PackageCreateNestedOneWithoutUsersInput
    webinars?: WebinarAttendanceCreateNestedManyWithoutUserInput
    referredBy?: ExecutiveCreateNestedOneWithoutReferredUsersInput
    transactions?: CoinTransactionCreateNestedManyWithoutUserInput
    referralsMade?: ReferralCreateNestedManyWithoutReferredUserInput
    userPackages?: UserPackageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    role?: $Enums.Role
    coins?: number
    packageId?: string | null
    executiveRefode?: string | null
    isBanned?: boolean
    webinars?: WebinarAttendanceUncheckedCreateNestedManyWithoutUserInput
    transactions?: CoinTransactionUncheckedCreateNestedManyWithoutUserInput
    referralsMade?: ReferralUncheckedCreateNestedManyWithoutReferredUserInput
    userPackages?: UserPackageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    coins?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    package?: PackageUpdateOneWithoutUsersNestedInput
    webinars?: WebinarAttendanceUpdateManyWithoutUserNestedInput
    referredBy?: ExecutiveUpdateOneWithoutReferredUsersNestedInput
    transactions?: CoinTransactionUpdateManyWithoutUserNestedInput
    referralsMade?: ReferralUpdateManyWithoutReferredUserNestedInput
    userPackages?: UserPackageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    coins?: IntFieldUpdateOperationsInput | number
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    executiveRefode?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    webinars?: WebinarAttendanceUncheckedUpdateManyWithoutUserNestedInput
    transactions?: CoinTransactionUncheckedUpdateManyWithoutUserNestedInput
    referralsMade?: ReferralUncheckedUpdateManyWithoutReferredUserNestedInput
    userPackages?: UserPackageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    role?: $Enums.Role
    coins?: number
    packageId?: string | null
    executiveRefode?: string | null
    isBanned?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    coins?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    coins?: IntFieldUpdateOperationsInput | number
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    executiveRefode?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExecutiveCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    isBanned?: boolean
    referralCode: string
    referredUsers?: UserCreateNestedManyWithoutReferredByInput
    referrals?: ReferralCreateNestedManyWithoutExecutiveInput
  }

  export type ExecutiveUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    isBanned?: boolean
    referralCode: string
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferredByInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutExecutiveInput
  }

  export type ExecutiveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
    referredUsers?: UserUpdateManyWithoutReferredByNestedInput
    referrals?: ReferralUpdateManyWithoutExecutiveNestedInput
  }

  export type ExecutiveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
    referredUsers?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutExecutiveNestedInput
  }

  export type ExecutiveCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    isBanned?: boolean
    referralCode: string
  }

  export type ExecutiveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
  }

  export type ExecutiveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
  }

  export type PackageCreateInput = {
    id?: string
    name: string
    priceInCoins: number
    validityDays: number
    users?: UserCreateNestedManyWithoutPackageInput
    webinars?: WebinarCreateNestedManyWithoutPackageInput
    userPackages?: UserPackageCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateInput = {
    id?: string
    name: string
    priceInCoins: number
    validityDays: number
    users?: UserUncheckedCreateNestedManyWithoutPackageInput
    webinars?: WebinarUncheckedCreateNestedManyWithoutPackageInput
    userPackages?: UserPackageUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceInCoins?: IntFieldUpdateOperationsInput | number
    validityDays?: IntFieldUpdateOperationsInput | number
    users?: UserUpdateManyWithoutPackageNestedInput
    webinars?: WebinarUpdateManyWithoutPackageNestedInput
    userPackages?: UserPackageUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceInCoins?: IntFieldUpdateOperationsInput | number
    validityDays?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutPackageNestedInput
    webinars?: WebinarUncheckedUpdateManyWithoutPackageNestedInput
    userPackages?: UserPackageUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type PackageCreateManyInput = {
    id?: string
    name: string
    priceInCoins: number
    validityDays: number
  }

  export type PackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceInCoins?: IntFieldUpdateOperationsInput | number
    validityDays?: IntFieldUpdateOperationsInput | number
  }

  export type PackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceInCoins?: IntFieldUpdateOperationsInput | number
    validityDays?: IntFieldUpdateOperationsInput | number
  }

  export type WebinarCreateInput = {
    id?: string
    title: string
    date: Date | string
    zoomLink: string
    thumbnail: string
    description?: string | null
    package: PackageCreateNestedOneWithoutWebinarsInput
    attendees?: WebinarAttendanceCreateNestedManyWithoutWebinarInput
  }

  export type WebinarUncheckedCreateInput = {
    id?: string
    title: string
    date: Date | string
    zoomLink: string
    thumbnail: string
    packageId: string
    description?: string | null
    attendees?: WebinarAttendanceUncheckedCreateNestedManyWithoutWebinarInput
  }

  export type WebinarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    zoomLink?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    package?: PackageUpdateOneRequiredWithoutWebinarsNestedInput
    attendees?: WebinarAttendanceUpdateManyWithoutWebinarNestedInput
  }

  export type WebinarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    zoomLink?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: WebinarAttendanceUncheckedUpdateManyWithoutWebinarNestedInput
  }

  export type WebinarCreateManyInput = {
    id?: string
    title: string
    date: Date | string
    zoomLink: string
    thumbnail: string
    packageId: string
    description?: string | null
  }

  export type WebinarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    zoomLink?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WebinarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    zoomLink?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPackageCreateInput = {
    id?: string
    purchasedAt?: Date | string
    validUntil: Date | string
    isActive?: boolean
    user: UserCreateNestedOneWithoutUserPackagesInput
    package: PackageCreateNestedOneWithoutUserPackagesInput
  }

  export type UserPackageUncheckedCreateInput = {
    id?: string
    userId: string
    packageId: string
    purchasedAt?: Date | string
    validUntil: Date | string
    isActive?: boolean
  }

  export type UserPackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserPackagesNestedInput
    package?: PackageUpdateOneRequiredWithoutUserPackagesNestedInput
  }

  export type UserPackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPackageCreateManyInput = {
    id?: string
    userId: string
    packageId: string
    purchasedAt?: Date | string
    validUntil: Date | string
    isActive?: boolean
  }

  export type UserPackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WebinarAttendanceCreateInput = {
    id?: string
    attendedAt?: Date | string
    user: UserCreateNestedOneWithoutWebinarsInput
    webinar: WebinarCreateNestedOneWithoutAttendeesInput
  }

  export type WebinarAttendanceUncheckedCreateInput = {
    id?: string
    userId: string
    webinarId: string
    attendedAt?: Date | string
  }

  export type WebinarAttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWebinarsNestedInput
    webinar?: WebinarUpdateOneRequiredWithoutAttendeesNestedInput
  }

  export type WebinarAttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    webinarId?: StringFieldUpdateOperationsInput | string
    attendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebinarAttendanceCreateManyInput = {
    id?: string
    userId: string
    webinarId: string
    attendedAt?: Date | string
  }

  export type WebinarAttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebinarAttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    webinarId?: StringFieldUpdateOperationsInput | string
    attendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCreateInput = {
    id?: string
    referredAt?: Date | string
    executive: ExecutiveCreateNestedOneWithoutReferralsInput
    referredUser: UserCreateNestedOneWithoutReferralsMadeInput
  }

  export type ReferralUncheckedCreateInput = {
    id?: string
    executiveRefode: string
    userId: string
    referredAt?: Date | string
  }

  export type ReferralUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executive?: ExecutiveUpdateOneRequiredWithoutReferralsNestedInput
    referredUser?: UserUpdateOneRequiredWithoutReferralsMadeNestedInput
  }

  export type ReferralUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    executiveRefode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    referredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCreateManyInput = {
    id?: string
    executiveRefode: string
    userId: string
    referredAt?: Date | string
  }

  export type ReferralUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    executiveRefode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    referredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinTransactionCreateInput = {
    id?: string
    amount: number
    type: $Enums.TransactionType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type CoinTransactionUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    type: $Enums.TransactionType
    createdAt?: Date | string
  }

  export type CoinTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type CoinTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinTransactionCreateManyInput = {
    id?: string
    userId: string
    amount: number
    type: $Enums.TransactionType
    createdAt?: Date | string
  }

  export type CoinTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PackageNullableScalarRelationFilter = {
    is?: PackageWhereInput | null
    isNot?: PackageWhereInput | null
  }

  export type WebinarAttendanceListRelationFilter = {
    every?: WebinarAttendanceWhereInput
    some?: WebinarAttendanceWhereInput
    none?: WebinarAttendanceWhereInput
  }

  export type ExecutiveNullableScalarRelationFilter = {
    is?: ExecutiveWhereInput | null
    isNot?: ExecutiveWhereInput | null
  }

  export type CoinTransactionListRelationFilter = {
    every?: CoinTransactionWhereInput
    some?: CoinTransactionWhereInput
    none?: CoinTransactionWhereInput
  }

  export type ReferralListRelationFilter = {
    every?: ReferralWhereInput
    some?: ReferralWhereInput
    none?: ReferralWhereInput
  }

  export type UserPackageListRelationFilter = {
    every?: UserPackageWhereInput
    some?: UserPackageWhereInput
    none?: UserPackageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WebinarAttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoinTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReferralOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPackageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joinedAt?: SortOrder
    role?: SortOrder
    coins?: SortOrder
    packageId?: SortOrder
    executiveRefode?: SortOrder
    isBanned?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    coins?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joinedAt?: SortOrder
    role?: SortOrder
    coins?: SortOrder
    packageId?: SortOrder
    executiveRefode?: SortOrder
    isBanned?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joinedAt?: SortOrder
    role?: SortOrder
    coins?: SortOrder
    packageId?: SortOrder
    executiveRefode?: SortOrder
    isBanned?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    coins?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExecutiveCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joinedAt?: SortOrder
    isBanned?: SortOrder
    referralCode?: SortOrder
  }

  export type ExecutiveMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joinedAt?: SortOrder
    isBanned?: SortOrder
    referralCode?: SortOrder
  }

  export type ExecutiveMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joinedAt?: SortOrder
    isBanned?: SortOrder
    referralCode?: SortOrder
  }

  export type WebinarListRelationFilter = {
    every?: WebinarWhereInput
    some?: WebinarWhereInput
    none?: WebinarWhereInput
  }

  export type WebinarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PackageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceInCoins?: SortOrder
    validityDays?: SortOrder
  }

  export type PackageAvgOrderByAggregateInput = {
    priceInCoins?: SortOrder
    validityDays?: SortOrder
  }

  export type PackageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceInCoins?: SortOrder
    validityDays?: SortOrder
  }

  export type PackageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priceInCoins?: SortOrder
    validityDays?: SortOrder
  }

  export type PackageSumOrderByAggregateInput = {
    priceInCoins?: SortOrder
    validityDays?: SortOrder
  }

  export type PackageScalarRelationFilter = {
    is?: PackageWhereInput
    isNot?: PackageWhereInput
  }

  export type WebinarCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    zoomLink?: SortOrder
    thumbnail?: SortOrder
    packageId?: SortOrder
    description?: SortOrder
  }

  export type WebinarMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    zoomLink?: SortOrder
    thumbnail?: SortOrder
    packageId?: SortOrder
    description?: SortOrder
  }

  export type WebinarMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    zoomLink?: SortOrder
    thumbnail?: SortOrder
    packageId?: SortOrder
    description?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserPackageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    purchasedAt?: SortOrder
    validUntil?: SortOrder
    isActive?: SortOrder
  }

  export type UserPackageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    purchasedAt?: SortOrder
    validUntil?: SortOrder
    isActive?: SortOrder
  }

  export type UserPackageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    purchasedAt?: SortOrder
    validUntil?: SortOrder
    isActive?: SortOrder
  }

  export type WebinarScalarRelationFilter = {
    is?: WebinarWhereInput
    isNot?: WebinarWhereInput
  }

  export type WebinarAttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    webinarId?: SortOrder
    attendedAt?: SortOrder
  }

  export type WebinarAttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    webinarId?: SortOrder
    attendedAt?: SortOrder
  }

  export type WebinarAttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    webinarId?: SortOrder
    attendedAt?: SortOrder
  }

  export type ExecutiveScalarRelationFilter = {
    is?: ExecutiveWhereInput
    isNot?: ExecutiveWhereInput
  }

  export type ReferralCountOrderByAggregateInput = {
    id?: SortOrder
    executiveRefode?: SortOrder
    userId?: SortOrder
    referredAt?: SortOrder
  }

  export type ReferralMaxOrderByAggregateInput = {
    id?: SortOrder
    executiveRefode?: SortOrder
    userId?: SortOrder
    referredAt?: SortOrder
  }

  export type ReferralMinOrderByAggregateInput = {
    id?: SortOrder
    executiveRefode?: SortOrder
    userId?: SortOrder
    referredAt?: SortOrder
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type CoinTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type CoinTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CoinTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type CoinTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type CoinTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type PackageCreateNestedOneWithoutUsersInput = {
    create?: XOR<PackageCreateWithoutUsersInput, PackageUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PackageCreateOrConnectWithoutUsersInput
    connect?: PackageWhereUniqueInput
  }

  export type WebinarAttendanceCreateNestedManyWithoutUserInput = {
    create?: XOR<WebinarAttendanceCreateWithoutUserInput, WebinarAttendanceUncheckedCreateWithoutUserInput> | WebinarAttendanceCreateWithoutUserInput[] | WebinarAttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebinarAttendanceCreateOrConnectWithoutUserInput | WebinarAttendanceCreateOrConnectWithoutUserInput[]
    createMany?: WebinarAttendanceCreateManyUserInputEnvelope
    connect?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
  }

  export type ExecutiveCreateNestedOneWithoutReferredUsersInput = {
    create?: XOR<ExecutiveCreateWithoutReferredUsersInput, ExecutiveUncheckedCreateWithoutReferredUsersInput>
    connectOrCreate?: ExecutiveCreateOrConnectWithoutReferredUsersInput
    connect?: ExecutiveWhereUniqueInput
  }

  export type CoinTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<CoinTransactionCreateWithoutUserInput, CoinTransactionUncheckedCreateWithoutUserInput> | CoinTransactionCreateWithoutUserInput[] | CoinTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoinTransactionCreateOrConnectWithoutUserInput | CoinTransactionCreateOrConnectWithoutUserInput[]
    createMany?: CoinTransactionCreateManyUserInputEnvelope
    connect?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
  }

  export type ReferralCreateNestedManyWithoutReferredUserInput = {
    create?: XOR<ReferralCreateWithoutReferredUserInput, ReferralUncheckedCreateWithoutReferredUserInput> | ReferralCreateWithoutReferredUserInput[] | ReferralUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferredUserInput | ReferralCreateOrConnectWithoutReferredUserInput[]
    createMany?: ReferralCreateManyReferredUserInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type UserPackageCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPackageCreateWithoutUserInput, UserPackageUncheckedCreateWithoutUserInput> | UserPackageCreateWithoutUserInput[] | UserPackageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPackageCreateOrConnectWithoutUserInput | UserPackageCreateOrConnectWithoutUserInput[]
    createMany?: UserPackageCreateManyUserInputEnvelope
    connect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
  }

  export type WebinarAttendanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WebinarAttendanceCreateWithoutUserInput, WebinarAttendanceUncheckedCreateWithoutUserInput> | WebinarAttendanceCreateWithoutUserInput[] | WebinarAttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebinarAttendanceCreateOrConnectWithoutUserInput | WebinarAttendanceCreateOrConnectWithoutUserInput[]
    createMany?: WebinarAttendanceCreateManyUserInputEnvelope
    connect?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
  }

  export type CoinTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CoinTransactionCreateWithoutUserInput, CoinTransactionUncheckedCreateWithoutUserInput> | CoinTransactionCreateWithoutUserInput[] | CoinTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoinTransactionCreateOrConnectWithoutUserInput | CoinTransactionCreateOrConnectWithoutUserInput[]
    createMany?: CoinTransactionCreateManyUserInputEnvelope
    connect?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
  }

  export type ReferralUncheckedCreateNestedManyWithoutReferredUserInput = {
    create?: XOR<ReferralCreateWithoutReferredUserInput, ReferralUncheckedCreateWithoutReferredUserInput> | ReferralCreateWithoutReferredUserInput[] | ReferralUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferredUserInput | ReferralCreateOrConnectWithoutReferredUserInput[]
    createMany?: ReferralCreateManyReferredUserInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type UserPackageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPackageCreateWithoutUserInput, UserPackageUncheckedCreateWithoutUserInput> | UserPackageCreateWithoutUserInput[] | UserPackageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPackageCreateOrConnectWithoutUserInput | UserPackageCreateOrConnectWithoutUserInput[]
    createMany?: UserPackageCreateManyUserInputEnvelope
    connect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PackageUpdateOneWithoutUsersNestedInput = {
    create?: XOR<PackageCreateWithoutUsersInput, PackageUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PackageCreateOrConnectWithoutUsersInput
    upsert?: PackageUpsertWithoutUsersInput
    disconnect?: PackageWhereInput | boolean
    delete?: PackageWhereInput | boolean
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutUsersInput, PackageUpdateWithoutUsersInput>, PackageUncheckedUpdateWithoutUsersInput>
  }

  export type WebinarAttendanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<WebinarAttendanceCreateWithoutUserInput, WebinarAttendanceUncheckedCreateWithoutUserInput> | WebinarAttendanceCreateWithoutUserInput[] | WebinarAttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebinarAttendanceCreateOrConnectWithoutUserInput | WebinarAttendanceCreateOrConnectWithoutUserInput[]
    upsert?: WebinarAttendanceUpsertWithWhereUniqueWithoutUserInput | WebinarAttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WebinarAttendanceCreateManyUserInputEnvelope
    set?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
    disconnect?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
    delete?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
    connect?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
    update?: WebinarAttendanceUpdateWithWhereUniqueWithoutUserInput | WebinarAttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WebinarAttendanceUpdateManyWithWhereWithoutUserInput | WebinarAttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WebinarAttendanceScalarWhereInput | WebinarAttendanceScalarWhereInput[]
  }

  export type ExecutiveUpdateOneWithoutReferredUsersNestedInput = {
    create?: XOR<ExecutiveCreateWithoutReferredUsersInput, ExecutiveUncheckedCreateWithoutReferredUsersInput>
    connectOrCreate?: ExecutiveCreateOrConnectWithoutReferredUsersInput
    upsert?: ExecutiveUpsertWithoutReferredUsersInput
    disconnect?: ExecutiveWhereInput | boolean
    delete?: ExecutiveWhereInput | boolean
    connect?: ExecutiveWhereUniqueInput
    update?: XOR<XOR<ExecutiveUpdateToOneWithWhereWithoutReferredUsersInput, ExecutiveUpdateWithoutReferredUsersInput>, ExecutiveUncheckedUpdateWithoutReferredUsersInput>
  }

  export type CoinTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoinTransactionCreateWithoutUserInput, CoinTransactionUncheckedCreateWithoutUserInput> | CoinTransactionCreateWithoutUserInput[] | CoinTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoinTransactionCreateOrConnectWithoutUserInput | CoinTransactionCreateOrConnectWithoutUserInput[]
    upsert?: CoinTransactionUpsertWithWhereUniqueWithoutUserInput | CoinTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoinTransactionCreateManyUserInputEnvelope
    set?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    disconnect?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    delete?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    connect?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    update?: CoinTransactionUpdateWithWhereUniqueWithoutUserInput | CoinTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoinTransactionUpdateManyWithWhereWithoutUserInput | CoinTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoinTransactionScalarWhereInput | CoinTransactionScalarWhereInput[]
  }

  export type ReferralUpdateManyWithoutReferredUserNestedInput = {
    create?: XOR<ReferralCreateWithoutReferredUserInput, ReferralUncheckedCreateWithoutReferredUserInput> | ReferralCreateWithoutReferredUserInput[] | ReferralUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferredUserInput | ReferralCreateOrConnectWithoutReferredUserInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutReferredUserInput | ReferralUpsertWithWhereUniqueWithoutReferredUserInput[]
    createMany?: ReferralCreateManyReferredUserInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutReferredUserInput | ReferralUpdateWithWhereUniqueWithoutReferredUserInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutReferredUserInput | ReferralUpdateManyWithWhereWithoutReferredUserInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type UserPackageUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPackageCreateWithoutUserInput, UserPackageUncheckedCreateWithoutUserInput> | UserPackageCreateWithoutUserInput[] | UserPackageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPackageCreateOrConnectWithoutUserInput | UserPackageCreateOrConnectWithoutUserInput[]
    upsert?: UserPackageUpsertWithWhereUniqueWithoutUserInput | UserPackageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPackageCreateManyUserInputEnvelope
    set?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    disconnect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    delete?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    connect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    update?: UserPackageUpdateWithWhereUniqueWithoutUserInput | UserPackageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPackageUpdateManyWithWhereWithoutUserInput | UserPackageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPackageScalarWhereInput | UserPackageScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type WebinarAttendanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WebinarAttendanceCreateWithoutUserInput, WebinarAttendanceUncheckedCreateWithoutUserInput> | WebinarAttendanceCreateWithoutUserInput[] | WebinarAttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebinarAttendanceCreateOrConnectWithoutUserInput | WebinarAttendanceCreateOrConnectWithoutUserInput[]
    upsert?: WebinarAttendanceUpsertWithWhereUniqueWithoutUserInput | WebinarAttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WebinarAttendanceCreateManyUserInputEnvelope
    set?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
    disconnect?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
    delete?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
    connect?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
    update?: WebinarAttendanceUpdateWithWhereUniqueWithoutUserInput | WebinarAttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WebinarAttendanceUpdateManyWithWhereWithoutUserInput | WebinarAttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WebinarAttendanceScalarWhereInput | WebinarAttendanceScalarWhereInput[]
  }

  export type CoinTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoinTransactionCreateWithoutUserInput, CoinTransactionUncheckedCreateWithoutUserInput> | CoinTransactionCreateWithoutUserInput[] | CoinTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoinTransactionCreateOrConnectWithoutUserInput | CoinTransactionCreateOrConnectWithoutUserInput[]
    upsert?: CoinTransactionUpsertWithWhereUniqueWithoutUserInput | CoinTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoinTransactionCreateManyUserInputEnvelope
    set?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    disconnect?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    delete?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    connect?: CoinTransactionWhereUniqueInput | CoinTransactionWhereUniqueInput[]
    update?: CoinTransactionUpdateWithWhereUniqueWithoutUserInput | CoinTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoinTransactionUpdateManyWithWhereWithoutUserInput | CoinTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoinTransactionScalarWhereInput | CoinTransactionScalarWhereInput[]
  }

  export type ReferralUncheckedUpdateManyWithoutReferredUserNestedInput = {
    create?: XOR<ReferralCreateWithoutReferredUserInput, ReferralUncheckedCreateWithoutReferredUserInput> | ReferralCreateWithoutReferredUserInput[] | ReferralUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferredUserInput | ReferralCreateOrConnectWithoutReferredUserInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutReferredUserInput | ReferralUpsertWithWhereUniqueWithoutReferredUserInput[]
    createMany?: ReferralCreateManyReferredUserInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutReferredUserInput | ReferralUpdateWithWhereUniqueWithoutReferredUserInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutReferredUserInput | ReferralUpdateManyWithWhereWithoutReferredUserInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type UserPackageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPackageCreateWithoutUserInput, UserPackageUncheckedCreateWithoutUserInput> | UserPackageCreateWithoutUserInput[] | UserPackageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPackageCreateOrConnectWithoutUserInput | UserPackageCreateOrConnectWithoutUserInput[]
    upsert?: UserPackageUpsertWithWhereUniqueWithoutUserInput | UserPackageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPackageCreateManyUserInputEnvelope
    set?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    disconnect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    delete?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    connect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    update?: UserPackageUpdateWithWhereUniqueWithoutUserInput | UserPackageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPackageUpdateManyWithWhereWithoutUserInput | UserPackageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPackageScalarWhereInput | UserPackageScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutReferredByInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ReferralCreateNestedManyWithoutExecutiveInput = {
    create?: XOR<ReferralCreateWithoutExecutiveInput, ReferralUncheckedCreateWithoutExecutiveInput> | ReferralCreateWithoutExecutiveInput[] | ReferralUncheckedCreateWithoutExecutiveInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutExecutiveInput | ReferralCreateOrConnectWithoutExecutiveInput[]
    createMany?: ReferralCreateManyExecutiveInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutReferredByInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ReferralUncheckedCreateNestedManyWithoutExecutiveInput = {
    create?: XOR<ReferralCreateWithoutExecutiveInput, ReferralUncheckedCreateWithoutExecutiveInput> | ReferralCreateWithoutExecutiveInput[] | ReferralUncheckedCreateWithoutExecutiveInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutExecutiveInput | ReferralCreateOrConnectWithoutExecutiveInput[]
    createMany?: ReferralCreateManyExecutiveInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutReferredByNestedInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferredByInput | UserUpsertWithWhereUniqueWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferredByInput | UserUpdateWithWhereUniqueWithoutReferredByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferredByInput | UserUpdateManyWithWhereWithoutReferredByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ReferralUpdateManyWithoutExecutiveNestedInput = {
    create?: XOR<ReferralCreateWithoutExecutiveInput, ReferralUncheckedCreateWithoutExecutiveInput> | ReferralCreateWithoutExecutiveInput[] | ReferralUncheckedCreateWithoutExecutiveInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutExecutiveInput | ReferralCreateOrConnectWithoutExecutiveInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutExecutiveInput | ReferralUpsertWithWhereUniqueWithoutExecutiveInput[]
    createMany?: ReferralCreateManyExecutiveInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutExecutiveInput | ReferralUpdateWithWhereUniqueWithoutExecutiveInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutExecutiveInput | ReferralUpdateManyWithWhereWithoutExecutiveInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutReferredByNestedInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferredByInput | UserUpsertWithWhereUniqueWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferredByInput | UserUpdateWithWhereUniqueWithoutReferredByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferredByInput | UserUpdateManyWithWhereWithoutReferredByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ReferralUncheckedUpdateManyWithoutExecutiveNestedInput = {
    create?: XOR<ReferralCreateWithoutExecutiveInput, ReferralUncheckedCreateWithoutExecutiveInput> | ReferralCreateWithoutExecutiveInput[] | ReferralUncheckedCreateWithoutExecutiveInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutExecutiveInput | ReferralCreateOrConnectWithoutExecutiveInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutExecutiveInput | ReferralUpsertWithWhereUniqueWithoutExecutiveInput[]
    createMany?: ReferralCreateManyExecutiveInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutExecutiveInput | ReferralUpdateWithWhereUniqueWithoutExecutiveInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutExecutiveInput | ReferralUpdateManyWithWhereWithoutExecutiveInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutPackageInput = {
    create?: XOR<UserCreateWithoutPackageInput, UserUncheckedCreateWithoutPackageInput> | UserCreateWithoutPackageInput[] | UserUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPackageInput | UserCreateOrConnectWithoutPackageInput[]
    createMany?: UserCreateManyPackageInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type WebinarCreateNestedManyWithoutPackageInput = {
    create?: XOR<WebinarCreateWithoutPackageInput, WebinarUncheckedCreateWithoutPackageInput> | WebinarCreateWithoutPackageInput[] | WebinarUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutPackageInput | WebinarCreateOrConnectWithoutPackageInput[]
    createMany?: WebinarCreateManyPackageInputEnvelope
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
  }

  export type UserPackageCreateNestedManyWithoutPackageInput = {
    create?: XOR<UserPackageCreateWithoutPackageInput, UserPackageUncheckedCreateWithoutPackageInput> | UserPackageCreateWithoutPackageInput[] | UserPackageUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserPackageCreateOrConnectWithoutPackageInput | UserPackageCreateOrConnectWithoutPackageInput[]
    createMany?: UserPackageCreateManyPackageInputEnvelope
    connect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<UserCreateWithoutPackageInput, UserUncheckedCreateWithoutPackageInput> | UserCreateWithoutPackageInput[] | UserUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPackageInput | UserCreateOrConnectWithoutPackageInput[]
    createMany?: UserCreateManyPackageInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type WebinarUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<WebinarCreateWithoutPackageInput, WebinarUncheckedCreateWithoutPackageInput> | WebinarCreateWithoutPackageInput[] | WebinarUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutPackageInput | WebinarCreateOrConnectWithoutPackageInput[]
    createMany?: WebinarCreateManyPackageInputEnvelope
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
  }

  export type UserPackageUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<UserPackageCreateWithoutPackageInput, UserPackageUncheckedCreateWithoutPackageInput> | UserPackageCreateWithoutPackageInput[] | UserPackageUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserPackageCreateOrConnectWithoutPackageInput | UserPackageCreateOrConnectWithoutPackageInput[]
    createMany?: UserPackageCreateManyPackageInputEnvelope
    connect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutPackageNestedInput = {
    create?: XOR<UserCreateWithoutPackageInput, UserUncheckedCreateWithoutPackageInput> | UserCreateWithoutPackageInput[] | UserUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPackageInput | UserCreateOrConnectWithoutPackageInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPackageInput | UserUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: UserCreateManyPackageInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPackageInput | UserUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPackageInput | UserUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type WebinarUpdateManyWithoutPackageNestedInput = {
    create?: XOR<WebinarCreateWithoutPackageInput, WebinarUncheckedCreateWithoutPackageInput> | WebinarCreateWithoutPackageInput[] | WebinarUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutPackageInput | WebinarCreateOrConnectWithoutPackageInput[]
    upsert?: WebinarUpsertWithWhereUniqueWithoutPackageInput | WebinarUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: WebinarCreateManyPackageInputEnvelope
    set?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    disconnect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    delete?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    update?: WebinarUpdateWithWhereUniqueWithoutPackageInput | WebinarUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: WebinarUpdateManyWithWhereWithoutPackageInput | WebinarUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: WebinarScalarWhereInput | WebinarScalarWhereInput[]
  }

  export type UserPackageUpdateManyWithoutPackageNestedInput = {
    create?: XOR<UserPackageCreateWithoutPackageInput, UserPackageUncheckedCreateWithoutPackageInput> | UserPackageCreateWithoutPackageInput[] | UserPackageUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserPackageCreateOrConnectWithoutPackageInput | UserPackageCreateOrConnectWithoutPackageInput[]
    upsert?: UserPackageUpsertWithWhereUniqueWithoutPackageInput | UserPackageUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: UserPackageCreateManyPackageInputEnvelope
    set?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    disconnect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    delete?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    connect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    update?: UserPackageUpdateWithWhereUniqueWithoutPackageInput | UserPackageUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: UserPackageUpdateManyWithWhereWithoutPackageInput | UserPackageUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: UserPackageScalarWhereInput | UserPackageScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<UserCreateWithoutPackageInput, UserUncheckedCreateWithoutPackageInput> | UserCreateWithoutPackageInput[] | UserUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPackageInput | UserCreateOrConnectWithoutPackageInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPackageInput | UserUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: UserCreateManyPackageInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPackageInput | UserUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPackageInput | UserUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type WebinarUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<WebinarCreateWithoutPackageInput, WebinarUncheckedCreateWithoutPackageInput> | WebinarCreateWithoutPackageInput[] | WebinarUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: WebinarCreateOrConnectWithoutPackageInput | WebinarCreateOrConnectWithoutPackageInput[]
    upsert?: WebinarUpsertWithWhereUniqueWithoutPackageInput | WebinarUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: WebinarCreateManyPackageInputEnvelope
    set?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    disconnect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    delete?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    connect?: WebinarWhereUniqueInput | WebinarWhereUniqueInput[]
    update?: WebinarUpdateWithWhereUniqueWithoutPackageInput | WebinarUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: WebinarUpdateManyWithWhereWithoutPackageInput | WebinarUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: WebinarScalarWhereInput | WebinarScalarWhereInput[]
  }

  export type UserPackageUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<UserPackageCreateWithoutPackageInput, UserPackageUncheckedCreateWithoutPackageInput> | UserPackageCreateWithoutPackageInput[] | UserPackageUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: UserPackageCreateOrConnectWithoutPackageInput | UserPackageCreateOrConnectWithoutPackageInput[]
    upsert?: UserPackageUpsertWithWhereUniqueWithoutPackageInput | UserPackageUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: UserPackageCreateManyPackageInputEnvelope
    set?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    disconnect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    delete?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    connect?: UserPackageWhereUniqueInput | UserPackageWhereUniqueInput[]
    update?: UserPackageUpdateWithWhereUniqueWithoutPackageInput | UserPackageUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: UserPackageUpdateManyWithWhereWithoutPackageInput | UserPackageUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: UserPackageScalarWhereInput | UserPackageScalarWhereInput[]
  }

  export type PackageCreateNestedOneWithoutWebinarsInput = {
    create?: XOR<PackageCreateWithoutWebinarsInput, PackageUncheckedCreateWithoutWebinarsInput>
    connectOrCreate?: PackageCreateOrConnectWithoutWebinarsInput
    connect?: PackageWhereUniqueInput
  }

  export type WebinarAttendanceCreateNestedManyWithoutWebinarInput = {
    create?: XOR<WebinarAttendanceCreateWithoutWebinarInput, WebinarAttendanceUncheckedCreateWithoutWebinarInput> | WebinarAttendanceCreateWithoutWebinarInput[] | WebinarAttendanceUncheckedCreateWithoutWebinarInput[]
    connectOrCreate?: WebinarAttendanceCreateOrConnectWithoutWebinarInput | WebinarAttendanceCreateOrConnectWithoutWebinarInput[]
    createMany?: WebinarAttendanceCreateManyWebinarInputEnvelope
    connect?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
  }

  export type WebinarAttendanceUncheckedCreateNestedManyWithoutWebinarInput = {
    create?: XOR<WebinarAttendanceCreateWithoutWebinarInput, WebinarAttendanceUncheckedCreateWithoutWebinarInput> | WebinarAttendanceCreateWithoutWebinarInput[] | WebinarAttendanceUncheckedCreateWithoutWebinarInput[]
    connectOrCreate?: WebinarAttendanceCreateOrConnectWithoutWebinarInput | WebinarAttendanceCreateOrConnectWithoutWebinarInput[]
    createMany?: WebinarAttendanceCreateManyWebinarInputEnvelope
    connect?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
  }

  export type PackageUpdateOneRequiredWithoutWebinarsNestedInput = {
    create?: XOR<PackageCreateWithoutWebinarsInput, PackageUncheckedCreateWithoutWebinarsInput>
    connectOrCreate?: PackageCreateOrConnectWithoutWebinarsInput
    upsert?: PackageUpsertWithoutWebinarsInput
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutWebinarsInput, PackageUpdateWithoutWebinarsInput>, PackageUncheckedUpdateWithoutWebinarsInput>
  }

  export type WebinarAttendanceUpdateManyWithoutWebinarNestedInput = {
    create?: XOR<WebinarAttendanceCreateWithoutWebinarInput, WebinarAttendanceUncheckedCreateWithoutWebinarInput> | WebinarAttendanceCreateWithoutWebinarInput[] | WebinarAttendanceUncheckedCreateWithoutWebinarInput[]
    connectOrCreate?: WebinarAttendanceCreateOrConnectWithoutWebinarInput | WebinarAttendanceCreateOrConnectWithoutWebinarInput[]
    upsert?: WebinarAttendanceUpsertWithWhereUniqueWithoutWebinarInput | WebinarAttendanceUpsertWithWhereUniqueWithoutWebinarInput[]
    createMany?: WebinarAttendanceCreateManyWebinarInputEnvelope
    set?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
    disconnect?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
    delete?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
    connect?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
    update?: WebinarAttendanceUpdateWithWhereUniqueWithoutWebinarInput | WebinarAttendanceUpdateWithWhereUniqueWithoutWebinarInput[]
    updateMany?: WebinarAttendanceUpdateManyWithWhereWithoutWebinarInput | WebinarAttendanceUpdateManyWithWhereWithoutWebinarInput[]
    deleteMany?: WebinarAttendanceScalarWhereInput | WebinarAttendanceScalarWhereInput[]
  }

  export type WebinarAttendanceUncheckedUpdateManyWithoutWebinarNestedInput = {
    create?: XOR<WebinarAttendanceCreateWithoutWebinarInput, WebinarAttendanceUncheckedCreateWithoutWebinarInput> | WebinarAttendanceCreateWithoutWebinarInput[] | WebinarAttendanceUncheckedCreateWithoutWebinarInput[]
    connectOrCreate?: WebinarAttendanceCreateOrConnectWithoutWebinarInput | WebinarAttendanceCreateOrConnectWithoutWebinarInput[]
    upsert?: WebinarAttendanceUpsertWithWhereUniqueWithoutWebinarInput | WebinarAttendanceUpsertWithWhereUniqueWithoutWebinarInput[]
    createMany?: WebinarAttendanceCreateManyWebinarInputEnvelope
    set?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
    disconnect?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
    delete?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
    connect?: WebinarAttendanceWhereUniqueInput | WebinarAttendanceWhereUniqueInput[]
    update?: WebinarAttendanceUpdateWithWhereUniqueWithoutWebinarInput | WebinarAttendanceUpdateWithWhereUniqueWithoutWebinarInput[]
    updateMany?: WebinarAttendanceUpdateManyWithWhereWithoutWebinarInput | WebinarAttendanceUpdateManyWithWhereWithoutWebinarInput[]
    deleteMany?: WebinarAttendanceScalarWhereInput | WebinarAttendanceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserPackagesInput = {
    create?: XOR<UserCreateWithoutUserPackagesInput, UserUncheckedCreateWithoutUserPackagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPackagesInput
    connect?: UserWhereUniqueInput
  }

  export type PackageCreateNestedOneWithoutUserPackagesInput = {
    create?: XOR<PackageCreateWithoutUserPackagesInput, PackageUncheckedCreateWithoutUserPackagesInput>
    connectOrCreate?: PackageCreateOrConnectWithoutUserPackagesInput
    connect?: PackageWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserPackagesNestedInput = {
    create?: XOR<UserCreateWithoutUserPackagesInput, UserUncheckedCreateWithoutUserPackagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPackagesInput
    upsert?: UserUpsertWithoutUserPackagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserPackagesInput, UserUpdateWithoutUserPackagesInput>, UserUncheckedUpdateWithoutUserPackagesInput>
  }

  export type PackageUpdateOneRequiredWithoutUserPackagesNestedInput = {
    create?: XOR<PackageCreateWithoutUserPackagesInput, PackageUncheckedCreateWithoutUserPackagesInput>
    connectOrCreate?: PackageCreateOrConnectWithoutUserPackagesInput
    upsert?: PackageUpsertWithoutUserPackagesInput
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutUserPackagesInput, PackageUpdateWithoutUserPackagesInput>, PackageUncheckedUpdateWithoutUserPackagesInput>
  }

  export type UserCreateNestedOneWithoutWebinarsInput = {
    create?: XOR<UserCreateWithoutWebinarsInput, UserUncheckedCreateWithoutWebinarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWebinarsInput
    connect?: UserWhereUniqueInput
  }

  export type WebinarCreateNestedOneWithoutAttendeesInput = {
    create?: XOR<WebinarCreateWithoutAttendeesInput, WebinarUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: WebinarCreateOrConnectWithoutAttendeesInput
    connect?: WebinarWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWebinarsNestedInput = {
    create?: XOR<UserCreateWithoutWebinarsInput, UserUncheckedCreateWithoutWebinarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWebinarsInput
    upsert?: UserUpsertWithoutWebinarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWebinarsInput, UserUpdateWithoutWebinarsInput>, UserUncheckedUpdateWithoutWebinarsInput>
  }

  export type WebinarUpdateOneRequiredWithoutAttendeesNestedInput = {
    create?: XOR<WebinarCreateWithoutAttendeesInput, WebinarUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: WebinarCreateOrConnectWithoutAttendeesInput
    upsert?: WebinarUpsertWithoutAttendeesInput
    connect?: WebinarWhereUniqueInput
    update?: XOR<XOR<WebinarUpdateToOneWithWhereWithoutAttendeesInput, WebinarUpdateWithoutAttendeesInput>, WebinarUncheckedUpdateWithoutAttendeesInput>
  }

  export type ExecutiveCreateNestedOneWithoutReferralsInput = {
    create?: XOR<ExecutiveCreateWithoutReferralsInput, ExecutiveUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: ExecutiveCreateOrConnectWithoutReferralsInput
    connect?: ExecutiveWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReferralsMadeInput = {
    create?: XOR<UserCreateWithoutReferralsMadeInput, UserUncheckedCreateWithoutReferralsMadeInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsMadeInput
    connect?: UserWhereUniqueInput
  }

  export type ExecutiveUpdateOneRequiredWithoutReferralsNestedInput = {
    create?: XOR<ExecutiveCreateWithoutReferralsInput, ExecutiveUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: ExecutiveCreateOrConnectWithoutReferralsInput
    upsert?: ExecutiveUpsertWithoutReferralsInput
    connect?: ExecutiveWhereUniqueInput
    update?: XOR<XOR<ExecutiveUpdateToOneWithWhereWithoutReferralsInput, ExecutiveUpdateWithoutReferralsInput>, ExecutiveUncheckedUpdateWithoutReferralsInput>
  }

  export type UserUpdateOneRequiredWithoutReferralsMadeNestedInput = {
    create?: XOR<UserCreateWithoutReferralsMadeInput, UserUncheckedCreateWithoutReferralsMadeInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsMadeInput
    upsert?: UserUpsertWithoutReferralsMadeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralsMadeInput, UserUpdateWithoutReferralsMadeInput>, UserUncheckedUpdateWithoutReferralsMadeInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type PackageCreateWithoutUsersInput = {
    id?: string
    name: string
    priceInCoins: number
    validityDays: number
    webinars?: WebinarCreateNestedManyWithoutPackageInput
    userPackages?: UserPackageCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    priceInCoins: number
    validityDays: number
    webinars?: WebinarUncheckedCreateNestedManyWithoutPackageInput
    userPackages?: UserPackageUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutUsersInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutUsersInput, PackageUncheckedCreateWithoutUsersInput>
  }

  export type WebinarAttendanceCreateWithoutUserInput = {
    id?: string
    attendedAt?: Date | string
    webinar: WebinarCreateNestedOneWithoutAttendeesInput
  }

  export type WebinarAttendanceUncheckedCreateWithoutUserInput = {
    id?: string
    webinarId: string
    attendedAt?: Date | string
  }

  export type WebinarAttendanceCreateOrConnectWithoutUserInput = {
    where: WebinarAttendanceWhereUniqueInput
    create: XOR<WebinarAttendanceCreateWithoutUserInput, WebinarAttendanceUncheckedCreateWithoutUserInput>
  }

  export type WebinarAttendanceCreateManyUserInputEnvelope = {
    data: WebinarAttendanceCreateManyUserInput | WebinarAttendanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExecutiveCreateWithoutReferredUsersInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    isBanned?: boolean
    referralCode: string
    referrals?: ReferralCreateNestedManyWithoutExecutiveInput
  }

  export type ExecutiveUncheckedCreateWithoutReferredUsersInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    isBanned?: boolean
    referralCode: string
    referrals?: ReferralUncheckedCreateNestedManyWithoutExecutiveInput
  }

  export type ExecutiveCreateOrConnectWithoutReferredUsersInput = {
    where: ExecutiveWhereUniqueInput
    create: XOR<ExecutiveCreateWithoutReferredUsersInput, ExecutiveUncheckedCreateWithoutReferredUsersInput>
  }

  export type CoinTransactionCreateWithoutUserInput = {
    id?: string
    amount: number
    type: $Enums.TransactionType
    createdAt?: Date | string
  }

  export type CoinTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    type: $Enums.TransactionType
    createdAt?: Date | string
  }

  export type CoinTransactionCreateOrConnectWithoutUserInput = {
    where: CoinTransactionWhereUniqueInput
    create: XOR<CoinTransactionCreateWithoutUserInput, CoinTransactionUncheckedCreateWithoutUserInput>
  }

  export type CoinTransactionCreateManyUserInputEnvelope = {
    data: CoinTransactionCreateManyUserInput | CoinTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReferralCreateWithoutReferredUserInput = {
    id?: string
    referredAt?: Date | string
    executive: ExecutiveCreateNestedOneWithoutReferralsInput
  }

  export type ReferralUncheckedCreateWithoutReferredUserInput = {
    id?: string
    executiveRefode: string
    referredAt?: Date | string
  }

  export type ReferralCreateOrConnectWithoutReferredUserInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutReferredUserInput, ReferralUncheckedCreateWithoutReferredUserInput>
  }

  export type ReferralCreateManyReferredUserInputEnvelope = {
    data: ReferralCreateManyReferredUserInput | ReferralCreateManyReferredUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPackageCreateWithoutUserInput = {
    id?: string
    purchasedAt?: Date | string
    validUntil: Date | string
    isActive?: boolean
    package: PackageCreateNestedOneWithoutUserPackagesInput
  }

  export type UserPackageUncheckedCreateWithoutUserInput = {
    id?: string
    packageId: string
    purchasedAt?: Date | string
    validUntil: Date | string
    isActive?: boolean
  }

  export type UserPackageCreateOrConnectWithoutUserInput = {
    where: UserPackageWhereUniqueInput
    create: XOR<UserPackageCreateWithoutUserInput, UserPackageUncheckedCreateWithoutUserInput>
  }

  export type UserPackageCreateManyUserInputEnvelope = {
    data: UserPackageCreateManyUserInput | UserPackageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PackageUpsertWithoutUsersInput = {
    update: XOR<PackageUpdateWithoutUsersInput, PackageUncheckedUpdateWithoutUsersInput>
    create: XOR<PackageCreateWithoutUsersInput, PackageUncheckedCreateWithoutUsersInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutUsersInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutUsersInput, PackageUncheckedUpdateWithoutUsersInput>
  }

  export type PackageUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceInCoins?: IntFieldUpdateOperationsInput | number
    validityDays?: IntFieldUpdateOperationsInput | number
    webinars?: WebinarUpdateManyWithoutPackageNestedInput
    userPackages?: UserPackageUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceInCoins?: IntFieldUpdateOperationsInput | number
    validityDays?: IntFieldUpdateOperationsInput | number
    webinars?: WebinarUncheckedUpdateManyWithoutPackageNestedInput
    userPackages?: UserPackageUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type WebinarAttendanceUpsertWithWhereUniqueWithoutUserInput = {
    where: WebinarAttendanceWhereUniqueInput
    update: XOR<WebinarAttendanceUpdateWithoutUserInput, WebinarAttendanceUncheckedUpdateWithoutUserInput>
    create: XOR<WebinarAttendanceCreateWithoutUserInput, WebinarAttendanceUncheckedCreateWithoutUserInput>
  }

  export type WebinarAttendanceUpdateWithWhereUniqueWithoutUserInput = {
    where: WebinarAttendanceWhereUniqueInput
    data: XOR<WebinarAttendanceUpdateWithoutUserInput, WebinarAttendanceUncheckedUpdateWithoutUserInput>
  }

  export type WebinarAttendanceUpdateManyWithWhereWithoutUserInput = {
    where: WebinarAttendanceScalarWhereInput
    data: XOR<WebinarAttendanceUpdateManyMutationInput, WebinarAttendanceUncheckedUpdateManyWithoutUserInput>
  }

  export type WebinarAttendanceScalarWhereInput = {
    AND?: WebinarAttendanceScalarWhereInput | WebinarAttendanceScalarWhereInput[]
    OR?: WebinarAttendanceScalarWhereInput[]
    NOT?: WebinarAttendanceScalarWhereInput | WebinarAttendanceScalarWhereInput[]
    id?: StringFilter<"WebinarAttendance"> | string
    userId?: StringFilter<"WebinarAttendance"> | string
    webinarId?: StringFilter<"WebinarAttendance"> | string
    attendedAt?: DateTimeFilter<"WebinarAttendance"> | Date | string
  }

  export type ExecutiveUpsertWithoutReferredUsersInput = {
    update: XOR<ExecutiveUpdateWithoutReferredUsersInput, ExecutiveUncheckedUpdateWithoutReferredUsersInput>
    create: XOR<ExecutiveCreateWithoutReferredUsersInput, ExecutiveUncheckedCreateWithoutReferredUsersInput>
    where?: ExecutiveWhereInput
  }

  export type ExecutiveUpdateToOneWithWhereWithoutReferredUsersInput = {
    where?: ExecutiveWhereInput
    data: XOR<ExecutiveUpdateWithoutReferredUsersInput, ExecutiveUncheckedUpdateWithoutReferredUsersInput>
  }

  export type ExecutiveUpdateWithoutReferredUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
    referrals?: ReferralUpdateManyWithoutExecutiveNestedInput
  }

  export type ExecutiveUncheckedUpdateWithoutReferredUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
    referrals?: ReferralUncheckedUpdateManyWithoutExecutiveNestedInput
  }

  export type CoinTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: CoinTransactionWhereUniqueInput
    update: XOR<CoinTransactionUpdateWithoutUserInput, CoinTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<CoinTransactionCreateWithoutUserInput, CoinTransactionUncheckedCreateWithoutUserInput>
  }

  export type CoinTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: CoinTransactionWhereUniqueInput
    data: XOR<CoinTransactionUpdateWithoutUserInput, CoinTransactionUncheckedUpdateWithoutUserInput>
  }

  export type CoinTransactionUpdateManyWithWhereWithoutUserInput = {
    where: CoinTransactionScalarWhereInput
    data: XOR<CoinTransactionUpdateManyMutationInput, CoinTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type CoinTransactionScalarWhereInput = {
    AND?: CoinTransactionScalarWhereInput | CoinTransactionScalarWhereInput[]
    OR?: CoinTransactionScalarWhereInput[]
    NOT?: CoinTransactionScalarWhereInput | CoinTransactionScalarWhereInput[]
    id?: StringFilter<"CoinTransaction"> | string
    userId?: StringFilter<"CoinTransaction"> | string
    amount?: IntFilter<"CoinTransaction"> | number
    type?: EnumTransactionTypeFilter<"CoinTransaction"> | $Enums.TransactionType
    createdAt?: DateTimeFilter<"CoinTransaction"> | Date | string
  }

  export type ReferralUpsertWithWhereUniqueWithoutReferredUserInput = {
    where: ReferralWhereUniqueInput
    update: XOR<ReferralUpdateWithoutReferredUserInput, ReferralUncheckedUpdateWithoutReferredUserInput>
    create: XOR<ReferralCreateWithoutReferredUserInput, ReferralUncheckedCreateWithoutReferredUserInput>
  }

  export type ReferralUpdateWithWhereUniqueWithoutReferredUserInput = {
    where: ReferralWhereUniqueInput
    data: XOR<ReferralUpdateWithoutReferredUserInput, ReferralUncheckedUpdateWithoutReferredUserInput>
  }

  export type ReferralUpdateManyWithWhereWithoutReferredUserInput = {
    where: ReferralScalarWhereInput
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyWithoutReferredUserInput>
  }

  export type ReferralScalarWhereInput = {
    AND?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
    OR?: ReferralScalarWhereInput[]
    NOT?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
    id?: StringFilter<"Referral"> | string
    executiveRefode?: StringFilter<"Referral"> | string
    userId?: StringFilter<"Referral"> | string
    referredAt?: DateTimeFilter<"Referral"> | Date | string
  }

  export type UserPackageUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPackageWhereUniqueInput
    update: XOR<UserPackageUpdateWithoutUserInput, UserPackageUncheckedUpdateWithoutUserInput>
    create: XOR<UserPackageCreateWithoutUserInput, UserPackageUncheckedCreateWithoutUserInput>
  }

  export type UserPackageUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPackageWhereUniqueInput
    data: XOR<UserPackageUpdateWithoutUserInput, UserPackageUncheckedUpdateWithoutUserInput>
  }

  export type UserPackageUpdateManyWithWhereWithoutUserInput = {
    where: UserPackageScalarWhereInput
    data: XOR<UserPackageUpdateManyMutationInput, UserPackageUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPackageScalarWhereInput = {
    AND?: UserPackageScalarWhereInput | UserPackageScalarWhereInput[]
    OR?: UserPackageScalarWhereInput[]
    NOT?: UserPackageScalarWhereInput | UserPackageScalarWhereInput[]
    id?: StringFilter<"UserPackage"> | string
    userId?: StringFilter<"UserPackage"> | string
    packageId?: StringFilter<"UserPackage"> | string
    purchasedAt?: DateTimeFilter<"UserPackage"> | Date | string
    validUntil?: DateTimeFilter<"UserPackage"> | Date | string
    isActive?: BoolFilter<"UserPackage"> | boolean
  }

  export type UserCreateWithoutReferredByInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    role?: $Enums.Role
    coins?: number
    isBanned?: boolean
    package?: PackageCreateNestedOneWithoutUsersInput
    webinars?: WebinarAttendanceCreateNestedManyWithoutUserInput
    transactions?: CoinTransactionCreateNestedManyWithoutUserInput
    referralsMade?: ReferralCreateNestedManyWithoutReferredUserInput
    userPackages?: UserPackageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferredByInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    role?: $Enums.Role
    coins?: number
    packageId?: string | null
    isBanned?: boolean
    webinars?: WebinarAttendanceUncheckedCreateNestedManyWithoutUserInput
    transactions?: CoinTransactionUncheckedCreateNestedManyWithoutUserInput
    referralsMade?: ReferralUncheckedCreateNestedManyWithoutReferredUserInput
    userPackages?: UserPackageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferredByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput>
  }

  export type UserCreateManyReferredByInputEnvelope = {
    data: UserCreateManyReferredByInput | UserCreateManyReferredByInput[]
    skipDuplicates?: boolean
  }

  export type ReferralCreateWithoutExecutiveInput = {
    id?: string
    referredAt?: Date | string
    referredUser: UserCreateNestedOneWithoutReferralsMadeInput
  }

  export type ReferralUncheckedCreateWithoutExecutiveInput = {
    id?: string
    userId: string
    referredAt?: Date | string
  }

  export type ReferralCreateOrConnectWithoutExecutiveInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutExecutiveInput, ReferralUncheckedCreateWithoutExecutiveInput>
  }

  export type ReferralCreateManyExecutiveInputEnvelope = {
    data: ReferralCreateManyExecutiveInput | ReferralCreateManyExecutiveInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutReferredByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutReferredByInput, UserUncheckedUpdateWithoutReferredByInput>
    create: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutReferredByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutReferredByInput, UserUncheckedUpdateWithoutReferredByInput>
  }

  export type UserUpdateManyWithWhereWithoutReferredByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutReferredByInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    joinedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    coins?: IntFilter<"User"> | number
    packageId?: StringNullableFilter<"User"> | string | null
    executiveRefode?: StringNullableFilter<"User"> | string | null
    isBanned?: BoolFilter<"User"> | boolean
  }

  export type ReferralUpsertWithWhereUniqueWithoutExecutiveInput = {
    where: ReferralWhereUniqueInput
    update: XOR<ReferralUpdateWithoutExecutiveInput, ReferralUncheckedUpdateWithoutExecutiveInput>
    create: XOR<ReferralCreateWithoutExecutiveInput, ReferralUncheckedCreateWithoutExecutiveInput>
  }

  export type ReferralUpdateWithWhereUniqueWithoutExecutiveInput = {
    where: ReferralWhereUniqueInput
    data: XOR<ReferralUpdateWithoutExecutiveInput, ReferralUncheckedUpdateWithoutExecutiveInput>
  }

  export type ReferralUpdateManyWithWhereWithoutExecutiveInput = {
    where: ReferralScalarWhereInput
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyWithoutExecutiveInput>
  }

  export type UserCreateWithoutPackageInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    role?: $Enums.Role
    coins?: number
    isBanned?: boolean
    webinars?: WebinarAttendanceCreateNestedManyWithoutUserInput
    referredBy?: ExecutiveCreateNestedOneWithoutReferredUsersInput
    transactions?: CoinTransactionCreateNestedManyWithoutUserInput
    referralsMade?: ReferralCreateNestedManyWithoutReferredUserInput
    userPackages?: UserPackageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPackageInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    role?: $Enums.Role
    coins?: number
    executiveRefode?: string | null
    isBanned?: boolean
    webinars?: WebinarAttendanceUncheckedCreateNestedManyWithoutUserInput
    transactions?: CoinTransactionUncheckedCreateNestedManyWithoutUserInput
    referralsMade?: ReferralUncheckedCreateNestedManyWithoutReferredUserInput
    userPackages?: UserPackageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPackageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPackageInput, UserUncheckedCreateWithoutPackageInput>
  }

  export type UserCreateManyPackageInputEnvelope = {
    data: UserCreateManyPackageInput | UserCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type WebinarCreateWithoutPackageInput = {
    id?: string
    title: string
    date: Date | string
    zoomLink: string
    thumbnail: string
    description?: string | null
    attendees?: WebinarAttendanceCreateNestedManyWithoutWebinarInput
  }

  export type WebinarUncheckedCreateWithoutPackageInput = {
    id?: string
    title: string
    date: Date | string
    zoomLink: string
    thumbnail: string
    description?: string | null
    attendees?: WebinarAttendanceUncheckedCreateNestedManyWithoutWebinarInput
  }

  export type WebinarCreateOrConnectWithoutPackageInput = {
    where: WebinarWhereUniqueInput
    create: XOR<WebinarCreateWithoutPackageInput, WebinarUncheckedCreateWithoutPackageInput>
  }

  export type WebinarCreateManyPackageInputEnvelope = {
    data: WebinarCreateManyPackageInput | WebinarCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type UserPackageCreateWithoutPackageInput = {
    id?: string
    purchasedAt?: Date | string
    validUntil: Date | string
    isActive?: boolean
    user: UserCreateNestedOneWithoutUserPackagesInput
  }

  export type UserPackageUncheckedCreateWithoutPackageInput = {
    id?: string
    userId: string
    purchasedAt?: Date | string
    validUntil: Date | string
    isActive?: boolean
  }

  export type UserPackageCreateOrConnectWithoutPackageInput = {
    where: UserPackageWhereUniqueInput
    create: XOR<UserPackageCreateWithoutPackageInput, UserPackageUncheckedCreateWithoutPackageInput>
  }

  export type UserPackageCreateManyPackageInputEnvelope = {
    data: UserPackageCreateManyPackageInput | UserPackageCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutPackageInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPackageInput, UserUncheckedUpdateWithoutPackageInput>
    create: XOR<UserCreateWithoutPackageInput, UserUncheckedCreateWithoutPackageInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPackageInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPackageInput, UserUncheckedUpdateWithoutPackageInput>
  }

  export type UserUpdateManyWithWhereWithoutPackageInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutPackageInput>
  }

  export type WebinarUpsertWithWhereUniqueWithoutPackageInput = {
    where: WebinarWhereUniqueInput
    update: XOR<WebinarUpdateWithoutPackageInput, WebinarUncheckedUpdateWithoutPackageInput>
    create: XOR<WebinarCreateWithoutPackageInput, WebinarUncheckedCreateWithoutPackageInput>
  }

  export type WebinarUpdateWithWhereUniqueWithoutPackageInput = {
    where: WebinarWhereUniqueInput
    data: XOR<WebinarUpdateWithoutPackageInput, WebinarUncheckedUpdateWithoutPackageInput>
  }

  export type WebinarUpdateManyWithWhereWithoutPackageInput = {
    where: WebinarScalarWhereInput
    data: XOR<WebinarUpdateManyMutationInput, WebinarUncheckedUpdateManyWithoutPackageInput>
  }

  export type WebinarScalarWhereInput = {
    AND?: WebinarScalarWhereInput | WebinarScalarWhereInput[]
    OR?: WebinarScalarWhereInput[]
    NOT?: WebinarScalarWhereInput | WebinarScalarWhereInput[]
    id?: StringFilter<"Webinar"> | string
    title?: StringFilter<"Webinar"> | string
    date?: DateTimeFilter<"Webinar"> | Date | string
    zoomLink?: StringFilter<"Webinar"> | string
    thumbnail?: StringFilter<"Webinar"> | string
    packageId?: StringFilter<"Webinar"> | string
    description?: StringNullableFilter<"Webinar"> | string | null
  }

  export type UserPackageUpsertWithWhereUniqueWithoutPackageInput = {
    where: UserPackageWhereUniqueInput
    update: XOR<UserPackageUpdateWithoutPackageInput, UserPackageUncheckedUpdateWithoutPackageInput>
    create: XOR<UserPackageCreateWithoutPackageInput, UserPackageUncheckedCreateWithoutPackageInput>
  }

  export type UserPackageUpdateWithWhereUniqueWithoutPackageInput = {
    where: UserPackageWhereUniqueInput
    data: XOR<UserPackageUpdateWithoutPackageInput, UserPackageUncheckedUpdateWithoutPackageInput>
  }

  export type UserPackageUpdateManyWithWhereWithoutPackageInput = {
    where: UserPackageScalarWhereInput
    data: XOR<UserPackageUpdateManyMutationInput, UserPackageUncheckedUpdateManyWithoutPackageInput>
  }

  export type PackageCreateWithoutWebinarsInput = {
    id?: string
    name: string
    priceInCoins: number
    validityDays: number
    users?: UserCreateNestedManyWithoutPackageInput
    userPackages?: UserPackageCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutWebinarsInput = {
    id?: string
    name: string
    priceInCoins: number
    validityDays: number
    users?: UserUncheckedCreateNestedManyWithoutPackageInput
    userPackages?: UserPackageUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutWebinarsInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutWebinarsInput, PackageUncheckedCreateWithoutWebinarsInput>
  }

  export type WebinarAttendanceCreateWithoutWebinarInput = {
    id?: string
    attendedAt?: Date | string
    user: UserCreateNestedOneWithoutWebinarsInput
  }

  export type WebinarAttendanceUncheckedCreateWithoutWebinarInput = {
    id?: string
    userId: string
    attendedAt?: Date | string
  }

  export type WebinarAttendanceCreateOrConnectWithoutWebinarInput = {
    where: WebinarAttendanceWhereUniqueInput
    create: XOR<WebinarAttendanceCreateWithoutWebinarInput, WebinarAttendanceUncheckedCreateWithoutWebinarInput>
  }

  export type WebinarAttendanceCreateManyWebinarInputEnvelope = {
    data: WebinarAttendanceCreateManyWebinarInput | WebinarAttendanceCreateManyWebinarInput[]
    skipDuplicates?: boolean
  }

  export type PackageUpsertWithoutWebinarsInput = {
    update: XOR<PackageUpdateWithoutWebinarsInput, PackageUncheckedUpdateWithoutWebinarsInput>
    create: XOR<PackageCreateWithoutWebinarsInput, PackageUncheckedCreateWithoutWebinarsInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutWebinarsInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutWebinarsInput, PackageUncheckedUpdateWithoutWebinarsInput>
  }

  export type PackageUpdateWithoutWebinarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceInCoins?: IntFieldUpdateOperationsInput | number
    validityDays?: IntFieldUpdateOperationsInput | number
    users?: UserUpdateManyWithoutPackageNestedInput
    userPackages?: UserPackageUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutWebinarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceInCoins?: IntFieldUpdateOperationsInput | number
    validityDays?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutPackageNestedInput
    userPackages?: UserPackageUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type WebinarAttendanceUpsertWithWhereUniqueWithoutWebinarInput = {
    where: WebinarAttendanceWhereUniqueInput
    update: XOR<WebinarAttendanceUpdateWithoutWebinarInput, WebinarAttendanceUncheckedUpdateWithoutWebinarInput>
    create: XOR<WebinarAttendanceCreateWithoutWebinarInput, WebinarAttendanceUncheckedCreateWithoutWebinarInput>
  }

  export type WebinarAttendanceUpdateWithWhereUniqueWithoutWebinarInput = {
    where: WebinarAttendanceWhereUniqueInput
    data: XOR<WebinarAttendanceUpdateWithoutWebinarInput, WebinarAttendanceUncheckedUpdateWithoutWebinarInput>
  }

  export type WebinarAttendanceUpdateManyWithWhereWithoutWebinarInput = {
    where: WebinarAttendanceScalarWhereInput
    data: XOR<WebinarAttendanceUpdateManyMutationInput, WebinarAttendanceUncheckedUpdateManyWithoutWebinarInput>
  }

  export type UserCreateWithoutUserPackagesInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    role?: $Enums.Role
    coins?: number
    isBanned?: boolean
    package?: PackageCreateNestedOneWithoutUsersInput
    webinars?: WebinarAttendanceCreateNestedManyWithoutUserInput
    referredBy?: ExecutiveCreateNestedOneWithoutReferredUsersInput
    transactions?: CoinTransactionCreateNestedManyWithoutUserInput
    referralsMade?: ReferralCreateNestedManyWithoutReferredUserInput
  }

  export type UserUncheckedCreateWithoutUserPackagesInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    role?: $Enums.Role
    coins?: number
    packageId?: string | null
    executiveRefode?: string | null
    isBanned?: boolean
    webinars?: WebinarAttendanceUncheckedCreateNestedManyWithoutUserInput
    transactions?: CoinTransactionUncheckedCreateNestedManyWithoutUserInput
    referralsMade?: ReferralUncheckedCreateNestedManyWithoutReferredUserInput
  }

  export type UserCreateOrConnectWithoutUserPackagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPackagesInput, UserUncheckedCreateWithoutUserPackagesInput>
  }

  export type PackageCreateWithoutUserPackagesInput = {
    id?: string
    name: string
    priceInCoins: number
    validityDays: number
    users?: UserCreateNestedManyWithoutPackageInput
    webinars?: WebinarCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateWithoutUserPackagesInput = {
    id?: string
    name: string
    priceInCoins: number
    validityDays: number
    users?: UserUncheckedCreateNestedManyWithoutPackageInput
    webinars?: WebinarUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageCreateOrConnectWithoutUserPackagesInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutUserPackagesInput, PackageUncheckedCreateWithoutUserPackagesInput>
  }

  export type UserUpsertWithoutUserPackagesInput = {
    update: XOR<UserUpdateWithoutUserPackagesInput, UserUncheckedUpdateWithoutUserPackagesInput>
    create: XOR<UserCreateWithoutUserPackagesInput, UserUncheckedCreateWithoutUserPackagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserPackagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserPackagesInput, UserUncheckedUpdateWithoutUserPackagesInput>
  }

  export type UserUpdateWithoutUserPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    coins?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    package?: PackageUpdateOneWithoutUsersNestedInput
    webinars?: WebinarAttendanceUpdateManyWithoutUserNestedInput
    referredBy?: ExecutiveUpdateOneWithoutReferredUsersNestedInput
    transactions?: CoinTransactionUpdateManyWithoutUserNestedInput
    referralsMade?: ReferralUpdateManyWithoutReferredUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    coins?: IntFieldUpdateOperationsInput | number
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    executiveRefode?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    webinars?: WebinarAttendanceUncheckedUpdateManyWithoutUserNestedInput
    transactions?: CoinTransactionUncheckedUpdateManyWithoutUserNestedInput
    referralsMade?: ReferralUncheckedUpdateManyWithoutReferredUserNestedInput
  }

  export type PackageUpsertWithoutUserPackagesInput = {
    update: XOR<PackageUpdateWithoutUserPackagesInput, PackageUncheckedUpdateWithoutUserPackagesInput>
    create: XOR<PackageCreateWithoutUserPackagesInput, PackageUncheckedCreateWithoutUserPackagesInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutUserPackagesInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutUserPackagesInput, PackageUncheckedUpdateWithoutUserPackagesInput>
  }

  export type PackageUpdateWithoutUserPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceInCoins?: IntFieldUpdateOperationsInput | number
    validityDays?: IntFieldUpdateOperationsInput | number
    users?: UserUpdateManyWithoutPackageNestedInput
    webinars?: WebinarUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateWithoutUserPackagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceInCoins?: IntFieldUpdateOperationsInput | number
    validityDays?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutPackageNestedInput
    webinars?: WebinarUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type UserCreateWithoutWebinarsInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    role?: $Enums.Role
    coins?: number
    isBanned?: boolean
    package?: PackageCreateNestedOneWithoutUsersInput
    referredBy?: ExecutiveCreateNestedOneWithoutReferredUsersInput
    transactions?: CoinTransactionCreateNestedManyWithoutUserInput
    referralsMade?: ReferralCreateNestedManyWithoutReferredUserInput
    userPackages?: UserPackageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWebinarsInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    role?: $Enums.Role
    coins?: number
    packageId?: string | null
    executiveRefode?: string | null
    isBanned?: boolean
    transactions?: CoinTransactionUncheckedCreateNestedManyWithoutUserInput
    referralsMade?: ReferralUncheckedCreateNestedManyWithoutReferredUserInput
    userPackages?: UserPackageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWebinarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWebinarsInput, UserUncheckedCreateWithoutWebinarsInput>
  }

  export type WebinarCreateWithoutAttendeesInput = {
    id?: string
    title: string
    date: Date | string
    zoomLink: string
    thumbnail: string
    description?: string | null
    package: PackageCreateNestedOneWithoutWebinarsInput
  }

  export type WebinarUncheckedCreateWithoutAttendeesInput = {
    id?: string
    title: string
    date: Date | string
    zoomLink: string
    thumbnail: string
    packageId: string
    description?: string | null
  }

  export type WebinarCreateOrConnectWithoutAttendeesInput = {
    where: WebinarWhereUniqueInput
    create: XOR<WebinarCreateWithoutAttendeesInput, WebinarUncheckedCreateWithoutAttendeesInput>
  }

  export type UserUpsertWithoutWebinarsInput = {
    update: XOR<UserUpdateWithoutWebinarsInput, UserUncheckedUpdateWithoutWebinarsInput>
    create: XOR<UserCreateWithoutWebinarsInput, UserUncheckedCreateWithoutWebinarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWebinarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWebinarsInput, UserUncheckedUpdateWithoutWebinarsInput>
  }

  export type UserUpdateWithoutWebinarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    coins?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    package?: PackageUpdateOneWithoutUsersNestedInput
    referredBy?: ExecutiveUpdateOneWithoutReferredUsersNestedInput
    transactions?: CoinTransactionUpdateManyWithoutUserNestedInput
    referralsMade?: ReferralUpdateManyWithoutReferredUserNestedInput
    userPackages?: UserPackageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWebinarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    coins?: IntFieldUpdateOperationsInput | number
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    executiveRefode?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    transactions?: CoinTransactionUncheckedUpdateManyWithoutUserNestedInput
    referralsMade?: ReferralUncheckedUpdateManyWithoutReferredUserNestedInput
    userPackages?: UserPackageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WebinarUpsertWithoutAttendeesInput = {
    update: XOR<WebinarUpdateWithoutAttendeesInput, WebinarUncheckedUpdateWithoutAttendeesInput>
    create: XOR<WebinarCreateWithoutAttendeesInput, WebinarUncheckedCreateWithoutAttendeesInput>
    where?: WebinarWhereInput
  }

  export type WebinarUpdateToOneWithWhereWithoutAttendeesInput = {
    where?: WebinarWhereInput
    data: XOR<WebinarUpdateWithoutAttendeesInput, WebinarUncheckedUpdateWithoutAttendeesInput>
  }

  export type WebinarUpdateWithoutAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    zoomLink?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    package?: PackageUpdateOneRequiredWithoutWebinarsNestedInput
  }

  export type WebinarUncheckedUpdateWithoutAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    zoomLink?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExecutiveCreateWithoutReferralsInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    isBanned?: boolean
    referralCode: string
    referredUsers?: UserCreateNestedManyWithoutReferredByInput
  }

  export type ExecutiveUncheckedCreateWithoutReferralsInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    isBanned?: boolean
    referralCode: string
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferredByInput
  }

  export type ExecutiveCreateOrConnectWithoutReferralsInput = {
    where: ExecutiveWhereUniqueInput
    create: XOR<ExecutiveCreateWithoutReferralsInput, ExecutiveUncheckedCreateWithoutReferralsInput>
  }

  export type UserCreateWithoutReferralsMadeInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    role?: $Enums.Role
    coins?: number
    isBanned?: boolean
    package?: PackageCreateNestedOneWithoutUsersInput
    webinars?: WebinarAttendanceCreateNestedManyWithoutUserInput
    referredBy?: ExecutiveCreateNestedOneWithoutReferredUsersInput
    transactions?: CoinTransactionCreateNestedManyWithoutUserInput
    userPackages?: UserPackageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferralsMadeInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    role?: $Enums.Role
    coins?: number
    packageId?: string | null
    executiveRefode?: string | null
    isBanned?: boolean
    webinars?: WebinarAttendanceUncheckedCreateNestedManyWithoutUserInput
    transactions?: CoinTransactionUncheckedCreateNestedManyWithoutUserInput
    userPackages?: UserPackageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferralsMadeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralsMadeInput, UserUncheckedCreateWithoutReferralsMadeInput>
  }

  export type ExecutiveUpsertWithoutReferralsInput = {
    update: XOR<ExecutiveUpdateWithoutReferralsInput, ExecutiveUncheckedUpdateWithoutReferralsInput>
    create: XOR<ExecutiveCreateWithoutReferralsInput, ExecutiveUncheckedCreateWithoutReferralsInput>
    where?: ExecutiveWhereInput
  }

  export type ExecutiveUpdateToOneWithWhereWithoutReferralsInput = {
    where?: ExecutiveWhereInput
    data: XOR<ExecutiveUpdateWithoutReferralsInput, ExecutiveUncheckedUpdateWithoutReferralsInput>
  }

  export type ExecutiveUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
    referredUsers?: UserUpdateManyWithoutReferredByNestedInput
  }

  export type ExecutiveUncheckedUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    referralCode?: StringFieldUpdateOperationsInput | string
    referredUsers?: UserUncheckedUpdateManyWithoutReferredByNestedInput
  }

  export type UserUpsertWithoutReferralsMadeInput = {
    update: XOR<UserUpdateWithoutReferralsMadeInput, UserUncheckedUpdateWithoutReferralsMadeInput>
    create: XOR<UserCreateWithoutReferralsMadeInput, UserUncheckedCreateWithoutReferralsMadeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralsMadeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralsMadeInput, UserUncheckedUpdateWithoutReferralsMadeInput>
  }

  export type UserUpdateWithoutReferralsMadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    coins?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    package?: PackageUpdateOneWithoutUsersNestedInput
    webinars?: WebinarAttendanceUpdateManyWithoutUserNestedInput
    referredBy?: ExecutiveUpdateOneWithoutReferredUsersNestedInput
    transactions?: CoinTransactionUpdateManyWithoutUserNestedInput
    userPackages?: UserPackageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralsMadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    coins?: IntFieldUpdateOperationsInput | number
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    executiveRefode?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    webinars?: WebinarAttendanceUncheckedUpdateManyWithoutUserNestedInput
    transactions?: CoinTransactionUncheckedUpdateManyWithoutUserNestedInput
    userPackages?: UserPackageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    role?: $Enums.Role
    coins?: number
    isBanned?: boolean
    package?: PackageCreateNestedOneWithoutUsersInput
    webinars?: WebinarAttendanceCreateNestedManyWithoutUserInput
    referredBy?: ExecutiveCreateNestedOneWithoutReferredUsersInput
    referralsMade?: ReferralCreateNestedManyWithoutReferredUserInput
    userPackages?: UserPackageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    role?: $Enums.Role
    coins?: number
    packageId?: string | null
    executiveRefode?: string | null
    isBanned?: boolean
    webinars?: WebinarAttendanceUncheckedCreateNestedManyWithoutUserInput
    referralsMade?: ReferralUncheckedCreateNestedManyWithoutReferredUserInput
    userPackages?: UserPackageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    coins?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    package?: PackageUpdateOneWithoutUsersNestedInput
    webinars?: WebinarAttendanceUpdateManyWithoutUserNestedInput
    referredBy?: ExecutiveUpdateOneWithoutReferredUsersNestedInput
    referralsMade?: ReferralUpdateManyWithoutReferredUserNestedInput
    userPackages?: UserPackageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    coins?: IntFieldUpdateOperationsInput | number
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    executiveRefode?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    webinars?: WebinarAttendanceUncheckedUpdateManyWithoutUserNestedInput
    referralsMade?: ReferralUncheckedUpdateManyWithoutReferredUserNestedInput
    userPackages?: UserPackageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WebinarAttendanceCreateManyUserInput = {
    id?: string
    webinarId: string
    attendedAt?: Date | string
  }

  export type CoinTransactionCreateManyUserInput = {
    id?: string
    amount: number
    type: $Enums.TransactionType
    createdAt?: Date | string
  }

  export type ReferralCreateManyReferredUserInput = {
    id?: string
    executiveRefode: string
    referredAt?: Date | string
  }

  export type UserPackageCreateManyUserInput = {
    id?: string
    packageId: string
    purchasedAt?: Date | string
    validUntil: Date | string
    isActive?: boolean
  }

  export type WebinarAttendanceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    webinar?: WebinarUpdateOneRequiredWithoutAttendeesNestedInput
  }

  export type WebinarAttendanceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    webinarId?: StringFieldUpdateOperationsInput | string
    attendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebinarAttendanceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    webinarId?: StringFieldUpdateOperationsInput | string
    attendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUpdateWithoutReferredUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executive?: ExecutiveUpdateOneRequiredWithoutReferralsNestedInput
  }

  export type ReferralUncheckedUpdateWithoutReferredUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    executiveRefode?: StringFieldUpdateOperationsInput | string
    referredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateManyWithoutReferredUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    executiveRefode?: StringFieldUpdateOperationsInput | string
    referredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPackageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    package?: PackageUpdateOneRequiredWithoutUserPackagesNestedInput
  }

  export type UserPackageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPackageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    packageId?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateManyReferredByInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    role?: $Enums.Role
    coins?: number
    packageId?: string | null
    isBanned?: boolean
  }

  export type ReferralCreateManyExecutiveInput = {
    id?: string
    userId: string
    referredAt?: Date | string
  }

  export type UserUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    coins?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    package?: PackageUpdateOneWithoutUsersNestedInput
    webinars?: WebinarAttendanceUpdateManyWithoutUserNestedInput
    transactions?: CoinTransactionUpdateManyWithoutUserNestedInput
    referralsMade?: ReferralUpdateManyWithoutReferredUserNestedInput
    userPackages?: UserPackageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    coins?: IntFieldUpdateOperationsInput | number
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    webinars?: WebinarAttendanceUncheckedUpdateManyWithoutUserNestedInput
    transactions?: CoinTransactionUncheckedUpdateManyWithoutUserNestedInput
    referralsMade?: ReferralUncheckedUpdateManyWithoutReferredUserNestedInput
    userPackages?: UserPackageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    coins?: IntFieldUpdateOperationsInput | number
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReferralUpdateWithoutExecutiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredUser?: UserUpdateOneRequiredWithoutReferralsMadeNestedInput
  }

  export type ReferralUncheckedUpdateWithoutExecutiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    referredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateManyWithoutExecutiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    referredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyPackageInput = {
    id?: string
    name: string
    email: string
    password: string
    joinedAt?: Date | string
    role?: $Enums.Role
    coins?: number
    executiveRefode?: string | null
    isBanned?: boolean
  }

  export type WebinarCreateManyPackageInput = {
    id?: string
    title: string
    date: Date | string
    zoomLink: string
    thumbnail: string
    description?: string | null
  }

  export type UserPackageCreateManyPackageInput = {
    id?: string
    userId: string
    purchasedAt?: Date | string
    validUntil: Date | string
    isActive?: boolean
  }

  export type UserUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    coins?: IntFieldUpdateOperationsInput | number
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    webinars?: WebinarAttendanceUpdateManyWithoutUserNestedInput
    referredBy?: ExecutiveUpdateOneWithoutReferredUsersNestedInput
    transactions?: CoinTransactionUpdateManyWithoutUserNestedInput
    referralsMade?: ReferralUpdateManyWithoutReferredUserNestedInput
    userPackages?: UserPackageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    coins?: IntFieldUpdateOperationsInput | number
    executiveRefode?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    webinars?: WebinarAttendanceUncheckedUpdateManyWithoutUserNestedInput
    transactions?: CoinTransactionUncheckedUpdateManyWithoutUserNestedInput
    referralsMade?: ReferralUncheckedUpdateManyWithoutReferredUserNestedInput
    userPackages?: UserPackageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    coins?: IntFieldUpdateOperationsInput | number
    executiveRefode?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WebinarUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    zoomLink?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: WebinarAttendanceUpdateManyWithoutWebinarNestedInput
  }

  export type WebinarUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    zoomLink?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: WebinarAttendanceUncheckedUpdateManyWithoutWebinarNestedInput
  }

  export type WebinarUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    zoomLink?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPackageUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserPackagesNestedInput
  }

  export type UserPackageUncheckedUpdateWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPackageUncheckedUpdateManyWithoutPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WebinarAttendanceCreateManyWebinarInput = {
    id?: string
    userId: string
    attendedAt?: Date | string
  }

  export type WebinarAttendanceUpdateWithoutWebinarInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWebinarsNestedInput
  }

  export type WebinarAttendanceUncheckedUpdateWithoutWebinarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebinarAttendanceUncheckedUpdateManyWithoutWebinarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attendedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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