
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
 * Model Cluster
 * 
 */
export type Cluster = $Result.DefaultSelection<Prisma.$ClusterPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserAuth
 * 
 */
export type UserAuth = $Result.DefaultSelection<Prisma.$UserAuthPayload>
/**
 * Model ScrapeFailure
 * 
 */
export type ScrapeFailure = $Result.DefaultSelection<Prisma.$ScrapeFailurePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AuthProvider: {
  EMAIL: 'EMAIL',
  GOOGLE: 'GOOGLE',
  APPLE: 'APPLE'
};

export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider]


export const Role: {
  OWNER: 'OWNER',
  FREE_USER: 'FREE_USER',
  PAID_USER: 'PAID_USER',
  BETA_TESTER: 'BETA_TESTER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ErrorTypeEnum: {
  UNMAPPED_MEDIA: 'UNMAPPED_MEDIA',
  PARSING_FAILURE: 'PARSING_FAILURE',
  PARSING_ERROR: 'PARSING_ERROR',
  ZERO_URLS_FETCHED: 'ZERO_URLS_FETCHED',
  OTHERS: 'OTHERS'
};

export type ErrorTypeEnum = (typeof ErrorTypeEnum)[keyof typeof ErrorTypeEnum]


export const InterestingTopic: {
  國際: '國際',
  財經: '財經',
  科技: '科技',
  教育: '教育',
  社會: '社會',
  文化: '文化',
  環境: '環境',
  娛樂: '娛樂',
  健康: '健康',
  軍隊: '軍隊',
  運動: '運動',
  觀點: '觀點'
};

export type InterestingTopic = (typeof InterestingTopic)[keyof typeof InterestingTopic]


export const InterestingRegionOrCountry: {
  台北市: '台北市',
  新北市: '新北市',
  桃園市: '桃園市',
  台中市: '台中市',
  台南市: '台南市',
  高雄市: '高雄市',
  基隆市: '基隆市',
  新竹市: '新竹市',
  嘉義市: '嘉義市',
  宜蘭縣: '宜蘭縣',
  花蓮縣: '花蓮縣',
  台東縣: '台東縣',
  南投縣: '南投縣',
  彰化縣: '彰化縣',
  雲林縣: '雲林縣',
  屏東縣: '屏東縣',
  苗栗縣: '苗栗縣',
  新竹縣: '新竹縣',
  嘉義縣: '嘉義縣',
  澎湖縣: '澎湖縣',
  金門縣: '金門縣',
  連江縣: '連江縣',
  香港: '香港',
  中國: '中國',
  美國: '美國',
  加沙: '加沙',
  以色列: '以色列',
  烏克蘭: '烏克蘭',
  歐盟: '歐盟',
  日本: '日本',
  韓國: '韓國'
};

export type InterestingRegionOrCountry = (typeof InterestingRegionOrCountry)[keyof typeof InterestingRegionOrCountry]


export const Identity: {
  台北人: '台北人',
  新北人: '新北人',
  桃園人: '桃園人',
  台中人: '台中人',
  台南人: '台南人',
  高雄人: '高雄人',
  基隆人: '基隆人',
  新竹人: '新竹人',
  嘉義人: '嘉義人',
  宜蘭人: '宜蘭人',
  花蓮人: '花蓮人',
  台東人: '台東人',
  南投人: '南投人',
  彰化人: '彰化人',
  雲林人: '雲林人',
  屏東人: '屏東人',
  苗栗人: '苗栗人',
  澎湖人: '澎湖人',
  金門人: '金門人',
  連江人: '連江人',
  其他: '其他'
};

export type Identity = (typeof Identity)[keyof typeof Identity]


export const PoliticalStance: {
  深綠: '深綠',
  淺綠: '淺綠',
  中立: '中立',
  淺藍: '淺藍',
  深藍: '深藍'
};

export type PoliticalStance = (typeof PoliticalStance)[keyof typeof PoliticalStance]


export const MediaNameEnum: {
  CTS: 'CTS',
  TSSDNews: 'TSSDNews',
  CTWant: 'CTWant',
  TaiwanNews: 'TaiwanNews',
  TTV: 'TTV',
  CTINews: 'CTINews',
  HongKongFreePress: 'HongKongFreePress',
  MingPaoNews: 'MingPaoNews',
  SingTaoDaily: 'SingTaoDaily',
  SCMP: 'SCMP',
  ChineseNewYorkTimes: 'ChineseNewYorkTimes',
  DeutscheWelle: 'DeutscheWelle',
  HKFreePress: 'HKFreePress',
  WenWeiPo: 'WenWeiPo',
  OrientalDailyNews: 'OrientalDailyNews',
  TaKungPao: 'TaKungPao',
  HK01: 'HK01',
  InitiumMedia: 'InitiumMedia',
  YahooNews: 'YahooNews',
  HKCD: 'HKCD',
  TheEpochTimes: 'TheEpochTimes',
  NowTV: 'NowTV',
  ChineseBBC: 'ChineseBBC',
  VOC: 'VOC',
  HKCourtNews: 'HKCourtNews',
  ICable: 'ICable',
  HKGovernmentNews: 'HKGovernmentNews',
  OrangeNews: 'OrangeNews',
  TheStandard: 'TheStandard',
  HKEJ: 'HKEJ',
  HKET: 'HKET',
  RTHK: 'RTHK',
  TheWitness: 'TheWitness',
  InMediaHK: 'InMediaHK',
  PeopleDaily: 'PeopleDaily',
  XinhuaNewsAgency: 'XinhuaNewsAgency',
  GlobalTimes: 'GlobalTimes',
  CCTV: 'CCTV',
  UnitedDailyNews: 'UnitedDailyNews',
  LibertyTimesNet: 'LibertyTimesNet',
  ChinaTimes: 'ChinaTimes',
  CNA: 'CNA',
  PTSNews: 'PTSNews',
  CTEE: 'CTEE',
  MyPeopleVol: 'MyPeopleVol',
  TaiwanTimes: 'TaiwanTimes',
  ChinaDailyNews: 'ChinaDailyNews',
  SETN: 'SETN',
  NextAppleNews: 'NextAppleNews',
  MirrorMedia: 'MirrorMedia',
  NowNews: 'NowNews',
  StormMedia: 'StormMedia',
  TVBS: 'TVBS',
  EBCNews: 'EBCNews',
  ETtoday: 'ETtoday',
  NewTalk: 'NewTalk',
  FTV: 'FTV'
};

export type MediaNameEnum = (typeof MediaNameEnum)[keyof typeof MediaNameEnum]


export const OriginEnum: {
  native: 'native',
  CTS: 'CTS',
  TSSDNews: 'TSSDNews',
  CTWant: 'CTWant',
  TaiwanNews: 'TaiwanNews',
  TTV: 'TTV',
  CTINews: 'CTINews',
  HongKongFreePress: 'HongKongFreePress',
  MingPaoNews: 'MingPaoNews',
  SingTaoDaily: 'SingTaoDaily',
  SCMP: 'SCMP',
  ChineseNewYorkTimes: 'ChineseNewYorkTimes',
  DeutscheWelle: 'DeutscheWelle',
  HKFreePress: 'HKFreePress',
  WenWeiPo: 'WenWeiPo',
  OrientalDailyNews: 'OrientalDailyNews',
  TaKungPao: 'TaKungPao',
  HK01: 'HK01',
  InitiumMedia: 'InitiumMedia',
  YahooNews: 'YahooNews',
  HKCD: 'HKCD',
  TheEpochTimes: 'TheEpochTimes',
  NowTV: 'NowTV',
  ChineseBBC: 'ChineseBBC',
  VOC: 'VOC',
  HKCourtNews: 'HKCourtNews',
  ICable: 'ICable',
  HKGovernmentNews: 'HKGovernmentNews',
  OrangeNews: 'OrangeNews',
  TheStandard: 'TheStandard',
  HKEJ: 'HKEJ',
  HKET: 'HKET',
  RTHK: 'RTHK',
  TheWitness: 'TheWitness',
  InMediaHK: 'InMediaHK',
  PeopleDaily: 'PeopleDaily',
  XinhuaNewsAgency: 'XinhuaNewsAgency',
  GlobalTimes: 'GlobalTimes',
  CCTV: 'CCTV',
  UnitedDailyNews: 'UnitedDailyNews',
  LibertyTimesNet: 'LibertyTimesNet',
  ChinaTimes: 'ChinaTimes',
  CNA: 'CNA',
  PTSNews: 'PTSNews',
  CTEE: 'CTEE',
  MyPeopleVol: 'MyPeopleVol',
  TaiwanTimes: 'TaiwanTimes',
  ChinaDailyNews: 'ChinaDailyNews',
  SETN: 'SETN',
  NextAppleNews: 'NextAppleNews',
  MirrorMedia: 'MirrorMedia',
  NowNews: 'NowNews',
  StormMedia: 'StormMedia',
  TVBS: 'TVBS',
  EBCNews: 'EBCNews',
  ETtoday: 'ETtoday',
  NewTalk: 'NewTalk',
  FTV: 'FTV'
};

export type OriginEnum = (typeof OriginEnum)[keyof typeof OriginEnum]

}

export type AuthProvider = $Enums.AuthProvider

export const AuthProvider: typeof $Enums.AuthProvider

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ErrorTypeEnum = $Enums.ErrorTypeEnum

export const ErrorTypeEnum: typeof $Enums.ErrorTypeEnum

export type InterestingTopic = $Enums.InterestingTopic

export const InterestingTopic: typeof $Enums.InterestingTopic

export type InterestingRegionOrCountry = $Enums.InterestingRegionOrCountry

export const InterestingRegionOrCountry: typeof $Enums.InterestingRegionOrCountry

export type Identity = $Enums.Identity

export const Identity: typeof $Enums.Identity

export type PoliticalStance = $Enums.PoliticalStance

export const PoliticalStance: typeof $Enums.PoliticalStance

export type MediaNameEnum = $Enums.MediaNameEnum

export const MediaNameEnum: typeof $Enums.MediaNameEnum

export type OriginEnum = $Enums.OriginEnum

