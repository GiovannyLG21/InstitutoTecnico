
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
 * Model Constancys
 * 
 */
export type Constancys = $Result.DefaultSelection<Prisma.$ConstancysPayload>
/**
 * Model Certificates
 * 
 */
export type Certificates = $Result.DefaultSelection<Prisma.$CertificatesPayload>
/**
 * Model Appointments
 * 
 */
export type Appointments = $Result.DefaultSelection<Prisma.$AppointmentsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Constancys
 * const constancys = await prisma.constancys.findMany()
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
   * // Fetch zero or more Constancys
   * const constancys = await prisma.constancys.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.constancys`: Exposes CRUD operations for the **Constancys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Constancys
    * const constancys = await prisma.constancys.findMany()
    * ```
    */
  get constancys(): Prisma.ConstancysDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificates`: Exposes CRUD operations for the **Certificates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificates
    * const certificates = await prisma.certificates.findMany()
    * ```
    */
  get certificates(): Prisma.CertificatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointments`: Exposes CRUD operations for the **Appointments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointments.findMany()
    * ```
    */
  get appointments(): Prisma.AppointmentsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    Constancys: 'Constancys',
    Certificates: 'Certificates',
    Appointments: 'Appointments'
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
      modelProps: "constancys" | "certificates" | "appointments"
      txIsolationLevel: never
    }
    model: {
      Constancys: {
        payload: Prisma.$ConstancysPayload<ExtArgs>
        fields: Prisma.ConstancysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConstancysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstancysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConstancysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstancysPayload>
          }
          findFirst: {
            args: Prisma.ConstancysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstancysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConstancysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstancysPayload>
          }
          findMany: {
            args: Prisma.ConstancysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstancysPayload>[]
          }
          create: {
            args: Prisma.ConstancysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstancysPayload>
          }
          createMany: {
            args: Prisma.ConstancysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConstancysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstancysPayload>
          }
          update: {
            args: Prisma.ConstancysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstancysPayload>
          }
          deleteMany: {
            args: Prisma.ConstancysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConstancysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConstancysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstancysPayload>
          }
          aggregate: {
            args: Prisma.ConstancysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConstancys>
          }
          groupBy: {
            args: Prisma.ConstancysGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConstancysGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ConstancysFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ConstancysAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ConstancysCountArgs<ExtArgs>
            result: $Utils.Optional<ConstancysCountAggregateOutputType> | number
          }
        }
      }
      Certificates: {
        payload: Prisma.$CertificatesPayload<ExtArgs>
        fields: Prisma.CertificatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatesPayload>
          }
          findFirst: {
            args: Prisma.CertificatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatesPayload>
          }
          findMany: {
            args: Prisma.CertificatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatesPayload>[]
          }
          create: {
            args: Prisma.CertificatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatesPayload>
          }
          createMany: {
            args: Prisma.CertificatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CertificatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatesPayload>
          }
          update: {
            args: Prisma.CertificatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatesPayload>
          }
          deleteMany: {
            args: Prisma.CertificatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CertificatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatesPayload>
          }
          aggregate: {
            args: Prisma.CertificatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificates>
          }
          groupBy: {
            args: Prisma.CertificatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificatesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CertificatesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CertificatesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CertificatesCountArgs<ExtArgs>
            result: $Utils.Optional<CertificatesCountAggregateOutputType> | number
          }
        }
      }
      Appointments: {
        payload: Prisma.$AppointmentsPayload<ExtArgs>
        fields: Prisma.AppointmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          findFirst: {
            args: Prisma.AppointmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          findMany: {
            args: Prisma.AppointmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>[]
          }
          create: {
            args: Prisma.AppointmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          createMany: {
            args: Prisma.AppointmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppointmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          update: {
            args: Prisma.AppointmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppointmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          aggregate: {
            args: Prisma.AppointmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointments>
          }
          groupBy: {
            args: Prisma.AppointmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AppointmentsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AppointmentsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AppointmentsCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    constancys?: ConstancysOmit
    certificates?: CertificatesOmit
    appointments?: AppointmentsOmit
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
   * Models
   */

  /**
   * Model Constancys
   */

  export type AggregateConstancys = {
    _count: ConstancysCountAggregateOutputType | null
    _min: ConstancysMinAggregateOutputType | null
    _max: ConstancysMaxAggregateOutputType | null
  }

  export type ConstancysMinAggregateOutputType = {
    id: string | null
    names: string | null
    document: string | null
    documentType: string | null
    phone: string | null
    email: string | null
    constancyType: string | null
    requestReason: string | null
  }

  export type ConstancysMaxAggregateOutputType = {
    id: string | null
    names: string | null
    document: string | null
    documentType: string | null
    phone: string | null
    email: string | null
    constancyType: string | null
    requestReason: string | null
  }

  export type ConstancysCountAggregateOutputType = {
    id: number
    names: number
    document: number
    documentType: number
    phone: number
    email: number
    constancyType: number
    requestReason: number
    _all: number
  }


  export type ConstancysMinAggregateInputType = {
    id?: true
    names?: true
    document?: true
    documentType?: true
    phone?: true
    email?: true
    constancyType?: true
    requestReason?: true
  }

  export type ConstancysMaxAggregateInputType = {
    id?: true
    names?: true
    document?: true
    documentType?: true
    phone?: true
    email?: true
    constancyType?: true
    requestReason?: true
  }

  export type ConstancysCountAggregateInputType = {
    id?: true
    names?: true
    document?: true
    documentType?: true
    phone?: true
    email?: true
    constancyType?: true
    requestReason?: true
    _all?: true
  }

  export type ConstancysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Constancys to aggregate.
     */
    where?: ConstancysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constancys to fetch.
     */
    orderBy?: ConstancysOrderByWithRelationInput | ConstancysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConstancysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constancys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constancys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Constancys
    **/
    _count?: true | ConstancysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConstancysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConstancysMaxAggregateInputType
  }

  export type GetConstancysAggregateType<T extends ConstancysAggregateArgs> = {
        [P in keyof T & keyof AggregateConstancys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConstancys[P]>
      : GetScalarType<T[P], AggregateConstancys[P]>
  }




  export type ConstancysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConstancysWhereInput
    orderBy?: ConstancysOrderByWithAggregationInput | ConstancysOrderByWithAggregationInput[]
    by: ConstancysScalarFieldEnum[] | ConstancysScalarFieldEnum
    having?: ConstancysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConstancysCountAggregateInputType | true
    _min?: ConstancysMinAggregateInputType
    _max?: ConstancysMaxAggregateInputType
  }

  export type ConstancysGroupByOutputType = {
    id: string
    names: string
    document: string
    documentType: string
    phone: string
    email: string
    constancyType: string
    requestReason: string
    _count: ConstancysCountAggregateOutputType | null
    _min: ConstancysMinAggregateOutputType | null
    _max: ConstancysMaxAggregateOutputType | null
  }

  type GetConstancysGroupByPayload<T extends ConstancysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConstancysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConstancysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConstancysGroupByOutputType[P]>
            : GetScalarType<T[P], ConstancysGroupByOutputType[P]>
        }
      >
    >


  export type ConstancysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    names?: boolean
    document?: boolean
    documentType?: boolean
    phone?: boolean
    email?: boolean
    constancyType?: boolean
    requestReason?: boolean
  }, ExtArgs["result"]["constancys"]>



  export type ConstancysSelectScalar = {
    id?: boolean
    names?: boolean
    document?: boolean
    documentType?: boolean
    phone?: boolean
    email?: boolean
    constancyType?: boolean
    requestReason?: boolean
  }

  export type ConstancysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "names" | "document" | "documentType" | "phone" | "email" | "constancyType" | "requestReason", ExtArgs["result"]["constancys"]>

  export type $ConstancysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Constancys"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      names: string
      document: string
      documentType: string
      phone: string
      email: string
      constancyType: string
      requestReason: string
    }, ExtArgs["result"]["constancys"]>
    composites: {}
  }

  type ConstancysGetPayload<S extends boolean | null | undefined | ConstancysDefaultArgs> = $Result.GetResult<Prisma.$ConstancysPayload, S>

  type ConstancysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConstancysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConstancysCountAggregateInputType | true
    }

  export interface ConstancysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Constancys'], meta: { name: 'Constancys' } }
    /**
     * Find zero or one Constancys that matches the filter.
     * @param {ConstancysFindUniqueArgs} args - Arguments to find a Constancys
     * @example
     * // Get one Constancys
     * const constancys = await prisma.constancys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConstancysFindUniqueArgs>(args: SelectSubset<T, ConstancysFindUniqueArgs<ExtArgs>>): Prisma__ConstancysClient<$Result.GetResult<Prisma.$ConstancysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Constancys that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConstancysFindUniqueOrThrowArgs} args - Arguments to find a Constancys
     * @example
     * // Get one Constancys
     * const constancys = await prisma.constancys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConstancysFindUniqueOrThrowArgs>(args: SelectSubset<T, ConstancysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConstancysClient<$Result.GetResult<Prisma.$ConstancysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Constancys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstancysFindFirstArgs} args - Arguments to find a Constancys
     * @example
     * // Get one Constancys
     * const constancys = await prisma.constancys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConstancysFindFirstArgs>(args?: SelectSubset<T, ConstancysFindFirstArgs<ExtArgs>>): Prisma__ConstancysClient<$Result.GetResult<Prisma.$ConstancysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Constancys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstancysFindFirstOrThrowArgs} args - Arguments to find a Constancys
     * @example
     * // Get one Constancys
     * const constancys = await prisma.constancys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConstancysFindFirstOrThrowArgs>(args?: SelectSubset<T, ConstancysFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConstancysClient<$Result.GetResult<Prisma.$ConstancysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Constancys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstancysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Constancys
     * const constancys = await prisma.constancys.findMany()
     * 
     * // Get first 10 Constancys
     * const constancys = await prisma.constancys.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const constancysWithIdOnly = await prisma.constancys.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConstancysFindManyArgs>(args?: SelectSubset<T, ConstancysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstancysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Constancys.
     * @param {ConstancysCreateArgs} args - Arguments to create a Constancys.
     * @example
     * // Create one Constancys
     * const Constancys = await prisma.constancys.create({
     *   data: {
     *     // ... data to create a Constancys
     *   }
     * })
     * 
     */
    create<T extends ConstancysCreateArgs>(args: SelectSubset<T, ConstancysCreateArgs<ExtArgs>>): Prisma__ConstancysClient<$Result.GetResult<Prisma.$ConstancysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Constancys.
     * @param {ConstancysCreateManyArgs} args - Arguments to create many Constancys.
     * @example
     * // Create many Constancys
     * const constancys = await prisma.constancys.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConstancysCreateManyArgs>(args?: SelectSubset<T, ConstancysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Constancys.
     * @param {ConstancysDeleteArgs} args - Arguments to delete one Constancys.
     * @example
     * // Delete one Constancys
     * const Constancys = await prisma.constancys.delete({
     *   where: {
     *     // ... filter to delete one Constancys
     *   }
     * })
     * 
     */
    delete<T extends ConstancysDeleteArgs>(args: SelectSubset<T, ConstancysDeleteArgs<ExtArgs>>): Prisma__ConstancysClient<$Result.GetResult<Prisma.$ConstancysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Constancys.
     * @param {ConstancysUpdateArgs} args - Arguments to update one Constancys.
     * @example
     * // Update one Constancys
     * const constancys = await prisma.constancys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConstancysUpdateArgs>(args: SelectSubset<T, ConstancysUpdateArgs<ExtArgs>>): Prisma__ConstancysClient<$Result.GetResult<Prisma.$ConstancysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Constancys.
     * @param {ConstancysDeleteManyArgs} args - Arguments to filter Constancys to delete.
     * @example
     * // Delete a few Constancys
     * const { count } = await prisma.constancys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConstancysDeleteManyArgs>(args?: SelectSubset<T, ConstancysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Constancys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstancysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Constancys
     * const constancys = await prisma.constancys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConstancysUpdateManyArgs>(args: SelectSubset<T, ConstancysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Constancys.
     * @param {ConstancysUpsertArgs} args - Arguments to update or create a Constancys.
     * @example
     * // Update or create a Constancys
     * const constancys = await prisma.constancys.upsert({
     *   create: {
     *     // ... data to create a Constancys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Constancys we want to update
     *   }
     * })
     */
    upsert<T extends ConstancysUpsertArgs>(args: SelectSubset<T, ConstancysUpsertArgs<ExtArgs>>): Prisma__ConstancysClient<$Result.GetResult<Prisma.$ConstancysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Constancys that matches the filter.
     * @param {ConstancysFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const constancys = await prisma.constancys.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ConstancysFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Constancys.
     * @param {ConstancysAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const constancys = await prisma.constancys.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ConstancysAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Constancys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstancysCountArgs} args - Arguments to filter Constancys to count.
     * @example
     * // Count the number of Constancys
     * const count = await prisma.constancys.count({
     *   where: {
     *     // ... the filter for the Constancys we want to count
     *   }
     * })
    **/
    count<T extends ConstancysCountArgs>(
      args?: Subset<T, ConstancysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConstancysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Constancys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstancysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConstancysAggregateArgs>(args: Subset<T, ConstancysAggregateArgs>): Prisma.PrismaPromise<GetConstancysAggregateType<T>>

    /**
     * Group by Constancys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstancysGroupByArgs} args - Group by arguments.
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
      T extends ConstancysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConstancysGroupByArgs['orderBy'] }
        : { orderBy?: ConstancysGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConstancysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConstancysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Constancys model
   */
  readonly fields: ConstancysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Constancys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConstancysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Constancys model
   */
  interface ConstancysFieldRefs {
    readonly id: FieldRef<"Constancys", 'String'>
    readonly names: FieldRef<"Constancys", 'String'>
    readonly document: FieldRef<"Constancys", 'String'>
    readonly documentType: FieldRef<"Constancys", 'String'>
    readonly phone: FieldRef<"Constancys", 'String'>
    readonly email: FieldRef<"Constancys", 'String'>
    readonly constancyType: FieldRef<"Constancys", 'String'>
    readonly requestReason: FieldRef<"Constancys", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Constancys findUnique
   */
  export type ConstancysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constancys
     */
    select?: ConstancysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constancys
     */
    omit?: ConstancysOmit<ExtArgs> | null
    /**
     * Filter, which Constancys to fetch.
     */
    where: ConstancysWhereUniqueInput
  }

  /**
   * Constancys findUniqueOrThrow
   */
  export type ConstancysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constancys
     */
    select?: ConstancysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constancys
     */
    omit?: ConstancysOmit<ExtArgs> | null
    /**
     * Filter, which Constancys to fetch.
     */
    where: ConstancysWhereUniqueInput
  }

  /**
   * Constancys findFirst
   */
  export type ConstancysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constancys
     */
    select?: ConstancysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constancys
     */
    omit?: ConstancysOmit<ExtArgs> | null
    /**
     * Filter, which Constancys to fetch.
     */
    where?: ConstancysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constancys to fetch.
     */
    orderBy?: ConstancysOrderByWithRelationInput | ConstancysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Constancys.
     */
    cursor?: ConstancysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constancys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constancys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Constancys.
     */
    distinct?: ConstancysScalarFieldEnum | ConstancysScalarFieldEnum[]
  }

  /**
   * Constancys findFirstOrThrow
   */
  export type ConstancysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constancys
     */
    select?: ConstancysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constancys
     */
    omit?: ConstancysOmit<ExtArgs> | null
    /**
     * Filter, which Constancys to fetch.
     */
    where?: ConstancysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constancys to fetch.
     */
    orderBy?: ConstancysOrderByWithRelationInput | ConstancysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Constancys.
     */
    cursor?: ConstancysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constancys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constancys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Constancys.
     */
    distinct?: ConstancysScalarFieldEnum | ConstancysScalarFieldEnum[]
  }

  /**
   * Constancys findMany
   */
  export type ConstancysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constancys
     */
    select?: ConstancysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constancys
     */
    omit?: ConstancysOmit<ExtArgs> | null
    /**
     * Filter, which Constancys to fetch.
     */
    where?: ConstancysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constancys to fetch.
     */
    orderBy?: ConstancysOrderByWithRelationInput | ConstancysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Constancys.
     */
    cursor?: ConstancysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constancys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constancys.
     */
    skip?: number
    distinct?: ConstancysScalarFieldEnum | ConstancysScalarFieldEnum[]
  }

  /**
   * Constancys create
   */
  export type ConstancysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constancys
     */
    select?: ConstancysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constancys
     */
    omit?: ConstancysOmit<ExtArgs> | null
    /**
     * The data needed to create a Constancys.
     */
    data: XOR<ConstancysCreateInput, ConstancysUncheckedCreateInput>
  }

  /**
   * Constancys createMany
   */
  export type ConstancysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Constancys.
     */
    data: ConstancysCreateManyInput | ConstancysCreateManyInput[]
  }

  /**
   * Constancys update
   */
  export type ConstancysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constancys
     */
    select?: ConstancysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constancys
     */
    omit?: ConstancysOmit<ExtArgs> | null
    /**
     * The data needed to update a Constancys.
     */
    data: XOR<ConstancysUpdateInput, ConstancysUncheckedUpdateInput>
    /**
     * Choose, which Constancys to update.
     */
    where: ConstancysWhereUniqueInput
  }

  /**
   * Constancys updateMany
   */
  export type ConstancysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Constancys.
     */
    data: XOR<ConstancysUpdateManyMutationInput, ConstancysUncheckedUpdateManyInput>
    /**
     * Filter which Constancys to update
     */
    where?: ConstancysWhereInput
    /**
     * Limit how many Constancys to update.
     */
    limit?: number
  }

  /**
   * Constancys upsert
   */
  export type ConstancysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constancys
     */
    select?: ConstancysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constancys
     */
    omit?: ConstancysOmit<ExtArgs> | null
    /**
     * The filter to search for the Constancys to update in case it exists.
     */
    where: ConstancysWhereUniqueInput
    /**
     * In case the Constancys found by the `where` argument doesn't exist, create a new Constancys with this data.
     */
    create: XOR<ConstancysCreateInput, ConstancysUncheckedCreateInput>
    /**
     * In case the Constancys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConstancysUpdateInput, ConstancysUncheckedUpdateInput>
  }

  /**
   * Constancys delete
   */
  export type ConstancysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constancys
     */
    select?: ConstancysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constancys
     */
    omit?: ConstancysOmit<ExtArgs> | null
    /**
     * Filter which Constancys to delete.
     */
    where: ConstancysWhereUniqueInput
  }

  /**
   * Constancys deleteMany
   */
  export type ConstancysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Constancys to delete
     */
    where?: ConstancysWhereInput
    /**
     * Limit how many Constancys to delete.
     */
    limit?: number
  }

  /**
   * Constancys findRaw
   */
  export type ConstancysFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Constancys aggregateRaw
   */
  export type ConstancysAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Constancys without action
   */
  export type ConstancysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constancys
     */
    select?: ConstancysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constancys
     */
    omit?: ConstancysOmit<ExtArgs> | null
  }


  /**
   * Model Certificates
   */

  export type AggregateCertificates = {
    _count: CertificatesCountAggregateOutputType | null
    _min: CertificatesMinAggregateOutputType | null
    _max: CertificatesMaxAggregateOutputType | null
  }

  export type CertificatesMinAggregateOutputType = {
    id: string | null
    names: string | null
    document: string | null
    documentType: string | null
    phone: string | null
    email: string | null
    graduationProgram: string | null
    graduationYear: string | null
    requestReason: string | null
  }

  export type CertificatesMaxAggregateOutputType = {
    id: string | null
    names: string | null
    document: string | null
    documentType: string | null
    phone: string | null
    email: string | null
    graduationProgram: string | null
    graduationYear: string | null
    requestReason: string | null
  }

  export type CertificatesCountAggregateOutputType = {
    id: number
    names: number
    document: number
    documentType: number
    phone: number
    email: number
    graduationProgram: number
    graduationYear: number
    requestReason: number
    _all: number
  }


  export type CertificatesMinAggregateInputType = {
    id?: true
    names?: true
    document?: true
    documentType?: true
    phone?: true
    email?: true
    graduationProgram?: true
    graduationYear?: true
    requestReason?: true
  }

  export type CertificatesMaxAggregateInputType = {
    id?: true
    names?: true
    document?: true
    documentType?: true
    phone?: true
    email?: true
    graduationProgram?: true
    graduationYear?: true
    requestReason?: true
  }

  export type CertificatesCountAggregateInputType = {
    id?: true
    names?: true
    document?: true
    documentType?: true
    phone?: true
    email?: true
    graduationProgram?: true
    graduationYear?: true
    requestReason?: true
    _all?: true
  }

  export type CertificatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificates to aggregate.
     */
    where?: CertificatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificatesOrderByWithRelationInput | CertificatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificates
    **/
    _count?: true | CertificatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificatesMaxAggregateInputType
  }

  export type GetCertificatesAggregateType<T extends CertificatesAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificates[P]>
      : GetScalarType<T[P], AggregateCertificates[P]>
  }




  export type CertificatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificatesWhereInput
    orderBy?: CertificatesOrderByWithAggregationInput | CertificatesOrderByWithAggregationInput[]
    by: CertificatesScalarFieldEnum[] | CertificatesScalarFieldEnum
    having?: CertificatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificatesCountAggregateInputType | true
    _min?: CertificatesMinAggregateInputType
    _max?: CertificatesMaxAggregateInputType
  }

  export type CertificatesGroupByOutputType = {
    id: string
    names: string
    document: string
    documentType: string
    phone: string
    email: string
    graduationProgram: string
    graduationYear: string
    requestReason: string
    _count: CertificatesCountAggregateOutputType | null
    _min: CertificatesMinAggregateOutputType | null
    _max: CertificatesMaxAggregateOutputType | null
  }

  type GetCertificatesGroupByPayload<T extends CertificatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificatesGroupByOutputType[P]>
            : GetScalarType<T[P], CertificatesGroupByOutputType[P]>
        }
      >
    >


  export type CertificatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    names?: boolean
    document?: boolean
    documentType?: boolean
    phone?: boolean
    email?: boolean
    graduationProgram?: boolean
    graduationYear?: boolean
    requestReason?: boolean
  }, ExtArgs["result"]["certificates"]>



  export type CertificatesSelectScalar = {
    id?: boolean
    names?: boolean
    document?: boolean
    documentType?: boolean
    phone?: boolean
    email?: boolean
    graduationProgram?: boolean
    graduationYear?: boolean
    requestReason?: boolean
  }

  export type CertificatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "names" | "document" | "documentType" | "phone" | "email" | "graduationProgram" | "graduationYear" | "requestReason", ExtArgs["result"]["certificates"]>

  export type $CertificatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificates"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      names: string
      document: string
      documentType: string
      phone: string
      email: string
      graduationProgram: string
      graduationYear: string
      requestReason: string
    }, ExtArgs["result"]["certificates"]>
    composites: {}
  }

  type CertificatesGetPayload<S extends boolean | null | undefined | CertificatesDefaultArgs> = $Result.GetResult<Prisma.$CertificatesPayload, S>

  type CertificatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificatesCountAggregateInputType | true
    }

  export interface CertificatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificates'], meta: { name: 'Certificates' } }
    /**
     * Find zero or one Certificates that matches the filter.
     * @param {CertificatesFindUniqueArgs} args - Arguments to find a Certificates
     * @example
     * // Get one Certificates
     * const certificates = await prisma.certificates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificatesFindUniqueArgs>(args: SelectSubset<T, CertificatesFindUniqueArgs<ExtArgs>>): Prisma__CertificatesClient<$Result.GetResult<Prisma.$CertificatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certificates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificatesFindUniqueOrThrowArgs} args - Arguments to find a Certificates
     * @example
     * // Get one Certificates
     * const certificates = await prisma.certificates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificatesFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificatesClient<$Result.GetResult<Prisma.$CertificatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificatesFindFirstArgs} args - Arguments to find a Certificates
     * @example
     * // Get one Certificates
     * const certificates = await prisma.certificates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificatesFindFirstArgs>(args?: SelectSubset<T, CertificatesFindFirstArgs<ExtArgs>>): Prisma__CertificatesClient<$Result.GetResult<Prisma.$CertificatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificatesFindFirstOrThrowArgs} args - Arguments to find a Certificates
     * @example
     * // Get one Certificates
     * const certificates = await prisma.certificates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificatesFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificatesClient<$Result.GetResult<Prisma.$CertificatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificates
     * const certificates = await prisma.certificates.findMany()
     * 
     * // Get first 10 Certificates
     * const certificates = await prisma.certificates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificatesWithIdOnly = await prisma.certificates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificatesFindManyArgs>(args?: SelectSubset<T, CertificatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certificates.
     * @param {CertificatesCreateArgs} args - Arguments to create a Certificates.
     * @example
     * // Create one Certificates
     * const Certificates = await prisma.certificates.create({
     *   data: {
     *     // ... data to create a Certificates
     *   }
     * })
     * 
     */
    create<T extends CertificatesCreateArgs>(args: SelectSubset<T, CertificatesCreateArgs<ExtArgs>>): Prisma__CertificatesClient<$Result.GetResult<Prisma.$CertificatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certificates.
     * @param {CertificatesCreateManyArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificates = await prisma.certificates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificatesCreateManyArgs>(args?: SelectSubset<T, CertificatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Certificates.
     * @param {CertificatesDeleteArgs} args - Arguments to delete one Certificates.
     * @example
     * // Delete one Certificates
     * const Certificates = await prisma.certificates.delete({
     *   where: {
     *     // ... filter to delete one Certificates
     *   }
     * })
     * 
     */
    delete<T extends CertificatesDeleteArgs>(args: SelectSubset<T, CertificatesDeleteArgs<ExtArgs>>): Prisma__CertificatesClient<$Result.GetResult<Prisma.$CertificatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certificates.
     * @param {CertificatesUpdateArgs} args - Arguments to update one Certificates.
     * @example
     * // Update one Certificates
     * const certificates = await prisma.certificates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificatesUpdateArgs>(args: SelectSubset<T, CertificatesUpdateArgs<ExtArgs>>): Prisma__CertificatesClient<$Result.GetResult<Prisma.$CertificatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certificates.
     * @param {CertificatesDeleteManyArgs} args - Arguments to filter Certificates to delete.
     * @example
     * // Delete a few Certificates
     * const { count } = await prisma.certificates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificatesDeleteManyArgs>(args?: SelectSubset<T, CertificatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificates
     * const certificates = await prisma.certificates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificatesUpdateManyArgs>(args: SelectSubset<T, CertificatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Certificates.
     * @param {CertificatesUpsertArgs} args - Arguments to update or create a Certificates.
     * @example
     * // Update or create a Certificates
     * const certificates = await prisma.certificates.upsert({
     *   create: {
     *     // ... data to create a Certificates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificates we want to update
     *   }
     * })
     */
    upsert<T extends CertificatesUpsertArgs>(args: SelectSubset<T, CertificatesUpsertArgs<ExtArgs>>): Prisma__CertificatesClient<$Result.GetResult<Prisma.$CertificatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certificates that matches the filter.
     * @param {CertificatesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const certificates = await prisma.certificates.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CertificatesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Certificates.
     * @param {CertificatesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const certificates = await prisma.certificates.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CertificatesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificatesCountArgs} args - Arguments to filter Certificates to count.
     * @example
     * // Count the number of Certificates
     * const count = await prisma.certificates.count({
     *   where: {
     *     // ... the filter for the Certificates we want to count
     *   }
     * })
    **/
    count<T extends CertificatesCountArgs>(
      args?: Subset<T, CertificatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CertificatesAggregateArgs>(args: Subset<T, CertificatesAggregateArgs>): Prisma.PrismaPromise<GetCertificatesAggregateType<T>>

    /**
     * Group by Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificatesGroupByArgs} args - Group by arguments.
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
      T extends CertificatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificatesGroupByArgs['orderBy'] }
        : { orderBy?: CertificatesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CertificatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificates model
   */
  readonly fields: CertificatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Certificates model
   */
  interface CertificatesFieldRefs {
    readonly id: FieldRef<"Certificates", 'String'>
    readonly names: FieldRef<"Certificates", 'String'>
    readonly document: FieldRef<"Certificates", 'String'>
    readonly documentType: FieldRef<"Certificates", 'String'>
    readonly phone: FieldRef<"Certificates", 'String'>
    readonly email: FieldRef<"Certificates", 'String'>
    readonly graduationProgram: FieldRef<"Certificates", 'String'>
    readonly graduationYear: FieldRef<"Certificates", 'String'>
    readonly requestReason: FieldRef<"Certificates", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Certificates findUnique
   */
  export type CertificatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificates
     */
    select?: CertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificates
     */
    omit?: CertificatesOmit<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where: CertificatesWhereUniqueInput
  }

  /**
   * Certificates findUniqueOrThrow
   */
  export type CertificatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificates
     */
    select?: CertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificates
     */
    omit?: CertificatesOmit<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where: CertificatesWhereUniqueInput
  }

  /**
   * Certificates findFirst
   */
  export type CertificatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificates
     */
    select?: CertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificates
     */
    omit?: CertificatesOmit<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where?: CertificatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificatesOrderByWithRelationInput | CertificatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificatesScalarFieldEnum | CertificatesScalarFieldEnum[]
  }

  /**
   * Certificates findFirstOrThrow
   */
  export type CertificatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificates
     */
    select?: CertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificates
     */
    omit?: CertificatesOmit<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where?: CertificatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificatesOrderByWithRelationInput | CertificatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificatesScalarFieldEnum | CertificatesScalarFieldEnum[]
  }

  /**
   * Certificates findMany
   */
  export type CertificatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificates
     */
    select?: CertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificates
     */
    omit?: CertificatesOmit<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where?: CertificatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificatesOrderByWithRelationInput | CertificatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificates.
     */
    cursor?: CertificatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    distinct?: CertificatesScalarFieldEnum | CertificatesScalarFieldEnum[]
  }

  /**
   * Certificates create
   */
  export type CertificatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificates
     */
    select?: CertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificates
     */
    omit?: CertificatesOmit<ExtArgs> | null
    /**
     * The data needed to create a Certificates.
     */
    data: XOR<CertificatesCreateInput, CertificatesUncheckedCreateInput>
  }

  /**
   * Certificates createMany
   */
  export type CertificatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificates.
     */
    data: CertificatesCreateManyInput | CertificatesCreateManyInput[]
  }

  /**
   * Certificates update
   */
  export type CertificatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificates
     */
    select?: CertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificates
     */
    omit?: CertificatesOmit<ExtArgs> | null
    /**
     * The data needed to update a Certificates.
     */
    data: XOR<CertificatesUpdateInput, CertificatesUncheckedUpdateInput>
    /**
     * Choose, which Certificates to update.
     */
    where: CertificatesWhereUniqueInput
  }

  /**
   * Certificates updateMany
   */
  export type CertificatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificatesUpdateManyMutationInput, CertificatesUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificatesWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
  }

  /**
   * Certificates upsert
   */
  export type CertificatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificates
     */
    select?: CertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificates
     */
    omit?: CertificatesOmit<ExtArgs> | null
    /**
     * The filter to search for the Certificates to update in case it exists.
     */
    where: CertificatesWhereUniqueInput
    /**
     * In case the Certificates found by the `where` argument doesn't exist, create a new Certificates with this data.
     */
    create: XOR<CertificatesCreateInput, CertificatesUncheckedCreateInput>
    /**
     * In case the Certificates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificatesUpdateInput, CertificatesUncheckedUpdateInput>
  }

  /**
   * Certificates delete
   */
  export type CertificatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificates
     */
    select?: CertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificates
     */
    omit?: CertificatesOmit<ExtArgs> | null
    /**
     * Filter which Certificates to delete.
     */
    where: CertificatesWhereUniqueInput
  }

  /**
   * Certificates deleteMany
   */
  export type CertificatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificates to delete
     */
    where?: CertificatesWhereInput
    /**
     * Limit how many Certificates to delete.
     */
    limit?: number
  }

  /**
   * Certificates findRaw
   */
  export type CertificatesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Certificates aggregateRaw
   */
  export type CertificatesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Certificates without action
   */
  export type CertificatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificates
     */
    select?: CertificatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificates
     */
    omit?: CertificatesOmit<ExtArgs> | null
  }


  /**
   * Model Appointments
   */

  export type AggregateAppointments = {
    _count: AppointmentsCountAggregateOutputType | null
    _min: AppointmentsMinAggregateOutputType | null
    _max: AppointmentsMaxAggregateOutputType | null
  }

  export type AppointmentsMinAggregateOutputType = {
    id: string | null
    names: string | null
    document: string | null
    documentType: string | null
    phone: string | null
    email: string | null
    subject: string | null
    date: string | null
    hour: string | null
    requestReason: string | null
  }

  export type AppointmentsMaxAggregateOutputType = {
    id: string | null
    names: string | null
    document: string | null
    documentType: string | null
    phone: string | null
    email: string | null
    subject: string | null
    date: string | null
    hour: string | null
    requestReason: string | null
  }

  export type AppointmentsCountAggregateOutputType = {
    id: number
    names: number
    document: number
    documentType: number
    phone: number
    email: number
    subject: number
    date: number
    hour: number
    requestReason: number
    _all: number
  }


  export type AppointmentsMinAggregateInputType = {
    id?: true
    names?: true
    document?: true
    documentType?: true
    phone?: true
    email?: true
    subject?: true
    date?: true
    hour?: true
    requestReason?: true
  }

  export type AppointmentsMaxAggregateInputType = {
    id?: true
    names?: true
    document?: true
    documentType?: true
    phone?: true
    email?: true
    subject?: true
    date?: true
    hour?: true
    requestReason?: true
  }

  export type AppointmentsCountAggregateInputType = {
    id?: true
    names?: true
    document?: true
    documentType?: true
    phone?: true
    email?: true
    subject?: true
    date?: true
    hour?: true
    requestReason?: true
    _all?: true
  }

  export type AppointmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to aggregate.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentsMaxAggregateInputType
  }

  export type GetAppointmentsAggregateType<T extends AppointmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointments[P]>
      : GetScalarType<T[P], AggregateAppointments[P]>
  }




  export type AppointmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentsWhereInput
    orderBy?: AppointmentsOrderByWithAggregationInput | AppointmentsOrderByWithAggregationInput[]
    by: AppointmentsScalarFieldEnum[] | AppointmentsScalarFieldEnum
    having?: AppointmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentsCountAggregateInputType | true
    _min?: AppointmentsMinAggregateInputType
    _max?: AppointmentsMaxAggregateInputType
  }

  export type AppointmentsGroupByOutputType = {
    id: string
    names: string
    document: string
    documentType: string
    phone: string
    email: string
    subject: string
    date: string
    hour: string
    requestReason: string
    _count: AppointmentsCountAggregateOutputType | null
    _min: AppointmentsMinAggregateOutputType | null
    _max: AppointmentsMaxAggregateOutputType | null
  }

  type GetAppointmentsGroupByPayload<T extends AppointmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentsGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    names?: boolean
    document?: boolean
    documentType?: boolean
    phone?: boolean
    email?: boolean
    subject?: boolean
    date?: boolean
    hour?: boolean
    requestReason?: boolean
  }, ExtArgs["result"]["appointments"]>



  export type AppointmentsSelectScalar = {
    id?: boolean
    names?: boolean
    document?: boolean
    documentType?: boolean
    phone?: boolean
    email?: boolean
    subject?: boolean
    date?: boolean
    hour?: boolean
    requestReason?: boolean
  }

  export type AppointmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "names" | "document" | "documentType" | "phone" | "email" | "subject" | "date" | "hour" | "requestReason", ExtArgs["result"]["appointments"]>

  export type $AppointmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointments"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      names: string
      document: string
      documentType: string
      phone: string
      email: string
      subject: string
      date: string
      hour: string
      requestReason: string
    }, ExtArgs["result"]["appointments"]>
    composites: {}
  }

  type AppointmentsGetPayload<S extends boolean | null | undefined | AppointmentsDefaultArgs> = $Result.GetResult<Prisma.$AppointmentsPayload, S>

  type AppointmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentsCountAggregateInputType | true
    }

  export interface AppointmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointments'], meta: { name: 'Appointments' } }
    /**
     * Find zero or one Appointments that matches the filter.
     * @param {AppointmentsFindUniqueArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentsFindUniqueArgs>(args: SelectSubset<T, AppointmentsFindUniqueArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentsFindUniqueOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsFindFirstArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentsFindFirstArgs>(args?: SelectSubset<T, AppointmentsFindFirstArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsFindFirstOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointments.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentsWithIdOnly = await prisma.appointments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentsFindManyArgs>(args?: SelectSubset<T, AppointmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointments.
     * @param {AppointmentsCreateArgs} args - Arguments to create a Appointments.
     * @example
     * // Create one Appointments
     * const Appointments = await prisma.appointments.create({
     *   data: {
     *     // ... data to create a Appointments
     *   }
     * })
     * 
     */
    create<T extends AppointmentsCreateArgs>(args: SelectSubset<T, AppointmentsCreateArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentsCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointments = await prisma.appointments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentsCreateManyArgs>(args?: SelectSubset<T, AppointmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Appointments.
     * @param {AppointmentsDeleteArgs} args - Arguments to delete one Appointments.
     * @example
     * // Delete one Appointments
     * const Appointments = await prisma.appointments.delete({
     *   where: {
     *     // ... filter to delete one Appointments
     *   }
     * })
     * 
     */
    delete<T extends AppointmentsDeleteArgs>(args: SelectSubset<T, AppointmentsDeleteArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointments.
     * @param {AppointmentsUpdateArgs} args - Arguments to update one Appointments.
     * @example
     * // Update one Appointments
     * const appointments = await prisma.appointments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentsUpdateArgs>(args: SelectSubset<T, AppointmentsUpdateArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentsDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentsDeleteManyArgs>(args?: SelectSubset<T, AppointmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointments = await prisma.appointments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentsUpdateManyArgs>(args: SelectSubset<T, AppointmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appointments.
     * @param {AppointmentsUpsertArgs} args - Arguments to update or create a Appointments.
     * @example
     * // Update or create a Appointments
     * const appointments = await prisma.appointments.upsert({
     *   create: {
     *     // ... data to create a Appointments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointments we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentsUpsertArgs>(args: SelectSubset<T, AppointmentsUpsertArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * @param {AppointmentsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const appointments = await prisma.appointments.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AppointmentsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Appointments.
     * @param {AppointmentsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const appointments = await prisma.appointments.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AppointmentsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointments.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentsCountArgs>(
      args?: Subset<T, AppointmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentsAggregateArgs>(args: Subset<T, AppointmentsAggregateArgs>): Prisma.PrismaPromise<GetAppointmentsAggregateType<T>>

    /**
     * Group by Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsGroupByArgs} args - Group by arguments.
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
      T extends AppointmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentsGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointments model
   */
  readonly fields: AppointmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Appointments model
   */
  interface AppointmentsFieldRefs {
    readonly id: FieldRef<"Appointments", 'String'>
    readonly names: FieldRef<"Appointments", 'String'>
    readonly document: FieldRef<"Appointments", 'String'>
    readonly documentType: FieldRef<"Appointments", 'String'>
    readonly phone: FieldRef<"Appointments", 'String'>
    readonly email: FieldRef<"Appointments", 'String'>
    readonly subject: FieldRef<"Appointments", 'String'>
    readonly date: FieldRef<"Appointments", 'String'>
    readonly hour: FieldRef<"Appointments", 'String'>
    readonly requestReason: FieldRef<"Appointments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Appointments findUnique
   */
  export type AppointmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments findUniqueOrThrow
   */
  export type AppointmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments findFirst
   */
  export type AppointmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Appointments findFirstOrThrow
   */
  export type AppointmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Appointments findMany
   */
  export type AppointmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Appointments create
   */
  export type AppointmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * The data needed to create a Appointments.
     */
    data: XOR<AppointmentsCreateInput, AppointmentsUncheckedCreateInput>
  }

  /**
   * Appointments createMany
   */
  export type AppointmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentsCreateManyInput | AppointmentsCreateManyInput[]
  }

  /**
   * Appointments update
   */
  export type AppointmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * The data needed to update a Appointments.
     */
    data: XOR<AppointmentsUpdateInput, AppointmentsUncheckedUpdateInput>
    /**
     * Choose, which Appointments to update.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments updateMany
   */
  export type AppointmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentsUpdateManyMutationInput, AppointmentsUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentsWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointments upsert
   */
  export type AppointmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * The filter to search for the Appointments to update in case it exists.
     */
    where: AppointmentsWhereUniqueInput
    /**
     * In case the Appointments found by the `where` argument doesn't exist, create a new Appointments with this data.
     */
    create: XOR<AppointmentsCreateInput, AppointmentsUncheckedCreateInput>
    /**
     * In case the Appointments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentsUpdateInput, AppointmentsUncheckedUpdateInput>
  }

  /**
   * Appointments delete
   */
  export type AppointmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Filter which Appointments to delete.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments deleteMany
   */
  export type AppointmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentsWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointments findRaw
   */
  export type AppointmentsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Appointments aggregateRaw
   */
  export type AppointmentsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Appointments without action
   */
  export type AppointmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ConstancysScalarFieldEnum: {
    id: 'id',
    names: 'names',
    document: 'document',
    documentType: 'documentType',
    phone: 'phone',
    email: 'email',
    constancyType: 'constancyType',
    requestReason: 'requestReason'
  };

  export type ConstancysScalarFieldEnum = (typeof ConstancysScalarFieldEnum)[keyof typeof ConstancysScalarFieldEnum]


  export const CertificatesScalarFieldEnum: {
    id: 'id',
    names: 'names',
    document: 'document',
    documentType: 'documentType',
    phone: 'phone',
    email: 'email',
    graduationProgram: 'graduationProgram',
    graduationYear: 'graduationYear',
    requestReason: 'requestReason'
  };

  export type CertificatesScalarFieldEnum = (typeof CertificatesScalarFieldEnum)[keyof typeof CertificatesScalarFieldEnum]


  export const AppointmentsScalarFieldEnum: {
    id: 'id',
    names: 'names',
    document: 'document',
    documentType: 'documentType',
    phone: 'phone',
    email: 'email',
    subject: 'subject',
    date: 'date',
    hour: 'hour',
    requestReason: 'requestReason'
  };

  export type AppointmentsScalarFieldEnum = (typeof AppointmentsScalarFieldEnum)[keyof typeof AppointmentsScalarFieldEnum]


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


  export type ConstancysWhereInput = {
    AND?: ConstancysWhereInput | ConstancysWhereInput[]
    OR?: ConstancysWhereInput[]
    NOT?: ConstancysWhereInput | ConstancysWhereInput[]
    id?: StringFilter<"Constancys"> | string
    names?: StringFilter<"Constancys"> | string
    document?: StringFilter<"Constancys"> | string
    documentType?: StringFilter<"Constancys"> | string
    phone?: StringFilter<"Constancys"> | string
    email?: StringFilter<"Constancys"> | string
    constancyType?: StringFilter<"Constancys"> | string
    requestReason?: StringFilter<"Constancys"> | string
  }

  export type ConstancysOrderByWithRelationInput = {
    id?: SortOrder
    names?: SortOrder
    document?: SortOrder
    documentType?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    constancyType?: SortOrder
    requestReason?: SortOrder
  }

  export type ConstancysWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConstancysWhereInput | ConstancysWhereInput[]
    OR?: ConstancysWhereInput[]
    NOT?: ConstancysWhereInput | ConstancysWhereInput[]
    names?: StringFilter<"Constancys"> | string
    document?: StringFilter<"Constancys"> | string
    documentType?: StringFilter<"Constancys"> | string
    phone?: StringFilter<"Constancys"> | string
    email?: StringFilter<"Constancys"> | string
    constancyType?: StringFilter<"Constancys"> | string
    requestReason?: StringFilter<"Constancys"> | string
  }, "id">

  export type ConstancysOrderByWithAggregationInput = {
    id?: SortOrder
    names?: SortOrder
    document?: SortOrder
    documentType?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    constancyType?: SortOrder
    requestReason?: SortOrder
    _count?: ConstancysCountOrderByAggregateInput
    _max?: ConstancysMaxOrderByAggregateInput
    _min?: ConstancysMinOrderByAggregateInput
  }

  export type ConstancysScalarWhereWithAggregatesInput = {
    AND?: ConstancysScalarWhereWithAggregatesInput | ConstancysScalarWhereWithAggregatesInput[]
    OR?: ConstancysScalarWhereWithAggregatesInput[]
    NOT?: ConstancysScalarWhereWithAggregatesInput | ConstancysScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Constancys"> | string
    names?: StringWithAggregatesFilter<"Constancys"> | string
    document?: StringWithAggregatesFilter<"Constancys"> | string
    documentType?: StringWithAggregatesFilter<"Constancys"> | string
    phone?: StringWithAggregatesFilter<"Constancys"> | string
    email?: StringWithAggregatesFilter<"Constancys"> | string
    constancyType?: StringWithAggregatesFilter<"Constancys"> | string
    requestReason?: StringWithAggregatesFilter<"Constancys"> | string
  }

  export type CertificatesWhereInput = {
    AND?: CertificatesWhereInput | CertificatesWhereInput[]
    OR?: CertificatesWhereInput[]
    NOT?: CertificatesWhereInput | CertificatesWhereInput[]
    id?: StringFilter<"Certificates"> | string
    names?: StringFilter<"Certificates"> | string
    document?: StringFilter<"Certificates"> | string
    documentType?: StringFilter<"Certificates"> | string
    phone?: StringFilter<"Certificates"> | string
    email?: StringFilter<"Certificates"> | string
    graduationProgram?: StringFilter<"Certificates"> | string
    graduationYear?: StringFilter<"Certificates"> | string
    requestReason?: StringFilter<"Certificates"> | string
  }

  export type CertificatesOrderByWithRelationInput = {
    id?: SortOrder
    names?: SortOrder
    document?: SortOrder
    documentType?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    graduationProgram?: SortOrder
    graduationYear?: SortOrder
    requestReason?: SortOrder
  }

  export type CertificatesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CertificatesWhereInput | CertificatesWhereInput[]
    OR?: CertificatesWhereInput[]
    NOT?: CertificatesWhereInput | CertificatesWhereInput[]
    names?: StringFilter<"Certificates"> | string
    document?: StringFilter<"Certificates"> | string
    documentType?: StringFilter<"Certificates"> | string
    phone?: StringFilter<"Certificates"> | string
    email?: StringFilter<"Certificates"> | string
    graduationProgram?: StringFilter<"Certificates"> | string
    graduationYear?: StringFilter<"Certificates"> | string
    requestReason?: StringFilter<"Certificates"> | string
  }, "id">

  export type CertificatesOrderByWithAggregationInput = {
    id?: SortOrder
    names?: SortOrder
    document?: SortOrder
    documentType?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    graduationProgram?: SortOrder
    graduationYear?: SortOrder
    requestReason?: SortOrder
    _count?: CertificatesCountOrderByAggregateInput
    _max?: CertificatesMaxOrderByAggregateInput
    _min?: CertificatesMinOrderByAggregateInput
  }

  export type CertificatesScalarWhereWithAggregatesInput = {
    AND?: CertificatesScalarWhereWithAggregatesInput | CertificatesScalarWhereWithAggregatesInput[]
    OR?: CertificatesScalarWhereWithAggregatesInput[]
    NOT?: CertificatesScalarWhereWithAggregatesInput | CertificatesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Certificates"> | string
    names?: StringWithAggregatesFilter<"Certificates"> | string
    document?: StringWithAggregatesFilter<"Certificates"> | string
    documentType?: StringWithAggregatesFilter<"Certificates"> | string
    phone?: StringWithAggregatesFilter<"Certificates"> | string
    email?: StringWithAggregatesFilter<"Certificates"> | string
    graduationProgram?: StringWithAggregatesFilter<"Certificates"> | string
    graduationYear?: StringWithAggregatesFilter<"Certificates"> | string
    requestReason?: StringWithAggregatesFilter<"Certificates"> | string
  }

  export type AppointmentsWhereInput = {
    AND?: AppointmentsWhereInput | AppointmentsWhereInput[]
    OR?: AppointmentsWhereInput[]
    NOT?: AppointmentsWhereInput | AppointmentsWhereInput[]
    id?: StringFilter<"Appointments"> | string
    names?: StringFilter<"Appointments"> | string
    document?: StringFilter<"Appointments"> | string
    documentType?: StringFilter<"Appointments"> | string
    phone?: StringFilter<"Appointments"> | string
    email?: StringFilter<"Appointments"> | string
    subject?: StringFilter<"Appointments"> | string
    date?: StringFilter<"Appointments"> | string
    hour?: StringFilter<"Appointments"> | string
    requestReason?: StringFilter<"Appointments"> | string
  }

  export type AppointmentsOrderByWithRelationInput = {
    id?: SortOrder
    names?: SortOrder
    document?: SortOrder
    documentType?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    date?: SortOrder
    hour?: SortOrder
    requestReason?: SortOrder
  }

  export type AppointmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentsWhereInput | AppointmentsWhereInput[]
    OR?: AppointmentsWhereInput[]
    NOT?: AppointmentsWhereInput | AppointmentsWhereInput[]
    names?: StringFilter<"Appointments"> | string
    document?: StringFilter<"Appointments"> | string
    documentType?: StringFilter<"Appointments"> | string
    phone?: StringFilter<"Appointments"> | string
    email?: StringFilter<"Appointments"> | string
    subject?: StringFilter<"Appointments"> | string
    date?: StringFilter<"Appointments"> | string
    hour?: StringFilter<"Appointments"> | string
    requestReason?: StringFilter<"Appointments"> | string
  }, "id">

  export type AppointmentsOrderByWithAggregationInput = {
    id?: SortOrder
    names?: SortOrder
    document?: SortOrder
    documentType?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    date?: SortOrder
    hour?: SortOrder
    requestReason?: SortOrder
    _count?: AppointmentsCountOrderByAggregateInput
    _max?: AppointmentsMaxOrderByAggregateInput
    _min?: AppointmentsMinOrderByAggregateInput
  }

  export type AppointmentsScalarWhereWithAggregatesInput = {
    AND?: AppointmentsScalarWhereWithAggregatesInput | AppointmentsScalarWhereWithAggregatesInput[]
    OR?: AppointmentsScalarWhereWithAggregatesInput[]
    NOT?: AppointmentsScalarWhereWithAggregatesInput | AppointmentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointments"> | string
    names?: StringWithAggregatesFilter<"Appointments"> | string
    document?: StringWithAggregatesFilter<"Appointments"> | string
    documentType?: StringWithAggregatesFilter<"Appointments"> | string
    phone?: StringWithAggregatesFilter<"Appointments"> | string
    email?: StringWithAggregatesFilter<"Appointments"> | string
    subject?: StringWithAggregatesFilter<"Appointments"> | string
    date?: StringWithAggregatesFilter<"Appointments"> | string
    hour?: StringWithAggregatesFilter<"Appointments"> | string
    requestReason?: StringWithAggregatesFilter<"Appointments"> | string
  }

  export type ConstancysCreateInput = {
    id?: string
    names: string
    document: string
    documentType: string
    phone: string
    email: string
    constancyType: string
    requestReason: string
  }

  export type ConstancysUncheckedCreateInput = {
    id?: string
    names: string
    document: string
    documentType: string
    phone: string
    email: string
    constancyType: string
    requestReason: string
  }

  export type ConstancysUpdateInput = {
    names?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    constancyType?: StringFieldUpdateOperationsInput | string
    requestReason?: StringFieldUpdateOperationsInput | string
  }

  export type ConstancysUncheckedUpdateInput = {
    names?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    constancyType?: StringFieldUpdateOperationsInput | string
    requestReason?: StringFieldUpdateOperationsInput | string
  }

  export type ConstancysCreateManyInput = {
    id?: string
    names: string
    document: string
    documentType: string
    phone: string
    email: string
    constancyType: string
    requestReason: string
  }

  export type ConstancysUpdateManyMutationInput = {
    names?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    constancyType?: StringFieldUpdateOperationsInput | string
    requestReason?: StringFieldUpdateOperationsInput | string
  }

  export type ConstancysUncheckedUpdateManyInput = {
    names?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    constancyType?: StringFieldUpdateOperationsInput | string
    requestReason?: StringFieldUpdateOperationsInput | string
  }

  export type CertificatesCreateInput = {
    id?: string
    names: string
    document: string
    documentType: string
    phone: string
    email: string
    graduationProgram: string
    graduationYear: string
    requestReason: string
  }

  export type CertificatesUncheckedCreateInput = {
    id?: string
    names: string
    document: string
    documentType: string
    phone: string
    email: string
    graduationProgram: string
    graduationYear: string
    requestReason: string
  }

  export type CertificatesUpdateInput = {
    names?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    graduationProgram?: StringFieldUpdateOperationsInput | string
    graduationYear?: StringFieldUpdateOperationsInput | string
    requestReason?: StringFieldUpdateOperationsInput | string
  }

  export type CertificatesUncheckedUpdateInput = {
    names?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    graduationProgram?: StringFieldUpdateOperationsInput | string
    graduationYear?: StringFieldUpdateOperationsInput | string
    requestReason?: StringFieldUpdateOperationsInput | string
  }

  export type CertificatesCreateManyInput = {
    id?: string
    names: string
    document: string
    documentType: string
    phone: string
    email: string
    graduationProgram: string
    graduationYear: string
    requestReason: string
  }

  export type CertificatesUpdateManyMutationInput = {
    names?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    graduationProgram?: StringFieldUpdateOperationsInput | string
    graduationYear?: StringFieldUpdateOperationsInput | string
    requestReason?: StringFieldUpdateOperationsInput | string
  }

  export type CertificatesUncheckedUpdateManyInput = {
    names?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    graduationProgram?: StringFieldUpdateOperationsInput | string
    graduationYear?: StringFieldUpdateOperationsInput | string
    requestReason?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentsCreateInput = {
    id?: string
    names: string
    document: string
    documentType: string
    phone: string
    email: string
    subject: string
    date: string
    hour: string
    requestReason: string
  }

  export type AppointmentsUncheckedCreateInput = {
    id?: string
    names: string
    document: string
    documentType: string
    phone: string
    email: string
    subject: string
    date: string
    hour: string
    requestReason: string
  }

  export type AppointmentsUpdateInput = {
    names?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    requestReason?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentsUncheckedUpdateInput = {
    names?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    requestReason?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentsCreateManyInput = {
    id?: string
    names: string
    document: string
    documentType: string
    phone: string
    email: string
    subject: string
    date: string
    hour: string
    requestReason: string
  }

  export type AppointmentsUpdateManyMutationInput = {
    names?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    requestReason?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentsUncheckedUpdateManyInput = {
    names?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    requestReason?: StringFieldUpdateOperationsInput | string
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

  export type ConstancysCountOrderByAggregateInput = {
    id?: SortOrder
    names?: SortOrder
    document?: SortOrder
    documentType?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    constancyType?: SortOrder
    requestReason?: SortOrder
  }

  export type ConstancysMaxOrderByAggregateInput = {
    id?: SortOrder
    names?: SortOrder
    document?: SortOrder
    documentType?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    constancyType?: SortOrder
    requestReason?: SortOrder
  }

  export type ConstancysMinOrderByAggregateInput = {
    id?: SortOrder
    names?: SortOrder
    document?: SortOrder
    documentType?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    constancyType?: SortOrder
    requestReason?: SortOrder
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

  export type CertificatesCountOrderByAggregateInput = {
    id?: SortOrder
    names?: SortOrder
    document?: SortOrder
    documentType?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    graduationProgram?: SortOrder
    graduationYear?: SortOrder
    requestReason?: SortOrder
  }

  export type CertificatesMaxOrderByAggregateInput = {
    id?: SortOrder
    names?: SortOrder
    document?: SortOrder
    documentType?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    graduationProgram?: SortOrder
    graduationYear?: SortOrder
    requestReason?: SortOrder
  }

  export type CertificatesMinOrderByAggregateInput = {
    id?: SortOrder
    names?: SortOrder
    document?: SortOrder
    documentType?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    graduationProgram?: SortOrder
    graduationYear?: SortOrder
    requestReason?: SortOrder
  }

  export type AppointmentsCountOrderByAggregateInput = {
    id?: SortOrder
    names?: SortOrder
    document?: SortOrder
    documentType?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    date?: SortOrder
    hour?: SortOrder
    requestReason?: SortOrder
  }

  export type AppointmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    names?: SortOrder
    document?: SortOrder
    documentType?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    date?: SortOrder
    hour?: SortOrder
    requestReason?: SortOrder
  }

  export type AppointmentsMinOrderByAggregateInput = {
    id?: SortOrder
    names?: SortOrder
    document?: SortOrder
    documentType?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    date?: SortOrder
    hour?: SortOrder
    requestReason?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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