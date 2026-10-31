// oldtube n/sig
// generated from youtubei.js
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var __jsExtractorGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
var exportedVars = function (g) {
  var window = typeof __jsExtractorGlobal.window !== 'undefined' ? __jsExtractorGlobal.window : Object.create(null);
  var document = typeof __jsExtractorGlobal.document !== 'undefined' ? __jsExtractorGlobal.document : {};
  var self = typeof __jsExtractorGlobal.self !== 'undefined' ? __jsExtractorGlobal.self : window;
  var ZE, w, _Bh, _qg, xH, cma, vd, Eja, tn, _Ah, WTa, Ed, uqa, x4a, _Fm, iHa, Or, Lma, Paa, RGa, rba, R4a, Zba, n3a, XPa, an, Wp, _Vp, Up, wla, Op, xla, jd, wa, Uia, Maa, gSa, $la, tja, Ch, hA, gA, fA, Sqa, Rqa, iq, Caa, _ed, gd, Su, Qqa, Ru, Pqa, Qu, Pu, Ou, Kqa, Lqa, Nqa, Yqa, faa, Ca, Aka, sbb, aha, vf, Zga, Pl, g_, Qna, Du, K_, Uk, vqa, Rpa, gu, hu, zh, vh, Tf, wh, kh, ih, Qh, jh, Ng, Mg, xh, gh, Xf, fh, bh, Lba, eh, dh, Of, Nf, If, qba, Xg, Ja, Aba, Sf, dd, Ug, Rg, Wg, yba, Tg, sh, Hba, ua, Jba, $g, Zg, _Bba, ve, iu, Npa, Is, Js, Ks, Ls, Ina, Sr, Mo, To, Po, So, Uo, Iha, hl, il, khb, lhb, mhb, Ds, Gna, Dna, Gs, ns, Yma, hs, Rma, gs, Oma, Nma, Qma, _fs, Pma, $ma, qs, js, ana, _bs, ena, ps, Fs, yna, Yr, rna, qna, ona, Cs, nna, qc, Rq, Qq, Xq, Wq, sd, kna, ina, hna, gna, ks, cs, Zr, td, xc, vc, pc, oc, rc, uc, sc, wc, Mma, Xma, Zma, Xr, Ur, Wr, Wma, vs, Sma, jna, _nhb, ys, pna, Ir, sna, tna, wna, Kna, Ana, Hna, Cna, Mna, Ms, Jna, Bna, Mr, Kr, vla, Kt, Pt, Lt, _lpa, _Nt, kpa, mpa, npa, Ot, Opa, Ppa, eu, Zt, au, $t, cu, Hpa, Jpa, ku, Vpa, lq, mq, Rna, zr, Eh, Sba, xba, hh, Mba, Th, Qf, lh, Hh, Vba, Og, sg, Sna, zg, oh, mh, nh, Uf, Nba, ph, qh, Zf, Sh, Tna, Gg, vg, Ag, dg, Fg, ig, hg, ng, jg, Una, Nh, Vna, Hma, Fma, Jma, Wna, Pna, Fna, Br, Bma, dqa, eqa, fqa, Au, lqa, gqa, hqa, Nna, Ona, vu, wu, doa, Ama, qga, jga, mga, lga, nga, kga, pga, oga, Zp, Ala, _hj, gj, pq, Mla, Nla, Zca, cq, Rla, Vla, Ula, _Wla, Tc, Dc, waa, Bc, ec, Sla, nq, Hla, Ila, aq, dj, $p, Jla, Ul, Dla, kda, Kd, $d, kba, qf, eba, kf, ye, kka, bf, sla, Tl, bt, joa, jla, _Dp, $ka, pp, op, Nka, Mka, $o, ela, fla, gla, ap, Oka, Cp, yp, tp, Vka, lp, ep, Rka, Tka, cp, bp, Uka, dp, Ska, Qka, Pka, qp, Bp, zp, Xka, mp, Ap, Lka, at, Xs, Ws, pt, Ooa, jka, eo, zl, Bl, Rga, yl, _Cl, El, Sga, Fl, Tga, Wga, wl, Hl, Uga, xl, _Xga, Ll, mt, jt, Poa, Noa, P_, Aoa, ft, toa, et, os, zoa, woa, uoa, xoa, yoa, voa, Soa, Ioa, Rfa, Zk, Yk, nj, lj, Hoa, Moa, Boa, vna, mna, lna, una, qt, poa, ct, dt, soa, qoa, roa, Eoa, Doa, Roa, Foa, Vl, wha, yha, cm, _Pa, pha, sha, Xl, nha, am, zha, xha, _tha, uha, vha, Aha, Qpa, lu, Upa, mu, tu, Ypa, Wpa, $na, yg, Oh, pg, Jh, Fh, Cma, xg, wg, iqa, jqa, Rh, Gpa, Fpa, Gp, Fc, Gc, kqa, Lpa, ou, Epa, St, Rt, rpa, spa, upa, ypa, xpa, Bpa, zpa, Apa, Ut, Kma, wpa, vpa, Wt, nu, Qp, wqa, mn, qn, fj, rn, Bja, xja, wja, vja, Kb, ln, kn, nn, Aja, yja, En;

  //#region --- start [nsigFunction] ---
  w = "toString;uQ;B;j;set;&;length;path;A;;call;match;C;www.youtube.com;reverse;1;push;=;mn;url;https://local;startsWith;indexOf;unshift;scheme;fromCharCode;1969-12-31T20:01:23.000-04:00;%3D;n;get;split;,;\\.googlevideo\\.com$;signatureCipher;clone;slice;Untrusted URL;es;local;/api/manifest;s;cmo=pf;/videoplayback;join;youtube.player.web_20261027_11_RC00;/\u22B9;splice;sp;OqqF40gZBhYkaIB7t3-_w8_;JE;Pe;file;assign;fallback_count;DI;pop;fvip;http://local;://;/initplayback;1969-12-31T16:14:55.000-07:45;a1.googlevideo.com;cmo;/;//;\u229Cu;1970-01-01T09:00:05.000+09:00;1970-01-01T11:45:05.000+11:45;undefined;playerfallback;forEach;cmo=td;rr;replace;D;SE;\\.a1\\.googlevideo\\.com$;index.m3u8;/file/index.m3u8;uY;r;,]\"'/\xBB;rr?[1-9].*\\.c\\.youtube\\.com$;-;redirector.googlevideo.com;1970-01-01T03:15:08.000+03:15".split(";");
  xH = function xH(a, b, c, d) {
    var e = b ^ a;
    if (a << 1 < 19 && (a ^ 36) >= 1) {
      var f = c[w[e ^ 7450]](w[e ^ 7475], e ^ 7424);
      var k = c[w[e ^ 7450]](w[e ^ 7475], f + 1);
      f > 0 && k > 0 ? (d[w[e ^ 7435]] = c[w[e ^ 7471]](0, k), c = c[w[e ^ 7471]](k + 1)) : (d[w[e ^ 7435]] = c, c = w[e ^ 7429]);
      var h = [c];
    }
    a - 8 << 1 >= a && (a + 8 ^ 21) < a && (c = (c % d[w[6]] + d[w[6]]) % d[w[6]], f = d[0], d[0] = d[c], d[c] = f, h = [c]);
    if (a + 5 >> 1 < a && (a + 6 & 25) >= a) for (f = c[w[6]]; f;) c[w[e ^ 5684]](c[w[e ^ 5642]](--f, 1)[0]);
    return h;
  };
  vd = function vd(a, b, c, d) {
    var e = b ^ a,
      f;
    (a & 29) == a && (d = (d % c[w[6]] + c[w[6]]) % c[w[6]], c[w[e ^ 1695]](d, 1));
    (a - 5 | 17) >= a && a + 3 >> 2 < a && (c = (c % d[w[6]] + d[w[6]]) % d[w[6]], d[w[e ^ 6725]](-c)[w[e ^ 6757]]()[w[e ^ 6701]](function (h) {
      d[w[e ^ 6780]](h);
    }));
    return f;
  };
  cma = function cma(a, b) {
    return vd[w[10]](this, 1, 1712, a, b);
  };
  _Ah = function Ah(a, b, c, d, e) {
    var f = b ^ a;
    if (!(a + 9 >> 4)) {
      if (d === w[f ^ 5406]) {
        var h;
        (h = e[w[f ^ 5430]](w[f ^ 5425])) >= 0 ? (d = "cmo=".concat(e[w[f ^ 5379]](0, h)), e = e[w[f ^ 5379]](h + 1)) : (h = e[w[f ^ 5430]](w[f ^ 5435])) >= 0 && (d = "cmo=".concat(e[w[f ^ 5379]](0, h)), e = e[w[f ^ 5379]](h + 3));
      }
      c[d] = e;
    }
    if ((a - 4 & 3) == 1) {
      h = c[d];
      var l = h[w[f ^ 8033]](w[f ^ 8038]);
      l > 0 ? _Ah(3, f ^ 2644, e, h[w[f ^ 8020]](0, l), h[w[f ^ 8020]](l + 1)) : h && (e[h] = w[f ^ 8062]);
      var k = [];
    }
    return k;
  };
  tn = function tn(a, b, c, d, e, f, h, k) {
    var l = b ^ a,
      m;
    (a | 32) == a && (m = d(f, h, k));
    if (a - 5 << 1 < a && (a + 4 & 74) >= a) {
      var r = c[w[l ^ 3639]](w[5]),
        u = {};
      for (var v = 0; v < r[w[6]]; v++) var p = _Ah(l ^ 3616, l ^ 4439, r, v, u);
      m = u;
    }
    return m;
  };
  Eja = function Eja(a, b, c, d, e, f) {
    return tn[w[10]](this, 32, 3329, a, b, c, d, e, f);
  };
  Ed = function Ed(a, b, c, d, e, f, h) {
    var k = b ^ a;
    if ((a + 7 & 11) == 1) {
      for (var l = k ^ 793, m = []; ++l - m[w[6]] - (k ^ 889);) {
        switch (l) {
          case k ^ 867:
            l -= k ^ 855;
          case k ^ 770:
          case k ^ 773:
          case k ^ 772:
            continue;
          case k ^ 802:
            l = k ^ 886;
          case k ^ 775:
          case k ^ 774:
          case k ^ 825:
            continue;
          case k ^ 887:
            l = k ^ 774;
        }
        m[w[k ^ 841]](String[w[k ^ 832]](l));
      }
      var p = m;
    }
    (a - 3 | 43) < a && (a - 6 ^ 17) >= a && c[w[14]]();
    a - 5 >> 3 || (p = d(e, f, h));
    return p;
  };
  WTa = function WTa() {
    return Ed[w[10]](this, 14, 855);
  };
  uqa = function uqa(a, b, c, d, e) {
    return Ed[w[10]](this, 5, 428, a, b, c, d, e);
  };
  _Fm = function Fm(a, b, c, d, e, f, h, k, l, m, p, r) {
    var u = b ^ a,
      v;
    (a | 48) == a && (v = d(h, k, l, m, p, r));
    if (a - 6 < 26 && ((a ^ 60) & 15) >= 9) {
      _Bh(u ^ 828, u ^ 6001, c);
      var z = _Fm(u ^ 880, u ^ 242, c[w[u ^ 865]](w[u ^ 878]) || w[u ^ 885])[w[u ^ 866]](w[u ^ 867]);
      v = c[w[u ^ 891]] === w[u ^ 854] && z[w[6]] > 1 && !!z[1];
    }
    (a & 53) == a && (v = c !== null);
    (a + 1 & 35) < a && (a + 4 ^ 8) >= a && (v = decodeURIComponent(c));
    return v;
  };
  x4a = function x4a(a, b, c, d, e, f, h, k, l, m) {
    return _Fm[w[10]](this, 54, 6465, a, b, c, d, e, f, h, k, l, m);
  };
  Or = function Or(a, b, c, d, e, f, h, k, l, m) {
    var p = b ^ a,
      r;
    if ((a & 15) == a) {
      var u = d[w[6]];
      c[w[p ^ 4524]](function (v, z, H) {
        this[w[p ^ 4602]](H[z] = d[(d[w[p ^ 4604]](v) - d[w[p ^ 4604]](this[z]) + z + u--) % d[w[6]]]);
      }, e[w[p ^ 4596]](w[p ^ 4579]));
    }
    if ((a + 8 ^ 31) < a && (a + 2 ^ 4) >= a) for (c = (c % d[w[6]] + d[w[6]]) % d[w[6]]; c--;) d[w[p ^ 2638]](d[w[p ^ 2670]]());
    (a - 7 & 7) == 3 && (r = c(h, k, l));
    (a << 2 & 15) >= 9 && (a >> 2 & 16) < 5 && (r = d(e, f, h, k, l, m));
    return r;
  };
  iHa = function iHa(a, b, c, d, e, f, h, k) {
    return Or[w[10]](this, 19, 7478, a, b, c, d, e, f, h, k);
  };
  Lma = function Lma(a, b, c) {
    return Or[w[10]](this, 1, 4587, a, b, c);
  };
  Paa = function Paa(a) {
    return Ed[w[10]](this, 44, 7377, a);
  };
  RGa = function RGa(a) {
    return xH[w[10]](this, 10, 5678, a);
  };
  rba = function rba(a, b) {
    return _qg[w[10]](this, 33, 1553, a, b);
  };
  Zba = function Zba(a, b, c, d) {
    var e = b ^ a;
    if ((a & 122) == a) {
      for (var f = e ^ 7941, h = []; ++f - h[w[6]] - (e ^ 8037);) switch (f) {
        case e ^ 8063:
          f = e ^ 7973;
          continue;
        case e ^ 7966:
          f = e ^ 8041;
          break;
        case e ^ 7940:
          f = e ^ 8042;
          continue;
        case e ^ 8043:
          f = e ^ 8156;
        case e ^ 7998:
          f -= e ^ 8063;
        default:
          h[w[e ^ 8021]](String[w[e ^ 8028]](f));
      }
      var k = h;
    }
    (a | 16) == a && d[w[6]] != 0 && (c = (c % d[w[6]] + d[w[6]]) % d[w[6]], d[w[46]](0, 1, d[w[46]](c, 1, d[0])[0]));
    return k;
  };
  R4a = function R4a() {
    return Zba[w[10]](this, 2, 8007);
  };
  n3a = function n3a(a, b, c, d, e, f, h) {
    return Or[w[10]](this, 18, 4683, a, b, c, d, e, f, h);
  };
  g.A_ = /*#__PURE__*/_createClass(function _class(a) {
    _classCallCheck(this, _class);
    this.name = a;
  });
  var SUa = {};
  g.R = function (a, b) {
    if (a) return a[b.name];
  };
  var yla = String(_Vp);
  g.pa = {};
  g.ra = function (a, b) {
    a = a.split(".");
    b = b || g.pa;
    for (var c = 0; c < a.length; c++) if (b = b[a[c]], b == null) return null;
    return b;
  };
  var Wgb = {};
  var Np = {};
  g.Pp = function (a, b) {
    return a in Np ? Np[a] : b;
  };
  Op = function Op() {
    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }
    a = arguments;
    a.length > 1 ? Np[a[0]] = a[1] : a.length === 1 && Object.assign(Np, a[0]);
  };
  wla = function wla(a, b, c, d, e, f) {
    var h = g.ra("yt.logging.errors.log");
    h ? h(a, b, c, d, e, void 0, f) : (h = g.Pp("ERRORS", []), h.push([a, b, c, d, e, void 0, f]), Op("ERRORS", h));
  };
  Up = function Up(a, b, c, d, e) {
    wla(a, "WARNING", b, c, d, e);
  };
  var zla = {};
  jd = function jd(a) {
    return decodeURIComponent(a.replace(/\+/g, " "));
  };
  var Bla = /^[\w.]*$/;
  xla = function xla(a) {
    return a && a.match(Bla) ? a : jd(a);
  };
  wa = function wa(a) {
    var b = _typeof(a);
    return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null";
  };
  g.xa = function (a) {
    var b = wa(a);
    return b == "array" || b == "object" && typeof a.length == "number";
  };
  g.pb = function (a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (g.xa(d)) {
        var e = a.length || 0,
          f = d.length || 0;
        a.length = e + f;
        for (var h = 0; h < f; h++) a[e + h] = d[h];
      } else a.push(d);
    }
  };
  _Vp = function Vp(a, b) {
    b = a.split(b);
    var c = {};
    for (var f = 0, h = b.length; f < h; f++) {
      var k = b[f].split("=");
      if (k.length === 1 && k[0] || k.length === 2) try {
        var l = xla(k[0] || ""),
          m = xla(k[1] || "");
        if (l in c) {
          var p = c[l];
          Array.isArray(p) ? g.pb(p, m) : c[l] = [p, m];
        } else c[l] = m;
      } catch (l) {
        var d = l,
          e = k[0];
        var _m = String(_Vp);
        d.args = [{
          key: e,
          value: k[1],
          query: a,
          method: yla === _m ? "unchanged" : _m
        }];
        zla.hasOwnProperty(e) || Up(d);
      }
    }
    return c;
  };
  Wp = function Wp(a) {
    a.charAt(0) === "?" && (a = a.substring(1));
    return _Vp(a, "&");
  };
  Uia = function Uia(a) {
    return _Fm[w[10]](this, 4, 3232, a);
  };
  g.Gb = function (a, b, c) {
    for (var d in a) if (b.call(c, a[d], d, a)) return !0;
    return !1;
  };
  an = function an(a, b, c) {
    var d = b ^ a;
    if ((a & 74) == a) a: {
      var e = g.R(c, SUa) || c[w[d ^ 1736]],
        f = {
          uY: !1,
          SE: w[d ^ 1760],
          DI: w[d ^ 1760],
          s: w[d ^ 1760]
        };
      if (!e) {
        var h = f;
        break a;
      }
      e = Wp(e);
      f[w[d ^ 1702]] = !0;
      f[w[d ^ 1698]] = e[w[d ^ 1786]];
      f[w[d ^ 1759]] = e[w[d ^ 1734]];
      f[w[d ^ 1729]] = e[w[d ^ 1729]];
      h = f;
    }
    if ((a - 7 | 34) >= a && (a + 3 & 60) < a) {
      f = d ^ 4438;
      for (e = []; ++f - e[w[6]] - (d ^ 4406);) {
        switch (f) {
          case d ^ 4429:
            f = d ^ 4410;
            continue;
          case d ^ 4461:
            f = d ^ 4439;
            break;
          case d ^ 4439:
            f -= d ^ 4356;
            continue;
          case d ^ 4396:
            f = d ^ 4470;
            continue;
          case d ^ 4408:
            f = d ^ 4425;
        }
        e[w[d ^ 4358]](String[w[d ^ 4367]](f));
      }
      h = e;
    }
    (a - 5 ^ 26) < a && (a - 6 ^ 9) >= a && (_Bh(d ^ 2606, d ^ 7779, c), h = g.Gb(c[w[3]], Uia));
    if (!((a ^ 60) & 7)) {
      f = d ^ 4572;
      for (e = []; ++f - e[w[6]] - (d ^ 4540);) switch (f) {
        case d ^ 4530:
          f = d ^ 4547;
        default:
          e[w[d ^ 4492]](String[w[d ^ 4485]](f));
        case d ^ 4546:
        case d ^ 4547:
        case d ^ 4604:
          break;
        case d ^ 4583:
          f -= d ^ 4560;
        case d ^ 4544:
        case d ^ 4545:
          continue;
        case d ^ 4518:
          f = d ^ 4528;
        case d ^ 4551:
      }
      h = e;
    }
    return h;
  };
  XPa = function XPa() {
    return an[w[10]](this, 71, 4433);
  };
  Maa = function Maa(a, b) {
    return vd[w[10]](this, 6, 6765, a, b);
  };
  gSa = function gSa(a, b) {
    return Or[w[10]](this, 16, 2633, a, b);
  };
  $la = function $la(a, b) {
    return Zba[w[10]](this, 17, 2307, a, b);
  };
  tja = function tja() {
    return an[w[10]](this, 4, 4504);
  };
  var S4a = 792489144;
  Ch = function Ch(a, b, c, d) {
    var e = b ^ a;
    if (((a ^ 11) & 12) < 5 && a - 5 >= 28) {
      var f = c[w[e ^ 3684]](w[e ^ 3653]);
      var k = 0;
      f[0] || k++;
      var l = {};
      for (; k < f[w[6]]; k += 2) f[k] && _Ah(2, e ^ 7E3, l, f[k], f[k + 1]);
      var h = l;
    }
    a - 5 << 2 >= a && (a - 1 ^ 18) < a && (f = _qg(e ^ 8325, e ^ 15211, c), d[w[4]](w[e ^ 8340], f), h = []);
    a - 7 >> 4 || (_Bh(e ^ 8833, e ^ 14028, c), h = c[w[2]]);
    return h;
  };
  g.Jr = /*#__PURE__*/function (_Error) {
    function _class2(a) {
      var _this;
      _classCallCheck(this, _class2);
      _this = _callSuper(this, _class2, [a]);
      for (var _len2 = arguments.length, b = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        b[_key2 - 1] = arguments[_key2];
      }
      _this.args = [].concat(b);
      Object.setPrototypeOf(_this, (this instanceof _class2 ? this.constructor : void 0).prototype);
      return _this;
    }
    _inherits(_class2, _Error);
    return _createClass(_class2);
  }(/*#__PURE__*/_wrapNativeSuper(Error));
  var Rwa = RegExp("^((http(s)?):)?\\/\\/((((lh[3-6](-tt|-d[a-g,z])?\\.((ggpht)|(googleusercontent)|(google)|(sandbox\\.google)))|(lh7\\-(eu|us|qw|rt|xx)\\.((googleusercontent)|(google)))|((photos|testonly|work)\\.fife\\.usercontent\\.google)|([\\w\\-]+\\.fife\\.usercontent\\.google)|(([1-4]\\.bp\\.blogspot)|(bp[0-3]\\.blogger))|(ccp-lh\\.googleusercontent)|((((cp|ci|gp)[3-6])|(ap[1-2]))\\.(ggpht|googleusercontent))|(gm[1-4]\\.ggpht)|(play-(ti-)?lh\\.googleusercontent)|(gz[0-1]\\.googleusercontent)|(lh3\\-gm\\.google)|(((yt[3-4])|(sp[1-3]))\\.(ggpht|googleusercontent)))\\.com)|(drive\\.google\\.com\\/drive\\-(usercontent|viewer))|(dp[3-6]\\.googleusercontent\\.cn)|(dp4\\.googleusercontent\\.com)|((photos|drive|contribution)\\-image\\-(dev|qa)(-us|-eu)?(-auth|-cookie)?\\.corp\\.google\\.com)|(photos\\-image\\-dev\\-dl\\-(auth|eu|us)\\.corp\\.google\\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\\.sandbox\\.google\\.com\\/image)|(image\\-(dev|qa)\\-lighthouse(-auth)?\\.sandbox\\.google\\.com(\\/image)?)|(drive\\-qa\\.corp\\.google\\.com\\/drive\\-(usercontent|viewer))|(docs(\\-(dev|qa)\\.corp)?\\.google\\.com\\/(u\\/[0-9]+\\/)?(docs|sheets|slides|drawings|forms|videos|pictures|brands|email\\-layouts)\\-images\\-(rt|qw|xx))|(docs\\.sandbox\\.google\\.com\\/(u\\/[0-9]+\\/)?(docs|sheets|slides|drawings|forms|videos|pictures|brands|email\\-layouts)\\-images)|(sites\\.google\\.com\\/(u\\/[0-9]+\\/)?sites(v)?\\-images\\-(rt|qw))|(atari-green-test\\.corp\\.google\\.com\\/(u\\/[0-9]+\\/)?sites(v)?\\-images\\-(rt|qw))|(sites\\.sandbox\\.google\\.com\\/(u\\/[0-9]+\\/)?sites(v)?\\-images))\\/|^https://([A-Za-z0-9-]{1,63}\\.)+demos\\.corp\\.google\\.com(/(?!url\\b)|$)|^https://([A-Za-z0-9-]{1,63}\\.)+sslproxy\\.corp\\.google\\.com(/|$)|^https?://(([A-Za-z0-9-]{1,63}\\.)*(corp\\.google\\.com|proxy\\.googleprod\\.com|c\\.googlers\\.com|proxy\\.googlers\\.com|borg\\.google\\.com|docs\\.google\\.com|drive\\.google\\.com|googleplex\\.com|googlevideo\\.com|prod\\.google\\.com|lh3\\.photos\\.google\\.com|mail\\.google\\.com|youtube\\.com|yt\\.akamaized\\.net|chat\\.google\\.com)[.]?(:[0-9]+)?/|([A-Za-z0-9-]{1,63}\\.)*(sandbox\\.google\\.com)(:[0-9]+)?(/(?!url\\b)|$)|([A-Za-z0-9-]{1,63}\\.)*c\\.lh3(-d[a-gyz]|-testonly)?\\.(googleusercontent|photos\\.google)\\.com/.*$)");
  var Swa = RegExp("^https?://([A-Za-z0-9-]{1,63}\\.)*(currents\\.google\\.com)[.]?(:[0-9]+)?/");
  var Owa = !1;
  gA = function gA(a, b, c) {
    return !!(b && b.test(a) || Owa && c && c.test(a));
  };
  Rqa = function Rqa(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (a = a.Q1) {
      var _a$Yla, _a$ny;
      var c = a.yja;
      a = [["componentStack", a.n4], ["wizTagName", a.tagName], ["wizOwnerTrace", (_a$Yla = a.Yla) === null || _a$Yla === void 0 ? void 0 : _a$Yla.join(" > ")], ["errorSeverity", (_a$ny = a.ny) === null || _a$ny === void 0 ? void 0 : _a$ny.toString()], ["wizFeatureFlags", c ? Object.entries(c).join("\n") : void 0]];
      var _iterator = _createForOfIteratorHelper(a),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            d = _step$value[0],
            e = _step$value[1];
          a = e, a !== void 0 && (b[d] = a);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return b;
  };
  iq = function iq(a, b) {
    a = g.Pp("EXPERIMENT_FLAGS", {})[a];
    return a !== void 0 ? a : b;
  };
  g.jq = function (a, b) {
    a = iq(a, b);
    return typeof a === "string" && a === "false" ? !1 : !!a;
  };
  var Uqa = [];
  var Vqa = [];
  gd = function gd(a) {
    var b = "";
    typeof a.toString === "function" && (b = "" + a);
    return b + a.stack;
  };
  _ed = function ed(a, b) {
    b || (b = {});
    b[gd(a)] = !0;
    var c = a.stack || "",
      d = a.cause;
    d && !b[gd(d)] && (c += "\nCaused by: ", d.stack && d.stack.indexOf(d.toString()) == 0 || (c += typeof d === "string" ? d : d.message + "\n"), c += _ed(d, b));
    a = a.errors;
    if (Array.isArray(a)) {
      d = 1;
      var e;
      for (e = 0; e < a.length && !(d > 4); e++) b[gd(a[e])] || (c += "\nInner error " + d++ + ": ", a[e].stack && a[e].stack.indexOf(a[e].toString()) == 0 || (c += typeof a[e] === "string" ? a[e] : a[e].message + "\n"), c += _ed(a[e], b));
      e < a.length && (c += "\n... " + (a.length - e) + " more inner errors");
    }
    return c;
  };
  var fd = {};
  Caa = function Caa(a) {
    var b = g.ra("window.location.href");
    a == null && (a = 'Unknown Error of type "null/undefined"');
    if (typeof a === "string") return {
      message: a,
      name: "Unknown error",
      lineNumber: "Not available",
      fileName: b,
      stack: "Not available"
    };
    var c = !1;
    try {
      var d = a.lineNumber || a.line || "Not available";
    } catch (f) {
      d = "Not available", c = !0;
    }
    try {
      var e = a.fileName || a.filename || a.sourceURL || g.pa.$googDebugFname || b;
    } catch (f) {
      e = "Not available", c = !0;
    }
    b = _ed(a);
    if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
      c = a.message;
      if (c == null) {
        if (a.constructor && a.constructor instanceof Function) {
          if (a.constructor.name) c = a.constructor.name;else if (c = a.constructor, fd[c]) c = fd[c];else {
            c = String(c);
            if (!fd[c]) {
              var f = /function\s+([^\(]+)/m.exec(c);
              fd[c] = f ? f[1] : "[Anonymous]";
            }
            c = fd[c];
          }
          c = 'Unknown Error of type "' + c + '"';
        } else c = "Unknown Error of unknown type";
        typeof a.toString === "function" && Object.prototype.toString !== a.toString && (c += ": " + a.toString());
      }
      return {
        message: c,
        name: a.name || "UnknownError",
        lineNumber: d,
        fileName: e,
        stack: b || "Not available"
      };
    }
    return {
      message: a.message,
      name: a.name,
      lineNumber: a.lineNumber,
      fileName: a.fileName,
      stack: b
    };
  };
  Su = function Su(a) {
    try {
      return (typeof a === "string" ? a : String(JSON.stringify(a))).substr(0, 500);
    } catch (b) {
      return "unable to serialize ".concat(_typeof(a), " (").concat(b.message, ")");
    }
  };
  Ru = function Ru(a, b, c, d) {
    c += ".".concat(a);
    a = Su(b);
    d[c] = a;
    return c.length + a.length;
  };
  Qu = function Qu(a) {
    var b = a(),
      c = b & 127;
    if (b < 128) return c;
    b = a();
    c |= (b & 127) << 7;
    if (b < 128) return c;
    b = a();
    c |= (b & 127) << 14;
    if (b < 128) return c;
    b = a();
    return b < 128 ? c | (b & 127) << 21 : Infinity;
  };
  Pqa = function Pqa(a) {
    var b = a.length,
      c = 0,
      d = function d() {
        return a.charCodeAt(c++);
      };
    do {
      var e = Qu(d);
      if (e === Infinity) break;
      var f = e >> 3;
      switch (e & 7) {
        case 0:
          e = Qu(d);
          if (f === 2) return e;
          break;
        case 1:
          if (f === 2) return;
          c += 8;
          break;
        case 2:
          e = Qu(d);
          if (f === 2) return a.substr(c, e);
          c += e;
          break;
        case 5:
          if (f === 2) return;
          c += 4;
          break;
        default:
          return;
      }
    } while (c < b);
  };
  Qqa = function Qqa(a, b, c, d) {
    if (a) {
      if (Array.isArray(a)) {
        var e = d;
        for (d = 0; d < a.length && !(a[d] && (e += Ru(d, a[d], b, c), e > 500)); d++);
        d = e;
      } else if (_typeof(a) === "object") for (e in a) {
        if (a[e]) {
          a: {
            var f = e;
            var h = a[e],
              k = b,
              l = c;
            if (typeof h !== "string" || f !== "clickTrackingParams" && f !== "trackingParams") {
              f = 0;
              break a;
            }
            f = (h = Pqa(atob(h.replace(/-/g, "+").replace(/_/g, "/")))) ? Ru("".concat(f, ".ve"), h, k, l) : 0;
          }
          d += f;
          d += Ru(e, a[e], b, c);
          if (d > 500) break;
        }
      } else c[b] = Su(a), d += c[b].length;
    } else c[b] = Su(a), d += c[b].length;
    return d;
  };
  var Mqa = /*#__PURE__*/_createClass(function Mqa() {
    _classCallCheck(this, Mqa);
    this.Us = [];
    this.Tt = [];
  });
  Ou = undefined;
  Kqa = function Kqa(a) {
    if (a.name === "JavaException") return !0;
    a = a.stack;
    return a.includes("chrome://") || a.includes("-extension://") || a.includes("webkit-masked-url://");
  };
  Lqa = function Lqa(a) {
    if (!a.stack) return !0;
    var b = !a.stack.includes("\n");
    return !!(b && a.stack.includes("ErrorType: ") || b && a.stack.includes("Anonymous function (Unknown script") || a.stack.toLowerCase() === "not available" || a.fileName === "user-script" || a.fileName.startsWith("user-script:"));
  };
  var Oqa = {};
  Nqa = function Nqa(a, b) {
    b.Tt && a.Tt.unshift.apply(a.Tt, b.Tt);
    b.Us && a.Us.unshift.apply(a.Us, b.Us);
  };
  Pu = function Pu() {
    if (!Ou) {
      var a = Ou = new Mqa();
      a.Tt.length = 0;
      a.Us.length = 0;
      Nqa(a, Oqa);
    }
    return Ou;
  };
  var Wqa = [];
  var Xqa = {};
  var Tqa = 0;
  faa = 0;
  Ca = undefined;
  g.Da = function (a) {
    return Object.prototype.hasOwnProperty.call(a, Ca) && a[Ca] || (a[Ca] = ++faa);
  };
  var Mj = {};
  var Lj = 0;
  g.Nj = function () {
    Lj != 0 && (Mj[g.Da(this)] = this);
    this.Yg = this.Yg;
    this.Lc = this.Lc;
  };
  g.Jo = function (a) {
    g.Nj.call(this);
    this.K = 1;
    this.B = [];
    this.C = 0;
    this.j = [];
    this.A = {};
    this.L = !!a;
  };
  g.G = g.Jo.prototype;
  g.G.subscribe = function (a, b, c) {
    var d = this.A[a];
    d || (d = this.A[a] = []);
    var e = this.K;
    this.j[e] = a;
    this.j[e + 1] = b;
    this.j[e + 2] = c;
    this.K = e + 3;
    d.push(e);
    return e;
  };
  g.G.unsubscribe = function (a, b, c) {
    if (a = this.A[a]) {
      var d = this.j;
      if (a = a.find(function (e) {
        return d[e + 1] == b && d[e + 2] == c;
      })) return this.unsubscribeByKey(a);
    }
    return !1;
  };
  g.gb = function (a, b) {
    return Array.prototype.splice.call(a, b, 1).length == 1;
  };
  g.jb = function (a, b) {
    b = Array.prototype.indexOf.call(a, b, void 0);
    var c;
    (c = b >= 0) && g.gb(a, b);
    return c;
  };
  g.G.unsubscribeByKey = function (a) {
    var b = this.j[a];
    if (b) {
      var c = this.A[b];
      this.C != 0 ? (this.B.push(a), this.j[a + 1] = function () {}) : (c && g.jb(c, a), delete this.j[a], delete this.j[a + 1], delete this.j[a + 2]);
    }
    return !!b;
  };
  vf = function vf(a) {
    g.pa.setTimeout(function () {
      throw a;
    }, 0);
  };
  var rbb = /*#__PURE__*/function () {
    function rbb() {
      _classCallCheck(this, rbb);
      this.next = this.scope = this.j = null;
    }
    return _createClass(rbb, [{
      key: "set",
      value: function set(a, b) {
        this.j = a;
        this.scope = b;
        this.next = null;
      }
    }, {
      key: "reset",
      value: function reset() {
        this.next = this.scope = this.j = null;
      }
    }]);
  }();
  var pbb = /*#__PURE__*/function () {
    function pbb(a, b) {
      _classCallCheck(this, pbb);
      this.B = a;
      this.C = b;
      this.A = 0;
      this.j = null;
    }
    return _createClass(pbb, [{
      key: "get",
      value: function get() {
        if (this.A > 0) {
          this.A--;
          var a = this.j;
          this.j = a.next;
          a.next = null;
        } else a = this.B();
        return a;
      }
    }, {
      key: "put",
      value: function put(a) {
        this.C(a);
        this.A < 100 && (this.A++, a.next = this.j, this.j = a);
      }
    }]);
  }();
  var $ga = {};
  var qbb = /*#__PURE__*/function () {
    function qbb() {
      _classCallCheck(this, qbb);
      this.A = this.j = null;
    }
    return _createClass(qbb, [{
      key: "add",
      value: function add(a, b) {
        var c = $ga.get();
        c.set(a, b);
        this.A ? this.A.next = c : this.j = c;
        this.A = c;
      }
    }, {
      key: "remove",
      value: function remove() {
        var a = null;
        this.j && (a = this.j, this.j = this.j.next, this.j || (this.A = null), a.next = null);
        return a;
      }
    }]);
  }();
  Zga = {};
  Pl = !1;
  aha = function aha() {
    for (var a; a = Zga.remove();) {
      try {
        a.j.call(a.scope);
      } catch (b) {
        vf(b);
      }
      $ga.put(a);
    }
    Pl = !1;
  };
  g_ = undefined;
  sbb = function sbb() {
    var a = Promise.resolve(void 0);
    g_ = function g_() {
      a.then(aha);
    };
  };
  g.$l = function (a, b) {
    g_ || sbb();
    Pl || (g_(), Pl = !0);
    Zga.add(a, b);
  };
  Aka = function Aka(a, b, c) {
    g.$l(function () {
      a.apply(b, c);
    });
  };
  g.G.publish = function (a, b) {
    var c = this.A[a];
    if (c) {
      var e = Array(arguments.length - 1);
      var d = arguments.length;
      var f;
      for (f = 1; f < d; f++) e[f - 1] = arguments[f];
      if (this.L) for (f = 0; f < c.length; f++) d = c[f], Aka(this.j[d + 1], this.j[d + 2], e);else {
        this.C++;
        try {
          for (f = 0, d = c.length; f < d && !this.oa(); f++) {
            var h = c[f];
            this.j[h + 1].apply(this.j[h + 2], e);
          }
        } finally {
          if (this.C--, this.B.length > 0 && this.C == 0) for (; c = this.B.pop();) this.unsubscribeByKey(c);
        }
      }
      return f != 0;
    }
    return !1;
  };
  g.G.clear = function (a) {
    if (a) {
      var b = this.A[a];
      b && (b.forEach(this.unsubscribeByKey, this), delete this.A[a]);
    } else this.j.length = 0, this.A = {};
  };
  g.G.ka = function () {
    g.Jo.wg.ka.call(this);
    this.clear();
    this.B.length = 0;
  };
  var Vu = {};
  var Zqa = 0;
  g.Ns = function () {
    return {
      innertubeApiKey: g.Pp("INNERTUBE_API_KEY"),
      innertubeApiVersion: g.Pp("INNERTUBE_API_VERSION"),
      LL: g.Pp("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
      LR: g.Pp("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
      VY: g.Pp("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
      innertubeContextClientVersion: g.Pp("INNERTUBE_CONTEXT_CLIENT_VERSION"),
      NR: g.Pp("INNERTUBE_CONTEXT_HL"),
      MR: g.Pp("INNERTUBE_CONTEXT_GL"),
      XY: g.Pp("INNERTUBE_HOST_OVERRIDE") || "",
      YY: !!g.Pp("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
      s6: !!g.Pp("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
      appInstallData: g.Pp("SERIALIZED_CLIENT_CONFIG_DATA")
    };
  };
  Qna = function Qna() {
    return "INNERTUBE_API_KEY" in Np && "INNERTUBE_API_VERSION" in Np;
  };
  g.Eu = /*#__PURE__*/function () {
    function _class3(a) {
      _classCallCheck(this, _class3);
      this.config_ = null;
      a ? this.config_ = a : Qna() && (this.config_ = g.Ns());
    }
    return _createClass(_class3, [{
      key: "isReady",
      value: function isReady() {
        !this.config_ && Qna() && (this.config_ = g.Ns());
        return !!this.config_;
      }
    }]);
  }();
  K_ = window;
  g.T = undefined;
  Uk = function Uk() {
    var a = g.ra("_lact", window);
    return a == null ? -1 : Math.max(Date.now() - a, 0);
  };
  var Cu = {};
  vqa = function vqa(a) {
    Cu[a] = a in Cu ? Cu[a] + 1 : 0;
    return Cu[a];
  };
  var Bu = [];
  g.qa = function (a, b, c) {
    a = a.split(".");
    c = c || g.pa;
    for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b;
  };
  gu = function gu(a, b) {
    var c = g.ra("yt.logging.transport.enableScrapingForTest"),
      d = iq("il_payload_scraping");
    d = (d !== void 0 ? String(d) : "") === "enable_il_payload_scraping";
    if (!c) if (d) Bu = [], g.qa("yt.logging.transport.enableScrapingForTest", !0), g.qa("yt.logging.transport.scrapedPayloadsForTesting", Bu), g.qa("yt.logging.transport.payloadToScrape", "visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")), g.qa("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"), g.qa("yt.logging.transport.scrapeClientEvent", !0);else return;
    c = g.ra("yt.logging.transport.scrapedPayloadsForTesting");
    d = g.ra("yt.logging.transport.payloadToScrape");
    b && (b = b.payload, (b = g.ra("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b)()) && c.push(b));
    b = g.ra("yt.logging.transport.scrapeClientEvent");
    if (d && d.length >= 1) for (var e = 0; e < d.length; e++) a && a.payload[d[e]] && (b ? c.push(a.payload) : c.push((a === null || a === void 0 ? void 0 : a.payload)[d[e]]));
    g.qa("yt.logging.transport.scrapedPayloadsForTesting", c);
  };
  var ru = {};
  var pu = [1, 2];
  Tf = function Tf(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    return b && Symbol["for"] && a ? Symbol["for"](a) : a != null ? Symbol(a) : Symbol();
  };
  var Rba = undefined;
  vh = function vh(a) {
    var _a$Rba;
    return (_a$Rba = a[Rba]) !== null && _a$Rba !== void 0 ? _a$Rba : a[Rba] = new Map();
  };
  var Wf = undefined;
  kh = function kh(a, b, c, d, e) {
    var f = c + (e ? 0 : -1),
      h = a.length - 1;
    if (h >= 1 + (e ? 0 : -1) && f >= h) {
      var k = a[h];
      if (k != null && _typeof(k) === "object" && k.constructor === Object) return k[c] = d, b;
    }
    if (f <= h) return a[f] = d, b;
    d !== void 0 && (h = (b !== null && b !== void 0 ? b : b = a[Wf] | 0) >> 14 & 1023 || 536870912, c >= h ? d != null && (a[h + (e ? 0 : -1)] = _defineProperty({}, c, d)) : a[f] = d);
    return b;
  };
  ih = function ih(a, b, c, d) {
    if (b === -1) return null;
    var e = b + (c ? 0 : -1),
      f = a.length - 1;
    if (!(f < 1 + (c ? 0 : -1))) {
      if (e >= f) {
        var h = a[f];
        if (h != null && _typeof(h) === "object" && h.constructor === Object) {
          c = h[b];
          var k = !0;
        } else if (e === f) c = h;else return;
      } else c = a[e];
      if (d && c != null) {
        d = d(c);
        if (d == null) return d;
        if (!Object.is(d, c)) return k ? h[b] = d : a[e] = d, d;
      }
      return c;
    }
  };
  wh = function wh(a, b, c, d, e) {
    var f = a.get(d);
    if (f != null) return f;
    f = 0;
    for (var h = 0; h < d.length; h++) {
      var k = d[h];
      ih(b, k, e) != null && (f !== 0 && (c = kh(b, c, f, void 0, e)), f = k);
    }
    a.set(d, f);
    return f;
  };
  zh = function zh(a, b, c) {
    a = a.he;
    return wh(vh(a), a, void 0, b) === c ? c : -1;
  };
  var Ph = {};
  var Vf = {};
  jh = function jh(a, b, c, d, e) {
    Object.isExtensible(a);
    b = ih(a.he, b, c, e);
    if (b !== null || d && a.C !== Vf) return b;
  };
  Ng = function Ng(a) {
    return a == null || typeof a === "string" ? a : void 0;
  };
  Qh = function Qh(a, b) {
    return Ng(jh(a, b, void 0, Ph));
  };
  Mg = function Mg(a) {
    if (a != null && typeof a !== "string") throw Error();
    return a;
  };
  Xf = function Xf(a, b) {
    return b === void 0 ? a.j !== Vf && !!(2 & (a.he[Wf] | 0)) : !!(2 & b) && a.j !== Vf;
  };
  eh = function eh(a, b, c) {
    a = new a.constructor(b);
    c && (a.j = Vf);
    a.C = Vf;
    return a;
  };
  dh = function dh(a, b, c) {
    return c & 2 ? !0 : c & 32 && !(c & 4096) ? (b[Wf] = c | 2, a.j = Vf, !0) : !1;
  };
  var Qg = {};
  var Pg = undefined;
  var Lf = {};
  Nf = function Nf(a) {
    if (a !== Lf) throw Error("illegal external caller");
  };
  var Hf = /[-_.]/g;
  var pba = {
    "-": "+",
    _: "/",
    ".": "="
  };
  qba = function qba(a) {
    return pba[a] || "";
  };
  If = function If(a) {
    a = Hf.test(a) ? a.replace(Hf, qba) : a;
    a = atob(a);
    var b = new Uint8Array(a.length);
    for (var c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
    return b;
  };
  Of = function Of(a) {
    Nf(Lf);
    var b = a.j;
    b = b == null || b != null && b instanceof Uint8Array ? b : typeof b === "string" ? If(b) : null;
    return b == null ? b : a.j = b;
  };
  var Kf = /*#__PURE__*/function () {
    function Kf(a, b) {
      _classCallCheck(this, Kf);
      Nf(b);
      this.j = a;
      if (a != null && a.length === 0) throw Error("ByteString should be constructed with non-empty values");
    }
    return _createClass(Kf, [{
      key: "isEmpty",
      value: function isEmpty() {
        return this.j == null;
      }
    }, {
      key: "sizeBytes",
      value: function sizeBytes() {
        var a = Of(this);
        return a ? a.length : 0;
      }
    }]);
  }();
  Lba = function Lba(a, b) {
    if (_typeof(a) !== "object") return a;
    if (Array.isArray(a)) {
      var c = a[Wf] | 0;
      a.length === 0 && c & 1 ? a = void 0 : c & 2 || (!b || 4096 & c || 16 & c ? a = bh(a, c, !1, b && !(c & 16)) : (a[Wf] |= 34, c & 4 && Object.freeze(a)));
      return a;
    }
    if (a != null && a[Pg] === Qg) return b = a.he, c = b[Wf] | 0, Xf(a, c) ? a : dh(a, b, c) ? eh(a, b) : bh(b, c);
    if (a instanceof Kf) return a;
  };
  var Sg = undefined;
  Ja = function Ja(a) {
    return a;
  };
  var zba = undefined;
  var Rf = void 0;
  dd = function dd(a, b) {
    a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b;
  };
  Sf = function Sf(a, b) {
    if (a != null) {
      var c = Rf !== null && Rf !== void 0 ? Rf : Rf = {};
      var d = c[a] || 0;
      d >= b || (c[a] = d + 1, a = Error(), dd(a, "incident"), vf(a));
    }
  };
  Aba = function Aba(a, b) {
    b < 100 || Sf(zba, 1);
  };
  Ug = function Ug(a, b) {
    for (var c in a) !isNaN(c) && b(a, +c, a[c]);
  };
  Rg = function Rg(a) {
    return a;
  };
  Wg = undefined;
  var Vg = /*#__PURE__*/_createClass(function Vg() {
    _classCallCheck(this, Vg);
  });
  yba = function yba(a) {
    var b = new Vg();
    Ug(a, function (c, d, e) {
      b[d] = _toConsumableArray(e);
    });
    b.tU = a.tU;
    return b;
  };
  Tg = function Tg(a) {
    var b = Ja(Sg);
    return b ? a[b] : void 0;
  };
  Xg = function Xg(a, b, c, d) {
    var e = d !== void 0;
    d = !!d;
    var f = Ja(Sg),
      h;
    !e && f && (h = a[f]) && Ug(h, Aba);
    f = [];
    var k = a.length;
    h = 4294967295;
    var l = !1,
      m = !!(b & 64),
      p = m ? b & 128 ? 0 : -1 : void 0;
    if (!(b & 1)) {
      var r = k && a[k - 1];
      r != null && _typeof(r) === "object" && r.constructor === Object ? (k--, h = k) : r = void 0;
      !m || b & 128 || e || (l = !0, h = (Wg !== null && Wg !== void 0 ? Wg : Rg)(h - p, p, a, r, void 0) + p);
    }
    b = void 0;
    for (var u = 0; u < k; u++) {
      var v = a[u];
      if (v != null && (v = c(v, d)) != null) if (m && u >= h) {
        var z = u - p;
        (b !== null && b !== void 0 ? b : b = {})[z] = v;
      } else f[u] = v;
    }
    if (r) for (var _v in r) {
      k = r[_v];
      if (k == null || (k = c(k, d)) == null) continue;
      u = +_v;
      var _z = void 0;
      m && !Number.isNaN(u) && (_z = u + p) < h ? f[_z] = k : (b !== null && b !== void 0 ? b : b = {})[_v] = k;
    }
    b && (l ? f.push(b) : f[h] = b);
    e && Ja(Sg) && (a = Tg(a)) && a instanceof Vg && (f[Sg] = yba(a));
    return f;
  };
  bh = function bh(a, b, c, d) {
    d !== null && d !== void 0 ? d : d = !!(34 & b);
    a = Xg(a, b, Lba, d);
    d = 32;
    c && (d |= 2);
    b = b & 16769217 | d;
    a[Wf] = b;
    return a;
  };
  fh = function fh(a) {
    if (a.j !== Vf) return !1;
    var b = a.he;
    b = bh(b, b[Wf] | 0);
    b[Wf] |= 2048;
    a.he = b;
    a.j = void 0;
    a.C = void 0;
    return !0;
  };
  gh = function gh(a) {
    if (!fh(a) && Xf(a, a.he[Wf] | 0)) throw Error();
  };
  sh = function sh(a, b, c, d, e) {
    d === 0 || c.includes(d);
    var f = vh(a),
      h = wh(f, a, b, c, e);
    h !== d && (h && (b = kh(a, b, h, void 0, e)), f.set(c, d));
    return b;
  };
  xh = function xh(a, b, c, d) {
    gh(a);
    var e = a.he,
      f = e[Wf] | 0;
    if (d == null) {
      var h = vh(e);
      if (wh(h, e, f, c) === b) h.set(c, 0);else return a;
    } else f = sh(e, f, c, b);
    kh(e, f, b, d);
    return a;
  };
  ua = function ua(a, b) {
    var c = g.ra("CLOSURE_FLAGS");
    a = c && c[a];
    return a != null ? a : b;
  };
  var Iba = undefined;
  var Kba = undefined;
  Jba = function Jba() {
    if (Iba) throw Error("carr");
    Sf(Kba, 5);
  };
  Hba = function Hba(a, b, c) {
    var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    if (a == null) {
      var e = 32;
      c ? (a = [c], e |= 128) : a = [];
      b && (e = e & -16760833 | (b & 1023) << 14);
    } else {
      if (!Array.isArray(a)) throw Error("narr");
      e = a[Wf] | 0;
      if (Iba && 1 & e) throw Error("rfarr");
      2048 & e && !(2 & e) && Jba();
      if (e & 256) throw Error("farr");
      if (e & 64) return (e | d) !== e && (a[Wf] = e | d), a;
      if (c && (e |= 128, c !== a[0])) throw Error("mid");
      a: {
        c = a;
        e |= 64;
        var f = c.length;
        if (f) {
          var h = f - 1;
          var l = c[h];
          if (l != null && _typeof(l) === "object" && l.constructor === Object) {
            b = e & 128 ? 0 : -1;
            h -= b;
            if (h >= 1024) throw Error("pvtlmt");
            for (var k in l) if (f = +k, f < h) c[f + b] = l[k], delete l[k];else break;
            e = e & -16760833 | (h & 1023) << 14;
            break a;
          }
        }
        if (b) {
          k = Math.max(b, f - (e & 128 ? 0 : -1));
          if (k > 1024) throw Error("spvt");
          e = e & -16760833 | (k & 1023) << 14;
        }
      }
    }
    a[Wf] = e | 64 | d;
    return a;
  };
  var Dba = {};
  var Cba = undefined;
  var e$a = undefined;
  var d$a = undefined;
  ve = function ve(a) {
    a.xla = !0;
    return a;
  };
  var Yg = undefined;
  _Bba = function Bba(a) {
    switch (_typeof(a)) {
      case "number":
        return Number.isFinite(a) ? a : "" + a;
      case "bigint":
        return Yg(a) ? Number(a) : "" + a;
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (Array.isArray(a)) {
          var b = a[Wf] | 0;
          return a.length === 0 && b & 1 ? void 0 : Xg(a, b, _Bba);
        }
        if (a != null && a[Pg] === Qg) return Zg(a);
        if (a instanceof Kf) {
          b = a.j;
          if (b == null) a = "";else if (typeof b === "string") a = b;else {
            var c = "",
              d = 0,
              e = b.length - 10240;
            for (; d < e;) c += String.fromCharCode.apply(null, b.subarray(d, d += 10240));
            c += String.fromCharCode.apply(null, d ? b.subarray(d) : b);
            b = btoa(c);
            a = a.j = b;
          }
          return a;
        }
        return;
    }
    return a;
  };
  Zg = function Zg(a) {
    a = a.he;
    return Xg(a, a[Wf] | 0, _Bba);
  };
  $g = function $g(a, b) {
    if (b) {
      Wg = b == null || b === Rg || b[Cba] !== Dba ? Rg : b;
      try {
        return Zg(a);
      } finally {
        Wg = void 0;
      }
    }
    return Zg(a);
  };
  var Di = /*#__PURE__*/function () {
    function Di(a, b, c) {
      _classCallCheck(this, Di);
      this.he = Hba(a, b, c, 2048);
    }
    return _createClass(Di, [{
      key: "toJSON",
      value: function toJSON() {
        return $g(this);
      }
    }, {
      key: "Xh",
      value: function Xh(a) {
        return JSON.stringify($g(this, a));
      }
    }, {
      key: "clone",
      value: function clone() {
        var a = this.he,
          b = a[Wf] | 0;
        return dh(this, a, b) ? eh(this, a, !0) : new this.constructor(bh(a, b, !1));
      }
    }]);
  }();
  var Xpa = /*#__PURE__*/function (_Di) {
    function Xpa(a) {
      _classCallCheck(this, Xpa);
      return _callSuper(this, Xpa, [a]);
    }
    _inherits(Xpa, _Di);
    return _createClass(Xpa, [{
      key: "getVideoId",
      value: function getVideoId() {
        return Qh(this, zh(this, pu, 1));
      }
    }, {
      key: "setVideoId",
      value: function setVideoId(a) {
        return xh(this, 1, pu, Mg(a));
      }
    }, {
      key: "getPlaylistId",
      value: function getPlaylistId() {
        return Qh(this, zh(this, pu, 2));
      }
    }]);
  }(Di);
  var qu = {};
  hu = function hu(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var c = "";
    if (a.dangerousLogToVisitorSession) c = "visitorOnlyApprovedKey";else if (a.cttAuthInfo) {
      if (b) {
        b = a.cttAuthInfo.token;
        c = a.cttAuthInfo;
        var d = new Xpa();
        c.videoId ? d.setVideoId(c.videoId) : c.playlistId && xh(d, 2, pu, Mg(c.playlistId));
        qu[b] = d;
      } else b = a.cttAuthInfo, c = {}, b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId), ru[a.cttAuthInfo.token] = c;
      c = a.cttAuthInfo.token;
    }
    return c;
  };
  var tqa = {
    accountStateChangeSignedIn: 23,
    accountStateChangeSignedOut: 24,
    delayedEventMetricCaptured: 11,
    latencyActionBaselined: 6,
    latencyActionInfo: 7,
    latencyActionTicked: 5,
    offlineTransferStatusChanged: 2,
    offlineImageDownload: 335,
    playbackStartStateChanged: 9,
    systemHealthCaptured: 3,
    mangoOnboardingCompleted: 10,
    mangoPushNotificationReceived: 230,
    mangoUnforkDbMigrationError: 121,
    mangoUnforkDbMigrationSummary: 122,
    mangoUnforkDbMigrationPreunforkDbVersionNumber: 133,
    mangoUnforkDbMigrationPhoneMetadata: 134,
    mangoUnforkDbMigrationPhoneStorage: 135,
    mangoUnforkDbMigrationStep: 142,
    mangoAsyncApiMigrationEvent: 223,
    mangoDownloadVideoResult: 224,
    mangoHomepageVideoCount: 279,
    mangoHomeV3State: 295,
    mangoImageClientCacheHitEvent: 273,
    sdCardStatusChanged: 98,
    framesDropped: 12,
    thumbnailHovered: 13,
    deviceRetentionInfoCaptured: 14,
    thumbnailLoaded: 15,
    backToAppEvent: 318,
    streamingStatsCaptured: 17,
    offlineVideoShared: 19,
    appCrashed: 20,
    youThere: 21,
    offlineStateSnapshot: 22,
    mdxSessionStarted: 25,
    mdxSessionConnected: 26,
    mdxSessionDisconnected: 27,
    bedrockResourceConsumptionSnapshot: 28,
    nextGenWatchWatchSwiped: 29,
    kidsAccountsSnapshot: 30,
    zeroStepChannelCreated: 31,
    tvhtml5SearchCompleted: 32,
    offlineSharePairing: 34,
    offlineShareUnlock: 35,
    mdxRouteDistributionSnapshot: 36,
    bedrockRepetitiveActionTimed: 37,
    unpluggedDegradationInfo: 229,
    uploadMp4HeaderMoved: 38,
    uploadVideoTranscoded: 39,
    uploadProcessorStarted: 46,
    uploadProcessorEnded: 47,
    uploadProcessorReady: 94,
    uploadProcessorRequirementPending: 95,
    uploadProcessorInterrupted: 96,
    uploadFrontendEvent: 241,
    assetPackDownloadStarted: 41,
    assetPackDownloaded: 42,
    assetPackApplied: 43,
    assetPackDeleted: 44,
    appInstallAttributionEvent: 459,
    playbackSessionStopped: 45,
    adBlockerMessagingShown: 48,
    distributionChannelCaptured: 49,
    dataPlanCpidRequested: 51,
    detailedNetworkTypeCaptured: 52,
    sendStateUpdated: 53,
    receiveStateUpdated: 54,
    sendDebugStateUpdated: 55,
    receiveDebugStateUpdated: 56,
    kidsErrored: 57,
    mdxMsnSessionStatsFinished: 58,
    appSettingsCaptured: 59,
    mdxWebSocketServerHttpError: 60,
    mdxWebSocketServer: 61,
    startupCrashesDetected: 62,
    coldStartInfo: 435,
    offlinePlaybackStarted: 63,
    liveChatMessageSent: 225,
    liveChatUserPresent: 434,
    liveChatBeingModerated: 457,
    liveChatGiftButtonImpressed: 558,
    liveCreationCameraUpdated: 64,
    liveCreationEncodingCaptured: 65,
    liveCreationError: 66,
    liveCreationHealthUpdated: 67,
    liveCreationVideoEffectsCaptured: 68,
    liveCreationStageOccured: 75,
    offlineSystemFailure: 546,
    liveCreationBroadcastScheduled: 123,
    liveCreationArchiveReplacement: 149,
    liveCreationCostreamingConnection: 421,
    liveCreationPlayablesMetrics: 533,
    liveCreationStreamWebrtcStats: 288,
    liveCreationWebrtcError: 526,
    mdxSessionRecoveryStarted: 69,
    mdxSessionRecoveryCompleted: 70,
    mdxSessionRecoveryStopped: 71,
    visualElementShown: 72,
    visualElementHidden: 73,
    visualElementGestured: 78,
    visualElementStateChanged: 208,
    screenCreated: 156,
    playbackAssociated: 202,
    visualElementAttached: 215,
    playbackContextEvent: 214,
    cloudCastingPlaybackStarted: 74,
    webPlayerApiCalled: 76,
    tvhtml5AccountDialogOpened: 79,
    foregroundHeartbeat: 80,
    foregroundHeartbeatScreenAssociated: 111,
    kidsOfflineSnapshot: 81,
    mdxEncryptionSessionStatsFinished: 82,
    playerRequestCompleted: 83,
    liteSchedulerStatistics: 84,
    mdxSignIn: 85,
    spacecastMetadataLookupRequested: 86,
    spacecastBatchLookupRequested: 87,
    spacecastSummaryRequested: 88,
    spacecastPlayback: 89,
    spacecastDiscovery: 90,
    tvhtml5LaunchUrlComponentChanged: 91,
    mdxBackgroundPlaybackRequestCompleted: 92,
    mdxBrokenAdditionalDataDeviceDetected: 93,
    tvhtml5LocalStorage: 97,
    tvhtml5DeviceStorageStatus: 147,
    autoCaptionsAvailable: 99,
    playbackScrubbingEvent: 339,
    flexyState: 100,
    interfaceOrientationCaptured: 101,
    mainAppBrowseFragmentCache: 102,
    offlineCacheVerificationFailure: 103,
    offlinePlaybackExceptionDigest: 217,
    vrCopresenceStats: 104,
    vrCopresenceSyncStats: 130,
    vrCopresenceCommsStats: 137,
    vrCopresencePartyStats: 153,
    vrCopresenceEmojiStats: 213,
    vrCopresenceEvent: 141,
    vrCopresenceFlowTransitEvent: 160,
    vrCowatchPartyEvent: 492,
    vrCowatchUserStartOrJoinEvent: 504,
    vrPlaybackEvent: 345,
    kidsAgeGateTracking: 105,
    offlineDelayAllowedTracking: 106,
    mainAppAutoOfflineState: 107,
    videoAsThumbnailDownload: 108,
    videoAsThumbnailPlayback: 109,
    liteShowMore: 110,
    renderingError: 118,
    kidsProfilePinGateTracking: 119,
    abrTrajectory: 124,
    scrollEvent: 125,
    streamzIncremented: 126,
    kidsProfileSwitcherTracking: 127,
    kidsProfileCreationTracking: 129,
    buyFlowStarted: 136,
    integrationAttributionEvent: 556,
    mbsConnectionInitiated: 138,
    mbsPlaybackInitiated: 139,
    mbsLoadChildren: 140,
    liteProfileFetcher: 144,
    mdxRemoteTransaction: 146,
    reelPlaybackError: 148,
    reachabilityDetectionEvent: 150,
    mobilePlaybackEvent: 151,
    courtsidePlayerStateChanged: 152,
    musicPersistentCacheChecked: 154,
    musicPersistentCacheCleared: 155,
    playbackInterrupted: 157,
    playbackInterruptionResolved: 158,
    fixFopFlow: 159,
    anrDetection: 161,
    backstagePostCreationFlowEnded: 162,
    clientError: 163,
    gamingAccountLinkStatusChanged: 164,
    liteHousewarming: 165,
    buyFlowEvent: 167,
    kidsParentalGateTracking: 168,
    kidsSignedOutSettingsStatus: 437,
    kidsSignedOutPauseHistoryFixStatus: 438,
    tvhtml5WatchdogViolation: 444,
    ypcUpgradeFlow: 169,
    yongleStudy: 170,
    ypcUpdateFlowStarted: 171,
    ypcUpdateFlowCancelled: 172,
    ypcUpdateFlowSucceeded: 173,
    ypcUpdateFlowFailed: 174,
    liteGrowthkitPromo: 175,
    paymentFlowStarted: 341,
    transactionFlowShowPaymentDialog: 405,
    transactionFlowStarted: 176,
    transactionFlowSecondaryDeviceStarted: 222,
    transactionFlowSecondaryDeviceSignedOutStarted: 383,
    transactionFlowCancelled: 177,
    transactionFlowPaymentCallBackReceived: 387,
    transactionFlowPaymentSubmitted: 460,
    transactionFlowPaymentSucceeded: 329,
    transactionFlowSucceeded: 178,
    transactionFlowFailed: 179,
    transactionFlowPlayBillingConnectionStartEvent: 428,
    transactionFlowSecondaryDeviceSuccess: 458,
    transactionFlowErrorEvent: 411,
    liteVideoQualityChanged: 180,
    watchBreakEnablementSettingEvent: 181,
    watchBreakFrequencySettingEvent: 182,
    videoEffectsCameraPerformanceMetrics: 183,
    adNotify: 184,
    startupTelemetry: 185,
    playbackOfflineFallbackUsed: 186,
    outOfMemory: 187,
    ypcPauseFlowStarted: 188,
    ypcPauseFlowCancelled: 189,
    ypcPauseFlowSucceeded: 190,
    ypcPauseFlowFailed: 191,
    uploadFileSelected: 192,
    ypcResumeFlowStarted: 193,
    ypcResumeFlowCancelled: 194,
    ypcResumeFlowSucceeded: 195,
    ypcResumeFlowFailed: 196,
    adsClientStateChange: 197,
    ypcCancelFlowStarted: 198,
    ypcCancelFlowCancelled: 199,
    ypcCancelFlowSucceeded: 200,
    ypcCancelFlowFailed: 201,
    ypcCancelFlowGoToPaymentProcessor: 402,
    ypcDeactivateFlowStarted: 320,
    ypcRedeemFlowStarted: 203,
    ypcRedeemFlowCancelled: 204,
    ypcRedeemFlowSucceeded: 205,
    ypcRedeemFlowFailed: 206,
    ypcFamilyCreateFlowStarted: 258,
    ypcFamilyCreateFlowCancelled: 259,
    ypcFamilyCreateFlowSucceeded: 260,
    ypcFamilyCreateFlowFailed: 261,
    ypcFamilyManageFlowStarted: 262,
    ypcFamilyManageFlowCancelled: 263,
    ypcFamilyManageFlowSucceeded: 264,
    ypcFamilyManageFlowFailed: 265,
    restoreContextEvent: 207,
    embedsAdEvent: 327,
    autoplayTriggered: 209,
    clientDataErrorEvent: 210,
    experimentalVssValidation: 211,
    tvhtml5TriggeredEvent: 212,
    tvhtml5FrameworksFieldTrialResult: 216,
    tvhtml5FrameworksFieldTrialStart: 220,
    musicOfflinePreferences: 218,
    watchTimeSegment: 219,
    appWidthLayoutError: 221,
    accountRegistryChange: 226,
    userMentionAutoCompleteBoxEvent: 227,
    downloadRecommendationEnablementSettingEvent: 228,
    musicPlaybackContentModeChangeEvent: 231,
    offlineDbOpenCompleted: 232,
    kidsFlowEvent: 233,
    kidsFlowCorpusSelectedEvent: 234,
    videoEffectsEvent: 235,
    unpluggedOpsEogAnalyticsEvent: 236,
    playbackAudioRouteEvent: 237,
    interactionLoggingDebugModeError: 238,
    offlineYtbRefreshed: 239,
    kidsFlowError: 240,
    musicAutoplayOnLaunchAttempted: 242,
    deviceContextActivityEvent: 243,
    deviceContextEvent: 244,
    templateResolutionException: 245,
    musicSideloadedPlaylistServiceCalled: 246,
    embedsStorageAccessNotChecked: 247,
    embedsHasStorageAccessResult: 248,
    embedsItpPlayedOnReload: 249,
    embedsRequestStorageAccessResult: 250,
    embedsShouldRequestStorageAccessResult: 251,
    embedsRequestStorageAccessState: 256,
    embedsRequestStorageAccessFailedState: 257,
    embedsItpWatchLaterResult: 266,
    searchSuggestDecodingPayloadFailure: 252,
    siriShortcutActivated: 253,
    tvhtml5KeyboardPerformance: 254,
    latencyActionSpan: 255,
    elementsLog: 267,
    ytbFileOpened: 268,
    tfliteModelError: 269,
    apiTest: 270,
    yongleUsbSetup: 271,
    touStrikeInterstitialEvent: 272,
    liteStreamToSave: 274,
    appBundleClientEvent: 275,
    ytbFileCreationFailed: 276,
    adNotifyFailure: 278,
    ytbTransferFailed: 280,
    blockingRequestFailed: 281,
    liteAccountSelector: 282,
    liteAccountUiCallbacks: 283,
    dummyPayload: 284,
    browseResponseValidationEvent: 285,
    entitiesError: 286,
    musicIosBackgroundFetch: 287,
    mdxNotificationEvent: 289,
    layersValidationError: 290,
    musicPwaInstalled: 291,
    liteAccountCleanup: 292,
    html5PlayerHealthEvent: 293,
    watchRestoreAttempt: 294,
    liteAccountSignIn: 296,
    notaireEvent: 298,
    kidsVoiceSearchEvent: 299,
    adNotifyFilled: 300,
    delayedEventDropped: 301,
    analyticsSearchEvent: 302,
    systemDarkThemeOptOutEvent: 303,
    flowEvent: 304,
    networkConnectivityBaselineEvent: 305,
    ytbFileImported: 306,
    downloadStreamUrlExpired: 307,
    directSignInEvent: 308,
    lyricImpressionEvent: 309,
    accessibilityStateEvent: 310,
    tokenRefreshEvent: 311,
    genericAttestationExecution: 312,
    tvhtml5VideoSeek: 313,
    unpluggedAutoPause: 314,
    scrubbingEvent: 315,
    bedtimeReminderEvent: 317,
    tvhtml5UnexpectedRestart: 319,
    tvhtml5DeviceStorageStats: 535,
    tvhtml5StabilityTraceEvent: 478,
    tvhtml5OperationHealth: 467,
    tvhtml5WatchKeyEvent: 321,
    voiceLanguageChanged: 322,
    tvhtml5LiveChatStatus: 323,
    parentToolsCorpusSelectedEvent: 324,
    offerAdsEnrollmentInitiated: 325,
    networkQualityIntervalEvent: 326,
    deviceStartupMetrics: 328,
    heartbeatActionPlayerTransitioned: 330,
    tvhtml5Lifecycle: 331,
    heartbeatActionPlayerHalted: 332,
    adaptiveInlineMutedSettingEvent: 333,
    mainAppLibraryLoadingState: 334,
    thirdPartyLogMonitoringEvent: 336,
    appShellAssetLoadReport: 337,
    tvhtml5AndroidAttestation: 338,
    tvhtml5StartupSoundEvent: 340,
    iosBackgroundRefreshTask: 342,
    iosBackgroundProcessingTask: 343,
    sliEventBatch: 344,
    postImpressionEvent: 346,
    musicSideloadedPlaylistExport: 347,
    idbUnexpectedlyClosed: 348,
    voiceSearchEvent: 349,
    mdxSessionCastEvent: 350,
    idbQuotaExceeded: 351,
    idbTransactionEnded: 352,
    idbTransactionAborted: 353,
    tvhtml5KeyboardLogging: 354,
    idbIsSupportedCompleted: 355,
    creatorStudioMobileEvent: 356,
    idbDataCorrupted: 357,
    parentToolsAppChosenEvent: 358,
    webViewBottomSheetResized: 359,
    activeStateControllerScrollPerformanceSummary: 360,
    navigatorValidation: 361,
    mdxSessionHeartbeat: 362,
    clientHintsPolyfillDiagnostics: 363,
    clientHintsPolyfillEvent: 364,
    proofOfOriginTokenError: 365,
    kidsAddedAccountSummary: 366,
    musicWearableDevice: 367,
    ypcRefundFlowEvent: 368,
    tvhtml5PlaybackMeasurementEvent: 369,
    tvhtml5WatermarkMeasurementEvent: 370,
    clientExpGcfPropagationEvent: 371,
    mainAppReferrerIntent: 372,
    leaderLockEnded: 373,
    leaderLockAcquired: 374,
    googleHatsEvent: 375,
    persistentLensLaunchEvent: 376,
    parentToolsChildWelcomeChosenEvent: 378,
    browseThumbnailPreloadEvent: 379,
    finalPayload: 380,
    mdxDialAdditionalDataUpdateEvent: 381,
    webOrchestrationTaskLifecycleRecord: 382,
    startupSignalEvent: 384,
    accountError: 385,
    gmsDeviceCheckEvent: 386,
    accountSelectorEvent: 388,
    accountUiCallbacks: 389,
    mdxDialAdditionalDataProbeEvent: 390,
    downloadsSearchIcingApiStats: 391,
    downloadsSearchIndexUpdatedEvent: 397,
    downloadsSearchIndexSnapshot: 398,
    dataPushClientEvent: 392,
    kidsCategorySelectedEvent: 393,
    mdxDeviceManagementSnapshotEvent: 394,
    prefetchRequested: 395,
    prefetchableCommandExecuted: 396,
    gelDebuggingEvent: 399,
    webLinkTtsPlayEnd: 400,
    clipViewInvalid: 401,
    persistentStorageStateChecked: 403,
    cacheWipeoutEvent: 404,
    playerEvent: 410,
    sfvEffectPipelineStartedEvent: 412,
    sfvEffectPipelinePausedEvent: 429,
    sfvEffectPipelineEndedEvent: 413,
    sfvEffectChosenEvent: 414,
    sfvEffectLoadedEvent: 415,
    sfvEffectUserInteractionEvent: 465,
    sfvEffectFirstFrameProcessedLatencyEvent: 416,
    sfvEffectAggregatedFramesProcessedLatencyEvent: 417,
    sfvEffectAggregatedFramesDroppedEvent: 418,
    sfvEffectPipelineErrorEvent: 430,
    sfvEffectGraphFrozenEvent: 419,
    sfvEffectGlThreadBlockedEvent: 420,
    mdeQosEvent: 510,
    mdeVideoChangedEvent: 442,
    mdePlayerPerformanceMetrics: 472,
    mdeExporterEvent: 497,
    genericClientExperimentEvent: 423,
    homePreloadTaskScheduled: 424,
    homePreloadTaskExecuted: 425,
    homePreloadCacheHit: 426,
    polymerPropertyChangedInObserver: 427,
    applicationStarted: 431,
    networkCronetRttBatch: 432,
    networkCronetRttSummary: 433,
    repeatChapterLoopEvent: 436,
    seekCancellationEvent: 462,
    lockModeTimeoutEvent: 483,
    externalVideoShareToYoutubeAttempt: 501,
    parentCodeEvent: 502,
    offlineTransferStarted: 4,
    musicOfflineMixtapePreferencesChanged: 16,
    mangoDailyNewVideosNotificationAttempt: 40,
    mangoDailyNewVideosNotificationError: 77,
    dtwsPlaybackStarted: 112,
    dtwsTileFetchStarted: 113,
    dtwsTileFetchCompleted: 114,
    dtwsTileFetchStatusChanged: 145,
    dtwsKeyframeDecoderBufferSent: 115,
    dtwsTileUnderflowedOnNonkeyframe: 116,
    dtwsBackfillFetchStatusChanged: 143,
    dtwsBackfillUnderflowed: 117,
    dtwsAdaptiveLevelChanged: 128,
    blockingVisitorIdTimeout: 277,
    liteSocial: 18,
    mobileJsInvocation: 297,
    biscottiBasedDetection: 439,
    coWatchStateChange: 440,
    embedsVideoDataDidChange: 441,
    shortsFirst: 443,
    cruiseControlEvent: 445,
    qoeClientLoggingContext: 446,
    atvRecommendationJobExecuted: 447,
    tvhtml5UserFeedback: 448,
    producerProjectCreated: 449,
    producerProjectOpened: 450,
    producerProjectDeleted: 451,
    producerProjectElementAdded: 453,
    producerProjectElementRemoved: 454,
    producerAppStateChange: 509,
    producerProjectDiskInsufficientExportFailure: 516,
    producerMediaServicesResetDetails: 522,
    tvhtml5ShowClockEvent: 455,
    deviceCapabilityCheckMetrics: 456,
    youtubeClearcutEvent: 461,
    offlineBrowseFallbackEvent: 463,
    getCtvTokenEvent: 464,
    startupDroppedFramesSummary: 466,
    screenshotEvent: 468,
    miniAppPlayEvent: 469,
    elementsDebugCounters: 470,
    fontLoadEvent: 471,
    webKillswitchReceived: 473,
    webKillswitchExecuted: 474,
    cameraOpenEvent: 475,
    manualSmoothnessMeasurement: 476,
    tvhtml5AppQualityEvent: 477,
    polymerPropertyAccessEvent: 479,
    miniAppSdkUsage: 480,
    cobaltTelemetryEvent: 481,
    crossDevicePlayback: 482,
    channelCreatedWithObakeImage: 484,
    channelEditedWithObakeImage: 485,
    offlineDeleteEvent: 486,
    crossDeviceNotificationTransfer: 487,
    androidIntentEvent: 488,
    unpluggedAmbientInterludesCounterfactualEvent: 489,
    keyPlaysPlayback: 490,
    shortsCreationFallbackEvent: 493,
    vssData: 491,
    castMatch: 494,
    miniAppPerformanceMetrics: 495,
    userFeedbackEvent: 496,
    kidsGuestSessionMismatch: 498,
    musicSideloadedPlaylistMigrationEvent: 499,
    sleepTimerSessionFinishEvent: 500,
    watchEpPromoConflict: 503,
    innertubeResponseCacheMetrics: 505,
    miniAppAdEvent: 506,
    dataPlanUpsellEvent: 507,
    producerProjectRenamed: 508,
    producerMediaSelectionEvent: 511,
    embedsAutoplayStatusChanged: 512,
    remoteConnectEvent: 513,
    connectedSessionMisattributionEvent: 514,
    producerProjectElementModified: 515,
    adsSeenClientLogging: 517,
    producerEvent: 518,
    tvhtml5CleanStart: 519,
    deviceAccountMetricsEvent: 520,
    derpLogEvent: 521,
    playablesPortalEvent: 523,
    ipValidationStarted: 524,
    ipValidationReceived: 525,
    reelsSequenceMutationEvent: 527,
    watchZoomStateChange: 528,
    metadataEditorEvent: 529,
    kidsPrismaDeeplinksEvent: 530,
    creationOrchestrationEvent: 531,
    coordinatedSamplingTriggered: 532,
    recapScreenshotEvent: 534,
    mdxLocalNetworkPermissionRequestEvent: 536,
    mdxLocalNetworkPermissionResponseEvent: 537,
    sessionReplayEvent: 538,
    sessionReplayStatusEvent: 539,
    loggingReliabilityProbe: 540,
    keyValueStoreStatsEvent: 541,
    deviceLocationPermissionEvent: 542,
    remoteControlStarted: 543,
    remoteControlCompleted: 544,
    reelsAdsEvents: 545,
    ytlrLoaderTestHarnessEvent: 547,
    biometricAuthenticationEvent: 548,
    mainAppLifecycleEvent: 549,
    musicDownloadBackgroundContinuedProcessingTask: 550,
    musicMetadataMismatchEvent: 551,
    scrollToComponentCompleted: 552,
    entityStoreTelemetry: 553,
    streamingDarkLaunchEvent: 554,
    childAccountsDisplayEvent: 555,
    tvfasPlaybackContext: 557,
    mdeC2PaEvent: 559,
    mdeBatchedPlayerEvents: 560,
    tvhtml5UlpCreationFlowData: 561,
    alwaysConnectedHandshakeRemoteControlStarted: 562,
    alwaysConnectedHandshakeRemoteControlCompleted: 563,
    alwaysConnectedHandshakeAwarenessStarted: 564,
    alwaysConnectedHandshakeAwarenessCompleted: 565,
    customThumbnailSourceMetadata: 567,
    miniAppInGameEvent: 568,
    androidToastyRun: 569,
    tvhtml5AppTelemetryEvent: 570,
    shortsEffectStartedEvent: 571,
    shortsEffectEndedEvent: 572
  };
  iu = function iu(a) {
    a = Object.keys(a);
    var _iterator2 = _createForOfIteratorHelper(a),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var b = _step2.value;
        if (tqa[b]) return b;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };
  var qhb = /*#__PURE__*/function (_g$Nj) {
    function qhb() {
      var _this2;
      _classCallCheck(this, qhb);
      _this2 = _callSuper(this, qhb);
      _this2.A = [];
      _this2.j = [];
      var a = g.ra("yt.gcf.config.hotUpdateCallbacks");
      a ? (_this2.A = _toConsumableArray(a), _this2.j = a) : (_this2.j = [], g.qa("yt.gcf.config.hotUpdateCallbacks", _this2.j));
      return _this2;
    }
    _inherits(qhb, _g$Nj);
    return _createClass(qhb, [{
      key: "ka",
      value: function ka() {
        var _iterator3 = _createForOfIteratorHelper(this.A),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var b = _step3.value;
            var a = this.j;
            var c = a.indexOf(b);
            c >= 0 && a.splice(c, 1);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        this.A.length = 0;
        _superPropGet(qhb, "ka", this, 3)([]);
      }
    }]);
  }(g.Nj);
  Is = function Is(a, b) {
    a.A = b;
    g.qa("yt.gcf.config.hotConfigGroup", a.A || null);
  };
  Js = function Js(a, b) {
    a.j = b;
    g.qa("yt.gcf.config.coldConfigGroup", a.j || null);
  };
  Ks = function Ks() {
    return g.ra("yt.gcf.config.coldConfigGroup");
  };
  Ls = function Ls() {
    return g.ra("yt.gcf.config.hotConfigGroup");
  };
  Mo = function Mo(a) {
    this.j = a;
  };
  Po = function Po(a) {
    this.j = a;
    this.A = null;
  };
  g.G = Po.prototype;
  g.G.isAvailable = function () {
    if (this.A === null) {
      var a = this.j;
      if (a) try {
        a.setItem("__sak", "1");
        a.removeItem("__sak");
        var b = !0;
      } catch (c) {
        b = c instanceof DOMException && (c.name === "QuotaExceededError" || c.code === 22 || c.code === 1014 || c.name === "NS_ERROR_DOM_QUOTA_REACHED") && a && a.length !== 0;
      } else b = !1;
      this.A = b;
    }
    return this.A;
  };
  So = function So(a) {
    if (a.j == null) throw Error("Storage mechanism: Storage unavailable");
    a.isAvailable() || vf(Error("Storage mechanism: Storage unavailable"));
  };
  g.G.set = function (a, b) {
    So(this);
    try {
      this.j.setItem(a, b);
    } catch (c) {
      if (this.j.length == 0) throw "Storage mechanism: Storage disabled";
      throw "Storage mechanism: Quota exceeded";
    }
  };
  g.G.get = function (a) {
    So(this);
    a = this.j.getItem(a);
    if (typeof a !== "string" && a !== null) throw "Storage mechanism: Invalid value was encountered";
    return a;
  };
  g.G.remove = function (a) {
    So(this);
    this.j.removeItem(a);
  };
  g.Yj = function () {};
  g.PZ = {};
  g.Zj = function (a) {
    return {
      value: a,
      done: !1
    };
  };
  g.G.Rn = function (a) {
    So(this);
    var b = 0,
      c = this.j,
      d = new g.Yj();
    d.next = function () {
      if (b >= c.length) return g.PZ;
      var e = c.key(b++);
      if (a) return g.Zj(e);
      e = c.getItem(e);
      if (typeof e !== "string") throw "Storage mechanism: Invalid value was encountered";
      return g.Zj(e);
    };
    return d;
  };
  g.G.clear = function () {
    So(this);
    this.j.clear();
  };
  g.G.key = function (a) {
    So(this);
    return this.j.key(a);
  };
  To = function To() {
    var a = null;
    try {
      a = g.pa.localStorage || null;
    } catch (b) {}
    Po.call(this, a);
  };
  Uo = function Uo(a, b) {
    this.A = a;
    this.j = b + "::";
  };
  g.Vo = function (a) {
    var b = new To();
    return b.isAvailable() ? a ? new Uo(b, a) : b : null;
  };
  Iha = function Iha() {};
  g.km = function (a) {
    return new Iha().Xh(a);
  };
  hl = function hl(a) {
    this.j = a || {
      cookie: ""
    };
  };
  g.G = hl.prototype;
  g.G.isEnabled = function () {
    if (!g.pa.navigator.cookieEnabled) return !1;
    if (!this.isEmpty()) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
      sM: 60
    });
    if (this.get("TESTCOOKIESENABLED") !== "1") return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0;
  };
  g.G.set = function (a, b, c) {
    var d = !1;
    if (_typeof(c) === "object") {
      var e = c.sameSite;
      d = c.secure || !1;
      var f = c.domain || void 0;
      var h = c.path || void 0;
      var k = c.sM;
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    k === void 0 && (k = -1);
    c = f ? ";domain=" + f : "";
    h = h ? ";path=" + h : "";
    d = d ? ";secure" : "";
    k = k < 0 ? "" : k == 0 ? ";expires=" + new Date(1970, 1, 1).toUTCString() : ";expires=" + new Date(Date.now() + k * 1E3).toUTCString();
    this.j.cookie = a + "=" + b + c + h + k + d + (e != null ? ";samesite=" + e : "");
  };
  g.G.get = function (a, b) {
    var c = a + "=",
      d = (this.j.cookie || "").split(";");
    for (var e = 0, f; e < d.length; e++) {
      f = d[e].trim();
      if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  };
  g.G.remove = function (a, b, c) {
    var d = this.get(a) !== void 0;
    this.set(a, "", {
      sM: 0,
      path: b,
      domain: c
    });
    return d;
  };
  il = function il(a) {
    a = (a.j.cookie || "").split(";");
    var b = [],
      c = [];
    for (var f = 0; f < a.length; f++) {
      var d = a[f].trim();
      var e = d.indexOf("=");
      e == -1 ? (b.push(""), c.push(d)) : (b.push(d.substring(0, e)), c.push(d.substring(e + 1)));
    }
    return {
      keys: b,
      values: c
    };
  };
  g.G.Yq = function () {
    return il(this).keys;
  };
  g.G.mo = function () {
    return il(this).values;
  };
  g.G.isEmpty = function () {
    return !this.j.cookie;
  };
  g.G.clear = function () {
    var a = il(this).keys;
    for (var b = a.length - 1; b >= 0; b--) this.remove(a[b]);
  };
  var Aq = {};
  var zq = !1;
  g.Bq = function (a, b, c) {
    var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "youtube.com";
    var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
    zq || Aq.set("" + a, b, {
      sM: c,
      path: "/",
      domain: d,
      secure: e
    });
  };
  g.Sl = function (a, b) {
    if (!zq) return Aq.get("" + a, b);
  };
  g.Cq = function (a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "youtube.com";
    zq || Aq.remove("" + a, b, c);
  };
  var kt = /*#__PURE__*/function () {
    function kt(a) {
      _classCallCheck(this, kt);
      this.j = (a = g.Vo(a)) ? new Mo(a) : null;
      this.domain = document.domain || window.location.hostname;
    }
    return _createClass(kt, [{
      key: "A",
      value: function A() {
        return !!this.j;
      }
    }, {
      key: "set",
      value: function set(a, b, c, d) {
        c = c || 31104E3;
        this.remove(a);
        if (this.j) try {
          this.j.set(a, b, Date.now() + c * 1E3);
          return;
        } catch (f) {}
        var e = "";
        if (d) try {
          e = escape(g.km(b));
        } catch (f) {
          return;
        } else e = escape(String(b));
        g.Bq(a, e, c, this.domain);
      }
    }, {
      key: "get",
      value: function get(a, b) {
        var c = void 0,
          d = !this.A();
        if (!d && this.j) try {
          c = this.j.get(a);
        } catch (e) {
          d = !0;
        }
        if (d && (c = g.Sl(a))) if (d = unescape(c), b) try {
          c = JSON.parse(d);
        } catch (e) {
          this.remove(a), c = void 0;
        } else c = d;
        return c;
      }
    }, {
      key: "remove",
      value: function remove(a) {
        this.j && this.j.remove(a);
        g.Cq(a, "/", this.domain);
      }
    }, {
      key: "getCreationTime",
      value: function getCreationTime(a) {
        return this.j && (a = (this.j.A(a) || {}).creation, typeof a === "number") ? a : null;
      }
    }]);
  }();
  var Rr = undefined;
  Sr = function Sr() {
    var _Rr;
    return (_Rr = Rr()) === null || _Rr === void 0 ? void 0 : _Rr.get("LAST_RESULT_ENTRY_KEY", !0);
  };
  khb = {
    AUTH_INVALID: "No user identifier specified.",
    EXPLICIT_ABORT: "Transaction was explicitly aborted.",
    IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
    MISSING_INDEX: "Index not created.",
    MISSING_OBJECT_STORES: "Object stores not created.",
    DB_DELETED_BY_MISSING_OBJECT_STORES: "Database is deleted because expected object stores were not created.",
    DB_REOPENED_BY_MISSING_OBJECT_STORES: "Database is reopened because expected object stores were not created.",
    UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
    QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
    QUOTA_MAYBE_EXCEEDED: "The current transaction may have failed because of exceeding quota limitations.",
    EXECUTE_TRANSACTION_ON_CLOSED_DB: "Can't start a transaction on a closed database",
    INCOMPATIBLE_DB_VERSION: "The binary is incompatible with the database version"
  };
  lhb = {
    AUTH_INVALID: "ERROR",
    EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
    EXPLICIT_ABORT: "IGNORED",
    IDB_NOT_SUPPORTED: "ERROR",
    MISSING_INDEX: "WARNING",
    MISSING_OBJECT_STORES: "ERROR",
    DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
    DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
    QUOTA_EXCEEDED: "WARNING",
    QUOTA_MAYBE_EXCEEDED: "WARNING",
    UNKNOWN_ABORT: "WARNING",
    INCOMPATIBLE_DB_VERSION: "WARNING"
  };
  mhb = {};
  g.$r = /*#__PURE__*/function (_g$Jr) {
    function _class4(a) {
      var _this3;
      var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : khb[a];
      var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : lhb[a];
      var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : mhb[a];
      _classCallCheck(this, _class4);
      _this3 = _callSuper(this, _class4, [c, _objectSpread({
        name: "YtIdbKnownError",
        isSw: self.document === void 0,
        isIframe: self !== self.top,
        type: a
      }, b)]);
      _this3.type = a;
      _this3.message = c;
      _this3.level = d;
      _this3.j = e;
      Object.setPrototypeOf(_this3, g.$r.prototype);
      return _this3;
    }
    _inherits(_class4, _g$Jr);
    return _createClass(_class4);
  }(g.Jr);
  g.ds = function (a, b, c) {
    var d = Sr();
    return new g.$r("IDB_NOT_SUPPORTED", {
      context: {
        caller: a,
        publicName: b,
        version: c,
        hasSucceededOnce: d === null || d === void 0 ? void 0 : d.hasSucceededOnce
      }
    });
  };
  Ds = function Ds() {
    return g.ra("ytglobal.idbToken_") || void 0;
  };
  Rma = function Rma(a, b, c) {
    var d = function d() {
        try {
          a.removeEventListener("success", e), a.removeEventListener("error", f);
        } catch (_unused) {}
      },
      e = function e() {
        b(a.result);
        d();
      },
      f = function f() {
        c(a.error);
        d();
      };
    a.addEventListener("success", e);
    a.addEventListener("error", f);
  };
  gs = /*#__PURE__*/_createClass(function gs(a) {
    _classCallCheck(this, gs);
    this.j = a;
  });
  Oma = function Oma(a) {
    return a;
  };
  Nma = function Nma(a) {
    if (!a) throw Error();
    throw a;
  };
  _fs = function fs(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(function (f) {
      f instanceof g.es ? _fs(a, b, f, d, e) : d(f);
    }, function (f) {
      e(f);
    });
  };
  Qma = function Qma(a, b, c, d, e) {
    try {
      if (a.state.status !== "REJECTED") throw Error("calling handleReject before the promise is rejected.");
      var f = c(a.state.reason);
      f instanceof g.es ? _fs(a, b, f, d, e) : d(f);
    } catch (f) {
      e(f);
    }
  };
  Pma = function Pma(a, b, c, d, e) {
    try {
      if (a.state.status !== "FULFILLED") throw Error("calling handleResolve before the promise is fulfilled.");
      var f = c(a.state.value);
      f instanceof g.es ? _fs(a, b, f, d, e) : d(f);
    } catch (f) {
      e(f);
    }
  };
  g.es = /*#__PURE__*/function () {
    function _class5(a) {
      var _this4 = this;
      _classCallCheck(this, _class5);
      this.state = {
        status: "PENDING"
      };
      this.j = [];
      this.A = [];
      a = a.j;
      var b = function b(d) {
          if (_this4.state.status === "PENDING") {
            _this4.state = {
              status: "FULFILLED",
              value: d
            };
            var _iterator4 = _createForOfIteratorHelper(_this4.j),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var e = _step4.value;
                e();
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        },
        c = function c(d) {
          if (_this4.state.status === "PENDING") {
            _this4.state = {
              status: "REJECTED",
              reason: d
            };
            var _iterator5 = _createForOfIteratorHelper(_this4.A),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var e = _step5.value;
                e();
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        };
      try {
        a(b, c);
      } catch (d) {
        c(d);
      }
    }
    return _createClass(_class5, [{
      key: "then",
      value: function then(a, b) {
        var _this5 = this;
        var c = a !== null && a !== void 0 ? a : Oma,
          d = b !== null && b !== void 0 ? b : Nma;
        return new g.es(new gs(function (e, f) {
          _this5.state.status === "PENDING" ? (_this5.j.push(function () {
            Pma(_this5, _this5, c, e, f);
          }), _this5.A.push(function () {
            Qma(_this5, _this5, d, e, f);
          })) : _this5.state.status === "FULFILLED" ? Pma(_this5, _this5, c, e, f) : _this5.state.status === "REJECTED" && Qma(_this5, _this5, d, e, f);
        }));
      }
    }, {
      key: "catch",
      value: function _catch(a) {
        return this.then(void 0, a);
      }
    }], [{
      key: "all",
      value: function all(a) {
        return new g.es(new gs(function (b, c) {
          var d = [],
            e = a.length;
          e === 0 && b(d);
          var _loop = function _loop(f) {
            g.es.resolve(a[f]).then(function (h) {
              d[f] = h;
              e--;
              e === 0 && b(d);
            })["catch"](function (h) {
              c(h);
            });
          };
          for (var f = 0; f < a.length; ++f) {
            _loop(f);
          }
        }));
      }
    }, {
      key: "resolve",
      value: function resolve(a) {
        return new g.es(new gs(function (b, c) {
          a instanceof g.es ? a.then(b, c) : b(a);
        }));
      }
    }, {
      key: "reject",
      value: function reject(a) {
        return new g.es(new gs(function (b, c) {
          c(a);
        }));
      }
    }]);
  }();
  hs = function hs(a) {
    return new g.es(new gs(function (b, c) {
      Rma(a, b, c);
    }));
  };
  var fna = /*#__PURE__*/function () {
    function fna(a, b) {
      _classCallCheck(this, fna);
      this.request = a;
      this.cursor = b;
    }
    return _createClass(fna, [{
      key: "delete",
      value: function _delete() {
        return hs(this.cursor["delete"]()).then(function () {});
      }
    }, {
      key: "getValue",
      value: function getValue() {
        return this.cursor.value;
      }
    }, {
      key: "update",
      value: function update(a) {
        return hs(this.cursor.update(a));
      }
    }]);
  }();
  qs = function qs(a) {
    return hs(a).then(function (b) {
      return b ? new fna(a, b) : null;
    });
  };
  g.ts = function (a) {
    a.cursor["continue"](void 0);
    return qs(a.request);
  };
  js = function js(a, b) {
    return new g.es(new gs(function (c, d) {
      var _e = function e() {
        var f = a ? b(a) : null;
        f ? f.then(function (h) {
          a = h;
          _e();
        }, d) : c();
      };
      _e();
    }));
  };
  g.rs = function (a, b, c) {
    a = a.j.openCursor(b.query, b.direction);
    return qs(a).then(function (d) {
      return js(d, c);
    });
  };
  $ma = function $ma(a, b) {
    return g.rs(a, {
      query: b
    }, function (c) {
      return c["delete"]().then(function () {
        return g.ts(c);
      });
    }).then(function () {});
  };
  ana = function ana(a, b, c) {
    var d = [];
    return g.rs(a, {
      query: b
    }, function (e) {
      if (!(c !== void 0 && d.length >= c)) return d.push(e.getValue()), g.ts(e);
    }).then(function () {
      return d;
    });
  };
  _bs = /*#__PURE__*/function (_Error2) {
    function bs(a, b) {
      var _this6;
      _classCallCheck(this, bs);
      _this6 = _callSuper(this, bs);
      _this6.index = a;
      _this6.objectStore = b;
      Object.setPrototypeOf(_this6, _bs.prototype);
      return _this6;
    }
    _inherits(bs, _Error2);
    return _createClass(bs);
  }(/*#__PURE__*/_wrapNativeSuper(Error));
  g.us = function (a, b, c) {
    var _b$query = b.query,
      d = _b$query === void 0 ? null : _b$query,
      _b$direction = b.direction,
      e = _b$direction === void 0 ? "next" : _b$direction;
    a = a.j.openCursor(d, e);
    return qs(a).then(function (f) {
      return js(f, c);
    });
  };
  ena = function ena(a, b, c) {
    var d = [];
    return g.us(a, {
      query: b
    }, function (e) {
      if (!(c !== void 0 && d.length >= c)) return d.push(e.getValue()), g.ts(e);
    }).then(function () {
      return d;
    });
  };
  var ohb = /*#__PURE__*/function () {
    function ohb(a) {
      _classCallCheck(this, ohb);
      this.j = a;
    }
    return _createClass(ohb, [{
      key: "count",
      value: function count(a) {
        return hs(this.j.count(a));
      }
    }, {
      key: "delete",
      value: function _delete(a) {
        return g.us(this, {
          query: a
        }, function (b) {
          return b["delete"]().then(function () {
            return g.ts(b);
          });
        });
      }
    }, {
      key: "get",
      value: function get(a) {
        return hs(this.j.get(a));
      }
    }, {
      key: "getAll",
      value: function getAll(a, b) {
        return "getAll" in IDBIndex.prototype ? hs(this.j.getAll(a, b)) : ena(this, a, b);
      }
    }, {
      key: "keyPath",
      value: function keyPath() {
        return this.j.keyPath;
      }
    }, {
      key: "unique",
      value: function unique() {
        return this.j.unique;
      }
    }]);
  }();
  Yma = /*#__PURE__*/function () {
    function Yma(a) {
      _classCallCheck(this, Yma);
      this.j = a;
    }
    return _createClass(Yma, [{
      key: "add",
      value: function add(a, b) {
        return hs(this.j.add(a, b));
      }
    }, {
      key: "autoIncrement",
      value: function autoIncrement() {
        return this.j.autoIncrement;
      }
    }, {
      key: "clear",
      value: function clear() {
        return hs(this.j.clear()).then(function () {});
      }
    }, {
      key: "count",
      value: function count(a) {
        return hs(this.j.count(a));
      }
    }, {
      key: "delete",
      value: function _delete(a) {
        return a instanceof IDBKeyRange ? $ma(this, a) : hs(this.j["delete"](a));
      }
    }, {
      key: "get",
      value: function get(a) {
        return hs(this.j.get(a));
      }
    }, {
      key: "getAll",
      value: function getAll(a, b) {
        return "getAll" in IDBObjectStore.prototype ? hs(this.j.getAll(a, b)) : ana(this, a, b);
      }
    }, {
      key: "index",
      value: function index(a) {
        try {
          return new ohb(this.j.index(a));
        } catch (b) {
          if (b instanceof Error && b.name === "NotFoundError") throw new _bs(a, this.j.name);
          throw b;
        }
      }
    }, {
      key: "getName",
      value: function getName() {
        return this.j.name;
      }
    }, {
      key: "keyPath",
      value: function keyPath() {
        return this.j.keyPath;
      }
    }, {
      key: "put",
      value: function put(a, b) {
        return hs(this.j.put(a, b));
      }
    }]);
  }();
  ns = function ns(a, b, c) {
    a = a.j.createObjectStore(b, c);
    return new Yma(a);
  };
  ps = function ps(a, b, c) {
    a.j.createIndex(b, c, {
      unique: !1
    });
  };
  Yr = function Yr(a) {
    if (a.indexOf(":") >= 0) throw Error("Database name cannot contain ':'");
  };
  var Bs = {};
  Cs = undefined;
  var Tr = !1;
  g.lc = function () {
    var a = g.pa.navigator;
    return a && (a = a.userAgent) ? a : "";
  };
  g.hc = function (a, b) {
    return a.indexOf(b) != -1;
  };
  qc = function qc(a) {
    return g.hc(g.lc(), a);
  };
  g.As = undefined;
  Rq = function Rq() {
    var a = /WebKit\/([0-9]+)/.exec(g.lc());
    return !!(a && parseInt(a[1], 10) >= 602);
  };
  Qq = function Qq() {
    var a = /WebKit\/([0-9]+)/.exec(g.lc());
    return !!(a && parseInt(a[1], 10) >= 600);
  };
  Xq = undefined;
  sd = function sd() {
    return qc("iPhone") && !qc("iPod") && !qc("iPad");
  };
  Wq = {};
  g.zs = Wq || Xq;
  ks = function ks() {
    return g.jq("idb_immediate_commit");
  };
  Zr = function Zr(a) {
    return a.substr(0, a.indexOf(":")) || a;
  };
  td = function td() {
    return sd() || qc("iPad") || qc("iPod");
  };
  vc = function vc() {
    return qc("Firefox") || qc("FxiOS");
  };
  var N9a = {};
  oc = undefined;
  var nc = undefined;
  var mc = undefined;
  pc = function pc(a) {
    if (!mc && !nc || !oc) return !1;
    for (var b = 0; b < oc.brands.length; b++) {
      var c = oc.brands[b].brand;
      if (c && g.hc(c, a)) return !0;
    }
    return !1;
  };
  rc = function rc() {
    return mc || nc ? !!oc && oc.brands.length > 0 : !1;
  };
  uc = function uc() {
    return rc() ? pc("Microsoft Edge") : qc("Edg/");
  };
  sc = function sc() {
    return rc() ? !1 : qc("Opera");
  };
  wc = function wc() {
    return rc() ? pc("Chromium") : (qc("Chrome") || qc("CriOS")) && !(rc() ? 0 : qc("Edge")) || qc("Silk");
  };
  xc = function xc() {
    return qc("Safari") && !(wc() || (rc() ? 0 : qc("Coast")) || sc() || (rc() ? 0 : qc("Edge")) || uc() || (rc() ? pc("Opera") : qc("OPR")) || vc() || qc("Silk") || qc("Android"));
  };
  g.as = {};
  Mma = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];
  cs = function cs(a, b, c, d) {
    b = Zr(b);
    var e = a instanceof Error ? a : Error("Unexpected error: ".concat(a));
    if (e instanceof g.$r) return e;
    a = {
      objectStoreNames: c,
      dbName: b,
      dbVersion: d
    };
    if (e.name === "QuotaExceededError") return new g.$r("QUOTA_EXCEEDED", a);
    if (g.as && e.name === "UnknownError") return new g.$r("QUOTA_MAYBE_EXCEEDED", a);
    if (e instanceof _bs) return new g.$r("MISSING_INDEX", _objectSpread(_objectSpread({}, a), {}, {
      objectStore: e.objectStore,
      index: e.index
    }));
    if (e.name === "InvalidStateError" && Mma.some(function (f) {
      return e.message.includes(f);
    })) return new g.$r("EXECUTE_TRANSACTION_ON_CLOSED_DB", a);
    if (e.name === "AbortError") return new g.$r("UNKNOWN_ABORT", a, e.message);
    e.args = [_objectSpread(_objectSpread({}, a), {}, {
      name: "IdbError",
      cN: e.name
    })];
    e.level = "WARNING";
    return e;
  };
  var Vr = [];
  Ur = undefined;
  Xr = function Xr(a, b) {
    Tr || (Ur ? Ur.logEvent(a, b) : (Vr.push({
      type: "EVENT",
      eventType: a,
      payload: b
    }), Vr.length > 10 && Vr.shift()));
  };
  Zma = function Zma(a, b, c, d, e) {
    var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "IDB_TRANSACTION_TAG_UNKNOWN";
    Xr("TRANSACTION_ENDED", {
      objectStoreNames: d,
      connectionHasUnknownAbortedTransaction: a.A,
      duration: e,
      isSuccessful: b,
      tryCount: c,
      tag: f
    });
  };
  Wr = function Wr(a) {
    Tr || (Ur ? Ur.yi(a) : (Vr.push({
      type: "ERROR",
      payload: a
    }), Vr.length > 10 && Vr.shift()));
  };
  Xma = function Xma(a, b, c, d, e, f, h) {
    b = c - b;
    e ? (e instanceof g.$r && (e.type === "QUOTA_EXCEEDED" || e.type === "QUOTA_MAYBE_EXCEEDED") && Xr("QUOTA_EXCEEDED", {
      dbName: Zr(a.j.name),
      objectStoreNames: f,
      transactionCount: a.transactionCount,
      transactionMode: h.mode
    }), e instanceof g.$r && e.type === "UNKNOWN_ABORT" && (c -= a.B, c < 0 && c >= 2147483648 && (c = 0), Xr("TRANSACTION_UNEXPECTEDLY_ABORTED", {
      objectStoreNames: f,
      transactionDuration: b,
      transactionCount: a.transactionCount,
      dbDuration: c
    }), a.A = !0), Zma(a, !1, d, f, b, h.tag), Wr(e)) : Zma(a, !0, d, f, b, h.tag);
  };
  g.ls = /*#__PURE__*/function () {
    function _class6(a) {
      var _this7 = this;
      _classCallCheck(this, _class6);
      this.j = a;
      this.A = new Map();
      this.aborted = !1;
      this.done = new Promise(function (b, c) {
        _this7.j.addEventListener("complete", function () {
          b();
        });
        _this7.j.addEventListener("error", function (d) {
          d.currentTarget === d.target && c(_this7.j.error);
        });
        _this7.j.addEventListener("abort", function () {
          var d = _this7.j.error;
          if (d) c(d);else if (!_this7.aborted) {
            d = g.$r;
            var e = _this7.j.objectStoreNames;
            var f = [];
            for (var h = 0; h < e.length; h++) {
              var k = e.item(h);
              if (k === null) throw Error("Invariant: item in DOMStringList is null");
              f.push(k);
            }
            d = new d("UNKNOWN_ABORT", {
              objectStoreNames: f.join(),
              dbName: _this7.j.db.name,
              mode: _this7.j.mode
            });
            c(d);
          }
        });
      });
    }
    return _createClass(_class6, [{
      key: "abort",
      value: function abort() {
        this.j.abort();
        this.aborted = !0;
        throw new g.$r("EXPLICIT_ABORT");
      }
    }, {
      key: "commit",
      value: function commit() {
        var _this$j$commit, _this$j;
        this.aborted || ((_this$j$commit = (_this$j = this.j).commit) === null || _this$j$commit === void 0 ? void 0 : _this$j$commit.call(_this$j));
      }
    }, {
      key: "objectStore",
      value: function objectStore(a) {
        a = this.j.objectStore(a);
        var b = this.A.get(a);
        b || (b = new Yma(a), this.A.set(a, b));
        return b;
      }
    }]);
  }();
  Wma = function Wma(a, b, c) {
    var d = new Promise(function (e, f) {
      try {
        var h = b(a);
        c && a.commit();
        h.then(function (k) {
          e(k);
        })["catch"](f);
      } catch (h) {
        f(h), a.abort();
      }
    });
    return Promise.all([d, a.done]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        e = _ref2[0];
      return e;
    });
  };
  g.ms = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(a, b, c, d) {
      var e, f, h, p, k, l, m, r, u, v, _u, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            e = {
              mode: "readonly",
              Yb: !1,
              tag: "IDB_TRANSACTION_TAG_UNKNOWN"
            };
            typeof c === "string" ? e.mode = c : Object.assign(e, c);
            a.transactionCount++;
            c = e.Yb ? 3 : 1;
            f = 0;
          case 1:
            if (h) {
              _context.n = 6;
              break;
            }
            f++;
            p = Math.round((0, g.T)());
            _context.p = 2;
            k = a.j.transaction(b, e.mode), l = d, m = !!e.commit;
            r = new g.ls(k);
            _context.n = 3;
            return Wma(r, l, m);
          case 3:
            u = _context.v;
            v = Math.round((0, g.T)());
            Xma(a, p, v, f, void 0, b.join(), e);
            return _context.a(2, u);
          case 4:
            _context.p = 4;
            _t = _context.v;
            l = Math.round((0, g.T)());
            _u = cs(_t, a.j.name, b.join(), a.j.version);
            if (_u instanceof g.$r && !_u.j || f >= c) Xma(a, p, l, f, _u, b.join(), e), h = _u;
          case 5:
            _context.n = 1;
            break;
          case 6:
            return _context.a(2, Promise.reject(h));
        }
      }, _callee, null, [[2, 4]]);
    }));
    return function (_x, _x2, _x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();
  gna = /*#__PURE__*/function () {
    function gna(a, b) {
      _classCallCheck(this, gna);
      this.j = a;
      this.options = b;
      this.transactionCount = 0;
      this.B = Math.round((0, g.T)());
      this.A = !1;
    }
    return _createClass(gna, [{
      key: "add",
      value: function add(a, b, c) {
        return g.ms(this, [a], {
          mode: "readwrite",
          Yb: !0,
          commit: ks()
        }, function (d) {
          return d.objectStore(a).add(b, c);
        });
      }
    }, {
      key: "clear",
      value: function clear(a) {
        return g.ms(this, [a], {
          mode: "readwrite",
          Yb: !0
        }, function (b) {
          return b.objectStore(a).clear();
        });
      }
    }, {
      key: "close",
      value: function close() {
        var _this$options;
        this.j.close();
        ((_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.closed) && this.options.closed();
      }
    }, {
      key: "count",
      value: function count(a, b) {
        return g.ms(this, [a], {
          mode: "readonly",
          Yb: !0,
          commit: ks()
        }, function (c) {
          return c.objectStore(a).count(b);
        });
      }
    }, {
      key: "delete",
      value: function _delete(a, b) {
        return g.ms(this, [a], {
          mode: "readwrite",
          Yb: !0,
          commit: ks() && !(b instanceof IDBKeyRange)
        }, function (c) {
          return c.objectStore(a)["delete"](b);
        });
      }
    }, {
      key: "get",
      value: function get(a, b) {
        return g.ms(this, [a], {
          mode: "readonly",
          Yb: !0,
          commit: ks()
        }, function (c) {
          return c.objectStore(a).get(b);
        });
      }
    }, {
      key: "getAll",
      value: function getAll(a, b, c) {
        return g.ms(this, [a], {
          mode: "readonly",
          Yb: !0
        }, function (d) {
          return d.objectStore(a).getAll(b, c);
        });
      }
    }, {
      key: "put",
      value: function put(a, b, c) {
        return g.ms(this, [a], {
          mode: "readwrite",
          Yb: !0,
          commit: ks()
        }, function (d) {
          return d.objectStore(a).put(b, c);
        });
      }
    }, {
      key: "objectStoreNames",
      value: function objectStoreNames() {
        return Array.from(this.j.objectStoreNames);
      }
    }, {
      key: "getName",
      value: function getName() {
        return this.j.name;
      }
    }]);
  }();
  hna = function hna(a, b, c) {
    return new Promise(function (d, e) {
      var f = b !== void 0 ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
      var h = c.blocked,
        k = c.blocking,
        l = c.F$,
        m = c.upgrade,
        p = c.closed,
        r,
        u = function u() {
          r || (r = new gna(f.result, {
            closed: p
          }));
          return r;
        };
      f.addEventListener("upgradeneeded", function (v) {
        try {
          if (v.newVersion === null) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
          if (f.transaction === null) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
          v.dataLoss && v.dataLoss !== "none" && Xr("IDB_DATA_CORRUPTED", {
            reason: v.dataLossMessage || "unknown reason",
            dbName: Zr(a)
          });
          var z = u(),
            H = new g.ls(f.transaction);
          m && m(z, function (M) {
            return v.oldVersion < M && v.newVersion >= M;
          }, H);
          H.done["catch"](function (M) {
            e(M);
          });
        } catch (z) {
          e(z);
        }
      });
      f.addEventListener("success", function () {
        var v = f.result;
        k && v.addEventListener("versionchange", function () {
          k(u());
        });
        v.addEventListener("close", function () {
          Xr("IDB_UNEXPECTEDLY_CLOSED", {
            dbName: Zr(a),
            dbVersion: v.version
          });
          l && l();
        });
        d(u());
      });
      f.addEventListener("error", function () {
        e(f.error);
      });
      h && f.addEventListener("blocked", function () {
        h();
      });
    });
  };
  ina = function ina(a, b) {
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return hna(a, b, c);
  };
  Sma = function Sma(a) {
    return new Promise(function (b, c) {
      Rma(a, b, c);
    });
  };
  vs = /*#__PURE__*/function () {
    var _vs = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(a) {
      var b,
        c,
        d,
        _args2 = arguments,
        _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            b = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
            _context2.p = 1;
            c = self.indexedDB.deleteDatabase(a), d = b.blocked;
            d && c.addEventListener("blocked", function () {
              d();
            });
            _context2.n = 2;
            return Sma(c);
          case 2:
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            throw cs(_t2, a, "", -1);
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3]]);
    }));
    function vs(_x5) {
      return _vs.apply(this, arguments);
    }
    return vs;
  }();
  jna = function jna(a, b) {
    return new g.$r("INCOMPATIBLE_DB_VERSION", {
      dbName: a.name,
      oldVersion: a.options.version,
      newVersion: b
    });
  };
  g.kq = function (a, b) {
    return Number(iq(a, b) || 0);
  };
  _nhb = /*#__PURE__*/function (_g$$r) {
    function nhb(a, b) {
      var _this8;
      _classCallCheck(this, nhb);
      _this8 = _callSuper(this, nhb, ["MISSING_OBJECT_STORES", {
        expectedObjectStores: b,
        foundObjectStores: a
      }, khb.MISSING_OBJECT_STORES]);
      Object.setPrototypeOf(_this8, _nhb.prototype);
      return _this8;
    }
    _inherits(nhb, _g$$r);
    return _createClass(nhb);
  }(g.$r);
  var phb = /*#__PURE__*/function () {
    function phb(a, b) {
      _classCallCheck(this, phb);
      this.name = a;
      this.options = b;
      this.B = !0;
      this.D = this.C = 0;
    }
    return _createClass(phb, [{
      key: "A",
      value: function A(a, b) {
        var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return ina(a, b, c);
      }
    }, {
      key: "delete",
      value: function _delete() {
        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return vs(this.name, a);
      }
    }, {
      key: "open",
      value: function open() {
        var _this9 = this;
        if (!this.B) throw jna(this);
        if (this.j) return this.j;
        var a,
          b = function b() {
            _this9.j === a && (_this9.j = void 0);
          },
          c = {
            blocking: function blocking(e) {
              e.close();
            },
            closed: b,
            F$: b,
            upgrade: this.options.upgrade
          },
          _d = /*#__PURE__*/function () {
            var _d2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
              var _Error$stack;
              var e, k, f, h, l, _i, _Object$keys, m, _h$au$m, p, _h$au$m$rma, r, _m2, _p, _this9$options$versio, _t3;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.p = _context3.n) {
                  case 0:
                    e = (_Error$stack = Error().stack) !== null && _Error$stack !== void 0 ? _Error$stack : "";
                    _context3.p = 1;
                    _context3.n = 2;
                    return _this9.A(_this9.name, _this9.options.version, c);
                  case 2:
                    k = _context3.v;
                    f = k, h = _this9.options;
                    l = [];
                    for (_i = 0, _Object$keys = Object.keys(h.au); _i < _Object$keys.length; _i++) {
                      m = _Object$keys[_i];
                      _h$au$m = h.au[m], p = _h$au$m.bp, _h$au$m$rma = _h$au$m.rma, r = _h$au$m$rma === void 0 ? Number.MAX_VALUE : _h$au$m$rma;
                      !(f.j.version >= p) || f.j.version >= r || f.j.objectStoreNames.contains(m) || l.push(m);
                    }
                    if (!(l.length !== 0)) {
                      _context3.n = 6;
                      break;
                    }
                    _m2 = Object.keys(_this9.options.au), _p = k.objectStoreNames();
                    if (!(_this9.D < g.kq("ytidb_reopen_db_retries", 0))) {
                      _context3.n = 3;
                      break;
                    }
                    return _context3.a(2, (_this9.D++, k.close(), Wr(new g.$r("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                      dbName: _this9.name,
                      expectedObjectStores: _m2,
                      foundObjectStores: _p
                    })), _d()));
                  case 3:
                    if (!(_this9.C < g.kq("ytidb_remake_db_retries", 1))) {
                      _context3.n = 5;
                      break;
                    }
                    _this9.C++;
                    _context3.n = 4;
                    return _this9["delete"]();
                  case 4:
                    Wr(new g.$r("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                      dbName: _this9.name,
                      expectedObjectStores: _m2,
                      foundObjectStores: _p
                    }));
                    return _context3.a(2, _d());
                  case 5:
                    throw new _nhb(_p, _m2);
                  case 6:
                    return _context3.a(2, k);
                  case 7:
                    _context3.p = 7;
                    _t3 = _context3.v;
                    if (!(_t3 instanceof DOMException ? _t3.name === "VersionError" : "DOMError" in self && _t3 instanceof DOMError ? _t3.name === "VersionError" : _t3 instanceof Object && "message" in _t3 && _t3.message === "An attempt was made to open a database using a lower version than the existing version.")) {
                      _context3.n = 10;
                      break;
                    }
                    _context3.n = 8;
                    return _this9.A(_this9.name, void 0, _objectSpread(_objectSpread({}, c), {}, {
                      upgrade: void 0
                    }));
                  case 8:
                    e = _context3.v;
                    f = e.j.version;
                    if (!(_this9.options.version !== void 0 && f > _this9.options.version + 1)) {
                      _context3.n = 9;
                      break;
                    }
                    throw e.close(), _this9.B = !1, jna(_this9, f);
                  case 9:
                    return _context3.a(2, e);
                  case 10:
                    b();
                    _t3 instanceof Error && !g.jq("ytidb_async_stack_killswitch") && (_t3.stack = "".concat(_t3.stack, "\n").concat(e.substring(e.indexOf("\n") + 1)));
                    throw cs(_t3, _this9.name, "", (_this9$options$versio = _this9.options.version) !== null && _this9$options$versio !== void 0 ? _this9$options$versio : -1);
                  case 11:
                    return _context3.a(2);
                }
              }, _callee3, null, [[1, 7]]);
            }));
            function d() {
              return _d2.apply(this, arguments);
            }
            return d;
          }();
        return this.j = a = _d();
      }
    }]);
  }();
  var xs = {};
  g.ws = function (a, b) {
    if (!b) throw g.ds("openWithToken", Zr(a.name));
    return a.open();
  };
  kna = /*#__PURE__*/function () {
    var _kna = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(a, b) {
      var _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _t4 = g;
            _context4.n = 1;
            return g.ws(xs, b);
          case 1:
            return _context4.a(2, _t4.ms.call(_t4, _context4.v, ["databases"], {
              Yb: !0,
              mode: "readwrite"
            }, function (c) {
              var d = c.objectStore("databases");
              return d.get(a.actualName).then(function (e) {
                if (e ? a.actualName !== e.actualName || a.publicName !== e.publicName || a.userIdentifier !== e.userIdentifier : 1) return d.put(a).then(function () {});
              });
            }));
        }
      }, _callee4);
    }));
    function kna(_x6, _x7) {
      return _kna.apply(this, arguments);
    }
    return kna;
  }();
  ys = /*#__PURE__*/function () {
    var _ys = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(a, b) {
      var _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            if (!a) {
              _context5.n = 2;
              break;
            }
            _context5.n = 1;
            return g.ws(xs, b);
          case 1:
            _t5 = _context5.v["delete"]("databases", a);
            _context5.n = 3;
            break;
          case 2:
            _t5 = void 0;
          case 3:
            return _context5.a(2, _t5);
        }
      }, _callee5);
    }));
    function ys(_x8, _x9) {
      return _ys.apply(this, arguments);
    }
    return ys;
  }();
  nna = /*#__PURE__*/function () {
    var _nna = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var _Sr;
      var a, b, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            if (!((_Sr = Sr()) !== null && _Sr !== void 0 && _Sr.hasSucceededOnce)) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2, !0);
          case 1:
            if (!(a = g.zs && Qq() && !Rq() || g.As)) {
              try {
                a = self;
                b = !!(a.indexedDB && a.IDBIndex && a.IDBKeyRange && a.IDBObjectStore);
              } catch (c) {
                b = !1;
              }
              a = !b;
            }
            if (!(a || !("IDBTransaction" in self && "objectStoreNames" in IDBTransaction.prototype))) {
              _context6.n = 2;
              break;
            }
            return _context6.a(2, !1);
          case 2:
            _context6.p = 2;
            _context6.n = 3;
            return kna({
              actualName: "yt-idb-test-do-not-use",
              publicName: "yt-idb-test-do-not-use",
              userIdentifier: void 0
            }, Bs);
          case 3:
            _context6.n = 4;
            return ys("yt-idb-test-do-not-use", Bs);
          case 4:
            return _context6.a(2, !0);
          case 5:
            _context6.p = 5;
            _t6 = _context6.v;
            return _context6.a(2, !1);
        }
      }, _callee6, null, [[2, 5]]);
    }));
    function nna() {
      return _nna.apply(this, arguments);
    }
    return nna;
  }();
  ona = function ona() {
    if (Cs !== void 0) return Cs;
    Tr = !0;
    return Cs = nna().then(function (a) {
      var _Rr2;
      Tr = !1;
      if ((_Rr2 = Rr()) !== null && _Rr2 !== void 0 && _Rr2.A()) {
        var _Sr2, _Rr3;
        var b = {
          hasSucceededOnce: ((_Sr2 = Sr()) === null || _Sr2 === void 0 ? void 0 : _Sr2.hasSucceededOnce) || a
        };
        (_Rr3 = Rr()) === null || _Rr3 === void 0 || _Rr3.set("LAST_RESULT_ENTRY_KEY", b, 2592E3, !0);
      }
      return a;
    });
  };
  g.Es = function () {
    var a = Ds();
    return a ? Promise.resolve(a) : ona().then(function (b) {
      b ? (g.qa("ytglobal.idbToken_", Bs), b = Bs) : b = void 0;
      return b;
    });
  };
  g.Hr = function () {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "unknown";
    if (g.Pp("DATASYNC_ID") !== void 0) return g.Pp("DATASYNC_ID");
    throw new g.Jr("Datasync ID not set", a);
  };
  Ir = function Ir() {
    try {
      return g.Hr(), !0;
    } catch (a) {
      return !1;
    }
  };
  pna = function pna(a) {
    if (!Ir()) throw a = new g.$r("AUTH_INVALID", {
      dbName: a
    }), Wr(a), a;
    var b = g.Hr();
    return {
      actualName: "".concat(a, ":").concat(b),
      publicName: a,
      userIdentifier: b
    };
  };
  qna = /*#__PURE__*/function () {
    var _qna = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(a, b, c, d) {
      var _Error$stack2;
      var e, f, _t7, _t8;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            e = (_Error$stack2 = Error().stack) !== null && _Error$stack2 !== void 0 ? _Error$stack2 : "";
            _context7.n = 1;
            return g.Es();
          case 1:
            f = _context7.v;
            if (f) {
              _context7.n = 2;
              break;
            }
            throw b = g.ds("openDbImpl", a, b), g.jq("ytidb_async_stack_killswitch") || (b.stack = "".concat(b.stack, "\n").concat(e.substring(e.indexOf("\n") + 1))), Wr(b), b;
          case 2:
            Yr(a);
            e = c ? {
              actualName: a,
              publicName: a,
              userIdentifier: void 0
            } : pna(a);
            _context7.p = 3;
            _context7.n = 4;
            return kna(e, f);
          case 4:
            _context7.n = 5;
            return ina(e.actualName, b, d);
          case 5:
            return _context7.a(2, _context7.v);
          case 6:
            _context7.p = 6;
            _t7 = _context7.v;
            _context7.p = 7;
            _context7.n = 8;
            return ys(e.actualName, f);
          case 8:
            _context7.n = 10;
            break;
          case 9:
            _context7.p = 9;
            _t8 = _context7.v;
          case 10:
            throw _t7;
          case 11:
            return _context7.a(2);
        }
      }, _callee7, null, [[7, 9], [3, 6]]);
    }));
    function qna(_x0, _x1, _x10, _x11) {
      return _qna.apply(this, arguments);
    }
    return qna;
  }();
  rna = function rna(a, b) {
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return qna(a, b, !1, c);
  };
  sna = function sna(a, b) {
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return qna(a, b, !0, c);
  };
  tna = /*#__PURE__*/function () {
    var _tna = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(a) {
      var b,
        c,
        _args8 = arguments,
        _t9;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            b = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};
            _context8.n = 1;
            return g.Es();
          case 1:
            c = _context8.v;
            _t9 = c;
            if (!_t9) {
              _context8.n = 3;
              break;
            }
            Yr(a);
            a = pna(a);
            _context8.n = 2;
            return vs(a.actualName, b);
          case 2:
            _context8.n = 3;
            return ys(a.actualName, c);
          case 3:
            return _context8.a(2);
        }
      }, _callee8);
    }));
    function tna(_x12) {
      return _tna.apply(this, arguments);
    }
    return tna;
  }();
  wna = /*#__PURE__*/function () {
    var _wna = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(a) {
      var b,
        c,
        _args9 = arguments,
        _t0;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            b = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {};
            _context9.n = 1;
            return g.Es();
          case 1:
            c = _context9.v;
            _t0 = c;
            if (!_t0) {
              _context9.n = 3;
              break;
            }
            Yr(a);
            _context9.n = 2;
            return vs(a, b);
          case 2:
            _context9.n = 3;
            return ys(a, c);
          case 3:
            return _context9.a(2);
        }
      }, _callee9);
    }));
    function wna(_x13) {
      return _wna.apply(this, arguments);
    }
    return wna;
  }();
  var xna = /*#__PURE__*/function (_phb) {
    function xna(a, b) {
      var _this0;
      _classCallCheck(this, xna);
      _this0 = _callSuper(this, xna, [a, b]);
      _this0.options = b;
      Yr(a);
      return _this0;
    }
    _inherits(xna, _phb);
    return _createClass(xna, [{
      key: "A",
      value: function A(a, b) {
        var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return (this.options.shared ? sna : rna)(a, b, _objectSpread({}, c));
      }
    }, {
      key: "delete",
      value: function _delete() {
        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return (this.options.shared ? wna : tna)(this.name, a);
      }
    }]);
  }(phb);
  yna = function yna(a, b) {
    var c;
    return function () {
      c || (c = new xna(a, b));
      return c;
    };
  };
  Fs = function Fs(a, b) {
    return yna(a, b);
  };
  var zna = undefined;
  Gs = function Gs(a) {
    return g.ws(zna(), a);
  };
  Dna = /*#__PURE__*/function () {
    var _Dna = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(a) {
      var b;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            _context0.n = 1;
            return Gs(a);
          case 1:
            a = _context0.v;
            b = void 0;
            _context0.n = 2;
            return g.ms(a, ["hotConfigStore"], {
              mode: "readwrite",
              Yb: !0
            }, function (c) {
              return g.us(c.objectStore("hotConfigStore").index("hotTimestampIndex"), {
                direction: "prev"
              }, function (d) {
                b = d.getValue();
              });
            });
          case 2:
            return _context0.a(2, b);
        }
      }, _callee0);
    }));
    function Dna(_x14) {
      return _Dna.apply(this, arguments);
    }
    return Dna;
  }();
  Kna = function Kna(a) {
    Is(a, g.Pp("RAW_HOT_CONFIG_GROUP"));
    a.Eu(g.Pp("SERIALIZED_HOT_HASH_DATA"));
  };
  Ana = /*#__PURE__*/function () {
    var _Ana = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(a, b, c, d) {
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            a = {
              config: a,
              hashData: b,
              timestamp: d !== void 0 ? d : (0, g.T)()
            };
            _context1.n = 1;
            return Gs(c);
          case 1:
            c = _context1.v;
            _context1.n = 2;
            return c.clear("hotConfigStore");
          case 2:
            _context1.n = 3;
            return c.put("hotConfigStore", a);
          case 3:
            return _context1.a(2, _context1.v);
        }
      }, _callee1);
    }));
    function Ana(_x15, _x16, _x17, _x18) {
      return _Ana.apply(this, arguments);
    }
    return Ana;
  }();
  Gna = /*#__PURE__*/function () {
    var _Gna = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(a) {
      var b, c, d, _t1;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.n) {
          case 0:
            if (!a.A) {
              _context10.n = 1;
              break;
            }
            return _context10.a(2, Ls());
          case 1:
            if (a.K) {
              _context10.n = 2;
              break;
            }
            return _context10.a(2, (a = g.ds("getHotConfig IDB not initialized"), Up(a), Promise.reject(a)));
          case 2:
            b = Ds(), c = g.Pp("TIME_CREATED_MS");
            if (!b) {
              _context10.n = 5;
              break;
            }
            _context10.n = 3;
            return Dna(b);
          case 3:
            d = _context10.v;
            if (!(d && d.timestamp > c)) {
              _context10.n = 4;
              break;
            }
            return _context10.a(2, (Is(a, d.config), a.Eu(d.hashData), Ls()));
          case 4:
            _context10.n = 6;
            break;
          case 5:
            d = g.ds("getHotConfig token error"), Up(d);
          case 6:
            Kna(a);
            _t1 = b && a.A && a.hotHashData;
            if (!_t1) {
              _context10.n = 7;
              break;
            }
            _context10.n = 7;
            return Ana(a.A, a.hotHashData, b, c);
          case 7:
            return _context10.a(2, a.A ? Ls() : (a = new g.Jr("Config not available in ytConfig"), Up(a), Promise.reject(a)));
        }
      }, _callee10);
    }));
    function Gna(_x19) {
      return _Gna.apply(this, arguments);
    }
    return Gna;
  }();
  Cna = /*#__PURE__*/function () {
    var _Cna = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(a) {
      var b;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.n) {
          case 0:
            _context11.n = 1;
            return Gs(a);
          case 1:
            a = _context11.v;
            b = void 0;
            _context11.n = 2;
            return g.ms(a, ["coldConfigStore"], {
              mode: "readwrite",
              Yb: !0
            }, function (c) {
              return g.us(c.objectStore("coldConfigStore").index("coldTimestampIndex"), {
                direction: "prev"
              }, function (d) {
                b = d.getValue();
              });
            });
          case 2:
            return _context11.a(2, b);
        }
      }, _callee11);
    }));
    function Cna(_x20) {
      return _Cna.apply(this, arguments);
    }
    return Cna;
  }();
  Mna = function Mna(a, b) {
    a.configData = b;
    g.qa("yt.gcf.config.coldConfigData", a.configData || null);
  };
  Ms = function Ms(a, b) {
    a.coldHashData = b;
    g.qa("yt.gcf.config.coldHashData", a.coldHashData || null);
  };
  Jna = function Jna(a) {
    var _a$j;
    Js(a, g.Pp("RAW_COLD_CONFIG_GROUP"));
    Ms(a, g.Pp("SERIALIZED_COLD_HASH_DATA"));
    Mna(a, (_a$j = a.j) === null || _a$j === void 0 ? void 0 : _a$j.configData);
  };
  Bna = /*#__PURE__*/function () {
    var _Bna = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(a, b, c, d, e) {
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.n) {
          case 0:
            a = {
              config: a,
              hashData: b,
              configData: c,
              timestamp: e !== void 0 ? e : (0, g.T)()
            };
            _context12.n = 1;
            return Gs(d);
          case 1:
            d = _context12.v;
            _context12.n = 2;
            return d.clear("coldConfigStore");
          case 2:
            _context12.n = 3;
            return d.put("coldConfigStore", a);
          case 3:
            return _context12.a(2, _context12.v);
        }
      }, _callee12);
    }));
    function Bna(_x21, _x22, _x23, _x24, _x25) {
      return _Bna.apply(this, arguments);
    }
    return Bna;
  }();
  Hna = /*#__PURE__*/function () {
    var _Hna = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(a) {
      var b, c, d, _t10;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.n) {
          case 0:
            if (!a.j) {
              _context13.n = 1;
              break;
            }
            return _context13.a(2, Ks());
          case 1:
            if (a.K) {
              _context13.n = 2;
              break;
            }
            return _context13.a(2, (a = g.ds("getColdConfig IDB not initialized"), Up(a), Promise.reject(a)));
          case 2:
            b = Ds(), c = g.Pp("TIME_CREATED_MS");
            if (!b) {
              _context13.n = 5;
              break;
            }
            _context13.n = 3;
            return Cna(b);
          case 3:
            d = _context13.v;
            if (!(d && d.timestamp > c)) {
              _context13.n = 4;
              break;
            }
            return _context13.a(2, (Js(a, d.config), Mna(a, d.configData), Ms(a, d.hashData), Ks()));
          case 4:
            _context13.n = 6;
            break;
          case 5:
            d = g.ds("getColdConfig"), Up(d);
          case 6:
            Jna(a);
            _t10 = b && a.j && a.coldHashData && a.configData;
            if (!_t10) {
              _context13.n = 7;
              break;
            }
            _context13.n = 7;
            return Bna(a.j, a.coldHashData, a.configData, b, c);
          case 7:
            return _context13.a(2, a.j ? Ks() : (a = new g.Jr("Config not available in ytConfig"), Up(a), Promise.reject(a)));
        }
      }, _callee13);
    }));
    function Hna(_x26) {
      return _Hna.apply(this, arguments);
    }
    return Hna;
  }();
  g.gq = function (a) {
    window.clearTimeout(a);
  };
  var Rp = [];
  vla = function vla(a) {
    Rp.forEach(function (b) {
      b(a);
    });
  };
  g.Sp = function (a, b, c, d, e) {
    wla(a, "ERROR", b, c, d, e);
    vla(a);
  };
  g.Tp = function (a) {
    var b = window;
    return a && b.yterr ? function () {
      try {
        for (var _len3 = arguments.length, c = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          c[_key3] = arguments[_key3];
        }
        return a.apply(this, c);
      } catch (d) {
        g.Sp(d instanceof Error ? d : Error(String(d)));
      }
    } : a;
  };
  g.eq = function (a, b) {
    typeof a === "function" && (a = g.Tp(a));
    return window.setTimeout(a, b);
  };
  Kr = function Kr(a, b, c, d) {
    d !== void 0 && Number.isNaN(Number(d)) && (d = void 0);
    return (a = g.ra("yt.scheduler.instance.addJob")) ? a(b, c, d) : d === void 0 ? (b(), NaN) : g.eq(b, d || 0);
  };
  var jhb = /*#__PURE__*/function () {
    function jhb() {
      _classCallCheck(this, jhb);
      this.j = new WeakMap();
    }
    return _createClass(jhb, [{
      key: "Ok",
      value: function Ok(a, b) {
        return Kr(0, a, 1, b);
      }
    }, {
      key: "b4",
      value: function b4(a) {
        (a = this.j.get(a)) && a();
      }
    }]);
  }();
  Mr = /*#__PURE__*/function (_jhb) {
    function Mr() {
      _classCallCheck(this, Mr);
      return _callSuper(this, Mr, arguments);
    }
    _inherits(Mr, _jhb);
    return _createClass(Mr, [{
      key: "Oj",
      value: function Oj(a) {
        if (a === void 0 || !Number.isNaN(Number(a))) {
          var b = g.ra("yt.scheduler.instance.cancelJob");
          b ? b(a) : g.gq(a);
        }
      }
    }, {
      key: "start",
      value: function start() {
        var a = g.ra("yt.scheduler.instance.start");
        a && a();
      }
    }, {
      key: "pause",
      value: function pause() {
        var a = g.ra("yt.scheduler.instance.pause");
        a && a();
      }
    }]);
  }(jhb);
  g.Nr = function () {
    Mr.instance || (Mr.instance = new Mr());
    return Mr.instance;
  };
  g.bo = undefined;
  Ina = function Ina(a) {
    if (!a.A || !a.j) {
      if (!Ds()) {
        var b = g.ds("scheduleGetConfigs");
        Up(b);
      }
      a.D || (a.D = g.bo.Ok(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14() {
        var _t11, _t12;
        return _regenerator().w(function (_context14) {
          while (1) switch (_context14.p = _context14.n) {
            case 0:
              _context14.p = 0;
              _context14.n = 1;
              return Gna(a);
            case 1:
              _context14.n = 3;
              break;
            case 2:
              _context14.p = 2;
              _t11 = _context14.v;
            case 3:
              _context14.p = 3;
              _context14.n = 4;
              return Hna(a);
            case 4:
              _context14.n = 6;
              break;
            case 5:
              _context14.p = 5;
              _t12 = _context14.v;
            case 6:
              a.D && (a.D = 0);
            case 7:
              return _context14.a(2);
          }
        }, _callee14, null, [[3, 5], [0, 2]]);
      })), 100));
    }
  };
  var _Hs = /*#__PURE__*/function () {
    function Hs() {
      var _this1 = this;
      _classCallCheck(this, Hs);
      this.K = !1;
      this.B = this.D = 0;
      this.L = new qhb();
      this.lc = {
        sla: function sla() {
          _this1.K = !0;
        },
        Sja: function Sja() {
          return _this1.j;
        },
        Jma: function Jma(a) {
          Is(_this1, a);
        },
        Eu: function Eu(a) {
          _this1.Eu(a);
        },
        Dma: function Dma(a) {
          Js(_this1, a);
        },
        H5: function H5() {
          return _this1.coldHashData;
        },
        L5: function L5() {
          return _this1.hotHashData;
        },
        pka: function pka() {
          return _this1.A;
        },
        fka: function fka() {
          return Ks();
        },
        hka: function hka() {
          return Ls();
        },
        gka: function gka() {
          return g.ra("yt.gcf.config.coldHashData");
        },
        ika: function ika() {
          return g.ra("yt.gcf.config.hotHashData");
        },
        hna: function hna() {
          Ina(_this1);
        },
        sma: function sma() {
          _this1.Eu(void 0);
          Ms(_this1);
          delete _Hs.instance;
        },
        Gma: function Gma(a) {
          _this1.B = a;
        },
        Zja: function Zja() {
          return _this1.B;
        }
      };
    }
    return _createClass(Hs, [{
      key: "C",
      value: function C() {
        var _Ls;
        return (_Ls = Ls()) !== null && _Ls !== void 0 ? _Ls : g.Pp("RAW_HOT_CONFIG_GROUP");
      }
    }, {
      key: "Eu",
      value: function Eu(a) {
        this.hotHashData = a;
        g.qa("yt.gcf.config.hotHashData", this.hotHashData || null);
      }
    }]);
  }();
  var Jt = /*#__PURE__*/_createClass(function Jt(a) {
    _classCallCheck(this, Jt);
    this.key = a;
  });
  Kt = function Kt(a) {
    return new Jt(a);
  };
  _lpa = function lpa(a, b) {
    var c = a.C.get(b);
    if (c) try {
      c.cA(a.resolve(b));
    } catch (d) {
      c.hU(d);
    }
    var _iterator6 = _createForOfIteratorHelper(a.children),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var d = _step6.value;
        d.A.has(b) || _lpa(d, b);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  };
  Lt = function Lt(a, b) {
    a.A.set(b.Qd, b);
    _lpa(a, b.Qd);
  };
  var yhb = /*#__PURE__*/function () {
    function yhb() {
      _classCallCheck(this, yhb);
      this.stack = [];
    }
    return _createClass(yhb, [{
      key: "push",
      value: function push(a, b) {
        this.stack.push({
          key: a,
          kI: b
        });
      }
    }, {
      key: "pop",
      value: function pop() {
        this.stack.pop();
      }
    }]);
  }();
  kpa = function kpa(a, b, c) {
    return a.stack.some(function (d) {
      if (d.key !== b) return !1;
      var e = Math.min(d.kI.length, c.length);
      for (var f = 0; f < e; f++) if (d.kI[f] !== c[f]) return !1;
      return !0;
    });
  };
  var Mt = Symbol("injectionDeps");
  mpa = function mpa(a, b) {
    return b ? b.map(function (c) {
      return c instanceof Jt ? _Nt(a, c.key, !0) : _Nt(a, c);
    }) : [];
  };
  _Nt = function Nt(a, b) {
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    if (kpa(a.B, b, a.kI)) throw Error("Deps cycle for: ".concat(b));
    if (a.j.has(b)) return a.j.get(b);
    if (a.A.has(b)) {
      a.B.push(b, a.kI);
      try {
        var f = a.A.get(b);
        var d = f;
        if (d.vx !== void 0) var e = d.vx;else if (d.JD) {
          var h = d[Mt] ? mpa(a, d[Mt]) : [];
          e = d.JD.apply(d, _toConsumableArray(h));
        } else if (d.xh) {
          var _h = d.xh,
            k = _h[Mt] ? mpa(a, _h[Mt]) : [];
          e = _construct(_h, _toConsumableArray(k));
        } else {
          if (!c) throw Error("Could not resolve providers for: ".concat(b));
          e = void 0;
        }
        f.Ij || a.j.set(b, e);
        return e;
      } finally {
        a.B.pop();
      }
    }
    if (a.parent) return _Nt(a.parent, b, c);
    if (!c) throw Error("No provider for: ".concat(b));
  };
  var opa = /*#__PURE__*/function () {
    function opa() {
      var _this10 = this,
        _this$parent;
      _classCallCheck(this, opa);
      this.A = new Map();
      this.C = new Map();
      this.j = new Map();
      this.children = new Set();
      this.lc = {
        M5: function M5() {
          var a = _this10.parent ? _this10.parent.lc.M5() : new Map();
          var _iterator7 = _createForOfIteratorHelper(_this10.A.entries()),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _step7$value = _slicedToArray(_step7.value, 2),
                b = _step7$value[0],
                c = _step7$value[1];
              a.set(b, c);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          return a;
        },
        Xla: function Xla(a) {
          var b = _this10.A.get(a.Qd),
            c = _this10.j.get(a.Qd);
          _this10.j["delete"](a.Qd);
          Lt(_this10, a);
          return function () {
            _this10.A["delete"](a.Qd);
            _this10.j["delete"](a.Qd);
            b && Lt(_this10, b);
            c && _this10.j.set(a.Qd, c);
          };
        }
      };
      this.parent = null;
      this.kI = [this];
      this.B = new yhb();
      (_this$parent = this.parent) === null || _this$parent === void 0 || _this$parent.children.add(this);
    }
    return _createClass(opa, [{
      key: "resolve",
      value: function resolve(a) {
        return a instanceof Jt ? _Nt(this, a.key, !0) : _Nt(this, a);
      }
    }]);
  }();
  npa = undefined;
  Ot = undefined;
  Pt = function Pt() {
    Ot || (Ot = npa = new opa());
    return Ot;
  };
  Npa = function Npa(a) {
    if (g.jq("enable_web_tiered_gel")) {
      var _Pt$resolve;
      a = tqa[a || ""];
      var b = (_Pt$resolve = Pt().resolve(Kt(_Hs))) === null || _Pt$resolve === void 0 || (_Pt$resolve = _Pt$resolve.C()) === null || _Pt$resolve === void 0 || (_Pt$resolve = _Pt$resolve.loggingHotConfig) === null || _Pt$resolve === void 0 || (_Pt$resolve = _Pt$resolve.eventLoggingConfig) === null || _Pt$resolve === void 0 ? void 0 : _Pt$resolve.payloadPolicies;
      if (b) for (var c = 0; c < b.length; c++) if (b[c].payloadNumber === a) return b[c];
    }
  };
  Opa = function Opa(a) {
    switch (a) {
      case "DELAYED_EVENT_TIER_UNSPECIFIED":
        return 0;
      case "DELAYED_EVENT_TIER_DEFAULT":
        return 100;
      case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":
        return 200;
      case "DELAYED_EVENT_TIER_FAST":
        return 300;
      case "DELAYED_EVENT_TIER_IMMEDIATE":
        return 400;
      default:
        return 200;
    }
  };
  Zt = function Zt(a) {
    return [a.auth === void 0 ? "undefined" : a.auth, a.isJspb === void 0 ? "undefined" : a.isJspb, a.cttAuthInfo === void 0 ? "undefined" : a.cttAuthInfo, a.tier === void 0 ? "undefined" : a.tier].join("/");
  };
  $t = function $t(a, b) {
    return a === void 0 || a === "undefined" ? !0 : a === b;
  };
  au = function au(a, b) {
    var c = Zt(b);
    if (a.A[c]) return a.A[c];
    var d = Object.keys(a.store) || [];
    if (d.length <= 1 && Zt(b) === d[0]) return d;
    var e = [];
    for (var h = 0; h < d.length; h++) {
      var k = d[h].split("/");
      if ($t(b.auth, k[0])) {
        var f = b.isJspb;
        $t(f === void 0 ? "undefined" : f ? "true" : "false", k[1]) && $t(b.cttAuthInfo, k[2]) && (f = b.tier, f = f === void 0 ? "undefined" : JSON.stringify(f), $t(f, k[3]) && e.push(d[h]));
      }
    }
    return a.A[c] = e;
  };
  var du = /*#__PURE__*/function () {
    function du() {
      var _this11 = this;
      _classCallCheck(this, du);
      this.store = {};
      this.j = 0;
      this.A = {};
      this.lc = {
        dka: function dka() {
          return _this11.j;
        }
      };
    }
    return _createClass(du, [{
      key: "storePayload",
      value: function storePayload(a, b) {
        a = Zt(a);
        this.store[a] ? this.store[a].push(b) : (this.A = {}, this.store[a] = [b]);
        this.j++;
        g.jq("more_accurate_gel_parser") && (b = new CustomEvent("TRANSPORTING_NEW_EVENT"), window.dispatchEvent(b));
        return a;
      }
    }, {
      key: "smartExtractMatchingEntries",
      value: function smartExtractMatchingEntries(a) {
        if (!a.keys.length) return [];
        var b = au(this, a.keys.splice(0, 1)[0]),
          c = [];
        for (var d = 0; d < b.length; d++) this.store[b[d]] && a.sizeLimit && (this.store[b[d]].length <= a.sizeLimit ? (c.push.apply(c, _toConsumableArray(this.store[b[d]])), delete this.store[b[d]]) : c.push.apply(c, _toConsumableArray(this.store[b[d]].splice(0, a.sizeLimit))));
        this.j -= c.length;
        (a === null || a === void 0 ? void 0 : a.sizeLimit) && c.length < (a === null || a === void 0 ? void 0 : a.sizeLimit) && (a.sizeLimit -= c.length, c.push.apply(c, _toConsumableArray(this.smartExtractMatchingEntries(a))));
        return c;
      }
    }, {
      key: "extractMatchingEntries",
      value: function extractMatchingEntries(a) {
        a = au(this, a);
        var b = [];
        for (var c = 0; c < a.length; c++) this.store[a[c]] && (b.push.apply(b, _toConsumableArray(this.store[a[c]])), delete this.store[a[c]]);
        this.j -= b.length;
        return b;
      }
    }, {
      key: "getSequenceCount",
      value: function getSequenceCount(a) {
        a = au(this, a);
        var b = 0;
        for (var c = 0; c < a.length; c++) {
          var _this$store$a$c;
          b += ((_this$store$a$c = this.store[a[c]]) === null || _this$store$a$c === void 0 ? void 0 : _this$store$a$c.length) || 0;
        }
        return b;
      }
    }]);
  }();
  eu = function eu() {
    var a = g.ra("yt.logging.ims");
    a || (a = new du(), g.qa("yt.logging.ims", a));
    return a;
  };
  var Ipa = null;
  Hpa = function Hpa() {
    return g.jq("html5_send_qoe_on_gel") || g.jq("web_send_vss3_isolated_payload") || g.jq("web_send_vss3_pings");
  };
  var bu = void 0;
  cu = function cu(a) {
    Ipa = a;
    Hpa() && (g.pa.ytLoggingTransportRegisteredClientCtor_ = a);
    bu = new a();
  };
  Jpa = function Jpa(a) {
    return a ? a : Hpa() ? Ipa || g.pa.ytLoggingTransportRegisteredClientCtor_ || null : null;
  };
  ku = function ku(a) {
    return a === "gelDebuggingEvent" || a === "watchTimeSegment";
  };
  lq = function lq() {
    return g.Pp("EXPERIMENTS_TOKEN", "");
  };
  mq = function mq() {
    var a = [],
      b = g.Pp("EXPERIMENTS_FORCED_FLAGS", {});
    for (var _i2 = 0, _Object$keys2 = Object.keys(b); _i2 < _Object$keys2.length; _i2++) {
      var c = _Object$keys2[_i2];
      a.push({
        key: c,
        value: String(b[c])
      });
    }
    c = g.Pp("EXPERIMENT_FLAGS", {});
    for (var _i3 = 0, _Object$keys3 = Object.keys(c); _i3 < _Object$keys3.length; _i3++) {
      var d = _Object$keys3[_i3];
      d.startsWith("force_") && b[d] === void 0 && a.push({
        key: d,
        value: String(c[d])
      });
    }
    return a;
  };
  zr = function zr() {
    if (!g.pa.matchMedia) return "WEB_DISPLAY_MODE_UNKNOWN";
    try {
      return g.pa.matchMedia("(display-mode: standalone)").matches ? "WEB_DISPLAY_MODE_STANDALONE" : g.pa.matchMedia("(display-mode: minimal-ui)").matches ? "WEB_DISPLAY_MODE_MINIMAL_UI" : g.pa.matchMedia("(display-mode: fullscreen)").matches ? "WEB_DISPLAY_MODE_FULLSCREEN" : g.pa.matchMedia("(display-mode: browser)").matches ? "WEB_DISPLAY_MODE_BROWSER" : "WEB_DISPLAY_MODE_UNKNOWN";
    } catch (a) {
      return "WEB_DISPLAY_MODE_UNKNOWN";
    }
  };
  var Ts = /*#__PURE__*/function (_Di2) {
    function Ts(a) {
      _classCallCheck(this, Ts);
      return _callSuper(this, Ts, [a]);
    }
    _inherits(Ts, _Di2);
    return _createClass(Ts);
  }(Di);
  xba = function xba(a, b, c) {
    if (a != null && a[Pg] === Qg) return a;
    if (Array.isArray(a)) {
      var d = a[Wf] | 0;
      c = d | c & 32 | c & 2;
      c !== d && (a[Wf] = c);
      return new b(a);
    }
  };
  hh = function hh(a, b) {
    b === void 0 && (b = a[Wf] | 0);
    b & 32 && !(b & 4096) && (a[Wf] = b | 4096);
  };
  Sba = function Sba(a, b, c, d, e) {
    var f = !1;
    d = ih(a, d, e, function (h) {
      var k = xba(h, c, b);
      f = k !== h && k != null;
      return k;
    });
    if (d != null) return f && !Xf(d) && hh(a, b), d;
  };
  Mba = function Mba(a) {
    var b = a.he,
      c = b[Wf] | 0;
    return Xf(a, c) ? dh(a, b, c) ? eh(a, b, !0) : new a.constructor(bh(b, c, !1)) : a;
  };
  Eh = function Eh(a, b, c, d) {
    var e = a.he,
      f = e[Wf] | 0;
    b = Sba(e, f, b, c, d);
    if (b == null) return b;
    f = e[Wf] | 0;
    if (!Xf(a, f)) {
      var h = Mba(b);
      h !== b && (fh(a) && (e = a.he, f = e[Wf] | 0), b = h, f = kh(e, f, c, b, d), hh(e, f));
    }
    return b;
  };
  var aoa = {
    Yha: "WEB_DISPLAY_MODE_UNKNOWN",
    Uha: "WEB_DISPLAY_MODE_BROWSER",
    Wha: "WEB_DISPLAY_MODE_MINIMAL_UI",
    Xha: "WEB_DISPLAY_MODE_STANDALONE",
    Vha: "WEB_DISPLAY_MODE_FULLSCREEN"
  };
  Qf = function Qf(a) {
    a = Error(a);
    dd(a, "warning");
    return a;
  };
  var ug = {};
  lh = function lh(a, b, c) {
    gh(a);
    var d = a.he;
    kh(d, d[Wf] | 0, b, c);
    return a;
  };
  Th = function Th(a, b, c) {
    if (c != null) {
      if (!ug(c)) throw Qf("enum");
      c |= 0;
    }
    return lh(a, b, c);
  };
  sg = function sg(a) {
    return a.displayName || a.name || "unknown type name";
  };
  Og = function Og(a, b) {
    if (!(a instanceof b)) throw Error("Expected instanceof ".concat(sg(b), " but got ").concat(a && sg(a.constructor)));
    return a;
  };
  Vba = function Vba(a, b) {
    a != null ? Og(a, b) : a = void 0;
    return a;
  };
  Hh = function Hh(a, b, c, d) {
    d = Vba(d, b);
    lh(a, c, d);
    d && !Xf(d) && hh(a.he);
    return a;
  };
  Rna = function Rna(a, b, c) {
    var _c$client$mainAppWebI;
    a = a.LR;
    if (a === "WEB" || a === "MWEB" || a === 1 || a === 2) b ? (c = Eh(b, Ts, 96) || new Ts(), a = zr(), a = Object.keys(aoa).indexOf(a), a = a === -1 ? null : a, a !== null && Th(c, 3, a), Hh(b, Ts, 96, c)) : c && (c.client.mainAppWebInfo = (_c$client$mainAppWebI = c.client.mainAppWebInfo) !== null && _c$client$mainAppWebI !== void 0 ? _c$client$mainAppWebI : {}, c.client.mainAppWebInfo.webDisplayMode = zr());
  };
  zg = function zg(a) {
    if (a == null) return a;
    if (typeof a === "string" && a) a = +a;else if (typeof a !== "number") return;
    return ug(a) ? a >>> 0 : void 0;
  };
  var c$a = [];
  nh = undefined;
  mh = function mh(a, b, c) {
    a = ih(a, b, c);
    return Array.isArray(a) ? a : nh;
  };
  Uf = function Uf(a, b) {
    2 & b && (a |= 2);
    return a | 1;
  };
  ph = function ph(a) {
    return !!(2 & a) && !!(4 & a) || !!(256 & a);
  };
  qh = function qh(a, b) {
    return a = (2 & b ? a | 2 : a & -3) & -273;
  };
  Nba = function Nba(a, b, c, d, e, f, h, k, l) {
    var m = b,
      p = ph(b);
    p && h === 2 && (a = _toConsumableArray(a), m = 0, b = qh(b, d), d = kh(c, d, e, a, f), p = !1);
    p || (h === 1 || (h !== 4 ? 0 : 2 & b || !(16 & b) && 32 & d) ? (b |= !a.length || k && !(4096 & b) || 32 & d && !(4096 & b || 16 & b) ? 2 : 256, b !== m && (a[Wf] = b), Object.freeze(a)) : (l || (b |= 16), b !== m && (a[Wf] = b)));
    2 & b || !(4096 & b || 16 & b) || hh(c, d);
    return a;
  };
  oh = function oh(a, b, c, d, e) {
    var f = a.he,
      h = f[Wf] | 0;
    d = d && d !== 4 ? d !== 1 && (a ? Xf(a, h) : 2 & h) ? 1 : d : 4;
    e = !!e || d === 3;
    d === 2 && fh(a) && (f = a.he, h = f[Wf] | 0);
    a = mh(f, b);
    var k = a === nh ? 7 : a[Wf] | 0,
      l = Uf(k, h);
    var m = !(4 & l);
    if (m) {
      var p = 0,
        r = 0;
      for (; p < a.length; p++) {
        var u = c(a[p]);
        u != null && (a[r++] = u);
      }
      r < p && (a.length = r);
      c = (l | 4) & -513;
      l = c &= -1025;
      l &= -4097;
    }
    l !== k && (a[Wf] = l, 2 & l && Object.freeze(a));
    return a = Nba(a, l, f, h, b, void 0, d, m, e);
  };
  Zf = function Zf(a, b) {
    if (typeof b !== "number" || b < 0 || b >= a.length) throw Error();
  };
  var Us = /*#__PURE__*/function (_Di3) {
    function Us(a) {
      _classCallCheck(this, Us);
      return _callSuper(this, Us, [a]);
    }
    _inherits(Us, _Di3);
    return _createClass(Us, [{
      key: "GB",
      value: function GB(a) {
        var b = oh(this, 5, zg, 3, !0);
        Zf(b, a);
        return b[a];
      }
    }]);
  }(Di);
  Sh = function Sh(a, b, c) {
    return lh(a, b, Mg(c));
  };
  Sna = function Sna(a, b) {
    var c = g.ra("yt.embedded_player.embed_url");
    c && (a ? (b = Eh(a, Us, 7) || new Us(), Sh(b, 4, c), Hh(a, Us, 7, b)) : b && (b.thirdParty = {
      embedUrl: c
    }));
  };
  var sba = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  vg = function vg(a) {
    switch (_typeof(a)) {
      case "bigint":
        return !0;
      case "number":
        return ug(a);
      case "string":
        return sba.test(a);
      default:
        return !1;
    }
  };
  var Hg = {};
  var cg = undefined;
  var of = undefined;
  dg = function dg(a) {
    if (of(a)) {
      if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(a)) throw Error(String(a));
    } else if (cg(a) && !Number.isSafeInteger(a)) throw Error(String(a));
    return BigInt(a);
  };
  var Eg = {};
  var Bg = undefined;
  Ag = function Ag(a) {
    var b = Hg(Number(a));
    if (Eg(b)) return dg(b);
    b = a.indexOf(".");
    b !== -1 && (a = a.substring(0, b));
    return dg(Bg(64, BigInt(a)));
  };
  var fg = 0;
  var gg = 0;
  hg = function hg(a) {
    var b = a >>> 0;
    fg = b;
    gg = (a - b) / 4294967296 >>> 0;
  };
  ig = function ig(a) {
    if (a < 0) {
      hg(0 - a);
      a = fg;
      var b = gg;
      b = ~b;
      a ? a = ~a + 1 : b += 1;
      var c = a,
        d = b;
      fg = c >>> 0;
      gg = d >>> 0;
    } else hg(a);
  };
  jg = function jg(a, b) {
    b >>>= 0;
    a >>>= 0;
    var c;
    b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
    return c;
  };
  ng = function ng() {
    var a = fg,
      b = gg,
      c;
    b & 2147483648 ? c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : c = jg(a, b);
    return c;
  };
  Fg = function Fg(a) {
    vg(a);
    a = Hg(a);
    Eg(a) ? a = String(a) : (ig(a), a = ng());
    return a;
  };
  Gg = function Gg(a) {
    if (a != null) a: {
      if (!vg(a)) throw Qf("int64");
      switch (_typeof(a)) {
        case "string":
          a = Ag(a);
          break a;
        case "bigint":
          a = dg(Bg(64, a));
          break a;
        default:
          a = dg(Eg(a) ? a : Fg(a));
      }
    }
    return a;
  };
  Tna = function Tna(a, b) {
    var _g$pa$navigator;
    if (g.jq("web_log_memory_total_kbytes") && (_g$pa$navigator = g.pa.navigator) !== null && _g$pa$navigator !== void 0 && _g$pa$navigator.deviceMemory) {
      var _g$pa$navigator2;
      var c = (_g$pa$navigator2 = g.pa.navigator) === null || _g$pa$navigator2 === void 0 ? void 0 : _g$pa$navigator2.deviceMemory;
      a ? lh(a, 95, Gg(c * 1E6)) : b && (b.client.memoryTotalKbytes = "".concat(c * 1E6));
    }
  };
  Nh = function Nh(a, b) {
    var _Ng;
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var d = arguments.length > 3 ? arguments[3] : undefined;
    return (_Ng = Ng(jh(a, b, d))) !== null && _Ng !== void 0 ? _Ng : c;
  };
  var Qs = /*#__PURE__*/function (_Di4) {
    function Qs(a) {
      _classCallCheck(this, Qs);
      return _callSuper(this, Qs, [a]);
    }
    _inherits(Qs, _Di4);
    return _createClass(Qs, [{
      key: "H5",
      value: function H5() {
        return Nh(this, 3);
      }
    }, {
      key: "L5",
      value: function L5() {
        return Nh(this, 5);
      }
    }, {
      key: "Eu",
      value: function Eu(a) {
        return Sh(this, 5, a);
      }
    }]);
  }(Di);
  Una = function Una(a, b, c) {
    var _Eh;
    a.appInstallData && (b ? (c = (_Eh = Eh(b, Qs, 62)) !== null && _Eh !== void 0 ? _Eh : new Qs(), Sh(c, 6, a.appInstallData), Hh(b, Qs, 62, c)) : c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData));
  };
  Fma = function Fma() {
    var a = g.pa.navigator;
    return a ? a.connection : void 0;
  };
  var Gma = {
    bluetooth: "CONN_DISCO",
    cellular: "CONN_CELLULAR_UNKNOWN",
    ethernet: "CONN_WIFI",
    none: "CONN_NONE",
    wifi: "CONN_WIFI",
    wimax: "CONN_CELLULAR_4G",
    other: "CONN_UNKNOWN",
    unknown: "CONN_UNKNOWN",
    "slow-2g": "CONN_CELLULAR_2G",
    "2g": "CONN_CELLULAR_2G",
    "3g": "CONN_CELLULAR_3G",
    "4g": "CONN_CELLULAR_4G"
  };
  Hma = function Hma() {
    var a = Fma();
    if (a) {
      var b = Gma[a.type || "unknown"] || "CONN_UNKNOWN";
      a = Gma[a.effectiveType || "unknown"] || "CONN_UNKNOWN";
      b === "CONN_CELLULAR_UNKNOWN" && a !== "CONN_UNKNOWN" && (b = a);
      if (b !== "CONN_UNKNOWN") return b;
      if (a !== "CONN_UNKNOWN") return a;
    }
  };
  var boa = {
    CONN_DEFAULT: 0,
    CONN_UNKNOWN: 1,
    CONN_NONE: 2,
    CONN_WIFI: 3,
    CONN_CELLULAR_2G: 4,
    CONN_CELLULAR_3G: 5,
    CONN_CELLULAR_4G: 6,
    CONN_CELLULAR_UNKNOWN: 7,
    CONN_DISCO: 8,
    CONN_CELLULAR_5G: 9,
    CONN_WIFI_METERED: 10,
    CONN_CELLULAR_5G_SA: 11,
    CONN_CELLULAR_5G_NSA: 12,
    CONN_WIRED: 30,
    CONN_INVALID: 31
  };
  var coa = {
    EFFECTIVE_CONNECTION_TYPE_UNKNOWN: 0,
    EFFECTIVE_CONNECTION_TYPE_OFFLINE: 1,
    EFFECTIVE_CONNECTION_TYPE_SLOW_2G: 2,
    EFFECTIVE_CONNECTION_TYPE_2G: 3,
    EFFECTIVE_CONNECTION_TYPE_3G: 4,
    EFFECTIVE_CONNECTION_TYPE_4G: 5
  };
  var Ima = {
    "slow-2g": "EFFECTIVE_CONNECTION_TYPE_SLOW_2G",
    "2g": "EFFECTIVE_CONNECTION_TYPE_2G",
    "3g": "EFFECTIVE_CONNECTION_TYPE_3G",
    "4g": "EFFECTIVE_CONNECTION_TYPE_4G"
  };
  Jma = function Jma() {
    var a = Fma();
    if (a !== null && a !== void 0 && a.effectiveType) return Ima.hasOwnProperty(a.effectiveType) ? Ima[a.effectiveType] : "EFFECTIVE_CONNECTION_TYPE_UNKNOWN";
  };
  Vna = function Vna(a, b) {
    var c = Hma();
    c && (a ? Th(a, 61, boa[c]) : b && (b.client.connectionType = c));
    g.jq("web_log_effective_connection_type") && (c = Jma()) && (a ? Th(a, 94, coa[c]) : b && (b.client.effectiveConnectionType = c));
  };
  Fna = function Fna() {
    if (!_Hs.instance) {
      var a = new _Hs();
      _Hs.instance = a;
    }
    return _Hs.instance;
  };
  Pna = function Pna() {
    var a = Fna(),
      b = (0, g.T)() - a.B;
    if (!(a.B !== 0 && b < g.kq("send_config_hash_timer"))) {
      b = g.ra("yt.gcf.config.coldConfigData");
      var c = g.ra("yt.gcf.config.hotHashData"),
        d = g.ra("yt.gcf.config.coldHashData");
      b && c && d && (a.B = (0, g.T)());
      return {
        coldConfigData: b,
        hotHashData: c,
        coldHashData: d
      };
    }
  };
  Wna = function Wna(a, b) {
    var c = Pna();
    if (c) {
      var _Eh2;
      var d = c.coldConfigData,
        e = c.coldHashData;
      c = c.hotHashData;
      a ? (b = (_Eh2 = Eh(a, Qs, 62)) !== null && _Eh2 !== void 0 ? _Eh2 : new Qs(), d = Sh(b, 1, d), Sh(d, 3, e).Eu(c), Hh(a, Qs, 62, b)) : b && (b.client.configInfo = b.client.configInfo || {}, d && (b.client.configInfo.coldConfigData = d), e && (b.client.configInfo.coldHashData = e), c && (b.client.configInfo.hotHashData = c));
    }
  };
  Bma = function Bma() {
    var _g$pa, _a$location, _a$location2;
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : typeof window !== "undefined" ? window : (_g$pa = g.pa) === null || _g$pa === void 0 ? void 0 : _g$pa.window;
    if (!a) return !1;
    var b = ((_a$location = a.location) === null || _a$location === void 0 ? void 0 : _a$location.hostname) || "";
    return !!((((_a$location2 = a.location) === null || _a$location2 === void 0 ? void 0 : _a$location2.pathname) || "").includes("/playable") || b.includes("playables") || a.nna);
  };
  Br = function Br() {
    var _g$pa2, _g$pa3, _a2, _a3;
    if (!g.jq("enable_ipad_webview_innertube_context_override")) return !1;
    var a = typeof navigator !== "undefined" ? navigator : (_g$pa2 = g.pa) === null || _g$pa2 === void 0 ? void 0 : _g$pa2.navigator;
    if (!(a && a.platform === "MacIntel" && a.maxTouchPoints > 0 && "standalone" in a)) return !1;
    a = typeof window !== "undefined" ? window : (_g$pa3 = g.pa) === null || _g$pa3 === void 0 ? void 0 : _g$pa3.window;
    return Bma(a) ? !(!((_a2 = a) !== null && _a2 !== void 0 && _a2.youtubewebview) && !((_a3 = a) !== null && _a3 !== void 0 && (_a3 = _a3.webkit) !== null && _a3 !== void 0 && (_a3 = _a3.messageHandlers) !== null && _a3 !== void 0 && _a3.youtubewebview)) : !1;
  };
  g.Os = function (a) {
    var _a4, _a5;
    var b = {
      client: {
        hl: a.NR,
        gl: a.MR,
        clientName: a.LR,
        clientVersion: a.innertubeContextClientVersion,
        configInfo: a.LL
      }
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = g.pa.devicePixelRatio;
    c && c != 1 && (b.client.screenDensityFloat = String(c));
    c = lq();
    c !== "" && (b.client.experimentsToken = c);
    c = mq();
    c.length > 0 && (b.request = {
      internalExperimentFlags: c
    });
    Rna(a, void 0, b);
    Sna(void 0, b);
    Tna(void 0, b);
    Una(a, void 0, b);
    Vna(void 0, b);
    g.jq("start_client_gcf") && Wna(void 0, b);
    g.Pp("DELEGATED_SESSION_ID") && !g.jq("pageid_as_header_web") && (b.user = {
      onBehalfOfUser: g.Pp("DELEGATED_SESSION_ID")
    });
    !g.jq("fill_delegate_context_in_gel_killswitch") && (a = g.Pp("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) && (b.user = _objectSpread(_objectSpread({}, b.user), {}, {
      serializedDelegationContext: a
    }));
    a = g.Pp("INNERTUBE_CONTEXT");
    g.jq("enable_persistent_device_token") && ((_a4 = a) === null || _a4 === void 0 || (_a4 = _a4.client) === null || _a4 === void 0 ? void 0 : _a4.rolloutToken) && (b.client.rolloutToken = (_a5 = a) === null || _a5 === void 0 || (_a5 = _a5.client) === null || _a5 === void 0 ? void 0 : _a5.rolloutToken);
    a = Object;
    c = a.assign;
    var d = b.client,
      e = g.Pp("DEVICE", ""),
      f = {};
    for (var _i4 = 0, _Object$entries = Object.entries(Wp(e)); _i4 < _Object$entries.length; _i4++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i4], 2),
        h = _Object$entries$_i[0],
        k = _Object$entries$_i[1];
      e = h;
      var l = k;
      e === "cbrand" ? f.deviceMake = l : e === "cmodel" ? f.deviceModel = l : e === "cbr" ? f.browserName = l : e === "cbrver" ? f.browserVersion = l : e === "cos" ? f.osName = l : e === "cosver" ? f.osVersion = l : e === "cplatform" && (f.platform = l);
    }
    Br() && (f.osName = "IOS", f.platform = "TABLET", f.clientFormFactor = "LARGE_FORM_FACTOR");
    b.client = c.call(a, d, f);
    g.jq("web_attention_logging_enabled") && (b.client.windowWidthPoints = window.innerWidth, b.client.windowHeightPoints = window.innerHeight);
    return b;
  };
  g.Wb = function (a) {
    if (!a || _typeof(a) !== "object") return a;
    if (typeof a.clone === "function") return a.clone();
    if (typeof Map !== "undefined" && a instanceof Map) return new Map(a);
    if (typeof Set !== "undefined" && a instanceof Set) return new Set(a);
    if (a instanceof Date) return new Date(a.getTime());
    var b = Array.isArray(a) ? [] : typeof ArrayBuffer !== "function" || typeof ArrayBuffer.isView !== "function" || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (var c in a) b[c] = g.Wb(a[c]);
    return b;
  };
  dqa = function dqa() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    return a && g.jq("vss_through_gel_video_stats") ? "video_stats" : "log_event";
  };
  eqa = function eqa(a, b, c) {
    if (c.videoId) var d = "VIDEO";else if (c.playlistId) d = "PLAYLIST";else return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{
      token: b,
      scope: d
    }];
  };
  Au = function Au() {
    return g.jq("use_request_time_ms_header");
  };
  lqa = function lqa() {
    var a = g.Pp("BATCH_CLIENT_COUNTER") || 0;
    a || (a = Math.floor(Math.random() * 65535 / 2));
    a++;
    a > 65535 && (a = 1);
    Op("BATCH_CLIENT_COUNTER", a);
    return a;
  };
  fqa = function fqa(a, b, c) {
    Au() || (a.requestTimeMs = String(b));
    g.jq("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c && (b = g.Pp("EVENT_ID")) && (c = lqa(), a.serializedClientEventId = {
      serializedEventId: b,
      clientCounter: String(c)
    });
  };
  gqa = function gqa(a) {
    g.jq("always_send_and_write") && (a.writeThenSend = !1);
  };
  var oqa = {};
  var pqa = {};
  Nna = /*#__PURE__*/function () {
    var _Nna = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(a, b, c) {
      var _yield$Dna, d, _iterator8, _step8, e, _t13, _t14, _t15, _t16, _t17;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.n) {
          case 0:
            if (!g.jq("start_client_gcf")) {
              _context15.n = 7;
              break;
            }
            c && Is(a, c);
            a.Eu(b);
            d = Ds();
            _t13 = d;
            if (!_t13) {
              _context15.n = 6;
              break;
            }
            _t14 = c;
            if (_t14) {
              _context15.n = 5;
              break;
            }
            _context15.n = 1;
            return Dna(d);
          case 1:
            _t16 = _yield$Dna = _context15.v;
            _t15 = _t16 === null;
            if (_t15) {
              _context15.n = 2;
              break;
            }
            _t15 = _yield$Dna === void 0;
          case 2:
            if (!_t15) {
              _context15.n = 3;
              break;
            }
            _t17 = void 0;
            _context15.n = 4;
            break;
          case 3:
            _t17 = _yield$Dna.config;
          case 4:
            c = _t17;
          case 5:
            _context15.n = 6;
            return Ana(c, b, d);
          case 6:
            if (c) {
              a = a.L;
              _iterator8 = _createForOfIteratorHelper(a.j);
              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  e = _step8.value;
                  e(c);
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }
          case 7:
            return _context15.a(2);
        }
      }, _callee15);
    }));
    function Nna(_x27, _x28, _x29) {
      return _Nna.apply(this, arguments);
    }
    return Nna;
  }();
  Ona = /*#__PURE__*/function () {
    var _Ona = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(a, b, c) {
      var _yield$Cna;
      var _t18, _t19, _t20, _t21, _t22, _t23;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.n) {
          case 0:
            _t18 = g.jq("start_client_gcf") && (Ms(a, b), a = Ds());
            if (!_t18) {
              _context16.n = 6;
              break;
            }
            _t19 = c;
            if (_t19) {
              _context16.n = 5;
              break;
            }
            _context16.n = 1;
            return Cna(a);
          case 1:
            _t21 = _yield$Cna = _context16.v;
            _t20 = _t21 === null;
            if (_t20) {
              _context16.n = 2;
              break;
            }
            _t20 = _yield$Cna === void 0;
          case 2:
            if (!_t20) {
              _context16.n = 3;
              break;
            }
            _t22 = void 0;
            _context16.n = 4;
            break;
          case 3:
            _t22 = _yield$Cna.config;
          case 4:
            c = _t22;
          case 5:
            _t23 = c;
            if (!_t23) {
              _context16.n = 6;
              break;
            }
            _context16.n = 6;
            return Bna(c, b, c.configData, a);
          case 6:
            return _context16.a(2);
        }
      }, _callee16);
    }));
    function Ona(_x30, _x31, _x32) {
      return _Ona.apply(this, arguments);
    }
    return Ona;
  }();
  var R_ = /*#__PURE__*/function () {
    function R_(a) {
      _classCallCheck(this, R_);
      this.name = a;
    }
    return _createClass(R_, [{
      key: "toString",
      value: function toString() {
        return "InjectionToken(".concat(this.name, ")");
      }
    }]);
  }();
  var qqa = {};
  hqa = /*#__PURE__*/function () {
    var _hqa = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(a) {
      var _a6, _a7, _a8, _a9, _a0;
      var b, c, d, e, f, _t24, _t25, _t26;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.n) {
          case 0:
            a = (_a6 = a) === null || _a6 === void 0 || (_a6 = _a6.responseContext) === null || _a6 === void 0 ? void 0 : _a6.globalConfigGroup;
            b = g.R(a, oqa), c = (_a7 = a) === null || _a7 === void 0 ? void 0 : _a7.hotHashData, d = g.R(a, pqa), e = (_a8 = a) === null || _a8 === void 0 ? void 0 : _a8.coldHashData, f = Pt().resolve(Kt(_Hs));
            _t24 = f;
            if (!_t24) {
              _context17.n = 6;
              break;
            }
            _t25 = c;
            if (!_t25) {
              _context17.n = 3;
              break;
            }
            if (!b) {
              _context17.n = 2;
              break;
            }
            _context17.n = 1;
            return Nna(f, c, b);
          case 1:
            _context17.n = 3;
            break;
          case 2:
            _context17.n = 3;
            return Nna(f, c);
          case 3:
            _t26 = e;
            if (!_t26) {
              _context17.n = 6;
              break;
            }
            if (!d) {
              _context17.n = 5;
              break;
            }
            _context17.n = 4;
            return Ona(f, e, d);
          case 4:
            _context17.n = 6;
            break;
          case 5:
            _context17.n = 6;
            return Ona(f, e);
          case 6:
            b = (_a9 = a) === null || _a9 === void 0 ? void 0 : _a9.rawFinchStaticConfigGroup;
            if (!(a = (_a0 = a) === null || _a0 === void 0 ? void 0 : _a0.finchStaticHashData)) {
              _context17.n = 10;
              break;
            }
            if (!(c = Pt().resolve(Kt(qqa)))) {
              _context17.n = 8;
              break;
            }
            _context17.n = 7;
            return c.lma({
              config: b || {},
              Via: a || ""
            }, "INNERTUBE_RESPONSE");
          case 7:
            _context17.n = 9;
            break;
          case 8:
            (b || a) && Up(new g.Jr("FinchConfigManagerService is not present, but Finch config data is present."));
          case 9:
            _context17.n = 11;
            break;
          case 10:
            b && Up(new g.Jr("Finch config data is present, but hash is missing."));
          case 11:
            return _context17.a(2);
        }
      }, _callee17);
    }));
    function hqa(_x33) {
      return _hqa.apply(this, arguments);
    }
    return hqa;
  }();
  vu = function vu(a) {
    g.Sp(a, void 0, void 0, void 0, !0);
  };
  wu = function wu(a, b, c, d, e) {
    a = {
      retry: !0,
      onSuccess: c,
      onError: d,
      networklessOptions: a,
      dangerousLogToVisitorSession: b,
      Mia: !!e,
      headers: {},
      postBodyFormat: "",
      postBody: "",
      compress: g.jq("compress_gel") || g.jq("compress_gel_lr")
    };
    Au() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round((0, g.T)())));
    return a;
  };
  var Vs = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
  };
  jga = function jga(a) {
    if (!a) return "";
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
    a.indexOf("blob:") === 0 && (a = a.substring(5));
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    a.indexOf("//") == 0 && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
      c = b.indexOf("/");
    c != -1 && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if (c !== "http" && c !== "https" && c !== "chrome-extension" && c !== "moz-extension" && c !== "file" && c !== "android-app" && c !== "chrome-search" && c !== "chrome-untrusted" && c !== "chrome" && c !== "app" && c !== "devtools") throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (d != -1) {
      var e = b.substring(d + 1);
      b = b.substring(0, d);
      if (c === "http" && e !== "80" || c === "https" && e !== "443") a = ":" + e;
    }
    return c + "://" + b + a;
  };
  g.Ra = function (a, b, c) {
    Array.prototype.forEach.call(a, b, c);
  };
  kga = function kga() {
    function a() {
      e[0] = 1732584193;
      e[1] = 4023233417;
      e[2] = 2562383102;
      e[3] = 271733878;
      e[4] = 3285377520;
      p = m = 0;
    }
    function b(r) {
      for (var u = h, v = 0; v < 64; v += 4) u[v / 4] = r[v] << 24 | r[v + 1] << 16 | r[v + 2] << 8 | r[v + 3];
      for (v = 16; v < 80; v++) r = u[v - 3] ^ u[v - 8] ^ u[v - 14] ^ u[v - 16], u[v] = (r << 1 | r >>> 31) & 4294967295;
      r = e[0];
      var z = e[1],
        H = e[2],
        M = e[3],
        N = e[4];
      for (v = 0; v < 80; v++) {
        if (v < 40) {
          if (v < 20) {
            var Q = M ^ z & (H ^ M);
            var P = 1518500249;
          } else Q = z ^ H ^ M, P = 1859775393;
        } else v < 60 ? (Q = z & H | M & (z | H), P = 2400959708) : (Q = z ^ H ^ M, P = 3395469782);
        Q = ((r << 5 | r >>> 27) & 4294967295) + Q + N + P + u[v] & 4294967295;
        N = M;
        M = H;
        H = (z << 30 | z >>> 2) & 4294967295;
        z = r;
        r = Q;
      }
      e[0] = e[0] + r & 4294967295;
      e[1] = e[1] + z & 4294967295;
      e[2] = e[2] + H & 4294967295;
      e[3] = e[3] + M & 4294967295;
      e[4] = e[4] + N & 4294967295;
    }
    function c(r, u) {
      if (typeof r === "string") {
        r = unescape(encodeURIComponent(r));
        for (var v = [], z = 0, H = r.length; z < H; ++z) v.push(r.charCodeAt(z));
        r = v;
      }
      u || (u = r.length);
      v = 0;
      if (m == 0) for (; v + 64 < u;) b(r.slice(v, v + 64)), v += 64, p += 64;
      for (; v < u;) if (f[m++] = r[v++], p++, m == 64) for (m = 0, b(f); v + 64 < u;) b(r.slice(v, v + 64)), v += 64, p += 64;
    }
    function d() {
      var r = [],
        u = p * 8;
      m < 56 ? c(k, 56 - m) : c(k, 64 - (m - 56));
      for (var v = 63; v >= 56; v--) f[v] = u & 255, u >>>= 8;
      b(f);
      for (v = u = 0; v < 5; v++) for (var z = 24; z >= 0; z -= 8) r[u++] = e[v] >> z & 255;
      return r;
    }
    for (var e = [], f = [], h = [], k = [128], l = 1; l < 64; ++l) k[l] = 0;
    var m, p;
    a();
    return {
      reset: a,
      update: c,
      digest: d,
      R4: function R4() {
        for (var r = d(), u = "", v = 0; v < r.length; v++) u += "0123456789ABCDEF".charAt(Math.floor(r[v] / 16)) + "0123456789ABCDEF".charAt(r[v] % 16);
        return u;
      }
    };
  };
  nga = function nga(a) {
    var b = kga();
    b.update(a);
    return b.R4().toLowerCase();
  };
  lga = function lga(a, b, c) {
    var d = [],
      e = [];
    if ((Array.isArray(c) ? 2 : 1) == 1) return e = [b, a], g.Ra(d, function (k) {
      e.push(k);
    }), nga(e.join(" "));
    var f = [],
      h = [];
    g.Ra(c, function (k) {
      h.push(k.key);
      f.push(k.value);
    });
    c = Math.floor(new Date().getTime() / 1E3);
    e = f.length == 0 ? [c, b, a] : [f.join(":"), c, b, a];
    g.Ra(d, function (k) {
      e.push(k);
    });
    a = nga(e.join(" "));
    a = [c, a];
    h.length == 0 || a.push(h.join(""));
    return a.join("_");
  };
  mga = function mga(a, b, c) {
    var d = String(g.pa.location.href);
    return d && a && b ? [b, lga(jga(d), a, c || null)].join(" ") : null;
  };
  pga = function pga(a, b, c, d) {
    (a = g.pa[a]) || typeof document === "undefined" || (a = new hl(document).get(b));
    return a ? mga(a, c, d) : null;
  };
  oga = function oga() {
    var a = g.pa.__SAPISID || g.pa.__APISID || g.pa.__3PSAPISID || g.pa.__1PSAPISID || g.pa.__OVERRIDE_SID;
    if (a) return !0;
    typeof document !== "undefined" && (a = new hl(document), a = a.get("SAPISID") || a.get("APISID") || a.get("__Secure-3PAPISID") || a.get("__Secure-1PAPISID"));
    return !!a;
  };
  qga = function qga(a) {
    var _g$pa4;
    var b = jga((_g$pa4 = g.pa) === null || _g$pa4 === void 0 ? void 0 : _g$pa4.location.href),
      c = [];
    if (oga()) {
      b = b.indexOf("https:") == 0 || b.indexOf("chrome-extension:") == 0 || b.indexOf("chrome-untrusted://new-tab-page") == 0 || b.indexOf("moz-extension:") == 0;
      var d,
        e = (d = b) ? g.pa.__SAPISID : g.pa.__APISID;
      e || typeof document === "undefined" || (e = new hl(document), e = e.get(d ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID"));
      (d = e ? mga(e, d ? "SAPISIDHASH" : "APISIDHASH", a) : null) && c.push(d);
      b && ((b = pga("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && c.push(b), (a = pga("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && c.push(a));
    }
    return c.length == 0 ? null : c.join(" ");
  };
  var Ar = /*#__PURE__*/function () {
    function Ar() {
      _classCallCheck(this, Ar);
      this.fV = !0;
    }
    return _createClass(Ar, [{
      key: "wy",
      value: function wy(a, b) {
        var _b;
        a = {};
        var c = [];
        "USER_SESSION_ID" in Np && c.push({
          key: "u",
          value: g.Pp("USER_SESSION_ID")
        });
        if (c = qga(c)) a.Authorization = c, c = b = (_b = b) === null || _b === void 0 ? void 0 : _b.sessionIndex, c === void 0 && (c = Number(g.Pp("SESSION_INDEX", 0)), c = isNaN(c) ? 0 : c), g.jq("voice_search_auth_header_removal") || (a["X-Goog-AuthUser"] = c.toString()), "INNERTUBE_HOST_OVERRIDE" in Np || (a["X-Origin"] = window.location.origin), b === void 0 && "DELEGATED_SESSION_ID" in Np && (a["X-Goog-PageId"] = g.Pp("DELEGATED_SESSION_ID"));
        return a;
      }
    }]);
  }();
  Ama = function Ama() {
    Ar.instance || (Ar.instance = new Ar());
    return Ar.instance;
  };
  doa = function doa(a, b) {
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var d = {};
    g.Pp("EOM_VISITOR_DATA") ? d = {
      "X-Goog-EOM-Visitor-Id": g.Pp("EOM_VISITOR_DATA")
    } : d = {
      "X-Goog-Visitor-Id": c.visitorData || g.Pp("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    b = c.yW || g.Pp("AUTHORIZATION");
    b || (a ? b = "Bearer ".concat(g.ra("gapi.auth.getToken")().access_token) : (a = Ama().wy(Vs), g.jq("pageid_as_header_web") || delete a["X-Goog-PageId"], d = _objectSpread(_objectSpread({}, d), a)));
    b && (d.Authorization = b);
    return d;
  };
  g.Mb = function (a, b) {
    return a !== null && b in a;
  };
  g.id = function (a) {
    return encodeURIComponent(String(a));
  };
  _hj = function hj(a, b, c) {
    if (Array.isArray(b)) for (var d = 0; d < b.length; d++) _hj(a, String(b[d]), c);else b != null && c.push(a + (b === "" ? "" : "=" + g.id(b)));
  };
  g.ij = function (a) {
    var b = [];
    for (var c in a) _hj(c, a[c], b);
    return b.join("&");
  };
  gj = function gj(a, b) {
    if (!b) return a;
    var c = a.indexOf("#");
    c < 0 && (c = a.length);
    var d = a.indexOf("?");
    if (d < 0 || d > c) {
      d = c;
      var e = "";
    } else e = a.substring(d + 1, c);
    a = [a.slice(0, d), e, a.slice(c)];
    c = a[1];
    a[1] = b ? c ? c + "&" + b : b : c;
    return a[0] + (a[1] ? "?" + a[1] : "") + a[2];
  };
  g.jj = function (a, b) {
    b = g.ij(b);
    return gj(a, b);
  };
  Ala = function Ala(a, b, c) {
    var d = (a || "").split("#", 2);
    a = d[0];
    d = d.length > 1 ? "#" + d[1] : "";
    var e = a.indexOf("?"),
      f = e !== -1 ? a.substring(0, e) : a;
    a = Wp(e !== -1 ? a.substring(e + 1) : "");
    for (var h in b) if (c || !g.Mb(a, h)) a[h] = b[h];
    return g.jj(f, a) + d;
  };
  Zp = function Zp(a, b) {
    return Ala(a, b || {}, !0);
  };
  Mla = function Mla(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    var c = g.Pp("XSRF_FIELD_NAME");
    if (b = b.urlParams) b[c] && delete b[c], a = Zp(a, b);
    return a;
  };
  var Yca = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
  g.$i = function (a) {
    return a.match(Yca);
  };
  Zca = function Zca(a) {
    return a ? decodeURI(a) : a;
  };
  g.cj = function (a) {
    return Zca(g.$i(a)[3] || null);
  };
  var Xb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  g.Yb = function (a, b) {
    for (var e = 1; e < arguments.length; e++) {
      var c = arguments[e];
      for (d in c) a[d] = c[d];
      for (var f = 0; f < Xb.length; f++) {
        var d = Xb[f];
        Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
      }
    }
  };
  g.Qb = function (a) {
    for (var b in a) return !1;
    return !0;
  };
  var Tla = !1;
  Nla = function Nla(a, b) {
    var c = g.Pp("XSRF_FIELD_NAME"),
      d = g.Pp("XSRF_TOKEN"),
      e = b.postBody || "",
      f = b.postParams,
      h = g.Pp("XSRF_FIELD_NAME"),
      k;
    b.headers && (k = b.headers["Content-Type"]);
    b.excludeXsrf || g.cj(a) && !b.withCredentials && g.cj(a) !== document.location.hostname || b.method !== "POST" || k && k !== "application/x-www-form-urlencoded" || b.postParams && b.postParams[h] || (f || (f = {}), f[c] = d);
    f && typeof e === "string" && (e = Wp(e), g.Yb(e, f), e = b.postBodyFormat && b.postBodyFormat === "JSON" ? JSON.stringify(e) : g.ij(e));
    f = e || f && !g.Qb(f);
    !Tla && f && b.method !== "POST" && (Tla = !0, g.Sp(Error("AJAX request with postData should use POST")));
    return e;
  };
  cq = function cq(a) {
    return a && "status" in a ? a.status : -1;
  };
  g.dq = function (a) {
    switch (cq(a)) {
      case 200:
      case 201:
      case 202:
      case 203:
      case 204:
      case 205:
      case 206:
      case 304:
        return !0;
      default:
        return !1;
    }
  };
  Vla = function Vla(a) {
    var b = "";
    g.Ra(a.childNodes, function (c) {
      b += c.nodeValue;
    });
    return b;
  };
  Ula = function Ula(a) {
    return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && a.length > 0 ? a[0] : null : null;
  };
  var Ac = {};
  waa = function waa() {
    var a = null;
    if (!Ac) return a;
    try {
      var b = function b(c) {
        return c;
      };
      a = Ac.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b
      });
    } catch (b) {}
    return a;
  };
  Bc = undefined;
  Dc = function Dc() {
    Bc === void 0 && (Bc = waa());
    return Bc;
  };
  var Sc = /*#__PURE__*/function () {
    function Sc(a) {
      _classCallCheck(this, Sc);
      this.j = a;
    }
    return _createClass(Sc, [{
      key: "toString",
      value: function toString() {
        return this.j + "";
      }
    }]);
  }();
  Tc = function Tc(a) {
    var b = Dc();
    a = b ? b.createHTML(a) : a;
    return new Sc(a);
  };
  ec = function ec(a, b) {
    var c = a.length - b.length;
    return c >= 0 && a.indexOf(b, c) == c;
  };
  g.za = function (a) {
    var b = _typeof(a);
    return b == "object" && a != null || b == "function";
  };
  _Wla = function Wla(a) {
    if (g.za(a)) for (var b in a) b === "html_content" || ec(b, "_html") ? a[b] = Tc(a[b]) : _Wla(a[b]);
  };
  Rla = function Rla(a, b, c, d) {
    var e = null;
    switch (b) {
      case "JSON":
        var f;
        try {
          f = c.responseText;
        } catch (h) {
          throw d = Error("Error reading responseText"), d.params = a, Up(d), h;
        }
        a = c.getResponseHeader("Content-Type") || "";
        if (f && a.indexOf("json") >= 0) {
          f.substring(0, 5) === ")]}'\n" && (f = f.substring(5));
          try {
            e = JSON.parse(f);
          } catch (h) {}
        }
        break;
      case "XML":
        if (a = (a = c.responseXML) ? Ula(a) : null) e = {}, g.Ra(a.getElementsByTagName("*"), function (h) {
          e[h.tagName] = Vla(h);
        });
    }
    d && _Wla(e);
    return e;
  };
  Sla = function Sla(a, b, c) {
    if (b && b.status === 204) return !0;
    switch (a) {
      case "JSON":
        return !!c;
      case "XML":
        return Number(c && c.return_code) === 0;
      case "RAW":
        return !0;
      default:
        return !!c;
    }
  };
  var Gla = undefined;
  Hla = function Hla() {
    if (!Gla) return null;
    var a = Gla();
    return "open" in a ? a : null;
  };
  aq = function aq(a) {
    if (!b) var b = window.location.href;
    var c = g.$i(a)[1] || null,
      d = g.cj(a);
    c && d ? (a = g.$i(a), b = g.$i(b), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? g.cj(b) === d && (Number(g.$i(b)[4] || null) || null) === (Number(g.$i(a)[4] || null) || null) : !0;
    return a;
  };
  dj = function dj(a) {
    return Zca(g.$i(a)[5] || null);
  };
  var Xgb = "absolute_experiments client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods theme".split(" ");
  var Xla = [];
  $p = function $p(a, b) {
    return Ala(a, b || {}, !1);
  };
  Ila = function Ila(a) {
    var b = window.location.search,
      c = g.cj(a);
    g.jq("debug_handle_relative_url_for_query_forward_killswitch") || !c && aq(a) && (c = document.location.hostname);
    var d = dj(a);
    d = (c = c && (c.endsWith("youtube.com") || c.endsWith("youtube-nocookie.com"))) && d && d.startsWith("/api/");
    if (!c || d) return a;
    var e = Wp(b),
      f = {};
    g.Ra(Xla, function (h) {
      e[h] && (f[h] = e[h]);
    });
    return $p(a, f);
  };
  var Kla = {
    Authorization: "AUTHORIZATION",
    "X-Goog-EOM-Visitor-Id": "EOM_VISITOR_DATA",
    "X-Goog-Visitor-Id": "SANDBOXED_VISITOR_ID",
    "X-Youtube-Domain-Admin-State": "DOMAIN_ADMIN_STATE",
    "X-Youtube-Chrome-Connected": "CHROME_CONNECTED_HEADER",
    "X-YouTube-Client-Name": "INNERTUBE_CONTEXT_CLIENT_NAME",
    "X-YouTube-Client-Version": "INNERTUBE_CONTEXT_CLIENT_VERSION",
    "X-YouTube-Delegation-Context": "INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
    "X-YouTube-Device": "DEVICE",
    "X-Youtube-Identity-Token": "ID_TOKEN",
    "X-YouTube-Page-CL": "PAGE_CL",
    "X-YouTube-Page-Label": "PAGE_BUILD_LABEL",
    "X-Goog-AuthUser": "SESSION_INDEX",
    "X-Goog-PageId": "DELEGATED_SESSION_ID"
  };
  var Ela = {};
  var Cla = undefined;
  var te = window;
  Dla = function Dla(a) {
    a: {
      var c;
      try {
        c = a.j.top.location.href;
      } catch (d) {
        a = 2;
        break a;
      }
      a = c ? c === a.A.location.href ? 0 : 1 : 2;
    }
    a = {
      dt: Cla,
      flash: "0",
      frm: a
    };
    try {
      var _te$screen, _te$screen2, _te$screen3, _te$screen4, _te$screen5;
      a.u_tz = -new Date().getTimezoneOffset();
      try {
        var b = te.history.length;
      } catch (c) {
        b = 0;
      }
      a.u_his = b;
      a.u_h = (_te$screen = te.screen) === null || _te$screen === void 0 ? void 0 : _te$screen.height;
      a.u_w = (_te$screen2 = te.screen) === null || _te$screen2 === void 0 ? void 0 : _te$screen2.width;
      a.u_ah = (_te$screen3 = te.screen) === null || _te$screen3 === void 0 ? void 0 : _te$screen3.availHeight;
      a.u_aw = (_te$screen4 = te.screen) === null || _te$screen4 === void 0 ? void 0 : _te$screen4.availWidth;
      a.u_cd = (_te$screen5 = te.screen) === null || _te$screen5 === void 0 ? void 0 : _te$screen5.colorDepth;
    } catch (c) {}
    return a;
  };
  g.Id = function (a, b) {
    this.width = a;
    this.height = b;
  };
  g.G = g.Id.prototype;
  g.G.clone = function () {
    return new g.Id(this.width, this.height);
  };
  g.G.aspectRatio = function () {
    return this.width / this.height;
  };
  Kd = function Kd(a) {
    return a.width * a.height;
  };
  g.G.isEmpty = function () {
    return !Kd(this);
  };
  g.G.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  g.G.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  g.G.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  g.G.scale = function (a, b) {
    b = typeof b === "number" ? b : a;
    this.width *= a;
    this.height *= b;
    return this;
  };
  $d = function $d(a) {
    a = a.document;
    a = a.compatMode == "CSS1Compat" ? a.documentElement : a.body;
    return new g.Id(a.clientWidth, a.clientHeight);
  };
  kda = function kda(a, b) {
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    if (a && b !== null && b != b.top) {
      if (!b.top) return new g.Id(-12245933, -12245933);
      b = b.top;
    }
    try {
      return c ? new g.Id(b.innerWidth, b.innerHeight).round() : $d(b || window).round();
    } catch (d) {
      return new g.Id(-12245933, -12245933);
    }
  };
  var Fla = /*#__PURE__*/function () {
    function Fla() {
      _classCallCheck(this, Fla);
      this.data = [];
      this.j = -1;
    }
    return _createClass(Fla, [{
      key: "set",
      value: function set(a) {
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        0 <= a && a < 52 && Number.isInteger(a) && this.data[a] !== b && (this.data[a] = b, this.j = -1);
      }
    }, {
      key: "get",
      value: function get(a) {
        return !!this.data[a];
      }
    }]);
  }();
  qf = function qf(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    return b.createElement(String(a).toLowerCase());
  };
  var dba = {
    Qaa: "allow-forms",
    Raa: "allow-modals",
    Saa: "allow-orientation-lock",
    Taa: "allow-pointer-lock",
    Uaa: "allow-popups",
    Vaa: "allow-popups-to-escape-sandbox",
    Waa: "allow-presentation",
    Xaa: "allow-same-origin",
    Yaa: "allow-scripts",
    Zaa: "allow-top-navigation",
    aba: "allow-top-navigation-by-user-activation"
  };
  kf = function kf(a, b) {
    if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  };
  eba = function eba() {
    var a = [];
    kf(dba, function (b) {
      a.push(b);
    });
    return a;
  };
  ye = function ye(a) {
    var b = !1,
      c;
    return function () {
      b || (c = a(), b = !0);
      return c;
    };
  };
  var jba = undefined;
  kba = function kba() {
    var a = qf("IFRAME"),
      b = {};
    g.Ra(jba(), function (c) {
      a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0);
    });
    return b;
  };
  kka = function kka(a) {
    a.j === -1 && (a.j = a.data.reduce(function (b, c, d) {
      return b + (c ? Math.pow(2, d) : 0);
    }, 0));
    return a.j;
  };
  bf = function bf(a) {
    var _visible$hidden$prere;
    return a.prerendering ? 3 : (_visible$hidden$prere = {
      visible: 1,
      hidden: 2,
      prerender: 3,
      preview: 4,
      unloaded: 5,
      "": 0
    }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""]) !== null && _visible$hidden$prere !== void 0 ? _visible$hidden$prere : 0;
  };
  sla = function sla() {
    return g.ra("yt.ads.biscotti.lastId_") || "";
  };
  Ul = function Ul() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : sla();
    var b = Ela,
      c = Object,
      d = c.assign,
      e = Dla(b);
    var f = b.j;
    try {
      var h = f.screenX;
      var k = f.screenY;
    } catch (M) {}
    try {
      var l = f.outerWidth;
      var m = f.outerHeight;
    } catch (M) {}
    try {
      var p = f.innerWidth;
      var r = f.innerHeight;
    } catch (M) {}
    try {
      var u = f.screenLeft;
      var v = f.screenTop;
    } catch (M) {}
    try {
      p = f.innerWidth, r = f.innerHeight;
    } catch (M) {}
    try {
      var z = f.screen.availWidth;
      var H = f.screen.availTop;
    } catch (M) {}
    f = [u, v, h, k, z, H, l, m, p, r];
    h = kda(!1, b.j.top);
    k = new Fla();
    "SVGElement" in g.pa && "createElementNS" in g.pa.document && k.set(0);
    l = kba();
    l["allow-top-navigation-by-user-activation"] && k.set(1);
    l["allow-popups-to-escape-sandbox"] && k.set(2);
    g.pa.crypto && g.pa.crypto.subtle && k.set(3);
    "TextDecoder" in g.pa && "TextEncoder" in g.pa && k.set(4);
    k = kka(k);
    b = d.call(c, e, {
      bc: k,
      bih: h.height,
      biw: h.width,
      brdim: f.join(),
      vis: bf(b.A),
      wgl: !!te.WebGLRenderingContext
    });
    b.ca_type = "image";
    a && (b.bid = a);
    return b;
  };
  g.Cb = function (a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  };
  Tl = function Tl(a) {
    var b = [];
    g.Cb(a, function (c, d) {
      var e = g.id(d);
      g.Ra(Array.isArray(c) ? c : [c], function (f) {
        f == "" ? b.push(e) : b.push("".concat(e, "=").concat(g.id(f)));
      });
    });
    return b.join("&");
  };
  Jla = function Jla(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var c = aq(a),
      d = g.Pp("INNERTUBE_CLIENT_NAME"),
      e = g.jq("web_ajax_ignore_global_headers_if_set");
    for (var f in Kla) {
      var h = g.Pp(Kla[f]),
        k = f === "X-Goog-AuthUser" || f === "X-Goog-PageId";
      f !== "X-Goog-Visitor-Id" || h || (h = g.Pp("VISITOR_DATA"));
      !h || !c && g.cj(a) || e && b[f] !== void 0 || d === "TVHTML5_UNPLUGGED" && k || (b[f] = h);
    }
    "X-Goog-EOM-Visitor-Id" in b && "X-Goog-Visitor-Id" in b && delete b["X-Goog-Visitor-Id"];
    if (c || !g.cj(a)) b["X-YouTube-Utc-Offset"] = String(-new Date().getTimezoneOffset());
    if (c || !g.cj(a)) {
      var _f;
      try {
        _f = new Intl.DateTimeFormat().resolvedOptions().timeZone;
      } catch (_unused5) {}
      _f && (b["X-YouTube-Time-Zone"] = _f);
    }
    document.location.hostname.endsWith("youtubeeducation.com") || !c && g.cj(a) || (b["X-YouTube-Ad-Signals"] = Tl(Ul()));
    return b;
  };
  nq = function nq(a, b) {
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "GET";
    var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    var e = arguments.length > 4 ? arguments[4] : undefined;
    var f = arguments.length > 5 ? arguments[5] : undefined;
    var h = arguments.length > 6 ? arguments[6] : undefined;
    var k = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !1;
    var l = arguments.length > 8 ? arguments[8] : undefined;
    var m = Hla();
    if (!m) return null;
    var p = function p() {
      (m && "readyState" in m ? m.readyState : 0) === 4 && b && g.Tp(b)(m);
    };
    "onloadend" in m ? m.addEventListener("loadend", p, !1) : m.onreadystatechange = p;
    g.jq("debug_forward_web_query_parameters") && (a = Ila(a));
    m.open(c, a, !0);
    f && (m.responseType = f);
    h && (m.withCredentials = !0);
    c = c === "POST" && (window.FormData === void 0 || !(d instanceof FormData));
    if (e = Jla(a, e)) for (var r in e) m.setRequestHeader(r, e[r]), "content-type" === r.toLowerCase() && (c = !1);
    c && m.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    l && "onprogress" in m && (m.onprogress = function () {
      l(m.responseText);
    });
    if (k && "setAttributionReporting" in XMLHttpRequest.prototype) {
      a = {
        eventSourceEligible: !0,
        triggerEligible: !1
      };
      try {
        m.setAttributionReporting(a);
      } catch (r) {
        Up(r);
      }
    }
    m.send(d);
    return m;
  };
  var Qla = nq;
  g.oq = function (a, b) {
    var c = b.format || "JSON";
    a = Mla(a, b);
    var d = Nla(a, b),
      e = !1,
      f = Qla(a, function (k) {
        if (!e) {
          e = !0;
          h && g.gq(h);
          var l = g.dq(k),
            m = null,
            p = 400 <= k.status && k.status < 500,
            r = 500 <= k.status && k.status < 600;
          if (l || p || r) m = Rla(a, c, k, b.convertToSafeHtml);
          l && (l = Sla(c, k, m));
          m = m || {};
          p = b.context || g.pa;
          l ? b.onSuccess && b.onSuccess.call(p, k, m) : b.onError && b.onError.call(p, k, m);
          b.onFinish && b.onFinish.call(p, k, m);
        }
      }, b.method, d, b.headers, b.responseType, b.withCredentials, !1, b.onProgress);
    d = b.timeout || 0;
    if (b.onTimeout && d > 0) {
      var k = b.onTimeout;
      var h = g.eq(function () {
        e || (e = !0, f.abort(), g.gq(h), k.call(b.context || g.pa, f));
      }, d);
    }
    return f;
  };
  pq = function pq(a, b) {
    b.method = "POST";
    b.postParams || (b.postParams = {});
    return g.oq(a, b);
  };
  joa = function joa(a) {
    try {
      return new Blob(a.split("")).size;
    } catch (b) {
      return Up(b), null;
    }
  };
  g.xf = function (a) {
    var b = [],
      c = 0;
    for (var d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      e < 128 ? b[c++] = e : (e < 2048 ? b[c++] = e >> 6 | 192 : ((e & 64512) == 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) == 56320 ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128);
    }
    return b;
  };
  var rhb = undefined;
  var moa = undefined;
  var Yo = {};
  var bla = function bla() {
    this.input = null;
    this.AA = this.Qk = this.pz = 0;
    this.output = null;
    this.nV = this.jf = this.wC = 0;
    this.msg = "";
    this.state = null;
    this.oQ = 2;
    this.ye = 0;
  };
  pp = function pp(a) {
    for (var b = a.length; --b >= 0;) a[b] = 0;
  };
  $ka = function $ka() {
    this.Ue = null;
    this.status = 0;
    this.Tg = null;
    this.wrap = this.pending = this.vH = this.Bo = 0;
    this.qe = null;
    this.Ap = 0;
    this.method = 8;
    this.hC = -1;
    this.yx = this.AV = this.Mk = 0;
    this.window = null;
    this.P1 = 0;
    this.head = this.Mr = null;
    this.g_ = this.mY = this.strategy = this.level = this.FS = this.IZ = this.pn = this.Fc = this.nC = this.Ib = this.jz = this.V_ = this.zf = this.Um = this.At = this.zt = this.CR = this.BL = this.Xe = 0;
    this.Yl = new Yo.Fs(1146);
    this.ly = new Yo.Fs(122);
    this.uk = new Yo.Fs(78);
    pp(this.Yl);
    pp(this.ly);
    pp(this.uk);
    this.IW = this.AK = this.aM = null;
    this.Ss = new Yo.Fs(16);
    this.heap = new Yo.Fs(573);
    pp(this.heap);
    this.SB = this.Bt = 0;
    this.depth = new Yo.Fs(573);
    pp(this.depth);
    this.Nj = this.Rk = this.Ri = this.matches = this.xD = this.ku = this.dF = this.uo = this.EG = this.jS = 0;
  };
  var np = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version"
  };
  op = function op(a, b) {
    a.msg = np[b];
    return b;
  };
  var fp = Array(256);
  var gp = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
  var hp = Array(29);
  var ip = Array(512);
  var jp = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
  var kp = Array(30);
  var rp = Array(576);
  Mka = function Mka(a, b) {
    var c = 0;
    do c |= a & 1, a >>>= 1, c <<= 1; while (--b > 0);
    return c >>> 1;
  };
  Nka = function Nka(a, b, c) {
    var d = Array(16),
      e = 0,
      f;
    for (f = 1; f <= 15; f++) d[f] = e = e + c[f - 1] << 1;
    for (c = 0; c <= b; c++) e = a[c * 2 + 1], e !== 0 && (a[c * 2] = Mka(d[e]++, e));
  };
  var sp = Array(60);
  $o = function $o(a, b, c, d, e) {
    this.L0 = a;
    this.s5 = b;
    this.r5 = c;
    this.Y4 = d;
    this.c7 = e;
    this.HY = a && a.length;
  };
  ela = undefined;
  fla = undefined;
  var hla = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
  gla = undefined;
  var dla = !1;
  ap = function ap(a, b) {
    this.sX = a;
    this.pC = 0;
    this.jx = b;
  };
  Oka = function Oka(a) {
    var b;
    for (b = 0; b < 286; b++) a.Yl[b * 2] = 0;
    for (b = 0; b < 30; b++) a.ly[b * 2] = 0;
    for (b = 0; b < 19; b++) a.uk[b * 2] = 0;
    a.Yl[512] = 1;
    a.ku = a.xD = 0;
    a.uo = a.matches = 0;
  };
  var wp = function wp(a, b, c, d) {
    var e = a & 65535 | 0;
    a = a >>> 16 & 65535 | 0;
    for (var f; c !== 0;) {
      f = c > 2E3 ? 2E3 : c;
      c -= f;
      do e = e + b[d++] | 0, a = a + e | 0; while (--f);
      e %= 65521;
      a %= 65521;
    }
    return e | a << 16 | 0;
  };
  yp = function yp(a) {
    var b = a.Mk,
      c;
    do {
      var d = a.P1 - a.Fc - a.Ib;
      if (a.Ib >= b + (b - 262)) {
        Yo.aB(a.window, a.window, b, b, 0);
        a.nC -= b;
        a.Ib -= b;
        a.Um -= b;
        var e = c = a.BL;
        do {
          var f = a.head[--e];
          a.head[e] = f >= b ? f - b : 0;
        } while (--c);
        e = c = b;
        do f = a.Mr[--e], a.Mr[e] = f >= b ? f - b : 0; while (--c);
        d += b;
      }
      if (a.Ue.Qk === 0) break;
      e = a.Ue;
      c = a.window;
      f = a.Ib + a.Fc;
      var h = e.Qk;
      h > d && (h = d);
      h === 0 ? c = 0 : (e.Qk -= h, Yo.aB(c, e.input, e.pz, h, f), e.state.wrap === 1 ? e.ye = wp(e.ye, c, h, f) : e.state.wrap === 2 && (e.ye = xp(e.ye, c, h, f)), e.pz += h, e.AA += h, c = h);
      a.Fc += c;
      if (a.Fc + a.Ri >= 3) for (d = a.Ib - a.Ri, a.Xe = a.window[d], a.Xe = (a.Xe << a.At ^ a.window[d + 1]) & a.zt; a.Ri && !(a.Xe = (a.Xe << a.At ^ a.window[d + 3 - 1]) & a.zt, a.Mr[d & a.yx] = a.head[a.Xe], a.head[a.Xe] = d, d++, a.Ri--, a.Fc + a.Ri < 3););
    } while (a.Fc < 262 && a.Ue.Qk !== 0);
  };
  Vka = function Vka(a) {
    var b = 4093624447,
      c;
    for (c = 0; c <= 31; c++, b >>>= 1) if (b & 1 && a.Yl[c * 2] !== 0) return 0;
    if (a.Yl[18] !== 0 || a.Yl[20] !== 0 || a.Yl[26] !== 0) return 1;
    for (c = 32; c < 256; c++) if (a.Yl[c * 2] !== 0) return 1;
    return 0;
  };
  Rka = function Rka(a, b, c, d) {
    var e = b * 2,
      f = c * 2;
    return a[e] < a[f] || a[e] === a[f] && d[b] <= d[c];
  };
  ep = function ep(a, b, c) {
    for (var d = a.heap[c], e = c << 1; e <= a.Bt;) {
      e < a.Bt && Rka(b, a.heap[e + 1], a.heap[e], a.depth) && e++;
      if (Rka(b, d, a.heap[e], a.depth)) break;
      a.heap[c] = a.heap[e];
      c = e;
      e <<= 1;
    }
    a.heap[c] = d;
  };
  lp = function lp(a, b) {
    var c = b.sX,
      d = b.jx.L0,
      e = b.jx.HY,
      f = b.jx.Y4,
      h,
      k = -1;
    a.Bt = 0;
    a.SB = 573;
    for (h = 0; h < f; h++) c[h * 2] !== 0 ? (a.heap[++a.Bt] = k = h, a.depth[h] = 0) : c[h * 2 + 1] = 0;
    for (; a.Bt < 2;) {
      var l = a.heap[++a.Bt] = k < 2 ? ++k : 0;
      c[l * 2] = 1;
      a.depth[l] = 0;
      a.ku--;
      e && (a.xD -= d[l * 2 + 1]);
    }
    b.pC = k;
    for (h = a.Bt >> 1; h >= 1; h--) ep(a, c, h);
    l = f;
    do h = a.heap[1], a.heap[1] = a.heap[a.Bt--], ep(a, c, 1), d = a.heap[1], a.heap[--a.SB] = h, a.heap[--a.SB] = d, c[l * 2] = c[h * 2] + c[d * 2], a.depth[l] = (a.depth[h] >= a.depth[d] ? a.depth[h] : a.depth[d]) + 1, c[h * 2 + 1] = c[d * 2 + 1] = l, a.heap[1] = l++, ep(a, c, 1); while (a.Bt >= 2);
    a.heap[--a.SB] = a.heap[1];
    h = b.sX;
    l = b.pC;
    d = b.jx.L0;
    e = b.jx.HY;
    f = b.jx.s5;
    var m = b.jx.r5,
      p = b.jx.c7,
      r,
      u = 0;
    for (r = 0; r <= 15; r++) a.Ss[r] = 0;
    h[a.heap[a.SB] * 2 + 1] = 0;
    for (b = a.SB + 1; b < 573; b++) {
      var v = a.heap[b];
      r = h[h[v * 2 + 1] * 2 + 1] + 1;
      r > p && (r = p, u++);
      h[v * 2 + 1] = r;
      if (!(v > l)) {
        a.Ss[r]++;
        var z = 0;
        v >= m && (z = f[v - m]);
        var H = h[v * 2];
        a.ku += H * (r + z);
        e && (a.xD += H * (d[v * 2 + 1] + z));
      }
    }
    if (u !== 0) {
      do {
        for (r = p - 1; a.Ss[r] === 0;) r--;
        a.Ss[r]--;
        a.Ss[r + 1] += 2;
        a.Ss[p]--;
        u -= 2;
      } while (u > 0);
      for (r = p; r !== 0; r--) for (v = a.Ss[r]; v !== 0;) d = a.heap[--b], d > l || (h[d * 2 + 1] !== r && (a.ku += (r - h[d * 2 + 1]) * h[d * 2], h[d * 2 + 1] = r), v--);
    }
    Nka(c, k, a.Ss);
  };
  Tka = function Tka(a, b, c) {
    var d,
      e = -1,
      f = b[1],
      h = 0,
      k = 7,
      l = 4;
    f === 0 && (k = 138, l = 3);
    b[(c + 1) * 2 + 1] = 65535;
    for (d = 0; d <= c; d++) {
      var m = f;
      f = b[(d + 1) * 2 + 1];
      ++h < k && m === f || (h < l ? a.uk[m * 2] += h : m !== 0 ? (m !== e && a.uk[m * 2]++, a.uk[32]++) : h <= 10 ? a.uk[34]++ : a.uk[36]++, h = 0, e = m, f === 0 ? (k = 138, l = 3) : m === f ? (k = 6, l = 3) : (k = 7, l = 4));
    }
  };
  var Wka = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  bp = function bp(a, b) {
    a.Tg[a.pending++] = b & 255;
    a.Tg[a.pending++] = b >>> 8 & 255;
  };
  cp = function cp(a, b, c) {
    a.Nj > 16 - c ? (a.Rk |= b << a.Nj & 65535, bp(a, a.Rk), a.Rk = b >> 16 - a.Nj, a.Nj += c - 16) : (a.Rk |= b << a.Nj & 65535, a.Nj += c);
  };
  dp = function dp(a, b, c) {
    cp(a, c[b * 2], c[b * 2 + 1]);
  };
  Uka = function Uka(a, b, c) {
    var d,
      e = -1,
      f = b[1],
      h = 0,
      k = 7,
      l = 4;
    f === 0 && (k = 138, l = 3);
    for (d = 0; d <= c; d++) {
      var m = f;
      f = b[(d + 1) * 2 + 1];
      if (!(++h < k && m === f)) {
        if (h < l) {
          do dp(a, m, a.uk); while (--h !== 0);
        } else m !== 0 ? (m !== e && (dp(a, m, a.uk), h--), dp(a, 16, a.uk), cp(a, h - 3, 2)) : h <= 10 ? (dp(a, 17, a.uk), cp(a, h - 3, 3)) : (dp(a, 18, a.uk), cp(a, h - 11, 7));
        h = 0;
        e = m;
        f === 0 ? (k = 138, l = 3) : m === f ? (k = 6, l = 3) : (k = 7, l = 4);
      }
    }
  };
  Ska = function Ska(a, b, c) {
    var d = 0;
    if (a.uo !== 0) {
      do {
        var e = a.Tg[a.dF + d * 2] << 8 | a.Tg[a.dF + d * 2 + 1];
        var f = a.Tg[a.jS + d];
        d++;
        if (e === 0) dp(a, f, b);else {
          var h = fp[f];
          dp(a, h + 256 + 1, b);
          var k = gp[h];
          k !== 0 && (f -= hp[h], cp(a, f, k));
          e--;
          h = e < 256 ? ip[e] : ip[256 + (e >>> 7)];
          dp(a, h, c);
          k = jp[h];
          k !== 0 && (e -= kp[h], cp(a, e, k));
        }
      } while (d < a.uo);
    }
    dp(a, 256, b);
  };
  Pka = function Pka(a) {
    a.Nj > 8 ? bp(a, a.Rk) : a.Nj > 0 && (a.Tg[a.pending++] = a.Rk);
    a.Rk = 0;
    a.Nj = 0;
  };
  Qka = function Qka(a, b, c) {
    Pka(a);
    bp(a, c);
    bp(a, ~c);
    Yo.aB(a.Tg, a.window, b, c, a.pending);
    a.pending += c;
  };
  qp = function qp(a) {
    var b = a.state,
      c = b.pending;
    c > a.jf && (c = a.jf);
    c !== 0 && (Yo.aB(a.output, b.Tg, b.vH, c, a.wC), a.wC += c, b.vH += c, a.nV += c, a.jf -= c, b.pending -= c, b.pending === 0 && (b.vH = 0));
  };
  tp = function tp(a, b) {
    var c = a.Um >= 0 ? a.Um : -1,
      d = a.Ib - a.Um,
      e = 0;
    if (a.level > 0) {
      a.Ue.oQ === 2 && (a.Ue.oQ = Vka(a));
      lp(a, a.aM);
      lp(a, a.AK);
      Tka(a, a.Yl, a.aM.pC);
      Tka(a, a.ly, a.AK.pC);
      lp(a, a.IW);
      for (e = 18; e >= 3 && a.uk[Wka[e] * 2 + 1] === 0; e--);
      a.ku += 3 * (e + 1) + 5 + 5 + 4;
      var f = a.ku + 3 + 7 >>> 3;
      var h = a.xD + 3 + 7 >>> 3;
      h <= f && (f = h);
    } else f = h = d + 5;
    if (d + 4 <= f && c !== -1) cp(a, b ? 1 : 0, 3), Qka(a, c, d);else if (a.strategy === 4 || h === f) cp(a, 2 + (b ? 1 : 0), 3), Ska(a, rp, sp);else {
      cp(a, 4 + (b ? 1 : 0), 3);
      c = a.aM.pC + 1;
      d = a.AK.pC + 1;
      e += 1;
      cp(a, c - 257, 5);
      cp(a, d - 1, 5);
      cp(a, e - 4, 4);
      for (f = 0; f < e; f++) cp(a, a.uk[Wka[f] * 2 + 1], 3);
      Uka(a, a.Yl, c - 1);
      Uka(a, a.ly, d - 1);
      Ska(a, a.Yl, a.ly);
    }
    Oka(a);
    b && Pka(a);
    a.Um = a.Ib;
    qp(a.Ue);
  };
  Bp = function Bp(a, b, c, d, e) {
    this.X5 = a;
    this.b7 = b;
    this.t7 = c;
    this.a7 = d;
    this.func = e;
  };
  Xka = function Xka(a, b) {
    var c = a.IZ,
      d = a.Ib,
      e = a.pn,
      f = a.g_,
      h = a.Ib > a.Mk - 262 ? a.Ib - (a.Mk - 262) : 0,
      k = a.window,
      l = a.yx,
      m = a.Mr,
      p = a.Ib + 258,
      r = k[d + e - 1],
      u = k[d + e];
    a.pn >= a.mY && (c >>= 2);
    f > a.Fc && (f = a.Fc);
    do {
      var v = b;
      if (k[v + e] === u && k[v + e - 1] === r && k[v] === k[d] && k[++v] === k[d + 1]) {
        d += 2;
        for (v++; k[++d] === k[++v] && k[++d] === k[++v] && k[++d] === k[++v] && k[++d] === k[++v] && k[++d] === k[++v] && k[++d] === k[++v] && k[++d] === k[++v] && k[++d] === k[++v] && d < p;);
        v = 258 - (p - d);
        d = p - 258;
        if (v > e) {
          a.nC = b;
          e = v;
          if (v >= f) break;
          r = k[d + e - 1];
          u = k[d + e];
        }
      }
    } while ((b = m[b & l]) > h && --c !== 0);
    return e <= a.Fc ? e : a.Fc;
  };
  mp = function mp(a, b, c) {
    a.Tg[a.dF + a.uo * 2] = b >>> 8 & 255;
    a.Tg[a.dF + a.uo * 2 + 1] = b & 255;
    a.Tg[a.jS + a.uo] = c & 255;
    a.uo++;
    b === 0 ? a.Yl[c * 2]++ : (a.matches++, b--, a.Yl[(fp[c] + 256 + 1) * 2]++, a.ly[(b < 256 ? ip[b] : ip[256 + (b >>> 7)]) * 2]++);
    return a.uo === a.EG - 1;
  };
  zp = function zp(a, b) {
    for (var c;;) {
      if (a.Fc < 262) {
        yp(a);
        if (a.Fc < 262 && b === 0) return 1;
        if (a.Fc === 0) break;
      }
      c = 0;
      a.Fc >= 3 && (a.Xe = (a.Xe << a.At ^ a.window[a.Ib + 3 - 1]) & a.zt, c = a.Mr[a.Ib & a.yx] = a.head[a.Xe], a.head[a.Xe] = a.Ib);
      c !== 0 && a.Ib - c <= a.Mk - 262 && (a.zf = Xka(a, c));
      if (a.zf >= 3) {
        if (c = mp(a, a.Ib - a.nC, a.zf - 3), a.Fc -= a.zf, a.zf <= a.FS && a.Fc >= 3) {
          a.zf--;
          do a.Ib++, a.Xe = (a.Xe << a.At ^ a.window[a.Ib + 3 - 1]) & a.zt, a.Mr[a.Ib & a.yx] = a.head[a.Xe], a.head[a.Xe] = a.Ib; while (--a.zf !== 0);
          a.Ib++;
        } else a.Ib += a.zf, a.zf = 0, a.Xe = a.window[a.Ib], a.Xe = (a.Xe << a.At ^ a.window[a.Ib + 1]) & a.zt;
      } else c = mp(a, 0, a.window[a.Ib]), a.Fc--, a.Ib++;
      if (c && (tp(a, !1), a.Ue.jf === 0)) return 1;
    }
    a.Ri = a.Ib < 2 ? a.Ib : 2;
    return b === 4 ? (tp(a, !0), a.Ue.jf === 0 ? 3 : 4) : a.uo && (tp(a, !1), a.Ue.jf === 0) ? 1 : 2;
  };
  Ap = function Ap(a, b) {
    for (var c, d;;) {
      if (a.Fc < 262) {
        yp(a);
        if (a.Fc < 262 && b === 0) return 1;
        if (a.Fc === 0) break;
      }
      c = 0;
      a.Fc >= 3 && (a.Xe = (a.Xe << a.At ^ a.window[a.Ib + 3 - 1]) & a.zt, c = a.Mr[a.Ib & a.yx] = a.head[a.Xe], a.head[a.Xe] = a.Ib);
      a.pn = a.zf;
      a.V_ = a.nC;
      a.zf = 2;
      c !== 0 && a.pn < a.FS && a.Ib - c <= a.Mk - 262 && (a.zf = Xka(a, c), a.zf <= 5 && (a.strategy === 1 || a.zf === 3 && a.Ib - a.nC > 4096) && (a.zf = 2));
      if (a.pn >= 3 && a.zf <= a.pn) {
        d = a.Ib + a.Fc - 3;
        c = mp(a, a.Ib - 1 - a.V_, a.pn - 3);
        a.Fc -= a.pn - 1;
        a.pn -= 2;
        do ++a.Ib <= d && (a.Xe = (a.Xe << a.At ^ a.window[a.Ib + 3 - 1]) & a.zt, a.Mr[a.Ib & a.yx] = a.head[a.Xe], a.head[a.Xe] = a.Ib); while (--a.pn !== 0);
        a.jz = 0;
        a.zf = 2;
        a.Ib++;
        if (c && (tp(a, !1), a.Ue.jf === 0)) return 1;
      } else if (a.jz) {
        if ((c = mp(a, 0, a.window[a.Ib - 1])) && tp(a, !1), a.Ib++, a.Fc--, a.Ue.jf === 0) return 1;
      } else a.jz = 1, a.Ib++, a.Fc--;
    }
    a.jz && (mp(a, 0, a.window[a.Ib - 1]), a.jz = 0);
    a.Ri = a.Ib < 2 ? a.Ib : 2;
    return b === 4 ? (tp(a, !0), a.Ue.jf === 0 ? 3 : 4) : a.uo && (tp(a, !1), a.Ue.jf === 0) ? 1 : 2;
  };
  Cp = [];
  var ila = {};
  Lka = function Lka(a) {
    var b,
      c,
      d = a.length,
      e = 0;
    for (b = 0; b < d; b++) {
      var f = a.charCodeAt(b);
      if ((f & 64512) === 55296 && b + 1 < d) {
        var h = a.charCodeAt(b + 1);
        (h & 64512) === 56320 && (f = 65536 + (f - 55296 << 10) + (h - 56320), b++);
      }
      e += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
    }
    var k = new Yo.IA(e);
    for (b = c = 0; c < e; b++) f = a.charCodeAt(b), (f & 64512) === 55296 && b + 1 < d && (h = a.charCodeAt(b + 1), (h & 64512) === 56320 && (f = 65536 + (f - 55296 << 10) + (h - 56320), b++)), f < 128 ? k[c++] = f : (f < 2048 ? k[c++] = 192 | f >>> 6 : (f < 65536 ? k[c++] = 224 | f >>> 12 : (k[c++] = 240 | f >>> 18, k[c++] = 128 | f >>> 12 & 63), k[c++] = 128 | f >>> 6 & 63), k[c++] = 128 | f & 63);
    return k;
  };
  _Dp = function Dp(a) {
    if (!(this instanceof _Dp)) return new _Dp(a);
    a = this.options = Yo.assign({
      level: -1,
      method: 8,
      chunkSize: 16384,
      Ax: 15,
      l7: 8,
      strategy: 0,
      to: ""
    }, a || {});
    a.raw && a.Ax > 0 ? a.Ax = -a.Ax : a.Y5 && a.Ax > 0 && a.Ax < 16 && (a.Ax += 16);
    this.err = 0;
    this.msg = "";
    this.ended = !1;
    this.chunks = [];
    this.Ue = new bla();
    this.Ue.jf = 0;
    var b = this.Ue;
    var c = a.level,
      d = a.method,
      e = a.Ax,
      f = a.l7,
      h = a.strategy;
    if (b) {
      var k = 1;
      c === -1 && (c = 6);
      e < 0 ? (k = 0, e = -e) : e > 15 && (k = 2, e -= 16);
      if (f < 1 || f > 9 || d !== 8 || e < 8 || e > 15 || c < 0 || c > 9 || h < 0 || h > 4) b = op(b, -2);else {
        e === 8 && (e = 9);
        var l = new $ka();
        b.state = l;
        l.Ue = b;
        l.wrap = k;
        l.qe = null;
        l.AV = e;
        l.Mk = 1 << l.AV;
        l.yx = l.Mk - 1;
        l.CR = f + 7;
        l.BL = 1 << l.CR;
        l.zt = l.BL - 1;
        l.At = ~~((l.CR + 3 - 1) / 3);
        l.window = new Yo.IA(l.Mk * 2);
        l.head = new Yo.Fs(l.BL);
        l.Mr = new Yo.Fs(l.Mk);
        l.EG = 1 << f + 6;
        l.Bo = l.EG * 4;
        l.Tg = new Yo.IA(l.Bo);
        l.dF = 1 * l.EG;
        l.jS = 3 * l.EG;
        l.level = c;
        l.strategy = h;
        l.method = d;
        if (b && b.state) {
          b.AA = b.nV = 0;
          b.oQ = 2;
          c = b.state;
          c.pending = 0;
          c.vH = 0;
          c.wrap < 0 && (c.wrap = -c.wrap);
          c.status = c.wrap ? 42 : 113;
          b.ye = c.wrap === 2 ? 0 : 1;
          c.hC = 0;
          if (!dla) {
            d = Array(16);
            for (f = h = 0; f < 28; f++) for (hp[f] = h, e = 0; e < 1 << gp[f]; e++) fp[h++] = f;
            fp[h - 1] = f;
            for (f = h = 0; f < 16; f++) for (kp[f] = h, e = 0; e < 1 << jp[f]; e++) ip[h++] = f;
            for (h >>= 7; f < 30; f++) for (kp[f] = h << 7, e = 0; e < 1 << jp[f] - 7; e++) ip[256 + h++] = f;
            for (e = 0; e <= 15; e++) d[e] = 0;
            for (e = 0; e <= 143;) rp[e * 2 + 1] = 8, e++, d[8]++;
            for (; e <= 255;) rp[e * 2 + 1] = 9, e++, d[9]++;
            for (; e <= 279;) rp[e * 2 + 1] = 7, e++, d[7]++;
            for (; e <= 287;) rp[e * 2 + 1] = 8, e++, d[8]++;
            Nka(rp, 287, d);
            for (e = 0; e < 30; e++) sp[e * 2 + 1] = 5, sp[e * 2] = Mka(e, 5);
            ela = new $o(rp, gp, 257, 286, 15);
            fla = new $o(sp, jp, 0, 30, 15);
            gla = new $o([], hla, 0, 19, 7);
            dla = !0;
          }
          c.aM = new ap(c.Yl, ela);
          c.AK = new ap(c.ly, fla);
          c.IW = new ap(c.uk, gla);
          c.Rk = 0;
          c.Nj = 0;
          Oka(c);
          c = 0;
        } else c = op(b, -2);
        c === 0 && (b = b.state, b.P1 = 2 * b.Mk, pp(b.head), b.FS = Cp[b.level].b7, b.mY = Cp[b.level].X5, b.g_ = Cp[b.level].t7, b.IZ = Cp[b.level].a7, b.Ib = 0, b.Um = 0, b.Fc = 0, b.Ri = 0, b.zf = b.pn = 2, b.jz = 0, b.Xe = 0);
        b = c;
      }
    } else b = -2;
    if (b !== 0) throw Error(np[b]);
    a.header && (b = this.Ue) && b.state && b.state.wrap === 2 && (b.state.qe = a.header);
    if (a.eF) {
      var m;
      typeof a.eF === "string" ? m = Lka(a.eF) : ila.call(a.eF) === "[object ArrayBuffer]" ? m = new Uint8Array(a.eF) : m = a.eF;
      a = this.Ue;
      f = m;
      h = f.length;
      if (a && a.state) {
        if (m = a.state, b = m.wrap, b === 2 || b === 1 && m.status !== 42 || m.Fc) b = -2;else {
          b === 1 && (a.ye = wp(a.ye, f, h, 0));
          m.wrap = 0;
          h >= m.Mk && (b === 0 && (pp(m.head), m.Ib = 0, m.Um = 0, m.Ri = 0), c = new Yo.IA(m.Mk), Yo.aB(c, f, h - m.Mk, m.Mk, 0), f = c, h = m.Mk);
          c = a.Qk;
          d = a.pz;
          e = a.input;
          a.Qk = h;
          a.pz = 0;
          a.input = f;
          for (yp(m); m.Fc >= 3;) {
            f = m.Ib;
            h = m.Fc - 2;
            do m.Xe = (m.Xe << m.At ^ m.window[f + 3 - 1]) & m.zt, m.Mr[f & m.yx] = m.head[m.Xe], m.head[m.Xe] = f, f++; while (--h);
            m.Ib = f;
            m.Fc = 2;
            yp(m);
          }
          m.Ib += m.Fc;
          m.Um = m.Ib;
          m.Ri = m.Fc;
          m.Fc = 0;
          m.zf = m.pn = 2;
          m.jz = 0;
          a.pz = d;
          a.input = e;
          a.Qk = c;
          m.wrap = b;
          b = 0;
        }
      } else b = -2;
      if (b !== 0) throw Error(np[b]);
      this.Bia = !0;
    }
  };
  jla = function jla(a) {
    var b = b || {};
    b.Y5 = !0;
    b = new _Dp(b);
    b.push(a, !0);
    if (b.err) throw b.msg || np[b.err];
    return b.result;
  };
  var noa = 0;
  Ws = function Ws() {
    return g.ra("ytPubsub2Pubsub2Instance");
  };
  Xs = function Xs(a, b) {
    var c = Ws();
    c && c.publish.call(c, a.toString(), a, b);
  };
  at = function at(a, b) {
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      sampleRate: .1
    };
    Math.random() < Math.min(.02, c.sampleRate / 100) && Xs("meta_logging_csi_event", {
      timerName: a,
      timelineData: b
    });
  };
  var loa = undefined;
  var koa = undefined;
  bt = function bt(a, b, c, d) {
    var e = {
      startTime: (0, g.T)(),
      ticks: {},
      infos: {}
    };
    try {
      var h = joa(b);
      if (h == null || !(h > koa || h < loa)) {
        var f = jla(moa(b));
        var k = (0, g.T)();
        e.ticks.gelc = k;
        noa++;
        g.jq("gel_compression_csi_killswitch") || !g.jq("log_gel_compression_latency") && !g.jq("log_gel_compression_latency_lr") || at("gel_compression", e, {
          sampleRate: .1
        });
        c.headers || (c.headers = {});
        c.headers["Content-Encoding"] = "gzip";
        c.postBody = f;
        c.postParams = void 0;
      }
      d(a, c);
    } catch (h) {
      Up(h), d(a, c);
    }
  };
  eo = function eo(a, b) {
    return a.B ? a.B : a.B = new Promise(/*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(c) {
        var d, e, f, _t27;
        return _regenerator().w(function (_context18) {
          while (1) switch (_context18.p = _context18.n) {
            case 0:
              d = window.AbortController ? new window.AbortController() : void 0, e = d === null || d === void 0 ? void 0 : d.signal, f = !1;
              _context18.p = 1;
              d && (a.j = a.Mp.Ok(function () {
                d.abort();
              }, b || 2E4));
              _context18.n = 2;
              return fetch("/generate_204", {
                method: "HEAD",
                signal: e
              });
            case 2:
              f = !0;
              _context18.n = 4;
              break;
            case 3:
              _context18.p = 3;
              _t27 = _context18.v;
              f = !1;
            case 4:
              _context18.p = 4;
              a.B = void 0, a.j && (a.Mp.Oj(a.j), a.j = 0), f !== a.isOnline && (a.isOnline = f, a.isOnline ? a.dispatchEvent("networkstatus-online") : a.dispatchEvent("networkstatus-offline")), c(f);
              return _context18.f(4);
            case 5:
              return _context18.a(2);
          }
        }, _callee18, null, [[1, 3, 4, 5]]);
      }));
      return function (_x34) {
        return _ref5.apply(this, arguments);
      };
    }());
  };
  zl = function zl(a) {
    this.src = a;
    this.listeners = {};
    this.j = 0;
  };
  g.G = zl.prototype;
  Bl = function Bl(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.removed && f.listener == b && f.capture == !!c && f.handler == d) return e;
    }
    return -1;
  };
  var Qga = 0;
  Rga = function Rga(a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.handler = e;
    this.key = ++Qga;
    this.removed = this.cK = !1;
  };
  g.G.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.listeners[f];
    a || (a = this.listeners[f] = [], this.j++);
    var h = Bl(a, b, d, e);
    h > -1 ? (b = a[h], c || (b.cK = !1)) : (b = new Rga(b, this.src, f, !!d, e), b.cK = c, a.push(b));
    return b;
  };
  yl = function yl(a) {
    a.removed = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.handler = null;
  };
  g.G.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.listeners)) return !1;
    var e = this.listeners[a];
    b = Bl(e, b, c, d);
    return b > -1 ? (yl(e[b]), g.gb(e, b), e.length == 0 && (delete this.listeners[a], this.j--), !0) : !1;
  };
  g.G.removeAll = function (a) {
    a = a && a.toString();
    var b = 0;
    for (var c in this.listeners) if (!a || c == a) {
      var d = this.listeners[c];
      for (var e = 0; e < d.length; e++) ++b, yl(d[e]);
      delete this.listeners[c];
      this.j--;
    }
    return b;
  };
  g.G.JF = function (a, b, c, d) {
    a = this.listeners[a.toString()];
    var e = -1;
    a && (e = Bl(a, b, c, d));
    return e > -1 ? a[e] : null;
  };
  g.G.hasListener = function (a, b) {
    var c = a !== void 0,
      d = c ? a.toString() : "",
      e = b !== void 0;
    return g.Gb(this.listeners, function (f) {
      for (var h = 0; h < f.length; ++h) if (!(c && f[h].type != d || e && f[h].capture != b)) return !0;
      return !1;
    });
  };
  g.Kl = function () {
    g.Nj.call(this);
    this.Yn = new zl(this);
    this.E3 = this;
    this.IT = null;
  };
  g.G = g.Kl.prototype;
  var Jl = undefined;
  El = function El(a) {
    if (typeof a === "function") return a;
    a[Jl] || (a[Jl] = function (b) {
      return a.handleEvent(b);
    });
    return a[Jl];
  };
  var Gl = undefined;
  Fl = function Fl(a) {
    a = a[Gl];
    return a instanceof zl ? a : null;
  };
  g.vl = function (a, b) {
    this.type = a;
    this.A = this.target = b;
    this.defaultPrevented = this.B = !1;
  };
  wl = function wl(a, b) {
    g.vl.call(this, a ? a.type : "");
    this.relatedTarget = this.A = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.j = null;
    a && this.init(a, b);
  };
  var Il = {};
  Uga = function Uga(a) {
    return a in Il ? Il[a] : Il[a] = "on" + a;
  };
  var Vga = 0;
  g.Al = function (a, b) {
    var c = b.type;
    c in a.listeners && g.jb(a.listeners[c], b) && (yl(b), a.listeners[c].length == 0 && (delete a.listeners[c], a.j--));
  };
  var Pga = undefined;
  xl = function xl(a) {
    return !(!a || !a[Pga]);
  };
  Hl = function Hl(a) {
    if (typeof a !== "number" && a && !a.removed) {
      var b = a.src;
      if (xl(b)) g.Al(b.Yn, a);else {
        var c = a.type,
          d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Uga(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        Vga--;
        (c = Fl(b)) ? (g.Al(c, a), c.j == 0 && (c.src = null, b[Gl] = null)) : yl(a);
      }
    }
  };
  Wga = function Wga(a, b) {
    if (a.removed) a = !0;else {
      b = new wl(b, this);
      var c = a.listener,
        d = a.handler || a.src;
      a.cK && Hl(a);
      a = c.call(d, b);
    }
    return a;
  };
  Tga = function Tga() {
    function a(c) {
      return b.call(a.src, a.listener, c);
    }
    var b = Wga;
    return a;
  };
  Sga = function Sga(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var h = g.za(e) ? !!e.capture : !!e,
      k = Fl(a);
    k || (a[Gl] = k = new zl(a));
    c = k.add(b, c, d, h, f);
    if (c.proxy) return c;
    d = Tga();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) e === void 0 && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(Uga(b.toString()), d);else if (a.addListener && a.removeListener) a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
    Vga++;
    return c;
  };
  _Cl = function Cl(a, b, c, d, e) {
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) _Cl(a, b[f], c, d, e);
      return null;
    }
    c = El(c);
    return xl(a) ? a.nM(b, c, g.za(d) ? !!d.capture : !!d, e) : Sga(a, b, c, !0, d, e);
  };
  g.Dl = function (a, b, c, d, e) {
    if (d && d.once) return _Cl(a, b, c, d, e);
    if (Array.isArray(b)) {
      for (var f = 0; f < b.length; f++) g.Dl(a, b[f], c, d, e);
      return null;
    }
    c = El(c);
    return xl(a) ? a.listen(b, c, g.za(d) ? !!d.capture : !!d, e) : Sga(a, b, c, !1, d, e);
  };
  g.G.addEventListener = function (a, b, c, d) {
    g.Dl(this, a, b, c, d);
  };
  _Xga = function Xga(a, b, c, d, e) {
    if (Array.isArray(b)) for (var f = 0; f < b.length; f++) _Xga(a, b[f], c, d, e);else d = g.za(d) ? !!d.capture : !!d, c = El(c), xl(a) ? a.jd(b, c, d, e) : a && (a = Fl(a)) && (b = a.JF(b, c, d, e)) && Hl(b);
  };
  g.G.removeEventListener = function (a, b, c, d) {
    _Xga(this, a, b, c, d);
  };
  Ll = function Ll(a, b, c, d) {
    b = a.Yn.listeners[String(b)];
    if (!b) return !0;
    b = b.concat();
    var e = !0;
    for (var f = 0; f < b.length; ++f) {
      var h = b[f];
      if (h && !h.removed && h.capture == c) {
        var k = h.listener,
          l = h.handler || h.src;
        h.cK && g.Al(a.Yn, h);
        e = k.call(l, d) !== !1 && e;
      }
    }
    return e && !d.defaultPrevented;
  };
  g.G.dispatchEvent = function (a) {
    var b = this.IT;
    if (b) {
      var c = [];
      for (var d = 1; b; b = b.IT) c.push(b), ++d;
    }
    b = this.E3;
    d = a.type || a;
    if (typeof a === "string") a = new g.vl(a, b);else if (a instanceof g.vl) a.target = a.target || b;else {
      var e = a;
      a = new g.vl(d, b);
      g.Yb(a, e);
    }
    e = !0;
    var f;
    if (c) for (f = c.length - 1; !a.B && f >= 0; f--) {
      var h = a.A = c[f];
      e = Ll(h, d, !0, a) && e;
    }
    a.B || (h = a.A = b, e = Ll(h, d, !0, a) && e, a.B || (e = Ll(h, d, !1, a) && e));
    if (c) for (f = 0; !a.B && f < c.length; f++) h = a.A = c[f], e = Ll(h, d, !1, a) && e;
    return e;
  };
  g.G.ka = function () {
    g.Kl.wg.ka.call(this);
    this.Yn && this.Yn.removeAll(void 0);
    this.IT = null;
  };
  g.G.listen = function (a, b, c, d) {
    return this.Yn.add(String(a), b, !1, c, d);
  };
  g.G.nM = function (a, b, c, d) {
    return this.Yn.add(String(a), b, !0, c, d);
  };
  g.G.jd = function (a, b, c, d) {
    this.Yn.remove(String(a), b, c, d);
  };
  g.G.JF = function (a, b, c, d) {
    return this.Yn.JF(String(a), b, c, d);
  };
  g.G.hasListener = function (a, b) {
    return this.Yn.hasListener(a !== void 0 ? String(a) : void 0, b);
  };
  var _co = /*#__PURE__*/function (_g$Kl) {
    function co(a) {
      var _window$navigator$onL, _window$navigator;
      var _this12;
      _classCallCheck(this, co);
      _this12 = _callSuper(this, co);
      _this12.C = _this12.j = 0;
      _this12.Mp = a !== null && a !== void 0 ? a : {
        Ok: function Ok(b, c) {
          return setTimeout(b, c);
        },
        Oj: function Oj(b) {
          clearTimeout(b);
        }
      };
      _this12.isOnline = (_window$navigator$onL = (_window$navigator = window.navigator) === null || _window$navigator === void 0 ? void 0 : _window$navigator.onLine) !== null && _window$navigator$onL !== void 0 ? _window$navigator$onL : !0;
      _this12.A = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19() {
        return _regenerator().w(function (_context19) {
          while (1) switch (_context19.n) {
            case 0:
              _context19.n = 1;
              return eo(_this12);
            case 1:
              return _context19.a(2);
          }
        }, _callee19);
      }));
      window.addEventListener("offline", _this12.A);
      window.addEventListener("online", _this12.A);
      _this12.C || _this12.Af();
      return _this12;
    }
    _inherits(co, _g$Kl);
    return _createClass(co, [{
      key: "dispose",
      value: function dispose() {
        window.removeEventListener("offline", this.A);
        window.removeEventListener("online", this.A);
        this.Mp.Oj(this.C);
        delete _co.instance;
      }
    }, {
      key: "Si",
      value: function Si() {
        return this.isOnline;
      }
    }, {
      key: "Af",
      value: function Af() {
        var _this13 = this;
        this.C = this.Mp.Ok(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20() {
          var _window$navigator2;
          var _t28;
          return _regenerator().w(function (_context20) {
            while (1) switch (_context20.n) {
              case 0:
                if (!_this13.isOnline) {
                  _context20.n = 2;
                  break;
                }
                _t28 = (_window$navigator2 = window.navigator) === null || _window$navigator2 === void 0 ? void 0 : _window$navigator2.onLine;
                if (_t28) {
                  _context20.n = 1;
                  break;
                }
                _context20.n = 1;
                return eo(_this13);
              case 1:
                _context20.n = 3;
                break;
              case 2:
                _context20.n = 3;
                return eo(_this13);
              case 3:
                _this13.Af();
              case 4:
                return _context20.a(2);
            }
          }, _callee20);
        })), 3E4);
      }
    }]);
  }(g.Kl);
  jka = function jka() {
    var a = g.bo;
    _co.instance || (_co.instance = new _co(a));
    return _co.instance;
  };
  jt = undefined;
  mt = function mt() {
    jt || (jt = new kt("yt.offline"));
    return jt;
  };
  var ot = /*#__PURE__*/function (_g$Kl2) {
    function ot() {
      var _this14;
      _classCallCheck(this, ot);
      _this14 = _callSuper(this, ot);
      _this14.A = !1;
      _this14.j = jka();
      _this14.j.listen("networkstatus-online", function () {
        if (_this14.A && g.jq("offline_error_handling")) {
          var a = mt().get("errors", !0);
          if (a) {
            for (var b in a) if (a[b]) {
              var c = new g.Jr(b, "sent via offline_errors");
              c.name = a[b].name;
              c.stack = a[b].stack;
              c.level = a[b].level;
              g.Sp(c);
            }
            mt().set("errors", {}, 2592E3, !0);
          }
        }
      });
      return _this14;
    }
    _inherits(ot, _g$Kl2);
    return _createClass(ot, [{
      key: "Si",
      value: function Si() {
        return this.j.Si();
      }
    }, {
      key: "nz",
      value: function nz(a) {
        this.j.isOnline = a;
      }
    }, {
      key: "W5",
      value: function W5() {
        var a = window.navigator.onLine;
        return a === void 0 ? !0 : a;
      }
    }, {
      key: "b5",
      value: function b5() {
        this.A = !0;
      }
    }, {
      key: "listen",
      value: function listen(a, b) {
        return this.j.listen(a, b);
      }
    }, {
      key: "XN",
      value: function XN(a) {
        return eo(this.j, a);
      }
    }]);
  }(g.Kl);
  Ooa = function Ooa() {
    if (!ot.instance) {
      var a = g.ra("yt.networkStatusManager.instance") || new ot();
      g.qa("yt.networkStatusManager.instance", a);
      ot.instance = a;
    }
    return ot.instance;
  };
  Poa = function Poa(a, b) {
    a.rateLimit ? a.j ? (g.bo.Oj(a.C), a.C = g.bo.Ok(function () {
      a.B !== b && (a.dispatchEvent(b), a.B = b, a.j = (0, g.T)());
    }, a.rateLimit - ((0, g.T)() - a.j))) : (a.dispatchEvent(b), a.B = b, a.j = (0, g.T)()) : a.dispatchEvent(b);
  };
  var nt = /*#__PURE__*/function () {
    function nt() {
      _classCallCheck(this, nt);
      this.j = new Map();
      this.A = !1;
    }
    return _createClass(nt, [{
      key: "requestComplete",
      value: function requestComplete(a, b) {
        b && (this.A = !0);
        a = this.removeParams(a);
        this.j.get(a) || this.j.set(a, b);
      }
    }, {
      key: "isEndpointCFR",
      value: function isEndpointCFR(a) {
        a = this.removeParams(a);
        return (a = this.j.get(a)) ? !1 : a === !1 && this.A ? !0 : null;
      }
    }, {
      key: "removeParams",
      value: function removeParams(a) {
        return a.split("?")[0];
      }
    }]);
  }();
  Noa = function Noa() {
    if (!nt.instance) {
      var a = g.ra("yt.networkRequestMonitor.instance") || new nt();
      g.qa("yt.networkRequestMonitor.instance", a);
      nt.instance = a;
    }
    return nt.instance;
  };
  g.O_ = /*#__PURE__*/function (_g$Kl3) {
    function _class7() {
      var _this15;
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, _class7);
      _this15 = _callSuper(this, _class7);
      _this15.j = _this15.C = 0;
      _this15.A = Ooa();
      var b = g.ra("yt.networkStatusManager.instance.listen").bind(_this15.A);
      b && (a.rateLimit ? (_this15.rateLimit = a.rateLimit, b("networkstatus-online", function () {
        Poa(_this15, "publicytnetworkstatus-online");
      }), b("networkstatus-offline", function () {
        Poa(_this15, "publicytnetworkstatus-offline");
      })) : (b("networkstatus-online", function () {
        _this15.dispatchEvent("publicytnetworkstatus-online");
      }), b("networkstatus-offline", function () {
        _this15.dispatchEvent("publicytnetworkstatus-offline");
      })));
      return _this15;
    }
    _inherits(_class7, _g$Kl3);
    return _createClass(_class7, [{
      key: "Si",
      value: function Si() {
        var a = g.ra("yt.networkStatusManager.instance.isNetworkAvailable");
        return a ? a.bind(this.A)() : !0;
      }
    }, {
      key: "nz",
      value: function nz(a) {
        var b = g.ra("yt.networkStatusManager.instance.networkStatusHint").bind(this.A);
        b && b(a);
      }
    }, {
      key: "XN",
      value: function () {
        var _XN = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(a) {
          var _this16 = this;
          var b;
          return _regenerator().w(function (_context21) {
            while (1) switch (_context21.n) {
              case 0:
                b = g.ra("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(this.A);
                return _context21.a(2, g.jq("skip_network_check_if_cfr") && Noa().isEndpointCFR("generate_204") ? new Promise(function (c) {
                  var _window$navigator3;
                  _this16.nz(((_window$navigator3 = window.navigator) === null || _window$navigator3 === void 0 ? void 0 : _window$navigator3.onLine) || !0);
                  c(_this16.Si());
                }) : b ? b(a) : !0);
            }
          }, _callee21, this);
        }));
        function XN(_x35) {
          return _XN.apply(this, arguments);
        }
        return XN;
      }()
    }]);
  }(g.Kl);
  P_ = undefined;
  et = undefined;
  os = function os(a, b) {
    a.j.objectStoreNames.contains(b) && a.j.deleteObjectStore(b);
  };
  toa = function toa() {
    if (et) return et();
    et = Fs("LogsDatabaseV2", {
      au: {
        LogsRequestsStore: {
          bp: 2
        }
      },
      shared: !1,
      upgrade: function upgrade(a, b, c) {
        b(2) && ns(a, "LogsRequestsStore", {
          keyPath: "id",
          autoIncrement: !0
        });
        b(3);
        b(5) && (c = c.objectStore("LogsRequestsStore"), c.j.indexNames.contains("newRequest") && c.j.deleteIndex("newRequest"), ps(c, "newRequestV2", ["status", "interface", "timestamp"]));
        b(7) && os(a, "sapisid");
        b(9) && os(a, "SWHealthLog");
      },
      version: 9
    });
    return et();
  };
  ft = function ft(a) {
    return g.ws(toa(), a);
  };
  Aoa = /*#__PURE__*/function () {
    var _Aoa = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22(a) {
      var b;
      return _regenerator().w(function (_context22) {
        while (1) switch (_context22.n) {
          case 0:
            _context22.n = 1;
            return ft(a);
          case 1:
            a = _context22.v;
            b = (0, g.T)() - 2592E6;
            _context22.n = 2;
            return g.ms(a, ["LogsRequestsStore"], {
              mode: "readwrite",
              Yb: !0
            }, function (c) {
              return g.rs(c.objectStore("LogsRequestsStore"), {}, function (d) {
                if (d.getValue().timestamp <= b) return d["delete"]().then(function () {
                  return g.ts(d);
                });
              });
            });
          case 2:
            return _context22.a(2);
        }
      }, _callee22);
    }));
    function Aoa(_x36) {
      return _Aoa.apply(this, arguments);
    }
    return Aoa;
  }();
  zoa = /*#__PURE__*/function () {
    var _zoa = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(a, b) {
      return _regenerator().w(function (_context23) {
        while (1) switch (_context23.n) {
          case 0:
            _context23.n = 1;
            return ft(b);
          case 1:
            return _context23.a(2, _context23.v["delete"]("LogsRequestsStore", a));
        }
      }, _callee23);
    }));
    function zoa(_x37, _x38) {
      return _zoa.apply(this, arguments);
    }
    return zoa;
  }();
  uoa = function uoa(a) {
    g.jq("nwl_csi_killswitch") || at("networkless_performance", a, {
      sampleRate: 1
    });
  };
  woa = /*#__PURE__*/function () {
    var _woa = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24(a, b) {
      var c, d, e, f, h, k;
      return _regenerator().w(function (_context24) {
        while (1) switch (_context24.n) {
          case 0:
            c = {
              startTime: (0, g.T)(),
              infos: {
                transactionType: "YT_IDB_TRANSACTION_TYPE_READ"
              },
              ticks: {}
            };
            _context24.n = 1;
            return ft(b);
          case 1:
            b = _context24.v;
            d = g.Pp("INNERTUBE_CONTEXT_CLIENT_NAME", 0), e = [a, d, 0];
            d = [a, d, (0, g.T)()];
            f = IDBKeyRange.bound(e, d), h = "prev";
            g.jq("use_fifo_for_networkless") && (h = "next");
            k = void 0;
            e = a === "NEW" ? "readwrite" : "readonly";
            g.jq("use_readonly_for_get_most_recent_by_status_killswitch") && (e = "readwrite");
            _context24.n = 2;
            return g.ms(b, ["LogsRequestsStore"], {
              mode: e,
              Yb: !0
            }, function (l) {
              return g.us(l.objectStore("LogsRequestsStore").index("newRequestV2"), {
                query: f,
                direction: h
              }, function (m) {
                m.getValue() && (k = m.getValue(), a === "NEW" && (k.status = "QUEUED", m.update(k)));
              });
            });
          case 2:
            c.ticks.tc = (0, g.T)();
            uoa(c);
            return _context24.a(2, k);
        }
      }, _callee24);
    }));
    function woa(_x39, _x40) {
      return _woa.apply(this, arguments);
    }
    return woa;
  }();
  xoa = /*#__PURE__*/function () {
    var _xoa = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25(a, b) {
      var _t29;
      return _regenerator().w(function (_context25) {
        while (1) switch (_context25.n) {
          case 0:
            _t29 = g;
            _context25.n = 1;
            return ft(b);
          case 1:
            return _context25.a(2, _t29.ms.call(_t29, _context25.v, ["LogsRequestsStore"], {
              mode: "readwrite",
              Yb: !0
            }, function (c) {
              var d = c.objectStore("LogsRequestsStore");
              return d.get(a).then(function (e) {
                if (e) return e.status = "QUEUED", d.put(e).then(function () {
                  return e;
                });
              });
            }));
        }
      }, _callee25);
    }));
    function xoa(_x41, _x42) {
      return _xoa.apply(this, arguments);
    }
    return xoa;
  }();
  yoa = /*#__PURE__*/function () {
    var _yoa = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26(a, b) {
      var c,
        d,
        _args26 = arguments,
        _t30;
      return _regenerator().w(function (_context26) {
        while (1) switch (_context26.n) {
          case 0:
            c = _args26.length > 2 && _args26[2] !== undefined ? _args26[2] : !0;
            d = _args26.length > 3 ? _args26[3] : undefined;
            _t30 = g;
            _context26.n = 1;
            return ft(b);
          case 1:
            return _context26.a(2, _t30.ms.call(_t30, _context26.v, ["LogsRequestsStore"], {
              mode: "readwrite",
              Yb: !0
            }, function (e) {
              var f = e.objectStore("LogsRequestsStore");
              return f.get(a).then(function (h) {
                return h ? (h.status = "NEW", c && (h.sendCount += 1), d !== void 0 && (h.options.compress = d), f.put(h).then(function () {
                  return h;
                })) : g.es.resolve(void 0);
              });
            }));
        }
      }, _callee26);
    }));
    function yoa(_x43, _x44) {
      return _yoa.apply(this, arguments);
    }
    return yoa;
  }();
  voa = /*#__PURE__*/function () {
    var _voa = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee27(a, b) {
      var c;
      return _regenerator().w(function (_context27) {
        while (1) switch (_context27.n) {
          case 0:
            c = {
              startTime: (0, g.T)(),
              infos: {
                transactionType: "YT_IDB_TRANSACTION_TYPE_WRITE"
              },
              ticks: {}
            };
            _context27.n = 1;
            return ft(b);
          case 1:
            b = _context27.v;
            a = _objectSpread(_objectSpread({}, a), {}, {
              options: JSON.parse(JSON.stringify(a.options)),
              "interface": g.Pp("INNERTUBE_CONTEXT_CLIENT_NAME", 0)
            });
            _context27.n = 2;
            return b.put("LogsRequestsStore", a);
          case 2:
            a = _context27.v;
            c.ticks.tc = (0, g.T)();
            uoa(c);
            return _context27.a(2, a);
        }
      }, _callee27);
    }));
    function voa(_x45, _x46) {
      return _voa.apply(this, arguments);
    }
    return voa;
  }();
  var Koa = 0;
  var ht = {};
  Ioa = function Ioa(a, b) {
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var d = new Image(),
      e = "".concat(Koa++);
    ht[e] = d;
    d.onload = d.onerror = function () {
      b && ht[e] && b();
      delete ht[e];
    };
    c.scrubReferrer && (d.referrerPolicy = "no-referrer");
    d.src = a;
  };
  var Goa = /*#__PURE__*/_createClass(function Goa(_ref8) {
    var a = _ref8.url,
      b = _ref8.jna;
    _classCallCheck(this, Goa);
    this.A = a;
    this.C = b;
    this.B = new Date().getTime() - 17040672E5;
    this.j = {};
    for (var c = /[?&]([^&=]+)=([^&]*)/g; b = c.exec(a);) this.j[b[1]] = b[2];
  });
  Zk = function Zk(a, b) {
    return b ? "&" + a + "=" + encodeURIComponent(b) : "";
  };
  Rfa = function Rfa(a) {
    a = a.C;
    if (!a) return "";
    var b = Zk("uap", a.platform) + Zk("uapv", a.platformVersion) + Zk("uafv", a.uaFullVersion) + Zk("uaa", a.architecture) + Zk("uam", a.model) + Zk("uab", a.bitness);
    a.fullVersionList && (b += "&uafvl=" + encodeURIComponent(a.fullVersionList.map(function (c) {
      return encodeURIComponent(c.brand) + ";" + encodeURIComponent(c.version);
    }).join("|")));
    a.wow64 != null && (b += "&uaw=" + Number(a.wow64));
    return b.slice(1);
  };
  Yk = function Yk(a) {
    for (var _len4 = arguments.length, b = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      b[_key4 - 1] = arguments[_key4];
    }
    b = b.filter(Boolean).join("&");
    if (!b) return a;
    var c = a.match(/[?&]adurl=/);
    return c ? a.slice(0, c.index + 1) + b + "&" + a.slice(c.index + 1) : a + (a.indexOf("?") < 0 ? "?" : "&") + b;
  };
  var mj = /#|$/;
  lj = function lj(a, b, c, d) {
    for (var e = c.length; (b = a.indexOf(c, b)) >= 0 && b < d;) {
      var f = a.charCodeAt(b - 1);
      if (f == 38 || f == 63) if (f = a.charCodeAt(b + e), !f || f == 61 || f == 38 || f == 35) return b;
      b += e + 1;
    }
    return -1;
  };
  nj = function nj(a, b) {
    var c = a.search(mj),
      d = lj(a, 0, b, c);
    if (d < 0) return null;
    var e = a.indexOf("&", d);
    if (e < 0 || e > c) e = c;
    d += b.length + 1;
    return jd(a.slice(d, e !== -1 ? e : 0));
  };
  Hoa = function Hoa(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    try {
      if (window.navigator && window.navigator.sendBeacon && window.navigator.sendBeacon(a, b)) return !0;
    } catch (c) {}
    return !1;
  };
  g.Kq = function (a) {
    var b = g.lc();
    return b ? b.toLowerCase().indexOf(a) >= 0 : !1;
  };
  g.Mq = function () {
    return g.Kq("cobalt");
  };
  g.gt = function (a, b, c, d) {
    var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
    var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
    var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
    if (a) if (!c || g.Mq() || g.jq("web_ping_disable_scrub_referrer")) {
      if (e) nq(a, b, "POST", e, d);else if (g.Pp("USE_NET_AJAX_FOR_PING_TRANSPORT", !1) || d || h) nq(a, b, "GET", "", d, void 0, f, h);else {
        b: {
          try {
            c: {
              var k = new Goa({
                url: a
              });
              if (k.j.dsh === "1") var l = null;else {
                var m = k.j.ae;
                if (m === "1") {
                  var r = k.j.adurl;
                  if (r) try {
                    l = {
                      version: 3,
                      S4: decodeURIComponent(r),
                      N3: Yk(k.A, "act=1", "ri=1", Rfa(k))
                    };
                    break c;
                  } catch (u) {}
                }
                l = m === "2" ? {
                  version: 4,
                  S4: Yk(k.A, "dct=1", "suid=" + k.B, "ri=1"),
                  N3: Yk(k.A, "act=1", "ri=1", "suid=" + k.B)
                } : null;
              }
            }
            if (l) {
              var _r = dj(a);
              var p = !(!_r || !_r.endsWith("/aclk") || nj(a, "ri") !== "1");
              break b;
            }
          } catch (r) {}
          p = !1;
        }
        p ? Hoa(a) ? (b && b(), c = !0) : c = !1 : c = !1;
        c || Ioa(a, b);
      }
    } else Up(new g.Jr("Legacy referrer-scrubbed ping detected")), a && Ioa(a, void 0, {
      scrubReferrer: !0
    });
  };
  Soa = function Soa(a, b, c) {
    var _b$postParams;
    b = g.jq("web_fp_via_jspb") ? Object.assign({}, b) : b;
    g.jq("use_request_time_ms_header") ? b.headers && aq(a) && (b.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round((0, g.T)()))) : ((_b$postParams = b.postParams) === null || _b$postParams === void 0 ? void 0 : _b$postParams.requestTimeMs) && (b.postParams.requestTimeMs = Math.round((0, g.T)()));
    c && Object.keys(b).length === 0 ? g.gt(a) : b.compress ? b.postBody ? (typeof b.postBody !== "string" && (b.postBody = JSON.stringify(b.postBody)), bt(a, b.postBody, b, g.oq)) : bt(a, JSON.stringify(b.postParams), b, pq) : g.oq(a, b);
  };
  Moa = function Moa(a) {
    if (g.jq("offline_error_handling")) {
      var b = mt().get("errors", !0) || {};
      b[a.message] = {
        name: a.name,
        stack: a.stack
      };
      a.level && (b[a.message].level = a.level);
      mt().set("errors", b, 2592E3, !0);
    }
  };
  g.Km = /*#__PURE__*/_createClass(function _class8() {
    var _this17 = this;
    _classCallCheck(this, _class8);
    this.promise = new Promise(function (a, b) {
      _this17.resolve = a;
      _this17.reject = b;
    });
  });
  lna = /*#__PURE__*/function () {
    var _lna = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee28(a, b) {
      var c;
      return _regenerator().w(function (_context28) {
        while (1) switch (_context28.n) {
          case 0:
            c = [];
            _context28.n = 1;
            return g.ws(xs, b);
          case 1:
            b = _context28.v;
            _context28.n = 2;
            return g.ms(b, ["databases"], {
              Yb: !0,
              mode: "readonly"
            }, function (d) {
              c.length = 0;
              return g.rs(d.objectStore("databases"), {}, function (e) {
                a(e.getValue()) && c.push(e.getValue());
                return g.ts(e);
              });
            });
          case 2:
            return _context28.a(2, c);
        }
      }, _callee28);
    }));
    function lna(_x47, _x48) {
      return _lna.apply(this, arguments);
    }
    return lna;
  }();
  mna = function mna(a, b) {
    return lna(function (c) {
      return c.publicName === a && c.userIdentifier !== void 0;
    }, b);
  };
  una = function una(a, b, c) {
    a = a.map(/*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee29(d) {
        return _regenerator().w(function (_context29) {
          while (1) switch (_context29.n) {
            case 0:
              _context29.n = 1;
              return vs(d.actualName, b);
            case 1:
              _context29.n = 2;
              return ys(d.actualName, c);
            case 2:
              return _context29.a(2);
          }
        }, _callee29);
      }));
      return function (_x49) {
        return _ref9.apply(this, arguments);
      };
    }());
    return Promise.all(a).then(function () {});
  };
  vna = /*#__PURE__*/function () {
    var _vna = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee30(a) {
      var b, c, _t31;
      return _regenerator().w(function (_context30) {
        while (1) switch (_context30.n) {
          case 0:
            b = {};
            _context30.n = 1;
            return g.Es();
          case 1:
            c = _context30.v;
            _t31 = c;
            if (!_t31) {
              _context30.n = 3;
              break;
            }
            Yr(a);
            _context30.n = 2;
            return mna(a, c);
          case 2:
            a = _context30.v;
            _context30.n = 3;
            return una(a, b, c);
          case 3:
            return _context30.a(2);
        }
      }, _callee30);
    }));
    function vna(_x50) {
      return _vna.apply(this, arguments);
    }
    return vna;
  }();
  Boa = /*#__PURE__*/function () {
    var _Boa = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee31() {
      return _regenerator().w(function (_context31) {
        while (1) switch (_context31.n) {
          case 0:
            _context31.n = 1;
            return vna("LogsDatabaseV2");
          case 1:
            return _context31.a(2);
        }
      }, _callee31);
    }));
    function Boa() {
      return _Boa.apply(this, arguments);
    }
    return Boa;
  }();
  qt = function qt(a, b) {
    g.jq("use_event_time_ms_header") && aq(a) && (b.headers || (b.headers = {}), b.headers["X-Goog-Event-Time"] = JSON.stringify(Math.round((0, g.T)())));
    return b;
  };
  ct = function ct(a) {
    return !!a.mg || a.WJ;
  };
  poa = function poa(a) {
    ct(a) && !a.hF && (a.j = !0, a.KK && Math.random() <= a.jK && a.Vi.f4(a.mg), a.PN(), a.Qh.Si() && a.B(), a.Qh.listen(a.zT, a.B.bind(a)), a.Qh.listen(a.US, a.C.bind(a)));
  };
  dt = function dt(a, b) {
    a.R1 && !a.Qh.Si() ? a.R1(b) : a.handleError(b);
  };
  qoa = function qoa(a) {
    var _a1;
    a = (_a1 = a) === null || _a1 === void 0 || (_a1 = _a1.error) === null || _a1 === void 0 ? void 0 : _a1.code;
    return !(a && a >= 400 && a <= 599);
  };
  roa = function roa(a) {
    var _a10;
    a = (_a10 = a) === null || _a10 === void 0 || (_a10 = _a10.error) === null || _a10 === void 0 ? void 0 : _a10.code;
    return !(a !== 400 && a !== 415);
  };
  soa = function soa(a, b) {
    if (!ct(a)) throw Error("IndexedDB is not supported: updateRequestHandlers");
    var c = b.options.onError ? b.options.onError : function () {};
    b.options.onError = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee32(e, f) {
        var h, k, _t32, _t33, _t34, _t35;
        return _regenerator().w(function (_context32) {
          while (1) switch (_context32.n) {
            case 0:
              h = qoa(f), k = roa(f);
              k && a.Sa && a.Sa("web_enable_error_204") && a.handleError(Error("Request failed due to compression"), b.url, f);
              if (!(a.Sa && a.Sa("nwl_consider_error_code") && h || a.Sa && !a.Sa("nwl_consider_error_code") && a.potentialEsfErrorCounter <= a.uN)) {
                _context32.n = 3;
                break;
              }
              _t32 = a.Qh.XN;
              if (!_t32) {
                _context32.n = 1;
                break;
              }
              _context32.n = 1;
              return a.Qh.XN();
            case 1:
              if (a.Qh.Si()) {
                _context32.n = 3;
                break;
              }
              c(e, f);
              _t33 = a.Sa && a.Sa("nwl_consider_error_code") && (b === null || b === void 0 ? void 0 : b.id) !== void 0;
              if (!_t33) {
                _context32.n = 2;
                break;
              }
              _context32.n = 2;
              return a.Vi.oU(b.id, a.mg, !1);
            case 2:
              return _context32.a(2);
            case 3:
              _t34 = a.Sa && a.Sa("nwl_consider_error_code") && !h && a.potentialEsfErrorCounter > a.uN;
              if (_t34) {
                _context32.n = 7;
                break;
              }
              a.potentialEsfErrorCounter++;
              _t35 = (b === null || b === void 0 ? void 0 : b.id) !== void 0;
              if (!_t35) {
                _context32.n = 6;
                break;
              }
              if (!(b.sendCount < a.n0)) {
                _context32.n = 5;
                break;
              }
              _context32.n = 4;
              return a.Vi.oU(b.id, a.mg, !0, k ? !1 : void 0);
            case 4:
              a.Mp.Ok(function () {
                a.Qh.Si() && a.B();
              }, a.m0);
              _context32.n = 6;
              break;
            case 5:
              _context32.n = 6;
              return a.Vi.sB(b.id, a.mg);
            case 6:
              c(e, f);
            case 7:
              return _context32.a(2);
          }
        }, _callee32);
      }));
      return function (_x51, _x52) {
        return _ref0.apply(this, arguments);
      };
    }();
    var d = b.options.onSuccess ? b.options.onSuccess : function () {};
    b.options.onSuccess = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee33(e, f) {
        var _t36;
        return _regenerator().w(function (_context33) {
          while (1) switch (_context33.n) {
            case 0:
              _t36 = (b === null || b === void 0 ? void 0 : b.id) !== void 0;
              if (!_t36) {
                _context33.n = 1;
                break;
              }
              _context33.n = 1;
              return a.Vi.sB(b.id, a.mg);
            case 1:
              a.Qh.nz && a.Sa && a.Sa("vss_network_hint") && a.Qh.nz(!0);
              d(e, f);
            case 2:
              return _context33.a(2);
          }
        }, _callee33);
      }));
      return function (_x53, _x54) {
        return _ref1.apply(this, arguments);
      };
    }();
    return b;
  };
  var uhb = /*#__PURE__*/function () {
    function uhb(a) {
      var _this18 = this,
        _a$X,
        _a$n,
        _a$e,
        _a$Y_,
        _a$m,
        _a$mg,
        _a$jK,
        _a$uN;
      _classCallCheck(this, uhb);
      this.WJ = this.j = !1;
      this.potentialEsfErrorCounter = this.A = 0;
      this.handleError = function () {};
      this.QB = function () {};
      this.now = Date.now;
      this.hF = !1;
      this.lc = {
        Fma: function Fma(b) {
          _this18.mg = b;
        },
        ina: function ina() {
          _this18.B();
        },
        b4: function b4() {
          _this18.C();
        },
        iG: function () {
          var _iG = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee34(b) {
            return _regenerator().w(function (_context34) {
              while (1) switch (_context34.n) {
                case 0:
                  _context34.n = 1;
                  return _this18.iG(b);
                case 1:
                  return _context34.a(2);
              }
            }, _callee34);
          }));
          function iG(_x55) {
            return _iG.apply(this, arguments);
          }
          return iG;
        }(),
        KN: function KN(b, c) {
          return _this18.KN(b, c);
        },
        PN: function PN() {
          _this18.PN();
        }
      };
      this.X0 = (_a$X = a.X0) !== null && _a$X !== void 0 ? _a$X : 100;
      this.n0 = (_a$n = a.n0) !== null && _a$n !== void 0 ? _a$n : 1;
      this.e0 = (_a$e = a.e0) !== null && _a$e !== void 0 ? _a$e : 2592E6;
      this.Y_ = (_a$Y_ = a.Y_) !== null && _a$Y_ !== void 0 ? _a$Y_ : 12E4;
      this.m0 = (_a$m = a.m0) !== null && _a$m !== void 0 ? _a$m : 5E3;
      this.mg = (_a$mg = a.mg) !== null && _a$mg !== void 0 ? _a$mg : void 0;
      this.KK = !!a.KK;
      this.jK = (_a$jK = a.jK) !== null && _a$jK !== void 0 ? _a$jK : .1;
      this.uN = (_a$uN = a.uN) !== null && _a$uN !== void 0 ? _a$uN : 10;
      a.handleError && (this.handleError = a.handleError);
      a.QB && (this.QB = a.QB);
      a.hF && (this.hF = a.hF);
      a.WJ && (this.WJ = a.WJ);
      this.Sa = a.Sa;
      this.Mp = a.Mp;
      this.Vi = a.Vi;
      this.Qh = a.Qh;
      this.Cu = a.Cu;
      this.zT = a.zT;
      this.US = a.US;
      ct(this) && (!this.Sa || this.Sa("networkless_logging")) && poa(this);
    }
    return _createClass(uhb, [{
      key: "writeThenSend",
      value: function writeThenSend(a) {
        var _this19 = this;
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (ct(this) && this.j) {
          var c = {
            url: a,
            options: b,
            timestamp: this.now(),
            status: "NEW",
            sendCount: 0
          };
          this.Vi.set(c, this.mg).then(function (d) {
            c.id = d;
            _this19.Qh.Si() && _this19.iG(c);
          })["catch"](function (d) {
            _this19.iG(c);
            dt(_this19, d);
          });
        } else this.Cu(a, b);
      }
    }, {
      key: "sendThenWrite",
      value: function sendThenWrite(a) {
        var _this20 = this;
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var c = arguments.length > 2 ? arguments[2] : undefined;
        if (ct(this) && this.j) {
          var d = {
            url: a,
            options: b,
            timestamp: this.now(),
            status: "NEW",
            sendCount: 0
          };
          this.Sa && this.Sa("nwl_skip_retry") && (d.skipRetry = c);
          if (this.Qh.Si() || this.Sa && this.Sa("nwl_aggressive_send_then_write") && !d.skipRetry) {
            if (!d.skipRetry) {
              var e = b.onError ? b.onError : function () {};
              b.onError = /*#__PURE__*/function () {
                var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee35(f, h) {
                  return _regenerator().w(function (_context35) {
                    while (1) switch (_context35.n) {
                      case 0:
                        _context35.n = 1;
                        return _this20.Vi.set(d, _this20.mg)["catch"](function (k) {
                          dt(_this20, k);
                        });
                      case 1:
                        e(f, h);
                      case 2:
                        return _context35.a(2);
                    }
                  }, _callee35);
                }));
                return function (_x56, _x57) {
                  return _ref10.apply(this, arguments);
                };
              }();
            }
            this.Cu(a, b, d.skipRetry);
          } else this.Vi.set(d, this.mg)["catch"](function (e) {
            _this20.Cu(a, b, d.skipRetry);
            dt(_this20, e);
          });
        } else c = this.Sa && this.Sa("nwl_skip_retry") && c, this.Cu(a, b, c);
      }
    }, {
      key: "sendAndWrite",
      value: function sendAndWrite(a) {
        var _this21 = this;
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (ct(this) && this.j) {
          var c = {
              url: a,
              options: b,
              timestamp: this.now(),
              status: "NEW",
              sendCount: 0
            },
            d = !1,
            e = b.onSuccess ? b.onSuccess : function () {};
          c.options.onSuccess = function (f, h) {
            c.id !== void 0 ? _this21.Vi.sB(c.id, _this21.mg) : d = !0;
            _this21.Qh.nz && _this21.Sa && _this21.Sa("vss_network_hint") && _this21.Qh.nz(!0);
            e(f, h);
          };
          this.Cu(c.url, c.options, void 0, !0);
          this.Vi.set(c, this.mg).then(function (f) {
            c.id = f;
            d && _this21.Vi.sB(c.id, _this21.mg);
          })["catch"](function (f) {
            dt(_this21, f);
          });
        } else this.Cu(a, b, void 0, !0);
      }
    }, {
      key: "B",
      value: function B() {
        var _this22 = this;
        if (!ct(this)) throw Error("IndexedDB is not supported: throttleSend");
        this.A || (this.A = this.Mp.Ok(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee36() {
          var a;
          return _regenerator().w(function (_context36) {
            while (1) switch (_context36.n) {
              case 0:
                _context36.n = 1;
                return _this22.Vi.eY("NEW", _this22.mg);
              case 1:
                a = _context36.v;
                if (!a) {
                  _context36.n = 3;
                  break;
                }
                _context36.n = 2;
                return _this22.iG(a);
              case 2:
                _this22.A && (_this22.A = 0, _this22.B());
                _context36.n = 4;
                break;
              case 3:
                _this22.C();
              case 4:
                return _context36.a(2);
            }
          }, _callee36);
        })), this.X0));
      }
    }, {
      key: "C",
      value: function C() {
        this.Mp.Oj(this.A);
        this.A = 0;
      }
    }, {
      key: "iG",
      value: function () {
        var _iG2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee37(a) {
          var _t37, _t38, _t39, _t40, _t41;
          return _regenerator().w(function (_context37) {
            while (1) switch (_context37.n) {
              case 0:
                if (ct(this)) {
                  _context37.n = 1;
                  break;
                }
                throw Error("IndexedDB is not supported: immediateSend");
              case 1:
                _t37 = a.id !== void 0;
                if (!_t37) {
                  _context37.n = 3;
                  break;
                }
                _context37.n = 2;
                return this.Vi.Y6(a.id, this.mg);
              case 2:
                _t38 = _context37.v;
                if (_t38) {
                  _context37.n = 3;
                  break;
                }
                this.QB(Error("The request cannot be found in the database."));
              case 3:
                if (!this.KN(a, this.e0)) {
                  _context37.n = 6;
                  break;
                }
                a.skipRetry || (a = soa(this, a));
                _t39 = a;
                if (!_t39) {
                  _context37.n = 5;
                  break;
                }
                _t40 = a.skipRetry && a.id !== void 0;
                if (!_t40) {
                  _context37.n = 4;
                  break;
                }
                _context37.n = 4;
                return this.Vi.sB(a.id, this.mg);
              case 4:
                this.Cu(a.url, a.options, !!a.skipRetry);
              case 5:
                _context37.n = 7;
                break;
              case 6:
                this.QB(Error("Networkless Logging: Stored logs request expired age limit"));
                _t41 = a.id !== void 0;
                if (!_t41) {
                  _context37.n = 7;
                  break;
                }
                _context37.n = 7;
                return this.Vi.sB(a.id, this.mg);
              case 7:
                return _context37.a(2);
            }
          }, _callee37, this);
        }));
        function iG(_x58) {
          return _iG2.apply(this, arguments);
        }
        return iG;
      }()
    }, {
      key: "KN",
      value: function KN(a, b) {
        a = a.timestamp;
        return !(this.now() - a >= b);
      }
    }, {
      key: "PN",
      value: function PN() {
        var _this23 = this;
        if (!ct(this)) throw Error("IndexedDB is not supported: retryQueuedRequests");
        this.Vi.eY("QUEUED", this.mg).then(function (a) {
          a && !_this23.KN(a, _this23.Y_) ? _this23.Mp.Ok(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee38() {
            var _t42;
            return _regenerator().w(function (_context38) {
              while (1) switch (_context38.n) {
                case 0:
                  _t42 = a.id !== void 0;
                  if (!_t42) {
                    _context38.n = 1;
                    break;
                  }
                  _context38.n = 1;
                  return _this23.Vi.oU(a.id, _this23.mg);
                case 1:
                  _this23.PN();
                case 2:
                  return _context38.a(2);
              }
            }, _callee38);
          }))) : _this23.Qh.Si() && _this23.B();
        });
      }
    }]);
  }();
  var Qoa = /*#__PURE__*/function (_uhb) {
    function Qoa() {
      var _this24;
      _classCallCheck(this, Qoa);
      P_ || (P_ = new g.O_({
        Ela: !0,
        jja: !0
      }));
      _this24 = _callSuper(this, Qoa, [{
        Vi: {
          f4: Aoa,
          sB: zoa,
          eY: woa,
          Y6: xoa,
          oU: yoa,
          set: voa
        },
        Qh: P_,
        handleError: function handleError(a, b, c) {
          var _c$error, _c$error2;
          var d = c === null || c === void 0 || (_c$error = c.error) === null || _c$error === void 0 ? void 0 : _c$error.code;
          d === 400 || d === 415 ? (a = new g.Jr(a.message, b, c === null || c === void 0 || (_c$error2 = c.error) === null || _c$error2 === void 0 ? void 0 : _c$error2.code), Up(a, void 0, void 0, void 0, !0)) : g.Sp(a);
        },
        QB: Up,
        Cu: Soa,
        now: g.T,
        R1: Moa,
        Mp: g.Nr(),
        zT: "publicytnetworkstatus-online",
        US: "publicytnetworkstatus-offline",
        KK: !0,
        jK: .1,
        uN: g.kq("potential_esf_error_limit", 10),
        Sa: g.jq,
        hF: !(Ir() && g.cj(document.location.toString()) !== "www.youtube-nocookie.com")
      }]);
      _this24.D = new g.Km();
      g.jq("networkless_immediately_drop_all_requests") && Boa();
      wna("LogsDatabaseV2");
      return _this24;
    }
    _inherits(Qoa, _uhb);
    return _createClass(Qoa, [{
      key: "writeThenSend",
      value: function writeThenSend(a, b) {
        b || (b = {});
        b = qt(a, b);
        Ir() || (this.j = !1);
        _superPropGet(Qoa, "writeThenSend", this, 3)([a, b]);
      }
    }, {
      key: "sendThenWrite",
      value: function sendThenWrite(a, b, c) {
        b || (b = {});
        b = qt(a, b);
        Ir() || (this.j = !1);
        _superPropGet(Qoa, "sendThenWrite", this, 3)([a, b, c]);
      }
    }, {
      key: "sendAndWrite",
      value: function sendAndWrite(a, b) {
        b || (b = {});
        b = qt(a, b);
        Ir() || (this.j = !1);
        _superPropGet(Qoa, "sendAndWrite", this, 3)([a, b]);
      }
    }, {
      key: "awaitInitialization",
      value: function awaitInitialization() {
        return this.D.promise;
      }
    }]);
  }(uhb);
  var Coa = undefined;
  Doa = function Doa(a) {
    return g.ws(Coa(), a);
  };
  Eoa = /*#__PURE__*/function () {
    var _Eoa = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee39(a) {
      var b;
      return _regenerator().w(function (_context39) {
        while (1) switch (_context39.n) {
          case 0:
            _context39.n = 1;
            return Doa(a);
          case 1:
            a = _context39.v;
            b = (0, g.T)() - 2592E6;
            _context39.n = 2;
            return g.ms(a, ["SWHealthLog"], {
              mode: "readwrite",
              Yb: !0
            }, function (c) {
              return g.rs(c.objectStore("SWHealthLog"), {}, function (d) {
                if (d.getValue().timestamp <= b) return d["delete"]().then(function () {
                  return g.ts(d);
                });
              });
            });
          case 2:
            return _context39.a(2);
        }
      }, _callee39);
    }));
    function Eoa(_x59) {
      return _Eoa.apply(this, arguments);
    }
    return Eoa;
  }();
  Foa = /*#__PURE__*/function () {
    var _Foa = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee40(a) {
      return _regenerator().w(function (_context40) {
        while (1) switch (_context40.n) {
          case 0:
            _context40.n = 1;
            return Doa(a);
          case 1:
            _context40.n = 2;
            return _context40.v.clear("SWHealthLog");
          case 2:
            return _context40.a(2);
        }
      }, _callee40);
    }));
    function Foa(_x60) {
      return _Foa.apply(this, arguments);
    }
    return Foa;
  }();
  Roa = /*#__PURE__*/function () {
    var _Roa = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee41(a) {
      return _regenerator().w(function (_context41) {
        while (1) switch (_context41.n) {
          case 0:
            if (a.mg) {
              _context41.n = 1;
              break;
            }
            throw g.ds("clearSWHealthLogsDb");
          case 1:
            Foa(a.mg)["catch"](function (b) {
              a.handleError(b);
            });
          case 2:
            return _context41.a(2);
        }
      }, _callee41);
    }));
    function Roa(_x61) {
      return _Roa.apply(this, arguments);
    }
    return Roa;
  }();
  pt = function pt() {
    var a = g.ra("yt.networklessRequestController.instance");
    a || (a = new Qoa(), g.qa("yt.networklessRequestController.instance", a), g.jq("networkless_logging") && g.Es().then(function (b) {
      a.mg = b;
      poa(a);
      a.D.resolve();
      a.KK && Math.random() <= a.jK && a.mg && Eoa(a.mg);
      g.jq("networkless_immediately_drop_sw_health_store") && Roa(a);
    }));
    return a;
  };
  var Toa = {};
  g.rt = function (a, b, c, d) {
    !g.Pp("VISITOR_DATA") && b !== "visitor_id" && Math.random() < .01 && Up(new g.Jr("Missing VISITOR_DATA when sending innertube request.", b, c, d));
    if (!a.isReady()) throw a = new g.Jr("innertube xhrclient not ready", b, c, d), g.Sp(a), a;
    var e = {
      headers: d.headers || {},
      method: "POST",
      postParams: c,
      postBody: d.postBody,
      postBodyFormat: d.postBodyFormat || "JSON",
      onTimeout: function onTimeout() {
        d.onTimeout();
      },
      onFetchTimeout: d.onTimeout,
      onSuccess: function onSuccess(m, p) {
        if (d.onSuccess) d.onSuccess(p);
      },
      onFetchSuccess: function onFetchSuccess(m) {
        if (d.onSuccess) d.onSuccess(m);
      },
      onProgress: function onProgress(m) {
        if (d.onProgress) d.onProgress(m);
      },
      onError: function onError(m, p) {
        if (d.onError) d.onError(p);
      },
      onFetchError: function onFetchError(m) {
        if (d.onError) d.onError(m);
      },
      timeout: d.timeout,
      withCredentials: !0,
      compress: d.compress
    };
    e.headers["Content-Type"] || (e.headers["Content-Type"] = "application/json");
    c = "";
    var f = a.config_.XY;
    f && (c = f);
    f = a.config_.YY || !1;
    var h = doa(f, c, d);
    Object.assign(e.headers, h);
    e.headers.Authorization && !c && f && (e.headers["x-origin"] = window.location.origin);
    var k = Zp("".concat(c, "/youtubei/".concat(a.config_.innertubeApiVersion, "/").concat(b)), {
        alt: "json"
      }),
      l = function l() {
        var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        try {
          if (m && d.retry && !d.networklessOptions.bypassNetworkless) e.method = "POST", d.networklessOptions.writeThenSend ? pt().writeThenSend(k, e) : pt().sendAndWrite(k, e);else if (d.compress) {
            if (e.postBody) {
              var p = e.postBody;
              typeof p !== "string" && (p = JSON.stringify(e.postBody));
              bt(k, p, e, g.oq);
            } else bt(k, JSON.stringify(e.postParams), e, pq);
          } else pq(k, e);
        } catch (p) {
          if (p.name === "InvalidAccessError") Up(Error("An extension is blocking network request."));else throw p;
        }
      };
    g.ra("ytNetworklessLoggingInitializationOptions") && Toa.isNwlInitialized ? ona().then(function (m) {
      l(m);
    }) : l(!1);
  };
  var uu = !0;
  Vpa = function Vpa(a, b, c, d) {
    var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var f = arguments.length > 5 ? arguments[5] : undefined;
    var h = arguments.length > 6 ? arguments[6] : undefined;
    if (a.size === 0) c();else {
      var k = Math.round((0, g.T)()),
        l = a.size;
      var _iterator9 = _createForOfIteratorHelper(a),
        _step9;
      try {
        var _loop2 = function _loop2() {
            var _step9$value = _slicedToArray(_step9.value, 2),
              p = _step9$value[0],
              r = _step9$value[1];
            a = p;
            m = r;
            var u = g.Wb({
              context: g.Os(b.config_ || g.Ns())
            });
            if (!g.xa(m) && !g.jq("throw_err_when_logevent_malformed_killswitch")) {
              d();
              return 1; // break
            }
            var v = h || g.jq("web_vss_routing_check_all_tier_policies") && Array.isArray(m) && m.some(function (Y) {
                return ku(iu(Y) || "");
              }),
              z = dqa(v);
            u.events = m;
            (m = ru[a]) && eqa(u, a, m);
            delete ru[a];
            var H = a === "visitorOnlyApprovedKey";
            fqa(u, k, H);
            gqa(e);
            var M = function M(Y) {
                g.jq("start_client_gcf") && g.bo.Ok(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee42() {
                  return _regenerator().w(function (_context42) {
                    while (1) switch (_context42.n) {
                      case 0:
                        _context42.n = 1;
                        return hqa(Y);
                      case 1:
                        return _context42.a(2);
                    }
                  }, _callee42);
                })));
                l--;
                l || c();
              },
              N = 0,
              Q = !1,
              P = function P(Y) {
                Q || (Q = !0, vu(Y), l--, d());
              },
              _U = function U() {
                N++;
                if (e.bypassNetworkless && N === 1) try {
                  g.rt(b, z, u, wu({
                    writeThenSend: !0
                  }, H, M, _U, f));
                  uu = !1;
                  return;
                } catch (Y) {
                  P(Y);
                  return;
                }
                l--;
                l || c();
              };
            try {
              g.rt(b, z, u, wu(e, H, M, _U, f)), uu = !1;
            } catch (Y) {
              P(Y);
            }
          },
          m;
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          if (_loop2()) break;
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  };
  wha = function wha(a) {
    a.K || (a.K = !0, g.$l(a.p5, a));
  };
  var Bha = vf;
  yha = function yha(a, b) {
    a.D = !0;
    g.$l(function () {
      a.D && Bha.call(null, b);
    });
  };
  _Pa = function Pa(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, _Pa);else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    b !== void 0 && (this.cause = b);
  };
  cm = function cm(a) {
    _Pa.call(this, a);
  };
  g.xe = function () {};
  nha = function nha() {
    this.next = this.context = this.A = this.B = this.j = null;
    this.C = !1;
  };
  var oha = {};
  Xl = function Xl(a, b, c) {
    var d = oha.get();
    d.B = a;
    d.A = b;
    d.context = c;
    return d;
  };
  am = function am(a, b) {
    a.A || a.j != 2 && a.j != 3 || wha(a);
    a.C ? a.C.next = b : a.A = b;
    a.C = b;
  };
  sha = function sha(a, b, c, d) {
    am(a, Xl(b || g.xe, c || null, d));
  };
  zha = function zha(a, b, c, d, e) {
    function f(l) {
      k || (k = !0, d.call(e, l));
    }
    function h(l) {
      k || (k = !0, c.call(e, l));
    }
    var k = !1;
    try {
      b.call(a, h, f);
    } catch (l) {
      f(l);
    }
  };
  pha = function pha(a, b, c, d) {
    if (a instanceof g.Wl) return sha(a, b, c, d), !0;
    if (a) try {
      var e = !!a.$goog_Thenable;
    } catch (f) {
      e = !1;
    } else e = !1;
    if (e) return a.then(b, c, d), !0;
    if (g.za(a)) try {
      var f = a.then;
      if (typeof f === "function") return zha(a, f, b, c, d), !0;
    } catch (f) {
      return c.call(d, f), !0;
    }
    return !1;
  };
  Vl = function Vl(a, b, c) {
    a.j == 0 && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.j = 1, pha(c, a.V$, a.W$, a) || (a.L = c, a.j = b, a.B = null, wha(a), b != 3 || c instanceof cm || yha(a, c)));
  };
  g.Wl = function (a, b) {
    this.j = 0;
    this.L = void 0;
    this.C = this.A = this.B = null;
    this.D = this.K = !1;
    if (a != g.xe) try {
      var c = this;
      a.call(b, function (d) {
        Vl(c, 2, d);
      }, function (d) {
        Vl(c, 3, d);
      });
    } catch (c) {
      Vl(this, 3, c);
    }
  };
  g.G = g.Wl.prototype;
  var Ml = undefined;
  g.G["finally"] = function (a) {
    var _this25 = this;
    a = Ml(a);
    return new g.Wl(function (b, c) {
      sha(_this25, function (d) {
        a();
        b(d);
      }, function (d) {
        a();
        c(d);
      });
    });
  };
  xha = function xha(a, b, c, d) {
    var e = Xl(null, null, null);
    e.j = new g.Wl(function (f, h) {
      e.B = b ? function (k) {
        try {
          var l = b.call(d, k);
          f(l);
        } catch (l) {
          h(l);
        }
      } : f;
      e.A = c ? function (k) {
        try {
          var l = c.call(d, k);
          l === void 0 && k instanceof cm ? h(k) : f(l);
        } catch (l) {
          h(l);
        }
      } : h;
    });
    e.j.B = a;
    am(a, e);
    return e.j;
  };
  g.G.Nl = function (a, b) {
    return xha(this, null, Ml(a), b);
  };
  g.G["catch"] = {};
  uha = function uha(a) {
    var b = null;
    a.A && (b = a.A, a.A = b.next, b.next = null);
    a.A || (a.C = null);
    return b;
  };
  Aha = function Aha(a, b, c) {
    b == 2 ? a.B.call(a.context, c) : a.A && a.A.call(a.context, c);
  };
  vha = function vha(a, b, c, d) {
    if (c == 3 && b.A && !b.C) for (; a && a.D; a = a.B) a.D = !1;
    if (b.j) b.j.B = null, Aha(b, c, d);else try {
      b.C ? b.B.call(b.context) : Aha(b, c, d);
    } catch (e) {
      Bha.call(null, e);
    }
    oha.put(b);
  };
  _tha = function tha(a, b) {
    if (a.j == 0) if (a.B) {
      var c = a.B;
      if (c.A) {
        var d = 0,
          e = null,
          f = null;
        for (var h = c.A; h && (h.C || (d++, h.j == a && (e = h), !(e && d > 1))); h = h.next) e || (f = h);
        e && (c.j == 0 && d == 1 ? _tha(c, b) : (f ? (d = f, d.next == c.C && (c.C = d), d.next = d.next.next) : uha(c), vha(c, e, 3, b)));
      }
      a.B = null;
    } else Vl(a, 3, b);
  };
  g.G.cancel = function (a) {
    if (this.j == 0) {
      var b = new cm(a);
      g.$l(function () {
        _tha(this, b);
      }, this);
    }
  };
  g.G.V$ = function (a) {
    this.j = 0;
    Vl(this, 2, a);
  };
  g.G.W$ = function (a) {
    this.j = 0;
    Vl(this, 3, a);
  };
  g.G.p5 = function () {
    for (var a; a = uha(this);) vha(this, a, this.j, this.L);
    this.K = !1;
  };
  Ppa = function Ppa(a, b) {
    if (a.endpoint === "log_event") {
      g.jq("more_accurate_gel_parser") && eu().storePayload({
        isJspb: !1
      }, a.payload);
      gu(a);
      var c = hu(a),
        d = new Map();
      d.set(c, [a.payload]);
      var e = iu(a.payload) || "";
      (a = Jpa(b)) && cu(a);
      return new g.Wl(function (f, h) {
        bu && bu.isReady() ? Vpa(d, bu, f, h, {
          bypassNetworkless: !0
        }, !0, ku(e)) : f();
      });
    }
  };
  var ju = {};
  var S_ = /*#__PURE__*/_createClass(function S_() {
    _classCallCheck(this, S_);
    this.C = this.A = this.B = 0;
    this.j = !1;
  });
  var sqa = {};
  var $pa = {};
  var rqa = {};
  var Zpa = {};
  lu = function lu(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
    return a ? b === 300 ? Zpa : rqa : b === 300 ? $pa : sqa;
  };
  tu = function tu(a) {
    g.jq("transport_use_scheduler") ? g.bo.Oj(a) : g.gq(a);
  };
  var xu = 1;
  var fu = new Map();
  g.yu = /*#__PURE__*/function (_Di5) {
    function _class9(a) {
      _classCallCheck(this, _class9);
      return _callSuper(this, _class9, [a]);
    }
    _inherits(_class9, _Di5);
    return _createClass(_class9);
  }(Di);
  yg = function yg(a) {
    if (a == null) return a;
    if (typeof a === "string" && a) a = +a;else if (typeof a !== "number") return;
    return ug(a) ? a | 0 : void 0;
  };
  Oh = function Oh(a, b) {
    var _ref14;
    a = jh(a, b);
    return (_ref14 = a == null ? a : ug(a) ? a | 0 : void 0) !== null && _ref14 !== void 0 ? _ref14 : 0;
  };
  var ceb = /*#__PURE__*/function (_Di6) {
    function ceb(a) {
      _classCallCheck(this, ceb);
      return _callSuper(this, ceb, [a]);
    }
    _inherits(ceb, _Di6);
    return _createClass(ceb);
  }(Di);
  var Xna = /*#__PURE__*/function (_Di7) {
    function Xna(a) {
      _classCallCheck(this, Xna);
      return _callSuper(this, Xna, [a]);
    }
    _inherits(Xna, _Di7);
    return _createClass(Xna, [{
      key: "getDeviceId",
      value: function getDeviceId() {
        return Nh(this, 6);
      }
    }, {
      key: "GB",
      value: function GB(a) {
        var b = oh(this, 9, yg, 3, !0);
        Zf(b, a);
        return b[a];
      }
    }, {
      key: "getPlayerType",
      value: function getPlayerType() {
        return Oh(this, 36);
      }
    }, {
      key: "setHomeGroupInfo",
      value: function setHomeGroupInfo(a) {
        return Hh(this, ceb, 81, a);
      }
    }, {
      key: "clearLocationPlayabilityToken",
      value: function clearLocationPlayabilityToken() {
        return lh(this, 89);
      }
    }]);
  }(Di);
  var Ps = /*#__PURE__*/function (_Di8) {
    function Ps(a) {
      _classCallCheck(this, Ps);
      return _callSuper(this, Ps, [a]);
    }
    _inherits(Ps, _Di8);
    return _createClass(Ps, [{
      key: "B",
      value: function B(a) {
        return Hh(this, Xna, 1, a);
      }
    }]);
  }(Di);
  pg = function pg(a) {
    if (a != null && typeof a !== "number") throw Error("Value of float/double field must be a number, found ".concat(_typeof(a), ": ").concat(a));
    return a;
  };
  var Yna = /*#__PURE__*/function (_Di9) {
    function Yna(a) {
      _classCallCheck(this, Yna);
      return _callSuper(this, Yna, [a]);
    }
    _inherits(Yna, _Di9);
    return _createClass(Yna);
  }(Di);
  var Rs = [2, 3, 4, 5, 6];
  var Zna = /*#__PURE__*/function (_Di0) {
    function Zna(a) {
      _classCallCheck(this, Zna);
      return _callSuper(this, Zna, [a]);
    }
    _inherits(Zna, _Di0);
    return _createClass(Zna, [{
      key: "getValue",
      value: function getValue() {
        return Nh(this, zh(this, Rs, 2));
      }
    }, {
      key: "clearValue",
      value: function clearValue() {
        return xh(this, 2, Rs);
      }
    }]);
  }(Di);
  Fh = function Fh(a, b, c, d, e, f, h, k, l) {
    f = f && f !== 4 ? f !== 1 && (a ? Xf(a, c) : 2 & c) ? 1 : f : 4;
    k = !!k || f === 3;
    var m = !!l && !(a ? Xf(a, c) : 2 & c);
    (f === 2 || m) && a && fh(a) && (b = a.he, c = b[Wf] | 0);
    a = mh(b, e, h);
    var p = a === nh ? 7 : a[Wf] | 0,
      r = Uf(p, c);
    if (l = !(4 & r)) {
      var u = a,
        v = c;
      var z = !!(2 & r);
      z && (v |= 2);
      var H = !z,
        M = !0,
        N = 0,
        Q = 0;
      for (; N < u.length; N++) {
        var P = xba(u[N], d, v);
        if (P instanceof d) {
          if (!z) {
            var U = Xf(P);
            H && (H = !U);
            M && (M = U);
          }
          u[Q++] = P;
        }
      }
      Q < N && (u.length = Q);
      r |= 4;
      r = M ? r & -4097 : r | 4096;
      r = H ? r | 8 : r & -9;
    }
    r !== p && (a[Wf] = r, 2 & r && Object.freeze(a));
    if (m && !(8 & r || !a.length && (f === 1 || (f !== 4 ? 0 : 2 & r || !(16 & r) && 32 & c)))) {
      ph(r) && (a = _toConsumableArray(a), r = qh(r, c), c = kh(b, c, e, a, h));
      d = a;
      m = r;
      for (p = 0; p < d.length; p++) u = d[p], r = Mba(u), u !== r && (d[p] = r);
      m |= 8;
      r = m = d.length ? m | 4096 : m & -4097;
      a[Wf] = r;
    }
    return a = Nba(a, r, b, c, e, h, f, l, k);
  };
  Jh = function Jh(a, b, c, d) {
    gh(a);
    var e = a.he;
    a = Fh(a, e, e[Wf] | 0, c, b, 2, void 0, !0);
    d = d != null ? Og(d, c) : new c();
    a.push(d);
    b = c = a === nh ? 7 : a[Wf] | 0;
    (d = Xf(d)) ? (c &= -9, a.length === 1 && (c &= -4097)) : c |= 4096;
    c !== b && (a[Wf] = c);
    d || hh(e);
  };
  var Ss = /*#__PURE__*/function (_Di1) {
    function Ss(a) {
      _classCallCheck(this, Ss);
      return _callSuper(this, Ss, [a]);
    }
    _inherits(Ss, _Di1);
    return _createClass(Ss, [{
      key: "setSafetyMode",
      value: function setSafetyMode(a) {
        return Th(this, 5, a);
      }
    }]);
  }(Di);
  Cma = function Cma(a) {
    switch (a) {
      case "DESKTOP":
        return 1;
      case "UNKNOWN_PLATFORM":
        return 0;
      case "TV":
        return 2;
      case "GAME_CONSOLE":
        return 3;
      case "MOBILE":
        return 4;
      case "TABLET":
        return 5;
    }
  };
  wg = function wg(a) {
    if (typeof a !== "number") throw Qf("int32");
    if (!ug(a)) throw Qf("int32");
    return a | 0;
  };
  xg = function xg(a) {
    return a == null ? a : wg(a);
  };
  $na = function $na(a) {
    var b = new Ps(),
      c = new Xna();
    Sh(c, 1, a.NR);
    Sh(c, 2, a.MR);
    Th(c, 16, a.VY);
    Sh(c, 17, a.innertubeContextClientVersion);
    if (a.LL) {
      var d = a.LL,
        e = new Qs();
      d.coldConfigData && Sh(e, 1, d.coldConfigData);
      d.appInstallData && Sh(e, 6, d.appInstallData);
      d.coldHashData && Sh(e, 3, d.coldHashData);
      d.hotHashData && e.Eu(d.hotHashData);
      Hh(c, Qs, 62, e);
    }
    (d = g.pa.devicePixelRatio) && d != 1 && lh(c, 65, pg(d));
    d = lq();
    d !== "" && Sh(c, 54, d);
    d = mq();
    if (d.length > 0) {
      e = new Yna();
      for (var f = 0; f < d.length; f++) {
        var h = new Zna();
        Sh(h, 1, d[f].key);
        xh(h, 2, Rs, Mg(d[f].value));
        Jh(e, 15, Zna, h);
      }
      Hh(b, Yna, 5, e);
    }
    Rna(a, c);
    Sna(b);
    Tna(c);
    Una(a, c);
    Vna(c);
    g.jq("start_client_gcf") && Wna(c);
    g.Pp("DELEGATED_SESSION_ID") && !g.jq("pageid_as_header_web") && (a = new Ss(), Sh(a, 3, g.Pp("DELEGATED_SESSION_ID")));
    !g.jq("fill_delegate_context_in_gel_killswitch") && (a = g.Pp("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) && (d = Eh(b, Ss, 3) || new Ss(), a = Sh(d, 18, a), Hh(b, Ss, 3, a));
    a = g.Pp("DEVICE", "");
    for (var _i5 = 0, _Object$entries2 = Object.entries(Wp(a)); _i5 < _Object$entries2.length; _i5++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i5], 2),
        _f2 = _Object$entries2$_i[0],
        _h2 = _Object$entries2$_i[1];
      a = _f2, d = _h2, a === "cbrand" ? Sh(c, 12, d) : a === "cmodel" ? Sh(c, 13, d) : a === "cbr" ? Sh(c, 87, d) : a === "cbrver" ? Sh(c, 88, d) : a === "cos" ? Sh(c, 18, d) : a === "cosver" ? Sh(c, 19, d) : a === "cplatform" && Th(c, 42, Cma(d));
    }
    Br() && (a = Sh(c, 18, "IOS"), a = Th(a, 42, 5), Th(a, 46, 2));
    g.jq("web_attention_logging_enabled") && (lh(c, 55, xg(window.innerWidth)), lh(c, 56, xg(window.innerHeight)));
    b.B(c);
    return b;
  };
  var nqa = /*#__PURE__*/function (_Di10) {
    function nqa(a) {
      _classCallCheck(this, nqa);
      return _callSuper(this, nqa, [a]);
    }
    _inherits(nqa, _Di10);
    return _createClass(nqa, [{
      key: "getToken",
      value: function getToken() {
        return Qh(this, 2);
      }
    }, {
      key: "setToken",
      value: function setToken(a) {
        return Sh(this, 2, a);
      }
    }]);
  }(Di);
  iqa = function iqa(a, b, c) {
    if (c.getVideoId()) var d = 1;else if (c.getPlaylistId()) d = 2;else return;
    Hh(a, Xpa, 4, c);
    a = Eh(a, Ps, 1) || new Ps();
    c = Eh(a, Ss, 3) || new Ss();
    var e = new nqa();
    e.setToken(b);
    Th(e, 1, d);
    Jh(c, 12, nqa, e);
    Hh(a, Ss, 3, c);
  };
  Rh = function Rh(a, b, c) {
    return lh(a, b, Gg(c));
  };
  var mqa = /*#__PURE__*/function (_Di11) {
    function mqa(a) {
      _classCallCheck(this, mqa);
      return _callSuper(this, mqa, [a]);
    }
    _inherits(mqa, _Di11);
    return _createClass(mqa);
  }(Di);
  jqa = function jqa(a, b, c) {
    Au() || Rh(a, 2, b);
    if (!c && (b = g.Pp("EVENT_ID"))) {
      c = lqa();
      var d = new mqa();
      Sh(d, 1, b);
      Rh(d, 2, c);
      Hh(a, mqa, 5, d);
    }
  };
  var Ec = /*#__PURE__*/function () {
    function Ec(a) {
      _classCallCheck(this, Ec);
      this.j = a;
    }
    return _createClass(Ec, [{
      key: "toString",
      value: function toString() {
        return this.j + "";
      }
    }]);
  }();
  Fc = function Fc(a) {
    var b = Dc();
    a = b ? b.createScriptURL(a) : a;
    return new Ec(a);
  };
  Gp = function Gp(a) {
    return a ? (a = a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue) ? Fc(a) : null : null;
  };
  var Xt = void 0;
  Fpa = function Fpa() {
    Xt || (Xt = Gp(g.Pp("WORKER_SERIALIZATION_URL")));
    return Xt || void 0;
  };
  Gc = function Gc(a) {
    if (a instanceof Ec) return a.j;
    throw Error("");
  };
  var Yt = void 0;
  Gpa = function Gpa() {
    var a = Fpa();
    Yt || a === void 0 || (Yt = new Worker(Gc(a), void 0));
    return Yt;
  };
  var zu = /*#__PURE__*/function (_Di12) {
    function zu(a) {
      _classCallCheck(this, zu);
      return _callSuper(this, zu, [a, 500]);
    }
    _inherits(zu, _Di12);
    return _createClass(zu);
  }(Di);
  kqa = function kqa(a, b) {
    if (b) {
      var d = [];
      for (var e = 0; e < b.length; e++) try {
        d.push(new zu(b[e]));
      } catch (_unused7) {
        vu(new g.Jr("Transport failed to deserialize " + String(b[e])));
      }
      b = d;
    } else b = [];
    var _iterator0 = _createForOfIteratorHelper(b),
      _step0;
    try {
      for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
        var c = _step0.value;
        Jh(a, 3, zu, c);
      }
    } catch (err) {
      _iterator0.e(err);
    } finally {
      _iterator0.f();
    }
    c = {
      startTime: (0, g.T)(),
      ticks: {},
      infos: {}
    };
    a = a.Xh();
    c.ticks.geljspc = (0, g.T)();
    g.jq("log_jspb_serialize_latency") && at("gel_jspb_serialize", c, {
      sampleRate: .1
    });
    return a;
  };
  Lpa = function Lpa(a, b, c) {
    var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var e = arguments.length > 4 ? arguments[4] : undefined;
    var f = arguments.length > 5 ? arguments[5] : undefined;
    var h = arguments.length > 6 ? arguments[6] : undefined;
    var k = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {
      value: 0
    };
    f = dqa(f);
    var l = !1,
      m = function m(p) {
        l || (l = !0, vu(p), k.value--, k.value || c());
      };
    d = wu(d, h, function (p) {
      g.jq("start_client_gcf") && g.bo.Ok(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee43() {
        return _regenerator().w(function (_context43) {
          while (1) switch (_context43.n) {
            case 0:
              _context43.n = 1;
              return hqa(p);
            case 1:
              return _context43.a(2);
          }
        }, _callee43);
      })));
      k.value--;
      k.value || c();
    }, function () {
      k.value--;
      k.value || c();
    }, e);
    d.headers["Content-Type"] = "application/json+protobuf";
    d.postBodyFormat = "JSPB";
    d.postBody = a;
    try {
      g.rt(b, f, "", d), uu = !1;
    } catch (p) {
      m(p);
    }
  };
  Wpa = function Wpa(a, b, c) {
    var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var e = arguments.length > 4 ? arguments[4] : undefined;
    var f = arguments.length > 5 ? arguments[5] : undefined;
    if (a.size === 0) c();else {
      var h = Math.round((0, g.T)()),
        k = {
          value: a.size
        },
        l = new Map(_toConsumableArray(a));
      var _iterator1 = _createForOfIteratorHelper(l),
        _step1;
      try {
        var _loop3 = function _loop3() {
            var _step1$value = _slicedToArray(_step1.value, 1),
              m = _step1$value[0];
            var p = m;
            l = a.get(p);
            var r = function r(H) {
                delete qu[p];
                fu["delete"](xu);
                vu(H);
                k.value--;
                k.value || c();
              },
              u = new g.yu();
            try {
              var H = $na(b.config_ || g.Ns());
              Hh(u, Ps, 1, H);
              var M = qu[p];
              M && iqa(u, p, M);
              delete qu[p];
            } catch (H) {
              r(H);
              return 0; // continue
            }
            var v = p === "visitorOnlyApprovedKey";
            jqa(u, h, v);
            gqa(d);
            if (g.jq("jspb_serialize_with_worker")) {
              var _H = Gpa();
              if (_H && d.writeThenSend) {
                fu.set(xu, {
                  client: b,
                  resolve: c,
                  networklessOptions: d,
                  isIsolated: e,
                  useVSSEndpoint: f,
                  dangerousLogToVisitorSession: v,
                  requestsOutstanding: k
                });
                try {
                  _H.postMessage({
                    op: "gelBatchToSerialize",
                    batchRequest: $g(u),
                    clientEvents: l,
                    key: xu
                  });
                } catch (M) {
                  r(M);
                  return 1; // break
                }
                xu++;
                return 1; // break
              }
            }
            var z;
            try {
              z = kqa(u, l);
            } catch (H) {
              r(H);
              return 0; // continue
            }
            Lpa(z, b, c, d, e, f, v, k);
          },
          _ret;
        for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
          _ret = _loop3();
          if (_ret === 0) continue;
          if (_ret === 1) break;
        }
      } catch (err) {
        _iterator1.e(err);
      } finally {
        _iterator1.f();
      }
    }
  };
  Ypa = function Ypa(a, b) {
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
    var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 200;
    var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
    var h = bu,
      k = new Map(),
      l = new Map(),
      m = {
        isJspb: d,
        cttAuthInfo: void 0,
        tier: e
      },
      p = {
        isJspb: d,
        cttAuthInfo: void 0
      };
    if (d) {
      for (var _i6 = 0, _Object$keys4 = Object.keys(ju); _i6 < _Object$keys4.length; _i6++) {
        var r = _Object$keys4[_i6];
        b = g.jq("enable_web_tiered_gel") ? eu().smartExtractMatchingEntries({
          keys: [m, p],
          sizeLimit: 1E3
        }) : eu().extractMatchingEntries({
          isJspb: !0,
          cttAuthInfo: r
        }), b.length > 0 && k.set(r, b), (g.jq("web_fp_via_jspb_and_json") && c.writeThenSend || !g.jq("web_fp_via_jspb_and_json")) && delete ju[r];
      }
      Wpa(k, h, a, c, !1, f);
    } else {
      for (var _i7 = 0, _Object$keys5 = Object.keys(ju); _i7 < _Object$keys5.length; _i7++) {
        var _r2 = _Object$keys5[_i7];
        k = g.jq("enable_web_tiered_gel") ? eu().smartExtractMatchingEntries({
          keys: [{
            isJspb: !1,
            cttAuthInfo: _r2,
            tier: e
          }, {
            isJspb: !1,
            cttAuthInfo: _r2
          }],
          sizeLimit: 1E3
        }) : eu().extractMatchingEntries({
          isJspb: !1,
          cttAuthInfo: _r2
        }), k.length > 0 && l.set(_r2, k), (g.jq("web_fp_via_jspb_and_json") && c.writeThenSend || !g.jq("web_fp_via_jspb_and_json")) && delete ju[_r2];
      }
      Vpa(l, h, a, b, c, !1, f);
    }
  };
  mu = function mu() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var c = arguments.length > 2 ? arguments[2] : undefined;
    new g.Wl(function (d, e) {
      var f = lu(b, c);
      tu(f.B);
      tu(f.A);
      f.A = 0;
      if (bu && bu.isReady()) {
        var h = f.j;
        f.j = !1;
        if (g.jq("enable_web_tiered_gel") && g.jq("web_vss_routing_check_all_tier_policies")) {
          f = lu(b, 300);
          var k = lu(b, 200);
          h = h || f.j || k.j;
          f.j = !1;
          k.j = !1;
        }
        c === void 0 && g.jq("enable_web_tiered_gel") ? Ypa(d, e, a, b, 300, h) : Ypa(d, e, a, b, c, h);
      } else Upa(b, c), d();
    });
  };
  var aqa = undefined;
  g.Lr = function (a, b, c) {
    return Kr(0, b, 0, c);
  };
  var Qt = window;
  Rt = function Rt() {
    var _Qt$h5vcc$traceEvent, _Qt$h5vcc$traceEvent2;
    return "h5vcc" in Qt && (_Qt$h5vcc$traceEvent = Qt.h5vcc.traceEvent) !== null && _Qt$h5vcc$traceEvent !== void 0 && _Qt$h5vcc$traceEvent.traceBegin && (_Qt$h5vcc$traceEvent2 = Qt.h5vcc.traceEvent) !== null && _Qt$h5vcc$traceEvent2 !== void 0 && _Qt$h5vcc$traceEvent2.traceEnd ? 1 : "performance" in Qt && Qt.performance.mark && Qt.performance.measure ? 2 : 0;
  };
  g.Rc = function (a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "unexpected value ".concat(a, "!");
    throw Error(b);
  };
  St = function St(a) {
    var b = Rt();
    switch (b) {
      case 1:
        Qt.h5vcc.traceEvent.traceBegin("YTLR", a);
        break;
      case 2:
        Qt.performance.mark("".concat(a, "-start"));
        break;
      case 0:
        break;
      default:
        g.Rc(b, "unknown trace type");
    }
  };
  var Vt = {};
  rpa = function rpa(a) {
    var b = Rt();
    switch (b) {
      case 1:
        Qt.h5vcc.traceEvent.traceEnd("YTLR", a);
        break;
      case 2:
        b = "".concat(a, "-start");
        var c = "".concat(a, "-end");
        Qt.performance.mark(c);
        Qt.performance.measure(a, b, c);
        break;
      case 0:
        break;
      default:
        g.Rc(b, "unknown trace type");
    }
  };
  spa = function spa(a) {
    var b = Array.from(a.j.keys()).sort(function (c, d) {
      var _a$j$d$priority, _a$j$c$priority;
      return ((_a$j$d$priority = a.j[d].priority) !== null && _a$j$d$priority !== void 0 ? _a$j$d$priority : 0) - ((_a$j$c$priority = a.j[c].priority) !== null && _a$j$c$priority !== void 0 ? _a$j$c$priority : 0);
    });
    var _iterator10 = _createForOfIteratorHelper(b),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var c = _step10.value;
        b = a.j[c], b.jobId === void 0 || b.zN || (a.scheduler.Oj(b.jobId), Kr(0, b.hS, 10));
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
  };
  var tpa = undefined;
  upa = function upa(a, b, c) {
    tpa && console.groupCollapsed && console.groupEnd && (console.groupCollapsed("[".concat(a.constructor.name, "] '").concat(a.state, "' to '").concat(b, "'")), console.log("with message: ", c), console.groupEnd());
  };
  zpa = function zpa(a) {
    Vt && a && St(a);
  };
  Apa = function Apa(a) {
    if (g.jq("web_lifecycle_error_handling_killswitch")) return a();
    try {
      return a();
    } catch (b) {
      var _window$onerror;
      (_window$onerror = window.onerror) === null || _window$onerror === void 0 || _window$onerror.call(window, b.message, "", 0, 0, b);
    }
  };
  Ut = function Ut(a) {
    Vt && a && rpa(a);
  };
  Bpa = function Bpa(a) {
    for (var _len5 = arguments.length, b = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      b[_key5 - 1] = arguments[_key5];
    }
    return function () {
      zpa(a.name);
      Apa(function () {
        return a.callback.apply(a, b);
      });
      Ut(a.name);
    };
  };
  Kma = function Kma(a) {
    var b = g.ra("yt.scheduler.instance.addImmediateJob");
    b ? b(a) : a();
  };
  xpa = function xpa(a) {
    g.Nr();
    for (var _len6 = arguments.length, b = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
      b[_key6 - 1] = arguments[_key6];
    }
    var _iterator11 = _createForOfIteratorHelper(a),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var c = _step11.value;
        a = Bpa.apply(void 0, [c].concat(b)), Kma(a);
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
  };
  var Cpa = /*#__PURE__*/function () {
    function Cpa(a) {
      var _this26 = this;
      _classCallCheck(this, Cpa);
      this.scheduler = g.Nr();
      this.A = new g.Km();
      this.j = a;
      var _loop4 = function _loop4(b) {
        var _c$priority;
        var c = _this26.j[b];
        a = function a() {
          c.hS();
          _this26.j[b].zN = !0;
          _this26.j.every(function (e) {
            return e.zN === !0;
          }) && _this26.A.resolve();
        };
        var d = Kr(0, a, (_c$priority = c.priority) !== null && _c$priority !== void 0 ? _c$priority : 0);
        _this26.j[b] = _objectSpread(_objectSpread({}, c), {}, {
          hS: a,
          jobId: d
        });
      };
      for (var b = 0; b < this.j.length; b++) {
        _loop4(b);
      }
    }
    return _createClass(Cpa, [{
      key: "cancel",
      value: function cancel() {
        var _iterator12 = _createForOfIteratorHelper(this.j),
          _step12;
        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var a = _step12.value;
            a.jobId === void 0 || a.zN || this.scheduler.Oj(a.jobId), a.zN = !0;
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
        this.A.resolve();
      }
    }]);
  }();
  wpa = function wpa(a, b) {
    for (var _len7 = arguments.length, c = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
      c[_key7 - 2] = arguments[_key7];
    }
    b = b.map(function (d) {
      var _ref16, _a$A;
      var e = (_ref16 = (_a$A = a.A) !== null && _a$A !== void 0 ? _a$A : d.priority) !== null && _ref16 !== void 0 ? _ref16 : 0;
      return {
        hS: Bpa.apply(void 0, [d].concat(c)),
        priority: e
      };
    });
    b.length && (a.B = new Cpa(b));
  };
  var Tt = undefined;
  vpa = /*#__PURE__*/function () {
    var _vpa = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee44(a) {
      var _len8,
        b,
        _key8,
        _iterator13,
        _step13,
        _loop5,
        _args45 = arguments,
        _t44;
      return _regenerator().w(function (_context45) {
        while (1) switch (_context45.p = _context45.n) {
          case 0:
            for (_len8 = _args45.length, b = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
              b[_key8 - 1] = _args45[_key8];
            }
            g.Nr();
            _iterator13 = _createForOfIteratorHelper(a);
            _context45.p = 1;
            _loop5 = /*#__PURE__*/_regenerator().m(function _loop5() {
              var c, d, _t43;
              return _regenerator().w(function (_context44) {
                while (1) switch (_context44.n) {
                  case 0:
                    c = _step13.value;
                    Kma(function () {
                      zpa(c.name);
                      var e = Apa(function () {
                        return c.callback.apply(c, b);
                      });
                      Tt(e) ? d = g.jq("web_lifecycle_error_handling_killswitch") ? e.then(function () {
                        Ut(c.name);
                      }) : e.then(function () {
                        Ut(c.name);
                      }, function (f) {
                        var _window$onerror2;
                        (_window$onerror2 = window.onerror) === null || _window$onerror2 === void 0 || _window$onerror2.call(window, f.message, "", 0, 0, f);
                        Ut(c.name);
                      }) : Ut(c.name);
                    });
                    _t43 = d;
                    if (!_t43) {
                      _context44.n = 1;
                      break;
                    }
                    _context44.n = 1;
                    return d;
                  case 1:
                    return _context44.a(2);
                }
              }, _loop5);
            });
            _iterator13.s();
          case 2:
            if ((_step13 = _iterator13.n()).done) {
              _context45.n = 4;
              break;
            }
            return _context45.d(_regeneratorValues(_loop5()), 3);
          case 3:
            _context45.n = 2;
            break;
          case 4:
            _context45.n = 6;
            break;
          case 5:
            _context45.p = 5;
            _t44 = _context45.v;
            _iterator13.e(_t44);
          case 6:
            _context45.p = 6;
            _iterator13.f();
            return _context45.f(6);
          case 7:
            return _context45.a(2);
        }
      }, _callee44, null, [[1, 5, 6, 7]]);
    }));
    function vpa(_x62) {
      return _vpa.apply(this, arguments);
    }
    return vpa;
  }();
  ypa = function ypa(a, b) {
    var c = b.filter(function (e) {
        var _ref17, _a$A2;
        return ((_ref17 = (_a$A2 = a.A) !== null && _a$A2 !== void 0 ? _a$A2 : e.priority) !== null && _ref17 !== void 0 ? _ref17 : 0) === 10;
      }),
      d = b.filter(function (e) {
        var _ref18, _a$A3;
        return ((_ref18 = (_a$A3 = a.A) !== null && _a$A3 !== void 0 ? _a$A3 : e.priority) !== null && _ref18 !== void 0 ? _ref18 : 0) !== 10;
      });
    return a.D.Tma ? /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee45() {
      var _len9,
        e,
        _key9,
        _args46 = arguments;
      return _regenerator().w(function (_context46) {
        while (1) switch (_context46.n) {
          case 0:
            for (_len9 = _args46.length, e = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              e[_key9] = _args46[_key9];
            }
            _context46.n = 1;
            return vpa.apply(void 0, [c].concat(e));
          case 1:
            wpa.apply(void 0, [a, d].concat(e));
          case 2:
            return _context46.a(2);
        }
      }, _callee45);
    })) : function () {
      for (var _len0 = arguments.length, e = new Array(_len0), _key0 = 0; _key0 < _len0; _key0++) {
        e[_key0] = arguments[_key0];
      }
      xpa.apply(void 0, [c].concat(e));
      wpa.apply(void 0, [a, d].concat(e));
    };
  };
  var zhb = /*#__PURE__*/function () {
    function zhb() {
      _classCallCheck(this, zhb);
      this.state = "none";
      this.plugins = [];
      this.A = void 0;
      this.C = [];
      this.D = {};
      Vt && St(this.state);
    }
    return _createClass(zhb, [{
      key: "currentState",
      get: function get() {
        return this.state;
      }
    }, {
      key: "install",
      value: function install(a) {
        this.plugins.push(a);
        return this;
      }
    }, {
      key: "uninstall",
      value: function uninstall() {
        var _this27 = this;
        for (var _len1 = arguments.length, a = new Array(_len1), _key1 = 0; _key1 < _len1; _key1++) {
          a[_key1] = arguments[_key1];
        }
        a.forEach(function (b) {
          b = _this27.plugins.indexOf(b);
          b > -1 && _this27.plugins.splice(b, 1);
        });
      }
    }, {
      key: "transition",
      value: function transition(a, b) {
        var _this28 = this;
        Vt && rpa(this.state);
        var c = this.transitions.find(function (d) {
          return Array.isArray(d.from) ? d.from.find(function (e) {
            return e === _this28.state && d.to === a;
          }) : d.from === _this28.state && d.to === a;
        });
        if (c) {
          this.B && (spa(this.B), this.B = void 0);
          g.jq("kevlar_startup_split") && this.C.length && (this.C.forEach(function (e) {
            spa(e);
          }), this.C = []);
          upa(this, a, b);
          this.state = a;
          Vt && St(this.state);
          c = c.action.bind(this);
          var d = this.plugins.filter(function (e) {
            return e[a];
          }).map(function (e) {
            return e[a];
          });
          c(ypa(this, d), b);
        } else throw Error("no transition specified from ".concat(this.state, " to ").concat(a));
      }
    }]);
  }();
  var Dpa = /*#__PURE__*/function (_zhb) {
    function Dpa() {
      var _this29;
      _classCallCheck(this, Dpa);
      _this29 = _callSuper(this, Dpa);
      _this29.j = null;
      _this29.A = 10;
      _this29.transitions = [{
        from: "none",
        to: "application_navigating",
        action: _this29.K
      }, {
        from: "application_navigating",
        to: "none",
        action: _this29.L
      }, {
        from: "application_navigating",
        to: "application_navigating",
        action: function action() {}
      }, {
        from: "none",
        to: "none",
        action: function action() {}
      }];
      return _this29;
    }
    _inherits(Dpa, _zhb);
    return _createClass(Dpa, [{
      key: "K",
      value: function K(a, b) {
        var _this30 = this;
        this.j = g.Lr(0, function () {
          _this30.currentState === "application_navigating" && _this30.transition("none");
        }, 5E3);
        a(b === null || b === void 0 ? void 0 : b.event);
      }
    }, {
      key: "L",
      value: function L(a, b) {
        this.j && (g.bo.Oj(this.j), this.j = null);
        a(b === null || b === void 0 ? void 0 : b.event);
      }
    }]);
  }(zhb);
  Wt = undefined;
  Epa = function Epa() {
    Wt || (Wt = new Dpa());
    return Wt;
  };
  ou = function ou(a, b) {
    return g.jq("transport_use_scheduler") === !1 ? g.eq(a, b) : g.jq("logging_avoid_blocking_during_navigation") || g.jq("lr_logging_avoid_blocking_during_navigation") ? g.Lr(0, function () {
      Epa().currentState === "none" ? a() : Epa().install({
        none: {
          callback: a
        }
      });
    }, b) : g.Lr(0, a, b);
  };
  var bqa = undefined;
  var cqa = undefined;
  Upa = function Upa() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
    var c = function c() {
        mu({
          writeThenSend: !0
        }, a, b);
      },
      d = lu(a, b),
      e = d === Zpa || d === $pa ? 5E3 : aqa;
    g.jq("web_gel_timeout_cap") && !d.A && (e = ou(function () {
      c();
    }, e), d.A = e);
    tu(d.B);
    e = g.Pp("LOGGING_BATCH_TIMEOUT", g.kq("web_gel_debounce_ms", 1E4));
    g.jq("shorten_initial_gel_batch_timeout") && uu && (e = bqa);
    e = ou(function () {
      g.kq("gel_min_batch_size") > 0 ? eu().getSequenceCount({
        cttAuthInfo: void 0,
        isJspb: a,
        tier: b
      }) >= cqa && c() : c();
    }, e);
    d.B = e;
  };
  nu = undefined;
  Qpa = function Qpa(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var c = arguments.length > 2 ? arguments[2] : undefined;
    var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
    a && cu(a);
    a = g.kq("tvhtml5_logging_max_batch_ads_fork") || g.kq("tvhtml5_logging_max_batch") || g.kq("web_logging_max_batch") || 100;
    var e = (0, g.T)(),
      f = lu(b, c.tier),
      h = f.C;
    d && (f.j = !0);
    d = 0;
    c && (d = eu().getSequenceCount(c));
    d >= 1E3 ? mu({
      writeThenSend: !0
    }, b, c.tier) : d >= a ? nu || (nu = ou(function () {
      mu({
        writeThenSend: !0
      }, b, c.tier);
      nu = void 0;
    }, 0)) : e - h >= 10 && (Upa(b, c.tier), f.C = e);
  };
  Rpa = function Rpa(a, b) {
    if (a.endpoint === "log_event") {
      gu(a);
      var c = hu(a),
        d = iu(a.payload) || "",
        e = Npa(d),
        f = 200;
      if (e) {
        if (e.enabled === !1 && !g.jq("web_payload_policy_disabled_killswitch")) return;
        f = Opa(e.tier);
        if (f === 400) {
          Ppa(a, b);
          return;
        }
      }
      ju[c] = !0;
      c = {
        cttAuthInfo: c,
        isJspb: !1,
        tier: f
      };
      eu().storePayload(c, a.payload);
      Qpa(b, !1, c, ku(d));
    }
  };
  Du = function Du(a, b, c) {
    var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var e = {},
      f = Math.round(d.timestamp || (0, g.T)());
    e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
    e[a] = b;
    a = Uk();
    e.context = {
      lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    d.sequenceGroup && !g.jq("web_gel_sequence_info_killswitch") && (a = e.context, b = d.sequenceGroup, b = {
      index: vqa(b),
      groupKey: b
    }, a.sequence = b, d.endOfSequence && delete Cu[d.sequenceGroup]);
    g.jq("web_tag_automated_log_events") && (e.context.automatedLogEventSource = d.automatedLogEventSource);
    (d.sendIsolatedPayload ? Ppa : Rpa)({
      endpoint: "log_event",
      payload: e,
      cttAuthInfo: d.cttAuthInfo,
      dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
    }, c);
  };
  g.Fu = function (a, b) {
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var d = g.Eu;
    g.Pp("ytLoggingEventsDefaultDisabled", !1) && g.Eu === g.Eu && (d = null);
    Du(a, b, d, c);
  };
  var $qa = 0;
  var ara = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];
  Qp = function Qp(a) {
    var b = Np.EXPERIMENT_FLAGS;
    return b ? b[a] : void 0;
  };
  var bra = [];
  wqa = function wqa() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    mu(void 0, a);
  };
  Yqa = function Yqa(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "ERROR";
    try {
      Xqa.add(a.message);
    } catch (p) {}
    Tqa++;
    if (b === "ERROR") {
      Vu.publish("handleError", a);
      if (g.jq("record_app_crashed_web") && Zqa === 0 && a.sampleWeight === 1) {
        Zqa++;
        var c = {
          appCrashType: "APP_CRASH_TYPE_BREAKPAD"
        };
        g.jq("report_client_error_with_app_crash_ks") || (c.systemHealth = {
          crashData: {
            clientError: {
              logMessage: {
                message: a.message
              }
            }
          }
        });
        g.Fu("appCrashed", c);
      }
      $qa++;
    } else b === "WARNING" && Vu.publish("handleWarning", a);
    if (g.jq("kevlar_gel_error_routing")) {
      c = {};
      b: {
        for (var _i8 = 0, _ara = ara; _i8 < _ara.length; _i8++) {
          d = _ara[_i8];
          if (g.Kq(d.toLowerCase())) {
            var d = !0;
            break b;
          }
        }
        d = !1;
      }
      if (d) c = void 0;else {
        var _a$params;
        var e = {
          stackTrace: a.stack
        };
        a.fileName && (e.filename = a.fileName);
        d = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
        d.length !== 0 && (d.length !== 1 || isNaN(Number(d[0])) ? d.length !== 2 || isNaN(Number(d[0])) || isNaN(Number(d[1])) || (e.lineNumber = Number(d[0]), e.columnNumber = Number(d[1])) : e.lineNumber = Number(d[0]));
        d = {
          level: "ERROR_LEVEL_UNKNOWN",
          message: a.message,
          errorClassName: a.name,
          sampleWeight: a.sampleWeight
        };
        b === "ERROR" ? d.level = "ERROR_LEVEL_ERROR" : b === "WARNING" && (d.level = "ERROR_LEVEL_WARNNING");
        e = {
          isObfuscated: !0,
          browserStackInfo: e
        };
        c.pageUrl = window.location.href;
        c.kvPairs = [];
        g.Pp("FEXP_EXPERIMENTS") && (c.experimentIds = g.Pp("FEXP_EXPERIMENTS"));
        var f = g.Pp("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
        if (!Qp("web_disable_gel_stp_ecatcher_killswitch") && f) for (var _i9 = 0, _Object$keys6 = Object.keys(f); _i9 < _Object$keys6.length; _i9++) {
          var h = _Object$keys6[_i9];
          c.kvPairs.push({
            key: h,
            value: String(f[h])
          });
        }
        if (h = a.params) for (var _i0 = 0, _Object$keys7 = Object.keys(h); _i0 < _Object$keys7.length; _i0++) {
          var k = _Object$keys7[_i0];
          c.kvPairs.push({
            key: "client.".concat(k),
            value: String(h[k])
          });
        }
        if (k = (_a$params = a.params) === null || _a$params === void 0 ? void 0 : _a$params.sessionReplayId) c.sessionReplayId = String(k);
        k = g.Pp("SERVER_NAME");
        h = g.Pp("SERVER_VERSION");
        k && h && (c.kvPairs.push({
          key: "server.name",
          value: k
        }), c.kvPairs.push({
          key: "server.version",
          value: h
        }));
        (k = g.Pp("PLAYER_CLIENT_VERSION")) && c.kvPairs.push({
          key: "client.player.version",
          value: k
        });
        c = {
          errorMetadata: c,
          stackTrace: e,
          logMessage: d
        };
      }
      if (c && (g.Fu("clientError", c), b === "ERROR" || g.jq("errors_flush_gel_always_killswitch"))) a: {
        if (g.jq("web_fp_via_jspb")) {
          c = bra;
          bra = [];
          if (c) {
            var _iterator14 = _createForOfIteratorHelper(c),
              _step14;
            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var l = _step14.value;
                Du(l.payloadName, l.payload, g.Eu, l.options);
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
          }
          wqa(!0);
          if (!g.jq("web_fp_via_jspb_and_json")) break a;
        }
        wqa();
      }
    }
    if (!g.jq("suppress_error_204_logging")) {
      l = a.params || {};
      b = {
        urlParams: {
          a: "logerror",
          t: "jserror",
          type: a.name,
          msg: a.message.substr(0, 250),
          line: a.lineNumber,
          level: b,
          "client.name": l.name
        },
        postParams: {
          url: g.Pp("PAGE_NAME", window.location.href),
          file: a.fileName
        },
        method: "POST"
      };
      l.version && (b["client.version"] = l.version);
      if (b.postParams) {
        a.stack && (b.postParams.stack = a.stack);
        for (var _i1 = 0, _Object$keys8 = Object.keys(l); _i1 < _Object$keys8.length; _i1++) {
          var p = _Object$keys8[_i1];
          b.postParams["client.".concat(p)] = l[p];
        }
        if (a = g.Pp("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")) for (var _i10 = 0, _Object$keys9 = Object.keys(a); _i10 < _Object$keys9.length; _i10++) {
          var m = _Object$keys9[_i10];
          b.postParams[m] = a[m];
        }
        (m = g.Pp("LAVA_VERSION")) && (b.postParams["lava.version"] = m);
        m = g.Pp("SERVER_NAME");
        a = g.Pp("SERVER_VERSION");
        m && a && (b.postParams["server.name"] = m, b.postParams["server.version"] = a);
        (m = g.Pp("PLAYER_CLIENT_VERSION")) && (b.postParams["client.player.version"] = m);
      }
      g.oq("".concat(g.Pp("ECATCHER_REPORT_HOST", ""), "/error_204"), b);
    }
  };
  Sqa = function Sqa(a, b) {
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "ERROR";
    if (a) {
      var _a$Q2;
      a.hasOwnProperty("level") && a.level && (c = a.level);
      if (g.jq("wiz_enable_metadata_extraction_killswitch")) {
        var _d3;
        var d = b;
        if (!((_d3 = d) !== null && _d3 !== void 0 && _d3.componentStack)) {
          var _a$Q;
          var e = (_a$Q = a.Q1) === null || _a$Q === void 0 ? void 0 : _a$Q.n4;
          e && (d || (d = {}), d.componentStack = e);
        }
        b = d || b;
      } else b = Rqa(a, b), d = (_a$Q2 = a.Q1) === null || _a$Q2 === void 0 ? void 0 : _a$Q2.ny, d !== void 0 && c !== "IGNORED" && (c = d >= 3 ? "ERROR" : "WARNING");
      if (g.jq("console_log_js_exceptions") || ["test", "dev", "autopush", "staging"].includes(g.Pp("SERVER_VERSION"))) d = [], d.push("Name: ".concat(a.name)), d.push("Message: ".concat(a.message)), a.hasOwnProperty("params") && d.push("Error Params: ".concat(JSON.stringify(a.params))), a.hasOwnProperty("args") && d.push("Error args: ".concat(JSON.stringify(a.args, null, 2))), d.push("File name: ".concat(a.fileName)), d.push("Stacktrace: ".concat(a.stack)), window.console.log(d.join("\n"), a);
      if (!(Tqa >= 5)) {
        d = [];
        for (var _i11 = 0, _Uqa = Uqa; _i11 < _Uqa.length; _i11++) {
          f = _Uqa[_i11];
          try {
            f() && d.push(f());
          } catch (z) {}
        }
        var f = d;
        f = [].concat(Vqa, _toConsumableArray(f));
        var h = Caa(a);
        d = h.message || "Unknown Error";
        e = h.name || "UnknownError";
        var k = h.stack || a.Zma || "Not available";
        if (k.startsWith("".concat(e, ": ").concat(d))) {
          var l = k.split("\n");
          l.shift();
          k = l.join("\n");
        }
        l = h.lineNumber || "Not available";
        h = h.fileName || "Not available";
        var v = 0;
        if (a.hasOwnProperty("args") && a.args && a.args.length) for (var m = 0; m < a.args.length && !(v = Qqa(a.args[m], "params.".concat(m), b, v), v >= 500); m++);else if (a.hasOwnProperty("params") && a.params) {
          var z = a.params;
          if (_typeof(a.params) === "object") for (m in z) {
            if (!z[m]) continue;
            var H = "params.".concat(m),
              M = Su(z[m]);
            b[H] = M;
            v += H.length + M.length;
            if (v > 500) break;
          } else b.params = Su(z);
        }
        if (f.length) for (m = 0; m < f.length && !(v = Qqa(f[m], "params.context.".concat(m), b, v), v >= 500); m++);
        navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
        m = {
          message: d,
          name: e,
          lineNumber: l,
          fileName: h,
          stack: k,
          params: b,
          sampleWeight: 1
        };
        b = Number(a.columnNumber);
        isNaN(b) || (m.lineNumber = "".concat(m.lineNumber, ":").concat(b));
        if (a.level === "IGNORED") var p = 0;else a: {
          a = Pu();
          var _iterator15 = _createForOfIteratorHelper(a.Tt),
            _step15;
          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              p = _step15.value;
              if (m.message && m.message.match(p.Er)) {
                p = p.weight;
                break a;
              }
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
          var _iterator16 = _createForOfIteratorHelper(a.Us),
            _step16;
          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var r = _step16.value;
              if (r.callback(m)) {
                p = r.weight;
                break a;
              }
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }
          p = 1;
        }
        m.sampleWeight = p;
        p = m;
        for (var _i12 = 0, _Wqa = Wqa; _i12 < _Wqa.length; _i12++) {
          var u = _Wqa[_i12];
          if (!u.lN[p.name]) continue;
          r = u.lN[p.name];
          var _iterator17 = _createForOfIteratorHelper(r),
            _step17;
          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var _z2 = _step17.value;
              r = p.message.match(_z2.El);
              if (!r) continue;
              p.params["params.error.original"] = r[0];
              a = _z2.groups;
              m = {};
              for (b = 0; b < a.length; b++) m[a[b]] = r[b + 1], p.params["params.error.".concat(a[b])] = r[b + 1];
              p.message = u.KS(m);
              break;
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }
        }
        p.params || (p.params = {});
        u = Pu();
        p.params["params.errorServiceSignature"] = "msg=".concat(u.Tt.length, "&cb=").concat(u.Us.length);
        p.params["params.serviceWorker"] = "false";
        g.pa.document && g.pa.document.querySelectorAll && (p.params["params.fscripts"] = String(document.querySelectorAll("script:not([nonce])").length));
        window.yterr && typeof window.yterr === "function" && window.yterr(p);
        p.sampleWeight === 0 || Xqa.has(p.message) || Yqa(p, c);
      }
    }
  };
  g.Tu = function (a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "ERROR";
    var c = {};
    c.name = g.Pp("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = g.Pp("INNERTUBE_CONTEXT_CLIENT_VERSION");
    Sqa(a, c, b);
  };
  g.Wk = function (a) {
    g.Tu(a, "WARNING");
  };
  fA = function fA(a, b) {
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    !a && c && g.Wk(Error("Player URL validator detects invalid url. ".concat(d, ": ").concat(b)));
    return a;
  };
  hA = function hA(a) {
    return fA(gA(a, Rwa, Swa), a, !1, "Trusted Stream URL");
  };
  mn = function mn(a, b) {
    this.A = this.j = null;
    this.B = a || null;
    this.C = !!b;
  };
  g.G = mn.prototype;
  fj = function fj(a, b) {
    if (a) {
      a = a.split("&");
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="),
          _e2 = void 0,
          f = null;
        d >= 0 ? (_e2 = a[c].substring(0, d), f = a[c].substring(d + 1)) : _e2 = a[c];
        b(_e2, f ? jd(f) : "");
      }
    }
  };
  qn = function qn(a) {
    a.j || (a.j = new Map(), a.A = 0, a.B && fj(a.B, function (b, c) {
      a.add(jd(b), c);
    }));
  };
  rn = function rn(a, b) {
    b = String(b);
    a.C && (b = b.toLowerCase());
    return b;
  };
  g.G.add = function (a, b) {
    qn(this);
    this.B = null;
    a = rn(this, a);
    var c = this.j.get(a);
    c || this.j.set(a, c = []);
    c.push(b);
    this.A = this.A + 1;
    return this;
  };
  g.G.remove = function (a) {
    qn(this);
    a = rn(this, a);
    return this.j.has(a) ? (this.B = null, this.A = this.A - this.j.get(a).length, this.j["delete"](a)) : !1;
  };
  g.G.clear = function () {
    this.j = this.B = null;
    this.A = 0;
  };
  g.G.isEmpty = function () {
    qn(this);
    return this.A == 0;
  };
  g.G.forEach = function (a, b) {
    qn(this);
    this.j.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  g.G.Yq = function () {
    qn(this);
    var a = Array.from(this.j.values()),
      b = Array.from(this.j.keys()),
      c = [];
    for (var d = 0; d < b.length; d++) {
      var _e3 = a[d];
      for (var f = 0; f < _e3.length; f++) c.push(b[d]);
    }
    return c;
  };
  Bja = function Bja(a, b) {
    qn(a);
    b = rn(a, b);
    return a.j.has(b);
  };
  g.G.mo = function (a) {
    qn(this);
    var b = [];
    if (typeof a === "string") Bja(this, a) && (b = b.concat(this.j.get(rn(this, a))));else {
      a = Array.from(this.j.values());
      for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
    }
    return b;
  };
  g.G.set = function (a, b) {
    qn(this);
    this.B = null;
    a = rn(this, a);
    Bja(this, a) && (this.A = this.A - this.j.get(a).length);
    this.j.set(a, [b]);
    this.A = this.A + 1;
    return this;
  };
  g.G.get = function (a, b) {
    if (!a) return b;
    a = this.mo(a);
    return a.length > 0 ? String(a[0]) : b;
  };
  g.G.toString = function () {
    if (this.B) return this.B;
    if (!this.j) return "";
    var a = [],
      b = Array.from(this.j.keys());
    for (var d = 0; d < b.length; d++) {
      var c = b[d];
      var _e4 = g.id(c);
      c = this.mo(c);
      for (var f = 0; f < c.length; f++) {
        var h = _e4;
        c[f] !== "" && (h += "=" + g.id(c[f]));
        a.push(h);
      }
    }
    return this.B = a.join("&");
  };
  g.G.clone = function () {
    var a = new mn();
    a.B = this.B;
    this.j && (a.j = new Map(this.j), a.A = this.A);
    return a;
  };
  g.Lb = function (a) {
    var b = [],
      c = 0;
    for (var d in a) b[c++] = d;
    return b;
  };
  wja = function wja(a) {
    if (a.Yq && typeof a.Yq == "function") return a.Yq();
    if (!a.mo || typeof a.mo != "function") {
      if (typeof Map !== "undefined" && a instanceof Map) return Array.from(a.keys());
      if (!(typeof Set !== "undefined" && a instanceof Set)) {
        if (g.xa(a) || typeof a === "string") {
          var _b2 = [];
          a = a.length;
          for (var c = 0; c < a; c++) _b2.push(c);
          return _b2;
        }
        return g.Lb(a);
      }
    }
  };
  Kb = function Kb(a) {
    var b = [],
      c = 0;
    for (var d in a) b[c++] = a[d];
    return b;
  };
  vja = function vja(a) {
    if (a.mo && typeof a.mo == "function") return a.mo();
    if (typeof Map !== "undefined" && a instanceof Map || typeof Set !== "undefined" && a instanceof Set) return Array.from(a.values());
    if (typeof a === "string") return a.split("");
    if (g.xa(a)) {
      var _b3 = [],
        c = a.length;
      for (var d = 0; d < c; d++) _b3.push(a[d]);
      return _b3;
    }
    return Kb(a);
  };
  xja = function xja(a, b, c) {
    if (a.forEach && typeof a.forEach == "function") a.forEach(b, c);else if (g.xa(a) || typeof a === "string") Array.prototype.forEach.call(a, b, c);else {
      var d = wja(a),
        _e5 = vja(a),
        f = _e5.length;
      for (var h = 0; h < f; h++) b.call(c, _e5[h], d && d[h], a);
    }
  };
  g.G.extend = function (a) {
    for (var _b4 = 0; _b4 < arguments.length; _b4++) xja(arguments[_b4], function (c, d) {
      this.add(d, c);
    }, this);
  };
  ln = function ln(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
  };
  g.gn = function (a, b, c) {
    a.D = c ? ln(b, !0) : b;
    a.D && (a.D = a.D.replace(/:$/, ""));
  };
  g.hn = function (a, b, c) {
    a.j = c ? ln(b, !0) : b;
  };
  g.jn = function (a, b) {
    if (b) {
      b = Number(b);
      if (isNaN(b) || b < 0) throw Error("Bad port number " + b);
      a.B = b;
    } else a.B = null;
  };
  var zja = /[#\?@]/g;
  Aja = function Aja(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
  };
  nn = function nn(a, b, c) {
    return typeof a === "string" ? (a = encodeURI(a).replace(b, Aja), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  };
  g.ob = function (a) {
    var b = a.length;
    if (b > 0) {
      var c = Array(b);
      for (var d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  };
  g.Cja = function (a, b, c) {
    a.remove(b);
    c.length > 0 && (a.B = null, a.j.set(rn(a, b), g.ob(c)), a.A = a.A + c.length);
  };
  yja = function yja(a, b) {
    b && !a.C && (qn(a), a.B = null, a.j.forEach(function (c, d) {
      var e = d.toLowerCase();
      d != e && (this.remove(d), g.Cja(this, e, c));
    }, a));
    a.C = b;
  };
  kn = function kn(a, b, c) {
    b instanceof mn ? (a.C = b, yja(a.C, a.L)) : (c || (b = nn(b, zja)), a.C = new mn(b, a.L));
  };
  g.fn = function (a) {
    this.j = this.U = this.D = "";
    this.B = null;
    this.K = this.A = "";
    this.L = !1;
    var b;
    a instanceof g.fn ? (this.L = a.L, g.gn(this, a.D), this.U = a.U, g.hn(this, a.j), g.jn(this, a.B), this.A = a.A, kn(this, a.C.clone()), this.K = a.K) : a && (b = g.$i(String(a))) ? (this.L = !1, g.gn(this, b[1] || "", !0), this.U = ln(b[2] || ""), g.hn(this, b[3] || "", !0), g.jn(this, b[4]), this.A = ln(b[5] || "", !0), kn(this, b[6] || "", !0), this.K = ln(b[7] || "")) : (this.L = !1, this.C = new mn(null, this.L));
  };
  g.pn = function (a) {
    return a instanceof g.fn ? a.clone() : new g.fn(a);
  };
  _qg = function qg(a, b, c, d) {
    var e = b ^ a;
    if ((a ^ 50) < 23 && (a >> 2 & 15) >= 5 && c[w[6]] != 0) {
      var f = xH(40, 4601, d, c);
      d = f[0];
    }
    if ((a - 2 | 42) >= a && (a + 5 ^ 30) < a) a: {
      f = c[w[e ^ 7152]](w[e ^ 7143]);
      var h = [f, cma, e ^ 940963114, e ^ 2092643806, e ^ 924304816, Eja, e ^ 1693760432, e ^ 1738657980, -(e ^ 417137510), -(e ^ 1824764024), f, e ^ 229962325, e ^ 1152510674, e ^ 1278068145, -(e ^ 1099399754), -(e ^ 554533535), WTa, e ^ 744098410, w[e ^ 7103], uqa, e ^ 1281078718, -(e ^ 394866349), e ^ 1290410865, x4a, e ^ 878937516, e ^ 626627240, iHa, -(e ^ 2143048721), e ^ 1903605124, -(e ^ 906330187), e ^ 1437914990, e ^ 470304891, Lma, Paa, RGa, -(e ^ 699900030), e ^ 385578339, -(e ^ 343235672), -(e ^ 746742345), -(e ^ 11435414), -(e ^ 472811727), null, -(e ^ 1533054478), rba, e ^ 764913019, e ^ 434896751, -(e ^ 1774280155), null, -(e ^ 1038064592), -(e ^ 676380872), e ^ 812968149, -(e ^ 104704285), -(e ^ 2089528327), R4a, n3a, e ^ 2069663712, -(e ^ 1408193066), w[e ^ 7101], -(e ^ 1261050915), e ^ 472659723, -(e ^ 1465297544), -(e ^ 1241363306), f, e ^ 1275249458, -(e ^ 2056108383), -(e ^ 337967615), e ^ 805893057, e ^ 877370604, XPa, -(e ^ 1093080392), e ^ 1062115011, Maa, w[e ^ 7107], w[e ^ 7087], -(e ^ 1933754162), -(e ^ 11435414), gSa, $la, null, e ^ 350313335, -(e ^ 1890263690), e ^ 268391391, tja, -(e ^ 867829999), -(e ^ 770586751), -(e ^ 544387384), -(e ^ 2125059261), -(e ^ 1351254152)];
      h[e ^ 7111] = h;
      h[e ^ 7105] = h;
      h[e ^ 7072] = h;
      if (_typeof(S4a) === w[e ^ 7082]) {
        var k = c;
        break a;
      }
      try {
        h = _Bh(e ^ 7134, e ^ 2624, h);
      } catch (m) {
        k = w[e ^ 7134] + c;
        break a;
      }
      k = f[w[e ^ 7109]](w[e ^ 7143]);
    }
    a + 2 >> 3 >= 2 && (a ^ 26) < 14 && (_Bh(e ^ 4209, e ^ 1084, c), (f = c[w[3]][w[e ^ 4139]] || null) && (f = Ch(e ^ 4128, e ^ 12456, f, c)), k = []);
    if ((a & 110) == a) {
      if (!(hA(c[w[e ^ 4925]]) || c[w[e ^ 4925]][w[e ^ 4896]](w[e ^ 4883]) || c[w[e ^ 4925]][w[e ^ 4896]](w[e ^ 4897]) || c[w[e ^ 4925]][w[e ^ 4896]](w[e ^ 4876]))) throw new g.Jr(w[e ^ 4881], c[w[e ^ 4925]]);
      f = g.pn(c[w[e ^ 4925]]);
      c[w[e ^ 4909]] = f[w[e ^ 4991]];
      c[w[2]] = f[w[3]] + (f[w[2]] != null ? ":".concat(f[w[2]]) : w[e ^ 4924]);
      h = f[w[e ^ 4925]];
      h[w[e ^ 4896]](w[e ^ 4895]) ? (c[w[e ^ 4914]] = w[e ^ 4895], h = h[w[e ^ 4886]](e ^ 4923)) : h[w[e ^ 4896]](w[e ^ 4878]) ? (c[w[e ^ 4914]] = w[e ^ 4878], h = h[w[e ^ 4886]](e ^ 4920)) : h[w[e ^ 4896]](w[e ^ 4882]) ? (h = xH(1, e ^ 3640, h, c), h = h[0]) : (c[w[e ^ 4914]] = h, h = w[e ^ 4924]);
      var l = c[w[3]];
      c[w[3]] = Ch(e ^ 4893, e ^ 7527, h);
      Object[w[e ^ 4865]](c[w[3]], tn(4, e ^ 7448, f[w[e ^ 4921]][w[0]]()));
      Object[w[e ^ 4865]](c[w[3]], l);
      c[w[3]][w[e ^ 4870]] === w[e ^ 4984] && (delete c[w[3]][w[e ^ 4870]], c[w[e ^ 4914]] += w[e ^ 4987]);
      c[w[e ^ 4925]] = w[e ^ 4924];
      c[w[e ^ 4902]] = w[e ^ 4924];
      c[w[e ^ 4921]] && (f = _qg(e ^ 4910, e ^ 793, c));
      k = [];
    }
    return k;
  };
  var Dn = {
    JE: function JE(a, b) {
      var c = a[0];
      a[0] = a[b % a[w[6]]];
      a[b % a[w[6]]] = c;
    },
    es: function es(a, b) {
      a[w[46]](0, b);
    },
    uQ: function uQ(a) {
      a[w[14]]();
    }
  };
  En = function En(a, b, c, d) {
    var e = b ^ a;
    if (a - 6 >= -38 && (a + 2 & 8) < 3) {
      c[e ^ 2841] == 1 && ((((0, c[e ^ 2839])(c[e ^ 2860], c[e ^ 2833]), c[e ^ 2852])(c[e ^ 2906], c[e ^ 2845]), c[e ^ 2870])((0, c[e ^ 2839])(c[1], c[e ^ 2877]), c[e ^ 2891], c[e ^ 2817], (0, c[4])(), c[e ^ 2820]), []) || ((((0, c[e ^ 2832])(c[e ^ 2842], c[e ^ 2908]), c[e ^ 2838])(c[e ^ 2844], c[e ^ 2906]), c[e ^ 2887])(c[e ^ 2848], c[e ^ 2859]), c[e ^ 2853])(c[e ^ 2849], c[e ^ 2873]);
      c[e ^ 2862] == 2 ? (0, c[e ^ 2845])((0, c[e ^ 2835])(c[e ^ 2859]), c[e ^ 2885], c[e ^ 2817], c[e ^ 2849]) : (0, c[e ^ 2845])((0, c[e ^ 2887])(c[e ^ 2878], c[e ^ 2880]), c[e ^ 2885], c[e ^ 2884], c[e ^ 2835]);
      c[e ^ 2878] > 4 ? ((0, c[e ^ 2834])(c[new d(w[e ^ 2905]) / (e ^ 2276)], (0, c[e ^ 2894])(), c[e ^ 2875]), c[e ^ 2872])(c[e ^ 2907], (0, c[e ^ 2907])(c[e ^ 2820], c[e ^ 2856]), (0, c[e ^ 2885])(c[e ^ 2827], c[e ^ 2859]), (0, c[e ^ 2886])(c[e ^ 2870], c[e ^ 2859]), c[e ^ 2864], c[e ^ 2837]) : ((0, c[e ^ 2836])((0, c[e ^ 2860])(c[e ^ 2835]), c[e ^ 2845], (0, c[e ^ 2853])(c[e ^ 2849], c[e ^ 2882]), c[e ^ 2853], c[e ^ 2835], c[e ^ 2893]), ((0, c[e ^ 2886])(c[e ^ 2910], c[e ^ 2820]), c[e ^ 2907])(c[e ^ 2820], c[e ^ 2819]));
      c[e ^ 2870] <= 5 && (0, c[e ^ 2836])(((0, c[e ^ 2845])((0, c[e ^ 2887])(c[e ^ 2869], c[e ^ 2880]), c[e ^ 2853], c[e ^ 2859], c[e ^ 2854]), c[e ^ 2886])(c[e ^ 2858], c[e ^ 2820]), c[e ^ 2845], (0, c[e ^ 2886])(c[e ^ 2895], c[e ^ 2849]), c[4], c[e ^ 2892], c[6]);
      var f = [];
    }
    a + 5 >= 12 && a + 8 < 20 && (f = c[w[8]] ? c[w[8]][w[21]](w[38]) : c[w[24]] === w[38]);
    return f;
  };
  _Bh = function Bh(a, b, c) {
    var d = b ^ a;
    if (!((a ^ 70) >> 3) && c[w[8]]) var e = _qg(2, 4919, c);
    if ((a & 37) == a) {
      e = c[w[d ^ 208]](w[d ^ 199]);
      Dn[w[1]](e, d ^ 254);
      Dn[w[d ^ 235]](e, 2);
      Dn[w[d ^ 255]](e, d ^ 211);
      Dn[w[d ^ 255]](e, d ^ 235);
      Dn[w[d ^ 235]](e, 3);
      Dn[w[1]](e, d ^ 135);
      Dn[w[d ^ 235]](e, 2);
      var f = e[w[d ^ 229]](w[d ^ 199]);
    }
    if ((a + 7 & 29) >= a && (a - 4 ^ 10) < a) {
      _Bh(d ^ 4891, d ^ 1878, c);
      e = c[w[d ^ 4931]] + (c[w[d ^ 4931]] ? w[d ^ 4961] : w[d ^ 4891]) + c[w[2]] + c[w[d ^ 4956]];
      if (an(d ^ 4941, d ^ 6439, c)) {
        var h = [];
        g.Cb(c[w[3]], function (k, l) {
          k !== null && h[w[d ^ 4939]]("".concat(l, "=").concat(k));
        });
        e += "?".concat(h[w[d ^ 4976]](w[5]));
      }
      f = e;
    }
    (a << 1 & 14) == 2 && (f = encodeURIComponent(c));
    if ((a | 48) == a) {
      try {
        c[d ^ 4532] != (d ^ 4500) ? ((0, c[d ^ 4493])((0, c[d ^ 4562])(c[d ^ 4531], c[d ^ 4529]), c[d ^ 4514], c[d ^ 4495], c[d ^ 4487]) % (0, c[d ^ 4514])(c[d ^ 4516], c[d ^ 4481]), (0, c[d ^ 4538])((0, c[d ^ 4538])((0, c[d ^ 4514])(c[d ^ 4485], c[d ^ 4522]), c[4], c[d ^ 4490], c[d ^ 4495]), c[d ^ 4525], c[d ^ 4561]), (0, c[5])(c[d ^ 4517], c[d ^ 4495])) : ((0, c[d ^ 4538])((0, c[d ^ 4538])((0, c[d ^ 4538])((0, c[d ^ 4527])(c[d ^ 4495], (0, c[d ^ 4501])(), c[d ^ 4564]), c[d ^ 4492], c[d ^ 4516], c[d ^ 4560]), c[d ^ 4492], c[d ^ 4485], c[d ^ 4532]), c[d ^ 4514], c[d ^ 4516], c[d ^ 4539]), c[d ^ 4488])((0, c[6])(c[d ^ 4558], c[d ^ 4574]), c[d ^ 4514], (0, c[d ^ 4527])(c[d ^ 4561], (0, c[d ^ 4501])(), c[d ^ 4564]), c[d ^ 4516], c[d ^ 4535]), c[d ^ 4563] !== -(d ^ 4502) && (c[d ^ 4540] === -2 || (((0, c[d ^ 4525])(c[d ^ 4516]), c[d ^ 4559])(c[d ^ 4572], c[d ^ 4502]), 0)) && (0, c[d ^ 4525])((0, c[d ^ 4559])(c[d ^ 4543], c[d ^ 4502]), c[d ^ 4485], c[d ^ 4568], c[d ^ 4540]);
      } catch (h) {
        ((0, c[d ^ 4536])(c[d ^ 4502], (0, c[d ^ 4520])(), c[d ^ 4499]), c[d ^ 4557])(c[d ^ 4569], c[d ^ 4489]);
      }
      try {
        c[4] > (d ^ 4500) && (c[d ^ 4540] > -(d ^ 4500) && (((0, c[d ^ 4557])(c[d ^ 4567], c[d ^ 4502]), c[d ^ 4485])(c[d ^ 4568], c[d ^ 4565]), 1) || (0, c[d ^ 4525])((0, c[d ^ 4557])(c[d ^ 4570], c[d ^ 4483]), c[d ^ 4536], c[d ^ 4514], (0, c[d ^ 4495])(), c[d ^ 4499]));
      } catch (h) {
        (0, c[d ^ 4539])(c[d ^ 4489]);
      }
      try {
        c[d ^ 4540] !== new Date(w[d ^ 4514]) / (d ^ 4726) && (((0, c[new Date(w[d ^ 4484]) / (d ^ 4726)])(c[d ^ 4534], c[d ^ 4502]), c[d ^ 4538])(c[d ^ 4483]), c[5])(c[d ^ 4537], c[d ^ 4505]);
      } catch (h) {
        (0, c[d ^ 4533])(c[d ^ 4535], c[d ^ 4501]);
      } finally {
        c[d ^ 4480] >= -3 && (0, c[d ^ 4543])(c[0]);
      }
      try {
        (c[d ^ 4488] === -(d ^ 4500) || ((0, c[d ^ 4565])(c[d ^ 4499], c[d ^ 4560]), NaN)) && (0, c[d ^ 4534])(c[d ^ 4527], c[d ^ 4514]);
      } catch (h) {
        (0, c[d ^ 4534])(c[d ^ 4537], c[d ^ 4539]);
      } finally {
        e = En(1, d ^ 6803, c, Date);
      }
      try {
        c[d ^ 4559] == new Date(w[d ^ 4572]) / (d ^ 4726) && ((0, c[new Date(w[d ^ 4573]) / (d ^ 4726)])((((0, c[d ^ 4503])((0, c[d ^ 4565])(c[d ^ 4493], c[d ^ 4552]), c[5], (0, c[d ^ 4490])(c[d ^ 4485]), (0, c[d ^ 4565])(c[d ^ 4485], c[d ^ 4524]), (0, c[d ^ 4513])(c[d ^ 4496], c[d ^ 4485]), c[d ^ 4515], c[d ^ 4573], c[d ^ 4485]), c[d ^ 4515])(c[d ^ 4530], c[d ^ 4493]), c[d ^ 4490])(c[d ^ 4493]), c[d ^ 4513], c[d ^ 4558], c[d ^ 4485]), -2) || (0, c[d ^ 4534])(c[d ^ 4492], (0, c[d ^ 4512])(c[d ^ 4575], c[d ^ 4485]), (0, c[d ^ 4519])(c[4], (0, c[d ^ 4558])(c[d ^ 4520], c[d ^ 4530]), (0, c[d ^ 4558])(c[d ^ 4567], c[d ^ 4530]), (0, c[d ^ 4543])(c[d ^ 4538]), c[d ^ 4538], c[d ^ 4500]), ((0, c[d ^ 4560])(c[d ^ 4540], c[d ^ 4499]), c[d ^ 4561])(c[d ^ 4517], c[d ^ 4499]), c[d ^ 4538], (0, c[d ^ 4569])(), c[d ^ 4514]);
      } catch (h) {
        (0, c[d ^ 4561])(c[3], c[d ^ 4538]);
      }
      f = [];
    }
    return f;
  };
  g.Vb = function (a) {
    var b = {};
    for (var c in a) b[c] = a[c];
    return b;
  };
  g.aj = /*#__PURE__*/function () {
    function _class0(a) {
      var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      _classCallCheck(this, _class0);
      this[w[8]] = a;
      this[w[12]] = b;
      this[w[24]] = w[9];
      this[w[7]] = w[9];
      this[w[2]] = w[9];
      this[w[3]] = {};
      this[w[19]] = w[9];
    }
    return _createClass(_class0, [{
      key: "set",
      value: function set(a, b) {
        this[w[3]][a] !== b && (this[w[3]][a] = b, this[w[19]] = w[9]);
      }
    }, {
      key: "get",
      value: function get(a) {
        _Bh(69, 5128, this);
        return this[w[3]][a] || null;
      }
    }, {
      key: "Pe",
      value: function Pe() {
        this[w[19]] || (this[w[19]] = _Bh(2, 4953, this));
        return this[w[19]];
      }
    }, {
      key: "clone",
      value: function clone() {
        var a = new g.aj(this[w[8]], this[w[12]]);
        a[w[24]] = this[w[24]];
        a[w[7]] = this[w[7]];
        a[w[2]] = this[w[2]];
        a[w[3]] = g.Vb(this[w[3]]);
        a[w[19]] = this[w[19]];
        return a;
      }
    }]);
  }();
  ZE = function ZE(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    a = new g.aj(a, !0);
    a.set("alr", "yes");
    c && (c = _Bh(4, 202, _Fm(15, 909, c)), a[w[4]](b, _Bh(25, 1798, c)));
    return a;
  };
  //#endregion --- end [nsigFunction] ---

  function nsigFunction(a, b, c) {
    return ZE(a, b, c);
  }
  var rawValues = {
    "nsigFunction": "ZE",
    "signatureTimestampVar": "20753"
  };
  return {
    nsigFunction: nsigFunction,
    rawValues: rawValues
  };
}({});