export const OriginEnum: typeof $Enums.OriginEnum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clusters
 * const clusters = await prisma.cluster.findMany()
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
   * // Fetch zero or more Clusters
   * const clusters = await prisma.cluster.findMany()
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
   * `prisma.cluster`: Exposes CRUD operations for the **Cluster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clusters
    * const clusters = await prisma.cluster.findMany()
    * ```
    */
  get cluster(): Prisma.ClusterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.userAuth`: Exposes CRUD operations for the **UserAuth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAuths
    * const userAuths = await prisma.userAuth.findMany()
    * ```
    */
  get userAuth(): Prisma.UserAuthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scrapeFailure`: Exposes CRUD operations for the **ScrapeFailure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScrapeFailures
    * const scrapeFailures = await prisma.scrapeFailure.findMany()
    * ```
    */
  get scrapeFailure(): Prisma.ScrapeFailureDelegate<ExtArgs, ClientOptions>;
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
    Cluster: 'Cluster',
    News: 'News',
    User: 'User',
    UserAuth: 'UserAuth',
    ScrapeFailure: 'ScrapeFailure'
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
      modelProps: "cluster" | "news" | "user" | "userAuth" | "scrapeFailure"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cluster: {
        payload: Prisma.$ClusterPayload<ExtArgs>
        fields: Prisma.ClusterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClusterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClusterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          findFirst: {
            args: Prisma.ClusterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClusterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          findMany: {
            args: Prisma.ClusterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>[]
          }
          create: {
            args: Prisma.ClusterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          createMany: {
            args: Prisma.ClusterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClusterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>[]
          }
          delete: {
            args: Prisma.ClusterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          update: {
            args: Prisma.ClusterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          deleteMany: {
            args: Prisma.ClusterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClusterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClusterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>[]
          }
          upsert: {
            args: Prisma.ClusterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClusterPayload>
          }
          aggregate: {
            args: Prisma.ClusterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCluster>
          }
          groupBy: {
            args: Prisma.ClusterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClusterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClusterCountArgs<ExtArgs>
            result: $Utils.Optional<ClusterCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
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
      UserAuth: {
        payload: Prisma.$UserAuthPayload<ExtArgs>
        fields: Prisma.UserAuthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAuthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAuthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          findFirst: {
            args: Prisma.UserAuthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAuthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          findMany: {
            args: Prisma.UserAuthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>[]
          }
          create: {
            args: Prisma.UserAuthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          createMany: {
            args: Prisma.UserAuthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAuthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>[]
          }
          delete: {
            args: Prisma.UserAuthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          update: {
            args: Prisma.UserAuthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          deleteMany: {
            args: Prisma.UserAuthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAuthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAuthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>[]
          }
          upsert: {
            args: Prisma.UserAuthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          aggregate: {
            args: Prisma.UserAuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAuth>
          }
          groupBy: {
            args: Prisma.UserAuthGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAuthCountArgs<ExtArgs>
            result: $Utils.Optional<UserAuthCountAggregateOutputType> | number
          }
        }
      }
      ScrapeFailure: {
        payload: Prisma.$ScrapeFailurePayload<ExtArgs>
        fields: Prisma.ScrapeFailureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScrapeFailureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeFailurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScrapeFailureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeFailurePayload>
          }
          findFirst: {
            args: Prisma.ScrapeFailureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeFailurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScrapeFailureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeFailurePayload>
          }
          findMany: {
            args: Prisma.ScrapeFailureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeFailurePayload>[]
          }
          create: {
            args: Prisma.ScrapeFailureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeFailurePayload>
          }
          createMany: {
            args: Prisma.ScrapeFailureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScrapeFailureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeFailurePayload>[]
          }
          delete: {
            args: Prisma.ScrapeFailureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeFailurePayload>
          }
          update: {
            args: Prisma.ScrapeFailureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeFailurePayload>
          }
          deleteMany: {
            args: Prisma.ScrapeFailureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScrapeFailureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScrapeFailureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeFailurePayload>[]
          }
          upsert: {
            args: Prisma.ScrapeFailureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeFailurePayload>
          }
          aggregate: {
            args: Prisma.ScrapeFailureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScrapeFailure>
          }
          groupBy: {
            args: Prisma.ScrapeFailureGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScrapeFailureGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScrapeFailureCountArgs<ExtArgs>
            result: $Utils.Optional<ScrapeFailureCountAggregateOutputType> | number
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
    cluster?: ClusterOmit
    news?: NewsOmit
    user?: UserOmit
    userAuth?: UserAuthOmit
    scrapeFailure?: ScrapeFailureOmit
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
   * Count Type ClusterCountOutputType
   */

  export type ClusterCountOutputType = {
    news: number
  }

  export type ClusterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | ClusterCountOutputTypeCountNewsArgs
  }

  // Custom InputTypes
  /**
   * ClusterCountOutputType without action
   */
  export type ClusterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterCountOutputType
     */
    select?: ClusterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClusterCountOutputType without action
   */
  export type ClusterCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cluster
   */

  export type AggregateCluster = {
    _count: ClusterCountAggregateOutputType | null
    _avg: ClusterAvgAggregateOutputType | null
    _sum: ClusterSumAggregateOutputType | null
    _min: ClusterMinAggregateOutputType | null
    _max: ClusterMaxAggregateOutputType | null
  }

  export type ClusterAvgAggregateOutputType = {
    id: number | null
    processed_at: number | null
  }

  export type ClusterSumAggregateOutputType = {
    id: number | null
    processed_at: number | null
  }

  export type ClusterMinAggregateOutputType = {
    id: number | null
    cluster_name: string | null
    cluster_summary: string | null
    processed_at: number | null
  }

  export type ClusterMaxAggregateOutputType = {
    id: number | null
    cluster_name: string | null
    cluster_summary: string | null
    processed_at: number | null
  }

  export type ClusterCountAggregateOutputType = {
    id: number
    cluster_name: number
    cluster_summary: number
    processed_at: number
    _all: number
  }


  export type ClusterAvgAggregateInputType = {
    id?: true
    processed_at?: true
  }

  export type ClusterSumAggregateInputType = {
    id?: true
    processed_at?: true
  }

  export type ClusterMinAggregateInputType = {
    id?: true
    cluster_name?: true
    cluster_summary?: true
    processed_at?: true
  }

  export type ClusterMaxAggregateInputType = {
    id?: true
    cluster_name?: true
    cluster_summary?: true
    processed_at?: true
  }

  export type ClusterCountAggregateInputType = {
    id?: true
    cluster_name?: true
    cluster_summary?: true
    processed_at?: true
    _all?: true
  }

  export type ClusterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cluster to aggregate.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clusters
    **/
    _count?: true | ClusterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClusterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClusterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClusterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClusterMaxAggregateInputType
  }

  export type GetClusterAggregateType<T extends ClusterAggregateArgs> = {
        [P in keyof T & keyof AggregateCluster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCluster[P]>
      : GetScalarType<T[P], AggregateCluster[P]>
  }




  export type ClusterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClusterWhereInput
    orderBy?: ClusterOrderByWithAggregationInput | ClusterOrderByWithAggregationInput[]
    by: ClusterScalarFieldEnum[] | ClusterScalarFieldEnum
    having?: ClusterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClusterCountAggregateInputType | true
    _avg?: ClusterAvgAggregateInputType
    _sum?: ClusterSumAggregateInputType
    _min?: ClusterMinAggregateInputType
    _max?: ClusterMaxAggregateInputType
  }

  export type ClusterGroupByOutputType = {
    id: number
    cluster_name: string | null
    cluster_summary: string | null
    processed_at: number | null
    _count: ClusterCountAggregateOutputType | null
    _avg: ClusterAvgAggregateOutputType | null
    _sum: ClusterSumAggregateOutputType | null
    _min: ClusterMinAggregateOutputType | null
    _max: ClusterMaxAggregateOutputType | null
  }

  type GetClusterGroupByPayload<T extends ClusterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClusterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClusterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClusterGroupByOutputType[P]>
            : GetScalarType<T[P], ClusterGroupByOutputType[P]>
        }
      >
    >


  export type ClusterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cluster_name?: boolean
    cluster_summary?: boolean
    processed_at?: boolean
    news?: boolean | Cluster$newsArgs<ExtArgs>
    _count?: boolean | ClusterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cluster"]>

  export type ClusterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cluster_name?: boolean
    cluster_summary?: boolean
    processed_at?: boolean
  }, ExtArgs["result"]["cluster"]>

  export type ClusterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cluster_name?: boolean
    cluster_summary?: boolean
    processed_at?: boolean
  }, ExtArgs["result"]["cluster"]>

  export type ClusterSelectScalar = {
    id?: boolean
    cluster_name?: boolean
    cluster_summary?: boolean
    processed_at?: boolean
  }

  export type ClusterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cluster_name" | "cluster_summary" | "processed_at", ExtArgs["result"]["cluster"]>
  export type ClusterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | Cluster$newsArgs<ExtArgs>
    _count?: boolean | ClusterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClusterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClusterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClusterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cluster"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cluster_name: string | null
      cluster_summary: string | null
      processed_at: number | null
    }, ExtArgs["result"]["cluster"]>
    composites: {}
  }

  type ClusterGetPayload<S extends boolean | null | undefined | ClusterDefaultArgs> = $Result.GetResult<Prisma.$ClusterPayload, S>

  type ClusterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClusterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClusterCountAggregateInputType | true
    }

  export interface ClusterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cluster'], meta: { name: 'Cluster' } }
    /**
     * Find zero or one Cluster that matches the filter.
     * @param {ClusterFindUniqueArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClusterFindUniqueArgs>(args: SelectSubset<T, ClusterFindUniqueArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cluster that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClusterFindUniqueOrThrowArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClusterFindUniqueOrThrowArgs>(args: SelectSubset<T, ClusterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cluster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterFindFirstArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClusterFindFirstArgs>(args?: SelectSubset<T, ClusterFindFirstArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cluster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterFindFirstOrThrowArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClusterFindFirstOrThrowArgs>(args?: SelectSubset<T, ClusterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clusters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clusters
     * const clusters = await prisma.cluster.findMany()
     * 
     * // Get first 10 Clusters
     * const clusters = await prisma.cluster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clusterWithIdOnly = await prisma.cluster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClusterFindManyArgs>(args?: SelectSubset<T, ClusterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cluster.
     * @param {ClusterCreateArgs} args - Arguments to create a Cluster.
     * @example
     * // Create one Cluster
     * const Cluster = await prisma.cluster.create({
     *   data: {
     *     // ... data to create a Cluster
     *   }
     * })
     * 
     */
    create<T extends ClusterCreateArgs>(args: SelectSubset<T, ClusterCreateArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clusters.
     * @param {ClusterCreateManyArgs} args - Arguments to create many Clusters.
     * @example
     * // Create many Clusters
     * const cluster = await prisma.cluster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClusterCreateManyArgs>(args?: SelectSubset<T, ClusterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clusters and returns the data saved in the database.
     * @param {ClusterCreateManyAndReturnArgs} args - Arguments to create many Clusters.
     * @example
     * // Create many Clusters
     * const cluster = await prisma.cluster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clusters and only return the `id`
     * const clusterWithIdOnly = await prisma.cluster.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClusterCreateManyAndReturnArgs>(args?: SelectSubset<T, ClusterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cluster.
     * @param {ClusterDeleteArgs} args - Arguments to delete one Cluster.
     * @example
     * // Delete one Cluster
     * const Cluster = await prisma.cluster.delete({
     *   where: {
     *     // ... filter to delete one Cluster
     *   }
     * })
     * 
     */
    delete<T extends ClusterDeleteArgs>(args: SelectSubset<T, ClusterDeleteArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cluster.
     * @param {ClusterUpdateArgs} args - Arguments to update one Cluster.
     * @example
     * // Update one Cluster
     * const cluster = await prisma.cluster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClusterUpdateArgs>(args: SelectSubset<T, ClusterUpdateArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clusters.
     * @param {ClusterDeleteManyArgs} args - Arguments to filter Clusters to delete.
     * @example
     * // Delete a few Clusters
     * const { count } = await prisma.cluster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClusterDeleteManyArgs>(args?: SelectSubset<T, ClusterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clusters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clusters
     * const cluster = await prisma.cluster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClusterUpdateManyArgs>(args: SelectSubset<T, ClusterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clusters and returns the data updated in the database.
     * @param {ClusterUpdateManyAndReturnArgs} args - Arguments to update many Clusters.
     * @example
     * // Update many Clusters
     * const cluster = await prisma.cluster.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clusters and only return the `id`
     * const clusterWithIdOnly = await prisma.cluster.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClusterUpdateManyAndReturnArgs>(args: SelectSubset<T, ClusterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cluster.
     * @param {ClusterUpsertArgs} args - Arguments to update or create a Cluster.
     * @example
     * // Update or create a Cluster
     * const cluster = await prisma.cluster.upsert({
     *   create: {
     *     // ... data to create a Cluster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cluster we want to update
     *   }
     * })
     */
    upsert<T extends ClusterUpsertArgs>(args: SelectSubset<T, ClusterUpsertArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clusters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterCountArgs} args - Arguments to filter Clusters to count.
     * @example
     * // Count the number of Clusters
     * const count = await prisma.cluster.count({
     *   where: {
     *     // ... the filter for the Clusters we want to count
     *   }
     * })
    **/
    count<T extends ClusterCountArgs>(
      args?: Subset<T, ClusterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClusterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cluster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClusterAggregateArgs>(args: Subset<T, ClusterAggregateArgs>): Prisma.PrismaPromise<GetClusterAggregateType<T>>

    /**
     * Group by Cluster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterGroupByArgs} args - Group by arguments.
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
      T extends ClusterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClusterGroupByArgs['orderBy'] }
        : { orderBy?: ClusterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClusterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClusterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cluster model
   */
  readonly fields: ClusterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cluster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClusterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends Cluster$newsArgs<ExtArgs> = {}>(args?: Subset<T, Cluster$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cluster model
   */
  interface ClusterFieldRefs {
    readonly id: FieldRef<"Cluster", 'Int'>
    readonly cluster_name: FieldRef<"Cluster", 'String'>
    readonly cluster_summary: FieldRef<"Cluster", 'String'>
    readonly processed_at: FieldRef<"Cluster", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cluster findUnique
   */
  export type ClusterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster findUniqueOrThrow
   */
  export type ClusterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster findFirst
   */
  export type ClusterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clusters.
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clusters.
     */
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * Cluster findFirstOrThrow
   */
  export type ClusterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Cluster to fetch.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clusters.
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clusters.
     */
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * Cluster findMany
   */
  export type ClusterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter, which Clusters to fetch.
     */
    where?: ClusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clusters to fetch.
     */
    orderBy?: ClusterOrderByWithRelationInput | ClusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clusters.
     */
    cursor?: ClusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clusters.
     */
    skip?: number
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * Cluster create
   */
  export type ClusterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * The data needed to create a Cluster.
     */
    data?: XOR<ClusterCreateInput, ClusterUncheckedCreateInput>
  }

  /**
   * Cluster createMany
   */
  export type ClusterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clusters.
     */
    data: ClusterCreateManyInput | ClusterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cluster createManyAndReturn
   */
  export type ClusterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * The data used to create many Clusters.
     */
    data: ClusterCreateManyInput | ClusterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cluster update
   */
  export type ClusterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * The data needed to update a Cluster.
     */
    data: XOR<ClusterUpdateInput, ClusterUncheckedUpdateInput>
    /**
     * Choose, which Cluster to update.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster updateMany
   */
  export type ClusterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clusters.
     */
    data: XOR<ClusterUpdateManyMutationInput, ClusterUncheckedUpdateManyInput>
    /**
     * Filter which Clusters to update
     */
    where?: ClusterWhereInput
    /**
     * Limit how many Clusters to update.
     */
    limit?: number
  }

  /**
   * Cluster updateManyAndReturn
   */
  export type ClusterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * The data used to update Clusters.
     */
    data: XOR<ClusterUpdateManyMutationInput, ClusterUncheckedUpdateManyInput>
    /**
     * Filter which Clusters to update
     */
    where?: ClusterWhereInput
    /**
     * Limit how many Clusters to update.
     */
    limit?: number
  }

  /**
   * Cluster upsert
   */
  export type ClusterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * The filter to search for the Cluster to update in case it exists.
     */
    where: ClusterWhereUniqueInput
    /**
     * In case the Cluster found by the `where` argument doesn't exist, create a new Cluster with this data.
     */
    create: XOR<ClusterCreateInput, ClusterUncheckedCreateInput>
    /**
     * In case the Cluster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClusterUpdateInput, ClusterUncheckedUpdateInput>
  }

  /**
   * Cluster delete
   */
  export type ClusterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    /**
     * Filter which Cluster to delete.
     */
    where: ClusterWhereUniqueInput
  }

  /**
   * Cluster deleteMany
   */
  export type ClusterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clusters to delete
     */
    where?: ClusterWhereInput
    /**
     * Limit how many Clusters to delete.
     */
    limit?: number
  }

  /**
   * Cluster.news
   */
  export type Cluster$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * Cluster without action
   */
  export type ClusterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsAvgAggregateOutputType = {
    id: number | null
    published_at: number | null
    clusterId: number | null
  }

  export type NewsSumAggregateOutputType = {
    id: number | null
    published_at: number | null
    clusterId: number | null
  }

  export type NewsMinAggregateOutputType = {
    id: number | null
    media_name: $Enums.MediaNameEnum | null
    url: string | null
    title: string | null
    origin: $Enums.OriginEnum | null
    content: string | null
    content_en: string | null
    published_at: number | null
    clusterId: number | null
  }

  export type NewsMaxAggregateOutputType = {
    id: number | null
    media_name: $Enums.MediaNameEnum | null
    url: string | null
    title: string | null
    origin: $Enums.OriginEnum | null
    content: string | null
    content_en: string | null
    published_at: number | null
    clusterId: number | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    media_name: number
    url: number
    title: number
    origin: number
    content: number
    content_en: number
    published_at: number
    authors: number
    images: number
    clusterId: number
    _all: number
  }


  export type NewsAvgAggregateInputType = {
    id?: true
    published_at?: true
    clusterId?: true
  }

  export type NewsSumAggregateInputType = {
    id?: true
    published_at?: true
    clusterId?: true
  }

  export type NewsMinAggregateInputType = {
    id?: true
    media_name?: true
    url?: true
    title?: true
    origin?: true
    content?: true
    content_en?: true
    published_at?: true
    clusterId?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    media_name?: true
    url?: true
    title?: true
    origin?: true
    content?: true
    content_en?: true
    published_at?: true
    clusterId?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    media_name?: true
    url?: true
    title?: true
    origin?: true
    content?: true
    content_en?: true
    published_at?: true
    authors?: true
    images?: true
    clusterId?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _avg?: NewsAvgAggregateInputType
    _sum?: NewsSumAggregateInputType
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: number
    media_name: $Enums.MediaNameEnum | null
    url: string | null
    title: string | null
    origin: $Enums.OriginEnum | null
    content: string | null
    content_en: string | null
    published_at: number | null
    authors: string[]
    images: string[]
    clusterId: number | null
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    media_name?: boolean
    url?: boolean
    title?: boolean
    origin?: boolean
    content?: boolean
    content_en?: boolean
    published_at?: boolean
    authors?: boolean
    images?: boolean
    clusterId?: boolean
    cluster?: boolean | News$clusterArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    media_name?: boolean
    url?: boolean
    title?: boolean
    origin?: boolean
    content?: boolean
    content_en?: boolean
    published_at?: boolean
    authors?: boolean
    images?: boolean
    clusterId?: boolean
    cluster?: boolean | News$clusterArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    media_name?: boolean
    url?: boolean
    title?: boolean
    origin?: boolean
    content?: boolean
    content_en?: boolean
    published_at?: boolean
    authors?: boolean
    images?: boolean
    clusterId?: boolean
    cluster?: boolean | News$clusterArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id?: boolean
    media_name?: boolean
    url?: boolean
    title?: boolean
    origin?: boolean
    content?: boolean
    content_en?: boolean
    published_at?: boolean
    authors?: boolean
    images?: boolean
    clusterId?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "media_name" | "url" | "title" | "origin" | "content" | "content_en" | "published_at" | "authors" | "images" | "clusterId", ExtArgs["result"]["news"]>
  export type NewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cluster?: boolean | News$clusterArgs<ExtArgs>
  }
  export type NewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cluster?: boolean | News$clusterArgs<ExtArgs>
  }
  export type NewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cluster?: boolean | News$clusterArgs<ExtArgs>
  }

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {
      cluster: Prisma.$ClusterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      media_name: $Enums.MediaNameEnum | null
      url: string | null
      title: string | null
      origin: $Enums.OriginEnum | null
      content: string | null
      content_en: string | null
      published_at: number | null
      authors: string[]
      images: string[]
      clusterId: number | null
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `id`
     * const newsWithIdOnly = await prisma.news.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News and returns the data updated in the database.
     * @param {NewsUpdateManyAndReturnArgs} args - Arguments to update many News.
     * @example
     * // Update many News
     * const news = await prisma.news.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News and only return the `id`
     * const newsWithIdOnly = await prisma.news.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
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
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cluster<T extends News$clusterArgs<ExtArgs> = {}>(args?: Subset<T, News$clusterArgs<ExtArgs>>): Prisma__ClusterClient<$Result.GetResult<Prisma.$ClusterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the News model
   */
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'Int'>
    readonly media_name: FieldRef<"News", 'MediaNameEnum'>
    readonly url: FieldRef<"News", 'String'>
    readonly title: FieldRef<"News", 'String'>
    readonly origin: FieldRef<"News", 'OriginEnum'>
    readonly content: FieldRef<"News", 'String'>
    readonly content_en: FieldRef<"News", 'String'>
    readonly published_at: FieldRef<"News", 'Int'>
    readonly authors: FieldRef<"News", 'String[]'>
    readonly images: FieldRef<"News", 'String[]'>
    readonly clusterId: FieldRef<"News", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data?: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News updateManyAndReturn
   */
  export type NewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to delete.
     */
    limit?: number
  }

  /**
   * News.cluster
   */
  export type News$clusterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cluster
     */
    select?: ClusterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cluster
     */
    omit?: ClusterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClusterInclude<ExtArgs> | null
    where?: ClusterWhereInput
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
  }


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
    createdAt: number | null
    updatedAt: number | null
  }

  export type UserSumAggregateOutputType = {
    createdAt: number | null
    updatedAt: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    displayName: string | null
    avatarUrl: string | null
    isBlocked: boolean | null
    onboardingNeeded: boolean | null
    role: $Enums.Role | null
    createdAt: number | null
    updatedAt: number | null
    canSendNotification: boolean | null
    gameMode: boolean | null
    seeReportingMerits: boolean | null
    seeMisguidingTechniques: boolean | null
    seeReportingStyle: boolean | null
    seeReportingIntention: boolean | null
    removeSensationalHeadlines: boolean | null
    removeCopyPasteArticles: boolean | null
    politicalStance: $Enums.PoliticalStance | null
    identity: $Enums.Identity | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    displayName: string | null
    avatarUrl: string | null
    isBlocked: boolean | null
    onboardingNeeded: boolean | null
    role: $Enums.Role | null
    createdAt: number | null
    updatedAt: number | null
    canSendNotification: boolean | null
    gameMode: boolean | null
    seeReportingMerits: boolean | null
    seeMisguidingTechniques: boolean | null
    seeReportingStyle: boolean | null
    seeReportingIntention: boolean | null
    removeSensationalHeadlines: boolean | null
    removeCopyPasteArticles: boolean | null
    politicalStance: $Enums.PoliticalStance | null
    identity: $Enums.Identity | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    displayName: number
    avatarUrl: number
    isBlocked: number
    onboardingNeeded: number
    role: number
    createdAt: number
    updatedAt: number
    canSendNotification: number
    gameMode: number
    seeReportingMerits: number
    seeMisguidingTechniques: number
    seeReportingStyle: number
    seeReportingIntention: number
    removeSensationalHeadlines: number
    removeCopyPasteArticles: number
    topicsInterestedIn: number
    regionsInterestedIn: number
    politicalStance: number
    identity: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    createdAt?: true
    updatedAt?: true
  }

  export type UserSumAggregateInputType = {
    createdAt?: true
    updatedAt?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    displayName?: true
    avatarUrl?: true
    isBlocked?: true
    onboardingNeeded?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    canSendNotification?: true
    gameMode?: true
    seeReportingMerits?: true
    seeMisguidingTechniques?: true
    seeReportingStyle?: true
    seeReportingIntention?: true
    removeSensationalHeadlines?: true
    removeCopyPasteArticles?: true
    politicalStance?: true
    identity?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    displayName?: true
    avatarUrl?: true
    isBlocked?: true
    onboardingNeeded?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    canSendNotification?: true
    gameMode?: true
    seeReportingMerits?: true
    seeMisguidingTechniques?: true
    seeReportingStyle?: true
    seeReportingIntention?: true
    removeSensationalHeadlines?: true
    removeCopyPasteArticles?: true
    politicalStance?: true
    identity?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    displayName?: true
    avatarUrl?: true
    isBlocked?: true
    onboardingNeeded?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    canSendNotification?: true
    gameMode?: true
    seeReportingMerits?: true
    seeMisguidingTechniques?: true
    seeReportingStyle?: true
    seeReportingIntention?: true
    removeSensationalHeadlines?: true
    removeCopyPasteArticles?: true
    topicsInterestedIn?: true
    regionsInterestedIn?: true
    politicalStance?: true
    identity?: true
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
    displayName: string | null
    avatarUrl: string | null
    isBlocked: boolean
    onboardingNeeded: boolean
    role: $Enums.Role
    createdAt: number
    updatedAt: number
    canSendNotification: boolean
    gameMode: boolean
    seeReportingMerits: boolean
    seeMisguidingTechniques: boolean
    seeReportingStyle: boolean
    seeReportingIntention: boolean
    removeSensationalHeadlines: boolean
    removeCopyPasteArticles: boolean
    topicsInterestedIn: $Enums.InterestingTopic[]
    regionsInterestedIn: $Enums.InterestingRegionOrCountry[]
    politicalStance: $Enums.PoliticalStance | null
    identity: $Enums.Identity | null
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
    displayName?: boolean
    avatarUrl?: boolean
    isBlocked?: boolean
    onboardingNeeded?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    canSendNotification?: boolean
    gameMode?: boolean
    seeReportingMerits?: boolean
    seeMisguidingTechniques?: boolean
    seeReportingStyle?: boolean
    seeReportingIntention?: boolean
    removeSensationalHeadlines?: boolean
    removeCopyPasteArticles?: boolean
    topicsInterestedIn?: boolean
    regionsInterestedIn?: boolean
    politicalStance?: boolean
    identity?: boolean
    auth?: boolean | User$authArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    isBlocked?: boolean
    onboardingNeeded?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    canSendNotification?: boolean
    gameMode?: boolean
    seeReportingMerits?: boolean
    seeMisguidingTechniques?: boolean
    seeReportingStyle?: boolean
    seeReportingIntention?: boolean
    removeSensationalHeadlines?: boolean
    removeCopyPasteArticles?: boolean
    topicsInterestedIn?: boolean
    regionsInterestedIn?: boolean
    politicalStance?: boolean
    identity?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    isBlocked?: boolean
    onboardingNeeded?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    canSendNotification?: boolean
    gameMode?: boolean
    seeReportingMerits?: boolean
    seeMisguidingTechniques?: boolean
    seeReportingStyle?: boolean
    seeReportingIntention?: boolean
    removeSensationalHeadlines?: boolean
    removeCopyPasteArticles?: boolean
    topicsInterestedIn?: boolean
    regionsInterestedIn?: boolean
    politicalStance?: boolean
    identity?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    isBlocked?: boolean
    onboardingNeeded?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    canSendNotification?: boolean
    gameMode?: boolean
    seeReportingMerits?: boolean
    seeMisguidingTechniques?: boolean
    seeReportingStyle?: boolean
    seeReportingIntention?: boolean
    removeSensationalHeadlines?: boolean
    removeCopyPasteArticles?: boolean
    topicsInterestedIn?: boolean
    regionsInterestedIn?: boolean
    politicalStance?: boolean
    identity?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "displayName" | "avatarUrl" | "isBlocked" | "onboardingNeeded" | "role" | "createdAt" | "updatedAt" | "canSendNotification" | "gameMode" | "seeReportingMerits" | "seeMisguidingTechniques" | "seeReportingStyle" | "seeReportingIntention" | "removeSensationalHeadlines" | "removeCopyPasteArticles" | "topicsInterestedIn" | "regionsInterestedIn" | "politicalStance" | "identity", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | User$authArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      auth: Prisma.$UserAuthPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      displayName: string | null
      avatarUrl: string | null
      isBlocked: boolean
      onboardingNeeded: boolean
      role: $Enums.Role
      createdAt: number
      updatedAt: number
      canSendNotification: boolean
      gameMode: boolean
      seeReportingMerits: boolean
      seeMisguidingTechniques: boolean
      seeReportingStyle: boolean
      seeReportingIntention: boolean
      removeSensationalHeadlines: boolean
      removeCopyPasteArticles: boolean
      topicsInterestedIn: $Enums.InterestingTopic[]
      regionsInterestedIn: $Enums.InterestingRegionOrCountry[]
      politicalStance: $Enums.PoliticalStance | null
      identity: $Enums.Identity | null
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
    auth<T extends User$authArgs<ExtArgs> = {}>(args?: Subset<T, User$authArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly displayName: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly isBlocked: FieldRef<"User", 'Boolean'>
    readonly onboardingNeeded: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'Int'>
    readonly updatedAt: FieldRef<"User", 'Int'>
    readonly canSendNotification: FieldRef<"User", 'Boolean'>
    readonly gameMode: FieldRef<"User", 'Boolean'>
    readonly seeReportingMerits: FieldRef<"User", 'Boolean'>
    readonly seeMisguidingTechniques: FieldRef<"User", 'Boolean'>
    readonly seeReportingStyle: FieldRef<"User", 'Boolean'>
    readonly seeReportingIntention: FieldRef<"User", 'Boolean'>
    readonly removeSensationalHeadlines: FieldRef<"User", 'Boolean'>
    readonly removeCopyPasteArticles: FieldRef<"User", 'Boolean'>
    readonly topicsInterestedIn: FieldRef<"User", 'InterestingTopic[]'>
    readonly regionsInterestedIn: FieldRef<"User", 'InterestingRegionOrCountry[]'>
    readonly politicalStance: FieldRef<"User", 'PoliticalStance'>
    readonly identity: FieldRef<"User", 'Identity'>
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
   * User.auth
   */
  export type User$authArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    where?: UserAuthWhereInput
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
   * Model UserAuth
   */

  export type AggregateUserAuth = {
    _count: UserAuthCountAggregateOutputType | null
    _min: UserAuthMinAggregateOutputType | null
    _max: UserAuthMaxAggregateOutputType | null
  }

  export type UserAuthMinAggregateOutputType = {
    id: string | null
    userId: string | null
    authProvider: $Enums.AuthProvider | null
    email: string | null
    password: string | null
    providerId: string | null
    refreshToken: string | null
    verificationToken: string | null
    emailVerified: boolean | null
  }

  export type UserAuthMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    authProvider: $Enums.AuthProvider | null
    email: string | null
    password: string | null
    providerId: string | null
    refreshToken: string | null
    verificationToken: string | null
    emailVerified: boolean | null
  }

  export type UserAuthCountAggregateOutputType = {
    id: number
    userId: number
    authProvider: number
    email: number
    password: number
    providerId: number
    refreshToken: number
    verificationToken: number
    emailVerified: number
    _all: number
  }


  export type UserAuthMinAggregateInputType = {
    id?: true
    userId?: true
    authProvider?: true
    email?: true
    password?: true
    providerId?: true
    refreshToken?: true
    verificationToken?: true
    emailVerified?: true
  }

  export type UserAuthMaxAggregateInputType = {
    id?: true
    userId?: true
    authProvider?: true
    email?: true
    password?: true
    providerId?: true
    refreshToken?: true
    verificationToken?: true
    emailVerified?: true
  }

  export type UserAuthCountAggregateInputType = {
    id?: true
    userId?: true
    authProvider?: true
    email?: true
    password?: true
    providerId?: true
    refreshToken?: true
    verificationToken?: true
    emailVerified?: true
    _all?: true
  }

  export type UserAuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAuth to aggregate.
     */
    where?: UserAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuths to fetch.
     */
    orderBy?: UserAuthOrderByWithRelationInput | UserAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAuths
    **/
    _count?: true | UserAuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAuthMaxAggregateInputType
  }

  export type GetUserAuthAggregateType<T extends UserAuthAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAuth[P]>
      : GetScalarType<T[P], AggregateUserAuth[P]>
  }




  export type UserAuthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAuthWhereInput
    orderBy?: UserAuthOrderByWithAggregationInput | UserAuthOrderByWithAggregationInput[]
    by: UserAuthScalarFieldEnum[] | UserAuthScalarFieldEnum
    having?: UserAuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAuthCountAggregateInputType | true
    _min?: UserAuthMinAggregateInputType
    _max?: UserAuthMaxAggregateInputType
  }

  export type UserAuthGroupByOutputType = {
    id: string
    userId: string
    authProvider: $Enums.AuthProvider
    email: string | null
    password: string | null
    providerId: string | null
    refreshToken: string | null
    verificationToken: string | null
    emailVerified: boolean
    _count: UserAuthCountAggregateOutputType | null
    _min: UserAuthMinAggregateOutputType | null
    _max: UserAuthMaxAggregateOutputType | null
  }

  type GetUserAuthGroupByPayload<T extends UserAuthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAuthGroupByOutputType[P]>
            : GetScalarType<T[P], UserAuthGroupByOutputType[P]>
        }
      >
    >


  export type UserAuthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    authProvider?: boolean
    email?: boolean
    password?: boolean
    providerId?: boolean
    refreshToken?: boolean
    verificationToken?: boolean
    emailVerified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAuth"]>

  export type UserAuthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    authProvider?: boolean
    email?: boolean
    password?: boolean
    providerId?: boolean
    refreshToken?: boolean
    verificationToken?: boolean
    emailVerified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAuth"]>

  export type UserAuthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    authProvider?: boolean
    email?: boolean
    password?: boolean
    providerId?: boolean
    refreshToken?: boolean
    verificationToken?: boolean
    emailVerified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAuth"]>

  export type UserAuthSelectScalar = {
    id?: boolean
    userId?: boolean
    authProvider?: boolean
    email?: boolean
    password?: boolean
    providerId?: boolean
    refreshToken?: boolean
    verificationToken?: boolean
    emailVerified?: boolean
  }

  export type UserAuthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "authProvider" | "email" | "password" | "providerId" | "refreshToken" | "verificationToken" | "emailVerified", ExtArgs["result"]["userAuth"]>
  export type UserAuthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAuthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAuthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserAuthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAuth"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      authProvider: $Enums.AuthProvider
      email: string | null
      password: string | null
      providerId: string | null
      refreshToken: string | null
      verificationToken: string | null
      emailVerified: boolean
    }, ExtArgs["result"]["userAuth"]>
    composites: {}
  }

  type UserAuthGetPayload<S extends boolean | null | undefined | UserAuthDefaultArgs> = $Result.GetResult<Prisma.$UserAuthPayload, S>

  type UserAuthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAuthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAuthCountAggregateInputType | true
    }

  export interface UserAuthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAuth'], meta: { name: 'UserAuth' } }
    /**
     * Find zero or one UserAuth that matches the filter.
     * @param {UserAuthFindUniqueArgs} args - Arguments to find a UserAuth
     * @example
     * // Get one UserAuth
     * const userAuth = await prisma.userAuth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAuthFindUniqueArgs>(args: SelectSubset<T, UserAuthFindUniqueArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAuth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAuthFindUniqueOrThrowArgs} args - Arguments to find a UserAuth
     * @example
     * // Get one UserAuth
     * const userAuth = await prisma.userAuth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAuthFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAuthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAuth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthFindFirstArgs} args - Arguments to find a UserAuth
     * @example
     * // Get one UserAuth
     * const userAuth = await prisma.userAuth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAuthFindFirstArgs>(args?: SelectSubset<T, UserAuthFindFirstArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAuth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthFindFirstOrThrowArgs} args - Arguments to find a UserAuth
     * @example
     * // Get one UserAuth
     * const userAuth = await prisma.userAuth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAuthFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAuthFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAuths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAuths
     * const userAuths = await prisma.userAuth.findMany()
     * 
     * // Get first 10 UserAuths
     * const userAuths = await prisma.userAuth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAuthWithIdOnly = await prisma.userAuth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAuthFindManyArgs>(args?: SelectSubset<T, UserAuthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAuth.
     * @param {UserAuthCreateArgs} args - Arguments to create a UserAuth.
     * @example
     * // Create one UserAuth
     * const UserAuth = await prisma.userAuth.create({
     *   data: {
     *     // ... data to create a UserAuth
     *   }
     * })
     * 
     */
    create<T extends UserAuthCreateArgs>(args: SelectSubset<T, UserAuthCreateArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAuths.
     * @param {UserAuthCreateManyArgs} args - Arguments to create many UserAuths.
     * @example
     * // Create many UserAuths
     * const userAuth = await prisma.userAuth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAuthCreateManyArgs>(args?: SelectSubset<T, UserAuthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAuths and returns the data saved in the database.
     * @param {UserAuthCreateManyAndReturnArgs} args - Arguments to create many UserAuths.
     * @example
     * // Create many UserAuths
     * const userAuth = await prisma.userAuth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAuths and only return the `id`
     * const userAuthWithIdOnly = await prisma.userAuth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAuthCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAuthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAuth.
     * @param {UserAuthDeleteArgs} args - Arguments to delete one UserAuth.
     * @example
     * // Delete one UserAuth
     * const UserAuth = await prisma.userAuth.delete({
     *   where: {
     *     // ... filter to delete one UserAuth
     *   }
     * })
     * 
     */
    delete<T extends UserAuthDeleteArgs>(args: SelectSubset<T, UserAuthDeleteArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAuth.
     * @param {UserAuthUpdateArgs} args - Arguments to update one UserAuth.
     * @example
     * // Update one UserAuth
     * const userAuth = await prisma.userAuth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAuthUpdateArgs>(args: SelectSubset<T, UserAuthUpdateArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAuths.
     * @param {UserAuthDeleteManyArgs} args - Arguments to filter UserAuths to delete.
     * @example
     * // Delete a few UserAuths
     * const { count } = await prisma.userAuth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAuthDeleteManyArgs>(args?: SelectSubset<T, UserAuthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAuths
     * const userAuth = await prisma.userAuth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAuthUpdateManyArgs>(args: SelectSubset<T, UserAuthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAuths and returns the data updated in the database.
     * @param {UserAuthUpdateManyAndReturnArgs} args - Arguments to update many UserAuths.
     * @example
     * // Update many UserAuths
     * const userAuth = await prisma.userAuth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAuths and only return the `id`
     * const userAuthWithIdOnly = await prisma.userAuth.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserAuthUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAuthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAuth.
     * @param {UserAuthUpsertArgs} args - Arguments to update or create a UserAuth.
     * @example
     * // Update or create a UserAuth
     * const userAuth = await prisma.userAuth.upsert({
     *   create: {
     *     // ... data to create a UserAuth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAuth we want to update
     *   }
     * })
     */
    upsert<T extends UserAuthUpsertArgs>(args: SelectSubset<T, UserAuthUpsertArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthCountArgs} args - Arguments to filter UserAuths to count.
     * @example
     * // Count the number of UserAuths
     * const count = await prisma.userAuth.count({
     *   where: {
     *     // ... the filter for the UserAuths we want to count
     *   }
     * })
    **/
    count<T extends UserAuthCountArgs>(
      args?: Subset<T, UserAuthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAuthAggregateArgs>(args: Subset<T, UserAuthAggregateArgs>): Prisma.PrismaPromise<GetUserAuthAggregateType<T>>

    /**
     * Group by UserAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthGroupByArgs} args - Group by arguments.
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
      T extends UserAuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAuthGroupByArgs['orderBy'] }
        : { orderBy?: UserAuthGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAuth model
   */
  readonly fields: UserAuthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAuth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAuthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserAuth model
   */
  interface UserAuthFieldRefs {
    readonly id: FieldRef<"UserAuth", 'String'>
    readonly userId: FieldRef<"UserAuth", 'String'>
    readonly authProvider: FieldRef<"UserAuth", 'AuthProvider'>
    readonly email: FieldRef<"UserAuth", 'String'>
    readonly password: FieldRef<"UserAuth", 'String'>
    readonly providerId: FieldRef<"UserAuth", 'String'>
    readonly refreshToken: FieldRef<"UserAuth", 'String'>
    readonly verificationToken: FieldRef<"UserAuth", 'String'>
    readonly emailVerified: FieldRef<"UserAuth", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserAuth findUnique
   */
  export type UserAuthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuth to fetch.
     */
    where: UserAuthWhereUniqueInput
  }

  /**
   * UserAuth findUniqueOrThrow
   */
  export type UserAuthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuth to fetch.
     */
    where: UserAuthWhereUniqueInput
  }

  /**
   * UserAuth findFirst
   */
  export type UserAuthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuth to fetch.
     */
    where?: UserAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuths to fetch.
     */
    orderBy?: UserAuthOrderByWithRelationInput | UserAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAuths.
     */
    cursor?: UserAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAuths.
     */
    distinct?: UserAuthScalarFieldEnum | UserAuthScalarFieldEnum[]
  }

  /**
   * UserAuth findFirstOrThrow
   */
  export type UserAuthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuth to fetch.
     */
    where?: UserAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuths to fetch.
     */
    orderBy?: UserAuthOrderByWithRelationInput | UserAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAuths.
     */
    cursor?: UserAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAuths.
     */
    distinct?: UserAuthScalarFieldEnum | UserAuthScalarFieldEnum[]
  }

  /**
   * UserAuth findMany
   */
  export type UserAuthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuths to fetch.
     */
    where?: UserAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuths to fetch.
     */
    orderBy?: UserAuthOrderByWithRelationInput | UserAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAuths.
     */
    cursor?: UserAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuths.
     */
    skip?: number
    distinct?: UserAuthScalarFieldEnum | UserAuthScalarFieldEnum[]
  }

  /**
   * UserAuth create
   */
  export type UserAuthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAuth.
     */
    data: XOR<UserAuthCreateInput, UserAuthUncheckedCreateInput>
  }

  /**
   * UserAuth createMany
   */
  export type UserAuthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAuths.
     */
    data: UserAuthCreateManyInput | UserAuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAuth createManyAndReturn
   */
  export type UserAuthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * The data used to create many UserAuths.
     */
    data: UserAuthCreateManyInput | UserAuthCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAuth update
   */
  export type UserAuthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAuth.
     */
    data: XOR<UserAuthUpdateInput, UserAuthUncheckedUpdateInput>
    /**
     * Choose, which UserAuth to update.
     */
    where: UserAuthWhereUniqueInput
  }

  /**
   * UserAuth updateMany
   */
  export type UserAuthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAuths.
     */
    data: XOR<UserAuthUpdateManyMutationInput, UserAuthUncheckedUpdateManyInput>
    /**
     * Filter which UserAuths to update
     */
    where?: UserAuthWhereInput
    /**
     * Limit how many UserAuths to update.
     */
    limit?: number
  }

  /**
   * UserAuth updateManyAndReturn
   */
  export type UserAuthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * The data used to update UserAuths.
     */
    data: XOR<UserAuthUpdateManyMutationInput, UserAuthUncheckedUpdateManyInput>
    /**
     * Filter which UserAuths to update
     */
    where?: UserAuthWhereInput
    /**
     * Limit how many UserAuths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAuth upsert
   */
  export type UserAuthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAuth to update in case it exists.
     */
    where: UserAuthWhereUniqueInput
    /**
     * In case the UserAuth found by the `where` argument doesn't exist, create a new UserAuth with this data.
     */
    create: XOR<UserAuthCreateInput, UserAuthUncheckedCreateInput>
    /**
     * In case the UserAuth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAuthUpdateInput, UserAuthUncheckedUpdateInput>
  }

  /**
   * UserAuth delete
   */
  export type UserAuthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter which UserAuth to delete.
     */
    where: UserAuthWhereUniqueInput
  }

  /**
   * UserAuth deleteMany
   */
  export type UserAuthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAuths to delete
     */
    where?: UserAuthWhereInput
    /**
     * Limit how many UserAuths to delete.
     */
    limit?: number
  }

  /**
   * UserAuth without action
   */
  export type UserAuthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
  }


  /**
   * Model ScrapeFailure
   */

  export type AggregateScrapeFailure = {
    _count: ScrapeFailureCountAggregateOutputType | null
    _avg: ScrapeFailureAvgAggregateOutputType | null
    _sum: ScrapeFailureSumAggregateOutputType | null
    _min: ScrapeFailureMinAggregateOutputType | null
    _max: ScrapeFailureMaxAggregateOutputType | null
  }

  export type ScrapeFailureAvgAggregateOutputType = {
    id: number | null
    timestamp: number | null
  }

  export type ScrapeFailureSumAggregateOutputType = {
    id: number | null
    timestamp: number | null
  }

  export type ScrapeFailureMinAggregateOutputType = {
    id: number | null
    failure_type: $Enums.ErrorTypeEnum | null
    media_name: string | null
    url: string | null
    reason: string | null
    timestamp: number | null
    resolved: boolean | null
  }

  export type ScrapeFailureMaxAggregateOutputType = {
    id: number | null
    failure_type: $Enums.ErrorTypeEnum | null
    media_name: string | null
    url: string | null
    reason: string | null
    timestamp: number | null
    resolved: boolean | null
  }

  export type ScrapeFailureCountAggregateOutputType = {
    id: number
    failure_type: number
    media_name: number
    url: number
    reason: number
    timestamp: number
    resolved: number
    _all: number
  }


  export type ScrapeFailureAvgAggregateInputType = {
    id?: true
    timestamp?: true
  }

  export type ScrapeFailureSumAggregateInputType = {
    id?: true
    timestamp?: true
  }

  export type ScrapeFailureMinAggregateInputType = {
    id?: true
    failure_type?: true
    media_name?: true
    url?: true
    reason?: true
    timestamp?: true
    resolved?: true
  }

  export type ScrapeFailureMaxAggregateInputType = {
    id?: true
    failure_type?: true
    media_name?: true
    url?: true
    reason?: true
    timestamp?: true
    resolved?: true
  }

  export type ScrapeFailureCountAggregateInputType = {
    id?: true
    failure_type?: true
    media_name?: true
    url?: true
    reason?: true
    timestamp?: true
    resolved?: true
    _all?: true
  }

  export type ScrapeFailureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapeFailure to aggregate.
     */
    where?: ScrapeFailureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeFailures to fetch.
     */
    orderBy?: ScrapeFailureOrderByWithRelationInput | ScrapeFailureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScrapeFailureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeFailures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeFailures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScrapeFailures
    **/
    _count?: true | ScrapeFailureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScrapeFailureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScrapeFailureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScrapeFailureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScrapeFailureMaxAggregateInputType
  }

  export type GetScrapeFailureAggregateType<T extends ScrapeFailureAggregateArgs> = {
        [P in keyof T & keyof AggregateScrapeFailure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScrapeFailure[P]>
      : GetScalarType<T[P], AggregateScrapeFailure[P]>
  }




  export type ScrapeFailureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScrapeFailureWhereInput
    orderBy?: ScrapeFailureOrderByWithAggregationInput | ScrapeFailureOrderByWithAggregationInput[]
    by: ScrapeFailureScalarFieldEnum[] | ScrapeFailureScalarFieldEnum
    having?: ScrapeFailureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScrapeFailureCountAggregateInputType | true
    _avg?: ScrapeFailureAvgAggregateInputType
    _sum?: ScrapeFailureSumAggregateInputType
    _min?: ScrapeFailureMinAggregateInputType
    _max?: ScrapeFailureMaxAggregateInputType
  }

  export type ScrapeFailureGroupByOutputType = {
    id: number
    failure_type: $Enums.ErrorTypeEnum
    media_name: string | null
    url: string | null
    reason: string | null
    timestamp: number
    resolved: boolean
    _count: ScrapeFailureCountAggregateOutputType | null
    _avg: ScrapeFailureAvgAggregateOutputType | null
    _sum: ScrapeFailureSumAggregateOutputType | null
    _min: ScrapeFailureMinAggregateOutputType | null
    _max: ScrapeFailureMaxAggregateOutputType | null
  }

  type GetScrapeFailureGroupByPayload<T extends ScrapeFailureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScrapeFailureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScrapeFailureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScrapeFailureGroupByOutputType[P]>
            : GetScalarType<T[P], ScrapeFailureGroupByOutputType[P]>
        }
      >
    >


  export type ScrapeFailureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    failure_type?: boolean
    media_name?: boolean
    url?: boolean
    reason?: boolean
    timestamp?: boolean
    resolved?: boolean
  }, ExtArgs["result"]["scrapeFailure"]>

  export type ScrapeFailureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    failure_type?: boolean
    media_name?: boolean
    url?: boolean
    reason?: boolean
    timestamp?: boolean
    resolved?: boolean
  }, ExtArgs["result"]["scrapeFailure"]>

  export type ScrapeFailureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    failure_type?: boolean
    media_name?: boolean
    url?: boolean
    reason?: boolean
    timestamp?: boolean
    resolved?: boolean
  }, ExtArgs["result"]["scrapeFailure"]>

  export type ScrapeFailureSelectScalar = {
    id?: boolean
    failure_type?: boolean
    media_name?: boolean
    url?: boolean
    reason?: boolean
    timestamp?: boolean
    resolved?: boolean
  }

  export type ScrapeFailureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "failure_type" | "media_name" | "url" | "reason" | "timestamp" | "resolved", ExtArgs["result"]["scrapeFailure"]>

  export type $ScrapeFailurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScrapeFailure"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      failure_type: $Enums.ErrorTypeEnum
      media_name: string | null
      url: string | null
      reason: string | null
      timestamp: number
      resolved: boolean
    }, ExtArgs["result"]["scrapeFailure"]>
    composites: {}
  }

  type ScrapeFailureGetPayload<S extends boolean | null | undefined | ScrapeFailureDefaultArgs> = $Result.GetResult<Prisma.$ScrapeFailurePayload, S>

  type ScrapeFailureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScrapeFailureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScrapeFailureCountAggregateInputType | true
    }

  export interface ScrapeFailureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScrapeFailure'], meta: { name: 'ScrapeFailure' } }
    /**
     * Find zero or one ScrapeFailure that matches the filter.
     * @param {ScrapeFailureFindUniqueArgs} args - Arguments to find a ScrapeFailure
     * @example
     * // Get one ScrapeFailure
     * const scrapeFailure = await prisma.scrapeFailure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScrapeFailureFindUniqueArgs>(args: SelectSubset<T, ScrapeFailureFindUniqueArgs<ExtArgs>>): Prisma__ScrapeFailureClient<$Result.GetResult<Prisma.$ScrapeFailurePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScrapeFailure that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScrapeFailureFindUniqueOrThrowArgs} args - Arguments to find a ScrapeFailure
     * @example
     * // Get one ScrapeFailure
     * const scrapeFailure = await prisma.scrapeFailure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScrapeFailureFindUniqueOrThrowArgs>(args: SelectSubset<T, ScrapeFailureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScrapeFailureClient<$Result.GetResult<Prisma.$ScrapeFailurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScrapeFailure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeFailureFindFirstArgs} args - Arguments to find a ScrapeFailure
     * @example
     * // Get one ScrapeFailure
     * const scrapeFailure = await prisma.scrapeFailure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScrapeFailureFindFirstArgs>(args?: SelectSubset<T, ScrapeFailureFindFirstArgs<ExtArgs>>): Prisma__ScrapeFailureClient<$Result.GetResult<Prisma.$ScrapeFailurePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScrapeFailure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeFailureFindFirstOrThrowArgs} args - Arguments to find a ScrapeFailure
     * @example
     * // Get one ScrapeFailure
     * const scrapeFailure = await prisma.scrapeFailure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScrapeFailureFindFirstOrThrowArgs>(args?: SelectSubset<T, ScrapeFailureFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScrapeFailureClient<$Result.GetResult<Prisma.$ScrapeFailurePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScrapeFailures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeFailureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScrapeFailures
     * const scrapeFailures = await prisma.scrapeFailure.findMany()
     * 
     * // Get first 10 ScrapeFailures
     * const scrapeFailures = await prisma.scrapeFailure.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scrapeFailureWithIdOnly = await prisma.scrapeFailure.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScrapeFailureFindManyArgs>(args?: SelectSubset<T, ScrapeFailureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeFailurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScrapeFailure.
     * @param {ScrapeFailureCreateArgs} args - Arguments to create a ScrapeFailure.
     * @example
     * // Create one ScrapeFailure
     * const ScrapeFailure = await prisma.scrapeFailure.create({
     *   data: {
     *     // ... data to create a ScrapeFailure
     *   }
     * })
     * 
     */
    create<T extends ScrapeFailureCreateArgs>(args: SelectSubset<T, ScrapeFailureCreateArgs<ExtArgs>>): Prisma__ScrapeFailureClient<$Result.GetResult<Prisma.$ScrapeFailurePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScrapeFailures.
     * @param {ScrapeFailureCreateManyArgs} args - Arguments to create many ScrapeFailures.
     * @example
     * // Create many ScrapeFailures
     * const scrapeFailure = await prisma.scrapeFailure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScrapeFailureCreateManyArgs>(args?: SelectSubset<T, ScrapeFailureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScrapeFailures and returns the data saved in the database.
     * @param {ScrapeFailureCreateManyAndReturnArgs} args - Arguments to create many ScrapeFailures.
     * @example
     * // Create many ScrapeFailures
     * const scrapeFailure = await prisma.scrapeFailure.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScrapeFailures and only return the `id`
     * const scrapeFailureWithIdOnly = await prisma.scrapeFailure.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScrapeFailureCreateManyAndReturnArgs>(args?: SelectSubset<T, ScrapeFailureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeFailurePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScrapeFailure.
     * @param {ScrapeFailureDeleteArgs} args - Arguments to delete one ScrapeFailure.
     * @example
     * // Delete one ScrapeFailure
     * const ScrapeFailure = await prisma.scrapeFailure.delete({
     *   where: {
     *     // ... filter to delete one ScrapeFailure
     *   }
     * })
     * 
     */
    delete<T extends ScrapeFailureDeleteArgs>(args: SelectSubset<T, ScrapeFailureDeleteArgs<ExtArgs>>): Prisma__ScrapeFailureClient<$Result.GetResult<Prisma.$ScrapeFailurePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScrapeFailure.
     * @param {ScrapeFailureUpdateArgs} args - Arguments to update one ScrapeFailure.
     * @example
     * // Update one ScrapeFailure
     * const scrapeFailure = await prisma.scrapeFailure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScrapeFailureUpdateArgs>(args: SelectSubset<T, ScrapeFailureUpdateArgs<ExtArgs>>): Prisma__ScrapeFailureClient<$Result.GetResult<Prisma.$ScrapeFailurePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScrapeFailures.
     * @param {ScrapeFailureDeleteManyArgs} args - Arguments to filter ScrapeFailures to delete.
     * @example
     * // Delete a few ScrapeFailures
     * const { count } = await prisma.scrapeFailure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScrapeFailureDeleteManyArgs>(args?: SelectSubset<T, ScrapeFailureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScrapeFailures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeFailureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScrapeFailures
     * const scrapeFailure = await prisma.scrapeFailure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScrapeFailureUpdateManyArgs>(args: SelectSubset<T, ScrapeFailureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScrapeFailures and returns the data updated in the database.
     * @param {ScrapeFailureUpdateManyAndReturnArgs} args - Arguments to update many ScrapeFailures.
     * @example
     * // Update many ScrapeFailures
     * const scrapeFailure = await prisma.scrapeFailure.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScrapeFailures and only return the `id`
     * const scrapeFailureWithIdOnly = await prisma.scrapeFailure.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScrapeFailureUpdateManyAndReturnArgs>(args: SelectSubset<T, ScrapeFailureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeFailurePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScrapeFailure.
     * @param {ScrapeFailureUpsertArgs} args - Arguments to update or create a ScrapeFailure.
     * @example
     * // Update or create a ScrapeFailure
     * const scrapeFailure = await prisma.scrapeFailure.upsert({
     *   create: {
     *     // ... data to create a ScrapeFailure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScrapeFailure we want to update
     *   }
     * })
     */
    upsert<T extends ScrapeFailureUpsertArgs>(args: SelectSubset<T, ScrapeFailureUpsertArgs<ExtArgs>>): Prisma__ScrapeFailureClient<$Result.GetResult<Prisma.$ScrapeFailurePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScrapeFailures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeFailureCountArgs} args - Arguments to filter ScrapeFailures to count.
     * @example
     * // Count the number of ScrapeFailures
     * const count = await prisma.scrapeFailure.count({
     *   where: {
     *     // ... the filter for the ScrapeFailures we want to count
     *   }
     * })
    **/
    count<T extends ScrapeFailureCountArgs>(
      args?: Subset<T, ScrapeFailureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScrapeFailureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScrapeFailure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeFailureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScrapeFailureAggregateArgs>(args: Subset<T, ScrapeFailureAggregateArgs>): Prisma.PrismaPromise<GetScrapeFailureAggregateType<T>>

    /**
     * Group by ScrapeFailure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeFailureGroupByArgs} args - Group by arguments.
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
      T extends ScrapeFailureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScrapeFailureGroupByArgs['orderBy'] }
        : { orderBy?: ScrapeFailureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScrapeFailureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScrapeFailureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScrapeFailure model
   */
  readonly fields: ScrapeFailureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScrapeFailure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScrapeFailureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ScrapeFailure model
   */
  interface ScrapeFailureFieldRefs {
    readonly id: FieldRef<"ScrapeFailure", 'Int'>
    readonly failure_type: FieldRef<"ScrapeFailure", 'ErrorTypeEnum'>
    readonly media_name: FieldRef<"ScrapeFailure", 'String'>
    readonly url: FieldRef<"ScrapeFailure", 'String'>
    readonly reason: FieldRef<"ScrapeFailure", 'String'>
    readonly timestamp: FieldRef<"ScrapeFailure", 'Int'>
    readonly resolved: FieldRef<"ScrapeFailure", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ScrapeFailure findUnique
   */
  export type ScrapeFailureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeFailure
     */
    select?: ScrapeFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeFailure
     */
    omit?: ScrapeFailureOmit<ExtArgs> | null
    /**
     * Filter, which ScrapeFailure to fetch.
     */
    where: ScrapeFailureWhereUniqueInput
  }

  /**
   * ScrapeFailure findUniqueOrThrow
   */
  export type ScrapeFailureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeFailure
     */
    select?: ScrapeFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeFailure
     */
    omit?: ScrapeFailureOmit<ExtArgs> | null
    /**
     * Filter, which ScrapeFailure to fetch.
     */
    where: ScrapeFailureWhereUniqueInput
  }

  /**
   * ScrapeFailure findFirst
   */
  export type ScrapeFailureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeFailure
     */
    select?: ScrapeFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeFailure
     */
    omit?: ScrapeFailureOmit<ExtArgs> | null
    /**
     * Filter, which ScrapeFailure to fetch.
     */
    where?: ScrapeFailureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeFailures to fetch.
     */
    orderBy?: ScrapeFailureOrderByWithRelationInput | ScrapeFailureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapeFailures.
     */
    cursor?: ScrapeFailureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeFailures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeFailures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapeFailures.
     */
    distinct?: ScrapeFailureScalarFieldEnum | ScrapeFailureScalarFieldEnum[]
  }

  /**
   * ScrapeFailure findFirstOrThrow
   */
  export type ScrapeFailureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeFailure
     */
    select?: ScrapeFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeFailure
     */
    omit?: ScrapeFailureOmit<ExtArgs> | null
    /**
     * Filter, which ScrapeFailure to fetch.
     */
    where?: ScrapeFailureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeFailures to fetch.
     */
    orderBy?: ScrapeFailureOrderByWithRelationInput | ScrapeFailureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapeFailures.
     */
    cursor?: ScrapeFailureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeFailures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeFailures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapeFailures.
     */
    distinct?: ScrapeFailureScalarFieldEnum | ScrapeFailureScalarFieldEnum[]
  }

  /**
   * ScrapeFailure findMany
   */
  export type ScrapeFailureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeFailure
     */
    select?: ScrapeFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeFailure
     */
    omit?: ScrapeFailureOmit<ExtArgs> | null
    /**
     * Filter, which ScrapeFailures to fetch.
     */
    where?: ScrapeFailureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeFailures to fetch.
     */
    orderBy?: ScrapeFailureOrderByWithRelationInput | ScrapeFailureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScrapeFailures.
     */
    cursor?: ScrapeFailureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeFailures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeFailures.
     */
    skip?: number
    distinct?: ScrapeFailureScalarFieldEnum | ScrapeFailureScalarFieldEnum[]
  }

  /**
   * ScrapeFailure create
   */
  export type ScrapeFailureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeFailure
     */
    select?: ScrapeFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeFailure
     */
    omit?: ScrapeFailureOmit<ExtArgs> | null
    /**
     * The data needed to create a ScrapeFailure.
     */
    data: XOR<ScrapeFailureCreateInput, ScrapeFailureUncheckedCreateInput>
  }

  /**
   * ScrapeFailure createMany
   */
  export type ScrapeFailureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScrapeFailures.
     */
    data: ScrapeFailureCreateManyInput | ScrapeFailureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScrapeFailure createManyAndReturn
   */
  export type ScrapeFailureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeFailure
     */
    select?: ScrapeFailureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeFailure
     */
    omit?: ScrapeFailureOmit<ExtArgs> | null
    /**
     * The data used to create many ScrapeFailures.
     */
    data: ScrapeFailureCreateManyInput | ScrapeFailureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScrapeFailure update
   */
  export type ScrapeFailureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeFailure
     */
    select?: ScrapeFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeFailure
     */
    omit?: ScrapeFailureOmit<ExtArgs> | null
    /**
     * The data needed to update a ScrapeFailure.
     */
    data: XOR<ScrapeFailureUpdateInput, ScrapeFailureUncheckedUpdateInput>
    /**
     * Choose, which ScrapeFailure to update.
     */
    where: ScrapeFailureWhereUniqueInput
  }

  /**
   * ScrapeFailure updateMany
   */
  export type ScrapeFailureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScrapeFailures.
     */
    data: XOR<ScrapeFailureUpdateManyMutationInput, ScrapeFailureUncheckedUpdateManyInput>
    /**
     * Filter which ScrapeFailures to update
     */
    where?: ScrapeFailureWhereInput
    /**
     * Limit how many ScrapeFailures to update.
     */
    limit?: number
  }

  /**
   * ScrapeFailure updateManyAndReturn
   */
  export type ScrapeFailureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeFailure
     */
    select?: ScrapeFailureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeFailure
     */
    omit?: ScrapeFailureOmit<ExtArgs> | null
    /**
     * The data used to update ScrapeFailures.
     */
    data: XOR<ScrapeFailureUpdateManyMutationInput, ScrapeFailureUncheckedUpdateManyInput>
    /**
     * Filter which ScrapeFailures to update
     */
    where?: ScrapeFailureWhereInput
    /**
     * Limit how many ScrapeFailures to update.
     */
    limit?: number
  }

  /**
   * ScrapeFailure upsert
   */
  export type ScrapeFailureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeFailure
     */
    select?: ScrapeFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeFailure
     */
    omit?: ScrapeFailureOmit<ExtArgs> | null
    /**
     * The filter to search for the ScrapeFailure to update in case it exists.
     */
    where: ScrapeFailureWhereUniqueInput
    /**
     * In case the ScrapeFailure found by the `where` argument doesn't exist, create a new ScrapeFailure with this data.
     */
    create: XOR<ScrapeFailureCreateInput, ScrapeFailureUncheckedCreateInput>
    /**
     * In case the ScrapeFailure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScrapeFailureUpdateInput, ScrapeFailureUncheckedUpdateInput>
  }

  /**
   * ScrapeFailure delete
   */
  export type ScrapeFailureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeFailure
     */
    select?: ScrapeFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeFailure
     */
    omit?: ScrapeFailureOmit<ExtArgs> | null
    /**
     * Filter which ScrapeFailure to delete.
     */
    where: ScrapeFailureWhereUniqueInput
  }

  /**
   * ScrapeFailure deleteMany
   */
  export type ScrapeFailureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapeFailures to delete
     */
    where?: ScrapeFailureWhereInput
    /**
     * Limit how many ScrapeFailures to delete.
     */
    limit?: number
  }

  /**
   * ScrapeFailure without action
   */
  export type ScrapeFailureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeFailure
     */
    select?: ScrapeFailureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeFailure
     */
    omit?: ScrapeFailureOmit<ExtArgs> | null
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


  export const ClusterScalarFieldEnum: {
    id: 'id',
    cluster_name: 'cluster_name',
    cluster_summary: 'cluster_summary',
    processed_at: 'processed_at'
  };

  export type ClusterScalarFieldEnum = (typeof ClusterScalarFieldEnum)[keyof typeof ClusterScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    media_name: 'media_name',
    url: 'url',
    title: 'title',
    origin: 'origin',
    content: 'content',
    content_en: 'content_en',
    published_at: 'published_at',
    authors: 'authors',
    images: 'images',
    clusterId: 'clusterId'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    displayName: 'displayName',
    avatarUrl: 'avatarUrl',
    isBlocked: 'isBlocked',
    onboardingNeeded: 'onboardingNeeded',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    canSendNotification: 'canSendNotification',
    gameMode: 'gameMode',
    seeReportingMerits: 'seeReportingMerits',
    seeMisguidingTechniques: 'seeMisguidingTechniques',
    seeReportingStyle: 'seeReportingStyle',
    seeReportingIntention: 'seeReportingIntention',
    removeSensationalHeadlines: 'removeSensationalHeadlines',
    removeCopyPasteArticles: 'removeCopyPasteArticles',
    topicsInterestedIn: 'topicsInterestedIn',
    regionsInterestedIn: 'regionsInterestedIn',
    politicalStance: 'politicalStance',
    identity: 'identity'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserAuthScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    authProvider: 'authProvider',
    email: 'email',
    password: 'password',
    providerId: 'providerId',
    refreshToken: 'refreshToken',
    verificationToken: 'verificationToken',
    emailVerified: 'emailVerified'
  };

  export type UserAuthScalarFieldEnum = (typeof UserAuthScalarFieldEnum)[keyof typeof UserAuthScalarFieldEnum]


  export const ScrapeFailureScalarFieldEnum: {
    id: 'id',
    failure_type: 'failure_type',
    media_name: 'media_name',
    url: 'url',
    reason: 'reason',
    timestamp: 'timestamp',
    resolved: 'resolved'
  };

  export type ScrapeFailureScalarFieldEnum = (typeof ScrapeFailureScalarFieldEnum)[keyof typeof ScrapeFailureScalarFieldEnum]


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
   * Reference to a field of type 'MediaNameEnum'
   */
  export type EnumMediaNameEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaNameEnum'>
    


  /**
   * Reference to a field of type 'MediaNameEnum[]'
   */
  export type ListEnumMediaNameEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaNameEnum[]'>
    


  /**
   * Reference to a field of type 'OriginEnum'
   */
  export type EnumOriginEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OriginEnum'>
    


  /**
   * Reference to a field of type 'OriginEnum[]'
   */
  export type ListEnumOriginEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OriginEnum[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'InterestingTopic[]'
   */
  export type ListEnumInterestingTopicFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterestingTopic[]'>
    


  /**
   * Reference to a field of type 'InterestingTopic'
   */
  export type EnumInterestingTopicFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterestingTopic'>
    


  /**
   * Reference to a field of type 'InterestingRegionOrCountry[]'
   */
  export type ListEnumInterestingRegionOrCountryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterestingRegionOrCountry[]'>
    


  /**
   * Reference to a field of type 'InterestingRegionOrCountry'
   */
  export type EnumInterestingRegionOrCountryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterestingRegionOrCountry'>
    


  /**
   * Reference to a field of type 'PoliticalStance'
   */
  export type EnumPoliticalStanceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PoliticalStance'>
    


  /**
   * Reference to a field of type 'PoliticalStance[]'
   */
  export type ListEnumPoliticalStanceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PoliticalStance[]'>
    


  /**
   * Reference to a field of type 'Identity'
   */
  export type EnumIdentityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Identity'>
    


  /**
   * Reference to a field of type 'Identity[]'
   */
  export type ListEnumIdentityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Identity[]'>
    


  /**
   * Reference to a field of type 'AuthProvider'
   */
  export type EnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider'>
    


  /**
   * Reference to a field of type 'AuthProvider[]'
   */
  export type ListEnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider[]'>
    


  /**
   * Reference to a field of type 'ErrorTypeEnum'
   */
  export type EnumErrorTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ErrorTypeEnum'>
    


  /**
   * Reference to a field of type 'ErrorTypeEnum[]'
   */
  export type ListEnumErrorTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ErrorTypeEnum[]'>
    


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


  export type ClusterWhereInput = {
    AND?: ClusterWhereInput | ClusterWhereInput[]
    OR?: ClusterWhereInput[]
    NOT?: ClusterWhereInput | ClusterWhereInput[]
    id?: IntFilter<"Cluster"> | number
    cluster_name?: StringNullableFilter<"Cluster"> | string | null
    cluster_summary?: StringNullableFilter<"Cluster"> | string | null
    processed_at?: IntNullableFilter<"Cluster"> | number | null
    news?: NewsListRelationFilter
  }

  export type ClusterOrderByWithRelationInput = {
    id?: SortOrder
    cluster_name?: SortOrderInput | SortOrder
    cluster_summary?: SortOrderInput | SortOrder
    processed_at?: SortOrderInput | SortOrder
    news?: NewsOrderByRelationAggregateInput
  }

  export type ClusterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cluster_name?: string
    cluster_summary?: string
    AND?: ClusterWhereInput | ClusterWhereInput[]
    OR?: ClusterWhereInput[]
    NOT?: ClusterWhereInput | ClusterWhereInput[]
    processed_at?: IntNullableFilter<"Cluster"> | number | null
    news?: NewsListRelationFilter
  }, "id" | "cluster_name" | "cluster_summary">

  export type ClusterOrderByWithAggregationInput = {
    id?: SortOrder
    cluster_name?: SortOrderInput | SortOrder
    cluster_summary?: SortOrderInput | SortOrder
    processed_at?: SortOrderInput | SortOrder
    _count?: ClusterCountOrderByAggregateInput
    _avg?: ClusterAvgOrderByAggregateInput
    _max?: ClusterMaxOrderByAggregateInput
    _min?: ClusterMinOrderByAggregateInput
    _sum?: ClusterSumOrderByAggregateInput
  }

  export type ClusterScalarWhereWithAggregatesInput = {
    AND?: ClusterScalarWhereWithAggregatesInput | ClusterScalarWhereWithAggregatesInput[]
    OR?: ClusterScalarWhereWithAggregatesInput[]
    NOT?: ClusterScalarWhereWithAggregatesInput | ClusterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cluster"> | number
    cluster_name?: StringNullableWithAggregatesFilter<"Cluster"> | string | null
    cluster_summary?: StringNullableWithAggregatesFilter<"Cluster"> | string | null
    processed_at?: IntNullableWithAggregatesFilter<"Cluster"> | number | null
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: IntFilter<"News"> | number
    media_name?: EnumMediaNameEnumNullableFilter<"News"> | $Enums.MediaNameEnum | null
    url?: StringNullableFilter<"News"> | string | null
    title?: StringNullableFilter<"News"> | string | null
    origin?: EnumOriginEnumNullableFilter<"News"> | $Enums.OriginEnum | null
    content?: StringNullableFilter<"News"> | string | null
    content_en?: StringNullableFilter<"News"> | string | null
    published_at?: IntNullableFilter<"News"> | number | null
    authors?: StringNullableListFilter<"News">
    images?: StringNullableListFilter<"News">
    clusterId?: IntNullableFilter<"News"> | number | null
    cluster?: XOR<ClusterNullableScalarRelationFilter, ClusterWhereInput> | null
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    media_name?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    origin?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    content_en?: SortOrderInput | SortOrder
    published_at?: SortOrderInput | SortOrder
    authors?: SortOrder
    images?: SortOrder
    clusterId?: SortOrderInput | SortOrder
    cluster?: ClusterOrderByWithRelationInput
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url?: string
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    media_name?: EnumMediaNameEnumNullableFilter<"News"> | $Enums.MediaNameEnum | null
    title?: StringNullableFilter<"News"> | string | null
    origin?: EnumOriginEnumNullableFilter<"News"> | $Enums.OriginEnum | null
    content?: StringNullableFilter<"News"> | string | null
    content_en?: StringNullableFilter<"News"> | string | null
    published_at?: IntNullableFilter<"News"> | number | null
    authors?: StringNullableListFilter<"News">
    images?: StringNullableListFilter<"News">
    clusterId?: IntNullableFilter<"News"> | number | null
    cluster?: XOR<ClusterNullableScalarRelationFilter, ClusterWhereInput> | null
  }, "id" | "url">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    media_name?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    origin?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    content_en?: SortOrderInput | SortOrder
    published_at?: SortOrderInput | SortOrder
    authors?: SortOrder
    images?: SortOrder
    clusterId?: SortOrderInput | SortOrder
    _count?: NewsCountOrderByAggregateInput
    _avg?: NewsAvgOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
    _sum?: NewsSumOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"News"> | number
    media_name?: EnumMediaNameEnumNullableWithAggregatesFilter<"News"> | $Enums.MediaNameEnum | null
    url?: StringNullableWithAggregatesFilter<"News"> | string | null
    title?: StringNullableWithAggregatesFilter<"News"> | string | null
    origin?: EnumOriginEnumNullableWithAggregatesFilter<"News"> | $Enums.OriginEnum | null
    content?: StringNullableWithAggregatesFilter<"News"> | string | null
    content_en?: StringNullableWithAggregatesFilter<"News"> | string | null
    published_at?: IntNullableWithAggregatesFilter<"News"> | number | null
    authors?: StringNullableListFilter<"News">
    images?: StringNullableListFilter<"News">
    clusterId?: IntNullableWithAggregatesFilter<"News"> | number | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    isBlocked?: BoolFilter<"User"> | boolean
    onboardingNeeded?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: IntFilter<"User"> | number
    updatedAt?: IntFilter<"User"> | number
    canSendNotification?: BoolFilter<"User"> | boolean
    gameMode?: BoolFilter<"User"> | boolean
    seeReportingMerits?: BoolFilter<"User"> | boolean
    seeMisguidingTechniques?: BoolFilter<"User"> | boolean
    seeReportingStyle?: BoolFilter<"User"> | boolean
    seeReportingIntention?: BoolFilter<"User"> | boolean
    removeSensationalHeadlines?: BoolFilter<"User"> | boolean
    removeCopyPasteArticles?: BoolFilter<"User"> | boolean
    topicsInterestedIn?: EnumInterestingTopicNullableListFilter<"User">
    regionsInterestedIn?: EnumInterestingRegionOrCountryNullableListFilter<"User">
    politicalStance?: EnumPoliticalStanceNullableFilter<"User"> | $Enums.PoliticalStance | null
    identity?: EnumIdentityNullableFilter<"User"> | $Enums.Identity | null
    auth?: XOR<UserAuthNullableScalarRelationFilter, UserAuthWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    displayName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isBlocked?: SortOrder
    onboardingNeeded?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    canSendNotification?: SortOrder
    gameMode?: SortOrder
    seeReportingMerits?: SortOrder
    seeMisguidingTechniques?: SortOrder
    seeReportingStyle?: SortOrder
    seeReportingIntention?: SortOrder
    removeSensationalHeadlines?: SortOrder
    removeCopyPasteArticles?: SortOrder
    topicsInterestedIn?: SortOrder
    regionsInterestedIn?: SortOrder
    politicalStance?: SortOrderInput | SortOrder
    identity?: SortOrderInput | SortOrder
    auth?: UserAuthOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    isBlocked?: BoolFilter<"User"> | boolean
    onboardingNeeded?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: IntFilter<"User"> | number
    updatedAt?: IntFilter<"User"> | number
    canSendNotification?: BoolFilter<"User"> | boolean
    gameMode?: BoolFilter<"User"> | boolean
    seeReportingMerits?: BoolFilter<"User"> | boolean
    seeMisguidingTechniques?: BoolFilter<"User"> | boolean
    seeReportingStyle?: BoolFilter<"User"> | boolean
    seeReportingIntention?: BoolFilter<"User"> | boolean
    removeSensationalHeadlines?: BoolFilter<"User"> | boolean
    removeCopyPasteArticles?: BoolFilter<"User"> | boolean
    topicsInterestedIn?: EnumInterestingTopicNullableListFilter<"User">
    regionsInterestedIn?: EnumInterestingRegionOrCountryNullableListFilter<"User">
    politicalStance?: EnumPoliticalStanceNullableFilter<"User"> | $Enums.PoliticalStance | null
    identity?: EnumIdentityNullableFilter<"User"> | $Enums.Identity | null
    auth?: XOR<UserAuthNullableScalarRelationFilter, UserAuthWhereInput> | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    displayName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isBlocked?: SortOrder
    onboardingNeeded?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    canSendNotification?: SortOrder
    gameMode?: SortOrder
    seeReportingMerits?: SortOrder
    seeMisguidingTechniques?: SortOrder
    seeReportingStyle?: SortOrder
    seeReportingIntention?: SortOrder
    removeSensationalHeadlines?: SortOrder
    removeCopyPasteArticles?: SortOrder
    topicsInterestedIn?: SortOrder
    regionsInterestedIn?: SortOrder
    politicalStance?: SortOrderInput | SortOrder
    identity?: SortOrderInput | SortOrder
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
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    isBlocked?: BoolWithAggregatesFilter<"User"> | boolean
    onboardingNeeded?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: IntWithAggregatesFilter<"User"> | number
    updatedAt?: IntWithAggregatesFilter<"User"> | number
    canSendNotification?: BoolWithAggregatesFilter<"User"> | boolean
    gameMode?: BoolWithAggregatesFilter<"User"> | boolean
    seeReportingMerits?: BoolWithAggregatesFilter<"User"> | boolean
    seeMisguidingTechniques?: BoolWithAggregatesFilter<"User"> | boolean
    seeReportingStyle?: BoolWithAggregatesFilter<"User"> | boolean
    seeReportingIntention?: BoolWithAggregatesFilter<"User"> | boolean
    removeSensationalHeadlines?: BoolWithAggregatesFilter<"User"> | boolean
    removeCopyPasteArticles?: BoolWithAggregatesFilter<"User"> | boolean
    topicsInterestedIn?: EnumInterestingTopicNullableListFilter<"User">
    regionsInterestedIn?: EnumInterestingRegionOrCountryNullableListFilter<"User">
    politicalStance?: EnumPoliticalStanceNullableWithAggregatesFilter<"User"> | $Enums.PoliticalStance | null
    identity?: EnumIdentityNullableWithAggregatesFilter<"User"> | $Enums.Identity | null
  }

  export type UserAuthWhereInput = {
    AND?: UserAuthWhereInput | UserAuthWhereInput[]
    OR?: UserAuthWhereInput[]
    NOT?: UserAuthWhereInput | UserAuthWhereInput[]
    id?: StringFilter<"UserAuth"> | string
    userId?: StringFilter<"UserAuth"> | string
    authProvider?: EnumAuthProviderFilter<"UserAuth"> | $Enums.AuthProvider
    email?: StringNullableFilter<"UserAuth"> | string | null
    password?: StringNullableFilter<"UserAuth"> | string | null
    providerId?: StringNullableFilter<"UserAuth"> | string | null
    refreshToken?: StringNullableFilter<"UserAuth"> | string | null
    verificationToken?: StringNullableFilter<"UserAuth"> | string | null
    emailVerified?: BoolFilter<"UserAuth"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserAuthOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    authProvider?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    verificationToken?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserAuthWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    email?: string
    AND?: UserAuthWhereInput | UserAuthWhereInput[]
    OR?: UserAuthWhereInput[]
    NOT?: UserAuthWhereInput | UserAuthWhereInput[]
    authProvider?: EnumAuthProviderFilter<"UserAuth"> | $Enums.AuthProvider
    password?: StringNullableFilter<"UserAuth"> | string | null
    providerId?: StringNullableFilter<"UserAuth"> | string | null
    refreshToken?: StringNullableFilter<"UserAuth"> | string | null
    verificationToken?: StringNullableFilter<"UserAuth"> | string | null
    emailVerified?: BoolFilter<"UserAuth"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "email">

  export type UserAuthOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    authProvider?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    verificationToken?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    _count?: UserAuthCountOrderByAggregateInput
    _max?: UserAuthMaxOrderByAggregateInput
    _min?: UserAuthMinOrderByAggregateInput
  }

  export type UserAuthScalarWhereWithAggregatesInput = {
    AND?: UserAuthScalarWhereWithAggregatesInput | UserAuthScalarWhereWithAggregatesInput[]
    OR?: UserAuthScalarWhereWithAggregatesInput[]
    NOT?: UserAuthScalarWhereWithAggregatesInput | UserAuthScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAuth"> | string
    userId?: StringWithAggregatesFilter<"UserAuth"> | string
    authProvider?: EnumAuthProviderWithAggregatesFilter<"UserAuth"> | $Enums.AuthProvider
    email?: StringNullableWithAggregatesFilter<"UserAuth"> | string | null
    password?: StringNullableWithAggregatesFilter<"UserAuth"> | string | null
    providerId?: StringNullableWithAggregatesFilter<"UserAuth"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"UserAuth"> | string | null
    verificationToken?: StringNullableWithAggregatesFilter<"UserAuth"> | string | null
    emailVerified?: BoolWithAggregatesFilter<"UserAuth"> | boolean
  }

  export type ScrapeFailureWhereInput = {
    AND?: ScrapeFailureWhereInput | ScrapeFailureWhereInput[]
    OR?: ScrapeFailureWhereInput[]
    NOT?: ScrapeFailureWhereInput | ScrapeFailureWhereInput[]
    id?: IntFilter<"ScrapeFailure"> | number
    failure_type?: EnumErrorTypeEnumFilter<"ScrapeFailure"> | $Enums.ErrorTypeEnum
    media_name?: StringNullableFilter<"ScrapeFailure"> | string | null
    url?: StringNullableFilter<"ScrapeFailure"> | string | null
    reason?: StringNullableFilter<"ScrapeFailure"> | string | null
    timestamp?: IntFilter<"ScrapeFailure"> | number
    resolved?: BoolFilter<"ScrapeFailure"> | boolean
  }

  export type ScrapeFailureOrderByWithRelationInput = {
    id?: SortOrder
    failure_type?: SortOrder
    media_name?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    resolved?: SortOrder
  }

  export type ScrapeFailureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScrapeFailureWhereInput | ScrapeFailureWhereInput[]
    OR?: ScrapeFailureWhereInput[]
    NOT?: ScrapeFailureWhereInput | ScrapeFailureWhereInput[]
    failure_type?: EnumErrorTypeEnumFilter<"ScrapeFailure"> | $Enums.ErrorTypeEnum
    media_name?: StringNullableFilter<"ScrapeFailure"> | string | null
    url?: StringNullableFilter<"ScrapeFailure"> | string | null
    reason?: StringNullableFilter<"ScrapeFailure"> | string | null
    timestamp?: IntFilter<"ScrapeFailure"> | number
    resolved?: BoolFilter<"ScrapeFailure"> | boolean
  }, "id">

  export type ScrapeFailureOrderByWithAggregationInput = {
    id?: SortOrder
    failure_type?: SortOrder
    media_name?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    resolved?: SortOrder
    _count?: ScrapeFailureCountOrderByAggregateInput
    _avg?: ScrapeFailureAvgOrderByAggregateInput
    _max?: ScrapeFailureMaxOrderByAggregateInput
    _min?: ScrapeFailureMinOrderByAggregateInput
    _sum?: ScrapeFailureSumOrderByAggregateInput
  }

  export type ScrapeFailureScalarWhereWithAggregatesInput = {
    AND?: ScrapeFailureScalarWhereWithAggregatesInput | ScrapeFailureScalarWhereWithAggregatesInput[]
    OR?: ScrapeFailureScalarWhereWithAggregatesInput[]
    NOT?: ScrapeFailureScalarWhereWithAggregatesInput | ScrapeFailureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ScrapeFailure"> | number
    failure_type?: EnumErrorTypeEnumWithAggregatesFilter<"ScrapeFailure"> | $Enums.ErrorTypeEnum
    media_name?: StringNullableWithAggregatesFilter<"ScrapeFailure"> | string | null
    url?: StringNullableWithAggregatesFilter<"ScrapeFailure"> | string | null
    reason?: StringNullableWithAggregatesFilter<"ScrapeFailure"> | string | null
    timestamp?: IntWithAggregatesFilter<"ScrapeFailure"> | number
    resolved?: BoolWithAggregatesFilter<"ScrapeFailure"> | boolean
  }

  export type ClusterCreateInput = {
    cluster_name?: string | null
    cluster_summary?: string | null
    processed_at?: number | null
    news?: NewsCreateNestedManyWithoutClusterInput
  }

  export type ClusterUncheckedCreateInput = {
    id?: number
    cluster_name?: string | null
    cluster_summary?: string | null
    processed_at?: number | null
    news?: NewsUncheckedCreateNestedManyWithoutClusterInput
  }

  export type ClusterUpdateInput = {
    cluster_name?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_summary?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableIntFieldUpdateOperationsInput | number | null
    news?: NewsUpdateManyWithoutClusterNestedInput
  }

  export type ClusterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cluster_name?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_summary?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableIntFieldUpdateOperationsInput | number | null
    news?: NewsUncheckedUpdateManyWithoutClusterNestedInput
  }

  export type ClusterCreateManyInput = {
    id?: number
    cluster_name?: string | null
    cluster_summary?: string | null
    processed_at?: number | null
  }

  export type ClusterUpdateManyMutationInput = {
    cluster_name?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_summary?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClusterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cluster_name?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_summary?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NewsCreateInput = {
    media_name?: $Enums.MediaNameEnum | null
    url?: string | null
    title?: string | null
    origin?: $Enums.OriginEnum | null
    content?: string | null
    content_en?: string | null
    published_at?: number | null
    authors?: NewsCreateauthorsInput | string[]
    images?: NewsCreateimagesInput | string[]
    cluster?: ClusterCreateNestedOneWithoutNewsInput
  }

  export type NewsUncheckedCreateInput = {
    id?: number
    media_name?: $Enums.MediaNameEnum | null
    url?: string | null
    title?: string | null
    origin?: $Enums.OriginEnum | null
    content?: string | null
    content_en?: string | null
    published_at?: number | null
    authors?: NewsCreateauthorsInput | string[]
    images?: NewsCreateimagesInput | string[]
    clusterId?: number | null
  }

  export type NewsUpdateInput = {
    media_name?: NullableEnumMediaNameEnumFieldUpdateOperationsInput | $Enums.MediaNameEnum | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableEnumOriginEnumFieldUpdateOperationsInput | $Enums.OriginEnum | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableIntFieldUpdateOperationsInput | number | null
    authors?: NewsUpdateauthorsInput | string[]
    images?: NewsUpdateimagesInput | string[]
    cluster?: ClusterUpdateOneWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    media_name?: NullableEnumMediaNameEnumFieldUpdateOperationsInput | $Enums.MediaNameEnum | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableEnumOriginEnumFieldUpdateOperationsInput | $Enums.OriginEnum | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableIntFieldUpdateOperationsInput | number | null
    authors?: NewsUpdateauthorsInput | string[]
    images?: NewsUpdateimagesInput | string[]
    clusterId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NewsCreateManyInput = {
    id?: number
    media_name?: $Enums.MediaNameEnum | null
    url?: string | null
    title?: string | null
    origin?: $Enums.OriginEnum | null
    content?: string | null
    content_en?: string | null
    published_at?: number | null
    authors?: NewsCreateauthorsInput | string[]
    images?: NewsCreateimagesInput | string[]
    clusterId?: number | null
  }

  export type NewsUpdateManyMutationInput = {
    media_name?: NullableEnumMediaNameEnumFieldUpdateOperationsInput | $Enums.MediaNameEnum | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableEnumOriginEnumFieldUpdateOperationsInput | $Enums.OriginEnum | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableIntFieldUpdateOperationsInput | number | null
    authors?: NewsUpdateauthorsInput | string[]
    images?: NewsUpdateimagesInput | string[]
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    media_name?: NullableEnumMediaNameEnumFieldUpdateOperationsInput | $Enums.MediaNameEnum | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableEnumOriginEnumFieldUpdateOperationsInput | $Enums.OriginEnum | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableIntFieldUpdateOperationsInput | number | null
    authors?: NewsUpdateauthorsInput | string[]
    images?: NewsUpdateimagesInput | string[]
    clusterId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateInput = {
    id?: string
    displayName?: string | null
    avatarUrl?: string | null
    isBlocked?: boolean
    onboardingNeeded?: boolean
    role?: $Enums.Role
    createdAt: number
    updatedAt: number
    canSendNotification?: boolean
    gameMode?: boolean
    seeReportingMerits?: boolean
    seeMisguidingTechniques?: boolean
    seeReportingStyle?: boolean
    seeReportingIntention?: boolean
    removeSensationalHeadlines?: boolean
    removeCopyPasteArticles?: boolean
    topicsInterestedIn?: UserCreatetopicsInterestedInInput | $Enums.InterestingTopic[]
    regionsInterestedIn?: UserCreateregionsInterestedInInput | $Enums.InterestingRegionOrCountry[]
    politicalStance?: $Enums.PoliticalStance | null
    identity?: $Enums.Identity | null
    auth?: UserAuthCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    displayName?: string | null
    avatarUrl?: string | null
    isBlocked?: boolean
    onboardingNeeded?: boolean
    role?: $Enums.Role
    createdAt: number
    updatedAt: number
    canSendNotification?: boolean
    gameMode?: boolean
    seeReportingMerits?: boolean
    seeMisguidingTechniques?: boolean
    seeReportingStyle?: boolean
    seeReportingIntention?: boolean
    removeSensationalHeadlines?: boolean
    removeCopyPasteArticles?: boolean
    topicsInterestedIn?: UserCreatetopicsInterestedInInput | $Enums.InterestingTopic[]
    regionsInterestedIn?: UserCreateregionsInterestedInInput | $Enums.InterestingRegionOrCountry[]
    politicalStance?: $Enums.PoliticalStance | null
    identity?: $Enums.Identity | null
    auth?: UserAuthUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    onboardingNeeded?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: IntFieldUpdateOperationsInput | number
    updatedAt?: IntFieldUpdateOperationsInput | number
    canSendNotification?: BoolFieldUpdateOperationsInput | boolean
    gameMode?: BoolFieldUpdateOperationsInput | boolean
    seeReportingMerits?: BoolFieldUpdateOperationsInput | boolean
    seeMisguidingTechniques?: BoolFieldUpdateOperationsInput | boolean
    seeReportingStyle?: BoolFieldUpdateOperationsInput | boolean
    seeReportingIntention?: BoolFieldUpdateOperationsInput | boolean
    removeSensationalHeadlines?: BoolFieldUpdateOperationsInput | boolean
    removeCopyPasteArticles?: BoolFieldUpdateOperationsInput | boolean
    topicsInterestedIn?: UserUpdatetopicsInterestedInInput | $Enums.InterestingTopic[]
    regionsInterestedIn?: UserUpdateregionsInterestedInInput | $Enums.InterestingRegionOrCountry[]
    politicalStance?: NullableEnumPoliticalStanceFieldUpdateOperationsInput | $Enums.PoliticalStance | null
    identity?: NullableEnumIdentityFieldUpdateOperationsInput | $Enums.Identity | null
    auth?: UserAuthUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    onboardingNeeded?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: IntFieldUpdateOperationsInput | number
    updatedAt?: IntFieldUpdateOperationsInput | number
    canSendNotification?: BoolFieldUpdateOperationsInput | boolean
    gameMode?: BoolFieldUpdateOperationsInput | boolean
    seeReportingMerits?: BoolFieldUpdateOperationsInput | boolean
    seeMisguidingTechniques?: BoolFieldUpdateOperationsInput | boolean
    seeReportingStyle?: BoolFieldUpdateOperationsInput | boolean
    seeReportingIntention?: BoolFieldUpdateOperationsInput | boolean
    removeSensationalHeadlines?: BoolFieldUpdateOperationsInput | boolean
    removeCopyPasteArticles?: BoolFieldUpdateOperationsInput | boolean
    topicsInterestedIn?: UserUpdatetopicsInterestedInInput | $Enums.InterestingTopic[]
    regionsInterestedIn?: UserUpdateregionsInterestedInInput | $Enums.InterestingRegionOrCountry[]
    politicalStance?: NullableEnumPoliticalStanceFieldUpdateOperationsInput | $Enums.PoliticalStance | null
    identity?: NullableEnumIdentityFieldUpdateOperationsInput | $Enums.Identity | null
    auth?: UserAuthUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    displayName?: string | null
    avatarUrl?: string | null
    isBlocked?: boolean
    onboardingNeeded?: boolean
    role?: $Enums.Role
    createdAt: number
    updatedAt: number
    canSendNotification?: boolean
    gameMode?: boolean
    seeReportingMerits?: boolean
    seeMisguidingTechniques?: boolean
    seeReportingStyle?: boolean
    seeReportingIntention?: boolean
    removeSensationalHeadlines?: boolean
    removeCopyPasteArticles?: boolean
    topicsInterestedIn?: UserCreatetopicsInterestedInInput | $Enums.InterestingTopic[]
    regionsInterestedIn?: UserCreateregionsInterestedInInput | $Enums.InterestingRegionOrCountry[]
    politicalStance?: $Enums.PoliticalStance | null
    identity?: $Enums.Identity | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    onboardingNeeded?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: IntFieldUpdateOperationsInput | number
    updatedAt?: IntFieldUpdateOperationsInput | number
    canSendNotification?: BoolFieldUpdateOperationsInput | boolean
    gameMode?: BoolFieldUpdateOperationsInput | boolean
    seeReportingMerits?: BoolFieldUpdateOperationsInput | boolean
    seeMisguidingTechniques?: BoolFieldUpdateOperationsInput | boolean
    seeReportingStyle?: BoolFieldUpdateOperationsInput | boolean
    seeReportingIntention?: BoolFieldUpdateOperationsInput | boolean
    removeSensationalHeadlines?: BoolFieldUpdateOperationsInput | boolean
    removeCopyPasteArticles?: BoolFieldUpdateOperationsInput | boolean
    topicsInterestedIn?: UserUpdatetopicsInterestedInInput | $Enums.InterestingTopic[]
    regionsInterestedIn?: UserUpdateregionsInterestedInInput | $Enums.InterestingRegionOrCountry[]
    politicalStance?: NullableEnumPoliticalStanceFieldUpdateOperationsInput | $Enums.PoliticalStance | null
    identity?: NullableEnumIdentityFieldUpdateOperationsInput | $Enums.Identity | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    onboardingNeeded?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: IntFieldUpdateOperationsInput | number
    updatedAt?: IntFieldUpdateOperationsInput | number
    canSendNotification?: BoolFieldUpdateOperationsInput | boolean
    gameMode?: BoolFieldUpdateOperationsInput | boolean
    seeReportingMerits?: BoolFieldUpdateOperationsInput | boolean
    seeMisguidingTechniques?: BoolFieldUpdateOperationsInput | boolean
    seeReportingStyle?: BoolFieldUpdateOperationsInput | boolean
    seeReportingIntention?: BoolFieldUpdateOperationsInput | boolean
    removeSensationalHeadlines?: BoolFieldUpdateOperationsInput | boolean
    removeCopyPasteArticles?: BoolFieldUpdateOperationsInput | boolean
    topicsInterestedIn?: UserUpdatetopicsInterestedInInput | $Enums.InterestingTopic[]
    regionsInterestedIn?: UserUpdateregionsInterestedInInput | $Enums.InterestingRegionOrCountry[]
    politicalStance?: NullableEnumPoliticalStanceFieldUpdateOperationsInput | $Enums.PoliticalStance | null
    identity?: NullableEnumIdentityFieldUpdateOperationsInput | $Enums.Identity | null
  }

  export type UserAuthCreateInput = {
    id?: string
    authProvider?: $Enums.AuthProvider
    email?: string | null
    password?: string | null
    providerId?: string | null
    refreshToken?: string | null
    verificationToken?: string | null
    emailVerified?: boolean
    user: UserCreateNestedOneWithoutAuthInput
  }

  export type UserAuthUncheckedCreateInput = {
    id?: string
    userId: string
    authProvider?: $Enums.AuthProvider
    email?: string | null
    password?: string | null
    providerId?: string | null
    refreshToken?: string | null
    verificationToken?: string | null
    emailVerified?: boolean
  }

  export type UserAuthUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAuthNestedInput
  }

  export type UserAuthUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAuthCreateManyInput = {
    id?: string
    userId: string
    authProvider?: $Enums.AuthProvider
    email?: string | null
    password?: string | null
    providerId?: string | null
    refreshToken?: string | null
    verificationToken?: string | null
    emailVerified?: boolean
  }

  export type UserAuthUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAuthUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ScrapeFailureCreateInput = {
    failure_type: $Enums.ErrorTypeEnum
    media_name?: string | null
    url?: string | null
    reason?: string | null
    timestamp: number
    resolved?: boolean
  }

  export type ScrapeFailureUncheckedCreateInput = {
    id?: number
    failure_type: $Enums.ErrorTypeEnum
    media_name?: string | null
    url?: string | null
    reason?: string | null
    timestamp: number
    resolved?: boolean
  }

  export type ScrapeFailureUpdateInput = {
    failure_type?: EnumErrorTypeEnumFieldUpdateOperationsInput | $Enums.ErrorTypeEnum
    media_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: IntFieldUpdateOperationsInput | number
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ScrapeFailureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    failure_type?: EnumErrorTypeEnumFieldUpdateOperationsInput | $Enums.ErrorTypeEnum
    media_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: IntFieldUpdateOperationsInput | number
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ScrapeFailureCreateManyInput = {
    id?: number
    failure_type: $Enums.ErrorTypeEnum
    media_name?: string | null
    url?: string | null
    reason?: string | null
    timestamp: number
    resolved?: boolean
  }

  export type ScrapeFailureUpdateManyMutationInput = {
    failure_type?: EnumErrorTypeEnumFieldUpdateOperationsInput | $Enums.ErrorTypeEnum
    media_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: IntFieldUpdateOperationsInput | number
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ScrapeFailureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    failure_type?: EnumErrorTypeEnumFieldUpdateOperationsInput | $Enums.ErrorTypeEnum
    media_name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: IntFieldUpdateOperationsInput | number
    resolved?: BoolFieldUpdateOperationsInput | boolean
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

  export type NewsListRelationFilter = {
    every?: NewsWhereInput
    some?: NewsWhereInput
    none?: NewsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClusterCountOrderByAggregateInput = {
    id?: SortOrder
    cluster_name?: SortOrder
    cluster_summary?: SortOrder
    processed_at?: SortOrder
  }

  export type ClusterAvgOrderByAggregateInput = {
    id?: SortOrder
    processed_at?: SortOrder
  }

  export type ClusterMaxOrderByAggregateInput = {
    id?: SortOrder
    cluster_name?: SortOrder
    cluster_summary?: SortOrder
    processed_at?: SortOrder
  }

  export type ClusterMinOrderByAggregateInput = {
    id?: SortOrder
    cluster_name?: SortOrder
    cluster_summary?: SortOrder
    processed_at?: SortOrder
  }

  export type ClusterSumOrderByAggregateInput = {
    id?: SortOrder
    processed_at?: SortOrder
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

  export type EnumMediaNameEnumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaNameEnum | EnumMediaNameEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.MediaNameEnum[] | ListEnumMediaNameEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MediaNameEnum[] | ListEnumMediaNameEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMediaNameEnumNullableFilter<$PrismaModel> | $Enums.MediaNameEnum | null
  }

  export type EnumOriginEnumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OriginEnum | EnumOriginEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.OriginEnum[] | ListEnumOriginEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OriginEnum[] | ListEnumOriginEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOriginEnumNullableFilter<$PrismaModel> | $Enums.OriginEnum | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ClusterNullableScalarRelationFilter = {
    is?: ClusterWhereInput | null
    isNot?: ClusterWhereInput | null
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    media_name?: SortOrder
    url?: SortOrder
    title?: SortOrder
    origin?: SortOrder
    content?: SortOrder
    content_en?: SortOrder
    published_at?: SortOrder
    authors?: SortOrder
    images?: SortOrder
    clusterId?: SortOrder
  }

  export type NewsAvgOrderByAggregateInput = {
    id?: SortOrder
    published_at?: SortOrder
    clusterId?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    media_name?: SortOrder
    url?: SortOrder
    title?: SortOrder
    origin?: SortOrder
    content?: SortOrder
    content_en?: SortOrder
    published_at?: SortOrder
    clusterId?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    media_name?: SortOrder
    url?: SortOrder
    title?: SortOrder
    origin?: SortOrder
    content?: SortOrder
    content_en?: SortOrder
    published_at?: SortOrder
    clusterId?: SortOrder
  }

  export type NewsSumOrderByAggregateInput = {
    id?: SortOrder
    published_at?: SortOrder
    clusterId?: SortOrder
  }

  export type EnumMediaNameEnumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaNameEnum | EnumMediaNameEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.MediaNameEnum[] | ListEnumMediaNameEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MediaNameEnum[] | ListEnumMediaNameEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMediaNameEnumNullableWithAggregatesFilter<$PrismaModel> | $Enums.MediaNameEnum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMediaNameEnumNullableFilter<$PrismaModel>
    _max?: NestedEnumMediaNameEnumNullableFilter<$PrismaModel>
  }

  export type EnumOriginEnumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OriginEnum | EnumOriginEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.OriginEnum[] | ListEnumOriginEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OriginEnum[] | ListEnumOriginEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOriginEnumNullableWithAggregatesFilter<$PrismaModel> | $Enums.OriginEnum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOriginEnumNullableFilter<$PrismaModel>
    _max?: NestedEnumOriginEnumNullableFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumInterestingTopicNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.InterestingTopic[] | ListEnumInterestingTopicFieldRefInput<$PrismaModel> | null
    has?: $Enums.InterestingTopic | EnumInterestingTopicFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.InterestingTopic[] | ListEnumInterestingTopicFieldRefInput<$PrismaModel>
    hasSome?: $Enums.InterestingTopic[] | ListEnumInterestingTopicFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumInterestingRegionOrCountryNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.InterestingRegionOrCountry[] | ListEnumInterestingRegionOrCountryFieldRefInput<$PrismaModel> | null
    has?: $Enums.InterestingRegionOrCountry | EnumInterestingRegionOrCountryFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.InterestingRegionOrCountry[] | ListEnumInterestingRegionOrCountryFieldRefInput<$PrismaModel>
    hasSome?: $Enums.InterestingRegionOrCountry[] | ListEnumInterestingRegionOrCountryFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumPoliticalStanceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PoliticalStance | EnumPoliticalStanceFieldRefInput<$PrismaModel> | null
    in?: $Enums.PoliticalStance[] | ListEnumPoliticalStanceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PoliticalStance[] | ListEnumPoliticalStanceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPoliticalStanceNullableFilter<$PrismaModel> | $Enums.PoliticalStance | null
  }

  export type EnumIdentityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Identity | EnumIdentityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Identity[] | ListEnumIdentityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Identity[] | ListEnumIdentityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIdentityNullableFilter<$PrismaModel> | $Enums.Identity | null
  }

  export type UserAuthNullableScalarRelationFilter = {
    is?: UserAuthWhereInput | null
    isNot?: UserAuthWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    isBlocked?: SortOrder
    onboardingNeeded?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    canSendNotification?: SortOrder
    gameMode?: SortOrder
    seeReportingMerits?: SortOrder
    seeMisguidingTechniques?: SortOrder
    seeReportingStyle?: SortOrder
    seeReportingIntention?: SortOrder
    removeSensationalHeadlines?: SortOrder
    removeCopyPasteArticles?: SortOrder
    topicsInterestedIn?: SortOrder
    regionsInterestedIn?: SortOrder
    politicalStance?: SortOrder
    identity?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    isBlocked?: SortOrder
    onboardingNeeded?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    canSendNotification?: SortOrder
    gameMode?: SortOrder
    seeReportingMerits?: SortOrder
    seeMisguidingTechniques?: SortOrder
    seeReportingStyle?: SortOrder
    seeReportingIntention?: SortOrder
    removeSensationalHeadlines?: SortOrder
    removeCopyPasteArticles?: SortOrder
    politicalStance?: SortOrder
    identity?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    isBlocked?: SortOrder
    onboardingNeeded?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    canSendNotification?: SortOrder
    gameMode?: SortOrder
    seeReportingMerits?: SortOrder
    seeMisguidingTechniques?: SortOrder
    seeReportingStyle?: SortOrder
    seeReportingIntention?: SortOrder
    removeSensationalHeadlines?: SortOrder
    removeCopyPasteArticles?: SortOrder
    politicalStance?: SortOrder
    identity?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumPoliticalStanceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PoliticalStance | EnumPoliticalStanceFieldRefInput<$PrismaModel> | null
    in?: $Enums.PoliticalStance[] | ListEnumPoliticalStanceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PoliticalStance[] | ListEnumPoliticalStanceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPoliticalStanceNullableWithAggregatesFilter<$PrismaModel> | $Enums.PoliticalStance | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPoliticalStanceNullableFilter<$PrismaModel>
    _max?: NestedEnumPoliticalStanceNullableFilter<$PrismaModel>
  }

  export type EnumIdentityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Identity | EnumIdentityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Identity[] | ListEnumIdentityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Identity[] | ListEnumIdentityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIdentityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Identity | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIdentityNullableFilter<$PrismaModel>
    _max?: NestedEnumIdentityNullableFilter<$PrismaModel>
  }

  export type EnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserAuthCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    authProvider?: SortOrder
    email?: SortOrder
    password?: SortOrder
    providerId?: SortOrder
    refreshToken?: SortOrder
    verificationToken?: SortOrder
    emailVerified?: SortOrder
  }

  export type UserAuthMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    authProvider?: SortOrder
    email?: SortOrder
    password?: SortOrder
    providerId?: SortOrder
    refreshToken?: SortOrder
    verificationToken?: SortOrder
    emailVerified?: SortOrder
  }

  export type UserAuthMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    authProvider?: SortOrder
    email?: SortOrder
    password?: SortOrder
    providerId?: SortOrder
    refreshToken?: SortOrder
    verificationToken?: SortOrder
    emailVerified?: SortOrder
  }

  export type EnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type EnumErrorTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.ErrorTypeEnum | EnumErrorTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ErrorTypeEnum[] | ListEnumErrorTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ErrorTypeEnum[] | ListEnumErrorTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumErrorTypeEnumFilter<$PrismaModel> | $Enums.ErrorTypeEnum
  }

  export type ScrapeFailureCountOrderByAggregateInput = {
    id?: SortOrder
    failure_type?: SortOrder
    media_name?: SortOrder
    url?: SortOrder
    reason?: SortOrder
    timestamp?: SortOrder
    resolved?: SortOrder
  }

  export type ScrapeFailureAvgOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
  }

  export type ScrapeFailureMaxOrderByAggregateInput = {
    id?: SortOrder
    failure_type?: SortOrder
    media_name?: SortOrder
    url?: SortOrder
    reason?: SortOrder
    timestamp?: SortOrder
    resolved?: SortOrder
  }

  export type ScrapeFailureMinOrderByAggregateInput = {
    id?: SortOrder
    failure_type?: SortOrder
    media_name?: SortOrder
    url?: SortOrder
    reason?: SortOrder
    timestamp?: SortOrder
    resolved?: SortOrder
  }

  export type ScrapeFailureSumOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
  }

  export type EnumErrorTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ErrorTypeEnum | EnumErrorTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ErrorTypeEnum[] | ListEnumErrorTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ErrorTypeEnum[] | ListEnumErrorTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumErrorTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.ErrorTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumErrorTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumErrorTypeEnumFilter<$PrismaModel>
  }

  export type NewsCreateNestedManyWithoutClusterInput = {
    create?: XOR<NewsCreateWithoutClusterInput, NewsUncheckedCreateWithoutClusterInput> | NewsCreateWithoutClusterInput[] | NewsUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutClusterInput | NewsCreateOrConnectWithoutClusterInput[]
    createMany?: NewsCreateManyClusterInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutClusterInput = {
    create?: XOR<NewsCreateWithoutClusterInput, NewsUncheckedCreateWithoutClusterInput> | NewsCreateWithoutClusterInput[] | NewsUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutClusterInput | NewsCreateOrConnectWithoutClusterInput[]
    createMany?: NewsCreateManyClusterInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NewsUpdateManyWithoutClusterNestedInput = {
    create?: XOR<NewsCreateWithoutClusterInput, NewsUncheckedCreateWithoutClusterInput> | NewsCreateWithoutClusterInput[] | NewsUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutClusterInput | NewsCreateOrConnectWithoutClusterInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutClusterInput | NewsUpsertWithWhereUniqueWithoutClusterInput[]
    createMany?: NewsCreateManyClusterInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutClusterInput | NewsUpdateWithWhereUniqueWithoutClusterInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutClusterInput | NewsUpdateManyWithWhereWithoutClusterInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NewsUncheckedUpdateManyWithoutClusterNestedInput = {
    create?: XOR<NewsCreateWithoutClusterInput, NewsUncheckedCreateWithoutClusterInput> | NewsCreateWithoutClusterInput[] | NewsUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutClusterInput | NewsCreateOrConnectWithoutClusterInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutClusterInput | NewsUpsertWithWhereUniqueWithoutClusterInput[]
    createMany?: NewsCreateManyClusterInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutClusterInput | NewsUpdateWithWhereUniqueWithoutClusterInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutClusterInput | NewsUpdateManyWithWhereWithoutClusterInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type NewsCreateauthorsInput = {
    set: string[]
  }

  export type NewsCreateimagesInput = {
    set: string[]
  }

  export type ClusterCreateNestedOneWithoutNewsInput = {
    create?: XOR<ClusterCreateWithoutNewsInput, ClusterUncheckedCreateWithoutNewsInput>
    connectOrCreate?: ClusterCreateOrConnectWithoutNewsInput
    connect?: ClusterWhereUniqueInput
  }

  export type NullableEnumMediaNameEnumFieldUpdateOperationsInput = {
    set?: $Enums.MediaNameEnum | null
  }

  export type NullableEnumOriginEnumFieldUpdateOperationsInput = {
    set?: $Enums.OriginEnum | null
  }

  export type NewsUpdateauthorsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NewsUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ClusterUpdateOneWithoutNewsNestedInput = {
    create?: XOR<ClusterCreateWithoutNewsInput, ClusterUncheckedCreateWithoutNewsInput>
    connectOrCreate?: ClusterCreateOrConnectWithoutNewsInput
    upsert?: ClusterUpsertWithoutNewsInput
    disconnect?: ClusterWhereInput | boolean
    delete?: ClusterWhereInput | boolean
    connect?: ClusterWhereUniqueInput
    update?: XOR<XOR<ClusterUpdateToOneWithWhereWithoutNewsInput, ClusterUpdateWithoutNewsInput>, ClusterUncheckedUpdateWithoutNewsInput>
  }

  export type UserCreatetopicsInterestedInInput = {
    set: $Enums.InterestingTopic[]
  }

  export type UserCreateregionsInterestedInInput = {
    set: $Enums.InterestingRegionOrCountry[]
  }

  export type UserAuthCreateNestedOneWithoutUserInput = {
    create?: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutUserInput
    connect?: UserAuthWhereUniqueInput
  }

  export type UserAuthUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutUserInput
    connect?: UserAuthWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdatetopicsInterestedInInput = {
    set?: $Enums.InterestingTopic[]
    push?: $Enums.InterestingTopic | $Enums.InterestingTopic[]
  }

  export type UserUpdateregionsInterestedInInput = {
    set?: $Enums.InterestingRegionOrCountry[]
    push?: $Enums.InterestingRegionOrCountry | $Enums.InterestingRegionOrCountry[]
  }

  export type NullableEnumPoliticalStanceFieldUpdateOperationsInput = {
    set?: $Enums.PoliticalStance | null
  }

  export type NullableEnumIdentityFieldUpdateOperationsInput = {
    set?: $Enums.Identity | null
  }

  export type UserAuthUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutUserInput
    upsert?: UserAuthUpsertWithoutUserInput
    disconnect?: UserAuthWhereInput | boolean
    delete?: UserAuthWhereInput | boolean
    connect?: UserAuthWhereUniqueInput
    update?: XOR<XOR<UserAuthUpdateToOneWithWhereWithoutUserInput, UserAuthUpdateWithoutUserInput>, UserAuthUncheckedUpdateWithoutUserInput>
  }

  export type UserAuthUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutUserInput
    upsert?: UserAuthUpsertWithoutUserInput
    disconnect?: UserAuthWhereInput | boolean
    delete?: UserAuthWhereInput | boolean
    connect?: UserAuthWhereUniqueInput
    update?: XOR<XOR<UserAuthUpdateToOneWithWhereWithoutUserInput, UserAuthUpdateWithoutUserInput>, UserAuthUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutAuthInput = {
    create?: XOR<UserCreateWithoutAuthInput, UserUncheckedCreateWithoutAuthInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAuthProviderFieldUpdateOperationsInput = {
    set?: $Enums.AuthProvider
  }

  export type UserUpdateOneRequiredWithoutAuthNestedInput = {
    create?: XOR<UserCreateWithoutAuthInput, UserUncheckedCreateWithoutAuthInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthInput
    upsert?: UserUpsertWithoutAuthInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthInput, UserUpdateWithoutAuthInput>, UserUncheckedUpdateWithoutAuthInput>
  }

  export type EnumErrorTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.ErrorTypeEnum
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

  export type NestedEnumMediaNameEnumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaNameEnum | EnumMediaNameEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.MediaNameEnum[] | ListEnumMediaNameEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MediaNameEnum[] | ListEnumMediaNameEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMediaNameEnumNullableFilter<$PrismaModel> | $Enums.MediaNameEnum | null
  }

  export type NestedEnumOriginEnumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OriginEnum | EnumOriginEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.OriginEnum[] | ListEnumOriginEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OriginEnum[] | ListEnumOriginEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOriginEnumNullableFilter<$PrismaModel> | $Enums.OriginEnum | null
  }

  export type NestedEnumMediaNameEnumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaNameEnum | EnumMediaNameEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.MediaNameEnum[] | ListEnumMediaNameEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MediaNameEnum[] | ListEnumMediaNameEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMediaNameEnumNullableWithAggregatesFilter<$PrismaModel> | $Enums.MediaNameEnum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMediaNameEnumNullableFilter<$PrismaModel>
    _max?: NestedEnumMediaNameEnumNullableFilter<$PrismaModel>
  }

  export type NestedEnumOriginEnumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OriginEnum | EnumOriginEnumFieldRefInput<$PrismaModel> | null
    in?: $Enums.OriginEnum[] | ListEnumOriginEnumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OriginEnum[] | ListEnumOriginEnumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOriginEnumNullableWithAggregatesFilter<$PrismaModel> | $Enums.OriginEnum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOriginEnumNullableFilter<$PrismaModel>
    _max?: NestedEnumOriginEnumNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumPoliticalStanceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PoliticalStance | EnumPoliticalStanceFieldRefInput<$PrismaModel> | null
    in?: $Enums.PoliticalStance[] | ListEnumPoliticalStanceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PoliticalStance[] | ListEnumPoliticalStanceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPoliticalStanceNullableFilter<$PrismaModel> | $Enums.PoliticalStance | null
  }

  export type NestedEnumIdentityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Identity | EnumIdentityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Identity[] | ListEnumIdentityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Identity[] | ListEnumIdentityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIdentityNullableFilter<$PrismaModel> | $Enums.Identity | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumPoliticalStanceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PoliticalStance | EnumPoliticalStanceFieldRefInput<$PrismaModel> | null
    in?: $Enums.PoliticalStance[] | ListEnumPoliticalStanceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PoliticalStance[] | ListEnumPoliticalStanceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPoliticalStanceNullableWithAggregatesFilter<$PrismaModel> | $Enums.PoliticalStance | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPoliticalStanceNullableFilter<$PrismaModel>
    _max?: NestedEnumPoliticalStanceNullableFilter<$PrismaModel>
  }

  export type NestedEnumIdentityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Identity | EnumIdentityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Identity[] | ListEnumIdentityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Identity[] | ListEnumIdentityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIdentityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Identity | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIdentityNullableFilter<$PrismaModel>
    _max?: NestedEnumIdentityNullableFilter<$PrismaModel>
  }

  export type NestedEnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type NestedEnumErrorTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.ErrorTypeEnum | EnumErrorTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ErrorTypeEnum[] | ListEnumErrorTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ErrorTypeEnum[] | ListEnumErrorTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumErrorTypeEnumFilter<$PrismaModel> | $Enums.ErrorTypeEnum
  }

  export type NestedEnumErrorTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ErrorTypeEnum | EnumErrorTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ErrorTypeEnum[] | ListEnumErrorTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ErrorTypeEnum[] | ListEnumErrorTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumErrorTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.ErrorTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumErrorTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumErrorTypeEnumFilter<$PrismaModel>
  }

  export type NewsCreateWithoutClusterInput = {
    media_name?: $Enums.MediaNameEnum | null
    url?: string | null
    title?: string | null
    origin?: $Enums.OriginEnum | null
    content?: string | null
    content_en?: string | null
    published_at?: number | null
    authors?: NewsCreateauthorsInput | string[]
    images?: NewsCreateimagesInput | string[]
  }

  export type NewsUncheckedCreateWithoutClusterInput = {
    id?: number
    media_name?: $Enums.MediaNameEnum | null
    url?: string | null
    title?: string | null
    origin?: $Enums.OriginEnum | null
    content?: string | null
    content_en?: string | null
    published_at?: number | null
    authors?: NewsCreateauthorsInput | string[]
    images?: NewsCreateimagesInput | string[]
  }

  export type NewsCreateOrConnectWithoutClusterInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutClusterInput, NewsUncheckedCreateWithoutClusterInput>
  }

  export type NewsCreateManyClusterInputEnvelope = {
    data: NewsCreateManyClusterInput | NewsCreateManyClusterInput[]
    skipDuplicates?: boolean
  }

  export type NewsUpsertWithWhereUniqueWithoutClusterInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutClusterInput, NewsUncheckedUpdateWithoutClusterInput>
    create: XOR<NewsCreateWithoutClusterInput, NewsUncheckedCreateWithoutClusterInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutClusterInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutClusterInput, NewsUncheckedUpdateWithoutClusterInput>
  }

  export type NewsUpdateManyWithWhereWithoutClusterInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutClusterInput>
  }

  export type NewsScalarWhereInput = {
    AND?: NewsScalarWhereInput | NewsScalarWhereInput[]
    OR?: NewsScalarWhereInput[]
    NOT?: NewsScalarWhereInput | NewsScalarWhereInput[]
    id?: IntFilter<"News"> | number
    media_name?: EnumMediaNameEnumNullableFilter<"News"> | $Enums.MediaNameEnum | null
    url?: StringNullableFilter<"News"> | string | null
    title?: StringNullableFilter<"News"> | string | null
    origin?: EnumOriginEnumNullableFilter<"News"> | $Enums.OriginEnum | null
    content?: StringNullableFilter<"News"> | string | null
    content_en?: StringNullableFilter<"News"> | string | null
    published_at?: IntNullableFilter<"News"> | number | null
    authors?: StringNullableListFilter<"News">
    images?: StringNullableListFilter<"News">
    clusterId?: IntNullableFilter<"News"> | number | null
  }

  export type ClusterCreateWithoutNewsInput = {
    cluster_name?: string | null
    cluster_summary?: string | null
    processed_at?: number | null
  }

  export type ClusterUncheckedCreateWithoutNewsInput = {
    id?: number
    cluster_name?: string | null
    cluster_summary?: string | null
    processed_at?: number | null
  }

  export type ClusterCreateOrConnectWithoutNewsInput = {
    where: ClusterWhereUniqueInput
    create: XOR<ClusterCreateWithoutNewsInput, ClusterUncheckedCreateWithoutNewsInput>
  }

  export type ClusterUpsertWithoutNewsInput = {
    update: XOR<ClusterUpdateWithoutNewsInput, ClusterUncheckedUpdateWithoutNewsInput>
    create: XOR<ClusterCreateWithoutNewsInput, ClusterUncheckedCreateWithoutNewsInput>
    where?: ClusterWhereInput
  }

  export type ClusterUpdateToOneWithWhereWithoutNewsInput = {
    where?: ClusterWhereInput
    data: XOR<ClusterUpdateWithoutNewsInput, ClusterUncheckedUpdateWithoutNewsInput>
  }

  export type ClusterUpdateWithoutNewsInput = {
    cluster_name?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_summary?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClusterUncheckedUpdateWithoutNewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cluster_name?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_summary?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserAuthCreateWithoutUserInput = {
    id?: string
    authProvider?: $Enums.AuthProvider
    email?: string | null
    password?: string | null
    providerId?: string | null
    refreshToken?: string | null
    verificationToken?: string | null
    emailVerified?: boolean
  }

  export type UserAuthUncheckedCreateWithoutUserInput = {
    id?: string
    authProvider?: $Enums.AuthProvider
    email?: string | null
    password?: string | null
    providerId?: string | null
    refreshToken?: string | null
    verificationToken?: string | null
    emailVerified?: boolean
  }

  export type UserAuthCreateOrConnectWithoutUserInput = {
    where: UserAuthWhereUniqueInput
    create: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
  }

  export type UserAuthUpsertWithoutUserInput = {
    update: XOR<UserAuthUpdateWithoutUserInput, UserAuthUncheckedUpdateWithoutUserInput>
    create: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
    where?: UserAuthWhereInput
  }

  export type UserAuthUpdateToOneWithWhereWithoutUserInput = {
    where?: UserAuthWhereInput
    data: XOR<UserAuthUpdateWithoutUserInput, UserAuthUncheckedUpdateWithoutUserInput>
  }

  export type UserAuthUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAuthUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateWithoutAuthInput = {
    id?: string
    displayName?: string | null
    avatarUrl?: string | null
    isBlocked?: boolean
    onboardingNeeded?: boolean
    role?: $Enums.Role
    createdAt: number
    updatedAt: number
    canSendNotification?: boolean
    gameMode?: boolean
    seeReportingMerits?: boolean
    seeMisguidingTechniques?: boolean
    seeReportingStyle?: boolean
    seeReportingIntention?: boolean
    removeSensationalHeadlines?: boolean
    removeCopyPasteArticles?: boolean
    topicsInterestedIn?: UserCreatetopicsInterestedInInput | $Enums.InterestingTopic[]
    regionsInterestedIn?: UserCreateregionsInterestedInInput | $Enums.InterestingRegionOrCountry[]
    politicalStance?: $Enums.PoliticalStance | null
    identity?: $Enums.Identity | null
  }

  export type UserUncheckedCreateWithoutAuthInput = {
    id?: string
    displayName?: string | null
    avatarUrl?: string | null
    isBlocked?: boolean
    onboardingNeeded?: boolean
    role?: $Enums.Role
    createdAt: number
    updatedAt: number
    canSendNotification?: boolean
    gameMode?: boolean
    seeReportingMerits?: boolean
    seeMisguidingTechniques?: boolean
    seeReportingStyle?: boolean
    seeReportingIntention?: boolean
    removeSensationalHeadlines?: boolean
    removeCopyPasteArticles?: boolean
    topicsInterestedIn?: UserCreatetopicsInterestedInInput | $Enums.InterestingTopic[]
    regionsInterestedIn?: UserCreateregionsInterestedInInput | $Enums.InterestingRegionOrCountry[]
    politicalStance?: $Enums.PoliticalStance | null
    identity?: $Enums.Identity | null
  }

  export type UserCreateOrConnectWithoutAuthInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthInput, UserUncheckedCreateWithoutAuthInput>
  }

  export type UserUpsertWithoutAuthInput = {
    update: XOR<UserUpdateWithoutAuthInput, UserUncheckedUpdateWithoutAuthInput>
    create: XOR<UserCreateWithoutAuthInput, UserUncheckedCreateWithoutAuthInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthInput, UserUncheckedUpdateWithoutAuthInput>
  }

  export type UserUpdateWithoutAuthInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    onboardingNeeded?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: IntFieldUpdateOperationsInput | number
    updatedAt?: IntFieldUpdateOperationsInput | number
    canSendNotification?: BoolFieldUpdateOperationsInput | boolean
    gameMode?: BoolFieldUpdateOperationsInput | boolean
    seeReportingMerits?: BoolFieldUpdateOperationsInput | boolean
    seeMisguidingTechniques?: BoolFieldUpdateOperationsInput | boolean
    seeReportingStyle?: BoolFieldUpdateOperationsInput | boolean
    seeReportingIntention?: BoolFieldUpdateOperationsInput | boolean
    removeSensationalHeadlines?: BoolFieldUpdateOperationsInput | boolean
    removeCopyPasteArticles?: BoolFieldUpdateOperationsInput | boolean
    topicsInterestedIn?: UserUpdatetopicsInterestedInInput | $Enums.InterestingTopic[]
    regionsInterestedIn?: UserUpdateregionsInterestedInInput | $Enums.InterestingRegionOrCountry[]
    politicalStance?: NullableEnumPoliticalStanceFieldUpdateOperationsInput | $Enums.PoliticalStance | null
    identity?: NullableEnumIdentityFieldUpdateOperationsInput | $Enums.Identity | null
  }

  export type UserUncheckedUpdateWithoutAuthInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    onboardingNeeded?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: IntFieldUpdateOperationsInput | number
    updatedAt?: IntFieldUpdateOperationsInput | number
    canSendNotification?: BoolFieldUpdateOperationsInput | boolean
    gameMode?: BoolFieldUpdateOperationsInput | boolean
    seeReportingMerits?: BoolFieldUpdateOperationsInput | boolean
    seeMisguidingTechniques?: BoolFieldUpdateOperationsInput | boolean
    seeReportingStyle?: BoolFieldUpdateOperationsInput | boolean
    seeReportingIntention?: BoolFieldUpdateOperationsInput | boolean
    removeSensationalHeadlines?: BoolFieldUpdateOperationsInput | boolean
    removeCopyPasteArticles?: BoolFieldUpdateOperationsInput | boolean
    topicsInterestedIn?: UserUpdatetopicsInterestedInInput | $Enums.InterestingTopic[]
    regionsInterestedIn?: UserUpdateregionsInterestedInInput | $Enums.InterestingRegionOrCountry[]
    politicalStance?: NullableEnumPoliticalStanceFieldUpdateOperationsInput | $Enums.PoliticalStance | null
    identity?: NullableEnumIdentityFieldUpdateOperationsInput | $Enums.Identity | null
  }

  export type NewsCreateManyClusterInput = {
    id?: number
    media_name?: $Enums.MediaNameEnum | null
    url?: string | null
    title?: string | null
    origin?: $Enums.OriginEnum | null
    content?: string | null
    content_en?: string | null
    published_at?: number | null
    authors?: NewsCreateauthorsInput | string[]
    images?: NewsCreateimagesInput | string[]
  }

  export type NewsUpdateWithoutClusterInput = {
    media_name?: NullableEnumMediaNameEnumFieldUpdateOperationsInput | $Enums.MediaNameEnum | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableEnumOriginEnumFieldUpdateOperationsInput | $Enums.OriginEnum | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableIntFieldUpdateOperationsInput | number | null
    authors?: NewsUpdateauthorsInput | string[]
    images?: NewsUpdateimagesInput | string[]
  }

  export type NewsUncheckedUpdateWithoutClusterInput = {
    id?: IntFieldUpdateOperationsInput | number
    media_name?: NullableEnumMediaNameEnumFieldUpdateOperationsInput | $Enums.MediaNameEnum | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableEnumOriginEnumFieldUpdateOperationsInput | $Enums.OriginEnum | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableIntFieldUpdateOperationsInput | number | null
    authors?: NewsUpdateauthorsInput | string[]
    images?: NewsUpdateimagesInput | string[]
  }

  export type NewsUncheckedUpdateManyWithoutClusterInput = {
    id?: IntFieldUpdateOperationsInput | number
    media_name?: NullableEnumMediaNameEnumFieldUpdateOperationsInput | $Enums.MediaNameEnum | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableEnumOriginEnumFieldUpdateOperationsInput | $Enums.OriginEnum | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    content_en?: NullableStringFieldUpdateOperationsInput | string | null
    published_at?: NullableIntFieldUpdateOperationsInput | number | null
    authors?: NewsUpdateauthorsInput | string[]
    images?: NewsUpdateimagesInput | string[]
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