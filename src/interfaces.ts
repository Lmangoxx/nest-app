export type ResponsePromise<T> = Promise<{
  statusCode: number;
  data?: T;
  message: string;
}>;
