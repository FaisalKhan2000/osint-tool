import {
  BAD_REQUEST,
  FORBIDDEN,
  HttpStatusCode,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  UNAUTHORIZED,
} from "../constants/http";
import { ErrorDetails } from "../interfaces";

class APIError extends Error {
  public readonly statusCode: HttpStatusCode;
  public readonly errorDetails: ErrorDetails;
  public readonly isOperational: boolean;

  constructor(
    statusCode: HttpStatusCode,
    message: string,
    errorDetails: ErrorDetails = {},
    isOperational = true
  ) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.errorDetails = {
      ...errorDetails,
      timestamp: new Date().toISOString(),
    };
    this.isOperational = isOperational;

    // Capture stack trace
    Error.captureStackTrace(this, this.constructor);
  }

  public toJSON() {
    return {
      error: {
        name: this.name,
        message: this.message,
        statusCode: this.statusCode,
        ...this.errorDetails,
        stack: process.env.NODE_ENV === "development" ? this.stack : undefined,
      },
    };
  }

  public static badRequest(message: string, details?: ErrorDetails) {
    return new APIError(BAD_REQUEST, message, details);
  }

  public static unauthorized(message: string, details?: ErrorDetails) {
    return new APIError(UNAUTHORIZED, message, details);
  }

  public static forbidden(message: string, details?: ErrorDetails) {
    return new APIError(FORBIDDEN, message, details);
  }

  public static notFound(message: string, details?: ErrorDetails) {
    return new APIError(NOT_FOUND, message, details);
  }

  public static internal(message: string, details?: ErrorDetails) {
    return new APIError(INTERNAL_SERVER_ERROR, message, details, false);
  }
}

export default APIError;
