import {
  http400,
  http401,
  http403,
  http404,
  http422,
  http500,
  http502,
  http504,
  HTTPError,
} from './status-codes';

describe('HTTP Errors', () => {
  const state = {
    customMessage: undefined,
    httpErrorFn: undefined,
  };

  // Helper function to pull "httpError" function and "message" argument from state
  const getAndThrowHttpErrorFn = () => {
    const { httpErrorFn, customMessage } = state;
    throw httpErrorFn(customMessage);
  };

  beforeEach(() => {
    state.customMessage = undefined;
    state.httpErrorFn = undefined;
  });

  test.each`
    httpErrorFn | code   | defaultMessage
    ${http400}  | ${400} | ${'Bad Request'}
    ${http401}  | ${401} | ${'Unauthorized'}
    ${http403}  | ${403} | ${'Forbidden'}
    ${http404}  | ${404} | ${'Not Found'}
    ${http422}  | ${422} | ${'Unprocessable Entity'}
    ${http500}  | ${500} | ${'Internal Server Error'}
    ${http502}  | ${502} | ${'Bad Gateway'}
    ${http504}  | ${504} | ${'Gateway Timeout'}
  `('HTTPError $code has a default message: "$defaultMessage"', (testCase) => {
    const { httpErrorFn, code, defaultMessage } = testCase;
    state.httpErrorFn = httpErrorFn;
    expect(() => getAndThrowHttpErrorFn()).toThrowError(HTTPError);
    expect(() => getAndThrowHttpErrorFn()).toThrowError(`[${code}] ${defaultMessage}`);
  });

  test.each`
    httpErrorFn | code   | customMessage
    ${http400}  | ${400} | ${'Pariatur Laborum 400'}
    ${http401}  | ${401} | ${'Commodo Sit 401'}
    ${http403}  | ${403} | ${'Culpa Fugiat 403'}
    ${http404}  | ${404} | ${'Fugiat Reprehenderit 404'}
    ${http422}  | ${422} | ${'Qui Minim 422'}
    ${http500}  | ${500} | ${'Minim Dolor 500'}
    ${http502}  | ${502} | ${'Esse Adipisicing 502'}
    ${http504}  | ${504} | ${'Occaecat Aute 504'}
  `('HTTPError $code can have a custom message: "$customMessage"', (testCase) => {
    const { httpErrorFn, code, customMessage } = testCase;
    state.httpErrorFn = httpErrorFn;
    state.customMessage = customMessage; // Nonsense lorem ipsum
    expect(() => getAndThrowHttpErrorFn()).toThrowError(HTTPError);
    expect(() => getAndThrowHttpErrorFn()).toThrowError(`[${code}] ${customMessage}`);
  });
});
