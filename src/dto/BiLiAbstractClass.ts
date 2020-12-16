export abstract class ApiAbstract {
  /**
   * -658 Token 过期
   */
  'code': number;
  'message': string;
  'ttl': number;
  abstract data?: object | number;
}

export abstract class AccountAbstract {
  'code': number;
  'status': boolean;
  abstract data?: object;
}
