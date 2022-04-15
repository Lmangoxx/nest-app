export class CreateSystemDto {
  readonly id?: string;
  readonly title: string;
  readonly username: string;
  readonly host: string;
  readonly port: number;
}
