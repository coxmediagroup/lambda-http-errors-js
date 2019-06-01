// Supporting the same status codes that Serverless Framework supports
// https://serverless.com/framework/docs/providers/aws/events/apigateway#available-status-codes
export const availableStatusCodes = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  422: 'Unprocessable Entity',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  504: 'Gateway Timeout',
};

export class HTTPError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'HTTPError';
  }
}

// Factory function
const httpCode = (code: number) => {
  return (message = '') => {
    const defaultMessage = availableStatusCodes[code];
    const errorMessage = `[${code}] ${message || defaultMessage}`;
    return new HTTPError(errorMessage);
  };
};

export const http400 = httpCode(400);
export const http401 = httpCode(401);
export const http403 = httpCode(403);
export const http404 = httpCode(404);
export const http422 = httpCode(422);
export const http500 = httpCode(500);
export const http502 = httpCode(502);
export const http504 = httpCode(504);
