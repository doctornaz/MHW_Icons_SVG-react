"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _rankcolors = _interopRequireDefault(require("./rankcolors"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var GunlanceIcon = function GunlanceIcon(_ref) {
  var rank = _ref.rank,
    size = _ref.size;
  var col = _rankcolors["default"][rank] || _rankcolors["default"][1];
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    style: {
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2
    },
    viewBox: "0 0 64 64",
    width: size,
    height: size
  }, /*#__PURE__*/React.createElement("path", {
    d: "m362 975-7 6v21l7 10h4l7-10v-21l-7-6zm-26 35-4-4v-9h-4v-6h7v-8h-2l-1-1v-13l4 4h7l-1 4v14h4v6h-1v9l-4 4z",
    style: {
      fillOpacity: 0.76
    },
    transform: "translate(-320 -960)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M363 992h-8v15l5 5h3zm-2 3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm4-20v15h8l5-6v-4s-3.405-.334-6-2-3-3-3-3zm6 8a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",
    style: {
      fill: col.fill1
    },
    transform: "translate(-320 -960)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M335 1016v-7h7v7.02a3 3 0 0 1-3 2.98h-5c-1.104 0-2-.9-2-2 0-.55.448-1 1-1zm30-24h8v15l-5 5h-3zm-20 8 4 7h-21l4-7zm26-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm-24 3h-20v-6a1 1 0 0 1 1-1h1v5h5v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4h5v-5h1a1 1 0 0 1 1 1zm16-23v15h-8l-5-6v-4s3.405-.334 6-2 3-3 3-3zm-21 2a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v12h7zm19 6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm-28 0v-17h-1l-6 3v14zm11-10a1 1 0 0 0-1-1h-8v2h8a1 1 0 0 0 1-1",
    style: {
      fill: col.fill2
    },
    transform: "translate(-320 -960)"
  }));
};
var _default = exports["default"] = GunlanceIcon;