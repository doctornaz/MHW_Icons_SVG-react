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
var LightBowgunIcon = function LightBowgunIcon(_ref) {
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
    d: "M734 1007v-4l-1-8h6l-1 8v4zm13-4-5 2v2h5zm-27-14h-7v6h7zm32 0h7v6h-7zm-14-16h8l-3.6 6h-13l-2.4-6h7v-7h4z",
    style: {
      fillOpacity: 0.77
    },
    transform: "translate(-704 -960)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M733.047 1010.88c.484-1.21.953-2.43.953-3.88 0-3 1-4 2-4s2 1 2 4c0 1.45.469 2.67.953 3.88l.094.24c.484 1.21.953 2.43.953 3.88 0 3-1 4-4 4s-4-1-4-4c0-1.45.469-2.67.953-3.88zM741 1008v-3c0-.55.448-1 1-1s1 .45 1 1v1h3v-2c0-.55.448-1 1-1s1 .45 1 1v4z",
    style: {
      fill: col.fill1
    },
    transform: "translate(-704 -960)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M743 978h-14v10l5 15v-6s0-1 2-1 2 1 2 1v6l5-15zm-15-4-5 5v13c0 2-2 6-6 6s-7-4-7-6 2-4 4-4 2 1 2 1-2 1-2 3 3 2 3 2 2 0 2-2v-14l7-7h20l7 7v14c0 2 2 2 2 2s3 0 3-2-2-3-2-3 0-1 2-1 4 2 4 4-3 6-7 6-6-4-6-6v-13l-5-5zm10-9h-4v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",
    style: {
      fill: col.fill2
    },
    transform: "translate(-704 -960)"
  }));
};
var _default = exports["default"] = LightBowgunIcon;