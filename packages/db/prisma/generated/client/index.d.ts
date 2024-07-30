
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
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Cls
 * 
 */
export type Cls = $Result.DefaultSelection<Prisma.$ClsPayload>
/**
 * Model Timetable
 * 
 */
export type Timetable = $Result.DefaultSelection<Prisma.$TimetablePayload>
/**
 * Model Register
 * 
 */
export type Register = $Result.DefaultSelection<Prisma.$RegisterPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model ClassView
 * 
 */
export type ClassView = $Result.DefaultSelection<Prisma.$ClassViewPayload>
/**
 * Model Seat
 * 
 */
export type Seat = $Result.DefaultSelection<Prisma.$SeatPayload>
/**
 * Model Layout
 * 
 */
export type Layout = $Result.DefaultSelection<Prisma.$LayoutPayload>
/**
 * Model Desk
 * 
 */
export type Desk = $Result.DefaultSelection<Prisma.$DeskPayload>
/**
 * Model SeatingPlan
 * 
 */
export type SeatingPlan = $Result.DefaultSelection<Prisma.$SeatingPlanPayload>
/**
 * Model SeatingArrangement
 * 
 */
export type SeatingArrangement = $Result.DefaultSelection<Prisma.$SeatingArrangementPayload>

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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs>;

  /**
   * `prisma.cls`: Exposes CRUD operations for the **Cls** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cls
    * const cls = await prisma.cls.findMany()
    * ```
    */
  get cls(): Prisma.ClsDelegate<ExtArgs>;

  /**
   * `prisma.timetable`: Exposes CRUD operations for the **Timetable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timetables
    * const timetables = await prisma.timetable.findMany()
    * ```
    */
  get timetable(): Prisma.TimetableDelegate<ExtArgs>;

  /**
   * `prisma.register`: Exposes CRUD operations for the **Register** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registers
    * const registers = await prisma.register.findMany()
    * ```
    */
  get register(): Prisma.RegisterDelegate<ExtArgs>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs>;

  /**
   * `prisma.classView`: Exposes CRUD operations for the **ClassView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassViews
    * const classViews = await prisma.classView.findMany()
    * ```
    */
  get classView(): Prisma.ClassViewDelegate<ExtArgs>;

  /**
   * `prisma.seat`: Exposes CRUD operations for the **Seat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seats
    * const seats = await prisma.seat.findMany()
    * ```
    */
  get seat(): Prisma.SeatDelegate<ExtArgs>;

  /**
   * `prisma.layout`: Exposes CRUD operations for the **Layout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Layouts
    * const layouts = await prisma.layout.findMany()
    * ```
    */
  get layout(): Prisma.LayoutDelegate<ExtArgs>;

  /**
   * `prisma.desk`: Exposes CRUD operations for the **Desk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Desks
    * const desks = await prisma.desk.findMany()
    * ```
    */
  get desk(): Prisma.DeskDelegate<ExtArgs>;

  /**
   * `prisma.seatingPlan`: Exposes CRUD operations for the **SeatingPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeatingPlans
    * const seatingPlans = await prisma.seatingPlan.findMany()
    * ```
    */
  get seatingPlan(): Prisma.SeatingPlanDelegate<ExtArgs>;

  /**
   * `prisma.seatingArrangement`: Exposes CRUD operations for the **SeatingArrangement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeatingArrangements
    * const seatingArrangements = await prisma.seatingArrangement.findMany()
    * ```
    */
  get seatingArrangement(): Prisma.SeatingArrangementDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.16.2
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Role: 'Role',
    Teacher: 'Teacher',
    Student: 'Student',
    Cls: 'Cls',
    Timetable: 'Timetable',
    Register: 'Register',
    Attendance: 'Attendance',
    ClassView: 'ClassView',
    Seat: 'Seat',
    Layout: 'Layout',
    Desk: 'Desk',
    SeatingPlan: 'SeatingPlan',
    SeatingArrangement: 'SeatingArrangement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "role" | "teacher" | "student" | "cls" | "timetable" | "register" | "attendance" | "classView" | "seat" | "layout" | "desk" | "seatingPlan" | "seatingArrangement"
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
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Cls: {
        payload: Prisma.$ClsPayload<ExtArgs>
        fields: Prisma.ClsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClsPayload>
          }
          findFirst: {
            args: Prisma.ClsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClsPayload>
          }
          findMany: {
            args: Prisma.ClsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClsPayload>[]
          }
          create: {
            args: Prisma.ClsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClsPayload>
          }
          createMany: {
            args: Prisma.ClsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClsPayload>[]
          }
          delete: {
            args: Prisma.ClsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClsPayload>
          }
          update: {
            args: Prisma.ClsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClsPayload>
          }
          deleteMany: {
            args: Prisma.ClsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClsPayload>
          }
          aggregate: {
            args: Prisma.ClsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCls>
          }
          groupBy: {
            args: Prisma.ClsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClsCountArgs<ExtArgs>
            result: $Utils.Optional<ClsCountAggregateOutputType> | number
          }
        }
      }
      Timetable: {
        payload: Prisma.$TimetablePayload<ExtArgs>
        fields: Prisma.TimetableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimetableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimetableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          findFirst: {
            args: Prisma.TimetableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimetableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          findMany: {
            args: Prisma.TimetableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>[]
          }
          create: {
            args: Prisma.TimetableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          createMany: {
            args: Prisma.TimetableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimetableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>[]
          }
          delete: {
            args: Prisma.TimetableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          update: {
            args: Prisma.TimetableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          deleteMany: {
            args: Prisma.TimetableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimetableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimetableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          aggregate: {
            args: Prisma.TimetableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimetable>
          }
          groupBy: {
            args: Prisma.TimetableGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimetableGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimetableCountArgs<ExtArgs>
            result: $Utils.Optional<TimetableCountAggregateOutputType> | number
          }
        }
      }
      Register: {
        payload: Prisma.$RegisterPayload<ExtArgs>
        fields: Prisma.RegisterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegisterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegisterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>
          }
          findFirst: {
            args: Prisma.RegisterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegisterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>
          }
          findMany: {
            args: Prisma.RegisterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>[]
          }
          create: {
            args: Prisma.RegisterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>
          }
          createMany: {
            args: Prisma.RegisterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegisterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>[]
          }
          delete: {
            args: Prisma.RegisterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>
          }
          update: {
            args: Prisma.RegisterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>
          }
          deleteMany: {
            args: Prisma.RegisterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegisterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegisterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisterPayload>
          }
          aggregate: {
            args: Prisma.RegisterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegister>
          }
          groupBy: {
            args: Prisma.RegisterGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegisterGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegisterCountArgs<ExtArgs>
            result: $Utils.Optional<RegisterCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      ClassView: {
        payload: Prisma.$ClassViewPayload<ExtArgs>
        fields: Prisma.ClassViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassViewPayload>
          }
          findFirst: {
            args: Prisma.ClassViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassViewPayload>
          }
          findMany: {
            args: Prisma.ClassViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassViewPayload>[]
          }
          create: {
            args: Prisma.ClassViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassViewPayload>
          }
          createMany: {
            args: Prisma.ClassViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassViewPayload>[]
          }
          delete: {
            args: Prisma.ClassViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassViewPayload>
          }
          update: {
            args: Prisma.ClassViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassViewPayload>
          }
          deleteMany: {
            args: Prisma.ClassViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClassViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassViewPayload>
          }
          aggregate: {
            args: Prisma.ClassViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassView>
          }
          groupBy: {
            args: Prisma.ClassViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassViewCountArgs<ExtArgs>
            result: $Utils.Optional<ClassViewCountAggregateOutputType> | number
          }
        }
      }
      Seat: {
        payload: Prisma.$SeatPayload<ExtArgs>
        fields: Prisma.SeatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          findFirst: {
            args: Prisma.SeatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          findMany: {
            args: Prisma.SeatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>[]
          }
          create: {
            args: Prisma.SeatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          createMany: {
            args: Prisma.SeatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>[]
          }
          delete: {
            args: Prisma.SeatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          update: {
            args: Prisma.SeatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          deleteMany: {
            args: Prisma.SeatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SeatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          aggregate: {
            args: Prisma.SeatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeat>
          }
          groupBy: {
            args: Prisma.SeatGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeatCountArgs<ExtArgs>
            result: $Utils.Optional<SeatCountAggregateOutputType> | number
          }
        }
      }
      Layout: {
        payload: Prisma.$LayoutPayload<ExtArgs>
        fields: Prisma.LayoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LayoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LayoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>
          }
          findFirst: {
            args: Prisma.LayoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LayoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>
          }
          findMany: {
            args: Prisma.LayoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>[]
          }
          create: {
            args: Prisma.LayoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>
          }
          createMany: {
            args: Prisma.LayoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LayoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>[]
          }
          delete: {
            args: Prisma.LayoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>
          }
          update: {
            args: Prisma.LayoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>
          }
          deleteMany: {
            args: Prisma.LayoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LayoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LayoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayoutPayload>
          }
          aggregate: {
            args: Prisma.LayoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLayout>
          }
          groupBy: {
            args: Prisma.LayoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<LayoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.LayoutCountArgs<ExtArgs>
            result: $Utils.Optional<LayoutCountAggregateOutputType> | number
          }
        }
      }
      Desk: {
        payload: Prisma.$DeskPayload<ExtArgs>
        fields: Prisma.DeskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload>
          }
          findFirst: {
            args: Prisma.DeskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload>
          }
          findMany: {
            args: Prisma.DeskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload>[]
          }
          create: {
            args: Prisma.DeskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload>
          }
          createMany: {
            args: Prisma.DeskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload>[]
          }
          delete: {
            args: Prisma.DeskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload>
          }
          update: {
            args: Prisma.DeskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload>
          }
          deleteMany: {
            args: Prisma.DeskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeskPayload>
          }
          aggregate: {
            args: Prisma.DeskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDesk>
          }
          groupBy: {
            args: Prisma.DeskGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeskGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeskCountArgs<ExtArgs>
            result: $Utils.Optional<DeskCountAggregateOutputType> | number
          }
        }
      }
      SeatingPlan: {
        payload: Prisma.$SeatingPlanPayload<ExtArgs>
        fields: Prisma.SeatingPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeatingPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeatingPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingPlanPayload>
          }
          findFirst: {
            args: Prisma.SeatingPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeatingPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingPlanPayload>
          }
          findMany: {
            args: Prisma.SeatingPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingPlanPayload>[]
          }
          create: {
            args: Prisma.SeatingPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingPlanPayload>
          }
          createMany: {
            args: Prisma.SeatingPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeatingPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingPlanPayload>[]
          }
          delete: {
            args: Prisma.SeatingPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingPlanPayload>
          }
          update: {
            args: Prisma.SeatingPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingPlanPayload>
          }
          deleteMany: {
            args: Prisma.SeatingPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeatingPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SeatingPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingPlanPayload>
          }
          aggregate: {
            args: Prisma.SeatingPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeatingPlan>
          }
          groupBy: {
            args: Prisma.SeatingPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeatingPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeatingPlanCountArgs<ExtArgs>
            result: $Utils.Optional<SeatingPlanCountAggregateOutputType> | number
          }
        }
      }
      SeatingArrangement: {
        payload: Prisma.$SeatingArrangementPayload<ExtArgs>
        fields: Prisma.SeatingArrangementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeatingArrangementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingArrangementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeatingArrangementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingArrangementPayload>
          }
          findFirst: {
            args: Prisma.SeatingArrangementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingArrangementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeatingArrangementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingArrangementPayload>
          }
          findMany: {
            args: Prisma.SeatingArrangementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingArrangementPayload>[]
          }
          create: {
            args: Prisma.SeatingArrangementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingArrangementPayload>
          }
          createMany: {
            args: Prisma.SeatingArrangementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeatingArrangementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingArrangementPayload>[]
          }
          delete: {
            args: Prisma.SeatingArrangementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingArrangementPayload>
          }
          update: {
            args: Prisma.SeatingArrangementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingArrangementPayload>
          }
          deleteMany: {
            args: Prisma.SeatingArrangementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeatingArrangementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SeatingArrangementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatingArrangementPayload>
          }
          aggregate: {
            args: Prisma.SeatingArrangementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeatingArrangement>
          }
          groupBy: {
            args: Prisma.SeatingArrangementGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeatingArrangementGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeatingArrangementCountArgs<ExtArgs>
            result: $Utils.Optional<SeatingArrangementCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
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
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    User: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | RoleCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    classes: number
    Register: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | TeacherCountOutputTypeCountClassesArgs
    Register?: boolean | TeacherCountOutputTypeCountRegisterArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClsWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountRegisterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegisterWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    Attendance: number
    SeatingArrangement: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Attendance?: boolean | StudentCountOutputTypeCountAttendanceArgs
    SeatingArrangement?: boolean | StudentCountOutputTypeCountSeatingArrangementArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSeatingArrangementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatingArrangementWhereInput
  }


  /**
   * Count Type ClsCountOutputType
   */

  export type ClsCountOutputType = {
    register: number
    students: number
    timetable: number
    ClassView: number
    layouts: number
  }

  export type ClsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    register?: boolean | ClsCountOutputTypeCountRegisterArgs
    students?: boolean | ClsCountOutputTypeCountStudentsArgs
    timetable?: boolean | ClsCountOutputTypeCountTimetableArgs
    ClassView?: boolean | ClsCountOutputTypeCountClassViewArgs
    layouts?: boolean | ClsCountOutputTypeCountLayoutsArgs
  }

  // Custom InputTypes
  /**
   * ClsCountOutputType without action
   */
  export type ClsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClsCountOutputType
     */
    select?: ClsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClsCountOutputType without action
   */
  export type ClsCountOutputTypeCountRegisterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegisterWhereInput
  }

  /**
   * ClsCountOutputType without action
   */
  export type ClsCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * ClsCountOutputType without action
   */
  export type ClsCountOutputTypeCountTimetableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimetableWhereInput
  }

  /**
   * ClsCountOutputType without action
   */
  export type ClsCountOutputTypeCountClassViewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassViewWhereInput
  }

  /**
   * ClsCountOutputType without action
   */
  export type ClsCountOutputTypeCountLayoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayoutWhereInput
  }


  /**
   * Count Type RegisterCountOutputType
   */

  export type RegisterCountOutputType = {
    Attendance: number
  }

  export type RegisterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Attendance?: boolean | RegisterCountOutputTypeCountAttendanceArgs
  }

  // Custom InputTypes
  /**
   * RegisterCountOutputType without action
   */
  export type RegisterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisterCountOutputType
     */
    select?: RegisterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegisterCountOutputType without action
   */
  export type RegisterCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Count Type ClassViewCountOutputType
   */

  export type ClassViewCountOutputType = {
    seat: number
  }

  export type ClassViewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seat?: boolean | ClassViewCountOutputTypeCountSeatArgs
  }

  // Custom InputTypes
  /**
   * ClassViewCountOutputType without action
   */
  export type ClassViewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassViewCountOutputType
     */
    select?: ClassViewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassViewCountOutputType without action
   */
  export type ClassViewCountOutputTypeCountSeatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatWhereInput
  }


  /**
   * Count Type LayoutCountOutputType
   */

  export type LayoutCountOutputType = {
    desks: number
    seatingPlans: number
    classes: number
  }

  export type LayoutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    desks?: boolean | LayoutCountOutputTypeCountDesksArgs
    seatingPlans?: boolean | LayoutCountOutputTypeCountSeatingPlansArgs
    classes?: boolean | LayoutCountOutputTypeCountClassesArgs
  }

  // Custom InputTypes
  /**
   * LayoutCountOutputType without action
   */
  export type LayoutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayoutCountOutputType
     */
    select?: LayoutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LayoutCountOutputType without action
   */
  export type LayoutCountOutputTypeCountDesksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeskWhereInput
  }

  /**
   * LayoutCountOutputType without action
   */
  export type LayoutCountOutputTypeCountSeatingPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatingPlanWhereInput
  }

  /**
   * LayoutCountOutputType without action
   */
  export type LayoutCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClsWhereInput
  }


  /**
   * Count Type DeskCountOutputType
   */

  export type DeskCountOutputType = {
    SeatingArrangement: number
  }

  export type DeskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SeatingArrangement?: boolean | DeskCountOutputTypeCountSeatingArrangementArgs
  }

  // Custom InputTypes
  /**
   * DeskCountOutputType without action
   */
  export type DeskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeskCountOutputType
     */
    select?: DeskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeskCountOutputType without action
   */
  export type DeskCountOutputTypeCountSeatingArrangementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatingArrangementWhereInput
  }


  /**
   * Count Type SeatingPlanCountOutputType
   */

  export type SeatingPlanCountOutputType = {
    seatingArrangement: number
  }

  export type SeatingPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seatingArrangement?: boolean | SeatingPlanCountOutputTypeCountSeatingArrangementArgs
  }

  // Custom InputTypes
  /**
   * SeatingPlanCountOutputType without action
   */
  export type SeatingPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingPlanCountOutputType
     */
    select?: SeatingPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeatingPlanCountOutputType without action
   */
  export type SeatingPlanCountOutputTypeCountSeatingArrangementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatingArrangementWhereInput
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
    id: number | null
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    roleId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    roleId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    roleId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    roleId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    roleId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    roleId?: true
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
    id: number
    username: string
    email: string
    password: string
    roleId: number
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
    username?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
    Student?: boolean | User$StudentArgs<ExtArgs>
    Teacher?: boolean | User$TeacherArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | User$StudentArgs<ExtArgs>
    Teacher?: boolean | User$TeacherArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Student: Prisma.$StudentPayload<ExtArgs> | null
      Teacher: Prisma.$TeacherPayload<ExtArgs> | null
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      roleId: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Student<T extends User$StudentArgs<ExtArgs> = {}>(args?: Subset<T, User$StudentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Teacher<T extends User$TeacherArgs<ExtArgs> = {}>(args?: Subset<T, User$TeacherArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'Int'>
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
  }

  /**
   * User.Student
   */
  export type User$StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * User.Teacher
   */
  export type User$TeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    User?: boolean | Role$UserArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Role$UserArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Role$UserArgs<ExtArgs> = {}>(args?: Subset<T, Role$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data?: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }

  /**
   * Role.User
   */
  export type Role$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TeacherSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TeacherMinAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TeacherSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: number
    userId: number
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    classes?: boolean | Teacher$classesArgs<ExtArgs>
    Register?: boolean | Teacher$RegisterArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | Teacher$classesArgs<ExtArgs>
    Register?: boolean | Teacher$RegisterArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      classes: Prisma.$ClsPayload<ExtArgs>[]
      Register: Prisma.$RegisterPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classes<T extends Teacher$classesArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClsPayload<ExtArgs>, T, "findMany"> | Null>
    Register<T extends Teacher$RegisterArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$RegisterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Teacher model
   */ 
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'Int'>
    readonly userId: FieldRef<"Teacher", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
  }

  /**
   * Teacher.classes
   */
  export type Teacher$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cls
     */
    select?: ClsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClsInclude<ExtArgs> | null
    where?: ClsWhereInput
    orderBy?: ClsOrderByWithRelationInput | ClsOrderByWithRelationInput[]
    cursor?: ClsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClsScalarFieldEnum | ClsScalarFieldEnum[]
  }

  /**
   * Teacher.Register
   */
  export type Teacher$RegisterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    where?: RegisterWhereInput
    orderBy?: RegisterOrderByWithRelationInput | RegisterOrderByWithRelationInput[]
    cursor?: RegisterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegisterScalarFieldEnum | RegisterScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    classId: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    classId: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    classId: number | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    classId: number | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    userId: number
    classId: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    userId?: true
    classId?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    userId?: true
    classId?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    userId?: true
    classId?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    userId?: true
    classId?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    userId?: true
    classId?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    userId: number
    classId: number
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    classId?: boolean
    Attendance?: boolean | Student$AttendanceArgs<ExtArgs>
    cls?: boolean | ClsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    SeatingArrangement?: boolean | Student$SeatingArrangementArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    classId?: boolean
    cls?: boolean | ClsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    userId?: boolean
    classId?: boolean
  }

  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Attendance?: boolean | Student$AttendanceArgs<ExtArgs>
    cls?: boolean | ClsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    SeatingArrangement?: boolean | Student$SeatingArrangementArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cls?: boolean | ClsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      Attendance: Prisma.$AttendancePayload<ExtArgs>[]
      cls: Prisma.$ClsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      SeatingArrangement: Prisma.$SeatingArrangementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      classId: number
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Attendance<T extends Student$AttendanceArgs<ExtArgs> = {}>(args?: Subset<T, Student$AttendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany"> | Null>
    cls<T extends ClsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClsDefaultArgs<ExtArgs>>): Prisma__ClsClient<$Result.GetResult<Prisma.$ClsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    SeatingArrangement<T extends Student$SeatingArrangementArgs<ExtArgs> = {}>(args?: Subset<T, Student$SeatingArrangementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatingArrangementPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Student model
   */ 
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly userId: FieldRef<"Student", 'Int'>
    readonly classId: FieldRef<"Student", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
  }

  /**
   * Student.Attendance
   */
  export type Student$AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Student.SeatingArrangement
   */
  export type Student$SeatingArrangementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingArrangement
     */
    select?: SeatingArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingArrangementInclude<ExtArgs> | null
    where?: SeatingArrangementWhereInput
    orderBy?: SeatingArrangementOrderByWithRelationInput | SeatingArrangementOrderByWithRelationInput[]
    cursor?: SeatingArrangementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeatingArrangementScalarFieldEnum | SeatingArrangementScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Cls
   */

  export type AggregateCls = {
    _count: ClsCountAggregateOutputType | null
    _avg: ClsAvgAggregateOutputType | null
    _sum: ClsSumAggregateOutputType | null
    _min: ClsMinAggregateOutputType | null
    _max: ClsMaxAggregateOutputType | null
  }

  export type ClsAvgAggregateOutputType = {
    id: number | null
    teacherId: number | null
  }

  export type ClsSumAggregateOutputType = {
    id: number | null
    teacherId: number | null
  }

  export type ClsMinAggregateOutputType = {
    id: number | null
    name: string | null
    teacherId: number | null
  }

  export type ClsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    teacherId: number | null
  }

  export type ClsCountAggregateOutputType = {
    id: number
    name: number
    teacherId: number
    _all: number
  }


  export type ClsAvgAggregateInputType = {
    id?: true
    teacherId?: true
  }

  export type ClsSumAggregateInputType = {
    id?: true
    teacherId?: true
  }

  export type ClsMinAggregateInputType = {
    id?: true
    name?: true
    teacherId?: true
  }

  export type ClsMaxAggregateInputType = {
    id?: true
    name?: true
    teacherId?: true
  }

  export type ClsCountAggregateInputType = {
    id?: true
    name?: true
    teacherId?: true
    _all?: true
  }

  export type ClsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cls to aggregate.
     */
    where?: ClsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cls to fetch.
     */
    orderBy?: ClsOrderByWithRelationInput | ClsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cls
    **/
    _count?: true | ClsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClsMaxAggregateInputType
  }

  export type GetClsAggregateType<T extends ClsAggregateArgs> = {
        [P in keyof T & keyof AggregateCls]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCls[P]>
      : GetScalarType<T[P], AggregateCls[P]>
  }




  export type ClsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClsWhereInput
    orderBy?: ClsOrderByWithAggregationInput | ClsOrderByWithAggregationInput[]
    by: ClsScalarFieldEnum[] | ClsScalarFieldEnum
    having?: ClsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClsCountAggregateInputType | true
    _avg?: ClsAvgAggregateInputType
    _sum?: ClsSumAggregateInputType
    _min?: ClsMinAggregateInputType
    _max?: ClsMaxAggregateInputType
  }

  export type ClsGroupByOutputType = {
    id: number
    name: string
    teacherId: number | null
    _count: ClsCountAggregateOutputType | null
    _avg: ClsAvgAggregateOutputType | null
    _sum: ClsSumAggregateOutputType | null
    _min: ClsMinAggregateOutputType | null
    _max: ClsMaxAggregateOutputType | null
  }

  type GetClsGroupByPayload<T extends ClsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClsGroupByOutputType[P]>
            : GetScalarType<T[P], ClsGroupByOutputType[P]>
        }
      >
    >


  export type ClsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teacherId?: boolean
    teacher?: boolean | Cls$teacherArgs<ExtArgs>
    register?: boolean | Cls$registerArgs<ExtArgs>
    students?: boolean | Cls$studentsArgs<ExtArgs>
    timetable?: boolean | Cls$timetableArgs<ExtArgs>
    ClassView?: boolean | Cls$ClassViewArgs<ExtArgs>
    layouts?: boolean | Cls$layoutsArgs<ExtArgs>
    _count?: boolean | ClsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cls"]>

  export type ClsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teacherId?: boolean
    teacher?: boolean | Cls$teacherArgs<ExtArgs>
  }, ExtArgs["result"]["cls"]>

  export type ClsSelectScalar = {
    id?: boolean
    name?: boolean
    teacherId?: boolean
  }

  export type ClsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | Cls$teacherArgs<ExtArgs>
    register?: boolean | Cls$registerArgs<ExtArgs>
    students?: boolean | Cls$studentsArgs<ExtArgs>
    timetable?: boolean | Cls$timetableArgs<ExtArgs>
    ClassView?: boolean | Cls$ClassViewArgs<ExtArgs>
    layouts?: boolean | Cls$layoutsArgs<ExtArgs>
    _count?: boolean | ClsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | Cls$teacherArgs<ExtArgs>
  }

  export type $ClsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cls"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs> | null
      register: Prisma.$RegisterPayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
      timetable: Prisma.$TimetablePayload<ExtArgs>[]
      ClassView: Prisma.$ClassViewPayload<ExtArgs>[]
      layouts: Prisma.$LayoutPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      teacherId: number | null
    }, ExtArgs["result"]["cls"]>
    composites: {}
  }

  type ClsGetPayload<S extends boolean | null | undefined | ClsDefaultArgs> = $Result.GetResult<Prisma.$ClsPayload, S>

  type ClsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClsCountAggregateInputType | true
    }

  export interface ClsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cls'], meta: { name: 'Cls' } }
    /**
     * Find zero or one Cls that matches the filter.
     * @param {ClsFindUniqueArgs} args - Arguments to find a Cls
     * @example
     * // Get one Cls
     * const cls = await prisma.cls.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClsFindUniqueArgs>(args: SelectSubset<T, ClsFindUniqueArgs<ExtArgs>>): Prisma__ClsClient<$Result.GetResult<Prisma.$ClsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cls that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClsFindUniqueOrThrowArgs} args - Arguments to find a Cls
     * @example
     * // Get one Cls
     * const cls = await prisma.cls.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClsFindUniqueOrThrowArgs>(args: SelectSubset<T, ClsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClsClient<$Result.GetResult<Prisma.$ClsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClsFindFirstArgs} args - Arguments to find a Cls
     * @example
     * // Get one Cls
     * const cls = await prisma.cls.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClsFindFirstArgs>(args?: SelectSubset<T, ClsFindFirstArgs<ExtArgs>>): Prisma__ClsClient<$Result.GetResult<Prisma.$ClsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cls that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClsFindFirstOrThrowArgs} args - Arguments to find a Cls
     * @example
     * // Get one Cls
     * const cls = await prisma.cls.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClsFindFirstOrThrowArgs>(args?: SelectSubset<T, ClsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClsClient<$Result.GetResult<Prisma.$ClsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cls
     * const cls = await prisma.cls.findMany()
     * 
     * // Get first 10 Cls
     * const cls = await prisma.cls.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clsWithIdOnly = await prisma.cls.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClsFindManyArgs>(args?: SelectSubset<T, ClsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cls.
     * @param {ClsCreateArgs} args - Arguments to create a Cls.
     * @example
     * // Create one Cls
     * const Cls = await prisma.cls.create({
     *   data: {
     *     // ... data to create a Cls
     *   }
     * })
     * 
     */
    create<T extends ClsCreateArgs>(args: SelectSubset<T, ClsCreateArgs<ExtArgs>>): Prisma__ClsClient<$Result.GetResult<Prisma.$ClsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cls.
     * @param {ClsCreateManyArgs} args - Arguments to create many Cls.
     * @example
     * // Create many Cls
     * const cls = await prisma.cls.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClsCreateManyArgs>(args?: SelectSubset<T, ClsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cls and returns the data saved in the database.
     * @param {ClsCreateManyAndReturnArgs} args - Arguments to create many Cls.
     * @example
     * // Create many Cls
     * const cls = await prisma.cls.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cls and only return the `id`
     * const clsWithIdOnly = await prisma.cls.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClsCreateManyAndReturnArgs>(args?: SelectSubset<T, ClsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Cls.
     * @param {ClsDeleteArgs} args - Arguments to delete one Cls.
     * @example
     * // Delete one Cls
     * const Cls = await prisma.cls.delete({
     *   where: {
     *     // ... filter to delete one Cls
     *   }
     * })
     * 
     */
    delete<T extends ClsDeleteArgs>(args: SelectSubset<T, ClsDeleteArgs<ExtArgs>>): Prisma__ClsClient<$Result.GetResult<Prisma.$ClsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cls.
     * @param {ClsUpdateArgs} args - Arguments to update one Cls.
     * @example
     * // Update one Cls
     * const cls = await prisma.cls.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClsUpdateArgs>(args: SelectSubset<T, ClsUpdateArgs<ExtArgs>>): Prisma__ClsClient<$Result.GetResult<Prisma.$ClsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cls.
     * @param {ClsDeleteManyArgs} args - Arguments to filter Cls to delete.
     * @example
     * // Delete a few Cls
     * const { count } = await prisma.cls.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClsDeleteManyArgs>(args?: SelectSubset<T, ClsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cls
     * const cls = await prisma.cls.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClsUpdateManyArgs>(args: SelectSubset<T, ClsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cls.
     * @param {ClsUpsertArgs} args - Arguments to update or create a Cls.
     * @example
     * // Update or create a Cls
     * const cls = await prisma.cls.upsert({
     *   create: {
     *     // ... data to create a Cls
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cls we want to update
     *   }
     * })
     */
    upsert<T extends ClsUpsertArgs>(args: SelectSubset<T, ClsUpsertArgs<ExtArgs>>): Prisma__ClsClient<$Result.GetResult<Prisma.$ClsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClsCountArgs} args - Arguments to filter Cls to count.
     * @example
     * // Count the number of Cls
     * const count = await prisma.cls.count({
     *   where: {
     *     // ... the filter for the Cls we want to count
     *   }
     * })
    **/
    count<T extends ClsCountArgs>(
      args?: Subset<T, ClsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClsAggregateArgs>(args: Subset<T, ClsAggregateArgs>): Prisma.PrismaPromise<GetClsAggregateType<T>>

    /**
     * Group by Cls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClsGroupByArgs} args - Group by arguments.
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
      T extends ClsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClsGroupByArgs['orderBy'] }
        : { orderBy?: ClsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cls model
   */
  readonly fields: ClsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cls.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends Cls$teacherArgs<ExtArgs> = {}>(args?: Subset<T, Cls$teacherArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    register<T extends Cls$registerArgs<ExtArgs> = {}>(args?: Subset<T, Cls$registerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findMany"> | Null>
    students<T extends Cls$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Cls$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany"> | Null>
    timetable<T extends Cls$timetableArgs<ExtArgs> = {}>(args?: Subset<T, Cls$timetableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findMany"> | Null>
    ClassView<T extends Cls$ClassViewArgs<ExtArgs> = {}>(args?: Subset<T, Cls$ClassViewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassViewPayload<ExtArgs>, T, "findMany"> | Null>
    layouts<T extends Cls$layoutsArgs<ExtArgs> = {}>(args?: Subset<T, Cls$layoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Cls model
   */ 
  interface ClsFieldRefs {
    readonly id: FieldRef<"Cls", 'Int'>
    readonly name: FieldRef<"Cls", 'String'>
    readonly teacherId: FieldRef<"Cls", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cls findUnique
   */
  export type ClsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cls
     */
    select?: ClsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClsInclude<ExtArgs> | null
    /**
     * Filter, which Cls to fetch.
     */
    where: ClsWhereUniqueInput
  }

  /**
   * Cls findUniqueOrThrow
   */
  export type ClsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cls
     */
    select?: ClsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClsInclude<ExtArgs> | null
    /**
     * Filter, which Cls to fetch.
     */
    where: ClsWhereUniqueInput
  }

  /**
   * Cls findFirst
   */
  export type ClsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cls
     */
    select?: ClsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClsInclude<ExtArgs> | null
    /**
     * Filter, which Cls to fetch.
     */
    where?: ClsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cls to fetch.
     */
    orderBy?: ClsOrderByWithRelationInput | ClsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cls.
     */
    cursor?: ClsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cls.
     */
    distinct?: ClsScalarFieldEnum | ClsScalarFieldEnum[]
  }

  /**
   * Cls findFirstOrThrow
   */
  export type ClsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cls
     */
    select?: ClsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClsInclude<ExtArgs> | null
    /**
     * Filter, which Cls to fetch.
     */
    where?: ClsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cls to fetch.
     */
    orderBy?: ClsOrderByWithRelationInput | ClsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cls.
     */
    cursor?: ClsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cls.
     */
    distinct?: ClsScalarFieldEnum | ClsScalarFieldEnum[]
  }

  /**
   * Cls findMany
   */
  export type ClsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cls
     */
    select?: ClsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClsInclude<ExtArgs> | null
    /**
     * Filter, which Cls to fetch.
     */
    where?: ClsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cls to fetch.
     */
    orderBy?: ClsOrderByWithRelationInput | ClsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cls.
     */
    cursor?: ClsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cls.
     */
    skip?: number
    distinct?: ClsScalarFieldEnum | ClsScalarFieldEnum[]
  }

  /**
   * Cls create
   */
  export type ClsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cls
     */
    select?: ClsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClsInclude<ExtArgs> | null
    /**
     * The data needed to create a Cls.
     */
    data: XOR<ClsCreateInput, ClsUncheckedCreateInput>
  }

  /**
   * Cls createMany
   */
  export type ClsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cls.
     */
    data: ClsCreateManyInput | ClsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cls createManyAndReturn
   */
  export type ClsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cls
     */
    select?: ClsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Cls.
     */
    data: ClsCreateManyInput | ClsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cls update
   */
  export type ClsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cls
     */
    select?: ClsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClsInclude<ExtArgs> | null
    /**
     * The data needed to update a Cls.
     */
    data: XOR<ClsUpdateInput, ClsUncheckedUpdateInput>
    /**
     * Choose, which Cls to update.
     */
    where: ClsWhereUniqueInput
  }

  /**
   * Cls updateMany
   */
  export type ClsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cls.
     */
    data: XOR<ClsUpdateManyMutationInput, ClsUncheckedUpdateManyInput>
    /**
     * Filter which Cls to update
     */
    where?: ClsWhereInput
  }

  /**
   * Cls upsert
   */
  export type ClsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cls
     */
    select?: ClsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClsInclude<ExtArgs> | null
    /**
     * The filter to search for the Cls to update in case it exists.
     */
    where: ClsWhereUniqueInput
    /**
     * In case the Cls found by the `where` argument doesn't exist, create a new Cls with this data.
     */
    create: XOR<ClsCreateInput, ClsUncheckedCreateInput>
    /**
     * In case the Cls was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClsUpdateInput, ClsUncheckedUpdateInput>
  }

  /**
   * Cls delete
   */
  export type ClsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cls
     */
    select?: ClsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClsInclude<ExtArgs> | null
    /**
     * Filter which Cls to delete.
     */
    where: ClsWhereUniqueInput
  }

  /**
   * Cls deleteMany
   */
  export type ClsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cls to delete
     */
    where?: ClsWhereInput
  }

  /**
   * Cls.teacher
   */
  export type Cls$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
  }

  /**
   * Cls.register
   */
  export type Cls$registerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    where?: RegisterWhereInput
    orderBy?: RegisterOrderByWithRelationInput | RegisterOrderByWithRelationInput[]
    cursor?: RegisterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegisterScalarFieldEnum | RegisterScalarFieldEnum[]
  }

  /**
   * Cls.students
   */
  export type Cls$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Cls.timetable
   */
  export type Cls$timetableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    where?: TimetableWhereInput
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    cursor?: TimetableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimetableScalarFieldEnum | TimetableScalarFieldEnum[]
  }

  /**
   * Cls.ClassView
   */
  export type Cls$ClassViewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassView
     */
    select?: ClassViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassViewInclude<ExtArgs> | null
    where?: ClassViewWhereInput
    orderBy?: ClassViewOrderByWithRelationInput | ClassViewOrderByWithRelationInput[]
    cursor?: ClassViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassViewScalarFieldEnum | ClassViewScalarFieldEnum[]
  }

  /**
   * Cls.layouts
   */
  export type Cls$layoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    where?: LayoutWhereInput
    orderBy?: LayoutOrderByWithRelationInput | LayoutOrderByWithRelationInput[]
    cursor?: LayoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LayoutScalarFieldEnum | LayoutScalarFieldEnum[]
  }

  /**
   * Cls without action
   */
  export type ClsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cls
     */
    select?: ClsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClsInclude<ExtArgs> | null
  }


  /**
   * Model Timetable
   */

  export type AggregateTimetable = {
    _count: TimetableCountAggregateOutputType | null
    _avg: TimetableAvgAggregateOutputType | null
    _sum: TimetableSumAggregateOutputType | null
    _min: TimetableMinAggregateOutputType | null
    _max: TimetableMaxAggregateOutputType | null
  }

  export type TimetableAvgAggregateOutputType = {
    id: number | null
    classId: number | null
  }

  export type TimetableSumAggregateOutputType = {
    id: number | null
    classId: number | null
  }

  export type TimetableMinAggregateOutputType = {
    id: number | null
    classId: number | null
    day: string | null
    startTime: Date | null
    endTime: Date | null
  }

  export type TimetableMaxAggregateOutputType = {
    id: number | null
    classId: number | null
    day: string | null
    startTime: Date | null
    endTime: Date | null
  }

  export type TimetableCountAggregateOutputType = {
    id: number
    classId: number
    day: number
    startTime: number
    endTime: number
    _all: number
  }


  export type TimetableAvgAggregateInputType = {
    id?: true
    classId?: true
  }

  export type TimetableSumAggregateInputType = {
    id?: true
    classId?: true
  }

  export type TimetableMinAggregateInputType = {
    id?: true
    classId?: true
    day?: true
    startTime?: true
    endTime?: true
  }

  export type TimetableMaxAggregateInputType = {
    id?: true
    classId?: true
    day?: true
    startTime?: true
    endTime?: true
  }

  export type TimetableCountAggregateInputType = {
    id?: true
    classId?: true
    day?: true
    startTime?: true
    endTime?: true
    _all?: true
  }

  export type TimetableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timetable to aggregate.
     */
    where?: TimetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timetables to fetch.
     */
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Timetables
    **/
    _count?: true | TimetableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimetableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimetableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimetableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimetableMaxAggregateInputType
  }

  export type GetTimetableAggregateType<T extends TimetableAggregateArgs> = {
        [P in keyof T & keyof AggregateTimetable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimetable[P]>
      : GetScalarType<T[P], AggregateTimetable[P]>
  }




  export type TimetableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimetableWhereInput
    orderBy?: TimetableOrderByWithAggregationInput | TimetableOrderByWithAggregationInput[]
    by: TimetableScalarFieldEnum[] | TimetableScalarFieldEnum
    having?: TimetableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimetableCountAggregateInputType | true
    _avg?: TimetableAvgAggregateInputType
    _sum?: TimetableSumAggregateInputType
    _min?: TimetableMinAggregateInputType
    _max?: TimetableMaxAggregateInputType
  }

  export type TimetableGroupByOutputType = {
    id: number
    classId: number
    day: string
    startTime: Date
    endTime: Date
    _count: TimetableCountAggregateOutputType | null
    _avg: TimetableAvgAggregateOutputType | null
    _sum: TimetableSumAggregateOutputType | null
    _min: TimetableMinAggregateOutputType | null
    _max: TimetableMaxAggregateOutputType | null
  }

  type GetTimetableGroupByPayload<T extends TimetableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimetableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimetableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimetableGroupByOutputType[P]>
            : GetScalarType<T[P], TimetableGroupByOutputType[P]>
        }
      >
    >


  export type TimetableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    cls?: boolean | ClsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timetable"]>

  export type TimetableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    cls?: boolean | ClsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timetable"]>

  export type TimetableSelectScalar = {
    id?: boolean
    classId?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
  }

  export type TimetableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cls?: boolean | ClsDefaultArgs<ExtArgs>
  }
  export type TimetableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cls?: boolean | ClsDefaultArgs<ExtArgs>
  }

  export type $TimetablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Timetable"
    objects: {
      cls: Prisma.$ClsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      classId: number
      day: string
      startTime: Date
      endTime: Date
    }, ExtArgs["result"]["timetable"]>
    composites: {}
  }

  type TimetableGetPayload<S extends boolean | null | undefined | TimetableDefaultArgs> = $Result.GetResult<Prisma.$TimetablePayload, S>

  type TimetableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimetableFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimetableCountAggregateInputType | true
    }

  export interface TimetableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Timetable'], meta: { name: 'Timetable' } }
    /**
     * Find zero or one Timetable that matches the filter.
     * @param {TimetableFindUniqueArgs} args - Arguments to find a Timetable
     * @example
     * // Get one Timetable
     * const timetable = await prisma.timetable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimetableFindUniqueArgs>(args: SelectSubset<T, TimetableFindUniqueArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Timetable that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TimetableFindUniqueOrThrowArgs} args - Arguments to find a Timetable
     * @example
     * // Get one Timetable
     * const timetable = await prisma.timetable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimetableFindUniqueOrThrowArgs>(args: SelectSubset<T, TimetableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Timetable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableFindFirstArgs} args - Arguments to find a Timetable
     * @example
     * // Get one Timetable
     * const timetable = await prisma.timetable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimetableFindFirstArgs>(args?: SelectSubset<T, TimetableFindFirstArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Timetable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableFindFirstOrThrowArgs} args - Arguments to find a Timetable
     * @example
     * // Get one Timetable
     * const timetable = await prisma.timetable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimetableFindFirstOrThrowArgs>(args?: SelectSubset<T, TimetableFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Timetables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timetables
     * const timetables = await prisma.timetable.findMany()
     * 
     * // Get first 10 Timetables
     * const timetables = await prisma.timetable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timetableWithIdOnly = await prisma.timetable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimetableFindManyArgs>(args?: SelectSubset<T, TimetableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Timetable.
     * @param {TimetableCreateArgs} args - Arguments to create a Timetable.
     * @example
     * // Create one Timetable
     * const Timetable = await prisma.timetable.create({
     *   data: {
     *     // ... data to create a Timetable
     *   }
     * })
     * 
     */
    create<T extends TimetableCreateArgs>(args: SelectSubset<T, TimetableCreateArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Timetables.
     * @param {TimetableCreateManyArgs} args - Arguments to create many Timetables.
     * @example
     * // Create many Timetables
     * const timetable = await prisma.timetable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimetableCreateManyArgs>(args?: SelectSubset<T, TimetableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Timetables and returns the data saved in the database.
     * @param {TimetableCreateManyAndReturnArgs} args - Arguments to create many Timetables.
     * @example
     * // Create many Timetables
     * const timetable = await prisma.timetable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Timetables and only return the `id`
     * const timetableWithIdOnly = await prisma.timetable.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimetableCreateManyAndReturnArgs>(args?: SelectSubset<T, TimetableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Timetable.
     * @param {TimetableDeleteArgs} args - Arguments to delete one Timetable.
     * @example
     * // Delete one Timetable
     * const Timetable = await prisma.timetable.delete({
     *   where: {
     *     // ... filter to delete one Timetable
     *   }
     * })
     * 
     */
    delete<T extends TimetableDeleteArgs>(args: SelectSubset<T, TimetableDeleteArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Timetable.
     * @param {TimetableUpdateArgs} args - Arguments to update one Timetable.
     * @example
     * // Update one Timetable
     * const timetable = await prisma.timetable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimetableUpdateArgs>(args: SelectSubset<T, TimetableUpdateArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Timetables.
     * @param {TimetableDeleteManyArgs} args - Arguments to filter Timetables to delete.
     * @example
     * // Delete a few Timetables
     * const { count } = await prisma.timetable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimetableDeleteManyArgs>(args?: SelectSubset<T, TimetableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timetables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timetables
     * const timetable = await prisma.timetable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimetableUpdateManyArgs>(args: SelectSubset<T, TimetableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Timetable.
     * @param {TimetableUpsertArgs} args - Arguments to update or create a Timetable.
     * @example
     * // Update or create a Timetable
     * const timetable = await prisma.timetable.upsert({
     *   create: {
     *     // ... data to create a Timetable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timetable we want to update
     *   }
     * })
     */
    upsert<T extends TimetableUpsertArgs>(args: SelectSubset<T, TimetableUpsertArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Timetables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableCountArgs} args - Arguments to filter Timetables to count.
     * @example
     * // Count the number of Timetables
     * const count = await prisma.timetable.count({
     *   where: {
     *     // ... the filter for the Timetables we want to count
     *   }
     * })
    **/
    count<T extends TimetableCountArgs>(
      args?: Subset<T, TimetableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimetableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timetable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimetableAggregateArgs>(args: Subset<T, TimetableAggregateArgs>): Prisma.PrismaPromise<GetTimetableAggregateType<T>>

    /**
     * Group by Timetable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableGroupByArgs} args - Group by arguments.
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
      T extends TimetableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimetableGroupByArgs['orderBy'] }
        : { orderBy?: TimetableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimetableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimetableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Timetable model
   */
  readonly fields: TimetableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Timetable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimetableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cls<T extends ClsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClsDefaultArgs<ExtArgs>>): Prisma__ClsClient<$Result.GetResult<Prisma.$ClsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Timetable model
   */ 
  interface TimetableFieldRefs {
    readonly id: FieldRef<"Timetable", 'Int'>
    readonly classId: FieldRef<"Timetable", 'Int'>
    readonly day: FieldRef<"Timetable", 'String'>
    readonly startTime: FieldRef<"Timetable", 'DateTime'>
    readonly endTime: FieldRef<"Timetable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Timetable findUnique
   */
  export type TimetableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetable to fetch.
     */
    where: TimetableWhereUniqueInput
  }

  /**
   * Timetable findUniqueOrThrow
   */
  export type TimetableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetable to fetch.
     */
    where: TimetableWhereUniqueInput
  }

  /**
   * Timetable findFirst
   */
  export type TimetableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetable to fetch.
     */
    where?: TimetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timetables to fetch.
     */
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timetables.
     */
    cursor?: TimetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timetables.
     */
    distinct?: TimetableScalarFieldEnum | TimetableScalarFieldEnum[]
  }

  /**
   * Timetable findFirstOrThrow
   */
  export type TimetableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetable to fetch.
     */
    where?: TimetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timetables to fetch.
     */
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timetables.
     */
    cursor?: TimetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timetables.
     */
    distinct?: TimetableScalarFieldEnum | TimetableScalarFieldEnum[]
  }

  /**
   * Timetable findMany
   */
  export type TimetableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetables to fetch.
     */
    where?: TimetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timetables to fetch.
     */
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Timetables.
     */
    cursor?: TimetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timetables.
     */
    skip?: number
    distinct?: TimetableScalarFieldEnum | TimetableScalarFieldEnum[]
  }

  /**
   * Timetable create
   */
  export type TimetableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * The data needed to create a Timetable.
     */
    data: XOR<TimetableCreateInput, TimetableUncheckedCreateInput>
  }

  /**
   * Timetable createMany
   */
  export type TimetableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Timetables.
     */
    data: TimetableCreateManyInput | TimetableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Timetable createManyAndReturn
   */
  export type TimetableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Timetables.
     */
    data: TimetableCreateManyInput | TimetableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Timetable update
   */
  export type TimetableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * The data needed to update a Timetable.
     */
    data: XOR<TimetableUpdateInput, TimetableUncheckedUpdateInput>
    /**
     * Choose, which Timetable to update.
     */
    where: TimetableWhereUniqueInput
  }

  /**
   * Timetable updateMany
   */
  export type TimetableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Timetables.
     */
    data: XOR<TimetableUpdateManyMutationInput, TimetableUncheckedUpdateManyInput>
    /**
     * Filter which Timetables to update
     */
    where?: TimetableWhereInput
  }

  /**
   * Timetable upsert
   */
  export type TimetableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * The filter to search for the Timetable to update in case it exists.
     */
    where: TimetableWhereUniqueInput
    /**
     * In case the Timetable found by the `where` argument doesn't exist, create a new Timetable with this data.
     */
    create: XOR<TimetableCreateInput, TimetableUncheckedCreateInput>
    /**
     * In case the Timetable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimetableUpdateInput, TimetableUncheckedUpdateInput>
  }

  /**
   * Timetable delete
   */
  export type TimetableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter which Timetable to delete.
     */
    where: TimetableWhereUniqueInput
  }

  /**
   * Timetable deleteMany
   */
  export type TimetableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timetables to delete
     */
    where?: TimetableWhereInput
  }

  /**
   * Timetable without action
   */
  export type TimetableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
  }


  /**
   * Model Register
   */

  export type AggregateRegister = {
    _count: RegisterCountAggregateOutputType | null
    _avg: RegisterAvgAggregateOutputType | null
    _sum: RegisterSumAggregateOutputType | null
    _min: RegisterMinAggregateOutputType | null
    _max: RegisterMaxAggregateOutputType | null
  }

  export type RegisterAvgAggregateOutputType = {
    id: number | null
    classId: number | null
    teacherId: number | null
  }

  export type RegisterSumAggregateOutputType = {
    id: number | null
    classId: number | null
    teacherId: number | null
  }

  export type RegisterMinAggregateOutputType = {
    id: number | null
    classId: number | null
    teacherId: number | null
    date: Date | null
    status: string | null
  }

  export type RegisterMaxAggregateOutputType = {
    id: number | null
    classId: number | null
    teacherId: number | null
    date: Date | null
    status: string | null
  }

  export type RegisterCountAggregateOutputType = {
    id: number
    classId: number
    teacherId: number
    date: number
    status: number
    _all: number
  }


  export type RegisterAvgAggregateInputType = {
    id?: true
    classId?: true
    teacherId?: true
  }

  export type RegisterSumAggregateInputType = {
    id?: true
    classId?: true
    teacherId?: true
  }

  export type RegisterMinAggregateInputType = {
    id?: true
    classId?: true
    teacherId?: true
    date?: true
    status?: true
  }

  export type RegisterMaxAggregateInputType = {
    id?: true
    classId?: true
    teacherId?: true
    date?: true
    status?: true
  }

  export type RegisterCountAggregateInputType = {
    id?: true
    classId?: true
    teacherId?: true
    date?: true
    status?: true
    _all?: true
  }

  export type RegisterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Register to aggregate.
     */
    where?: RegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registers to fetch.
     */
    orderBy?: RegisterOrderByWithRelationInput | RegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registers
    **/
    _count?: true | RegisterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegisterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegisterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegisterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegisterMaxAggregateInputType
  }

  export type GetRegisterAggregateType<T extends RegisterAggregateArgs> = {
        [P in keyof T & keyof AggregateRegister]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegister[P]>
      : GetScalarType<T[P], AggregateRegister[P]>
  }




  export type RegisterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegisterWhereInput
    orderBy?: RegisterOrderByWithAggregationInput | RegisterOrderByWithAggregationInput[]
    by: RegisterScalarFieldEnum[] | RegisterScalarFieldEnum
    having?: RegisterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegisterCountAggregateInputType | true
    _avg?: RegisterAvgAggregateInputType
    _sum?: RegisterSumAggregateInputType
    _min?: RegisterMinAggregateInputType
    _max?: RegisterMaxAggregateInputType
  }

  export type RegisterGroupByOutputType = {
    id: number
    classId: number
    teacherId: number
    date: Date
    status: string
    _count: RegisterCountAggregateOutputType | null
    _avg: RegisterAvgAggregateOutputType | null
    _sum: RegisterSumAggregateOutputType | null
    _min: RegisterMinAggregateOutputType | null
    _max: RegisterMaxAggregateOutputType | null
  }

  type GetRegisterGroupByPayload<T extends RegisterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegisterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegisterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegisterGroupByOutputType[P]>
            : GetScalarType<T[P], RegisterGroupByOutputType[P]>
        }
      >
    >


  export type RegisterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    teacherId?: boolean
    date?: boolean
    status?: boolean
    Attendance?: boolean | Register$AttendanceArgs<ExtArgs>
    cls?: boolean | ClsDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    _count?: boolean | RegisterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["register"]>

  export type RegisterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    teacherId?: boolean
    date?: boolean
    status?: boolean
    cls?: boolean | ClsDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["register"]>

  export type RegisterSelectScalar = {
    id?: boolean
    classId?: boolean
    teacherId?: boolean
    date?: boolean
    status?: boolean
  }

  export type RegisterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Attendance?: boolean | Register$AttendanceArgs<ExtArgs>
    cls?: boolean | ClsDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    _count?: boolean | RegisterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegisterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cls?: boolean | ClsDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $RegisterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Register"
    objects: {
      Attendance: Prisma.$AttendancePayload<ExtArgs>[]
      cls: Prisma.$ClsPayload<ExtArgs>
      teacher: Prisma.$TeacherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      classId: number
      teacherId: number
      date: Date
      status: string
    }, ExtArgs["result"]["register"]>
    composites: {}
  }

  type RegisterGetPayload<S extends boolean | null | undefined | RegisterDefaultArgs> = $Result.GetResult<Prisma.$RegisterPayload, S>

  type RegisterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RegisterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RegisterCountAggregateInputType | true
    }

  export interface RegisterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Register'], meta: { name: 'Register' } }
    /**
     * Find zero or one Register that matches the filter.
     * @param {RegisterFindUniqueArgs} args - Arguments to find a Register
     * @example
     * // Get one Register
     * const register = await prisma.register.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegisterFindUniqueArgs>(args: SelectSubset<T, RegisterFindUniqueArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Register that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RegisterFindUniqueOrThrowArgs} args - Arguments to find a Register
     * @example
     * // Get one Register
     * const register = await prisma.register.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegisterFindUniqueOrThrowArgs>(args: SelectSubset<T, RegisterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Register that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterFindFirstArgs} args - Arguments to find a Register
     * @example
     * // Get one Register
     * const register = await prisma.register.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegisterFindFirstArgs>(args?: SelectSubset<T, RegisterFindFirstArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Register that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterFindFirstOrThrowArgs} args - Arguments to find a Register
     * @example
     * // Get one Register
     * const register = await prisma.register.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegisterFindFirstOrThrowArgs>(args?: SelectSubset<T, RegisterFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Registers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registers
     * const registers = await prisma.register.findMany()
     * 
     * // Get first 10 Registers
     * const registers = await prisma.register.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registerWithIdOnly = await prisma.register.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegisterFindManyArgs>(args?: SelectSubset<T, RegisterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Register.
     * @param {RegisterCreateArgs} args - Arguments to create a Register.
     * @example
     * // Create one Register
     * const Register = await prisma.register.create({
     *   data: {
     *     // ... data to create a Register
     *   }
     * })
     * 
     */
    create<T extends RegisterCreateArgs>(args: SelectSubset<T, RegisterCreateArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Registers.
     * @param {RegisterCreateManyArgs} args - Arguments to create many Registers.
     * @example
     * // Create many Registers
     * const register = await prisma.register.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegisterCreateManyArgs>(args?: SelectSubset<T, RegisterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registers and returns the data saved in the database.
     * @param {RegisterCreateManyAndReturnArgs} args - Arguments to create many Registers.
     * @example
     * // Create many Registers
     * const register = await prisma.register.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registers and only return the `id`
     * const registerWithIdOnly = await prisma.register.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegisterCreateManyAndReturnArgs>(args?: SelectSubset<T, RegisterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Register.
     * @param {RegisterDeleteArgs} args - Arguments to delete one Register.
     * @example
     * // Delete one Register
     * const Register = await prisma.register.delete({
     *   where: {
     *     // ... filter to delete one Register
     *   }
     * })
     * 
     */
    delete<T extends RegisterDeleteArgs>(args: SelectSubset<T, RegisterDeleteArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Register.
     * @param {RegisterUpdateArgs} args - Arguments to update one Register.
     * @example
     * // Update one Register
     * const register = await prisma.register.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegisterUpdateArgs>(args: SelectSubset<T, RegisterUpdateArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Registers.
     * @param {RegisterDeleteManyArgs} args - Arguments to filter Registers to delete.
     * @example
     * // Delete a few Registers
     * const { count } = await prisma.register.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegisterDeleteManyArgs>(args?: SelectSubset<T, RegisterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registers
     * const register = await prisma.register.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegisterUpdateManyArgs>(args: SelectSubset<T, RegisterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Register.
     * @param {RegisterUpsertArgs} args - Arguments to update or create a Register.
     * @example
     * // Update or create a Register
     * const register = await prisma.register.upsert({
     *   create: {
     *     // ... data to create a Register
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Register we want to update
     *   }
     * })
     */
    upsert<T extends RegisterUpsertArgs>(args: SelectSubset<T, RegisterUpsertArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Registers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterCountArgs} args - Arguments to filter Registers to count.
     * @example
     * // Count the number of Registers
     * const count = await prisma.register.count({
     *   where: {
     *     // ... the filter for the Registers we want to count
     *   }
     * })
    **/
    count<T extends RegisterCountArgs>(
      args?: Subset<T, RegisterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegisterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Register.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegisterAggregateArgs>(args: Subset<T, RegisterAggregateArgs>): Prisma.PrismaPromise<GetRegisterAggregateType<T>>

    /**
     * Group by Register.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterGroupByArgs} args - Group by arguments.
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
      T extends RegisterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegisterGroupByArgs['orderBy'] }
        : { orderBy?: RegisterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegisterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegisterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Register model
   */
  readonly fields: RegisterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Register.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegisterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Attendance<T extends Register$AttendanceArgs<ExtArgs> = {}>(args?: Subset<T, Register$AttendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany"> | Null>
    cls<T extends ClsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClsDefaultArgs<ExtArgs>>): Prisma__ClsClient<$Result.GetResult<Prisma.$ClsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Register model
   */ 
  interface RegisterFieldRefs {
    readonly id: FieldRef<"Register", 'Int'>
    readonly classId: FieldRef<"Register", 'Int'>
    readonly teacherId: FieldRef<"Register", 'Int'>
    readonly date: FieldRef<"Register", 'DateTime'>
    readonly status: FieldRef<"Register", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Register findUnique
   */
  export type RegisterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * Filter, which Register to fetch.
     */
    where: RegisterWhereUniqueInput
  }

  /**
   * Register findUniqueOrThrow
   */
  export type RegisterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * Filter, which Register to fetch.
     */
    where: RegisterWhereUniqueInput
  }

  /**
   * Register findFirst
   */
  export type RegisterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * Filter, which Register to fetch.
     */
    where?: RegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registers to fetch.
     */
    orderBy?: RegisterOrderByWithRelationInput | RegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registers.
     */
    cursor?: RegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registers.
     */
    distinct?: RegisterScalarFieldEnum | RegisterScalarFieldEnum[]
  }

  /**
   * Register findFirstOrThrow
   */
  export type RegisterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * Filter, which Register to fetch.
     */
    where?: RegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registers to fetch.
     */
    orderBy?: RegisterOrderByWithRelationInput | RegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registers.
     */
    cursor?: RegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registers.
     */
    distinct?: RegisterScalarFieldEnum | RegisterScalarFieldEnum[]
  }

  /**
   * Register findMany
   */
  export type RegisterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * Filter, which Registers to fetch.
     */
    where?: RegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registers to fetch.
     */
    orderBy?: RegisterOrderByWithRelationInput | RegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registers.
     */
    cursor?: RegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registers.
     */
    skip?: number
    distinct?: RegisterScalarFieldEnum | RegisterScalarFieldEnum[]
  }

  /**
   * Register create
   */
  export type RegisterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * The data needed to create a Register.
     */
    data: XOR<RegisterCreateInput, RegisterUncheckedCreateInput>
  }

  /**
   * Register createMany
   */
  export type RegisterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registers.
     */
    data: RegisterCreateManyInput | RegisterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Register createManyAndReturn
   */
  export type RegisterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Registers.
     */
    data: RegisterCreateManyInput | RegisterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Register update
   */
  export type RegisterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * The data needed to update a Register.
     */
    data: XOR<RegisterUpdateInput, RegisterUncheckedUpdateInput>
    /**
     * Choose, which Register to update.
     */
    where: RegisterWhereUniqueInput
  }

  /**
   * Register updateMany
   */
  export type RegisterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registers.
     */
    data: XOR<RegisterUpdateManyMutationInput, RegisterUncheckedUpdateManyInput>
    /**
     * Filter which Registers to update
     */
    where?: RegisterWhereInput
  }

  /**
   * Register upsert
   */
  export type RegisterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * The filter to search for the Register to update in case it exists.
     */
    where: RegisterWhereUniqueInput
    /**
     * In case the Register found by the `where` argument doesn't exist, create a new Register with this data.
     */
    create: XOR<RegisterCreateInput, RegisterUncheckedCreateInput>
    /**
     * In case the Register was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegisterUpdateInput, RegisterUncheckedUpdateInput>
  }

  /**
   * Register delete
   */
  export type RegisterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
    /**
     * Filter which Register to delete.
     */
    where: RegisterWhereUniqueInput
  }

  /**
   * Register deleteMany
   */
  export type RegisterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registers to delete
     */
    where?: RegisterWhereInput
  }

  /**
   * Register.Attendance
   */
  export type Register$AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Register without action
   */
  export type RegisterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Register
     */
    select?: RegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisterInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    registerId: number | null
    lateMinutes: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    registerId: number | null
    lateMinutes: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    registerId: number | null
    status: string | null
    comment: string | null
    lateMinutes: number | null
    date: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    registerId: number | null
    status: string | null
    comment: string | null
    lateMinutes: number | null
    date: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    studentId: number
    registerId: number
    status: number
    comment: number
    lateMinutes: number
    date: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    id?: true
    studentId?: true
    registerId?: true
    lateMinutes?: true
  }

  export type AttendanceSumAggregateInputType = {
    id?: true
    studentId?: true
    registerId?: true
    lateMinutes?: true
  }

  export type AttendanceMinAggregateInputType = {
    id?: true
    studentId?: true
    registerId?: true
    status?: true
    comment?: true
    lateMinutes?: true
    date?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    studentId?: true
    registerId?: true
    status?: true
    comment?: true
    lateMinutes?: true
    date?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    studentId?: true
    registerId?: true
    status?: true
    comment?: true
    lateMinutes?: true
    date?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: number
    studentId: number
    registerId: number
    status: string
    comment: string | null
    lateMinutes: number | null
    date: Date
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    registerId?: boolean
    status?: boolean
    comment?: boolean
    lateMinutes?: boolean
    date?: boolean
    register?: boolean | RegisterDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    registerId?: boolean
    status?: boolean
    comment?: boolean
    lateMinutes?: boolean
    date?: boolean
    register?: boolean | RegisterDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    studentId?: boolean
    registerId?: boolean
    status?: boolean
    comment?: boolean
    lateMinutes?: boolean
    date?: boolean
  }

  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    register?: boolean | RegisterDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    register?: boolean | RegisterDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      register: Prisma.$RegisterPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      registerId: number
      status: string
      comment: string | null
      lateMinutes: number | null
      date: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    register<T extends RegisterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegisterDefaultArgs<ExtArgs>>): Prisma__RegisterClient<$Result.GetResult<Prisma.$RegisterPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Attendance model
   */ 
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'Int'>
    readonly studentId: FieldRef<"Attendance", 'Int'>
    readonly registerId: FieldRef<"Attendance", 'Int'>
    readonly status: FieldRef<"Attendance", 'String'>
    readonly comment: FieldRef<"Attendance", 'String'>
    readonly lateMinutes: FieldRef<"Attendance", 'Int'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model ClassView
   */

  export type AggregateClassView = {
    _count: ClassViewCountAggregateOutputType | null
    _avg: ClassViewAvgAggregateOutputType | null
    _sum: ClassViewSumAggregateOutputType | null
    _min: ClassViewMinAggregateOutputType | null
    _max: ClassViewMaxAggregateOutputType | null
  }

  export type ClassViewAvgAggregateOutputType = {
    id: number | null
    classId: number | null
  }

  export type ClassViewSumAggregateOutputType = {
    id: number | null
    classId: number | null
  }

  export type ClassViewMinAggregateOutputType = {
    id: number | null
    classId: number | null
  }

  export type ClassViewMaxAggregateOutputType = {
    id: number | null
    classId: number | null
  }

  export type ClassViewCountAggregateOutputType = {
    id: number
    classId: number
    _all: number
  }


  export type ClassViewAvgAggregateInputType = {
    id?: true
    classId?: true
  }

  export type ClassViewSumAggregateInputType = {
    id?: true
    classId?: true
  }

  export type ClassViewMinAggregateInputType = {
    id?: true
    classId?: true
  }

  export type ClassViewMaxAggregateInputType = {
    id?: true
    classId?: true
  }

  export type ClassViewCountAggregateInputType = {
    id?: true
    classId?: true
    _all?: true
  }

  export type ClassViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassView to aggregate.
     */
    where?: ClassViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassViews to fetch.
     */
    orderBy?: ClassViewOrderByWithRelationInput | ClassViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassViews
    **/
    _count?: true | ClassViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassViewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassViewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassViewMaxAggregateInputType
  }

  export type GetClassViewAggregateType<T extends ClassViewAggregateArgs> = {
        [P in keyof T & keyof AggregateClassView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassView[P]>
      : GetScalarType<T[P], AggregateClassView[P]>
  }




  export type ClassViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassViewWhereInput
    orderBy?: ClassViewOrderByWithAggregationInput | ClassViewOrderByWithAggregationInput[]
    by: ClassViewScalarFieldEnum[] | ClassViewScalarFieldEnum
    having?: ClassViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassViewCountAggregateInputType | true
    _avg?: ClassViewAvgAggregateInputType
    _sum?: ClassViewSumAggregateInputType
    _min?: ClassViewMinAggregateInputType
    _max?: ClassViewMaxAggregateInputType
  }

  export type ClassViewGroupByOutputType = {
    id: number
    classId: number
    _count: ClassViewCountAggregateOutputType | null
    _avg: ClassViewAvgAggregateOutputType | null
    _sum: ClassViewSumAggregateOutputType | null
    _min: ClassViewMinAggregateOutputType | null
    _max: ClassViewMaxAggregateOutputType | null
  }

  type GetClassViewGroupByPayload<T extends ClassViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassViewGroupByOutputType[P]>
            : GetScalarType<T[P], ClassViewGroupByOutputType[P]>
        }
      >
    >


  export type ClassViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    seat?: boolean | ClassView$seatArgs<ExtArgs>
    cls?: boolean | ClsDefaultArgs<ExtArgs>
    _count?: boolean | ClassViewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classView"]>

  export type ClassViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    cls?: boolean | ClsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classView"]>

  export type ClassViewSelectScalar = {
    id?: boolean
    classId?: boolean
  }

  export type ClassViewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seat?: boolean | ClassView$seatArgs<ExtArgs>
    cls?: boolean | ClsDefaultArgs<ExtArgs>
    _count?: boolean | ClassViewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassViewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cls?: boolean | ClsDefaultArgs<ExtArgs>
  }

  export type $ClassViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassView"
    objects: {
      seat: Prisma.$SeatPayload<ExtArgs>[]
      cls: Prisma.$ClsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      classId: number
    }, ExtArgs["result"]["classView"]>
    composites: {}
  }

  type ClassViewGetPayload<S extends boolean | null | undefined | ClassViewDefaultArgs> = $Result.GetResult<Prisma.$ClassViewPayload, S>

  type ClassViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClassViewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClassViewCountAggregateInputType | true
    }

  export interface ClassViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassView'], meta: { name: 'ClassView' } }
    /**
     * Find zero or one ClassView that matches the filter.
     * @param {ClassViewFindUniqueArgs} args - Arguments to find a ClassView
     * @example
     * // Get one ClassView
     * const classView = await prisma.classView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassViewFindUniqueArgs>(args: SelectSubset<T, ClassViewFindUniqueArgs<ExtArgs>>): Prisma__ClassViewClient<$Result.GetResult<Prisma.$ClassViewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ClassView that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClassViewFindUniqueOrThrowArgs} args - Arguments to find a ClassView
     * @example
     * // Get one ClassView
     * const classView = await prisma.classView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassViewFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassViewClient<$Result.GetResult<Prisma.$ClassViewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ClassView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassViewFindFirstArgs} args - Arguments to find a ClassView
     * @example
     * // Get one ClassView
     * const classView = await prisma.classView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassViewFindFirstArgs>(args?: SelectSubset<T, ClassViewFindFirstArgs<ExtArgs>>): Prisma__ClassViewClient<$Result.GetResult<Prisma.$ClassViewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ClassView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassViewFindFirstOrThrowArgs} args - Arguments to find a ClassView
     * @example
     * // Get one ClassView
     * const classView = await prisma.classView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassViewFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassViewClient<$Result.GetResult<Prisma.$ClassViewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ClassViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassViews
     * const classViews = await prisma.classView.findMany()
     * 
     * // Get first 10 ClassViews
     * const classViews = await prisma.classView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classViewWithIdOnly = await prisma.classView.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassViewFindManyArgs>(args?: SelectSubset<T, ClassViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassViewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ClassView.
     * @param {ClassViewCreateArgs} args - Arguments to create a ClassView.
     * @example
     * // Create one ClassView
     * const ClassView = await prisma.classView.create({
     *   data: {
     *     // ... data to create a ClassView
     *   }
     * })
     * 
     */
    create<T extends ClassViewCreateArgs>(args: SelectSubset<T, ClassViewCreateArgs<ExtArgs>>): Prisma__ClassViewClient<$Result.GetResult<Prisma.$ClassViewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ClassViews.
     * @param {ClassViewCreateManyArgs} args - Arguments to create many ClassViews.
     * @example
     * // Create many ClassViews
     * const classView = await prisma.classView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassViewCreateManyArgs>(args?: SelectSubset<T, ClassViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassViews and returns the data saved in the database.
     * @param {ClassViewCreateManyAndReturnArgs} args - Arguments to create many ClassViews.
     * @example
     * // Create many ClassViews
     * const classView = await prisma.classView.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassViews and only return the `id`
     * const classViewWithIdOnly = await prisma.classView.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassViewCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassViewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ClassView.
     * @param {ClassViewDeleteArgs} args - Arguments to delete one ClassView.
     * @example
     * // Delete one ClassView
     * const ClassView = await prisma.classView.delete({
     *   where: {
     *     // ... filter to delete one ClassView
     *   }
     * })
     * 
     */
    delete<T extends ClassViewDeleteArgs>(args: SelectSubset<T, ClassViewDeleteArgs<ExtArgs>>): Prisma__ClassViewClient<$Result.GetResult<Prisma.$ClassViewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ClassView.
     * @param {ClassViewUpdateArgs} args - Arguments to update one ClassView.
     * @example
     * // Update one ClassView
     * const classView = await prisma.classView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassViewUpdateArgs>(args: SelectSubset<T, ClassViewUpdateArgs<ExtArgs>>): Prisma__ClassViewClient<$Result.GetResult<Prisma.$ClassViewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ClassViews.
     * @param {ClassViewDeleteManyArgs} args - Arguments to filter ClassViews to delete.
     * @example
     * // Delete a few ClassViews
     * const { count } = await prisma.classView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassViewDeleteManyArgs>(args?: SelectSubset<T, ClassViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassViews
     * const classView = await prisma.classView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassViewUpdateManyArgs>(args: SelectSubset<T, ClassViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClassView.
     * @param {ClassViewUpsertArgs} args - Arguments to update or create a ClassView.
     * @example
     * // Update or create a ClassView
     * const classView = await prisma.classView.upsert({
     *   create: {
     *     // ... data to create a ClassView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassView we want to update
     *   }
     * })
     */
    upsert<T extends ClassViewUpsertArgs>(args: SelectSubset<T, ClassViewUpsertArgs<ExtArgs>>): Prisma__ClassViewClient<$Result.GetResult<Prisma.$ClassViewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ClassViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassViewCountArgs} args - Arguments to filter ClassViews to count.
     * @example
     * // Count the number of ClassViews
     * const count = await prisma.classView.count({
     *   where: {
     *     // ... the filter for the ClassViews we want to count
     *   }
     * })
    **/
    count<T extends ClassViewCountArgs>(
      args?: Subset<T, ClassViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassViewAggregateArgs>(args: Subset<T, ClassViewAggregateArgs>): Prisma.PrismaPromise<GetClassViewAggregateType<T>>

    /**
     * Group by ClassView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassViewGroupByArgs} args - Group by arguments.
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
      T extends ClassViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassViewGroupByArgs['orderBy'] }
        : { orderBy?: ClassViewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassView model
   */
  readonly fields: ClassViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seat<T extends ClassView$seatArgs<ExtArgs> = {}>(args?: Subset<T, ClassView$seatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findMany"> | Null>
    cls<T extends ClsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClsDefaultArgs<ExtArgs>>): Prisma__ClsClient<$Result.GetResult<Prisma.$ClsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ClassView model
   */ 
  interface ClassViewFieldRefs {
    readonly id: FieldRef<"ClassView", 'Int'>
    readonly classId: FieldRef<"ClassView", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ClassView findUnique
   */
  export type ClassViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassView
     */
    select?: ClassViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassViewInclude<ExtArgs> | null
    /**
     * Filter, which ClassView to fetch.
     */
    where: ClassViewWhereUniqueInput
  }

  /**
   * ClassView findUniqueOrThrow
   */
  export type ClassViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassView
     */
    select?: ClassViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassViewInclude<ExtArgs> | null
    /**
     * Filter, which ClassView to fetch.
     */
    where: ClassViewWhereUniqueInput
  }

  /**
   * ClassView findFirst
   */
  export type ClassViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassView
     */
    select?: ClassViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassViewInclude<ExtArgs> | null
    /**
     * Filter, which ClassView to fetch.
     */
    where?: ClassViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassViews to fetch.
     */
    orderBy?: ClassViewOrderByWithRelationInput | ClassViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassViews.
     */
    cursor?: ClassViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassViews.
     */
    distinct?: ClassViewScalarFieldEnum | ClassViewScalarFieldEnum[]
  }

  /**
   * ClassView findFirstOrThrow
   */
  export type ClassViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassView
     */
    select?: ClassViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassViewInclude<ExtArgs> | null
    /**
     * Filter, which ClassView to fetch.
     */
    where?: ClassViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassViews to fetch.
     */
    orderBy?: ClassViewOrderByWithRelationInput | ClassViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassViews.
     */
    cursor?: ClassViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassViews.
     */
    distinct?: ClassViewScalarFieldEnum | ClassViewScalarFieldEnum[]
  }

  /**
   * ClassView findMany
   */
  export type ClassViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassView
     */
    select?: ClassViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassViewInclude<ExtArgs> | null
    /**
     * Filter, which ClassViews to fetch.
     */
    where?: ClassViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassViews to fetch.
     */
    orderBy?: ClassViewOrderByWithRelationInput | ClassViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassViews.
     */
    cursor?: ClassViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassViews.
     */
    skip?: number
    distinct?: ClassViewScalarFieldEnum | ClassViewScalarFieldEnum[]
  }

  /**
   * ClassView create
   */
  export type ClassViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassView
     */
    select?: ClassViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassViewInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassView.
     */
    data: XOR<ClassViewCreateInput, ClassViewUncheckedCreateInput>
  }

  /**
   * ClassView createMany
   */
  export type ClassViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassViews.
     */
    data: ClassViewCreateManyInput | ClassViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassView createManyAndReturn
   */
  export type ClassViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassView
     */
    select?: ClassViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ClassViews.
     */
    data: ClassViewCreateManyInput | ClassViewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassViewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassView update
   */
  export type ClassViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassView
     */
    select?: ClassViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassViewInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassView.
     */
    data: XOR<ClassViewUpdateInput, ClassViewUncheckedUpdateInput>
    /**
     * Choose, which ClassView to update.
     */
    where: ClassViewWhereUniqueInput
  }

  /**
   * ClassView updateMany
   */
  export type ClassViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassViews.
     */
    data: XOR<ClassViewUpdateManyMutationInput, ClassViewUncheckedUpdateManyInput>
    /**
     * Filter which ClassViews to update
     */
    where?: ClassViewWhereInput
  }

  /**
   * ClassView upsert
   */
  export type ClassViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassView
     */
    select?: ClassViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassViewInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassView to update in case it exists.
     */
    where: ClassViewWhereUniqueInput
    /**
     * In case the ClassView found by the `where` argument doesn't exist, create a new ClassView with this data.
     */
    create: XOR<ClassViewCreateInput, ClassViewUncheckedCreateInput>
    /**
     * In case the ClassView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassViewUpdateInput, ClassViewUncheckedUpdateInput>
  }

  /**
   * ClassView delete
   */
  export type ClassViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassView
     */
    select?: ClassViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassViewInclude<ExtArgs> | null
    /**
     * Filter which ClassView to delete.
     */
    where: ClassViewWhereUniqueInput
  }

  /**
   * ClassView deleteMany
   */
  export type ClassViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassViews to delete
     */
    where?: ClassViewWhereInput
  }

  /**
   * ClassView.seat
   */
  export type ClassView$seatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    where?: SeatWhereInput
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    cursor?: SeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * ClassView without action
   */
  export type ClassViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassView
     */
    select?: ClassViewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassViewInclude<ExtArgs> | null
  }


  /**
   * Model Seat
   */

  export type AggregateSeat = {
    _count: SeatCountAggregateOutputType | null
    _avg: SeatAvgAggregateOutputType | null
    _sum: SeatSumAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  export type SeatAvgAggregateOutputType = {
    id: number | null
    classViewId: number | null
    studentId: number | null
    coordinates_X: number | null
    coordinates_y: number | null
  }

  export type SeatSumAggregateOutputType = {
    id: number | null
    classViewId: number | null
    studentId: number | null
    coordinates_X: number | null
    coordinates_y: number | null
  }

  export type SeatMinAggregateOutputType = {
    id: number | null
    classViewId: number | null
    studentId: number | null
    coordinates_X: number | null
    coordinates_y: number | null
  }

  export type SeatMaxAggregateOutputType = {
    id: number | null
    classViewId: number | null
    studentId: number | null
    coordinates_X: number | null
    coordinates_y: number | null
  }

  export type SeatCountAggregateOutputType = {
    id: number
    classViewId: number
    studentId: number
    coordinates_X: number
    coordinates_y: number
    _all: number
  }


  export type SeatAvgAggregateInputType = {
    id?: true
    classViewId?: true
    studentId?: true
    coordinates_X?: true
    coordinates_y?: true
  }

  export type SeatSumAggregateInputType = {
    id?: true
    classViewId?: true
    studentId?: true
    coordinates_X?: true
    coordinates_y?: true
  }

  export type SeatMinAggregateInputType = {
    id?: true
    classViewId?: true
    studentId?: true
    coordinates_X?: true
    coordinates_y?: true
  }

  export type SeatMaxAggregateInputType = {
    id?: true
    classViewId?: true
    studentId?: true
    coordinates_X?: true
    coordinates_y?: true
  }

  export type SeatCountAggregateInputType = {
    id?: true
    classViewId?: true
    studentId?: true
    coordinates_X?: true
    coordinates_y?: true
    _all?: true
  }

  export type SeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seat to aggregate.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seats
    **/
    _count?: true | SeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeatMaxAggregateInputType
  }

  export type GetSeatAggregateType<T extends SeatAggregateArgs> = {
        [P in keyof T & keyof AggregateSeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeat[P]>
      : GetScalarType<T[P], AggregateSeat[P]>
  }




  export type SeatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatWhereInput
    orderBy?: SeatOrderByWithAggregationInput | SeatOrderByWithAggregationInput[]
    by: SeatScalarFieldEnum[] | SeatScalarFieldEnum
    having?: SeatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeatCountAggregateInputType | true
    _avg?: SeatAvgAggregateInputType
    _sum?: SeatSumAggregateInputType
    _min?: SeatMinAggregateInputType
    _max?: SeatMaxAggregateInputType
  }

  export type SeatGroupByOutputType = {
    id: number
    classViewId: number
    studentId: number
    coordinates_X: number
    coordinates_y: number
    _count: SeatCountAggregateOutputType | null
    _avg: SeatAvgAggregateOutputType | null
    _sum: SeatSumAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  type GetSeatGroupByPayload<T extends SeatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeatGroupByOutputType[P]>
            : GetScalarType<T[P], SeatGroupByOutputType[P]>
        }
      >
    >


  export type SeatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classViewId?: boolean
    studentId?: boolean
    coordinates_X?: boolean
    coordinates_y?: boolean
    ClassView?: boolean | ClassViewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seat"]>

  export type SeatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classViewId?: boolean
    studentId?: boolean
    coordinates_X?: boolean
    coordinates_y?: boolean
    ClassView?: boolean | ClassViewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seat"]>

  export type SeatSelectScalar = {
    id?: boolean
    classViewId?: boolean
    studentId?: boolean
    coordinates_X?: boolean
    coordinates_y?: boolean
  }

  export type SeatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ClassView?: boolean | ClassViewDefaultArgs<ExtArgs>
  }
  export type SeatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ClassView?: boolean | ClassViewDefaultArgs<ExtArgs>
  }

  export type $SeatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seat"
    objects: {
      ClassView: Prisma.$ClassViewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      classViewId: number
      studentId: number
      coordinates_X: number
      coordinates_y: number
    }, ExtArgs["result"]["seat"]>
    composites: {}
  }

  type SeatGetPayload<S extends boolean | null | undefined | SeatDefaultArgs> = $Result.GetResult<Prisma.$SeatPayload, S>

  type SeatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SeatFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SeatCountAggregateInputType | true
    }

  export interface SeatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seat'], meta: { name: 'Seat' } }
    /**
     * Find zero or one Seat that matches the filter.
     * @param {SeatFindUniqueArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeatFindUniqueArgs>(args: SelectSubset<T, SeatFindUniqueArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Seat that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SeatFindUniqueOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeatFindUniqueOrThrowArgs>(args: SelectSubset<T, SeatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Seat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindFirstArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeatFindFirstArgs>(args?: SelectSubset<T, SeatFindFirstArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Seat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindFirstOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeatFindFirstOrThrowArgs>(args?: SelectSubset<T, SeatFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Seats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seats
     * const seats = await prisma.seat.findMany()
     * 
     * // Get first 10 Seats
     * const seats = await prisma.seat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seatWithIdOnly = await prisma.seat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeatFindManyArgs>(args?: SelectSubset<T, SeatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Seat.
     * @param {SeatCreateArgs} args - Arguments to create a Seat.
     * @example
     * // Create one Seat
     * const Seat = await prisma.seat.create({
     *   data: {
     *     // ... data to create a Seat
     *   }
     * })
     * 
     */
    create<T extends SeatCreateArgs>(args: SelectSubset<T, SeatCreateArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Seats.
     * @param {SeatCreateManyArgs} args - Arguments to create many Seats.
     * @example
     * // Create many Seats
     * const seat = await prisma.seat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeatCreateManyArgs>(args?: SelectSubset<T, SeatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seats and returns the data saved in the database.
     * @param {SeatCreateManyAndReturnArgs} args - Arguments to create many Seats.
     * @example
     * // Create many Seats
     * const seat = await prisma.seat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seats and only return the `id`
     * const seatWithIdOnly = await prisma.seat.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeatCreateManyAndReturnArgs>(args?: SelectSubset<T, SeatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Seat.
     * @param {SeatDeleteArgs} args - Arguments to delete one Seat.
     * @example
     * // Delete one Seat
     * const Seat = await prisma.seat.delete({
     *   where: {
     *     // ... filter to delete one Seat
     *   }
     * })
     * 
     */
    delete<T extends SeatDeleteArgs>(args: SelectSubset<T, SeatDeleteArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Seat.
     * @param {SeatUpdateArgs} args - Arguments to update one Seat.
     * @example
     * // Update one Seat
     * const seat = await prisma.seat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeatUpdateArgs>(args: SelectSubset<T, SeatUpdateArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Seats.
     * @param {SeatDeleteManyArgs} args - Arguments to filter Seats to delete.
     * @example
     * // Delete a few Seats
     * const { count } = await prisma.seat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeatDeleteManyArgs>(args?: SelectSubset<T, SeatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seats
     * const seat = await prisma.seat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeatUpdateManyArgs>(args: SelectSubset<T, SeatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Seat.
     * @param {SeatUpsertArgs} args - Arguments to update or create a Seat.
     * @example
     * // Update or create a Seat
     * const seat = await prisma.seat.upsert({
     *   create: {
     *     // ... data to create a Seat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seat we want to update
     *   }
     * })
     */
    upsert<T extends SeatUpsertArgs>(args: SelectSubset<T, SeatUpsertArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatCountArgs} args - Arguments to filter Seats to count.
     * @example
     * // Count the number of Seats
     * const count = await prisma.seat.count({
     *   where: {
     *     // ... the filter for the Seats we want to count
     *   }
     * })
    **/
    count<T extends SeatCountArgs>(
      args?: Subset<T, SeatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeatAggregateArgs>(args: Subset<T, SeatAggregateArgs>): Prisma.PrismaPromise<GetSeatAggregateType<T>>

    /**
     * Group by Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatGroupByArgs} args - Group by arguments.
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
      T extends SeatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeatGroupByArgs['orderBy'] }
        : { orderBy?: SeatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seat model
   */
  readonly fields: SeatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ClassView<T extends ClassViewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassViewDefaultArgs<ExtArgs>>): Prisma__ClassViewClient<$Result.GetResult<Prisma.$ClassViewPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Seat model
   */ 
  interface SeatFieldRefs {
    readonly id: FieldRef<"Seat", 'Int'>
    readonly classViewId: FieldRef<"Seat", 'Int'>
    readonly studentId: FieldRef<"Seat", 'Int'>
    readonly coordinates_X: FieldRef<"Seat", 'Float'>
    readonly coordinates_y: FieldRef<"Seat", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Seat findUnique
   */
  export type SeatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat findUniqueOrThrow
   */
  export type SeatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat findFirst
   */
  export type SeatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat findFirstOrThrow
   */
  export type SeatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat findMany
   */
  export type SeatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seats to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat create
   */
  export type SeatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The data needed to create a Seat.
     */
    data: XOR<SeatCreateInput, SeatUncheckedCreateInput>
  }

  /**
   * Seat createMany
   */
  export type SeatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seats.
     */
    data: SeatCreateManyInput | SeatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seat createManyAndReturn
   */
  export type SeatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Seats.
     */
    data: SeatCreateManyInput | SeatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seat update
   */
  export type SeatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The data needed to update a Seat.
     */
    data: XOR<SeatUpdateInput, SeatUncheckedUpdateInput>
    /**
     * Choose, which Seat to update.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat updateMany
   */
  export type SeatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seats.
     */
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyInput>
    /**
     * Filter which Seats to update
     */
    where?: SeatWhereInput
  }

  /**
   * Seat upsert
   */
  export type SeatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The filter to search for the Seat to update in case it exists.
     */
    where: SeatWhereUniqueInput
    /**
     * In case the Seat found by the `where` argument doesn't exist, create a new Seat with this data.
     */
    create: XOR<SeatCreateInput, SeatUncheckedCreateInput>
    /**
     * In case the Seat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeatUpdateInput, SeatUncheckedUpdateInput>
  }

  /**
   * Seat delete
   */
  export type SeatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter which Seat to delete.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat deleteMany
   */
  export type SeatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seats to delete
     */
    where?: SeatWhereInput
  }

  /**
   * Seat without action
   */
  export type SeatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
  }


  /**
   * Model Layout
   */

  export type AggregateLayout = {
    _count: LayoutCountAggregateOutputType | null
    _avg: LayoutAvgAggregateOutputType | null
    _sum: LayoutSumAggregateOutputType | null
    _min: LayoutMinAggregateOutputType | null
    _max: LayoutMaxAggregateOutputType | null
  }

  export type LayoutAvgAggregateOutputType = {
    id: number | null
  }

  export type LayoutSumAggregateOutputType = {
    id: number | null
  }

  export type LayoutMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LayoutMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LayoutCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LayoutAvgAggregateInputType = {
    id?: true
  }

  export type LayoutSumAggregateInputType = {
    id?: true
  }

  export type LayoutMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LayoutMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LayoutCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LayoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Layout to aggregate.
     */
    where?: LayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layouts to fetch.
     */
    orderBy?: LayoutOrderByWithRelationInput | LayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Layouts
    **/
    _count?: true | LayoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LayoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LayoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LayoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LayoutMaxAggregateInputType
  }

  export type GetLayoutAggregateType<T extends LayoutAggregateArgs> = {
        [P in keyof T & keyof AggregateLayout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLayout[P]>
      : GetScalarType<T[P], AggregateLayout[P]>
  }




  export type LayoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayoutWhereInput
    orderBy?: LayoutOrderByWithAggregationInput | LayoutOrderByWithAggregationInput[]
    by: LayoutScalarFieldEnum[] | LayoutScalarFieldEnum
    having?: LayoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LayoutCountAggregateInputType | true
    _avg?: LayoutAvgAggregateInputType
    _sum?: LayoutSumAggregateInputType
    _min?: LayoutMinAggregateInputType
    _max?: LayoutMaxAggregateInputType
  }

  export type LayoutGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: LayoutCountAggregateOutputType | null
    _avg: LayoutAvgAggregateOutputType | null
    _sum: LayoutSumAggregateOutputType | null
    _min: LayoutMinAggregateOutputType | null
    _max: LayoutMaxAggregateOutputType | null
  }

  type GetLayoutGroupByPayload<T extends LayoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LayoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LayoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LayoutGroupByOutputType[P]>
            : GetScalarType<T[P], LayoutGroupByOutputType[P]>
        }
      >
    >


  export type LayoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    desks?: boolean | Layout$desksArgs<ExtArgs>
    seatingPlans?: boolean | Layout$seatingPlansArgs<ExtArgs>
    classes?: boolean | Layout$classesArgs<ExtArgs>
    _count?: boolean | LayoutCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layout"]>

  export type LayoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["layout"]>

  export type LayoutSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LayoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    desks?: boolean | Layout$desksArgs<ExtArgs>
    seatingPlans?: boolean | Layout$seatingPlansArgs<ExtArgs>
    classes?: boolean | Layout$classesArgs<ExtArgs>
    _count?: boolean | LayoutCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LayoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LayoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Layout"
    objects: {
      desks: Prisma.$DeskPayload<ExtArgs>[]
      seatingPlans: Prisma.$SeatingPlanPayload<ExtArgs>[]
      classes: Prisma.$ClsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["layout"]>
    composites: {}
  }

  type LayoutGetPayload<S extends boolean | null | undefined | LayoutDefaultArgs> = $Result.GetResult<Prisma.$LayoutPayload, S>

  type LayoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LayoutFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LayoutCountAggregateInputType | true
    }

  export interface LayoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Layout'], meta: { name: 'Layout' } }
    /**
     * Find zero or one Layout that matches the filter.
     * @param {LayoutFindUniqueArgs} args - Arguments to find a Layout
     * @example
     * // Get one Layout
     * const layout = await prisma.layout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LayoutFindUniqueArgs>(args: SelectSubset<T, LayoutFindUniqueArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Layout that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LayoutFindUniqueOrThrowArgs} args - Arguments to find a Layout
     * @example
     * // Get one Layout
     * const layout = await prisma.layout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LayoutFindUniqueOrThrowArgs>(args: SelectSubset<T, LayoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Layout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutFindFirstArgs} args - Arguments to find a Layout
     * @example
     * // Get one Layout
     * const layout = await prisma.layout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LayoutFindFirstArgs>(args?: SelectSubset<T, LayoutFindFirstArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Layout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutFindFirstOrThrowArgs} args - Arguments to find a Layout
     * @example
     * // Get one Layout
     * const layout = await prisma.layout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LayoutFindFirstOrThrowArgs>(args?: SelectSubset<T, LayoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Layouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Layouts
     * const layouts = await prisma.layout.findMany()
     * 
     * // Get first 10 Layouts
     * const layouts = await prisma.layout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const layoutWithIdOnly = await prisma.layout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LayoutFindManyArgs>(args?: SelectSubset<T, LayoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Layout.
     * @param {LayoutCreateArgs} args - Arguments to create a Layout.
     * @example
     * // Create one Layout
     * const Layout = await prisma.layout.create({
     *   data: {
     *     // ... data to create a Layout
     *   }
     * })
     * 
     */
    create<T extends LayoutCreateArgs>(args: SelectSubset<T, LayoutCreateArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Layouts.
     * @param {LayoutCreateManyArgs} args - Arguments to create many Layouts.
     * @example
     * // Create many Layouts
     * const layout = await prisma.layout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LayoutCreateManyArgs>(args?: SelectSubset<T, LayoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Layouts and returns the data saved in the database.
     * @param {LayoutCreateManyAndReturnArgs} args - Arguments to create many Layouts.
     * @example
     * // Create many Layouts
     * const layout = await prisma.layout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Layouts and only return the `id`
     * const layoutWithIdOnly = await prisma.layout.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LayoutCreateManyAndReturnArgs>(args?: SelectSubset<T, LayoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Layout.
     * @param {LayoutDeleteArgs} args - Arguments to delete one Layout.
     * @example
     * // Delete one Layout
     * const Layout = await prisma.layout.delete({
     *   where: {
     *     // ... filter to delete one Layout
     *   }
     * })
     * 
     */
    delete<T extends LayoutDeleteArgs>(args: SelectSubset<T, LayoutDeleteArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Layout.
     * @param {LayoutUpdateArgs} args - Arguments to update one Layout.
     * @example
     * // Update one Layout
     * const layout = await prisma.layout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LayoutUpdateArgs>(args: SelectSubset<T, LayoutUpdateArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Layouts.
     * @param {LayoutDeleteManyArgs} args - Arguments to filter Layouts to delete.
     * @example
     * // Delete a few Layouts
     * const { count } = await prisma.layout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LayoutDeleteManyArgs>(args?: SelectSubset<T, LayoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Layouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Layouts
     * const layout = await prisma.layout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LayoutUpdateManyArgs>(args: SelectSubset<T, LayoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Layout.
     * @param {LayoutUpsertArgs} args - Arguments to update or create a Layout.
     * @example
     * // Update or create a Layout
     * const layout = await prisma.layout.upsert({
     *   create: {
     *     // ... data to create a Layout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Layout we want to update
     *   }
     * })
     */
    upsert<T extends LayoutUpsertArgs>(args: SelectSubset<T, LayoutUpsertArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Layouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutCountArgs} args - Arguments to filter Layouts to count.
     * @example
     * // Count the number of Layouts
     * const count = await prisma.layout.count({
     *   where: {
     *     // ... the filter for the Layouts we want to count
     *   }
     * })
    **/
    count<T extends LayoutCountArgs>(
      args?: Subset<T, LayoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LayoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Layout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LayoutAggregateArgs>(args: Subset<T, LayoutAggregateArgs>): Prisma.PrismaPromise<GetLayoutAggregateType<T>>

    /**
     * Group by Layout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayoutGroupByArgs} args - Group by arguments.
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
      T extends LayoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LayoutGroupByArgs['orderBy'] }
        : { orderBy?: LayoutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LayoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLayoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Layout model
   */
  readonly fields: LayoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Layout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LayoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    desks<T extends Layout$desksArgs<ExtArgs> = {}>(args?: Subset<T, Layout$desksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "findMany"> | Null>
    seatingPlans<T extends Layout$seatingPlansArgs<ExtArgs> = {}>(args?: Subset<T, Layout$seatingPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatingPlanPayload<ExtArgs>, T, "findMany"> | Null>
    classes<T extends Layout$classesArgs<ExtArgs> = {}>(args?: Subset<T, Layout$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Layout model
   */ 
  interface LayoutFieldRefs {
    readonly id: FieldRef<"Layout", 'Int'>
    readonly name: FieldRef<"Layout", 'String'>
    readonly createdAt: FieldRef<"Layout", 'DateTime'>
    readonly updatedAt: FieldRef<"Layout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Layout findUnique
   */
  export type LayoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * Filter, which Layout to fetch.
     */
    where: LayoutWhereUniqueInput
  }

  /**
   * Layout findUniqueOrThrow
   */
  export type LayoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * Filter, which Layout to fetch.
     */
    where: LayoutWhereUniqueInput
  }

  /**
   * Layout findFirst
   */
  export type LayoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * Filter, which Layout to fetch.
     */
    where?: LayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layouts to fetch.
     */
    orderBy?: LayoutOrderByWithRelationInput | LayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Layouts.
     */
    cursor?: LayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Layouts.
     */
    distinct?: LayoutScalarFieldEnum | LayoutScalarFieldEnum[]
  }

  /**
   * Layout findFirstOrThrow
   */
  export type LayoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * Filter, which Layout to fetch.
     */
    where?: LayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layouts to fetch.
     */
    orderBy?: LayoutOrderByWithRelationInput | LayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Layouts.
     */
    cursor?: LayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Layouts.
     */
    distinct?: LayoutScalarFieldEnum | LayoutScalarFieldEnum[]
  }

  /**
   * Layout findMany
   */
  export type LayoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * Filter, which Layouts to fetch.
     */
    where?: LayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layouts to fetch.
     */
    orderBy?: LayoutOrderByWithRelationInput | LayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Layouts.
     */
    cursor?: LayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layouts.
     */
    skip?: number
    distinct?: LayoutScalarFieldEnum | LayoutScalarFieldEnum[]
  }

  /**
   * Layout create
   */
  export type LayoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Layout.
     */
    data: XOR<LayoutCreateInput, LayoutUncheckedCreateInput>
  }

  /**
   * Layout createMany
   */
  export type LayoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Layouts.
     */
    data: LayoutCreateManyInput | LayoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Layout createManyAndReturn
   */
  export type LayoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Layouts.
     */
    data: LayoutCreateManyInput | LayoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Layout update
   */
  export type LayoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Layout.
     */
    data: XOR<LayoutUpdateInput, LayoutUncheckedUpdateInput>
    /**
     * Choose, which Layout to update.
     */
    where: LayoutWhereUniqueInput
  }

  /**
   * Layout updateMany
   */
  export type LayoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Layouts.
     */
    data: XOR<LayoutUpdateManyMutationInput, LayoutUncheckedUpdateManyInput>
    /**
     * Filter which Layouts to update
     */
    where?: LayoutWhereInput
  }

  /**
   * Layout upsert
   */
  export type LayoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Layout to update in case it exists.
     */
    where: LayoutWhereUniqueInput
    /**
     * In case the Layout found by the `where` argument doesn't exist, create a new Layout with this data.
     */
    create: XOR<LayoutCreateInput, LayoutUncheckedCreateInput>
    /**
     * In case the Layout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LayoutUpdateInput, LayoutUncheckedUpdateInput>
  }

  /**
   * Layout delete
   */
  export type LayoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
    /**
     * Filter which Layout to delete.
     */
    where: LayoutWhereUniqueInput
  }

  /**
   * Layout deleteMany
   */
  export type LayoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Layouts to delete
     */
    where?: LayoutWhereInput
  }

  /**
   * Layout.desks
   */
  export type Layout$desksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
    where?: DeskWhereInput
    orderBy?: DeskOrderByWithRelationInput | DeskOrderByWithRelationInput[]
    cursor?: DeskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeskScalarFieldEnum | DeskScalarFieldEnum[]
  }

  /**
   * Layout.seatingPlans
   */
  export type Layout$seatingPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingPlan
     */
    select?: SeatingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingPlanInclude<ExtArgs> | null
    where?: SeatingPlanWhereInput
    orderBy?: SeatingPlanOrderByWithRelationInput | SeatingPlanOrderByWithRelationInput[]
    cursor?: SeatingPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeatingPlanScalarFieldEnum | SeatingPlanScalarFieldEnum[]
  }

  /**
   * Layout.classes
   */
  export type Layout$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cls
     */
    select?: ClsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClsInclude<ExtArgs> | null
    where?: ClsWhereInput
    orderBy?: ClsOrderByWithRelationInput | ClsOrderByWithRelationInput[]
    cursor?: ClsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClsScalarFieldEnum | ClsScalarFieldEnum[]
  }

  /**
   * Layout without action
   */
  export type LayoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layout
     */
    select?: LayoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayoutInclude<ExtArgs> | null
  }


  /**
   * Model Desk
   */

  export type AggregateDesk = {
    _count: DeskCountAggregateOutputType | null
    _avg: DeskAvgAggregateOutputType | null
    _sum: DeskSumAggregateOutputType | null
    _min: DeskMinAggregateOutputType | null
    _max: DeskMaxAggregateOutputType | null
  }

  export type DeskAvgAggregateOutputType = {
    id: number | null
    layoutId: number | null
    x: number | null
    y: number | null
  }

  export type DeskSumAggregateOutputType = {
    id: number | null
    layoutId: number | null
    x: number | null
    y: number | null
  }

  export type DeskMinAggregateOutputType = {
    id: number | null
    layoutId: number | null
    x: number | null
    y: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeskMaxAggregateOutputType = {
    id: number | null
    layoutId: number | null
    x: number | null
    y: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeskCountAggregateOutputType = {
    id: number
    layoutId: number
    x: number
    y: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeskAvgAggregateInputType = {
    id?: true
    layoutId?: true
    x?: true
    y?: true
  }

  export type DeskSumAggregateInputType = {
    id?: true
    layoutId?: true
    x?: true
    y?: true
  }

  export type DeskMinAggregateInputType = {
    id?: true
    layoutId?: true
    x?: true
    y?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeskMaxAggregateInputType = {
    id?: true
    layoutId?: true
    x?: true
    y?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeskCountAggregateInputType = {
    id?: true
    layoutId?: true
    x?: true
    y?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Desk to aggregate.
     */
    where?: DeskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Desks to fetch.
     */
    orderBy?: DeskOrderByWithRelationInput | DeskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Desks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Desks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Desks
    **/
    _count?: true | DeskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeskMaxAggregateInputType
  }

  export type GetDeskAggregateType<T extends DeskAggregateArgs> = {
        [P in keyof T & keyof AggregateDesk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDesk[P]>
      : GetScalarType<T[P], AggregateDesk[P]>
  }




  export type DeskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeskWhereInput
    orderBy?: DeskOrderByWithAggregationInput | DeskOrderByWithAggregationInput[]
    by: DeskScalarFieldEnum[] | DeskScalarFieldEnum
    having?: DeskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeskCountAggregateInputType | true
    _avg?: DeskAvgAggregateInputType
    _sum?: DeskSumAggregateInputType
    _min?: DeskMinAggregateInputType
    _max?: DeskMaxAggregateInputType
  }

  export type DeskGroupByOutputType = {
    id: number
    layoutId: number
    x: number
    y: number
    createdAt: Date
    updatedAt: Date
    _count: DeskCountAggregateOutputType | null
    _avg: DeskAvgAggregateOutputType | null
    _sum: DeskSumAggregateOutputType | null
    _min: DeskMinAggregateOutputType | null
    _max: DeskMaxAggregateOutputType | null
  }

  type GetDeskGroupByPayload<T extends DeskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeskGroupByOutputType[P]>
            : GetScalarType<T[P], DeskGroupByOutputType[P]>
        }
      >
    >


  export type DeskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    layoutId?: boolean
    x?: boolean
    y?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    layout?: boolean | LayoutDefaultArgs<ExtArgs>
    SeatingArrangement?: boolean | Desk$SeatingArrangementArgs<ExtArgs>
    _count?: boolean | DeskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["desk"]>

  export type DeskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    layoutId?: boolean
    x?: boolean
    y?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    layout?: boolean | LayoutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["desk"]>

  export type DeskSelectScalar = {
    id?: boolean
    layoutId?: boolean
    x?: boolean
    y?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layout?: boolean | LayoutDefaultArgs<ExtArgs>
    SeatingArrangement?: boolean | Desk$SeatingArrangementArgs<ExtArgs>
    _count?: boolean | DeskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layout?: boolean | LayoutDefaultArgs<ExtArgs>
  }

  export type $DeskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Desk"
    objects: {
      layout: Prisma.$LayoutPayload<ExtArgs>
      SeatingArrangement: Prisma.$SeatingArrangementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      layoutId: number
      x: number
      y: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["desk"]>
    composites: {}
  }

  type DeskGetPayload<S extends boolean | null | undefined | DeskDefaultArgs> = $Result.GetResult<Prisma.$DeskPayload, S>

  type DeskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeskCountAggregateInputType | true
    }

  export interface DeskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Desk'], meta: { name: 'Desk' } }
    /**
     * Find zero or one Desk that matches the filter.
     * @param {DeskFindUniqueArgs} args - Arguments to find a Desk
     * @example
     * // Get one Desk
     * const desk = await prisma.desk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeskFindUniqueArgs>(args: SelectSubset<T, DeskFindUniqueArgs<ExtArgs>>): Prisma__DeskClient<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Desk that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeskFindUniqueOrThrowArgs} args - Arguments to find a Desk
     * @example
     * // Get one Desk
     * const desk = await prisma.desk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeskFindUniqueOrThrowArgs>(args: SelectSubset<T, DeskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeskClient<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Desk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeskFindFirstArgs} args - Arguments to find a Desk
     * @example
     * // Get one Desk
     * const desk = await prisma.desk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeskFindFirstArgs>(args?: SelectSubset<T, DeskFindFirstArgs<ExtArgs>>): Prisma__DeskClient<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Desk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeskFindFirstOrThrowArgs} args - Arguments to find a Desk
     * @example
     * // Get one Desk
     * const desk = await prisma.desk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeskFindFirstOrThrowArgs>(args?: SelectSubset<T, DeskFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeskClient<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Desks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Desks
     * const desks = await prisma.desk.findMany()
     * 
     * // Get first 10 Desks
     * const desks = await prisma.desk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deskWithIdOnly = await prisma.desk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeskFindManyArgs>(args?: SelectSubset<T, DeskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Desk.
     * @param {DeskCreateArgs} args - Arguments to create a Desk.
     * @example
     * // Create one Desk
     * const Desk = await prisma.desk.create({
     *   data: {
     *     // ... data to create a Desk
     *   }
     * })
     * 
     */
    create<T extends DeskCreateArgs>(args: SelectSubset<T, DeskCreateArgs<ExtArgs>>): Prisma__DeskClient<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Desks.
     * @param {DeskCreateManyArgs} args - Arguments to create many Desks.
     * @example
     * // Create many Desks
     * const desk = await prisma.desk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeskCreateManyArgs>(args?: SelectSubset<T, DeskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Desks and returns the data saved in the database.
     * @param {DeskCreateManyAndReturnArgs} args - Arguments to create many Desks.
     * @example
     * // Create many Desks
     * const desk = await prisma.desk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Desks and only return the `id`
     * const deskWithIdOnly = await prisma.desk.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeskCreateManyAndReturnArgs>(args?: SelectSubset<T, DeskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Desk.
     * @param {DeskDeleteArgs} args - Arguments to delete one Desk.
     * @example
     * // Delete one Desk
     * const Desk = await prisma.desk.delete({
     *   where: {
     *     // ... filter to delete one Desk
     *   }
     * })
     * 
     */
    delete<T extends DeskDeleteArgs>(args: SelectSubset<T, DeskDeleteArgs<ExtArgs>>): Prisma__DeskClient<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Desk.
     * @param {DeskUpdateArgs} args - Arguments to update one Desk.
     * @example
     * // Update one Desk
     * const desk = await prisma.desk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeskUpdateArgs>(args: SelectSubset<T, DeskUpdateArgs<ExtArgs>>): Prisma__DeskClient<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Desks.
     * @param {DeskDeleteManyArgs} args - Arguments to filter Desks to delete.
     * @example
     * // Delete a few Desks
     * const { count } = await prisma.desk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeskDeleteManyArgs>(args?: SelectSubset<T, DeskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Desks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Desks
     * const desk = await prisma.desk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeskUpdateManyArgs>(args: SelectSubset<T, DeskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Desk.
     * @param {DeskUpsertArgs} args - Arguments to update or create a Desk.
     * @example
     * // Update or create a Desk
     * const desk = await prisma.desk.upsert({
     *   create: {
     *     // ... data to create a Desk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Desk we want to update
     *   }
     * })
     */
    upsert<T extends DeskUpsertArgs>(args: SelectSubset<T, DeskUpsertArgs<ExtArgs>>): Prisma__DeskClient<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Desks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeskCountArgs} args - Arguments to filter Desks to count.
     * @example
     * // Count the number of Desks
     * const count = await prisma.desk.count({
     *   where: {
     *     // ... the filter for the Desks we want to count
     *   }
     * })
    **/
    count<T extends DeskCountArgs>(
      args?: Subset<T, DeskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Desk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeskAggregateArgs>(args: Subset<T, DeskAggregateArgs>): Prisma.PrismaPromise<GetDeskAggregateType<T>>

    /**
     * Group by Desk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeskGroupByArgs} args - Group by arguments.
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
      T extends DeskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeskGroupByArgs['orderBy'] }
        : { orderBy?: DeskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Desk model
   */
  readonly fields: DeskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Desk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    layout<T extends LayoutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LayoutDefaultArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    SeatingArrangement<T extends Desk$SeatingArrangementArgs<ExtArgs> = {}>(args?: Subset<T, Desk$SeatingArrangementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatingArrangementPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Desk model
   */ 
  interface DeskFieldRefs {
    readonly id: FieldRef<"Desk", 'Int'>
    readonly layoutId: FieldRef<"Desk", 'Int'>
    readonly x: FieldRef<"Desk", 'Float'>
    readonly y: FieldRef<"Desk", 'Float'>
    readonly createdAt: FieldRef<"Desk", 'DateTime'>
    readonly updatedAt: FieldRef<"Desk", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Desk findUnique
   */
  export type DeskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
    /**
     * Filter, which Desk to fetch.
     */
    where: DeskWhereUniqueInput
  }

  /**
   * Desk findUniqueOrThrow
   */
  export type DeskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
    /**
     * Filter, which Desk to fetch.
     */
    where: DeskWhereUniqueInput
  }

  /**
   * Desk findFirst
   */
  export type DeskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
    /**
     * Filter, which Desk to fetch.
     */
    where?: DeskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Desks to fetch.
     */
    orderBy?: DeskOrderByWithRelationInput | DeskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Desks.
     */
    cursor?: DeskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Desks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Desks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Desks.
     */
    distinct?: DeskScalarFieldEnum | DeskScalarFieldEnum[]
  }

  /**
   * Desk findFirstOrThrow
   */
  export type DeskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
    /**
     * Filter, which Desk to fetch.
     */
    where?: DeskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Desks to fetch.
     */
    orderBy?: DeskOrderByWithRelationInput | DeskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Desks.
     */
    cursor?: DeskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Desks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Desks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Desks.
     */
    distinct?: DeskScalarFieldEnum | DeskScalarFieldEnum[]
  }

  /**
   * Desk findMany
   */
  export type DeskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
    /**
     * Filter, which Desks to fetch.
     */
    where?: DeskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Desks to fetch.
     */
    orderBy?: DeskOrderByWithRelationInput | DeskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Desks.
     */
    cursor?: DeskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Desks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Desks.
     */
    skip?: number
    distinct?: DeskScalarFieldEnum | DeskScalarFieldEnum[]
  }

  /**
   * Desk create
   */
  export type DeskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
    /**
     * The data needed to create a Desk.
     */
    data: XOR<DeskCreateInput, DeskUncheckedCreateInput>
  }

  /**
   * Desk createMany
   */
  export type DeskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Desks.
     */
    data: DeskCreateManyInput | DeskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Desk createManyAndReturn
   */
  export type DeskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Desks.
     */
    data: DeskCreateManyInput | DeskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Desk update
   */
  export type DeskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
    /**
     * The data needed to update a Desk.
     */
    data: XOR<DeskUpdateInput, DeskUncheckedUpdateInput>
    /**
     * Choose, which Desk to update.
     */
    where: DeskWhereUniqueInput
  }

  /**
   * Desk updateMany
   */
  export type DeskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Desks.
     */
    data: XOR<DeskUpdateManyMutationInput, DeskUncheckedUpdateManyInput>
    /**
     * Filter which Desks to update
     */
    where?: DeskWhereInput
  }

  /**
   * Desk upsert
   */
  export type DeskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
    /**
     * The filter to search for the Desk to update in case it exists.
     */
    where: DeskWhereUniqueInput
    /**
     * In case the Desk found by the `where` argument doesn't exist, create a new Desk with this data.
     */
    create: XOR<DeskCreateInput, DeskUncheckedCreateInput>
    /**
     * In case the Desk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeskUpdateInput, DeskUncheckedUpdateInput>
  }

  /**
   * Desk delete
   */
  export type DeskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
    /**
     * Filter which Desk to delete.
     */
    where: DeskWhereUniqueInput
  }

  /**
   * Desk deleteMany
   */
  export type DeskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Desks to delete
     */
    where?: DeskWhereInput
  }

  /**
   * Desk.SeatingArrangement
   */
  export type Desk$SeatingArrangementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingArrangement
     */
    select?: SeatingArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingArrangementInclude<ExtArgs> | null
    where?: SeatingArrangementWhereInput
    orderBy?: SeatingArrangementOrderByWithRelationInput | SeatingArrangementOrderByWithRelationInput[]
    cursor?: SeatingArrangementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeatingArrangementScalarFieldEnum | SeatingArrangementScalarFieldEnum[]
  }

  /**
   * Desk without action
   */
  export type DeskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Desk
     */
    select?: DeskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeskInclude<ExtArgs> | null
  }


  /**
   * Model SeatingPlan
   */

  export type AggregateSeatingPlan = {
    _count: SeatingPlanCountAggregateOutputType | null
    _avg: SeatingPlanAvgAggregateOutputType | null
    _sum: SeatingPlanSumAggregateOutputType | null
    _min: SeatingPlanMinAggregateOutputType | null
    _max: SeatingPlanMaxAggregateOutputType | null
  }

  export type SeatingPlanAvgAggregateOutputType = {
    id: number | null
    layoutId: number | null
  }

  export type SeatingPlanSumAggregateOutputType = {
    id: number | null
    layoutId: number | null
  }

  export type SeatingPlanMinAggregateOutputType = {
    id: number | null
    layoutId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeatingPlanMaxAggregateOutputType = {
    id: number | null
    layoutId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeatingPlanCountAggregateOutputType = {
    id: number
    layoutId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SeatingPlanAvgAggregateInputType = {
    id?: true
    layoutId?: true
  }

  export type SeatingPlanSumAggregateInputType = {
    id?: true
    layoutId?: true
  }

  export type SeatingPlanMinAggregateInputType = {
    id?: true
    layoutId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeatingPlanMaxAggregateInputType = {
    id?: true
    layoutId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeatingPlanCountAggregateInputType = {
    id?: true
    layoutId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SeatingPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeatingPlan to aggregate.
     */
    where?: SeatingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatingPlans to fetch.
     */
    orderBy?: SeatingPlanOrderByWithRelationInput | SeatingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeatingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeatingPlans
    **/
    _count?: true | SeatingPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeatingPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeatingPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeatingPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeatingPlanMaxAggregateInputType
  }

  export type GetSeatingPlanAggregateType<T extends SeatingPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateSeatingPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeatingPlan[P]>
      : GetScalarType<T[P], AggregateSeatingPlan[P]>
  }




  export type SeatingPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatingPlanWhereInput
    orderBy?: SeatingPlanOrderByWithAggregationInput | SeatingPlanOrderByWithAggregationInput[]
    by: SeatingPlanScalarFieldEnum[] | SeatingPlanScalarFieldEnum
    having?: SeatingPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeatingPlanCountAggregateInputType | true
    _avg?: SeatingPlanAvgAggregateInputType
    _sum?: SeatingPlanSumAggregateInputType
    _min?: SeatingPlanMinAggregateInputType
    _max?: SeatingPlanMaxAggregateInputType
  }

  export type SeatingPlanGroupByOutputType = {
    id: number
    layoutId: number
    createdAt: Date
    updatedAt: Date
    _count: SeatingPlanCountAggregateOutputType | null
    _avg: SeatingPlanAvgAggregateOutputType | null
    _sum: SeatingPlanSumAggregateOutputType | null
    _min: SeatingPlanMinAggregateOutputType | null
    _max: SeatingPlanMaxAggregateOutputType | null
  }

  type GetSeatingPlanGroupByPayload<T extends SeatingPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeatingPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeatingPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeatingPlanGroupByOutputType[P]>
            : GetScalarType<T[P], SeatingPlanGroupByOutputType[P]>
        }
      >
    >


  export type SeatingPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    layoutId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    layout?: boolean | LayoutDefaultArgs<ExtArgs>
    seatingArrangement?: boolean | SeatingPlan$seatingArrangementArgs<ExtArgs>
    _count?: boolean | SeatingPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seatingPlan"]>

  export type SeatingPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    layoutId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    layout?: boolean | LayoutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seatingPlan"]>

  export type SeatingPlanSelectScalar = {
    id?: boolean
    layoutId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SeatingPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layout?: boolean | LayoutDefaultArgs<ExtArgs>
    seatingArrangement?: boolean | SeatingPlan$seatingArrangementArgs<ExtArgs>
    _count?: boolean | SeatingPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeatingPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layout?: boolean | LayoutDefaultArgs<ExtArgs>
  }

  export type $SeatingPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeatingPlan"
    objects: {
      layout: Prisma.$LayoutPayload<ExtArgs>
      seatingArrangement: Prisma.$SeatingArrangementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      layoutId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["seatingPlan"]>
    composites: {}
  }

  type SeatingPlanGetPayload<S extends boolean | null | undefined | SeatingPlanDefaultArgs> = $Result.GetResult<Prisma.$SeatingPlanPayload, S>

  type SeatingPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SeatingPlanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SeatingPlanCountAggregateInputType | true
    }

  export interface SeatingPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeatingPlan'], meta: { name: 'SeatingPlan' } }
    /**
     * Find zero or one SeatingPlan that matches the filter.
     * @param {SeatingPlanFindUniqueArgs} args - Arguments to find a SeatingPlan
     * @example
     * // Get one SeatingPlan
     * const seatingPlan = await prisma.seatingPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeatingPlanFindUniqueArgs>(args: SelectSubset<T, SeatingPlanFindUniqueArgs<ExtArgs>>): Prisma__SeatingPlanClient<$Result.GetResult<Prisma.$SeatingPlanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SeatingPlan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SeatingPlanFindUniqueOrThrowArgs} args - Arguments to find a SeatingPlan
     * @example
     * // Get one SeatingPlan
     * const seatingPlan = await prisma.seatingPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeatingPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, SeatingPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeatingPlanClient<$Result.GetResult<Prisma.$SeatingPlanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SeatingPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatingPlanFindFirstArgs} args - Arguments to find a SeatingPlan
     * @example
     * // Get one SeatingPlan
     * const seatingPlan = await prisma.seatingPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeatingPlanFindFirstArgs>(args?: SelectSubset<T, SeatingPlanFindFirstArgs<ExtArgs>>): Prisma__SeatingPlanClient<$Result.GetResult<Prisma.$SeatingPlanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SeatingPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatingPlanFindFirstOrThrowArgs} args - Arguments to find a SeatingPlan
     * @example
     * // Get one SeatingPlan
     * const seatingPlan = await prisma.seatingPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeatingPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, SeatingPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeatingPlanClient<$Result.GetResult<Prisma.$SeatingPlanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SeatingPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatingPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeatingPlans
     * const seatingPlans = await prisma.seatingPlan.findMany()
     * 
     * // Get first 10 SeatingPlans
     * const seatingPlans = await prisma.seatingPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seatingPlanWithIdOnly = await prisma.seatingPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeatingPlanFindManyArgs>(args?: SelectSubset<T, SeatingPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatingPlanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SeatingPlan.
     * @param {SeatingPlanCreateArgs} args - Arguments to create a SeatingPlan.
     * @example
     * // Create one SeatingPlan
     * const SeatingPlan = await prisma.seatingPlan.create({
     *   data: {
     *     // ... data to create a SeatingPlan
     *   }
     * })
     * 
     */
    create<T extends SeatingPlanCreateArgs>(args: SelectSubset<T, SeatingPlanCreateArgs<ExtArgs>>): Prisma__SeatingPlanClient<$Result.GetResult<Prisma.$SeatingPlanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SeatingPlans.
     * @param {SeatingPlanCreateManyArgs} args - Arguments to create many SeatingPlans.
     * @example
     * // Create many SeatingPlans
     * const seatingPlan = await prisma.seatingPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeatingPlanCreateManyArgs>(args?: SelectSubset<T, SeatingPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeatingPlans and returns the data saved in the database.
     * @param {SeatingPlanCreateManyAndReturnArgs} args - Arguments to create many SeatingPlans.
     * @example
     * // Create many SeatingPlans
     * const seatingPlan = await prisma.seatingPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeatingPlans and only return the `id`
     * const seatingPlanWithIdOnly = await prisma.seatingPlan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeatingPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, SeatingPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatingPlanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SeatingPlan.
     * @param {SeatingPlanDeleteArgs} args - Arguments to delete one SeatingPlan.
     * @example
     * // Delete one SeatingPlan
     * const SeatingPlan = await prisma.seatingPlan.delete({
     *   where: {
     *     // ... filter to delete one SeatingPlan
     *   }
     * })
     * 
     */
    delete<T extends SeatingPlanDeleteArgs>(args: SelectSubset<T, SeatingPlanDeleteArgs<ExtArgs>>): Prisma__SeatingPlanClient<$Result.GetResult<Prisma.$SeatingPlanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SeatingPlan.
     * @param {SeatingPlanUpdateArgs} args - Arguments to update one SeatingPlan.
     * @example
     * // Update one SeatingPlan
     * const seatingPlan = await prisma.seatingPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeatingPlanUpdateArgs>(args: SelectSubset<T, SeatingPlanUpdateArgs<ExtArgs>>): Prisma__SeatingPlanClient<$Result.GetResult<Prisma.$SeatingPlanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SeatingPlans.
     * @param {SeatingPlanDeleteManyArgs} args - Arguments to filter SeatingPlans to delete.
     * @example
     * // Delete a few SeatingPlans
     * const { count } = await prisma.seatingPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeatingPlanDeleteManyArgs>(args?: SelectSubset<T, SeatingPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeatingPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatingPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeatingPlans
     * const seatingPlan = await prisma.seatingPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeatingPlanUpdateManyArgs>(args: SelectSubset<T, SeatingPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SeatingPlan.
     * @param {SeatingPlanUpsertArgs} args - Arguments to update or create a SeatingPlan.
     * @example
     * // Update or create a SeatingPlan
     * const seatingPlan = await prisma.seatingPlan.upsert({
     *   create: {
     *     // ... data to create a SeatingPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeatingPlan we want to update
     *   }
     * })
     */
    upsert<T extends SeatingPlanUpsertArgs>(args: SelectSubset<T, SeatingPlanUpsertArgs<ExtArgs>>): Prisma__SeatingPlanClient<$Result.GetResult<Prisma.$SeatingPlanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SeatingPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatingPlanCountArgs} args - Arguments to filter SeatingPlans to count.
     * @example
     * // Count the number of SeatingPlans
     * const count = await prisma.seatingPlan.count({
     *   where: {
     *     // ... the filter for the SeatingPlans we want to count
     *   }
     * })
    **/
    count<T extends SeatingPlanCountArgs>(
      args?: Subset<T, SeatingPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeatingPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeatingPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatingPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeatingPlanAggregateArgs>(args: Subset<T, SeatingPlanAggregateArgs>): Prisma.PrismaPromise<GetSeatingPlanAggregateType<T>>

    /**
     * Group by SeatingPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatingPlanGroupByArgs} args - Group by arguments.
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
      T extends SeatingPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeatingPlanGroupByArgs['orderBy'] }
        : { orderBy?: SeatingPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeatingPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeatingPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeatingPlan model
   */
  readonly fields: SeatingPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeatingPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeatingPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    layout<T extends LayoutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LayoutDefaultArgs<ExtArgs>>): Prisma__LayoutClient<$Result.GetResult<Prisma.$LayoutPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    seatingArrangement<T extends SeatingPlan$seatingArrangementArgs<ExtArgs> = {}>(args?: Subset<T, SeatingPlan$seatingArrangementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatingArrangementPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the SeatingPlan model
   */ 
  interface SeatingPlanFieldRefs {
    readonly id: FieldRef<"SeatingPlan", 'Int'>
    readonly layoutId: FieldRef<"SeatingPlan", 'Int'>
    readonly createdAt: FieldRef<"SeatingPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"SeatingPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SeatingPlan findUnique
   */
  export type SeatingPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingPlan
     */
    select?: SeatingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingPlanInclude<ExtArgs> | null
    /**
     * Filter, which SeatingPlan to fetch.
     */
    where: SeatingPlanWhereUniqueInput
  }

  /**
   * SeatingPlan findUniqueOrThrow
   */
  export type SeatingPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingPlan
     */
    select?: SeatingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingPlanInclude<ExtArgs> | null
    /**
     * Filter, which SeatingPlan to fetch.
     */
    where: SeatingPlanWhereUniqueInput
  }

  /**
   * SeatingPlan findFirst
   */
  export type SeatingPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingPlan
     */
    select?: SeatingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingPlanInclude<ExtArgs> | null
    /**
     * Filter, which SeatingPlan to fetch.
     */
    where?: SeatingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatingPlans to fetch.
     */
    orderBy?: SeatingPlanOrderByWithRelationInput | SeatingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeatingPlans.
     */
    cursor?: SeatingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeatingPlans.
     */
    distinct?: SeatingPlanScalarFieldEnum | SeatingPlanScalarFieldEnum[]
  }

  /**
   * SeatingPlan findFirstOrThrow
   */
  export type SeatingPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingPlan
     */
    select?: SeatingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingPlanInclude<ExtArgs> | null
    /**
     * Filter, which SeatingPlan to fetch.
     */
    where?: SeatingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatingPlans to fetch.
     */
    orderBy?: SeatingPlanOrderByWithRelationInput | SeatingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeatingPlans.
     */
    cursor?: SeatingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeatingPlans.
     */
    distinct?: SeatingPlanScalarFieldEnum | SeatingPlanScalarFieldEnum[]
  }

  /**
   * SeatingPlan findMany
   */
  export type SeatingPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingPlan
     */
    select?: SeatingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingPlanInclude<ExtArgs> | null
    /**
     * Filter, which SeatingPlans to fetch.
     */
    where?: SeatingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatingPlans to fetch.
     */
    orderBy?: SeatingPlanOrderByWithRelationInput | SeatingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeatingPlans.
     */
    cursor?: SeatingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatingPlans.
     */
    skip?: number
    distinct?: SeatingPlanScalarFieldEnum | SeatingPlanScalarFieldEnum[]
  }

  /**
   * SeatingPlan create
   */
  export type SeatingPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingPlan
     */
    select?: SeatingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a SeatingPlan.
     */
    data: XOR<SeatingPlanCreateInput, SeatingPlanUncheckedCreateInput>
  }

  /**
   * SeatingPlan createMany
   */
  export type SeatingPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeatingPlans.
     */
    data: SeatingPlanCreateManyInput | SeatingPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeatingPlan createManyAndReturn
   */
  export type SeatingPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingPlan
     */
    select?: SeatingPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SeatingPlans.
     */
    data: SeatingPlanCreateManyInput | SeatingPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeatingPlan update
   */
  export type SeatingPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingPlan
     */
    select?: SeatingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a SeatingPlan.
     */
    data: XOR<SeatingPlanUpdateInput, SeatingPlanUncheckedUpdateInput>
    /**
     * Choose, which SeatingPlan to update.
     */
    where: SeatingPlanWhereUniqueInput
  }

  /**
   * SeatingPlan updateMany
   */
  export type SeatingPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeatingPlans.
     */
    data: XOR<SeatingPlanUpdateManyMutationInput, SeatingPlanUncheckedUpdateManyInput>
    /**
     * Filter which SeatingPlans to update
     */
    where?: SeatingPlanWhereInput
  }

  /**
   * SeatingPlan upsert
   */
  export type SeatingPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingPlan
     */
    select?: SeatingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the SeatingPlan to update in case it exists.
     */
    where: SeatingPlanWhereUniqueInput
    /**
     * In case the SeatingPlan found by the `where` argument doesn't exist, create a new SeatingPlan with this data.
     */
    create: XOR<SeatingPlanCreateInput, SeatingPlanUncheckedCreateInput>
    /**
     * In case the SeatingPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeatingPlanUpdateInput, SeatingPlanUncheckedUpdateInput>
  }

  /**
   * SeatingPlan delete
   */
  export type SeatingPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingPlan
     */
    select?: SeatingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingPlanInclude<ExtArgs> | null
    /**
     * Filter which SeatingPlan to delete.
     */
    where: SeatingPlanWhereUniqueInput
  }

  /**
   * SeatingPlan deleteMany
   */
  export type SeatingPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeatingPlans to delete
     */
    where?: SeatingPlanWhereInput
  }

  /**
   * SeatingPlan.seatingArrangement
   */
  export type SeatingPlan$seatingArrangementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingArrangement
     */
    select?: SeatingArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingArrangementInclude<ExtArgs> | null
    where?: SeatingArrangementWhereInput
    orderBy?: SeatingArrangementOrderByWithRelationInput | SeatingArrangementOrderByWithRelationInput[]
    cursor?: SeatingArrangementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeatingArrangementScalarFieldEnum | SeatingArrangementScalarFieldEnum[]
  }

  /**
   * SeatingPlan without action
   */
  export type SeatingPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingPlan
     */
    select?: SeatingPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingPlanInclude<ExtArgs> | null
  }


  /**
   * Model SeatingArrangement
   */

  export type AggregateSeatingArrangement = {
    _count: SeatingArrangementCountAggregateOutputType | null
    _avg: SeatingArrangementAvgAggregateOutputType | null
    _sum: SeatingArrangementSumAggregateOutputType | null
    _min: SeatingArrangementMinAggregateOutputType | null
    _max: SeatingArrangementMaxAggregateOutputType | null
  }

  export type SeatingArrangementAvgAggregateOutputType = {
    id: number | null
    seatingPlanId: number | null
    deskId: number | null
    studentId: number | null
  }

  export type SeatingArrangementSumAggregateOutputType = {
    id: number | null
    seatingPlanId: number | null
    deskId: number | null
    studentId: number | null
  }

  export type SeatingArrangementMinAggregateOutputType = {
    id: number | null
    seatingPlanId: number | null
    deskId: number | null
    studentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeatingArrangementMaxAggregateOutputType = {
    id: number | null
    seatingPlanId: number | null
    deskId: number | null
    studentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeatingArrangementCountAggregateOutputType = {
    id: number
    seatingPlanId: number
    deskId: number
    studentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SeatingArrangementAvgAggregateInputType = {
    id?: true
    seatingPlanId?: true
    deskId?: true
    studentId?: true
  }

  export type SeatingArrangementSumAggregateInputType = {
    id?: true
    seatingPlanId?: true
    deskId?: true
    studentId?: true
  }

  export type SeatingArrangementMinAggregateInputType = {
    id?: true
    seatingPlanId?: true
    deskId?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeatingArrangementMaxAggregateInputType = {
    id?: true
    seatingPlanId?: true
    deskId?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeatingArrangementCountAggregateInputType = {
    id?: true
    seatingPlanId?: true
    deskId?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SeatingArrangementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeatingArrangement to aggregate.
     */
    where?: SeatingArrangementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatingArrangements to fetch.
     */
    orderBy?: SeatingArrangementOrderByWithRelationInput | SeatingArrangementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeatingArrangementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatingArrangements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatingArrangements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeatingArrangements
    **/
    _count?: true | SeatingArrangementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeatingArrangementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeatingArrangementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeatingArrangementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeatingArrangementMaxAggregateInputType
  }

  export type GetSeatingArrangementAggregateType<T extends SeatingArrangementAggregateArgs> = {
        [P in keyof T & keyof AggregateSeatingArrangement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeatingArrangement[P]>
      : GetScalarType<T[P], AggregateSeatingArrangement[P]>
  }




  export type SeatingArrangementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatingArrangementWhereInput
    orderBy?: SeatingArrangementOrderByWithAggregationInput | SeatingArrangementOrderByWithAggregationInput[]
    by: SeatingArrangementScalarFieldEnum[] | SeatingArrangementScalarFieldEnum
    having?: SeatingArrangementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeatingArrangementCountAggregateInputType | true
    _avg?: SeatingArrangementAvgAggregateInputType
    _sum?: SeatingArrangementSumAggregateInputType
    _min?: SeatingArrangementMinAggregateInputType
    _max?: SeatingArrangementMaxAggregateInputType
  }

  export type SeatingArrangementGroupByOutputType = {
    id: number
    seatingPlanId: number
    deskId: number
    studentId: number
    createdAt: Date
    updatedAt: Date
    _count: SeatingArrangementCountAggregateOutputType | null
    _avg: SeatingArrangementAvgAggregateOutputType | null
    _sum: SeatingArrangementSumAggregateOutputType | null
    _min: SeatingArrangementMinAggregateOutputType | null
    _max: SeatingArrangementMaxAggregateOutputType | null
  }

  type GetSeatingArrangementGroupByPayload<T extends SeatingArrangementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeatingArrangementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeatingArrangementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeatingArrangementGroupByOutputType[P]>
            : GetScalarType<T[P], SeatingArrangementGroupByOutputType[P]>
        }
      >
    >


  export type SeatingArrangementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seatingPlanId?: boolean
    deskId?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    seatingPlan?: boolean | SeatingPlanDefaultArgs<ExtArgs>
    desk?: boolean | DeskDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seatingArrangement"]>

  export type SeatingArrangementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seatingPlanId?: boolean
    deskId?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    seatingPlan?: boolean | SeatingPlanDefaultArgs<ExtArgs>
    desk?: boolean | DeskDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seatingArrangement"]>

  export type SeatingArrangementSelectScalar = {
    id?: boolean
    seatingPlanId?: boolean
    deskId?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SeatingArrangementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seatingPlan?: boolean | SeatingPlanDefaultArgs<ExtArgs>
    desk?: boolean | DeskDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type SeatingArrangementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seatingPlan?: boolean | SeatingPlanDefaultArgs<ExtArgs>
    desk?: boolean | DeskDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $SeatingArrangementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeatingArrangement"
    objects: {
      seatingPlan: Prisma.$SeatingPlanPayload<ExtArgs>
      desk: Prisma.$DeskPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      seatingPlanId: number
      deskId: number
      studentId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["seatingArrangement"]>
    composites: {}
  }

  type SeatingArrangementGetPayload<S extends boolean | null | undefined | SeatingArrangementDefaultArgs> = $Result.GetResult<Prisma.$SeatingArrangementPayload, S>

  type SeatingArrangementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SeatingArrangementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SeatingArrangementCountAggregateInputType | true
    }

  export interface SeatingArrangementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeatingArrangement'], meta: { name: 'SeatingArrangement' } }
    /**
     * Find zero or one SeatingArrangement that matches the filter.
     * @param {SeatingArrangementFindUniqueArgs} args - Arguments to find a SeatingArrangement
     * @example
     * // Get one SeatingArrangement
     * const seatingArrangement = await prisma.seatingArrangement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeatingArrangementFindUniqueArgs>(args: SelectSubset<T, SeatingArrangementFindUniqueArgs<ExtArgs>>): Prisma__SeatingArrangementClient<$Result.GetResult<Prisma.$SeatingArrangementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SeatingArrangement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SeatingArrangementFindUniqueOrThrowArgs} args - Arguments to find a SeatingArrangement
     * @example
     * // Get one SeatingArrangement
     * const seatingArrangement = await prisma.seatingArrangement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeatingArrangementFindUniqueOrThrowArgs>(args: SelectSubset<T, SeatingArrangementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeatingArrangementClient<$Result.GetResult<Prisma.$SeatingArrangementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SeatingArrangement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatingArrangementFindFirstArgs} args - Arguments to find a SeatingArrangement
     * @example
     * // Get one SeatingArrangement
     * const seatingArrangement = await prisma.seatingArrangement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeatingArrangementFindFirstArgs>(args?: SelectSubset<T, SeatingArrangementFindFirstArgs<ExtArgs>>): Prisma__SeatingArrangementClient<$Result.GetResult<Prisma.$SeatingArrangementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SeatingArrangement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatingArrangementFindFirstOrThrowArgs} args - Arguments to find a SeatingArrangement
     * @example
     * // Get one SeatingArrangement
     * const seatingArrangement = await prisma.seatingArrangement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeatingArrangementFindFirstOrThrowArgs>(args?: SelectSubset<T, SeatingArrangementFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeatingArrangementClient<$Result.GetResult<Prisma.$SeatingArrangementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SeatingArrangements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatingArrangementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeatingArrangements
     * const seatingArrangements = await prisma.seatingArrangement.findMany()
     * 
     * // Get first 10 SeatingArrangements
     * const seatingArrangements = await prisma.seatingArrangement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seatingArrangementWithIdOnly = await prisma.seatingArrangement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeatingArrangementFindManyArgs>(args?: SelectSubset<T, SeatingArrangementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatingArrangementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SeatingArrangement.
     * @param {SeatingArrangementCreateArgs} args - Arguments to create a SeatingArrangement.
     * @example
     * // Create one SeatingArrangement
     * const SeatingArrangement = await prisma.seatingArrangement.create({
     *   data: {
     *     // ... data to create a SeatingArrangement
     *   }
     * })
     * 
     */
    create<T extends SeatingArrangementCreateArgs>(args: SelectSubset<T, SeatingArrangementCreateArgs<ExtArgs>>): Prisma__SeatingArrangementClient<$Result.GetResult<Prisma.$SeatingArrangementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SeatingArrangements.
     * @param {SeatingArrangementCreateManyArgs} args - Arguments to create many SeatingArrangements.
     * @example
     * // Create many SeatingArrangements
     * const seatingArrangement = await prisma.seatingArrangement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeatingArrangementCreateManyArgs>(args?: SelectSubset<T, SeatingArrangementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeatingArrangements and returns the data saved in the database.
     * @param {SeatingArrangementCreateManyAndReturnArgs} args - Arguments to create many SeatingArrangements.
     * @example
     * // Create many SeatingArrangements
     * const seatingArrangement = await prisma.seatingArrangement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeatingArrangements and only return the `id`
     * const seatingArrangementWithIdOnly = await prisma.seatingArrangement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeatingArrangementCreateManyAndReturnArgs>(args?: SelectSubset<T, SeatingArrangementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatingArrangementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SeatingArrangement.
     * @param {SeatingArrangementDeleteArgs} args - Arguments to delete one SeatingArrangement.
     * @example
     * // Delete one SeatingArrangement
     * const SeatingArrangement = await prisma.seatingArrangement.delete({
     *   where: {
     *     // ... filter to delete one SeatingArrangement
     *   }
     * })
     * 
     */
    delete<T extends SeatingArrangementDeleteArgs>(args: SelectSubset<T, SeatingArrangementDeleteArgs<ExtArgs>>): Prisma__SeatingArrangementClient<$Result.GetResult<Prisma.$SeatingArrangementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SeatingArrangement.
     * @param {SeatingArrangementUpdateArgs} args - Arguments to update one SeatingArrangement.
     * @example
     * // Update one SeatingArrangement
     * const seatingArrangement = await prisma.seatingArrangement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeatingArrangementUpdateArgs>(args: SelectSubset<T, SeatingArrangementUpdateArgs<ExtArgs>>): Prisma__SeatingArrangementClient<$Result.GetResult<Prisma.$SeatingArrangementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SeatingArrangements.
     * @param {SeatingArrangementDeleteManyArgs} args - Arguments to filter SeatingArrangements to delete.
     * @example
     * // Delete a few SeatingArrangements
     * const { count } = await prisma.seatingArrangement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeatingArrangementDeleteManyArgs>(args?: SelectSubset<T, SeatingArrangementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeatingArrangements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatingArrangementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeatingArrangements
     * const seatingArrangement = await prisma.seatingArrangement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeatingArrangementUpdateManyArgs>(args: SelectSubset<T, SeatingArrangementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SeatingArrangement.
     * @param {SeatingArrangementUpsertArgs} args - Arguments to update or create a SeatingArrangement.
     * @example
     * // Update or create a SeatingArrangement
     * const seatingArrangement = await prisma.seatingArrangement.upsert({
     *   create: {
     *     // ... data to create a SeatingArrangement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeatingArrangement we want to update
     *   }
     * })
     */
    upsert<T extends SeatingArrangementUpsertArgs>(args: SelectSubset<T, SeatingArrangementUpsertArgs<ExtArgs>>): Prisma__SeatingArrangementClient<$Result.GetResult<Prisma.$SeatingArrangementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SeatingArrangements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatingArrangementCountArgs} args - Arguments to filter SeatingArrangements to count.
     * @example
     * // Count the number of SeatingArrangements
     * const count = await prisma.seatingArrangement.count({
     *   where: {
     *     // ... the filter for the SeatingArrangements we want to count
     *   }
     * })
    **/
    count<T extends SeatingArrangementCountArgs>(
      args?: Subset<T, SeatingArrangementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeatingArrangementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeatingArrangement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatingArrangementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeatingArrangementAggregateArgs>(args: Subset<T, SeatingArrangementAggregateArgs>): Prisma.PrismaPromise<GetSeatingArrangementAggregateType<T>>

    /**
     * Group by SeatingArrangement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatingArrangementGroupByArgs} args - Group by arguments.
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
      T extends SeatingArrangementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeatingArrangementGroupByArgs['orderBy'] }
        : { orderBy?: SeatingArrangementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeatingArrangementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeatingArrangementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeatingArrangement model
   */
  readonly fields: SeatingArrangementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeatingArrangement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeatingArrangementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seatingPlan<T extends SeatingPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeatingPlanDefaultArgs<ExtArgs>>): Prisma__SeatingPlanClient<$Result.GetResult<Prisma.$SeatingPlanPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    desk<T extends DeskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeskDefaultArgs<ExtArgs>>): Prisma__DeskClient<$Result.GetResult<Prisma.$DeskPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SeatingArrangement model
   */ 
  interface SeatingArrangementFieldRefs {
    readonly id: FieldRef<"SeatingArrangement", 'Int'>
    readonly seatingPlanId: FieldRef<"SeatingArrangement", 'Int'>
    readonly deskId: FieldRef<"SeatingArrangement", 'Int'>
    readonly studentId: FieldRef<"SeatingArrangement", 'Int'>
    readonly createdAt: FieldRef<"SeatingArrangement", 'DateTime'>
    readonly updatedAt: FieldRef<"SeatingArrangement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SeatingArrangement findUnique
   */
  export type SeatingArrangementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingArrangement
     */
    select?: SeatingArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingArrangementInclude<ExtArgs> | null
    /**
     * Filter, which SeatingArrangement to fetch.
     */
    where: SeatingArrangementWhereUniqueInput
  }

  /**
   * SeatingArrangement findUniqueOrThrow
   */
  export type SeatingArrangementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingArrangement
     */
    select?: SeatingArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingArrangementInclude<ExtArgs> | null
    /**
     * Filter, which SeatingArrangement to fetch.
     */
    where: SeatingArrangementWhereUniqueInput
  }

  /**
   * SeatingArrangement findFirst
   */
  export type SeatingArrangementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingArrangement
     */
    select?: SeatingArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingArrangementInclude<ExtArgs> | null
    /**
     * Filter, which SeatingArrangement to fetch.
     */
    where?: SeatingArrangementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatingArrangements to fetch.
     */
    orderBy?: SeatingArrangementOrderByWithRelationInput | SeatingArrangementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeatingArrangements.
     */
    cursor?: SeatingArrangementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatingArrangements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatingArrangements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeatingArrangements.
     */
    distinct?: SeatingArrangementScalarFieldEnum | SeatingArrangementScalarFieldEnum[]
  }

  /**
   * SeatingArrangement findFirstOrThrow
   */
  export type SeatingArrangementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingArrangement
     */
    select?: SeatingArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingArrangementInclude<ExtArgs> | null
    /**
     * Filter, which SeatingArrangement to fetch.
     */
    where?: SeatingArrangementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatingArrangements to fetch.
     */
    orderBy?: SeatingArrangementOrderByWithRelationInput | SeatingArrangementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeatingArrangements.
     */
    cursor?: SeatingArrangementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatingArrangements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatingArrangements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeatingArrangements.
     */
    distinct?: SeatingArrangementScalarFieldEnum | SeatingArrangementScalarFieldEnum[]
  }

  /**
   * SeatingArrangement findMany
   */
  export type SeatingArrangementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingArrangement
     */
    select?: SeatingArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingArrangementInclude<ExtArgs> | null
    /**
     * Filter, which SeatingArrangements to fetch.
     */
    where?: SeatingArrangementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatingArrangements to fetch.
     */
    orderBy?: SeatingArrangementOrderByWithRelationInput | SeatingArrangementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeatingArrangements.
     */
    cursor?: SeatingArrangementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatingArrangements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatingArrangements.
     */
    skip?: number
    distinct?: SeatingArrangementScalarFieldEnum | SeatingArrangementScalarFieldEnum[]
  }

  /**
   * SeatingArrangement create
   */
  export type SeatingArrangementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingArrangement
     */
    select?: SeatingArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingArrangementInclude<ExtArgs> | null
    /**
     * The data needed to create a SeatingArrangement.
     */
    data: XOR<SeatingArrangementCreateInput, SeatingArrangementUncheckedCreateInput>
  }

  /**
   * SeatingArrangement createMany
   */
  export type SeatingArrangementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeatingArrangements.
     */
    data: SeatingArrangementCreateManyInput | SeatingArrangementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeatingArrangement createManyAndReturn
   */
  export type SeatingArrangementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingArrangement
     */
    select?: SeatingArrangementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SeatingArrangements.
     */
    data: SeatingArrangementCreateManyInput | SeatingArrangementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingArrangementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeatingArrangement update
   */
  export type SeatingArrangementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingArrangement
     */
    select?: SeatingArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingArrangementInclude<ExtArgs> | null
    /**
     * The data needed to update a SeatingArrangement.
     */
    data: XOR<SeatingArrangementUpdateInput, SeatingArrangementUncheckedUpdateInput>
    /**
     * Choose, which SeatingArrangement to update.
     */
    where: SeatingArrangementWhereUniqueInput
  }

  /**
   * SeatingArrangement updateMany
   */
  export type SeatingArrangementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeatingArrangements.
     */
    data: XOR<SeatingArrangementUpdateManyMutationInput, SeatingArrangementUncheckedUpdateManyInput>
    /**
     * Filter which SeatingArrangements to update
     */
    where?: SeatingArrangementWhereInput
  }

  /**
   * SeatingArrangement upsert
   */
  export type SeatingArrangementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingArrangement
     */
    select?: SeatingArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingArrangementInclude<ExtArgs> | null
    /**
     * The filter to search for the SeatingArrangement to update in case it exists.
     */
    where: SeatingArrangementWhereUniqueInput
    /**
     * In case the SeatingArrangement found by the `where` argument doesn't exist, create a new SeatingArrangement with this data.
     */
    create: XOR<SeatingArrangementCreateInput, SeatingArrangementUncheckedCreateInput>
    /**
     * In case the SeatingArrangement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeatingArrangementUpdateInput, SeatingArrangementUncheckedUpdateInput>
  }

  /**
   * SeatingArrangement delete
   */
  export type SeatingArrangementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingArrangement
     */
    select?: SeatingArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingArrangementInclude<ExtArgs> | null
    /**
     * Filter which SeatingArrangement to delete.
     */
    where: SeatingArrangementWhereUniqueInput
  }

  /**
   * SeatingArrangement deleteMany
   */
  export type SeatingArrangementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeatingArrangements to delete
     */
    where?: SeatingArrangementWhereInput
  }

  /**
   * SeatingArrangement without action
   */
  export type SeatingArrangementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatingArrangement
     */
    select?: SeatingArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatingArrangementInclude<ExtArgs> | null
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
    username: 'username',
    email: 'email',
    password: 'password',
    roleId: 'roleId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    classId: 'classId'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ClsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    teacherId: 'teacherId'
  };

  export type ClsScalarFieldEnum = (typeof ClsScalarFieldEnum)[keyof typeof ClsScalarFieldEnum]


  export const TimetableScalarFieldEnum: {
    id: 'id',
    classId: 'classId',
    day: 'day',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type TimetableScalarFieldEnum = (typeof TimetableScalarFieldEnum)[keyof typeof TimetableScalarFieldEnum]


  export const RegisterScalarFieldEnum: {
    id: 'id',
    classId: 'classId',
    teacherId: 'teacherId',
    date: 'date',
    status: 'status'
  };

  export type RegisterScalarFieldEnum = (typeof RegisterScalarFieldEnum)[keyof typeof RegisterScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    registerId: 'registerId',
    status: 'status',
    comment: 'comment',
    lateMinutes: 'lateMinutes',
    date: 'date'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const ClassViewScalarFieldEnum: {
    id: 'id',
    classId: 'classId'
  };

  export type ClassViewScalarFieldEnum = (typeof ClassViewScalarFieldEnum)[keyof typeof ClassViewScalarFieldEnum]


  export const SeatScalarFieldEnum: {
    id: 'id',
    classViewId: 'classViewId',
    studentId: 'studentId',
    coordinates_X: 'coordinates_X',
    coordinates_y: 'coordinates_y'
  };

  export type SeatScalarFieldEnum = (typeof SeatScalarFieldEnum)[keyof typeof SeatScalarFieldEnum]


  export const LayoutScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LayoutScalarFieldEnum = (typeof LayoutScalarFieldEnum)[keyof typeof LayoutScalarFieldEnum]


  export const DeskScalarFieldEnum: {
    id: 'id',
    layoutId: 'layoutId',
    x: 'x',
    y: 'y',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeskScalarFieldEnum = (typeof DeskScalarFieldEnum)[keyof typeof DeskScalarFieldEnum]


  export const SeatingPlanScalarFieldEnum: {
    id: 'id',
    layoutId: 'layoutId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SeatingPlanScalarFieldEnum = (typeof SeatingPlanScalarFieldEnum)[keyof typeof SeatingPlanScalarFieldEnum]


  export const SeatingArrangementScalarFieldEnum: {
    id: 'id',
    seatingPlanId: 'seatingPlanId',
    deskId: 'deskId',
    studentId: 'studentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SeatingArrangementScalarFieldEnum = (typeof SeatingArrangementScalarFieldEnum)[keyof typeof SeatingArrangementScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    Student?: XOR<StudentNullableRelationFilter, StudentWhereInput> | null
    Teacher?: XOR<TeacherNullableRelationFilter, TeacherWhereInput> | null
    role?: XOR<RoleRelationFilter, RoleWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    Student?: StudentOrderByWithRelationInput
    Teacher?: TeacherOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    Student?: XOR<StudentNullableRelationFilter, StudentWhereInput> | null
    Teacher?: XOR<TeacherNullableRelationFilter, TeacherWhereInput> | null
    role?: XOR<RoleRelationFilter, RoleWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    roleId?: IntWithAggregatesFilter<"User"> | number
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    User?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    User?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    User?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: IntFilter<"Teacher"> | number
    userId?: IntFilter<"Teacher"> | number
    classes?: ClsListRelationFilter
    Register?: RegisterListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    classes?: ClsOrderByRelationAggregateInput
    Register?: RegisterOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    classes?: ClsListRelationFilter
    Register?: RegisterListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _avg?: TeacherAvgOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
    _sum?: TeacherSumOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Teacher"> | number
    userId?: IntWithAggregatesFilter<"Teacher"> | number
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    userId?: IntFilter<"Student"> | number
    classId?: IntFilter<"Student"> | number
    Attendance?: AttendanceListRelationFilter
    cls?: XOR<ClsRelationFilter, ClsWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    SeatingArrangement?: SeatingArrangementListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    classId?: SortOrder
    Attendance?: AttendanceOrderByRelationAggregateInput
    cls?: ClsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    SeatingArrangement?: SeatingArrangementOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    classId?: IntFilter<"Student"> | number
    Attendance?: AttendanceListRelationFilter
    cls?: XOR<ClsRelationFilter, ClsWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    SeatingArrangement?: SeatingArrangementListRelationFilter
  }, "id" | "userId">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    classId?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    userId?: IntWithAggregatesFilter<"Student"> | number
    classId?: IntWithAggregatesFilter<"Student"> | number
  }

  export type ClsWhereInput = {
    AND?: ClsWhereInput | ClsWhereInput[]
    OR?: ClsWhereInput[]
    NOT?: ClsWhereInput | ClsWhereInput[]
    id?: IntFilter<"Cls"> | number
    name?: StringFilter<"Cls"> | string
    teacherId?: IntNullableFilter<"Cls"> | number | null
    teacher?: XOR<TeacherNullableRelationFilter, TeacherWhereInput> | null
    register?: RegisterListRelationFilter
    students?: StudentListRelationFilter
    timetable?: TimetableListRelationFilter
    ClassView?: ClassViewListRelationFilter
    layouts?: LayoutListRelationFilter
  }

  export type ClsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrderInput | SortOrder
    teacher?: TeacherOrderByWithRelationInput
    register?: RegisterOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
    timetable?: TimetableOrderByRelationAggregateInput
    ClassView?: ClassViewOrderByRelationAggregateInput
    layouts?: LayoutOrderByRelationAggregateInput
  }

  export type ClsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClsWhereInput | ClsWhereInput[]
    OR?: ClsWhereInput[]
    NOT?: ClsWhereInput | ClsWhereInput[]
    name?: StringFilter<"Cls"> | string
    teacherId?: IntNullableFilter<"Cls"> | number | null
    teacher?: XOR<TeacherNullableRelationFilter, TeacherWhereInput> | null
    register?: RegisterListRelationFilter
    students?: StudentListRelationFilter
    timetable?: TimetableListRelationFilter
    ClassView?: ClassViewListRelationFilter
    layouts?: LayoutListRelationFilter
  }, "id">

  export type ClsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrderInput | SortOrder
    _count?: ClsCountOrderByAggregateInput
    _avg?: ClsAvgOrderByAggregateInput
    _max?: ClsMaxOrderByAggregateInput
    _min?: ClsMinOrderByAggregateInput
    _sum?: ClsSumOrderByAggregateInput
  }

  export type ClsScalarWhereWithAggregatesInput = {
    AND?: ClsScalarWhereWithAggregatesInput | ClsScalarWhereWithAggregatesInput[]
    OR?: ClsScalarWhereWithAggregatesInput[]
    NOT?: ClsScalarWhereWithAggregatesInput | ClsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cls"> | number
    name?: StringWithAggregatesFilter<"Cls"> | string
    teacherId?: IntNullableWithAggregatesFilter<"Cls"> | number | null
  }

  export type TimetableWhereInput = {
    AND?: TimetableWhereInput | TimetableWhereInput[]
    OR?: TimetableWhereInput[]
    NOT?: TimetableWhereInput | TimetableWhereInput[]
    id?: IntFilter<"Timetable"> | number
    classId?: IntFilter<"Timetable"> | number
    day?: StringFilter<"Timetable"> | string
    startTime?: DateTimeFilter<"Timetable"> | Date | string
    endTime?: DateTimeFilter<"Timetable"> | Date | string
    cls?: XOR<ClsRelationFilter, ClsWhereInput>
  }

  export type TimetableOrderByWithRelationInput = {
    id?: SortOrder
    classId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    cls?: ClsOrderByWithRelationInput
  }

  export type TimetableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TimetableWhereInput | TimetableWhereInput[]
    OR?: TimetableWhereInput[]
    NOT?: TimetableWhereInput | TimetableWhereInput[]
    classId?: IntFilter<"Timetable"> | number
    day?: StringFilter<"Timetable"> | string
    startTime?: DateTimeFilter<"Timetable"> | Date | string
    endTime?: DateTimeFilter<"Timetable"> | Date | string
    cls?: XOR<ClsRelationFilter, ClsWhereInput>
  }, "id">

  export type TimetableOrderByWithAggregationInput = {
    id?: SortOrder
    classId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    _count?: TimetableCountOrderByAggregateInput
    _avg?: TimetableAvgOrderByAggregateInput
    _max?: TimetableMaxOrderByAggregateInput
    _min?: TimetableMinOrderByAggregateInput
    _sum?: TimetableSumOrderByAggregateInput
  }

  export type TimetableScalarWhereWithAggregatesInput = {
    AND?: TimetableScalarWhereWithAggregatesInput | TimetableScalarWhereWithAggregatesInput[]
    OR?: TimetableScalarWhereWithAggregatesInput[]
    NOT?: TimetableScalarWhereWithAggregatesInput | TimetableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Timetable"> | number
    classId?: IntWithAggregatesFilter<"Timetable"> | number
    day?: StringWithAggregatesFilter<"Timetable"> | string
    startTime?: DateTimeWithAggregatesFilter<"Timetable"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Timetable"> | Date | string
  }

  export type RegisterWhereInput = {
    AND?: RegisterWhereInput | RegisterWhereInput[]
    OR?: RegisterWhereInput[]
    NOT?: RegisterWhereInput | RegisterWhereInput[]
    id?: IntFilter<"Register"> | number
    classId?: IntFilter<"Register"> | number
    teacherId?: IntFilter<"Register"> | number
    date?: DateTimeFilter<"Register"> | Date | string
    status?: StringFilter<"Register"> | string
    Attendance?: AttendanceListRelationFilter
    cls?: XOR<ClsRelationFilter, ClsWhereInput>
    teacher?: XOR<TeacherRelationFilter, TeacherWhereInput>
  }

  export type RegisterOrderByWithRelationInput = {
    id?: SortOrder
    classId?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    Attendance?: AttendanceOrderByRelationAggregateInput
    cls?: ClsOrderByWithRelationInput
    teacher?: TeacherOrderByWithRelationInput
  }

  export type RegisterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegisterWhereInput | RegisterWhereInput[]
    OR?: RegisterWhereInput[]
    NOT?: RegisterWhereInput | RegisterWhereInput[]
    classId?: IntFilter<"Register"> | number
    teacherId?: IntFilter<"Register"> | number
    date?: DateTimeFilter<"Register"> | Date | string
    status?: StringFilter<"Register"> | string
    Attendance?: AttendanceListRelationFilter
    cls?: XOR<ClsRelationFilter, ClsWhereInput>
    teacher?: XOR<TeacherRelationFilter, TeacherWhereInput>
  }, "id">

  export type RegisterOrderByWithAggregationInput = {
    id?: SortOrder
    classId?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    _count?: RegisterCountOrderByAggregateInput
    _avg?: RegisterAvgOrderByAggregateInput
    _max?: RegisterMaxOrderByAggregateInput
    _min?: RegisterMinOrderByAggregateInput
    _sum?: RegisterSumOrderByAggregateInput
  }

  export type RegisterScalarWhereWithAggregatesInput = {
    AND?: RegisterScalarWhereWithAggregatesInput | RegisterScalarWhereWithAggregatesInput[]
    OR?: RegisterScalarWhereWithAggregatesInput[]
    NOT?: RegisterScalarWhereWithAggregatesInput | RegisterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Register"> | number
    classId?: IntWithAggregatesFilter<"Register"> | number
    teacherId?: IntWithAggregatesFilter<"Register"> | number
    date?: DateTimeWithAggregatesFilter<"Register"> | Date | string
    status?: StringWithAggregatesFilter<"Register"> | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: IntFilter<"Attendance"> | number
    studentId?: IntFilter<"Attendance"> | number
    registerId?: IntFilter<"Attendance"> | number
    status?: StringFilter<"Attendance"> | string
    comment?: StringNullableFilter<"Attendance"> | string | null
    lateMinutes?: IntNullableFilter<"Attendance"> | number | null
    date?: DateTimeFilter<"Attendance"> | Date | string
    register?: XOR<RegisterRelationFilter, RegisterWhereInput>
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    registerId?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    lateMinutes?: SortOrderInput | SortOrder
    date?: SortOrder
    register?: RegisterOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    studentId?: IntFilter<"Attendance"> | number
    registerId?: IntFilter<"Attendance"> | number
    status?: StringFilter<"Attendance"> | string
    comment?: StringNullableFilter<"Attendance"> | string | null
    lateMinutes?: IntNullableFilter<"Attendance"> | number | null
    date?: DateTimeFilter<"Attendance"> | Date | string
    register?: XOR<RegisterRelationFilter, RegisterWhereInput>
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    registerId?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    lateMinutes?: SortOrderInput | SortOrder
    date?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attendance"> | number
    studentId?: IntWithAggregatesFilter<"Attendance"> | number
    registerId?: IntWithAggregatesFilter<"Attendance"> | number
    status?: StringWithAggregatesFilter<"Attendance"> | string
    comment?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    lateMinutes?: IntNullableWithAggregatesFilter<"Attendance"> | number | null
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type ClassViewWhereInput = {
    AND?: ClassViewWhereInput | ClassViewWhereInput[]
    OR?: ClassViewWhereInput[]
    NOT?: ClassViewWhereInput | ClassViewWhereInput[]
    id?: IntFilter<"ClassView"> | number
    classId?: IntFilter<"ClassView"> | number
    seat?: SeatListRelationFilter
    cls?: XOR<ClsRelationFilter, ClsWhereInput>
  }

  export type ClassViewOrderByWithRelationInput = {
    id?: SortOrder
    classId?: SortOrder
    seat?: SeatOrderByRelationAggregateInput
    cls?: ClsOrderByWithRelationInput
  }

  export type ClassViewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClassViewWhereInput | ClassViewWhereInput[]
    OR?: ClassViewWhereInput[]
    NOT?: ClassViewWhereInput | ClassViewWhereInput[]
    classId?: IntFilter<"ClassView"> | number
    seat?: SeatListRelationFilter
    cls?: XOR<ClsRelationFilter, ClsWhereInput>
  }, "id">

  export type ClassViewOrderByWithAggregationInput = {
    id?: SortOrder
    classId?: SortOrder
    _count?: ClassViewCountOrderByAggregateInput
    _avg?: ClassViewAvgOrderByAggregateInput
    _max?: ClassViewMaxOrderByAggregateInput
    _min?: ClassViewMinOrderByAggregateInput
    _sum?: ClassViewSumOrderByAggregateInput
  }

  export type ClassViewScalarWhereWithAggregatesInput = {
    AND?: ClassViewScalarWhereWithAggregatesInput | ClassViewScalarWhereWithAggregatesInput[]
    OR?: ClassViewScalarWhereWithAggregatesInput[]
    NOT?: ClassViewScalarWhereWithAggregatesInput | ClassViewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClassView"> | number
    classId?: IntWithAggregatesFilter<"ClassView"> | number
  }

  export type SeatWhereInput = {
    AND?: SeatWhereInput | SeatWhereInput[]
    OR?: SeatWhereInput[]
    NOT?: SeatWhereInput | SeatWhereInput[]
    id?: IntFilter<"Seat"> | number
    classViewId?: IntFilter<"Seat"> | number
    studentId?: IntFilter<"Seat"> | number
    coordinates_X?: FloatFilter<"Seat"> | number
    coordinates_y?: FloatFilter<"Seat"> | number
    ClassView?: XOR<ClassViewRelationFilter, ClassViewWhereInput>
  }

  export type SeatOrderByWithRelationInput = {
    id?: SortOrder
    classViewId?: SortOrder
    studentId?: SortOrder
    coordinates_X?: SortOrder
    coordinates_y?: SortOrder
    ClassView?: ClassViewOrderByWithRelationInput
  }

  export type SeatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SeatWhereInput | SeatWhereInput[]
    OR?: SeatWhereInput[]
    NOT?: SeatWhereInput | SeatWhereInput[]
    classViewId?: IntFilter<"Seat"> | number
    studentId?: IntFilter<"Seat"> | number
    coordinates_X?: FloatFilter<"Seat"> | number
    coordinates_y?: FloatFilter<"Seat"> | number
    ClassView?: XOR<ClassViewRelationFilter, ClassViewWhereInput>
  }, "id">

  export type SeatOrderByWithAggregationInput = {
    id?: SortOrder
    classViewId?: SortOrder
    studentId?: SortOrder
    coordinates_X?: SortOrder
    coordinates_y?: SortOrder
    _count?: SeatCountOrderByAggregateInput
    _avg?: SeatAvgOrderByAggregateInput
    _max?: SeatMaxOrderByAggregateInput
    _min?: SeatMinOrderByAggregateInput
    _sum?: SeatSumOrderByAggregateInput
  }

  export type SeatScalarWhereWithAggregatesInput = {
    AND?: SeatScalarWhereWithAggregatesInput | SeatScalarWhereWithAggregatesInput[]
    OR?: SeatScalarWhereWithAggregatesInput[]
    NOT?: SeatScalarWhereWithAggregatesInput | SeatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Seat"> | number
    classViewId?: IntWithAggregatesFilter<"Seat"> | number
    studentId?: IntWithAggregatesFilter<"Seat"> | number
    coordinates_X?: FloatWithAggregatesFilter<"Seat"> | number
    coordinates_y?: FloatWithAggregatesFilter<"Seat"> | number
  }

  export type LayoutWhereInput = {
    AND?: LayoutWhereInput | LayoutWhereInput[]
    OR?: LayoutWhereInput[]
    NOT?: LayoutWhereInput | LayoutWhereInput[]
    id?: IntFilter<"Layout"> | number
    name?: StringFilter<"Layout"> | string
    createdAt?: DateTimeFilter<"Layout"> | Date | string
    updatedAt?: DateTimeFilter<"Layout"> | Date | string
    desks?: DeskListRelationFilter
    seatingPlans?: SeatingPlanListRelationFilter
    classes?: ClsListRelationFilter
  }

  export type LayoutOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    desks?: DeskOrderByRelationAggregateInput
    seatingPlans?: SeatingPlanOrderByRelationAggregateInput
    classes?: ClsOrderByRelationAggregateInput
  }

  export type LayoutWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LayoutWhereInput | LayoutWhereInput[]
    OR?: LayoutWhereInput[]
    NOT?: LayoutWhereInput | LayoutWhereInput[]
    name?: StringFilter<"Layout"> | string
    createdAt?: DateTimeFilter<"Layout"> | Date | string
    updatedAt?: DateTimeFilter<"Layout"> | Date | string
    desks?: DeskListRelationFilter
    seatingPlans?: SeatingPlanListRelationFilter
    classes?: ClsListRelationFilter
  }, "id">

  export type LayoutOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LayoutCountOrderByAggregateInput
    _avg?: LayoutAvgOrderByAggregateInput
    _max?: LayoutMaxOrderByAggregateInput
    _min?: LayoutMinOrderByAggregateInput
    _sum?: LayoutSumOrderByAggregateInput
  }

  export type LayoutScalarWhereWithAggregatesInput = {
    AND?: LayoutScalarWhereWithAggregatesInput | LayoutScalarWhereWithAggregatesInput[]
    OR?: LayoutScalarWhereWithAggregatesInput[]
    NOT?: LayoutScalarWhereWithAggregatesInput | LayoutScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Layout"> | number
    name?: StringWithAggregatesFilter<"Layout"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Layout"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Layout"> | Date | string
  }

  export type DeskWhereInput = {
    AND?: DeskWhereInput | DeskWhereInput[]
    OR?: DeskWhereInput[]
    NOT?: DeskWhereInput | DeskWhereInput[]
    id?: IntFilter<"Desk"> | number
    layoutId?: IntFilter<"Desk"> | number
    x?: FloatFilter<"Desk"> | number
    y?: FloatFilter<"Desk"> | number
    createdAt?: DateTimeFilter<"Desk"> | Date | string
    updatedAt?: DateTimeFilter<"Desk"> | Date | string
    layout?: XOR<LayoutRelationFilter, LayoutWhereInput>
    SeatingArrangement?: SeatingArrangementListRelationFilter
  }

  export type DeskOrderByWithRelationInput = {
    id?: SortOrder
    layoutId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    layout?: LayoutOrderByWithRelationInput
    SeatingArrangement?: SeatingArrangementOrderByRelationAggregateInput
  }

  export type DeskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeskWhereInput | DeskWhereInput[]
    OR?: DeskWhereInput[]
    NOT?: DeskWhereInput | DeskWhereInput[]
    layoutId?: IntFilter<"Desk"> | number
    x?: FloatFilter<"Desk"> | number
    y?: FloatFilter<"Desk"> | number
    createdAt?: DateTimeFilter<"Desk"> | Date | string
    updatedAt?: DateTimeFilter<"Desk"> | Date | string
    layout?: XOR<LayoutRelationFilter, LayoutWhereInput>
    SeatingArrangement?: SeatingArrangementListRelationFilter
  }, "id">

  export type DeskOrderByWithAggregationInput = {
    id?: SortOrder
    layoutId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeskCountOrderByAggregateInput
    _avg?: DeskAvgOrderByAggregateInput
    _max?: DeskMaxOrderByAggregateInput
    _min?: DeskMinOrderByAggregateInput
    _sum?: DeskSumOrderByAggregateInput
  }

  export type DeskScalarWhereWithAggregatesInput = {
    AND?: DeskScalarWhereWithAggregatesInput | DeskScalarWhereWithAggregatesInput[]
    OR?: DeskScalarWhereWithAggregatesInput[]
    NOT?: DeskScalarWhereWithAggregatesInput | DeskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Desk"> | number
    layoutId?: IntWithAggregatesFilter<"Desk"> | number
    x?: FloatWithAggregatesFilter<"Desk"> | number
    y?: FloatWithAggregatesFilter<"Desk"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Desk"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Desk"> | Date | string
  }

  export type SeatingPlanWhereInput = {
    AND?: SeatingPlanWhereInput | SeatingPlanWhereInput[]
    OR?: SeatingPlanWhereInput[]
    NOT?: SeatingPlanWhereInput | SeatingPlanWhereInput[]
    id?: IntFilter<"SeatingPlan"> | number
    layoutId?: IntFilter<"SeatingPlan"> | number
    createdAt?: DateTimeFilter<"SeatingPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SeatingPlan"> | Date | string
    layout?: XOR<LayoutRelationFilter, LayoutWhereInput>
    seatingArrangement?: SeatingArrangementListRelationFilter
  }

  export type SeatingPlanOrderByWithRelationInput = {
    id?: SortOrder
    layoutId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    layout?: LayoutOrderByWithRelationInput
    seatingArrangement?: SeatingArrangementOrderByRelationAggregateInput
  }

  export type SeatingPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SeatingPlanWhereInput | SeatingPlanWhereInput[]
    OR?: SeatingPlanWhereInput[]
    NOT?: SeatingPlanWhereInput | SeatingPlanWhereInput[]
    layoutId?: IntFilter<"SeatingPlan"> | number
    createdAt?: DateTimeFilter<"SeatingPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SeatingPlan"> | Date | string
    layout?: XOR<LayoutRelationFilter, LayoutWhereInput>
    seatingArrangement?: SeatingArrangementListRelationFilter
  }, "id">

  export type SeatingPlanOrderByWithAggregationInput = {
    id?: SortOrder
    layoutId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SeatingPlanCountOrderByAggregateInput
    _avg?: SeatingPlanAvgOrderByAggregateInput
    _max?: SeatingPlanMaxOrderByAggregateInput
    _min?: SeatingPlanMinOrderByAggregateInput
    _sum?: SeatingPlanSumOrderByAggregateInput
  }

  export type SeatingPlanScalarWhereWithAggregatesInput = {
    AND?: SeatingPlanScalarWhereWithAggregatesInput | SeatingPlanScalarWhereWithAggregatesInput[]
    OR?: SeatingPlanScalarWhereWithAggregatesInput[]
    NOT?: SeatingPlanScalarWhereWithAggregatesInput | SeatingPlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SeatingPlan"> | number
    layoutId?: IntWithAggregatesFilter<"SeatingPlan"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SeatingPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SeatingPlan"> | Date | string
  }

  export type SeatingArrangementWhereInput = {
    AND?: SeatingArrangementWhereInput | SeatingArrangementWhereInput[]
    OR?: SeatingArrangementWhereInput[]
    NOT?: SeatingArrangementWhereInput | SeatingArrangementWhereInput[]
    id?: IntFilter<"SeatingArrangement"> | number
    seatingPlanId?: IntFilter<"SeatingArrangement"> | number
    deskId?: IntFilter<"SeatingArrangement"> | number
    studentId?: IntFilter<"SeatingArrangement"> | number
    createdAt?: DateTimeFilter<"SeatingArrangement"> | Date | string
    updatedAt?: DateTimeFilter<"SeatingArrangement"> | Date | string
    seatingPlan?: XOR<SeatingPlanRelationFilter, SeatingPlanWhereInput>
    desk?: XOR<DeskRelationFilter, DeskWhereInput>
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }

  export type SeatingArrangementOrderByWithRelationInput = {
    id?: SortOrder
    seatingPlanId?: SortOrder
    deskId?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    seatingPlan?: SeatingPlanOrderByWithRelationInput
    desk?: DeskOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type SeatingArrangementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    seatingPlanId_deskId_studentId?: SeatingArrangementSeatingPlanIdDeskIdStudentIdCompoundUniqueInput
    AND?: SeatingArrangementWhereInput | SeatingArrangementWhereInput[]
    OR?: SeatingArrangementWhereInput[]
    NOT?: SeatingArrangementWhereInput | SeatingArrangementWhereInput[]
    seatingPlanId?: IntFilter<"SeatingArrangement"> | number
    deskId?: IntFilter<"SeatingArrangement"> | number
    studentId?: IntFilter<"SeatingArrangement"> | number
    createdAt?: DateTimeFilter<"SeatingArrangement"> | Date | string
    updatedAt?: DateTimeFilter<"SeatingArrangement"> | Date | string
    seatingPlan?: XOR<SeatingPlanRelationFilter, SeatingPlanWhereInput>
    desk?: XOR<DeskRelationFilter, DeskWhereInput>
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }, "id" | "seatingPlanId_deskId_studentId">

  export type SeatingArrangementOrderByWithAggregationInput = {
    id?: SortOrder
    seatingPlanId?: SortOrder
    deskId?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SeatingArrangementCountOrderByAggregateInput
    _avg?: SeatingArrangementAvgOrderByAggregateInput
    _max?: SeatingArrangementMaxOrderByAggregateInput
    _min?: SeatingArrangementMinOrderByAggregateInput
    _sum?: SeatingArrangementSumOrderByAggregateInput
  }

  export type SeatingArrangementScalarWhereWithAggregatesInput = {
    AND?: SeatingArrangementScalarWhereWithAggregatesInput | SeatingArrangementScalarWhereWithAggregatesInput[]
    OR?: SeatingArrangementScalarWhereWithAggregatesInput[]
    NOT?: SeatingArrangementScalarWhereWithAggregatesInput | SeatingArrangementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SeatingArrangement"> | number
    seatingPlanId?: IntWithAggregatesFilter<"SeatingArrangement"> | number
    deskId?: IntWithAggregatesFilter<"SeatingArrangement"> | number
    studentId?: IntWithAggregatesFilter<"SeatingArrangement"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SeatingArrangement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SeatingArrangement"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    Student?: StudentCreateNestedOneWithoutUserInput
    Teacher?: TeacherCreateNestedOneWithoutUserInput
    role: RoleCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    roleId: number
    Student?: StudentUncheckedCreateNestedOneWithoutUserInput
    Teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Student?: StudentUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUpdateOneWithoutUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    Student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    roleId: number
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type RoleCreateInput = {
    name?: string
    User?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name?: string
    User?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name?: string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherCreateInput = {
    classes?: ClsCreateNestedManyWithoutTeacherInput
    Register?: RegisterCreateNestedManyWithoutTeacherInput
    user: UserCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: number
    userId: number
    classes?: ClsUncheckedCreateNestedManyWithoutTeacherInput
    Register?: RegisterUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    classes?: ClsUpdateManyWithoutTeacherNestedInput
    Register?: RegisterUpdateManyWithoutTeacherNestedInput
    user?: UserUpdateOneRequiredWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    classes?: ClsUncheckedUpdateManyWithoutTeacherNestedInput
    Register?: RegisterUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: number
    userId: number
  }

  export type TeacherUpdateManyMutationInput = {

  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentCreateInput = {
    Attendance?: AttendanceCreateNestedManyWithoutStudentInput
    cls: ClsCreateNestedOneWithoutStudentsInput
    user: UserCreateNestedOneWithoutStudentInput
    SeatingArrangement?: SeatingArrangementCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    userId: number
    classId: number
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    SeatingArrangement?: SeatingArrangementUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    Attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    cls?: ClsUpdateOneRequiredWithoutStudentsNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    SeatingArrangement?: SeatingArrangementUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    Attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    SeatingArrangement?: SeatingArrangementUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    userId: number
    classId: number
  }

  export type StudentUpdateManyMutationInput = {

  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
  }

  export type ClsCreateInput = {
    name: string
    teacher?: TeacherCreateNestedOneWithoutClassesInput
    register?: RegisterCreateNestedManyWithoutClsInput
    students?: StudentCreateNestedManyWithoutClsInput
    timetable?: TimetableCreateNestedManyWithoutClsInput
    ClassView?: ClassViewCreateNestedManyWithoutClsInput
    layouts?: LayoutCreateNestedManyWithoutClassesInput
  }

  export type ClsUncheckedCreateInput = {
    id?: number
    name: string
    teacherId?: number | null
    register?: RegisterUncheckedCreateNestedManyWithoutClsInput
    students?: StudentUncheckedCreateNestedManyWithoutClsInput
    timetable?: TimetableUncheckedCreateNestedManyWithoutClsInput
    ClassView?: ClassViewUncheckedCreateNestedManyWithoutClsInput
    layouts?: LayoutUncheckedCreateNestedManyWithoutClassesInput
  }

  export type ClsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUpdateOneWithoutClassesNestedInput
    register?: RegisterUpdateManyWithoutClsNestedInput
    students?: StudentUpdateManyWithoutClsNestedInput
    timetable?: TimetableUpdateManyWithoutClsNestedInput
    ClassView?: ClassViewUpdateManyWithoutClsNestedInput
    layouts?: LayoutUpdateManyWithoutClassesNestedInput
  }

  export type ClsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    register?: RegisterUncheckedUpdateManyWithoutClsNestedInput
    students?: StudentUncheckedUpdateManyWithoutClsNestedInput
    timetable?: TimetableUncheckedUpdateManyWithoutClsNestedInput
    ClassView?: ClassViewUncheckedUpdateManyWithoutClsNestedInput
    layouts?: LayoutUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type ClsCreateManyInput = {
    id?: number
    name: string
    teacherId?: number | null
  }

  export type ClsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TimetableCreateInput = {
    day: string
    startTime: Date | string
    endTime: Date | string
    cls: ClsCreateNestedOneWithoutTimetableInput
  }

  export type TimetableUncheckedCreateInput = {
    id?: number
    classId: number
    day: string
    startTime: Date | string
    endTime: Date | string
  }

  export type TimetableUpdateInput = {
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    cls?: ClsUpdateOneRequiredWithoutTimetableNestedInput
  }

  export type TimetableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimetableCreateManyInput = {
    id?: number
    classId: number
    day: string
    startTime: Date | string
    endTime: Date | string
  }

  export type TimetableUpdateManyMutationInput = {
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimetableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegisterCreateInput = {
    date: Date | string
    status?: string
    Attendance?: AttendanceCreateNestedManyWithoutRegisterInput
    cls: ClsCreateNestedOneWithoutRegisterInput
    teacher: TeacherCreateNestedOneWithoutRegisterInput
  }

  export type RegisterUncheckedCreateInput = {
    id?: number
    classId: number
    teacherId: number
    date: Date | string
    status?: string
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutRegisterInput
  }

  export type RegisterUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    Attendance?: AttendanceUpdateManyWithoutRegisterNestedInput
    cls?: ClsUpdateOneRequiredWithoutRegisterNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutRegisterNestedInput
  }

  export type RegisterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    Attendance?: AttendanceUncheckedUpdateManyWithoutRegisterNestedInput
  }

  export type RegisterCreateManyInput = {
    id?: number
    classId: number
    teacherId: number
    date: Date | string
    status?: string
  }

  export type RegisterUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RegisterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateInput = {
    status: string
    comment?: string | null
    lateMinutes?: number | null
    date?: Date | string
    register: RegisterCreateNestedOneWithoutAttendanceInput
    student: StudentCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: number
    studentId: number
    registerId: number
    status: string
    comment?: string | null
    lateMinutes?: number | null
    date?: Date | string
  }

  export type AttendanceUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    lateMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    register?: RegisterUpdateOneRequiredWithoutAttendanceNestedInput
    student?: StudentUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    registerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    lateMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    id?: number
    studentId: number
    registerId: number
    status: string
    comment?: string | null
    lateMinutes?: number | null
    date?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    lateMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    registerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    lateMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassViewCreateInput = {
    seat?: SeatCreateNestedManyWithoutClassViewInput
    cls: ClsCreateNestedOneWithoutClassViewInput
  }

  export type ClassViewUncheckedCreateInput = {
    id?: number
    classId: number
    seat?: SeatUncheckedCreateNestedManyWithoutClassViewInput
  }

  export type ClassViewUpdateInput = {
    seat?: SeatUpdateManyWithoutClassViewNestedInput
    cls?: ClsUpdateOneRequiredWithoutClassViewNestedInput
  }

  export type ClassViewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    seat?: SeatUncheckedUpdateManyWithoutClassViewNestedInput
  }

  export type ClassViewCreateManyInput = {
    id?: number
    classId: number
  }

  export type ClassViewUpdateManyMutationInput = {

  }

  export type ClassViewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
  }

  export type SeatCreateInput = {
    studentId: number
    coordinates_X: number
    coordinates_y: number
    ClassView: ClassViewCreateNestedOneWithoutSeatInput
  }

  export type SeatUncheckedCreateInput = {
    id?: number
    classViewId: number
    studentId: number
    coordinates_X: number
    coordinates_y: number
  }

  export type SeatUpdateInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    coordinates_X?: FloatFieldUpdateOperationsInput | number
    coordinates_y?: FloatFieldUpdateOperationsInput | number
    ClassView?: ClassViewUpdateOneRequiredWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    classViewId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    coordinates_X?: FloatFieldUpdateOperationsInput | number
    coordinates_y?: FloatFieldUpdateOperationsInput | number
  }

  export type SeatCreateManyInput = {
    id?: number
    classViewId: number
    studentId: number
    coordinates_X: number
    coordinates_y: number
  }

  export type SeatUpdateManyMutationInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    coordinates_X?: FloatFieldUpdateOperationsInput | number
    coordinates_y?: FloatFieldUpdateOperationsInput | number
  }

  export type SeatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    classViewId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    coordinates_X?: FloatFieldUpdateOperationsInput | number
    coordinates_y?: FloatFieldUpdateOperationsInput | number
  }

  export type LayoutCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    desks?: DeskCreateNestedManyWithoutLayoutInput
    seatingPlans?: SeatingPlanCreateNestedManyWithoutLayoutInput
    classes?: ClsCreateNestedManyWithoutLayoutsInput
  }

  export type LayoutUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    desks?: DeskUncheckedCreateNestedManyWithoutLayoutInput
    seatingPlans?: SeatingPlanUncheckedCreateNestedManyWithoutLayoutInput
    classes?: ClsUncheckedCreateNestedManyWithoutLayoutsInput
  }

  export type LayoutUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    desks?: DeskUpdateManyWithoutLayoutNestedInput
    seatingPlans?: SeatingPlanUpdateManyWithoutLayoutNestedInput
    classes?: ClsUpdateManyWithoutLayoutsNestedInput
  }

  export type LayoutUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    desks?: DeskUncheckedUpdateManyWithoutLayoutNestedInput
    seatingPlans?: SeatingPlanUncheckedUpdateManyWithoutLayoutNestedInput
    classes?: ClsUncheckedUpdateManyWithoutLayoutsNestedInput
  }

  export type LayoutCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LayoutUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LayoutUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeskCreateInput = {
    x: number
    y: number
    createdAt?: Date | string
    updatedAt?: Date | string
    layout: LayoutCreateNestedOneWithoutDesksInput
    SeatingArrangement?: SeatingArrangementCreateNestedManyWithoutDeskInput
  }

  export type DeskUncheckedCreateInput = {
    id?: number
    layoutId: number
    x: number
    y: number
    createdAt?: Date | string
    updatedAt?: Date | string
    SeatingArrangement?: SeatingArrangementUncheckedCreateNestedManyWithoutDeskInput
  }

  export type DeskUpdateInput = {
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    layout?: LayoutUpdateOneRequiredWithoutDesksNestedInput
    SeatingArrangement?: SeatingArrangementUpdateManyWithoutDeskNestedInput
  }

  export type DeskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    layoutId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SeatingArrangement?: SeatingArrangementUncheckedUpdateManyWithoutDeskNestedInput
  }

  export type DeskCreateManyInput = {
    id?: number
    layoutId: number
    x: number
    y: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeskUpdateManyMutationInput = {
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    layoutId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatingPlanCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    layout: LayoutCreateNestedOneWithoutSeatingPlansInput
    seatingArrangement?: SeatingArrangementCreateNestedManyWithoutSeatingPlanInput
  }

  export type SeatingPlanUncheckedCreateInput = {
    id?: number
    layoutId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    seatingArrangement?: SeatingArrangementUncheckedCreateNestedManyWithoutSeatingPlanInput
  }

  export type SeatingPlanUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    layout?: LayoutUpdateOneRequiredWithoutSeatingPlansNestedInput
    seatingArrangement?: SeatingArrangementUpdateManyWithoutSeatingPlanNestedInput
  }

  export type SeatingPlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    layoutId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seatingArrangement?: SeatingArrangementUncheckedUpdateManyWithoutSeatingPlanNestedInput
  }

  export type SeatingPlanCreateManyInput = {
    id?: number
    layoutId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeatingPlanUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatingPlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    layoutId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatingArrangementCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    seatingPlan: SeatingPlanCreateNestedOneWithoutSeatingArrangementInput
    desk: DeskCreateNestedOneWithoutSeatingArrangementInput
    student: StudentCreateNestedOneWithoutSeatingArrangementInput
  }

  export type SeatingArrangementUncheckedCreateInput = {
    id?: number
    seatingPlanId: number
    deskId: number
    studentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeatingArrangementUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seatingPlan?: SeatingPlanUpdateOneRequiredWithoutSeatingArrangementNestedInput
    desk?: DeskUpdateOneRequiredWithoutSeatingArrangementNestedInput
    student?: StudentUpdateOneRequiredWithoutSeatingArrangementNestedInput
  }

  export type SeatingArrangementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatingPlanId?: IntFieldUpdateOperationsInput | number
    deskId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatingArrangementCreateManyInput = {
    id?: number
    seatingPlanId: number
    deskId: number
    studentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeatingArrangementUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatingArrangementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatingPlanId?: IntFieldUpdateOperationsInput | number
    deskId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StudentNullableRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type TeacherNullableRelationFilter = {
    is?: TeacherWhereInput | null
    isNot?: TeacherWhereInput | null
  }

  export type RoleRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClsListRelationFilter = {
    every?: ClsWhereInput
    some?: ClsWhereInput
    none?: ClsWhereInput
  }

  export type RegisterListRelationFilter = {
    every?: RegisterWhereInput
    some?: RegisterWhereInput
    none?: RegisterWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegisterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TeacherAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TeacherSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type ClsRelationFilter = {
    is?: ClsWhereInput
    isNot?: ClsWhereInput
  }

  export type SeatingArrangementListRelationFilter = {
    every?: SeatingArrangementWhereInput
    some?: SeatingArrangementWhereInput
    none?: SeatingArrangementWhereInput
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeatingArrangementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classId?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classId?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classId?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    classId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type TimetableListRelationFilter = {
    every?: TimetableWhereInput
    some?: TimetableWhereInput
    none?: TimetableWhereInput
  }

  export type ClassViewListRelationFilter = {
    every?: ClassViewWhereInput
    some?: ClassViewWhereInput
    none?: ClassViewWhereInput
  }

  export type LayoutListRelationFilter = {
    every?: LayoutWhereInput
    some?: LayoutWhereInput
    none?: LayoutWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimetableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LayoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
  }

  export type ClsAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
  }

  export type ClsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
  }

  export type ClsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
  }

  export type ClsSumOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type TimetableCountOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type TimetableAvgOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
  }

  export type TimetableMaxOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type TimetableMinOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type TimetableSumOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
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

  export type TeacherRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type RegisterCountOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type RegisterAvgOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    teacherId?: SortOrder
  }

  export type RegisterMaxOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type RegisterMinOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type RegisterSumOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    teacherId?: SortOrder
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

  export type RegisterRelationFilter = {
    is?: RegisterWhereInput
    isNot?: RegisterWhereInput
  }

  export type StudentRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    registerId?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    lateMinutes?: SortOrder
    date?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    registerId?: SortOrder
    lateMinutes?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    registerId?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    lateMinutes?: SortOrder
    date?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    registerId?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    lateMinutes?: SortOrder
    date?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    registerId?: SortOrder
    lateMinutes?: SortOrder
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

  export type SeatListRelationFilter = {
    every?: SeatWhereInput
    some?: SeatWhereInput
    none?: SeatWhereInput
  }

  export type SeatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassViewCountOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
  }

  export type ClassViewAvgOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
  }

  export type ClassViewMaxOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
  }

  export type ClassViewMinOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
  }

  export type ClassViewSumOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
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

  export type ClassViewRelationFilter = {
    is?: ClassViewWhereInput
    isNot?: ClassViewWhereInput
  }

  export type SeatCountOrderByAggregateInput = {
    id?: SortOrder
    classViewId?: SortOrder
    studentId?: SortOrder
    coordinates_X?: SortOrder
    coordinates_y?: SortOrder
  }

  export type SeatAvgOrderByAggregateInput = {
    id?: SortOrder
    classViewId?: SortOrder
    studentId?: SortOrder
    coordinates_X?: SortOrder
    coordinates_y?: SortOrder
  }

  export type SeatMaxOrderByAggregateInput = {
    id?: SortOrder
    classViewId?: SortOrder
    studentId?: SortOrder
    coordinates_X?: SortOrder
    coordinates_y?: SortOrder
  }

  export type SeatMinOrderByAggregateInput = {
    id?: SortOrder
    classViewId?: SortOrder
    studentId?: SortOrder
    coordinates_X?: SortOrder
    coordinates_y?: SortOrder
  }

  export type SeatSumOrderByAggregateInput = {
    id?: SortOrder
    classViewId?: SortOrder
    studentId?: SortOrder
    coordinates_X?: SortOrder
    coordinates_y?: SortOrder
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

  export type DeskListRelationFilter = {
    every?: DeskWhereInput
    some?: DeskWhereInput
    none?: DeskWhereInput
  }

  export type SeatingPlanListRelationFilter = {
    every?: SeatingPlanWhereInput
    some?: SeatingPlanWhereInput
    none?: SeatingPlanWhereInput
  }

  export type DeskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeatingPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LayoutCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LayoutAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LayoutMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LayoutMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LayoutSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LayoutRelationFilter = {
    is?: LayoutWhereInput
    isNot?: LayoutWhereInput
  }

  export type DeskCountOrderByAggregateInput = {
    id?: SortOrder
    layoutId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeskAvgOrderByAggregateInput = {
    id?: SortOrder
    layoutId?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type DeskMaxOrderByAggregateInput = {
    id?: SortOrder
    layoutId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeskMinOrderByAggregateInput = {
    id?: SortOrder
    layoutId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeskSumOrderByAggregateInput = {
    id?: SortOrder
    layoutId?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type SeatingPlanCountOrderByAggregateInput = {
    id?: SortOrder
    layoutId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeatingPlanAvgOrderByAggregateInput = {
    id?: SortOrder
    layoutId?: SortOrder
  }

  export type SeatingPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    layoutId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeatingPlanMinOrderByAggregateInput = {
    id?: SortOrder
    layoutId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeatingPlanSumOrderByAggregateInput = {
    id?: SortOrder
    layoutId?: SortOrder
  }

  export type SeatingPlanRelationFilter = {
    is?: SeatingPlanWhereInput
    isNot?: SeatingPlanWhereInput
  }

  export type DeskRelationFilter = {
    is?: DeskWhereInput
    isNot?: DeskWhereInput
  }

  export type SeatingArrangementSeatingPlanIdDeskIdStudentIdCompoundUniqueInput = {
    seatingPlanId: number
    deskId: number
    studentId: number
  }

  export type SeatingArrangementCountOrderByAggregateInput = {
    id?: SortOrder
    seatingPlanId?: SortOrder
    deskId?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeatingArrangementAvgOrderByAggregateInput = {
    id?: SortOrder
    seatingPlanId?: SortOrder
    deskId?: SortOrder
    studentId?: SortOrder
  }

  export type SeatingArrangementMaxOrderByAggregateInput = {
    id?: SortOrder
    seatingPlanId?: SortOrder
    deskId?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeatingArrangementMinOrderByAggregateInput = {
    id?: SortOrder
    seatingPlanId?: SortOrder
    deskId?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeatingArrangementSumOrderByAggregateInput = {
    id?: SortOrder
    seatingPlanId?: SortOrder
    deskId?: SortOrder
    studentId?: SortOrder
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    connect?: TeacherWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUserInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput
    connect?: RoleWhereUniqueInput
  }

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type TeacherUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    connect?: TeacherWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    upsert?: TeacherUpsertWithoutUserInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutUserInput, TeacherUpdateWithoutUserInput>, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type RoleUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput
    upsert?: RoleUpsertWithoutUserInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserInput, RoleUpdateWithoutUserInput>, RoleUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    upsert?: TeacherUpsertWithoutUserInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutUserInput, TeacherUpdateWithoutUserInput>, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClsCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClsCreateWithoutTeacherInput, ClsUncheckedCreateWithoutTeacherInput> | ClsCreateWithoutTeacherInput[] | ClsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClsCreateOrConnectWithoutTeacherInput | ClsCreateOrConnectWithoutTeacherInput[]
    createMany?: ClsCreateManyTeacherInputEnvelope
    connect?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
  }

  export type RegisterCreateNestedManyWithoutTeacherInput = {
    create?: XOR<RegisterCreateWithoutTeacherInput, RegisterUncheckedCreateWithoutTeacherInput> | RegisterCreateWithoutTeacherInput[] | RegisterUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutTeacherInput | RegisterCreateOrConnectWithoutTeacherInput[]
    createMany?: RegisterCreateManyTeacherInputEnvelope
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTeacherInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    connect?: UserWhereUniqueInput
  }

  export type ClsUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClsCreateWithoutTeacherInput, ClsUncheckedCreateWithoutTeacherInput> | ClsCreateWithoutTeacherInput[] | ClsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClsCreateOrConnectWithoutTeacherInput | ClsCreateOrConnectWithoutTeacherInput[]
    createMany?: ClsCreateManyTeacherInputEnvelope
    connect?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
  }

  export type RegisterUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<RegisterCreateWithoutTeacherInput, RegisterUncheckedCreateWithoutTeacherInput> | RegisterCreateWithoutTeacherInput[] | RegisterUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutTeacherInput | RegisterCreateOrConnectWithoutTeacherInput[]
    createMany?: RegisterCreateManyTeacherInputEnvelope
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
  }

  export type ClsUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClsCreateWithoutTeacherInput, ClsUncheckedCreateWithoutTeacherInput> | ClsCreateWithoutTeacherInput[] | ClsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClsCreateOrConnectWithoutTeacherInput | ClsCreateOrConnectWithoutTeacherInput[]
    upsert?: ClsUpsertWithWhereUniqueWithoutTeacherInput | ClsUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClsCreateManyTeacherInputEnvelope
    set?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
    disconnect?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
    delete?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
    connect?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
    update?: ClsUpdateWithWhereUniqueWithoutTeacherInput | ClsUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClsUpdateManyWithWhereWithoutTeacherInput | ClsUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClsScalarWhereInput | ClsScalarWhereInput[]
  }

  export type RegisterUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<RegisterCreateWithoutTeacherInput, RegisterUncheckedCreateWithoutTeacherInput> | RegisterCreateWithoutTeacherInput[] | RegisterUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutTeacherInput | RegisterCreateOrConnectWithoutTeacherInput[]
    upsert?: RegisterUpsertWithWhereUniqueWithoutTeacherInput | RegisterUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: RegisterCreateManyTeacherInputEnvelope
    set?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    disconnect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    delete?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    update?: RegisterUpdateWithWhereUniqueWithoutTeacherInput | RegisterUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: RegisterUpdateManyWithWhereWithoutTeacherInput | RegisterUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: RegisterScalarWhereInput | RegisterScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutTeacherNestedInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    upsert?: UserUpsertWithoutTeacherInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherInput, UserUpdateWithoutTeacherInput>, UserUncheckedUpdateWithoutTeacherInput>
  }

  export type ClsUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClsCreateWithoutTeacherInput, ClsUncheckedCreateWithoutTeacherInput> | ClsCreateWithoutTeacherInput[] | ClsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClsCreateOrConnectWithoutTeacherInput | ClsCreateOrConnectWithoutTeacherInput[]
    upsert?: ClsUpsertWithWhereUniqueWithoutTeacherInput | ClsUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClsCreateManyTeacherInputEnvelope
    set?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
    disconnect?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
    delete?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
    connect?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
    update?: ClsUpdateWithWhereUniqueWithoutTeacherInput | ClsUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClsUpdateManyWithWhereWithoutTeacherInput | ClsUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClsScalarWhereInput | ClsScalarWhereInput[]
  }

  export type RegisterUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<RegisterCreateWithoutTeacherInput, RegisterUncheckedCreateWithoutTeacherInput> | RegisterCreateWithoutTeacherInput[] | RegisterUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutTeacherInput | RegisterCreateOrConnectWithoutTeacherInput[]
    upsert?: RegisterUpsertWithWhereUniqueWithoutTeacherInput | RegisterUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: RegisterCreateManyTeacherInputEnvelope
    set?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    disconnect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    delete?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    update?: RegisterUpdateWithWhereUniqueWithoutTeacherInput | RegisterUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: RegisterUpdateManyWithWhereWithoutTeacherInput | RegisterUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: RegisterScalarWhereInput | RegisterScalarWhereInput[]
  }

  export type AttendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ClsCreateNestedOneWithoutStudentsInput = {
    create?: XOR<ClsCreateWithoutStudentsInput, ClsUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClsCreateOrConnectWithoutStudentsInput
    connect?: ClsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type SeatingArrangementCreateNestedManyWithoutStudentInput = {
    create?: XOR<SeatingArrangementCreateWithoutStudentInput, SeatingArrangementUncheckedCreateWithoutStudentInput> | SeatingArrangementCreateWithoutStudentInput[] | SeatingArrangementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SeatingArrangementCreateOrConnectWithoutStudentInput | SeatingArrangementCreateOrConnectWithoutStudentInput[]
    createMany?: SeatingArrangementCreateManyStudentInputEnvelope
    connect?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type SeatingArrangementUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<SeatingArrangementCreateWithoutStudentInput, SeatingArrangementUncheckedCreateWithoutStudentInput> | SeatingArrangementCreateWithoutStudentInput[] | SeatingArrangementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SeatingArrangementCreateOrConnectWithoutStudentInput | SeatingArrangementCreateOrConnectWithoutStudentInput[]
    createMany?: SeatingArrangementCreateManyStudentInputEnvelope
    connect?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
  }

  export type AttendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ClsUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<ClsCreateWithoutStudentsInput, ClsUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClsCreateOrConnectWithoutStudentsInput
    upsert?: ClsUpsertWithoutStudentsInput
    connect?: ClsWhereUniqueInput
    update?: XOR<XOR<ClsUpdateToOneWithWhereWithoutStudentsInput, ClsUpdateWithoutStudentsInput>, ClsUncheckedUpdateWithoutStudentsInput>
  }

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type SeatingArrangementUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SeatingArrangementCreateWithoutStudentInput, SeatingArrangementUncheckedCreateWithoutStudentInput> | SeatingArrangementCreateWithoutStudentInput[] | SeatingArrangementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SeatingArrangementCreateOrConnectWithoutStudentInput | SeatingArrangementCreateOrConnectWithoutStudentInput[]
    upsert?: SeatingArrangementUpsertWithWhereUniqueWithoutStudentInput | SeatingArrangementUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SeatingArrangementCreateManyStudentInputEnvelope
    set?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    disconnect?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    delete?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    connect?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    update?: SeatingArrangementUpdateWithWhereUniqueWithoutStudentInput | SeatingArrangementUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SeatingArrangementUpdateManyWithWhereWithoutStudentInput | SeatingArrangementUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SeatingArrangementScalarWhereInput | SeatingArrangementScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type SeatingArrangementUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SeatingArrangementCreateWithoutStudentInput, SeatingArrangementUncheckedCreateWithoutStudentInput> | SeatingArrangementCreateWithoutStudentInput[] | SeatingArrangementUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SeatingArrangementCreateOrConnectWithoutStudentInput | SeatingArrangementCreateOrConnectWithoutStudentInput[]
    upsert?: SeatingArrangementUpsertWithWhereUniqueWithoutStudentInput | SeatingArrangementUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SeatingArrangementCreateManyStudentInputEnvelope
    set?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    disconnect?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    delete?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    connect?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    update?: SeatingArrangementUpdateWithWhereUniqueWithoutStudentInput | SeatingArrangementUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SeatingArrangementUpdateManyWithWhereWithoutStudentInput | SeatingArrangementUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SeatingArrangementScalarWhereInput | SeatingArrangementScalarWhereInput[]
  }

  export type TeacherCreateNestedOneWithoutClassesInput = {
    create?: XOR<TeacherCreateWithoutClassesInput, TeacherUncheckedCreateWithoutClassesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutClassesInput
    connect?: TeacherWhereUniqueInput
  }

  export type RegisterCreateNestedManyWithoutClsInput = {
    create?: XOR<RegisterCreateWithoutClsInput, RegisterUncheckedCreateWithoutClsInput> | RegisterCreateWithoutClsInput[] | RegisterUncheckedCreateWithoutClsInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutClsInput | RegisterCreateOrConnectWithoutClsInput[]
    createMany?: RegisterCreateManyClsInputEnvelope
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutClsInput = {
    create?: XOR<StudentCreateWithoutClsInput, StudentUncheckedCreateWithoutClsInput> | StudentCreateWithoutClsInput[] | StudentUncheckedCreateWithoutClsInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClsInput | StudentCreateOrConnectWithoutClsInput[]
    createMany?: StudentCreateManyClsInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type TimetableCreateNestedManyWithoutClsInput = {
    create?: XOR<TimetableCreateWithoutClsInput, TimetableUncheckedCreateWithoutClsInput> | TimetableCreateWithoutClsInput[] | TimetableUncheckedCreateWithoutClsInput[]
    connectOrCreate?: TimetableCreateOrConnectWithoutClsInput | TimetableCreateOrConnectWithoutClsInput[]
    createMany?: TimetableCreateManyClsInputEnvelope
    connect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
  }

  export type ClassViewCreateNestedManyWithoutClsInput = {
    create?: XOR<ClassViewCreateWithoutClsInput, ClassViewUncheckedCreateWithoutClsInput> | ClassViewCreateWithoutClsInput[] | ClassViewUncheckedCreateWithoutClsInput[]
    connectOrCreate?: ClassViewCreateOrConnectWithoutClsInput | ClassViewCreateOrConnectWithoutClsInput[]
    createMany?: ClassViewCreateManyClsInputEnvelope
    connect?: ClassViewWhereUniqueInput | ClassViewWhereUniqueInput[]
  }

  export type LayoutCreateNestedManyWithoutClassesInput = {
    create?: XOR<LayoutCreateWithoutClassesInput, LayoutUncheckedCreateWithoutClassesInput> | LayoutCreateWithoutClassesInput[] | LayoutUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: LayoutCreateOrConnectWithoutClassesInput | LayoutCreateOrConnectWithoutClassesInput[]
    connect?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
  }

  export type RegisterUncheckedCreateNestedManyWithoutClsInput = {
    create?: XOR<RegisterCreateWithoutClsInput, RegisterUncheckedCreateWithoutClsInput> | RegisterCreateWithoutClsInput[] | RegisterUncheckedCreateWithoutClsInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutClsInput | RegisterCreateOrConnectWithoutClsInput[]
    createMany?: RegisterCreateManyClsInputEnvelope
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutClsInput = {
    create?: XOR<StudentCreateWithoutClsInput, StudentUncheckedCreateWithoutClsInput> | StudentCreateWithoutClsInput[] | StudentUncheckedCreateWithoutClsInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClsInput | StudentCreateOrConnectWithoutClsInput[]
    createMany?: StudentCreateManyClsInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type TimetableUncheckedCreateNestedManyWithoutClsInput = {
    create?: XOR<TimetableCreateWithoutClsInput, TimetableUncheckedCreateWithoutClsInput> | TimetableCreateWithoutClsInput[] | TimetableUncheckedCreateWithoutClsInput[]
    connectOrCreate?: TimetableCreateOrConnectWithoutClsInput | TimetableCreateOrConnectWithoutClsInput[]
    createMany?: TimetableCreateManyClsInputEnvelope
    connect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
  }

  export type ClassViewUncheckedCreateNestedManyWithoutClsInput = {
    create?: XOR<ClassViewCreateWithoutClsInput, ClassViewUncheckedCreateWithoutClsInput> | ClassViewCreateWithoutClsInput[] | ClassViewUncheckedCreateWithoutClsInput[]
    connectOrCreate?: ClassViewCreateOrConnectWithoutClsInput | ClassViewCreateOrConnectWithoutClsInput[]
    createMany?: ClassViewCreateManyClsInputEnvelope
    connect?: ClassViewWhereUniqueInput | ClassViewWhereUniqueInput[]
  }

  export type LayoutUncheckedCreateNestedManyWithoutClassesInput = {
    create?: XOR<LayoutCreateWithoutClassesInput, LayoutUncheckedCreateWithoutClassesInput> | LayoutCreateWithoutClassesInput[] | LayoutUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: LayoutCreateOrConnectWithoutClassesInput | LayoutCreateOrConnectWithoutClassesInput[]
    connect?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
  }

  export type TeacherUpdateOneWithoutClassesNestedInput = {
    create?: XOR<TeacherCreateWithoutClassesInput, TeacherUncheckedCreateWithoutClassesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutClassesInput
    upsert?: TeacherUpsertWithoutClassesInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutClassesInput, TeacherUpdateWithoutClassesInput>, TeacherUncheckedUpdateWithoutClassesInput>
  }

  export type RegisterUpdateManyWithoutClsNestedInput = {
    create?: XOR<RegisterCreateWithoutClsInput, RegisterUncheckedCreateWithoutClsInput> | RegisterCreateWithoutClsInput[] | RegisterUncheckedCreateWithoutClsInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutClsInput | RegisterCreateOrConnectWithoutClsInput[]
    upsert?: RegisterUpsertWithWhereUniqueWithoutClsInput | RegisterUpsertWithWhereUniqueWithoutClsInput[]
    createMany?: RegisterCreateManyClsInputEnvelope
    set?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    disconnect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    delete?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    update?: RegisterUpdateWithWhereUniqueWithoutClsInput | RegisterUpdateWithWhereUniqueWithoutClsInput[]
    updateMany?: RegisterUpdateManyWithWhereWithoutClsInput | RegisterUpdateManyWithWhereWithoutClsInput[]
    deleteMany?: RegisterScalarWhereInput | RegisterScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutClsNestedInput = {
    create?: XOR<StudentCreateWithoutClsInput, StudentUncheckedCreateWithoutClsInput> | StudentCreateWithoutClsInput[] | StudentUncheckedCreateWithoutClsInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClsInput | StudentCreateOrConnectWithoutClsInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutClsInput | StudentUpsertWithWhereUniqueWithoutClsInput[]
    createMany?: StudentCreateManyClsInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutClsInput | StudentUpdateWithWhereUniqueWithoutClsInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutClsInput | StudentUpdateManyWithWhereWithoutClsInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type TimetableUpdateManyWithoutClsNestedInput = {
    create?: XOR<TimetableCreateWithoutClsInput, TimetableUncheckedCreateWithoutClsInput> | TimetableCreateWithoutClsInput[] | TimetableUncheckedCreateWithoutClsInput[]
    connectOrCreate?: TimetableCreateOrConnectWithoutClsInput | TimetableCreateOrConnectWithoutClsInput[]
    upsert?: TimetableUpsertWithWhereUniqueWithoutClsInput | TimetableUpsertWithWhereUniqueWithoutClsInput[]
    createMany?: TimetableCreateManyClsInputEnvelope
    set?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    disconnect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    delete?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    connect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    update?: TimetableUpdateWithWhereUniqueWithoutClsInput | TimetableUpdateWithWhereUniqueWithoutClsInput[]
    updateMany?: TimetableUpdateManyWithWhereWithoutClsInput | TimetableUpdateManyWithWhereWithoutClsInput[]
    deleteMany?: TimetableScalarWhereInput | TimetableScalarWhereInput[]
  }

  export type ClassViewUpdateManyWithoutClsNestedInput = {
    create?: XOR<ClassViewCreateWithoutClsInput, ClassViewUncheckedCreateWithoutClsInput> | ClassViewCreateWithoutClsInput[] | ClassViewUncheckedCreateWithoutClsInput[]
    connectOrCreate?: ClassViewCreateOrConnectWithoutClsInput | ClassViewCreateOrConnectWithoutClsInput[]
    upsert?: ClassViewUpsertWithWhereUniqueWithoutClsInput | ClassViewUpsertWithWhereUniqueWithoutClsInput[]
    createMany?: ClassViewCreateManyClsInputEnvelope
    set?: ClassViewWhereUniqueInput | ClassViewWhereUniqueInput[]
    disconnect?: ClassViewWhereUniqueInput | ClassViewWhereUniqueInput[]
    delete?: ClassViewWhereUniqueInput | ClassViewWhereUniqueInput[]
    connect?: ClassViewWhereUniqueInput | ClassViewWhereUniqueInput[]
    update?: ClassViewUpdateWithWhereUniqueWithoutClsInput | ClassViewUpdateWithWhereUniqueWithoutClsInput[]
    updateMany?: ClassViewUpdateManyWithWhereWithoutClsInput | ClassViewUpdateManyWithWhereWithoutClsInput[]
    deleteMany?: ClassViewScalarWhereInput | ClassViewScalarWhereInput[]
  }

  export type LayoutUpdateManyWithoutClassesNestedInput = {
    create?: XOR<LayoutCreateWithoutClassesInput, LayoutUncheckedCreateWithoutClassesInput> | LayoutCreateWithoutClassesInput[] | LayoutUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: LayoutCreateOrConnectWithoutClassesInput | LayoutCreateOrConnectWithoutClassesInput[]
    upsert?: LayoutUpsertWithWhereUniqueWithoutClassesInput | LayoutUpsertWithWhereUniqueWithoutClassesInput[]
    set?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
    disconnect?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
    delete?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
    connect?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
    update?: LayoutUpdateWithWhereUniqueWithoutClassesInput | LayoutUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: LayoutUpdateManyWithWhereWithoutClassesInput | LayoutUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: LayoutScalarWhereInput | LayoutScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RegisterUncheckedUpdateManyWithoutClsNestedInput = {
    create?: XOR<RegisterCreateWithoutClsInput, RegisterUncheckedCreateWithoutClsInput> | RegisterCreateWithoutClsInput[] | RegisterUncheckedCreateWithoutClsInput[]
    connectOrCreate?: RegisterCreateOrConnectWithoutClsInput | RegisterCreateOrConnectWithoutClsInput[]
    upsert?: RegisterUpsertWithWhereUniqueWithoutClsInput | RegisterUpsertWithWhereUniqueWithoutClsInput[]
    createMany?: RegisterCreateManyClsInputEnvelope
    set?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    disconnect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    delete?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    connect?: RegisterWhereUniqueInput | RegisterWhereUniqueInput[]
    update?: RegisterUpdateWithWhereUniqueWithoutClsInput | RegisterUpdateWithWhereUniqueWithoutClsInput[]
    updateMany?: RegisterUpdateManyWithWhereWithoutClsInput | RegisterUpdateManyWithWhereWithoutClsInput[]
    deleteMany?: RegisterScalarWhereInput | RegisterScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutClsNestedInput = {
    create?: XOR<StudentCreateWithoutClsInput, StudentUncheckedCreateWithoutClsInput> | StudentCreateWithoutClsInput[] | StudentUncheckedCreateWithoutClsInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClsInput | StudentCreateOrConnectWithoutClsInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutClsInput | StudentUpsertWithWhereUniqueWithoutClsInput[]
    createMany?: StudentCreateManyClsInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutClsInput | StudentUpdateWithWhereUniqueWithoutClsInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutClsInput | StudentUpdateManyWithWhereWithoutClsInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type TimetableUncheckedUpdateManyWithoutClsNestedInput = {
    create?: XOR<TimetableCreateWithoutClsInput, TimetableUncheckedCreateWithoutClsInput> | TimetableCreateWithoutClsInput[] | TimetableUncheckedCreateWithoutClsInput[]
    connectOrCreate?: TimetableCreateOrConnectWithoutClsInput | TimetableCreateOrConnectWithoutClsInput[]
    upsert?: TimetableUpsertWithWhereUniqueWithoutClsInput | TimetableUpsertWithWhereUniqueWithoutClsInput[]
    createMany?: TimetableCreateManyClsInputEnvelope
    set?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    disconnect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    delete?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    connect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    update?: TimetableUpdateWithWhereUniqueWithoutClsInput | TimetableUpdateWithWhereUniqueWithoutClsInput[]
    updateMany?: TimetableUpdateManyWithWhereWithoutClsInput | TimetableUpdateManyWithWhereWithoutClsInput[]
    deleteMany?: TimetableScalarWhereInput | TimetableScalarWhereInput[]
  }

  export type ClassViewUncheckedUpdateManyWithoutClsNestedInput = {
    create?: XOR<ClassViewCreateWithoutClsInput, ClassViewUncheckedCreateWithoutClsInput> | ClassViewCreateWithoutClsInput[] | ClassViewUncheckedCreateWithoutClsInput[]
    connectOrCreate?: ClassViewCreateOrConnectWithoutClsInput | ClassViewCreateOrConnectWithoutClsInput[]
    upsert?: ClassViewUpsertWithWhereUniqueWithoutClsInput | ClassViewUpsertWithWhereUniqueWithoutClsInput[]
    createMany?: ClassViewCreateManyClsInputEnvelope
    set?: ClassViewWhereUniqueInput | ClassViewWhereUniqueInput[]
    disconnect?: ClassViewWhereUniqueInput | ClassViewWhereUniqueInput[]
    delete?: ClassViewWhereUniqueInput | ClassViewWhereUniqueInput[]
    connect?: ClassViewWhereUniqueInput | ClassViewWhereUniqueInput[]
    update?: ClassViewUpdateWithWhereUniqueWithoutClsInput | ClassViewUpdateWithWhereUniqueWithoutClsInput[]
    updateMany?: ClassViewUpdateManyWithWhereWithoutClsInput | ClassViewUpdateManyWithWhereWithoutClsInput[]
    deleteMany?: ClassViewScalarWhereInput | ClassViewScalarWhereInput[]
  }

  export type LayoutUncheckedUpdateManyWithoutClassesNestedInput = {
    create?: XOR<LayoutCreateWithoutClassesInput, LayoutUncheckedCreateWithoutClassesInput> | LayoutCreateWithoutClassesInput[] | LayoutUncheckedCreateWithoutClassesInput[]
    connectOrCreate?: LayoutCreateOrConnectWithoutClassesInput | LayoutCreateOrConnectWithoutClassesInput[]
    upsert?: LayoutUpsertWithWhereUniqueWithoutClassesInput | LayoutUpsertWithWhereUniqueWithoutClassesInput[]
    set?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
    disconnect?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
    delete?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
    connect?: LayoutWhereUniqueInput | LayoutWhereUniqueInput[]
    update?: LayoutUpdateWithWhereUniqueWithoutClassesInput | LayoutUpdateWithWhereUniqueWithoutClassesInput[]
    updateMany?: LayoutUpdateManyWithWhereWithoutClassesInput | LayoutUpdateManyWithWhereWithoutClassesInput[]
    deleteMany?: LayoutScalarWhereInput | LayoutScalarWhereInput[]
  }

  export type ClsCreateNestedOneWithoutTimetableInput = {
    create?: XOR<ClsCreateWithoutTimetableInput, ClsUncheckedCreateWithoutTimetableInput>
    connectOrCreate?: ClsCreateOrConnectWithoutTimetableInput
    connect?: ClsWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClsUpdateOneRequiredWithoutTimetableNestedInput = {
    create?: XOR<ClsCreateWithoutTimetableInput, ClsUncheckedCreateWithoutTimetableInput>
    connectOrCreate?: ClsCreateOrConnectWithoutTimetableInput
    upsert?: ClsUpsertWithoutTimetableInput
    connect?: ClsWhereUniqueInput
    update?: XOR<XOR<ClsUpdateToOneWithWhereWithoutTimetableInput, ClsUpdateWithoutTimetableInput>, ClsUncheckedUpdateWithoutTimetableInput>
  }

  export type AttendanceCreateNestedManyWithoutRegisterInput = {
    create?: XOR<AttendanceCreateWithoutRegisterInput, AttendanceUncheckedCreateWithoutRegisterInput> | AttendanceCreateWithoutRegisterInput[] | AttendanceUncheckedCreateWithoutRegisterInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutRegisterInput | AttendanceCreateOrConnectWithoutRegisterInput[]
    createMany?: AttendanceCreateManyRegisterInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ClsCreateNestedOneWithoutRegisterInput = {
    create?: XOR<ClsCreateWithoutRegisterInput, ClsUncheckedCreateWithoutRegisterInput>
    connectOrCreate?: ClsCreateOrConnectWithoutRegisterInput
    connect?: ClsWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutRegisterInput = {
    create?: XOR<TeacherCreateWithoutRegisterInput, TeacherUncheckedCreateWithoutRegisterInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutRegisterInput
    connect?: TeacherWhereUniqueInput
  }

  export type AttendanceUncheckedCreateNestedManyWithoutRegisterInput = {
    create?: XOR<AttendanceCreateWithoutRegisterInput, AttendanceUncheckedCreateWithoutRegisterInput> | AttendanceCreateWithoutRegisterInput[] | AttendanceUncheckedCreateWithoutRegisterInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutRegisterInput | AttendanceCreateOrConnectWithoutRegisterInput[]
    createMany?: AttendanceCreateManyRegisterInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AttendanceUpdateManyWithoutRegisterNestedInput = {
    create?: XOR<AttendanceCreateWithoutRegisterInput, AttendanceUncheckedCreateWithoutRegisterInput> | AttendanceCreateWithoutRegisterInput[] | AttendanceUncheckedCreateWithoutRegisterInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutRegisterInput | AttendanceCreateOrConnectWithoutRegisterInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutRegisterInput | AttendanceUpsertWithWhereUniqueWithoutRegisterInput[]
    createMany?: AttendanceCreateManyRegisterInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutRegisterInput | AttendanceUpdateWithWhereUniqueWithoutRegisterInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutRegisterInput | AttendanceUpdateManyWithWhereWithoutRegisterInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ClsUpdateOneRequiredWithoutRegisterNestedInput = {
    create?: XOR<ClsCreateWithoutRegisterInput, ClsUncheckedCreateWithoutRegisterInput>
    connectOrCreate?: ClsCreateOrConnectWithoutRegisterInput
    upsert?: ClsUpsertWithoutRegisterInput
    connect?: ClsWhereUniqueInput
    update?: XOR<XOR<ClsUpdateToOneWithWhereWithoutRegisterInput, ClsUpdateWithoutRegisterInput>, ClsUncheckedUpdateWithoutRegisterInput>
  }

  export type TeacherUpdateOneRequiredWithoutRegisterNestedInput = {
    create?: XOR<TeacherCreateWithoutRegisterInput, TeacherUncheckedCreateWithoutRegisterInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutRegisterInput
    upsert?: TeacherUpsertWithoutRegisterInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutRegisterInput, TeacherUpdateWithoutRegisterInput>, TeacherUncheckedUpdateWithoutRegisterInput>
  }

  export type AttendanceUncheckedUpdateManyWithoutRegisterNestedInput = {
    create?: XOR<AttendanceCreateWithoutRegisterInput, AttendanceUncheckedCreateWithoutRegisterInput> | AttendanceCreateWithoutRegisterInput[] | AttendanceUncheckedCreateWithoutRegisterInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutRegisterInput | AttendanceCreateOrConnectWithoutRegisterInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutRegisterInput | AttendanceUpsertWithWhereUniqueWithoutRegisterInput[]
    createMany?: AttendanceCreateManyRegisterInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutRegisterInput | AttendanceUpdateWithWhereUniqueWithoutRegisterInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutRegisterInput | AttendanceUpdateManyWithWhereWithoutRegisterInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type RegisterCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<RegisterCreateWithoutAttendanceInput, RegisterUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: RegisterCreateOrConnectWithoutAttendanceInput
    connect?: RegisterWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendanceInput
    connect?: StudentWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RegisterUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<RegisterCreateWithoutAttendanceInput, RegisterUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: RegisterCreateOrConnectWithoutAttendanceInput
    upsert?: RegisterUpsertWithoutAttendanceInput
    connect?: RegisterWhereUniqueInput
    update?: XOR<XOR<RegisterUpdateToOneWithWhereWithoutAttendanceInput, RegisterUpdateWithoutAttendanceInput>, RegisterUncheckedUpdateWithoutAttendanceInput>
  }

  export type StudentUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendanceInput
    upsert?: StudentUpsertWithoutAttendanceInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAttendanceInput, StudentUpdateWithoutAttendanceInput>, StudentUncheckedUpdateWithoutAttendanceInput>
  }

  export type SeatCreateNestedManyWithoutClassViewInput = {
    create?: XOR<SeatCreateWithoutClassViewInput, SeatUncheckedCreateWithoutClassViewInput> | SeatCreateWithoutClassViewInput[] | SeatUncheckedCreateWithoutClassViewInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutClassViewInput | SeatCreateOrConnectWithoutClassViewInput[]
    createMany?: SeatCreateManyClassViewInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type ClsCreateNestedOneWithoutClassViewInput = {
    create?: XOR<ClsCreateWithoutClassViewInput, ClsUncheckedCreateWithoutClassViewInput>
    connectOrCreate?: ClsCreateOrConnectWithoutClassViewInput
    connect?: ClsWhereUniqueInput
  }

  export type SeatUncheckedCreateNestedManyWithoutClassViewInput = {
    create?: XOR<SeatCreateWithoutClassViewInput, SeatUncheckedCreateWithoutClassViewInput> | SeatCreateWithoutClassViewInput[] | SeatUncheckedCreateWithoutClassViewInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutClassViewInput | SeatCreateOrConnectWithoutClassViewInput[]
    createMany?: SeatCreateManyClassViewInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type SeatUpdateManyWithoutClassViewNestedInput = {
    create?: XOR<SeatCreateWithoutClassViewInput, SeatUncheckedCreateWithoutClassViewInput> | SeatCreateWithoutClassViewInput[] | SeatUncheckedCreateWithoutClassViewInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutClassViewInput | SeatCreateOrConnectWithoutClassViewInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutClassViewInput | SeatUpsertWithWhereUniqueWithoutClassViewInput[]
    createMany?: SeatCreateManyClassViewInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutClassViewInput | SeatUpdateWithWhereUniqueWithoutClassViewInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutClassViewInput | SeatUpdateManyWithWhereWithoutClassViewInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type ClsUpdateOneRequiredWithoutClassViewNestedInput = {
    create?: XOR<ClsCreateWithoutClassViewInput, ClsUncheckedCreateWithoutClassViewInput>
    connectOrCreate?: ClsCreateOrConnectWithoutClassViewInput
    upsert?: ClsUpsertWithoutClassViewInput
    connect?: ClsWhereUniqueInput
    update?: XOR<XOR<ClsUpdateToOneWithWhereWithoutClassViewInput, ClsUpdateWithoutClassViewInput>, ClsUncheckedUpdateWithoutClassViewInput>
  }

  export type SeatUncheckedUpdateManyWithoutClassViewNestedInput = {
    create?: XOR<SeatCreateWithoutClassViewInput, SeatUncheckedCreateWithoutClassViewInput> | SeatCreateWithoutClassViewInput[] | SeatUncheckedCreateWithoutClassViewInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutClassViewInput | SeatCreateOrConnectWithoutClassViewInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutClassViewInput | SeatUpsertWithWhereUniqueWithoutClassViewInput[]
    createMany?: SeatCreateManyClassViewInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutClassViewInput | SeatUpdateWithWhereUniqueWithoutClassViewInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutClassViewInput | SeatUpdateManyWithWhereWithoutClassViewInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type ClassViewCreateNestedOneWithoutSeatInput = {
    create?: XOR<ClassViewCreateWithoutSeatInput, ClassViewUncheckedCreateWithoutSeatInput>
    connectOrCreate?: ClassViewCreateOrConnectWithoutSeatInput
    connect?: ClassViewWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClassViewUpdateOneRequiredWithoutSeatNestedInput = {
    create?: XOR<ClassViewCreateWithoutSeatInput, ClassViewUncheckedCreateWithoutSeatInput>
    connectOrCreate?: ClassViewCreateOrConnectWithoutSeatInput
    upsert?: ClassViewUpsertWithoutSeatInput
    connect?: ClassViewWhereUniqueInput
    update?: XOR<XOR<ClassViewUpdateToOneWithWhereWithoutSeatInput, ClassViewUpdateWithoutSeatInput>, ClassViewUncheckedUpdateWithoutSeatInput>
  }

  export type DeskCreateNestedManyWithoutLayoutInput = {
    create?: XOR<DeskCreateWithoutLayoutInput, DeskUncheckedCreateWithoutLayoutInput> | DeskCreateWithoutLayoutInput[] | DeskUncheckedCreateWithoutLayoutInput[]
    connectOrCreate?: DeskCreateOrConnectWithoutLayoutInput | DeskCreateOrConnectWithoutLayoutInput[]
    createMany?: DeskCreateManyLayoutInputEnvelope
    connect?: DeskWhereUniqueInput | DeskWhereUniqueInput[]
  }

  export type SeatingPlanCreateNestedManyWithoutLayoutInput = {
    create?: XOR<SeatingPlanCreateWithoutLayoutInput, SeatingPlanUncheckedCreateWithoutLayoutInput> | SeatingPlanCreateWithoutLayoutInput[] | SeatingPlanUncheckedCreateWithoutLayoutInput[]
    connectOrCreate?: SeatingPlanCreateOrConnectWithoutLayoutInput | SeatingPlanCreateOrConnectWithoutLayoutInput[]
    createMany?: SeatingPlanCreateManyLayoutInputEnvelope
    connect?: SeatingPlanWhereUniqueInput | SeatingPlanWhereUniqueInput[]
  }

  export type ClsCreateNestedManyWithoutLayoutsInput = {
    create?: XOR<ClsCreateWithoutLayoutsInput, ClsUncheckedCreateWithoutLayoutsInput> | ClsCreateWithoutLayoutsInput[] | ClsUncheckedCreateWithoutLayoutsInput[]
    connectOrCreate?: ClsCreateOrConnectWithoutLayoutsInput | ClsCreateOrConnectWithoutLayoutsInput[]
    connect?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
  }

  export type DeskUncheckedCreateNestedManyWithoutLayoutInput = {
    create?: XOR<DeskCreateWithoutLayoutInput, DeskUncheckedCreateWithoutLayoutInput> | DeskCreateWithoutLayoutInput[] | DeskUncheckedCreateWithoutLayoutInput[]
    connectOrCreate?: DeskCreateOrConnectWithoutLayoutInput | DeskCreateOrConnectWithoutLayoutInput[]
    createMany?: DeskCreateManyLayoutInputEnvelope
    connect?: DeskWhereUniqueInput | DeskWhereUniqueInput[]
  }

  export type SeatingPlanUncheckedCreateNestedManyWithoutLayoutInput = {
    create?: XOR<SeatingPlanCreateWithoutLayoutInput, SeatingPlanUncheckedCreateWithoutLayoutInput> | SeatingPlanCreateWithoutLayoutInput[] | SeatingPlanUncheckedCreateWithoutLayoutInput[]
    connectOrCreate?: SeatingPlanCreateOrConnectWithoutLayoutInput | SeatingPlanCreateOrConnectWithoutLayoutInput[]
    createMany?: SeatingPlanCreateManyLayoutInputEnvelope
    connect?: SeatingPlanWhereUniqueInput | SeatingPlanWhereUniqueInput[]
  }

  export type ClsUncheckedCreateNestedManyWithoutLayoutsInput = {
    create?: XOR<ClsCreateWithoutLayoutsInput, ClsUncheckedCreateWithoutLayoutsInput> | ClsCreateWithoutLayoutsInput[] | ClsUncheckedCreateWithoutLayoutsInput[]
    connectOrCreate?: ClsCreateOrConnectWithoutLayoutsInput | ClsCreateOrConnectWithoutLayoutsInput[]
    connect?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
  }

  export type DeskUpdateManyWithoutLayoutNestedInput = {
    create?: XOR<DeskCreateWithoutLayoutInput, DeskUncheckedCreateWithoutLayoutInput> | DeskCreateWithoutLayoutInput[] | DeskUncheckedCreateWithoutLayoutInput[]
    connectOrCreate?: DeskCreateOrConnectWithoutLayoutInput | DeskCreateOrConnectWithoutLayoutInput[]
    upsert?: DeskUpsertWithWhereUniqueWithoutLayoutInput | DeskUpsertWithWhereUniqueWithoutLayoutInput[]
    createMany?: DeskCreateManyLayoutInputEnvelope
    set?: DeskWhereUniqueInput | DeskWhereUniqueInput[]
    disconnect?: DeskWhereUniqueInput | DeskWhereUniqueInput[]
    delete?: DeskWhereUniqueInput | DeskWhereUniqueInput[]
    connect?: DeskWhereUniqueInput | DeskWhereUniqueInput[]
    update?: DeskUpdateWithWhereUniqueWithoutLayoutInput | DeskUpdateWithWhereUniqueWithoutLayoutInput[]
    updateMany?: DeskUpdateManyWithWhereWithoutLayoutInput | DeskUpdateManyWithWhereWithoutLayoutInput[]
    deleteMany?: DeskScalarWhereInput | DeskScalarWhereInput[]
  }

  export type SeatingPlanUpdateManyWithoutLayoutNestedInput = {
    create?: XOR<SeatingPlanCreateWithoutLayoutInput, SeatingPlanUncheckedCreateWithoutLayoutInput> | SeatingPlanCreateWithoutLayoutInput[] | SeatingPlanUncheckedCreateWithoutLayoutInput[]
    connectOrCreate?: SeatingPlanCreateOrConnectWithoutLayoutInput | SeatingPlanCreateOrConnectWithoutLayoutInput[]
    upsert?: SeatingPlanUpsertWithWhereUniqueWithoutLayoutInput | SeatingPlanUpsertWithWhereUniqueWithoutLayoutInput[]
    createMany?: SeatingPlanCreateManyLayoutInputEnvelope
    set?: SeatingPlanWhereUniqueInput | SeatingPlanWhereUniqueInput[]
    disconnect?: SeatingPlanWhereUniqueInput | SeatingPlanWhereUniqueInput[]
    delete?: SeatingPlanWhereUniqueInput | SeatingPlanWhereUniqueInput[]
    connect?: SeatingPlanWhereUniqueInput | SeatingPlanWhereUniqueInput[]
    update?: SeatingPlanUpdateWithWhereUniqueWithoutLayoutInput | SeatingPlanUpdateWithWhereUniqueWithoutLayoutInput[]
    updateMany?: SeatingPlanUpdateManyWithWhereWithoutLayoutInput | SeatingPlanUpdateManyWithWhereWithoutLayoutInput[]
    deleteMany?: SeatingPlanScalarWhereInput | SeatingPlanScalarWhereInput[]
  }

  export type ClsUpdateManyWithoutLayoutsNestedInput = {
    create?: XOR<ClsCreateWithoutLayoutsInput, ClsUncheckedCreateWithoutLayoutsInput> | ClsCreateWithoutLayoutsInput[] | ClsUncheckedCreateWithoutLayoutsInput[]
    connectOrCreate?: ClsCreateOrConnectWithoutLayoutsInput | ClsCreateOrConnectWithoutLayoutsInput[]
    upsert?: ClsUpsertWithWhereUniqueWithoutLayoutsInput | ClsUpsertWithWhereUniqueWithoutLayoutsInput[]
    set?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
    disconnect?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
    delete?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
    connect?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
    update?: ClsUpdateWithWhereUniqueWithoutLayoutsInput | ClsUpdateWithWhereUniqueWithoutLayoutsInput[]
    updateMany?: ClsUpdateManyWithWhereWithoutLayoutsInput | ClsUpdateManyWithWhereWithoutLayoutsInput[]
    deleteMany?: ClsScalarWhereInput | ClsScalarWhereInput[]
  }

  export type DeskUncheckedUpdateManyWithoutLayoutNestedInput = {
    create?: XOR<DeskCreateWithoutLayoutInput, DeskUncheckedCreateWithoutLayoutInput> | DeskCreateWithoutLayoutInput[] | DeskUncheckedCreateWithoutLayoutInput[]
    connectOrCreate?: DeskCreateOrConnectWithoutLayoutInput | DeskCreateOrConnectWithoutLayoutInput[]
    upsert?: DeskUpsertWithWhereUniqueWithoutLayoutInput | DeskUpsertWithWhereUniqueWithoutLayoutInput[]
    createMany?: DeskCreateManyLayoutInputEnvelope
    set?: DeskWhereUniqueInput | DeskWhereUniqueInput[]
    disconnect?: DeskWhereUniqueInput | DeskWhereUniqueInput[]
    delete?: DeskWhereUniqueInput | DeskWhereUniqueInput[]
    connect?: DeskWhereUniqueInput | DeskWhereUniqueInput[]
    update?: DeskUpdateWithWhereUniqueWithoutLayoutInput | DeskUpdateWithWhereUniqueWithoutLayoutInput[]
    updateMany?: DeskUpdateManyWithWhereWithoutLayoutInput | DeskUpdateManyWithWhereWithoutLayoutInput[]
    deleteMany?: DeskScalarWhereInput | DeskScalarWhereInput[]
  }

  export type SeatingPlanUncheckedUpdateManyWithoutLayoutNestedInput = {
    create?: XOR<SeatingPlanCreateWithoutLayoutInput, SeatingPlanUncheckedCreateWithoutLayoutInput> | SeatingPlanCreateWithoutLayoutInput[] | SeatingPlanUncheckedCreateWithoutLayoutInput[]
    connectOrCreate?: SeatingPlanCreateOrConnectWithoutLayoutInput | SeatingPlanCreateOrConnectWithoutLayoutInput[]
    upsert?: SeatingPlanUpsertWithWhereUniqueWithoutLayoutInput | SeatingPlanUpsertWithWhereUniqueWithoutLayoutInput[]
    createMany?: SeatingPlanCreateManyLayoutInputEnvelope
    set?: SeatingPlanWhereUniqueInput | SeatingPlanWhereUniqueInput[]
    disconnect?: SeatingPlanWhereUniqueInput | SeatingPlanWhereUniqueInput[]
    delete?: SeatingPlanWhereUniqueInput | SeatingPlanWhereUniqueInput[]
    connect?: SeatingPlanWhereUniqueInput | SeatingPlanWhereUniqueInput[]
    update?: SeatingPlanUpdateWithWhereUniqueWithoutLayoutInput | SeatingPlanUpdateWithWhereUniqueWithoutLayoutInput[]
    updateMany?: SeatingPlanUpdateManyWithWhereWithoutLayoutInput | SeatingPlanUpdateManyWithWhereWithoutLayoutInput[]
    deleteMany?: SeatingPlanScalarWhereInput | SeatingPlanScalarWhereInput[]
  }

  export type ClsUncheckedUpdateManyWithoutLayoutsNestedInput = {
    create?: XOR<ClsCreateWithoutLayoutsInput, ClsUncheckedCreateWithoutLayoutsInput> | ClsCreateWithoutLayoutsInput[] | ClsUncheckedCreateWithoutLayoutsInput[]
    connectOrCreate?: ClsCreateOrConnectWithoutLayoutsInput | ClsCreateOrConnectWithoutLayoutsInput[]
    upsert?: ClsUpsertWithWhereUniqueWithoutLayoutsInput | ClsUpsertWithWhereUniqueWithoutLayoutsInput[]
    set?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
    disconnect?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
    delete?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
    connect?: ClsWhereUniqueInput | ClsWhereUniqueInput[]
    update?: ClsUpdateWithWhereUniqueWithoutLayoutsInput | ClsUpdateWithWhereUniqueWithoutLayoutsInput[]
    updateMany?: ClsUpdateManyWithWhereWithoutLayoutsInput | ClsUpdateManyWithWhereWithoutLayoutsInput[]
    deleteMany?: ClsScalarWhereInput | ClsScalarWhereInput[]
  }

  export type LayoutCreateNestedOneWithoutDesksInput = {
    create?: XOR<LayoutCreateWithoutDesksInput, LayoutUncheckedCreateWithoutDesksInput>
    connectOrCreate?: LayoutCreateOrConnectWithoutDesksInput
    connect?: LayoutWhereUniqueInput
  }

  export type SeatingArrangementCreateNestedManyWithoutDeskInput = {
    create?: XOR<SeatingArrangementCreateWithoutDeskInput, SeatingArrangementUncheckedCreateWithoutDeskInput> | SeatingArrangementCreateWithoutDeskInput[] | SeatingArrangementUncheckedCreateWithoutDeskInput[]
    connectOrCreate?: SeatingArrangementCreateOrConnectWithoutDeskInput | SeatingArrangementCreateOrConnectWithoutDeskInput[]
    createMany?: SeatingArrangementCreateManyDeskInputEnvelope
    connect?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
  }

  export type SeatingArrangementUncheckedCreateNestedManyWithoutDeskInput = {
    create?: XOR<SeatingArrangementCreateWithoutDeskInput, SeatingArrangementUncheckedCreateWithoutDeskInput> | SeatingArrangementCreateWithoutDeskInput[] | SeatingArrangementUncheckedCreateWithoutDeskInput[]
    connectOrCreate?: SeatingArrangementCreateOrConnectWithoutDeskInput | SeatingArrangementCreateOrConnectWithoutDeskInput[]
    createMany?: SeatingArrangementCreateManyDeskInputEnvelope
    connect?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
  }

  export type LayoutUpdateOneRequiredWithoutDesksNestedInput = {
    create?: XOR<LayoutCreateWithoutDesksInput, LayoutUncheckedCreateWithoutDesksInput>
    connectOrCreate?: LayoutCreateOrConnectWithoutDesksInput
    upsert?: LayoutUpsertWithoutDesksInput
    connect?: LayoutWhereUniqueInput
    update?: XOR<XOR<LayoutUpdateToOneWithWhereWithoutDesksInput, LayoutUpdateWithoutDesksInput>, LayoutUncheckedUpdateWithoutDesksInput>
  }

  export type SeatingArrangementUpdateManyWithoutDeskNestedInput = {
    create?: XOR<SeatingArrangementCreateWithoutDeskInput, SeatingArrangementUncheckedCreateWithoutDeskInput> | SeatingArrangementCreateWithoutDeskInput[] | SeatingArrangementUncheckedCreateWithoutDeskInput[]
    connectOrCreate?: SeatingArrangementCreateOrConnectWithoutDeskInput | SeatingArrangementCreateOrConnectWithoutDeskInput[]
    upsert?: SeatingArrangementUpsertWithWhereUniqueWithoutDeskInput | SeatingArrangementUpsertWithWhereUniqueWithoutDeskInput[]
    createMany?: SeatingArrangementCreateManyDeskInputEnvelope
    set?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    disconnect?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    delete?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    connect?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    update?: SeatingArrangementUpdateWithWhereUniqueWithoutDeskInput | SeatingArrangementUpdateWithWhereUniqueWithoutDeskInput[]
    updateMany?: SeatingArrangementUpdateManyWithWhereWithoutDeskInput | SeatingArrangementUpdateManyWithWhereWithoutDeskInput[]
    deleteMany?: SeatingArrangementScalarWhereInput | SeatingArrangementScalarWhereInput[]
  }

  export type SeatingArrangementUncheckedUpdateManyWithoutDeskNestedInput = {
    create?: XOR<SeatingArrangementCreateWithoutDeskInput, SeatingArrangementUncheckedCreateWithoutDeskInput> | SeatingArrangementCreateWithoutDeskInput[] | SeatingArrangementUncheckedCreateWithoutDeskInput[]
    connectOrCreate?: SeatingArrangementCreateOrConnectWithoutDeskInput | SeatingArrangementCreateOrConnectWithoutDeskInput[]
    upsert?: SeatingArrangementUpsertWithWhereUniqueWithoutDeskInput | SeatingArrangementUpsertWithWhereUniqueWithoutDeskInput[]
    createMany?: SeatingArrangementCreateManyDeskInputEnvelope
    set?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    disconnect?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    delete?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    connect?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    update?: SeatingArrangementUpdateWithWhereUniqueWithoutDeskInput | SeatingArrangementUpdateWithWhereUniqueWithoutDeskInput[]
    updateMany?: SeatingArrangementUpdateManyWithWhereWithoutDeskInput | SeatingArrangementUpdateManyWithWhereWithoutDeskInput[]
    deleteMany?: SeatingArrangementScalarWhereInput | SeatingArrangementScalarWhereInput[]
  }

  export type LayoutCreateNestedOneWithoutSeatingPlansInput = {
    create?: XOR<LayoutCreateWithoutSeatingPlansInput, LayoutUncheckedCreateWithoutSeatingPlansInput>
    connectOrCreate?: LayoutCreateOrConnectWithoutSeatingPlansInput
    connect?: LayoutWhereUniqueInput
  }

  export type SeatingArrangementCreateNestedManyWithoutSeatingPlanInput = {
    create?: XOR<SeatingArrangementCreateWithoutSeatingPlanInput, SeatingArrangementUncheckedCreateWithoutSeatingPlanInput> | SeatingArrangementCreateWithoutSeatingPlanInput[] | SeatingArrangementUncheckedCreateWithoutSeatingPlanInput[]
    connectOrCreate?: SeatingArrangementCreateOrConnectWithoutSeatingPlanInput | SeatingArrangementCreateOrConnectWithoutSeatingPlanInput[]
    createMany?: SeatingArrangementCreateManySeatingPlanInputEnvelope
    connect?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
  }

  export type SeatingArrangementUncheckedCreateNestedManyWithoutSeatingPlanInput = {
    create?: XOR<SeatingArrangementCreateWithoutSeatingPlanInput, SeatingArrangementUncheckedCreateWithoutSeatingPlanInput> | SeatingArrangementCreateWithoutSeatingPlanInput[] | SeatingArrangementUncheckedCreateWithoutSeatingPlanInput[]
    connectOrCreate?: SeatingArrangementCreateOrConnectWithoutSeatingPlanInput | SeatingArrangementCreateOrConnectWithoutSeatingPlanInput[]
    createMany?: SeatingArrangementCreateManySeatingPlanInputEnvelope
    connect?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
  }

  export type LayoutUpdateOneRequiredWithoutSeatingPlansNestedInput = {
    create?: XOR<LayoutCreateWithoutSeatingPlansInput, LayoutUncheckedCreateWithoutSeatingPlansInput>
    connectOrCreate?: LayoutCreateOrConnectWithoutSeatingPlansInput
    upsert?: LayoutUpsertWithoutSeatingPlansInput
    connect?: LayoutWhereUniqueInput
    update?: XOR<XOR<LayoutUpdateToOneWithWhereWithoutSeatingPlansInput, LayoutUpdateWithoutSeatingPlansInput>, LayoutUncheckedUpdateWithoutSeatingPlansInput>
  }

  export type SeatingArrangementUpdateManyWithoutSeatingPlanNestedInput = {
    create?: XOR<SeatingArrangementCreateWithoutSeatingPlanInput, SeatingArrangementUncheckedCreateWithoutSeatingPlanInput> | SeatingArrangementCreateWithoutSeatingPlanInput[] | SeatingArrangementUncheckedCreateWithoutSeatingPlanInput[]
    connectOrCreate?: SeatingArrangementCreateOrConnectWithoutSeatingPlanInput | SeatingArrangementCreateOrConnectWithoutSeatingPlanInput[]
    upsert?: SeatingArrangementUpsertWithWhereUniqueWithoutSeatingPlanInput | SeatingArrangementUpsertWithWhereUniqueWithoutSeatingPlanInput[]
    createMany?: SeatingArrangementCreateManySeatingPlanInputEnvelope
    set?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    disconnect?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    delete?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    connect?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    update?: SeatingArrangementUpdateWithWhereUniqueWithoutSeatingPlanInput | SeatingArrangementUpdateWithWhereUniqueWithoutSeatingPlanInput[]
    updateMany?: SeatingArrangementUpdateManyWithWhereWithoutSeatingPlanInput | SeatingArrangementUpdateManyWithWhereWithoutSeatingPlanInput[]
    deleteMany?: SeatingArrangementScalarWhereInput | SeatingArrangementScalarWhereInput[]
  }

  export type SeatingArrangementUncheckedUpdateManyWithoutSeatingPlanNestedInput = {
    create?: XOR<SeatingArrangementCreateWithoutSeatingPlanInput, SeatingArrangementUncheckedCreateWithoutSeatingPlanInput> | SeatingArrangementCreateWithoutSeatingPlanInput[] | SeatingArrangementUncheckedCreateWithoutSeatingPlanInput[]
    connectOrCreate?: SeatingArrangementCreateOrConnectWithoutSeatingPlanInput | SeatingArrangementCreateOrConnectWithoutSeatingPlanInput[]
    upsert?: SeatingArrangementUpsertWithWhereUniqueWithoutSeatingPlanInput | SeatingArrangementUpsertWithWhereUniqueWithoutSeatingPlanInput[]
    createMany?: SeatingArrangementCreateManySeatingPlanInputEnvelope
    set?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    disconnect?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    delete?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    connect?: SeatingArrangementWhereUniqueInput | SeatingArrangementWhereUniqueInput[]
    update?: SeatingArrangementUpdateWithWhereUniqueWithoutSeatingPlanInput | SeatingArrangementUpdateWithWhereUniqueWithoutSeatingPlanInput[]
    updateMany?: SeatingArrangementUpdateManyWithWhereWithoutSeatingPlanInput | SeatingArrangementUpdateManyWithWhereWithoutSeatingPlanInput[]
    deleteMany?: SeatingArrangementScalarWhereInput | SeatingArrangementScalarWhereInput[]
  }

  export type SeatingPlanCreateNestedOneWithoutSeatingArrangementInput = {
    create?: XOR<SeatingPlanCreateWithoutSeatingArrangementInput, SeatingPlanUncheckedCreateWithoutSeatingArrangementInput>
    connectOrCreate?: SeatingPlanCreateOrConnectWithoutSeatingArrangementInput
    connect?: SeatingPlanWhereUniqueInput
  }

  export type DeskCreateNestedOneWithoutSeatingArrangementInput = {
    create?: XOR<DeskCreateWithoutSeatingArrangementInput, DeskUncheckedCreateWithoutSeatingArrangementInput>
    connectOrCreate?: DeskCreateOrConnectWithoutSeatingArrangementInput
    connect?: DeskWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutSeatingArrangementInput = {
    create?: XOR<StudentCreateWithoutSeatingArrangementInput, StudentUncheckedCreateWithoutSeatingArrangementInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSeatingArrangementInput
    connect?: StudentWhereUniqueInput
  }

  export type SeatingPlanUpdateOneRequiredWithoutSeatingArrangementNestedInput = {
    create?: XOR<SeatingPlanCreateWithoutSeatingArrangementInput, SeatingPlanUncheckedCreateWithoutSeatingArrangementInput>
    connectOrCreate?: SeatingPlanCreateOrConnectWithoutSeatingArrangementInput
    upsert?: SeatingPlanUpsertWithoutSeatingArrangementInput
    connect?: SeatingPlanWhereUniqueInput
    update?: XOR<XOR<SeatingPlanUpdateToOneWithWhereWithoutSeatingArrangementInput, SeatingPlanUpdateWithoutSeatingArrangementInput>, SeatingPlanUncheckedUpdateWithoutSeatingArrangementInput>
  }

  export type DeskUpdateOneRequiredWithoutSeatingArrangementNestedInput = {
    create?: XOR<DeskCreateWithoutSeatingArrangementInput, DeskUncheckedCreateWithoutSeatingArrangementInput>
    connectOrCreate?: DeskCreateOrConnectWithoutSeatingArrangementInput
    upsert?: DeskUpsertWithoutSeatingArrangementInput
    connect?: DeskWhereUniqueInput
    update?: XOR<XOR<DeskUpdateToOneWithWhereWithoutSeatingArrangementInput, DeskUpdateWithoutSeatingArrangementInput>, DeskUncheckedUpdateWithoutSeatingArrangementInput>
  }

  export type StudentUpdateOneRequiredWithoutSeatingArrangementNestedInput = {
    create?: XOR<StudentCreateWithoutSeatingArrangementInput, StudentUncheckedCreateWithoutSeatingArrangementInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSeatingArrangementInput
    upsert?: StudentUpsertWithoutSeatingArrangementInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSeatingArrangementInput, StudentUpdateWithoutSeatingArrangementInput>, StudentUncheckedUpdateWithoutSeatingArrangementInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type StudentCreateWithoutUserInput = {
    Attendance?: AttendanceCreateNestedManyWithoutStudentInput
    cls: ClsCreateNestedOneWithoutStudentsInput
    SeatingArrangement?: SeatingArrangementCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: number
    classId: number
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    SeatingArrangement?: SeatingArrangementUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type TeacherCreateWithoutUserInput = {
    classes?: ClsCreateNestedManyWithoutTeacherInput
    Register?: RegisterCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutUserInput = {
    id?: number
    classes?: ClsUncheckedCreateNestedManyWithoutTeacherInput
    Register?: RegisterUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutUserInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
  }

  export type RoleCreateWithoutUserInput = {
    name?: string
  }

  export type RoleUncheckedCreateWithoutUserInput = {
    id?: number
    name?: string
  }

  export type RoleCreateOrConnectWithoutUserInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
  }

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    Attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    cls?: ClsUpdateOneRequiredWithoutStudentsNestedInput
    SeatingArrangement?: SeatingArrangementUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    Attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    SeatingArrangement?: SeatingArrangementUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type TeacherUpsertWithoutUserInput = {
    update: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutUserInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUpdateWithoutUserInput = {
    classes?: ClsUpdateManyWithoutTeacherNestedInput
    Register?: RegisterUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    classes?: ClsUncheckedUpdateManyWithoutTeacherNestedInput
    Register?: RegisterUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type RoleUpsertWithoutUserInput = {
    update: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
  }

  export type RoleUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutRoleInput = {
    username: string
    email: string
    password: string
    Student?: StudentCreateNestedOneWithoutUserInput
    Teacher?: TeacherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    username: string
    email: string
    password: string
    Student?: StudentUncheckedCreateNestedOneWithoutUserInput
    Teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
  }

  export type ClsCreateWithoutTeacherInput = {
    name: string
    register?: RegisterCreateNestedManyWithoutClsInput
    students?: StudentCreateNestedManyWithoutClsInput
    timetable?: TimetableCreateNestedManyWithoutClsInput
    ClassView?: ClassViewCreateNestedManyWithoutClsInput
    layouts?: LayoutCreateNestedManyWithoutClassesInput
  }

  export type ClsUncheckedCreateWithoutTeacherInput = {
    id?: number
    name: string
    register?: RegisterUncheckedCreateNestedManyWithoutClsInput
    students?: StudentUncheckedCreateNestedManyWithoutClsInput
    timetable?: TimetableUncheckedCreateNestedManyWithoutClsInput
    ClassView?: ClassViewUncheckedCreateNestedManyWithoutClsInput
    layouts?: LayoutUncheckedCreateNestedManyWithoutClassesInput
  }

  export type ClsCreateOrConnectWithoutTeacherInput = {
    where: ClsWhereUniqueInput
    create: XOR<ClsCreateWithoutTeacherInput, ClsUncheckedCreateWithoutTeacherInput>
  }

  export type ClsCreateManyTeacherInputEnvelope = {
    data: ClsCreateManyTeacherInput | ClsCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type RegisterCreateWithoutTeacherInput = {
    date: Date | string
    status?: string
    Attendance?: AttendanceCreateNestedManyWithoutRegisterInput
    cls: ClsCreateNestedOneWithoutRegisterInput
  }

  export type RegisterUncheckedCreateWithoutTeacherInput = {
    id?: number
    classId: number
    date: Date | string
    status?: string
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutRegisterInput
  }

  export type RegisterCreateOrConnectWithoutTeacherInput = {
    where: RegisterWhereUniqueInput
    create: XOR<RegisterCreateWithoutTeacherInput, RegisterUncheckedCreateWithoutTeacherInput>
  }

  export type RegisterCreateManyTeacherInputEnvelope = {
    data: RegisterCreateManyTeacherInput | RegisterCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTeacherInput = {
    username: string
    email: string
    password: string
    Student?: StudentCreateNestedOneWithoutUserInput
    role: RoleCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeacherInput = {
    id?: number
    username: string
    email: string
    password: string
    roleId: number
    Student?: StudentUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeacherInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
  }

  export type ClsUpsertWithWhereUniqueWithoutTeacherInput = {
    where: ClsWhereUniqueInput
    update: XOR<ClsUpdateWithoutTeacherInput, ClsUncheckedUpdateWithoutTeacherInput>
    create: XOR<ClsCreateWithoutTeacherInput, ClsUncheckedCreateWithoutTeacherInput>
  }

  export type ClsUpdateWithWhereUniqueWithoutTeacherInput = {
    where: ClsWhereUniqueInput
    data: XOR<ClsUpdateWithoutTeacherInput, ClsUncheckedUpdateWithoutTeacherInput>
  }

  export type ClsUpdateManyWithWhereWithoutTeacherInput = {
    where: ClsScalarWhereInput
    data: XOR<ClsUpdateManyMutationInput, ClsUncheckedUpdateManyWithoutTeacherInput>
  }

  export type ClsScalarWhereInput = {
    AND?: ClsScalarWhereInput | ClsScalarWhereInput[]
    OR?: ClsScalarWhereInput[]
    NOT?: ClsScalarWhereInput | ClsScalarWhereInput[]
    id?: IntFilter<"Cls"> | number
    name?: StringFilter<"Cls"> | string
    teacherId?: IntNullableFilter<"Cls"> | number | null
  }

  export type RegisterUpsertWithWhereUniqueWithoutTeacherInput = {
    where: RegisterWhereUniqueInput
    update: XOR<RegisterUpdateWithoutTeacherInput, RegisterUncheckedUpdateWithoutTeacherInput>
    create: XOR<RegisterCreateWithoutTeacherInput, RegisterUncheckedCreateWithoutTeacherInput>
  }

  export type RegisterUpdateWithWhereUniqueWithoutTeacherInput = {
    where: RegisterWhereUniqueInput
    data: XOR<RegisterUpdateWithoutTeacherInput, RegisterUncheckedUpdateWithoutTeacherInput>
  }

  export type RegisterUpdateManyWithWhereWithoutTeacherInput = {
    where: RegisterScalarWhereInput
    data: XOR<RegisterUpdateManyMutationInput, RegisterUncheckedUpdateManyWithoutTeacherInput>
  }

  export type RegisterScalarWhereInput = {
    AND?: RegisterScalarWhereInput | RegisterScalarWhereInput[]
    OR?: RegisterScalarWhereInput[]
    NOT?: RegisterScalarWhereInput | RegisterScalarWhereInput[]
    id?: IntFilter<"Register"> | number
    classId?: IntFilter<"Register"> | number
    teacherId?: IntFilter<"Register"> | number
    date?: DateTimeFilter<"Register"> | Date | string
    status?: StringFilter<"Register"> | string
  }

  export type UserUpsertWithoutTeacherInput = {
    update: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
    create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
  }

  export type UserUpdateWithoutTeacherInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Student?: StudentUpdateOneWithoutUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    Student?: StudentUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AttendanceCreateWithoutStudentInput = {
    status: string
    comment?: string | null
    lateMinutes?: number | null
    date?: Date | string
    register: RegisterCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutStudentInput = {
    id?: number
    registerId: number
    status: string
    comment?: string | null
    lateMinutes?: number | null
    date?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceCreateManyStudentInputEnvelope = {
    data: AttendanceCreateManyStudentInput | AttendanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ClsCreateWithoutStudentsInput = {
    name: string
    teacher?: TeacherCreateNestedOneWithoutClassesInput
    register?: RegisterCreateNestedManyWithoutClsInput
    timetable?: TimetableCreateNestedManyWithoutClsInput
    ClassView?: ClassViewCreateNestedManyWithoutClsInput
    layouts?: LayoutCreateNestedManyWithoutClassesInput
  }

  export type ClsUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    teacherId?: number | null
    register?: RegisterUncheckedCreateNestedManyWithoutClsInput
    timetable?: TimetableUncheckedCreateNestedManyWithoutClsInput
    ClassView?: ClassViewUncheckedCreateNestedManyWithoutClsInput
    layouts?: LayoutUncheckedCreateNestedManyWithoutClassesInput
  }

  export type ClsCreateOrConnectWithoutStudentsInput = {
    where: ClsWhereUniqueInput
    create: XOR<ClsCreateWithoutStudentsInput, ClsUncheckedCreateWithoutStudentsInput>
  }

  export type UserCreateWithoutStudentInput = {
    username: string
    email: string
    password: string
    Teacher?: TeacherCreateNestedOneWithoutUserInput
    role: RoleCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: number
    username: string
    email: string
    password: string
    roleId: number
    Teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type SeatingArrangementCreateWithoutStudentInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    seatingPlan: SeatingPlanCreateNestedOneWithoutSeatingArrangementInput
    desk: DeskCreateNestedOneWithoutSeatingArrangementInput
  }

  export type SeatingArrangementUncheckedCreateWithoutStudentInput = {
    id?: number
    seatingPlanId: number
    deskId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeatingArrangementCreateOrConnectWithoutStudentInput = {
    where: SeatingArrangementWhereUniqueInput
    create: XOR<SeatingArrangementCreateWithoutStudentInput, SeatingArrangementUncheckedCreateWithoutStudentInput>
  }

  export type SeatingArrangementCreateManyStudentInputEnvelope = {
    data: SeatingArrangementCreateManyStudentInput | SeatingArrangementCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: IntFilter<"Attendance"> | number
    studentId?: IntFilter<"Attendance"> | number
    registerId?: IntFilter<"Attendance"> | number
    status?: StringFilter<"Attendance"> | string
    comment?: StringNullableFilter<"Attendance"> | string | null
    lateMinutes?: IntNullableFilter<"Attendance"> | number | null
    date?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type ClsUpsertWithoutStudentsInput = {
    update: XOR<ClsUpdateWithoutStudentsInput, ClsUncheckedUpdateWithoutStudentsInput>
    create: XOR<ClsCreateWithoutStudentsInput, ClsUncheckedCreateWithoutStudentsInput>
    where?: ClsWhereInput
  }

  export type ClsUpdateToOneWithWhereWithoutStudentsInput = {
    where?: ClsWhereInput
    data: XOR<ClsUpdateWithoutStudentsInput, ClsUncheckedUpdateWithoutStudentsInput>
  }

  export type ClsUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUpdateOneWithoutClassesNestedInput
    register?: RegisterUpdateManyWithoutClsNestedInput
    timetable?: TimetableUpdateManyWithoutClsNestedInput
    ClassView?: ClassViewUpdateManyWithoutClsNestedInput
    layouts?: LayoutUpdateManyWithoutClassesNestedInput
  }

  export type ClsUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    register?: RegisterUncheckedUpdateManyWithoutClsNestedInput
    timetable?: TimetableUncheckedUpdateManyWithoutClsNestedInput
    ClassView?: ClassViewUncheckedUpdateManyWithoutClsNestedInput
    layouts?: LayoutUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Teacher?: TeacherUpdateOneWithoutUserNestedInput
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    Teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SeatingArrangementUpsertWithWhereUniqueWithoutStudentInput = {
    where: SeatingArrangementWhereUniqueInput
    update: XOR<SeatingArrangementUpdateWithoutStudentInput, SeatingArrangementUncheckedUpdateWithoutStudentInput>
    create: XOR<SeatingArrangementCreateWithoutStudentInput, SeatingArrangementUncheckedCreateWithoutStudentInput>
  }

  export type SeatingArrangementUpdateWithWhereUniqueWithoutStudentInput = {
    where: SeatingArrangementWhereUniqueInput
    data: XOR<SeatingArrangementUpdateWithoutStudentInput, SeatingArrangementUncheckedUpdateWithoutStudentInput>
  }

  export type SeatingArrangementUpdateManyWithWhereWithoutStudentInput = {
    where: SeatingArrangementScalarWhereInput
    data: XOR<SeatingArrangementUpdateManyMutationInput, SeatingArrangementUncheckedUpdateManyWithoutStudentInput>
  }

  export type SeatingArrangementScalarWhereInput = {
    AND?: SeatingArrangementScalarWhereInput | SeatingArrangementScalarWhereInput[]
    OR?: SeatingArrangementScalarWhereInput[]
    NOT?: SeatingArrangementScalarWhereInput | SeatingArrangementScalarWhereInput[]
    id?: IntFilter<"SeatingArrangement"> | number
    seatingPlanId?: IntFilter<"SeatingArrangement"> | number
    deskId?: IntFilter<"SeatingArrangement"> | number
    studentId?: IntFilter<"SeatingArrangement"> | number
    createdAt?: DateTimeFilter<"SeatingArrangement"> | Date | string
    updatedAt?: DateTimeFilter<"SeatingArrangement"> | Date | string
  }

  export type TeacherCreateWithoutClassesInput = {
    Register?: RegisterCreateNestedManyWithoutTeacherInput
    user: UserCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutClassesInput = {
    id?: number
    userId: number
    Register?: RegisterUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutClassesInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutClassesInput, TeacherUncheckedCreateWithoutClassesInput>
  }

  export type RegisterCreateWithoutClsInput = {
    date: Date | string
    status?: string
    Attendance?: AttendanceCreateNestedManyWithoutRegisterInput
    teacher: TeacherCreateNestedOneWithoutRegisterInput
  }

  export type RegisterUncheckedCreateWithoutClsInput = {
    id?: number
    teacherId: number
    date: Date | string
    status?: string
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutRegisterInput
  }

  export type RegisterCreateOrConnectWithoutClsInput = {
    where: RegisterWhereUniqueInput
    create: XOR<RegisterCreateWithoutClsInput, RegisterUncheckedCreateWithoutClsInput>
  }

  export type RegisterCreateManyClsInputEnvelope = {
    data: RegisterCreateManyClsInput | RegisterCreateManyClsInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutClsInput = {
    Attendance?: AttendanceCreateNestedManyWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentInput
    SeatingArrangement?: SeatingArrangementCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutClsInput = {
    id?: number
    userId: number
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    SeatingArrangement?: SeatingArrangementUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutClsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutClsInput, StudentUncheckedCreateWithoutClsInput>
  }

  export type StudentCreateManyClsInputEnvelope = {
    data: StudentCreateManyClsInput | StudentCreateManyClsInput[]
    skipDuplicates?: boolean
  }

  export type TimetableCreateWithoutClsInput = {
    day: string
    startTime: Date | string
    endTime: Date | string
  }

  export type TimetableUncheckedCreateWithoutClsInput = {
    id?: number
    day: string
    startTime: Date | string
    endTime: Date | string
  }

  export type TimetableCreateOrConnectWithoutClsInput = {
    where: TimetableWhereUniqueInput
    create: XOR<TimetableCreateWithoutClsInput, TimetableUncheckedCreateWithoutClsInput>
  }

  export type TimetableCreateManyClsInputEnvelope = {
    data: TimetableCreateManyClsInput | TimetableCreateManyClsInput[]
    skipDuplicates?: boolean
  }

  export type ClassViewCreateWithoutClsInput = {
    seat?: SeatCreateNestedManyWithoutClassViewInput
  }

  export type ClassViewUncheckedCreateWithoutClsInput = {
    id?: number
    seat?: SeatUncheckedCreateNestedManyWithoutClassViewInput
  }

  export type ClassViewCreateOrConnectWithoutClsInput = {
    where: ClassViewWhereUniqueInput
    create: XOR<ClassViewCreateWithoutClsInput, ClassViewUncheckedCreateWithoutClsInput>
  }

  export type ClassViewCreateManyClsInputEnvelope = {
    data: ClassViewCreateManyClsInput | ClassViewCreateManyClsInput[]
    skipDuplicates?: boolean
  }

  export type LayoutCreateWithoutClassesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    desks?: DeskCreateNestedManyWithoutLayoutInput
    seatingPlans?: SeatingPlanCreateNestedManyWithoutLayoutInput
  }

  export type LayoutUncheckedCreateWithoutClassesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    desks?: DeskUncheckedCreateNestedManyWithoutLayoutInput
    seatingPlans?: SeatingPlanUncheckedCreateNestedManyWithoutLayoutInput
  }

  export type LayoutCreateOrConnectWithoutClassesInput = {
    where: LayoutWhereUniqueInput
    create: XOR<LayoutCreateWithoutClassesInput, LayoutUncheckedCreateWithoutClassesInput>
  }

  export type TeacherUpsertWithoutClassesInput = {
    update: XOR<TeacherUpdateWithoutClassesInput, TeacherUncheckedUpdateWithoutClassesInput>
    create: XOR<TeacherCreateWithoutClassesInput, TeacherUncheckedCreateWithoutClassesInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutClassesInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutClassesInput, TeacherUncheckedUpdateWithoutClassesInput>
  }

  export type TeacherUpdateWithoutClassesInput = {
    Register?: RegisterUpdateManyWithoutTeacherNestedInput
    user?: UserUpdateOneRequiredWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutClassesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    Register?: RegisterUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type RegisterUpsertWithWhereUniqueWithoutClsInput = {
    where: RegisterWhereUniqueInput
    update: XOR<RegisterUpdateWithoutClsInput, RegisterUncheckedUpdateWithoutClsInput>
    create: XOR<RegisterCreateWithoutClsInput, RegisterUncheckedCreateWithoutClsInput>
  }

  export type RegisterUpdateWithWhereUniqueWithoutClsInput = {
    where: RegisterWhereUniqueInput
    data: XOR<RegisterUpdateWithoutClsInput, RegisterUncheckedUpdateWithoutClsInput>
  }

  export type RegisterUpdateManyWithWhereWithoutClsInput = {
    where: RegisterScalarWhereInput
    data: XOR<RegisterUpdateManyMutationInput, RegisterUncheckedUpdateManyWithoutClsInput>
  }

  export type StudentUpsertWithWhereUniqueWithoutClsInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutClsInput, StudentUncheckedUpdateWithoutClsInput>
    create: XOR<StudentCreateWithoutClsInput, StudentUncheckedCreateWithoutClsInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutClsInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutClsInput, StudentUncheckedUpdateWithoutClsInput>
  }

  export type StudentUpdateManyWithWhereWithoutClsInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutClsInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: IntFilter<"Student"> | number
    userId?: IntFilter<"Student"> | number
    classId?: IntFilter<"Student"> | number
  }

  export type TimetableUpsertWithWhereUniqueWithoutClsInput = {
    where: TimetableWhereUniqueInput
    update: XOR<TimetableUpdateWithoutClsInput, TimetableUncheckedUpdateWithoutClsInput>
    create: XOR<TimetableCreateWithoutClsInput, TimetableUncheckedCreateWithoutClsInput>
  }

  export type TimetableUpdateWithWhereUniqueWithoutClsInput = {
    where: TimetableWhereUniqueInput
    data: XOR<TimetableUpdateWithoutClsInput, TimetableUncheckedUpdateWithoutClsInput>
  }

  export type TimetableUpdateManyWithWhereWithoutClsInput = {
    where: TimetableScalarWhereInput
    data: XOR<TimetableUpdateManyMutationInput, TimetableUncheckedUpdateManyWithoutClsInput>
  }

  export type TimetableScalarWhereInput = {
    AND?: TimetableScalarWhereInput | TimetableScalarWhereInput[]
    OR?: TimetableScalarWhereInput[]
    NOT?: TimetableScalarWhereInput | TimetableScalarWhereInput[]
    id?: IntFilter<"Timetable"> | number
    classId?: IntFilter<"Timetable"> | number
    day?: StringFilter<"Timetable"> | string
    startTime?: DateTimeFilter<"Timetable"> | Date | string
    endTime?: DateTimeFilter<"Timetable"> | Date | string
  }

  export type ClassViewUpsertWithWhereUniqueWithoutClsInput = {
    where: ClassViewWhereUniqueInput
    update: XOR<ClassViewUpdateWithoutClsInput, ClassViewUncheckedUpdateWithoutClsInput>
    create: XOR<ClassViewCreateWithoutClsInput, ClassViewUncheckedCreateWithoutClsInput>
  }

  export type ClassViewUpdateWithWhereUniqueWithoutClsInput = {
    where: ClassViewWhereUniqueInput
    data: XOR<ClassViewUpdateWithoutClsInput, ClassViewUncheckedUpdateWithoutClsInput>
  }

  export type ClassViewUpdateManyWithWhereWithoutClsInput = {
    where: ClassViewScalarWhereInput
    data: XOR<ClassViewUpdateManyMutationInput, ClassViewUncheckedUpdateManyWithoutClsInput>
  }

  export type ClassViewScalarWhereInput = {
    AND?: ClassViewScalarWhereInput | ClassViewScalarWhereInput[]
    OR?: ClassViewScalarWhereInput[]
    NOT?: ClassViewScalarWhereInput | ClassViewScalarWhereInput[]
    id?: IntFilter<"ClassView"> | number
    classId?: IntFilter<"ClassView"> | number
  }

  export type LayoutUpsertWithWhereUniqueWithoutClassesInput = {
    where: LayoutWhereUniqueInput
    update: XOR<LayoutUpdateWithoutClassesInput, LayoutUncheckedUpdateWithoutClassesInput>
    create: XOR<LayoutCreateWithoutClassesInput, LayoutUncheckedCreateWithoutClassesInput>
  }

  export type LayoutUpdateWithWhereUniqueWithoutClassesInput = {
    where: LayoutWhereUniqueInput
    data: XOR<LayoutUpdateWithoutClassesInput, LayoutUncheckedUpdateWithoutClassesInput>
  }

  export type LayoutUpdateManyWithWhereWithoutClassesInput = {
    where: LayoutScalarWhereInput
    data: XOR<LayoutUpdateManyMutationInput, LayoutUncheckedUpdateManyWithoutClassesInput>
  }

  export type LayoutScalarWhereInput = {
    AND?: LayoutScalarWhereInput | LayoutScalarWhereInput[]
    OR?: LayoutScalarWhereInput[]
    NOT?: LayoutScalarWhereInput | LayoutScalarWhereInput[]
    id?: IntFilter<"Layout"> | number
    name?: StringFilter<"Layout"> | string
    createdAt?: DateTimeFilter<"Layout"> | Date | string
    updatedAt?: DateTimeFilter<"Layout"> | Date | string
  }

  export type ClsCreateWithoutTimetableInput = {
    name: string
    teacher?: TeacherCreateNestedOneWithoutClassesInput
    register?: RegisterCreateNestedManyWithoutClsInput
    students?: StudentCreateNestedManyWithoutClsInput
    ClassView?: ClassViewCreateNestedManyWithoutClsInput
    layouts?: LayoutCreateNestedManyWithoutClassesInput
  }

  export type ClsUncheckedCreateWithoutTimetableInput = {
    id?: number
    name: string
    teacherId?: number | null
    register?: RegisterUncheckedCreateNestedManyWithoutClsInput
    students?: StudentUncheckedCreateNestedManyWithoutClsInput
    ClassView?: ClassViewUncheckedCreateNestedManyWithoutClsInput
    layouts?: LayoutUncheckedCreateNestedManyWithoutClassesInput
  }

  export type ClsCreateOrConnectWithoutTimetableInput = {
    where: ClsWhereUniqueInput
    create: XOR<ClsCreateWithoutTimetableInput, ClsUncheckedCreateWithoutTimetableInput>
  }

  export type ClsUpsertWithoutTimetableInput = {
    update: XOR<ClsUpdateWithoutTimetableInput, ClsUncheckedUpdateWithoutTimetableInput>
    create: XOR<ClsCreateWithoutTimetableInput, ClsUncheckedCreateWithoutTimetableInput>
    where?: ClsWhereInput
  }

  export type ClsUpdateToOneWithWhereWithoutTimetableInput = {
    where?: ClsWhereInput
    data: XOR<ClsUpdateWithoutTimetableInput, ClsUncheckedUpdateWithoutTimetableInput>
  }

  export type ClsUpdateWithoutTimetableInput = {
    name?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUpdateOneWithoutClassesNestedInput
    register?: RegisterUpdateManyWithoutClsNestedInput
    students?: StudentUpdateManyWithoutClsNestedInput
    ClassView?: ClassViewUpdateManyWithoutClsNestedInput
    layouts?: LayoutUpdateManyWithoutClassesNestedInput
  }

  export type ClsUncheckedUpdateWithoutTimetableInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    register?: RegisterUncheckedUpdateManyWithoutClsNestedInput
    students?: StudentUncheckedUpdateManyWithoutClsNestedInput
    ClassView?: ClassViewUncheckedUpdateManyWithoutClsNestedInput
    layouts?: LayoutUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type AttendanceCreateWithoutRegisterInput = {
    status: string
    comment?: string | null
    lateMinutes?: number | null
    date?: Date | string
    student: StudentCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutRegisterInput = {
    id?: number
    studentId: number
    status: string
    comment?: string | null
    lateMinutes?: number | null
    date?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutRegisterInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutRegisterInput, AttendanceUncheckedCreateWithoutRegisterInput>
  }

  export type AttendanceCreateManyRegisterInputEnvelope = {
    data: AttendanceCreateManyRegisterInput | AttendanceCreateManyRegisterInput[]
    skipDuplicates?: boolean
  }

  export type ClsCreateWithoutRegisterInput = {
    name: string
    teacher?: TeacherCreateNestedOneWithoutClassesInput
    students?: StudentCreateNestedManyWithoutClsInput
    timetable?: TimetableCreateNestedManyWithoutClsInput
    ClassView?: ClassViewCreateNestedManyWithoutClsInput
    layouts?: LayoutCreateNestedManyWithoutClassesInput
  }

  export type ClsUncheckedCreateWithoutRegisterInput = {
    id?: number
    name: string
    teacherId?: number | null
    students?: StudentUncheckedCreateNestedManyWithoutClsInput
    timetable?: TimetableUncheckedCreateNestedManyWithoutClsInput
    ClassView?: ClassViewUncheckedCreateNestedManyWithoutClsInput
    layouts?: LayoutUncheckedCreateNestedManyWithoutClassesInput
  }

  export type ClsCreateOrConnectWithoutRegisterInput = {
    where: ClsWhereUniqueInput
    create: XOR<ClsCreateWithoutRegisterInput, ClsUncheckedCreateWithoutRegisterInput>
  }

  export type TeacherCreateWithoutRegisterInput = {
    classes?: ClsCreateNestedManyWithoutTeacherInput
    user: UserCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutRegisterInput = {
    id?: number
    userId: number
    classes?: ClsUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutRegisterInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutRegisterInput, TeacherUncheckedCreateWithoutRegisterInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutRegisterInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutRegisterInput, AttendanceUncheckedUpdateWithoutRegisterInput>
    create: XOR<AttendanceCreateWithoutRegisterInput, AttendanceUncheckedCreateWithoutRegisterInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutRegisterInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutRegisterInput, AttendanceUncheckedUpdateWithoutRegisterInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutRegisterInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutRegisterInput>
  }

  export type ClsUpsertWithoutRegisterInput = {
    update: XOR<ClsUpdateWithoutRegisterInput, ClsUncheckedUpdateWithoutRegisterInput>
    create: XOR<ClsCreateWithoutRegisterInput, ClsUncheckedCreateWithoutRegisterInput>
    where?: ClsWhereInput
  }

  export type ClsUpdateToOneWithWhereWithoutRegisterInput = {
    where?: ClsWhereInput
    data: XOR<ClsUpdateWithoutRegisterInput, ClsUncheckedUpdateWithoutRegisterInput>
  }

  export type ClsUpdateWithoutRegisterInput = {
    name?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUpdateOneWithoutClassesNestedInput
    students?: StudentUpdateManyWithoutClsNestedInput
    timetable?: TimetableUpdateManyWithoutClsNestedInput
    ClassView?: ClassViewUpdateManyWithoutClsNestedInput
    layouts?: LayoutUpdateManyWithoutClassesNestedInput
  }

  export type ClsUncheckedUpdateWithoutRegisterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    students?: StudentUncheckedUpdateManyWithoutClsNestedInput
    timetable?: TimetableUncheckedUpdateManyWithoutClsNestedInput
    ClassView?: ClassViewUncheckedUpdateManyWithoutClsNestedInput
    layouts?: LayoutUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type TeacherUpsertWithoutRegisterInput = {
    update: XOR<TeacherUpdateWithoutRegisterInput, TeacherUncheckedUpdateWithoutRegisterInput>
    create: XOR<TeacherCreateWithoutRegisterInput, TeacherUncheckedCreateWithoutRegisterInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutRegisterInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutRegisterInput, TeacherUncheckedUpdateWithoutRegisterInput>
  }

  export type TeacherUpdateWithoutRegisterInput = {
    classes?: ClsUpdateManyWithoutTeacherNestedInput
    user?: UserUpdateOneRequiredWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutRegisterInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    classes?: ClsUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type RegisterCreateWithoutAttendanceInput = {
    date: Date | string
    status?: string
    cls: ClsCreateNestedOneWithoutRegisterInput
    teacher: TeacherCreateNestedOneWithoutRegisterInput
  }

  export type RegisterUncheckedCreateWithoutAttendanceInput = {
    id?: number
    classId: number
    teacherId: number
    date: Date | string
    status?: string
  }

  export type RegisterCreateOrConnectWithoutAttendanceInput = {
    where: RegisterWhereUniqueInput
    create: XOR<RegisterCreateWithoutAttendanceInput, RegisterUncheckedCreateWithoutAttendanceInput>
  }

  export type StudentCreateWithoutAttendanceInput = {
    cls: ClsCreateNestedOneWithoutStudentsInput
    user: UserCreateNestedOneWithoutStudentInput
    SeatingArrangement?: SeatingArrangementCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutAttendanceInput = {
    id?: number
    userId: number
    classId: number
    SeatingArrangement?: SeatingArrangementUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAttendanceInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
  }

  export type RegisterUpsertWithoutAttendanceInput = {
    update: XOR<RegisterUpdateWithoutAttendanceInput, RegisterUncheckedUpdateWithoutAttendanceInput>
    create: XOR<RegisterCreateWithoutAttendanceInput, RegisterUncheckedCreateWithoutAttendanceInput>
    where?: RegisterWhereInput
  }

  export type RegisterUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: RegisterWhereInput
    data: XOR<RegisterUpdateWithoutAttendanceInput, RegisterUncheckedUpdateWithoutAttendanceInput>
  }

  export type RegisterUpdateWithoutAttendanceInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    cls?: ClsUpdateOneRequiredWithoutRegisterNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutRegisterNestedInput
  }

  export type RegisterUncheckedUpdateWithoutAttendanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUpsertWithoutAttendanceInput = {
    update: XOR<StudentUpdateWithoutAttendanceInput, StudentUncheckedUpdateWithoutAttendanceInput>
    create: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAttendanceInput, StudentUncheckedUpdateWithoutAttendanceInput>
  }

  export type StudentUpdateWithoutAttendanceInput = {
    cls?: ClsUpdateOneRequiredWithoutStudentsNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    SeatingArrangement?: SeatingArrangementUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutAttendanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    SeatingArrangement?: SeatingArrangementUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SeatCreateWithoutClassViewInput = {
    studentId: number
    coordinates_X: number
    coordinates_y: number
  }

  export type SeatUncheckedCreateWithoutClassViewInput = {
    id?: number
    studentId: number
    coordinates_X: number
    coordinates_y: number
  }

  export type SeatCreateOrConnectWithoutClassViewInput = {
    where: SeatWhereUniqueInput
    create: XOR<SeatCreateWithoutClassViewInput, SeatUncheckedCreateWithoutClassViewInput>
  }

  export type SeatCreateManyClassViewInputEnvelope = {
    data: SeatCreateManyClassViewInput | SeatCreateManyClassViewInput[]
    skipDuplicates?: boolean
  }

  export type ClsCreateWithoutClassViewInput = {
    name: string
    teacher?: TeacherCreateNestedOneWithoutClassesInput
    register?: RegisterCreateNestedManyWithoutClsInput
    students?: StudentCreateNestedManyWithoutClsInput
    timetable?: TimetableCreateNestedManyWithoutClsInput
    layouts?: LayoutCreateNestedManyWithoutClassesInput
  }

  export type ClsUncheckedCreateWithoutClassViewInput = {
    id?: number
    name: string
    teacherId?: number | null
    register?: RegisterUncheckedCreateNestedManyWithoutClsInput
    students?: StudentUncheckedCreateNestedManyWithoutClsInput
    timetable?: TimetableUncheckedCreateNestedManyWithoutClsInput
    layouts?: LayoutUncheckedCreateNestedManyWithoutClassesInput
  }

  export type ClsCreateOrConnectWithoutClassViewInput = {
    where: ClsWhereUniqueInput
    create: XOR<ClsCreateWithoutClassViewInput, ClsUncheckedCreateWithoutClassViewInput>
  }

  export type SeatUpsertWithWhereUniqueWithoutClassViewInput = {
    where: SeatWhereUniqueInput
    update: XOR<SeatUpdateWithoutClassViewInput, SeatUncheckedUpdateWithoutClassViewInput>
    create: XOR<SeatCreateWithoutClassViewInput, SeatUncheckedCreateWithoutClassViewInput>
  }

  export type SeatUpdateWithWhereUniqueWithoutClassViewInput = {
    where: SeatWhereUniqueInput
    data: XOR<SeatUpdateWithoutClassViewInput, SeatUncheckedUpdateWithoutClassViewInput>
  }

  export type SeatUpdateManyWithWhereWithoutClassViewInput = {
    where: SeatScalarWhereInput
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyWithoutClassViewInput>
  }

  export type SeatScalarWhereInput = {
    AND?: SeatScalarWhereInput | SeatScalarWhereInput[]
    OR?: SeatScalarWhereInput[]
    NOT?: SeatScalarWhereInput | SeatScalarWhereInput[]
    id?: IntFilter<"Seat"> | number
    classViewId?: IntFilter<"Seat"> | number
    studentId?: IntFilter<"Seat"> | number
    coordinates_X?: FloatFilter<"Seat"> | number
    coordinates_y?: FloatFilter<"Seat"> | number
  }

  export type ClsUpsertWithoutClassViewInput = {
    update: XOR<ClsUpdateWithoutClassViewInput, ClsUncheckedUpdateWithoutClassViewInput>
    create: XOR<ClsCreateWithoutClassViewInput, ClsUncheckedCreateWithoutClassViewInput>
    where?: ClsWhereInput
  }

  export type ClsUpdateToOneWithWhereWithoutClassViewInput = {
    where?: ClsWhereInput
    data: XOR<ClsUpdateWithoutClassViewInput, ClsUncheckedUpdateWithoutClassViewInput>
  }

  export type ClsUpdateWithoutClassViewInput = {
    name?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUpdateOneWithoutClassesNestedInput
    register?: RegisterUpdateManyWithoutClsNestedInput
    students?: StudentUpdateManyWithoutClsNestedInput
    timetable?: TimetableUpdateManyWithoutClsNestedInput
    layouts?: LayoutUpdateManyWithoutClassesNestedInput
  }

  export type ClsUncheckedUpdateWithoutClassViewInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    register?: RegisterUncheckedUpdateManyWithoutClsNestedInput
    students?: StudentUncheckedUpdateManyWithoutClsNestedInput
    timetable?: TimetableUncheckedUpdateManyWithoutClsNestedInput
    layouts?: LayoutUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type ClassViewCreateWithoutSeatInput = {
    cls: ClsCreateNestedOneWithoutClassViewInput
  }

  export type ClassViewUncheckedCreateWithoutSeatInput = {
    id?: number
    classId: number
  }

  export type ClassViewCreateOrConnectWithoutSeatInput = {
    where: ClassViewWhereUniqueInput
    create: XOR<ClassViewCreateWithoutSeatInput, ClassViewUncheckedCreateWithoutSeatInput>
  }

  export type ClassViewUpsertWithoutSeatInput = {
    update: XOR<ClassViewUpdateWithoutSeatInput, ClassViewUncheckedUpdateWithoutSeatInput>
    create: XOR<ClassViewCreateWithoutSeatInput, ClassViewUncheckedCreateWithoutSeatInput>
    where?: ClassViewWhereInput
  }

  export type ClassViewUpdateToOneWithWhereWithoutSeatInput = {
    where?: ClassViewWhereInput
    data: XOR<ClassViewUpdateWithoutSeatInput, ClassViewUncheckedUpdateWithoutSeatInput>
  }

  export type ClassViewUpdateWithoutSeatInput = {
    cls?: ClsUpdateOneRequiredWithoutClassViewNestedInput
  }

  export type ClassViewUncheckedUpdateWithoutSeatInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
  }

  export type DeskCreateWithoutLayoutInput = {
    x: number
    y: number
    createdAt?: Date | string
    updatedAt?: Date | string
    SeatingArrangement?: SeatingArrangementCreateNestedManyWithoutDeskInput
  }

  export type DeskUncheckedCreateWithoutLayoutInput = {
    id?: number
    x: number
    y: number
    createdAt?: Date | string
    updatedAt?: Date | string
    SeatingArrangement?: SeatingArrangementUncheckedCreateNestedManyWithoutDeskInput
  }

  export type DeskCreateOrConnectWithoutLayoutInput = {
    where: DeskWhereUniqueInput
    create: XOR<DeskCreateWithoutLayoutInput, DeskUncheckedCreateWithoutLayoutInput>
  }

  export type DeskCreateManyLayoutInputEnvelope = {
    data: DeskCreateManyLayoutInput | DeskCreateManyLayoutInput[]
    skipDuplicates?: boolean
  }

  export type SeatingPlanCreateWithoutLayoutInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    seatingArrangement?: SeatingArrangementCreateNestedManyWithoutSeatingPlanInput
  }

  export type SeatingPlanUncheckedCreateWithoutLayoutInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    seatingArrangement?: SeatingArrangementUncheckedCreateNestedManyWithoutSeatingPlanInput
  }

  export type SeatingPlanCreateOrConnectWithoutLayoutInput = {
    where: SeatingPlanWhereUniqueInput
    create: XOR<SeatingPlanCreateWithoutLayoutInput, SeatingPlanUncheckedCreateWithoutLayoutInput>
  }

  export type SeatingPlanCreateManyLayoutInputEnvelope = {
    data: SeatingPlanCreateManyLayoutInput | SeatingPlanCreateManyLayoutInput[]
    skipDuplicates?: boolean
  }

  export type ClsCreateWithoutLayoutsInput = {
    name: string
    teacher?: TeacherCreateNestedOneWithoutClassesInput
    register?: RegisterCreateNestedManyWithoutClsInput
    students?: StudentCreateNestedManyWithoutClsInput
    timetable?: TimetableCreateNestedManyWithoutClsInput
    ClassView?: ClassViewCreateNestedManyWithoutClsInput
  }

  export type ClsUncheckedCreateWithoutLayoutsInput = {
    id?: number
    name: string
    teacherId?: number | null
    register?: RegisterUncheckedCreateNestedManyWithoutClsInput
    students?: StudentUncheckedCreateNestedManyWithoutClsInput
    timetable?: TimetableUncheckedCreateNestedManyWithoutClsInput
    ClassView?: ClassViewUncheckedCreateNestedManyWithoutClsInput
  }

  export type ClsCreateOrConnectWithoutLayoutsInput = {
    where: ClsWhereUniqueInput
    create: XOR<ClsCreateWithoutLayoutsInput, ClsUncheckedCreateWithoutLayoutsInput>
  }

  export type DeskUpsertWithWhereUniqueWithoutLayoutInput = {
    where: DeskWhereUniqueInput
    update: XOR<DeskUpdateWithoutLayoutInput, DeskUncheckedUpdateWithoutLayoutInput>
    create: XOR<DeskCreateWithoutLayoutInput, DeskUncheckedCreateWithoutLayoutInput>
  }

  export type DeskUpdateWithWhereUniqueWithoutLayoutInput = {
    where: DeskWhereUniqueInput
    data: XOR<DeskUpdateWithoutLayoutInput, DeskUncheckedUpdateWithoutLayoutInput>
  }

  export type DeskUpdateManyWithWhereWithoutLayoutInput = {
    where: DeskScalarWhereInput
    data: XOR<DeskUpdateManyMutationInput, DeskUncheckedUpdateManyWithoutLayoutInput>
  }

  export type DeskScalarWhereInput = {
    AND?: DeskScalarWhereInput | DeskScalarWhereInput[]
    OR?: DeskScalarWhereInput[]
    NOT?: DeskScalarWhereInput | DeskScalarWhereInput[]
    id?: IntFilter<"Desk"> | number
    layoutId?: IntFilter<"Desk"> | number
    x?: FloatFilter<"Desk"> | number
    y?: FloatFilter<"Desk"> | number
    createdAt?: DateTimeFilter<"Desk"> | Date | string
    updatedAt?: DateTimeFilter<"Desk"> | Date | string
  }

  export type SeatingPlanUpsertWithWhereUniqueWithoutLayoutInput = {
    where: SeatingPlanWhereUniqueInput
    update: XOR<SeatingPlanUpdateWithoutLayoutInput, SeatingPlanUncheckedUpdateWithoutLayoutInput>
    create: XOR<SeatingPlanCreateWithoutLayoutInput, SeatingPlanUncheckedCreateWithoutLayoutInput>
  }

  export type SeatingPlanUpdateWithWhereUniqueWithoutLayoutInput = {
    where: SeatingPlanWhereUniqueInput
    data: XOR<SeatingPlanUpdateWithoutLayoutInput, SeatingPlanUncheckedUpdateWithoutLayoutInput>
  }

  export type SeatingPlanUpdateManyWithWhereWithoutLayoutInput = {
    where: SeatingPlanScalarWhereInput
    data: XOR<SeatingPlanUpdateManyMutationInput, SeatingPlanUncheckedUpdateManyWithoutLayoutInput>
  }

  export type SeatingPlanScalarWhereInput = {
    AND?: SeatingPlanScalarWhereInput | SeatingPlanScalarWhereInput[]
    OR?: SeatingPlanScalarWhereInput[]
    NOT?: SeatingPlanScalarWhereInput | SeatingPlanScalarWhereInput[]
    id?: IntFilter<"SeatingPlan"> | number
    layoutId?: IntFilter<"SeatingPlan"> | number
    createdAt?: DateTimeFilter<"SeatingPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SeatingPlan"> | Date | string
  }

  export type ClsUpsertWithWhereUniqueWithoutLayoutsInput = {
    where: ClsWhereUniqueInput
    update: XOR<ClsUpdateWithoutLayoutsInput, ClsUncheckedUpdateWithoutLayoutsInput>
    create: XOR<ClsCreateWithoutLayoutsInput, ClsUncheckedCreateWithoutLayoutsInput>
  }

  export type ClsUpdateWithWhereUniqueWithoutLayoutsInput = {
    where: ClsWhereUniqueInput
    data: XOR<ClsUpdateWithoutLayoutsInput, ClsUncheckedUpdateWithoutLayoutsInput>
  }

  export type ClsUpdateManyWithWhereWithoutLayoutsInput = {
    where: ClsScalarWhereInput
    data: XOR<ClsUpdateManyMutationInput, ClsUncheckedUpdateManyWithoutLayoutsInput>
  }

  export type LayoutCreateWithoutDesksInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    seatingPlans?: SeatingPlanCreateNestedManyWithoutLayoutInput
    classes?: ClsCreateNestedManyWithoutLayoutsInput
  }

  export type LayoutUncheckedCreateWithoutDesksInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    seatingPlans?: SeatingPlanUncheckedCreateNestedManyWithoutLayoutInput
    classes?: ClsUncheckedCreateNestedManyWithoutLayoutsInput
  }

  export type LayoutCreateOrConnectWithoutDesksInput = {
    where: LayoutWhereUniqueInput
    create: XOR<LayoutCreateWithoutDesksInput, LayoutUncheckedCreateWithoutDesksInput>
  }

  export type SeatingArrangementCreateWithoutDeskInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    seatingPlan: SeatingPlanCreateNestedOneWithoutSeatingArrangementInput
    student: StudentCreateNestedOneWithoutSeatingArrangementInput
  }

  export type SeatingArrangementUncheckedCreateWithoutDeskInput = {
    id?: number
    seatingPlanId: number
    studentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeatingArrangementCreateOrConnectWithoutDeskInput = {
    where: SeatingArrangementWhereUniqueInput
    create: XOR<SeatingArrangementCreateWithoutDeskInput, SeatingArrangementUncheckedCreateWithoutDeskInput>
  }

  export type SeatingArrangementCreateManyDeskInputEnvelope = {
    data: SeatingArrangementCreateManyDeskInput | SeatingArrangementCreateManyDeskInput[]
    skipDuplicates?: boolean
  }

  export type LayoutUpsertWithoutDesksInput = {
    update: XOR<LayoutUpdateWithoutDesksInput, LayoutUncheckedUpdateWithoutDesksInput>
    create: XOR<LayoutCreateWithoutDesksInput, LayoutUncheckedCreateWithoutDesksInput>
    where?: LayoutWhereInput
  }

  export type LayoutUpdateToOneWithWhereWithoutDesksInput = {
    where?: LayoutWhereInput
    data: XOR<LayoutUpdateWithoutDesksInput, LayoutUncheckedUpdateWithoutDesksInput>
  }

  export type LayoutUpdateWithoutDesksInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seatingPlans?: SeatingPlanUpdateManyWithoutLayoutNestedInput
    classes?: ClsUpdateManyWithoutLayoutsNestedInput
  }

  export type LayoutUncheckedUpdateWithoutDesksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seatingPlans?: SeatingPlanUncheckedUpdateManyWithoutLayoutNestedInput
    classes?: ClsUncheckedUpdateManyWithoutLayoutsNestedInput
  }

  export type SeatingArrangementUpsertWithWhereUniqueWithoutDeskInput = {
    where: SeatingArrangementWhereUniqueInput
    update: XOR<SeatingArrangementUpdateWithoutDeskInput, SeatingArrangementUncheckedUpdateWithoutDeskInput>
    create: XOR<SeatingArrangementCreateWithoutDeskInput, SeatingArrangementUncheckedCreateWithoutDeskInput>
  }

  export type SeatingArrangementUpdateWithWhereUniqueWithoutDeskInput = {
    where: SeatingArrangementWhereUniqueInput
    data: XOR<SeatingArrangementUpdateWithoutDeskInput, SeatingArrangementUncheckedUpdateWithoutDeskInput>
  }

  export type SeatingArrangementUpdateManyWithWhereWithoutDeskInput = {
    where: SeatingArrangementScalarWhereInput
    data: XOR<SeatingArrangementUpdateManyMutationInput, SeatingArrangementUncheckedUpdateManyWithoutDeskInput>
  }

  export type LayoutCreateWithoutSeatingPlansInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    desks?: DeskCreateNestedManyWithoutLayoutInput
    classes?: ClsCreateNestedManyWithoutLayoutsInput
  }

  export type LayoutUncheckedCreateWithoutSeatingPlansInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    desks?: DeskUncheckedCreateNestedManyWithoutLayoutInput
    classes?: ClsUncheckedCreateNestedManyWithoutLayoutsInput
  }

  export type LayoutCreateOrConnectWithoutSeatingPlansInput = {
    where: LayoutWhereUniqueInput
    create: XOR<LayoutCreateWithoutSeatingPlansInput, LayoutUncheckedCreateWithoutSeatingPlansInput>
  }

  export type SeatingArrangementCreateWithoutSeatingPlanInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    desk: DeskCreateNestedOneWithoutSeatingArrangementInput
    student: StudentCreateNestedOneWithoutSeatingArrangementInput
  }

  export type SeatingArrangementUncheckedCreateWithoutSeatingPlanInput = {
    id?: number
    deskId: number
    studentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeatingArrangementCreateOrConnectWithoutSeatingPlanInput = {
    where: SeatingArrangementWhereUniqueInput
    create: XOR<SeatingArrangementCreateWithoutSeatingPlanInput, SeatingArrangementUncheckedCreateWithoutSeatingPlanInput>
  }

  export type SeatingArrangementCreateManySeatingPlanInputEnvelope = {
    data: SeatingArrangementCreateManySeatingPlanInput | SeatingArrangementCreateManySeatingPlanInput[]
    skipDuplicates?: boolean
  }

  export type LayoutUpsertWithoutSeatingPlansInput = {
    update: XOR<LayoutUpdateWithoutSeatingPlansInput, LayoutUncheckedUpdateWithoutSeatingPlansInput>
    create: XOR<LayoutCreateWithoutSeatingPlansInput, LayoutUncheckedCreateWithoutSeatingPlansInput>
    where?: LayoutWhereInput
  }

  export type LayoutUpdateToOneWithWhereWithoutSeatingPlansInput = {
    where?: LayoutWhereInput
    data: XOR<LayoutUpdateWithoutSeatingPlansInput, LayoutUncheckedUpdateWithoutSeatingPlansInput>
  }

  export type LayoutUpdateWithoutSeatingPlansInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    desks?: DeskUpdateManyWithoutLayoutNestedInput
    classes?: ClsUpdateManyWithoutLayoutsNestedInput
  }

  export type LayoutUncheckedUpdateWithoutSeatingPlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    desks?: DeskUncheckedUpdateManyWithoutLayoutNestedInput
    classes?: ClsUncheckedUpdateManyWithoutLayoutsNestedInput
  }

  export type SeatingArrangementUpsertWithWhereUniqueWithoutSeatingPlanInput = {
    where: SeatingArrangementWhereUniqueInput
    update: XOR<SeatingArrangementUpdateWithoutSeatingPlanInput, SeatingArrangementUncheckedUpdateWithoutSeatingPlanInput>
    create: XOR<SeatingArrangementCreateWithoutSeatingPlanInput, SeatingArrangementUncheckedCreateWithoutSeatingPlanInput>
  }

  export type SeatingArrangementUpdateWithWhereUniqueWithoutSeatingPlanInput = {
    where: SeatingArrangementWhereUniqueInput
    data: XOR<SeatingArrangementUpdateWithoutSeatingPlanInput, SeatingArrangementUncheckedUpdateWithoutSeatingPlanInput>
  }

  export type SeatingArrangementUpdateManyWithWhereWithoutSeatingPlanInput = {
    where: SeatingArrangementScalarWhereInput
    data: XOR<SeatingArrangementUpdateManyMutationInput, SeatingArrangementUncheckedUpdateManyWithoutSeatingPlanInput>
  }

  export type SeatingPlanCreateWithoutSeatingArrangementInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    layout: LayoutCreateNestedOneWithoutSeatingPlansInput
  }

  export type SeatingPlanUncheckedCreateWithoutSeatingArrangementInput = {
    id?: number
    layoutId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeatingPlanCreateOrConnectWithoutSeatingArrangementInput = {
    where: SeatingPlanWhereUniqueInput
    create: XOR<SeatingPlanCreateWithoutSeatingArrangementInput, SeatingPlanUncheckedCreateWithoutSeatingArrangementInput>
  }

  export type DeskCreateWithoutSeatingArrangementInput = {
    x: number
    y: number
    createdAt?: Date | string
    updatedAt?: Date | string
    layout: LayoutCreateNestedOneWithoutDesksInput
  }

  export type DeskUncheckedCreateWithoutSeatingArrangementInput = {
    id?: number
    layoutId: number
    x: number
    y: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeskCreateOrConnectWithoutSeatingArrangementInput = {
    where: DeskWhereUniqueInput
    create: XOR<DeskCreateWithoutSeatingArrangementInput, DeskUncheckedCreateWithoutSeatingArrangementInput>
  }

  export type StudentCreateWithoutSeatingArrangementInput = {
    Attendance?: AttendanceCreateNestedManyWithoutStudentInput
    cls: ClsCreateNestedOneWithoutStudentsInput
    user: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSeatingArrangementInput = {
    id?: number
    userId: number
    classId: number
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSeatingArrangementInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSeatingArrangementInput, StudentUncheckedCreateWithoutSeatingArrangementInput>
  }

  export type SeatingPlanUpsertWithoutSeatingArrangementInput = {
    update: XOR<SeatingPlanUpdateWithoutSeatingArrangementInput, SeatingPlanUncheckedUpdateWithoutSeatingArrangementInput>
    create: XOR<SeatingPlanCreateWithoutSeatingArrangementInput, SeatingPlanUncheckedCreateWithoutSeatingArrangementInput>
    where?: SeatingPlanWhereInput
  }

  export type SeatingPlanUpdateToOneWithWhereWithoutSeatingArrangementInput = {
    where?: SeatingPlanWhereInput
    data: XOR<SeatingPlanUpdateWithoutSeatingArrangementInput, SeatingPlanUncheckedUpdateWithoutSeatingArrangementInput>
  }

  export type SeatingPlanUpdateWithoutSeatingArrangementInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    layout?: LayoutUpdateOneRequiredWithoutSeatingPlansNestedInput
  }

  export type SeatingPlanUncheckedUpdateWithoutSeatingArrangementInput = {
    id?: IntFieldUpdateOperationsInput | number
    layoutId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeskUpsertWithoutSeatingArrangementInput = {
    update: XOR<DeskUpdateWithoutSeatingArrangementInput, DeskUncheckedUpdateWithoutSeatingArrangementInput>
    create: XOR<DeskCreateWithoutSeatingArrangementInput, DeskUncheckedCreateWithoutSeatingArrangementInput>
    where?: DeskWhereInput
  }

  export type DeskUpdateToOneWithWhereWithoutSeatingArrangementInput = {
    where?: DeskWhereInput
    data: XOR<DeskUpdateWithoutSeatingArrangementInput, DeskUncheckedUpdateWithoutSeatingArrangementInput>
  }

  export type DeskUpdateWithoutSeatingArrangementInput = {
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    layout?: LayoutUpdateOneRequiredWithoutDesksNestedInput
  }

  export type DeskUncheckedUpdateWithoutSeatingArrangementInput = {
    id?: IntFieldUpdateOperationsInput | number
    layoutId?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpsertWithoutSeatingArrangementInput = {
    update: XOR<StudentUpdateWithoutSeatingArrangementInput, StudentUncheckedUpdateWithoutSeatingArrangementInput>
    create: XOR<StudentCreateWithoutSeatingArrangementInput, StudentUncheckedCreateWithoutSeatingArrangementInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSeatingArrangementInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSeatingArrangementInput, StudentUncheckedUpdateWithoutSeatingArrangementInput>
  }

  export type StudentUpdateWithoutSeatingArrangementInput = {
    Attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    cls?: ClsUpdateOneRequiredWithoutStudentsNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSeatingArrangementInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    Attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: number
    username: string
    email: string
    password: string
  }

  export type UserUpdateWithoutRoleInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Student?: StudentUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ClsCreateManyTeacherInput = {
    id?: number
    name: string
  }

  export type RegisterCreateManyTeacherInput = {
    id?: number
    classId: number
    date: Date | string
    status?: string
  }

  export type ClsUpdateWithoutTeacherInput = {
    name?: StringFieldUpdateOperationsInput | string
    register?: RegisterUpdateManyWithoutClsNestedInput
    students?: StudentUpdateManyWithoutClsNestedInput
    timetable?: TimetableUpdateManyWithoutClsNestedInput
    ClassView?: ClassViewUpdateManyWithoutClsNestedInput
    layouts?: LayoutUpdateManyWithoutClassesNestedInput
  }

  export type ClsUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    register?: RegisterUncheckedUpdateManyWithoutClsNestedInput
    students?: StudentUncheckedUpdateManyWithoutClsNestedInput
    timetable?: TimetableUncheckedUpdateManyWithoutClsNestedInput
    ClassView?: ClassViewUncheckedUpdateManyWithoutClsNestedInput
    layouts?: LayoutUncheckedUpdateManyWithoutClassesNestedInput
  }

  export type ClsUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegisterUpdateWithoutTeacherInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    Attendance?: AttendanceUpdateManyWithoutRegisterNestedInput
    cls?: ClsUpdateOneRequiredWithoutRegisterNestedInput
  }

  export type RegisterUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    Attendance?: AttendanceUncheckedUpdateManyWithoutRegisterNestedInput
  }

  export type RegisterUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateManyStudentInput = {
    id?: number
    registerId: number
    status: string
    comment?: string | null
    lateMinutes?: number | null
    date?: Date | string
  }

  export type SeatingArrangementCreateManyStudentInput = {
    id?: number
    seatingPlanId: number
    deskId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateWithoutStudentInput = {
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    lateMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    register?: RegisterUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    registerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    lateMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    registerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    lateMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatingArrangementUpdateWithoutStudentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seatingPlan?: SeatingPlanUpdateOneRequiredWithoutSeatingArrangementNestedInput
    desk?: DeskUpdateOneRequiredWithoutSeatingArrangementNestedInput
  }

  export type SeatingArrangementUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatingPlanId?: IntFieldUpdateOperationsInput | number
    deskId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatingArrangementUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatingPlanId?: IntFieldUpdateOperationsInput | number
    deskId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegisterCreateManyClsInput = {
    id?: number
    teacherId: number
    date: Date | string
    status?: string
  }

  export type StudentCreateManyClsInput = {
    id?: number
    userId: number
  }

  export type TimetableCreateManyClsInput = {
    id?: number
    day: string
    startTime: Date | string
    endTime: Date | string
  }

  export type ClassViewCreateManyClsInput = {
    id?: number
  }

  export type RegisterUpdateWithoutClsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    Attendance?: AttendanceUpdateManyWithoutRegisterNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutRegisterNestedInput
  }

  export type RegisterUncheckedUpdateWithoutClsInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    Attendance?: AttendanceUncheckedUpdateManyWithoutRegisterNestedInput
  }

  export type RegisterUncheckedUpdateManyWithoutClsInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUpdateWithoutClsInput = {
    Attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    SeatingArrangement?: SeatingArrangementUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutClsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    Attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    SeatingArrangement?: SeatingArrangementUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutClsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TimetableUpdateWithoutClsInput = {
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimetableUncheckedUpdateWithoutClsInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimetableUncheckedUpdateManyWithoutClsInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassViewUpdateWithoutClsInput = {
    seat?: SeatUpdateManyWithoutClassViewNestedInput
  }

  export type ClassViewUncheckedUpdateWithoutClsInput = {
    id?: IntFieldUpdateOperationsInput | number
    seat?: SeatUncheckedUpdateManyWithoutClassViewNestedInput
  }

  export type ClassViewUncheckedUpdateManyWithoutClsInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type LayoutUpdateWithoutClassesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    desks?: DeskUpdateManyWithoutLayoutNestedInput
    seatingPlans?: SeatingPlanUpdateManyWithoutLayoutNestedInput
  }

  export type LayoutUncheckedUpdateWithoutClassesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    desks?: DeskUncheckedUpdateManyWithoutLayoutNestedInput
    seatingPlans?: SeatingPlanUncheckedUpdateManyWithoutLayoutNestedInput
  }

  export type LayoutUncheckedUpdateManyWithoutClassesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyRegisterInput = {
    id?: number
    studentId: number
    status: string
    comment?: string | null
    lateMinutes?: number | null
    date?: Date | string
  }

  export type AttendanceUpdateWithoutRegisterInput = {
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    lateMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutRegisterInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    lateMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutRegisterInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    lateMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatCreateManyClassViewInput = {
    id?: number
    studentId: number
    coordinates_X: number
    coordinates_y: number
  }

  export type SeatUpdateWithoutClassViewInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    coordinates_X?: FloatFieldUpdateOperationsInput | number
    coordinates_y?: FloatFieldUpdateOperationsInput | number
  }

  export type SeatUncheckedUpdateWithoutClassViewInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    coordinates_X?: FloatFieldUpdateOperationsInput | number
    coordinates_y?: FloatFieldUpdateOperationsInput | number
  }

  export type SeatUncheckedUpdateManyWithoutClassViewInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    coordinates_X?: FloatFieldUpdateOperationsInput | number
    coordinates_y?: FloatFieldUpdateOperationsInput | number
  }

  export type DeskCreateManyLayoutInput = {
    id?: number
    x: number
    y: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeatingPlanCreateManyLayoutInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeskUpdateWithoutLayoutInput = {
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SeatingArrangement?: SeatingArrangementUpdateManyWithoutDeskNestedInput
  }

  export type DeskUncheckedUpdateWithoutLayoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SeatingArrangement?: SeatingArrangementUncheckedUpdateManyWithoutDeskNestedInput
  }

  export type DeskUncheckedUpdateManyWithoutLayoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatingPlanUpdateWithoutLayoutInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seatingArrangement?: SeatingArrangementUpdateManyWithoutSeatingPlanNestedInput
  }

  export type SeatingPlanUncheckedUpdateWithoutLayoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seatingArrangement?: SeatingArrangementUncheckedUpdateManyWithoutSeatingPlanNestedInput
  }

  export type SeatingPlanUncheckedUpdateManyWithoutLayoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClsUpdateWithoutLayoutsInput = {
    name?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUpdateOneWithoutClassesNestedInput
    register?: RegisterUpdateManyWithoutClsNestedInput
    students?: StudentUpdateManyWithoutClsNestedInput
    timetable?: TimetableUpdateManyWithoutClsNestedInput
    ClassView?: ClassViewUpdateManyWithoutClsNestedInput
  }

  export type ClsUncheckedUpdateWithoutLayoutsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    register?: RegisterUncheckedUpdateManyWithoutClsNestedInput
    students?: StudentUncheckedUpdateManyWithoutClsNestedInput
    timetable?: TimetableUncheckedUpdateManyWithoutClsNestedInput
    ClassView?: ClassViewUncheckedUpdateManyWithoutClsNestedInput
  }

  export type ClsUncheckedUpdateManyWithoutLayoutsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SeatingArrangementCreateManyDeskInput = {
    id?: number
    seatingPlanId: number
    studentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeatingArrangementUpdateWithoutDeskInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seatingPlan?: SeatingPlanUpdateOneRequiredWithoutSeatingArrangementNestedInput
    student?: StudentUpdateOneRequiredWithoutSeatingArrangementNestedInput
  }

  export type SeatingArrangementUncheckedUpdateWithoutDeskInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatingPlanId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatingArrangementUncheckedUpdateManyWithoutDeskInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatingPlanId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatingArrangementCreateManySeatingPlanInput = {
    id?: number
    deskId: number
    studentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeatingArrangementUpdateWithoutSeatingPlanInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    desk?: DeskUpdateOneRequiredWithoutSeatingArrangementNestedInput
    student?: StudentUpdateOneRequiredWithoutSeatingArrangementNestedInput
  }

  export type SeatingArrangementUncheckedUpdateWithoutSeatingPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    deskId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatingArrangementUncheckedUpdateManyWithoutSeatingPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    deskId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeacherCountOutputTypeDefaultArgs instead
     */
    export type TeacherCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeacherCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentCountOutputTypeDefaultArgs instead
     */
    export type StudentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClsCountOutputTypeDefaultArgs instead
     */
    export type ClsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegisterCountOutputTypeDefaultArgs instead
     */
    export type RegisterCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegisterCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClassViewCountOutputTypeDefaultArgs instead
     */
    export type ClassViewCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClassViewCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LayoutCountOutputTypeDefaultArgs instead
     */
    export type LayoutCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LayoutCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeskCountOutputTypeDefaultArgs instead
     */
    export type DeskCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeskCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SeatingPlanCountOutputTypeDefaultArgs instead
     */
    export type SeatingPlanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SeatingPlanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeacherDefaultArgs instead
     */
    export type TeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeacherDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentDefaultArgs instead
     */
    export type StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClsDefaultArgs instead
     */
    export type ClsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimetableDefaultArgs instead
     */
    export type TimetableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimetableDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegisterDefaultArgs instead
     */
    export type RegisterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegisterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttendanceDefaultArgs instead
     */
    export type AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttendanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClassViewDefaultArgs instead
     */
    export type ClassViewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClassViewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SeatDefaultArgs instead
     */
    export type SeatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SeatDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LayoutDefaultArgs instead
     */
    export type LayoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LayoutDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeskDefaultArgs instead
     */
    export type DeskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SeatingPlanDefaultArgs instead
     */
    export type SeatingPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SeatingPlanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SeatingArrangementDefaultArgs instead
     */
    export type SeatingArrangementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SeatingArrangementDefaultArgs<ExtArgs>

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