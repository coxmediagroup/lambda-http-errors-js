"use strict";

var _statusCodes = require("./status-codes");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    httpErrorFn | code   | customMessage\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    httpErrorFn | code   | defaultMessage\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

describe('HTTP Errors', function () {
  var state = {
    customMessage: undefined,
    httpErrorFn: undefined
  }; // Helper function to pull "httpError" function and "message" argument from state

  var getAndThrowHttpErrorFn = function getAndThrowHttpErrorFn() {
    var httpErrorFn = state.httpErrorFn,
        customMessage = state.customMessage;
    throw httpErrorFn(customMessage);
  };

  beforeEach(function () {
    state.customMessage = undefined;
    state.httpErrorFn = undefined;
  });
  test.each(_templateObject(), _statusCodes.http400, 400, 'Bad Request', _statusCodes.http401, 401, 'Unauthorized', _statusCodes.http403, 403, 'Forbidden', _statusCodes.http404, 404, 'Not Found', _statusCodes.http422, 422, 'Unprocessable Entity', _statusCodes.http500, 500, 'Internal Server Error', _statusCodes.http502, 502, 'Bad Gateway', _statusCodes.http504, 504, 'Gateway Timeout')('HTTPError $code has a default message: "$defaultMessage"', function (testCase) {
    var httpErrorFn = testCase.httpErrorFn,
        code = testCase.code,
        defaultMessage = testCase.defaultMessage;
    state.httpErrorFn = httpErrorFn;
    expect(function () {
      return getAndThrowHttpErrorFn();
    }).toThrowError(_statusCodes.HTTPError);
    expect(function () {
      return getAndThrowHttpErrorFn();
    }).toThrowError("[".concat(code, "] ").concat(defaultMessage));
  });
  test.each(_templateObject2(), _statusCodes.http400, 400, 'Pariatur Laborum 400', _statusCodes.http401, 401, 'Commodo Sit 401', _statusCodes.http403, 403, 'Culpa Fugiat 403', _statusCodes.http404, 404, 'Fugiat Reprehenderit 404', _statusCodes.http422, 422, 'Qui Minim 422', _statusCodes.http500, 500, 'Minim Dolor 500', _statusCodes.http502, 502, 'Esse Adipisicing 502', _statusCodes.http504, 504, 'Occaecat Aute 504')('HTTPError $code can have a custom message: "$customMessage"', function (testCase) {
    var httpErrorFn = testCase.httpErrorFn,
        code = testCase.code,
        customMessage = testCase.customMessage;
    state.httpErrorFn = httpErrorFn;
    state.customMessage = customMessage; // Nonsense lorem ipsum

    expect(function () {
      return getAndThrowHttpErrorFn();
    }).toThrowError(_statusCodes.HTTPError);
    expect(function () {
      return getAndThrowHttpErrorFn();
    }).toThrowError("[".concat(code, "] ").concat(customMessage));
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0dXMtY29kZXMudGVzdC50cyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsInN0YXRlIiwiY3VzdG9tTWVzc2FnZSIsInVuZGVmaW5lZCIsImh0dHBFcnJvckZuIiwiZ2V0QW5kVGhyb3dIdHRwRXJyb3JGbiIsImJlZm9yZUVhY2giLCJ0ZXN0IiwiZWFjaCIsImh0dHA0MDAiLCJodHRwNDAxIiwiaHR0cDQwMyIsImh0dHA0MDQiLCJodHRwNDIyIiwiaHR0cDUwMCIsImh0dHA1MDIiLCJodHRwNTA0IiwidGVzdENhc2UiLCJjb2RlIiwiZGVmYXVsdE1lc3NhZ2UiLCJleHBlY3QiLCJ0b1Rocm93RXJyb3IiLCJIVFRQRXJyb3IiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBQSxRQUFRLENBQUMsYUFBRCxFQUFnQixZQUFNO0FBQzVCLE1BQU1DLEtBQUssR0FBRztBQUNaQyxJQUFBQSxhQUFhLEVBQUVDLFNBREg7QUFFWkMsSUFBQUEsV0FBVyxFQUFFRDtBQUZELEdBQWQsQ0FENEIsQ0FNNUI7O0FBQ0EsTUFBTUUsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFNO0FBQUEsUUFDM0JELFdBRDJCLEdBQ0lILEtBREosQ0FDM0JHLFdBRDJCO0FBQUEsUUFDZEYsYUFEYyxHQUNJRCxLQURKLENBQ2RDLGFBRGM7QUFFbkMsVUFBTUUsV0FBVyxDQUFDRixhQUFELENBQWpCO0FBQ0QsR0FIRDs7QUFLQUksRUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZkwsSUFBQUEsS0FBSyxDQUFDQyxhQUFOLEdBQXNCQyxTQUF0QjtBQUNBRixJQUFBQSxLQUFLLENBQUNHLFdBQU4sR0FBb0JELFNBQXBCO0FBQ0QsR0FIUyxDQUFWO0FBS0FJLEVBQUFBLElBQUksQ0FBQ0MsSUFBTCxvQkFFSUMsb0JBRkosRUFFa0IsR0FGbEIsRUFFMkIsYUFGM0IsRUFHSUMsb0JBSEosRUFHa0IsR0FIbEIsRUFHMkIsY0FIM0IsRUFJSUMsb0JBSkosRUFJa0IsR0FKbEIsRUFJMkIsV0FKM0IsRUFLSUMsb0JBTEosRUFLa0IsR0FMbEIsRUFLMkIsV0FMM0IsRUFNSUMsb0JBTkosRUFNa0IsR0FObEIsRUFNMkIsc0JBTjNCLEVBT0lDLG9CQVBKLEVBT2tCLEdBUGxCLEVBTzJCLHVCQVAzQixFQVFJQyxvQkFSSixFQVFrQixHQVJsQixFQVEyQixhQVIzQixFQVNJQyxvQkFUSixFQVNrQixHQVRsQixFQVMyQixpQkFUM0IsRUFVRSwwREFWRixFQVU4RCxVQUFDQyxRQUFELEVBQWM7QUFBQSxRQUNsRWIsV0FEa0UsR0FDNUJhLFFBRDRCLENBQ2xFYixXQURrRTtBQUFBLFFBQ3JEYyxJQURxRCxHQUM1QkQsUUFENEIsQ0FDckRDLElBRHFEO0FBQUEsUUFDL0NDLGNBRCtDLEdBQzVCRixRQUQ0QixDQUMvQ0UsY0FEK0M7QUFFMUVsQixJQUFBQSxLQUFLLENBQUNHLFdBQU4sR0FBb0JBLFdBQXBCO0FBQ0FnQixJQUFBQSxNQUFNLENBQUM7QUFBQSxhQUFNZixzQkFBc0IsRUFBNUI7QUFBQSxLQUFELENBQU4sQ0FBdUNnQixZQUF2QyxDQUFvREMsc0JBQXBEO0FBQ0FGLElBQUFBLE1BQU0sQ0FBQztBQUFBLGFBQU1mLHNCQUFzQixFQUE1QjtBQUFBLEtBQUQsQ0FBTixDQUF1Q2dCLFlBQXZDLFlBQXdESCxJQUF4RCxlQUFpRUMsY0FBakU7QUFDRCxHQWZEO0FBaUJBWixFQUFBQSxJQUFJLENBQUNDLElBQUwscUJBRUlDLG9CQUZKLEVBRWtCLEdBRmxCLEVBRTJCLHNCQUYzQixFQUdJQyxvQkFISixFQUdrQixHQUhsQixFQUcyQixpQkFIM0IsRUFJSUMsb0JBSkosRUFJa0IsR0FKbEIsRUFJMkIsa0JBSjNCLEVBS0lDLG9CQUxKLEVBS2tCLEdBTGxCLEVBSzJCLDBCQUwzQixFQU1JQyxvQkFOSixFQU1rQixHQU5sQixFQU0yQixlQU4zQixFQU9JQyxvQkFQSixFQU9rQixHQVBsQixFQU8yQixpQkFQM0IsRUFRSUMsb0JBUkosRUFRa0IsR0FSbEIsRUFRMkIsc0JBUjNCLEVBU0lDLG9CQVRKLEVBU2tCLEdBVGxCLEVBUzJCLG1CQVQzQixFQVVFLDZEQVZGLEVBVWlFLFVBQUNDLFFBQUQsRUFBYztBQUFBLFFBQ3JFYixXQURxRSxHQUNoQ2EsUUFEZ0MsQ0FDckViLFdBRHFFO0FBQUEsUUFDeERjLElBRHdELEdBQ2hDRCxRQURnQyxDQUN4REMsSUFEd0Q7QUFBQSxRQUNsRGhCLGFBRGtELEdBQ2hDZSxRQURnQyxDQUNsRGYsYUFEa0Q7QUFFN0VELElBQUFBLEtBQUssQ0FBQ0csV0FBTixHQUFvQkEsV0FBcEI7QUFDQUgsSUFBQUEsS0FBSyxDQUFDQyxhQUFOLEdBQXNCQSxhQUF0QixDQUg2RSxDQUd4Qzs7QUFDckNrQixJQUFBQSxNQUFNLENBQUM7QUFBQSxhQUFNZixzQkFBc0IsRUFBNUI7QUFBQSxLQUFELENBQU4sQ0FBdUNnQixZQUF2QyxDQUFvREMsc0JBQXBEO0FBQ0FGLElBQUFBLE1BQU0sQ0FBQztBQUFBLGFBQU1mLHNCQUFzQixFQUE1QjtBQUFBLEtBQUQsQ0FBTixDQUF1Q2dCLFlBQXZDLFlBQXdESCxJQUF4RCxlQUFpRWhCLGFBQWpFO0FBQ0QsR0FoQkQ7QUFpQkQsQ0FuRE8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGh0dHA0MDAsXG4gIGh0dHA0MDEsXG4gIGh0dHA0MDMsXG4gIGh0dHA0MDQsXG4gIGh0dHA0MjIsXG4gIGh0dHA1MDAsXG4gIGh0dHA1MDIsXG4gIGh0dHA1MDQsXG4gIEhUVFBFcnJvcixcbn0gZnJvbSAnLi9zdGF0dXMtY29kZXMnO1xuXG5kZXNjcmliZSgnSFRUUCBFcnJvcnMnLCAoKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIGN1c3RvbU1lc3NhZ2U6IHVuZGVmaW5lZCxcbiAgICBodHRwRXJyb3JGbjogdW5kZWZpbmVkLFxuICB9O1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBwdWxsIFwiaHR0cEVycm9yXCIgZnVuY3Rpb24gYW5kIFwibWVzc2FnZVwiIGFyZ3VtZW50IGZyb20gc3RhdGVcbiAgY29uc3QgZ2V0QW5kVGhyb3dIdHRwRXJyb3JGbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGh0dHBFcnJvckZuLCBjdXN0b21NZXNzYWdlIH0gPSBzdGF0ZTtcbiAgICB0aHJvdyBodHRwRXJyb3JGbihjdXN0b21NZXNzYWdlKTtcbiAgfTtcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBzdGF0ZS5jdXN0b21NZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgIHN0YXRlLmh0dHBFcnJvckZuID0gdW5kZWZpbmVkO1xuICB9KTtcblxuICB0ZXN0LmVhY2hgXG4gICAgaHR0cEVycm9yRm4gfCBjb2RlICAgfCBkZWZhdWx0TWVzc2FnZVxuICAgICR7aHR0cDQwMH0gIHwgJHs0MDB9IHwgJHsnQmFkIFJlcXVlc3QnfVxuICAgICR7aHR0cDQwMX0gIHwgJHs0MDF9IHwgJHsnVW5hdXRob3JpemVkJ31cbiAgICAke2h0dHA0MDN9ICB8ICR7NDAzfSB8ICR7J0ZvcmJpZGRlbid9XG4gICAgJHtodHRwNDA0fSAgfCAkezQwNH0gfCAkeydOb3QgRm91bmQnfVxuICAgICR7aHR0cDQyMn0gIHwgJHs0MjJ9IHwgJHsnVW5wcm9jZXNzYWJsZSBFbnRpdHknfVxuICAgICR7aHR0cDUwMH0gIHwgJHs1MDB9IHwgJHsnSW50ZXJuYWwgU2VydmVyIEVycm9yJ31cbiAgICAke2h0dHA1MDJ9ICB8ICR7NTAyfSB8ICR7J0JhZCBHYXRld2F5J31cbiAgICAke2h0dHA1MDR9ICB8ICR7NTA0fSB8ICR7J0dhdGV3YXkgVGltZW91dCd9XG4gIGAoJ0hUVFBFcnJvciAkY29kZSBoYXMgYSBkZWZhdWx0IG1lc3NhZ2U6IFwiJGRlZmF1bHRNZXNzYWdlXCInLCAodGVzdENhc2UpID0+IHtcbiAgICBjb25zdCB7IGh0dHBFcnJvckZuLCBjb2RlLCBkZWZhdWx0TWVzc2FnZSB9ID0gdGVzdENhc2U7XG4gICAgc3RhdGUuaHR0cEVycm9yRm4gPSBodHRwRXJyb3JGbjtcbiAgICBleHBlY3QoKCkgPT4gZ2V0QW5kVGhyb3dIdHRwRXJyb3JGbigpKS50b1Rocm93RXJyb3IoSFRUUEVycm9yKTtcbiAgICBleHBlY3QoKCkgPT4gZ2V0QW5kVGhyb3dIdHRwRXJyb3JGbigpKS50b1Rocm93RXJyb3IoYFske2NvZGV9XSAke2RlZmF1bHRNZXNzYWdlfWApO1xuICB9KTtcblxuICB0ZXN0LmVhY2hgXG4gICAgaHR0cEVycm9yRm4gfCBjb2RlICAgfCBjdXN0b21NZXNzYWdlXG4gICAgJHtodHRwNDAwfSAgfCAkezQwMH0gfCAkeydQYXJpYXR1ciBMYWJvcnVtIDQwMCd9XG4gICAgJHtodHRwNDAxfSAgfCAkezQwMX0gfCAkeydDb21tb2RvIFNpdCA0MDEnfVxuICAgICR7aHR0cDQwM30gIHwgJHs0MDN9IHwgJHsnQ3VscGEgRnVnaWF0IDQwMyd9XG4gICAgJHtodHRwNDA0fSAgfCAkezQwNH0gfCAkeydGdWdpYXQgUmVwcmVoZW5kZXJpdCA0MDQnfVxuICAgICR7aHR0cDQyMn0gIHwgJHs0MjJ9IHwgJHsnUXVpIE1pbmltIDQyMid9XG4gICAgJHtodHRwNTAwfSAgfCAkezUwMH0gfCAkeydNaW5pbSBEb2xvciA1MDAnfVxuICAgICR7aHR0cDUwMn0gIHwgJHs1MDJ9IHwgJHsnRXNzZSBBZGlwaXNpY2luZyA1MDInfVxuICAgICR7aHR0cDUwNH0gIHwgJHs1MDR9IHwgJHsnT2NjYWVjYXQgQXV0ZSA1MDQnfVxuICBgKCdIVFRQRXJyb3IgJGNvZGUgY2FuIGhhdmUgYSBjdXN0b20gbWVzc2FnZTogXCIkY3VzdG9tTWVzc2FnZVwiJywgKHRlc3RDYXNlKSA9PiB7XG4gICAgY29uc3QgeyBodHRwRXJyb3JGbiwgY29kZSwgY3VzdG9tTWVzc2FnZSB9ID0gdGVzdENhc2U7XG4gICAgc3RhdGUuaHR0cEVycm9yRm4gPSBodHRwRXJyb3JGbjtcbiAgICBzdGF0ZS5jdXN0b21NZXNzYWdlID0gY3VzdG9tTWVzc2FnZTsgLy8gTm9uc2Vuc2UgbG9yZW0gaXBzdW1cbiAgICBleHBlY3QoKCkgPT4gZ2V0QW5kVGhyb3dIdHRwRXJyb3JGbigpKS50b1Rocm93RXJyb3IoSFRUUEVycm9yKTtcbiAgICBleHBlY3QoKCkgPT4gZ2V0QW5kVGhyb3dIdHRwRXJyb3JGbigpKS50b1Rocm93RXJyb3IoYFske2NvZGV9XSAke2N1c3RvbU1lc3NhZ2V9YCk7XG4gIH0pO1xufSk7XG4iXX0=