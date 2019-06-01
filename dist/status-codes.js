"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.http504 = exports.http502 = exports.http500 = exports.http422 = exports.http404 = exports.http403 = exports.http401 = exports.http400 = exports.HTTPError = exports.availableStatusCodes = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Supporting the same status codes that Serverless Framework supports
// https://serverless.com/framework/docs/providers/aws/events/apigateway#available-status-codes
var availableStatusCodes = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  422: 'Unprocessable Entity',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  504: 'Gateway Timeout'
};
exports.availableStatusCodes = availableStatusCodes;

var HTTPError =
/*#__PURE__*/
function (_Error) {
  _inherits(HTTPError, _Error);

  function HTTPError(message) {
    var _this;

    _classCallCheck(this, HTTPError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HTTPError).call(this, message));
    _this.name = 'HTTPError';
    return _this;
  }

  return HTTPError;
}(_wrapNativeSuper(Error)); // Factory function


exports.HTTPError = HTTPError;

var httpCode = function httpCode(code) {
  return function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var defaultMessage = availableStatusCodes[code];
    var errorMessage = "[".concat(code, "] ").concat(message || defaultMessage);
    return new HTTPError(errorMessage);
  };
};

var http400 = httpCode(400);
exports.http400 = http400;
var http401 = httpCode(401);
exports.http401 = http401;
var http403 = httpCode(403);
exports.http403 = http403;
var http404 = httpCode(404);
exports.http404 = http404;
var http422 = httpCode(422);
exports.http422 = http422;
var http500 = httpCode(500);
exports.http500 = http500;
var http502 = httpCode(502);
exports.http502 = http502;
var http504 = httpCode(504);
exports.http504 = http504;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0dXMtY29kZXMudHMiXSwibmFtZXMiOlsiYXZhaWxhYmxlU3RhdHVzQ29kZXMiLCJIVFRQRXJyb3IiLCJtZXNzYWdlIiwibmFtZSIsIkVycm9yIiwiaHR0cENvZGUiLCJjb2RlIiwiZGVmYXVsdE1lc3NhZ2UiLCJlcnJvck1lc3NhZ2UiLCJodHRwNDAwIiwiaHR0cDQwMSIsImh0dHA0MDMiLCJodHRwNDA0IiwiaHR0cDQyMiIsImh0dHA1MDAiLCJodHRwNTAyIiwiaHR0cDUwNCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ08sSUFBTUEsb0JBQW9CLEdBQUc7QUFDbEMsT0FBSyxhQUQ2QjtBQUVsQyxPQUFLLGNBRjZCO0FBR2xDLE9BQUssV0FINkI7QUFJbEMsT0FBSyxXQUo2QjtBQUtsQyxPQUFLLHNCQUw2QjtBQU1sQyxPQUFLLHVCQU42QjtBQU9sQyxPQUFLLGFBUDZCO0FBUWxDLE9BQUs7QUFSNkIsQ0FBN0I7OztJQVdNQyxTOzs7OztBQUNYLHFCQUFZQyxPQUFaLEVBQThCO0FBQUE7O0FBQUE7O0FBQzVCLG1GQUFNQSxPQUFOO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLFdBQVo7QUFGNEI7QUFHN0I7OzttQkFKNEJDLEssSUFPL0I7Ozs7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFrQjtBQUNqQyxTQUFPLFlBQWtCO0FBQUEsUUFBakJKLE9BQWlCLHVFQUFQLEVBQU87QUFDdkIsUUFBTUssY0FBYyxHQUFHUCxvQkFBb0IsQ0FBQ00sSUFBRCxDQUEzQztBQUNBLFFBQU1FLFlBQVksY0FBT0YsSUFBUCxlQUFnQkosT0FBTyxJQUFJSyxjQUEzQixDQUFsQjtBQUNBLFdBQU8sSUFBSU4sU0FBSixDQUFjTyxZQUFkLENBQVA7QUFDRCxHQUpEO0FBS0QsQ0FORDs7QUFRTyxJQUFNQyxPQUFPLEdBQUdKLFFBQVEsQ0FBQyxHQUFELENBQXhCOztBQUNBLElBQU1LLE9BQU8sR0FBR0wsUUFBUSxDQUFDLEdBQUQsQ0FBeEI7O0FBQ0EsSUFBTU0sT0FBTyxHQUFHTixRQUFRLENBQUMsR0FBRCxDQUF4Qjs7QUFDQSxJQUFNTyxPQUFPLEdBQUdQLFFBQVEsQ0FBQyxHQUFELENBQXhCOztBQUNBLElBQU1RLE9BQU8sR0FBR1IsUUFBUSxDQUFDLEdBQUQsQ0FBeEI7O0FBQ0EsSUFBTVMsT0FBTyxHQUFHVCxRQUFRLENBQUMsR0FBRCxDQUF4Qjs7QUFDQSxJQUFNVSxPQUFPLEdBQUdWLFFBQVEsQ0FBQyxHQUFELENBQXhCOztBQUNBLElBQU1XLE9BQU8sR0FBR1gsUUFBUSxDQUFDLEdBQUQsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdXBwb3J0aW5nIHRoZSBzYW1lIHN0YXR1cyBjb2RlcyB0aGF0IFNlcnZlcmxlc3MgRnJhbWV3b3JrIHN1cHBvcnRzXG4vLyBodHRwczovL3NlcnZlcmxlc3MuY29tL2ZyYW1ld29yay9kb2NzL3Byb3ZpZGVycy9hd3MvZXZlbnRzL2FwaWdhdGV3YXkjYXZhaWxhYmxlLXN0YXR1cy1jb2Rlc1xuZXhwb3J0IGNvbnN0IGF2YWlsYWJsZVN0YXR1c0NvZGVzID0ge1xuICA0MDA6ICdCYWQgUmVxdWVzdCcsXG4gIDQwMTogJ1VuYXV0aG9yaXplZCcsXG4gIDQwMzogJ0ZvcmJpZGRlbicsXG4gIDQwNDogJ05vdCBGb3VuZCcsXG4gIDQyMjogJ1VucHJvY2Vzc2FibGUgRW50aXR5JyxcbiAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcbiAgNTAyOiAnQmFkIEdhdGV3YXknLFxuICA1MDQ6ICdHYXRld2F5IFRpbWVvdXQnLFxufTtcblxuZXhwb3J0IGNsYXNzIEhUVFBFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9ICdIVFRQRXJyb3InO1xuICB9XG59XG5cbi8vIEZhY3RvcnkgZnVuY3Rpb25cbmNvbnN0IGh0dHBDb2RlID0gKGNvZGU6IG51bWJlcikgPT4ge1xuICByZXR1cm4gKG1lc3NhZ2UgPSAnJykgPT4ge1xuICAgIGNvbnN0IGRlZmF1bHRNZXNzYWdlID0gYXZhaWxhYmxlU3RhdHVzQ29kZXNbY29kZV07XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYFske2NvZGV9XSAke21lc3NhZ2UgfHwgZGVmYXVsdE1lc3NhZ2V9YDtcbiAgICByZXR1cm4gbmV3IEhUVFBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGh0dHA0MDAgPSBodHRwQ29kZSg0MDApO1xuZXhwb3J0IGNvbnN0IGh0dHA0MDEgPSBodHRwQ29kZSg0MDEpO1xuZXhwb3J0IGNvbnN0IGh0dHA0MDMgPSBodHRwQ29kZSg0MDMpO1xuZXhwb3J0IGNvbnN0IGh0dHA0MDQgPSBodHRwQ29kZSg0MDQpO1xuZXhwb3J0IGNvbnN0IGh0dHA0MjIgPSBodHRwQ29kZSg0MjIpO1xuZXhwb3J0IGNvbnN0IGh0dHA1MDAgPSBodHRwQ29kZSg1MDApO1xuZXhwb3J0IGNvbnN0IGh0dHA1MDIgPSBodHRwQ29kZSg1MDIpO1xuZXhwb3J0IGNvbnN0IGh0dHA1MDQgPSBodHRwQ29kZSg1MDQpO1xuIl19