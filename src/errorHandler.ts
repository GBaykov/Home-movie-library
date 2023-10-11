export class RequestError extends Error {
  public status: number;

  public message: string;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'Request Error';
    this.message = message || 'Server Error!';
    this.status = status || 404;
  }
}
