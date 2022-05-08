var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var Mf = Object.create;
var Li = Object.defineProperty;
var Du = Object.getOwnPropertyDescriptor;
var _f = Object.getOwnPropertyNames;
var Af = Object.getPrototypeOf;
var Pf = Object.prototype.hasOwnProperty;
var If = /* @__PURE__ */ __name((r) => Li(r, "__esModule", { value: true }), "If");
var u = /* @__PURE__ */ __name((r, e) => Li(r, "name", { value: e, configurable: true }), "u");
var ku = /* @__PURE__ */ __name((r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), "ku");
var zf = /* @__PURE__ */ __name((r, e, t, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let l of _f(e))
      !Pf.call(r, l) && (t || l !== "default") && Li(r, l, { get: () => e[l], enumerable: !(i = Du(e, l)) || i.enumerable });
  return r;
}, "zf");
var Jo = /* @__PURE__ */ __name((r, e) => zf(If(Li(r != null ? Mf(Af(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r), "Jo");
var D = /* @__PURE__ */ __name((r, e, t, i) => {
  for (var l = i > 1 ? void 0 : i ? Du(e, t) : e, c = r.length - 1, d; c >= 0; c--)
    (d = r[c]) && (l = (i ? d(e, t, l) : d(l)) || l);
  return i && l && Li(e, t, l), l;
}, "D");
var Ru = /* @__PURE__ */ __name((r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
}, "Ru");
var Ko = /* @__PURE__ */ __name((r, e, t) => (Ru(r, e, "read from private field"), t ? t.call(r) : e.get(r)), "Ko");
var Qo = /* @__PURE__ */ __name((r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
}, "Qo");
var ea = /* @__PURE__ */ __name((r, e, t, i) => (Ru(r, e, "write to private field"), i ? i.call(r, t) : e.set(r, t), t), "ea");
var Gu = ku((ys, Nu) => {
  (function(r) {
    "use strict";
    var e = 2e3, t = { s: 1, n: 0, d: 1 };
    function i(S) {
      function M() {
        var I = Error.apply(this, arguments);
        I.name = this.name = S, this.stack = I.stack, this.message = I.message;
      }
      u(M, "errorConstructor");
      function P() {
      }
      return u(P, "IntermediateInheritor"), P.prototype = Error.prototype, M.prototype = new P(), M;
    }
    u(i, "createError");
    var l = k.DivisionByZero = i("DivisionByZero"), c = k.InvalidParameter = i("InvalidParameter");
    function d(S, M) {
      return isNaN(S = parseInt(S, 10)) && v(), S * M;
    }
    u(d, "assign");
    function v() {
      throw new c();
    }
    u(v, "throwInvalidParam");
    function b(S) {
      for (var M = {}, P = S, I = 2, q = 4; q <= P; ) {
        for (; P % I === 0; )
          P /= I, M[I] = (M[I] || 0) + 1;
        q += 1 + 2 * I++;
      }
      return P !== S ? P > 1 && (M[P] = (M[P] || 0) + 1) : M[S] = (M[S] || 0) + 1, M;
    }
    u(b, "factorize");
    var y = u(function(S, M) {
      var P = 0, I = 1, q = 1, E = 0, B = 0, R = 0, X = 1, V = 1, H = 0, W = 1, ne = 1, oe = 1, U = 1e7, ce;
      if (S != null)
        if (M !== void 0)
          P = S, I = M, q = P * I;
        else
          switch (typeof S) {
            case "object": {
              "d" in S && "n" in S ? (P = S.n, I = S.d, "s" in S && (P *= S.s)) : 0 in S ? (P = S[0], 1 in S && (I = S[1])) : v(), q = P * I;
              break;
            }
            case "number": {
              if (S < 0 && (q = S, S = -S), S % 1 === 0)
                P = S;
              else if (S > 0) {
                for (S >= 1 && (V = Math.pow(10, Math.floor(1 + Math.log(S) / Math.LN10)), S /= V); W <= U && oe <= U; )
                  if (ce = (H + ne) / (W + oe), S === ce) {
                    W + oe <= U ? (P = H + ne, I = W + oe) : oe > W ? (P = ne, I = oe) : (P = H, I = W);
                    break;
                  } else
                    S > ce ? (H += ne, W += oe) : (ne += H, oe += W), W > U ? (P = ne, I = oe) : (P = H, I = W);
                P *= V;
              } else
                (isNaN(S) || isNaN(M)) && (I = P = NaN);
              break;
            }
            case "string":
              if (W = S.match(/\d+|./g), W === null && v(), W[H] === "-" ? (q = -1, H++) : W[H] === "+" && H++, W.length === H + 1 ? B = d(W[H++], q) : W[H + 1] === "." || W[H] === "." ? (W[H] !== "." && (E = d(W[H++], q)), H++, (H + 1 === W.length || W[H + 1] === "(" && W[H + 3] === ")" || W[H + 1] === "'" && W[H + 3] === "'") && (B = d(W[H], q), X = Math.pow(10, W[H].length), H++), (W[H] === "(" && W[H + 2] === ")" || W[H] === "'" && W[H + 2] === "'") && (R = d(W[H + 1], q), V = Math.pow(10, W[H + 1].length) - 1, H += 3)) : W[H + 1] === "/" || W[H + 1] === ":" ? (B = d(W[H], q), X = d(W[H + 2], 1), H += 3) : W[H + 3] === "/" && W[H + 1] === " " && (E = d(W[H], q), B = d(W[H + 2], q), X = d(W[H + 4], 1), H += 5), W.length <= H) {
                I = X * V, q = P = R + I * E + V * B;
                break;
              }
            default:
              v();
          }
      if (I === 0)
        throw new l();
      t.s = q < 0 ? -1 : 1, t.n = Math.abs(P), t.d = Math.abs(I);
    }, "parse");
    function w(S, M, P) {
      for (var I = 1; M > 0; S = S * S % P, M >>= 1)
        M & 1 && (I = I * S % P);
      return I;
    }
    u(w, "modpow");
    function _(S, M) {
      for (; M % 2 === 0; M /= 2)
        ;
      for (; M % 5 === 0; M /= 5)
        ;
      if (M === 1)
        return 0;
      for (var P = 10 % M, I = 1; P !== 1; I++)
        if (P = P * 10 % M, I > e)
          return 0;
      return I;
    }
    u(_, "cycleLen");
    function C(S, M, P) {
      for (var I = 1, q = w(10, P, M), E = 0; E < 300; E++) {
        if (I === q)
          return E;
        I = I * 10 % M, q = q * 10 % M;
      }
      return 0;
    }
    u(C, "cycleStart");
    function A(S, M) {
      if (!S)
        return M;
      if (!M)
        return S;
      for (; ; ) {
        if (S %= M, !S)
          return M;
        if (M %= S, !M)
          return S;
      }
    }
    u(A, "gcd");
    function k(S, M) {
      if (!(this instanceof k))
        return new k(S, M);
      y(S, M), S = A(t.d, t.n), this.s = t.s, this.n = t.n / S, this.d = t.d / S;
    }
    u(k, "Fraction"), k.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return new k(this.n, this.d);
    }, neg: function() {
      return new k(-this.s * this.n, this.d);
    }, add: function(S, M) {
      return y(S, M), new k(this.s * this.n * t.d + t.s * this.d * t.n, this.d * t.d);
    }, sub: function(S, M) {
      return y(S, M), new k(this.s * this.n * t.d - t.s * this.d * t.n, this.d * t.d);
    }, mul: function(S, M) {
      return y(S, M), new k(this.s * t.s * this.n * t.n, this.d * t.d);
    }, div: function(S, M) {
      return y(S, M), new k(this.s * t.s * this.n * t.d, this.d * t.n);
    }, clone: function() {
      return new k(this);
    }, mod: function(S, M) {
      return isNaN(this.n) || isNaN(this.d) ? new k(NaN) : S === void 0 ? new k(this.s * this.n % this.d, 1) : (y(S, M), t.n === 0 && this.d === 0 && k(0, 0), new k(this.s * (t.d * this.n) % (t.n * this.d), t.d * this.d));
    }, gcd: function(S, M) {
      return y(S, M), new k(A(t.n, this.n) * A(t.d, this.d), t.d * this.d);
    }, lcm: function(S, M) {
      return y(S, M), t.n === 0 && this.n === 0 ? new k() : new k(t.n * this.n, A(t.n, this.n) * A(t.d, this.d));
    }, ceil: function(S) {
      return S = Math.pow(10, S || 0), isNaN(this.n) || isNaN(this.d) ? new k(NaN) : new k(Math.ceil(S * this.s * this.n / this.d), S);
    }, floor: function(S) {
      return S = Math.pow(10, S || 0), isNaN(this.n) || isNaN(this.d) ? new k(NaN) : new k(Math.floor(S * this.s * this.n / this.d), S);
    }, round: function(S) {
      return S = Math.pow(10, S || 0), isNaN(this.n) || isNaN(this.d) ? new k(NaN) : new k(Math.round(S * this.s * this.n / this.d), S);
    }, inverse: function() {
      return new k(this.s * this.d, this.n);
    }, pow: function(S, M) {
      if (y(S, M), t.d === 1)
        return t.s < 0 ? new k(Math.pow(this.s * this.d, t.n), Math.pow(this.n, t.n)) : new k(Math.pow(this.s * this.n, t.n), Math.pow(this.d, t.n));
      if (this.s < 0)
        return null;
      var P = b(this.n), I = b(this.d), q = 1, E = 1;
      for (var B in P)
        if (B !== "1") {
          if (B === "0") {
            q = 0;
            break;
          }
          if (P[B] *= t.n, P[B] % t.d === 0)
            P[B] /= t.d;
          else
            return null;
          q *= Math.pow(B, P[B]);
        }
      for (var B in I)
        if (B !== "1") {
          if (I[B] *= t.n, I[B] % t.d === 0)
            I[B] /= t.d;
          else
            return null;
          E *= Math.pow(B, I[B]);
        }
      return t.s < 0 ? new k(E, q) : new k(q, E);
    }, equals: function(S, M) {
      return y(S, M), this.s * this.n * t.d === t.s * t.n * this.d;
    }, compare: function(S, M) {
      y(S, M);
      var P = this.s * this.n * t.d - t.s * t.n * this.d;
      return (0 < P) - (P < 0);
    }, simplify: function(S) {
      if (isNaN(this.n) || isNaN(this.d))
        return this;
      var M = this.abs().toContinued();
      S = S || 1e-3;
      function P(E) {
        return E.length === 1 ? new k(E[0]) : P(E.slice(1)).inverse().add(E[0]);
      }
      u(P, "rec");
      for (var I = 0; I < M.length; I++) {
        var q = P(M.slice(0, I + 1));
        if (q.sub(this.abs()).abs().valueOf() < S)
          return q.mul(this.s);
      }
      return this;
    }, divisible: function(S, M) {
      return y(S, M), !(!(t.n * this.d) || this.n * t.d % (t.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(S) {
      var M, P = "", I = this.n, q = this.d;
      return this.s < 0 && (P += "-"), q === 1 ? P += I : (S && (M = Math.floor(I / q)) > 0 && (P += M, P += " ", I %= q), P += I, P += "/", P += q), P;
    }, toLatex: function(S) {
      var M, P = "", I = this.n, q = this.d;
      return this.s < 0 && (P += "-"), q === 1 ? P += I : (S && (M = Math.floor(I / q)) > 0 && (P += M, I %= q), P += "\\frac{", P += I, P += "}{", P += q, P += "}"), P;
    }, toContinued: function() {
      var S, M = this.n, P = this.d, I = [];
      if (isNaN(M) || isNaN(P))
        return I;
      do
        I.push(Math.floor(M / P)), S = M % P, M = P, P = S;
      while (M !== 1);
      return I;
    }, toString: function(S) {
      var M, P = this.n, I = this.d;
      if (isNaN(P) || isNaN(I))
        return "NaN";
      S = S || 15;
      var q = _(P, I), E = C(P, I, q), B = this.s === -1 ? "-" : "";
      if (B += P / I | 0, P %= I, P *= 10, P && (B += "."), q) {
        for (var R = E; R--; )
          B += P / I | 0, P %= I, P *= 10;
        B += "(";
        for (var R = q; R--; )
          B += P / I | 0, P %= I, P *= 10;
        B += ")";
      } else
        for (var R = S; P && R--; )
          B += P / I | 0, P %= I, P *= 10;
      return B;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return k;
    }) : typeof ys == "object" ? (Object.defineProperty(k, "__esModule", { value: true }), k.default = k, k.Fraction = k, Nu.exports = k) : r.Fraction = k;
  })(ys);
});
var Aa = ku((Dc, Js) => {
  (function(r) {
    typeof Dc == "object" && typeof Js != "undefined" ? Js.exports = r() : typeof define == "function" && define.amd ? define([], r) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = r();
  })(function() {
    var r = {};
    Object.defineProperty(r, "__esModule", { value: true }), r.default = void 0, r.default = function(n) {
      return !(!n || !n.Window) && n instanceof n.Window;
    };
    var e = {};
    Object.defineProperty(e, "__esModule", { value: true }), e.init = l, e.getWindow = function(n) {
      return (0, r.default)(n) ? n : (n.ownerDocument || n).defaultView || i.window;
    }, e.window = e.realWindow = void 0;
    var t = void 0;
    e.realWindow = t;
    var i = void 0;
    function l(n) {
      e.realWindow = t = n;
      var o = n.document.createTextNode("");
      o.ownerDocument !== n.document && typeof n.wrap == "function" && n.wrap(o) === o && (n = n.wrap(n)), e.window = i = n;
    }
    u(l, "o"), e.window = i, typeof window != "undefined" && window && l(window);
    var c = {};
    function d(n) {
      return (d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(d, "a"), Object.defineProperty(c, "__esModule", { value: true }), c.default = void 0;
    var v = u(function(n) {
      return !!n && d(n) === "object";
    }, "s"), b = u(function(n) {
      return typeof n == "function";
    }, "l"), y = { window: function(n) {
      return n === e.window || (0, r.default)(n);
    }, docFrag: function(n) {
      return v(n) && n.nodeType === 11;
    }, object: v, func: b, number: function(n) {
      return typeof n == "number";
    }, bool: function(n) {
      return typeof n == "boolean";
    }, string: function(n) {
      return typeof n == "string";
    }, element: function(n) {
      if (!n || d(n) !== "object")
        return false;
      var o = e.getWindow(n) || e.window;
      return /object|function/.test(d(o.Element)) ? n instanceof o.Element : n.nodeType === 1 && typeof n.nodeName == "string";
    }, plainObject: function(n) {
      return v(n) && !!n.constructor && /function Object\b/.test(n.constructor.toString());
    }, array: function(n) {
      return v(n) && n.length !== void 0 && b(n.splice);
    } };
    c.default = y;
    var w = {};
    function _(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.prepared.axis;
        a === "x" ? (o.coords.cur.page.y = o.coords.start.page.y, o.coords.cur.client.y = o.coords.start.client.y, o.coords.velocity.client.y = 0, o.coords.velocity.page.y = 0) : a === "y" && (o.coords.cur.page.x = o.coords.start.page.x, o.coords.cur.client.x = o.coords.start.client.x, o.coords.velocity.client.x = 0, o.coords.velocity.page.x = 0);
      }
    }
    u(_, "f");
    function C(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "drag") {
        var s = a.prepared.axis;
        if (s === "x" || s === "y") {
          var p = s === "x" ? "y" : "x";
          o.page[p] = a.coords.start.page[p], o.client[p] = a.coords.start.client[p], o.delta[p] = 0;
        }
      }
    }
    u(C, "d"), Object.defineProperty(w, "__esModule", { value: true }), w.default = void 0;
    var A = { id: "actions/drag", install: function(n) {
      var o = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.draggable = A.draggable, o.map.drag = A, o.methodDict.drag = "draggable", s.actions.drag = A.defaults;
    }, listeners: { "interactions:before-action-move": _, "interactions:action-resume": _, "interactions:action-move": C, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.buttons, p = a.options.drag;
      if (p && p.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (s & a.options.drag.mouseButtons) != 0))
        return n.action = { name: "drag", axis: p.lockAxis === "start" ? p.startAxis : p.lockAxis }, false;
    } }, draggable: function(n) {
      return c.default.object(n) ? (this.options.drag.enabled = n.enabled !== false, this.setPerAction("drag", n), this.setOnEvents("drag", n), /^(xy|x|y|start)$/.test(n.lockAxis) && (this.options.drag.lockAxis = n.lockAxis), /^(xy|x|y)$/.test(n.startAxis) && (this.options.drag.startAxis = n.startAxis), this) : c.default.bool(n) ? (this.options.drag.enabled = n, this) : this.options.drag;
    }, beforeMove: _, move: C, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, k = A;
    w.default = k;
    var S = {};
    Object.defineProperty(S, "__esModule", { value: true }), S.default = void 0;
    var M = { init: function(n) {
      var o = n;
      M.document = o.document, M.DocumentFragment = o.DocumentFragment || P, M.SVGElement = o.SVGElement || P, M.SVGSVGElement = o.SVGSVGElement || P, M.SVGElementInstance = o.SVGElementInstance || P, M.Element = o.Element || P, M.HTMLElement = o.HTMLElement || M.Element, M.Event = o.Event, M.Touch = o.Touch || P, M.PointerEvent = o.PointerEvent || o.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function P() {
    }
    u(P, "y");
    var I = M;
    S.default = I;
    var q = {};
    Object.defineProperty(q, "__esModule", { value: true }), q.default = void 0;
    var E = { init: function(n) {
      var o = S.default.Element, a = n.navigator || {};
      E.supportsTouch = "ontouchstart" in n || c.default.func(n.DocumentTouch) && S.default.document instanceof n.DocumentTouch, E.supportsPointerEvent = a.pointerEnabled !== false && !!S.default.PointerEvent, E.isIOS = /iP(hone|od|ad)/.test(a.platform), E.isIOS7 = /iP(hone|od|ad)/.test(a.platform) && /OS 7[^\d]/.test(a.appVersion), E.isIe9 = /MSIE 9/.test(a.userAgent), E.isOperaMobile = a.appName === "Opera" && E.supportsTouch && /Presto/.test(a.userAgent), E.prefixedMatchesSelector = "matches" in o.prototype ? "matches" : "webkitMatchesSelector" in o.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o.prototype ? "oMatchesSelector" : "msMatchesSelector", E.pEventTypes = E.supportsPointerEvent ? S.default.PointerEvent === n.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, E.wheelEvent = S.default.document && "onmousewheel" in S.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, B = E;
    q.default = B;
    var R = {};
    function X(n) {
      var o = n.parentNode;
      if (c.default.docFrag(o)) {
        for (; (o = o.host) && c.default.docFrag(o); )
          ;
        return o;
      }
      return o;
    }
    u(X, "P");
    function V(n, o) {
      return e.window !== e.realWindow && (o = o.replace(/\/deep\//g, " ")), n[q.default.prefixedMatchesSelector](o);
    }
    u(V, "O"), Object.defineProperty(R, "__esModule", { value: true }), R.nodeContains = function(n, o) {
      if (n.contains)
        return n.contains(o);
      for (; o; ) {
        if (o === n)
          return true;
        o = o.parentNode;
      }
      return false;
    }, R.closest = function(n, o) {
      for (; c.default.element(n); ) {
        if (V(n, o))
          return n;
        n = X(n);
      }
      return null;
    }, R.parentNode = X, R.matchesSelector = V, R.indexOfDeepestElement = function(n) {
      for (var o, a = [], s = 0; s < n.length; s++) {
        var p = n[s], f = n[o];
        if (p && s !== o)
          if (f) {
            var m = H(p), h = H(f);
            if (m !== p.ownerDocument)
              if (h !== p.ownerDocument)
                if (m !== h) {
                  a = a.length ? a : W(f);
                  var g = void 0;
                  if (f instanceof S.default.HTMLElement && p instanceof S.default.SVGElement && !(p instanceof S.default.SVGSVGElement)) {
                    if (p === h)
                      continue;
                    g = p.ownerSVGElement;
                  } else
                    g = p;
                  for (var x = W(g, f.ownerDocument), T = 0; x[T] && x[T] === a[T]; )
                    T++;
                  var O = [x[T - 1], x[T], a[T]];
                  if (O[0])
                    for (var N = O[0].lastChild; N; ) {
                      if (N === O[1]) {
                        o = s, a = x;
                        break;
                      }
                      if (N === O[2])
                        break;
                      N = N.previousSibling;
                    }
                } else
                  L = p, z = f, (parseInt(e.getWindow(L).getComputedStyle(L).zIndex, 10) || 0) >= (parseInt(e.getWindow(z).getComputedStyle(z).zIndex, 10) || 0) && (o = s);
              else
                o = s;
          } else
            o = s;
      }
      var L, z;
      return o;
    }, R.matchesUpTo = function(n, o, a) {
      for (; c.default.element(n); ) {
        if (V(n, o))
          return true;
        if ((n = X(n)) === a)
          return V(n, o);
      }
      return false;
    }, R.getActualElement = function(n) {
      return n.correspondingUseElement || n;
    }, R.getScrollXY = ne, R.getElementClientRect = oe, R.getElementRect = function(n) {
      var o = oe(n);
      if (!q.default.isIOS7 && o) {
        var a = ne(e.getWindow(n));
        o.left += a.x, o.right += a.x, o.top += a.y, o.bottom += a.y;
      }
      return o;
    }, R.getPath = function(n) {
      for (var o = []; n; )
        o.push(n), n = X(n);
      return o;
    }, R.trySelector = function(n) {
      return !!c.default.string(n) && (S.default.document.querySelector(n), true);
    };
    var H = u(function(n) {
      return n.parentNode || n.host;
    }, "S");
    function W(n, o) {
      for (var a, s = [], p = n; (a = H(p)) && p !== o && a !== p.ownerDocument; )
        s.unshift(p), p = a;
      return s;
    }
    u(W, "E");
    function ne(n) {
      return { x: (n = n || e.window).scrollX || n.document.documentElement.scrollLeft, y: n.scrollY || n.document.documentElement.scrollTop };
    }
    u(ne, "T");
    function oe(n) {
      var o = n instanceof S.default.SVGElement ? n.getBoundingClientRect() : n.getClientRects()[0];
      return o && { left: o.left, right: o.right, top: o.top, bottom: o.bottom, width: o.width || o.right - o.left, height: o.height || o.bottom - o.top };
    }
    u(oe, "M");
    var U = {};
    Object.defineProperty(U, "__esModule", { value: true }), U.default = function(n, o) {
      for (var a in o)
        n[a] = o[a];
      return n;
    };
    var ce = {};
    function Re(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(Re, "I");
    function We(n, o, a) {
      return n === "parent" ? (0, R.parentNode)(a) : n === "self" ? o.getRect(a) : (0, R.closest)(a, n);
    }
    u(We, "D"), Object.defineProperty(ce, "__esModule", { value: true }), ce.getStringOptionResult = We, ce.resolveRectLike = function(n, o, a, s) {
      var p, f = n;
      return c.default.string(f) ? f = We(f, o, a) : c.default.func(f) && (f = f.apply(void 0, function(m) {
        if (Array.isArray(m))
          return Re(m);
      }(p = s) || function(m) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(m))
          return Array.from(m);
      }(p) || function(m, h) {
        if (m) {
          if (typeof m == "string")
            return Re(m, h);
          var g = Object.prototype.toString.call(m).slice(8, -1);
          return g === "Object" && m.constructor && (g = m.constructor.name), g === "Map" || g === "Set" ? Array.from(m) : g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? Re(m, h) : void 0;
        }
      }(p) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), c.default.element(f) && (f = (0, R.getElementRect)(f)), f;
    }, ce.rectToXY = function(n) {
      return n && { x: "x" in n ? n.x : n.left, y: "y" in n ? n.y : n.top };
    }, ce.xywhToTlbr = function(n) {
      return !n || "left" in n && "top" in n || ((n = (0, U.default)({}, n)).left = n.x || 0, n.top = n.y || 0, n.right = n.right || n.left + n.width, n.bottom = n.bottom || n.top + n.height), n;
    }, ce.tlbrToXywh = function(n) {
      return !n || "x" in n && "y" in n || ((n = (0, U.default)({}, n)).x = n.left || 0, n.y = n.top || 0, n.width = n.width || (n.right || 0) - n.x, n.height = n.height || (n.bottom || 0) - n.y), n;
    }, ce.addEdges = function(n, o, a) {
      n.left && (o.left += a.x), n.right && (o.right += a.x), n.top && (o.top += a.y), n.bottom && (o.bottom += a.y), o.width = o.right - o.left, o.height = o.bottom - o.top;
    };
    var Le = {};
    Object.defineProperty(Le, "__esModule", { value: true }), Le.default = function(n, o, a) {
      var s = n.options[a], p = s && s.origin || n.options.origin, f = (0, ce.resolveRectLike)(p, n, o, [n && o]);
      return (0, ce.rectToXY)(f) || { x: 0, y: 0 };
    };
    var fe = {};
    function Ye(n) {
      return n.trim().split(/ +/);
    }
    u(Ye, "z"), Object.defineProperty(fe, "__esModule", { value: true }), fe.default = u(function n(o, a, s) {
      if (s = s || {}, c.default.string(o) && o.search(" ") !== -1 && (o = Ye(o)), c.default.array(o))
        return o.reduce(function(g, x) {
          return (0, U.default)(g, n(x, a, s));
        }, s);
      if (c.default.object(o) && (a = o, o = ""), c.default.func(a))
        s[o] = s[o] || [], s[o].push(a);
      else if (c.default.array(a))
        for (var p = 0; p < a.length; p++) {
          var f;
          f = a[p], n(o, f, s);
        }
      else if (c.default.object(a))
        for (var m in a) {
          var h = Ye(m).map(function(g) {
            return "".concat(o).concat(g);
          });
          n(h, a[m], s);
        }
      return s;
    }, "t");
    var Ke = {};
    Object.defineProperty(Ke, "__esModule", { value: true }), Ke.default = void 0, Ke.default = function(n, o) {
      return Math.sqrt(n * n + o * o);
    };
    var kt = {};
    function Mt(n, o) {
      for (var a in o) {
        var s = Mt.prefixedPropREs, p = false;
        for (var f in s)
          if (a.indexOf(f) === 0 && s[f].test(a)) {
            p = true;
            break;
          }
        p || typeof o[a] == "function" || (n[a] = o[a]);
      }
      return n;
    }
    u(Mt, "X"), Object.defineProperty(kt, "__esModule", { value: true }), kt.default = void 0, Mt.prefixedPropREs = { webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/, moz: /(Pressure)$/ };
    var Ar = Mt;
    kt.default = Ar;
    var K = {};
    function wt(n) {
      return n instanceof S.default.Event || n instanceof S.default.Touch;
    }
    u(wt, "W");
    function Et(n, o, a) {
      return n = n || "page", (a = a || {}).x = o[n + "X"], a.y = o[n + "Y"], a;
    }
    u(Et, "L");
    function Pr(n, o) {
      return o = o || { x: 0, y: 0 }, q.default.isOperaMobile && wt(n) ? (Et("screen", n, o), o.x += window.scrollX, o.y += window.scrollY) : Et("page", n, o), o;
    }
    u(Pr, "U");
    function Wt(n, o) {
      return o = o || {}, q.default.isOperaMobile && wt(n) ? Et("screen", n, o) : Et("client", n, o), o;
    }
    u(Wt, "V");
    function pr(n) {
      var o = [];
      return c.default.array(n) ? (o[0] = n[0], o[1] = n[1]) : n.type === "touchend" ? n.touches.length === 1 ? (o[0] = n.touches[0], o[1] = n.changedTouches[0]) : n.touches.length === 0 && (o[0] = n.changedTouches[0], o[1] = n.changedTouches[1]) : (o[0] = n.touches[0], o[1] = n.touches[1]), o;
    }
    u(pr, "N");
    function dr(n) {
      for (var o = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, a = 0; a < n.length; a++) {
        var s = n[a];
        for (var p in o)
          o[p] += s[p];
      }
      for (var f in o)
        o[f] /= n.length;
      return o;
    }
    u(dr, "q"), Object.defineProperty(K, "__esModule", { value: true }), K.copyCoords = function(n, o) {
      n.page = n.page || {}, n.page.x = o.page.x, n.page.y = o.page.y, n.client = n.client || {}, n.client.x = o.client.x, n.client.y = o.client.y, n.timeStamp = o.timeStamp;
    }, K.setCoordDeltas = function(n, o, a) {
      n.page.x = a.page.x - o.page.x, n.page.y = a.page.y - o.page.y, n.client.x = a.client.x - o.client.x, n.client.y = a.client.y - o.client.y, n.timeStamp = a.timeStamp - o.timeStamp;
    }, K.setCoordVelocity = function(n, o) {
      var a = Math.max(o.timeStamp / 1e3, 1e-3);
      n.page.x = o.page.x / a, n.page.y = o.page.y / a, n.client.x = o.client.x / a, n.client.y = o.client.y / a, n.timeStamp = a;
    }, K.setZeroCoords = function(n) {
      n.page.x = 0, n.page.y = 0, n.client.x = 0, n.client.y = 0;
    }, K.isNativePointer = wt, K.getXY = Et, K.getPageXY = Pr, K.getClientXY = Wt, K.getPointerId = function(n) {
      return c.default.number(n.pointerId) ? n.pointerId : n.identifier;
    }, K.setCoords = function(n, o, a) {
      var s = o.length > 1 ? dr(o) : o[0];
      Pr(s, n.page), Wt(s, n.client), n.timeStamp = a;
    }, K.getTouchPair = pr, K.pointerAverage = dr, K.touchBBox = function(n) {
      if (!n.length)
        return null;
      var o = pr(n), a = Math.min(o[0].pageX, o[1].pageX), s = Math.min(o[0].pageY, o[1].pageY), p = Math.max(o[0].pageX, o[1].pageX), f = Math.max(o[0].pageY, o[1].pageY);
      return { x: a, y: s, left: a, top: s, right: p, bottom: f, width: p - a, height: f - s };
    }, K.touchDistance = function(n, o) {
      var a = o + "X", s = o + "Y", p = pr(n), f = p[0][a] - p[1][a], m = p[0][s] - p[1][s];
      return (0, Ke.default)(f, m);
    }, K.touchAngle = function(n, o) {
      var a = o + "X", s = o + "Y", p = pr(n), f = p[1][a] - p[0][a], m = p[1][s] - p[0][s];
      return 180 * Math.atan2(m, f) / Math.PI;
    }, K.getPointerType = function(n) {
      return c.default.string(n.pointerType) ? n.pointerType : c.default.number(n.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][n.pointerType] : /touch/.test(n.type || "") || n instanceof S.default.Touch ? "touch" : "mouse";
    }, K.getEventTargets = function(n) {
      var o = c.default.func(n.composedPath) ? n.composedPath() : n.path;
      return [R.getActualElement(o ? o[0] : n.target), R.getActualElement(n.currentTarget)];
    }, K.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, K.coordsToEvent = function(n) {
      return { coords: n, get page() {
        return this.coords.page;
      }, get client() {
        return this.coords.client;
      }, get timeStamp() {
        return this.coords.timeStamp;
      }, get pageX() {
        return this.coords.page.x;
      }, get pageY() {
        return this.coords.page.y;
      }, get clientX() {
        return this.coords.client.x;
      }, get clientY() {
        return this.coords.client.y;
      }, get pointerId() {
        return this.coords.pointerId;
      }, get target() {
        return this.coords.target;
      }, get type() {
        return this.coords.type;
      }, get pointerType() {
        return this.coords.pointerType;
      }, get buttons() {
        return this.coords.buttons;
      }, preventDefault: function() {
      } };
    }, Object.defineProperty(K, "pointerExtend", { enumerable: true, get: function() {
      return kt.default;
    } });
    var Rt = {};
    function Fn(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Fn, "G");
    function _t(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(_t, "H"), Object.defineProperty(Rt, "__esModule", { value: true }), Rt.BaseEvent = void 0;
    var un = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), _t(this, "type", void 0), _t(this, "target", void 0), _t(this, "currentTarget", void 0), _t(this, "interactable", void 0), _t(this, "_interaction", void 0), _t(this, "timeStamp", void 0), _t(this, "immediatePropagationStopped", false), _t(this, "propagationStopped", false), this._interaction = s;
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Fn(o.prototype, a), n;
    }();
    Rt.BaseEvent = un, Object.defineProperty(un.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var xe = {};
    Object.defineProperty(xe, "__esModule", { value: true }), xe.find = xe.findIndex = xe.from = xe.merge = xe.remove = xe.contains = void 0, xe.contains = function(n, o) {
      return n.indexOf(o) !== -1;
    }, xe.remove = function(n, o) {
      return n.splice(n.indexOf(o), 1);
    };
    var Wr = u(function(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        n.push(s);
      }
      return n;
    }, "J");
    xe.merge = Wr, xe.from = function(n) {
      return Wr([], n);
    };
    var Ur = u(function(n, o) {
      for (var a = 0; a < n.length; a++)
        if (o(n[a], a, n))
          return a;
      return -1;
    }, "Q");
    xe.findIndex = Ur, xe.find = function(n, o) {
      return n[Ur(n, o)];
    };
    var At = {};
    function cn(n) {
      return (cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(cn, "et");
    function fr(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(fr, "nt");
    function hr(n, o) {
      return (hr = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    u(hr, "rt");
    function pn(n, o) {
      return !o || cn(o) !== "object" && typeof o != "function" ? ct(n) : o;
    }
    u(pn, "ot");
    function ct(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    u(ct, "it");
    function Ir(n) {
      return (Ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    u(Ir, "at");
    function Nt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(Nt, "st"), Object.defineProperty(At, "__esModule", { value: true }), At.DropEvent = void 0;
    var Wn = function(n) {
      (function(h, g) {
        if (typeof g != "function" && g !== null)
          throw new TypeError("Super expression must either be null or a function");
        h.prototype = Object.create(g && g.prototype, { constructor: { value: h, writable: true, configurable: true } }), g && hr(h, g);
      })(m, n);
      var o, a, s, p, f = (s = m, p = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (h) {
          return false;
        }
      }(), function() {
        var h, g = Ir(s);
        if (p) {
          var x = Ir(this).constructor;
          h = Reflect.construct(g, arguments, x);
        } else
          h = g.apply(this, arguments);
        return pn(this, h);
      });
      function m(h, g, x) {
        var T;
        (function(z, $) {
          if (!(z instanceof $))
            throw new TypeError("Cannot call a class as a function");
        })(this, m), Nt(ct(T = f.call(this, g._interaction)), "target", void 0), Nt(ct(T), "dropzone", void 0), Nt(ct(T), "dragEvent", void 0), Nt(ct(T), "relatedTarget", void 0), Nt(ct(T), "draggable", void 0), Nt(ct(T), "timeStamp", void 0), Nt(ct(T), "propagationStopped", false), Nt(ct(T), "immediatePropagationStopped", false);
        var O = x === "dragleave" ? h.prev : h.cur, N = O.element, L = O.dropzone;
        return T.type = x, T.target = N, T.currentTarget = N, T.dropzone = L, T.dragEvent = g, T.relatedTarget = g.target, T.draggable = g.interactable, T.timeStamp = g.timeStamp, T;
      }
      return u(m, "a"), o = m, (a = [{ key: "reject", value: function() {
        var h = this, g = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && g.cur.dropzone === this.dropzone && g.cur.element === this.target)
          if (g.prev.dropzone = this.dropzone, g.prev.element = this.target, g.rejected = true, g.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var x = g.activeDrops, T = xe.findIndex(x, function(N) {
              var L = N.dropzone, z = N.element;
              return L === h.dropzone && z === h.target;
            });
            g.activeDrops.splice(T, 1);
            var O = new m(g, this.dragEvent, "dropdeactivate");
            O.dropzone = this.dropzone, O.target = this.target, this.dropzone.fire(O);
          } else
            this.dropzone.fire(new m(g, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && fr(o.prototype, a), m;
    }(Rt.BaseEvent);
    At.DropEvent = Wn;
    var zr = {};
    function dn(n, o) {
      for (var a = 0; a < n.slice().length; a++) {
        var s = n.slice()[a], p = s.dropzone, f = s.element;
        o.dropzone = p, o.target = f, p.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    u(dn, "ct");
    function yi(n, o) {
      for (var a = function(f, m) {
        for (var h = f.interactables, g = [], x = 0; x < h.list.length; x++) {
          var T = h.list[x];
          if (T.options.drop.enabled) {
            var O = T.options.drop.accept;
            if (!(c.default.element(O) && O !== m || c.default.string(O) && !R.matchesSelector(m, O) || c.default.func(O) && !O({ dropzone: T, draggableElement: m })))
              for (var N = c.default.string(T.target) ? T._context.querySelectorAll(T.target) : c.default.array(T.target) ? T.target : [T.target], L = 0; L < N.length; L++) {
                var z = N[L];
                z !== m && g.push({ dropzone: T, element: z, rect: T.getRect(z) });
              }
          }
        }
        return g;
      }(n, o), s = 0; s < a.length; s++) {
        var p = a[s];
        p.rect = p.dropzone.getRect(p.element);
      }
      return a;
    }
    u(yi, "ft");
    function So(n, o, a) {
      for (var s = n.dropState, p = n.interactable, f = n.element, m = [], h = 0; h < s.activeDrops.length; h++) {
        var g = s.activeDrops[h], x = g.dropzone, T = g.element, O = g.rect;
        m.push(x.dropCheck(o, a, p, f, T, O) ? T : null);
      }
      var N = R.indexOfDeepestElement(m);
      return s.activeDrops[N] || null;
    }
    u(So, "dt");
    function xi(n, o, a) {
      var s = n.dropState, p = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return a.type === "dragstart" && (p.activate = new At.DropEvent(s, a, "dropactivate"), p.activate.target = null, p.activate.dropzone = null), a.type === "dragend" && (p.deactivate = new At.DropEvent(s, a, "dropdeactivate"), p.deactivate.target = null, p.deactivate.dropzone = null), s.rejected || (s.cur.element !== s.prev.element && (s.prev.dropzone && (p.leave = new At.DropEvent(s, a, "dragleave"), a.dragLeave = p.leave.target = s.prev.element, a.prevDropzone = p.leave.dropzone = s.prev.dropzone), s.cur.dropzone && (p.enter = new At.DropEvent(s, a, "dragenter"), a.dragEnter = s.cur.element, a.dropzone = s.cur.dropzone)), a.type === "dragend" && s.cur.dropzone && (p.drop = new At.DropEvent(s, a, "drop"), a.dropzone = s.cur.dropzone, a.relatedTarget = s.cur.element), a.type === "dragmove" && s.cur.dropzone && (p.move = new At.DropEvent(s, a, "dropmove"), p.move.dragmove = a, a.dropzone = s.cur.dropzone)), p;
    }
    u(xi, "pt");
    function wi(n, o) {
      var a = n.dropState, s = a.activeDrops, p = a.cur, f = a.prev;
      o.leave && f.dropzone.fire(o.leave), o.enter && p.dropzone.fire(o.enter), o.move && p.dropzone.fire(o.move), o.drop && p.dropzone.fire(o.drop), o.deactivate && dn(s, o.deactivate), a.prev.dropzone = p.dropzone, a.prev.element = p.element;
    }
    u(wi, "vt");
    function To(n, o) {
      var a = n.interaction, s = n.iEvent, p = n.event;
      if (s.type === "dragmove" || s.type === "dragend") {
        var f = a.dropState;
        o.dynamicDrop && (f.activeDrops = yi(o, a.element));
        var m = s, h = So(a, m, p);
        f.rejected = f.rejected && !!h && h.dropzone === f.cur.dropzone && h.element === f.cur.element, f.cur.dropzone = h && h.dropzone, f.cur.element = h && h.element, f.events = xi(a, 0, m);
      }
    }
    u(To, "ht"), Object.defineProperty(zr, "__esModule", { value: true }), zr.default = void 0;
    var j = { id: "actions/drop", install: function(n) {
      var o = n.actions, a = n.interactStatic, s = n.Interactable, p = n.defaults;
      n.usePlugin(w.default), s.prototype.dropzone = function(f) {
        return function(m, h) {
          if (c.default.object(h)) {
            if (m.options.drop.enabled = h.enabled !== false, h.listeners) {
              var g = (0, fe.default)(h.listeners), x = Object.keys(g).reduce(function(T, O) {
                return T[/^(enter|leave)/.test(O) ? "drag".concat(O) : /^(activate|deactivate|move)/.test(O) ? "drop".concat(O) : O] = g[O], T;
              }, {});
              m.off(m.options.drop.listeners), m.on(x), m.options.drop.listeners = x;
            }
            return c.default.func(h.ondrop) && m.on("drop", h.ondrop), c.default.func(h.ondropactivate) && m.on("dropactivate", h.ondropactivate), c.default.func(h.ondropdeactivate) && m.on("dropdeactivate", h.ondropdeactivate), c.default.func(h.ondragenter) && m.on("dragenter", h.ondragenter), c.default.func(h.ondragleave) && m.on("dragleave", h.ondragleave), c.default.func(h.ondropmove) && m.on("dropmove", h.ondropmove), /^(pointer|center)$/.test(h.overlap) ? m.options.drop.overlap = h.overlap : c.default.number(h.overlap) && (m.options.drop.overlap = Math.max(Math.min(1, h.overlap), 0)), "accept" in h && (m.options.drop.accept = h.accept), "checker" in h && (m.options.drop.checker = h.checker), m;
          }
          return c.default.bool(h) ? (m.options.drop.enabled = h, m) : m.options.drop;
        }(this, f);
      }, s.prototype.dropCheck = function(f, m, h, g, x, T) {
        return function(O, N, L, z, $, J, F) {
          var te = false;
          if (!(F = F || O.getRect(J)))
            return !!O.options.drop.checker && O.options.drop.checker(N, L, te, O, J, z, $);
          var le = O.options.drop.overlap;
          if (le === "pointer") {
            var pe = (0, Le.default)(z, $, "drag"), Ee = K.getPageXY(N);
            Ee.x += pe.x, Ee.y += pe.y;
            var je = Ee.x > F.left && Ee.x < F.right, be = Ee.y > F.top && Ee.y < F.bottom;
            te = je && be;
          }
          var Ie = z.getRect($);
          if (Ie && le === "center") {
            var Xt = Ie.left + Ie.width / 2, Nr = Ie.top + Ie.height / 2;
            te = Xt >= F.left && Xt <= F.right && Nr >= F.top && Nr <= F.bottom;
          }
          return Ie && c.default.number(le) && (te = Math.max(0, Math.min(F.right, Ie.right) - Math.max(F.left, Ie.left)) * Math.max(0, Math.min(F.bottom, Ie.bottom) - Math.max(F.top, Ie.top)) / (Ie.width * Ie.height) >= le), O.options.drop.checker && (te = O.options.drop.checker(N, L, te, O, J, z, $)), te;
        }(this, f, m, h, g, x, T);
      }, a.dynamicDrop = function(f) {
        return c.default.bool(f) ? (n.dynamicDrop = f, a) : n.dynamicDrop;
      }, (0, U.default)(o.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o.methodDict.drop = "dropzone", n.dynamicDrop = false, p.actions.drop = j.defaults;
    }, listeners: { "interactions:before-action-start": function(n) {
      var o = n.interaction;
      o.prepared.name === "drag" && (o.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(n, o) {
      var a = n.interaction, s = (n.event, n.iEvent);
      if (a.prepared.name === "drag") {
        var p = a.dropState;
        p.activeDrops = null, p.events = null, p.activeDrops = yi(o, a.element), p.events = xi(a, 0, s), p.events.activate && (dn(p.activeDrops, p.events.activate), o.fire("actions/drop:start", { interaction: a, dragEvent: s }));
      }
    }, "interactions:action-move": To, "interactions:after-action-move": function(n, o) {
      var a = n.interaction, s = n.iEvent;
      a.prepared.name === "drag" && (wi(a, a.dropState.events), o.fire("actions/drop:move", { interaction: a, dragEvent: s }), a.dropState.events = {});
    }, "interactions:action-end": function(n, o) {
      if (n.interaction.prepared.name === "drag") {
        var a = n.interaction, s = n.iEvent;
        To(n, o), wi(a, a.dropState.events), o.fire("actions/drop:end", { interaction: a, dragEvent: s });
      }
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.dropState;
        a && (a.activeDrops = null, a.events = null, a.cur.dropzone = null, a.cur.element = null, a.prev.dropzone = null, a.prev.element = null, a.rejected = false);
      }
    } }, getActiveDrops: yi, getDrop: So, getDropEvents: xi, fireDropEvents: wi, defaults: { enabled: false, accept: null, overlap: "pointer" } }, Q = j;
    zr.default = Q;
    var ae = {};
    function ye(n) {
      var o = n.interaction, a = n.iEvent, s = n.phase;
      if (o.prepared.name === "gesture") {
        var p = o.pointers.map(function(x) {
          return x.pointer;
        }), f = s === "start", m = s === "end", h = o.interactable.options.deltaSource;
        if (a.touches = [p[0], p[1]], f)
          a.distance = K.touchDistance(p, h), a.box = K.touchBBox(p), a.scale = 1, a.ds = 0, a.angle = K.touchAngle(p, h), a.da = 0, o.gesture.startDistance = a.distance, o.gesture.startAngle = a.angle;
        else if (m) {
          var g = o.prevEvent;
          a.distance = g.distance, a.box = g.box, a.scale = g.scale, a.ds = 0, a.angle = g.angle, a.da = 0;
        } else
          a.distance = K.touchDistance(p, h), a.box = K.touchBBox(p), a.scale = a.distance / o.gesture.startDistance, a.angle = K.touchAngle(p, h), a.ds = a.scale - o.gesture.scale, a.da = a.angle - o.gesture.angle;
        o.gesture.distance = a.distance, o.gesture.angle = a.angle, c.default.number(a.scale) && a.scale !== 1 / 0 && !isNaN(a.scale) && (o.gesture.scale = a.scale);
      }
    }
    u(ye, "bt"), Object.defineProperty(ae, "__esModule", { value: true }), ae.default = void 0;
    var he = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(n) {
      var o = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.gesturable = function(p) {
        return c.default.object(p) ? (this.options.gesture.enabled = p.enabled !== false, this.setPerAction("gesture", p), this.setOnEvents("gesture", p), this) : c.default.bool(p) ? (this.options.gesture.enabled = p, this) : this.options.gesture;
      }, o.map.gesture = he, o.methodDict.gesture = "gesturable", s.actions.gesture = he.defaults;
    }, listeners: { "interactions:action-start": ye, "interactions:action-move": ye, "interactions:action-end": ye, "interactions:new": function(n) {
      n.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
    }, "auto-start:check": function(n) {
      if (!(n.interaction.pointers.length < 2)) {
        var o = n.interactable.options.gesture;
        if (o && o.enabled)
          return n.action = { name: "gesture" }, false;
      }
    } }, defaults: {}, getCursor: function() {
      return "";
    } }, pt = he;
    ae.default = pt;
    var dt = {};
    function Vr(n, o, a, s, p, f, m) {
      if (!o)
        return false;
      if (o === true) {
        var h = c.default.number(f.width) ? f.width : f.right - f.left, g = c.default.number(f.height) ? f.height : f.bottom - f.top;
        if (m = Math.min(m, Math.abs((n === "left" || n === "right" ? h : g) / 2)), h < 0 && (n === "left" ? n = "right" : n === "right" && (n = "left")), g < 0 && (n === "top" ? n = "bottom" : n === "bottom" && (n = "top")), n === "left")
          return a.x < (h >= 0 ? f.left : f.right) + m;
        if (n === "top")
          return a.y < (g >= 0 ? f.top : f.bottom) + m;
        if (n === "right")
          return a.x > (h >= 0 ? f.right : f.left) - m;
        if (n === "bottom")
          return a.y > (g >= 0 ? f.bottom : f.top) - m;
      }
      return !!c.default.element(s) && (c.default.element(o) ? o === s : R.matchesUpTo(s, o, p));
    }
    u(Vr, "Pt");
    function Ei(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.resizeAxes) {
        var s = o;
        a.interactable.options.resize.square ? (a.resizeAxes === "y" ? s.delta.x = s.delta.y : s.delta.y = s.delta.x, s.axes = "xy") : (s.axes = a.resizeAxes, a.resizeAxes === "x" ? s.delta.y = 0 : a.resizeAxes === "y" && (s.delta.x = 0));
      }
    }
    u(Ei, "Ot"), Object.defineProperty(dt, "__esModule", { value: true }), dt.default = void 0;
    var ft = { id: "actions/resize", before: ["actions/drag"], install: function(n) {
      var o = n.actions, a = n.browser, s = n.Interactable, p = n.defaults;
      ft.cursors = function(f) {
        return f.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(a), ft.defaultMargin = a.supportsTouch || a.supportsPointerEvent ? 20 : 10, s.prototype.resizable = function(f) {
        return function(m, h, g) {
          return c.default.object(h) ? (m.options.resize.enabled = h.enabled !== false, m.setPerAction("resize", h), m.setOnEvents("resize", h), c.default.string(h.axis) && /^x$|^y$|^xy$/.test(h.axis) ? m.options.resize.axis = h.axis : h.axis === null && (m.options.resize.axis = g.defaults.actions.resize.axis), c.default.bool(h.preserveAspectRatio) ? m.options.resize.preserveAspectRatio = h.preserveAspectRatio : c.default.bool(h.square) && (m.options.resize.square = h.square), m) : c.default.bool(h) ? (m.options.resize.enabled = h, m) : m.options.resize;
        }(this, f, n);
      }, o.map.resize = ft, o.methodDict.resize = "resizable", p.actions.resize = ft.defaults;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var p = a, f = s.rect;
          s._rects = { start: (0, U.default)({}, f), corrected: (0, U.default)({}, f), previous: (0, U.default)({}, f), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, p.edges = s.prepared.edges, p.rect = s._rects.corrected, p.deltaRect = s._rects.delta;
        }
      })(n), Ei(n);
    }, "interactions:action-move": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var p = a, f = s.interactable.options.resize.invert, m = f === "reposition" || f === "negate", h = s.rect, g = s._rects, x = g.start, T = g.corrected, O = g.delta, N = g.previous;
          if ((0, U.default)(N, T), m) {
            if ((0, U.default)(T, h), f === "reposition") {
              if (T.top > T.bottom) {
                var L = T.top;
                T.top = T.bottom, T.bottom = L;
              }
              if (T.left > T.right) {
                var z = T.left;
                T.left = T.right, T.right = z;
              }
            }
          } else
            T.top = Math.min(h.top, x.bottom), T.bottom = Math.max(h.bottom, x.top), T.left = Math.min(h.left, x.right), T.right = Math.max(h.right, x.left);
          for (var $ in T.width = T.right - T.left, T.height = T.bottom - T.top, T)
            O[$] = T[$] - N[$];
          p.edges = s.prepared.edges, p.rect = T, p.deltaRect = O;
        }
      })(n), Ei(n);
    }, "interactions:action-end": function(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.prepared.edges) {
        var s = o;
        s.edges = a.prepared.edges, s.rect = a._rects.corrected, s.deltaRect = a._rects.delta;
      }
    }, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.element, p = n.rect, f = n.buttons;
      if (p) {
        var m = (0, U.default)({}, o.coords.cur.page), h = a.options.resize;
        if (h && h.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (f & h.mouseButtons) != 0)) {
          if (c.default.object(h.edges)) {
            var g = { left: false, right: false, top: false, bottom: false };
            for (var x in g)
              g[x] = Vr(x, h.edges[x], m, o._latestPointer.eventTarget, s, p, h.margin || ft.defaultMargin);
            g.left = g.left && !g.right, g.top = g.top && !g.bottom, (g.left || g.right || g.top || g.bottom) && (n.action = { name: "resize", edges: g });
          } else {
            var T = h.axis !== "y" && m.x > p.right - ft.defaultMargin, O = h.axis !== "x" && m.y > p.bottom - ft.defaultMargin;
            (T || O) && (n.action = { name: "resize", axes: (T ? "x" : "") + (O ? "y" : "") });
          }
          return !n.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(n) {
      var o = n.edges, a = n.axis, s = n.name, p = ft.cursors, f = null;
      if (a)
        f = p[s + a];
      else if (o) {
        for (var m = "", h = ["top", "bottom", "left", "right"], g = 0; g < h.length; g++) {
          var x = h[g];
          o[x] && (m += x);
        }
        f = p[m];
      }
      return f;
    }, defaultMargin: null }, Si = ft;
    dt.default = Si;
    var Dr = {};
    Object.defineProperty(Dr, "__esModule", { value: true }), Dr.default = void 0;
    var Xr = { id: "actions", install: function(n) {
      n.usePlugin(ae.default), n.usePlugin(dt.default), n.usePlugin(w.default), n.usePlugin(zr.default);
    } };
    Dr.default = Xr;
    var Gt = {};
    Object.defineProperty(Gt, "__esModule", { value: true }), Gt.default = void 0;
    var Lt, Ut, Al = 0, ad = { request: function(n) {
      return Lt(n);
    }, cancel: function(n) {
      return Ut(n);
    }, init: function(n) {
      if (Lt = n.requestAnimationFrame, Ut = n.cancelAnimationFrame, !Lt)
        for (var o = ["ms", "moz", "webkit", "o"], a = 0; a < o.length; a++) {
          var s = o[a];
          Lt = n["".concat(s, "RequestAnimationFrame")], Ut = n["".concat(s, "CancelAnimationFrame")] || n["".concat(s, "CancelRequestAnimationFrame")];
        }
      Lt = Lt && Lt.bind(n), Ut = Ut && Ut.bind(n), Lt || (Lt = u(function(p) {
        var f = Date.now(), m = Math.max(0, 16 - (f - Al)), h = n.setTimeout(function() {
          p(f + m);
        }, m);
        return Al = f + m, h;
      }, "kt"), Ut = u(function(p) {
        return clearTimeout(p);
      }, "It"));
    } };
    Gt.default = ad;
    var Yr = {};
    Object.defineProperty(Yr, "__esModule", { value: true }), Yr.getContainer = Co, Yr.getScroll = Ti, Yr.getScrollSize = function(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollWidth, y: n.scrollHeight };
    }, Yr.getScrollSizeDelta = function(n, o) {
      var a = n.interaction, s = n.element, p = a && a.interactable.options[a.prepared.name].autoScroll;
      if (!p || !p.enabled)
        return o(), { x: 0, y: 0 };
      var f = Co(p.container, a.interactable, s), m = Ti(f);
      o();
      var h = Ti(f);
      return { x: h.x - m.x, y: h.y - m.y };
    }, Yr.default = void 0;
    var ue = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(n) {
      ue.isScrolling = true, Gt.default.cancel(ue.i), n.autoScroll = ue, ue.interaction = n, ue.prevTime = ue.now(), ue.i = Gt.default.request(ue.scroll);
    }, stop: function() {
      ue.isScrolling = false, ue.interaction && (ue.interaction.autoScroll = null), Gt.default.cancel(ue.i);
    }, scroll: function() {
      var n = ue.interaction, o = n.interactable, a = n.element, s = n.prepared.name, p = o.options[s].autoScroll, f = Co(p.container, o, a), m = ue.now(), h = (m - ue.prevTime) / 1e3, g = p.speed * h;
      if (g >= 1) {
        var x = { x: ue.x * g, y: ue.y * g };
        if (x.x || x.y) {
          var T = Ti(f);
          c.default.window(f) ? f.scrollBy(x.x, x.y) : f && (f.scrollLeft += x.x, f.scrollTop += x.y);
          var O = Ti(f), N = { x: O.x - T.x, y: O.y - T.y };
          (N.x || N.y) && o.fire({ type: "autoscroll", target: a, interactable: o, delta: N, interaction: n, container: f });
        }
        ue.prevTime = m;
      }
      ue.isScrolling && (Gt.default.cancel(ue.i), ue.i = Gt.default.request(ue.scroll));
    }, check: function(n, o) {
      var a;
      return (a = n.options[o].autoScroll) == null ? void 0 : a.enabled;
    }, onInteractionMove: function(n) {
      var o = n.interaction, a = n.pointer;
      if (o.interacting() && ue.check(o.interactable, o.prepared.name))
        if (o.simulation)
          ue.x = ue.y = 0;
        else {
          var s, p, f, m, h = o.interactable, g = o.element, x = o.prepared.name, T = h.options[x].autoScroll, O = Co(T.container, h, g);
          if (c.default.window(O))
            m = a.clientX < ue.margin, s = a.clientY < ue.margin, p = a.clientX > O.innerWidth - ue.margin, f = a.clientY > O.innerHeight - ue.margin;
          else {
            var N = R.getElementClientRect(O);
            m = a.clientX < N.left + ue.margin, s = a.clientY < N.top + ue.margin, p = a.clientX > N.right - ue.margin, f = a.clientY > N.bottom - ue.margin;
          }
          ue.x = p ? 1 : m ? -1 : 0, ue.y = f ? 1 : s ? -1 : 0, ue.isScrolling || (ue.margin = T.margin, ue.speed = T.speed, ue.start(o));
        }
    } };
    function Co(n, o, a) {
      return (c.default.string(n) ? (0, ce.getStringOptionResult)(n, o, a) : n) || (0, e.getWindow)(a);
    }
    u(Co, "Ct");
    function Ti(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollLeft, y: n.scrollTop };
    }
    u(Ti, "Ft");
    var sd = { id: "auto-scroll", install: function(n) {
      var o = n.defaults, a = n.actions;
      n.autoScroll = ue, ue.now = function() {
        return n.now();
      }, a.phaselessTypes.autoscroll = true, o.perAction.autoScroll = ue.defaults;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.autoScroll = null;
    }, "interactions:destroy": function(n) {
      n.interaction.autoScroll = null, ue.stop(), ue.interaction && (ue.interaction = null);
    }, "interactions:stop": ue.stop, "interactions:action-move": function(n) {
      return ue.onInteractionMove(n);
    } } };
    Yr.default = sd;
    var qt = {};
    Object.defineProperty(qt, "__esModule", { value: true }), qt.warnOnce = function(n, o) {
      var a = false;
      return function() {
        return a || (e.window.console.warn(o), a = true), n.apply(this, arguments);
      };
    }, qt.copyAction = function(n, o) {
      return n.name = o.name, n.axis = o.axis, n.edges = o.edges, n;
    }, qt.sign = void 0, qt.sign = function(n) {
      return n >= 0 ? 1 : -1;
    };
    var Oo = {};
    function ld(n) {
      return c.default.bool(n) ? (this.options.styleCursor = n, this) : n === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    u(ld, "Wt");
    function ud(n) {
      return c.default.func(n) ? (this.options.actionChecker = n, this) : n === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    u(ud, "Lt"), Object.defineProperty(Oo, "__esModule", { value: true }), Oo.default = void 0;
    var cd = { id: "auto-start/interactableMethods", install: function(n) {
      var o = n.Interactable;
      o.prototype.getAction = function(a, s, p, f) {
        var m = function(h, g, x, T, O) {
          var N = h.getRect(T), L = { action: null, interactable: h, interaction: x, element: T, rect: N, buttons: g.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[g.button] };
          return O.fire("auto-start:check", L), L.action;
        }(this, s, p, f, n);
        return this.options.actionChecker ? this.options.actionChecker(a, s, m, this, f, p) : m;
      }, o.prototype.ignoreFrom = (0, qt.warnOnce)(function(a) {
        return this._backCompatOption("ignoreFrom", a);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, qt.warnOnce)(function(a) {
        return this._backCompatOption("allowFrom", a);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = ud, o.prototype.styleCursor = ld;
    } };
    Oo.default = cd;
    var Un = {};
    function Pl(n, o, a, s, p) {
      return o.testIgnoreAllow(o.options[n.name], a, s) && o.options[n.name].enabled && Mo(o, a, n, p) ? n : null;
    }
    u(Pl, "Nt");
    function pd(n, o, a, s, p, f, m) {
      for (var h = 0, g = s.length; h < g; h++) {
        var x = s[h], T = p[h], O = x.getAction(o, a, n, T);
        if (O) {
          var N = Pl(O, x, T, f, m);
          if (N)
            return { action: N, interactable: x, element: T };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    u(pd, "qt");
    function Il(n, o, a, s, p) {
      var f = [], m = [], h = s;
      function g(T) {
        f.push(T), m.push(h);
      }
      for (u(g, "u"); c.default.element(h); ) {
        f = [], m = [], p.interactables.forEachMatch(h, g);
        var x = pd(n, o, a, f, m, s, p);
        if (x.action && !x.interactable.options[x.action.name].manualStart)
          return x;
        h = R.parentNode(h);
      }
      return { action: null, interactable: null, element: null };
    }
    u(Il, "$t");
    function zl(n, o, a) {
      var s = o.action, p = o.interactable, f = o.element;
      s = s || { name: null }, n.interactable = p, n.element = f, (0, qt.copyAction)(n.prepared, s), n.rect = p && s.name ? p.getRect(f) : null, kl(n, a), a.fire("autoStart:prepared", { interaction: n });
    }
    u(zl, "Gt");
    function Mo(n, o, a, s) {
      var p = n.options, f = p[a.name].max, m = p[a.name].maxPerElement, h = s.autoStart.maxInteractions, g = 0, x = 0, T = 0;
      if (!(f && m && h))
        return false;
      for (var O = 0; O < s.interactions.list.length; O++) {
        var N = s.interactions.list[O], L = N.prepared.name;
        if (N.interacting() && (++g >= h || N.interactable === n && ((x += L === a.name ? 1 : 0) >= f || N.element === o && (T++, L === a.name && T >= m))))
          return false;
      }
      return h > 0;
    }
    u(Mo, "Ht");
    function Dl(n, o) {
      return c.default.number(n) ? (o.autoStart.maxInteractions = n, this) : o.autoStart.maxInteractions;
    }
    u(Dl, "Kt");
    function Ya(n, o, a) {
      var s = a.autoStart.cursorElement;
      s && s !== n && (s.style.cursor = ""), n.ownerDocument.documentElement.style.cursor = o, n.style.cursor = o, a.autoStart.cursorElement = o ? n : null;
    }
    u(Ya, "Zt");
    function kl(n, o) {
      var a = n.interactable, s = n.element, p = n.prepared;
      if (n.pointerType === "mouse" && a && a.options.styleCursor) {
        var f = "";
        if (p.name) {
          var m = a.options[p.name].cursorChecker;
          f = c.default.func(m) ? m(p, a, s, n._interacting) : o.actions.map[p.name].getCursor(p);
        }
        Ya(n.element, f || "", o);
      } else
        o.autoStart.cursorElement && Ya(o.autoStart.cursorElement, "", o);
    }
    u(kl, "Jt"), Object.defineProperty(Un, "__esModule", { value: true }), Un.default = void 0;
    var dd = { id: "auto-start/base", before: ["actions"], install: function(n) {
      var o = n.interactStatic, a = n.defaults;
      n.usePlugin(Oo.default), a.base.actionChecker = null, a.base.styleCursor = true, (0, U.default)(a.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(s) {
        return Dl(s, n);
      }, n.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Mo, cursorElement: null };
    }, listeners: { "interactions:down": function(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget;
      a.interacting() || zl(a, Il(a, s, p, f, o), o);
    }, "interactions:move": function(n, o) {
      (function(a, s) {
        var p = a.interaction, f = a.pointer, m = a.event, h = a.eventTarget;
        p.pointerType !== "mouse" || p.pointerIsDown || p.interacting() || zl(p, Il(p, f, m, h, s), s);
      })(n, o), function(a, s) {
        var p = a.interaction;
        if (p.pointerIsDown && !p.interacting() && p.pointerWasMoved && p.prepared.name) {
          s.fire("autoStart:before-start", a);
          var f = p.interactable, m = p.prepared.name;
          m && f && (f.options[m].manualStart || !Mo(f, p.element, p.prepared, s) ? p.stop() : (p.start(p.prepared, f, p.element), kl(p, s)));
        }
      }(n, o);
    }, "interactions:stop": function(n, o) {
      var a = n.interaction, s = a.interactable;
      s && s.options.styleCursor && Ya(a.element, "", o);
    } }, maxInteractions: Dl, withinInteractionLimit: Mo, validateAction: Pl };
    Un.default = dd;
    var _o = {};
    Object.defineProperty(_o, "__esModule", { value: true }), _o.default = void 0;
    var fd = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(n, o) {
      var a = n.interaction, s = n.eventTarget, p = n.dx, f = n.dy;
      if (a.prepared.name === "drag") {
        var m = Math.abs(p), h = Math.abs(f), g = a.interactable.options.drag, x = g.startAxis, T = m > h ? "x" : m < h ? "y" : "xy";
        if (a.prepared.axis = g.lockAxis === "start" ? T[0] : g.lockAxis, T !== "xy" && x !== "xy" && x !== T) {
          a.prepared.name = null;
          for (var O = s, N = function(z) {
            if (z !== a.interactable) {
              var $ = a.interactable.options.drag;
              if (!$.manualStart && z.testIgnoreAllow($, O, s)) {
                var J = z.getAction(a.downPointer, a.downEvent, a, O);
                if (J && J.name === "drag" && function(F, te) {
                  if (!te)
                    return false;
                  var le = te.options.drag.startAxis;
                  return F === "xy" || le === "xy" || le === F;
                }(T, z) && Un.default.validateAction(J, z, O, s, o))
                  return z;
              }
            }
          }; c.default.element(O); ) {
            var L = o.interactables.forEachMatch(O, N);
            if (L) {
              a.prepared.name = "drag", a.interactable = L, a.element = O;
              break;
            }
            O = (0, R.parentNode)(O);
          }
        }
      }
    } } };
    _o.default = fd;
    var Ao = {};
    function Za(n) {
      var o = n.prepared && n.prepared.name;
      if (!o)
        return null;
      var a = n.interactable.options;
      return a[o].hold || a[o].delay;
    }
    u(Za, "re"), Object.defineProperty(Ao, "__esModule", { value: true }), Ao.default = void 0;
    var hd = { id: "auto-start/hold", install: function(n) {
      var o = n.defaults;
      n.usePlugin(Un.default), o.perAction.hold = 0, o.perAction.delay = 0;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(n) {
      var o = n.interaction, a = Za(o);
      a > 0 && (o.autoStartHoldTimer = setTimeout(function() {
        o.start(o.prepared, o.interactable, o.element);
      }, a));
    }, "interactions:move": function(n) {
      var o = n.interaction, a = n.duplicate;
      o.autoStartHoldTimer && o.pointerWasMoved && !a && (clearTimeout(o.autoStartHoldTimer), o.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(n) {
      var o = n.interaction;
      Za(o) > 0 && (o.prepared.name = null);
    } }, getHoldDuration: Za };
    Ao.default = hd;
    var Po = {};
    Object.defineProperty(Po, "__esModule", { value: true }), Po.default = void 0;
    var vd = { id: "auto-start", install: function(n) {
      n.usePlugin(Un.default), n.usePlugin(Ao.default), n.usePlugin(_o.default);
    } };
    Po.default = vd;
    var Vn = {};
    function md(n) {
      return /^(always|never|auto)$/.test(n) ? (this.options.preventDefault = n, this) : c.default.bool(n) ? (this.options.preventDefault = n ? "always" : "never", this) : this.options.preventDefault;
    }
    u(md, "le");
    function gd(n) {
      var o = n.interaction, a = n.event;
      o.interactable && o.interactable.checkAndPreventDefault(a);
    }
    u(gd, "ue");
    function Rl(n) {
      var o = n.Interactable;
      o.prototype.preventDefault = md, o.prototype.checkAndPreventDefault = function(a) {
        return function(s, p, f) {
          var m = s.options.preventDefault;
          if (m !== "never")
            if (m !== "always") {
              if (p.events.supportsPassive && /^touch(start|move)$/.test(f.type)) {
                var h = (0, e.getWindow)(f.target).document, g = p.getDocOptions(h);
                if (!g || !g.events || g.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(f.type) || c.default.element(f.target) && (0, R.matchesSelector)(f.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || f.preventDefault();
            } else
              f.preventDefault();
        }(this, n, a);
      }, n.interactions.docEvents.push({ type: "dragstart", listener: function(a) {
        for (var s = 0; s < n.interactions.list.length; s++) {
          var p = n.interactions.list[s];
          if (p.element && (p.element === a.target || (0, R.nodeContains)(p.element, a.target)))
            return void p.interactable.checkAndPreventDefault(a);
        }
      } });
    }
    u(Rl, "ce"), Object.defineProperty(Vn, "__esModule", { value: true }), Vn.install = Rl, Vn.default = void 0;
    var bd = { id: "core/interactablePreventDefault", install: Rl, listeners: ["down", "move", "up", "cancel"].reduce(function(n, o) {
      return n["interactions:".concat(o)] = gd, n;
    }, {}) };
    Vn.default = bd;
    var Ja = {};
    Object.defineProperty(Ja, "__esModule", { value: true }), Ja.default = void 0, Ja.default = {};
    var Ci, Ka = {};
    Object.defineProperty(Ka, "__esModule", { value: true }), Ka.default = void 0, function(n) {
      n.touchAction = "touchAction", n.boxSizing = "boxSizing", n.noListeners = "noListeners";
    }(Ci || (Ci = {})), Ci.touchAction, Ci.boxSizing, Ci.noListeners;
    var yd = { id: "dev-tools", install: function() {
    } };
    Ka.default = yd;
    var fn = {};
    Object.defineProperty(fn, "__esModule", { value: true }), fn.default = u(function n(o) {
      var a = {};
      for (var s in o) {
        var p = o[s];
        c.default.plainObject(p) ? a[s] = n(p) : c.default.array(p) ? a[s] = xe.from(p) : a[s] = p;
      }
      return a;
    }, "t");
    var hn = {};
    function Nl(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, m = false, h = void 0;
          try {
            for (var g, x = a[Symbol.iterator](); !(f = (g = x.next()).done) && (p.push(g.value), !s || p.length !== s); f = true)
              ;
          } catch (T) {
            m = true, h = T;
          } finally {
            try {
              f || x.return == null || x.return();
            } finally {
              if (m)
                throw h;
            }
          }
          return p;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return Gl(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Gl(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    u(Nl, "me");
    function Gl(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(Gl, "be");
    function xd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(xd, "xe");
    function vn(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(vn, "we"), Object.defineProperty(hn, "__esModule", { value: true }), hn.getRectOffset = Ll, hn.default = void 0;
    var wd = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), vn(this, "states", []), vn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), vn(this, "startDelta", void 0), vn(this, "result", void 0), vn(this, "endResult", void 0), vn(this, "edges", void 0), vn(this, "interaction", void 0), this.interaction = s, this.result = Io();
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s, p) {
        var f = s.phase, m = this.interaction, h = function(x) {
          var T = x.interactable.options[x.prepared.name], O = T.modifiers;
          return O && O.length ? O : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(N) {
            var L = T[N];
            return L && L.enabled && { options: L, methods: L._methods };
          }).filter(function(N) {
            return !!N;
          });
        }(m);
        this.prepareStates(h), this.edges = (0, U.default)({}, m.edges), this.startOffset = Ll(m.rect, p), this.startDelta = { x: 0, y: 0 };
        var g = this.fillArg({ phase: f, pageCoords: p, preEnd: false });
        return this.result = Io(), this.startAll(g), this.result = this.setAll(g);
      } }, { key: "fillArg", value: function(s) {
        var p = this.interaction;
        return s.interaction = p, s.interactable = p.interactable, s.element = p.element, s.rect = s.rect || p.rect, s.edges = this.edges, s.startOffset = this.startOffset, s;
      } }, { key: "startAll", value: function(s) {
        for (var p = 0; p < this.states.length; p++) {
          var f = this.states[p];
          f.methods.start && (s.state = f, f.methods.start(s));
        }
      } }, { key: "setAll", value: function(s) {
        var p = s.phase, f = s.preEnd, m = s.skipModifiers, h = s.rect;
        s.coords = (0, U.default)({}, s.pageCoords), s.rect = (0, U.default)({}, h);
        for (var g = m ? this.states.slice(m) : this.states, x = Io(s.coords, s.rect), T = 0; T < g.length; T++) {
          var O, N = g[T], L = N.options, z = (0, U.default)({}, s.coords), $ = null;
          (O = N.methods) != null && O.set && this.shouldDo(L, f, p) && (s.state = N, $ = N.methods.set(s), ce.addEdges(this.interaction.edges, s.rect, { x: s.coords.x - z.x, y: s.coords.y - z.y })), x.eventProps.push($);
        }
        x.delta.x = s.coords.x - s.pageCoords.x, x.delta.y = s.coords.y - s.pageCoords.y, x.rectDelta.left = s.rect.left - h.left, x.rectDelta.right = s.rect.right - h.right, x.rectDelta.top = s.rect.top - h.top, x.rectDelta.bottom = s.rect.bottom - h.bottom;
        var J = this.result.coords, F = this.result.rect;
        if (J && F) {
          var te = x.rect.left !== F.left || x.rect.right !== F.right || x.rect.top !== F.top || x.rect.bottom !== F.bottom;
          x.changed = te || J.x !== x.coords.x || J.y !== x.coords.y;
        }
        return x;
      } }, { key: "applyToInteraction", value: function(s) {
        var p = this.interaction, f = s.phase, m = p.coords.cur, h = p.coords.start, g = this.result, x = this.startDelta, T = g.delta;
        f === "start" && (0, U.default)(this.startDelta, g.delta);
        for (var O = 0; O < [[h, x], [m, T]].length; O++) {
          var N = Nl([[h, x], [m, T]][O], 2), L = N[0], z = N[1];
          L.page.x += z.x, L.page.y += z.y, L.client.x += z.x, L.client.y += z.y;
        }
        var $ = this.result.rectDelta, J = s.rect || p.rect;
        J.left += $.left, J.right += $.right, J.top += $.top, J.bottom += $.bottom, J.width = J.right - J.left, J.height = J.bottom - J.top;
      } }, { key: "setAndApply", value: function(s) {
        var p = this.interaction, f = s.phase, m = s.preEnd, h = s.skipModifiers, g = this.setAll(this.fillArg({ preEnd: m, phase: f, pageCoords: s.modifiedCoords || p.coords.cur.page }));
        if (this.result = g, !g.changed && (!h || h < this.states.length) && p.interacting())
          return false;
        if (s.modifiedCoords) {
          var x = p.coords.cur.page, T = { x: s.modifiedCoords.x - x.x, y: s.modifiedCoords.y - x.y };
          g.coords.x += T.x, g.coords.y += T.y, g.delta.x += T.x, g.delta.y += T.y;
        }
        this.applyToInteraction(s);
      } }, { key: "beforeEnd", value: function(s) {
        var p = s.interaction, f = s.event, m = this.states;
        if (m && m.length) {
          for (var h = false, g = 0; g < m.length; g++) {
            var x = m[g];
            s.state = x;
            var T = x.options, O = x.methods, N = O.beforeEnd && O.beforeEnd(s);
            if (N)
              return this.endResult = N, false;
            h = h || !h && this.shouldDo(T, true, s.phase, true);
          }
          h && p.move({ event: f, preEnd: true });
        }
      } }, { key: "stop", value: function(s) {
        var p = s.interaction;
        if (this.states && this.states.length) {
          var f = (0, U.default)({ states: this.states, interactable: p.interactable, element: p.element, rect: null }, s);
          this.fillArg(f);
          for (var m = 0; m < this.states.length; m++) {
            var h = this.states[m];
            f.state = h, h.methods.stop && h.methods.stop(f);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(s) {
        this.states = [];
        for (var p = 0; p < s.length; p++) {
          var f = s[p], m = f.options, h = f.methods, g = f.name;
          this.states.push({ options: m, methods: h, index: p, name: g });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(s) {
        var p = s.interaction, f = p.coords, m = p.rect, h = p.modification;
        if (h.result) {
          for (var g = h.startDelta, x = h.result, T = x.delta, O = x.rectDelta, N = [[f.start, g], [f.cur, T]], L = 0; L < N.length; L++) {
            var z = Nl(N[L], 2), $ = z[0], J = z[1];
            $.page.x -= J.x, $.page.y -= J.y, $.client.x -= J.x, $.client.y -= J.y;
          }
          m.left -= O.left, m.right -= O.right, m.top -= O.top, m.bottom -= O.bottom;
        }
      } }, { key: "shouldDo", value: function(s, p, f, m) {
        return !(!s || s.enabled === false || m && !s.endOnly || s.endOnly && !p || f === "start" && !s.setStart);
      } }, { key: "copyFrom", value: function(s) {
        this.startOffset = s.startOffset, this.startDelta = s.startDelta, this.edges = s.edges, this.states = s.states.map(function(p) {
          return (0, fn.default)(p);
        }), this.result = Io((0, U.default)({}, s.result.coords), (0, U.default)({}, s.result.rect));
      } }, { key: "destroy", value: function() {
        for (var s in this)
          this[s] = null;
      } }]) && xd(o.prototype, a), n;
    }();
    function Io(n, o) {
      return { rect: o, coords: n, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    u(Io, "Pe");
    function Ll(n, o) {
      return n ? { left: o.x - n.left, top: o.y - n.top, right: n.right - o.x, bottom: n.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    u(Ll, "Oe"), hn.default = wd;
    var ht = {};
    function zo(n) {
      var o = n.iEvent, a = n.interaction.modification.result;
      a && (o.modifiers = a.eventProps);
    }
    u(zo, "Ee"), Object.defineProperty(ht, "__esModule", { value: true }), ht.makeModifier = function(n, o) {
      var a = n.defaults, s = { start: n.start, set: n.set, beforeEnd: n.beforeEnd, stop: n.stop }, p = u(function(f) {
        var m = f || {};
        for (var h in m.enabled = m.enabled !== false, a)
          h in m || (m[h] = a[h]);
        var g = { options: m, methods: s, name: o, enable: function() {
          return m.enabled = true, g;
        }, disable: function() {
          return m.enabled = false, g;
        } };
        return g;
      }, "o");
      return o && typeof o == "string" && (p._defaults = a, p._methods = s), p;
    }, ht.addEventModifiers = zo, ht.default = void 0;
    var Ed = { id: "modifiers/base", before: ["actions"], install: function(n) {
      n.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.modification = new hn.default(o);
    }, "interactions:before-action-start": function(n) {
      var o = n.interaction.modification;
      o.start(n, n.interaction.coords.start.page), n.interaction.edges = o.edges, o.applyToInteraction(n);
    }, "interactions:before-action-move": function(n) {
      return n.interaction.modification.setAndApply(n);
    }, "interactions:before-action-end": function(n) {
      return n.interaction.modification.beforeEnd(n);
    }, "interactions:action-start": zo, "interactions:action-move": zo, "interactions:action-end": zo, "interactions:after-action-start": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-move": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:stop": function(n) {
      return n.interaction.modification.stop(n);
    } } };
    ht.default = Ed;
    var Oi = {};
    Object.defineProperty(Oi, "__esModule", { value: true }), Oi.defaults = void 0, Oi.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var Mi = {};
    function ql(n) {
      return (ql = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(ql, "ke");
    function Sd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Sd, "Ie");
    function jl(n, o) {
      return (jl = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    u(jl, "De");
    function Td(n, o) {
      return !o || ql(o) !== "object" && typeof o != "function" ? Ce(n) : o;
    }
    u(Td, "Ae");
    function Ce(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    u(Ce, "Re");
    function Qa(n) {
      return (Qa = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    u(Qa, "ze");
    function Pe(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(Pe, "Ce"), Object.defineProperty(Mi, "__esModule", { value: true }), Mi.InteractEvent = void 0;
    var Bl = function(n) {
      (function(h, g) {
        if (typeof g != "function" && g !== null)
          throw new TypeError("Super expression must either be null or a function");
        h.prototype = Object.create(g && g.prototype, { constructor: { value: h, writable: true, configurable: true } }), g && jl(h, g);
      })(m, n);
      var o, a, s, p, f = (s = m, p = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (h) {
          return false;
        }
      }(), function() {
        var h, g = Qa(s);
        if (p) {
          var x = Qa(this).constructor;
          h = Reflect.construct(g, arguments, x);
        } else
          h = g.apply(this, arguments);
        return Td(this, h);
      });
      function m(h, g, x, T, O, N, L) {
        var z;
        (function(je, be) {
          if (!(je instanceof be))
            throw new TypeError("Cannot call a class as a function");
        })(this, m), Pe(Ce(z = f.call(this, h)), "target", void 0), Pe(Ce(z), "currentTarget", void 0), Pe(Ce(z), "relatedTarget", null), Pe(Ce(z), "screenX", void 0), Pe(Ce(z), "screenY", void 0), Pe(Ce(z), "button", void 0), Pe(Ce(z), "buttons", void 0), Pe(Ce(z), "ctrlKey", void 0), Pe(Ce(z), "shiftKey", void 0), Pe(Ce(z), "altKey", void 0), Pe(Ce(z), "metaKey", void 0), Pe(Ce(z), "page", void 0), Pe(Ce(z), "client", void 0), Pe(Ce(z), "delta", void 0), Pe(Ce(z), "rect", void 0), Pe(Ce(z), "x0", void 0), Pe(Ce(z), "y0", void 0), Pe(Ce(z), "t0", void 0), Pe(Ce(z), "dt", void 0), Pe(Ce(z), "duration", void 0), Pe(Ce(z), "clientX0", void 0), Pe(Ce(z), "clientY0", void 0), Pe(Ce(z), "velocity", void 0), Pe(Ce(z), "speed", void 0), Pe(Ce(z), "swipe", void 0), Pe(Ce(z), "timeStamp", void 0), Pe(Ce(z), "axes", void 0), Pe(Ce(z), "preEnd", void 0), O = O || h.element;
        var $ = h.interactable, J = ($ && $.options || Oi.defaults).deltaSource, F = (0, Le.default)($, O, x), te = T === "start", le = T === "end", pe = te ? Ce(z) : h.prevEvent, Ee = te ? h.coords.start : le ? { page: pe.page, client: pe.client, timeStamp: h.coords.cur.timeStamp } : h.coords.cur;
        return z.page = (0, U.default)({}, Ee.page), z.client = (0, U.default)({}, Ee.client), z.rect = (0, U.default)({}, h.rect), z.timeStamp = Ee.timeStamp, le || (z.page.x -= F.x, z.page.y -= F.y, z.client.x -= F.x, z.client.y -= F.y), z.ctrlKey = g.ctrlKey, z.altKey = g.altKey, z.shiftKey = g.shiftKey, z.metaKey = g.metaKey, z.button = g.button, z.buttons = g.buttons, z.target = O, z.currentTarget = O, z.preEnd = N, z.type = L || x + (T || ""), z.interactable = $, z.t0 = te ? h.pointers[h.pointers.length - 1].downTime : pe.t0, z.x0 = h.coords.start.page.x - F.x, z.y0 = h.coords.start.page.y - F.y, z.clientX0 = h.coords.start.client.x - F.x, z.clientY0 = h.coords.start.client.y - F.y, z.delta = te || le ? { x: 0, y: 0 } : { x: z[J].x - pe[J].x, y: z[J].y - pe[J].y }, z.dt = h.coords.delta.timeStamp, z.duration = z.timeStamp - z.t0, z.velocity = (0, U.default)({}, h.coords.velocity[J]), z.speed = (0, Ke.default)(z.velocity.x, z.velocity.y), z.swipe = le || T === "inertiastart" ? z.getSwipe() : null, z;
      }
      return u(m, "a"), o = m, (a = [{ key: "getSwipe", value: function() {
        var h = this._interaction;
        if (h.prevEvent.speed < 600 || this.timeStamp - h.prevEvent.timeStamp > 150)
          return null;
        var g = 180 * Math.atan2(h.prevEvent.velocityY, h.prevEvent.velocityX) / Math.PI;
        g < 0 && (g += 360);
        var x = 112.5 <= g && g < 247.5, T = 202.5 <= g && g < 337.5;
        return { up: T, down: !T && 22.5 <= g && g < 157.5, left: x, right: !x && (292.5 <= g || g < 67.5), angle: g, speed: h.prevEvent.speed, velocity: { x: h.prevEvent.velocityX, y: h.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && Sd(o.prototype, a), m;
    }(Rt.BaseEvent);
    Mi.InteractEvent = Bl, Object.defineProperties(Bl.prototype, { pageX: { get: function() {
      return this.page.x;
    }, set: function(n) {
      this.page.x = n;
    } }, pageY: { get: function() {
      return this.page.y;
    }, set: function(n) {
      this.page.y = n;
    } }, clientX: { get: function() {
      return this.client.x;
    }, set: function(n) {
      this.client.x = n;
    } }, clientY: { get: function() {
      return this.client.y;
    }, set: function(n) {
      this.client.y = n;
    } }, dx: { get: function() {
      return this.delta.x;
    }, set: function(n) {
      this.delta.x = n;
    } }, dy: { get: function() {
      return this.delta.y;
    }, set: function(n) {
      this.delta.y = n;
    } }, velocityX: { get: function() {
      return this.velocity.x;
    }, set: function(n) {
      this.velocity.x = n;
    } }, velocityY: { get: function() {
      return this.velocity.y;
    }, set: function(n) {
      this.velocity.y = n;
    } } });
    var _i = {};
    function Ai(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(Ai, "Ye"), Object.defineProperty(_i, "__esModule", { value: true }), _i.PointerInfo = void 0, _i.PointerInfo = u(function n(o, a, s, p, f) {
      (function(m, h) {
        if (!(m instanceof h))
          throw new TypeError("Cannot call a class as a function");
      })(this, n), Ai(this, "id", void 0), Ai(this, "pointer", void 0), Ai(this, "event", void 0), Ai(this, "downTime", void 0), Ai(this, "downTarget", void 0), this.id = o, this.pointer = a, this.event = s, this.downTime = p, this.downTarget = f;
    }, "t");
    var Do, ko, Pt = {};
    function Cd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Cd, "Ue");
    function He(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(He, "Ve"), Object.defineProperty(Pt, "__esModule", { value: true }), Object.defineProperty(Pt, "PointerInfo", { enumerable: true, get: function() {
      return _i.PointerInfo;
    } }), Pt.default = Pt.Interaction = Pt._ProxyMethods = Pt._ProxyValues = void 0, Pt._ProxyValues = Do, function(n) {
      n.interactable = "", n.element = "", n.prepared = "", n.pointerIsDown = "", n.pointerWasMoved = "", n._proxy = "";
    }(Do || (Pt._ProxyValues = Do = {})), Pt._ProxyMethods = ko, function(n) {
      n.start = "", n.move = "", n.end = "", n.stop = "", n.interacting = "";
    }(ko || (Pt._ProxyMethods = ko = {}));
    var Od = 0, Hl = function() {
      function n(s) {
        var p = this, f = s.pointerType, m = s.scopeFire;
        (function(N, L) {
          if (!(N instanceof L))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), He(this, "interactable", null), He(this, "element", null), He(this, "rect", void 0), He(this, "_rects", void 0), He(this, "edges", void 0), He(this, "_scopeFire", void 0), He(this, "prepared", { name: null, axis: null, edges: null }), He(this, "pointerType", void 0), He(this, "pointers", []), He(this, "downEvent", null), He(this, "downPointer", {}), He(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), He(this, "prevEvent", null), He(this, "pointerIsDown", false), He(this, "pointerWasMoved", false), He(this, "_interacting", false), He(this, "_ending", false), He(this, "_stopped", true), He(this, "_proxy", null), He(this, "simulation", null), He(this, "doMove", (0, qt.warnOnce)(function(N) {
          this.move(N);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), He(this, "coords", { start: K.newCoords(), prev: K.newCoords(), cur: K.newCoords(), delta: K.newCoords(), velocity: K.newCoords() }), He(this, "_id", Od++), this._scopeFire = m, this.pointerType = f;
        var h = this;
        this._proxy = {};
        var g = u(function(N) {
          Object.defineProperty(p._proxy, N, { get: function() {
            return h[N];
          } });
        }, "a");
        for (var x in Do)
          g(x);
        var T = u(function(N) {
          Object.defineProperty(p._proxy, N, { value: function() {
            return h[N].apply(h, arguments);
          } });
        }, "l");
        for (var O in ko)
          T(O);
        this._scopeFire("interactions:new", { interaction: this });
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(s, p, f) {
        var m = this.updatePointer(s, p, f, true), h = this.pointers[m];
        this._scopeFire("interactions:down", { pointer: s, event: p, eventTarget: f, pointerIndex: m, pointerInfo: h, type: "down", interaction: this });
      } }, { key: "start", value: function(s, p, f) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (s.name === "gesture" ? 2 : 1) || !p.options[s.name].enabled) && ((0, qt.copyAction)(this.prepared, s), this.interactable = p, this.element = f, this.rect = p.getRect(f), this.edges = this.prepared.edges ? (0, U.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(s, p, f) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(s, p, f, false);
        var m, h, g = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (m = this.coords.cur.client.x - this.coords.start.client.x, h = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, Ke.default)(m, h) > this.pointerMoveTolerance);
        var x = this.getPointerIndex(s), T = { pointer: s, pointerIndex: x, pointerInfo: this.pointers[x], event: p, type: "move", eventTarget: f, dx: m, dy: h, duplicate: g, interaction: this };
        g || K.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", T), g || this.simulation || (this.interacting() && (T.type = null, this.move(T)), this.pointerWasMoved && K.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(s) {
        s && s.event || K.setZeroCoords(this.coords.delta), (s = (0, U.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, s || {})).phase = "move", this._doPhase(s);
      } }, { key: "pointerUp", value: function(s, p, f, m) {
        var h = this.getPointerIndex(s);
        h === -1 && (h = this.updatePointer(s, p, f, false));
        var g = /cancel$/i.test(p.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(g), { pointer: s, pointerIndex: h, pointerInfo: this.pointers[h], event: p, eventTarget: f, type: g, curEventTarget: m, interaction: this }), this.simulation || this.end(p), this.removePointer(s, p);
      } }, { key: "documentBlur", value: function(s) {
        this.end(s), this._scopeFire("interactions:blur", { event: s, type: "blur", interaction: this });
      } }, { key: "end", value: function(s) {
        var p;
        this._ending = true, s = s || this._latestPointer.event, this.interacting() && (p = this._doPhase({ event: s, interaction: this, phase: "end" })), this._ending = false, p === true && this.stop();
      } }, { key: "currentAction", value: function() {
        return this._interacting ? this.prepared.name : null;
      } }, { key: "interacting", value: function() {
        return this._interacting;
      } }, { key: "stop", value: function() {
        this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = false, this._stopped = true, this.prepared.name = this.prevEvent = null;
      } }, { key: "getPointerIndex", value: function(s) {
        var p = K.getPointerId(s);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : xe.findIndex(this.pointers, function(f) {
          return f.id === p;
        });
      } }, { key: "getPointerInfo", value: function(s) {
        return this.pointers[this.getPointerIndex(s)];
      } }, { key: "updatePointer", value: function(s, p, f, m) {
        var h = K.getPointerId(s), g = this.getPointerIndex(s), x = this.pointers[g];
        return m = m !== false && (m || /(down|start)$/i.test(p.type)), x ? x.pointer = s : (x = new _i.PointerInfo(h, s, p, null, null), g = this.pointers.length, this.pointers.push(x)), K.setCoords(this.coords.cur, this.pointers.map(function(T) {
          return T.pointer;
        }), this._now()), K.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), m && (this.pointerIsDown = true, x.downTime = this.coords.cur.timeStamp, x.downTarget = f, K.pointerExtend(this.downPointer, s), this.interacting() || (K.copyCoords(this.coords.start, this.coords.cur), K.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = p, this.pointerWasMoved = false)), this._updateLatestPointer(s, p, f), this._scopeFire("interactions:update-pointer", { pointer: s, event: p, eventTarget: f, down: m, pointerInfo: x, pointerIndex: g, interaction: this }), g;
      } }, { key: "removePointer", value: function(s, p) {
        var f = this.getPointerIndex(s);
        if (f !== -1) {
          var m = this.pointers[f];
          this._scopeFire("interactions:remove-pointer", { pointer: s, event: p, eventTarget: null, pointerIndex: f, pointerInfo: m, interaction: this }), this.pointers.splice(f, 1), this.pointerIsDown = false;
        }
      } }, { key: "_updateLatestPointer", value: function(s, p, f) {
        this._latestPointer.pointer = s, this._latestPointer.event = p, this._latestPointer.eventTarget = f;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(s, p, f, m) {
        return new Mi.InteractEvent(this, s, this.prepared.name, p, this.element, f, m);
      } }, { key: "_fireEvent", value: function(s) {
        this.interactable.fire(s), (!this.prevEvent || s.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = s);
      } }, { key: "_doPhase", value: function(s) {
        var p = s.event, f = s.phase, m = s.preEnd, h = s.type, g = this.rect;
        if (g && f === "move" && (ce.addEdges(this.edges, g, this.coords.delta[this.interactable.options.deltaSource]), g.width = g.right - g.left, g.height = g.bottom - g.top), this._scopeFire("interactions:before-action-".concat(f), s) === false)
          return false;
        var x = s.iEvent = this._createPreparedEvent(p, f, m, h);
        return this._scopeFire("interactions:action-".concat(f), s), f === "start" && (this.prevEvent = x), this._fireEvent(x), this._scopeFire("interactions:after-action-".concat(f), s), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }]) && Cd(o.prototype, a), n;
    }();
    Pt.Interaction = Hl;
    var Md = Hl;
    Pt.default = Md;
    var mn = {};
    function $l(n) {
      n.pointerIsDown && (ts(n.coords.cur, n.offset.total), n.offset.pending.x = 0, n.offset.pending.y = 0);
    }
    u($l, "He");
    function Fl(n) {
      es(n.interaction);
    }
    u(Fl, "Ke");
    function es(n) {
      if (!function(a) {
        return !(!a.offset.pending.x && !a.offset.pending.y);
      }(n))
        return false;
      var o = n.offset.pending;
      return ts(n.coords.cur, o), ts(n.coords.delta, o), ce.addEdges(n.edges, n.rect, o), o.x = 0, o.y = 0, true;
    }
    u(es, "Ze");
    function _d(n) {
      var o = n.x, a = n.y;
      this.offset.pending.x += o, this.offset.pending.y += a, this.offset.total.x += o, this.offset.total.y += a;
    }
    u(_d, "Je");
    function ts(n, o) {
      var a = n.page, s = n.client, p = o.x, f = o.y;
      a.x += p, a.y += f, s.x += p, s.y += f;
    }
    u(ts, "Qe"), Object.defineProperty(mn, "__esModule", { value: true }), mn.addTotal = $l, mn.applyPending = es, mn.default = void 0, Pt._ProxyMethods.offsetBy = "";
    var Ad = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(n) {
      n.Interaction.prototype.offsetBy = _d;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(n) {
      return $l(n.interaction);
    }, "interactions:before-action-start": Fl, "interactions:before-action-move": Fl, "interactions:before-action-end": function(n) {
      var o = n.interaction;
      if (es(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } };
    mn.default = Ad;
    var Xn = {};
    function Pd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Pd, "nn");
    function ot(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(ot, "rn"), Object.defineProperty(Xn, "__esModule", { value: true }), Xn.default = Xn.InertiaState = void 0;
    var Wl = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), ot(this, "active", false), ot(this, "isModified", false), ot(this, "smoothEnd", false), ot(this, "allowResume", false), ot(this, "modification", void 0), ot(this, "modifierCount", 0), ot(this, "modifierArg", void 0), ot(this, "startCoords", void 0), ot(this, "t0", 0), ot(this, "v0", 0), ot(this, "te", 0), ot(this, "targetOffset", void 0), ot(this, "modifiedOffset", void 0), ot(this, "currentOffset", void 0), ot(this, "lambda_v0", 0), ot(this, "one_ve_v0", 0), ot(this, "timeout", void 0), ot(this, "interaction", void 0), this.interaction = s;
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s) {
        var p = this.interaction, f = Ro(p);
        if (!f || !f.enabled)
          return false;
        var m = p.coords.velocity.client, h = (0, Ke.default)(m.x, m.y), g = this.modification || (this.modification = new hn.default(p));
        if (g.copyFrom(p.modification), this.t0 = p._now(), this.allowResume = f.allowResume, this.v0 = h, this.currentOffset = { x: 0, y: 0 }, this.startCoords = p.coords.cur.page, this.modifierArg = g.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - p.coords.cur.timeStamp < 50 && h > f.minSpeed && h > f.endSpeed)
          this.startInertia();
        else {
          if (g.result = g.setAll(this.modifierArg), !g.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return p.modification.result.rect = null, p.offsetBy(this.targetOffset), p._doPhase({ interaction: p, event: s, phase: "inertiastart" }), p.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), p.modification.result.rect = null, this.active = true, p.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var s = this, p = this.interaction.coords.velocity.client, f = Ro(this.interaction), m = f.resistance, h = -Math.log(f.endSpeed / this.v0) / m;
        this.targetOffset = { x: (p.x - h) / m, y: (p.y - h) / m }, this.te = h, this.lambda_v0 = m / this.v0, this.one_ve_v0 = 1 - f.endSpeed / this.v0;
        var g = this.modification, x = this.modifierArg;
        x.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, g.result = g.setAll(x), g.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + g.result.delta.x, y: this.targetOffset.y + g.result.delta.y }), this.onNextFrame(function() {
          return s.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var s = this;
        this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return s.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(s) {
        var p = this;
        this.timeout = Gt.default.request(function() {
          p.active && s();
        });
      } }, { key: "inertiaTick", value: function() {
        var s, p, f, m, h, g = this, x = this.interaction, T = Ro(x).resistance, O = (x._now() - this.t0) / 1e3;
        if (O < this.te) {
          var N, L = 1 - (Math.exp(-T * O) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (s = this.targetOffset.x, p = this.targetOffset.y, f = this.modifiedOffset.x, m = this.modifiedOffset.y, N = { x: Ul(h = L, 0, s, f), y: Ul(h, 0, p, m) }) : N = { x: this.targetOffset.x * L, y: this.targetOffset.y * L };
          var z = { x: N.x - this.currentOffset.x, y: N.y - this.currentOffset.y };
          this.currentOffset.x += z.x, this.currentOffset.y += z.y, x.offsetBy(z), x.move(), this.onNextFrame(function() {
            return g.inertiaTick();
          });
        } else
          x.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var s = this, p = this.interaction, f = p._now() - this.t0, m = Ro(p).smoothEndDuration;
        if (f < m) {
          var h = { x: Vl(f, 0, this.targetOffset.x, m), y: Vl(f, 0, this.targetOffset.y, m) }, g = { x: h.x - this.currentOffset.x, y: h.y - this.currentOffset.y };
          this.currentOffset.x += g.x, this.currentOffset.y += g.y, p.offsetBy(g), p.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return s.smoothEndTick();
          });
        } else
          p.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(s) {
        var p = s.pointer, f = s.event, m = s.eventTarget, h = this.interaction;
        h.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), h.updatePointer(p, f, m, true), h._doPhase({ interaction: h, event: f, phase: "resume" }), (0, K.copyCoords)(h.coords.prev, h.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, Gt.default.cancel(this.timeout);
      } }]) && Pd(o.prototype, a), n;
    }();
    function Ro(n) {
      var o = n.interactable, a = n.prepared;
      return o && o.options && a.name && o.options[a.name].inertia;
    }
    u(Ro, "an");
    function Ul(n, o, a, s) {
      var p = 1 - n;
      return p * p * o + 2 * p * n * a + n * n * s;
    }
    u(Ul, "sn");
    function Vl(n, o, a, s) {
      return -a * (n /= s) * (n - 2) + o;
    }
    u(Vl, "ln"), Xn.InertiaState = Wl;
    var Id = { id: "inertia", before: ["modifiers", "actions"], install: function(n) {
      var o = n.defaults;
      n.usePlugin(mn.default), n.usePlugin(ht.default), n.actions.phases.inertiastart = true, n.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.inertia = new Wl(o);
    }, "interactions:before-action-end": function(n) {
      var o = n.interaction, a = n.event;
      return (!o._interacting || o.simulation || !o.inertia.start(a)) && null;
    }, "interactions:down": function(n) {
      var o = n.interaction, a = n.eventTarget, s = o.inertia;
      if (s.active)
        for (var p = a; c.default.element(p); ) {
          if (p === o.element) {
            s.resume(n);
            break;
          }
          p = R.parentNode(p);
        }
    }, "interactions:stop": function(n) {
      var o = n.interaction.inertia;
      o.active && o.stop();
    }, "interactions:before-action-resume": function(n) {
      var o = n.interaction.modification;
      o.stop(n), o.start(n, n.interaction.coords.cur.page), o.applyToInteraction(n);
    }, "interactions:before-action-inertiastart": function(n) {
      return n.interaction.modification.setAndApply(n);
    }, "interactions:action-resume": ht.addEventModifiers, "interactions:action-inertiastart": ht.addEventModifiers, "interactions:after-action-inertiastart": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-resume": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    } } };
    Xn.default = Id;
    var Pi = {};
    function zd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(zd, "fn");
    function Ii(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(Ii, "dn");
    function Xl(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        if (n.immediatePropagationStopped)
          break;
        s(n);
      }
    }
    u(Xl, "pn"), Object.defineProperty(Pi, "__esModule", { value: true }), Pi.Eventable = void 0;
    var Dd = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Ii(this, "options", void 0), Ii(this, "types", {}), Ii(this, "propagationStopped", false), Ii(this, "immediatePropagationStopped", false), Ii(this, "global", void 0), this.options = (0, U.default)({}, s || {});
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "fire", value: function(s) {
        var p, f = this.global;
        (p = this.types[s.type]) && Xl(s, p), !s.propagationStopped && f && (p = f[s.type]) && Xl(s, p);
      } }, { key: "on", value: function(s, p) {
        var f = (0, fe.default)(s, p);
        for (s in f)
          this.types[s] = xe.merge(this.types[s] || [], f[s]);
      } }, { key: "off", value: function(s, p) {
        var f = (0, fe.default)(s, p);
        for (s in f) {
          var m = this.types[s];
          if (m && m.length)
            for (var h = 0; h < f[s].length; h++) {
              var g = f[s][h], x = m.indexOf(g);
              x !== -1 && m.splice(x, 1);
            }
        }
      } }, { key: "getRect", value: function(s) {
        return null;
      } }]) && zd(o.prototype, a), n;
    }();
    Pi.Eventable = Dd;
    var zi = {};
    Object.defineProperty(zi, "__esModule", { value: true }), zi.default = function(n, o) {
      if (o.phaselessTypes[n])
        return true;
      for (var a in o.map)
        if (n.indexOf(a) === 0 && n.substr(a.length) in o.phases)
          return true;
      return false;
    };
    var rs = {};
    Object.defineProperty(rs, "__esModule", { value: true }), rs.createInteractStatic = function(n) {
      var o = u(function a(s, p) {
        var f = n.interactables.get(s, p);
        return f || ((f = n.interactables.new(s, p)).events.global = a.globalEvents), f;
      }, "e");
      return o.getPointerAverage = K.pointerAverage, o.getTouchBBox = K.touchBBox, o.getTouchDistance = K.touchDistance, o.getTouchAngle = K.touchAngle, o.getElementRect = R.getElementRect, o.getElementClientRect = R.getElementClientRect, o.matchesSelector = R.matchesSelector, o.closest = R.closest, o.globalEvents = {}, o.version = "1.10.11", o.scope = n, o.use = function(a, s) {
        return this.scope.usePlugin(a, s), this;
      }, o.isSet = function(a, s) {
        return !!this.scope.interactables.get(a, s && s.context);
      }, o.on = (0, qt.warnOnce)(function(a, s, p) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var f = 0; f < a.length; f++) {
            var m = a[f];
            this.on(m, s, p);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var h in a)
            this.on(h, a[h], s);
          return this;
        }
        return (0, zi.default)(a, this.scope.actions) ? this.globalEvents[a] ? this.globalEvents[a].push(s) : this.globalEvents[a] = [s] : this.scope.events.add(this.scope.document, a, s, { options: p }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, qt.warnOnce)(function(a, s, p) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var f = 0; f < a.length; f++) {
            var m = a[f];
            this.off(m, s, p);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var h in a)
            this.off(h, a[h], s);
          return this;
        }
        var g;
        return (0, zi.default)(a, this.scope.actions) ? a in this.globalEvents && (g = this.globalEvents[a].indexOf(s)) !== -1 && this.globalEvents[a].splice(g, 1) : this.scope.events.remove(this.scope.document, a, s, p), this;
      }, "The interact.off() method is being deprecated"), o.debug = function() {
        return this.scope;
      }, o.supportsTouch = function() {
        return q.default.supportsTouch;
      }, o.supportsPointerEvent = function() {
        return q.default.supportsPointerEvent;
      }, o.stop = function() {
        for (var a = 0; a < this.scope.interactions.list.length; a++)
          this.scope.interactions.list[a].stop();
        return this;
      }, o.pointerMoveTolerance = function(a) {
        return c.default.number(a) ? (this.scope.interactions.pointerMoveTolerance = a, this) : this.scope.interactions.pointerMoveTolerance;
      }, o.addDocument = function(a, s) {
        this.scope.addDocument(a, s);
      }, o.removeDocument = function(a) {
        this.scope.removeDocument(a);
      }, o;
    };
    var No = {};
    function kd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(kd, "mn");
    function kr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(kr, "bn"), Object.defineProperty(No, "__esModule", { value: true }), No.Interactable = void 0;
    var Rd = function() {
      function n(s, p, f, m) {
        (function(h, g) {
          if (!(h instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), kr(this, "options", void 0), kr(this, "_actions", void 0), kr(this, "target", void 0), kr(this, "events", new Pi.Eventable()), kr(this, "_context", void 0), kr(this, "_win", void 0), kr(this, "_doc", void 0), kr(this, "_scopeEvents", void 0), kr(this, "_rectChecker", void 0), this._actions = p.actions, this.target = s, this._context = p.context || f, this._win = (0, e.getWindow)((0, R.trySelector)(s) ? this._context : s), this._doc = this._win.document, this._scopeEvents = m, this.set(p);
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(s, p) {
        return c.default.func(p.onstart) && this.on("".concat(s, "start"), p.onstart), c.default.func(p.onmove) && this.on("".concat(s, "move"), p.onmove), c.default.func(p.onend) && this.on("".concat(s, "end"), p.onend), c.default.func(p.oninertiastart) && this.on("".concat(s, "inertiastart"), p.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(s, p, f) {
        (c.default.array(p) || c.default.object(p)) && this.off(s, p), (c.default.array(f) || c.default.object(f)) && this.on(s, f);
      } }, { key: "setPerAction", value: function(s, p) {
        var f = this._defaults;
        for (var m in p) {
          var h = m, g = this.options[s], x = p[h];
          h === "listeners" && this.updatePerActionListeners(s, g.listeners, x), c.default.array(x) ? g[h] = xe.from(x) : c.default.plainObject(x) ? (g[h] = (0, U.default)(g[h] || {}, (0, fn.default)(x)), c.default.object(f.perAction[h]) && "enabled" in f.perAction[h] && (g[h].enabled = x.enabled !== false)) : c.default.bool(x) && c.default.object(f.perAction[h]) ? g[h].enabled = x : g[h] = x;
        }
      } }, { key: "getRect", value: function(s) {
        return s = s || (c.default.element(this.target) ? this.target : null), c.default.string(this.target) && (s = s || this._context.querySelector(this.target)), (0, R.getElementRect)(s);
      } }, { key: "rectChecker", value: function(s) {
        var p = this;
        return c.default.func(s) ? (this._rectChecker = s, this.getRect = function(f) {
          var m = (0, U.default)({}, p._rectChecker(f));
          return "width" in m || (m.width = m.right - m.left, m.height = m.bottom - m.top), m;
        }, this) : s === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(s, p) {
        if ((0, R.trySelector)(p) || c.default.object(p)) {
          for (var f in this.options[s] = p, this._actions.map)
            this.options[f][s] = p;
          return this;
        }
        return this.options[s];
      } }, { key: "origin", value: function(s) {
        return this._backCompatOption("origin", s);
      } }, { key: "deltaSource", value: function(s) {
        return s === "page" || s === "client" ? (this.options.deltaSource = s, this) : this.options.deltaSource;
      } }, { key: "context", value: function() {
        return this._context;
      } }, { key: "inContext", value: function(s) {
        return this._context === s.ownerDocument || (0, R.nodeContains)(this._context, s);
      } }, { key: "testIgnoreAllow", value: function(s, p, f) {
        return !this.testIgnore(s.ignoreFrom, p, f) && this.testAllow(s.allowFrom, p, f);
      } }, { key: "testAllow", value: function(s, p, f) {
        return !s || !!c.default.element(f) && (c.default.string(s) ? (0, R.matchesUpTo)(f, s, p) : !!c.default.element(s) && (0, R.nodeContains)(s, f));
      } }, { key: "testIgnore", value: function(s, p, f) {
        return !(!s || !c.default.element(f)) && (c.default.string(s) ? (0, R.matchesUpTo)(f, s, p) : !!c.default.element(s) && (0, R.nodeContains)(s, f));
      } }, { key: "fire", value: function(s) {
        return this.events.fire(s), this;
      } }, { key: "_onOff", value: function(s, p, f, m) {
        c.default.object(p) && !c.default.array(p) && (m = f, f = null);
        var h = s === "on" ? "add" : "remove", g = (0, fe.default)(p, f);
        for (var x in g) {
          x === "wheel" && (x = q.default.wheelEvent);
          for (var T = 0; T < g[x].length; T++) {
            var O = g[x][T];
            (0, zi.default)(x, this._actions) ? this.events[s](x, O) : c.default.string(this.target) ? this._scopeEvents["".concat(h, "Delegate")](this.target, this._context, x, O, m) : this._scopeEvents[h](this.target, x, O, m);
          }
        }
        return this;
      } }, { key: "on", value: function(s, p, f) {
        return this._onOff("on", s, p, f);
      } }, { key: "off", value: function(s, p, f) {
        return this._onOff("off", s, p, f);
      } }, { key: "set", value: function(s) {
        var p = this._defaults;
        for (var f in c.default.object(s) || (s = {}), this.options = (0, fn.default)(p.base), this._actions.methodDict) {
          var m = f, h = this._actions.methodDict[m];
          this.options[m] = {}, this.setPerAction(m, (0, U.default)((0, U.default)({}, p.perAction), p.actions[m])), this[h](s[m]);
        }
        for (var g in s)
          c.default.func(this[g]) && this[g](s[g]);
        return this;
      } }, { key: "unset", value: function() {
        if (c.default.string(this.target))
          for (var s in this._scopeEvents.delegatedEvents)
            for (var p = this._scopeEvents.delegatedEvents[s], f = p.length - 1; f >= 0; f--) {
              var m = p[f], h = m.selector, g = m.context, x = m.listeners;
              h === this.target && g === this._context && p.splice(f, 1);
              for (var T = x.length - 1; T >= 0; T--)
                this._scopeEvents.removeDelegate(this.target, this._context, s, x[T][0], x[T][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && kd(o.prototype, a), n;
    }();
    No.Interactable = Rd;
    var Go = {};
    function Nd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Nd, "_n");
    function ns(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(ns, "Pn"), Object.defineProperty(Go, "__esModule", { value: true }), Go.InteractableSet = void 0;
    var Gd = function() {
      function n(s) {
        var p = this;
        (function(f, m) {
          if (!(f instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), ns(this, "list", []), ns(this, "selectorMap", {}), ns(this, "scope", void 0), this.scope = s, s.addListeners({ "interactable:unset": function(f) {
          var m = f.interactable, h = m.target, g = m._context, x = c.default.string(h) ? p.selectorMap[h] : h[p.scope.id], T = xe.findIndex(x, function(O) {
            return O.context === g;
          });
          x[T] && (x[T].context = null, x[T].interactable = null), x.splice(T, 1);
        } });
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "new", value: function(s, p) {
        p = (0, U.default)(p || {}, { actions: this.scope.actions });
        var f = new this.scope.Interactable(s, p, this.scope.document, this.scope.events), m = { context: f._context, interactable: f };
        return this.scope.addDocument(f._doc), this.list.push(f), c.default.string(s) ? (this.selectorMap[s] || (this.selectorMap[s] = []), this.selectorMap[s].push(m)) : (f.target[this.scope.id] || Object.defineProperty(s, this.scope.id, { value: [], configurable: true }), s[this.scope.id].push(m)), this.scope.fire("interactable:new", { target: s, options: p, interactable: f, win: this.scope._win }), f;
      } }, { key: "get", value: function(s, p) {
        var f = p && p.context || this.scope.document, m = c.default.string(s), h = m ? this.selectorMap[s] : s[this.scope.id];
        if (!h)
          return null;
        var g = xe.find(h, function(x) {
          return x.context === f && (m || x.interactable.inContext(s));
        });
        return g && g.interactable;
      } }, { key: "forEachMatch", value: function(s, p) {
        for (var f = 0; f < this.list.length; f++) {
          var m = this.list[f], h = void 0;
          if ((c.default.string(m.target) ? c.default.element(s) && R.matchesSelector(s, m.target) : s === m.target) && m.inContext(s) && (h = p(m)), h !== void 0)
            return h;
        }
      } }]) && Nd(o.prototype, a), n;
    }();
    Go.InteractableSet = Gd;
    var Lo = {};
    function Ld(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Ld, "En");
    function is(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(is, "Tn");
    function os(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, m = false, h = void 0;
          try {
            for (var g, x = a[Symbol.iterator](); !(f = (g = x.next()).done) && (p.push(g.value), !s || p.length !== s); f = true)
              ;
          } catch (T) {
            m = true, h = T;
          } finally {
            try {
              f || x.return == null || x.return();
            } finally {
              if (m)
                throw h;
            }
          }
          return p;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return Yl(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Yl(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    u(os, "Mn");
    function Yl(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(Yl, "jn"), Object.defineProperty(Lo, "__esModule", { value: true }), Lo.default = void 0;
    var qd = function() {
      function n(s) {
        (function(p, f) {
          if (!(p instanceof f))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), is(this, "currentTarget", void 0), is(this, "originalEvent", void 0), is(this, "type", void 0), this.originalEvent = s, (0, kt.default)(this, s);
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "preventOriginalDefault", value: function() {
        this.originalEvent.preventDefault();
      } }, { key: "stopPropagation", value: function() {
        this.originalEvent.stopPropagation();
      } }, { key: "stopImmediatePropagation", value: function() {
        this.originalEvent.stopImmediatePropagation();
      } }]) && Ld(o.prototype, a), n;
    }();
    function Di(n) {
      if (!c.default.object(n))
        return { capture: !!n, passive: false };
      var o = (0, U.default)({}, n);
      return o.capture = !!n.capture, o.passive = !!n.passive, o;
    }
    u(Di, "In");
    var jd = { id: "events", install: function(n) {
      var o, a = [], s = {}, p = [], f = { add: m, remove: h, addDelegate: function(T, O, N, L, z) {
        var $ = Di(z);
        if (!s[N]) {
          s[N] = [];
          for (var J = 0; J < p.length; J++) {
            var F = p[J];
            m(F, N, g), m(F, N, x, true);
          }
        }
        var te = s[N], le = xe.find(te, function(pe) {
          return pe.selector === T && pe.context === O;
        });
        le || (le = { selector: T, context: O, listeners: [] }, te.push(le)), le.listeners.push([L, $]);
      }, removeDelegate: function(T, O, N, L, z) {
        var $, J = Di(z), F = s[N], te = false;
        if (F)
          for ($ = F.length - 1; $ >= 0; $--) {
            var le = F[$];
            if (le.selector === T && le.context === O) {
              for (var pe = le.listeners, Ee = pe.length - 1; Ee >= 0; Ee--) {
                var je = os(pe[Ee], 2), be = je[0], Ie = je[1], Xt = Ie.capture, Nr = Ie.passive;
                if (be === L && Xt === J.capture && Nr === J.passive) {
                  pe.splice(Ee, 1), pe.length || (F.splice($, 1), h(O, N, g), h(O, N, x, true)), te = true;
                  break;
                }
              }
              if (te)
                break;
            }
          }
      }, delegateListener: g, delegateUseCapture: x, delegatedEvents: s, documents: p, targets: a, supportsOptions: false, supportsPassive: false };
      function m(T, O, N, L) {
        var z = Di(L), $ = xe.find(a, function(J) {
          return J.eventTarget === T;
        });
        $ || ($ = { eventTarget: T, events: {} }, a.push($)), $.events[O] || ($.events[O] = []), T.addEventListener && !xe.contains($.events[O], N) && (T.addEventListener(O, N, f.supportsOptions ? z : z.capture), $.events[O].push(N));
      }
      u(m, "s");
      function h(T, O, N, L) {
        var z = Di(L), $ = xe.findIndex(a, function(Ee) {
          return Ee.eventTarget === T;
        }), J = a[$];
        if (J && J.events)
          if (O !== "all") {
            var F = false, te = J.events[O];
            if (te) {
              if (N === "all") {
                for (var le = te.length - 1; le >= 0; le--)
                  h(T, O, te[le], z);
                return;
              }
              for (var pe = 0; pe < te.length; pe++)
                if (te[pe] === N) {
                  T.removeEventListener(O, N, f.supportsOptions ? z : z.capture), te.splice(pe, 1), te.length === 0 && (delete J.events[O], F = true);
                  break;
                }
            }
            F && !Object.keys(J.events).length && a.splice($, 1);
          } else
            for (O in J.events)
              J.events.hasOwnProperty(O) && h(T, O, "all");
      }
      u(h, "l");
      function g(T, O) {
        for (var N = Di(O), L = new qd(T), z = s[T.type], $ = os(K.getEventTargets(T), 1)[0], J = $; c.default.element(J); ) {
          for (var F = 0; F < z.length; F++) {
            var te = z[F], le = te.selector, pe = te.context;
            if (R.matchesSelector(J, le) && R.nodeContains(pe, $) && R.nodeContains(pe, J)) {
              var Ee = te.listeners;
              L.currentTarget = J;
              for (var je = 0; je < Ee.length; je++) {
                var be = os(Ee[je], 2), Ie = be[0], Xt = be[1], Nr = Xt.capture, bs = Xt.passive;
                Nr === N.capture && bs === N.passive && Ie(L);
              }
            }
          }
          J = R.parentNode(J);
        }
      }
      u(g, "u");
      function x(T) {
        return g(T, true);
      }
      return u(x, "c"), (o = n.document) == null || o.createElement("div").addEventListener("test", null, { get capture() {
        return f.supportsOptions = true;
      }, get passive() {
        return f.supportsPassive = true;
      } }), n.events = f, f;
    } };
    Lo.default = jd;
    var qo = {};
    Object.defineProperty(qo, "__esModule", { value: true }), qo.default = void 0;
    var jo = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(n) {
      for (var o = 0; o < jo.methodOrder.length; o++) {
        var a;
        a = jo.methodOrder[o];
        var s = jo[a](n);
        if (s)
          return s;
      }
      return null;
    }, simulationResume: function(n) {
      var o = n.pointerType, a = n.eventType, s = n.eventTarget, p = n.scope;
      if (!/down|start/i.test(a))
        return null;
      for (var f = 0; f < p.interactions.list.length; f++) {
        var m = p.interactions.list[f], h = s;
        if (m.simulation && m.simulation.allowResume && m.pointerType === o)
          for (; h; ) {
            if (h === m.element)
              return m;
            h = R.parentNode(h);
          }
      }
      return null;
    }, mouseOrPen: function(n) {
      var o, a = n.pointerId, s = n.pointerType, p = n.eventType, f = n.scope;
      if (s !== "mouse" && s !== "pen")
        return null;
      for (var m = 0; m < f.interactions.list.length; m++) {
        var h = f.interactions.list[m];
        if (h.pointerType === s) {
          if (h.simulation && !Zl(h, a))
            continue;
          if (h.interacting())
            return h;
          o || (o = h);
        }
      }
      if (o)
        return o;
      for (var g = 0; g < f.interactions.list.length; g++) {
        var x = f.interactions.list[g];
        if (!(x.pointerType !== s || /down/i.test(p) && x.simulation))
          return x;
      }
      return null;
    }, hasPointer: function(n) {
      for (var o = n.pointerId, a = n.scope, s = 0; s < a.interactions.list.length; s++) {
        var p = a.interactions.list[s];
        if (Zl(p, o))
          return p;
      }
      return null;
    }, idle: function(n) {
      for (var o = n.pointerType, a = n.scope, s = 0; s < a.interactions.list.length; s++) {
        var p = a.interactions.list[s];
        if (p.pointers.length === 1) {
          var f = p.interactable;
          if (f && (!f.options.gesture || !f.options.gesture.enabled))
            continue;
        } else if (p.pointers.length >= 2)
          continue;
        if (!p.interacting() && o === p.pointerType)
          return p;
      }
      return null;
    } };
    function Zl(n, o) {
      return n.pointers.some(function(a) {
        return a.id === o;
      });
    }
    u(Zl, "zn");
    var Bd = jo;
    qo.default = Bd;
    var Bo = {};
    function Jl(n) {
      return (Jl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(Jl, "Xn");
    function Kl(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, m = false, h = void 0;
          try {
            for (var g, x = a[Symbol.iterator](); !(f = (g = x.next()).done) && (p.push(g.value), !s || p.length !== s); f = true)
              ;
          } catch (T) {
            m = true, h = T;
          } finally {
            try {
              f || x.return == null || x.return();
            } finally {
              if (m)
                throw h;
            }
          }
          return p;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return Ql(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? Ql(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    u(Kl, "Yn");
    function Ql(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(Ql, "Bn");
    function Hd(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    u(Hd, "Wn");
    function $d(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u($d, "Ln");
    function eu(n, o) {
      return (eu = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    u(eu, "Un");
    function Fd(n, o) {
      return !o || Jl(o) !== "object" && typeof o != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o;
    }
    u(Fd, "Vn");
    function as(n) {
      return (as = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    u(as, "Nn"), Object.defineProperty(Bo, "__esModule", { value: true }), Bo.default = void 0;
    var ss = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function tu(n, o) {
      return function(a) {
        var s = o.interactions.list, p = K.getPointerType(a), f = Kl(K.getEventTargets(a), 2), m = f[0], h = f[1], g = [];
        if (/^touch/.test(a.type)) {
          o.prevTouchTime = o.now();
          for (var x = 0; x < a.changedTouches.length; x++) {
            var T = a.changedTouches[x], O = { pointer: T, pointerId: K.getPointerId(T), pointerType: p, eventType: a.type, eventTarget: m, curEventTarget: h, scope: o }, N = ru(O);
            g.push([O.pointer, O.eventTarget, O.curEventTarget, N]);
          }
        } else {
          var L = false;
          if (!q.default.supportsPointerEvent && /mouse/.test(a.type)) {
            for (var z = 0; z < s.length && !L; z++)
              L = s[z].pointerType !== "mouse" && s[z].pointerIsDown;
            L = L || o.now() - o.prevTouchTime < 500 || a.timeStamp === 0;
          }
          if (!L) {
            var $ = { pointer: a, pointerId: K.getPointerId(a), pointerType: p, eventType: a.type, curEventTarget: h, eventTarget: m, scope: o }, J = ru($);
            g.push([$.pointer, $.eventTarget, $.curEventTarget, J]);
          }
        }
        for (var F = 0; F < g.length; F++) {
          var te = Kl(g[F], 4), le = te[0], pe = te[1], Ee = te[2];
          te[3][n](le, a, pe, Ee);
        }
      };
    }
    u(tu, "$n");
    function ru(n) {
      var o = n.pointerType, a = n.scope, s = { interaction: qo.default.search(n), searchDetails: n };
      return a.fire("interactions:find", s), s.interaction || a.interactions.new({ pointerType: o });
    }
    u(ru, "Gn");
    function ls(n, o) {
      var a = n.doc, s = n.scope, p = n.options, f = s.interactions.docEvents, m = s.events, h = m[o];
      for (var g in s.browser.isIOS && !p.events && (p.events = { passive: false }), m.delegatedEvents)
        h(a, g, m.delegateListener), h(a, g, m.delegateUseCapture, true);
      for (var x = p && p.events, T = 0; T < f.length; T++) {
        var O = f[T];
        h(a, O.type, O.listener, x);
      }
    }
    u(ls, "Hn");
    var Wd = { id: "core/interactions", install: function(n) {
      for (var o = {}, a = 0; a < ss.length; a++) {
        var s = ss[a];
        o[s] = tu(s, n);
      }
      var p, f = q.default.pEventTypes;
      function m() {
        for (var h = 0; h < n.interactions.list.length; h++) {
          var g = n.interactions.list[h];
          if (g.pointerIsDown && g.pointerType === "touch" && !g._interacting)
            for (var x = function() {
              var O = g.pointers[T];
              n.documents.some(function(N) {
                var L = N.doc;
                return (0, R.nodeContains)(L, O.downTarget);
              }) || g.removePointer(O.pointer, O.event);
            }, T = 0; T < g.pointers.length; T++)
              x();
        }
      }
      u(m, "a"), (p = S.default.PointerEvent ? [{ type: f.down, listener: m }, { type: f.down, listener: o.pointerDown }, { type: f.move, listener: o.pointerMove }, { type: f.up, listener: o.pointerUp }, { type: f.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: m }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(h) {
        for (var g = 0; g < n.interactions.list.length; g++)
          n.interactions.list[g].documentBlur(h);
      } }), n.prevTouchTime = 0, n.Interaction = function(h) {
        (function(z, $) {
          if (typeof $ != "function" && $ !== null)
            throw new TypeError("Super expression must either be null or a function");
          z.prototype = Object.create($ && $.prototype, { constructor: { value: z, writable: true, configurable: true } }), $ && eu(z, $);
        })(L, h);
        var g, x, T, O, N = (T = L, O = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (z) {
            return false;
          }
        }(), function() {
          var z, $ = as(T);
          if (O) {
            var J = as(this).constructor;
            z = Reflect.construct($, arguments, J);
          } else
            z = $.apply(this, arguments);
          return Fd(this, z);
        });
        function L() {
          return Hd(this, L), N.apply(this, arguments);
        }
        return u(L, "s"), g = L, (x = [{ key: "pointerMoveTolerance", get: function() {
          return n.interactions.pointerMoveTolerance;
        }, set: function(z) {
          n.interactions.pointerMoveTolerance = z;
        } }, { key: "_now", value: function() {
          return n.now();
        } }]) && $d(g.prototype, x), L;
      }(Pt.default), n.interactions = { list: [], new: function(h) {
        h.scopeFire = function(x, T) {
          return n.fire(x, T);
        };
        var g = new n.Interaction(h);
        return n.interactions.list.push(g), g;
      }, listeners: o, docEvents: p, pointerMoveTolerance: 1 }, n.usePlugin(Vn.default);
    }, listeners: { "scope:add-document": function(n) {
      return ls(n, "add");
    }, "scope:remove-document": function(n) {
      return ls(n, "remove");
    }, "interactable:unset": function(n, o) {
      for (var a = n.interactable, s = o.interactions.list.length - 1; s >= 0; s--) {
        var p = o.interactions.list[s];
        p.interactable === a && (p.stop(), o.fire("interactions:destroy", { interaction: p }), p.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(s, 1));
      }
    } }, onDocSignal: ls, doOnInteractions: tu, methodNames: ss };
    Bo.default = Wd;
    var ki = {};
    function nu(n) {
      return (nu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(nu, "Jn");
    function us(n, o, a) {
      return (us = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(s, p, f) {
        var m = function(g, x) {
          for (; !Object.prototype.hasOwnProperty.call(g, x) && (g = Yn(g)) !== null; )
            ;
          return g;
        }(s, p);
        if (m) {
          var h = Object.getOwnPropertyDescriptor(m, p);
          return h.get ? h.get.call(f) : h.value;
        }
      })(n, o, a || n);
    }
    u(us, "Qn");
    function iu(n, o) {
      return (iu = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    u(iu, "tr");
    function Ud(n, o) {
      return !o || nu(o) !== "object" && typeof o != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o;
    }
    u(Ud, "er");
    function Yn(n) {
      return (Yn = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    u(Yn, "nr");
    function ou(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    u(ou, "rr");
    function au(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(au, "or");
    function su(n, o, a) {
      return o && au(n.prototype, o), a && au(n, a), n;
    }
    u(su, "ir");
    function vt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(vt, "ar"), Object.defineProperty(ki, "__esModule", { value: true }), ki.initScope = lu, ki.Scope = void 0;
    var Vd = function() {
      function n() {
        var o = this;
        ou(this, n), vt(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), vt(this, "isInitialized", false), vt(this, "listenerMaps", []), vt(this, "browser", q.default), vt(this, "defaults", (0, fn.default)(Oi.defaults)), vt(this, "Eventable", Pi.Eventable), vt(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), vt(this, "interactStatic", (0, rs.createInteractStatic)(this)), vt(this, "InteractEvent", Mi.InteractEvent), vt(this, "Interactable", void 0), vt(this, "interactables", new Go.InteractableSet(this)), vt(this, "_win", void 0), vt(this, "document", void 0), vt(this, "window", void 0), vt(this, "documents", []), vt(this, "_plugins", { list: [], map: {} }), vt(this, "onWindowUnload", function(s) {
          return o.removeDocument(s.target);
        });
        var a = this;
        this.Interactable = function(s) {
          (function(g, x) {
            if (typeof x != "function" && x !== null)
              throw new TypeError("Super expression must either be null or a function");
            g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), x && iu(g, x);
          })(h, s);
          var p, f, m = (p = h, f = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (g) {
              return false;
            }
          }(), function() {
            var g, x = Yn(p);
            if (f) {
              var T = Yn(this).constructor;
              g = Reflect.construct(x, arguments, T);
            } else
              g = x.apply(this, arguments);
            return Ud(this, g);
          });
          function h() {
            return ou(this, h), m.apply(this, arguments);
          }
          return u(h, "i"), su(h, [{ key: "_defaults", get: function() {
            return a.defaults;
          } }, { key: "set", value: function(g) {
            return us(Yn(h.prototype), "set", this).call(this, g), a.fire("interactable:set", { options: g, interactable: this }), this;
          } }, { key: "unset", value: function() {
            us(Yn(h.prototype), "unset", this).call(this), a.interactables.list.splice(a.interactables.list.indexOf(this), 1), a.fire("interactable:unset", { interactable: this });
          } }]), h;
        }(No.Interactable);
      }
      return u(n, "t"), su(n, [{ key: "addListeners", value: function(o, a) {
        this.listenerMaps.push({ id: a, map: o });
      } }, { key: "fire", value: function(o, a) {
        for (var s = 0; s < this.listenerMaps.length; s++) {
          var p = this.listenerMaps[s].map[o];
          if (p && p(a, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : lu(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, a) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, a), o.listeners && o.before) {
          for (var s = 0, p = this.listenerMaps.length, f = o.before.reduce(function(h, g) {
            return h[g] = true, h[uu(g)] = true, h;
          }, {}); s < p; s++) {
            var m = this.listenerMaps[s].id;
            if (f[m] || f[uu(m)])
              break;
          }
          this.listenerMaps.splice(s, 0, { id: o.id, map: o.listeners });
        } else
          o.listeners && this.listenerMaps.push({ id: o.id, map: o.listeners });
        return this;
      } }, { key: "addDocument", value: function(o, a) {
        if (this.getDocIndex(o) !== -1)
          return false;
        var s = e.getWindow(o);
        a = a ? (0, U.default)({}, a) : {}, this.documents.push({ doc: o, options: a }), this.events.documents.push(o), o !== this.document && this.events.add(s, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: o, window: s, scope: this, options: a });
      } }, { key: "removeDocument", value: function(o) {
        var a = this.getDocIndex(o), s = e.getWindow(o), p = this.documents[a].options;
        this.events.remove(s, "unload", this.onWindowUnload), this.documents.splice(a, 1), this.events.documents.splice(a, 1), this.fire("scope:remove-document", { doc: o, window: s, scope: this, options: p });
      } }, { key: "getDocIndex", value: function(o) {
        for (var a = 0; a < this.documents.length; a++)
          if (this.documents[a].doc === o)
            return a;
        return -1;
      } }, { key: "getDocOptions", value: function(o) {
        var a = this.getDocIndex(o);
        return a === -1 ? null : this.documents[a].options;
      } }, { key: "now", value: function() {
        return (this.window.Date || Date).now();
      } }]), n;
    }();
    function lu(n, o) {
      return n.isInitialized = true, c.default.window(o) && e.init(o), S.default.init(o), q.default.init(o), Gt.default.init(o), n.window = o, n.document = o.document, n.usePlugin(Bo.default), n.usePlugin(Lo.default), n;
    }
    u(lu, "lr");
    function uu(n) {
      return n && n.replace(/\/.*$/, "");
    }
    u(uu, "ur"), ki.Scope = Vd;
    var yt = {};
    Object.defineProperty(yt, "__esModule", { value: true }), yt.default = void 0;
    var cu = new ki.Scope(), Xd = cu.interactStatic;
    yt.default = Xd;
    var Yd = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    cu.init(Yd);
    var Ho = {};
    Object.defineProperty(Ho, "__esModule", { value: true }), Ho.default = void 0, Ho.default = function() {
    };
    var $o = {};
    Object.defineProperty($o, "__esModule", { value: true }), $o.default = void 0, $o.default = function() {
    };
    var Fo = {};
    function pu(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p = [], f = true, m = false, h = void 0;
          try {
            for (var g, x = a[Symbol.iterator](); !(f = (g = x.next()).done) && (p.push(g.value), !s || p.length !== s); f = true)
              ;
          } catch (T) {
            m = true, h = T;
          } finally {
            try {
              f || x.return == null || x.return();
            } finally {
              if (m)
                throw h;
            }
          }
          return p;
        }
      }(n, o) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return du(a, s);
          var p = Object.prototype.toString.call(a).slice(8, -1);
          return p === "Object" && a.constructor && (p = a.constructor.name), p === "Map" || p === "Set" ? Array.from(a) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? du(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    u(pu, "yr");
    function du(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(du, "mr"), Object.defineProperty(Fo, "__esModule", { value: true }), Fo.default = void 0, Fo.default = function(n) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(s) {
        var p = pu(s, 2), f = p[0], m = p[1];
        return f in n || m in n;
      }), a = u(function(s, p) {
        for (var f = n.range, m = n.limits, h = m === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : m, g = n.offset, x = g === void 0 ? { x: 0, y: 0 } : g, T = { range: f, grid: n, x: null, y: null }, O = 0; O < o.length; O++) {
          var N = pu(o[O], 2), L = N[0], z = N[1], $ = Math.round((s - x.x) / n[L]), J = Math.round((p - x.y) / n[z]);
          T[L] = Math.max(h.left, Math.min(h.right, $ * n[L] + x.x)), T[z] = Math.max(h.top, Math.min(h.bottom, J * n[z] + x.y));
        }
        return T;
      }, "n");
      return a.grid = n, a.coordFields = o, a;
    };
    var Ri = {};
    Object.defineProperty(Ri, "__esModule", { value: true }), Object.defineProperty(Ri, "edgeTarget", { enumerable: true, get: function() {
      return Ho.default;
    } }), Object.defineProperty(Ri, "elements", { enumerable: true, get: function() {
      return $o.default;
    } }), Object.defineProperty(Ri, "grid", { enumerable: true, get: function() {
      return Fo.default;
    } });
    var Wo = {};
    Object.defineProperty(Wo, "__esModule", { value: true }), Wo.default = void 0;
    var Zd = { id: "snappers", install: function(n) {
      var o = n.interactStatic;
      o.snappers = (0, U.default)(o.snappers || {}, Ri), o.createSnapGrid = o.snappers.grid;
    } };
    Wo.default = Zd;
    var Zn = {};
    function fu(n, o) {
      var a = Object.keys(n);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(n);
        o && (s = s.filter(function(p) {
          return Object.getOwnPropertyDescriptor(n, p).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    u(fu, "Pr");
    function cs(n) {
      for (var o = 1; o < arguments.length; o++) {
        var a = arguments[o] != null ? arguments[o] : {};
        o % 2 ? fu(Object(a), true).forEach(function(s) {
          Jd(n, s, a[s]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : fu(Object(a)).forEach(function(s) {
          Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(a, s));
        });
      }
      return n;
    }
    u(cs, "Or");
    function Jd(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(Jd, "Sr"), Object.defineProperty(Zn, "__esModule", { value: true }), Zn.aspectRatio = Zn.default = void 0;
    var hu = { start: function(n) {
      var o = n.state, a = n.rect, s = n.edges, p = n.pageCoords, f = o.options.ratio, m = o.options, h = m.equalDelta, g = m.modifiers;
      f === "preserve" && (f = a.width / a.height), o.startCoords = (0, U.default)({}, p), o.startRect = (0, U.default)({}, a), o.ratio = f, o.equalDelta = h;
      var x = o.linkedEdges = { top: s.top || s.left && !s.bottom, left: s.left || s.top && !s.right, bottom: s.bottom || s.right && !s.top, right: s.right || s.bottom && !s.left };
      if (o.xIsPrimaryAxis = !(!s.left && !s.right), o.equalDelta)
        o.edgeSign = (x.left ? 1 : -1) * (x.top ? 1 : -1);
      else {
        var T = o.xIsPrimaryAxis ? x.top : x.left;
        o.edgeSign = T ? -1 : 1;
      }
      if ((0, U.default)(n.edges, x), g && g.length) {
        var O = new hn.default(n.interaction);
        O.copyFrom(n.interaction.modification), O.prepareStates(g), o.subModification = O, O.startAll(cs({}, n));
      }
    }, set: function(n) {
      var o = n.state, a = n.rect, s = n.coords, p = (0, U.default)({}, s), f = o.equalDelta ? Kd : Qd;
      if (f(o, o.xIsPrimaryAxis, s, a), !o.subModification)
        return null;
      var m = (0, U.default)({}, a);
      (0, ce.addEdges)(o.linkedEdges, m, { x: s.x - p.x, y: s.y - p.y });
      var h = o.subModification.setAll(cs(cs({}, n), {}, { rect: m, edges: o.linkedEdges, pageCoords: s, prevCoords: s, prevRect: m })), g = h.delta;
      return h.changed && (f(o, Math.abs(g.x) > Math.abs(g.y), h.coords, h.rect), (0, U.default)(s, h.coords)), h.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function Kd(n, o, a) {
      var s = n.startCoords, p = n.edgeSign;
      o ? a.y = s.y + (a.x - s.x) * p : a.x = s.x + (a.y - s.y) * p;
    }
    u(Kd, "Tr");
    function Qd(n, o, a, s) {
      var p = n.startRect, f = n.startCoords, m = n.ratio, h = n.edgeSign;
      if (o) {
        var g = s.width / m;
        a.y = f.y + (g - p.height) * h;
      } else {
        var x = s.height * m;
        a.x = f.x + (x - p.width) * h;
      }
    }
    u(Qd, "Mr"), Zn.aspectRatio = hu;
    var ef = (0, ht.makeModifier)(hu, "aspectRatio");
    Zn.default = ef;
    var gn = {};
    Object.defineProperty(gn, "__esModule", { value: true }), gn.default = void 0;
    var vu = u(function() {
    }, "Ir");
    vu._defaults = {};
    var tf = vu;
    gn.default = tf;
    var ps = {};
    Object.defineProperty(ps, "__esModule", { value: true }), Object.defineProperty(ps, "default", { enumerable: true, get: function() {
      return gn.default;
    } });
    var St = {};
    function ds(n, o, a) {
      return c.default.func(n) ? ce.resolveRectLike(n, o.interactable, o.element, [a.x, a.y, o]) : ce.resolveRectLike(n, o.interactable, o.element);
    }
    u(ds, "zr"), Object.defineProperty(St, "__esModule", { value: true }), St.getRestrictionRect = ds, St.restrict = St.default = void 0;
    var mu = { start: function(n) {
      var o = n.rect, a = n.startOffset, s = n.state, p = n.interaction, f = n.pageCoords, m = s.options, h = m.elementRect, g = (0, U.default)({ left: 0, top: 0, right: 0, bottom: 0 }, m.offset || {});
      if (o && h) {
        var x = ds(m.restriction, p, f);
        if (x) {
          var T = x.right - x.left - o.width, O = x.bottom - x.top - o.height;
          T < 0 && (g.left += T, g.right += T), O < 0 && (g.top += O, g.bottom += O);
        }
        g.left += a.left - o.width * h.left, g.top += a.top - o.height * h.top, g.right += a.right - o.width * (1 - h.right), g.bottom += a.bottom - o.height * (1 - h.bottom);
      }
      s.offset = g;
    }, set: function(n) {
      var o = n.coords, a = n.interaction, s = n.state, p = s.options, f = s.offset, m = ds(p.restriction, a, o);
      if (m) {
        var h = ce.xywhToTlbr(m);
        o.x = Math.max(Math.min(h.right - f.right, o.x), h.left + f.left), o.y = Math.max(Math.min(h.bottom - f.bottom, o.y), h.top + f.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    St.restrict = mu;
    var rf = (0, ht.makeModifier)(mu, "restrict");
    St.default = rf;
    var wr = {};
    Object.defineProperty(wr, "__esModule", { value: true }), wr.restrictEdges = wr.default = void 0;
    var gu = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, bu = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function yu(n, o) {
      for (var a = ["top", "left", "bottom", "right"], s = 0; s < a.length; s++) {
        var p = a[s];
        p in n || (n[p] = o[p]);
      }
      return n;
    }
    u(yu, "Wr");
    var xu = { noInner: gu, noOuter: bu, start: function(n) {
      var o, a = n.interaction, s = n.startOffset, p = n.state, f = p.options;
      if (f) {
        var m = (0, St.getRestrictionRect)(f.offset, a, a.coords.start.page);
        o = ce.rectToXY(m);
      }
      o = o || { x: 0, y: 0 }, p.offset = { top: o.y + s.top, left: o.x + s.left, bottom: o.y - s.bottom, right: o.x - s.right };
    }, set: function(n) {
      var o = n.coords, a = n.edges, s = n.interaction, p = n.state, f = p.offset, m = p.options;
      if (a) {
        var h = (0, U.default)({}, o), g = (0, St.getRestrictionRect)(m.inner, s, h) || {}, x = (0, St.getRestrictionRect)(m.outer, s, h) || {};
        yu(g, gu), yu(x, bu), a.top ? o.y = Math.min(Math.max(x.top + f.top, h.y), g.top + f.top) : a.bottom && (o.y = Math.max(Math.min(x.bottom + f.bottom, h.y), g.bottom + f.bottom)), a.left ? o.x = Math.min(Math.max(x.left + f.left, h.x), g.left + f.left) : a.right && (o.x = Math.max(Math.min(x.right + f.right, h.x), g.right + f.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    wr.restrictEdges = xu;
    var nf = (0, ht.makeModifier)(xu, "restrictEdges");
    wr.default = nf;
    var Jn = {};
    Object.defineProperty(Jn, "__esModule", { value: true }), Jn.restrictRect = Jn.default = void 0;
    var of = (0, U.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(n) {
    } }, St.restrict.defaults), wu = { start: St.restrict.start, set: St.restrict.set, defaults: of };
    Jn.restrictRect = wu;
    var af = (0, ht.makeModifier)(wu, "restrictRect");
    Jn.default = af;
    var Kn = {};
    Object.defineProperty(Kn, "__esModule", { value: true }), Kn.restrictSize = Kn.default = void 0;
    var sf = { width: -1 / 0, height: -1 / 0 }, lf = { width: 1 / 0, height: 1 / 0 }, Eu = { start: function(n) {
      return wr.restrictEdges.start(n);
    }, set: function(n) {
      var o = n.interaction, a = n.state, s = n.rect, p = n.edges, f = a.options;
      if (p) {
        var m = ce.tlbrToXywh((0, St.getRestrictionRect)(f.min, o, n.coords)) || sf, h = ce.tlbrToXywh((0, St.getRestrictionRect)(f.max, o, n.coords)) || lf;
        a.options = { endOnly: f.endOnly, inner: (0, U.default)({}, wr.restrictEdges.noInner), outer: (0, U.default)({}, wr.restrictEdges.noOuter) }, p.top ? (a.options.inner.top = s.bottom - m.height, a.options.outer.top = s.bottom - h.height) : p.bottom && (a.options.inner.bottom = s.top + m.height, a.options.outer.bottom = s.top + h.height), p.left ? (a.options.inner.left = s.right - m.width, a.options.outer.left = s.right - h.width) : p.right && (a.options.inner.right = s.left + m.width, a.options.outer.right = s.left + h.width), wr.restrictEdges.set(n), a.options = f;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    Kn.restrictSize = Eu;
    var uf = (0, ht.makeModifier)(Eu, "restrictSize");
    Kn.default = uf;
    var fs = {};
    Object.defineProperty(fs, "__esModule", { value: true }), Object.defineProperty(fs, "default", { enumerable: true, get: function() {
      return gn.default;
    } });
    var Zr = {};
    Object.defineProperty(Zr, "__esModule", { value: true }), Zr.snap = Zr.default = void 0;
    var Su = { start: function(n) {
      var o, a = n.interaction, s = n.interactable, p = n.element, f = n.rect, m = n.state, h = n.startOffset, g = m.options, x = g.offsetWithOrigin ? function(N) {
        var L = N.interaction.element;
        return (0, ce.rectToXY)((0, ce.resolveRectLike)(N.state.options.origin, null, null, [L])) || (0, Le.default)(N.interactable, L, N.interaction.prepared.name);
      }(n) : { x: 0, y: 0 };
      if (g.offset === "startCoords")
        o = { x: a.coords.start.page.x, y: a.coords.start.page.y };
      else {
        var T = (0, ce.resolveRectLike)(g.offset, s, p, [a]);
        (o = (0, ce.rectToXY)(T) || { x: 0, y: 0 }).x += x.x, o.y += x.y;
      }
      var O = g.relativePoints;
      m.offsets = f && O && O.length ? O.map(function(N, L) {
        return { index: L, relativePoint: N, x: h.left - f.width * N.x + o.x, y: h.top - f.height * N.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(n) {
      var o = n.interaction, a = n.coords, s = n.state, p = s.options, f = s.offsets, m = (0, Le.default)(o.interactable, o.element, o.prepared.name), h = (0, U.default)({}, a), g = [];
      p.offsetWithOrigin || (h.x -= m.x, h.y -= m.y);
      for (var x = 0; x < f.length; x++)
        for (var T = f[x], O = h.x - T.x, N = h.y - T.y, L = 0, z = p.targets.length; L < z; L++) {
          var $, J = p.targets[L];
          ($ = c.default.func(J) ? J(O, N, o._proxy, T, L) : J) && g.push({ x: (c.default.number($.x) ? $.x : O) + T.x, y: (c.default.number($.y) ? $.y : N) + T.y, range: c.default.number($.range) ? $.range : p.range, source: J, index: L, offset: T });
        }
      for (var F = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, te = 0; te < g.length; te++) {
        var le = g[te], pe = le.range, Ee = le.x - h.x, je = le.y - h.y, be = (0, Ke.default)(Ee, je), Ie = be <= pe;
        pe === 1 / 0 && F.inRange && F.range !== 1 / 0 && (Ie = false), F.target && !(Ie ? F.inRange && pe !== 1 / 0 ? be / pe < F.distance / F.range : pe === 1 / 0 && F.range !== 1 / 0 || be < F.distance : !F.inRange && be < F.distance) || (F.target = le, F.distance = be, F.range = pe, F.inRange = Ie, F.delta.x = Ee, F.delta.y = je);
      }
      return F.inRange && (a.x = F.target.x, a.y = F.target.y), s.closest = F, F;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    Zr.snap = Su;
    var cf = (0, ht.makeModifier)(Su, "snap");
    Zr.default = cf;
    var Rr = {};
    function Tu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(Tu, "oo"), Object.defineProperty(Rr, "__esModule", { value: true }), Rr.snapSize = Rr.default = void 0;
    var Cu = { start: function(n) {
      var o = n.state, a = n.edges, s = o.options;
      if (!a)
        return null;
      n.state = { options: { targets: null, relativePoints: [{ x: a.left ? 0 : 1, y: a.top ? 0 : 1 }], offset: s.offset || "self", origin: { x: 0, y: 0 }, range: s.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], Zr.snap.start(n), o.offsets = n.state.offsets, n.state = o;
    }, set: function(n) {
      var o, a, s = n.interaction, p = n.state, f = n.coords, m = p.options, h = p.offsets, g = { x: f.x - h[0].x, y: f.y - h[0].y };
      p.options = (0, U.default)({}, m), p.options.targets = [];
      for (var x = 0; x < (m.targets || []).length; x++) {
        var T = (m.targets || [])[x], O = void 0;
        if (O = c.default.func(T) ? T(g.x, g.y, s) : T) {
          for (var N = 0; N < p.targetFields.length; N++) {
            var L = (o = p.targetFields[N], a = 2, function(F) {
              if (Array.isArray(F))
                return F;
            }(o) || function(F, te) {
              if (typeof Symbol != "undefined" && Symbol.iterator in Object(F)) {
                var le = [], pe = true, Ee = false, je = void 0;
                try {
                  for (var be, Ie = F[Symbol.iterator](); !(pe = (be = Ie.next()).done) && (le.push(be.value), !te || le.length !== te); pe = true)
                    ;
                } catch (Xt) {
                  Ee = true, je = Xt;
                } finally {
                  try {
                    pe || Ie.return == null || Ie.return();
                  } finally {
                    if (Ee)
                      throw je;
                  }
                }
                return le;
              }
            }(o, a) || function(F, te) {
              if (F) {
                if (typeof F == "string")
                  return Tu(F, te);
                var le = Object.prototype.toString.call(F).slice(8, -1);
                return le === "Object" && F.constructor && (le = F.constructor.name), le === "Map" || le === "Set" ? Array.from(F) : le === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(le) ? Tu(F, te) : void 0;
              }
            }(o, a) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), z = L[0], $ = L[1];
            if (z in O || $ in O) {
              O.x = O[z], O.y = O[$];
              break;
            }
          }
          p.options.targets.push(O);
        }
      }
      var J = Zr.snap.set(n);
      return p.options = m, J;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Rr.snapSize = Cu;
    var pf = (0, ht.makeModifier)(Cu, "snapSize");
    Rr.default = pf;
    var Qn = {};
    Object.defineProperty(Qn, "__esModule", { value: true }), Qn.snapEdges = Qn.default = void 0;
    var Ou = { start: function(n) {
      var o = n.edges;
      return o ? (n.state.targetFields = n.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], Rr.snapSize.start(n)) : null;
    }, set: Rr.snapSize.set, defaults: (0, U.default)((0, fn.default)(Rr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    Qn.snapEdges = Ou;
    var df = (0, ht.makeModifier)(Ou, "snapEdges");
    Qn.default = df;
    var hs = {};
    Object.defineProperty(hs, "__esModule", { value: true }), Object.defineProperty(hs, "default", { enumerable: true, get: function() {
      return gn.default;
    } });
    var vs = {};
    Object.defineProperty(vs, "__esModule", { value: true }), Object.defineProperty(vs, "default", { enumerable: true, get: function() {
      return gn.default;
    } });
    var ei = {};
    Object.defineProperty(ei, "__esModule", { value: true }), ei.default = void 0;
    var ff = { aspectRatio: Zn.default, restrictEdges: wr.default, restrict: St.default, restrictRect: Jn.default, restrictSize: Kn.default, snapEdges: Qn.default, snap: Zr.default, snapSize: Rr.default, spring: hs.default, avoid: ps.default, transform: vs.default, rubberband: fs.default };
    ei.default = ff;
    var Uo = {};
    Object.defineProperty(Uo, "__esModule", { value: true }), Uo.default = void 0;
    var hf = { id: "modifiers", install: function(n) {
      var o = n.interactStatic;
      for (var a in n.usePlugin(ht.default), n.usePlugin(Wo.default), o.modifiers = ei.default, ei.default) {
        var s = ei.default[a], p = s._defaults, f = s._methods;
        p._methods = f, n.defaults.perAction[a] = p;
      }
    } };
    Uo.default = hf;
    var bn = {};
    function Mu(n) {
      return (Mu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(Mu, "mo");
    function vf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(vf, "bo");
    function _u(n, o) {
      return (_u = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o);
    }
    u(_u, "xo");
    function mf(n, o) {
      return !o || Mu(o) !== "object" && typeof o != "function" ? It(n) : o;
    }
    u(mf, "wo");
    function It(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    u(It, "_o");
    function ms(n) {
      return (ms = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(n);
    }
    u(ms, "Po");
    function vr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(vr, "Oo"), Object.defineProperty(bn, "__esModule", { value: true }), bn.PointerEvent = bn.default = void 0;
    var gf = function(n) {
      (function(h, g) {
        if (typeof g != "function" && g !== null)
          throw new TypeError("Super expression must either be null or a function");
        h.prototype = Object.create(g && g.prototype, { constructor: { value: h, writable: true, configurable: true } }), g && _u(h, g);
      })(m, n);
      var o, a, s, p, f = (s = m, p = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (h) {
          return false;
        }
      }(), function() {
        var h, g = ms(s);
        if (p) {
          var x = ms(this).constructor;
          h = Reflect.construct(g, arguments, x);
        } else
          h = g.apply(this, arguments);
        return mf(this, h);
      });
      function m(h, g, x, T, O, N) {
        var L;
        if (function(J, F) {
          if (!(J instanceof F))
            throw new TypeError("Cannot call a class as a function");
        }(this, m), vr(It(L = f.call(this, O)), "type", void 0), vr(It(L), "originalEvent", void 0), vr(It(L), "pointerId", void 0), vr(It(L), "pointerType", void 0), vr(It(L), "double", void 0), vr(It(L), "pageX", void 0), vr(It(L), "pageY", void 0), vr(It(L), "clientX", void 0), vr(It(L), "clientY", void 0), vr(It(L), "dt", void 0), vr(It(L), "eventable", void 0), K.pointerExtend(It(L), x), x !== g && K.pointerExtend(It(L), g), L.timeStamp = N, L.originalEvent = x, L.type = h, L.pointerId = K.getPointerId(g), L.pointerType = K.getPointerType(g), L.target = T, L.currentTarget = null, h === "tap") {
          var z = O.getPointerIndex(g);
          L.dt = L.timeStamp - O.pointers[z].downTime;
          var $ = L.timeStamp - O.tapTime;
          L.double = !!(O.prevTap && O.prevTap.type !== "doubletap" && O.prevTap.target === L.target && $ < 500);
        } else
          h === "doubletap" && (L.dt = g.timeStamp - O.tapTime);
        return L;
      }
      return u(m, "a"), o = m, (a = [{ key: "_subtractOrigin", value: function(h) {
        var g = h.x, x = h.y;
        return this.pageX -= g, this.pageY -= x, this.clientX -= g, this.clientY -= x, this;
      } }, { key: "_addOrigin", value: function(h) {
        var g = h.x, x = h.y;
        return this.pageX += g, this.pageY += x, this.clientX += g, this.clientY += x, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && vf(o.prototype, a), m;
    }(Rt.BaseEvent);
    bn.PointerEvent = bn.default = gf;
    var Ni = {};
    Object.defineProperty(Ni, "__esModule", { value: true }), Ni.default = void 0;
    var Vo = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(n) {
      n.pointerEvents = Vo, n.defaults.actions.pointerEvents = Vo.defaults, (0, U.default)(n.actions.phaselessTypes, Vo.types);
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.prevTap = null, o.tapTime = 0;
    }, "interactions:update-pointer": function(n) {
      var o = n.down, a = n.pointerInfo;
      !o && a.hold || (a.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget;
      n.duplicate || a.pointerIsDown && !a.pointerWasMoved || (a.pointerIsDown && gs(n), Jr({ interaction: a, pointer: s, event: p, eventTarget: f, type: "move" }, o));
    }, "interactions:down": function(n, o) {
      (function(a, s) {
        for (var p = a.interaction, f = a.pointer, m = a.event, h = a.eventTarget, g = a.pointerIndex, x = p.pointers[g].hold, T = R.getPath(h), O = { interaction: p, pointer: f, event: m, eventTarget: h, type: "hold", targets: [], path: T, node: null }, N = 0; N < T.length; N++) {
          var L = T[N];
          O.node = L, s.fire("pointerEvents:collect-targets", O);
        }
        if (O.targets.length) {
          for (var z = 1 / 0, $ = 0; $ < O.targets.length; $++) {
            var J = O.targets[$].eventable.options.holdDuration;
            J < z && (z = J);
          }
          x.duration = z, x.timeout = setTimeout(function() {
            Jr({ interaction: p, eventTarget: h, pointer: f, event: m, type: "hold" }, s);
          }, z);
        }
      })(n, o), Jr(n, o);
    }, "interactions:up": function(n, o) {
      gs(n), Jr(n, o), function(a, s) {
        var p = a.interaction, f = a.pointer, m = a.event, h = a.eventTarget;
        p.pointerWasMoved || Jr({ interaction: p, eventTarget: h, pointer: f, event: m, type: "tap" }, s);
      }(n, o);
    }, "interactions:cancel": function(n, o) {
      gs(n), Jr(n, o);
    } }, PointerEvent: bn.PointerEvent, fire: Jr, collectEventTargets: Au, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function Jr(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget, m = n.type, h = n.targets, g = h === void 0 ? Au(n, o) : h, x = new bn.PointerEvent(m, s, p, f, a, o.now());
      o.fire("pointerEvents:new", { pointerEvent: x });
      for (var T = { interaction: a, pointer: s, event: p, eventTarget: f, targets: g, type: m, pointerEvent: x }, O = 0; O < g.length; O++) {
        var N = g[O];
        for (var L in N.props || {})
          x[L] = N.props[L];
        var z = (0, Le.default)(N.eventable, N.node);
        if (x._subtractOrigin(z), x.eventable = N.eventable, x.currentTarget = N.node, N.eventable.fire(x), x._addOrigin(z), x.immediatePropagationStopped || x.propagationStopped && O + 1 < g.length && g[O + 1].node !== x.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", T), m === "tap") {
        var $ = x.double ? Jr({ interaction: a, pointer: s, event: p, eventTarget: f, type: "doubletap" }, o) : x;
        a.prevTap = $, a.tapTime = $.timeStamp;
      }
      return x;
    }
    u(Jr, "Mo");
    function Au(n, o) {
      var a = n.interaction, s = n.pointer, p = n.event, f = n.eventTarget, m = n.type, h = a.getPointerIndex(s), g = a.pointers[h];
      if (m === "tap" && (a.pointerWasMoved || !g || g.downTarget !== f))
        return [];
      for (var x = R.getPath(f), T = { interaction: a, pointer: s, event: p, eventTarget: f, type: m, path: x, targets: [], node: null }, O = 0; O < x.length; O++) {
        var N = x[O];
        T.node = N, o.fire("pointerEvents:collect-targets", T);
      }
      return m === "hold" && (T.targets = T.targets.filter(function(L) {
        var z;
        return L.eventable.options.holdDuration === ((z = a.pointers[h]) == null ? void 0 : z.hold.duration);
      })), T.targets;
    }
    u(Au, "jo");
    function gs(n) {
      var o = n.interaction, a = n.pointerIndex, s = o.pointers[a].hold;
      s && s.timeout && (clearTimeout(s.timeout), s.timeout = null);
    }
    u(gs, "ko");
    var bf = Vo;
    Ni.default = bf;
    var Xo = {};
    function yf(n) {
      var o = n.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    u(yf, "Ao"), Object.defineProperty(Xo, "__esModule", { value: true }), Xo.default = void 0;
    var xf = { id: "pointer-events/holdRepeat", install: function(n) {
      n.usePlugin(Ni.default);
      var o = n.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = n.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(n, o) {
      return n["pointerEvents:".concat(o)] = yf, n;
    }, { "pointerEvents:new": function(n) {
      var o = n.pointerEvent;
      o.type === "hold" && (o.count = (o.count || 0) + 1);
    }, "pointerEvents:fired": function(n, o) {
      var a = n.interaction, s = n.pointerEvent, p = n.eventTarget, f = n.targets;
      if (s.type === "hold" && f.length) {
        var m = f[0].eventable.options.holdRepeatInterval;
        m <= 0 || (a.holdIntervalHandle = setTimeout(function() {
          o.pointerEvents.fire({ interaction: a, eventTarget: p, type: "hold", pointer: s, event: s }, o);
        }, m));
      }
    } }) };
    Xo.default = xf;
    var Yo = {};
    function wf(n) {
      return (0, U.default)(this.events.options, n), this;
    }
    u(wf, "Co"), Object.defineProperty(Yo, "__esModule", { value: true }), Yo.default = void 0;
    var Ef = { id: "pointer-events/interactableTargets", install: function(n) {
      var o = n.Interactable;
      o.prototype.pointerEvents = wf;
      var a = o.prototype._backCompatOption;
      o.prototype._backCompatOption = function(s, p) {
        var f = a.call(this, s, p);
        return f === this && (this.events.options[s] = p), f;
      };
    }, listeners: { "pointerEvents:collect-targets": function(n, o) {
      var a = n.targets, s = n.node, p = n.type, f = n.eventTarget;
      o.interactables.forEachMatch(s, function(m) {
        var h = m.events, g = h.options;
        h.types[p] && h.types[p].length && m.testIgnoreAllow(g, s, f) && a.push({ node: s, eventable: h, props: { interactable: m } });
      });
    }, "interactable:new": function(n) {
      var o = n.interactable;
      o.events.getRect = function(a) {
        return o.getRect(a);
      };
    }, "interactable:set": function(n, o) {
      var a = n.interactable, s = n.options;
      (0, U.default)(a.events.options, o.pointerEvents.defaults), (0, U.default)(a.events.options, s.pointerEvents || {});
    } } };
    Yo.default = Ef;
    var Zo = {};
    Object.defineProperty(Zo, "__esModule", { value: true }), Zo.default = void 0;
    var Sf = { id: "pointer-events", install: function(n) {
      n.usePlugin(Ni), n.usePlugin(Xo.default), n.usePlugin(Yo.default);
    } };
    Zo.default = Sf;
    var Gi = {};
    function Pu(n) {
      var o = n.Interactable;
      n.actions.phases.reflow = true, o.prototype.reflow = function(a) {
        return function(s, p, f) {
          for (var m = c.default.string(s.target) ? xe.from(s._context.querySelectorAll(s.target)) : [s.target], h = f.window.Promise, g = h ? [] : null, x = function() {
            var O = m[T], N = s.getRect(O);
            if (!N)
              return "break";
            var L = xe.find(f.interactions.list, function(te) {
              return te.interacting() && te.interactable === s && te.element === O && te.prepared.name === p.name;
            }), z = void 0;
            if (L)
              L.move(), g && (z = L._reflowPromise || new h(function(te) {
                L._reflowResolve = te;
              }));
            else {
              var $ = (0, ce.tlbrToXywh)(N), J = { page: { x: $.x, y: $.y }, client: { x: $.x, y: $.y }, timeStamp: f.now() }, F = K.coordsToEvent(J);
              z = function(te, le, pe, Ee, je) {
                var be = te.interactions.new({ pointerType: "reflow" }), Ie = { interaction: be, event: je, pointer: je, eventTarget: pe, phase: "reflow" };
                be.interactable = le, be.element = pe, be.prevEvent = je, be.updatePointer(je, je, pe, true), K.setZeroCoords(be.coords.delta), (0, qt.copyAction)(be.prepared, Ee), be._doPhase(Ie);
                var Xt = te.window.Promise, Nr = Xt ? new Xt(function(bs) {
                  be._reflowResolve = bs;
                }) : void 0;
                return be._reflowPromise = Nr, be.start(Ee, le, pe), be._interacting ? (be.move(Ie), be.end(je)) : (be.stop(), be._reflowResolve()), be.removePointer(je, je), Nr;
              }(f, s, O, p, F);
            }
            g && g.push(z);
          }, T = 0; T < m.length && x() !== "break"; T++)
            ;
          return g && h.all(g).then(function() {
            return s;
          });
        }(this, a, n);
      };
    }
    u(Pu, "Wo"), Object.defineProperty(Gi, "__esModule", { value: true }), Gi.install = Pu, Gi.default = void 0;
    var Tf = { id: "reflow", install: Pu, listeners: { "interactions:stop": function(n, o) {
      var a = n.interaction;
      a.pointerType === "reflow" && (a._reflowResolve && a._reflowResolve(), xe.remove(o.interactions.list, a));
    } } };
    Gi.default = Tf;
    var Vt = { exports: {} };
    function Iu(n) {
      return (Iu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(Iu, "Vo"), Object.defineProperty(Vt.exports, "__esModule", { value: true }), Vt.exports.default = void 0, yt.default.use(Vn.default), yt.default.use(mn.default), yt.default.use(Zo.default), yt.default.use(Xn.default), yt.default.use(Uo.default), yt.default.use(Po.default), yt.default.use(Dr.default), yt.default.use(Yr.default), yt.default.use(Gi.default);
    var Cf = yt.default;
    if (Vt.exports.default = Cf, Iu(Vt) === "object" && Vt)
      try {
        Vt.exports = yt.default;
      } catch (n) {
      }
    yt.default.default = yt.default, Vt = Vt.exports;
    var yn = { exports: {} };
    function zu(n) {
      return (zu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      })(n);
    }
    u(zu, "$o"), Object.defineProperty(yn.exports, "__esModule", { value: true }), yn.exports.default = void 0;
    var Of = Vt.default;
    if (yn.exports.default = Of, zu(yn) === "object" && yn)
      try {
        yn.exports = Vt.default;
      } catch (n) {
      }
    return Vt.default.default = Vt.default, yn.exports;
  });
});
var Kr = Jo(Gu());
function Lu(r) {
  let e = Qr(r);
  return new Kr.default(e).valueOf() * Math.PI;
}
u(Lu, "V");
function ji(r) {
  let e = Qr(r).split("/");
  if (e.length === 1)
    return 1;
  if (e.length === 2)
    return parseInt(e[1]);
  throw new Error(`Failed to parse angle '${r}'`);
}
u(ji, "X");
function qu(r, e) {
  return new Kr.default(Qr(r)).valueOf() < new Kr.default(Qr(e)).valueOf();
}
u(qu, "W");
function ju(r, e) {
  return new Kr.default(Qr(r)).valueOf() > new Kr.default(Qr(e)).valueOf();
}
u(ju, "H");
function Bu(r) {
  if (r === "0")
    return true;
  if (!/π/.test(r))
    return false;
  try {
    let e = Qr(r);
    return new Kr.default(e).valueOf(), true;
  } catch (e) {
    return false;
  }
}
u(Bu, "Q");
function Qr(r) {
  return r.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
u(Qr, "l");
function Hu(r) {
  try {
    let e = Qr(r), t = new Kr.default(e).toFraction().split("/"), i;
    return t[0] === "0" ? i = "0" : t[0] === "1" ? i = "\u03C0" : t[0] === "-1" ? i = "-\u03C0" : i = `${t[0]}\u03C0`, t.length === 1 ? i : `${i}/${t[1]}`;
  } catch (e) {
    throw new Error(`Failed to parse angle '${r}'`);
  }
}
u(Hu, "J");
var Df = Object.prototype.toString.call({});
var kf = "!recursion-limit!";
var Rf = 10;
function Qe(r, e = Rf) {
  return Nf(r) || Gf(r, e) || Lf(r, e);
}
u(Qe, "c");
function Nf(r) {
  if (r === null)
    return "null";
  if (r === void 0)
    return "undefined";
  if (typeof r == "string")
    return `"${r}"`;
  if (typeof r == "number")
    return String(r);
}
u(Nf, "M");
function Gf(r, e) {
  if (e === 0)
    return kf;
  if (r instanceof Map)
    return qf(r, e);
  if (r instanceof Set)
    return jf(r, e);
  if (((t) => t[Symbol.iterator] !== void 0)(r))
    return Bf(r, e);
}
u(Gf, "O");
function Lf(r, e) {
  let t = String(r);
  return t !== Df ? t : Hf(r, e);
}
u(Lf, "F");
function qf(r, e) {
  let t = [];
  for (let [i, l] of r.entries()) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = Qe(i, e - 1), d = Qe(l, e - 1);
    t.push(`${c}: ${d}`);
  }
  return `Map{${t.join(", ")}}`;
}
u(qf, "G");
function jf(r, e) {
  let t = [];
  for (let i of r) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    t.push(Qe(i, e - 1));
  }
  return `Set{${t.join(", ")}}`;
}
u(jf, "R");
function Bf(r, e) {
  let t = [];
  for (let i of r) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    t.push(Qe(i, e - 1));
  }
  return `${Array.isArray(r) ? "" : r.constructor.name}[${t.join(", ")}]`;
}
u(Bf, "N");
function Hf(r, e) {
  let t = [];
  for (let l in r) {
    if (!Object.prototype.hasOwnProperty.call(r, l))
      continue;
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = r[l], d = Qe(l, e - 1), v = Qe(c, e - 1);
    t.push(`${d}: ${v}`);
  }
  let i = r.constructor.name;
  return `${i === {}.constructor.name ? "" : `(Type: ${i})`}{${t.join(", ")}}`;
}
u(Hf, "q");
var xs = 0;
var Tt = u(class extends Error {
  constructor(r, e) {
    super(r);
    this.detailsObj = e, this.name = "Error", this.message = r, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), xs++;
    try {
      this.details = xs === 1 ? Qe(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (t) {
      console.error(t), this.details = "(failed to describe detailsObj, see the console for details)";
    } finally {
      xs--;
    }
  }
}, "d");
var $f = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var jt = u(class {
  static parseFloat(r) {
    if (r.length === 0)
      throw new Error(`Not a number: '${r}'`);
    if (r[0] === "-")
      return -jt.parseFloat(r.substr(1));
    if (r[0] === "\u221A")
      return Math.sqrt(jt.parseFloat(r.substr(1)));
    let e = jt.matchUnicodeFraction((i) => i.character === r);
    if (e !== void 0)
      return e.value;
    let t = parseFloat(r);
    if (isNaN(t))
      throw new Error(`Not a number: '${r}'`);
    return t;
  }
  static simplifyByRounding(r, e) {
    if (r < 0)
      return -jt.simplifyByRounding(-r, e);
    let t = r % 1;
    if (t <= e || 1 - t <= e)
      return Math.round(r);
    let i = jt.matchUnicodeFraction((c) => Math.abs(c.value - r) <= e);
    if (i !== void 0)
      return i.value;
    let l = jt.matchUnicodeFraction((c) => Math.abs(Math.sqrt(c.value) - r) <= e);
    return l !== void 0 ? Math.sqrt(l.value) : r;
  }
  static matchUnicodeFraction(r) {
    for (let e of $f)
      if (r(e))
        return e;
  }
  constructor(r, e, t, i) {
    this.allowAbbreviation = r, this.maxAbbreviationError = e, this.fixedDigits = t, this.itemSeparator = i;
  }
  formatFloat(r) {
    return this.allowAbbreviation ? this.abbreviateFloat(r, this.maxAbbreviationError, this.fixedDigits) : this.fixedDigits !== void 0 ? r.toFixed(this.fixedDigits) : String(r);
  }
  abbreviateFloat(r, e = 0, t = void 0) {
    if (Math.abs(r) < e)
      return "0";
    if (r < 0)
      return `-${this.abbreviateFloat(-r, e, t)}`;
    let i = jt.matchUnicodeFraction((c) => Math.abs(c.value - r) <= e);
    if (i !== void 0)
      return i.character;
    let l = jt.matchUnicodeFraction((c) => Math.abs(Math.sqrt(c.value) - r) <= e);
    return l !== void 0 ? `\u221A${l.character}` : r % 1 !== 0 && t !== void 0 ? r.toFixed(t) : r.toString();
  }
}, "u");
var qi = jt;
qi.CONSISTENT = new jt(false, 0, 2, ", "), qi.EXACT = new jt(true, 0, void 0, ", "), qi.MINIFIED = new jt(true, 0, void 0, ","), qi.SIMPLIFIED = new jt(true, 5e-4, 3, ", ");
var ie = u(class {
  static need(r, e, t) {
    if (r !== true) {
      let i = t === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(t).join(", ")}]`, l = `Precondition failed

Message: ${e === void 0 ? "(not provided)" : e}

Args: ${i}`;
      throw new Error(l);
    }
  }
  static notNull(r) {
    ie.need(r != null, "notNull");
  }
  static snappedCosSin(r) {
    let e = Math.PI / 4, t = Math.round(r / e);
    if (t * e === r) {
      let i = Math.sqrt(0.5);
      return [[1, 0], [i, i], [0, 1], [-i, i], [-1, 0], [-i, -i], [0, -1], [i, -i]][t & 7];
    }
    return [Math.cos(r), Math.sin(r)];
  }
}, "m");
var de = u(class {
  static from(r) {
    if (r instanceof de)
      return r;
    if (typeof r == "number")
      return new de(r, 0);
    throw new Tt("Unrecognized value type.", { v: r });
  }
  static polar(r, e) {
    let [t, i] = ie.snappedCosSin(e);
    return new de(r * t, r * i);
  }
  static realPartOf(r) {
    if (r instanceof de)
      return r.real;
    if (typeof r == "number")
      return r;
    throw new Tt("Unrecognized value type.", { v: r });
  }
  static imagPartOf(r) {
    if (r instanceof de)
      return r.imag;
    if (typeof r == "number")
      return 0;
    throw new Tt("Unrecognized value type.", { v: r });
  }
  constructor(r, e) {
    this.real = r, this.imag = e;
  }
  static rootsOfQuadratic(r, e, t) {
    if (r = de.from(r), e = de.from(e), t = de.from(t), r.isEqualTo(0)) {
      if (!e.isEqualTo(0))
        return [t.times(-1).dividedBy(e)];
      if (!t.isEqualTo(0))
        return [];
      throw Error("Degenerate");
    }
    let i = e.times(e).minus(r.times(t).times(4)).sqrts(), l = e.times(-1), c = r.times(2);
    return i.map((d) => l.minus(d).dividedBy(c));
  }
  isEqualTo(r) {
    return r instanceof de ? this.real === r.real && this.imag === r.imag : typeof r == "number" ? this.real === r && this.imag === 0 : false;
  }
  isApproximatelyEqualTo(r, e) {
    if (r instanceof de || typeof r == "number") {
      let t = this.minus(de.from(r));
      return Math.abs(t.real) <= e && Math.abs(t.imag) <= e && t.abs() <= e;
    }
    return false;
  }
  norm2() {
    return this.real * this.real + this.imag * this.imag;
  }
  abs() {
    return Math.sqrt(this.norm2());
  }
  unit() {
    let r = this.norm2();
    return r < 1e-5 ? de.polar(1, this.phase()) : this.dividedBy(Math.sqrt(r));
  }
  plus(r) {
    let e = de.from(r);
    return new de(this.real + e.real, this.imag + e.imag);
  }
  minus(r) {
    let e = de.from(r);
    return new de(this.real - e.real, this.imag - e.imag);
  }
  times(r) {
    let e = de.from(r);
    return new de(this.real * e.real - this.imag * e.imag, this.real * e.imag + this.imag * e.real);
  }
  dividedBy(r) {
    let e = de.from(r), t = e.norm2();
    if (t === 0)
      throw new Error("Division by Zero");
    let i = this.times(e.conjugate());
    return new de(i.real / t, i.imag / t);
  }
  sqrts() {
    let [r, e] = [this.real, this.imag], t = Math.sqrt(Math.sqrt(r * r + e * e));
    if (t === 0)
      return [de.ZERO];
    if (e === 0 && r < 0)
      return [new de(0, t), new de(0, -t)];
    let i = this.phase() / 2, l = de.polar(t, i);
    return [l, l.times(-1)];
  }
  conjugate() {
    return new de(this.real, -this.imag);
  }
  toString(r) {
    return r = r || qi.EXACT, r.allowAbbreviation ? this.toStringAllowSingleValue(r) : this.toStringBothValues(r);
  }
  neg() {
    return new de(-this.real, -this.imag);
  }
  raisedTo(r) {
    return r === 0.5 && this.imag === 0 && this.real >= 0 ? new de(Math.sqrt(this.real), 0) : de.ZERO.isEqualTo(r) ? de.ONE : this.isEqualTo(de.ZERO) ? de.ZERO : this.ln().times(de.from(r)).exp();
  }
  exp() {
    return de.polar(Math.exp(this.real), this.imag);
  }
  cos() {
    let r = this.times(de.I);
    return r.exp().plus(r.neg().exp()).times(0.5);
  }
  sin() {
    let r = this.times(de.I);
    return r.exp().minus(r.neg().exp()).dividedBy(new de(0, 2));
  }
  tan() {
    return this.sin().dividedBy(this.cos());
  }
  ln() {
    return new de(Math.log(this.abs()), this.phase());
  }
  phase() {
    return Math.atan2(this.imag, this.real);
  }
  toStringAllowSingleValue(r) {
    return Math.abs(this.imag) <= r.maxAbbreviationError ? r.formatFloat(this.real) : Math.abs(this.real) <= r.maxAbbreviationError ? Math.abs(this.imag - 1) <= r.maxAbbreviationError ? "i" : Math.abs(this.imag + 1) <= r.maxAbbreviationError ? "-i" : `${r.formatFloat(this.imag)}i` : this.toStringBothValues(r);
  }
  toStringBothValues(r) {
    let e = this.imag >= 0 ? "+" : "-", t = r.allowAbbreviation && Math.abs(Math.abs(this.imag) - 1) <= r.maxAbbreviationError ? "" : r.formatFloat(Math.abs(this.imag));
    return `${(r.allowAbbreviation || r.fixedDigits === void 0 || this.real < 0 ? "" : "+") + r.formatFloat(this.real) + e + t}i`;
  }
}, "o");
var Er = de;
Er.ZERO = new de(0, 0), Er.ONE = new de(1, 0), Er.I = new de(0, 1);
var ta = "H";
var ra = "X";
var na = "Y";
var ia = "Z";
var oa = "P";
var aa = "T";
var sa = "X^\xBD";
var la = "Rx";
var ua = "Ry";
var ca = "Rz";
var ws = "Swap";
var Es = "\u2022";
var Ss = "Bloch";
var $u = "|0>";
var Fu = "|1>";
var pa = "Measure";
var Ts = /* @__PURE__ */ new WeakSet();
function Os(r) {
  Ts.add(r), r.shadowRoot && Ms(r.shadowRoot), As(r), _s(r.ownerDocument);
}
u(Os, "bind");
function Ms(r) {
  As(r), _s(r);
}
u(Ms, "bindShadow");
var da = /* @__PURE__ */ new WeakMap();
function _s(r = document) {
  if (da.has(r))
    return da.get(r);
  let e = false, t = new MutationObserver((l) => {
    for (let c of l)
      if (c.type === "attributes" && c.target instanceof Element)
        Cs(c.target);
      else if (c.type === "childList" && c.addedNodes.length)
        for (let d of c.addedNodes)
          d instanceof Element && As(d);
  });
  t.observe(r, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let i = { get closed() {
    return e;
  }, unsubscribe() {
    e = true, da.delete(r), t.disconnect();
  } };
  return da.set(r, i), i;
}
u(_s, "listenForBind");
function As(r) {
  for (let e of r.querySelectorAll("[data-action]"))
    Cs(e);
  r instanceof Element && r.hasAttribute("data-action") && Cs(r);
}
u(As, "bindElements");
function Ff(r) {
  let e = r.currentTarget;
  for (let t of Wu(e))
    if (r.type === t.type) {
      let i = e.closest(t.tag);
      Ts.has(i) && typeof i[t.method] == "function" && i[t.method](r);
      let l = e.getRootNode();
      if (l instanceof ShadowRoot && Ts.has(l.host) && l.host.matches(t.tag)) {
        let c = l.host;
        typeof c[t.method] == "function" && c[t.method](r);
      }
    }
}
u(Ff, "handleEvent");
function* Wu(r) {
  for (let e of (r.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let t = e.lastIndexOf(":"), i = Math.max(0, e.lastIndexOf("#")) || e.length;
    yield { type: e.slice(0, t), tag: e.slice(t + 1, i), method: e.slice(i + 1) || "handleEvent" };
  }
}
u(Wu, "bindings");
function Cs(r) {
  for (let e of Wu(r))
    r.addEventListener(e.type, Ff);
}
u(Cs, "bindActions");
function Ps(r) {
  let e = r.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(e) || (window[r.name] = r, window.customElements.define(e, r));
}
u(Ps, "register");
function Is(r, e) {
  let t = r.tagName.toLowerCase();
  if (r.shadowRoot) {
    for (let i of r.shadowRoot.querySelectorAll(`[data-target~="${t}.${e}"]`))
      if (!i.closest(t))
        return i;
  }
  for (let i of r.querySelectorAll(`[data-target~="${t}.${e}"]`))
    if (i.closest(t) === r)
      return i;
}
u(Is, "findTarget");
function zs(r, e) {
  let t = r.tagName.toLowerCase(), i = [];
  if (r.shadowRoot)
    for (let l of r.shadowRoot.querySelectorAll(`[data-targets~="${t}.${e}"]`))
      l.closest(t) || i.push(l);
  for (let l of r.querySelectorAll(`[data-targets~="${t}.${e}"]`))
    l.closest(t) === r && i.push(l);
  return i;
}
u(zs, "findTargets");
function ze(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return Is(this, e);
  } });
}
u(ze, "target");
function Bt(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return zs(this, e);
  } });
}
u(Bt, "targets");
function Ds(r) {
  for (let e of r.querySelectorAll("template[data-shadowroot]"))
    e.parentElement === r && r.attachShadow({ mode: e.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(e.content.cloneNode(true));
}
u(Ds, "autoShadowRoot");
var fa = /* @__PURE__ */ new WeakMap();
function G(r, e) {
  fa.has(r) || fa.set(r, []), fa.get(r).push(e);
}
u(G, "attr");
function ks(r, e) {
  e || (e = Uu(Object.getPrototypeOf(r)));
  for (let t of e) {
    let i = r[t], l = Vu(t), c = { configurable: true, get() {
      return this.getAttribute(l) || "";
    }, set(d) {
      this.setAttribute(l, d || "");
    } };
    typeof i == "number" ? c = { configurable: true, get() {
      return Number(this.getAttribute(l) || 0);
    }, set(d) {
      this.setAttribute(l, d);
    } } : typeof i == "boolean" && (c = { configurable: true, get() {
      return this.hasAttribute(l);
    }, set(d) {
      this.toggleAttribute(l, d);
    } }), Object.defineProperty(r, t, c), t in r && !r.hasAttribute(l) && c.set.call(r, i);
  }
}
u(ks, "initializeAttrs");
function Uu(r) {
  let e = /* @__PURE__ */ new Set(), t = r;
  for (; t && t !== HTMLElement; ) {
    let i = fa.get(t) || [];
    for (let l of i)
      e.add(l);
    t = Object.getPrototypeOf(t);
  }
  return e;
}
u(Uu, "getAttrNames");
function Vu(r) {
  return `data-${r.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
u(Vu, "attrToAttributeName");
function Rs(r) {
  let e = r.observedAttributes || [];
  Object.defineProperty(r, "observedAttributes", { configurable: true, get() {
    return [...Uu(r.prototype)].map(Vu).concat(e);
  }, set(t) {
    e = t;
  } });
}
u(Rs, "defineObservedAttributes");
var Wf = /* @__PURE__ */ new WeakSet();
function Xu(r, e) {
  r.toggleAttribute("data-catalyst", true), customElements.upgrade(r), Wf.add(r), Ds(r), ks(r), Os(r), e && e.call(r), r.shadowRoot && Ms(r.shadowRoot);
}
u(Xu, "initializeInstance");
function Yu(r) {
  Rs(r), Ps(r);
}
u(Yu, "initializeClass");
function re(r) {
  let e = r.prototype.connectedCallback;
  r.prototype.connectedCallback = function() {
    Xu(this, e);
  }, Yu(r);
}
u(re, "controller");
function Oe(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.active = false;
    }
    activate() {
      this.active = true, this.dispatchEvent(new Event("operation-active", { bubbles: true }));
    }
    deactivate() {
      this.active = false;
    }
  }
  return u(e, "ActivateableMixinClass"), D([G], e.prototype, "active", 2), e;
}
u(Oe, "ActivateableMixin");
var xn = u((r) => typeof r == "object" && r !== null && typeof r.angle == "string" && typeof r.reducedAngle == "string", "isAngleable");
function en(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  return u(e, "AngleableMixinClass"), D([G], e.prototype, "angle", 2), D([G], e.prototype, "reducedAngle", 2), e;
}
u(en, "AngleableMixin");
var wn = u((r) => typeof r == "object" && r !== null && typeof r.controls == "object", "isControllable");
function $e(r) {
  class e extends r {
    set controls(i) {
      this.setAttribute("data-controls", i.sort().join());
    }
    get controls() {
      let i = this.getAttribute("data-controls");
      return i === null ? [] : i === "" ? [] : i.split(",").map((l) => parseInt(l)).sort();
    }
    get isControlled() {
      return this.controls.length > 0;
    }
  }
  return u(e, "ControllableMixinClass"), e;
}
u($e, "ControllableMixin");
function Be(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.disabled = false;
    }
    get enabled() {
      return !this.disabled;
    }
    enable() {
      this.disabled = false;
    }
    disable() {
      this.disabled = true;
    }
  }
  return u(e, "DisableableMixinClass"), D([G], e.prototype, "disabled", 2), e;
}
u(Be, "DisableableMixin");
var Y = u(function() {
  return Y = Object.assign || u(function(e) {
    for (var t, i = 1, l = arguments.length; i < l; i++) {
      t = arguments[i];
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, "__assign"), Y.apply(this, arguments);
}, "__assign");
function ti(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && e.indexOf(i) < 0 && (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, i = Object.getOwnPropertySymbols(r); l < i.length; l++)
      e.indexOf(i[l]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[l]) && (t[i[l]] = r[i[l]]);
  return t;
}
u(ti, "__rest");
function ve(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], i = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return { next: function() {
      return r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r };
    } };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
u(ve, "__values");
function me(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t)
    return r;
  var i = t.call(r), l, c = [], d;
  try {
    for (; (e === void 0 || e-- > 0) && !(l = i.next()).done; )
      c.push(l.value);
  } catch (v) {
    d = { error: v };
  } finally {
    try {
      l && !l.done && (t = i.return) && t.call(i);
    } finally {
      if (d)
        throw d.error;
    }
  }
  return c;
}
u(me, "__read");
function De(r, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, l = e.length, c; i < l; i++)
      (c || !(i in e)) && (c || (c = Array.prototype.slice.call(e, 0, i)), c[i] = e[i]);
  return r.concat(c || Array.prototype.slice.call(e));
}
u(De, "__spreadArray");
var Se;
(function(r) {
  r.Start = "xstate.start", r.Stop = "xstate.stop", r.Raise = "xstate.raise", r.Send = "xstate.send", r.Cancel = "xstate.cancel", r.NullEvent = "", r.Assign = "xstate.assign", r.After = "xstate.after", r.DoneState = "done.state", r.DoneInvoke = "done.invoke", r.Log = "xstate.log", r.Init = "xstate.init", r.Invoke = "xstate.invoke", r.ErrorExecution = "error.execution", r.ErrorCommunication = "error.communication", r.ErrorPlatform = "error.platform", r.ErrorCustom = "xstate.error", r.Update = "xstate.update", r.Pure = "xstate.pure", r.Choose = "xstate.choose";
})(Se || (Se = {}));
var tn;
(function(r) {
  r.Parent = "#_parent", r.Internal = "#_internal";
})(tn || (tn = {}));
var Bi = Se.Start;
var ri = Se.Stop;
var ni = Se.Raise;
var En = Se.Send;
var ha = Se.Cancel;
var Zu = Se.NullEvent;
var Ns = Se.Assign;
var mm = Se.After;
var gm = Se.DoneState;
var va = Se.Log;
var Ju = Se.Init;
var Hi = Se.Invoke;
var bm = Se.ErrorExecution;
var Gs = Se.ErrorPlatform;
var Ls = Se.ErrorCustom;
var $i = Se.Update;
var Ku = Se.Choose;
var Qu = Se.Pure;
var ma = ".";
var qs = {};
var ga = "xstate.guard";
var ec = "";
var qe = true;
var ba;
function Wi(r, e, t) {
  t === void 0 && (t = ma);
  var i = ii(r, t), l = ii(e, t);
  return ge(l) ? ge(i) ? l === i : false : ge(i) ? i in l : Object.keys(i).every(function(c) {
    return c in l ? Wi(i[c], l[c]) : false;
  });
}
u(Wi, "matchesState");
function ya(r) {
  try {
    return ge(r) || typeof r == "number" ? "".concat(r) : r.type;
  } catch (e) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
u(ya, "getEventType");
function xa(r, e) {
  try {
    return Gr(r) ? r : r.toString().split(e);
  } catch (t) {
    throw new Error("'".concat(r, "' is not a valid state path."));
  }
}
u(xa, "toStatePath");
function Uf(r) {
  return typeof r == "object" && "value" in r && "context" in r && "event" in r && "_event" in r;
}
u(Uf, "isStateLike");
function ii(r, e) {
  if (Uf(r))
    return r.value;
  if (Gr(r))
    return Fi(r);
  if (typeof r != "string")
    return r;
  var t = xa(r, e);
  return Fi(t);
}
u(ii, "toStateValue");
function Fi(r) {
  if (r.length === 1)
    return r[0];
  for (var e = {}, t = e, i = 0; i < r.length - 1; i++)
    i === r.length - 2 ? t[r[i]] = r[i + 1] : (t[r[i]] = {}, t = t[r[i]]);
  return e;
}
u(Fi, "pathToStateValue");
function oi(r, e) {
  for (var t = {}, i = Object.keys(r), l = 0; l < i.length; l++) {
    var c = i[l];
    t[c] = e(r[c], c, r, l);
  }
  return t;
}
u(oi, "mapValues");
function js(r, e, t) {
  var i, l, c = {};
  try {
    for (var d = ve(Object.keys(r)), v = d.next(); !v.done; v = d.next()) {
      var b = v.value, y = r[b];
      !t(y) || (c[b] = e(y, b, r));
    }
  } catch (w) {
    i = { error: w };
  } finally {
    try {
      v && !v.done && (l = d.return) && l.call(d);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return c;
}
u(js, "mapFilterValues");
var tc = u(function(r) {
  return function(e) {
    var t, i, l = e;
    try {
      for (var c = ve(r), d = c.next(); !d.done; d = c.next()) {
        var v = d.value;
        l = l[v];
      }
    } catch (b) {
      t = { error: b };
    } finally {
      try {
        d && !d.done && (i = c.return) && i.call(c);
      } finally {
        if (t)
          throw t.error;
      }
    }
    return l;
  };
}, "path");
function rc(r, e) {
  return function(t) {
    var i, l, c = t;
    try {
      for (var d = ve(r), v = d.next(); !v.done; v = d.next()) {
        var b = v.value;
        c = c[e][b];
      }
    } catch (y) {
      i = { error: y };
    } finally {
      try {
        v && !v.done && (l = d.return) && l.call(d);
      } finally {
        if (i)
          throw i.error;
      }
    }
    return c;
  };
}
u(rc, "nestedPath");
function Ui(r) {
  if (!r)
    return [[]];
  if (ge(r))
    return [[r]];
  var e = Ne(Object.keys(r).map(function(t) {
    var i = r[t];
    return typeof i != "string" && (!i || !Object.keys(i).length) ? [[t]] : Ui(r[t]).map(function(l) {
      return [t].concat(l);
    });
  }));
  return e;
}
u(Ui, "toStatePaths");
function Ne(r) {
  var e;
  return (e = []).concat.apply(e, De([], me(r), false));
}
u(Ne, "flatten");
function nc(r) {
  return Gr(r) ? r : [r];
}
u(nc, "toArrayStrict");
function Ht(r) {
  return r === void 0 ? [] : nc(r);
}
u(Ht, "toArray");
function Sn(r, e, t) {
  var i, l;
  if (Te(r))
    return r(e, t.data);
  var c = {};
  try {
    for (var d = ve(Object.keys(r)), v = d.next(); !v.done; v = d.next()) {
      var b = v.value, y = r[b];
      Te(y) ? c[b] = y(e, t.data) : c[b] = y;
    }
  } catch (w) {
    i = { error: w };
  } finally {
    try {
      v && !v.done && (l = d.return) && l.call(d);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return c;
}
u(Sn, "mapContext");
function ic(r) {
  return /^(done|error)\./.test(r);
}
u(ic, "isBuiltInEvent");
function Bs(r) {
  return !!(r instanceof Promise || r !== null && (Te(r) || typeof r == "object") && Te(r.then));
}
u(Bs, "isPromiseLike");
function oc(r) {
  return r !== null && typeof r == "object" && "transition" in r && typeof r.transition == "function";
}
u(oc, "isBehavior");
function wa(r, e) {
  var t, i, l = me([[], []], 2), c = l[0], d = l[1];
  try {
    for (var v = ve(r), b = v.next(); !b.done; b = v.next()) {
      var y = b.value;
      e(y) ? c.push(y) : d.push(y);
    }
  } catch (w) {
    t = { error: w };
  } finally {
    try {
      b && !b.done && (i = v.return) && i.call(v);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return [c, d];
}
u(wa, "partition");
function ac(r, e) {
  return oi(r.states, function(t, i) {
    if (!!t) {
      var l = (ge(e) ? void 0 : e[i]) || (t ? t.current : void 0);
      if (!!l)
        return { current: l, states: ac(t, l) };
    }
  });
}
u(ac, "updateHistoryStates");
function sc(r, e) {
  return { current: e, states: ac(r, e) };
}
u(sc, "updateHistoryValue");
function Hs(r, e, t, i) {
  qe || Ue(!!r, "Attempting to update undefined context");
  var l = r && t.reduce(function(c, d) {
    var v, b, y = d.assignment, w = { state: i, action: d, _event: e }, _ = {};
    if (Te(y))
      _ = y(c, e.data, w);
    else
      try {
        for (var C = ve(Object.keys(y)), A = C.next(); !A.done; A = C.next()) {
          var k = A.value, S = y[k];
          _[k] = Te(S) ? S(c, e.data, w) : S;
        }
      } catch (M) {
        v = { error: M };
      } finally {
        try {
          A && !A.done && (b = C.return) && b.call(C);
        } finally {
          if (v)
            throw v.error;
        }
      }
    return Object.assign({}, c, _);
  }, r);
  return l;
}
u(Hs, "updateContext");
var Ue = u(function() {
}, "warn");
qe || (Ue = u(function(r, e) {
  var t = r instanceof Error ? r : void 0;
  if (!(!t && r) && console !== void 0) {
    var i = ["Warning: ".concat(e)];
    t && i.push(t), console.warn.apply(console, i);
  }
}, "warn"));
function Gr(r) {
  return Array.isArray(r);
}
u(Gr, "isArray");
function Te(r) {
  return typeof r == "function";
}
u(Te, "isFunction");
function ge(r) {
  return typeof r == "string";
}
u(ge, "isString");
function Ea(r, e) {
  if (!!r)
    return ge(r) ? { type: ga, name: r, predicate: e ? e[r] : void 0 } : Te(r) ? { type: ga, name: r.name, predicate: r } : r;
}
u(Ea, "toGuard");
function lc(r) {
  try {
    return "subscribe" in r && Te(r.subscribe);
  } catch (e) {
    return false;
  }
}
u(lc, "isObservable");
var Sr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var Cm = (ba = {}, ba[Sr] = function() {
  return this;
}, ba[Symbol.observable] = function() {
  return this;
}, ba);
function Tr(r) {
  return !!r && "__xstatenode" in r;
}
u(Tr, "isMachine");
function uc(r) {
  return !!r && typeof r.send == "function";
}
u(uc, "isActor");
function Vi(r, e) {
  return ge(r) || typeof r == "number" ? Y({ type: r }, e) : r;
}
u(Vi, "toEventObject");
function et(r, e) {
  if (!ge(r) && "$$type" in r && r.$$type === "scxml")
    return r;
  var t = Vi(r);
  return Y({ name: t.type, data: t, $$type: "scxml", type: "external" }, e);
}
u(et, "toSCXMLEvent");
function Tn(r, e) {
  var t = nc(e).map(function(i) {
    return typeof i == "undefined" || typeof i == "string" || Tr(i) ? { target: i, event: r } : Y(Y({}, i), { event: r });
  });
  return t;
}
u(Tn, "toTransitionConfigArray");
function cc(r) {
  if (!(r === void 0 || r === ec))
    return Ht(r);
}
u(cc, "normalizeTarget");
function pc(r, e, t) {
  if (!qe) {
    var i = r.stack ? " Stacktrace was '".concat(r.stack, "'") : "";
    if (r === e)
      console.error("Missing onError handler for invocation '".concat(t, "', error was '").concat(r, "'.").concat(i));
    else {
      var l = e.stack ? " Stacktrace was '".concat(e.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(t, "'. ") + "Original error: '".concat(r, "'. ").concat(i, " Current error is '").concat(e, "'.").concat(l));
    }
  }
}
u(pc, "reportUnhandledExceptionOnInvocation");
function Sa(r, e, t, i, l) {
  var c = r.options.guards, d = { state: l, cond: e, _event: i };
  if (e.type === ga)
    return ((c == null ? void 0 : c[e.name]) || e.predicate)(t, i.data, d);
  var v = c == null ? void 0 : c[e.type];
  if (!v)
    throw new Error("Guard '".concat(e.type, "' is not implemented on machine '").concat(r.id, "'."));
  return v(t, i.data, d);
}
u(Sa, "evaluateGuard");
function Ta(r) {
  return typeof r == "string" ? { type: r } : r;
}
u(Ta, "toInvokeSource");
function Xi(r, e, t) {
  if (typeof r == "object")
    return r;
  var i = u(function() {
  }, "noop");
  return { next: r, error: e || i, complete: t || i };
}
u(Xi, "toObserver");
function Yi(r, e) {
  return "".concat(r, ":invocation[").concat(e, "]");
}
u(Yi, "createInvokeId");
var Cn = et({ type: Ju });
function Ca(r, e) {
  return e && e[r] || void 0;
}
u(Ca, "getActionFunction");
function ai(r, e) {
  var t;
  if (ge(r) || typeof r == "number") {
    var i = Ca(r, e);
    Te(i) ? t = { type: r, exec: i } : i ? t = i : t = { type: r, exec: void 0 };
  } else if (Te(r))
    t = { type: r.name || r.toString(), exec: r };
  else {
    var i = Ca(r.type, e);
    if (Te(i))
      t = Y(Y({}, r), { exec: i });
    else if (i) {
      var l = i.type || r.type;
      t = Y(Y(Y({}, i), r), { type: l });
    } else
      t = r;
  }
  return t;
}
u(ai, "toActionObject");
var Zi = u(function(r, e) {
  if (!r)
    return [];
  var t = Gr(r) ? r : [r];
  return t.map(function(i) {
    return ai(i, e);
  });
}, "toActionObjects");
function Ma(r) {
  var e = ai(r);
  return Y(Y({ id: ge(r) ? r : e.id }, e), { type: e.type });
}
u(Ma, "toActivityDefinition");
function dc(r) {
  return ge(r) ? { type: ni, event: r } : $s(r, { to: tn.Internal });
}
u(dc, "raise");
function Vf(r) {
  return { type: ni, _event: et(r.event) };
}
u(Vf, "resolveRaise");
function $s(r, e) {
  return { to: e ? e.to : void 0, type: En, event: Te(r) ? r : Vi(r), delay: e ? e.delay : void 0, id: e && e.id !== void 0 ? e.id : Te(r) ? r.name : ya(r) };
}
u($s, "send");
function Xf(r, e, t, i) {
  var l = { _event: t }, c = et(Te(r.event) ? r.event(e, t.data, l) : r.event), d;
  if (ge(r.delay)) {
    var v = i && i[r.delay];
    d = Te(v) ? v(e, t.data, l) : v;
  } else
    d = Te(r.delay) ? r.delay(e, t.data, l) : r.delay;
  var b = Te(r.to) ? r.to(e, t.data, l) : r.to;
  return Y(Y({}, r), { to: b, _event: c, event: c.data, delay: d });
}
u(Xf, "resolveSend");
var Yf = u(function(r, e, t) {
  return Y(Y({}, r), { value: ge(r.expr) ? r.expr : r.expr(e, t.data, { _event: t }) });
}, "resolveLog");
var fc = u(function(r) {
  return { type: ha, sendId: r };
}, "cancel");
function hc(r) {
  var e = Ma(r);
  return { type: Se.Start, activity: e, exec: void 0 };
}
u(hc, "start");
function vc(r) {
  var e = Te(r) ? r : Ma(r);
  return { type: Se.Stop, activity: e, exec: void 0 };
}
u(vc, "stop");
function Zf(r, e, t) {
  var i = Te(r.activity) ? r.activity(e, t.data) : r.activity, l = typeof i == "string" ? { id: i } : i, c = { type: Se.Stop, activity: l };
  return c;
}
u(Zf, "resolveStop");
function mc(r, e) {
  var t = e ? "#".concat(e) : "";
  return "".concat(Se.After, "(").concat(r, ")").concat(t);
}
u(mc, "after");
function Ji(r, e) {
  var t = "".concat(Se.DoneState, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
u(Ji, "done");
function si(r, e) {
  var t = "".concat(Se.DoneInvoke, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
u(si, "doneInvoke");
function On(r, e) {
  var t = "".concat(Se.ErrorPlatform, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
u(On, "error");
function Oa(r, e, t, i, l, c) {
  c === void 0 && (c = false);
  var d = me(c ? [[], l] : wa(l, function(C) {
    return C.type === Ns;
  }), 2), v = d[0], b = d[1], y = v.length ? Hs(t, i, v, e) : t, w = c ? [t] : void 0, _ = Ne(b.map(function(C) {
    var A;
    switch (C.type) {
      case ni:
        return Vf(C);
      case En:
        var k = Xf(C, y, i, r.options.delays);
        return qe || Ue(!ge(C.delay) || typeof k.delay == "number", "No delay reference for delay expression '".concat(C.delay, "' was found on machine '").concat(r.id, "'")), k;
      case va:
        return Yf(C, y, i);
      case Ku: {
        var S = C, M = (A = S.conds.find(function(W) {
          var ne = Ea(W.cond, r.options.guards);
          return !ne || Sa(r, ne, y, i, e);
        })) === null || A === void 0 ? void 0 : A.actions;
        if (!M)
          return [];
        var P = me(Oa(r, e, y, i, Zi(Ht(M), r.options.actions), c), 2), I = P[0], q = P[1];
        return y = q, w == null || w.push(y), I;
      }
      case Qu: {
        var M = C.get(y, i.data);
        if (!M)
          return [];
        var E = me(Oa(r, e, y, i, Zi(Ht(M), r.options.actions), c), 2), B = E[0], R = E[1];
        return y = R, w == null || w.push(y), B;
      }
      case ri:
        return Zf(C, y, i);
      case Ns: {
        y = Hs(y, i, [C], e), w == null || w.push(y);
        break;
      }
      default:
        var X = ai(C, r.options.actions), V = X.exec;
        if (V && w) {
          var H = w.length - 1;
          X = Y(Y({}, X), { exec: function(W) {
            for (var ne = [], oe = 1; oe < arguments.length; oe++)
              ne[oe - 1] = arguments[oe];
            V.apply(void 0, De([w[H]], me(ne), false));
          } });
        }
        return X;
    }
  }).filter(function(C) {
    return !!C;
  }));
  return [_, y];
}
u(Oa, "resolveActions");
var gc = [];
var Mn = u(function(r, e) {
  gc.push(r);
  var t = e(r);
  return gc.pop(), t;
}, "provide");
function bc(r) {
  var e;
  return e = { id: r, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: r };
  } }, e[Sr] = function() {
    return this;
  }, e;
}
u(bc, "createNullActor");
function yc(r, e, t, i) {
  var l, c = Ta(r.src), d = (l = e == null ? void 0 : e.options.services) === null || l === void 0 ? void 0 : l[c.type], v = r.data ? Sn(r.data, t, i) : void 0, b = d ? xc(d, r.id, v) : bc(r.id);
  return b.meta = r, b;
}
u(yc, "createInvocableActor");
function xc(r, e, t) {
  var i = bc(e);
  if (i.deferred = true, Tr(r)) {
    var l = i.state = Mn(void 0, function() {
      return (t ? r.withContext(t) : r).initialState;
    });
    i.getSnapshot = function() {
      return l;
    };
  }
  return i;
}
u(xc, "createDeferredActor");
function Jf(r) {
  try {
    return typeof r.send == "function";
  } catch (e) {
    return false;
  }
}
u(Jf, "isActor");
function wc(r) {
  return Jf(r) && "id" in r;
}
u(wc, "isSpawnedActor");
function Ec(r) {
  var e;
  return Y((e = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, e[Sr] = function() {
    return this;
  }, e), r);
}
u(Ec, "toActorRef");
var Ki = u(function(r) {
  return r.type === "atomic" || r.type === "final";
}, "isLeafNode");
function _n(r) {
  return Object.keys(r.states).map(function(e) {
    return r.states[e];
  }).filter(function(e) {
    return e.type !== "history";
  });
}
u(_n, "getChildren");
function Ws(r) {
  var e = [r];
  return Ki(r) ? e : e.concat(Ne(_n(r).map(Ws)));
}
u(Ws, "getAllStateNodes");
function An(r, e) {
  var t, i, l, c, d, v, b, y, w = new Set(r), _ = Fs(w), C = new Set(e);
  try {
    for (var A = ve(C), k = A.next(); !k.done; k = A.next())
      for (var S = k.value, M = S.parent; M && !C.has(M); )
        C.add(M), M = M.parent;
  } catch (H) {
    t = { error: H };
  } finally {
    try {
      k && !k.done && (i = A.return) && i.call(A);
    } finally {
      if (t)
        throw t.error;
    }
  }
  var P = Fs(C);
  try {
    for (var I = ve(C), q = I.next(); !q.done; q = I.next()) {
      var S = q.value;
      if (S.type === "compound" && (!P.get(S) || !P.get(S).length))
        _.get(S) ? _.get(S).forEach(function(W) {
          return C.add(W);
        }) : S.initialStateNodes.forEach(function(W) {
          return C.add(W);
        });
      else if (S.type === "parallel")
        try {
          for (var E = (d = void 0, ve(_n(S))), B = E.next(); !B.done; B = E.next()) {
            var R = B.value;
            C.has(R) || (C.add(R), _.get(R) ? _.get(R).forEach(function(W) {
              return C.add(W);
            }) : R.initialStateNodes.forEach(function(W) {
              return C.add(W);
            }));
          }
        } catch (W) {
          d = { error: W };
        } finally {
          try {
            B && !B.done && (v = E.return) && v.call(E);
          } finally {
            if (d)
              throw d.error;
          }
        }
    }
  } catch (H) {
    l = { error: H };
  } finally {
    try {
      q && !q.done && (c = I.return) && c.call(I);
    } finally {
      if (l)
        throw l.error;
    }
  }
  try {
    for (var X = ve(C), V = X.next(); !V.done; V = X.next())
      for (var S = V.value, M = S.parent; M && !C.has(M); )
        C.add(M), M = M.parent;
  } catch (H) {
    b = { error: H };
  } finally {
    try {
      V && !V.done && (y = X.return) && y.call(X);
    } finally {
      if (b)
        throw b.error;
    }
  }
  return C;
}
u(An, "getConfiguration");
function Sc(r, e) {
  var t = e.get(r);
  if (!t)
    return {};
  if (r.type === "compound") {
    var i = t[0];
    if (i) {
      if (Ki(i))
        return i.key;
    } else
      return {};
  }
  var l = {};
  return t.forEach(function(c) {
    l[c.key] = Sc(c, e);
  }), l;
}
u(Sc, "getValueFromAdj");
function Fs(r) {
  var e, t, i = /* @__PURE__ */ new Map();
  try {
    for (var l = ve(r), c = l.next(); !c.done; c = l.next()) {
      var d = c.value;
      i.has(d) || i.set(d, []), d.parent && (i.has(d.parent) || i.set(d.parent, []), i.get(d.parent).push(d));
    }
  } catch (v) {
    e = { error: v };
  } finally {
    try {
      c && !c.done && (t = l.return) && t.call(l);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return i;
}
u(Fs, "getAdjList");
function Tc(r, e) {
  var t = An([r], e);
  return Sc(r, Fs(t));
}
u(Tc, "getValue");
function Qi(r, e) {
  return Array.isArray(r) ? r.some(function(t) {
    return t === e;
  }) : r instanceof Set ? r.has(e) : false;
}
u(Qi, "has");
function Cc(r) {
  return De([], me(new Set(Ne(De([], me(r.map(function(e) {
    return e.ownEvents;
  })), false)))), false);
}
u(Cc, "nextEvents");
function Pn(r, e) {
  return e.type === "compound" ? _n(e).some(function(t) {
    return t.type === "final" && Qi(r, t);
  }) : e.type === "parallel" ? _n(e).every(function(t) {
    return Pn(r, t);
  }) : false;
}
u(Pn, "isInFinalState");
function Oc(r) {
  return r === void 0 && (r = []), r.reduce(function(e, t) {
    return t.meta !== void 0 && (e[t.id] = t.meta), e;
  }, {});
}
u(Oc, "getMeta");
function Us(r) {
  return new Set(Ne(r.map(function(e) {
    return e.tags;
  })));
}
u(Us, "getTagsFromConfiguration");
function Vs(r, e) {
  if (r === e)
    return true;
  if (r === void 0 || e === void 0)
    return false;
  if (ge(r) || ge(e))
    return r === e;
  var t = Object.keys(r), i = Object.keys(e);
  return t.length === i.length && t.every(function(l) {
    return Vs(r[l], e[l]);
  });
}
u(Vs, "stateValuesEqual");
function Mc(r) {
  return typeof r != "object" || r === null ? false : "value" in r && "_event" in r;
}
u(Mc, "isStateConfig");
function _c(r, e) {
  var t = r.exec, i = Y(Y({}, r), { exec: t !== void 0 ? function() {
    return t(e.context, e.event, { action: r, state: e, _event: e._event });
  } : void 0 });
  return i;
}
u(_c, "bindActionToState");
var mr = function() {
  function r(e) {
    var t = this, i;
    this.actions = [], this.activities = qs, this.meta = {}, this.events = [], this.value = e.value, this.context = e.context, this._event = e._event, this._sessionid = e._sessionid, this.event = this._event.data, this.historyValue = e.historyValue, this.history = e.history, this.actions = e.actions || [], this.activities = e.activities || qs, this.meta = Oc(e.configuration), this.events = e.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = e.configuration, this.transitions = e.transitions, this.children = e.children, this.done = !!e.done, this.tags = (i = Array.isArray(e.tags) ? new Set(e.tags) : e.tags) !== null && i !== void 0 ? i : /* @__PURE__ */ new Set(), this.machine = e.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return Cc(t.configuration);
    } });
  }
  return u(r, "State"), r.from = function(e, t) {
    if (e instanceof r)
      return e.context !== t ? new r({ value: e.value, context: t, _event: e._event, _sessionid: null, historyValue: e.historyValue, history: e.history, actions: [], activities: e.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : e;
    var i = Cn;
    return new r({ value: e, context: t, _event: i, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, r.create = function(e) {
    return new r(e);
  }, r.inert = function(e, t) {
    if (e instanceof r) {
      if (!e.actions.length)
        return e;
      var i = Cn;
      return new r({ value: e.value, context: t, _event: i, _sessionid: null, historyValue: e.historyValue, history: e.history, activities: e.activities, configuration: e.configuration, transitions: [], children: {} });
    }
    return r.from(e, t);
  }, r.prototype.toStrings = function(e, t) {
    var i = this;
    if (e === void 0 && (e = this.value), t === void 0 && (t = "."), ge(e))
      return [e];
    var l = Object.keys(e);
    return l.concat.apply(l, De([], me(l.map(function(c) {
      return i.toStrings(e[c], t).map(function(d) {
        return c + t + d;
      });
    })), false));
  }, r.prototype.toJSON = function() {
    var e = this;
    e.configuration, e.transitions;
    var t = e.tags;
    e.machine;
    var i = ti(e, ["configuration", "transitions", "tags", "machine"]);
    return Y(Y({}, i), { tags: Array.from(t) });
  }, r.prototype.matches = function(e) {
    return Wi(e, this.value);
  }, r.prototype.hasTag = function(e) {
    return this.tags.has(e);
  }, r.prototype.can = function(e) {
    var t;
    qe && Ue(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var i = (t = this.machine) === null || t === void 0 ? void 0 : t.getTransitionData(this, e);
    return !!(i == null ? void 0 : i.transitions.length) && i.transitions.some(function(l) {
      return l.target !== void 0 || l.actions.length;
    });
  }, r;
}();
var Kf = { deferEvents: false };
var Xs = function() {
  function r(e) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = Y(Y({}, Kf), e);
  }
  return u(r, "Scheduler"), r.prototype.initialize = function(e) {
    if (this.initialized = true, e) {
      if (!this.options.deferEvents) {
        this.schedule(e);
        return;
      }
      this.process(e);
    }
    this.flushEvents();
  }, r.prototype.schedule = function(e) {
    if (!this.initialized || this.processingEvent) {
      this.queue.push(e);
      return;
    }
    if (this.queue.length !== 0)
      throw new Error("Event queue should be empty when it is not processing events");
    this.process(e), this.flushEvents();
  }, r.prototype.clear = function() {
    this.queue = [];
  }, r.prototype.flushEvents = function() {
    for (var e = this.queue.shift(); e; )
      this.process(e), e = this.queue.shift();
  }, r.prototype.process = function(e) {
    this.processingEvent = true;
    try {
      e();
    } catch (t) {
      throw this.clear(), t;
    } finally {
      this.processingEvent = false;
    }
  }, r;
}();
var Ys = /* @__PURE__ */ new Map();
var Qf = 0;
var eo = { bookId: function() {
  return "x:".concat(Qf++);
}, register: function(r, e) {
  return Ys.set(r, e), r;
}, get: function(r) {
  return Ys.get(r);
}, free: function(r) {
  Ys.delete(r);
} };
function _a() {
  if (typeof globalThis != "undefined")
    return globalThis;
  if (typeof self != "undefined")
    return self;
  if (typeof window != "undefined")
    return window;
  if (typeof global != "undefined")
    return global;
  qe || console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues");
}
u(_a, "getGlobal");
function eh() {
  var r = _a();
  if (r && "__xstate__" in r)
    return r.__xstate__;
}
u(eh, "getDevTools");
function Ac(r) {
  if (!!_a()) {
    var e = eh();
    e && e.register(r);
  }
}
u(Ac, "registerService");
function Pc(r, e) {
  e === void 0 && (e = {});
  var t = r.initialState, i = /* @__PURE__ */ new Set(), l = [], c = false, d = u(function() {
    if (!c) {
      for (c = true; l.length > 0; ) {
        var y = l.shift();
        t = r.transition(t, y, b), i.forEach(function(w) {
          return w.next(t);
        });
      }
      c = false;
    }
  }, "flush"), v = Ec({ id: e.id, send: function(y) {
    l.push(y), d();
  }, getSnapshot: function() {
    return t;
  }, subscribe: function(y, w, _) {
    var C = Xi(y, w, _);
    return i.add(C), C.next(t), { unsubscribe: function() {
      i.delete(C);
    } };
  } }), b = { parent: e.parent, self: v, id: e.id || "anonymous", observers: i };
  return t = r.start ? r.start(b) : t, v;
}
u(Pc, "spawnBehavior");
var th = { sync: false, autoForward: false };
var mt;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped";
})(mt || (mt = {}));
var Ic = function() {
  function r(e, t) {
    var i = this;
    t === void 0 && (t = r.defaultOptions), this.machine = e, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = mt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this.init = this.start, this.send = function(w, _) {
      if (Gr(w))
        return i.batch(w), i.state;
      var C = et(Vi(w, _));
      if (i.status === mt.Stopped)
        return qe || Ue(false, 'Event "'.concat(C.name, '" was sent to stopped service "').concat(i.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(C.data))), i.state;
      if (i.status !== mt.Running && !i.options.deferEvents)
        throw new Error('Event "'.concat(C.name, '" was sent to uninitialized service "').concat(i.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(C.data)));
      return i.scheduler.schedule(function() {
        i.forward(C);
        var A = i.nextState(C);
        i.update(A, C);
      }), i._state;
    }, this.sendTo = function(w, _) {
      var C = i.parent && (_ === tn.Parent || i.parent.id === _), A = C ? i.parent : ge(_) ? i.children.get(_) || eo.get(_) : uc(_) ? _ : void 0;
      if (!A) {
        if (!C)
          throw new Error("Unable to send event to child '".concat(_, "' from service '").concat(i.id, "'."));
        qe || Ue(false, "Service '".concat(i.id, "' has no parent: unable to send event ").concat(w.type));
        return;
      }
      "machine" in A ? A.send(Y(Y({}, w), { name: w.name === Ls ? "".concat(On(i.id)) : w.name, origin: i.sessionId })) : A.send(w.data);
    };
    var l = Y(Y({}, r.defaultOptions), t), c = l.clock, d = l.logger, v = l.parent, b = l.id, y = b !== void 0 ? b : e.id;
    this.id = y, this.logger = d, this.clock = c, this.parent = v, this.options = l, this.scheduler = new Xs({ deferEvents: this.options.deferEvents }), this.sessionId = eo.bookId();
  }
  return u(r, "Interpreter"), Object.defineProperty(r.prototype, "initialState", { get: function() {
    var e = this;
    return this._initialState ? this._initialState : Mn(this, function() {
      return e._initialState = e.machine.initialState, e._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "state", { get: function() {
    return qe || Ue(this.status !== mt.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), r.prototype.execute = function(e, t) {
    var i, l;
    try {
      for (var c = ve(e.actions), d = c.next(); !d.done; d = c.next()) {
        var v = d.value;
        this.exec(v, e, t);
      }
    } catch (b) {
      i = { error: b };
    } finally {
      try {
        d && !d.done && (l = c.return) && l.call(c);
      } finally {
        if (i)
          throw i.error;
      }
    }
  }, r.prototype.update = function(e, t) {
    var i, l, c, d, v, b, y, w, _ = this;
    if (e._sessionid = this.sessionId, this._state = e, this.options.execute && this.execute(this.state), this.children.forEach(function(H) {
      _.state.children[H.id] = H;
    }), this.devTools && this.devTools.send(t.data, e), e.event)
      try {
        for (var C = ve(this.eventListeners), A = C.next(); !A.done; A = C.next()) {
          var k = A.value;
          k(e.event);
        }
      } catch (H) {
        i = { error: H };
      } finally {
        try {
          A && !A.done && (l = C.return) && l.call(C);
        } finally {
          if (i)
            throw i.error;
        }
      }
    try {
      for (var S = ve(this.listeners), M = S.next(); !M.done; M = S.next()) {
        var k = M.value;
        k(e, e.event);
      }
    } catch (H) {
      c = { error: H };
    } finally {
      try {
        M && !M.done && (d = S.return) && d.call(S);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var P = ve(this.contextListeners), I = P.next(); !I.done; I = P.next()) {
        var q = I.value;
        q(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (H) {
      v = { error: H };
    } finally {
      try {
        I && !I.done && (b = P.return) && b.call(P);
      } finally {
        if (v)
          throw v.error;
      }
    }
    var E = Pn(e.configuration || [], this.machine);
    if (this.state.configuration && E) {
      var B = e.configuration.find(function(H) {
        return H.type === "final" && H.parent === _.machine;
      }), R = B && B.doneData ? Sn(B.doneData, e.context, t) : void 0;
      try {
        for (var X = ve(this.doneListeners), V = X.next(); !V.done; V = X.next()) {
          var k = V.value;
          k(si(this.id, R));
        }
      } catch (H) {
        y = { error: H };
      } finally {
        try {
          V && !V.done && (w = X.return) && w.call(X);
        } finally {
          if (y)
            throw y.error;
        }
      }
      this.stop();
    }
  }, r.prototype.onTransition = function(e) {
    return this.listeners.add(e), this.status === mt.Running && e(this.state, this.state.event), this;
  }, r.prototype.subscribe = function(e, t, i) {
    var l = this;
    if (!e)
      return { unsubscribe: function() {
      } };
    var c, d = i;
    return typeof e == "function" ? c = e : (c = e.next.bind(e), d = e.complete.bind(e)), this.listeners.add(c), this.status !== mt.NotStarted && c(this.state), d && (this.status === mt.Stopped ? d() : this.onDone(d)), { unsubscribe: function() {
      c && l.listeners.delete(c), d && l.doneListeners.delete(d);
    } };
  }, r.prototype.onEvent = function(e) {
    return this.eventListeners.add(e), this;
  }, r.prototype.onSend = function(e) {
    return this.sendListeners.add(e), this;
  }, r.prototype.onChange = function(e) {
    return this.contextListeners.add(e), this;
  }, r.prototype.onStop = function(e) {
    return this.stopListeners.add(e), this;
  }, r.prototype.onDone = function(e) {
    return this.doneListeners.add(e), this;
  }, r.prototype.off = function(e) {
    return this.listeners.delete(e), this.eventListeners.delete(e), this.sendListeners.delete(e), this.stopListeners.delete(e), this.doneListeners.delete(e), this.contextListeners.delete(e), this;
  }, r.prototype.start = function(e) {
    var t = this;
    if (this.status === mt.Running)
      return this;
    this.machine._init(), eo.register(this.sessionId, this), this.initialized = true, this.status = mt.Running;
    var i = e === void 0 ? this.initialState : Mn(this, function() {
      return Mc(e) ? t.machine.resolveState(e) : t.machine.resolveState(mr.from(e, t.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      t.update(i, Cn);
    }), this;
  }, r.prototype.stop = function() {
    var e, t, i, l, c, d, v, b, y, w, _ = this;
    try {
      for (var C = ve(this.listeners), A = C.next(); !A.done; A = C.next()) {
        var k = A.value;
        this.listeners.delete(k);
      }
    } catch (V) {
      e = { error: V };
    } finally {
      try {
        A && !A.done && (t = C.return) && t.call(C);
      } finally {
        if (e)
          throw e.error;
      }
    }
    try {
      for (var S = ve(this.stopListeners), M = S.next(); !M.done; M = S.next()) {
        var k = M.value;
        k(), this.stopListeners.delete(k);
      }
    } catch (V) {
      i = { error: V };
    } finally {
      try {
        M && !M.done && (l = S.return) && l.call(S);
      } finally {
        if (i)
          throw i.error;
      }
    }
    try {
      for (var P = ve(this.contextListeners), I = P.next(); !I.done; I = P.next()) {
        var k = I.value;
        this.contextListeners.delete(k);
      }
    } catch (V) {
      c = { error: V };
    } finally {
      try {
        I && !I.done && (d = P.return) && d.call(P);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var q = ve(this.doneListeners), E = q.next(); !E.done; E = q.next()) {
        var k = E.value;
        this.doneListeners.delete(k);
      }
    } catch (V) {
      v = { error: V };
    } finally {
      try {
        E && !E.done && (b = q.return) && b.call(q);
      } finally {
        if (v)
          throw v.error;
      }
    }
    if (!this.initialized)
      return this;
    De([], me(this.state.configuration), false).sort(function(V, H) {
      return H.order - V.order;
    }).forEach(function(V) {
      var H, W;
      try {
        for (var ne = ve(V.definition.exit), oe = ne.next(); !oe.done; oe = ne.next()) {
          var U = oe.value;
          _.exec(U, _.state);
        }
      } catch (ce) {
        H = { error: ce };
      } finally {
        try {
          oe && !oe.done && (W = ne.return) && W.call(ne);
        } finally {
          if (H)
            throw H.error;
        }
      }
    }), this.children.forEach(function(V) {
      Te(V.stop) && V.stop();
    }), this.children.clear();
    try {
      for (var B = ve(Object.keys(this.delayedEventsMap)), R = B.next(); !R.done; R = B.next()) {
        var X = R.value;
        this.clock.clearTimeout(this.delayedEventsMap[X]);
      }
    } catch (V) {
      y = { error: V };
    } finally {
      try {
        R && !R.done && (w = B.return) && w.call(B);
      } finally {
        if (y)
          throw y.error;
      }
    }
    return this.scheduler.clear(), this.scheduler = new Xs({ deferEvents: this.options.deferEvents }), this.initialized = false, this.status = mt.Stopped, this._initialState = void 0, eo.free(this.sessionId), this;
  }, r.prototype.batch = function(e) {
    var t = this;
    if (this.status === mt.NotStarted && this.options.deferEvents)
      qe || Ue(false, "".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== mt.Running)
      throw new Error("".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    this.scheduler.schedule(function() {
      var i, l, c = t.state, d = false, v = [], b = u(function(C) {
        var A = et(C);
        t.forward(A), c = Mn(t, function() {
          return t.machine.transition(c, A);
        }), v.push.apply(v, De([], me(c.actions.map(function(k) {
          return _c(k, c);
        })), false)), d = d || !!c.changed;
      }, "_loop_1");
      try {
        for (var y = ve(e), w = y.next(); !w.done; w = y.next()) {
          var _ = w.value;
          b(_);
        }
      } catch (C) {
        i = { error: C };
      } finally {
        try {
          w && !w.done && (l = y.return) && l.call(y);
        } finally {
          if (i)
            throw i.error;
        }
      }
      c.changed = d, c.actions = v, t.update(c, et(e[e.length - 1]));
    });
  }, r.prototype.sender = function(e) {
    return this.send.bind(this, e);
  }, r.prototype.nextState = function(e) {
    var t = this, i = et(e);
    if (i.name.indexOf(Gs) === 0 && !this.state.nextEvents.some(function(c) {
      return c.indexOf(Gs) === 0;
    }))
      throw i.data.data;
    var l = Mn(this, function() {
      return t.machine.transition(t.state, i);
    });
    return l;
  }, r.prototype.forward = function(e) {
    var t, i;
    try {
      for (var l = ve(this.forwardTo), c = l.next(); !c.done; c = l.next()) {
        var d = c.value, v = this.children.get(d);
        if (!v)
          throw new Error("Unable to forward event '".concat(e, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(d, "'."));
        v.send(e);
      }
    } catch (b) {
      t = { error: b };
    } finally {
      try {
        c && !c.done && (i = l.return) && i.call(l);
      } finally {
        if (t)
          throw t.error;
      }
    }
  }, r.prototype.defer = function(e) {
    var t = this;
    this.delayedEventsMap[e.id] = this.clock.setTimeout(function() {
      e.to ? t.sendTo(e._event, e.to) : t.send(e._event);
    }, e.delay);
  }, r.prototype.cancel = function(e) {
    this.clock.clearTimeout(this.delayedEventsMap[e]), delete this.delayedEventsMap[e];
  }, r.prototype.exec = function(e, t, i) {
    i === void 0 && (i = this.machine.options.actions);
    var l = t.context, c = t._event, d = e.exec || Ca(e.type, i), v = Te(d) ? d : d ? d.exec : e.exec;
    if (v)
      try {
        return v(l, c.data, { action: e, state: this.state, _event: c });
      } catch (E) {
        throw this.parent && this.parent.send({ type: "xstate.error", data: E }), E;
      }
    switch (e.type) {
      case En:
        var b = e;
        if (typeof b.delay == "number") {
          this.defer(b);
          return;
        } else
          b.to ? this.sendTo(b._event, b.to) : this.send(b._event);
        break;
      case ha:
        this.cancel(e.sendId);
        break;
      case Bi: {
        if (this.status !== mt.Running)
          return;
        var y = e.activity;
        if (!this.state.activities[y.id || y.type])
          break;
        if (y.type === Se.Invoke) {
          var w = Ta(y.src), _ = this.machine.options.services ? this.machine.options.services[w.type] : void 0, C = y.id, A = y.data;
          qe || Ue(!("forward" in y), "`forward` property is deprecated (found in invocation of '".concat(y.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
          var k = "autoForward" in y ? y.autoForward : !!y.forward;
          if (!_) {
            qe || Ue(false, "No service found for invocation '".concat(y.src, "' in machine '").concat(this.machine.id, "'."));
            return;
          }
          var S = A ? Sn(A, l, c) : void 0;
          if (typeof _ == "string")
            return;
          var M = Te(_) ? _(l, c.data, { data: S, src: w, meta: y.meta }) : _;
          if (!M)
            return;
          var P = void 0;
          Tr(M) && (M = S ? M.withContext(S) : M, P = { autoForward: k }), this.spawn(M, C, P);
        } else
          this.spawnActivity(y);
        break;
      }
      case ri: {
        this.stopChild(e.activity.id);
        break;
      }
      case va:
        var I = e.label, q = e.value;
        I ? this.logger(I, q) : this.logger(q);
        break;
      default:
        qe || Ue(false, "No implementation found for action type '".concat(e.type, "'"));
        break;
    }
  }, r.prototype.removeChild = function(e) {
    var t;
    this.children.delete(e), this.forwardTo.delete(e), (t = this.state) === null || t === void 0 || delete t.children[e];
  }, r.prototype.stopChild = function(e) {
    var t = this.children.get(e);
    !t || (this.removeChild(e), Te(t.stop) && t.stop());
  }, r.prototype.spawn = function(e, t, i) {
    if (Bs(e))
      return this.spawnPromise(Promise.resolve(e), t);
    if (Te(e))
      return this.spawnCallback(e, t);
    if (wc(e))
      return this.spawnActor(e, t);
    if (lc(e))
      return this.spawnObservable(e, t);
    if (Tr(e))
      return this.spawnMachine(e, Y(Y({}, i), { id: t }));
    if (oc(e))
      return this.spawnBehavior(e, t);
    throw new Error('Unable to spawn entity "'.concat(t, '" of type "').concat(typeof e, '".'));
  }, r.prototype.spawnMachine = function(e, t) {
    var i = this;
    t === void 0 && (t = {});
    var l = new r(e, Y(Y({}, this.options), { parent: this, id: t.id || e.id })), c = Y(Y({}, th), t);
    c.sync && l.onTransition(function(v) {
      i.send($i, { state: v, id: l.id });
    });
    var d = l;
    return this.children.set(l.id, d), c.autoForward && this.forwardTo.add(l.id), l.onDone(function(v) {
      i.removeChild(l.id), i.send(et(v, { origin: l.id }));
    }).start(), d;
  }, r.prototype.spawnBehavior = function(e, t) {
    var i = Pc(e, { id: t, parent: this });
    return this.children.set(t, i), i;
  }, r.prototype.spawnPromise = function(e, t) {
    var i, l = this, c = false, d;
    e.then(function(b) {
      c || (d = b, l.removeChild(t), l.send(et(si(t, b), { origin: t })));
    }, function(b) {
      if (!c) {
        l.removeChild(t);
        var y = On(t, b);
        try {
          l.send(et(y, { origin: t }));
        } catch (w) {
          pc(b, w, t), l.devTools && l.devTools.send(y, l.state), l.machine.strict && l.stop();
        }
      }
    });
    var v = (i = { id: t, send: function() {
    }, subscribe: function(b, y, w) {
      var _ = Xi(b, y, w), C = false;
      return e.then(function(A) {
        C || (_.next(A), !C && _.complete());
      }, function(A) {
        C || _.error(A);
      }), { unsubscribe: function() {
        return C = true;
      } };
    }, stop: function() {
      c = true;
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return d;
    } }, i[Sr] = function() {
      return this;
    }, i);
    return this.children.set(t, v), v;
  }, r.prototype.spawnCallback = function(e, t) {
    var i, l = this, c = false, d = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), b, y = u(function(C) {
      b = C, v.forEach(function(A) {
        return A(C);
      }), !c && l.send(et(C, { origin: t }));
    }, "receive"), w;
    try {
      w = e(y, function(C) {
        d.add(C);
      });
    } catch (C) {
      this.send(On(t, C));
    }
    if (Bs(w))
      return this.spawnPromise(w, t);
    var _ = (i = { id: t, send: function(C) {
      return d.forEach(function(A) {
        return A(C);
      });
    }, subscribe: function(C) {
      var A = Xi(C);
      return v.add(A.next), { unsubscribe: function() {
        v.delete(A.next);
      } };
    }, stop: function() {
      c = true, Te(w) && w();
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return b;
    } }, i[Sr] = function() {
      return this;
    }, i);
    return this.children.set(t, _), _;
  }, r.prototype.spawnObservable = function(e, t) {
    var i, l = this, c, d = e.subscribe(function(b) {
      c = b, l.send(et(b, { origin: t }));
    }, function(b) {
      l.removeChild(t), l.send(et(On(t, b), { origin: t }));
    }, function() {
      l.removeChild(t), l.send(et(si(t), { origin: t }));
    }), v = (i = { id: t, send: function() {
    }, subscribe: function(b, y, w) {
      return e.subscribe(b, y, w);
    }, stop: function() {
      return d.unsubscribe();
    }, getSnapshot: function() {
      return c;
    }, toJSON: function() {
      return { id: t };
    } }, i[Sr] = function() {
      return this;
    }, i);
    return this.children.set(t, v), v;
  }, r.prototype.spawnActor = function(e, t) {
    return this.children.set(t, e), e;
  }, r.prototype.spawnActivity = function(e) {
    var t = this.machine.options && this.machine.options.activities ? this.machine.options.activities[e.type] : void 0;
    if (!t) {
      qe || Ue(false, "No implementation found for activity '".concat(e.type, "'"));
      return;
    }
    var i = t(this.state.context, e);
    this.spawnEffect(e.id, i);
  }, r.prototype.spawnEffect = function(e, t) {
    var i;
    this.children.set(e, (i = { id: e, send: function() {
    }, subscribe: function() {
      return { unsubscribe: function() {
      } };
    }, stop: t || void 0, getSnapshot: function() {
    }, toJSON: function() {
      return { id: e };
    } }, i[Sr] = function() {
      return this;
    }, i));
  }, r.prototype.attachDev = function() {
    var e = _a();
    if (this.options.devTools && e) {
      if (e.__REDUX_DEVTOOLS_EXTENSION__) {
        var t = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = e.__REDUX_DEVTOOLS_EXTENSION__.connect(Y(Y({ name: this.id, autoPause: true, stateSanitizer: function(i) {
          return { value: i.value, context: i.context, actions: i.actions };
        } }, t), { features: Y({ jump: false, skip: false }, t ? t.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      Ac(this);
    }
  }, r.prototype.toJSON = function() {
    return { id: this.id };
  }, r.prototype[Sr] = function() {
    return this;
  }, r.prototype.getSnapshot = function() {
    return this.status === mt.NotStarted ? this.initialState : this._state;
  }, r.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(e, t) {
    return setTimeout(e, t);
  }, clearTimeout: function(e) {
    return clearTimeout(e);
  } }, logger: console.log.bind(console), devTools: false }, r.interpret = at, r;
}();
function at(r, e) {
  var t = new Ic(r, e);
  return t;
}
u(at, "interpret");
function rh(r) {
  if (typeof r == "string") {
    var e = { type: r };
    return e.toString = function() {
      return r;
    }, e;
  }
  return r;
}
u(rh, "toInvokeSource");
function to(r) {
  return Y(Y({ type: Hi }, r), { toJSON: function() {
    r.onDone, r.onError;
    var e = ti(r, ["onDone", "onError"]);
    return Y(Y({}, e), { type: Hi, src: rh(r.src) });
  } });
}
u(to, "toInvokeDefinition");
var ci = "";
var Zs = "#";
var ro = "*";
var li = {};
var ui = u(function(r) {
  return r[0] === Zs;
}, "isStateId");
var nh = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var ih = u(function(r, e, t) {
  var i = t.slice(0, -1).some(function(c) {
    return !("cond" in c) && !("in" in c) && (ge(c.target) || Tr(c.target));
  }), l = e === ci ? "the transient event" : "event '".concat(e, "'");
  Ue(!i, "One or more transitions for ".concat(l, " on state '").concat(r.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var zc = function() {
  function r(e, t, i, l) {
    var c = this;
    i === void 0 && (i = "context" in e ? e.context : void 0);
    var d;
    this.config = e, this._context = i, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(nh(), t), this.parent = l == null ? void 0 : l.parent, this.key = this.config.key || (l == null ? void 0 : l.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : ma), this.id = this.config.id || De([this.machine.key], me(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (d = this.config.schema) !== null && d !== void 0 ? d : {}, this.description = this.config.description, qe || Ue(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? oi(this.config.states, function(y, w) {
      var _, C = new r(y, {}, void 0, { parent: c, key: w });
      return Object.assign(c.idMap, Y((_ = {}, _[C.id] = C, _), C.idMap)), C;
    }) : li;
    var v = 0;
    function b(y) {
      var w, _;
      y.order = v++;
      try {
        for (var C = ve(_n(y)), A = C.next(); !A.done; A = C.next()) {
          var k = A.value;
          b(k);
        }
      } catch (S) {
        w = { error: S };
      } finally {
        try {
          A && !A.done && (_ = C.return) && _.call(C);
        } finally {
          if (w)
            throw w.error;
        }
      }
    }
    u(b, "dfs"), b(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(y) {
      var w = y.event;
      return w === ci;
    }) : ci in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = Ht(this.config.entry || this.config.onEntry).map(function(y) {
      return ai(y);
    }), this.onExit = Ht(this.config.exit || this.config.onExit).map(function(y) {
      return ai(y);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = Ht(this.config.invoke).map(function(y, w) {
      var _, C;
      if (Tr(y)) {
        var A = Yi(c.id, w);
        return c.machine.options.services = Y((_ = {}, _[A] = y, _), c.machine.options.services), to({ src: A, id: A });
      } else if (ge(y.src)) {
        var A = y.id || Yi(c.id, w);
        return to(Y(Y({}, y), { id: A, src: y.src }));
      } else if (Tr(y.src) || Te(y.src)) {
        var A = y.id || Yi(c.id, w);
        return c.machine.options.services = Y((C = {}, C[A] = y.src, C), c.machine.options.services), to(Y(Y({ id: A }, y), { src: A }));
      } else {
        var k = y.src;
        return to(Y(Y({ id: Yi(c.id, w) }, y), { src: k }));
      }
    }), this.activities = Ht(this.config.activities).concat(this.invoke).map(function(y) {
      return Ma(y);
    }), this.transition = this.transition.bind(this), this.tags = Ht(this.config.tags);
  }
  return u(r, "StateNode"), r.prototype._init = function() {
    this.__cache.transitions || Ws(this).forEach(function(e) {
      return e.on;
    });
  }, r.prototype.withConfig = function(e, t) {
    var i = this.options, l = i.actions, c = i.activities, d = i.guards, v = i.services, b = i.delays;
    return new r(this.config, { actions: Y(Y({}, l), e.actions), activities: Y(Y({}, c), e.activities), guards: Y(Y({}, d), e.guards), services: Y(Y({}, v), e.services), delays: Y(Y({}, b), e.delays) }, t != null ? t : this.context);
  }, r.prototype.withContext = function(e) {
    return new r(this.config, this.options, e);
  }, Object.defineProperty(r.prototype, "context", { get: function() {
    return Te(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: oi(this.states, function(e) {
      return e.definition;
    }), on: this.on, transitions: this.transitions, entry: this.onEntry, exit: this.onExit, activities: this.activities || [], meta: this.meta, order: this.order || -1, data: this.doneData, invoke: this.invoke, description: this.description, tags: this.tags };
  }, enumerable: false, configurable: true }), r.prototype.toJSON = function() {
    return this.definition;
  }, Object.defineProperty(r.prototype, "on", { get: function() {
    if (this.__cache.on)
      return this.__cache.on;
    var e = this.transitions;
    return this.__cache.on = e.reduce(function(t, i) {
      return t[i.eventType] = t[i.eventType] || [], t[i.eventType].push(i), t;
    }, {});
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "after", { get: function() {
    return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "transitions", { get: function() {
    return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
  }, enumerable: false, configurable: true }), r.prototype.getCandidates = function(e) {
    if (this.__cache.candidates[e])
      return this.__cache.candidates[e];
    var t = e === ci, i = this.transitions.filter(function(l) {
      var c = l.eventType === e;
      return t ? c : c || l.eventType === ro;
    });
    return this.__cache.candidates[e] = i, i;
  }, r.prototype.getDelayedTransitions = function() {
    var e = this, t = this.config.after;
    if (!t)
      return [];
    var i = u(function(c, d) {
      var v = Te(c) ? "".concat(e.id, ":delay[").concat(d, "]") : c, b = mc(v, e.id);
      return e.onEntry.push($s(b, { delay: c })), e.onExit.push(fc(b)), b;
    }, "mutateEntryExit"), l = Gr(t) ? t.map(function(c, d) {
      var v = i(c.delay, d);
      return Y(Y({}, c), { event: v });
    }) : Ne(Object.keys(t).map(function(c, d) {
      var v = t[c], b = ge(v) ? { target: v } : v, y = isNaN(+c) ? c : +c, w = i(y, d);
      return Ht(b).map(function(_) {
        return Y(Y({}, _), { event: w, delay: y });
      });
    }));
    return l.map(function(c) {
      var d = c.delay;
      return Y(Y({}, e.formatTransition(c)), { delay: d });
    });
  }, r.prototype.getStateNodes = function(e) {
    var t, i = this;
    if (!e)
      return [];
    var l = e instanceof mr ? e.value : ii(e, this.delimiter);
    if (ge(l)) {
      var c = this.getStateNode(l).initial;
      return c !== void 0 ? this.getStateNodes((t = {}, t[l] = c, t)) : [this, this.states[l]];
    }
    var d = Object.keys(l), v = [this];
    return v.push.apply(v, De([], me(Ne(d.map(function(b) {
      return i.getStateNode(b).getStateNodes(l[b]);
    }))), false)), v;
  }, r.prototype.handles = function(e) {
    var t = ya(e);
    return this.events.includes(t);
  }, r.prototype.resolveState = function(e) {
    var t = e instanceof mr ? e : mr.create(e), i = Array.from(An([], this.getStateNodes(t.value)));
    return new mr(Y(Y({}, t), { value: this.resolve(t.value), configuration: i, done: Pn(i, this), tags: Us(i), machine: this.machine }));
  }, r.prototype.transitionLeafNode = function(e, t, i) {
    var l = this.getStateNode(e), c = l.next(t, i);
    return !c || !c.transitions.length ? this.next(t, i) : c;
  }, r.prototype.transitionCompoundNode = function(e, t, i) {
    var l = Object.keys(e), c = this.getStateNode(l[0]), d = c._transition(e[l[0]], t, i);
    return !d || !d.transitions.length ? this.next(t, i) : d;
  }, r.prototype.transitionParallelNode = function(e, t, i) {
    var l, c, d = {};
    try {
      for (var v = ve(Object.keys(e)), b = v.next(); !b.done; b = v.next()) {
        var y = b.value, w = e[y];
        if (!!w) {
          var _ = this.getStateNode(y), C = _._transition(w, t, i);
          C && (d[y] = C);
        }
      }
    } catch (I) {
      l = { error: I };
    } finally {
      try {
        b && !b.done && (c = v.return) && c.call(v);
      } finally {
        if (l)
          throw l.error;
      }
    }
    var A = Object.keys(d).map(function(I) {
      return d[I];
    }), k = Ne(A.map(function(I) {
      return I.transitions;
    })), S = A.some(function(I) {
      return I.transitions.length > 0;
    });
    if (!S)
      return this.next(t, i);
    var M = Ne(A.map(function(I) {
      return I.entrySet;
    })), P = Ne(Object.keys(d).map(function(I) {
      return d[I].configuration;
    }));
    return { transitions: k, entrySet: M, exitSet: Ne(A.map(function(I) {
      return I.exitSet;
    })), configuration: P, source: t, actions: Ne(Object.keys(d).map(function(I) {
      return d[I].actions;
    })) };
  }, r.prototype._transition = function(e, t, i) {
    return ge(e) ? this.transitionLeafNode(e, t, i) : Object.keys(e).length === 1 ? this.transitionCompoundNode(e, t, i) : this.transitionParallelNode(e, t, i);
  }, r.prototype.getTransitionData = function(e, t) {
    return this._transition(e.value, e, et(t));
  }, r.prototype.next = function(e, t) {
    var i, l, c = this, d = t.name, v = [], b = [], y;
    try {
      for (var w = ve(this.getCandidates(d)), _ = w.next(); !_.done; _ = w.next()) {
        var C = _.value, A = C.cond, k = C.in, S = e.context, M = k ? ge(k) && ui(k) ? e.matches(ii(this.getStateNodeById(k).path, this.delimiter)) : Wi(ii(k, this.delimiter), tc(this.path.slice(0, -2))(e.value)) : true, P = false;
        try {
          P = !A || Sa(this.machine, A, S, t, e);
        } catch (B) {
          throw new Error("Unable to evaluate guard '".concat(A.name || A.type, "' in transition for event '").concat(d, "' in state node '").concat(this.id, `':
`).concat(B.message));
        }
        if (P && M) {
          C.target !== void 0 && (b = C.target), v.push.apply(v, De([], me(C.actions), false)), y = C;
          break;
        }
      }
    } catch (B) {
      i = { error: B };
    } finally {
      try {
        _ && !_.done && (l = w.return) && l.call(w);
      } finally {
        if (i)
          throw i.error;
      }
    }
    if (!!y) {
      if (!b.length)
        return { transitions: [y], entrySet: [], exitSet: [], configuration: e.value ? [this] : [], source: e, actions: v };
      var I = Ne(b.map(function(B) {
        return c.getRelativeStateNodes(B, e.historyValue);
      })), q = !!y.internal, E = q ? [] : Ne(I.map(function(B) {
        return c.nodesFromChild(B);
      }));
      return { transitions: [y], entrySet: E, exitSet: q ? [] : [this], configuration: I, source: e, actions: v };
    }
  }, r.prototype.nodesFromChild = function(e) {
    if (e.escapes(this))
      return [];
    for (var t = [], i = e; i && i !== this; )
      t.push(i), i = i.parent;
    return t.push(this), t;
  }, r.prototype.escapes = function(e) {
    if (this === e)
      return false;
    for (var t = this.parent; t; ) {
      if (t === e)
        return false;
      t = t.parent;
    }
    return true;
  }, r.prototype.getActions = function(e, t, i, l) {
    var c, d, v, b, y = An([], l ? this.getStateNodes(l.value) : [this]), w = e.configuration.length ? An(y, e.configuration) : y;
    try {
      for (var _ = ve(w), C = _.next(); !C.done; C = _.next()) {
        var A = C.value;
        Qi(y, A) || e.entrySet.push(A);
      }
    } catch (X) {
      c = { error: X };
    } finally {
      try {
        C && !C.done && (d = _.return) && d.call(_);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var k = ve(y), S = k.next(); !S.done; S = k.next()) {
        var A = S.value;
        (!Qi(w, A) || Qi(e.exitSet, A.parent)) && e.exitSet.push(A);
      }
    } catch (X) {
      v = { error: X };
    } finally {
      try {
        S && !S.done && (b = k.return) && b.call(k);
      } finally {
        if (v)
          throw v.error;
      }
    }
    var M = Ne(e.entrySet.map(function(X) {
      var V = [];
      if (X.type !== "final")
        return V;
      var H = X.parent;
      if (!H.parent)
        return V;
      V.push(Ji(X.id, X.doneData), Ji(H.id, X.doneData ? Sn(X.doneData, t, i) : void 0));
      var W = H.parent;
      return W.type === "parallel" && _n(W).every(function(ne) {
        return Pn(e.configuration, ne);
      }) && V.push(Ji(W.id)), V;
    }));
    e.exitSet.sort(function(X, V) {
      return V.order - X.order;
    }), e.entrySet.sort(function(X, V) {
      return X.order - V.order;
    });
    var P = new Set(e.entrySet), I = new Set(e.exitSet), q = me([Ne(Array.from(P).map(function(X) {
      return De(De([], me(X.activities.map(function(V) {
        return hc(V);
      })), false), me(X.onEntry), false);
    })).concat(M.map(dc)), Ne(Array.from(I).map(function(X) {
      return De(De([], me(X.onExit), false), me(X.activities.map(function(V) {
        return vc(V);
      })), false);
    }))], 2), E = q[0], B = q[1], R = Zi(B.concat(e.actions).concat(E), this.machine.options.actions);
    return R;
  }, r.prototype.transition = function(e, t, i) {
    e === void 0 && (e = this.initialState);
    var l = et(t), c;
    if (e instanceof mr)
      c = i === void 0 ? e : this.resolveState(mr.from(e, i));
    else {
      var d = ge(e) ? this.resolve(Fi(this.getResolvedPath(e))) : this.resolve(e), v = i != null ? i : this.machine.context;
      c = this.resolveState(mr.from(d, v));
    }
    if (!qe && l.name === ro)
      throw new Error("An event cannot have the wildcard type ('".concat(ro, "')"));
    if (this.strict && !this.events.includes(l.name) && !ic(l.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(l.name, "'"));
    var b = this._transition(c.value, c, l) || { transitions: [], configuration: [], entrySet: [], exitSet: [], source: c, actions: [] }, y = An([], this.getStateNodes(c.value)), w = b.configuration.length ? An(y, b.configuration) : y;
    return b.configuration = De([], me(w), false), this.resolveTransition(b, c, c.context, l);
  }, r.prototype.resolveRaisedTransition = function(e, t, i) {
    var l, c = e.actions;
    return e = this.transition(e, t), e._event = i, e.event = i.data, (l = e.actions).unshift.apply(l, De([], me(c), false)), e;
  }, r.prototype.resolveTransition = function(e, t, i, l) {
    var c, d, v = this;
    l === void 0 && (l = Cn);
    var b = e.configuration, y = !t || e.transitions.length > 0, w = y ? Tc(this.machine, b) : void 0, _ = t ? t.historyValue ? t.historyValue : e.source ? this.machine.historyValue(t.value) : void 0 : void 0, C = this.getActions(e, i, l, t), A = t ? Y({}, t.activities) : {};
    try {
      for (var k = ve(C), S = k.next(); !S.done; S = k.next()) {
        var M = S.value;
        M.type === Bi ? A[M.activity.id || M.activity.type] = M : M.type === ri && (A[M.activity.id || M.activity.type] = false);
      }
    } catch (fe) {
      c = { error: fe };
    } finally {
      try {
        S && !S.done && (d = k.return) && d.call(k);
      } finally {
        if (c)
          throw c.error;
      }
    }
    var P = me(Oa(this, t, i, l, C, this.machine.config.preserveActionOrder), 2), I = P[0], q = P[1], E = me(wa(I, function(fe) {
      return fe.type === ni || fe.type === En && fe.to === tn.Internal;
    }), 2), B = E[0], R = E[1], X = I.filter(function(fe) {
      var Ye;
      return fe.type === Bi && ((Ye = fe.activity) === null || Ye === void 0 ? void 0 : Ye.type) === Hi;
    }), V = X.reduce(function(fe, Ye) {
      return fe[Ye.activity.id] = yc(Ye.activity, v.machine, q, l), fe;
    }, t ? Y({}, t.children) : {}), H = y ? e.configuration : t ? t.configuration : [], W = Pn(H, this), ne = new mr({ value: w || t.value, context: q, _event: l, _sessionid: t ? t._sessionid : null, historyValue: w ? _ ? sc(_, w) : void 0 : t ? t.historyValue : void 0, history: !w || e.source ? t : void 0, actions: w ? R : [], activities: w ? A : t ? t.activities : {}, events: [], configuration: H, transitions: e.transitions, children: V, done: W, tags: Us(H), machine: this }), oe = i !== q;
    ne.changed = l.name === $i || oe;
    var U = ne.history;
    U && delete U.history;
    var ce = !W && (this._transient || b.some(function(fe) {
      return fe._transient;
    }));
    if (!y && (!ce || l.name === ci))
      return ne;
    var Re = ne;
    if (!W)
      for (ce && (Re = this.resolveRaisedTransition(Re, { type: Zu }, l)); B.length; ) {
        var We = B.shift();
        Re = this.resolveRaisedTransition(Re, We._event, l);
      }
    var Le = Re.changed || (U ? !!Re.actions.length || oe || typeof U.value != typeof Re.value || !Vs(Re.value, U.value) : void 0);
    return Re.changed = Le, Re.history = U, Re;
  }, r.prototype.getStateNode = function(e) {
    if (ui(e))
      return this.machine.getStateNodeById(e);
    if (!this.states)
      throw new Error("Unable to retrieve child state '".concat(e, "' from '").concat(this.id, "'; no child states exist."));
    var t = this.states[e];
    if (!t)
      throw new Error("Child state '".concat(e, "' does not exist on '").concat(this.id, "'"));
    return t;
  }, r.prototype.getStateNodeById = function(e) {
    var t = ui(e) ? e.slice(Zs.length) : e;
    if (t === this.id)
      return this;
    var i = this.machine.idMap[t];
    if (!i)
      throw new Error("Child state node '#".concat(t, "' does not exist on machine '").concat(this.id, "'"));
    return i;
  }, r.prototype.getStateNodeByPath = function(e) {
    if (typeof e == "string" && ui(e))
      try {
        return this.getStateNodeById(e.slice(1));
      } catch (c) {
      }
    for (var t = xa(e, this.delimiter).slice(), i = this; t.length; ) {
      var l = t.shift();
      if (!l.length)
        break;
      i = i.getStateNode(l);
    }
    return i;
  }, r.prototype.resolve = function(e) {
    var t, i = this;
    if (!e)
      return this.initialStateValue || li;
    switch (this.type) {
      case "parallel":
        return oi(this.initialStateValue, function(c, d) {
          return c ? i.getStateNode(d).resolve(e[d] || c) : li;
        });
      case "compound":
        if (ge(e)) {
          var l = this.getStateNode(e);
          return l.type === "parallel" || l.type === "compound" ? (t = {}, t[e] = l.initialStateValue, t) : e;
        }
        return Object.keys(e).length ? oi(e, function(c, d) {
          return c ? i.getStateNode(d).resolve(c) : li;
        }) : this.initialStateValue || {};
      default:
        return e || li;
    }
  }, r.prototype.getResolvedPath = function(e) {
    if (ui(e)) {
      var t = this.machine.idMap[e.slice(Zs.length)];
      if (!t)
        throw new Error("Unable to find state node '".concat(e, "'"));
      return t.path;
    }
    return xa(e, this.delimiter);
  }, Object.defineProperty(r.prototype, "initialStateValue", { get: function() {
    var e;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var t;
    if (this.type === "parallel")
      t = js(this.states, function(i) {
        return i.initialStateValue || li;
      }, function(i) {
        return i.type !== "history";
      });
    else if (this.initial !== void 0) {
      if (!this.states[this.initial])
        throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
      t = Ki(this.states[this.initial]) ? this.initial : (e = {}, e[this.initial] = this.states[this.initial].initialStateValue, e);
    } else
      t = {};
    return this.__cache.initialStateValue = t, this.__cache.initialStateValue;
  }, enumerable: false, configurable: true }), r.prototype.getInitialState = function(e, t) {
    this._init();
    var i = this.getStateNodes(e);
    return this.resolveTransition({ configuration: i, entrySet: i, exitSet: [], transitions: [], source: void 0, actions: [] }, void 0, t != null ? t : this.machine.context, void 0);
  }, Object.defineProperty(r.prototype, "initialState", { get: function() {
    var e = this.initialStateValue;
    if (!e)
      throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
    return this.getInitialState(e);
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "target", { get: function() {
    var e;
    if (this.type === "history") {
      var t = this.config;
      ge(t.target) ? e = ui(t.target) ? Fi(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1)) : t.target : e = t.target;
    }
    return e;
  }, enumerable: false, configurable: true }), r.prototype.getRelativeStateNodes = function(e, t, i) {
    return i === void 0 && (i = true), i ? e.type === "history" ? e.resolveHistory(t) : e.initialStateNodes : [e];
  }, Object.defineProperty(r.prototype, "initialStateNodes", { get: function() {
    var e = this;
    if (Ki(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return qe || Ue(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var t = Ui(this.initialStateValue);
    return Ne(t.map(function(i) {
      return e.getFromRelativePath(i);
    }));
  }, enumerable: false, configurable: true }), r.prototype.getFromRelativePath = function(e) {
    if (!e.length)
      return [this];
    var t = me(e), i = t[0], l = t.slice(1);
    if (!this.states)
      throw new Error("Cannot retrieve subPath '".concat(i, "' from node with no states"));
    var c = this.getStateNode(i);
    if (c.type === "history")
      return c.resolveHistory();
    if (!this.states[i])
      throw new Error("Child state '".concat(i, "' does not exist on '").concat(this.id, "'"));
    return this.states[i].getFromRelativePath(l);
  }, r.prototype.historyValue = function(e) {
    if (!!Object.keys(this.states).length)
      return { current: e || this.initialStateValue, states: js(this.states, function(t, i) {
        if (!e)
          return t.historyValue();
        var l = ge(e) ? void 0 : e[i];
        return t.historyValue(l || t.initialStateValue);
      }, function(t) {
        return !t.history;
      }) };
  }, r.prototype.resolveHistory = function(e) {
    var t = this;
    if (this.type !== "history")
      return [this];
    var i = this.parent;
    if (!e) {
      var l = this.target;
      return l ? Ne(Ui(l).map(function(d) {
        return i.getFromRelativePath(d);
      })) : i.initialStateNodes;
    }
    var c = rc(i.path, "states")(e).current;
    return ge(c) ? [i.getStateNode(c)] : Ne(Ui(c).map(function(d) {
      return t.history === "deep" ? i.getFromRelativePath(d) : [i.states[d[0]]];
    }));
  }, Object.defineProperty(r.prototype, "stateIds", { get: function() {
    var e = this, t = Ne(Object.keys(this.states).map(function(i) {
      return e.states[i].stateIds;
    }));
    return [this.id].concat(t);
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "events", { get: function() {
    var e, t, i, l;
    if (this.__cache.events)
      return this.__cache.events;
    var c = this.states, d = new Set(this.ownEvents);
    if (c)
      try {
        for (var v = ve(Object.keys(c)), b = v.next(); !b.done; b = v.next()) {
          var y = b.value, w = c[y];
          if (w.states)
            try {
              for (var _ = (i = void 0, ve(w.events)), C = _.next(); !C.done; C = _.next()) {
                var A = C.value;
                d.add("".concat(A));
              }
            } catch (k) {
              i = { error: k };
            } finally {
              try {
                C && !C.done && (l = _.return) && l.call(_);
              } finally {
                if (i)
                  throw i.error;
              }
            }
        }
      } catch (k) {
        e = { error: k };
      } finally {
        try {
          b && !b.done && (t = v.return) && t.call(v);
        } finally {
          if (e)
            throw e.error;
        }
      }
    return this.__cache.events = Array.from(d);
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "ownEvents", { get: function() {
    var e = new Set(this.transitions.filter(function(t) {
      return !(!t.target && !t.actions.length && t.internal);
    }).map(function(t) {
      return t.eventType;
    }));
    return Array.from(e);
  }, enumerable: false, configurable: true }), r.prototype.resolveTarget = function(e) {
    var t = this;
    if (e !== void 0)
      return e.map(function(i) {
        if (!ge(i))
          return i;
        var l = i[0] === t.delimiter;
        if (l && !t.parent)
          return t.getStateNodeByPath(i.slice(1));
        var c = l ? t.key + i : i;
        if (t.parent)
          try {
            var d = t.parent.getStateNodeByPath(c);
            return d;
          } catch (v) {
            throw new Error("Invalid transition definition for state node '".concat(t.id, `':
`).concat(v.message));
          }
        else
          return t.getStateNodeByPath(c);
      });
  }, r.prototype.formatTransition = function(e) {
    var t = this, i = cc(e.target), l = "internal" in e ? e.internal : i ? i.some(function(b) {
      return ge(b) && b[0] === t.delimiter;
    }) : true, c = this.machine.options.guards, d = this.resolveTarget(i), v = Y(Y({}, e), { actions: Zi(Ht(e.actions)), cond: Ea(e.cond, c), target: d, source: this, internal: l, eventType: e.event, toJSON: function() {
      return Y(Y({}, v), { target: v.target ? v.target.map(function(b) {
        return "#".concat(b.id);
      }) : void 0, source: "#".concat(t.id) });
    } });
    return v;
  }, r.prototype.formatTransitions = function() {
    var e, t, i = this, l;
    if (!this.config.on)
      l = [];
    else if (Array.isArray(this.config.on))
      l = this.config.on;
    else {
      var c = this.config.on, d = ro, v = c[d], b = v === void 0 ? [] : v, y = ti(c, [typeof d == "symbol" ? d : d + ""]);
      l = Ne(Object.keys(y).map(function(I) {
        !qe && I === ci && Ue(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(i.id, '".'));
        var q = Tn(I, y[I]);
        return qe || ih(i, I, q), q;
      }).concat(Tn(ro, b)));
    }
    var w = this.config.always ? Tn("", this.config.always) : [], _ = this.config.onDone ? Tn(String(Ji(this.id)), this.config.onDone) : [];
    qe || Ue(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var C = Ne(this.invoke.map(function(I) {
      var q = [];
      return I.onDone && q.push.apply(q, De([], me(Tn(String(si(I.id)), I.onDone)), false)), I.onError && q.push.apply(q, De([], me(Tn(String(On(I.id)), I.onError)), false)), q;
    })), A = this.after, k = Ne(De(De(De(De([], me(_), false), me(C), false), me(l), false), me(w), false).map(function(I) {
      return Ht(I).map(function(q) {
        return i.formatTransition(q);
      });
    }));
    try {
      for (var S = ve(A), M = S.next(); !M.done; M = S.next()) {
        var P = M.value;
        k.push(P);
      }
    } catch (I) {
      e = { error: I };
    } finally {
      try {
        M && !M.done && (t = S.return) && t.call(S);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return k;
  }, r;
}();
function gt(r, e) {
  return new zc(r, e);
}
u(gt, "createMachine");
var no = Jo(Aa(), 1);
var Pa = u((r) => r != null && r.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var Ks = u((r) => r != null && r.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
function Me(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.operationX = 0;
      this.operationY = 0;
      this.grabbed = false;
      this.dragging = false;
      this.snapped = false;
      this.bit = -1;
      this.debugDraggable = false;
      this.draggableMachine = gt({ id: "draggable", initial: "idle", states: { idle: { on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { on: { START_DRAGGING: { target: "dragging", actions: ["startDragging"] }, RELEASE: [{ target: "grabbable", actions: ["release"], cond: "isOnCircuitDropzone" }, { target: "deleted", actions: ["release"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "isDroppedOnCircuitDropzone" }, { target: "deleted", cond: "isTrashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { setInteract: () => {
        let i = (0, no.default)(this);
        i.styleCursor(false), i.on("down", this.grab.bind(this)), i.on("up", this.release.bind(this)), i.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this) });
        let l = this.dropzone;
        Pa(l) ? this.snappedDropzone = l : this.snappedDropzone = null;
      }, grab: (i, l) => {
        l.type === "GRAB" && (this.grabbed = true, this.dispatchEvent(new Event("operation-grab", { bubbles: true })), Ks(this.dropzone) && (this.snapped = false, this.moveByOffset(l.x, l.y)));
      }, release: () => {
        this.grabbed = false, this.dispatchEvent(new Event("operation-release", { bubbles: true }));
      }, startDragging: () => {
        this.dragging = true;
      }, endDragging: () => {
        this.grabbed = false, this.dragging = false, this.dispatchEvent(new Event("operation-end-dragging", { bubbles: true }));
      }, snap: () => {
        this.snapped = true, this.snappedDropzone = this.dropzone, this.dispatchEvent(new Event("operation-snap", { bubbles: true }));
      }, unsnap: () => {
        this.snapped = false, this.snappedDropzone && this.snappedDropzone.dispatchEvent(new Event("operation-unsnap", { bubbles: true }));
      }, drop: () => {
        !this.snapped || (this.moveTo(0, 0), this.dispatchEvent(new Event("operation-drop", { bubbles: true })));
      }, delete: () => {
        (0, no.default)(this).unset(), this.dispatchEvent(new Event("operation-delete", { bubbles: true }));
      } }, guards: { isOnCircuitDropzone: () => Pa(this.dropzone), isOnPaletteDropzone: () => Ks(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && Pa(this.dropzone), isTrashed: () => !this.snapped } });
      this.draggableService = at(this.draggableMachine).onTransition((i) => {
        this.debugDraggable && console.log(`draggable: ${Qe(i.value)}`);
      });
    }
    get draggable() {
      return this.draggableService.state !== void 0;
    }
    set draggable(i) {
      this.maybeStartDraggableStateMachine(), i ? this.draggableService.send({ type: "SET_INTERACT" }) : this.draggableService.send({ type: "UNSET_INTERACT" });
    }
    maybeStartDraggableStateMachine() {
      this.draggableService.state === void 0 && this.draggableService.start();
    }
    get dropzone() {
      let i = this.parentElement;
      return ie.notNull(i), !Ks(i) && !Pa(i) ? null : i;
    }
    set snapTargets(i) {
      (0, no.default)(this).draggable({ modifiers: [no.default.modifiers.snap({ targets: i, range: this.snapRange, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.moveEventListener.bind(this) } });
    }
    get snapRange() {
      return this.offsetWidth;
    }
    moveEventListener(i) {
      let l = i.modifiers[0];
      if (l.inRange) {
        let c = l.target.source;
        this.dispatchEvent(new CustomEvent("operation-in-snap-range", { detail: { snapTargetInfo: c }, bubbles: true })), this.moveTo(0, 0), this.snappedDropzone && this.snappedDropzone !== this.dropzone && this.draggableService.send({ type: "UNSNAP" }), this.draggableService.send({ type: "SNAP" });
      } else
        this.snapped && this.draggableService.send({ type: "UNSNAP" });
    }
    grab(i) {
      this.draggableService.send({ type: "GRAB", x: i.offsetX, y: i.offsetY });
    }
    release() {
      this.draggableService.send({ type: "RELEASE" });
    }
    startDragging() {
      this.draggableService.send({ type: "START_DRAGGING" });
    }
    endDragging() {
      this.draggableService.send({ type: "END_DRAGGING" });
    }
    dragMove(i) {
      this.move(i.dx, i.dy);
    }
    move(i, l) {
      let c = this.operationX + i, d = this.operationY + l;
      this.moveTo(c, d);
    }
    moveTo(i, l) {
      this.operationX = i, this.operationY = l, this.style.transform = `translate(${i}px, ${l}px)`;
    }
    moveByOffset(i, l) {
      let c = i - this.clientWidth / 2, d = l - this.clientHeight / 2;
      this.move(c, d);
    }
  }
  return u(e, "DraggableMixinClass"), D([G], e.prototype, "operationX", 2), D([G], e.prototype, "operationY", 2), D([G], e.prototype, "grabbed", 2), D([G], e.prototype, "dragging", 2), D([G], e.prototype, "snapped", 2), D([G], e.prototype, "bit", 2), D([G], e.prototype, "debugDraggable", 2), e;
}
u(Me, "DraggableMixin");
var In = u((r) => typeof r == "object" && r !== null && typeof r.flag == "string", "isFlaggable");
function kc(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  return u(e, "FlaggableMixinClass"), D([G], e.prototype, "flag", 2), e;
}
u(kc, "FlaggableMixin");
var Fe = "top";
var tt = "bottom";
var Ze = "right";
var Ve = "left";
var Ia = "auto";
var rn = [Fe, tt, Ze, Ve];
var Lr = "start";
var zn = "end";
var Rc = "clippingParents";
var za = "viewport";
var pi = "popper";
var Nc = "reference";
var Qs = rn.reduce(function(r, e) {
  return r.concat([e + "-" + Lr, e + "-" + zn]);
}, []);
var Da = [].concat(rn, [Ia]).reduce(function(r, e) {
  return r.concat([e, e + "-" + Lr, e + "-" + zn]);
}, []);
var oh = "beforeRead";
var ah = "read";
var sh = "afterRead";
var lh = "beforeMain";
var uh = "main";
var ch = "afterMain";
var ph = "beforeWrite";
var dh = "write";
var fh = "afterWrite";
var Gc = [oh, ah, sh, lh, uh, ch, ph, dh, fh];
function st(r) {
  return r ? (r.nodeName || "").toLowerCase() : null;
}
u(st, "getNodeName");
function Xe(r) {
  if (r == null)
    return window;
  if (r.toString() !== "[object Window]") {
    var e = r.ownerDocument;
    return e && e.defaultView || window;
  }
  return r;
}
u(Xe, "getWindow");
function Cr(r) {
  var e = Xe(r).Element;
  return r instanceof e || r instanceof Element;
}
u(Cr, "isElement");
function rt(r) {
  var e = Xe(r).HTMLElement;
  return r instanceof e || r instanceof HTMLElement;
}
u(rt, "isHTMLElement");
function ka(r) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var e = Xe(r).ShadowRoot;
  return r instanceof e || r instanceof ShadowRoot;
}
u(ka, "isShadowRoot");
function hh(r) {
  var e = r.state;
  Object.keys(e.elements).forEach(function(t) {
    var i = e.styles[t] || {}, l = e.attributes[t] || {}, c = e.elements[t];
    !rt(c) || !st(c) || (Object.assign(c.style, i), Object.keys(l).forEach(function(d) {
      var v = l[d];
      v === false ? c.removeAttribute(d) : c.setAttribute(d, v === true ? "" : v);
    }));
  });
}
u(hh, "applyStyles");
function vh(r) {
  var e = r.state, t = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(i) {
      var l = e.elements[i], c = e.attributes[i] || {}, d = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i]), v = d.reduce(function(b, y) {
        return b[y] = "", b;
      }, {});
      !rt(l) || !st(l) || (Object.assign(l.style, v), Object.keys(c).forEach(function(b) {
        l.removeAttribute(b);
      }));
    });
  };
}
u(vh, "effect");
var io = { name: "applyStyles", enabled: true, phase: "write", fn: hh, effect: vh, requires: ["computeStyles"] };
function lt(r) {
  return r.split("-")[0];
}
u(lt, "getBasePlacement");
var gr = Math.max;
var Dn = Math.min;
var qr = Math.round;
function Yt(r, e) {
  e === void 0 && (e = false);
  var t = r.getBoundingClientRect(), i = 1, l = 1;
  if (rt(r) && e) {
    var c = r.offsetHeight, d = r.offsetWidth;
    d > 0 && (i = qr(t.width) / d || 1), c > 0 && (l = qr(t.height) / c || 1);
  }
  return { width: t.width / i, height: t.height / l, top: t.top / l, right: t.right / i, bottom: t.bottom / l, left: t.left / i, x: t.left / i, y: t.top / l };
}
u(Yt, "getBoundingClientRect");
function kn(r) {
  var e = Yt(r), t = r.offsetWidth, i = r.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: r.offsetLeft, y: r.offsetTop, width: t, height: i };
}
u(kn, "getLayoutRect");
function oo(r, e) {
  var t = e.getRootNode && e.getRootNode();
  if (r.contains(e))
    return true;
  if (t && ka(t)) {
    var i = e;
    do {
      if (i && r.isSameNode(i))
        return true;
      i = i.parentNode || i.host;
    } while (i);
  }
  return false;
}
u(oo, "contains");
function Ct(r) {
  return Xe(r).getComputedStyle(r);
}
u(Ct, "getComputedStyle");
function el(r) {
  return ["table", "td", "th"].indexOf(st(r)) >= 0;
}
u(el, "isTableElement");
function bt(r) {
  return ((Cr(r) ? r.ownerDocument : r.document) || window.document).documentElement;
}
u(bt, "getDocumentElement");
function jr(r) {
  return st(r) === "html" ? r : r.assignedSlot || r.parentNode || (ka(r) ? r.host : null) || bt(r);
}
u(jr, "getParentNode");
function Lc(r) {
  return !rt(r) || Ct(r).position === "fixed" ? null : r.offsetParent;
}
u(Lc, "getTrueOffsetParent");
function mh(r) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, t = navigator.userAgent.indexOf("Trident") !== -1;
  if (t && rt(r)) {
    var i = Ct(r);
    if (i.position === "fixed")
      return null;
  }
  for (var l = jr(r); rt(l) && ["html", "body"].indexOf(st(l)) < 0; ) {
    var c = Ct(l);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || e && c.willChange === "filter" || e && c.filter && c.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
u(mh, "getContainingBlock");
function br(r) {
  for (var e = Xe(r), t = Lc(r); t && el(t) && Ct(t).position === "static"; )
    t = Lc(t);
  return t && (st(t) === "html" || st(t) === "body" && Ct(t).position === "static") ? e : t || mh(r) || e;
}
u(br, "getOffsetParent");
function Rn(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
u(Rn, "getMainAxisFromPlacement");
function Nn(r, e, t) {
  return gr(r, Dn(e, t));
}
u(Nn, "within");
function qc(r, e, t) {
  var i = Nn(r, e, t);
  return i > t ? t : i;
}
u(qc, "withinMaxClamp");
function ao() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
u(ao, "getFreshSideObject");
function so(r) {
  return Object.assign({}, ao(), r);
}
u(so, "mergePaddingObject");
function lo(r, e) {
  return e.reduce(function(t, i) {
    return t[i] = r, t;
  }, {});
}
u(lo, "expandToHashMap");
var gh = u(function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, so(typeof e != "number" ? e : lo(e, rn));
}, "toPaddingObject");
function bh(r) {
  var e, t = r.state, i = r.name, l = r.options, c = t.elements.arrow, d = t.modifiersData.popperOffsets, v = lt(t.placement), b = Rn(v), y = [Ve, Ze].indexOf(v) >= 0, w = y ? "height" : "width";
  if (!(!c || !d)) {
    var _ = gh(l.padding, t), C = kn(c), A = b === "y" ? Fe : Ve, k = b === "y" ? tt : Ze, S = t.rects.reference[w] + t.rects.reference[b] - d[b] - t.rects.popper[w], M = d[b] - t.rects.reference[b], P = br(c), I = P ? b === "y" ? P.clientHeight || 0 : P.clientWidth || 0 : 0, q = S / 2 - M / 2, E = _[A], B = I - C[w] - _[k], R = I / 2 - C[w] / 2 + q, X = Nn(E, R, B), V = b;
    t.modifiersData[i] = (e = {}, e[V] = X, e.centerOffset = X - R, e);
  }
}
u(bh, "arrow");
function yh(r) {
  var e = r.state, t = r.options, i = t.element, l = i === void 0 ? "[data-popper-arrow]" : i;
  l != null && (typeof l == "string" && (l = e.elements.popper.querySelector(l), !l) || !oo(e.elements.popper, l) || (e.elements.arrow = l));
}
u(yh, "effect");
var jc = { name: "arrow", enabled: true, phase: "main", fn: bh, effect: yh, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Zt(r) {
  return r.split("-")[1];
}
u(Zt, "getVariation");
var xh = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function wh(r) {
  var e = r.x, t = r.y, i = window, l = i.devicePixelRatio || 1;
  return { x: qr(e * l) / l || 0, y: qr(t * l) / l || 0 };
}
u(wh, "roundOffsetsByDPR");
function Bc(r) {
  var e, t = r.popper, i = r.popperRect, l = r.placement, c = r.variation, d = r.offsets, v = r.position, b = r.gpuAcceleration, y = r.adaptive, w = r.roundOffsets, _ = r.isFixed, C = d.x, A = C === void 0 ? 0 : C, k = d.y, S = k === void 0 ? 0 : k, M = typeof w == "function" ? w({ x: A, y: S }) : { x: A, y: S };
  A = M.x, S = M.y;
  var P = d.hasOwnProperty("x"), I = d.hasOwnProperty("y"), q = Ve, E = Fe, B = window;
  if (y) {
    var R = br(t), X = "clientHeight", V = "clientWidth";
    if (R === Xe(t) && (R = bt(t), Ct(R).position !== "static" && v === "absolute" && (X = "scrollHeight", V = "scrollWidth")), R = R, l === Fe || (l === Ve || l === Ze) && c === zn) {
      E = tt;
      var H = _ && B.visualViewport ? B.visualViewport.height : R[X];
      S -= H - i.height, S *= b ? 1 : -1;
    }
    if (l === Ve || (l === Fe || l === tt) && c === zn) {
      q = Ze;
      var W = _ && B.visualViewport ? B.visualViewport.width : R[V];
      A -= W - i.width, A *= b ? 1 : -1;
    }
  }
  var ne = Object.assign({ position: v }, y && xh), oe = w === true ? wh({ x: A, y: S }) : { x: A, y: S };
  if (A = oe.x, S = oe.y, b) {
    var U;
    return Object.assign({}, ne, (U = {}, U[E] = I ? "0" : "", U[q] = P ? "0" : "", U.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + A + "px, " + S + "px)" : "translate3d(" + A + "px, " + S + "px, 0)", U));
  }
  return Object.assign({}, ne, (e = {}, e[E] = I ? S + "px" : "", e[q] = P ? A + "px" : "", e.transform = "", e));
}
u(Bc, "mapToStyles");
function Eh(r) {
  var e = r.state, t = r.options, i = t.gpuAcceleration, l = i === void 0 ? true : i, c = t.adaptive, d = c === void 0 ? true : c, v = t.roundOffsets, b = v === void 0 ? true : v;
  if (false)
    var y;
  var w = { placement: lt(e.placement), variation: Zt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: l, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Bc(Object.assign({}, w, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: d, roundOffsets: b })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Bc(Object.assign({}, w, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: b })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
u(Eh, "computeStyles");
var Hc = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: Eh, data: {} };
var Ra = { passive: true };
function Sh(r) {
  var e = r.state, t = r.instance, i = r.options, l = i.scroll, c = l === void 0 ? true : l, d = i.resize, v = d === void 0 ? true : d, b = Xe(e.elements.popper), y = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return c && y.forEach(function(w) {
    w.addEventListener("scroll", t.update, Ra);
  }), v && b.addEventListener("resize", t.update, Ra), function() {
    c && y.forEach(function(w) {
      w.removeEventListener("scroll", t.update, Ra);
    }), v && b.removeEventListener("resize", t.update, Ra);
  };
}
u(Sh, "effect");
var $c = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: Sh, data: {} };
var Th = { left: "right", right: "left", bottom: "top", top: "bottom" };
function di(r) {
  return r.replace(/left|right|bottom|top/g, function(e) {
    return Th[e];
  });
}
u(di, "getOppositePlacement");
var Ch = { start: "end", end: "start" };
function Na(r) {
  return r.replace(/start|end/g, function(e) {
    return Ch[e];
  });
}
u(Na, "getOppositeVariationPlacement");
function Gn(r) {
  var e = Xe(r), t = e.pageXOffset, i = e.pageYOffset;
  return { scrollLeft: t, scrollTop: i };
}
u(Gn, "getWindowScroll");
function Ln(r) {
  return Yt(bt(r)).left + Gn(r).scrollLeft;
}
u(Ln, "getWindowScrollBarX");
function tl(r) {
  var e = Xe(r), t = bt(r), i = e.visualViewport, l = t.clientWidth, c = t.clientHeight, d = 0, v = 0;
  return i && (l = i.width, c = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (d = i.offsetLeft, v = i.offsetTop)), { width: l, height: c, x: d + Ln(r), y: v };
}
u(tl, "getViewportRect");
function rl(r) {
  var e, t = bt(r), i = Gn(r), l = (e = r.ownerDocument) == null ? void 0 : e.body, c = gr(t.scrollWidth, t.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), d = gr(t.scrollHeight, t.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), v = -i.scrollLeft + Ln(r), b = -i.scrollTop;
  return Ct(l || t).direction === "rtl" && (v += gr(t.clientWidth, l ? l.clientWidth : 0) - c), { width: c, height: d, x: v, y: b };
}
u(rl, "getDocumentRect");
function qn(r) {
  var e = Ct(r), t = e.overflow, i = e.overflowX, l = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + l + i);
}
u(qn, "isScrollParent");
function Ga(r) {
  return ["html", "body", "#document"].indexOf(st(r)) >= 0 ? r.ownerDocument.body : rt(r) && qn(r) ? r : Ga(jr(r));
}
u(Ga, "getScrollParent");
function nn(r, e) {
  var t;
  e === void 0 && (e = []);
  var i = Ga(r), l = i === ((t = r.ownerDocument) == null ? void 0 : t.body), c = Xe(i), d = l ? [c].concat(c.visualViewport || [], qn(i) ? i : []) : i, v = e.concat(d);
  return l ? v : v.concat(nn(jr(d)));
}
u(nn, "listScrollParents");
function fi(r) {
  return Object.assign({}, r, { left: r.x, top: r.y, right: r.x + r.width, bottom: r.y + r.height });
}
u(fi, "rectToClientRect");
function Oh(r) {
  var e = Yt(r);
  return e.top = e.top + r.clientTop, e.left = e.left + r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top, e;
}
u(Oh, "getInnerBoundingClientRect");
function Fc(r, e) {
  return e === za ? fi(tl(r)) : Cr(e) ? Oh(e) : fi(rl(bt(r)));
}
u(Fc, "getClientRectFromMixedType");
function Mh(r) {
  var e = nn(jr(r)), t = ["absolute", "fixed"].indexOf(Ct(r).position) >= 0, i = t && rt(r) ? br(r) : r;
  return Cr(i) ? e.filter(function(l) {
    return Cr(l) && oo(l, i) && st(l) !== "body";
  }) : [];
}
u(Mh, "getClippingParents");
function nl(r, e, t) {
  var i = e === "clippingParents" ? Mh(r) : [].concat(e), l = [].concat(i, [t]), c = l[0], d = l.reduce(function(v, b) {
    var y = Fc(r, b);
    return v.top = gr(y.top, v.top), v.right = Dn(y.right, v.right), v.bottom = Dn(y.bottom, v.bottom), v.left = gr(y.left, v.left), v;
  }, Fc(r, c));
  return d.width = d.right - d.left, d.height = d.bottom - d.top, d.x = d.left, d.y = d.top, d;
}
u(nl, "getClippingRect");
function uo(r) {
  var e = r.reference, t = r.element, i = r.placement, l = i ? lt(i) : null, c = i ? Zt(i) : null, d = e.x + e.width / 2 - t.width / 2, v = e.y + e.height / 2 - t.height / 2, b;
  switch (l) {
    case Fe:
      b = { x: d, y: e.y - t.height };
      break;
    case tt:
      b = { x: d, y: e.y + e.height };
      break;
    case Ze:
      b = { x: e.x + e.width, y: v };
      break;
    case Ve:
      b = { x: e.x - t.width, y: v };
      break;
    default:
      b = { x: e.x, y: e.y };
  }
  var y = l ? Rn(l) : null;
  if (y != null) {
    var w = y === "y" ? "height" : "width";
    switch (c) {
      case Lr:
        b[y] = b[y] - (e[w] / 2 - t[w] / 2);
        break;
      case zn:
        b[y] = b[y] + (e[w] / 2 - t[w] / 2);
        break;
      default:
    }
  }
  return b;
}
u(uo, "computeOffsets");
function yr(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = i === void 0 ? r.placement : i, c = t.boundary, d = c === void 0 ? Rc : c, v = t.rootBoundary, b = v === void 0 ? za : v, y = t.elementContext, w = y === void 0 ? pi : y, _ = t.altBoundary, C = _ === void 0 ? false : _, A = t.padding, k = A === void 0 ? 0 : A, S = so(typeof k != "number" ? k : lo(k, rn)), M = w === pi ? Nc : pi, P = r.rects.popper, I = r.elements[C ? M : w], q = nl(Cr(I) ? I : I.contextElement || bt(r.elements.popper), d, b), E = Yt(r.elements.reference), B = uo({ reference: E, element: P, strategy: "absolute", placement: l }), R = fi(Object.assign({}, P, B)), X = w === pi ? R : E, V = { top: q.top - X.top + S.top, bottom: X.bottom - q.bottom + S.bottom, left: q.left - X.left + S.left, right: X.right - q.right + S.right }, H = r.modifiersData.offset;
  if (w === pi && H) {
    var W = H[l];
    Object.keys(V).forEach(function(ne) {
      var oe = [Ze, tt].indexOf(ne) >= 0 ? 1 : -1, U = [Fe, tt].indexOf(ne) >= 0 ? "y" : "x";
      V[ne] += W[U] * oe;
    });
  }
  return V;
}
u(yr, "detectOverflow");
function il(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = t.boundary, c = t.rootBoundary, d = t.padding, v = t.flipVariations, b = t.allowedAutoPlacements, y = b === void 0 ? Da : b, w = Zt(i), _ = w ? v ? Qs : Qs.filter(function(k) {
    return Zt(k) === w;
  }) : rn, C = _.filter(function(k) {
    return y.indexOf(k) >= 0;
  });
  C.length === 0 && (C = _);
  var A = C.reduce(function(k, S) {
    return k[S] = yr(r, { placement: S, boundary: l, rootBoundary: c, padding: d })[lt(S)], k;
  }, {});
  return Object.keys(A).sort(function(k, S) {
    return A[k] - A[S];
  });
}
u(il, "computeAutoPlacement");
function _h(r) {
  if (lt(r) === Ia)
    return [];
  var e = di(r);
  return [Na(r), e, Na(e)];
}
u(_h, "getExpandedFallbackPlacements");
function Ah(r) {
  var e = r.state, t = r.options, i = r.name;
  if (!e.modifiersData[i]._skip) {
    for (var l = t.mainAxis, c = l === void 0 ? true : l, d = t.altAxis, v = d === void 0 ? true : d, b = t.fallbackPlacements, y = t.padding, w = t.boundary, _ = t.rootBoundary, C = t.altBoundary, A = t.flipVariations, k = A === void 0 ? true : A, S = t.allowedAutoPlacements, M = e.options.placement, P = lt(M), I = P === M, q = b || (I || !k ? [di(M)] : _h(M)), E = [M].concat(q).reduce(function(K, wt) {
      return K.concat(lt(wt) === Ia ? il(e, { placement: wt, boundary: w, rootBoundary: _, padding: y, flipVariations: k, allowedAutoPlacements: S }) : wt);
    }, []), B = e.rects.reference, R = e.rects.popper, X = /* @__PURE__ */ new Map(), V = true, H = E[0], W = 0; W < E.length; W++) {
      var ne = E[W], oe = lt(ne), U = Zt(ne) === Lr, ce = [Fe, tt].indexOf(oe) >= 0, Re = ce ? "width" : "height", We = yr(e, { placement: ne, boundary: w, rootBoundary: _, altBoundary: C, padding: y }), Le = ce ? U ? Ze : Ve : U ? tt : Fe;
      B[Re] > R[Re] && (Le = di(Le));
      var fe = di(Le), Ye = [];
      if (c && Ye.push(We[oe] <= 0), v && Ye.push(We[Le] <= 0, We[fe] <= 0), Ye.every(function(K) {
        return K;
      })) {
        H = ne, V = false;
        break;
      }
      X.set(ne, Ye);
    }
    if (V)
      for (var Ke = k ? 3 : 1, kt = u(function(wt) {
        var Et = E.find(function(Pr) {
          var Wt = X.get(Pr);
          if (Wt)
            return Wt.slice(0, wt).every(function(pr) {
              return pr;
            });
        });
        if (Et)
          return H = Et, "break";
      }, "_loop"), Mt = Ke; Mt > 0; Mt--) {
        var Ar = kt(Mt);
        if (Ar === "break")
          break;
      }
    e.placement !== H && (e.modifiersData[i]._skip = true, e.placement = H, e.reset = true);
  }
}
u(Ah, "flip");
var Wc = { name: "flip", enabled: true, phase: "main", fn: Ah, requiresIfExists: ["offset"], data: { _skip: false } };
function Uc(r, e, t) {
  return t === void 0 && (t = { x: 0, y: 0 }), { top: r.top - e.height - t.y, right: r.right - e.width + t.x, bottom: r.bottom - e.height + t.y, left: r.left - e.width - t.x };
}
u(Uc, "getSideOffsets");
function Vc(r) {
  return [Fe, Ze, tt, Ve].some(function(e) {
    return r[e] >= 0;
  });
}
u(Vc, "isAnySideFullyClipped");
function Ph(r) {
  var e = r.state, t = r.name, i = e.rects.reference, l = e.rects.popper, c = e.modifiersData.preventOverflow, d = yr(e, { elementContext: "reference" }), v = yr(e, { altBoundary: true }), b = Uc(d, i), y = Uc(v, l, c), w = Vc(b), _ = Vc(y);
  e.modifiersData[t] = { referenceClippingOffsets: b, popperEscapeOffsets: y, isReferenceHidden: w, hasPopperEscaped: _ }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": w, "data-popper-escaped": _ });
}
u(Ph, "hide");
var Xc = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Ph };
function Ih(r, e, t) {
  var i = lt(r), l = [Ve, Fe].indexOf(i) >= 0 ? -1 : 1, c = typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t, d = c[0], v = c[1];
  return d = d || 0, v = (v || 0) * l, [Ve, Ze].indexOf(i) >= 0 ? { x: v, y: d } : { x: d, y: v };
}
u(Ih, "distanceAndSkiddingToXY");
function zh(r) {
  var e = r.state, t = r.options, i = r.name, l = t.offset, c = l === void 0 ? [0, 0] : l, d = Da.reduce(function(w, _) {
    return w[_] = Ih(_, e.rects, c), w;
  }, {}), v = d[e.placement], b = v.x, y = v.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += b, e.modifiersData.popperOffsets.y += y), e.modifiersData[i] = d;
}
u(zh, "offset");
var Yc = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: zh };
function Dh(r) {
  var e = r.state, t = r.name;
  e.modifiersData[t] = uo({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
}
u(Dh, "popperOffsets");
var Zc = { name: "popperOffsets", enabled: true, phase: "read", fn: Dh, data: {} };
function ol(r) {
  return r === "x" ? "y" : "x";
}
u(ol, "getAltAxis");
function kh(r) {
  var e = r.state, t = r.options, i = r.name, l = t.mainAxis, c = l === void 0 ? true : l, d = t.altAxis, v = d === void 0 ? false : d, b = t.boundary, y = t.rootBoundary, w = t.altBoundary, _ = t.padding, C = t.tether, A = C === void 0 ? true : C, k = t.tetherOffset, S = k === void 0 ? 0 : k, M = yr(e, { boundary: b, rootBoundary: y, padding: _, altBoundary: w }), P = lt(e.placement), I = Zt(e.placement), q = !I, E = Rn(P), B = ol(E), R = e.modifiersData.popperOffsets, X = e.rects.reference, V = e.rects.popper, H = typeof S == "function" ? S(Object.assign({}, e.rects, { placement: e.placement })) : S, W = typeof H == "number" ? { mainAxis: H, altAxis: H } : Object.assign({ mainAxis: 0, altAxis: 0 }, H), ne = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, oe = { x: 0, y: 0 };
  if (!!R) {
    if (c) {
      var U, ce = E === "y" ? Fe : Ve, Re = E === "y" ? tt : Ze, We = E === "y" ? "height" : "width", Le = R[E], fe = Le + M[ce], Ye = Le - M[Re], Ke = A ? -V[We] / 2 : 0, kt = I === Lr ? X[We] : V[We], Mt = I === Lr ? -V[We] : -X[We], Ar = e.elements.arrow, K = A && Ar ? kn(Ar) : { width: 0, height: 0 }, wt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : ao(), Et = wt[ce], Pr = wt[Re], Wt = Nn(0, X[We], K[We]), pr = q ? X[We] / 2 - Ke - Wt - Et - W.mainAxis : kt - Wt - Et - W.mainAxis, dr = q ? -X[We] / 2 + Ke + Wt + Pr + W.mainAxis : Mt + Wt + Pr + W.mainAxis, Rt = e.elements.arrow && br(e.elements.arrow), Fn = Rt ? E === "y" ? Rt.clientTop || 0 : Rt.clientLeft || 0 : 0, _t = (U = ne == null ? void 0 : ne[E]) != null ? U : 0, un = Le + pr - _t - Fn, xe = Le + dr - _t, Wr = Nn(A ? Dn(fe, un) : fe, Le, A ? gr(Ye, xe) : Ye);
      R[E] = Wr, oe[E] = Wr - Le;
    }
    if (v) {
      var Ur, At = E === "x" ? Fe : Ve, cn = E === "x" ? tt : Ze, fr = R[B], hr = B === "y" ? "height" : "width", pn = fr + M[At], ct = fr - M[cn], Ir = [Fe, Ve].indexOf(P) !== -1, Nt = (Ur = ne == null ? void 0 : ne[B]) != null ? Ur : 0, Wn = Ir ? pn : fr - X[hr] - V[hr] - Nt + W.altAxis, zr = Ir ? fr + X[hr] + V[hr] - Nt - W.altAxis : ct, dn = A && Ir ? qc(Wn, fr, zr) : Nn(A ? Wn : pn, fr, A ? zr : ct);
      R[B] = dn, oe[B] = dn - fr;
    }
    e.modifiersData[i] = oe;
  }
}
u(kh, "preventOverflow");
var Jc = { name: "preventOverflow", enabled: true, phase: "main", fn: kh, requiresIfExists: ["offset"] };
function al(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
}
u(al, "getHTMLElementScroll");
function sl(r) {
  return r === Xe(r) || !rt(r) ? Gn(r) : al(r);
}
u(sl, "getNodeScroll");
function Rh(r) {
  var e = r.getBoundingClientRect(), t = qr(e.width) / r.offsetWidth || 1, i = qr(e.height) / r.offsetHeight || 1;
  return t !== 1 || i !== 1;
}
u(Rh, "isElementScaled");
function ll(r, e, t) {
  t === void 0 && (t = false);
  var i = rt(e), l = rt(e) && Rh(e), c = bt(e), d = Yt(r, l), v = { scrollLeft: 0, scrollTop: 0 }, b = { x: 0, y: 0 };
  return (i || !i && !t) && ((st(e) !== "body" || qn(c)) && (v = sl(e)), rt(e) ? (b = Yt(e, true), b.x += e.clientLeft, b.y += e.clientTop) : c && (b.x = Ln(c))), { x: d.left + v.scrollLeft - b.x, y: d.top + v.scrollTop - b.y, width: d.width, height: d.height };
}
u(ll, "getCompositeRect");
function Nh(r) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), i = [];
  r.forEach(function(c) {
    e.set(c.name, c);
  });
  function l(c) {
    t.add(c.name);
    var d = [].concat(c.requires || [], c.requiresIfExists || []);
    d.forEach(function(v) {
      if (!t.has(v)) {
        var b = e.get(v);
        b && l(b);
      }
    }), i.push(c);
  }
  return u(l, "sort"), r.forEach(function(c) {
    t.has(c.name) || l(c);
  }), i;
}
u(Nh, "order");
function ul(r) {
  var e = Nh(r);
  return Gc.reduce(function(t, i) {
    return t.concat(e.filter(function(l) {
      return l.phase === i;
    }));
  }, []);
}
u(ul, "orderModifiers");
function cl(r) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(r());
      });
    })), e;
  };
}
u(cl, "debounce");
function pl(r) {
  var e = r.reduce(function(t, i) {
    var l = t[i.name];
    return t[i.name] = l ? Object.assign({}, l, i, { options: Object.assign({}, l.options, i.options), data: Object.assign({}, l.data, i.data) }) : i, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
u(pl, "mergeByName");
var Kc = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Qc() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return !e.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
u(Qc, "areValidElements");
function ep(r) {
  r === void 0 && (r = {});
  var e = r, t = e.defaultModifiers, i = t === void 0 ? [] : t, l = e.defaultOptions, c = l === void 0 ? Kc : l;
  return u(function(v, b, y) {
    y === void 0 && (y = c);
    var w = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Kc, c), modifiersData: {}, elements: { reference: v, popper: b }, attributes: {}, styles: {} }, _ = [], C = false, A = { state: w, setOptions: u(function(P) {
      var I = typeof P == "function" ? P(w.options) : P;
      S(), w.options = Object.assign({}, c, w.options, I), w.scrollParents = { reference: Cr(v) ? nn(v) : v.contextElement ? nn(v.contextElement) : [], popper: nn(b) };
      var q = ul(pl([].concat(i, w.options.modifiers)));
      if (w.orderedModifiers = q.filter(function(ne) {
        return ne.enabled;
      }), false) {
        var E;
        if (getBasePlacement(w.options.placement) === auto)
          var B;
        var R, X, V, H, W;
      }
      return k(), A.update();
    }, "setOptions"), forceUpdate: u(function() {
      if (!C) {
        var P = w.elements, I = P.reference, q = P.popper;
        if (!!Qc(I, q)) {
          w.rects = { reference: ll(I, br(q), w.options.strategy === "fixed"), popper: kn(q) }, w.reset = false, w.placement = w.options.placement, w.orderedModifiers.forEach(function(ne) {
            return w.modifiersData[ne.name] = Object.assign({}, ne.data);
          });
          for (var E = 0, B = 0; B < w.orderedModifiers.length; B++) {
            if (w.reset === true) {
              w.reset = false, B = -1;
              continue;
            }
            var R = w.orderedModifiers[B], X = R.fn, V = R.options, H = V === void 0 ? {} : V, W = R.name;
            typeof X == "function" && (w = X({ state: w, options: H, name: W, instance: A }) || w);
          }
        }
      }
    }, "forceUpdate"), update: cl(function() {
      return new Promise(function(M) {
        A.forceUpdate(), M(w);
      });
    }), destroy: u(function() {
      S(), C = true;
    }, "destroy") };
    if (!Qc(v, b))
      return A;
    A.setOptions(y).then(function(M) {
      !C && y.onFirstUpdate && y.onFirstUpdate(M);
    });
    function k() {
      w.orderedModifiers.forEach(function(M) {
        var P = M.name, I = M.options, q = I === void 0 ? {} : I, E = M.effect;
        if (typeof E == "function") {
          var B = E({ state: w, name: P, instance: A, options: q }), R = u(function() {
          }, "noopFn");
          _.push(B || R);
        }
      });
    }
    u(k, "runModifierEffects");
    function S() {
      _.forEach(function(M) {
        return M();
      }), _ = [];
    }
    return u(S, "cleanupModifierEffects"), A;
  }, "createPopper");
}
u(ep, "popperGenerator");
var Gh = [$c, Zc, Hc, io, Yc, Wc, Jc, jc, Xc];
var dl = ep({ defaultModifiers: Gh });
var Br = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var Lh = "tippy-box";
var cp = "tippy-content";
var qh = "tippy-backdrop";
var pp = "tippy-arrow";
var dp = "tippy-svg-arrow";
var jn = { passive: true, capture: true };
var fp = u(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function fl(r, e, t) {
  if (Array.isArray(r)) {
    var i = r[e];
    return i == null ? Array.isArray(t) ? t[e] : t : i;
  }
  return r;
}
u(fl, "getValueAtIndexOrReturn");
function yl(r, e) {
  var t = {}.toString.call(r);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
u(yl, "isType");
function hp(r, e) {
  return typeof r == "function" ? r.apply(void 0, e) : r;
}
u(hp, "invokeWithArgsOrReturn");
function tp(r, e) {
  if (e === 0)
    return r;
  var t;
  return function(i) {
    clearTimeout(t), t = setTimeout(function() {
      r(i);
    }, e);
  };
}
u(tp, "debounce");
function jh(r, e) {
  var t = Object.assign({}, r);
  return e.forEach(function(i) {
    delete t[i];
  }), t;
}
u(jh, "removeProperties");
function Bh(r) {
  return r.split(/\s+/).filter(Boolean);
}
u(Bh, "splitBySpaces");
function Bn(r) {
  return [].concat(r);
}
u(Bn, "normalizeToArray");
function rp(r, e) {
  r.indexOf(e) === -1 && r.push(e);
}
u(rp, "pushIfUnique");
function Hh(r) {
  return r.filter(function(e, t) {
    return r.indexOf(e) === t;
  });
}
u(Hh, "unique");
function $h(r) {
  return r.split("-")[0];
}
u($h, "getBasePlacement");
function qa(r) {
  return [].slice.call(r);
}
u(qa, "arrayFrom");
function np(r) {
  return Object.keys(r).reduce(function(e, t) {
    return r[t] !== void 0 && (e[t] = r[t]), e;
  }, {});
}
u(np, "removeUndefinedProps");
function hi() {
  return document.createElement("div");
}
u(hi, "div");
function ja(r) {
  return ["Element", "Fragment"].some(function(e) {
    return yl(r, e);
  });
}
u(ja, "isElement");
function Fh(r) {
  return yl(r, "NodeList");
}
u(Fh, "isNodeList");
function Wh(r) {
  return yl(r, "MouseEvent");
}
u(Wh, "isMouseEvent");
function Uh(r) {
  return !!(r && r._tippy && r._tippy.reference === r);
}
u(Uh, "isReferenceElement");
function Vh(r) {
  return ja(r) ? [r] : Fh(r) ? qa(r) : Array.isArray(r) ? r : qa(document.querySelectorAll(r));
}
u(Vh, "getArrayOfElements");
function hl(r, e) {
  r.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
u(hl, "setTransitionDuration");
function ip(r, e) {
  r.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
u(ip, "setVisibilityState");
function Xh(r) {
  var e, t = Bn(r), i = t[0];
  return i != null && (e = i.ownerDocument) != null && e.body ? i.ownerDocument : document;
}
u(Xh, "getOwnerDocument");
function Yh(r, e) {
  var t = e.clientX, i = e.clientY;
  return r.every(function(l) {
    var c = l.popperRect, d = l.popperState, v = l.props, b = v.interactiveBorder, y = $h(d.placement), w = d.modifiersData.offset;
    if (!w)
      return true;
    var _ = y === "bottom" ? w.top.y : 0, C = y === "top" ? w.bottom.y : 0, A = y === "right" ? w.left.x : 0, k = y === "left" ? w.right.x : 0, S = c.top - i + _ > b, M = i - c.bottom - C > b, P = c.left - t + A > b, I = t - c.right - k > b;
    return S || M || P || I;
  });
}
u(Yh, "isCursorOutsideInteractiveBorder");
function vl(r, e, t) {
  var i = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(l) {
    r[i](l, t);
  });
}
u(vl, "updateTransitionEndListener");
function op(r, e) {
  for (var t = e; t; ) {
    var i;
    if (r.contains(t))
      return true;
    t = t.getRootNode == null || (i = t.getRootNode()) == null ? void 0 : i.host;
  }
  return false;
}
u(op, "actualContains");
var Or = { isTouch: false };
var ap = 0;
function Zh() {
  Or.isTouch || (Or.isTouch = true, window.performance && document.addEventListener("mousemove", vp));
}
u(Zh, "onDocumentTouchStart");
function vp() {
  var r = performance.now();
  r - ap < 20 && (Or.isTouch = false, document.removeEventListener("mousemove", vp)), ap = r;
}
u(vp, "onDocumentMouseMove");
function Jh() {
  var r = document.activeElement;
  if (Uh(r)) {
    var e = r._tippy;
    r.blur && !e.state.isVisible && r.blur();
  }
}
u(Jh, "onWindowBlur");
function Kh() {
  document.addEventListener("touchstart", Zh, jn), window.addEventListener("blur", Jh);
}
u(Kh, "bindGlobalEventListeners");
var Qh = typeof window != "undefined" && typeof document != "undefined";
var ev = Qh ? !!window.msCrypto : false;
var tv = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var rv = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var xr = Object.assign({ appendTo: fp, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: u(function() {
}, "onAfterUpdate"), onBeforeUpdate: u(function() {
}, "onBeforeUpdate"), onCreate: u(function() {
}, "onCreate"), onDestroy: u(function() {
}, "onDestroy"), onHidden: u(function() {
}, "onHidden"), onHide: u(function() {
}, "onHide"), onMount: u(function() {
}, "onMount"), onShow: u(function() {
}, "onShow"), onShown: u(function() {
}, "onShown"), onTrigger: u(function() {
}, "onTrigger"), onUntrigger: u(function() {
}, "onUntrigger"), onClickOutside: u(function() {
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, tv, rv);
var nv = Object.keys(xr);
var iv = u(function(e) {
  var t = Object.keys(e);
  t.forEach(function(i) {
    xr[i] = e[i];
  });
}, "setDefaultProps");
function mp(r) {
  var e = r.plugins || [], t = e.reduce(function(i, l) {
    var c = l.name, d = l.defaultValue;
    if (c) {
      var v;
      i[c] = r[c] !== void 0 ? r[c] : (v = xr[c]) != null ? v : d;
    }
    return i;
  }, {});
  return Object.assign({}, r, t);
}
u(mp, "getExtendedPassedProps");
function ov(r, e) {
  var t = e ? Object.keys(mp(Object.assign({}, xr, { plugins: e }))) : nv, i = t.reduce(function(l, c) {
    var d = (r.getAttribute("data-tippy-" + c) || "").trim();
    if (!d)
      return l;
    if (c === "content")
      l[c] = d;
    else
      try {
        l[c] = JSON.parse(d);
      } catch (v) {
        l[c] = d;
      }
    return l;
  }, {});
  return i;
}
u(ov, "getDataAttributeProps");
function sp(r, e) {
  var t = Object.assign({}, e, { content: hp(e.content, [r]) }, e.ignoreAttributes ? {} : ov(r, e.plugins));
  return t.aria = Object.assign({}, xr.aria, t.aria), t.aria = { expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded, content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content }, t;
}
u(sp, "evaluateProps");
var av = u(function() {
  return "innerHTML";
}, "innerHTML");
function gl(r, e) {
  r[av()] = e;
}
u(gl, "dangerouslySetInnerHTML");
function lp(r) {
  var e = hi();
  return r === true ? e.className = pp : (e.className = dp, ja(r) ? e.appendChild(r) : gl(e, r)), e;
}
u(lp, "createArrowElement");
function up(r, e) {
  ja(e.content) ? (gl(r, ""), r.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? gl(r, e.content) : r.textContent = e.content);
}
u(up, "setContent");
function bl(r) {
  var e = r.firstElementChild, t = qa(e.children);
  return { box: e, content: t.find(function(i) {
    return i.classList.contains(cp);
  }), arrow: t.find(function(i) {
    return i.classList.contains(pp) || i.classList.contains(dp);
  }), backdrop: t.find(function(i) {
    return i.classList.contains(qh);
  }) };
}
u(bl, "getChildren");
function gp(r) {
  var e = hi(), t = hi();
  t.className = Lh, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var i = hi();
  i.className = cp, i.setAttribute("data-state", "hidden"), up(i, r.props), e.appendChild(t), t.appendChild(i), l(r.props, r.props);
  function l(c, d) {
    var v = bl(e), b = v.box, y = v.content, w = v.arrow;
    d.theme ? b.setAttribute("data-theme", d.theme) : b.removeAttribute("data-theme"), typeof d.animation == "string" ? b.setAttribute("data-animation", d.animation) : b.removeAttribute("data-animation"), d.inertia ? b.setAttribute("data-inertia", "") : b.removeAttribute("data-inertia"), b.style.maxWidth = typeof d.maxWidth == "number" ? d.maxWidth + "px" : d.maxWidth, d.role ? b.setAttribute("role", d.role) : b.removeAttribute("role"), (c.content !== d.content || c.allowHTML !== d.allowHTML) && up(y, r.props), d.arrow ? w ? c.arrow !== d.arrow && (b.removeChild(w), b.appendChild(lp(d.arrow))) : b.appendChild(lp(d.arrow)) : w && b.removeChild(w);
  }
  return u(l, "onUpdate"), { popper: e, onUpdate: l };
}
u(gp, "render");
gp.$$tippy = true;
var sv = 1;
var La = [];
var ml = [];
function lv(r, e) {
  var t = sp(r, Object.assign({}, xr, mp(np(e)))), i, l, c, d = false, v = false, b = false, y = false, w, _, C, A = [], k = tp(un, t.interactiveDebounce), S, M = sv++, P = null, I = Hh(t.plugins), q = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, E = { id: M, reference: r, popper: hi(), popperInstance: P, props: t, state: q, plugins: I, clearDelayTimeouts: Wn, setProps: zr, setContent: dn, show: yi, hide: So, hideWithInteractivity: xi, enable: Ir, disable: Nt, unmount: wi, destroy: To };
  if (!t.render)
    return E;
  var B = t.render(E), R = B.popper, X = B.onUpdate;
  R.setAttribute("data-tippy-root", ""), R.id = "tippy-" + E.id, E.popper = R, r._tippy = E, R._tippy = E;
  var V = I.map(function(j) {
    return j.fn(E);
  }), H = r.hasAttribute("aria-expanded");
  return Rt(), Ke(), Le(), fe("onCreate", [E]), t.showOnCreate && pn(), R.addEventListener("mouseenter", function() {
    E.props.interactive && E.state.isVisible && E.clearDelayTimeouts();
  }), R.addEventListener("mouseleave", function() {
    E.props.interactive && E.props.trigger.indexOf("mouseenter") >= 0 && ce().addEventListener("mousemove", k);
  }), E;
  function W() {
    var j = E.props.touch;
    return Array.isArray(j) ? j : [j, 0];
  }
  u(W, "getNormalizedTouchSettings");
  function ne() {
    return W()[0] === "hold";
  }
  u(ne, "getIsCustomTouchBehavior");
  function oe() {
    var j;
    return !!((j = E.props.render) != null && j.$$tippy);
  }
  u(oe, "getIsDefaultRenderFn");
  function U() {
    return S || r;
  }
  u(U, "getCurrentTarget");
  function ce() {
    var j = U().parentNode;
    return j ? Xh(j) : document;
  }
  u(ce, "getDocument");
  function Re() {
    return bl(R);
  }
  u(Re, "getDefaultTemplateChildren");
  function We(j) {
    return E.state.isMounted && !E.state.isVisible || Or.isTouch || w && w.type === "focus" ? 0 : fl(E.props.delay, j ? 0 : 1, xr.delay);
  }
  u(We, "getDelay");
  function Le(j) {
    j === void 0 && (j = false), R.style.pointerEvents = E.props.interactive && !j ? "" : "none", R.style.zIndex = "" + E.props.zIndex;
  }
  u(Le, "handleStyles");
  function fe(j, Q, ae) {
    if (ae === void 0 && (ae = true), V.forEach(function(he) {
      he[j] && he[j].apply(he, Q);
    }), ae) {
      var ye;
      (ye = E.props)[j].apply(ye, Q);
    }
  }
  u(fe, "invokeHook");
  function Ye() {
    var j = E.props.aria;
    if (!!j.content) {
      var Q = "aria-" + j.content, ae = R.id, ye = Bn(E.props.triggerTarget || r);
      ye.forEach(function(he) {
        var pt = he.getAttribute(Q);
        if (E.state.isVisible)
          he.setAttribute(Q, pt ? pt + " " + ae : ae);
        else {
          var dt = pt && pt.replace(ae, "").trim();
          dt ? he.setAttribute(Q, dt) : he.removeAttribute(Q);
        }
      });
    }
  }
  u(Ye, "handleAriaContentAttribute");
  function Ke() {
    if (!(H || !E.props.aria.expanded)) {
      var j = Bn(E.props.triggerTarget || r);
      j.forEach(function(Q) {
        E.props.interactive ? Q.setAttribute("aria-expanded", E.state.isVisible && Q === U() ? "true" : "false") : Q.removeAttribute("aria-expanded");
      });
    }
  }
  u(Ke, "handleAriaExpandedAttribute");
  function kt() {
    ce().removeEventListener("mousemove", k), La = La.filter(function(j) {
      return j !== k;
    });
  }
  u(kt, "cleanupInteractiveMouseListeners");
  function Mt(j) {
    if (!(Or.isTouch && (b || j.type === "mousedown"))) {
      var Q = j.composedPath && j.composedPath()[0] || j.target;
      if (!(E.props.interactive && op(R, Q))) {
        if (Bn(E.props.triggerTarget || r).some(function(ae) {
          return op(ae, Q);
        })) {
          if (Or.isTouch || E.state.isVisible && E.props.trigger.indexOf("click") >= 0)
            return;
        } else
          fe("onClickOutside", [E, j]);
        E.props.hideOnClick === true && (E.clearDelayTimeouts(), E.hide(), v = true, setTimeout(function() {
          v = false;
        }), E.state.isMounted || Et());
      }
    }
  }
  u(Mt, "onDocumentPress");
  function Ar() {
    b = true;
  }
  u(Ar, "onTouchMove");
  function K() {
    b = false;
  }
  u(K, "onTouchStart");
  function wt() {
    var j = ce();
    j.addEventListener("mousedown", Mt, true), j.addEventListener("touchend", Mt, jn), j.addEventListener("touchstart", K, jn), j.addEventListener("touchmove", Ar, jn);
  }
  u(wt, "addDocumentPress");
  function Et() {
    var j = ce();
    j.removeEventListener("mousedown", Mt, true), j.removeEventListener("touchend", Mt, jn), j.removeEventListener("touchstart", K, jn), j.removeEventListener("touchmove", Ar, jn);
  }
  u(Et, "removeDocumentPress");
  function Pr(j, Q) {
    pr(j, function() {
      !E.state.isVisible && R.parentNode && R.parentNode.contains(R) && Q();
    });
  }
  u(Pr, "onTransitionedOut");
  function Wt(j, Q) {
    pr(j, Q);
  }
  u(Wt, "onTransitionedIn");
  function pr(j, Q) {
    var ae = Re().box;
    function ye(he) {
      he.target === ae && (vl(ae, "remove", ye), Q());
    }
    if (u(ye, "listener"), j === 0)
      return Q();
    vl(ae, "remove", _), vl(ae, "add", ye), _ = ye;
  }
  u(pr, "onTransitionEnd");
  function dr(j, Q, ae) {
    ae === void 0 && (ae = false);
    var ye = Bn(E.props.triggerTarget || r);
    ye.forEach(function(he) {
      he.addEventListener(j, Q, ae), A.push({ node: he, eventType: j, handler: Q, options: ae });
    });
  }
  u(dr, "on");
  function Rt() {
    ne() && (dr("touchstart", _t, { passive: true }), dr("touchend", xe, { passive: true })), Bh(E.props.trigger).forEach(function(j) {
      if (j !== "manual")
        switch (dr(j, _t), j) {
          case "mouseenter":
            dr("mouseleave", xe);
            break;
          case "focus":
            dr(ev ? "focusout" : "blur", Wr);
            break;
          case "focusin":
            dr("focusout", Wr);
            break;
        }
    });
  }
  u(Rt, "addListeners");
  function Fn() {
    A.forEach(function(j) {
      var Q = j.node, ae = j.eventType, ye = j.handler, he = j.options;
      Q.removeEventListener(ae, ye, he);
    }), A = [];
  }
  u(Fn, "removeListeners");
  function _t(j) {
    var Q, ae = false;
    if (!(!E.state.isEnabled || Ur(j) || v)) {
      var ye = ((Q = w) == null ? void 0 : Q.type) === "focus";
      w = j, S = j.currentTarget, Ke(), !E.state.isVisible && Wh(j) && La.forEach(function(he) {
        return he(j);
      }), j.type === "click" && (E.props.trigger.indexOf("mouseenter") < 0 || d) && E.props.hideOnClick !== false && E.state.isVisible ? ae = true : pn(j), j.type === "click" && (d = !ae), ae && !ye && ct(j);
    }
  }
  u(_t, "onTrigger");
  function un(j) {
    var Q = j.target, ae = U().contains(Q) || R.contains(Q);
    if (!(j.type === "mousemove" && ae)) {
      var ye = hr().concat(R).map(function(he) {
        var pt, dt = he._tippy, Vr = (pt = dt.popperInstance) == null ? void 0 : pt.state;
        return Vr ? { popperRect: he.getBoundingClientRect(), popperState: Vr, props: t } : null;
      }).filter(Boolean);
      Yh(ye, j) && (kt(), ct(j));
    }
  }
  u(un, "onMouseMove");
  function xe(j) {
    var Q = Ur(j) || E.props.trigger.indexOf("click") >= 0 && d;
    if (!Q) {
      if (E.props.interactive) {
        E.hideWithInteractivity(j);
        return;
      }
      ct(j);
    }
  }
  u(xe, "onMouseLeave");
  function Wr(j) {
    E.props.trigger.indexOf("focusin") < 0 && j.target !== U() || E.props.interactive && j.relatedTarget && R.contains(j.relatedTarget) || ct(j);
  }
  u(Wr, "onBlurOrFocusOut");
  function Ur(j) {
    return Or.isTouch ? ne() !== j.type.indexOf("touch") >= 0 : false;
  }
  u(Ur, "isEventListenerStopped");
  function At() {
    cn();
    var j = E.props, Q = j.popperOptions, ae = j.placement, ye = j.offset, he = j.getReferenceClientRect, pt = j.moveTransition, dt = oe() ? bl(R).arrow : null, Vr = he ? { getBoundingClientRect: he, contextElement: he.contextElement || U() } : r, Ei = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(Dr) {
      var Xr = Dr.state;
      if (oe()) {
        var Gt = Re(), Lt = Gt.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Ut) {
          Ut === "placement" ? Lt.setAttribute("data-placement", Xr.placement) : Xr.attributes.popper["data-popper-" + Ut] ? Lt.setAttribute("data-" + Ut, "") : Lt.removeAttribute("data-" + Ut);
        }), Xr.attributes.popper = {};
      }
    }, "fn") }, ft = [{ name: "offset", options: { offset: ye } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !pt } }, Ei];
    oe() && dt && ft.push({ name: "arrow", options: { element: dt, padding: 3 } }), ft.push.apply(ft, (Q == null ? void 0 : Q.modifiers) || []), E.popperInstance = dl(Vr, R, Object.assign({}, Q, { placement: ae, onFirstUpdate: C, modifiers: ft }));
  }
  u(At, "createPopperInstance");
  function cn() {
    E.popperInstance && (E.popperInstance.destroy(), E.popperInstance = null);
  }
  u(cn, "destroyPopperInstance");
  function fr() {
    var j = E.props.appendTo, Q, ae = U();
    E.props.interactive && j === fp || j === "parent" ? Q = ae.parentNode : Q = hp(j, [ae]), Q.contains(R) || Q.appendChild(R), E.state.isMounted = true, At();
  }
  u(fr, "mount");
  function hr() {
    return qa(R.querySelectorAll("[data-tippy-root]"));
  }
  u(hr, "getNestedPopperTree");
  function pn(j) {
    E.clearDelayTimeouts(), j && fe("onTrigger", [E, j]), wt();
    var Q = We(true), ae = W(), ye = ae[0], he = ae[1];
    Or.isTouch && ye === "hold" && he && (Q = he), Q ? i = setTimeout(function() {
      E.show();
    }, Q) : E.show();
  }
  u(pn, "scheduleShow");
  function ct(j) {
    if (E.clearDelayTimeouts(), fe("onUntrigger", [E, j]), !E.state.isVisible) {
      Et();
      return;
    }
    if (!(E.props.trigger.indexOf("mouseenter") >= 0 && E.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(j.type) >= 0 && d)) {
      var Q = We(false);
      Q ? l = setTimeout(function() {
        E.state.isVisible && E.hide();
      }, Q) : c = requestAnimationFrame(function() {
        E.hide();
      });
    }
  }
  u(ct, "scheduleHide");
  function Ir() {
    E.state.isEnabled = true;
  }
  u(Ir, "enable");
  function Nt() {
    E.hide(), E.state.isEnabled = false;
  }
  u(Nt, "disable");
  function Wn() {
    clearTimeout(i), clearTimeout(l), cancelAnimationFrame(c);
  }
  u(Wn, "clearDelayTimeouts");
  function zr(j) {
    if (!E.state.isDestroyed) {
      fe("onBeforeUpdate", [E, j]), Fn();
      var Q = E.props, ae = sp(r, Object.assign({}, Q, np(j), { ignoreAttributes: true }));
      E.props = ae, Rt(), Q.interactiveDebounce !== ae.interactiveDebounce && (kt(), k = tp(un, ae.interactiveDebounce)), Q.triggerTarget && !ae.triggerTarget ? Bn(Q.triggerTarget).forEach(function(ye) {
        ye.removeAttribute("aria-expanded");
      }) : ae.triggerTarget && r.removeAttribute("aria-expanded"), Ke(), Le(), X && X(Q, ae), E.popperInstance && (At(), hr().forEach(function(ye) {
        requestAnimationFrame(ye._tippy.popperInstance.forceUpdate);
      })), fe("onAfterUpdate", [E, j]);
    }
  }
  u(zr, "setProps");
  function dn(j) {
    E.setProps({ content: j });
  }
  u(dn, "setContent");
  function yi() {
    var j = E.state.isVisible, Q = E.state.isDestroyed, ae = !E.state.isEnabled, ye = Or.isTouch && !E.props.touch, he = fl(E.props.duration, 0, xr.duration);
    if (!(j || Q || ae || ye) && !U().hasAttribute("disabled") && (fe("onShow", [E], false), E.props.onShow(E) !== false)) {
      if (E.state.isVisible = true, oe() && (R.style.visibility = "visible"), Le(), wt(), E.state.isMounted || (R.style.transition = "none"), oe()) {
        var pt = Re(), dt = pt.box, Vr = pt.content;
        hl([dt, Vr], 0);
      }
      C = u(function() {
        var ft;
        if (!(!E.state.isVisible || y)) {
          if (y = true, R.offsetHeight, R.style.transition = E.props.moveTransition, oe() && E.props.animation) {
            var Si = Re(), Dr = Si.box, Xr = Si.content;
            hl([Dr, Xr], he), ip([Dr, Xr], "visible");
          }
          Ye(), Ke(), rp(ml, E), (ft = E.popperInstance) == null || ft.forceUpdate(), fe("onMount", [E]), E.props.animation && oe() && Wt(he, function() {
            E.state.isShown = true, fe("onShown", [E]);
          });
        }
      }, "onFirstUpdate"), fr();
    }
  }
  u(yi, "show");
  function So() {
    var j = !E.state.isVisible, Q = E.state.isDestroyed, ae = !E.state.isEnabled, ye = fl(E.props.duration, 1, xr.duration);
    if (!(j || Q || ae) && (fe("onHide", [E], false), E.props.onHide(E) !== false)) {
      if (E.state.isVisible = false, E.state.isShown = false, y = false, d = false, oe() && (R.style.visibility = "hidden"), kt(), Et(), Le(true), oe()) {
        var he = Re(), pt = he.box, dt = he.content;
        E.props.animation && (hl([pt, dt], ye), ip([pt, dt], "hidden"));
      }
      Ye(), Ke(), E.props.animation ? oe() && Pr(ye, E.unmount) : E.unmount();
    }
  }
  u(So, "hide");
  function xi(j) {
    ce().addEventListener("mousemove", k), rp(La, k), k(j);
  }
  u(xi, "hideWithInteractivity");
  function wi() {
    E.state.isVisible && E.hide(), !!E.state.isMounted && (cn(), hr().forEach(function(j) {
      j._tippy.unmount();
    }), R.parentNode && R.parentNode.removeChild(R), ml = ml.filter(function(j) {
      return j !== E;
    }), E.state.isMounted = false, fe("onHidden", [E]));
  }
  u(wi, "unmount");
  function To() {
    E.state.isDestroyed || (E.clearDelayTimeouts(), E.unmount(), Fn(), delete r._tippy, E.state.isDestroyed = true, fe("onDestroy", [E]));
  }
  u(To, "destroy");
}
u(lv, "createTippy");
function vi(r, e) {
  e === void 0 && (e = {});
  var t = xr.plugins.concat(e.plugins || []);
  Kh();
  var i = Object.assign({}, e, { plugins: t }), l = Vh(r);
  if (false)
    var c, d;
  var v = l.reduce(function(b, y) {
    var w = y && lv(y, i);
    return w && b.push(w), b;
  }, []);
  return ja(r) ? v[0] : v;
}
u(vi, "tippy");
vi.defaultProps = xr;
vi.setDefaultProps = iv;
vi.currentInput = Or;
var uv = Object.assign({}, io, { effect: u(function(e) {
  var t = e.state, i = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow);
}, "effect") });
var bp = u(function(e, t) {
  var i;
  t === void 0 && (t = {});
  var l = e, c = [], d = [], v, b = t.overrides, y = [], w = false;
  function _() {
    d = l.map(function(E) {
      return Bn(E.props.triggerTarget || E.reference);
    }).reduce(function(E, B) {
      return E.concat(B);
    }, []);
  }
  u(_, "setTriggerTargets");
  function C() {
    c = l.map(function(E) {
      return E.reference;
    });
  }
  u(C, "setReferences");
  function A(E) {
    l.forEach(function(B) {
      E ? B.enable() : B.disable();
    });
  }
  u(A, "enableInstances");
  function k(E) {
    return l.map(function(B) {
      var R = B.setProps;
      return B.setProps = function(X) {
        R(X), B.reference === v && E.setProps(X);
      }, function() {
        B.setProps = R;
      };
    });
  }
  u(k, "interceptSetProps");
  function S(E, B) {
    var R = d.indexOf(B);
    if (B !== v) {
      v = B;
      var X = (b || []).concat("content").reduce(function(V, H) {
        return V[H] = l[R].props[H], V;
      }, {});
      E.setProps(Object.assign({}, X, { getReferenceClientRect: typeof X.getReferenceClientRect == "function" ? X.getReferenceClientRect : function() {
        var V;
        return (V = c[R]) == null ? void 0 : V.getBoundingClientRect();
      } }));
    }
  }
  u(S, "prepareInstance"), A(false), C(), _();
  var M = { fn: u(function() {
    return { onDestroy: u(function() {
      A(true);
    }, "onDestroy"), onHidden: u(function() {
      v = null;
    }, "onHidden"), onClickOutside: u(function(R) {
      R.props.showOnCreate && !w && (w = true, v = null);
    }, "onClickOutside"), onShow: u(function(R) {
      R.props.showOnCreate && !w && (w = true, S(R, c[0]));
    }, "onShow"), onTrigger: u(function(R, X) {
      S(R, X.currentTarget);
    }, "onTrigger") };
  }, "fn") }, P = vi(hi(), Object.assign({}, jh(t, ["overrides"]), { plugins: [M].concat(t.plugins || []), triggerTarget: d, popperOptions: Object.assign({}, t.popperOptions, { modifiers: [].concat(((i = t.popperOptions) == null ? void 0 : i.modifiers) || [], [uv]) }) })), I = P.show;
  P.show = function(E) {
    if (I(), !v && E == null)
      return S(P, c[0]);
    if (!(v && E == null)) {
      if (typeof E == "number")
        return c[E] && S(P, c[E]);
      if (l.indexOf(E) >= 0) {
        var B = E.reference;
        return S(P, B);
      }
      if (c.indexOf(E) >= 0)
        return S(P, E);
    }
  }, P.showNext = function() {
    var E = c[0];
    if (!v)
      return P.show(0);
    var B = c.indexOf(v);
    P.show(c[B + 1] || E);
  }, P.showPrevious = function() {
    var E = c[c.length - 1];
    if (!v)
      return P.show(E);
    var B = c.indexOf(v), R = c[B - 1] || E;
    P.show(R);
  };
  var q = P.setProps;
  return P.setProps = function(E) {
    b = E.overrides || b, q(E);
  }, P.setInstances = function(E) {
    A(true), y.forEach(function(B) {
      return B();
    }), l = E, A(false), C(), _(), y = k(P), P.setProps({ triggerTarget: d });
  }, y = k(P), P;
}, "createSingleton");
vi.setDefaultProps({ render: gp });
var zt = vi;
var xl = u((r) => typeof r == "object" && r !== null && typeof r.initHelp == "function", "isHelpable");
function _e(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = gt({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let i = this.helpContent;
        i !== null && (this.popup = zt(this, { allowHTML: true, animation: false, arrow: Br + Br, delay: 0, placement: "auto", theme: "qni", onShow(l) {
          l.setContent(i);
        } }), this.addEventListener("mouseenter", this.showHelp));
      }, show: () => {
        this.popup.show();
      }, enable: () => {
        this.popup.enable(), this.help = true;
      }, disable: () => {
        var i;
        (i = this.popup) == null || i.disable(), this.help = false;
      }, destroy: () => {
        var i;
        (i = this.popup) == null || i.destroy();
      } } });
      this.helpableService = at(this.helpableMachine).onTransition((i) => {
        this.debugHelpable && console.log(`helpable: ${Qe(i.value)}`);
      }).start();
    }
    initHelp() {
      this.helpableService.send("INIT");
    }
    showHelp() {
      this.helpableService.send("SHOW");
    }
    disableHelp() {
      this.helpableService.send("DISABLE");
    }
    get helpContent() {
      let i;
      this.helpId !== "" ? i = this.helpId : i = `${this.tagName.toLowerCase()}-help`;
      let l = document.getElementById(i);
      return l === null ? null : l.content.cloneNode(true);
    }
  }
  return u(e, "HelpableMixinClass"), D([G], e.prototype, "help", 2), D([G], e.prototype, "helpId", 2), D([G], e.prototype, "debugHelpable", 2), e;
}
u(_e, "HelpableMixin");
function we(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.hoverable = false;
    }
  }
  return u(e, "HoverableMixinClass"), D([G], e.prototype, "hoverable", 2), e;
}
u(we, "HoverableMixin");
function* Ba(r) {
  let e = "", t = 0, i = false;
  for (let l = 0; l < r.length; l += 1)
    r[l] === "{" && r[l + 1] === "{" && r[l - 1] !== "\\" && !i ? (i = true, e && (yield { type: "string", start: t, end: l, value: e }), e = "{{", t = l, l += 2) : r[l] === "}" && r[l + 1] === "}" && r[l - 1] !== "\\" && i && (i = false, yield { type: "part", start: t, end: l + 2, value: e.slice(2).trim() }, e = "", l += 2, t = l), e += r[l] || "";
  e && (yield { type: "string", start: t, end: r.length, value: e });
}
u(Ba, "parse");
var yp = function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
};
var on = function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
};
var Mr;
var Ha;
var Hr = class {
  constructor(e, t) {
    this.expression = t, Mr.set(this, void 0), Ha.set(this, ""), yp(this, Mr, e, "f"), on(this, Mr, "f").updateParent("");
  }
  get attributeName() {
    return on(this, Mr, "f").attr.name;
  }
  get attributeNamespace() {
    return on(this, Mr, "f").attr.namespaceURI;
  }
  get value() {
    return on(this, Ha, "f");
  }
  set value(e) {
    yp(this, Ha, e || "", "f"), on(this, Mr, "f").updateParent(e);
  }
  get element() {
    return on(this, Mr, "f").element;
  }
  get booleanValue() {
    return on(this, Mr, "f").booleanValue;
  }
  set booleanValue(e) {
    on(this, Mr, "f").booleanValue = e;
  }
};
u(Hr, "AttributeTemplatePart");
Mr = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakMap();
var co = class {
  constructor(e, t) {
    this.element = e, this.attr = t, this.partList = [];
  }
  get booleanValue() {
    return this.element.hasAttributeNS(this.attr.namespaceURI, this.attr.name);
  }
  set booleanValue(e) {
    if (this.partList.length !== 1)
      throw new DOMException("Operation not supported", "NotSupportedError");
    this.partList[0].value = e ? "" : null;
  }
  append(e) {
    this.partList.push(e);
  }
  updateParent(e) {
    if (this.partList.length === 1 && e === null)
      this.element.removeAttributeNS(this.attr.namespaceURI, this.attr.name);
    else {
      let t = this.partList.map((i) => typeof i == "string" ? i : i.value).join("");
      this.element.setAttributeNS(this.attr.namespaceURI, this.attr.name, t);
    }
  }
};
u(co, "AttributeValueSetter");
var xp = function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
};
var mi = function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
};
var _r;
var Jt = class {
  constructor(e, t) {
    this.expression = t, _r.set(this, void 0), xp(this, _r, [e], "f"), e.textContent = "";
  }
  get value() {
    return mi(this, _r, "f").map((e) => e.textContent).join("");
  }
  set value(e) {
    this.replace(e);
  }
  get previousSibling() {
    return mi(this, _r, "f")[0].previousSibling;
  }
  get nextSibling() {
    return mi(this, _r, "f")[mi(this, _r, "f").length - 1].nextSibling;
  }
  replace(...e) {
    let t = e.map((i) => typeof i == "string" ? new Text(i) : i);
    t.length || t.push(new Text("")), mi(this, _r, "f")[0].before(...t);
    for (let i of mi(this, _r, "f"))
      i.remove();
    xp(this, _r, t, "f");
  }
};
u(Jt, "NodeTemplatePart");
_r = /* @__PURE__ */ new WeakMap();
function po(r) {
  return { createCallback(e, t, i) {
    this.processCallback(e, t, i);
  }, processCallback(e, t, i) {
    var l;
    if (!(typeof i != "object" || !i)) {
      for (let c of t)
        if (c.expression in i) {
          let d = (l = i[c.expression]) !== null && l !== void 0 ? l : "";
          r(c, d);
        }
    }
  } };
}
u(po, "createProcessor");
function fo(r, e) {
  r.value = String(e);
}
u(fo, "processPropertyIdentity");
function $a(r, e) {
  return typeof e == "boolean" && r instanceof Hr && typeof r.element[r.attributeName] == "boolean" ? (r.booleanValue = e, true) : false;
}
u($a, "processBooleanAttribute");
var wl = po(fo);
var cv = po((r, e) => {
  $a(r, e) || fo(r, e);
});
var wp = function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
};
var Fa = function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
};
var ho;
var vo;
function* pv(r) {
  let e = r.ownerDocument.createTreeWalker(r, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), t;
  for (; t = e.nextNode(); )
    if (t instanceof Element && t.hasAttributes())
      for (let i = 0; i < t.attributes.length; i += 1) {
        let l = t.attributes.item(i);
        if (l && l.value.includes("{{")) {
          let c = new co(t, l);
          for (let d of Ba(l.value))
            if (d.type === "string")
              c.append(d.value);
            else {
              let v = new Hr(c, d.value);
              c.append(v), yield v;
            }
        }
      }
    else if (t instanceof Text && t.textContent && t.textContent.includes("{{"))
      for (let i of Ba(t.textContent)) {
        i.end < t.textContent.length && t.splitText(i.end), i.type === "part" && (yield new Jt(t, i.value));
        break;
      }
}
u(pv, "collectParts");
var an = class extends DocumentFragment {
  constructor(e, t, i = wl) {
    var l, c;
    super();
    ho.set(this, void 0), vo.set(this, void 0), Object.getPrototypeOf(this) !== an.prototype && Object.setPrototypeOf(this, an.prototype), this.appendChild(e.content.cloneNode(true)), wp(this, vo, Array.from(pv(this)), "f"), wp(this, ho, i, "f"), (c = (l = Fa(this, ho, "f")).createCallback) === null || c === void 0 || c.call(l, this, Fa(this, vo, "f"), t);
  }
  update(e) {
    Fa(this, ho, "f").processCallback(this, Fa(this, vo, "f"), e);
  }
};
u(an, "TemplateInstance");
ho = /* @__PURE__ */ new WeakMap(), vo = /* @__PURE__ */ new WeakMap();
var Ep = /* @__PURE__ */ new WeakSet();
function Sp(r) {
  return Ep.has(r);
}
u(Sp, "isDirective");
function Tp(r, e) {
  return Sp(e) ? (e(r), true) : false;
}
u(Tp, "processDirective");
function mo(r) {
  return (...e) => {
    let t = r(...e);
    return Ep.add(t), t;
  };
}
u(mo, "directive");
var go = /* @__PURE__ */ new WeakMap();
var bo = class {
  constructor(e, t) {
    this.element = e, this.type = t, this.element.addEventListener(this.type, this), go.get(this.element).set(this.type, this);
  }
  set(e) {
    typeof e == "function" ? this.handleEvent = e.bind(this.element) : typeof e == "object" && typeof e.handleEvent == "function" ? this.handleEvent = e.handleEvent.bind(e) : (this.element.removeEventListener(this.type, this), go.get(this.element).delete(this.type));
  }
  static for(e) {
    go.has(e.element) || go.set(e.element, /* @__PURE__ */ new Map());
    let t = e.attributeName.slice(2), i = go.get(e.element);
    return i.has(t) ? i.get(t) : new bo(e.element, t);
  }
};
u(bo, "EventHandler");
function Cp(r, e) {
  return r instanceof Hr && r.attributeName.startsWith("on") ? (bo.for(r).set(e), r.element.removeAttributeNS(r.attributeNamespace, r.attributeName), true) : false;
}
u(Cp, "processEvent");
function dv(r, e) {
  return e instanceof gi && r instanceof Jt ? (e.renderInto(r), true) : false;
}
u(dv, "processSubTemplate");
function fv(r, e) {
  return e instanceof DocumentFragment && r instanceof Jt ? (e.childNodes.length && r.replace(...e.childNodes), true) : false;
}
u(fv, "processDocumentFragment");
function hv(r) {
  return typeof r == "object" && Symbol.iterator in r;
}
u(hv, "isIterable");
function vv(r, e) {
  if (!hv(e))
    return false;
  if (r instanceof Jt) {
    let t = [];
    for (let i of e)
      if (i instanceof gi) {
        let l = document.createDocumentFragment();
        i.renderInto(l), t.push(...l.childNodes);
      } else
        i instanceof DocumentFragment ? t.push(...i.childNodes) : t.push(String(i));
    return t.length && r.replace(...t), true;
  } else
    return r.value = Array.from(e).join(" "), true;
}
u(vv, "processIterable");
function Wa(r, e) {
  Tp(r, e) || $a(r, e) || Cp(r, e) || dv(r, e) || fv(r, e) || vv(r, e) || fo(r, e);
}
u(Wa, "processPart");
var El = /* @__PURE__ */ new WeakMap();
var Op = /* @__PURE__ */ new WeakMap();
var Mp = /* @__PURE__ */ new WeakMap();
var gi = class {
  constructor(e, t, i) {
    this.strings = e, this.values = t, this.processor = i;
  }
  get template() {
    if (El.has(this.strings))
      return El.get(this.strings);
    {
      let e = document.createElement("template"), t = this.strings.length - 1;
      return e.innerHTML = this.strings.reduce((i, l, c) => i + l + (c < t ? `{{ ${c} }}` : ""), ""), El.set(this.strings, e), e;
    }
  }
  renderInto(e) {
    let t = this.template;
    if (Op.get(e) !== t) {
      Op.set(e, t);
      let i = new an(t, this.values, this.processor);
      Mp.set(e, i), e instanceof Jt ? e.replace(...i.children) : e.appendChild(i);
      return;
    }
    Mp.get(e).update(this.values);
  }
};
u(gi, "TemplateResult");
var mv = po(Wa);
function Z(r, ...e) {
  return new gi(r, e, mv);
}
u(Z, "html");
function ee(r, e) {
  r.renderInto(e);
}
u(ee, "render");
var Sl = /* @__PURE__ */ new WeakMap();
var gv = mo((...r) => (e) => {
  Sl.has(e) || Sl.set(e, { i: r.length });
  let t = Sl.get(e);
  for (let i = 0; i < r.length; i += 1)
    r[i] instanceof Promise ? Promise.resolve(r[i]).then((l) => {
      i < t.i && (t.i = i, Wa(e, l));
    }) : i <= t.i && (t.i = i, Wa(e, r[i]));
});
var bv = mo((r) => (e) => {
  if (!(e instanceof Jt))
    return;
  let t = document.createElement("template");
  t.innerHTML = r;
  let i = document.importNode(t.content, true);
  e.replace(...i.childNodes);
});
function ke(r) {
  class e extends r {
    iconHtml(i) {
      return Z`${this.iconStyle}
        <div id="icon" part="icon">${this.iconSvg(i)}</div>`;
    }
    iconSvg(i) {
      return Z([i]);
    }
    get iconStyle() {
      return Z`<style>
        #icon {
          position: relative;
          width: 100%;
          height: 100%;
        }

        #icon > svg {
          position: absolute;
          bottom: 0px;
          left: 0px;
          right: 0px;
          top: 0px;
          height: 100%;
          width: 100%;
        }
      </style>`;
    }
  }
  return u(e, "IconableMixinClass"), e;
}
u(ke, "IconableMixin");
var $r = u((r) => typeof r == "object" && r !== null && typeof r.if == "string", "isIfable");
function Je(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  return u(e, "IfableMixinClass"), D([G], e.prototype, "if", 2), e;
}
u(Je, "IfableMixin");
var _p = u((r) => typeof r == "object" && r !== null && typeof r.initMenu == "function", "isMenuable");
function Ae(r) {
  class e extends r {
    initMenu() {
      this._tippy || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = zt(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
        var l, c, d, v;
        (l = this.ifTooltip) == null || l.hide(), (c = this.angleTooltip) == null || c.hide(), (d = this.flagTooltip) == null || d.hide(), (v = this.deleteTooltip) == null || v.hide();
      } }));
    }
    showMenu() {
      this.menu.show();
    }
    hideMenu() {
      this.menu.hide();
    }
    destroyMenu() {
      let i = this._tippy;
      i == null || i.destroy();
    }
    dispatchShowMenuEvent() {
      this.dispatchEvent(new Event("operation-show-menu", { bubbles: true }));
    }
    get menuContent() {
      let i = document.getElementById("operation-menu");
      if (i === null || i.content === void 0)
        return null;
      let l = i.content.cloneNode(true), c = document.createDocumentFragment();
      return ee(Z`${l}`, c), c;
    }
    initMenuItems(i) {
      if ($r(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-if]");
        ie.notNull(c), c.disabled = false, this.ifTooltip = c._tippy, this.ifTooltip === void 0 && (this.ifTooltip = zt(c, { animation: false, content: "Set `if' Conditional" }), c.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (xn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-angle]");
        ie.notNull(c), c.disabled = false, this.angleTooltip = c._tippy, this.angleTooltip === void 0 && (this.angleTooltip = zt(c, { animation: false, content: "Change Angle" }), c.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (In(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-flag]");
        ie.notNull(c), c.disabled = false, this.flagTooltip = c._tippy, this.flagTooltip === void 0 && (this.flagTooltip = zt(c, { animation: false, content: "Set Condifitonal Flag" }), c.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let l = i.popper.querySelector("[data-operation-menu-delete]");
      ie.notNull(l), this.deleteTooltip = l._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = zt(l, { animation: false, content: "Delete" })), l.addEventListener("mousedown", this.destroyMenu.bind(this)), l.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
    }
    showIfInspector() {
      this.hideMenu(), this.dispatchEvent(new Event("operation-menu-if", { bubbles: true }));
    }
    showAngleInspector() {
      this.hideMenu(), this.dispatchEvent(new Event("operation-menu-angle", { bubbles: true }));
    }
    showFlagInspector() {
      this.hideMenu(), this.dispatchEvent(new Event("operation-menu-flag", { bubbles: true }));
    }
    dispatchOperationDeleteEvent() {
      this.dispatchEvent(new Event("operation-delete", { bubbles: true }));
    }
  }
  return u(e, "MenuableMixinClass"), e;
}
u(Ae, "MenuableMixin");
var nt = class extends Ae(_e(Me(Oe(we(HTMLElement))))) {
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  get operationType() {
    return Ss;
  }
  showPopup() {
    this.showInspector();
  }
  showInspector() {
    if (ie.notNull(this.parentElement), this.parentElement.tagName === "PALETTE-DROPZONE")
      return;
    let e = this._tippy;
    e && e.destroy();
    let t = this.blochInspectorPopupContent();
    zt(this, { allowHTML: true, animation: false, arrow: Br + Br, delay: 0, placement: "auto", theme: "qni", onShow(l) {
      l.setContent(t);
    } }).show();
  }
  blochInspectorPopupContent() {
    let e = document.createDocumentFragment();
    return ee(Z`
        <div class="bloch-display__inspector">
          <header>
            <h1>Local State</h1>
          </header>

          <section>
            r:
            <span class="bloch-display__inspector-d">${this.forceSigned(this.d)}</span>, ϕ:
            <span class="bloch-display__inspector-phi">${this.forceSigned(this.phi, 2)}</span>, θ:
            <span class="bloch-display__inspector-theta">${this.forceSigned(this.theta, 2)}</span>
          </section>
          <section>
            x:
            <span class="bloch-display__inspector-x">${this.forceSigned(this.x)}</span>, y:
            <span class="bloch-display__inspector-y">${this.forceSigned(this.y)}</span>, z:
            <span class="bloch-display__inspector-z">${this.forceSigned(this.z)}</span>
          </section>
        </div>
      `, e), e;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.updateBlochVector(), this.addEventListener("mouseenter", this.showInspector));
  }
  disconnectedCallback() {
    let e = this._tippy;
    e == null || e.destroy();
  }
  attributeChangedCallback(e, t, i) {
    !this.body || t !== i && i !== null && (e === "data-x" && (this.x = parseFloat(i)), e === "data-y" && (this.y = parseFloat(i)), e === "data-z" && (this.z = parseFloat(i)), this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian(), this.updateBlochVector());
  }
  update() {
    this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian();
    let e = u((i) => Z`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${i}deg)"></div>`, "vectorLineRect"), t = u((i, l) => Z`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${l}(${i}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`, "vectorEndCircle");
    ee(Z`<style>
          #background {
            border-radius: 9999px;
            background-color: #ffffff;
          }

          #sphere-border {
            box-sizing: border-box;
            border-style: solid;
            border-radius: 9999px;
          }

          #sphere-lines {
            width: 100%;
            height: 100%;
            stroke: currentColor;
          }

          #perspective {
            position: absolute;
            top: -1px;
            right: -1px;
            bottom: -1px;
            left: -1px;
            perspective-origin: top right;
          }

          #vector {
            position: relative;
            width: 100%;
            height: 100%;
            transform-origin: center;
            transform-style: preserve-3d;
          }

          #vector-line {
            position: absolute;
            width: 100%;
            height: 0;
            bottom: 50%;
            transform-style: preserve-3d;
          }

          .vector-line-rect {
            position: absolute;
            left: 0px;
            right: 0px;
            margin-left: auto;
            margin-right: auto;
            transform-origin: bottom;
            height: 100%;
            width: 2px;
            transform-style: preserve-3d;
          }

          #vector-end {
            position: absolute;
            width: 100%;
            transform-style: preserve-3d;
          }

          .vector-end-circle {
            position: absolute;
            left: 0px;
            right: 0px;
            margin-left: auto;
            margin-right: auto;
            border-radius: 9999px;
          }

          .absolute {
            position: absolute;
          }

          .inset-0 {
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
          }
        </style>

        <div part="icon" data-target="bloch-display.body" data-d="${this.d}">
          <div id="background" class="absolute inset-0"></div>
          <div id="sphere-border" part="sphere-border" class="absolute inset-0">
            <svg
              id="sphere-lines"
              part="sphere-lines"
              class="absolute inset-0"
              viewBox="0 0 48 48"
              fill="none"
              stroke-width="1"
            >
              <line x1="0%" y1="50%" x2="100%" y2="50%" />
              <line x1="50%" y1="0%" x2="50%" y2="100%" />
              <line x1="35%" y1="65%" x2="65%" y2="35%" />
              <ellipse cx="50%" cy="50%" rx="18%" ry="50%" />
              <ellipse cx="50%" cy="50%" rx="50%" ry="18%" />
            </svg>
            <div id="perspective" part="perspective">
              <div id="vector" data-target="bloch-display.vector">
                <div id="vector-line" data-target="bloch-display.vectorLine">
                  ${e(0)} ${e(20)} ${e(40)} ${e(60)}
                  ${e(80)} ${e(100)} ${e(120)} ${e(140)}
                  ${e(160)}
                </div>

                <div id="vector-end" data-target="bloch-display.vectorEnd">
                  ${t(0, "Y")} ${t(20, "Y")} ${t(40, "Y")}
                  ${t(60, "Y")} ${t(80, "Y")} ${t(100, "Y")}
                  ${t(120, "Y")} ${t(140, "Y")} ${t(160, "Y")}
                  ${t(90, "X")}
                </div>
              </div>
            </div>
          </div>
        </div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Ss}"`;
  }
  updateBlochVector() {
    let e = this.vectorEndCircles[0].offsetWidth;
    this.vectorLine.style.height = `calc(${100 * this.d / 2}% - ${e / 2}px)`, this.vectorEnd.style.bottom = `calc(50% + ${100 * this.d / 2}% + ${e / 2}px)`, this.d !== 0 && (this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`);
    let t = this._tippy;
    t == null || t.setContent(this.blochInspectorPopupContent());
  }
  get d() {
    let e = this.getAttribute("data-d");
    return ie.notNull(e), parseFloat(e);
  }
  set d(e) {
    this.setAttribute("data-d", e.toString());
  }
  vectorLength() {
    return parseFloat(Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z).toFixed(4));
  }
  set phi(e) {
    this.setAttribute("data-phi", e.toString());
  }
  get phi() {
    let e = this.getAttribute("data-phi");
    return ie.notNull(e), parseFloat(e);
  }
  phiRadian() {
    return Math.atan2(this.y, this.x) * 180 / Math.PI;
  }
  set theta(e) {
    this.setAttribute("data-theta", e.toString());
  }
  get theta() {
    let e = this.getAttribute("data-theta");
    return ie.notNull(e), parseFloat(e);
  }
  thetaRadian() {
    let e = Math.max(0, Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x)));
    return 180 * e / Math.PI;
  }
  forceSigned(e, t = 4) {
    return (e >= 0 ? "+" : "") + e.toFixed(t);
  }
};
u(nt, "BlochDisplayElement"), D([ze], nt.prototype, "body", 2), D([ze], nt.prototype, "vectorLine", 2), D([ze], nt.prototype, "vectorEnd", 2), D([ze], nt.prototype, "vector", 2), D([Bt], nt.prototype, "vectorEndCircles", 2), D([G], nt.prototype, "x", 2), D([G], nt.prototype, "y", 2), D([G], nt.prototype, "z", 2);
re(nt);
var Ap = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var $t = class extends Ae(_e(Me(Be(ke(Oe(we(HTMLElement))))))) {
  get operationType() {
    return Es;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(Ap)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Es}"`;
  }
};
u($t, "ControlGateElement");
re($t);
var Pp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var Kt = class extends Ae(_e(Je($e(Me(Be(ke(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return ta;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(Pp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ta}<${this.if}"` : `"${ta}"`;
  }
};
u(Kt, "HGateElement");
re(Kt);
var Ip = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 35C8 30.7565 9.68571 26.6869 12.6863 23.6863C15.6869 20.6857 19.7565 19 24 19C28.2435 19 32.3131 20.6857 35.3137 23.6863C38.3143 26.6869 40 30.7565 40 35" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 33L35 15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 34.5C25.3284 34.5 26 33.8284 26 33C26 32.1716 25.3284 31.5 24.5 31.5C23.6716 31.5 23 32.1716 23 33C23 33.8284 23.6716 34.5 24.5 34.5Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Qt = class extends Ae(_e(kc(Me(ke(Oe(we(HTMLElement))))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return pa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">
        ${this.iconHtml(Ip)}
        <div id="value" part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${pa}"` : `"${pa}>${this.flag}"`;
  }
};
u(Qt, "MeasurementGateElement"), D([G], Qt.prototype, "value", 2);
re(Qt);
var zp = `<svg
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
>
  <path d="M17 24A7 7 0 1 0 31 24A7 7 0 1 0 17 24M19 34L29 13" />
</svg>
`;
var er = class extends Ae(_e(Je($e(en(Me(Be(ke(Oe(we(HTMLElement)))))))))) {
  get operationType() {
    return oa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(zp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${oa}"` : `"${oa}(${this.angle.replace("/", "_")})"`;
  }
};
u(er, "PhaseGateElement");
re(er);
var Dp = `<svg
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 24L13 24L14 36L17 36L18 12L38 12" />
  <path d="M24 32L34 18M34 32L24 18" />
</svg>
`;
var tr = class extends Ae(_e(Je($e(Me(Be(ke(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return sa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(Dp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${sa}<${this.if}"` : `"${sa}"`;
  }
};
u(tr, "RnotGateElement");
re(tr);
var kp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var rr = class extends Ae(_e(Je($e(en(Me(Be(ke(Oe(we(HTMLElement)))))))))) {
  get operationType() {
    return la;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(kp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${la}"` : `"${la}(${this.angle.replace("/", "_")})"`;
  }
};
u(rr, "RxGateElement");
re(rr);
var Rp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var nr = class extends Ae(_e(Je($e(en(Me(Be(ke(Oe(we(HTMLElement)))))))))) {
  get operationType() {
    return ua;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(Rp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ua}"` : `"${ua}(${this.angle.replace("/", "_")})"`;
  }
};
u(nr, "RyGateElement");
re(nr);
var Np = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var ir = class extends Ae(_e(Je($e(en(Me(Be(ke(Oe(we(HTMLElement)))))))))) {
  get operationType() {
    return ca;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(Np)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ca}"` : `"${ca}(${this.angle.replace("/", "_")})"`;
  }
};
u(ir, "RzGateElement");
re(ir);
var Gp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var or = class extends Ae(_e($e(Me(Be(ke(Oe(we(HTMLElement)))))))) {
  get operationType() {
    return ws;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(Gp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${ws}"`;
  }
};
u(or, "SwapGateElement");
re(or);
var Lp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var ar = class extends Ae(_e(Je($e(Me(Be(ke(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return aa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(Lp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${aa}<${this.if}"` : `"${aa}"`;
  }
};
u(ar, "TGateElement");
re(ar);
var qp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 10V40M34 10L40 24L34 40" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Ft = class extends Ae(_e(Me(ke(Oe(we(HTMLElement)))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return $u;
      case "1":
        return Fu;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">
        ${this.iconHtml(qp)}
        <div part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
};
u(Ft, "WriteGateElement"), D([G], Ft.prototype, "value", 2);
re(Ft);
var jp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var sr = class extends Ae(_e(Je($e(Me(Be(ke(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return ra;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(jp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ra}<${this.if}"` : `"${ra}"`;
  }
};
u(sr, "XGateElement");
re(sr);
var Bp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var lr = class extends Ae(_e(Je($e(Me(Be(ke(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return na;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(Bp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${na}<${this.if}"` : `"${na}"`;
  }
};
u(lr, "YGateElement");
re(lr);
var Hp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var ur = class extends Ae(_e(Je($e(Me(Be(ke(Oe(we(HTMLElement))))))))) {
  get operationType() {
    return ia;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Z`<div part="body">${this.iconHtml(Hp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ia}<${this.if}"` : `"${ia}"`;
  }
};
u(ur, "ZGateElement");
re(ur);
var ut = u((r) => r instanceof Kt || r instanceof sr || r instanceof lr || r instanceof ur || r instanceof er || r instanceof ar || r instanceof tr || r instanceof rr || r instanceof nr || r instanceof ir || r instanceof or || r instanceof $t || r instanceof nt || r instanceof Ft || r instanceof Qt, "isOperation");
var $p = u((r) => r != null && r instanceof Kt, "isHGateElement");
var Fp = u((r) => r != null && r instanceof sr, "isXGateElement");
var Wp = u((r) => r != null && r instanceof lr, "isYGateElement");
var Up = u((r) => r != null && r instanceof ur, "isZGateElement");
var yo = u((r) => r != null && r instanceof er, "isPhaseGateElement");
var Vp = u((r) => r != null && r instanceof ar, "isTGateElement");
var Xp = u((r) => r != null && r instanceof tr, "isRnotGateElement");
var Ua = u((r) => r != null && r instanceof rr, "isRxGateElement");
var Va = u((r) => r != null && r instanceof nr, "isRyGateElement");
var Xa = u((r) => r != null && r instanceof ir, "isRzGateElement");
var Yp = u((r) => r != null && r instanceof or, "isSwapGateElement");
var Tl = u((r) => r != null && r instanceof $t, "isControlGateElement");
var Zp = u((r) => r != null && r instanceof nt, "isBlochDisplayElement");
var ET = u((r) => r != null && r instanceof Ft, "isWriteGateElement");
var Jp = u((r) => r != null && r instanceof Qt, "isMeasurementGateElement");
function Kp(r) {
  return /^-?\d+$/.test(r);
}
u(Kp, "isNumeric");
var Cl = class extends HTMLElement {
  get isInspectorShown() {
    return this.popup.state.isVisible;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initPopup(), this.addEventListener("mousedown", this.showPopup), document.addEventListener("click", this.maybeHidePopup.bind(this)));
  }
  update() {
    ee(Z`<slot></slot>`, this.shadowRoot);
  }
  showInspector(e) {
    this.showPopup(), this.inspector.operation = e;
  }
  showIfInspector(e) {
    this.showPopup(), this.inspector.operation = e, window.setTimeout(() => {
      this.inspector.ifInput.focus();
    }, 0);
  }
  showAngleInspector(e) {
    this.showPopup(), this.inspector.operation = e, window.setTimeout(() => {
      this.inspector.angleInput.focus();
    }, 0);
  }
  showFlagInspector(e) {
    this.showPopup(), this.inspector.operation = e, window.setTimeout(() => {
      this.inspector.flagInput.focus();
    }, 0);
  }
  get inspector() {
    let e = this.popup.popper.querySelector("operation-inspector");
    return ie.notNull(e), e;
  }
  initPopup() {
    this.popup = zt(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
  }
  showPopup() {
    this.popup.show(), this.inspector.disableAllPanes();
  }
  maybeHidePopup(e) {
    let t = e.target;
    !this.popup.popper.contains(t) && !this.popup.reference.contains(t) && !ut(t) && this.popup.hide();
  }
  get popupContent() {
    let e = document.querySelector("#operation-inspector-template");
    ie.notNull(e);
    let t = e.content.cloneNode(true), i = document.createDocumentFragment();
    return ee(Z`${t}`, i), i;
  }
};
u(Cl, "InspectorButtonElement");
re(Cl);
var xo = Jo(Aa(), 1);
var Ol = u((r) => r !== null && r instanceof Fr, "isAngleSliderElement");
var Fr = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.angle = "";
    this.radian = 0;
    this.denominator = 0;
    this.disabled = false;
    this.debug = false;
    this.snapAngles = {};
    this.angleSliderMachine = gt({ id: "angle-slider", initial: "idle", states: { idle: { on: { START_MOVE: { target: "moving" }, SET_ANGLE: { target: "idle", actions: ["setDenominatorByAngle", "updateSnapAngles", "setRadianInAngle", "updateHandlePosition", "dispatchUpdateEvent"] }, SET_DENOMINATOR: { target: "idle", actions: ["validateDenominator", "updateSnapAngles", "setAngleInRadian"] } } }, moving: { on: { SET_ANGLE: { target: "moving", actions: ["dispatchChangeEvent"] }, END_MOVE: { target: "idle", actions: ["dispatchUpdateEvent"] } } } } }, { actions: { validateDenominator: () => {
      if (!Number.isInteger(this.denominator) || this.denominator <= 0)
        throw new Tt("Bad denominator", this.denominator);
    }, setDenominatorByAngle: (e, t) => {
      t.type === "SET_ANGLE" && (this.denominator = ji(this.angle));
    }, setAngleInRadian: (e, t) => {
      if (t.type !== "SET_DENOMINATOR")
        return;
      let [, i] = this.findSnapAngle(this.radian);
      this.angle = i;
    }, setRadianInAngle: (e, t) => {
      if (t.type !== "SET_ANGLE")
        return;
      let [i] = this.findSnapAngle(Lu(this.angle));
      this.radian = i;
    }, updateSnapAngles: () => {
      this.updateSnapAngles();
    }, updateHandlePosition: () => {
      this.left = (this.radian + 2 * Math.PI) / (4 * Math.PI);
    }, dispatchChangeEvent: () => {
      this.dispatchEvent(new Event("angle-slider-change", { bubbles: true }));
    }, dispatchUpdateEvent: () => {
      this.dispatchEvent(new Event("angle-slider-update", { bubbles: true }));
    } } });
    this.angleSliderService = at(this.angleSliderMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${Qe(e.value)}`);
    }).start();
  }
  attributeChangedCallback(e, t, i) {
    t !== i && i !== null && (e === "data-angle" && i !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), e === "data-denominator" && this.shadowRoot !== null && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, xo.default)(this).unset();
  }
  update() {
    ee(Z`<style>
        :host {
          display: inline-block;
          position: relative;
          touch-action: none;
        }

        :host::before {
          content: '';
          display: block;
          position: relative;
          top: 0px;
        }
      </style>`, this.shadowRoot);
  }
  initInteraction() {
    (0, xo.default)(this).draggable({ origin: "self", modifiers: [xo.default.modifiers.restrict({ restriction: "self" })], listeners: { start: this.startMove.bind(this), move: this.move.bind(this), end: this.endMove.bind(this) } });
  }
  startMove() {
    this.angleSliderService.send({ type: "START_MOVE" });
  }
  move(e) {
    let t = xo.default.getElementRect(e.target).width, i = e.pageX / t;
    this.left = i;
    let l = this.proportionToRadian(i);
    this.setAttribute("data-radian", l.toString());
    let [, c] = this.findSnapAngle(l);
    this.angle !== c && (this.angle = c);
  }
  endMove() {
    this.angleSliderService.send({ type: "END_MOVE" });
  }
  updateSnapAngles() {
    if (this.denominator === 0)
      return;
    let e = -2 * this.denominator, t = 2 * this.denominator, i = new Array(t - e + 1).fill(null).map((l, c) => c + e);
    this.snapAngles = {};
    for (let l of i)
      this.denominator === 1 ? l === 0 ? this.snapAngles[0] = "0" : l === 1 ? this.snapAngles[Math.PI] = "\u03C0" : l === -1 ? this.snapAngles[-1 * Math.PI] = "-\u03C0" : this.snapAngles[l * Math.PI] = `${l}\u03C0` : l === 0 ? this.snapAngles[0] = "0" : l === 1 ? this.snapAngles[Math.PI / this.denominator] = `\u03C0/${this.denominator}` : l === -1 ? this.snapAngles[-1 * Math.PI / this.denominator] = `-\u03C0/${this.denominator}` : this.snapAngles[l * Math.PI / this.denominator] = `${l}\u03C0/${this.denominator}`;
  }
  findSnapAngle(e) {
    let t = null, i = null, l = null;
    for (let c in this.snapAngles) {
      let d = Math.abs(parseFloat(c) - e);
      (t === null || d < t) && (t = d, i = parseFloat(c), l = this.snapAngles[c]);
    }
    return ie.notNull(i), ie.notNull(l), [i, l];
  }
  proportionToRadian(e) {
    return (e - 0.5) * Math.PI * 4;
  }
  set left(e) {
    this.style.paddingLeft = `${e * 100}%`;
  }
};
u(Fr, "AngleSliderElement"), D([G], Fr.prototype, "angle", 2), D([G], Fr.prototype, "radian", 2), D([G], Fr.prototype, "denominator", 2), D([G], Fr.prototype, "disabled", 2), D([G], Fr.prototype, "debug", 2);
re(Fr);
var Ot = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.conditionalGatePaneDisabled = true;
    this.anglePaneDisabled = true;
    this.conditionalFlagPaneDisabled = true;
  }
  get if() {
    return this.ifInput.value;
  }
  get angle() {
    return this.angleInput.value;
  }
  get reducedAngle() {
    return Hu(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(e) {
    if (this.clear(), this.disableAllPanes(), $r(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), xn(e)) {
      let t = ji(e.angle);
      yo(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (Ua(e) || Va(e) || Xa(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = t.toString(), this.denominatorLabel.textContent = t.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
    }
    In(e) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = e.flag);
  }
  clear() {
    this.ifInput.value = "", this.angleInput.value = "", this.angleSlider.angle = "", this.denominatorInput.value = "", this.reduceAngleFractionCheckbox.checked = false, this.flagInput.value = "";
  }
  disableAllPanes() {
    this.conditionalGatePaneDisabled = true, this.anglePaneDisabled = true, this.conditionalFlagPaneDisabled = true;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.addEventListener("angle-slider-change", this.changeAngle), this.addEventListener("angle-slider-update", this.updateAngle), this.ifInput.addEventListener("change", this.changeIf.bind(this)), this.angleInput.addEventListener("change", this.updateAngleInput.bind(this)), this.denominatorInput.addEventListener("change", this.changeDenominator.bind(this)), this.reduceAngleFractionCheckbox.addEventListener("change", this.changeReduceSetting.bind(this)), this.flagInput.addEventListener("change", this.changeFlag.bind(this)));
  }
  update() {
    ee(Z`<slot></slot>`, this.shadowRoot);
  }
  changeAngle(e) {
    let t = e.target;
    if (!Ol(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let t = e.target;
    if (!Ol(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
  backupCurrentPhi() {
    this.angleInput.setAttribute("data-original-value", this.angleInput.value);
  }
  restoreOriginalPhi() {
    let e = this.angleInput.getAttribute("data-original-value");
    ie.notNull(e), this.angleInput.value = e;
  }
  changeIf() {
    this.dispatchEvent(new Event("operation-inspector-if-change", { bubbles: true }));
  }
  updateAngleInput() {
    let e = this.angleInput.value;
    if (Bu(e)) {
      let t, i = ji(e);
      this.denominatorInput.value = i.toString(), this.denominatorLabel.textContent = i.toString(), this.backupCurrentDenominator(), qu(e, "-2\u03C0") ? (t = `-${i * 2}\u03C0/${i}`, this.angleInput.value = t) : ju(e, "2\u03C0") ? (t = `${i * 2}\u03C0/${i}`, this.angleInput.value = t) : t = e, this.backupCurrentPhi(), this.angleSlider.angle = t, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
    } else
      this.restoreOriginalPhi();
  }
  changeFlag() {
    this.dispatchEvent(new Event("operation-inspector-flag-change", { bubbles: true }));
  }
  backupCurrentDenominator() {
    this.denominatorInput.setAttribute("data-original-value", this.denominatorInput.value);
  }
  restoreOriginalDenominator() {
    let e = this.denominatorInput.getAttribute("data-original-value");
    ie.notNull(e), this.denominatorInput.value = e, this.denominatorLabel.textContent = e;
  }
  changeDenominator() {
    let e = this.denominatorInput.value;
    Kp(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
};
u(Ot, "OperationInspectorElement"), D([ze], Ot.prototype, "ifInput", 2), D([ze], Ot.prototype, "angleInputLabel", 2), D([ze], Ot.prototype, "angleInput", 2), D([ze], Ot.prototype, "angleSlider", 2), D([ze], Ot.prototype, "denominatorInput", 2), D([ze], Ot.prototype, "denominatorVariableLabel", 2), D([ze], Ot.prototype, "denominatorLabel", 2), D([ze], Ot.prototype, "reduceAngleFractionCheckbox", 2), D([ze], Ot.prototype, "flagInput", 2), D([G], Ot.prototype, "conditionalGatePaneDisabled", 2), D([G], Ot.prototype, "anglePaneDisabled", 2), D([G], Ot.prototype, "conditionalFlagPaneDisabled", 2);
re(Ot);
var cr = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.qubitCount = 1;
    this.size = "";
    this.magnitudes = "";
    this.phases = "";
    this.multiQubits = false;
    this.showKets = false;
  }
  setAmplitudes(e) {
    let t = this.qubitCircles;
    for (let [i, l] of Object.entries(e)) {
      let c = t[parseInt(i)];
      ie.notNull(c);
      let d = Er.from(l);
      c.setAttribute("data-amplitude-real", d.real.toString()), c.setAttribute("data-amplitude-imag", d.imag.toString());
      let v = d.abs();
      this.setRoundedMagnitude(c, v);
      let b = d.phase() / Math.PI * 180;
      this.setRoundedPhase(c, b);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initQubitCirclePopup(this.qubitCircles), this.hasAttribute("data-multi-qubits") && (this.startQubitCircleVisibilityObserver(), this.dispatchLoadEvent()));
  }
  dispatchLoadEvent() {
    this.dispatchEvent(new Event("circle-notation.load", { bubbles: true }));
  }
  attributeChangedCallback(e, t, i) {
    this.shadowRoot !== null && t !== i && e === "data-qubit-count" && this.dispatchVisibilityChangedEvent();
  }
  startQubitCircleVisibilityObserver() {
    let e = { root: this, threshold: [0, 0.2] }, t = u((l) => {
      for (let c of l) {
        let d = c.target;
        c.intersectionRatio >= 0.2 ? (d.setAttribute("data-targets", "circle-notation.qubitCircleGroups circle-notation.visibleQubitCircleGroups"), this.dispatchVisibilityChangedEvent()) : c.intersectionRatio === 0 && d.setAttribute("data-targets", "circle-notation.qubitCircleGroups");
      }
    }, "callback"), i = new IntersectionObserver(t, e);
    for (let l of this.qubitCircleGroups)
      i.observe(l);
  }
  dispatchVisibilityChangedEvent() {
    this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  get visibleQubitCircleKets() {
    let e = 2 ** this.qubitCount;
    return this.visibleQubitCircles.map((t) => parseInt(t.getAttribute("data-ket"))).filter((t) => t < e);
  }
  get visibleQubitCircles() {
    let e = this.visibleQubitCircleGroups.map((t) => Array.from(t.querySelectorAll(".qubit-circle")));
    return [].concat(...e);
  }
  update() {
    if (ee(Z`<style>
          @media (min-width: 768px) {
            :host([data-qubit-count='8']),
            :host([data-qubit-count='9']),
            :host([data-qubit-count='10']) {
              height: 10rem !important;
            }
          }

          .qubit-circle-group--size4 {
            display: flex;
            flex-direction: row;
          }

          .qubit-circle-group--size8 {
            display: flex;
            flex-direction: row;
          }

          :host([data-qubit-count='3']) .qubit-circle-group--size8 {
            flex-direction: column;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='3']) .qubit-circle-group--size8 {
              flex-direction: row;
            }
          }

          .qubit-circle-group--size16 {
            display: flex;
            flex-direction: row;
          }

          @media (min-width: 768px) {
            .qubit-circle-group--size16 {
              flex-direction: row;
            }
          }

          :host([data-qubit-count='4']) .qubit-circle-group--size16 {
            flex-direction: column;
          }

          :host([data-qubit-count='4']) .qubit-circle-group--size16 .qubit-circle-group--size8:last-child {
            margin-left: 0;
            margin-top: 0;
          }

          :host([data-qubit-count='5']) .qubit-circle-group--size16 {
            flex-direction: column;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle-group--size16 {
              flex-direction: row;
            }
          }

          :host([data-qubit-count='5']) .qubit-circle-group--size16 .qubit-circle-group--size8:nth-child(even) {
            margin-left: 0;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle-group--size16 .qubit-circle-group--size8:nth-child(even) {
              margin-left: 0;
            }
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='6']) .qubit-circle-group--size32 {
              display: flex;
              flex-direction: column;
            }
            :host([data-qubit-count='7']) .qubit-circle-group--size32,
            :host([data-qubit-count='8']) .qubit-circle-group--size32,
            :host([data-qubit-count='9']) .qubit-circle-group--size32,
            :host([data-qubit-count='10']) .qubit-circle-group--size32 {
              display: flex;
              flex-direction: row;
            }
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='6']) .qubit-circle-group--size64,
            :host([data-qubit-count='7']) .qubit-circle-group--size64,
            :host([data-qubit-count='8']) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }

            :host([data-qubit-count='9']) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }

            :host([data-qubit-count='10']) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }
          }

          :host([data-qubit-count='1']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='1']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='1']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='1']) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count='1']) .qubit-circle-group--size16:nth-of-type(2),
          :host([data-qubit-count='1']) .qubit-circle-group--size8:nth-of-type(2),
          :host([data-qubit-count='1']) .qubit-circle-group--size4:nth-of-type(2),
          :host([data-qubit-count='1']) .qubit-circle:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-qubit-count='2']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='2']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='2']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='2']) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count='2']) .qubit-circle-group--size16:nth-of-type(2),
          :host([data-qubit-count='2']) .qubit-circle-group--size8:nth-of-type(2),
          :host([data-qubit-count='2']) .qubit-circle-group--size4:nth-of-type(2),
          :host([data-qubit-count='2']) .qubit-circle:nth-of-type(n + 5) {
            display: none;
          }

          :host([data-qubit-count='3']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='3']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='3']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='3']) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count='3']) .qubit-circle-group--size16:nth-of-type(2),
          :host([data-qubit-count='3']) .qubit-circle-group--size8:nth-of-type(2) {
            display: none;
          }

          :host([data-qubit-count='4']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='4']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='4']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='4']) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count='4']) .qubit-circle-group--size16:nth-of-type(2) {
            display: none;
          }

          :host([data-qubit-count='5']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='5']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='5']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='5']) .qubit-circle-group--size32:nth-of-type(2) {
            display: none;
          }

          :host([data-qubit-count='6']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='6']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='6']) .qubit-circle-group--size64:nth-of-type(n + 2) {
            display: none;
          }

          :host([data-qubit-count='7']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='7']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='7']) .qubit-circle-group--size64:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-qubit-count='8']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='8']) .qubit-circle-group--size128:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-qubit-count='9']) .qubit-circle-group--size256:nth-of-type(n + 3) {
            display: none;
          }

          #body {
            display: flex;
            flex-direction: row;
          }

          :host([data-multi-qubits]) #body {
            display: inline-block;
            margin-top: auto;
            margin-bottom: auto;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }

          @media (min-width: 768px) {
            :host([data-multi-qubits]) #body {
              display: inline-block;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-top: 1.25rem;
              padding-bottom: 1.25rem;
            }
          }

          /* .qubit-circle__magnitude */

          .qubit-circle:hover > .qubit-circle__magnitude {
            border-color: var(--colors-red-600, #dc2626) !important;
          }

          .qubit-circle:hover > .qubit-circle__magnitude::after {
            background-color: var(--colors-orange-500, #f97516) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.1'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.1) scaleY(0.1) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.2'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.2) scaleY(0.2) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.3'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.3) scaleY(0.3) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.4'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.4) scaleY(0.4) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.5'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.5) scaleY(0.5) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.6'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.6) scaleY(0.6) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.7'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.7) scaleY(0.7) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.8'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.8) scaleY(0.8) !important;
          }

          .qubit-circle[data-rounded-magnitude='0.9'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.9) scaleY(0.9) !important;
          }

          .qubit-circle[data-rounded-magnitude='1'] > .qubit-circle__magnitude::after {
            transform: scaleX(1) scaleY(1) !important;
          }

          /* .qubit-circle__phase */

          .qubit-circle:hover > .qubit-circle__phase {
            border-color: var(--colors-red-600, #dc2626) !important;
          }

          .qubit-circle:not([data-rounded-magnitude]) > .qubit-circle__phase,
          .qubit-circle[data-rounded-magnitude='0'] > .qubit-circle__phase {
            transform: scaleX(0) scaleY(0) !important;
          }

          .qubit-circle[data-rounded-phase='10'] > .qubit-circle__phase {
            transform: rotate(-10deg) !important;
          }

          .qubit-circle[data-rounded-phase='20'] > .qubit-circle__phase {
            transform: rotate(-20deg) !important;
          }

          .qubit-circle[data-rounded-phase='30'] > .qubit-circle__phase {
            transform: rotate(-30deg) !important;
          }

          .qubit-circle[data-rounded-phase='40'] > .qubit-circle__phase {
            transform: rotate(-40deg) !important;
          }

          .qubit-circle[data-rounded-phase='50'] > .qubit-circle__phase {
            transform: rotate(-50deg) !important;
          }

          .qubit-circle[data-rounded-phase='60'] > .qubit-circle__phase {
            transform: rotate(-60deg) !important;
          }

          .qubit-circle[data-rounded-phase='70'] > .qubit-circle__phase {
            transform: rotate(-70deg) !important;
          }

          .qubit-circle[data-rounded-phase='80'] > .qubit-circle__phase {
            transform: rotate(-80deg) !important;
          }

          .qubit-circle[data-rounded-phase='90'] > .qubit-circle__phase {
            transform: rotate(-90deg) !important;
          }

          .qubit-circle[data-rounded-phase='100'] > .qubit-circle__phase {
            transform: rotate(-100deg) !important;
          }

          .qubit-circle[data-rounded-phase='110'] > .qubit-circle__phase {
            transform: rotate(-110deg) !important;
          }

          .qubit-circle[data-rounded-phase='120'] > .qubit-circle__phase {
            transform: rotate(-120deg) !important;
          }

          .qubit-circle[data-rounded-phase='130'] > .qubit-circle__phase {
            transform: rotate(-130deg) !important;
          }

          .qubit-circle[data-rounded-phase='140'] > .qubit-circle__phase {
            transform: rotate(-140deg) !important;
          }

          .qubit-circle[data-rounded-phase='150'] > .qubit-circle__phase {
            transform: rotate(-150deg) !important;
          }

          .qubit-circle[data-rounded-phase='160'] > .qubit-circle__phase {
            transform: rotate(-160deg) !important;
          }

          .qubit-circle[data-rounded-phase='170'] > .qubit-circle__phase {
            transform: rotate(-170deg) !important;
          }

          .qubit-circle[data-rounded-phase='180'] > .qubit-circle__phase {
            transform: rotate(-180deg) !important;
          }

          .qubit-circle[data-rounded-phase='190'] > .qubit-circle__phase {
            transform: rotate(-190deg) !important;
          }

          .qubit-circle[data-rounded-phase='200'] > .qubit-circle__phase {
            transform: rotate(-200deg) !important;
          }

          .qubit-circle[data-rounded-phase='210'] > .qubit-circle__phase {
            transform: rotate(-210deg) !important;
          }

          .qubit-circle[data-rounded-phase='220'] > .qubit-circle__phase {
            transform: rotate(-220deg) !important;
          }

          .qubit-circle[data-rounded-phase='230'] > .qubit-circle__phase {
            transform: rotate(-230deg) !important;
          }

          .qubit-circle[data-rounded-phase='240'] > .qubit-circle__phase {
            transform: rotate(-240deg) !important;
          }

          .qubit-circle[data-rounded-phase='250'] > .qubit-circle__phase {
            transform: rotate(-250deg) !important;
          }

          .qubit-circle[data-rounded-phase='260'] > .qubit-circle__phase {
            transform: rotate(-260deg) !important;
          }

          .qubit-circle[data-rounded-phase='270'] > .qubit-circle__phase {
            transform: rotate(-270deg) !important;
          }

          .qubit-circle[data-rounded-phase='280'] > .qubit-circle__phase {
            transform: rotate(-280deg) !important;
          }

          .qubit-circle[data-rounded-phase='290'] > .qubit-circle__phase {
            transform: rotate(-290deg) !important;
          }

          .qubit-circle[data-rounded-phase='300'] > .qubit-circle__phase {
            transform: rotate(-300deg) !important;
          }

          .qubit-circle[data-rounded-phase='310'] > .qubit-circle__phase {
            transform: rotate(-310deg) !important;
          }

          .qubit-circle[data-rounded-phase='320'] > .qubit-circle__phase {
            transform: rotate(-320deg) !important;
          }

          .qubit-circle[data-rounded-phase='330'] > .qubit-circle__phase {
            transform: rotate(-330deg) !important;
          }

          .qubit-circle[data-rounded-phase='340'] > .qubit-circle__phase {
            transform: rotate(-340deg) !important;
          }

          .qubit-circle[data-rounded-phase='350'] > .qubit-circle__phase {
            transform: rotate(-350deg) !important;
          }

          .qubit-circle[data-rounded-phase='360'] > .qubit-circle__phase {
            transform: rotate(-360deg) !important;
          }
        </style>

        <div id="body">${this.qubitCirclesHtml}</div>`, this.shadowRoot), this.magnitudes !== "")
      for (let [e, t] of this.magnitudes.split(",").entries())
        this.setRoundedMagnitude(this.qubitCircles[e], parseFloat(t));
    if (this.phases !== "")
      for (let [e, t] of this.phases.split(",").entries()) {
        let i = this.qubitCircles[e], l = t ? parseFloat(t) : 0;
        this.setRoundedPhase(i, l);
        let c = i.querySelector(".qubit-circle__phase");
        c.style.transform = `rotate(${-l}deg)`;
      }
  }
  setRoundedMagnitude(e, t) {
    if (e === null || e === void 0)
      return;
    let i = Math.round(t * 100);
    i = i < 10 ? i === 0 ? 0 : 10 : Math.round(i / 10) * 10, i = i / 100, e.setAttribute("data-magnitude", t.toString()), e.setAttribute("data-rounded-magnitude", i.toString());
  }
  setRoundedPhase(e, t) {
    if (e === null || e === void 0)
      return;
    let i = Math.round(t / 10) * 10;
    i < 0 && (i = 360 + i), e.setAttribute("data-phase", t.toString()), e.setAttribute("data-rounded-phase", i.toString());
  }
  get qubitCirclesHtml() {
    return this.hasAttribute("data-multi-qubits") ? this.stateVectorHtml(10) : Z`${this.qubitCircleHtml(0)} ${this.qubitCircleHtml(1)}`;
  }
  qubitCircleHtml(e) {
    return Z`<div
      part="qubit-circle"
      class="qubit-circle"
      data-ket="${e}"
      data-action="mouseenter:circle-notation#setPopupContent"
      data-targets="circle-notation.qubitCircles"
    >
      <div class="qubit-circle__magnitude" part="qubit-circle__magnitude"></div>
      <div class="qubit-circle__phase" part="qubit-circle__phase"></div>
    </div>`;
  }
  stateVectorHtml(e) {
    let t = Z``, i = this.qubitCircleGroup([...Array(2 ** e).keys()], (l) => this.qubitCircleGroup(l, (c) => this.qubitCircleGroup(c, (d) => this.qubitCircleGroup(d, (v) => this.qubitCircleGroup(v, (b) => this.qubitCircleGroup(b, (y) => this.qubitCircleGroup(y)))))), 256);
    for (let l of i)
      t = Z`${t} ${l}`;
    return t;
  }
  qubitCircleGroup(e, t, i = e.length / 2) {
    return u((c, d = 1) => c.reduce((v, b, y) => y % d ? v : [...v, c.slice(y, y + d)], []), "arrayChunk")(e, i).map((c) => {
      let d = Z``;
      if (t)
        for (let v of t(c))
          d = Z`${d} ${v}`;
      else
        for (let v of c)
          d = Z`${d} ${this.qubitCircleHtml(v)}`;
      return i === 64 ? Z`<div class="qubit-circle-group--size${i}" data-targets="circle-notation.qubitCircleGroups">
          ${d}
        </div>` : Z`<div class="qubit-circle-group--size${i}">${d}</div>`;
    });
  }
  initQubitCirclePopup(e) {
    let t = zt(e);
    bp(t, { allowHTML: true, animation: false, arrow: Br + Br, delay: 0, theme: "qni" });
  }
  setPopupContent(e) {
    if (this.popupEl === null)
      return;
    let t = e.target, i = this.ketDecimal(t), l = t.getAttribute("data-amplitude-real"), c = t.getAttribute("data-amplitude-imag"), d = t.getAttribute("data-magnitude"), v = t.getAttribute("data-phase"), b;
    l === null || c === null ? b = Er.ZERO : b = new Er(parseFloat(l), parseFloat(c));
    let y;
    d && parseFloat(d) === 0 ? y = 0 : y = v ? parseFloat(v) : 0, this.setQubitCirclePopupContent(this.popupEl.content, t, i, b, d ? parseFloat(d) : 0, y, this.qubitCount);
  }
  setQubitCirclePopupContent(e, t, i, l, c, d, v) {
    t._tippy.setContent(this.popupContent(e, i, l, c, d, v));
  }
  popupContent(e, t, i, l, c, d) {
    let v = e.querySelector(".circle-notation-popup__ket-binary"), b = e.querySelector(".circle-notation-popup__ket-decimal"), y = e.querySelector(".circle-notation-popup__amplitude-real"), w = e.querySelector(".circle-notation-popup__amplitude-imag"), _ = e.querySelector(".circle-notation-popup__probability"), C = e.querySelector(".circle-notation-popup__phase");
    v && (v.textContent = t.toString(2).padStart(d, "0")), b && (b.textContent = t.toString()), y && (y.textContent = this.forceSigned(i.real, 5)), w && (w.textContent = `${this.forceSigned(i.imag, 5)}i`), _ && (_.textContent = `${this.forceSigned(l * l * 100, 4)}%`), C && (C.textContent = `${this.forceSigned(c, 2)}\xB0`);
    let A = document.createElement("div");
    return A.appendChild(e.cloneNode(true)), A.innerHTML;
  }
  get popupEl() {
    return document.getElementById("circle-notation-popup");
  }
  forceSigned(e, t) {
    return (e >= 0 ? "+" : "") + e.toFixed(t);
  }
  ketDecimal(e) {
    let t = e.getAttribute("data-ket");
    return parseInt(t);
  }
};
u(cr, "CircleNotationElement"), D([G], cr.prototype, "qubitCount", 2), D([G], cr.prototype, "size", 2), D([G], cr.prototype, "magnitudes", 2), D([G], cr.prototype, "phases", 2), D([G], cr.prototype, "multiQubits", 2), D([G], cr.prototype, "showKets", 2), D([Bt], cr.prototype, "qubitCircles", 2), D([Bt], cr.prototype, "qubitCircleGroups", 2), D([Bt], cr.prototype, "visibleQubitCircleGroups", 2);
re(cr);
var Qp = `<svg part="reload-icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
</svg>
`;
var ed = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
            <stop stop-color="#fff" stop-opacity="0" offset="0%"/>
            <stop stop-color="#fff" stop-opacity=".631" offset="63.146%"/>
            <stop stop-color="#fff" offset="100%"/>
        </linearGradient>
    </defs>
    <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)">
            <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite" />
            </path>
            <circle fill="#fff" cx="36" cy="18" r="1">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite" />
            </circle>
        </g>
    </g>
</svg>
`;
var Hn = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.running = false;
    this.debug = false;
    this.runCircuitButtonMachine = gt({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
      this.running = false;
    }, setRunningTrue: () => {
      this.running = true;
    }, ripple: (e, t) => {
      if (t.type !== "CLICK")
        return;
      this.ripple && this.ripple.remove();
      let i = document.createElement("span");
      i.id = "ripple";
      let l = Math.max(this.clientWidth, this.clientHeight), c = l / 2, d = this.getBoundingClientRect(), v = d.left + window.pageXOffset, b = d.top + window.pageYOffset;
      i.setAttribute("part", "ripple"), i.setAttribute("data-target", "run-circuit-button.ripple"), i.style.width = i.style.height = `${l}px`, i.style.left = `${t.clientX - (v + c)}px`, i.style.top = `${t.clientY - (b + c)}px`, this.body.appendChild(i);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
    this.runCircuitButtonService = at(this.runCircuitButtonMachine).onTransition((e) => {
      this.debug && console.log(`run-circuit-button: ${Qe(e.value)}`);
    });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.runCircuitButtonService.start(), this.addEventListener("click", this.handleClickEvent);
  }
  attributeChangedCallback(e, t, i) {
    t !== i && e === "data-running" && i !== null && this.runCircuitButtonService.send({ type: "FINISH" });
  }
  update() {
    ee(Z`<style>
          #body {
            position: relative;
            overflow: hidden;
            border-radius: 9999px;
            height: 100%;
            width: 100%;
          }

          #ripple {
            position: absolute;
            border-radius: 9999px;
            transform: scale(0);
            animation: ripple 400ms linear;
          }

          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        </style>

        <div id="body" part="body" data-target="run-circuit-button.body">${this.reloadIcon} ${this.tailSpinIcon}</div>`, this.shadowRoot);
  }
  handleClickEvent(e) {
    this.runCircuitButtonService.send({ type: "CLICK", clientX: e.clientX, clientY: e.clientY });
  }
  get reloadIcon() {
    return Z([Qp]);
  }
  get tailSpinIcon() {
    return Z([ed]);
  }
};
u(Hn, "RunCircuitButtonElement"), D([G], Hn.prototype, "running", 2), D([G], Hn.prototype, "debug", 2), D([ze], Hn.prototype, "body", 2), D([ze], Hn.prototype, "ripple", 2);
re(Hn);
var sn = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.comment = "";
    this.finalized = false;
  }
  finalize() {
    this.finalized = true;
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    ee(Z`<style>
          :host {
            position: relative;
          }
          :host::before,
          :host::after {
            position: absolute;
            display: flex;
            justify-content: center;
            color: var(--colors-magnitude, #1cb0f6);
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
              monospace;
            white-space: nowrap;
            content: attr(data-comment) '';
            writing-mode: vertical-lr;
          }
          :host::before {
            top: 0;
            right: 0;
            bottom: 0;
            left: unset;
          }
          :host::after {
            top: 0;
            left: 0;
            bottom: 0;
            right: unset;
          }
          @media (min-width: 768px) {
            :host::before,
            :host::after {
              writing-mode: horizontal-tb;
              left: 0;
              right: 0;
            }
            :host::before {
              top: 0;
              bottom: unset;
            }
            :host::after {
              bottom: 0;
              top: unset;
            }
          }
          #body {
            display: flex;
            border-style: solid;
            border-color: var(--colors-magnitude, #1cb0f6);
            background-color: rgba(229, 229, 229, 0.3);
            flex-direction: column;
            margin-left: 1.5rem;
            margin-right: 1.5rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            border-top-width: 0;
            border-right-width: 2px;
            border-bottom-width: 0;
            border-left-width: 2px;
          }
          @media (min-width: 768px) {
            #body {
              flex-direction: row;
              margin-top: 1.5rem;
              margin-bottom: 1.5rem;
              margin-left: 0;
              margin-right: 0;
              padding: 2rem 0;
              border-top-width: 2px;
              border-right-width: 0;
              border-bottom-width: 2px;
              border-left-width: 0;
            }
          }
        </style>
        <div id="body">
          <slot></slot>
        </div>`, this.shadowRoot);
  }
};
u(sn, "CircuitBlockElement"), D([G], sn.prototype, "comment", 2), D([G], sn.prototype, "finalized", 2), sn = D([re], sn);
var rd = Jo(Aa(), 1);
var td = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
  <line
    part="wire-input"
    x1="0"
    y1="24"
    x2="24"
    y2="24"
    stroke="currentColor"
    stroke-width="2"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    part="wire-output"
    x1="24"
    y1="24"
    x2="48"
    y2="24"
    stroke="currentColor"
    stroke-width="2"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="connect-top"
    part="connect-top"
    x1="24"
    y1="0"
    x2="24"
    y2="24"
    stroke="currentColor"
    stroke-width="4"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="connect-bottom"
    part="connect-bottom"
    x1="24"
    y1="48"
    x2="24"
    y2="24"
    stroke="currentColor"
    stroke-width="4"
    vector-effect="non-scaling-stroke"
  ></line>
</svg>
`;
var Ml = u((r) => r != null && r instanceof xt, "isCircuitDropzoneElement");
var wo;
var xt = class extends HTMLElement {
  constructor() {
    super(...arguments);
    Qo(this, wo, null);
    this.operationName = "";
    this.inputWireQuantum = false;
    this.outputWireQuantum = false;
    this.connectTop = false;
    this.connectBottom = false;
    this.shadow = false;
    this.debug = false;
    this.circuitDropzoneMachine = gt({ id: "circuit-dropzone", initial: "unknown", states: { unknown: { always: [{ target: "empty", cond: "isEmpty" }, { target: "occupied", cond: "isOccupied", actions: ["initOperation"] }] }, empty: { on: { SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } } } }, { actions: { initOperation: () => {
      ie.notNull(this.operation), this.operation.snapped = true;
    }, snapOperation: () => {
      ie.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.dispatchEvent(new Event("circuit-dropzone-snap", { bubbles: true }));
    }, unsnapOperation: () => {
      this.operationName = "", this.dispatchEvent(new Event("circuit-dropzone-unsnap", { bubbles: true }));
    }, dropOperation: () => {
      this.dispatchEvent(new Event("circuit-dropzone-drop", { bubbles: true }));
    }, putOperation: (e, t) => {
      t.type === "PUT_OPERATION" && (this.append(t.operation), this.operationName = t.operation.tagName.toLocaleLowerCase(), t.operation.snapped = true);
    }, deleteOperation: (e, t) => {
      t.type === "DELETE_OPERATION" && (this.operationName = "", this.removeChild(t.operation));
    }, dispatchOccupiedEvent: () => {
      this.dispatchEvent(new Event("circuit-dropzone-occupy", { bubbles: true }));
    }, dispatchDeleteOperationEvent: () => {
      this.dispatchEvent(new Event("circuit-dropzone-operation-delete", { bubbles: true }));
    } }, guards: { isEmpty: () => this.operation === null, isOccupied: () => this.operation !== null } });
    this.circuitDropzoneService = at(this.circuitDropzoneMachine).onTransition((e) => {
      this.debug && console.log(`circuit-dropzone: ${e.value}`);
    });
  }
  get noConnections() {
    return !this.connectTop && !this.connectBottom;
  }
  get occupied() {
    return this.operationName !== "";
  }
  get operation() {
    return this.firstElementChild;
  }
  get snapTarget() {
    let e = this.getBoundingClientRect();
    return { x: window.pageXOffset + e.left + this.clientWidth / 2, y: window.pageYOffset + e.top + this.clientHeight / 2 };
  }
  toJson() {
    let e = this.operation;
    return e === null ? "1" : e.toJson();
  }
  connectedCallback() {
    let { signal: e } = ea(this, wo, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("operation-snap", this.snapOperation, { signal: e }), this.addEventListener("operation-unsnap", this.unsnapOperation, { signal: e }), this.addEventListener("operation-end-dragging", this.dropOperation, { signal: e }), this.addEventListener("operation-delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = Ko(this, wo)) == null || e.abort();
  }
  update() {
    ee(Z`<style>
          #body {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
          }

          #connect-top,
          #connect-bottom {
            display: none;
          }

          :host([data-connect-top]) #connect-top {
            display: block;
          }

          :host([data-connect-bottom]) #connect-bottom {
            display: block;
          }

          ::slotted(*) {
            position: absolute;
            z-index: 10;
          }
        </style>

        <div id="body"><slot></slot>${this.wireSvg}</div>`, this.shadowRoot);
  }
  put(e) {
    this.circuitDropzoneService.send({ type: "PUT_OPERATION", operation: e });
  }
  initDropzone() {
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase()), (0, rd.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
  }
  snapOperation() {
    this.circuitDropzoneService.send({ type: "SNAP_OPERATION" });
  }
  unsnapOperation() {
    this.circuitDropzoneService.send({ type: "UNSNAP_OPERATION" });
  }
  dropOperation() {
    this.circuitDropzoneService.send({ type: "DROP_OPERATION" });
  }
  deleteOperation(e) {
    let t = e.target;
    if (!ut(t))
      throw new Error(`${t} isn't an Operation.`);
    this.circuitDropzoneService.send({ type: "DELETE_OPERATION", operation: t });
  }
  get wireSvg() {
    return Z([td]);
  }
};
u(xt, "CircuitDropzoneElement"), wo = /* @__PURE__ */ new WeakMap(), D([G], xt.prototype, "operationName", 2), D([G], xt.prototype, "inputWireQuantum", 2), D([G], xt.prototype, "outputWireQuantum", 2), D([G], xt.prototype, "connectTop", 2), D([G], xt.prototype, "connectBottom", 2), D([G], xt.prototype, "shadow", 2), D([G], xt.prototype, "debug", 2);
re(xt);
var ln = u((r) => r != null && r instanceof Dt, "isCircuitStepElement");
var Ge = u((r, e) => Array.from(r.reduce((t, i, l, c) => {
  let d = e(i, l, c), v = t.get(d);
  return v ? v.push(i) : t.set(d, [i]), t;
}, /* @__PURE__ */ new Map())), "groupBy");
var Dt = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.breakpoint = false;
    this.shadow = false;
    this.keep = false;
    this.debug = false;
    this.circuitStepMachine = gt({ id: "circuit-step", initial: "unknown", states: { unknown: { always: [{ target: "shadow", cond: "isShadow" }, { target: "visible", cond: "isVisible" }] }, shadow: { type: "compound", initial: "unknown", on: { SNAP_DROPZONE: { target: "shadow", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "shadow", actions: ["dispatchUnsnapEvent"] }, UNSHADOW: { target: "visible", actions: ["unshadow"] } }, states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, visible: { type: "parallel", on: { SNAP_DROPZONE: { target: "visible", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "visible", actions: ["dispatchUnsnapEvent"] }, OCCUPY_DROPZONE: { target: "visible", actions: ["setOperationBit"] }, DELETE_OPERATION: { target: "visible", actions: ["dispatchDeleteOperationEvent"] } }, states: { activatable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, breakpointable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "breakpointOn", cond: "isBreakpointOn" }, { target: "breakpointOff", cond: "isBreakpointOff" }] }, breakpointOn: { on: { UNSET_BREAKPOINT: { target: "breakpointOff" } } }, breakpointOff: { on: { SET_BREAKPOINT: { target: "breakpointOn" } } } } } } } } }, { actions: { setOperationBit: (e, t) => {
      if (t.type !== "SNAP_DROPZONE" && t.type !== "OCCUPY_DROPZONE")
        return;
      let i = t.dropzone, l = this.bit(i);
      ie.notNull(i.operation), i.operation.bit = l;
    }, dispatchSnapEvent: (e, t) => {
      t.type === "SNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-snap", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, dispatchUnsnapEvent: (e, t) => {
      t.type === "UNSNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-unsnap", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, dispatchDeleteOperationEvent: (e, t) => {
      t.type === "DELETE_OPERATION" && this.dispatchEvent(new CustomEvent("circuit-step-delete-operation", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, unshadow: () => {
      this.shadow = false;
    } }, guards: { isShadow: () => this.shadow, isVisible: () => !this.shadow, isActive: () => this.active, isInactive: () => !this.active, isBreakpointOn: () => this.breakpoint, isBreakpointOff: () => !this.breakpoint } });
    this.circuitStepService = at(this.circuitStepMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${Qe(e.value)}`);
    });
  }
  get wireCount() {
    return this.dropzones.length;
  }
  get isInBlock() {
    return this.closest("circuit-block") !== null;
  }
  get block() {
    return this.closest("circuit-block");
  }
  connectedCallback() {
    this.circuitStepService.start(), this.addEventListener("mouseenter", this.dispatchMouseenterEvent), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("click", this.maybeDispatchClickEvent), this.addEventListener("circuit-dropzone-snap", this.snapDropzone), this.addEventListener("circuit-dropzone-unsnap", this.unsnapDropzone), this.addEventListener("circuit-dropzone-operation-delete", this.deleteOperation), this.addEventListener("circuit-dropzone-drop", this.unshadow), this.addEventListener("circuit-dropzone-occupy", this.occupyDropzone), this.attachShadow({ mode: "open" }), this.updateOperationAttributes(), this.update();
  }
  attributeChangedCallback(e, t, i) {
    if (t !== i && (e === "data-active" && (i !== null ? this.circuitStepService.send({ type: "ACTIVATE" }) : this.circuitStepService.send({ type: "DEACTIVATE" })), e === "data-breakpoint" && (i !== null ? this.circuitStepService.send({ type: "SET_BREAKPOINT" }) : this.circuitStepService.send({ type: "UNSET_BREAKPOINT" })), e === "data-shadow"))
      for (let l of this.dropzones)
        i !== null ? l.shadow = true : l.shadow = false;
  }
  update() {
    ee(Z`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(e) {
    for (let l of this.dropzones)
      l.connectTop = false, l.connectBottom = false;
    let t = this.controlGateDropzones, i = this.controllableDropzones(e);
    for (let l of i)
      wn(l.operation) && (l.operation.controls = []);
    if (this.updateSwapConnections(e), this.updatePhasePhaseConnections(e), t.length !== 0) {
      if (t.length === 1 && i.length === 0) {
        t[0].operation.disable();
        return;
      }
      i.length === 0 ? this.updateControlControlConnections(e) : this.updateControlledUConnections(e), this.updateFreeDropzoneConnections(e);
    }
  }
  updateSwapConnections(e) {
    let t = e == null ? void 0 : e.disableSwap, i = this.swapGateDropzones;
    if (i.length !== 2 || t)
      for (let l of i)
        l.operation.disable();
    else {
      for (let c of i)
        c.operation.enable(), c.connectTop = i.some((v) => this.bit(v) < this.bit(c)), c.connectBottom = i.some((v) => this.bit(v) > this.bit(c));
      let l = i.map((c) => this.bit(c));
      for (let c of this.freeDropzones) {
        let d = Math.min(...l), v = Math.max(...l);
        d < this.bit(c) && this.bit(c) < v && (c.connectTop = true, c.connectBottom = true);
      }
    }
  }
  updatePhasePhaseConnections(e) {
    if (e == null ? void 0 : e.disablePhasePhase)
      return;
    let t = this.phaseGateDropzones;
    for (let i of t) {
      let l = i.operation;
      if (l.angle === "" || e !== void 0 && e.maxPhasePhaseTargetGates === 1)
        continue;
      let c = t.filter((d) => {
        if (!yo(d.operation))
          throw new Error(`${d.operation} isn't a phase-gate element.`);
        return l.angle === d.operation.angle;
      }).map((d) => this.bit(d));
      e !== void 0 && e.maxPhasePhaseTargetGates > 1 && (c = c.slice(0, e.maxPhasePhaseTargetGates)), !!c.includes(this.bit(i)) && (i.connectTop = c.some((d) => d < this.bit(i)), i.connectBottom = c.some((d) => d > this.bit(i)));
    }
    for (let i of this.freeDropzones) {
      let c = this.phaseGateDropzones.filter((b) => b.connectTop || b.connectBottom).map((b) => this.bit(b)), d = Math.min(...c), v = Math.max(...c);
      d < this.bit(i) && this.bit(i) < v && (i.connectTop = true, i.connectBottom = true);
    }
  }
  updateControlControlConnections(e) {
    let t = this.controlGateDropzones, i = t.map((c) => this.bit(c)), l = 0;
    e !== void 0 && (e.maxControlControlTargetGates === 1 ? i = [] : e.maxControlControlTargetGates > 1 && (i = i.slice(0, e.maxControlControlTargetGates)));
    for (let c of t) {
      l += 1;
      let d = c.operation;
      (e == null ? void 0 : e.disableControlControl) || e !== void 0 && (e.maxControlControlTargetGates === 1 || e.maxControlControlTargetGates > 0 && l > e.maxControlControlTargetGates) ? d.disable() : (d.enable(), c.connectTop = i.some((v) => this.bit(c) > v), c.connectBottom = i.some((v) => this.bit(c) < v));
    }
  }
  updateControlledUConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones, l = [...new Set(t.map((w) => w.operationName))], c = this.numControlGateDropzones(e, l), d = i.map((w) => this.bit(w)), v = c === null ? d : d.slice(0, c), b = t.map((w) => this.bit(w)), y = v.concat(b);
    for (let [w, _] of Object.entries(i)) {
      let C = _.operation;
      _.connectBottom = y.some((A) => this.bit(_) < A), _.connectTop = y.some((A) => this.bit(_) > A), c === null || c !== null && parseInt(w) < c ? C.enable() : (_.connectTop = Math.max(...y) > this.bit(_), C.disable());
    }
    for (let w of t) {
      if (!wn(w.operation))
        throw new Error(`${w.operation} isn't controllable.`);
      w.operation.controls = this.controlBits(w, d, e), w.connectTop = y.some((_) => _ < this.bit(w)), w.connectBottom = y.some((_) => _ > this.bit(w));
    }
  }
  updateFreeDropzoneConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones.filter((b) => Tl(b.operation) && !b.operation.disabled).map((b) => this.bit(b)), l = t.map((b) => this.bit(b)), c = i.concat(l), d = Math.min(...c), v = Math.max(...c);
    for (let b of this.freeDropzones)
      d < this.bit(b) && this.bit(b) < v && (b.connectTop = true, b.connectBottom = true);
  }
  controlBits(e, t, i) {
    let l = t;
    return i && (i.maxChControlGates > 0 && e.operationName === "h-gate" ? l = t.slice(0, i.maxChControlGates) : i.maxCnotControlGates > 0 && e.operationName === "x-gate" ? l = t.slice(0, i.maxCnotControlGates) : i.maxCyControlGates > 0 && e.operationName === "y-gate" ? l = t.slice(0, i.maxCyControlGates) : i.maxCzControlGates > 0 && e.operationName === "z-gate" ? l = t.slice(0, i.maxCzControlGates) : i.maxCphaseControlGates > 0 && e.operationName === "phase-gate" ? l = t.slice(0, i.maxCphaseControlGates) : i.maxCtControlGates > 0 && e.operationName === "t-gate" ? l = t.slice(0, i.maxCtControlGates) : i.maxCrnotControlGates > 0 && e.operationName === "rnot-gate" ? l = t.slice(0, i.maxCrnotControlGates) : i.maxCrxControlGates > 0 && e.operationName === "rx-gate" ? l = t.slice(0, i.maxCrxControlGates) : i.maxCryControlGates > 0 && e.operationName === "ry-gate" ? l = t.slice(0, i.maxCryControlGates) : i.maxCrzControlGates > 0 && e.operationName === "rz-gate" ? l = t.slice(0, i.maxCrzControlGates) : i.maxCswapControlGates > 0 && e.operationName === "swap-gate" && (l = t.slice(0, i.maxCswapControlGates))), l;
  }
  bit(e) {
    let t = this.dropzones.indexOf(e);
    return ie.need(t !== -1, "circuit-dropzone not found."), t;
  }
  get isEmpty() {
    return this.keep ? false : this.dropzones.every((e) => !e.occupied);
  }
  dropzoneAt(e) {
    let t = this.dropzones[e];
    return ie.notNull(t), t;
  }
  get dropzones() {
    return Array.from(this.querySelectorAll("circuit-dropzone"));
  }
  get freeDropzones() {
    return this.dropzones.filter((e) => !e.occupied);
  }
  get lastDropzone() {
    return this.dropzones[this.wireCount - 1];
  }
  appendDropzone() {
    let e = new xt();
    return e.shadow = this.shadow, this.append(e), e;
  }
  appendOperation(e) {
    let t = new xt();
    this.append(t), t.put(e);
  }
  get swapGateDropzones() {
    return this.dropzones.filter((e) => e.occupied).filter((e) => e.operationName === "swap-gate");
  }
  get phaseGateDropzones() {
    return this.dropzones.filter((e) => e.occupied).filter((e) => e.operationName === "phase-gate");
  }
  get controlGateDropzones() {
    return this.dropzones.filter((e) => e.occupied && Tl(e.operation));
  }
  numControlGateDropzones(e, t) {
    if (e === void 0)
      return null;
    let i = 0;
    return t.includes("h-gate") && !e.disableCh && e.maxChControlGates > i && (i = e.maxChControlGates), t.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > i && (i = e.maxCnotControlGates), t.includes("y-gate") && !e.disableCy && e.maxCyControlGates > i && (i = e.maxCyControlGates), t.includes("z-gate") && !e.disableCz && e.maxCzControlGates > i && (i = e.maxCzControlGates), t.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > i && (i = e.maxCphaseControlGates), t.includes("t-gate") && !e.disableCt && e.maxCtControlGates > i && (i = e.maxCtControlGates), t.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > i && (i = e.maxCrnotControlGates), t.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > i && (i = e.maxCrxControlGates), t.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > i && (i = e.maxCryControlGates), t.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > i && (i = e.maxCrzControlGates), t.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > i && (i = e.maxCswapControlGates), i === 0 ? null : i;
  }
  controllableDropzones(e) {
    let t = 0, i = 0, l = 0, c = 0, d = 0, v = 0, b = 0, y = 0, w = 0, _ = 0;
    return this.dropzones.filter((C) => C.occupied).filter((C) => wn(C.operation)).filter((C) => e === void 0 ? true : $p(C.operation) ? (t += 1, e.maxChTargetGates !== 0 && t > e.maxChTargetGates ? false : !e.disableCh) : Fp(C.operation) ? (i += 1, e.maxCnotTargetGates !== 0 && i > e.maxCnotTargetGates ? false : !e.disableCnot) : Wp(C.operation) ? (l += 1, e.maxCyTargetGates !== 0 && l > e.maxCyTargetGates ? false : !e.disableCy) : Up(C.operation) ? (c += 1, e.maxCzTargetGates !== 0 && c > e.maxCzTargetGates ? false : !e.disableCz) : yo(C.operation) ? (d += 1, e.maxCphaseTargetGates !== 0 && d > e.maxCphaseTargetGates ? false : !e.disableCphase) : Vp(C.operation) ? (v += 1, e.maxCtTargetGates !== 0 && v > e.maxCtTargetGates ? false : !e.disableCt) : Xp(C.operation) ? (b += 1, e.maxCrnotTargetGates !== 0 && b > e.maxCrnotTargetGates ? false : !e.disableCrnot) : Ua(C.operation) ? (y += 1, e.maxCrxTargetGates !== 0 && y > e.maxCrxTargetGates ? false : !e.disableCrx) : Va(C.operation) ? (w += 1, e.maxCryTargetGates !== 0 && w > e.maxCryTargetGates ? false : !e.disableCry) : Xa(C.operation) ? (_ += 1, e.maxCrzTargetGates !== 0 && _ > e.maxCrzTargetGates ? false : !e.disableCrz) : Yp(C.operation) ? !e.disableCswap : true);
  }
  dispatchUpdateEvent() {
    this.dispatchEvent(new Event("circuit-step-update", { bubbles: true }));
  }
  deleteOperation(e) {
    let t = e.target;
    this.circuitStepService.send({ type: "DELETE_OPERATION", dropzone: t });
  }
  dispatchMouseenterEvent() {
    this.dispatchEvent(new Event("circuit-step-mouseenter", { bubbles: true }));
  }
  dispatchMouseleaveEvent() {
    this.dispatchEvent(new Event("circuit-step-mouseleave", { bubbles: true }));
  }
  maybeDispatchClickEvent(e) {
    ut(e.target) || this.dispatchEvent(new Event("circuit-step-click", { bubbles: true }));
  }
  snapDropzone(e) {
    let t = e.target;
    this.circuitStepService.send({ type: "SNAP_DROPZONE", dropzone: t });
  }
  unsnapDropzone(e) {
    let t = e.target;
    this.circuitStepService.send({ type: "UNSNAP_DROPZONE", dropzone: t });
  }
  unshadow() {
    this.circuitStepService.send({ type: "UNSHADOW" });
  }
  occupyDropzone(e) {
    let t = e.target;
    this.circuitStepService.send({ type: "OCCUPY_DROPZONE", dropzone: t });
  }
  serialize() {
    let e = [];
    for (let [t, i] of Ge(this.operations, (l) => l.constructor))
      switch (t) {
        case Kt: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.if))
            for (let [v, b] of Ge(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, _ = b.map((A) => A.bit), C = { type: w, targets: _ };
              c !== "" && (C.if = c), v !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case sr: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.if))
            for (let [v, b] of Ge(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, _ = b.map((A) => A.bit), C = { type: w, targets: _ };
              c !== "" && (C.if = c), v !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case lr: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.if))
            for (let [v, b] of Ge(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, _ = b.map((A) => A.bit), C = { type: w, targets: _ };
              c !== "" && (C.if = c), v !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case ur: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.if))
            for (let [v, b] of Ge(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, _ = b.map((A) => A.bit), C = { type: w, targets: _ };
              c !== "" && (C.if = c), v !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case er: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.angle))
            for (let [v, b] of Ge(d, (y) => y.if))
              for (let [y, w] of Ge(b, (_) => _.controls.toString())) {
                let _ = w[0], C = _.operationType, A = w.map((S) => S.bit), k = { type: C, targets: A };
                v !== "" && (k.if = v), c !== "" && (k.angle = c), y !== "" && (k.controls = _.controls), e.push(k);
              }
          break;
        }
        case ar: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.if))
            for (let [v, b] of Ge(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, _ = b.map((A) => A.bit), C = { type: w, targets: _ };
              c !== "" && (C.if = c), v !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case tr: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.if))
            for (let [v, b] of Ge(d, (y) => y.controls.toString())) {
              let y = b[0], w = y.operationType, _ = b.map((A) => A.bit), C = { type: w, targets: _ };
              c !== "" && (C.if = c), v !== "" && (C.controls = y.controls), e.push(C);
            }
          break;
        }
        case rr: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.angle))
            for (let [v, b] of Ge(d, (y) => y.if))
              for (let [y, w] of Ge(b, (_) => _.controls.toString())) {
                let _ = w[0], C = _.operationType, A = w.map((S) => S.bit), k = { type: C, targets: A };
                v !== "" && (k.if = v), c !== "" && (k.angle = c), y !== "" && (k.controls = _.controls), e.push(k);
              }
          break;
        }
        case nr: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.angle))
            for (let [v, b] of Ge(d, (y) => y.if))
              for (let [y, w] of Ge(b, (_) => _.controls.toString())) {
                let _ = w[0], C = _.operationType, A = w.map((S) => S.bit), k = { type: C, targets: A };
                v !== "" && (k.if = v), c !== "" && (k.angle = c), y !== "" && (k.controls = _.controls), e.push(k);
              }
          break;
        }
        case ir: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.angle))
            for (let [v, b] of Ge(d, (y) => y.if))
              for (let [y, w] of Ge(b, (_) => _.controls.toString())) {
                let _ = w[0], C = _.operationType, A = w.map((S) => S.bit), k = { type: C, targets: A };
                v !== "" && (k.if = v), c !== "" && (k.angle = c), y !== "" && (k.controls = _.controls), e.push(k);
              }
          break;
        }
        case or: {
          let l = i.filter((b) => !b.disabled);
          if (l.length !== 2)
            break;
          let c = l[0].operationType, d = l[0].controls, v = { type: c, targets: [l[0].bit, l[1].bit] };
          d !== void 0 && d.length > 0 && (v.controls = d), e.push(v);
          break;
        }
        case $t: {
          let l = i.filter((d) => !d.disabled);
          if (l.length < 2 || this.operations.some((d) => wn(d) && d.controls.length > 0))
            break;
          let c = l.map((d) => d.bit);
          e.push({ type: l[0].operationType, targets: c });
          break;
        }
        case nt: {
          let l = i, c = i.map((d) => d.bit);
          e.push({ type: l[0].operationType, targets: c });
          break;
        }
        case Ft: {
          let l = i;
          for (let [, c] of Ge(l, (d) => d.value)) {
            let d = c.map((v) => v.bit);
            e.push({ type: c[0].operationType, targets: d });
          }
          break;
        }
        case Qt: {
          let l = i;
          for (let [c, d] of Ge(l, (v) => v.flag)) {
            let v = d.map((w) => w.bit), y = { type: d[0].operationType, targets: v };
            c !== "" && (y.flag = c), e.push(y);
          }
          break;
        }
        default:
          throw new Tt("Unrecognized operation", { klass: t });
      }
    return e;
  }
  get operations() {
    return this.dropzones.filter((e) => e.occupied).map((e) => e.operation).filter((e) => e !== null);
  }
  toJson() {
    let e = this.dropzones.map((t) => t.toJson());
    for (; e.length > 0 && e[e.length - 1] === "1"; )
      e.pop();
    return e.length === 0 ? "[1]" : `[${e.join(",")}]`;
  }
};
u(Dt, "CircuitStepElement"), D([G], Dt.prototype, "active", 2), D([G], Dt.prototype, "breakpoint", 2), D([G], Dt.prototype, "shadow", 2), D([G], Dt.prototype, "keep", 2), D([G], Dt.prototype, "debug", 2);
re(Dt);
var bi = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = gt({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { entry: "enableDragging", on: { GRAB_OPERATION: { target: "editing", actions: ["startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { enableDragging: () => {
      this.circuit.draggable = true;
    }, startCircuitEdit: () => {
      this.circuit.editing = true;
    }, endCircuitEdit: () => {
      this.circuit.editing = false;
    }, setOperationActive: (e, t) => {
      t.type === "GRAB_OPERATION" && this.circuit.activateOperation(t.operation);
    }, snapOperationIntoDropzone: (e, t) => {
      if (t.type !== "OPERATION_IN_SNAP_RANGE")
        return;
      let i = t.operation, l = this.circuit.snapTargetAt(t.x, t.y);
      if (i.snapped = true, l.dropzone === null) {
        let c = l.stepIndex;
        ie.notNull(c);
        let d = this.circuit.addShadowStepAfter(c), v = d.dropzones[l.wireIndex];
        ie.notNull(v), v.append(i), v.operationName = i.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(d.dropzones);
      } else
        l.dropzone.append(i);
    }, addDocumentCursorGrabbingStyle: () => {
      document.documentElement.setAttribute("data-grabbing", "");
    }, removeDocumentCursorGrabbingStyle: () => {
      document.documentElement.removeAttribute("data-grabbing");
    }, maybeAppendCircuitWire: () => {
      this.circuit.wireCount < this.circuit.maxWireCount && this.circuit.appendWire();
    }, maybeRemoveLastEmptyWires: () => {
      this.circuit.removeLastEmptyWires();
    }, resizeCircuit: () => {
      this.circuit.resize();
    }, setSnapTargets: (e, t) => {
      t.type === "GRAB_OPERATION" && this.circuit.setSnapTargets(t.operation);
    }, setBreakpoint: (e, t) => {
      t.type === "CLICK_STEP" && this.circuit.setBreakpoint(t.step);
    }, activateStep: (e, t) => {
      t.type !== "MOUSE_ENTER_STEP" && t.type !== "SNAP_STEP" || (t.step.active = true);
    }, deactivateStep: (e, t) => {
      t.type !== "MOUSE_LEAVE_STEP" && t.type !== "UNSNAP_STEP" || (t.step.active = false);
    }, deactivateAllSteps: () => {
      this.circuit.deactivateAllSteps();
    }, maybeDisableAllInspectorPanes: (e, t) => {
      t.type !== "END_DRAGGING_OPERATION" || t.operation.snapped || this.inspectorButton !== void 0 && (!this.inspectorButton.isInspectorShown || this.inspectorButton.inspector.disableAllPanes());
    }, initOperationMenu: (e, t) => {
      if (t.type !== "DROP_OPERATION")
        return;
      let i = t.operation;
      _p(i) && i.initMenu();
    }, showOperationMenu: (e, t) => {
      t.type === "SHOW_OPERATION_MENU" && (this.inspectorButton.isInspectorShown || t.operation.showMenu());
    }, showOperationInspectorIf: (e, t) => {
      t.type === "SHOW_OPERATION_INSPECTOR_IF" && this.inspectorButton.showIfInspector(t.operation);
    }, showOperationInspectorAngle: (e, t) => {
      t.type === "SHOW_OPERATION_INSPECTOR_ANGLE" && this.inspectorButton.showAngleInspector(t.operation);
    }, showOperationInspectorFlag: (e, t) => {
      t.type === "SHOW_OPERATION_INSPECTOR_FLAG" && this.inspectorButton.showFlagInspector(t.operation);
    }, setOperationIf: (e, t) => {
      t.type === "SET_OPERATION_IF" && (t.operation.if = t.if);
    }, setOperationAngle: (e, t) => {
      t.type === "SET_OPERATION_ANGLE" && (t.operation.angle = t.angle, t.operation.reducedAngle = t.reducedAngle);
    }, setOperationFlag: (e, t) => {
      t.type === "SET_OPERATION_FLAG" && (t.operation.flag = t.flag);
    }, maybeUpdateOperationInspector: (e, t) => {
      if (t.type !== "ACTIVATE_OPERATION" || this.inspectorButton === void 0)
        return;
      let i = t.operation;
      this.inspectorButton.isInspectorShown && this.inspectorButton.showInspector(i);
    } } });
    this.circuitEditorService = at(this.circuitEditorMachine).onTransition((e) => {
      this.debug && console.log(`circuit-editor: ${Qe(e.value)}`);
    });
  }
  connectedCallback() {
    this.circuitEditorService.start(), this.attachShadow({ mode: "open" }), this.update(), document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("operation-active", this.activateOperation), this.addEventListener("operation-show-menu", this.showOperationMenu), this.addEventListener("operation-menu-if", this.showOperationInspectorIf), this.addEventListener("operation-menu-angle", this.showOperationInspectorAngle), this.addEventListener("operation-menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("operation-grab", this.grabOperation), this.addEventListener("operation-release", this.releaseOperation), this.addEventListener("operation-end-dragging", this.endDraggingOperation), this.addEventListener("operation-drop", this.dropOperation), this.addEventListener("operation-delete", this.deleteOperation), this.addEventListener("circuit-step-click", this.clickStep), this.addEventListener("circuit-step-snap", this.snapStep), this.addEventListener("circuit-step-unsnap", this.unsnapStep), this.addEventListener("operation-in-snap-range", this.operationInSnapRange), this.addEventListener("circuit-step-mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step-mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit-mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit-init", this.makeCircuitHoverable);
  }
  update() {
    ee(Z`<slot></slot>`, this.shadowRoot);
  }
  get activeOperation() {
    return this.circuit.querySelector("circuit-dropzone > [data-active]");
  }
  makeCircuitHoverable(e) {
    if (e.target === this.circuit) {
      this.circuit.hoverable = true;
      for (let i of this.circuit.operations)
        i.initMenu();
    }
  }
  maybeDeactivateOperation(e) {
    var i;
    let t = e.target;
    !ut(t) && this.inspectorButton && !((i = this.inspectorButton) == null ? void 0 : i.popup.popper.contains(t)) && !this.inspectorButton.popup.reference.contains(t) && this.activeOperation !== null && (this.activeOperation.active = false);
  }
  activateOperation(e) {
    let t = e.target;
    if (!ut(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "ACTIVATE_OPERATION", operation: t });
  }
  showOperationMenu(e) {
    let t = e.target;
    if (!ut(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_MENU", operation: t });
  }
  showOperationInspectorIf(e) {
    let t = e.target;
    if (!$r(t))
      throw new Error(`${t} isn't an Ifable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_IF", operation: t });
  }
  showOperationInspectorAngle(e) {
    let t = e.target;
    if (!xn(t))
      throw new Error(`${t} isn't an Angleable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_ANGLE", operation: t });
  }
  showOperationInspectorFlag(e) {
    let t = e.target;
    if (!In(t))
      throw new Error(`${t} isn't a Flaggable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_FLAG", operation: t });
  }
  setOperationIf(e) {
    let t = e.target, i = this.activeOperation;
    if (!$r(i))
      throw new Error("[data-if] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_IF", operation: i, if: t.if });
  }
  setOperationAngle(e) {
    let t = e.target, i = this.activeOperation;
    if (ie.notNull(i), !xn(i))
      throw new Error(`${i.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: i, angle: t.angle, reducedAngle: t.reduceAngleFraction ? t.reducedAngle : "" });
  }
  setOperationFlag(e) {
    let t = e.target, i = this.activeOperation;
    if (!In(i))
      throw new Error("[data-flag] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_FLAG", operation: i, flag: t.flag });
  }
  grabOperation(e) {
    let t = e.target;
    if (!ut(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_OPERATION", operation: t });
  }
  releaseOperation(e) {
    let t = e.target;
    if (!ut(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "RELEASE_OPERATION", operation: t });
  }
  endDraggingOperation(e) {
    let t = e.target;
    if (!ut(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_DRAGGING_OPERATION", operation: t });
  }
  dropOperation(e) {
    let t = e.target;
    if (!ut(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "DROP_OPERATION", operation: t });
  }
  deleteOperation() {
    this.circuitEditorService.send({ type: "DELETE_OPERATION" });
  }
  clickStep(e) {
    let t = e.target;
    if (!ln(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: t });
  }
  snapStep(e) {
    let t = e.target;
    if (!ln(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: t });
  }
  unsnapStep(e) {
    let t = e.target;
    if (!ln(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "UNSNAP_STEP", step: t });
  }
  operationInSnapRange(e) {
    let t = e.target;
    if (!ut(t))
      throw new Error(`${t} must be an Operation.`);
    let l = e.detail.snapTargetInfo, c = l.x, d = l.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: t, x: c, y: d });
  }
  mouseEnterStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!ln(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: t });
  }
  mouseLeaveStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!ln(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: t });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
};
u(bi, "CircuitEditorElement"), D([G], bi.prototype, "debug", 2), D([ze], bi.prototype, "circuit", 2), D([ze], bi.prototype, "inspectorButton", 2);
re(bi);
var Eo;
var _l = class extends HTMLElement {
  constructor() {
    super(...arguments);
    Qo(this, Eo, null);
  }
  connectedCallback() {
    let { signal: e } = ea(this, Eo, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("operation-grab", this.newOperation, { signal: e }), this.addEventListener("operation-delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = Ko(this, Eo)) == null || e.abort();
  }
  update() {
    ee(Z`<style>
          ::slotted(*) {
            position: absolute !important;
          }
        </style>

        <slot></slot>`, this.shadowRoot);
  }
  initOperation(e) {
    e.draggable = true, e.snapped = true, e.grabbed = false, xl(e) && e.initHelp();
  }
  get operation() {
    if (this.operations.length === 0)
      throw new Error("palette-dropzone must have an operation.");
    if (this.operations.length === 1)
      return this.operations[0];
    throw new Error("palette-dropzone cannot hold multiple operations.");
  }
  get operations() {
    return Array.from(this.children).filter((e) => ut(e));
  }
  newOperation(e) {
    let t = e.target;
    this.assertOperation(t);
    let i = t.cloneNode(false);
    this.assertOperation(i), xl(t) && t.disableHelp(), this.prepend(i), this.initOperation(i);
  }
  deleteOperation(e) {
    let t = e.target;
    this.assertOperation(t), this.removeChild(t);
  }
  assertOperation(e) {
    if (!ut(e))
      throw new TypeError(`${e} isn't an operation.`);
  }
};
u(_l, "PaletteDropzoneElement"), Eo = /* @__PURE__ */ new WeakMap();
re(_l);
var se = class extends we(HTMLElement) {
  constructor() {
    super(...arguments);
    this.minStepCount = 1;
    this.minWireCount = 1;
    this.maxWireCount = 10;
    this.editing = false;
    this.updateUrl = false;
    this.json = "";
    this.circuitTitle = "";
    this.debug = false;
    this.chDisabled = false;
    this.chMaxControlGates = 0;
    this.chMaxTargetGates = 0;
    this.cnotDisabled = false;
    this.cnotMaxControlGates = 0;
    this.cnotMaxTargetGates = 0;
    this.cyDisabled = false;
    this.cyMaxControlGates = 0;
    this.cyMaxTargetGates = 0;
    this.czDisabled = false;
    this.czMaxControlGates = 0;
    this.czMaxTargetGates = 0;
    this.cphaseDisabled = false;
    this.cphaseMaxControlGates = 0;
    this.cphaseMaxTargetGates = 0;
    this.ctDisabled = false;
    this.ctMaxControlGates = 0;
    this.ctMaxTargetGates = 0;
    this.crnotDisabled = false;
    this.crnotMaxControlGates = 0;
    this.crnotMaxTargetGates = 0;
    this.crxDisabled = false;
    this.crxMaxControlGates = 0;
    this.crxMaxTargetGates = 0;
    this.cryDisabled = false;
    this.cryMaxControlGates = 0;
    this.cryMaxTargetGates = 0;
    this.crzDisabled = false;
    this.crzMaxControlGates = 0;
    this.crzMaxTargetGates = 0;
    this.cswapDisabled = false;
    this.cswapMaxControlGates = 0;
    this.swapDisabled = false;
    this.controlControlDisabled = false;
    this.controlControlMaxTargetGates = 0;
    this.phasePhaseDisabled = false;
    this.phasePhaseMaxTargetGates = 0;
    this.quantumCircuitMachine = gt({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
    this.quantumCircuitService = at(this.quantumCircuitMachine).onTransition((e) => {
      this.debug && console.log(`quantum-circuit: ${e.value}`);
    }).start();
    this.cx = this.cnot;
  }
  get wireCount() {
    return this.stepAt(0).wireCount;
  }
  get activeStepIndex() {
    let e = this.activeStep;
    return e === null ? null : this.fetchStepIndex(e);
  }
  get activeStep() {
    return this.steps.find((t) => t.active) || null;
  }
  fetchStepIndex(e) {
    let t = this.steps.indexOf(e);
    return ie.need(t !== -1, `circuit-step index of ${e} not found.`), t;
  }
  get steps() {
    return Array.from(this.querySelectorAll("circuit-step"));
  }
  get emptySteps() {
    return this.steps.filter((e) => e.isEmpty);
  }
  get nonEmptySteps() {
    return this.steps.filter((e) => !e.isEmpty);
  }
  get largestStep() {
    let e = null, t = 0;
    for (let i of this.steps)
      i.wireCount > 0 && i.wireCount > t && (e = i, t = i.wireCount);
    return e;
  }
  appendMinimumSteps() {
    let e = this.minStepCount - this.steps.length;
    for (let t = 0; t < e; t++)
      this.append(new Dt());
  }
  stepAt(e) {
    let t = this.steps[e];
    return ie.notNull(t), t;
  }
  addShadowStepAfter(e) {
    let t = new Dt();
    t.shadow = true;
    for (let i = 0; i < this.wireCount; i++)
      t.appendDropzone();
    if (e === -1)
      this.prepend(t);
    else {
      let i = this.steps[e];
      ie.notNull(i.parentElement), i.parentElement.insertBefore(t, i.nextSibling);
    }
    return t;
  }
  activateStep(e) {
    e.active = true;
  }
  deactivateAllSteps() {
    for (let e of this.steps)
      e.active = false;
  }
  setBreakpoint(e) {
    for (let t of this.steps)
      t.breakpoint = false;
    e.breakpoint = true;
  }
  get breakpoint() {
    return this.steps.find((t) => t.breakpoint) || null;
  }
  get dropzones() {
    return Array.from(this.querySelectorAll("circuit-dropzone"));
  }
  get operations() {
    return this.dropzones.map((e) => e.operation).filter((e) => e !== null);
  }
  get isVertical() {
    return window.getComputedStyle(this).flexDirection === "column";
  }
  connectedCallback() {
    if (this.attachShadow({ mode: "open" }), this.update(), this.hasAttribute("data-update-url")) {
      let e = this.urlJson;
      this.loadFromJson(e);
    }
    this.hoverable && this.makeOperationsHoverable(), this.appendMinimumSteps(), this.appendMinimumWires(), this.updateAllWires(), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("circuit-step-update", this.updateStep), this.addEventListener("circuit-step-snap", this.updateStep), this.addEventListener("circuit-step-snap", this.updateChangedWire), this.addEventListener("circuit-step-unsnap", this.updateStep), this.addEventListener("circuit-step-unsnap", this.updateChangedWire), this.addEventListener("circuit-step-delete-operation", this.updateStep), this.addEventListener("circuit-step-delete-operation", this.updateChangedWire), this.dispatchEvent(new Event("quantum-circuit-init", { bubbles: true }));
  }
  attributeChangedCallback(e, t, i) {
    t !== i && (e === "data-editing" && (i !== null ? this.quantumCircuitService.send({ type: "EDIT" }) : this.quantumCircuitService.send({ type: "EDIT_DONE" })), e === "data-hoverable" && i !== null && this.makeOperationsHoverable(), e === "data-json" && i !== "" && (this.loadFromJson(i), this.hoverable && this.makeOperationsHoverable()));
  }
  makeOperationsHoverable() {
    for (let e of this.operations)
      e.hoverable = true;
  }
  update() {
    ee(Z`<slot></slot>`, this.shadowRoot);
  }
  updateStep(e) {
    let t = e.target;
    this.updateStepOperationAttributes(t);
  }
  updateStepOperationAttributes(e) {
    e.updateOperationAttributes({ disableCh: this.chDisabled, maxChControlGates: this.chMaxControlGates, maxChTargetGates: this.chMaxTargetGates, disableCnot: this.cnotDisabled, maxCnotControlGates: this.cnotMaxControlGates, maxCnotTargetGates: this.cnotMaxTargetGates, disableCy: this.cyDisabled, maxCyControlGates: this.cyMaxControlGates, maxCyTargetGates: this.cyMaxTargetGates, disableCz: this.czDisabled, maxCzControlGates: this.czMaxControlGates, maxCzTargetGates: this.czMaxTargetGates, disableCphase: this.cphaseDisabled, maxCphaseControlGates: this.cphaseMaxControlGates, maxCphaseTargetGates: this.cphaseMaxTargetGates, disableCt: this.ctDisabled, maxCtControlGates: this.ctMaxControlGates, maxCtTargetGates: this.ctMaxTargetGates, disableCrnot: this.crnotDisabled, maxCrnotControlGates: this.crnotMaxControlGates, maxCrnotTargetGates: this.crnotMaxTargetGates, disableCrx: this.crxDisabled, maxCrxControlGates: this.crxMaxControlGates, maxCrxTargetGates: this.crxMaxTargetGates, disableCry: this.cryDisabled, maxCryControlGates: this.cryMaxControlGates, maxCryTargetGates: this.cryMaxTargetGates, disableCrz: this.crzDisabled, maxCrzControlGates: this.crzMaxControlGates, maxCrzTargetGates: this.crzMaxTargetGates, disableCswap: this.cswapDisabled, maxCswapControlGates: this.cswapMaxControlGates, disableSwap: this.swapDisabled, disableControlControl: this.controlControlDisabled, maxControlControlTargetGates: this.controlControlMaxTargetGates, disablePhasePhase: this.phasePhaseDisabled, maxPhasePhaseTargetGates: this.phasePhaseMaxTargetGates });
  }
  dispatchMouseleaveEvent() {
    this.dispatchEvent(new Event("quantum-circuit-mouseleave", { bubbles: true }));
  }
  resize() {
    this.removeEmptySteps(), this.appendMinimumSteps(), this.appendMinimumWires(), this.removeLastEmptyWires(), this.updateAllWires();
  }
  h(...e) {
    let t, i;
    if (typeof e[0] == "number")
      t = e;
    else {
      let l = e[0];
      t = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new Kt();
      return i && l.disable(), l;
    }, ...t), this.resize(), this;
  }
  x(...e) {
    let t, i;
    if (typeof e[0] == "number")
      t = e;
    else {
      let l = e[0];
      t = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new sr();
      return i && l.disable(), l;
    }, ...t), this;
  }
  y(...e) {
    let t, i;
    if (typeof e[0] == "number")
      t = e;
    else {
      let l = e[0];
      t = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new lr();
      return i && l.disable(), l;
    }, ...t), this;
  }
  z(...e) {
    let t, i;
    if (typeof e[0] == "number")
      t = e;
    else {
      let l = e[0];
      t = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new ur();
      return i && l.disable(), l;
    }, ...t), this;
  }
  phase(...e) {
    let t = "", i, l;
    if (typeof e[0] == "number")
      i = e;
    else if (typeof e[0] == "string")
      t = e[0], i = e.slice(1);
    else {
      let d = e[0];
      i = d.targets, l = d.disabled;
    }
    let c = this.applyOperationToTargets(() => {
      let d = new er();
      return d.angle = t, l && d.disable(), d;
    }, ...i);
    return i.length > 1 && this.updateStepOperationAttributes(c), this;
  }
  t(...e) {
    let t, i;
    if (typeof e[0] == "number")
      t = e;
    else {
      let l = e[0];
      t = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new ar();
      return i && l.disable(), l;
    }, ...t), this.resize(), this;
  }
  rnot(...e) {
    let t, i;
    if (typeof e[0] == "number")
      t = e;
    else {
      let l = e[0];
      t = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new tr();
      return i && l.disable(), l;
    }, ...t), this;
  }
  rx(...e) {
    let t, i;
    if (typeof e[0] == "number")
      t = e;
    else {
      let l = e[0];
      t = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new rr();
      return i && l.disable(), l;
    }, ...t), this;
  }
  ry(...e) {
    let t, i;
    if (typeof e[0] == "number")
      t = e;
    else {
      let l = e[0];
      t = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new nr();
      return i && l.disable(), l;
    }, ...t), this;
  }
  rz(...e) {
    let t, i;
    if (typeof e[0] == "number")
      t = e;
    else {
      let l = e[0];
      t = l.targets, i = l.disabled;
    }
    return this.applyOperationToTargets(() => {
      let l = new ir();
      return i && l.disable(), l;
    }, ...t), this;
  }
  swap(...e) {
    let t = this.applyOperationToTargets(() => new or(), ...e);
    return this.updateStepOperationAttributes(t), this;
  }
  control(...e) {
    let t = this.applyOperationToTargets(() => new $t(), ...e);
    return this.updateStepOperationAttributes(t), this;
  }
  bloch(...e) {
    return this.applyOperationToTargets(() => new nt(), ...e), this;
  }
  write(e, ...t) {
    return this.applyOperationToTargets(() => {
      let i = new Ft();
      return i.value = e, i;
    }, ...t), this.resize(), this;
  }
  measure(...e) {
    return this.applyOperationToTargets(() => new Qt(), ...e), this.resize(), this;
  }
  applyOperationToTargets(e, ...t) {
    let i = Math.max(...t) + 1, l = this.appendStepWithDropzones(i);
    for (let c of t) {
      let d = e();
      l.dropzoneAt(c).put(d);
    }
    return l;
  }
  ch(e, t) {
    return this.controlledU(Kt, e, t), this;
  }
  cnot(e, t) {
    return this.controlledU(sr, e, t), this.resize(), this;
  }
  cy(e, t) {
    return this.controlledU(lr, e, t), this;
  }
  cz(e, t) {
    return this.controlledU(ur, e, t), this;
  }
  cphase(e, t) {
    return this.controlledU(er, e, t), this;
  }
  ct(e, t) {
    return this.controlledU(ar, e, t), this;
  }
  crnot(e, t) {
    return this.controlledU(tr, e, t), this;
  }
  crx(e, t) {
    return this.controlledU(rr, e, t), this;
  }
  cry(e, t) {
    return this.controlledU(nr, e, t), this;
  }
  crz(e, t) {
    return this.controlledU(ir, e, t), this;
  }
  cswap(e, t) {
    return this.controlledU(or, e, t), this;
  }
  cc(...e) {
    let t = Math.max(...e) + 1, i = this.appendStepWithDropzones(t);
    for (let l of e)
      i.dropzoneAt(l).put(new $t());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(i), this;
  }
  controlledU(e, t, i) {
    let l = [].concat(t), c = [].concat(i), d = l.concat(c), v = Math.max(...d) + 1, b = this.appendStepWithDropzones(v);
    for (let y of l)
      b.dropzoneAt(y).put(new $t());
    for (let y of c)
      b.dropzoneAt(y).put(new e());
    this.appendMinimumWires(), this.updateStepOperationAttributes(b);
  }
  appendStep() {
    let e = new Dt(), t = this.blocks.slice(-1)[0] || null;
    return t === null || t.finalized ? this.append(e) : t.append(e), e;
  }
  appendStepWithDropzones(e) {
    let t = new Dt();
    this.append(t);
    for (let i = 0; i < e; i++) {
      let l = new xt();
      t.append(l);
    }
    return t;
  }
  updateAllWires() {
    let e = this.steps[0];
    if (e === void 0)
      return;
    let t = e.dropzones.length;
    for (let i = 0; i < t; i++)
      this.updateWire(i);
  }
  activateOperation(e) {
    for (let t of this.operations)
      t.active = false;
    e.active = true;
  }
  appendWire() {
    for (let e of this.steps)
      e.appendDropzone();
  }
  removeLastEmptyWires() {
    for (; this.steps.every((e) => e.wireCount > this.minWireCount && !e.lastDropzone.occupied); )
      for (let e of this.steps)
        e.lastDropzone.remove();
  }
  removeEmptySteps() {
    for (let e of this.emptySteps)
      e.remove();
  }
  loadFromJson(e) {
    this.innerHTML = "";
    let t = null;
    if (e === "") {
      this.hasAttribute("data-update-url") && this.resize();
      return;
    }
    let i = JSON.parse(e);
    this.circuitTitle = (i.title || "").trim();
    let l = false;
    for (let c of i.cols) {
      let d = this.appendStep();
      l && (d.keep = true, l = false);
      for (let v of c) {
        switch (true) {
          case /^\|0>$/.test(v): {
            let b = new Ft();
            b.value = "0", d.appendOperation(b);
            break;
          }
          case /^\|1>$/.test(v): {
            let b = new Ft();
            b.value = "1", d.appendOperation(b);
            break;
          }
          case /^H/.test(v): {
            let b = new Kt();
            b.if = this.ifVariable(v.slice(1)), d.appendOperation(b);
            break;
          }
          case (/^X$/.test(v) || /^X<(.+)$/.test(v)): {
            let b = new sr();
            b.if = v.slice(2).trim(), d.appendOperation(b);
            break;
          }
          case /^Y/.test(v): {
            let b = new lr();
            b.if = this.ifVariable(v.slice(1)), d.appendOperation(b);
            break;
          }
          case /^Z/.test(v): {
            let b = new ur();
            b.if = this.ifVariable(v.slice(1)), d.appendOperation(b);
            break;
          }
          case /^P/.test(v): {
            let b = new er();
            b.angle = this.angleParameter(v.slice(1)), d.appendOperation(b);
            break;
          }
          case /^T/.test(v): {
            let b = new ar();
            b.if = this.ifVariable(v.slice(1)), d.appendOperation(b);
            break;
          }
          case /^X\^½/.test(v): {
            let b = new tr();
            b.if = this.ifVariable(v.slice(3)), d.appendOperation(b);
            break;
          }
          case /^Rx/.test(v): {
            let b = new rr();
            b.angle = this.angleParameter(v.slice(2)), d.appendOperation(b);
            break;
          }
          case /^Ry/.test(v): {
            let b = new nr();
            b.angle = this.angleParameter(v.slice(2)), d.appendOperation(b);
            break;
          }
          case /^Rz/.test(v): {
            let b = new ir();
            b.angle = this.angleParameter(v.slice(2)), d.appendOperation(b);
            break;
          }
          case /^Swap$/.test(v): {
            let b = new or();
            d.appendOperation(b);
            break;
          }
          case /^•$/.test(v): {
            let b = new $t();
            d.appendOperation(b);
            break;
          }
          case /^Bloch$/.test(v): {
            let b = new nt();
            d.appendOperation(b);
            break;
          }
          case /^Measure/.test(v): {
            let b = new Qt(), y = ((/^>(.+)$/.exec(v.slice(7)) || [])[1] || "").trim();
            b.flag = y, d.appendOperation(b);
            break;
          }
          case /^[[{](.+)$/.test(v): {
            let b = v.slice(1);
            d.remove(), t = new sn(), t.comment = b, t.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(t);
            break;
          }
          case /^[\]}]$/.test(v): {
            d.remove(), t.finalize(), l = true;
            break;
          }
          default: {
            if (v !== 1)
              throw new Error(`Unknown operation: ${v}`);
            d.appendDropzone();
          }
        }
        d.updateOperationAttributes();
      }
    }
    this.resize();
  }
  ifVariable(e) {
    return ((/^<(.+)$/.exec(e) || [])[1] || "").trim();
  }
  angleParameter(e) {
    return ((/^\((.+)\)$/.exec(e) || [])[1] || "").trim().replace("_", "/");
  }
  appendMinimumWires() {
    let e = this.largestStep, t = e && e.wireCount > this.minWireCount ? e.wireCount : this.minWireCount;
    for (let i of this.steps) {
      let l = t - i.wireCount;
      for (let c = 0; c < l; c++)
        i.appendDropzone();
    }
  }
  updateWire(e) {
    let t = false;
    for (let i of this.steps) {
      let l = i.dropzoneAt(e);
      if (l.inputWireQuantum = t, l.operationName === "write-gate")
        l.inputWireQuantum = t, l.outputWireQuantum = true, t = true;
      else if (l.operationName === "measurement-gate")
        l.inputWireQuantum = t, l.outputWireQuantum = false, t = false;
      else if (l.operationName === "swap-gate") {
        let c = i.dropzones.filter((d) => d.operationName === "swap-gate");
        if (c.length === 2) {
          let d = c.map((w) => i.bit(w)), v = i.bit(l), b = d[0] === v ? d[1] : d[0], y = i.dropzoneAt(b);
          l.inputWireQuantum = t, l.outputWireQuantum = y.inputWireQuantum, t = y.inputWireQuantum;
        } else
          l.inputWireQuantum = t, l.outputWireQuantum = t;
      } else
        l.inputWireQuantum = t, l.outputWireQuantum = t;
    }
  }
  updateChangedWire(e) {
    let t = e.target;
    if (!ln(t))
      throw new Error(`${t} isn't a circuit-step.`);
    let i = e.detail.dropzone;
    if (!Ml(i))
      throw new Error(`${i} isn't a circuit-dropzone.`);
    let l = t.dropzones.indexOf(i);
    ie.need(l !== -1, "circuit-dropzone not found."), this.updateWire(l);
  }
  set draggable(e) {
    for (let t of this.operations)
      t.draggable = e;
  }
  snapTargetAt(e, t) {
    return this.isVertical ? this.snapTargets[t][e] : this.snapTargets[e][t];
  }
  setSnapTargets(e) {
    let t = this.dropzones.filter((c) => !c.occupied), i = [];
    this.snapTargets = {};
    let l = e.dropzone;
    Ml(l) && t.push(l);
    for (let [c, d] of Object.entries(this.dropzones)) {
      let v = d.snapTarget, b = this.isVertical ? v.y : v.x, y = this.isVertical ? v.x : v.y, w = parseInt(c) % this.wireCount, _ = b - e.snapRange * 0.75, C = b + e.snapRange * 0.75;
      parseInt(c) < this.wireCount && (this.isVertical ? i.push({ x: y, y: _ }) : i.push({ x: _, y }), this.snapTargets[_] === void 0 && (this.snapTargets[_] = {}), this.snapTargets[_][y] === void 0 && (this.snapTargets[_][y] = { dropzone: null, stepIndex: -1, wireIndex: w })), this.isVertical ? i.push({ x: y, y: C }) : i.push({ x: C, y }), this.snapTargets[C] === void 0 && (this.snapTargets[C] = {}), this.snapTargets[C][y] === void 0 && (this.snapTargets[C][y] = { dropzone: null, stepIndex: Math.floor(parseInt(c) / this.wireCount), wireIndex: w }), (!d.occupied || d === l) && i.push(v), this.snapTargets[b] === void 0 && (this.snapTargets[b] = {}), this.snapTargets[b][y] === void 0 && (this.snapTargets[b][y] = { dropzone: d, stepIndex: null, wireIndex: w });
    }
    e.snapTargets = i;
  }
  updateSnapTargets(e) {
    let t = e[0];
    ie.notNull(t);
    let i = this.isVertical ? t.snapTarget.y : t.snapTarget.x;
    for (let [l, c] of Object.entries(this.snapTargets))
      if (!(parseInt(l) <= i))
        for (let d in c) {
          let v = c[d];
          v.stepIndex !== null && (v.stepIndex += 1);
        }
    for (let [l, c] of Object.entries(e)) {
      let d = c.snapTarget, v = this.isVertical ? d.y : d.x, b = this.isVertical ? d.x : d.y;
      ie.notNull(this.snapTargets[v]), this.snapTargets[v][b] = { dropzone: c, stepIndex: null, wireIndex: parseInt(l) };
    }
  }
  serialize() {
    return this.steps.map((e) => e.serialize());
  }
  get urlJson() {
    let e = window.location.href.toString().split(window.location.host)[1].slice(1);
    return decodeURIComponent(e);
  }
  clear() {
    history.pushState("", "", encodeURIComponent('{"cols":[]}')), location.reload();
  }
  toJson() {
    let e = false, t = [];
    for (let i of this.nonEmptySteps) {
      if (i.isInBlock) {
        if (!e) {
          let l = i.block;
          t.push(`["[${l.comment}"]`), e = true;
        }
      } else
        e && (t.push('["]"]'), e = false);
      t.push(i.toJson());
    }
    return e && t.push('["]"]'), this.circuitTitle !== "" ? `{"cols":[${t.join(",")}],"title":"${this.circuitTitle}"}` : `{"cols":[${t.join(",")}]}`;
  }
};
u(se, "QuantumCircuitElement"), D([G], se.prototype, "minStepCount", 2), D([G], se.prototype, "minWireCount", 2), D([G], se.prototype, "maxWireCount", 2), D([G], se.prototype, "editing", 2), D([G], se.prototype, "updateUrl", 2), D([G], se.prototype, "json", 2), D([G], se.prototype, "circuitTitle", 2), D([G], se.prototype, "debug", 2), D([G], se.prototype, "chDisabled", 2), D([G], se.prototype, "chMaxControlGates", 2), D([G], se.prototype, "chMaxTargetGates", 2), D([G], se.prototype, "cnotDisabled", 2), D([G], se.prototype, "cnotMaxControlGates", 2), D([G], se.prototype, "cnotMaxTargetGates", 2), D([G], se.prototype, "cyDisabled", 2), D([G], se.prototype, "cyMaxControlGates", 2), D([G], se.prototype, "cyMaxTargetGates", 2), D([G], se.prototype, "czDisabled", 2), D([G], se.prototype, "czMaxControlGates", 2), D([G], se.prototype, "czMaxTargetGates", 2), D([G], se.prototype, "cphaseDisabled", 2), D([G], se.prototype, "cphaseMaxControlGates", 2), D([G], se.prototype, "cphaseMaxTargetGates", 2), D([G], se.prototype, "ctDisabled", 2), D([G], se.prototype, "ctMaxControlGates", 2), D([G], se.prototype, "ctMaxTargetGates", 2), D([G], se.prototype, "crnotDisabled", 2), D([G], se.prototype, "crnotMaxControlGates", 2), D([G], se.prototype, "crnotMaxTargetGates", 2), D([G], se.prototype, "crxDisabled", 2), D([G], se.prototype, "crxMaxControlGates", 2), D([G], se.prototype, "crxMaxTargetGates", 2), D([G], se.prototype, "cryDisabled", 2), D([G], se.prototype, "cryMaxControlGates", 2), D([G], se.prototype, "cryMaxTargetGates", 2), D([G], se.prototype, "crzDisabled", 2), D([G], se.prototype, "crzMaxControlGates", 2), D([G], se.prototype, "crzMaxTargetGates", 2), D([G], se.prototype, "cswapDisabled", 2), D([G], se.prototype, "cswapMaxControlGates", 2), D([G], se.prototype, "swapDisabled", 2), D([G], se.prototype, "controlControlDisabled", 2), D([G], se.prototype, "controlControlMaxTargetGates", 2), D([G], se.prototype, "phasePhaseDisabled", 2), D([G], se.prototype, "phasePhaseMaxTargetGates", 2), D([Bt], se.prototype, "blocks", 2);
re(se);
var $n = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.updateUrl = false;
  }
  connectedCallback() {
    this.worker = new Worker("./serviceworker.js"), this.worker.addEventListener("message", this.handleServiceWorkerMessage.bind(this)), this.addEventListener("operation-inspector-if-change", this.run), this.addEventListener("operation-inspector-angle-change", this.run), this.addEventListener("operation-inspector-angle-update", this.maybeUpdateUrl), this.addEventListener("operation-inspector-flag-change", this.run), this.addEventListener("circuit-step-mouseenter", this.runUnlessEditing), this.addEventListener("circuit-step-mouseleave", this.runUnlessEditing), this.addEventListener("circuit-step-snap", this.run), this.addEventListener("circuit-step-unsnap", this.run), this.addEventListener("circuit-step-update", this.run), this.addEventListener("circle-notation-init", this.run), this.addEventListener("circle-notation-visibility-change", this.run), this.addEventListener("run-circuit-button-click", this.run), this.addEventListener("circuit-step-snap", this.maybeUpdateUrl), this.addEventListener("circuit-step-unsnap", this.maybeUpdateUrl), this.attachShadow({ mode: "open" }), this.update(), this.maybeUpdateUrl(), this.circuit.setBreakpoint(this.circuit.stepAt(0));
  }
  update() {
    ee(Z`<slot></slot>`, this.shadowRoot);
  }
  clearCircuit() {
    this.circuit.clear();
  }
  handleServiceWorkerMessage(e) {
    var l;
    let t = e.data, i = this.activeStepIndex;
    switch (t.type) {
      case "step": {
        let c = this.circuit.stepAt(t.step);
        for (let d in t.blochVectors) {
          let v = parseInt(d), b = c.dropzoneAt(v).operation;
          if (Zp(b)) {
            let y = t.blochVectors[v];
            b.x = y[0], b.y = y[1], b.z = y[2];
          }
        }
        if (t.measuredBits) {
          let d = t.measuredBits;
          for (let v in d) {
            let b = parseInt(v), y = c.dropzoneAt(b).operation;
            Jp(y) && (y.value = d[b].toString());
          }
        }
        for (let d of c.dropzones) {
          let v = d.operation;
          !$r(v) || v.if !== "" && (v.disabled = !t.flags[v.if]);
        }
        if (i === t.step) {
          let d = {};
          for (let v in t.amplitudes) {
            let b = t.amplitudes[v];
            d[v] = new Er(b[0], b[1]);
          }
          (l = this.virtualizedGrid) == null || l.setAmplitudes(d);
        }
        break;
      }
      case "finish": {
        for (let c of this.runCircuitButtons)
          c.running = false;
        break;
      }
      default:
        throw new Tt("Unknown service worker message", { data: t });
    }
  }
  run() {
    let e = this.activeStepIndex, t = this.circuit.serialize();
    ie.need(t.length > 0, "non-zero step length");
    let i = Math.max(...t.map((c) => Math.max(...c.map((d) => {
      let v = [];
      return wn(d) && (v = d.controls), Math.max(...d.targets.concat(v));
    })))), l = i >= 0 ? i + 1 : 1;
    this.virtualizedGrid.qubitCount = l, this.worker.postMessage({ qubitCount: l, stepIndex: e, steps: t, targets: this.virtualizedGrid.visibleQubitCircleKets });
  }
  runUnlessEditing() {
    this.circuit.editing || this.run();
  }
  get activeStepIndex() {
    let e = this.circuit.activeStep, t = this.circuit.breakpoint, i = e || t;
    return i === null && (i = this.circuit.stepAt(0), this.circuit.setBreakpoint(i)), this.circuit.fetchStepIndex(i);
  }
  maybeUpdateUrl() {
    if (!this.updateUrl)
      return;
    ie.notNull(this.circuit);
    let e = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(e));
  }
};
u($n, "QuantumSimulatorElement"), D([G], $n.prototype, "updateUrl", 2), D([ze], $n.prototype, "circuit", 2), D([ze], $n.prototype, "virtualizedGrid", 2), D([Bt], $n.prototype, "runCircuitButtons", 2);
re($n);
function nd(r, e = 0, { start: t = true, middle: i = true, once: l = false } = {}) {
  let c = 0, d, v = false;
  function b(...y) {
    if (v)
      return;
    let w = Date.now() - c;
    c = Date.now(), t ? (t = false, r.apply(this, y), l && b.cancel()) : (i && w < e || !i) && (clearTimeout(d), d = setTimeout(() => {
      c = Date.now(), r.apply(this, y), l && b.cancel();
    }, i ? e - w : e));
  }
  return u(b, "fn"), b.cancel = () => {
    clearTimeout(d), v = true;
  }, b;
}
u(nd, "throttle");
function id(r, e = 0, { start: t = false, middle: i = false, once: l = false } = {}) {
  return nd(r, e, { start: t, middle: i, once: l });
}
u(id, "debounce");
function od(r = 0, e = {}) {
  return (t, i, l) => {
    if (!l || typeof l.value != "function")
      throw new Error("debounce can only decorate functions");
    let c = l.value;
    l.value = id(c, r, e), Object.defineProperty(t, i, l);
  };
}
u(od, "debounce");
var it = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.qubitCount = 1;
    this.size = "xl";
    this.cols = 0;
    this.rows = 0;
    this.paddingX = 0;
    this.paddingY = 0;
    this.colStartIndex = -1;
    this.colEndIndex = -1;
    this.rowStartIndex = -1;
    this.rowEndIndex = -1;
    this.vertical = true;
  }
  attributeChangedCallback(e, t, i) {
    t !== i && e === "data-qubit-count" && (ie.notNull(i), this.updateSize(parseInt(i)), this.updateDimension(parseInt(i)), this.redrawWindowAndInnerContainer(), this.clearInnerContainer(), this.drawQubitCircles(), this.dispatchVisibilityChangedEvent());
  }
  updateSize(e) {
    switch (e) {
      case 1: {
        this.size = "xl";
        break;
      }
      case 2: {
        this.size = "xl";
        break;
      }
      case 3: {
        this.vertical ? this.size = "lg" : this.size = "xl";
        break;
      }
      case 4: {
        this.vertical ? this.size = "base" : this.size = "lg";
        break;
      }
      case 5: {
        this.vertical ? this.size = "sm" : this.size = "base";
        break;
      }
      case 6: {
        this.vertical ? this.size = "xs" : this.size = "base";
        break;
      }
      case 7: {
        this.size = "xs";
        break;
      }
      case 8: {
        this.size = "xs";
        break;
      }
      case 9: {
        this.size = "xs";
        break;
      }
      case 10: {
        this.size = "xs";
        break;
      }
      case 11: {
        this.size = "xs";
        break;
      }
      case 12: {
        this.size = "xs";
        break;
      }
      case 13: {
        this.size = "xs";
        break;
      }
      case 14: {
        this.size = "xs";
        break;
      }
      case 15: {
        this.size = "xs";
        break;
      }
      case 16: {
        this.size = "xs";
        break;
      }
      default:
        throw new Tt("unsupported qubit count", e);
    }
  }
  updateDimension(e) {
    switch (e) {
      case 1: {
        this.rows = 1, this.cols = 2;
        break;
      }
      case 2: {
        this.rows = 1, this.cols = 4;
        break;
      }
      case 3: {
        this.vertical ? (this.rows = 2, this.cols = 4) : (this.rows = 1, this.cols = 8);
        break;
      }
      case 4: {
        this.rows = 2, this.cols = 8;
        break;
      }
      case 5: {
        this.vertical ? (this.rows = 4, this.cols = 8) : (this.rows = 2, this.cols = 16);
        break;
      }
      case 6: {
        this.rows = 4, this.cols = 16;
        break;
      }
      case 7: {
        this.vertical ? (this.rows = 8, this.cols = 16) : (this.rows = 4, this.cols = 32);
        break;
      }
      case 8: {
        this.vertical ? (this.rows = 16, this.cols = 16) : (this.rows = 8, this.cols = 32);
        break;
      }
      case 9: {
        this.rows = 16, this.cols = 32;
        break;
      }
      case 10: {
        this.rows = 32, this.cols = 32;
        break;
      }
      case 11: {
        this.rows = 32, this.cols = 64;
        break;
      }
      case 12: {
        this.rows = 64, this.cols = 64;
        break;
      }
      case 13: {
        this.rows = 64, this.cols = 128;
        break;
      }
      case 14: {
        this.rows = 128, this.cols = 128;
        break;
      }
      case 15: {
        this.rows = 128, this.cols = 256;
        break;
      }
      case 16: {
        this.rows = 256, this.cols = 256;
        break;
      }
      default:
        throw new Tt("unsupported qubit count", e);
    }
  }
  get visibleQubitCircleKets() {
    return this.qubitCircles.map((t) => {
      let i = t.getAttribute("data-ket");
      return ie.notNull(i), parseInt(i);
    });
  }
  setAmplitudes(e) {
    for (let t of this.qubitCircles) {
      let i = t.getAttribute("data-ket");
      ie.notNull(i);
      let l = parseInt(i), c = e[l];
      if (c === void 0)
        continue;
      t.setAttribute("data-amplitude-real", c.real.toString()), t.setAttribute("data-amplitude-imag", c.imag.toString());
      let d = Math.floor(c.abs() * 1e5) / 1e5, v = t.children.item(0);
      ie.notNull(v), v.style.setProperty("--magnitude", d.toString());
      let b = c.phase() / Math.PI * 180, y = t.children.item(1);
      ie.notNull(y);
      let w = Math.trunc(b);
      w < 0 && (w = 360 + w), y.style.setProperty("--phase", `-${w.toString()}deg`);
    }
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.startResizeObserver(), this.updatePadding(), this.redrawWindowAndInnerContainer(), this.maybeRedrawQubitCircles(), this.dispatchEvent(new Event("circle-notation-init", { bubbles: true }));
  }
  startResizeObserver() {
    this.detectLayoutOrientation(), new ResizeObserver(this.detectLayoutOrientation.bind(this)).observe(document.body);
  }
  detectLayoutOrientation() {
    let e = false;
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 768 ? (this.vertical || (e = true), this.vertical = true) : (this.vertical && (e = true), this.vertical = false), e && (this.updateSize(this.qubitCount), this.updatePadding(), this.updateDimension(this.qubitCount), this.redrawWindowAndInnerContainer(), this.clearInnerContainer(), this.drawQubitCircles(), this.dispatchVisibilityChangedEvent());
  }
  updatePadding() {
    this.style.removeProperty("padding");
    let e = window.getComputedStyle(this);
    this.paddingX = parseInt(e.paddingLeft, 10), this.paddingY = parseInt(e.paddingTop, 10), this.style.paddingTop = "0px", this.style.paddingRight = "0px", this.style.paddingBottom = "0px", this.style.paddingLeft = "0px";
  }
  update() {
    ee(Z`<style>
          :root {
            --magnitude: 0;
            --phase: 0deg;
          }

          .virtualized-grid__window {
            overflow: auto;
          }

          .virtualized-grid__inner-container {
            position: relative;
          }

          .qubit-circle {
            position: absolute;
          }

          :host([data-size='xl']) .qubit-circle {
            height: 64px;
            width: 64px;
          }

          :host([data-size='lg']) .qubit-circle {
            height: 48px;
            width: 48px;
          }

          :host([data-size='lg']) .qubit-circle {
            height: 48px;
            width: 48px;
          }

          :host([data-size='base']) .qubit-circle {
            height: 32px;
            width: 32px;
          }

          :host([data-size='sm']) .qubit-circle {
            height: 23px;
            width: 23px;
          }

          :host([data-size='xs']) .qubit-circle {
            height: 17px;
            width: 17px;
          }

          /* magnitude */

          .qubit-circle__magnitude {
            position: absolute;
            border-style: solid;
            border-color: rgb(226 232 240); /* slate-200 */
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            border-radius: 9999px;
          }

          :host([data-size='xl']) .qubit-circle__magnitude,
          :host([data-size='lg']) .qubit-circle__magnitude,
          :host([data-size='base']) .qubit-circle__magnitude {
            border-width: 2px;
          }
          :host([data-size='sm']) .qubit-circle__magnitude,
          :host([data-size='xs']) .qubit-circle__magnitude {
            border-width: 1px;
          }

          .qubit-circle__magnitude::after {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            border-radius: 9999px;
            background-color: rgb(14 165 233); /* sky-500 */
            transform-origin: center;
            transform: scaleX(var(--magnitude)) scaleY(var(--magnitude));

            content: '';
          }

          /* phase */

          .qubit-circle__phase {
            position: absolute;
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            border-style: solid;
            border-color: rgb(100 116 139); /* slate-500 */
            border-radius: 9999px;
            transform-origin: center;
            transform: rotate(var(--phase));
          }

          .qubit-circle[data-amplitude-real='0'][data-amplitude-imag='0'] .qubit-circle__phase {
            transform: scaleX(0) scaleY(0);
          }

          :host([data-size='xl']) .qubit-circle__phase,
          :host([data-size='lg']) .qubit-circle__phase,
          :host([data-size='base']) .qubit-circle__phase {
            border-width: 2px;
          }
          :host([data-size='sm']) .qubit-circle__phase,
          :host([data-size='xs']) .qubit-circle__phase {
            border-width: 1px;
          }

          .qubit-circle__phase::after {
            position: absolute;
            top: 0px;
            right: 0px;
            left: 0px;
            background-color: rgb(15 23 42); /* slate-900 */
            height: 50%;
            margin-left: auto;
            margin-right: auto;
            border-bottom-right-radius: 0.25rem; /* 4px */
            border-bottom-left-radius: 0.25rem; /* 4px */

            content: '';
          }

          :host([data-size='xl']) .qubit-circle__phase::after,
          :host([data-size='lg']) .qubit-circle__phase::after,
          :host([data-size='base']) .qubit-circle__phase::after {
            width: 0.125rem; /* 2px */
          }
          :host([data-size='sm']) .qubit-circle__phase::after,
          :host([data-size='xs']) .qubit-circle__phase::after {
            width: 1px;
          }
        </style>

        <div
          class="virtualized-grid__window"
          data-target="virtualized-grid.window"
          data-action="scroll:virtualized-grid#maybeRedrawQubitCircles"
          style="height: ${this.windowHeight}px; width: ${this.windowWidth}px"
        >
          <div
            class="virtualized-grid__inner-container"
            data-target="virtualized-grid.innerContainer"
            style="height: ${this.innerHeight}px; width: ${this.innerWidth}px"
          ></div>
        </div>`, this.shadowRoot);
  }
  get innerHeight() {
    return this.rows * this.qubitCircleSize + this.paddingY * 2;
  }
  get innerWidth() {
    return this.cols * this.qubitCircleSize + this.paddingX * 2;
  }
  clearInnerContainer() {
    this.innerContainer !== void 0 && (this.innerContainer.textContent = "");
  }
  get qubitCirclesAreaHeight() {
    switch (this.qubitCount) {
      case 1:
        return this.qubitCircleSize;
      case 2:
        return this.qubitCircleSize;
      case 3:
        return this.vertical ? this.qubitCircleSize * 2 : this.qubitCircleSize;
      case 4:
        return this.qubitCircleSize * 2;
      case 5:
        return this.vertical ? this.qubitCircleSize * 4 : this.qubitCircleSize * 2;
      case 6:
        return this.qubitCircleSize * 4;
      case 7:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 4;
      case 8:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 8;
      case 9:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 8;
      case 10:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 8;
      case 11:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 8;
      case 12:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 8;
      case 13:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 8;
      case 14:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 8;
      case 15:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 8;
      case 16:
        return this.vertical ? this.qubitCircleSize * 5 : this.qubitCircleSize * 8;
      default:
        throw new Tt("unsupported qubit count", this.qubitCount);
    }
  }
  get qubitCirclesAreaWidth() {
    switch (this.qubitCount) {
      case 1:
        return this.qubitCircleSize * 2;
      case 2:
        return this.qubitCircleSize * 4;
      case 3:
        return this.vertical ? this.qubitCircleSize * 4 : this.qubitCircleSize * 8;
      case 4:
        return this.qubitCircleSize * 8;
      case 5:
        return this.vertical ? this.qubitCircleSize * 8 : this.qubitCircleSize * 16;
      case 6:
        return this.qubitCircleSize * 16;
      case 7:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
      case 8:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
      case 9:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
      case 10:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
      case 11:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
      case 12:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
      case 13:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
      case 14:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
      case 15:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
      case 16:
        return this.vertical ? this.qubitCircleSize * 16 : this.qubitCircleSize * 32;
      default:
        throw new Tt("unsupported qubit count", this.qubitCount);
    }
  }
  get windowHeight() {
    return this.qubitCirclesAreaHeight + this.paddingY * 2;
  }
  get windowWidth() {
    ie.notNull(this.parentElement);
    let e = this.qubitCirclesAreaWidth + this.paddingX;
    return this.vertical && e < this.parentElement.clientWidth ? this.parentElement.clientWidth : e;
  }
  redrawWindowAndInnerContainer() {
    this.window !== void 0 && (this.window.style.height = `${this.windowHeight}px`, this.window.style.width = `${this.windowWidth}px`, this.innerContainer.style.height = `${this.innerHeight}px`, this.innerContainer.style.width = `${this.innerWidth}px`);
  }
  get qubitCircleSize() {
    switch (this.qubitCount) {
      case 1:
        return 64;
      case 2:
        return 64;
      case 3:
        return this.vertical ? 48 : 64;
      case 4:
        return this.vertical ? 32 : 48;
      case 5:
        return this.vertical ? 23 : 32;
      case 6:
        return this.vertical ? 17 : 32;
      case 7:
        return 17;
      case 8:
        return 17;
      case 9:
        return 17;
      case 10:
        return 17;
      case 11:
        return 17;
      case 12:
        return 17;
      case 13:
        return 17;
      case 14:
        return 17;
      case 15:
        return 17;
      case 16:
        return 17;
      default:
        throw new Tt("unsupported qubit count", this.qubitCount);
    }
  }
  drawQubitCircles() {
    if (this.window === void 0)
      return;
    this.colStartIndex = this.calculateColStartIndex, this.colEndIndex = this.calculateColEndIndex, this.rowStartIndex = this.calculateRowStartIndex, this.rowEndIndex = this.calculateRowEndIndex;
    let e = [];
    for (let i = this.rowStartIndex; i <= this.rowEndIndex; i++)
      for (let l = this.colStartIndex; l <= this.colEndIndex; l++)
        e.push({ col: l, row: i });
    let t = document.createDocumentFragment();
    for (let i of this.allQubitCircleElements(e))
      t.appendChild(i);
    this.innerContainer.appendChild(t);
  }
  maybeRedrawQubitCircles() {
    if (this.window === void 0)
      return;
    let e = this.calculateColStartIndex, t = this.calculateColEndIndex, i = this.calculateRowStartIndex, l = this.calculateRowEndIndex;
    if (this.colStartIndex === e && this.colEndIndex === t && this.rowStartIndex === i && this.rowEndIndex === l)
      return;
    let c = [];
    for (let v = i; v <= l; v++)
      for (let b = e; b <= t; b++)
        (b < this.colStartIndex || this.colEndIndex < b || v < this.rowStartIndex || this.rowEndIndex < v) && c.push({ col: b, row: v });
    this.colStartIndex = e, this.colEndIndex = t, this.rowStartIndex = i, this.rowEndIndex = l;
    let d = document.createDocumentFragment();
    for (let v of this.allQubitCircleElements(c))
      d.appendChild(v);
    this.innerContainer.appendChild(d);
    for (let v of this.qubitCircles) {
      let b = v.getAttribute("data-col"), y = v.getAttribute("data-row");
      ie.notNull(b), ie.notNull(y);
      let w = parseInt(b), _ = parseInt(y);
      (w < e || t < w || _ < i || l < _) && v.remove();
    }
    this.dispatchVisibilityChangedEvent();
  }
  dispatchVisibilityChangedEvent() {
    this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  allQubitCircleElements(e) {
    return e.map(this.qubitCircleElement.bind(this));
  }
  qubitCircleElement(e) {
    let t = e.col + e.row * this.cols, i = this.qubitCircleSize * e.row + this.paddingY, l = this.qubitCircleSize * e.col + this.paddingX, c = document.createElement("div");
    c.className = "qubit-circle", c.setAttribute("data-col", e.col.toString()), c.setAttribute("data-row", e.row.toString()), c.setAttribute("data-ket", t.toString()), c.setAttribute("data-targets", "virtualized-grid.qubitCircles"), c.setAttribute("data-amplitude-real", "0"), c.setAttribute("data-amplitude-imag", "0"), c.style.setProperty("top", `${i}px`), c.style.setProperty("left", `${l}px`);
    let d = document.createElement("div");
    d.className = "qubit-circle__magnitude", d.style.setProperty("--magnitude", "0");
    let v = document.createElement("div");
    return v.className = "qubit-circle__phase", c.appendChild(d), c.appendChild(v), c;
  }
  get calculateColStartIndex() {
    let e = this.window.scrollLeft;
    return e < this.paddingX ? 0 : Math.floor((e - this.paddingX) / this.qubitCircleSize);
  }
  get calculateColEndIndex() {
    let e = this.window.scrollLeft;
    return e < this.paddingX ? Math.min(this.cols - 1, Math.floor((this.windowWidth - (this.paddingX - e)) / this.qubitCircleSize)) : Math.min(this.cols - 1, Math.floor((this.windowWidth + (e - this.paddingX)) / this.qubitCircleSize));
  }
  get calculateRowStartIndex() {
    let e = this.window.scrollTop;
    return e < this.paddingY ? 0 : Math.floor((e - this.paddingY) / this.qubitCircleSize);
  }
  get calculateRowEndIndex() {
    let e = this.window.scrollTop;
    return e < this.paddingY ? Math.min(this.rows - 1, Math.floor((this.windowHeight - (this.paddingY - e)) / this.qubitCircleSize)) : Math.min(this.rows - 1, Math.floor((this.windowHeight + (e - this.paddingY)) / this.qubitCircleSize));
  }
};
u(it, "VirtualizedGridElement"), D([G], it.prototype, "qubitCount", 2), D([G], it.prototype, "size", 2), D([G], it.prototype, "cols", 2), D([G], it.prototype, "rows", 2), D([G], it.prototype, "paddingX", 2), D([G], it.prototype, "paddingY", 2), D([G], it.prototype, "colStartIndex", 2), D([G], it.prototype, "colEndIndex", 2), D([G], it.prototype, "rowStartIndex", 2), D([G], it.prototype, "rowEndIndex", 2), D([G], it.prototype, "vertical", 2), D([ze], it.prototype, "window", 2), D([ze], it.prototype, "innerContainer", 2), D([Bt], it.prototype, "qubitCircles", 2), D([od(10)], it.prototype, "maybeRedrawQubitCircles", 1), it = D([re], it);

// src/serviceworker-companion.js
if (navigator.serviceWorker) {
  if (location.hostname === "localhost") {
    navigator.serviceWorker.register("/serviceworker.js", { scope: "./" }).catch(function(error) {
      console.log("[Companion]", "Service worker registration failed: " + error);
    });
  } else {
    navigator.serviceWorker.register("/qni/serviceworker.js", { scope: "/qni/" }).catch(function(error) {
      console.log("[Companion]", "Service worker registration failed: " + error);
    });
  }
}
export {
  Er as Complex
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/**
 * @license Fraction.js v4.1.2 23/05/2021
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
//# sourceMappingURL=application.js.map
