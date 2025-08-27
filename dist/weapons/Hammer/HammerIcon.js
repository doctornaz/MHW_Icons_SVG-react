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
var HammerIcon = function HammerIcon(_ref) {
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
    d: "m401 975.01-5 4.995v6l5 5h11.5V1013h5v-21.995H429l5-5v-6l-5-5h-6L418 970h-6l-5 5.005z",
    style: {
      fillOpacity: 0.76
    },
    transform: "translate(-383 -960)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M417.5 1007h-5v3h5zm0-5h-5v3h5zm13.5-26.99a2 2 0 0 0-2-2h-28a2 2 0 0 0-2 2V991a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2zm-8 4.995c0-2.208-1.792-4-4-4h-8c-2.208 0-4 1.792-4 4v6c0 2.208 1.792 4 4 4h8c2.208 0 4-1.792 4-4z",
    style: {
      fill: col.fill1
    },
    transform: "translate(-383 -960)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M417.5 1013h-5v6h5zm0-16h-5v3h5zm3.5-17a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1zm-25 6.005-3-3 3-3zm41-3-3 3v-6zM418 982a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1zm0-12h-6l3-3z",
    style: {
      fill: col.fill2
    },
    transform: "translate(-383 -960)"
  }));
};
var _default = exports["default"] = HammerIcon;