export type ResponsePromise<T> = Promise<{
  status: number;
  data?: T;
  message: string;
}>;
