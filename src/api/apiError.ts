import { AxiosResponse } from "axios";

export class ApiError extends Error {
    status?: number;
    data?: unknown;
    originalResponse?: AxiosResponse;

    constructor(message: string, status?: number, data?: unknown, originalResponse?: AxiosResponse) {
    super(message);
    this.status = status;
    this.data = data;
    this.originalResponse = originalResponse;
  }
}