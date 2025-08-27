"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _colors = _interopRequireDefault(require("../colors/colors2"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var SvgHelmRank01 = function SvgHelmRank01(_ref) {
  var rank = _ref.rank,
    size = _ref.size;
  var col = _colors["default"][rank] || _colors["default"][1];
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
    d: "M24 950v-15l-9-9v-10h3v-7l8-4h19l8 7v11l-10 10v17h2v3.5l-.5.5h-22l-.5-.5V950z",
    style: {
      fillOpacity: 0.76
    },
    transform: "translate(0 -896)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41.5 954h-3v-2a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v2h-5v-2a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v2h-2v-2a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v2H20v-5a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v5h-1.5v-2a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1zM25 943h4l3-3h9c1 0 1 1 1 1v5H25zm-13-16s-.008-1 .996-1H38v-8s0-1 1-1h7c1 0 1 1 1 1v5c0 1-1 1-1 1h-2l-17 17h-3l-12-12zm22 11 10-10h2l4-4v-3s0-1 1-1h2v7l-11 11zm9.5-19a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 43.5 919m-8.5-2s3-4 7.5-4 7.5 4 7.5 4l3-2.5s-6-5.5-10.5-5.5H18c-1 0-3 2-3 3v4s0 1 1 1zm-13-10s4-5 7-5h13.5c4 0 10.5 10 10.5 10s-7.5-5-10.5-5z",
    style: {
      fill: col.fill2
    },
    transform: "translate(0 -896)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M33 945a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1h3zm4 0a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1h3zm4 0a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1h3zm-12 0a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1h3z",
    style: {
      fill: col.fill1
    },
    transform: "translate(0 -896)"
  }));
};
var _default = exports["default"] = SvgHelmRank01;