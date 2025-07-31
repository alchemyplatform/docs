var k2 = Object.defineProperty;
var P2 = Object.getPrototypeOf;
var O2 = Reflect.get;
var ep = (n) => {
  throw TypeError(n);
};
var E2 = (n, t, o) =>
  t in n
    ? k2(n, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
    : (n[t] = o);
var L = (n, t, o) => E2(n, typeof t != "symbol" ? t + "" : t, o),
  jl = (n, t, o) => t.has(n) || ep("Cannot " + o);
var _t = (n, t, o) => (
    jl(n, t, "read from private field"), o ? o.call(n) : t.get(n)
  ),
  f0 = (n, t, o) =>
    t.has(n)
      ? ep("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(n)
        : t.set(n, o),
  en = (n, t, o, a) => (
    jl(n, t, "write to private field"), a ? a.call(n, o) : t.set(n, o), o
  ),
  Ml = (n, t, o) => (jl(n, t, "access private method"), o);
var tp = (n, t, o) => O2(P2(n), o, t);
function T2(n, t) {
  for (var o = 0; o < t.length; o++) {
    const a = t[o];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const i in a)
        if (i !== "default" && !(i in n)) {
          const c = Object.getOwnPropertyDescriptor(a, i);
          c &&
            Object.defineProperty(
              n,
              i,
              c.get ? c : { enumerable: !0, get: () => a[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) a(i);
  new MutationObserver((i) => {
    for (const c of i)
      if (c.type === "childList")
        for (const d of c.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && a(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(i) {
    const c = {};
    return (
      i.integrity && (c.integrity = i.integrity),
      i.referrerPolicy && (c.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
      c
    );
  }
  function a(i) {
    if (i.ep) return;
    i.ep = !0;
    const c = o(i);
    fetch(i.href, c);
  }
})();
function F2(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Il = { exports: {} },
  Zr = {},
  Rl = { exports: {} },
  ke = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var np;
function j2() {
  if (np) return ke;
  np = 1;
  var n = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    i = Symbol.for("react.profiler"),
    c = Symbol.for("react.provider"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    f = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function y(C) {
    return C === null || typeof C != "object"
      ? null
      : ((C = (v && C[v]) || C["@@iterator"]),
        typeof C == "function" ? C : null);
  }
  var x = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = Object.assign,
    O = {};
  function k(C, A, K) {
    (this.props = C),
      (this.context = A),
      (this.refs = O),
      (this.updater = K || x);
  }
  (k.prototype.isReactComponent = {}),
    (k.prototype.setState = function (C, A) {
      if (typeof C != "object" && typeof C != "function" && C != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, C, A, "setState");
    }),
    (k.prototype.forceUpdate = function (C) {
      this.updater.enqueueForceUpdate(this, C, "forceUpdate");
    });
  function P() {}
  P.prototype = k.prototype;
  function T(C, A, K) {
    (this.props = C),
      (this.context = A),
      (this.refs = O),
      (this.updater = K || x);
  }
  var I = (T.prototype = new P());
  (I.constructor = T), S(I, k.prototype), (I.isPureReactComponent = !0);
  var B = Array.isArray,
    F = Object.prototype.hasOwnProperty,
    $ = { current: null },
    N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function X(C, A, K) {
    var le,
      oe = {},
      _e = null,
      de = null;
    if (A != null)
      for (le in (A.ref !== void 0 && (de = A.ref),
      A.key !== void 0 && (_e = "" + A.key),
      A))
        F.call(A, le) && !N.hasOwnProperty(le) && (oe[le] = A[le]);
    var be = arguments.length - 2;
    if (be === 1) oe.children = K;
    else if (1 < be) {
      for (var pe = Array(be), Re = 0; Re < be; Re++)
        pe[Re] = arguments[Re + 2];
      oe.children = pe;
    }
    if (C && C.defaultProps)
      for (le in ((be = C.defaultProps), be))
        oe[le] === void 0 && (oe[le] = be[le]);
    return {
      $$typeof: n,
      type: C,
      key: _e,
      ref: de,
      props: oe,
      _owner: $.current,
    };
  }
  function he(C, A) {
    return {
      $$typeof: n,
      type: C.type,
      key: A,
      ref: C.ref,
      props: C.props,
      _owner: C._owner,
    };
  }
  function Ce(C) {
    return typeof C == "object" && C !== null && C.$$typeof === n;
  }
  function te(C) {
    var A = { "=": "=0", ":": "=2" };
    return (
      "$" +
      C.replace(/[=:]/g, function (K) {
        return A[K];
      })
    );
  }
  var ce = /\/+/g;
  function ye(C, A) {
    return typeof C == "object" && C !== null && C.key != null
      ? te("" + C.key)
      : A.toString(36);
  }
  function Se(C, A, K, le, oe) {
    var _e = typeof C;
    (_e === "undefined" || _e === "boolean") && (C = null);
    var de = !1;
    if (C === null) de = !0;
    else
      switch (_e) {
        case "string":
        case "number":
          de = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case n:
            case t:
              de = !0;
          }
      }
    if (de)
      return (
        (de = C),
        (oe = oe(de)),
        (C = le === "" ? "." + ye(de, 0) : le),
        B(oe)
          ? ((K = ""),
            C != null && (K = C.replace(ce, "$&/") + "/"),
            Se(oe, A, K, "", function (Re) {
              return Re;
            }))
          : oe != null &&
            (Ce(oe) &&
              (oe = he(
                oe,
                K +
                  (!oe.key || (de && de.key === oe.key)
                    ? ""
                    : ("" + oe.key).replace(ce, "$&/") + "/") +
                  C,
              )),
            A.push(oe)),
        1
      );
    if (((de = 0), (le = le === "" ? "." : le + ":"), B(C)))
      for (var be = 0; be < C.length; be++) {
        _e = C[be];
        var pe = le + ye(_e, be);
        de += Se(_e, A, K, pe, oe);
      }
    else if (((pe = y(C)), typeof pe == "function"))
      for (C = pe.call(C), be = 0; !(_e = C.next()).done; )
        (_e = _e.value), (pe = le + ye(_e, be++)), (de += Se(_e, A, K, pe, oe));
    else if (_e === "object")
      throw (
        ((A = String(C)),
        Error(
          "Objects are not valid as a React child (found: " +
            (A === "[object Object]"
              ? "object with keys {" + Object.keys(C).join(", ") + "}"
              : A) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return de;
  }
  function ge(C, A, K) {
    if (C == null) return C;
    var le = [],
      oe = 0;
    return (
      Se(C, le, "", "", function (_e) {
        return A.call(K, _e, oe++);
      }),
      le
    );
  }
  function me(C) {
    if (C._status === -1) {
      var A = C._result;
      (A = A()),
        A.then(
          function (K) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 1), (C._result = K));
          },
          function (K) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 2), (C._result = K));
          },
        ),
        C._status === -1 && ((C._status = 0), (C._result = A));
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var we = { current: null },
    q = { transition: null },
    Y = {
      ReactCurrentDispatcher: we,
      ReactCurrentBatchConfig: q,
      ReactCurrentOwner: $,
    };
  return (
    (ke.Children = {
      map: ge,
      forEach: function (C, A, K) {
        ge(
          C,
          function () {
            A.apply(this, arguments);
          },
          K,
        );
      },
      count: function (C) {
        var A = 0;
        return (
          ge(C, function () {
            A++;
          }),
          A
        );
      },
      toArray: function (C) {
        return (
          ge(C, function (A) {
            return A;
          }) || []
        );
      },
      only: function (C) {
        if (!Ce(C))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return C;
      },
    }),
    (ke.Component = k),
    (ke.Fragment = o),
    (ke.Profiler = i),
    (ke.PureComponent = T),
    (ke.StrictMode = a),
    (ke.Suspense = f),
    (ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y),
    (ke.cloneElement = function (C, A, K) {
      if (C == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            C +
            ".",
        );
      var le = S({}, C.props),
        oe = C.key,
        _e = C.ref,
        de = C._owner;
      if (A != null) {
        if (
          (A.ref !== void 0 && ((_e = A.ref), (de = $.current)),
          A.key !== void 0 && (oe = "" + A.key),
          C.type && C.type.defaultProps)
        )
          var be = C.type.defaultProps;
        for (pe in A)
          F.call(A, pe) &&
            !N.hasOwnProperty(pe) &&
            (le[pe] = A[pe] === void 0 && be !== void 0 ? be[pe] : A[pe]);
      }
      var pe = arguments.length - 2;
      if (pe === 1) le.children = K;
      else if (1 < pe) {
        be = Array(pe);
        for (var Re = 0; Re < pe; Re++) be[Re] = arguments[Re + 2];
        le.children = be;
      }
      return {
        $$typeof: n,
        type: C.type,
        key: oe,
        ref: _e,
        props: le,
        _owner: de,
      };
    }),
    (ke.createContext = function (C) {
      return (
        (C = {
          $$typeof: d,
          _currentValue: C,
          _currentValue2: C,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (C.Provider = { $$typeof: c, _context: C }),
        (C.Consumer = C)
      );
    }),
    (ke.createElement = X),
    (ke.createFactory = function (C) {
      var A = X.bind(null, C);
      return (A.type = C), A;
    }),
    (ke.createRef = function () {
      return { current: null };
    }),
    (ke.forwardRef = function (C) {
      return { $$typeof: h, render: C };
    }),
    (ke.isValidElement = Ce),
    (ke.lazy = function (C) {
      return { $$typeof: b, _payload: { _status: -1, _result: C }, _init: me };
    }),
    (ke.memo = function (C, A) {
      return { $$typeof: m, type: C, compare: A === void 0 ? null : A };
    }),
    (ke.startTransition = function (C) {
      var A = q.transition;
      q.transition = {};
      try {
        C();
      } finally {
        q.transition = A;
      }
    }),
    (ke.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (ke.useCallback = function (C, A) {
      return we.current.useCallback(C, A);
    }),
    (ke.useContext = function (C) {
      return we.current.useContext(C);
    }),
    (ke.useDebugValue = function () {}),
    (ke.useDeferredValue = function (C) {
      return we.current.useDeferredValue(C);
    }),
    (ke.useEffect = function (C, A) {
      return we.current.useEffect(C, A);
    }),
    (ke.useId = function () {
      return we.current.useId();
    }),
    (ke.useImperativeHandle = function (C, A, K) {
      return we.current.useImperativeHandle(C, A, K);
    }),
    (ke.useInsertionEffect = function (C, A) {
      return we.current.useInsertionEffect(C, A);
    }),
    (ke.useLayoutEffect = function (C, A) {
      return we.current.useLayoutEffect(C, A);
    }),
    (ke.useMemo = function (C, A) {
      return we.current.useMemo(C, A);
    }),
    (ke.useReducer = function (C, A, K) {
      return we.current.useReducer(C, A, K);
    }),
    (ke.useRef = function (C) {
      return we.current.useRef(C);
    }),
    (ke.useState = function (C) {
      return we.current.useState(C);
    }),
    (ke.useSyncExternalStore = function (C, A, K) {
      return we.current.useSyncExternalStore(C, A, K);
    }),
    (ke.useTransition = function () {
      return we.current.useTransition();
    }),
    (ke.version = "18.2.0"),
    ke
  );
}
var rp;
function Rc() {
  return rp || ((rp = 1), (Rl.exports = j2())), Rl.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var op;
function M2() {
  if (op) return Zr;
  op = 1;
  var n = Rc(),
    t = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(h, f, m) {
    var b,
      v = {},
      y = null,
      x = null;
    m !== void 0 && (y = "" + m),
      f.key !== void 0 && (y = "" + f.key),
      f.ref !== void 0 && (x = f.ref);
    for (b in f) a.call(f, b) && !c.hasOwnProperty(b) && (v[b] = f[b]);
    if (h && h.defaultProps)
      for (b in ((f = h.defaultProps), f)) v[b] === void 0 && (v[b] = f[b]);
    return {
      $$typeof: t,
      type: h,
      key: y,
      ref: x,
      props: v,
      _owner: i.current,
    };
  }
  return (Zr.Fragment = o), (Zr.jsx = d), (Zr.jsxs = d), Zr;
}
var ap;
function I2() {
  return ap || ((ap = 1), (Il.exports = M2())), Il.exports;
}
var W = I2(),
  V = Rc();
const Ve = F2(V),
  ip = T2({ __proto__: null, default: Ve }, [V]);
var Fa = {},
  Nl = { exports: {} },
  Ot = {},
  Ll = { exports: {} },
  Bl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sp;
function R2() {
  return (
    sp ||
      ((sp = 1),
      (function (n) {
        function t(q, Y) {
          var C = q.length;
          q.push(Y);
          e: for (; 0 < C; ) {
            var A = (C - 1) >>> 1,
              K = q[A];
            if (0 < i(K, Y)) (q[A] = Y), (q[C] = K), (C = A);
            else break e;
          }
        }
        function o(q) {
          return q.length === 0 ? null : q[0];
        }
        function a(q) {
          if (q.length === 0) return null;
          var Y = q[0],
            C = q.pop();
          if (C !== Y) {
            q[0] = C;
            e: for (var A = 0, K = q.length, le = K >>> 1; A < le; ) {
              var oe = 2 * (A + 1) - 1,
                _e = q[oe],
                de = oe + 1,
                be = q[de];
              if (0 > i(_e, C))
                de < K && 0 > i(be, _e)
                  ? ((q[A] = be), (q[de] = C), (A = de))
                  : ((q[A] = _e), (q[oe] = C), (A = oe));
              else if (de < K && 0 > i(be, C))
                (q[A] = be), (q[de] = C), (A = de);
              else break e;
            }
          }
          return Y;
        }
        function i(q, Y) {
          var C = q.sortIndex - Y.sortIndex;
          return C !== 0 ? C : q.id - Y.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var c = performance;
          n.unstable_now = function () {
            return c.now();
          };
        } else {
          var d = Date,
            h = d.now();
          n.unstable_now = function () {
            return d.now() - h;
          };
        }
        var f = [],
          m = [],
          b = 1,
          v = null,
          y = 3,
          x = !1,
          S = !1,
          O = !1,
          k = typeof setTimeout == "function" ? setTimeout : null,
          P = typeof clearTimeout == "function" ? clearTimeout : null,
          T = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function I(q) {
          for (var Y = o(m); Y !== null; ) {
            if (Y.callback === null) a(m);
            else if (Y.startTime <= q)
              a(m), (Y.sortIndex = Y.expirationTime), t(f, Y);
            else break;
            Y = o(m);
          }
        }
        function B(q) {
          if (((O = !1), I(q), !S))
            if (o(f) !== null) (S = !0), me(F);
            else {
              var Y = o(m);
              Y !== null && we(B, Y.startTime - q);
            }
        }
        function F(q, Y) {
          (S = !1), O && ((O = !1), P(X), (X = -1)), (x = !0);
          var C = y;
          try {
            for (
              I(Y), v = o(f);
              v !== null && (!(v.expirationTime > Y) || (q && !te()));

            ) {
              var A = v.callback;
              if (typeof A == "function") {
                (v.callback = null), (y = v.priorityLevel);
                var K = A(v.expirationTime <= Y);
                (Y = n.unstable_now()),
                  typeof K == "function"
                    ? (v.callback = K)
                    : v === o(f) && a(f),
                  I(Y);
              } else a(f);
              v = o(f);
            }
            if (v !== null) var le = !0;
            else {
              var oe = o(m);
              oe !== null && we(B, oe.startTime - Y), (le = !1);
            }
            return le;
          } finally {
            (v = null), (y = C), (x = !1);
          }
        }
        var $ = !1,
          N = null,
          X = -1,
          he = 5,
          Ce = -1;
        function te() {
          return !(n.unstable_now() - Ce < he);
        }
        function ce() {
          if (N !== null) {
            var q = n.unstable_now();
            Ce = q;
            var Y = !0;
            try {
              Y = N(!0, q);
            } finally {
              Y ? ye() : (($ = !1), (N = null));
            }
          } else $ = !1;
        }
        var ye;
        if (typeof T == "function")
          ye = function () {
            T(ce);
          };
        else if (typeof MessageChannel < "u") {
          var Se = new MessageChannel(),
            ge = Se.port2;
          (Se.port1.onmessage = ce),
            (ye = function () {
              ge.postMessage(null);
            });
        } else
          ye = function () {
            k(ce, 0);
          };
        function me(q) {
          (N = q), $ || (($ = !0), ye());
        }
        function we(q, Y) {
          X = k(function () {
            q(n.unstable_now());
          }, Y);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (q) {
            q.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            S || x || ((S = !0), me(F));
          }),
          (n.unstable_forceFrameRate = function (q) {
            0 > q || 125 < q
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (he = 0 < q ? Math.floor(1e3 / q) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return y;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return o(f);
          }),
          (n.unstable_next = function (q) {
            switch (y) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = y;
            }
            var C = y;
            y = Y;
            try {
              return q();
            } finally {
              y = C;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (q, Y) {
            switch (q) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                q = 3;
            }
            var C = y;
            y = q;
            try {
              return Y();
            } finally {
              y = C;
            }
          }),
          (n.unstable_scheduleCallback = function (q, Y, C) {
            var A = n.unstable_now();
            switch (
              (typeof C == "object" && C !== null
                ? ((C = C.delay),
                  (C = typeof C == "number" && 0 < C ? A + C : A))
                : (C = A),
              q)
            ) {
              case 1:
                var K = -1;
                break;
              case 2:
                K = 250;
                break;
              case 5:
                K = 1073741823;
                break;
              case 4:
                K = 1e4;
                break;
              default:
                K = 5e3;
            }
            return (
              (K = C + K),
              (q = {
                id: b++,
                callback: Y,
                priorityLevel: q,
                startTime: C,
                expirationTime: K,
                sortIndex: -1,
              }),
              C > A
                ? ((q.sortIndex = C),
                  t(m, q),
                  o(f) === null &&
                    q === o(m) &&
                    (O ? (P(X), (X = -1)) : (O = !0), we(B, C - A)))
                : ((q.sortIndex = K), t(f, q), S || x || ((S = !0), me(F))),
              q
            );
          }),
          (n.unstable_shouldYield = te),
          (n.unstable_wrapCallback = function (q) {
            var Y = y;
            return function () {
              var C = y;
              y = Y;
              try {
                return q.apply(this, arguments);
              } finally {
                y = C;
              }
            };
          });
      })(Bl)),
    Bl
  );
}
var lp;
function N2() {
  return lp || ((lp = 1), (Ll.exports = R2())), Ll.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cp;
function L2() {
  if (cp) return Ot;
  cp = 1;
  var n = Rc(),
    t = N2();
  function o(e) {
    for (
      var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        s = 1;
      s < arguments.length;
      s++
    )
      r += "&args[]=" + encodeURIComponent(arguments[s]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      r +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var a = new Set(),
    i = {};
  function c(e, r) {
    d(e, r), d(e + "Capture", r);
  }
  function d(e, r) {
    for (i[e] = r, e = 0; e < r.length; e++) a.add(r[e]);
  }
  var h = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    f = Object.prototype.hasOwnProperty,
    m =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    b = {},
    v = {};
  function y(e) {
    return f.call(v, e)
      ? !0
      : f.call(b, e)
        ? !1
        : m.test(e)
          ? (v[e] = !0)
          : ((b[e] = !0), !1);
  }
  function x(e, r, s, l) {
    if (s !== null && s.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l
          ? !1
          : s !== null
            ? !s.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function S(e, r, s, l) {
    if (r === null || typeof r > "u" || x(e, r, s, l)) return !0;
    if (l) return !1;
    if (s !== null)
      switch (s.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function O(e, r, s, l, u, p, g) {
    (this.acceptsBooleans = r === 2 || r === 3 || r === 4),
      (this.attributeName = l),
      (this.attributeNamespace = u),
      (this.mustUseProperty = s),
      (this.propertyName = e),
      (this.type = r),
      (this.sanitizeURL = p),
      (this.removeEmptyString = g);
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      k[e] = new O(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var r = e[0];
      k[r] = new O(r, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        k[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      k[e] = new O(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        k[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      k[e] = new O(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      k[e] = new O(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      k[e] = new O(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      k[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var P = /[\-:]([a-z])/g;
  function T(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var r = e.replace(P, T);
      k[r] = new O(r, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var r = e.replace(P, T);
        k[r] = new O(r, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var r = e.replace(P, T);
      k[r] = new O(r, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      k[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (k.xlinkHref = new O(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      k[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function I(e, r, s, l) {
    var u = k.hasOwnProperty(r) ? k[r] : null;
    (u !== null
      ? u.type !== 0
      : l ||
        !(2 < r.length) ||
        (r[0] !== "o" && r[0] !== "O") ||
        (r[1] !== "n" && r[1] !== "N")) &&
      (S(r, s, u, l) && (s = null),
      l || u === null
        ? y(r) &&
          (s === null ? e.removeAttribute(r) : e.setAttribute(r, "" + s))
        : u.mustUseProperty
          ? (e[u.propertyName] = s === null ? (u.type === 3 ? !1 : "") : s)
          : ((r = u.attributeName),
            (l = u.attributeNamespace),
            s === null
              ? e.removeAttribute(r)
              : ((u = u.type),
                (s = u === 3 || (u === 4 && s === !0) ? "" : "" + s),
                l ? e.setAttributeNS(l, r, s) : e.setAttribute(r, s))));
  }
  var B = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    F = Symbol.for("react.element"),
    $ = Symbol.for("react.portal"),
    N = Symbol.for("react.fragment"),
    X = Symbol.for("react.strict_mode"),
    he = Symbol.for("react.profiler"),
    Ce = Symbol.for("react.provider"),
    te = Symbol.for("react.context"),
    ce = Symbol.for("react.forward_ref"),
    ye = Symbol.for("react.suspense"),
    Se = Symbol.for("react.suspense_list"),
    ge = Symbol.for("react.memo"),
    me = Symbol.for("react.lazy"),
    we = Symbol.for("react.offscreen"),
    q = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (q && e[q]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var C = Object.assign,
    A;
  function K(e) {
    if (A === void 0)
      try {
        throw Error();
      } catch (s) {
        var r = s.stack.trim().match(/\n( *(at )?)/);
        A = (r && r[1]) || "";
      }
    return (
      `
` +
      A +
      e
    );
  }
  var le = !1;
  function oe(e, r) {
    if (!e || le) return "";
    le = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (
          ((r = function () {
            throw Error();
          }),
          Object.defineProperty(r.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(r, []);
          } catch (R) {
            var l = R;
          }
          Reflect.construct(e, [], r);
        } else {
          try {
            r.call();
          } catch (R) {
            l = R;
          }
          e.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (R) {
          l = R;
        }
        e();
      }
    } catch (R) {
      if (R && l && typeof R.stack == "string") {
        for (
          var u = R.stack.split(`
`),
            p = l.stack.split(`
`),
            g = u.length - 1,
            _ = p.length - 1;
          1 <= g && 0 <= _ && u[g] !== p[_];

        )
          _--;
        for (; 1 <= g && 0 <= _; g--, _--)
          if (u[g] !== p[_]) {
            if (g !== 1 || _ !== 1)
              do
                if ((g--, _--, 0 > _ || u[g] !== p[_])) {
                  var w =
                    `
` + u[g].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      w.includes("<anonymous>") &&
                      (w = w.replace("<anonymous>", e.displayName)),
                    w
                  );
                }
              while (1 <= g && 0 <= _);
            break;
          }
      }
    } finally {
      (le = !1), (Error.prepareStackTrace = s);
    }
    return (e = e ? e.displayName || e.name : "") ? K(e) : "";
  }
  function _e(e) {
    switch (e.tag) {
      case 5:
        return K(e.type);
      case 16:
        return K("Lazy");
      case 13:
        return K("Suspense");
      case 19:
        return K("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = oe(e.type, !1)), e;
      case 11:
        return (e = oe(e.type.render, !1)), e;
      case 1:
        return (e = oe(e.type, !0)), e;
      default:
        return "";
    }
  }
  function de(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case N:
        return "Fragment";
      case $:
        return "Portal";
      case he:
        return "Profiler";
      case X:
        return "StrictMode";
      case ye:
        return "Suspense";
      case Se:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case te:
          return (e.displayName || "Context") + ".Consumer";
        case Ce:
          return (e._context.displayName || "Context") + ".Provider";
        case ce:
          var r = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = r.displayName || r.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ge:
          return (
            (r = e.displayName || null), r !== null ? r : de(e.type) || "Memo"
          );
        case me:
          (r = e._payload), (e = e._init);
          try {
            return de(e(r));
          } catch {}
      }
    return null;
  }
  function be(e) {
    var r = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = r.render),
          (e = e.displayName || e.name || ""),
          r.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return de(r);
      case 8:
        return r === X ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function pe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Re(e) {
    var r = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (r === "checkbox" || r === "radio")
    );
  }
  function Zn(e) {
    var r = Re(e) ? "checked" : "value",
      s = Object.getOwnPropertyDescriptor(e.constructor.prototype, r),
      l = "" + e[r];
    if (
      !e.hasOwnProperty(r) &&
      typeof s < "u" &&
      typeof s.get == "function" &&
      typeof s.set == "function"
    ) {
      var u = s.get,
        p = s.set;
      return (
        Object.defineProperty(e, r, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (g) {
            (l = "" + g), p.call(this, g);
          },
        }),
        Object.defineProperty(e, r, { enumerable: s.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (g) {
            l = "" + g;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[r];
          },
        }
      );
    }
  }
  function Bt(e) {
    e._valueTracker || (e._valueTracker = Zn(e));
  }
  function xt(e) {
    if (!e) return !1;
    var r = e._valueTracker;
    if (!r) return !0;
    var s = r.getValue(),
      l = "";
    return (
      e && (l = Re(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== s ? (r.setValue(e), !0) : !1
    );
  }
  function C0(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function w0(e, r) {
    var s = r.checked;
    return C({}, r, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: s ?? e._wrapperState.initialChecked,
    });
  }
  function xo(e, r) {
    var s = r.defaultValue == null ? "" : r.defaultValue,
      l = r.checked != null ? r.checked : r.defaultChecked;
    (s = pe(r.value != null ? r.value : s)),
      (e._wrapperState = {
        initialChecked: l,
        initialValue: s,
        controlled:
          r.type === "checkbox" || r.type === "radio"
            ? r.checked != null
            : r.value != null,
      });
  }
  function iu(e, r) {
    (r = r.checked), r != null && I(e, "checked", r, !1);
  }
  function Ai(e, r) {
    iu(e, r);
    var s = pe(r.value),
      l = r.type;
    if (s != null)
      l === "number"
        ? ((s === 0 && e.value === "") || e.value != s) && (e.value = "" + s)
        : e.value !== "" + s && (e.value = "" + s);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value")
      ? Di(e, r.type, s)
      : r.hasOwnProperty("defaultValue") && Di(e, r.type, pe(r.defaultValue)),
      r.checked == null &&
        r.defaultChecked != null &&
        (e.defaultChecked = !!r.defaultChecked);
  }
  function su(e, r, s) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var l = r.type;
      if (
        !(
          (l !== "submit" && l !== "reset") ||
          (r.value !== void 0 && r.value !== null)
        )
      )
        return;
      (r = "" + e._wrapperState.initialValue),
        s || r === e.value || (e.value = r),
        (e.defaultValue = r);
    }
    (s = e.name),
      s !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      s !== "" && (e.name = s);
  }
  function Di(e, r, s) {
    (r !== "number" || C0(e.ownerDocument) !== e) &&
      (s == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + s && (e.defaultValue = "" + s));
  }
  var pr = Array.isArray;
  function k0(e, r, s, l) {
    if (((e = e.options), r)) {
      r = {};
      for (var u = 0; u < s.length; u++) r["$" + s[u]] = !0;
      for (s = 0; s < e.length; s++)
        (u = r.hasOwnProperty("$" + e[s].value)),
          e[s].selected !== u && (e[s].selected = u),
          u && l && (e[s].defaultSelected = !0);
    } else {
      for (s = "" + pe(s), r = null, u = 0; u < e.length; u++) {
        if (e[u].value === s) {
          (e[u].selected = !0), l && (e[u].defaultSelected = !0);
          return;
        }
        r !== null || e[u].disabled || (r = e[u]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Hi(e, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(o(91));
    return C({}, r, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function lu(e, r) {
    var s = r.value;
    if (s == null) {
      if (((s = r.children), (r = r.defaultValue), s != null)) {
        if (r != null) throw Error(o(92));
        if (pr(s)) {
          if (1 < s.length) throw Error(o(93));
          s = s[0];
        }
        r = s;
      }
      r == null && (r = ""), (s = r);
    }
    e._wrapperState = { initialValue: pe(s) };
  }
  function cu(e, r) {
    var s = pe(r.value),
      l = pe(r.defaultValue);
    s != null &&
      ((s = "" + s),
      s !== e.value && (e.value = s),
      r.defaultValue == null && e.defaultValue !== s && (e.defaultValue = s)),
      l != null && (e.defaultValue = "" + l);
  }
  function uu(e) {
    var r = e.textContent;
    r === e._wrapperState.initialValue &&
      r !== "" &&
      r !== null &&
      (e.value = r);
  }
  function du(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function zi(e, r) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? du(r)
      : e === "http://www.w3.org/2000/svg" && r === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var So,
    fu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (r, s, l, u) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(r, s, l, u);
            });
          }
        : e;
    })(function (e, r) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = r;
      else {
        for (
          So = So || document.createElement("div"),
            So.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>",
            r = So.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; r.firstChild; ) e.appendChild(r.firstChild);
      }
    });
  function hr(e, r) {
    if (r) {
      var s = e.firstChild;
      if (s && s === e.lastChild && s.nodeType === 3) {
        s.nodeValue = r;
        return;
      }
    }
    e.textContent = r;
  }
  var mr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    T1 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(mr).forEach(function (e) {
    T1.forEach(function (r) {
      (r = r + e.charAt(0).toUpperCase() + e.substring(1)), (mr[r] = mr[e]);
    });
  });
  function pu(e, r, s) {
    return r == null || typeof r == "boolean" || r === ""
      ? ""
      : s || typeof r != "number" || r === 0 || (mr.hasOwnProperty(e) && mr[e])
        ? ("" + r).trim()
        : r + "px";
  }
  function hu(e, r) {
    e = e.style;
    for (var s in r)
      if (r.hasOwnProperty(s)) {
        var l = s.indexOf("--") === 0,
          u = pu(s, r[s], l);
        s === "float" && (s = "cssFloat"), l ? e.setProperty(s, u) : (e[s] = u);
      }
  }
  var F1 = C(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Vi(e, r) {
    if (r) {
      if (F1[e] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(o(60));
        if (
          typeof r.dangerouslySetInnerHTML != "object" ||
          !("__html" in r.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(o(62));
    }
  }
  function Ui(e, r) {
    if (e.indexOf("-") === -1) return typeof r.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Gi = null;
  function qi(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Wi = null,
    P0 = null,
    O0 = null;
  function mu(e) {
    if ((e = Br(e))) {
      if (typeof Wi != "function") throw Error(o(280));
      var r = e.stateNode;
      r && ((r = Go(r)), Wi(e.stateNode, e.type, r));
    }
  }
  function gu(e) {
    P0 ? (O0 ? O0.push(e) : (O0 = [e])) : (P0 = e);
  }
  function bu() {
    if (P0) {
      var e = P0,
        r = O0;
      if (((O0 = P0 = null), mu(e), r)) for (e = 0; e < r.length; e++) mu(r[e]);
    }
  }
  function vu(e, r) {
    return e(r);
  }
  function yu() {}
  var Ki = !1;
  function _u(e, r, s) {
    if (Ki) return e(r, s);
    Ki = !0;
    try {
      return vu(e, r, s);
    } finally {
      (Ki = !1), (P0 !== null || O0 !== null) && (yu(), bu());
    }
  }
  function gr(e, r) {
    var s = e.stateNode;
    if (s === null) return null;
    var l = Go(s);
    if (l === null) return null;
    s = l[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (s && typeof s != "function") throw Error(o(231, r, typeof s));
    return s;
  }
  var Xi = !1;
  if (h)
    try {
      var br = {};
      Object.defineProperty(br, "passive", {
        get: function () {
          Xi = !0;
        },
      }),
        window.addEventListener("test", br, br),
        window.removeEventListener("test", br, br);
    } catch {
      Xi = !1;
    }
  function j1(e, r, s, l, u, p, g, _, w) {
    var R = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(s, R);
    } catch (H) {
      this.onError(H);
    }
  }
  var vr = !1,
    Co = null,
    wo = !1,
    Qi = null,
    M1 = {
      onError: function (e) {
        (vr = !0), (Co = e);
      },
    };
  function I1(e, r, s, l, u, p, g, _, w) {
    (vr = !1), (Co = null), j1.apply(M1, arguments);
  }
  function R1(e, r, s, l, u, p, g, _, w) {
    if ((I1.apply(this, arguments), vr)) {
      if (vr) {
        var R = Co;
        (vr = !1), (Co = null);
      } else throw Error(o(198));
      wo || ((wo = !0), (Qi = R));
    }
  }
  function Jn(e) {
    var r = e,
      s = e;
    if (e.alternate) for (; r.return; ) r = r.return;
    else {
      e = r;
      do (r = e), (r.flags & 4098) !== 0 && (s = r.return), (e = r.return);
      while (e);
    }
    return r.tag === 3 ? s : null;
  }
  function xu(e) {
    if (e.tag === 13) {
      var r = e.memoizedState;
      if (
        (r === null && ((e = e.alternate), e !== null && (r = e.memoizedState)),
        r !== null)
      )
        return r.dehydrated;
    }
    return null;
  }
  function Su(e) {
    if (Jn(e) !== e) throw Error(o(188));
  }
  function N1(e) {
    var r = e.alternate;
    if (!r) {
      if (((r = Jn(e)), r === null)) throw Error(o(188));
      return r !== e ? null : e;
    }
    for (var s = e, l = r; ; ) {
      var u = s.return;
      if (u === null) break;
      var p = u.alternate;
      if (p === null) {
        if (((l = u.return), l !== null)) {
          s = l;
          continue;
        }
        break;
      }
      if (u.child === p.child) {
        for (p = u.child; p; ) {
          if (p === s) return Su(u), e;
          if (p === l) return Su(u), r;
          p = p.sibling;
        }
        throw Error(o(188));
      }
      if (s.return !== l.return) (s = u), (l = p);
      else {
        for (var g = !1, _ = u.child; _; ) {
          if (_ === s) {
            (g = !0), (s = u), (l = p);
            break;
          }
          if (_ === l) {
            (g = !0), (l = u), (s = p);
            break;
          }
          _ = _.sibling;
        }
        if (!g) {
          for (_ = p.child; _; ) {
            if (_ === s) {
              (g = !0), (s = p), (l = u);
              break;
            }
            if (_ === l) {
              (g = !0), (l = p), (s = u);
              break;
            }
            _ = _.sibling;
          }
          if (!g) throw Error(o(189));
        }
      }
      if (s.alternate !== l) throw Error(o(190));
    }
    if (s.tag !== 3) throw Error(o(188));
    return s.stateNode.current === s ? e : r;
  }
  function Cu(e) {
    return (e = N1(e)), e !== null ? wu(e) : null;
  }
  function wu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var r = wu(e);
      if (r !== null) return r;
      e = e.sibling;
    }
    return null;
  }
  var ku = t.unstable_scheduleCallback,
    Pu = t.unstable_cancelCallback,
    L1 = t.unstable_shouldYield,
    B1 = t.unstable_requestPaint,
    qe = t.unstable_now,
    $1 = t.unstable_getCurrentPriorityLevel,
    Yi = t.unstable_ImmediatePriority,
    Ou = t.unstable_UserBlockingPriority,
    ko = t.unstable_NormalPriority,
    A1 = t.unstable_LowPriority,
    Eu = t.unstable_IdlePriority,
    Po = null,
    nn = null;
  function D1(e) {
    if (nn && typeof nn.onCommitFiberRoot == "function")
      try {
        nn.onCommitFiberRoot(Po, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Wt = Math.clz32 ? Math.clz32 : V1,
    H1 = Math.log,
    z1 = Math.LN2;
  function V1(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((H1(e) / z1) | 0)) | 0;
  }
  var Oo = 64,
    Eo = 4194304;
  function yr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function To(e, r) {
    var s = e.pendingLanes;
    if (s === 0) return 0;
    var l = 0,
      u = e.suspendedLanes,
      p = e.pingedLanes,
      g = s & 268435455;
    if (g !== 0) {
      var _ = g & ~u;
      _ !== 0 ? (l = yr(_)) : ((p &= g), p !== 0 && (l = yr(p)));
    } else (g = s & ~u), g !== 0 ? (l = yr(g)) : p !== 0 && (l = yr(p));
    if (l === 0) return 0;
    if (
      r !== 0 &&
      r !== l &&
      (r & u) === 0 &&
      ((u = l & -l), (p = r & -r), u >= p || (u === 16 && (p & 4194240) !== 0))
    )
      return r;
    if (((l & 4) !== 0 && (l |= s & 16), (r = e.entangledLanes), r !== 0))
      for (e = e.entanglements, r &= l; 0 < r; )
        (s = 31 - Wt(r)), (u = 1 << s), (l |= e[s]), (r &= ~u);
    return l;
  }
  function U1(e, r) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function G1(e, r) {
    for (
      var s = e.suspendedLanes,
        l = e.pingedLanes,
        u = e.expirationTimes,
        p = e.pendingLanes;
      0 < p;

    ) {
      var g = 31 - Wt(p),
        _ = 1 << g,
        w = u[g];
      w === -1
        ? ((_ & s) === 0 || (_ & l) !== 0) && (u[g] = U1(_, r))
        : w <= r && (e.expiredLanes |= _),
        (p &= ~_);
    }
  }
  function Zi(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Tu() {
    var e = Oo;
    return (Oo <<= 1), (Oo & 4194240) === 0 && (Oo = 64), e;
  }
  function Ji(e) {
    for (var r = [], s = 0; 31 > s; s++) r.push(e);
    return r;
  }
  function _r(e, r, s) {
    (e.pendingLanes |= r),
      r !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (r = 31 - Wt(r)),
      (e[r] = s);
  }
  function q1(e, r) {
    var s = e.pendingLanes & ~r;
    (e.pendingLanes = r),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= r),
      (e.mutableReadLanes &= r),
      (e.entangledLanes &= r),
      (r = e.entanglements);
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < s; ) {
      var u = 31 - Wt(s),
        p = 1 << u;
      (r[u] = 0), (l[u] = -1), (e[u] = -1), (s &= ~p);
    }
  }
  function es(e, r) {
    var s = (e.entangledLanes |= r);
    for (e = e.entanglements; s; ) {
      var l = 31 - Wt(s),
        u = 1 << l;
      (u & r) | (e[l] & r) && (e[l] |= r), (s &= ~u);
    }
  }
  var Ie = 0;
  function Fu(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var ju,
    ts,
    Mu,
    Iu,
    Ru,
    ns = !1,
    Fo = [],
    On = null,
    En = null,
    Tn = null,
    xr = new Map(),
    Sr = new Map(),
    Fn = [],
    W1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Nu(e, r) {
    switch (e) {
      case "focusin":
      case "focusout":
        On = null;
        break;
      case "dragenter":
      case "dragleave":
        En = null;
        break;
      case "mouseover":
      case "mouseout":
        Tn = null;
        break;
      case "pointerover":
      case "pointerout":
        xr.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Sr.delete(r.pointerId);
    }
  }
  function Cr(e, r, s, l, u, p) {
    return e === null || e.nativeEvent !== p
      ? ((e = {
          blockedOn: r,
          domEventName: s,
          eventSystemFlags: l,
          nativeEvent: p,
          targetContainers: [u],
        }),
        r !== null && ((r = Br(r)), r !== null && ts(r)),
        e)
      : ((e.eventSystemFlags |= l),
        (r = e.targetContainers),
        u !== null && r.indexOf(u) === -1 && r.push(u),
        e);
  }
  function K1(e, r, s, l, u) {
    switch (r) {
      case "focusin":
        return (On = Cr(On, e, r, s, l, u)), !0;
      case "dragenter":
        return (En = Cr(En, e, r, s, l, u)), !0;
      case "mouseover":
        return (Tn = Cr(Tn, e, r, s, l, u)), !0;
      case "pointerover":
        var p = u.pointerId;
        return xr.set(p, Cr(xr.get(p) || null, e, r, s, l, u)), !0;
      case "gotpointercapture":
        return (
          (p = u.pointerId), Sr.set(p, Cr(Sr.get(p) || null, e, r, s, l, u)), !0
        );
    }
    return !1;
  }
  function Lu(e) {
    var r = e0(e.target);
    if (r !== null) {
      var s = Jn(r);
      if (s !== null) {
        if (((r = s.tag), r === 13)) {
          if (((r = xu(s)), r !== null)) {
            (e.blockedOn = r),
              Ru(e.priority, function () {
                Mu(s);
              });
            return;
          }
        } else if (r === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function jo(e) {
    if (e.blockedOn !== null) return !1;
    for (var r = e.targetContainers; 0 < r.length; ) {
      var s = os(e.domEventName, e.eventSystemFlags, r[0], e.nativeEvent);
      if (s === null) {
        s = e.nativeEvent;
        var l = new s.constructor(s.type, s);
        (Gi = l), s.target.dispatchEvent(l), (Gi = null);
      } else return (r = Br(s)), r !== null && ts(r), (e.blockedOn = s), !1;
      r.shift();
    }
    return !0;
  }
  function Bu(e, r, s) {
    jo(e) && s.delete(r);
  }
  function X1() {
    (ns = !1),
      On !== null && jo(On) && (On = null),
      En !== null && jo(En) && (En = null),
      Tn !== null && jo(Tn) && (Tn = null),
      xr.forEach(Bu),
      Sr.forEach(Bu);
  }
  function wr(e, r) {
    e.blockedOn === r &&
      ((e.blockedOn = null),
      ns ||
        ((ns = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, X1)));
  }
  function kr(e) {
    function r(u) {
      return wr(u, e);
    }
    if (0 < Fo.length) {
      wr(Fo[0], e);
      for (var s = 1; s < Fo.length; s++) {
        var l = Fo[s];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (
      On !== null && wr(On, e),
        En !== null && wr(En, e),
        Tn !== null && wr(Tn, e),
        xr.forEach(r),
        Sr.forEach(r),
        s = 0;
      s < Fn.length;
      s++
    )
      (l = Fn[s]), l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < Fn.length && ((s = Fn[0]), s.blockedOn === null); )
      Lu(s), s.blockedOn === null && Fn.shift();
  }
  var E0 = B.ReactCurrentBatchConfig,
    Mo = !0;
  function Q1(e, r, s, l) {
    var u = Ie,
      p = E0.transition;
    E0.transition = null;
    try {
      (Ie = 1), rs(e, r, s, l);
    } finally {
      (Ie = u), (E0.transition = p);
    }
  }
  function Y1(e, r, s, l) {
    var u = Ie,
      p = E0.transition;
    E0.transition = null;
    try {
      (Ie = 4), rs(e, r, s, l);
    } finally {
      (Ie = u), (E0.transition = p);
    }
  }
  function rs(e, r, s, l) {
    if (Mo) {
      var u = os(e, r, s, l);
      if (u === null) xs(e, r, l, Io, s), Nu(e, l);
      else if (K1(u, e, r, s, l)) l.stopPropagation();
      else if ((Nu(e, l), r & 4 && -1 < W1.indexOf(e))) {
        for (; u !== null; ) {
          var p = Br(u);
          if (
            (p !== null && ju(p),
            (p = os(e, r, s, l)),
            p === null && xs(e, r, l, Io, s),
            p === u)
          )
            break;
          u = p;
        }
        u !== null && l.stopPropagation();
      } else xs(e, r, l, null, s);
    }
  }
  var Io = null;
  function os(e, r, s, l) {
    if (((Io = null), (e = qi(l)), (e = e0(e)), e !== null))
      if (((r = Jn(e)), r === null)) e = null;
      else if (((s = r.tag), s === 13)) {
        if (((e = xu(r)), e !== null)) return e;
        e = null;
      } else if (s === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        e = null;
      } else r !== e && (e = null);
    return (Io = e), null;
  }
  function $u(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch ($1()) {
          case Yi:
            return 1;
          case Ou:
            return 4;
          case ko:
          case A1:
            return 16;
          case Eu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var jn = null,
    as = null,
    Ro = null;
  function Au() {
    if (Ro) return Ro;
    var e,
      r = as,
      s = r.length,
      l,
      u = "value" in jn ? jn.value : jn.textContent,
      p = u.length;
    for (e = 0; e < s && r[e] === u[e]; e++);
    var g = s - e;
    for (l = 1; l <= g && r[s - l] === u[p - l]; l++);
    return (Ro = u.slice(e, 1 < l ? 1 - l : void 0));
  }
  function No(e) {
    var r = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && r === 13 && (e = 13))
        : (e = r),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Lo() {
    return !0;
  }
  function Du() {
    return !1;
  }
  function Ft(e) {
    function r(s, l, u, p, g) {
      (this._reactName = s),
        (this._targetInst = u),
        (this.type = l),
        (this.nativeEvent = p),
        (this.target = g),
        (this.currentTarget = null);
      for (var _ in e)
        e.hasOwnProperty(_) && ((s = e[_]), (this[_] = s ? s(p) : p[_]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? Lo
          : Du),
        (this.isPropagationStopped = Du),
        this
      );
    }
    return (
      C(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var s = this.nativeEvent;
          s &&
            (s.preventDefault
              ? s.preventDefault()
              : typeof s.returnValue != "unknown" && (s.returnValue = !1),
            (this.isDefaultPrevented = Lo));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
            (this.isPropagationStopped = Lo));
        },
        persist: function () {},
        isPersistent: Lo,
      }),
      r
    );
  }
  var T0 = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    is = Ft(T0),
    Pr = C({}, T0, { view: 0, detail: 0 }),
    Z1 = Ft(Pr),
    ss,
    ls,
    Or,
    Bo = C({}, Pr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: us,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Or &&
              (Or && e.type === "mousemove"
                ? ((ss = e.screenX - Or.screenX), (ls = e.screenY - Or.screenY))
                : (ls = ss = 0),
              (Or = e)),
            ss);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ls;
      },
    }),
    Hu = Ft(Bo),
    J1 = C({}, Bo, { dataTransfer: 0 }),
    eg = Ft(J1),
    tg = C({}, Pr, { relatedTarget: 0 }),
    cs = Ft(tg),
    ng = C({}, T0, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    rg = Ft(ng),
    og = C({}, T0, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ag = Ft(og),
    ig = C({}, T0, { data: 0 }),
    zu = Ft(ig),
    sg = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    lg = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    cg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ug(e) {
    var r = this.nativeEvent;
    return r.getModifierState
      ? r.getModifierState(e)
      : (e = cg[e])
        ? !!r[e]
        : !1;
  }
  function us() {
    return ug;
  }
  var dg = C({}, Pr, {
      key: function (e) {
        if (e.key) {
          var r = sg[e.key] || e.key;
          if (r !== "Unidentified") return r;
        }
        return e.type === "keypress"
          ? ((e = No(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? lg[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: us,
      charCode: function (e) {
        return e.type === "keypress" ? No(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? No(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    fg = Ft(dg),
    pg = C({}, Bo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Vu = Ft(pg),
    hg = C({}, Pr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: us,
    }),
    mg = Ft(hg),
    gg = C({}, T0, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    bg = Ft(gg),
    vg = C({}, Bo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    yg = Ft(vg),
    _g = [9, 13, 27, 32],
    ds = h && "CompositionEvent" in window,
    Er = null;
  h && "documentMode" in document && (Er = document.documentMode);
  var xg = h && "TextEvent" in window && !Er,
    Uu = h && (!ds || (Er && 8 < Er && 11 >= Er)),
    Gu = " ",
    qu = !1;
  function Wu(e, r) {
    switch (e) {
      case "keyup":
        return _g.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ku(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var F0 = !1;
  function Sg(e, r) {
    switch (e) {
      case "compositionend":
        return Ku(r);
      case "keypress":
        return r.which !== 32 ? null : ((qu = !0), Gu);
      case "textInput":
        return (e = r.data), e === Gu && qu ? null : e;
      default:
        return null;
    }
  }
  function Cg(e, r) {
    if (F0)
      return e === "compositionend" || (!ds && Wu(e, r))
        ? ((e = Au()), (Ro = as = jn = null), (F0 = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Uu && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var wg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Xu(e) {
    var r = e && e.nodeName && e.nodeName.toLowerCase();
    return r === "input" ? !!wg[e.type] : r === "textarea";
  }
  function Qu(e, r, s, l) {
    gu(l),
      (r = zo(r, "onChange")),
      0 < r.length &&
        ((s = new is("onChange", "change", null, s, l)),
        e.push({ event: s, listeners: r }));
  }
  var Tr = null,
    Fr = null;
  function kg(e) {
    hd(e, 0);
  }
  function $o(e) {
    var r = N0(e);
    if (xt(r)) return e;
  }
  function Pg(e, r) {
    if (e === "change") return r;
  }
  var Yu = !1;
  if (h) {
    var fs;
    if (h) {
      var ps = "oninput" in document;
      if (!ps) {
        var Zu = document.createElement("div");
        Zu.setAttribute("oninput", "return;"),
          (ps = typeof Zu.oninput == "function");
      }
      fs = ps;
    } else fs = !1;
    Yu = fs && (!document.documentMode || 9 < document.documentMode);
  }
  function Ju() {
    Tr && (Tr.detachEvent("onpropertychange", ed), (Fr = Tr = null));
  }
  function ed(e) {
    if (e.propertyName === "value" && $o(Fr)) {
      var r = [];
      Qu(r, Fr, e, qi(e)), _u(kg, r);
    }
  }
  function Og(e, r, s) {
    e === "focusin"
      ? (Ju(), (Tr = r), (Fr = s), Tr.attachEvent("onpropertychange", ed))
      : e === "focusout" && Ju();
  }
  function Eg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return $o(Fr);
  }
  function Tg(e, r) {
    if (e === "click") return $o(r);
  }
  function Fg(e, r) {
    if (e === "input" || e === "change") return $o(r);
  }
  function jg(e, r) {
    return (e === r && (e !== 0 || 1 / e === 1 / r)) || (e !== e && r !== r);
  }
  var Kt = typeof Object.is == "function" ? Object.is : jg;
  function jr(e, r) {
    if (Kt(e, r)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof r != "object" ||
      r === null
    )
      return !1;
    var s = Object.keys(e),
      l = Object.keys(r);
    if (s.length !== l.length) return !1;
    for (l = 0; l < s.length; l++) {
      var u = s[l];
      if (!f.call(r, u) || !Kt(e[u], r[u])) return !1;
    }
    return !0;
  }
  function td(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function nd(e, r) {
    var s = td(e);
    e = 0;
    for (var l; s; ) {
      if (s.nodeType === 3) {
        if (((l = e + s.textContent.length), e <= r && l >= r))
          return { node: s, offset: r - e };
        e = l;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = td(s);
    }
  }
  function rd(e, r) {
    return e && r
      ? e === r
        ? !0
        : e && e.nodeType === 3
          ? !1
          : r && r.nodeType === 3
            ? rd(e, r.parentNode)
            : "contains" in e
              ? e.contains(r)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(r) & 16)
                : !1
      : !1;
  }
  function od() {
    for (var e = window, r = C0(); r instanceof e.HTMLIFrameElement; ) {
      try {
        var s = typeof r.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) e = r.contentWindow;
      else break;
      r = C0(e.document);
    }
    return r;
  }
  function hs(e) {
    var r = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      r &&
      ((r === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        r === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Mg(e) {
    var r = od(),
      s = e.focusedElem,
      l = e.selectionRange;
    if (
      r !== s &&
      s &&
      s.ownerDocument &&
      rd(s.ownerDocument.documentElement, s)
    ) {
      if (l !== null && hs(s)) {
        if (
          ((r = l.start),
          (e = l.end),
          e === void 0 && (e = r),
          "selectionStart" in s)
        )
          (s.selectionStart = r),
            (s.selectionEnd = Math.min(e, s.value.length));
        else if (
          ((e = ((r = s.ownerDocument || document) && r.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var u = s.textContent.length,
            p = Math.min(l.start, u);
          (l = l.end === void 0 ? p : Math.min(l.end, u)),
            !e.extend && p > l && ((u = l), (l = p), (p = u)),
            (u = nd(s, p));
          var g = nd(s, l);
          u &&
            g &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== g.node ||
              e.focusOffset !== g.offset) &&
            ((r = r.createRange()),
            r.setStart(u.node, u.offset),
            e.removeAllRanges(),
            p > l
              ? (e.addRange(r), e.extend(g.node, g.offset))
              : (r.setEnd(g.node, g.offset), e.addRange(r)));
        }
      }
      for (r = [], e = s; (e = e.parentNode); )
        e.nodeType === 1 &&
          r.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < r.length; s++)
        (e = r[s]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Ig = h && "documentMode" in document && 11 >= document.documentMode,
    j0 = null,
    ms = null,
    Mr = null,
    gs = !1;
  function ad(e, r, s) {
    var l =
      s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    gs ||
      j0 == null ||
      j0 !== C0(l) ||
      ((l = j0),
      "selectionStart" in l && hs(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Mr && jr(Mr, l)) ||
        ((Mr = l),
        (l = zo(ms, "onSelect")),
        0 < l.length &&
          ((r = new is("onSelect", "select", null, r, s)),
          e.push({ event: r, listeners: l }),
          (r.target = j0))));
  }
  function Ao(e, r) {
    var s = {};
    return (
      (s[e.toLowerCase()] = r.toLowerCase()),
      (s["Webkit" + e] = "webkit" + r),
      (s["Moz" + e] = "moz" + r),
      s
    );
  }
  var M0 = {
      animationend: Ao("Animation", "AnimationEnd"),
      animationiteration: Ao("Animation", "AnimationIteration"),
      animationstart: Ao("Animation", "AnimationStart"),
      transitionend: Ao("Transition", "TransitionEnd"),
    },
    bs = {},
    id = {};
  h &&
    ((id = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete M0.animationend.animation,
      delete M0.animationiteration.animation,
      delete M0.animationstart.animation),
    "TransitionEvent" in window || delete M0.transitionend.transition);
  function Do(e) {
    if (bs[e]) return bs[e];
    if (!M0[e]) return e;
    var r = M0[e],
      s;
    for (s in r) if (r.hasOwnProperty(s) && s in id) return (bs[e] = r[s]);
    return e;
  }
  var sd = Do("animationend"),
    ld = Do("animationiteration"),
    cd = Do("animationstart"),
    ud = Do("transitionend"),
    dd = new Map(),
    fd =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Mn(e, r) {
    dd.set(e, r), c(r, [e]);
  }
  for (var vs = 0; vs < fd.length; vs++) {
    var ys = fd[vs],
      Rg = ys.toLowerCase(),
      Ng = ys[0].toUpperCase() + ys.slice(1);
    Mn(Rg, "on" + Ng);
  }
  Mn(sd, "onAnimationEnd"),
    Mn(ld, "onAnimationIteration"),
    Mn(cd, "onAnimationStart"),
    Mn("dblclick", "onDoubleClick"),
    Mn("focusin", "onFocus"),
    Mn("focusout", "onBlur"),
    Mn(ud, "onTransitionEnd"),
    d("onMouseEnter", ["mouseout", "mouseover"]),
    d("onMouseLeave", ["mouseout", "mouseover"]),
    d("onPointerEnter", ["pointerout", "pointerover"]),
    d("onPointerLeave", ["pointerout", "pointerover"]),
    c(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    c(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    c(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    c(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    c(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var Ir =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Lg = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Ir),
    );
  function pd(e, r, s) {
    var l = e.type || "unknown-event";
    (e.currentTarget = s), R1(l, r, void 0, e), (e.currentTarget = null);
  }
  function hd(e, r) {
    r = (r & 4) !== 0;
    for (var s = 0; s < e.length; s++) {
      var l = e[s],
        u = l.event;
      l = l.listeners;
      e: {
        var p = void 0;
        if (r)
          for (var g = l.length - 1; 0 <= g; g--) {
            var _ = l[g],
              w = _.instance,
              R = _.currentTarget;
            if (((_ = _.listener), w !== p && u.isPropagationStopped()))
              break e;
            pd(u, _, R), (p = w);
          }
        else
          for (g = 0; g < l.length; g++) {
            if (
              ((_ = l[g]),
              (w = _.instance),
              (R = _.currentTarget),
              (_ = _.listener),
              w !== p && u.isPropagationStopped())
            )
              break e;
            pd(u, _, R), (p = w);
          }
      }
    }
    if (wo) throw ((e = Qi), (wo = !1), (Qi = null), e);
  }
  function Be(e, r) {
    var s = r[Os];
    s === void 0 && (s = r[Os] = new Set());
    var l = e + "__bubble";
    s.has(l) || (md(r, e, 2, !1), s.add(l));
  }
  function _s(e, r, s) {
    var l = 0;
    r && (l |= 4), md(s, e, l, r);
  }
  var Ho = "_reactListening" + Math.random().toString(36).slice(2);
  function Rr(e) {
    if (!e[Ho]) {
      (e[Ho] = !0),
        a.forEach(function (s) {
          s !== "selectionchange" && (Lg.has(s) || _s(s, !1, e), _s(s, !0, e));
        });
      var r = e.nodeType === 9 ? e : e.ownerDocument;
      r === null || r[Ho] || ((r[Ho] = !0), _s("selectionchange", !1, r));
    }
  }
  function md(e, r, s, l) {
    switch ($u(r)) {
      case 1:
        var u = Q1;
        break;
      case 4:
        u = Y1;
        break;
      default:
        u = rs;
    }
    (s = u.bind(null, r, s, e)),
      (u = void 0),
      !Xi ||
        (r !== "touchstart" && r !== "touchmove" && r !== "wheel") ||
        (u = !0),
      l
        ? u !== void 0
          ? e.addEventListener(r, s, { capture: !0, passive: u })
          : e.addEventListener(r, s, !0)
        : u !== void 0
          ? e.addEventListener(r, s, { passive: u })
          : e.addEventListener(r, s, !1);
  }
  function xs(e, r, s, l, u) {
    var p = l;
    if ((r & 1) === 0 && (r & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var g = l.tag;
        if (g === 3 || g === 4) {
          var _ = l.stateNode.containerInfo;
          if (_ === u || (_.nodeType === 8 && _.parentNode === u)) break;
          if (g === 4)
            for (g = l.return; g !== null; ) {
              var w = g.tag;
              if (
                (w === 3 || w === 4) &&
                ((w = g.stateNode.containerInfo),
                w === u || (w.nodeType === 8 && w.parentNode === u))
              )
                return;
              g = g.return;
            }
          for (; _ !== null; ) {
            if (((g = e0(_)), g === null)) return;
            if (((w = g.tag), w === 5 || w === 6)) {
              l = p = g;
              continue e;
            }
            _ = _.parentNode;
          }
        }
        l = l.return;
      }
    _u(function () {
      var R = p,
        H = qi(s),
        z = [];
      e: {
        var D = dd.get(e);
        if (D !== void 0) {
          var Q = is,
            J = e;
          switch (e) {
            case "keypress":
              if (No(s) === 0) break e;
            case "keydown":
            case "keyup":
              Q = fg;
              break;
            case "focusin":
              (J = "focus"), (Q = cs);
              break;
            case "focusout":
              (J = "blur"), (Q = cs);
              break;
            case "beforeblur":
            case "afterblur":
              Q = cs;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = Hu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = eg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = mg;
              break;
            case sd:
            case ld:
            case cd:
              Q = rg;
              break;
            case ud:
              Q = bg;
              break;
            case "scroll":
              Q = Z1;
              break;
            case "wheel":
              Q = yg;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = ag;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = Vu;
          }
          var ee = (r & 4) !== 0,
            We = !ee && e === "scroll",
            j = ee ? (D !== null ? D + "Capture" : null) : D;
          ee = [];
          for (var E = R, M; E !== null; ) {
            M = E;
            var G = M.stateNode;
            if (
              (M.tag === 5 &&
                G !== null &&
                ((M = G),
                j !== null &&
                  ((G = gr(E, j)), G != null && ee.push(Nr(E, G, M)))),
              We)
            )
              break;
            E = E.return;
          }
          0 < ee.length &&
            ((D = new Q(D, J, null, s, H)),
            z.push({ event: D, listeners: ee }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (
            ((D = e === "mouseover" || e === "pointerover"),
            (Q = e === "mouseout" || e === "pointerout"),
            D &&
              s !== Gi &&
              (J = s.relatedTarget || s.fromElement) &&
              (e0(J) || J[pn]))
          )
            break e;
          if (
            (Q || D) &&
            ((D =
              H.window === H
                ? H
                : (D = H.ownerDocument)
                  ? D.defaultView || D.parentWindow
                  : window),
            Q
              ? ((J = s.relatedTarget || s.toElement),
                (Q = R),
                (J = J ? e0(J) : null),
                J !== null &&
                  ((We = Jn(J)), J !== We || (J.tag !== 5 && J.tag !== 6)) &&
                  (J = null))
              : ((Q = null), (J = R)),
            Q !== J)
          ) {
            if (
              ((ee = Hu),
              (G = "onMouseLeave"),
              (j = "onMouseEnter"),
              (E = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ee = Vu),
                (G = "onPointerLeave"),
                (j = "onPointerEnter"),
                (E = "pointer")),
              (We = Q == null ? D : N0(Q)),
              (M = J == null ? D : N0(J)),
              (D = new ee(G, E + "leave", Q, s, H)),
              (D.target = We),
              (D.relatedTarget = M),
              (G = null),
              e0(H) === R &&
                ((ee = new ee(j, E + "enter", J, s, H)),
                (ee.target = M),
                (ee.relatedTarget = We),
                (G = ee)),
              (We = G),
              Q && J)
            )
              t: {
                for (ee = Q, j = J, E = 0, M = ee; M; M = I0(M)) E++;
                for (M = 0, G = j; G; G = I0(G)) M++;
                for (; 0 < E - M; ) (ee = I0(ee)), E--;
                for (; 0 < M - E; ) (j = I0(j)), M--;
                for (; E--; ) {
                  if (ee === j || (j !== null && ee === j.alternate)) break t;
                  (ee = I0(ee)), (j = I0(j));
                }
                ee = null;
              }
            else ee = null;
            Q !== null && gd(z, D, Q, ee, !1),
              J !== null && We !== null && gd(z, We, J, ee, !0);
          }
        }
        e: {
          if (
            ((D = R ? N0(R) : window),
            (Q = D.nodeName && D.nodeName.toLowerCase()),
            Q === "select" || (Q === "input" && D.type === "file"))
          )
            var ne = Pg;
          else if (Xu(D))
            if (Yu) ne = Fg;
            else {
              ne = Eg;
              var ae = Og;
            }
          else
            (Q = D.nodeName) &&
              Q.toLowerCase() === "input" &&
              (D.type === "checkbox" || D.type === "radio") &&
              (ne = Tg);
          if (ne && (ne = ne(e, R))) {
            Qu(z, ne, s, H);
            break e;
          }
          ae && ae(e, D, R),
            e === "focusout" &&
              (ae = D._wrapperState) &&
              ae.controlled &&
              D.type === "number" &&
              Di(D, "number", D.value);
        }
        switch (((ae = R ? N0(R) : window), e)) {
          case "focusin":
            (Xu(ae) || ae.contentEditable === "true") &&
              ((j0 = ae), (ms = R), (Mr = null));
            break;
          case "focusout":
            Mr = ms = j0 = null;
            break;
          case "mousedown":
            gs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (gs = !1), ad(z, s, H);
            break;
          case "selectionchange":
            if (Ig) break;
          case "keydown":
          case "keyup":
            ad(z, s, H);
        }
        var ie;
        if (ds)
          e: {
            switch (e) {
              case "compositionstart":
                var fe = "onCompositionStart";
                break e;
              case "compositionend":
                fe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                fe = "onCompositionUpdate";
                break e;
            }
            fe = void 0;
          }
        else
          F0
            ? Wu(e, s) && (fe = "onCompositionEnd")
            : e === "keydown" &&
              s.keyCode === 229 &&
              (fe = "onCompositionStart");
        fe &&
          (Uu &&
            s.locale !== "ko" &&
            (F0 || fe !== "onCompositionStart"
              ? fe === "onCompositionEnd" && F0 && (ie = Au())
              : ((jn = H),
                (as = "value" in jn ? jn.value : jn.textContent),
                (F0 = !0))),
          (ae = zo(R, fe)),
          0 < ae.length &&
            ((fe = new zu(fe, e, null, s, H)),
            z.push({ event: fe, listeners: ae }),
            ie
              ? (fe.data = ie)
              : ((ie = Ku(s)), ie !== null && (fe.data = ie)))),
          (ie = xg ? Sg(e, s) : Cg(e, s)) &&
            ((R = zo(R, "onBeforeInput")),
            0 < R.length &&
              ((H = new zu("onBeforeInput", "beforeinput", null, s, H)),
              z.push({ event: H, listeners: R }),
              (H.data = ie)));
      }
      hd(z, r);
    });
  }
  function Nr(e, r, s) {
    return { instance: e, listener: r, currentTarget: s };
  }
  function zo(e, r) {
    for (var s = r + "Capture", l = []; e !== null; ) {
      var u = e,
        p = u.stateNode;
      u.tag === 5 &&
        p !== null &&
        ((u = p),
        (p = gr(e, s)),
        p != null && l.unshift(Nr(e, p, u)),
        (p = gr(e, r)),
        p != null && l.push(Nr(e, p, u))),
        (e = e.return);
    }
    return l;
  }
  function I0(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function gd(e, r, s, l, u) {
    for (var p = r._reactName, g = []; s !== null && s !== l; ) {
      var _ = s,
        w = _.alternate,
        R = _.stateNode;
      if (w !== null && w === l) break;
      _.tag === 5 &&
        R !== null &&
        ((_ = R),
        u
          ? ((w = gr(s, p)), w != null && g.unshift(Nr(s, w, _)))
          : u || ((w = gr(s, p)), w != null && g.push(Nr(s, w, _)))),
        (s = s.return);
    }
    g.length !== 0 && e.push({ event: r, listeners: g });
  }
  var Bg = /\r\n?/g,
    $g = /\u0000|\uFFFD/g;
  function bd(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Bg,
        `
`,
      )
      .replace($g, "");
  }
  function Vo(e, r, s) {
    if (((r = bd(r)), bd(e) !== r && s)) throw Error(o(425));
  }
  function Uo() {}
  var Ss = null,
    Cs = null;
  function ws(e, r) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof r.children == "string" ||
      typeof r.children == "number" ||
      (typeof r.dangerouslySetInnerHTML == "object" &&
        r.dangerouslySetInnerHTML !== null &&
        r.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ks = typeof setTimeout == "function" ? setTimeout : void 0,
    Ag = typeof clearTimeout == "function" ? clearTimeout : void 0,
    vd = typeof Promise == "function" ? Promise : void 0,
    Dg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof vd < "u"
          ? function (e) {
              return vd.resolve(null).then(e).catch(Hg);
            }
          : ks;
  function Hg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ps(e, r) {
    var s = r,
      l = 0;
    do {
      var u = s.nextSibling;
      if ((e.removeChild(s), u && u.nodeType === 8))
        if (((s = u.data), s === "/$")) {
          if (l === 0) {
            e.removeChild(u), kr(r);
            return;
          }
          l--;
        } else (s !== "$" && s !== "$?" && s !== "$!") || l++;
      s = u;
    } while (s);
    kr(r);
  }
  function In(e) {
    for (; e != null; e = e.nextSibling) {
      var r = e.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (((r = e.data), r === "$" || r === "$!" || r === "$?")) break;
        if (r === "/$") return null;
      }
    }
    return e;
  }
  function yd(e) {
    e = e.previousSibling;
    for (var r = 0; e; ) {
      if (e.nodeType === 8) {
        var s = e.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (r === 0) return e;
          r--;
        } else s === "/$" && r++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var R0 = Math.random().toString(36).slice(2),
    rn = "__reactFiber$" + R0,
    Lr = "__reactProps$" + R0,
    pn = "__reactContainer$" + R0,
    Os = "__reactEvents$" + R0,
    zg = "__reactListeners$" + R0,
    Vg = "__reactHandles$" + R0;
  function e0(e) {
    var r = e[rn];
    if (r) return r;
    for (var s = e.parentNode; s; ) {
      if ((r = s[pn] || s[rn])) {
        if (
          ((s = r.alternate),
          r.child !== null || (s !== null && s.child !== null))
        )
          for (e = yd(e); e !== null; ) {
            if ((s = e[rn])) return s;
            e = yd(e);
          }
        return r;
      }
      (e = s), (s = e.parentNode);
    }
    return null;
  }
  function Br(e) {
    return (
      (e = e[rn] || e[pn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function N0(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Go(e) {
    return e[Lr] || null;
  }
  var Es = [],
    L0 = -1;
  function Rn(e) {
    return { current: e };
  }
  function $e(e) {
    0 > L0 || ((e.current = Es[L0]), (Es[L0] = null), L0--);
  }
  function Ne(e, r) {
    L0++, (Es[L0] = e.current), (e.current = r);
  }
  var Nn = {},
    ut = Rn(Nn),
    St = Rn(!1),
    t0 = Nn;
  function B0(e, r) {
    var s = e.type.contextTypes;
    if (!s) return Nn;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === r)
      return l.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      p;
    for (p in s) u[p] = r[p];
    return (
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = r),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function Ct(e) {
    return (e = e.childContextTypes), e != null;
  }
  function qo() {
    $e(St), $e(ut);
  }
  function _d(e, r, s) {
    if (ut.current !== Nn) throw Error(o(168));
    Ne(ut, r), Ne(St, s);
  }
  function xd(e, r, s) {
    var l = e.stateNode;
    if (((r = r.childContextTypes), typeof l.getChildContext != "function"))
      return s;
    l = l.getChildContext();
    for (var u in l) if (!(u in r)) throw Error(o(108, be(e) || "Unknown", u));
    return C({}, s, l);
  }
  function Wo(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Nn),
      (t0 = ut.current),
      Ne(ut, e),
      Ne(St, St.current),
      !0
    );
  }
  function Sd(e, r, s) {
    var l = e.stateNode;
    if (!l) throw Error(o(169));
    s
      ? ((e = xd(e, r, t0)),
        (l.__reactInternalMemoizedMergedChildContext = e),
        $e(St),
        $e(ut),
        Ne(ut, e))
      : $e(St),
      Ne(St, s);
  }
  var hn = null,
    Ko = !1,
    Ts = !1;
  function Cd(e) {
    hn === null ? (hn = [e]) : hn.push(e);
  }
  function Ug(e) {
    (Ko = !0), Cd(e);
  }
  function Ln() {
    if (!Ts && hn !== null) {
      Ts = !0;
      var e = 0,
        r = Ie;
      try {
        var s = hn;
        for (Ie = 1; e < s.length; e++) {
          var l = s[e];
          do l = l(!0);
          while (l !== null);
        }
        (hn = null), (Ko = !1);
      } catch (u) {
        throw (hn !== null && (hn = hn.slice(e + 1)), ku(Yi, Ln), u);
      } finally {
        (Ie = r), (Ts = !1);
      }
    }
    return null;
  }
  var $0 = [],
    A0 = 0,
    Xo = null,
    Qo = 0,
    $t = [],
    At = 0,
    n0 = null,
    mn = 1,
    gn = "";
  function r0(e, r) {
    ($0[A0++] = Qo), ($0[A0++] = Xo), (Xo = e), (Qo = r);
  }
  function wd(e, r, s) {
    ($t[At++] = mn), ($t[At++] = gn), ($t[At++] = n0), (n0 = e);
    var l = mn;
    e = gn;
    var u = 32 - Wt(l) - 1;
    (l &= ~(1 << u)), (s += 1);
    var p = 32 - Wt(r) + u;
    if (30 < p) {
      var g = u - (u % 5);
      (p = (l & ((1 << g) - 1)).toString(32)),
        (l >>= g),
        (u -= g),
        (mn = (1 << (32 - Wt(r) + u)) | (s << u) | l),
        (gn = p + e);
    } else (mn = (1 << p) | (s << u) | l), (gn = e);
  }
  function Fs(e) {
    e.return !== null && (r0(e, 1), wd(e, 1, 0));
  }
  function js(e) {
    for (; e === Xo; )
      (Xo = $0[--A0]), ($0[A0] = null), (Qo = $0[--A0]), ($0[A0] = null);
    for (; e === n0; )
      (n0 = $t[--At]),
        ($t[At] = null),
        (gn = $t[--At]),
        ($t[At] = null),
        (mn = $t[--At]),
        ($t[At] = null);
  }
  var jt = null,
    Mt = null,
    De = !1,
    Xt = null;
  function kd(e, r) {
    var s = Vt(5, null, null, 0);
    (s.elementType = "DELETED"),
      (s.stateNode = r),
      (s.return = e),
      (r = e.deletions),
      r === null ? ((e.deletions = [s]), (e.flags |= 16)) : r.push(s);
  }
  function Pd(e, r) {
    switch (e.tag) {
      case 5:
        var s = e.type;
        return (
          (r =
            r.nodeType !== 1 || s.toLowerCase() !== r.nodeName.toLowerCase()
              ? null
              : r),
          r !== null
            ? ((e.stateNode = r), (jt = e), (Mt = In(r.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (r = e.pendingProps === "" || r.nodeType !== 3 ? null : r),
          r !== null ? ((e.stateNode = r), (jt = e), (Mt = null), !0) : !1
        );
      case 13:
        return (
          (r = r.nodeType !== 8 ? null : r),
          r !== null
            ? ((s = n0 !== null ? { id: mn, overflow: gn } : null),
              (e.memoizedState = {
                dehydrated: r,
                treeContext: s,
                retryLane: 1073741824,
              }),
              (s = Vt(18, null, null, 0)),
              (s.stateNode = r),
              (s.return = e),
              (e.child = s),
              (jt = e),
              (Mt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ms(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Is(e) {
    if (De) {
      var r = Mt;
      if (r) {
        var s = r;
        if (!Pd(e, r)) {
          if (Ms(e)) throw Error(o(418));
          r = In(s.nextSibling);
          var l = jt;
          r && Pd(e, r)
            ? kd(l, s)
            : ((e.flags = (e.flags & -4097) | 2), (De = !1), (jt = e));
        }
      } else {
        if (Ms(e)) throw Error(o(418));
        (e.flags = (e.flags & -4097) | 2), (De = !1), (jt = e);
      }
    }
  }
  function Od(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    jt = e;
  }
  function Yo(e) {
    if (e !== jt) return !1;
    if (!De) return Od(e), (De = !0), !1;
    var r;
    if (
      ((r = e.tag !== 3) &&
        !(r = e.tag !== 5) &&
        ((r = e.type),
        (r = r !== "head" && r !== "body" && !ws(e.type, e.memoizedProps))),
      r && (r = Mt))
    ) {
      if (Ms(e)) throw (Ed(), Error(o(418)));
      for (; r; ) kd(e, r), (r = In(r.nextSibling));
    }
    if ((Od(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, r = 0; e; ) {
          if (e.nodeType === 8) {
            var s = e.data;
            if (s === "/$") {
              if (r === 0) {
                Mt = In(e.nextSibling);
                break e;
              }
              r--;
            } else (s !== "$" && s !== "$!" && s !== "$?") || r++;
          }
          e = e.nextSibling;
        }
        Mt = null;
      }
    } else Mt = jt ? In(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ed() {
    for (var e = Mt; e; ) e = In(e.nextSibling);
  }
  function D0() {
    (Mt = jt = null), (De = !1);
  }
  function Rs(e) {
    Xt === null ? (Xt = [e]) : Xt.push(e);
  }
  var Gg = B.ReactCurrentBatchConfig;
  function Qt(e, r) {
    if (e && e.defaultProps) {
      (r = C({}, r)), (e = e.defaultProps);
      for (var s in e) r[s] === void 0 && (r[s] = e[s]);
      return r;
    }
    return r;
  }
  var Zo = Rn(null),
    Jo = null,
    H0 = null,
    Ns = null;
  function Ls() {
    Ns = H0 = Jo = null;
  }
  function Bs(e) {
    var r = Zo.current;
    $e(Zo), (e._currentValue = r);
  }
  function $s(e, r, s) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & r) !== r
          ? ((e.childLanes |= r), l !== null && (l.childLanes |= r))
          : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r),
        e === s)
      )
        break;
      e = e.return;
    }
  }
  function z0(e, r) {
    (Jo = e),
      (Ns = H0 = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & r) !== 0 && (wt = !0), (e.firstContext = null));
  }
  function Dt(e) {
    var r = e._currentValue;
    if (Ns !== e)
      if (((e = { context: e, memoizedValue: r, next: null }), H0 === null)) {
        if (Jo === null) throw Error(o(308));
        (H0 = e), (Jo.dependencies = { lanes: 0, firstContext: e });
      } else H0 = H0.next = e;
    return r;
  }
  var o0 = null;
  function As(e) {
    o0 === null ? (o0 = [e]) : o0.push(e);
  }
  function Td(e, r, s, l) {
    var u = r.interleaved;
    return (
      u === null ? ((s.next = s), As(r)) : ((s.next = u.next), (u.next = s)),
      (r.interleaved = s),
      bn(e, l)
    );
  }
  function bn(e, r) {
    e.lanes |= r;
    var s = e.alternate;
    for (s !== null && (s.lanes |= r), s = e, e = e.return; e !== null; )
      (e.childLanes |= r),
        (s = e.alternate),
        s !== null && (s.childLanes |= r),
        (s = e),
        (e = e.return);
    return s.tag === 3 ? s.stateNode : null;
  }
  var Bn = !1;
  function Ds(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Fd(e, r) {
    (e = e.updateQueue),
      r.updateQueue === e &&
        (r.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function vn(e, r) {
    return {
      eventTime: e,
      lane: r,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function $n(e, r, s) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Pe & 2) !== 0)) {
      var u = l.pending;
      return (
        u === null ? (r.next = r) : ((r.next = u.next), (u.next = r)),
        (l.pending = r),
        bn(e, s)
      );
    }
    return (
      (u = l.interleaved),
      u === null ? ((r.next = r), As(l)) : ((r.next = u.next), (u.next = r)),
      (l.interleaved = r),
      bn(e, s)
    );
  }
  function ea(e, r, s) {
    if (
      ((r = r.updateQueue), r !== null && ((r = r.shared), (s & 4194240) !== 0))
    ) {
      var l = r.lanes;
      (l &= e.pendingLanes), (s |= l), (r.lanes = s), es(e, s);
    }
  }
  function jd(e, r) {
    var s = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), s === l)) {
      var u = null,
        p = null;
      if (((s = s.firstBaseUpdate), s !== null)) {
        do {
          var g = {
            eventTime: s.eventTime,
            lane: s.lane,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          };
          p === null ? (u = p = g) : (p = p.next = g), (s = s.next);
        } while (s !== null);
        p === null ? (u = p = r) : (p = p.next = r);
      } else u = p = r;
      (s = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: p,
        shared: l.shared,
        effects: l.effects,
      }),
        (e.updateQueue = s);
      return;
    }
    (e = s.lastBaseUpdate),
      e === null ? (s.firstBaseUpdate = r) : (e.next = r),
      (s.lastBaseUpdate = r);
  }
  function ta(e, r, s, l) {
    var u = e.updateQueue;
    Bn = !1;
    var p = u.firstBaseUpdate,
      g = u.lastBaseUpdate,
      _ = u.shared.pending;
    if (_ !== null) {
      u.shared.pending = null;
      var w = _,
        R = w.next;
      (w.next = null), g === null ? (p = R) : (g.next = R), (g = w);
      var H = e.alternate;
      H !== null &&
        ((H = H.updateQueue),
        (_ = H.lastBaseUpdate),
        _ !== g &&
          (_ === null ? (H.firstBaseUpdate = R) : (_.next = R),
          (H.lastBaseUpdate = w)));
    }
    if (p !== null) {
      var z = u.baseState;
      (g = 0), (H = R = w = null), (_ = p);
      do {
        var D = _.lane,
          Q = _.eventTime;
        if ((l & D) === D) {
          H !== null &&
            (H = H.next =
              {
                eventTime: Q,
                lane: 0,
                tag: _.tag,
                payload: _.payload,
                callback: _.callback,
                next: null,
              });
          e: {
            var J = e,
              ee = _;
            switch (((D = r), (Q = s), ee.tag)) {
              case 1:
                if (((J = ee.payload), typeof J == "function")) {
                  z = J.call(Q, z, D);
                  break e;
                }
                z = J;
                break e;
              case 3:
                J.flags = (J.flags & -65537) | 128;
              case 0:
                if (
                  ((J = ee.payload),
                  (D = typeof J == "function" ? J.call(Q, z, D) : J),
                  D == null)
                )
                  break e;
                z = C({}, z, D);
                break e;
              case 2:
                Bn = !0;
            }
          }
          _.callback !== null &&
            _.lane !== 0 &&
            ((e.flags |= 64),
            (D = u.effects),
            D === null ? (u.effects = [_]) : D.push(_));
        } else
          (Q = {
            eventTime: Q,
            lane: D,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null,
          }),
            H === null ? ((R = H = Q), (w = z)) : (H = H.next = Q),
            (g |= D);
        if (((_ = _.next), _ === null)) {
          if (((_ = u.shared.pending), _ === null)) break;
          (D = _),
            (_ = D.next),
            (D.next = null),
            (u.lastBaseUpdate = D),
            (u.shared.pending = null);
        }
      } while (!0);
      if (
        (H === null && (w = z),
        (u.baseState = w),
        (u.firstBaseUpdate = R),
        (u.lastBaseUpdate = H),
        (r = u.shared.interleaved),
        r !== null)
      ) {
        u = r;
        do (g |= u.lane), (u = u.next);
        while (u !== r);
      } else p === null && (u.shared.lanes = 0);
      (s0 |= g), (e.lanes = g), (e.memoizedState = z);
    }
  }
  function Md(e, r, s) {
    if (((e = r.effects), (r.effects = null), e !== null))
      for (r = 0; r < e.length; r++) {
        var l = e[r],
          u = l.callback;
        if (u !== null) {
          if (((l.callback = null), (l = s), typeof u != "function"))
            throw Error(o(191, u));
          u.call(l);
        }
      }
  }
  var Id = new n.Component().refs;
  function Hs(e, r, s, l) {
    (r = e.memoizedState),
      (s = s(l, r)),
      (s = s == null ? r : C({}, r, s)),
      (e.memoizedState = s),
      e.lanes === 0 && (e.updateQueue.baseState = s);
  }
  var na = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Jn(e) === e : !1;
    },
    enqueueSetState: function (e, r, s) {
      e = e._reactInternals;
      var l = yt(),
        u = zn(e),
        p = vn(l, u);
      (p.payload = r),
        s != null && (p.callback = s),
        (r = $n(e, p, u)),
        r !== null && (Jt(r, e, u, l), ea(r, e, u));
    },
    enqueueReplaceState: function (e, r, s) {
      e = e._reactInternals;
      var l = yt(),
        u = zn(e),
        p = vn(l, u);
      (p.tag = 1),
        (p.payload = r),
        s != null && (p.callback = s),
        (r = $n(e, p, u)),
        r !== null && (Jt(r, e, u, l), ea(r, e, u));
    },
    enqueueForceUpdate: function (e, r) {
      e = e._reactInternals;
      var s = yt(),
        l = zn(e),
        u = vn(s, l);
      (u.tag = 2),
        r != null && (u.callback = r),
        (r = $n(e, u, l)),
        r !== null && (Jt(r, e, l, s), ea(r, e, l));
    },
  };
  function Rd(e, r, s, l, u, p, g) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, p, g)
        : r.prototype && r.prototype.isPureReactComponent
          ? !jr(s, l) || !jr(u, p)
          : !0
    );
  }
  function Nd(e, r, s) {
    var l = !1,
      u = Nn,
      p = r.contextType;
    return (
      typeof p == "object" && p !== null
        ? (p = Dt(p))
        : ((u = Ct(r) ? t0 : ut.current),
          (l = r.contextTypes),
          (p = (l = l != null) ? B0(e, u) : Nn)),
      (r = new r(s, p)),
      (e.memoizedState =
        r.state !== null && r.state !== void 0 ? r.state : null),
      (r.updater = na),
      (e.stateNode = r),
      (r._reactInternals = e),
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = p)),
      r
    );
  }
  function Ld(e, r, s, l) {
    (e = r.state),
      typeof r.componentWillReceiveProps == "function" &&
        r.componentWillReceiveProps(s, l),
      typeof r.UNSAFE_componentWillReceiveProps == "function" &&
        r.UNSAFE_componentWillReceiveProps(s, l),
      r.state !== e && na.enqueueReplaceState(r, r.state, null);
  }
  function zs(e, r, s, l) {
    var u = e.stateNode;
    (u.props = s), (u.state = e.memoizedState), (u.refs = Id), Ds(e);
    var p = r.contextType;
    typeof p == "object" && p !== null
      ? (u.context = Dt(p))
      : ((p = Ct(r) ? t0 : ut.current), (u.context = B0(e, p))),
      (u.state = e.memoizedState),
      (p = r.getDerivedStateFromProps),
      typeof p == "function" && (Hs(e, r, p, s), (u.state = e.memoizedState)),
      typeof r.getDerivedStateFromProps == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function" ||
        (typeof u.UNSAFE_componentWillMount != "function" &&
          typeof u.componentWillMount != "function") ||
        ((r = u.state),
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" &&
          u.UNSAFE_componentWillMount(),
        r !== u.state && na.enqueueReplaceState(u, u.state, null),
        ta(e, s, u, l),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function $r(e, r, s) {
    if (
      ((e = s.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (s._owner) {
        if (((s = s._owner), s)) {
          if (s.tag !== 1) throw Error(o(309));
          var l = s.stateNode;
        }
        if (!l) throw Error(o(147, e));
        var u = l,
          p = "" + e;
        return r !== null &&
          r.ref !== null &&
          typeof r.ref == "function" &&
          r.ref._stringRef === p
          ? r.ref
          : ((r = function (g) {
              var _ = u.refs;
              _ === Id && (_ = u.refs = {}),
                g === null ? delete _[p] : (_[p] = g);
            }),
            (r._stringRef = p),
            r);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!s._owner) throw Error(o(290, e));
    }
    return e;
  }
  function ra(e, r) {
    throw (
      ((e = Object.prototype.toString.call(r)),
      Error(
        o(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(r).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function Bd(e) {
    var r = e._init;
    return r(e._payload);
  }
  function $d(e) {
    function r(j, E) {
      if (e) {
        var M = j.deletions;
        M === null ? ((j.deletions = [E]), (j.flags |= 16)) : M.push(E);
      }
    }
    function s(j, E) {
      if (!e) return null;
      for (; E !== null; ) r(j, E), (E = E.sibling);
      return null;
    }
    function l(j, E) {
      for (j = new Map(); E !== null; )
        E.key !== null ? j.set(E.key, E) : j.set(E.index, E), (E = E.sibling);
      return j;
    }
    function u(j, E) {
      return (j = Un(j, E)), (j.index = 0), (j.sibling = null), j;
    }
    function p(j, E, M) {
      return (
        (j.index = M),
        e
          ? ((M = j.alternate),
            M !== null
              ? ((M = M.index), M < E ? ((j.flags |= 2), E) : M)
              : ((j.flags |= 2), E))
          : ((j.flags |= 1048576), E)
      );
    }
    function g(j) {
      return e && j.alternate === null && (j.flags |= 2), j;
    }
    function _(j, E, M, G) {
      return E === null || E.tag !== 6
        ? ((E = kl(M, j.mode, G)), (E.return = j), E)
        : ((E = u(E, M)), (E.return = j), E);
    }
    function w(j, E, M, G) {
      var ne = M.type;
      return ne === N
        ? H(j, E, M.props.children, G, M.key)
        : E !== null &&
            (E.elementType === ne ||
              (typeof ne == "object" &&
                ne !== null &&
                ne.$$typeof === me &&
                Bd(ne) === E.type))
          ? ((G = u(E, M.props)), (G.ref = $r(j, E, M)), (G.return = j), G)
          : ((G = Sa(M.type, M.key, M.props, null, j.mode, G)),
            (G.ref = $r(j, E, M)),
            (G.return = j),
            G);
    }
    function R(j, E, M, G) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== M.containerInfo ||
        E.stateNode.implementation !== M.implementation
        ? ((E = Pl(M, j.mode, G)), (E.return = j), E)
        : ((E = u(E, M.children || [])), (E.return = j), E);
    }
    function H(j, E, M, G, ne) {
      return E === null || E.tag !== 7
        ? ((E = d0(M, j.mode, G, ne)), (E.return = j), E)
        : ((E = u(E, M)), (E.return = j), E);
    }
    function z(j, E, M) {
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return (E = kl("" + E, j.mode, M)), (E.return = j), E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case F:
            return (
              (M = Sa(E.type, E.key, E.props, null, j.mode, M)),
              (M.ref = $r(j, null, E)),
              (M.return = j),
              M
            );
          case $:
            return (E = Pl(E, j.mode, M)), (E.return = j), E;
          case me:
            var G = E._init;
            return z(j, G(E._payload), M);
        }
        if (pr(E) || Y(E))
          return (E = d0(E, j.mode, M, null)), (E.return = j), E;
        ra(j, E);
      }
      return null;
    }
    function D(j, E, M, G) {
      var ne = E !== null ? E.key : null;
      if ((typeof M == "string" && M !== "") || typeof M == "number")
        return ne !== null ? null : _(j, E, "" + M, G);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case F:
            return M.key === ne ? w(j, E, M, G) : null;
          case $:
            return M.key === ne ? R(j, E, M, G) : null;
          case me:
            return (ne = M._init), D(j, E, ne(M._payload), G);
        }
        if (pr(M) || Y(M)) return ne !== null ? null : H(j, E, M, G, null);
        ra(j, M);
      }
      return null;
    }
    function Q(j, E, M, G, ne) {
      if ((typeof G == "string" && G !== "") || typeof G == "number")
        return (j = j.get(M) || null), _(E, j, "" + G, ne);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case F:
            return (
              (j = j.get(G.key === null ? M : G.key) || null), w(E, j, G, ne)
            );
          case $:
            return (
              (j = j.get(G.key === null ? M : G.key) || null), R(E, j, G, ne)
            );
          case me:
            var ae = G._init;
            return Q(j, E, M, ae(G._payload), ne);
        }
        if (pr(G) || Y(G)) return (j = j.get(M) || null), H(E, j, G, ne, null);
        ra(E, G);
      }
      return null;
    }
    function J(j, E, M, G) {
      for (
        var ne = null, ae = null, ie = E, fe = (E = 0), ot = null;
        ie !== null && fe < M.length;
        fe++
      ) {
        ie.index > fe ? ((ot = ie), (ie = null)) : (ot = ie.sibling);
        var Oe = D(j, ie, M[fe], G);
        if (Oe === null) {
          ie === null && (ie = ot);
          break;
        }
        e && ie && Oe.alternate === null && r(j, ie),
          (E = p(Oe, E, fe)),
          ae === null ? (ne = Oe) : (ae.sibling = Oe),
          (ae = Oe),
          (ie = ot);
      }
      if (fe === M.length) return s(j, ie), De && r0(j, fe), ne;
      if (ie === null) {
        for (; fe < M.length; fe++)
          (ie = z(j, M[fe], G)),
            ie !== null &&
              ((E = p(ie, E, fe)),
              ae === null ? (ne = ie) : (ae.sibling = ie),
              (ae = ie));
        return De && r0(j, fe), ne;
      }
      for (ie = l(j, ie); fe < M.length; fe++)
        (ot = Q(ie, j, fe, M[fe], G)),
          ot !== null &&
            (e &&
              ot.alternate !== null &&
              ie.delete(ot.key === null ? fe : ot.key),
            (E = p(ot, E, fe)),
            ae === null ? (ne = ot) : (ae.sibling = ot),
            (ae = ot));
      return (
        e &&
          ie.forEach(function (Gn) {
            return r(j, Gn);
          }),
        De && r0(j, fe),
        ne
      );
    }
    function ee(j, E, M, G) {
      var ne = Y(M);
      if (typeof ne != "function") throw Error(o(150));
      if (((M = ne.call(M)), M == null)) throw Error(o(151));
      for (
        var ae = (ne = null), ie = E, fe = (E = 0), ot = null, Oe = M.next();
        ie !== null && !Oe.done;
        fe++, Oe = M.next()
      ) {
        ie.index > fe ? ((ot = ie), (ie = null)) : (ot = ie.sibling);
        var Gn = D(j, ie, Oe.value, G);
        if (Gn === null) {
          ie === null && (ie = ot);
          break;
        }
        e && ie && Gn.alternate === null && r(j, ie),
          (E = p(Gn, E, fe)),
          ae === null ? (ne = Gn) : (ae.sibling = Gn),
          (ae = Gn),
          (ie = ot);
      }
      if (Oe.done) return s(j, ie), De && r0(j, fe), ne;
      if (ie === null) {
        for (; !Oe.done; fe++, Oe = M.next())
          (Oe = z(j, Oe.value, G)),
            Oe !== null &&
              ((E = p(Oe, E, fe)),
              ae === null ? (ne = Oe) : (ae.sibling = Oe),
              (ae = Oe));
        return De && r0(j, fe), ne;
      }
      for (ie = l(j, ie); !Oe.done; fe++, Oe = M.next())
        (Oe = Q(ie, j, fe, Oe.value, G)),
          Oe !== null &&
            (e &&
              Oe.alternate !== null &&
              ie.delete(Oe.key === null ? fe : Oe.key),
            (E = p(Oe, E, fe)),
            ae === null ? (ne = Oe) : (ae.sibling = Oe),
            (ae = Oe));
      return (
        e &&
          ie.forEach(function (w2) {
            return r(j, w2);
          }),
        De && r0(j, fe),
        ne
      );
    }
    function We(j, E, M, G) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === N &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case F:
            e: {
              for (var ne = M.key, ae = E; ae !== null; ) {
                if (ae.key === ne) {
                  if (((ne = M.type), ne === N)) {
                    if (ae.tag === 7) {
                      s(j, ae.sibling),
                        (E = u(ae, M.props.children)),
                        (E.return = j),
                        (j = E);
                      break e;
                    }
                  } else if (
                    ae.elementType === ne ||
                    (typeof ne == "object" &&
                      ne !== null &&
                      ne.$$typeof === me &&
                      Bd(ne) === ae.type)
                  ) {
                    s(j, ae.sibling),
                      (E = u(ae, M.props)),
                      (E.ref = $r(j, ae, M)),
                      (E.return = j),
                      (j = E);
                    break e;
                  }
                  s(j, ae);
                  break;
                } else r(j, ae);
                ae = ae.sibling;
              }
              M.type === N
                ? ((E = d0(M.props.children, j.mode, G, M.key)),
                  (E.return = j),
                  (j = E))
                : ((G = Sa(M.type, M.key, M.props, null, j.mode, G)),
                  (G.ref = $r(j, E, M)),
                  (G.return = j),
                  (j = G));
            }
            return g(j);
          case $:
            e: {
              for (ae = M.key; E !== null; ) {
                if (E.key === ae)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === M.containerInfo &&
                    E.stateNode.implementation === M.implementation
                  ) {
                    s(j, E.sibling),
                      (E = u(E, M.children || [])),
                      (E.return = j),
                      (j = E);
                    break e;
                  } else {
                    s(j, E);
                    break;
                  }
                else r(j, E);
                E = E.sibling;
              }
              (E = Pl(M, j.mode, G)), (E.return = j), (j = E);
            }
            return g(j);
          case me:
            return (ae = M._init), We(j, E, ae(M._payload), G);
        }
        if (pr(M)) return J(j, E, M, G);
        if (Y(M)) return ee(j, E, M, G);
        ra(j, M);
      }
      return (typeof M == "string" && M !== "") || typeof M == "number"
        ? ((M = "" + M),
          E !== null && E.tag === 6
            ? (s(j, E.sibling), (E = u(E, M)), (E.return = j), (j = E))
            : (s(j, E), (E = kl(M, j.mode, G)), (E.return = j), (j = E)),
          g(j))
        : s(j, E);
    }
    return We;
  }
  var V0 = $d(!0),
    Ad = $d(!1),
    Ar = {},
    on = Rn(Ar),
    Dr = Rn(Ar),
    Hr = Rn(Ar);
  function a0(e) {
    if (e === Ar) throw Error(o(174));
    return e;
  }
  function Vs(e, r) {
    switch ((Ne(Hr, r), Ne(Dr, e), Ne(on, Ar), (e = r.nodeType), e)) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : zi(null, "");
        break;
      default:
        (e = e === 8 ? r.parentNode : r),
          (r = e.namespaceURI || null),
          (e = e.tagName),
          (r = zi(r, e));
    }
    $e(on), Ne(on, r);
  }
  function U0() {
    $e(on), $e(Dr), $e(Hr);
  }
  function Dd(e) {
    a0(Hr.current);
    var r = a0(on.current),
      s = zi(r, e.type);
    r !== s && (Ne(Dr, e), Ne(on, s));
  }
  function Us(e) {
    Dr.current === e && ($e(on), $e(Dr));
  }
  var He = Rn(0);
  function oa(e) {
    for (var r = e; r !== null; ) {
      if (r.tag === 13) {
        var s = r.memoizedState;
        if (
          s !== null &&
          ((s = s.dehydrated), s === null || s.data === "$?" || s.data === "$!")
        )
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === e) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === e) return null;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
    return null;
  }
  var Gs = [];
  function qs() {
    for (var e = 0; e < Gs.length; e++)
      Gs[e]._workInProgressVersionPrimary = null;
    Gs.length = 0;
  }
  var aa = B.ReactCurrentDispatcher,
    Ws = B.ReactCurrentBatchConfig,
    i0 = 0,
    ze = null,
    Je = null,
    nt = null,
    ia = !1,
    zr = !1,
    Vr = 0,
    qg = 0;
  function dt() {
    throw Error(o(321));
  }
  function Ks(e, r) {
    if (r === null) return !1;
    for (var s = 0; s < r.length && s < e.length; s++)
      if (!Kt(e[s], r[s])) return !1;
    return !0;
  }
  function Xs(e, r, s, l, u, p) {
    if (
      ((i0 = p),
      (ze = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (aa.current = e === null || e.memoizedState === null ? Qg : Yg),
      (e = s(l, u)),
      zr)
    ) {
      p = 0;
      do {
        if (((zr = !1), (Vr = 0), 25 <= p)) throw Error(o(301));
        (p += 1),
          (nt = Je = null),
          (r.updateQueue = null),
          (aa.current = Zg),
          (e = s(l, u));
      } while (zr);
    }
    if (
      ((aa.current = ca),
      (r = Je !== null && Je.next !== null),
      (i0 = 0),
      (nt = Je = ze = null),
      (ia = !1),
      r)
    )
      throw Error(o(300));
    return e;
  }
  function Qs() {
    var e = Vr !== 0;
    return (Vr = 0), e;
  }
  function an() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return nt === null ? (ze.memoizedState = nt = e) : (nt = nt.next = e), nt;
  }
  function Ht() {
    if (Je === null) {
      var e = ze.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Je.next;
    var r = nt === null ? ze.memoizedState : nt.next;
    if (r !== null) (nt = r), (Je = e);
    else {
      if (e === null) throw Error(o(310));
      (Je = e),
        (e = {
          memoizedState: Je.memoizedState,
          baseState: Je.baseState,
          baseQueue: Je.baseQueue,
          queue: Je.queue,
          next: null,
        }),
        nt === null ? (ze.memoizedState = nt = e) : (nt = nt.next = e);
    }
    return nt;
  }
  function Ur(e, r) {
    return typeof r == "function" ? r(e) : r;
  }
  function Ys(e) {
    var r = Ht(),
      s = r.queue;
    if (s === null) throw Error(o(311));
    s.lastRenderedReducer = e;
    var l = Je,
      u = l.baseQueue,
      p = s.pending;
    if (p !== null) {
      if (u !== null) {
        var g = u.next;
        (u.next = p.next), (p.next = g);
      }
      (l.baseQueue = u = p), (s.pending = null);
    }
    if (u !== null) {
      (p = u.next), (l = l.baseState);
      var _ = (g = null),
        w = null,
        R = p;
      do {
        var H = R.lane;
        if ((i0 & H) === H)
          w !== null &&
            (w = w.next =
              {
                lane: 0,
                action: R.action,
                hasEagerState: R.hasEagerState,
                eagerState: R.eagerState,
                next: null,
              }),
            (l = R.hasEagerState ? R.eagerState : e(l, R.action));
        else {
          var z = {
            lane: H,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          };
          w === null ? ((_ = w = z), (g = l)) : (w = w.next = z),
            (ze.lanes |= H),
            (s0 |= H);
        }
        R = R.next;
      } while (R !== null && R !== p);
      w === null ? (g = l) : (w.next = _),
        Kt(l, r.memoizedState) || (wt = !0),
        (r.memoizedState = l),
        (r.baseState = g),
        (r.baseQueue = w),
        (s.lastRenderedState = l);
    }
    if (((e = s.interleaved), e !== null)) {
      u = e;
      do (p = u.lane), (ze.lanes |= p), (s0 |= p), (u = u.next);
      while (u !== e);
    } else u === null && (s.lanes = 0);
    return [r.memoizedState, s.dispatch];
  }
  function Zs(e) {
    var r = Ht(),
      s = r.queue;
    if (s === null) throw Error(o(311));
    s.lastRenderedReducer = e;
    var l = s.dispatch,
      u = s.pending,
      p = r.memoizedState;
    if (u !== null) {
      s.pending = null;
      var g = (u = u.next);
      do (p = e(p, g.action)), (g = g.next);
      while (g !== u);
      Kt(p, r.memoizedState) || (wt = !0),
        (r.memoizedState = p),
        r.baseQueue === null && (r.baseState = p),
        (s.lastRenderedState = p);
    }
    return [p, l];
  }
  function Hd() {}
  function zd(e, r) {
    var s = ze,
      l = Ht(),
      u = r(),
      p = !Kt(l.memoizedState, u);
    if (
      (p && ((l.memoizedState = u), (wt = !0)),
      (l = l.queue),
      Js(Gd.bind(null, s, l, e), [e]),
      l.getSnapshot !== r || p || (nt !== null && nt.memoizedState.tag & 1))
    ) {
      if (
        ((s.flags |= 2048),
        Gr(9, Ud.bind(null, s, l, u, r), void 0, null),
        rt === null)
      )
        throw Error(o(349));
      (i0 & 30) !== 0 || Vd(s, r, u);
    }
    return u;
  }
  function Vd(e, r, s) {
    (e.flags |= 16384),
      (e = { getSnapshot: r, value: s }),
      (r = ze.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (ze.updateQueue = r),
          (r.stores = [e]))
        : ((s = r.stores), s === null ? (r.stores = [e]) : s.push(e));
  }
  function Ud(e, r, s, l) {
    (r.value = s), (r.getSnapshot = l), qd(r) && Wd(e);
  }
  function Gd(e, r, s) {
    return s(function () {
      qd(r) && Wd(e);
    });
  }
  function qd(e) {
    var r = e.getSnapshot;
    e = e.value;
    try {
      var s = r();
      return !Kt(e, s);
    } catch {
      return !0;
    }
  }
  function Wd(e) {
    var r = bn(e, 1);
    r !== null && Jt(r, e, 1, -1);
  }
  function Kd(e) {
    var r = an();
    return (
      typeof e == "function" && (e = e()),
      (r.memoizedState = r.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ur,
        lastRenderedState: e,
      }),
      (r.queue = e),
      (e = e.dispatch = Xg.bind(null, ze, e)),
      [r.memoizedState, e]
    );
  }
  function Gr(e, r, s, l) {
    return (
      (e = { tag: e, create: r, destroy: s, deps: l, next: null }),
      (r = ze.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (ze.updateQueue = r),
          (r.lastEffect = e.next = e))
        : ((s = r.lastEffect),
          s === null
            ? (r.lastEffect = e.next = e)
            : ((l = s.next), (s.next = e), (e.next = l), (r.lastEffect = e))),
      e
    );
  }
  function Xd() {
    return Ht().memoizedState;
  }
  function sa(e, r, s, l) {
    var u = an();
    (ze.flags |= e),
      (u.memoizedState = Gr(1 | r, s, void 0, l === void 0 ? null : l));
  }
  function la(e, r, s, l) {
    var u = Ht();
    l = l === void 0 ? null : l;
    var p = void 0;
    if (Je !== null) {
      var g = Je.memoizedState;
      if (((p = g.destroy), l !== null && Ks(l, g.deps))) {
        u.memoizedState = Gr(r, s, p, l);
        return;
      }
    }
    (ze.flags |= e), (u.memoizedState = Gr(1 | r, s, p, l));
  }
  function Qd(e, r) {
    return sa(8390656, 8, e, r);
  }
  function Js(e, r) {
    return la(2048, 8, e, r);
  }
  function Yd(e, r) {
    return la(4, 2, e, r);
  }
  function Zd(e, r) {
    return la(4, 4, e, r);
  }
  function Jd(e, r) {
    if (typeof r == "function")
      return (
        (e = e()),
        r(e),
        function () {
          r(null);
        }
      );
    if (r != null)
      return (
        (e = e()),
        (r.current = e),
        function () {
          r.current = null;
        }
      );
  }
  function ef(e, r, s) {
    return (
      (s = s != null ? s.concat([e]) : null), la(4, 4, Jd.bind(null, r, e), s)
    );
  }
  function el() {}
  function tf(e, r) {
    var s = Ht();
    r = r === void 0 ? null : r;
    var l = s.memoizedState;
    return l !== null && r !== null && Ks(r, l[1])
      ? l[0]
      : ((s.memoizedState = [e, r]), e);
  }
  function nf(e, r) {
    var s = Ht();
    r = r === void 0 ? null : r;
    var l = s.memoizedState;
    return l !== null && r !== null && Ks(r, l[1])
      ? l[0]
      : ((e = e()), (s.memoizedState = [e, r]), e);
  }
  function rf(e, r, s) {
    return (i0 & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (wt = !0)), (e.memoizedState = s))
      : (Kt(s, r) ||
          ((s = Tu()), (ze.lanes |= s), (s0 |= s), (e.baseState = !0)),
        r);
  }
  function Wg(e, r) {
    var s = Ie;
    (Ie = s !== 0 && 4 > s ? s : 4), e(!0);
    var l = Ws.transition;
    Ws.transition = {};
    try {
      e(!1), r();
    } finally {
      (Ie = s), (Ws.transition = l);
    }
  }
  function of() {
    return Ht().memoizedState;
  }
  function Kg(e, r, s) {
    var l = zn(e);
    if (
      ((s = {
        lane: l,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      af(e))
    )
      sf(r, s);
    else if (((s = Td(e, r, s, l)), s !== null)) {
      var u = yt();
      Jt(s, e, l, u), lf(s, r, l);
    }
  }
  function Xg(e, r, s) {
    var l = zn(e),
      u = {
        lane: l,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (af(e)) sf(r, u);
    else {
      var p = e.alternate;
      if (
        e.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = r.lastRenderedReducer), p !== null)
      )
        try {
          var g = r.lastRenderedState,
            _ = p(g, s);
          if (((u.hasEagerState = !0), (u.eagerState = _), Kt(_, g))) {
            var w = r.interleaved;
            w === null
              ? ((u.next = u), As(r))
              : ((u.next = w.next), (w.next = u)),
              (r.interleaved = u);
            return;
          }
        } catch {
        } finally {
        }
      (s = Td(e, r, u, l)),
        s !== null && ((u = yt()), Jt(s, e, l, u), lf(s, r, l));
    }
  }
  function af(e) {
    var r = e.alternate;
    return e === ze || (r !== null && r === ze);
  }
  function sf(e, r) {
    zr = ia = !0;
    var s = e.pending;
    s === null ? (r.next = r) : ((r.next = s.next), (s.next = r)),
      (e.pending = r);
  }
  function lf(e, r, s) {
    if ((s & 4194240) !== 0) {
      var l = r.lanes;
      (l &= e.pendingLanes), (s |= l), (r.lanes = s), es(e, s);
    }
  }
  var ca = {
      readContext: Dt,
      useCallback: dt,
      useContext: dt,
      useEffect: dt,
      useImperativeHandle: dt,
      useInsertionEffect: dt,
      useLayoutEffect: dt,
      useMemo: dt,
      useReducer: dt,
      useRef: dt,
      useState: dt,
      useDebugValue: dt,
      useDeferredValue: dt,
      useTransition: dt,
      useMutableSource: dt,
      useSyncExternalStore: dt,
      useId: dt,
      unstable_isNewReconciler: !1,
    },
    Qg = {
      readContext: Dt,
      useCallback: function (e, r) {
        return (an().memoizedState = [e, r === void 0 ? null : r]), e;
      },
      useContext: Dt,
      useEffect: Qd,
      useImperativeHandle: function (e, r, s) {
        return (
          (s = s != null ? s.concat([e]) : null),
          sa(4194308, 4, Jd.bind(null, r, e), s)
        );
      },
      useLayoutEffect: function (e, r) {
        return sa(4194308, 4, e, r);
      },
      useInsertionEffect: function (e, r) {
        return sa(4, 2, e, r);
      },
      useMemo: function (e, r) {
        var s = an();
        return (
          (r = r === void 0 ? null : r),
          (e = e()),
          (s.memoizedState = [e, r]),
          e
        );
      },
      useReducer: function (e, r, s) {
        var l = an();
        return (
          (r = s !== void 0 ? s(r) : r),
          (l.memoizedState = l.baseState = r),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: r,
          }),
          (l.queue = e),
          (e = e.dispatch = Kg.bind(null, ze, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var r = an();
        return (e = { current: e }), (r.memoizedState = e);
      },
      useState: Kd,
      useDebugValue: el,
      useDeferredValue: function (e) {
        return (an().memoizedState = e);
      },
      useTransition: function () {
        var e = Kd(!1),
          r = e[0];
        return (e = Wg.bind(null, e[1])), (an().memoizedState = e), [r, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, r, s) {
        var l = ze,
          u = an();
        if (De) {
          if (s === void 0) throw Error(o(407));
          s = s();
        } else {
          if (((s = r()), rt === null)) throw Error(o(349));
          (i0 & 30) !== 0 || Vd(l, r, s);
        }
        u.memoizedState = s;
        var p = { value: s, getSnapshot: r };
        return (
          (u.queue = p),
          Qd(Gd.bind(null, l, p, e), [e]),
          (l.flags |= 2048),
          Gr(9, Ud.bind(null, l, p, s, r), void 0, null),
          s
        );
      },
      useId: function () {
        var e = an(),
          r = rt.identifierPrefix;
        if (De) {
          var s = gn,
            l = mn;
          (s = (l & ~(1 << (32 - Wt(l) - 1))).toString(32) + s),
            (r = ":" + r + "R" + s),
            (s = Vr++),
            0 < s && (r += "H" + s.toString(32)),
            (r += ":");
        } else (s = qg++), (r = ":" + r + "r" + s.toString(32) + ":");
        return (e.memoizedState = r);
      },
      unstable_isNewReconciler: !1,
    },
    Yg = {
      readContext: Dt,
      useCallback: tf,
      useContext: Dt,
      useEffect: Js,
      useImperativeHandle: ef,
      useInsertionEffect: Yd,
      useLayoutEffect: Zd,
      useMemo: nf,
      useReducer: Ys,
      useRef: Xd,
      useState: function () {
        return Ys(Ur);
      },
      useDebugValue: el,
      useDeferredValue: function (e) {
        var r = Ht();
        return rf(r, Je.memoizedState, e);
      },
      useTransition: function () {
        var e = Ys(Ur)[0],
          r = Ht().memoizedState;
        return [e, r];
      },
      useMutableSource: Hd,
      useSyncExternalStore: zd,
      useId: of,
      unstable_isNewReconciler: !1,
    },
    Zg = {
      readContext: Dt,
      useCallback: tf,
      useContext: Dt,
      useEffect: Js,
      useImperativeHandle: ef,
      useInsertionEffect: Yd,
      useLayoutEffect: Zd,
      useMemo: nf,
      useReducer: Zs,
      useRef: Xd,
      useState: function () {
        return Zs(Ur);
      },
      useDebugValue: el,
      useDeferredValue: function (e) {
        var r = Ht();
        return Je === null ? (r.memoizedState = e) : rf(r, Je.memoizedState, e);
      },
      useTransition: function () {
        var e = Zs(Ur)[0],
          r = Ht().memoizedState;
        return [e, r];
      },
      useMutableSource: Hd,
      useSyncExternalStore: zd,
      useId: of,
      unstable_isNewReconciler: !1,
    };
  function G0(e, r) {
    try {
      var s = "",
        l = r;
      do (s += _e(l)), (l = l.return);
      while (l);
      var u = s;
    } catch (p) {
      u =
        `
Error generating stack: ` +
        p.message +
        `
` +
        p.stack;
    }
    return { value: e, source: r, stack: u, digest: null };
  }
  function tl(e, r, s) {
    return { value: e, source: null, stack: s ?? null, digest: r ?? null };
  }
  function nl(e, r) {
    try {
      console.error(r.value);
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  var Jg = typeof WeakMap == "function" ? WeakMap : Map;
  function cf(e, r, s) {
    (s = vn(-1, s)), (s.tag = 3), (s.payload = { element: null });
    var l = r.value;
    return (
      (s.callback = function () {
        ga || ((ga = !0), (bl = l)), nl(e, r);
      }),
      s
    );
  }
  function uf(e, r, s) {
    (s = vn(-1, s)), (s.tag = 3);
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var u = r.value;
      (s.payload = function () {
        return l(u);
      }),
        (s.callback = function () {
          nl(e, r);
        });
    }
    var p = e.stateNode;
    return (
      p !== null &&
        typeof p.componentDidCatch == "function" &&
        (s.callback = function () {
          nl(e, r),
            typeof l != "function" &&
              (Dn === null ? (Dn = new Set([this])) : Dn.add(this));
          var g = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: g !== null ? g : "",
          });
        }),
      s
    );
  }
  function df(e, r, s) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Jg();
      var u = new Set();
      l.set(r, u);
    } else (u = l.get(r)), u === void 0 && ((u = new Set()), l.set(r, u));
    u.has(s) || (u.add(s), (e = p2.bind(null, e, r, s)), r.then(e, e));
  }
  function ff(e) {
    do {
      var r;
      if (
        ((r = e.tag === 13) &&
          ((r = e.memoizedState),
          (r = r !== null ? r.dehydrated !== null : !0)),
        r)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function pf(e, r, s, l, u) {
    return (e.mode & 1) === 0
      ? (e === r
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (s.flags |= 131072),
            (s.flags &= -52805),
            s.tag === 1 &&
              (s.alternate === null
                ? (s.tag = 17)
                : ((r = vn(-1, 1)), (r.tag = 2), $n(s, r, 1))),
            (s.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = u), e);
  }
  var e2 = B.ReactCurrentOwner,
    wt = !1;
  function vt(e, r, s, l) {
    r.child = e === null ? Ad(r, null, s, l) : V0(r, e.child, s, l);
  }
  function hf(e, r, s, l, u) {
    s = s.render;
    var p = r.ref;
    return (
      z0(r, u),
      (l = Xs(e, r, s, l, p, u)),
      (s = Qs()),
      e !== null && !wt
        ? ((r.updateQueue = e.updateQueue),
          (r.flags &= -2053),
          (e.lanes &= ~u),
          yn(e, r, u))
        : (De && s && Fs(r), (r.flags |= 1), vt(e, r, l, u), r.child)
    );
  }
  function mf(e, r, s, l, u) {
    if (e === null) {
      var p = s.type;
      return typeof p == "function" &&
        !wl(p) &&
        p.defaultProps === void 0 &&
        s.compare === null &&
        s.defaultProps === void 0
        ? ((r.tag = 15), (r.type = p), gf(e, r, p, l, u))
        : ((e = Sa(s.type, null, l, r, r.mode, u)),
          (e.ref = r.ref),
          (e.return = r),
          (r.child = e));
    }
    if (((p = e.child), (e.lanes & u) === 0)) {
      var g = p.memoizedProps;
      if (
        ((s = s.compare), (s = s !== null ? s : jr), s(g, l) && e.ref === r.ref)
      )
        return yn(e, r, u);
    }
    return (
      (r.flags |= 1),
      (e = Un(p, l)),
      (e.ref = r.ref),
      (e.return = r),
      (r.child = e)
    );
  }
  function gf(e, r, s, l, u) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (jr(p, l) && e.ref === r.ref)
        if (((wt = !1), (r.pendingProps = l = p), (e.lanes & u) !== 0))
          (e.flags & 131072) !== 0 && (wt = !0);
        else return (r.lanes = e.lanes), yn(e, r, u);
    }
    return rl(e, r, s, l, u);
  }
  function bf(e, r, s) {
    var l = r.pendingProps,
      u = l.children,
      p = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden")
      if ((r.mode & 1) === 0)
        (r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ne(W0, It),
          (It |= s);
      else {
        if ((s & 1073741824) === 0)
          return (
            (e = p !== null ? p.baseLanes | s : s),
            (r.lanes = r.childLanes = 1073741824),
            (r.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (r.updateQueue = null),
            Ne(W0, It),
            (It |= e),
            null
          );
        (r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (l = p !== null ? p.baseLanes : s),
          Ne(W0, It),
          (It |= l);
      }
    else
      p !== null ? ((l = p.baseLanes | s), (r.memoizedState = null)) : (l = s),
        Ne(W0, It),
        (It |= l);
    return vt(e, r, u, s), r.child;
  }
  function vf(e, r) {
    var s = r.ref;
    ((e === null && s !== null) || (e !== null && e.ref !== s)) &&
      ((r.flags |= 512), (r.flags |= 2097152));
  }
  function rl(e, r, s, l, u) {
    var p = Ct(s) ? t0 : ut.current;
    return (
      (p = B0(r, p)),
      z0(r, u),
      (s = Xs(e, r, s, l, p, u)),
      (l = Qs()),
      e !== null && !wt
        ? ((r.updateQueue = e.updateQueue),
          (r.flags &= -2053),
          (e.lanes &= ~u),
          yn(e, r, u))
        : (De && l && Fs(r), (r.flags |= 1), vt(e, r, s, u), r.child)
    );
  }
  function yf(e, r, s, l, u) {
    if (Ct(s)) {
      var p = !0;
      Wo(r);
    } else p = !1;
    if ((z0(r, u), r.stateNode === null))
      da(e, r), Nd(r, s, l), zs(r, s, l, u), (l = !0);
    else if (e === null) {
      var g = r.stateNode,
        _ = r.memoizedProps;
      g.props = _;
      var w = g.context,
        R = s.contextType;
      typeof R == "object" && R !== null
        ? (R = Dt(R))
        : ((R = Ct(s) ? t0 : ut.current), (R = B0(r, R)));
      var H = s.getDerivedStateFromProps,
        z =
          typeof H == "function" ||
          typeof g.getSnapshotBeforeUpdate == "function";
      z ||
        (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
          typeof g.componentWillReceiveProps != "function") ||
        ((_ !== l || w !== R) && Ld(r, g, l, R)),
        (Bn = !1);
      var D = r.memoizedState;
      (g.state = D),
        ta(r, l, g, u),
        (w = r.memoizedState),
        _ !== l || D !== w || St.current || Bn
          ? (typeof H == "function" && (Hs(r, s, H, l), (w = r.memoizedState)),
            (_ = Bn || Rd(r, s, _, l, D, w, R))
              ? (z ||
                  (typeof g.UNSAFE_componentWillMount != "function" &&
                    typeof g.componentWillMount != "function") ||
                  (typeof g.componentWillMount == "function" &&
                    g.componentWillMount(),
                  typeof g.UNSAFE_componentWillMount == "function" &&
                    g.UNSAFE_componentWillMount()),
                typeof g.componentDidMount == "function" &&
                  (r.flags |= 4194308))
              : (typeof g.componentDidMount == "function" &&
                  (r.flags |= 4194308),
                (r.memoizedProps = l),
                (r.memoizedState = w)),
            (g.props = l),
            (g.state = w),
            (g.context = R),
            (l = _))
          : (typeof g.componentDidMount == "function" && (r.flags |= 4194308),
            (l = !1));
    } else {
      (g = r.stateNode),
        Fd(e, r),
        (_ = r.memoizedProps),
        (R = r.type === r.elementType ? _ : Qt(r.type, _)),
        (g.props = R),
        (z = r.pendingProps),
        (D = g.context),
        (w = s.contextType),
        typeof w == "object" && w !== null
          ? (w = Dt(w))
          : ((w = Ct(s) ? t0 : ut.current), (w = B0(r, w)));
      var Q = s.getDerivedStateFromProps;
      (H =
        typeof Q == "function" ||
        typeof g.getSnapshotBeforeUpdate == "function") ||
        (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
          typeof g.componentWillReceiveProps != "function") ||
        ((_ !== z || D !== w) && Ld(r, g, l, w)),
        (Bn = !1),
        (D = r.memoizedState),
        (g.state = D),
        ta(r, l, g, u);
      var J = r.memoizedState;
      _ !== z || D !== J || St.current || Bn
        ? (typeof Q == "function" && (Hs(r, s, Q, l), (J = r.memoizedState)),
          (R = Bn || Rd(r, s, R, l, D, J, w) || !1)
            ? (H ||
                (typeof g.UNSAFE_componentWillUpdate != "function" &&
                  typeof g.componentWillUpdate != "function") ||
                (typeof g.componentWillUpdate == "function" &&
                  g.componentWillUpdate(l, J, w),
                typeof g.UNSAFE_componentWillUpdate == "function" &&
                  g.UNSAFE_componentWillUpdate(l, J, w)),
              typeof g.componentDidUpdate == "function" && (r.flags |= 4),
              typeof g.getSnapshotBeforeUpdate == "function" &&
                (r.flags |= 1024))
            : (typeof g.componentDidUpdate != "function" ||
                (_ === e.memoizedProps && D === e.memoizedState) ||
                (r.flags |= 4),
              typeof g.getSnapshotBeforeUpdate != "function" ||
                (_ === e.memoizedProps && D === e.memoizedState) ||
                (r.flags |= 1024),
              (r.memoizedProps = l),
              (r.memoizedState = J)),
          (g.props = l),
          (g.state = J),
          (g.context = w),
          (l = R))
        : (typeof g.componentDidUpdate != "function" ||
            (_ === e.memoizedProps && D === e.memoizedState) ||
            (r.flags |= 4),
          typeof g.getSnapshotBeforeUpdate != "function" ||
            (_ === e.memoizedProps && D === e.memoizedState) ||
            (r.flags |= 1024),
          (l = !1));
    }
    return ol(e, r, s, l, p, u);
  }
  function ol(e, r, s, l, u, p) {
    vf(e, r);
    var g = (r.flags & 128) !== 0;
    if (!l && !g) return u && Sd(r, s, !1), yn(e, r, p);
    (l = r.stateNode), (e2.current = r);
    var _ =
      g && typeof s.getDerivedStateFromError != "function" ? null : l.render();
    return (
      (r.flags |= 1),
      e !== null && g
        ? ((r.child = V0(r, e.child, null, p)), (r.child = V0(r, null, _, p)))
        : vt(e, r, _, p),
      (r.memoizedState = l.state),
      u && Sd(r, s, !0),
      r.child
    );
  }
  function _f(e) {
    var r = e.stateNode;
    r.pendingContext
      ? _d(e, r.pendingContext, r.pendingContext !== r.context)
      : r.context && _d(e, r.context, !1),
      Vs(e, r.containerInfo);
  }
  function xf(e, r, s, l, u) {
    return D0(), Rs(u), (r.flags |= 256), vt(e, r, s, l), r.child;
  }
  var al = { dehydrated: null, treeContext: null, retryLane: 0 };
  function il(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Sf(e, r, s) {
    var l = r.pendingProps,
      u = He.current,
      p = !1,
      g = (r.flags & 128) !== 0,
      _;
    if (
      ((_ = g) ||
        (_ = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      _
        ? ((p = !0), (r.flags &= -129))
        : (e === null || e.memoizedState !== null) && (u |= 1),
      Ne(He, u & 1),
      e === null)
    )
      return (
        Is(r),
        (e = r.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((r.mode & 1) === 0
              ? (r.lanes = 1)
              : e.data === "$!"
                ? (r.lanes = 8)
                : (r.lanes = 1073741824),
            null)
          : ((g = l.children),
            (e = l.fallback),
            p
              ? ((l = r.mode),
                (p = r.child),
                (g = { mode: "hidden", children: g }),
                (l & 1) === 0 && p !== null
                  ? ((p.childLanes = 0), (p.pendingProps = g))
                  : (p = Ca(g, l, 0, null)),
                (e = d0(e, l, s, null)),
                (p.return = r),
                (e.return = r),
                (p.sibling = e),
                (r.child = p),
                (r.child.memoizedState = il(s)),
                (r.memoizedState = al),
                e)
              : sl(r, g))
      );
    if (((u = e.memoizedState), u !== null && ((_ = u.dehydrated), _ !== null)))
      return t2(e, r, g, l, _, u, s);
    if (p) {
      (p = l.fallback), (g = r.mode), (u = e.child), (_ = u.sibling);
      var w = { mode: "hidden", children: l.children };
      return (
        (g & 1) === 0 && r.child !== u
          ? ((l = r.child),
            (l.childLanes = 0),
            (l.pendingProps = w),
            (r.deletions = null))
          : ((l = Un(u, w)), (l.subtreeFlags = u.subtreeFlags & 14680064)),
        _ !== null ? (p = Un(_, p)) : ((p = d0(p, g, s, null)), (p.flags |= 2)),
        (p.return = r),
        (l.return = r),
        (l.sibling = p),
        (r.child = l),
        (l = p),
        (p = r.child),
        (g = e.child.memoizedState),
        (g =
          g === null
            ? il(s)
            : {
                baseLanes: g.baseLanes | s,
                cachePool: null,
                transitions: g.transitions,
              }),
        (p.memoizedState = g),
        (p.childLanes = e.childLanes & ~s),
        (r.memoizedState = al),
        l
      );
    }
    return (
      (p = e.child),
      (e = p.sibling),
      (l = Un(p, { mode: "visible", children: l.children })),
      (r.mode & 1) === 0 && (l.lanes = s),
      (l.return = r),
      (l.sibling = null),
      e !== null &&
        ((s = r.deletions),
        s === null ? ((r.deletions = [e]), (r.flags |= 16)) : s.push(e)),
      (r.child = l),
      (r.memoizedState = null),
      l
    );
  }
  function sl(e, r) {
    return (
      (r = Ca({ mode: "visible", children: r }, e.mode, 0, null)),
      (r.return = e),
      (e.child = r)
    );
  }
  function ua(e, r, s, l) {
    return (
      l !== null && Rs(l),
      V0(r, e.child, null, s),
      (e = sl(r, r.pendingProps.children)),
      (e.flags |= 2),
      (r.memoizedState = null),
      e
    );
  }
  function t2(e, r, s, l, u, p, g) {
    if (s)
      return r.flags & 256
        ? ((r.flags &= -257), (l = tl(Error(o(422)))), ua(e, r, g, l))
        : r.memoizedState !== null
          ? ((r.child = e.child), (r.flags |= 128), null)
          : ((p = l.fallback),
            (u = r.mode),
            (l = Ca({ mode: "visible", children: l.children }, u, 0, null)),
            (p = d0(p, u, g, null)),
            (p.flags |= 2),
            (l.return = r),
            (p.return = r),
            (l.sibling = p),
            (r.child = l),
            (r.mode & 1) !== 0 && V0(r, e.child, null, g),
            (r.child.memoizedState = il(g)),
            (r.memoizedState = al),
            p);
    if ((r.mode & 1) === 0) return ua(e, r, g, null);
    if (u.data === "$!") {
      if (((l = u.nextSibling && u.nextSibling.dataset), l)) var _ = l.dgst;
      return (
        (l = _), (p = Error(o(419))), (l = tl(p, l, void 0)), ua(e, r, g, l)
      );
    }
    if (((_ = (g & e.childLanes) !== 0), wt || _)) {
      if (((l = rt), l !== null)) {
        switch (g & -g) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        (u = (u & (l.suspendedLanes | g)) !== 0 ? 0 : u),
          u !== 0 &&
            u !== p.retryLane &&
            ((p.retryLane = u), bn(e, u), Jt(l, e, u, -1));
      }
      return Cl(), (l = tl(Error(o(421)))), ua(e, r, g, l);
    }
    return u.data === "$?"
      ? ((r.flags |= 128),
        (r.child = e.child),
        (r = h2.bind(null, e)),
        (u._reactRetry = r),
        null)
      : ((e = p.treeContext),
        (Mt = In(u.nextSibling)),
        (jt = r),
        (De = !0),
        (Xt = null),
        e !== null &&
          (($t[At++] = mn),
          ($t[At++] = gn),
          ($t[At++] = n0),
          (mn = e.id),
          (gn = e.overflow),
          (n0 = r)),
        (r = sl(r, l.children)),
        (r.flags |= 4096),
        r);
  }
  function Cf(e, r, s) {
    e.lanes |= r;
    var l = e.alternate;
    l !== null && (l.lanes |= r), $s(e.return, r, s);
  }
  function ll(e, r, s, l, u) {
    var p = e.memoizedState;
    p === null
      ? (e.memoizedState = {
          isBackwards: r,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: s,
          tailMode: u,
        })
      : ((p.isBackwards = r),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = l),
        (p.tail = s),
        (p.tailMode = u));
  }
  function wf(e, r, s) {
    var l = r.pendingProps,
      u = l.revealOrder,
      p = l.tail;
    if ((vt(e, r, l.children, s), (l = He.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (r.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = r.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Cf(e, s, r);
          else if (e.tag === 19) Cf(e, s, r);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === r) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === r) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    if ((Ne(He, l), (r.mode & 1) === 0)) r.memoizedState = null;
    else
      switch (u) {
        case "forwards":
          for (s = r.child, u = null; s !== null; )
            (e = s.alternate),
              e !== null && oa(e) === null && (u = s),
              (s = s.sibling);
          (s = u),
            s === null
              ? ((u = r.child), (r.child = null))
              : ((u = s.sibling), (s.sibling = null)),
            ll(r, !1, u, s, p);
          break;
        case "backwards":
          for (s = null, u = r.child, r.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && oa(e) === null)) {
              r.child = u;
              break;
            }
            (e = u.sibling), (u.sibling = s), (s = u), (u = e);
          }
          ll(r, !0, s, null, p);
          break;
        case "together":
          ll(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function da(e, r) {
    (r.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (r.alternate = null), (r.flags |= 2));
  }
  function yn(e, r, s) {
    if (
      (e !== null && (r.dependencies = e.dependencies),
      (s0 |= r.lanes),
      (s & r.childLanes) === 0)
    )
      return null;
    if (e !== null && r.child !== e.child) throw Error(o(153));
    if (r.child !== null) {
      for (
        e = r.child, s = Un(e, e.pendingProps), r.child = s, s.return = r;
        e.sibling !== null;

      )
        (e = e.sibling),
          (s = s.sibling = Un(e, e.pendingProps)),
          (s.return = r);
      s.sibling = null;
    }
    return r.child;
  }
  function n2(e, r, s) {
    switch (r.tag) {
      case 3:
        _f(r), D0();
        break;
      case 5:
        Dd(r);
        break;
      case 1:
        Ct(r.type) && Wo(r);
        break;
      case 4:
        Vs(r, r.stateNode.containerInfo);
        break;
      case 10:
        var l = r.type._context,
          u = r.memoizedProps.value;
        Ne(Zo, l._currentValue), (l._currentValue = u);
        break;
      case 13:
        if (((l = r.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (Ne(He, He.current & 1), (r.flags |= 128), null)
            : (s & r.child.childLanes) !== 0
              ? Sf(e, r, s)
              : (Ne(He, He.current & 1),
                (e = yn(e, r, s)),
                e !== null ? e.sibling : null);
        Ne(He, He.current & 1);
        break;
      case 19:
        if (((l = (s & r.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (l) return wf(e, r, s);
          r.flags |= 128;
        }
        if (
          ((u = r.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Ne(He, He.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (r.lanes = 0), bf(e, r, s);
    }
    return yn(e, r, s);
  }
  var kf, cl, Pf, Of;
  (kf = function (e, r) {
    for (var s = r.child; s !== null; ) {
      if (s.tag === 5 || s.tag === 6) e.appendChild(s.stateNode);
      else if (s.tag !== 4 && s.child !== null) {
        (s.child.return = s), (s = s.child);
        continue;
      }
      if (s === r) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === r) return;
        s = s.return;
      }
      (s.sibling.return = s.return), (s = s.sibling);
    }
  }),
    (cl = function () {}),
    (Pf = function (e, r, s, l) {
      var u = e.memoizedProps;
      if (u !== l) {
        (e = r.stateNode), a0(on.current);
        var p = null;
        switch (s) {
          case "input":
            (u = w0(e, u)), (l = w0(e, l)), (p = []);
            break;
          case "select":
            (u = C({}, u, { value: void 0 })),
              (l = C({}, l, { value: void 0 })),
              (p = []);
            break;
          case "textarea":
            (u = Hi(e, u)), (l = Hi(e, l)), (p = []);
            break;
          default:
            typeof u.onClick != "function" &&
              typeof l.onClick == "function" &&
              (e.onclick = Uo);
        }
        Vi(s, l);
        var g;
        s = null;
        for (R in u)
          if (!l.hasOwnProperty(R) && u.hasOwnProperty(R) && u[R] != null)
            if (R === "style") {
              var _ = u[R];
              for (g in _) _.hasOwnProperty(g) && (s || (s = {}), (s[g] = ""));
            } else
              R !== "dangerouslySetInnerHTML" &&
                R !== "children" &&
                R !== "suppressContentEditableWarning" &&
                R !== "suppressHydrationWarning" &&
                R !== "autoFocus" &&
                (i.hasOwnProperty(R)
                  ? p || (p = [])
                  : (p = p || []).push(R, null));
        for (R in l) {
          var w = l[R];
          if (
            ((_ = u != null ? u[R] : void 0),
            l.hasOwnProperty(R) && w !== _ && (w != null || _ != null))
          )
            if (R === "style")
              if (_) {
                for (g in _)
                  !_.hasOwnProperty(g) ||
                    (w && w.hasOwnProperty(g)) ||
                    (s || (s = {}), (s[g] = ""));
                for (g in w)
                  w.hasOwnProperty(g) &&
                    _[g] !== w[g] &&
                    (s || (s = {}), (s[g] = w[g]));
              } else s || (p || (p = []), p.push(R, s)), (s = w);
            else
              R === "dangerouslySetInnerHTML"
                ? ((w = w ? w.__html : void 0),
                  (_ = _ ? _.__html : void 0),
                  w != null && _ !== w && (p = p || []).push(R, w))
                : R === "children"
                  ? (typeof w != "string" && typeof w != "number") ||
                    (p = p || []).push(R, "" + w)
                  : R !== "suppressContentEditableWarning" &&
                    R !== "suppressHydrationWarning" &&
                    (i.hasOwnProperty(R)
                      ? (w != null && R === "onScroll" && Be("scroll", e),
                        p || _ === w || (p = []))
                      : (p = p || []).push(R, w));
        }
        s && (p = p || []).push("style", s);
        var R = p;
        (r.updateQueue = R) && (r.flags |= 4);
      }
    }),
    (Of = function (e, r, s, l) {
      s !== l && (r.flags |= 4);
    });
  function qr(e, r) {
    if (!De)
      switch (e.tailMode) {
        case "hidden":
          r = e.tail;
          for (var s = null; r !== null; )
            r.alternate !== null && (s = r), (r = r.sibling);
          s === null ? (e.tail = null) : (s.sibling = null);
          break;
        case "collapsed":
          s = e.tail;
          for (var l = null; s !== null; )
            s.alternate !== null && (l = s), (s = s.sibling);
          l === null
            ? r || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function ft(e) {
    var r = e.alternate !== null && e.alternate.child === e.child,
      s = 0,
      l = 0;
    if (r)
      for (var u = e.child; u !== null; )
        (s |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags & 14680064),
          (l |= u.flags & 14680064),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (s |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags),
          (l |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = s), r;
  }
  function r2(e, r, s) {
    var l = r.pendingProps;
    switch ((js(r), r.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ft(r), null;
      case 1:
        return Ct(r.type) && qo(), ft(r), null;
      case 3:
        return (
          (l = r.stateNode),
          U0(),
          $e(St),
          $e(ut),
          qs(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (Yo(r)
              ? (r.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (r.flags & 256) === 0) ||
                ((r.flags |= 1024), Xt !== null && (_l(Xt), (Xt = null)))),
          cl(e, r),
          ft(r),
          null
        );
      case 5:
        Us(r);
        var u = a0(Hr.current);
        if (((s = r.type), e !== null && r.stateNode != null))
          Pf(e, r, s, l, u),
            e.ref !== r.ref && ((r.flags |= 512), (r.flags |= 2097152));
        else {
          if (!l) {
            if (r.stateNode === null) throw Error(o(166));
            return ft(r), null;
          }
          if (((e = a0(on.current)), Yo(r))) {
            (l = r.stateNode), (s = r.type);
            var p = r.memoizedProps;
            switch (((l[rn] = r), (l[Lr] = p), (e = (r.mode & 1) !== 0), s)) {
              case "dialog":
                Be("cancel", l), Be("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                Be("load", l);
                break;
              case "video":
              case "audio":
                for (u = 0; u < Ir.length; u++) Be(Ir[u], l);
                break;
              case "source":
                Be("error", l);
                break;
              case "img":
              case "image":
              case "link":
                Be("error", l), Be("load", l);
                break;
              case "details":
                Be("toggle", l);
                break;
              case "input":
                xo(l, p), Be("invalid", l);
                break;
              case "select":
                (l._wrapperState = { wasMultiple: !!p.multiple }),
                  Be("invalid", l);
                break;
              case "textarea":
                lu(l, p), Be("invalid", l);
            }
            Vi(s, p), (u = null);
            for (var g in p)
              if (p.hasOwnProperty(g)) {
                var _ = p[g];
                g === "children"
                  ? typeof _ == "string"
                    ? l.textContent !== _ &&
                      (p.suppressHydrationWarning !== !0 &&
                        Vo(l.textContent, _, e),
                      (u = ["children", _]))
                    : typeof _ == "number" &&
                      l.textContent !== "" + _ &&
                      (p.suppressHydrationWarning !== !0 &&
                        Vo(l.textContent, _, e),
                      (u = ["children", "" + _]))
                  : i.hasOwnProperty(g) &&
                    _ != null &&
                    g === "onScroll" &&
                    Be("scroll", l);
              }
            switch (s) {
              case "input":
                Bt(l), su(l, p, !0);
                break;
              case "textarea":
                Bt(l), uu(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (l.onclick = Uo);
            }
            (l = u), (r.updateQueue = l), l !== null && (r.flags |= 4);
          } else {
            (g = u.nodeType === 9 ? u : u.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = du(s)),
              e === "http://www.w3.org/1999/xhtml"
                ? s === "script"
                  ? ((e = g.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof l.is == "string"
                    ? (e = g.createElement(s, { is: l.is }))
                    : ((e = g.createElement(s)),
                      s === "select" &&
                        ((g = e),
                        l.multiple
                          ? (g.multiple = !0)
                          : l.size && (g.size = l.size)))
                : (e = g.createElementNS(e, s)),
              (e[rn] = r),
              (e[Lr] = l),
              kf(e, r, !1, !1),
              (r.stateNode = e);
            e: {
              switch (((g = Ui(s, l)), s)) {
                case "dialog":
                  Be("cancel", e), Be("close", e), (u = l);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Be("load", e), (u = l);
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < Ir.length; u++) Be(Ir[u], e);
                  u = l;
                  break;
                case "source":
                  Be("error", e), (u = l);
                  break;
                case "img":
                case "image":
                case "link":
                  Be("error", e), Be("load", e), (u = l);
                  break;
                case "details":
                  Be("toggle", e), (u = l);
                  break;
                case "input":
                  xo(e, l), (u = w0(e, l)), Be("invalid", e);
                  break;
                case "option":
                  u = l;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!l.multiple }),
                    (u = C({}, l, { value: void 0 })),
                    Be("invalid", e);
                  break;
                case "textarea":
                  lu(e, l), (u = Hi(e, l)), Be("invalid", e);
                  break;
                default:
                  u = l;
              }
              Vi(s, u), (_ = u);
              for (p in _)
                if (_.hasOwnProperty(p)) {
                  var w = _[p];
                  p === "style"
                    ? hu(e, w)
                    : p === "dangerouslySetInnerHTML"
                      ? ((w = w ? w.__html : void 0), w != null && fu(e, w))
                      : p === "children"
                        ? typeof w == "string"
                          ? (s !== "textarea" || w !== "") && hr(e, w)
                          : typeof w == "number" && hr(e, "" + w)
                        : p !== "suppressContentEditableWarning" &&
                          p !== "suppressHydrationWarning" &&
                          p !== "autoFocus" &&
                          (i.hasOwnProperty(p)
                            ? w != null && p === "onScroll" && Be("scroll", e)
                            : w != null && I(e, p, w, g));
                }
              switch (s) {
                case "input":
                  Bt(e), su(e, l, !1);
                  break;
                case "textarea":
                  Bt(e), uu(e);
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + pe(l.value));
                  break;
                case "select":
                  (e.multiple = !!l.multiple),
                    (p = l.value),
                    p != null
                      ? k0(e, !!l.multiple, p, !1)
                      : l.defaultValue != null &&
                        k0(e, !!l.multiple, l.defaultValue, !0);
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = Uo);
              }
              switch (s) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (r.flags |= 4);
          }
          r.ref !== null && ((r.flags |= 512), (r.flags |= 2097152));
        }
        return ft(r), null;
      case 6:
        if (e && r.stateNode != null) Of(e, r, e.memoizedProps, l);
        else {
          if (typeof l != "string" && r.stateNode === null) throw Error(o(166));
          if (((s = a0(Hr.current)), a0(on.current), Yo(r))) {
            if (
              ((l = r.stateNode),
              (s = r.memoizedProps),
              (l[rn] = r),
              (p = l.nodeValue !== s) && ((e = jt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Vo(l.nodeValue, s, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Vo(l.nodeValue, s, (e.mode & 1) !== 0);
              }
            p && (r.flags |= 4);
          } else
            (l = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(l)),
              (l[rn] = r),
              (r.stateNode = l);
        }
        return ft(r), null;
      case 13:
        if (
          ($e(He),
          (l = r.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (De && Mt !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0)
            Ed(), D0(), (r.flags |= 98560), (p = !1);
          else if (((p = Yo(r)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!p) throw Error(o(318));
              if (
                ((p = r.memoizedState),
                (p = p !== null ? p.dehydrated : null),
                !p)
              )
                throw Error(o(317));
              p[rn] = r;
            } else
              D0(),
                (r.flags & 128) === 0 && (r.memoizedState = null),
                (r.flags |= 4);
            ft(r), (p = !1);
          } else Xt !== null && (_l(Xt), (Xt = null)), (p = !0);
          if (!p) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0
          ? ((r.lanes = s), r)
          : ((l = l !== null),
            l !== (e !== null && e.memoizedState !== null) &&
              l &&
              ((r.child.flags |= 8192),
              (r.mode & 1) !== 0 &&
                (e === null || (He.current & 1) !== 0
                  ? et === 0 && (et = 3)
                  : Cl())),
            r.updateQueue !== null && (r.flags |= 4),
            ft(r),
            null);
      case 4:
        return (
          U0(),
          cl(e, r),
          e === null && Rr(r.stateNode.containerInfo),
          ft(r),
          null
        );
      case 10:
        return Bs(r.type._context), ft(r), null;
      case 17:
        return Ct(r.type) && qo(), ft(r), null;
      case 19:
        if (($e(He), (p = r.memoizedState), p === null)) return ft(r), null;
        if (((l = (r.flags & 128) !== 0), (g = p.rendering), g === null))
          if (l) qr(p, !1);
          else {
            if (et !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = r.child; e !== null; ) {
                if (((g = oa(e)), g !== null)) {
                  for (
                    r.flags |= 128,
                      qr(p, !1),
                      l = g.updateQueue,
                      l !== null && ((r.updateQueue = l), (r.flags |= 4)),
                      r.subtreeFlags = 0,
                      l = s,
                      s = r.child;
                    s !== null;

                  )
                    (p = s),
                      (e = l),
                      (p.flags &= 14680066),
                      (g = p.alternate),
                      g === null
                        ? ((p.childLanes = 0),
                          (p.lanes = e),
                          (p.child = null),
                          (p.subtreeFlags = 0),
                          (p.memoizedProps = null),
                          (p.memoizedState = null),
                          (p.updateQueue = null),
                          (p.dependencies = null),
                          (p.stateNode = null))
                        : ((p.childLanes = g.childLanes),
                          (p.lanes = g.lanes),
                          (p.child = g.child),
                          (p.subtreeFlags = 0),
                          (p.deletions = null),
                          (p.memoizedProps = g.memoizedProps),
                          (p.memoizedState = g.memoizedState),
                          (p.updateQueue = g.updateQueue),
                          (p.type = g.type),
                          (e = g.dependencies),
                          (p.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (s = s.sibling);
                  return Ne(He, (He.current & 1) | 2), r.child;
                }
                e = e.sibling;
              }
            p.tail !== null &&
              qe() > K0 &&
              ((r.flags |= 128), (l = !0), qr(p, !1), (r.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = oa(g)), e !== null)) {
              if (
                ((r.flags |= 128),
                (l = !0),
                (s = e.updateQueue),
                s !== null && ((r.updateQueue = s), (r.flags |= 4)),
                qr(p, !0),
                p.tail === null &&
                  p.tailMode === "hidden" &&
                  !g.alternate &&
                  !De)
              )
                return ft(r), null;
            } else
              2 * qe() - p.renderingStartTime > K0 &&
                s !== 1073741824 &&
                ((r.flags |= 128), (l = !0), qr(p, !1), (r.lanes = 4194304));
          p.isBackwards
            ? ((g.sibling = r.child), (r.child = g))
            : ((s = p.last),
              s !== null ? (s.sibling = g) : (r.child = g),
              (p.last = g));
        }
        return p.tail !== null
          ? ((r = p.tail),
            (p.rendering = r),
            (p.tail = r.sibling),
            (p.renderingStartTime = qe()),
            (r.sibling = null),
            (s = He.current),
            Ne(He, l ? (s & 1) | 2 : s & 1),
            r)
          : (ft(r), null);
      case 22:
      case 23:
        return (
          Sl(),
          (l = r.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== l && (r.flags |= 8192),
          l && (r.mode & 1) !== 0
            ? (It & 1073741824) !== 0 &&
              (ft(r), r.subtreeFlags & 6 && (r.flags |= 8192))
            : ft(r),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, r.tag));
  }
  function o2(e, r) {
    switch ((js(r), r.tag)) {
      case 1:
        return (
          Ct(r.type) && qo(),
          (e = r.flags),
          e & 65536 ? ((r.flags = (e & -65537) | 128), r) : null
        );
      case 3:
        return (
          U0(),
          $e(St),
          $e(ut),
          qs(),
          (e = r.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((r.flags = (e & -65537) | 128), r)
            : null
        );
      case 5:
        return Us(r), null;
      case 13:
        if (
          ($e(He), (e = r.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (r.alternate === null) throw Error(o(340));
          D0();
        }
        return (
          (e = r.flags), e & 65536 ? ((r.flags = (e & -65537) | 128), r) : null
        );
      case 19:
        return $e(He), null;
      case 4:
        return U0(), null;
      case 10:
        return Bs(r.type._context), null;
      case 22:
      case 23:
        return Sl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fa = !1,
    pt = !1,
    a2 = typeof WeakSet == "function" ? WeakSet : Set,
    Z = null;
  function q0(e, r) {
    var s = e.ref;
    if (s !== null)
      if (typeof s == "function")
        try {
          s(null);
        } catch (l) {
          Ue(e, r, l);
        }
      else s.current = null;
  }
  function ul(e, r, s) {
    try {
      s();
    } catch (l) {
      Ue(e, r, l);
    }
  }
  var Ef = !1;
  function i2(e, r) {
    if (((Ss = Mo), (e = od()), hs(e))) {
      if ("selectionStart" in e)
        var s = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          s = ((s = e.ownerDocument) && s.defaultView) || window;
          var l = s.getSelection && s.getSelection();
          if (l && l.rangeCount !== 0) {
            s = l.anchorNode;
            var u = l.anchorOffset,
              p = l.focusNode;
            l = l.focusOffset;
            try {
              s.nodeType, p.nodeType;
            } catch {
              s = null;
              break e;
            }
            var g = 0,
              _ = -1,
              w = -1,
              R = 0,
              H = 0,
              z = e,
              D = null;
            t: for (;;) {
              for (
                var Q;
                z !== s || (u !== 0 && z.nodeType !== 3) || (_ = g + u),
                  z !== p || (l !== 0 && z.nodeType !== 3) || (w = g + l),
                  z.nodeType === 3 && (g += z.nodeValue.length),
                  (Q = z.firstChild) !== null;

              )
                (D = z), (z = Q);
              for (;;) {
                if (z === e) break t;
                if (
                  (D === s && ++R === u && (_ = g),
                  D === p && ++H === l && (w = g),
                  (Q = z.nextSibling) !== null)
                )
                  break;
                (z = D), (D = z.parentNode);
              }
              z = Q;
            }
            s = _ === -1 || w === -1 ? null : { start: _, end: w };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (
      Cs = { focusedElem: e, selectionRange: s }, Mo = !1, Z = r;
      Z !== null;

    )
      if (((r = Z), (e = r.child), (r.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = r), (Z = e);
      else
        for (; Z !== null; ) {
          r = Z;
          try {
            var J = r.alternate;
            if ((r.flags & 1024) !== 0)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (J !== null) {
                    var ee = J.memoizedProps,
                      We = J.memoizedState,
                      j = r.stateNode,
                      E = j.getSnapshotBeforeUpdate(
                        r.elementType === r.type ? ee : Qt(r.type, ee),
                        We,
                      );
                    j.__reactInternalSnapshotBeforeUpdate = E;
                  }
                  break;
                case 3:
                  var M = r.stateNode.containerInfo;
                  M.nodeType === 1
                    ? (M.textContent = "")
                    : M.nodeType === 9 &&
                      M.documentElement &&
                      M.removeChild(M.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (G) {
            Ue(r, r.return, G);
          }
          if (((e = r.sibling), e !== null)) {
            (e.return = r.return), (Z = e);
            break;
          }
          Z = r.return;
        }
    return (J = Ef), (Ef = !1), J;
  }
  function Wr(e, r, s) {
    var l = r.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var u = (l = l.next);
      do {
        if ((u.tag & e) === e) {
          var p = u.destroy;
          (u.destroy = void 0), p !== void 0 && ul(r, s, p);
        }
        u = u.next;
      } while (u !== l);
    }
  }
  function pa(e, r) {
    if (
      ((r = r.updateQueue), (r = r !== null ? r.lastEffect : null), r !== null)
    ) {
      var s = (r = r.next);
      do {
        if ((s.tag & e) === e) {
          var l = s.create;
          s.destroy = l();
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function dl(e) {
    var r = e.ref;
    if (r !== null) {
      var s = e.stateNode;
      switch (e.tag) {
        case 5:
          e = s;
          break;
        default:
          e = s;
      }
      typeof r == "function" ? r(e) : (r.current = e);
    }
  }
  function Tf(e) {
    var r = e.alternate;
    r !== null && ((e.alternate = null), Tf(r)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((r = e.stateNode),
        r !== null &&
          (delete r[rn],
          delete r[Lr],
          delete r[Os],
          delete r[zg],
          delete r[Vg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Ff(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function jf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ff(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function fl(e, r, s) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        r
          ? s.nodeType === 8
            ? s.parentNode.insertBefore(e, r)
            : s.insertBefore(e, r)
          : (s.nodeType === 8
              ? ((r = s.parentNode), r.insertBefore(e, s))
              : ((r = s), r.appendChild(e)),
            (s = s._reactRootContainer),
            s != null || r.onclick !== null || (r.onclick = Uo));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (fl(e, r, s), e = e.sibling; e !== null; )
        fl(e, r, s), (e = e.sibling);
  }
  function pl(e, r, s) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), r ? s.insertBefore(e, r) : s.appendChild(e);
    else if (l !== 4 && ((e = e.child), e !== null))
      for (pl(e, r, s), e = e.sibling; e !== null; )
        pl(e, r, s), (e = e.sibling);
  }
  var st = null,
    Yt = !1;
  function An(e, r, s) {
    for (s = s.child; s !== null; ) Mf(e, r, s), (s = s.sibling);
  }
  function Mf(e, r, s) {
    if (nn && typeof nn.onCommitFiberUnmount == "function")
      try {
        nn.onCommitFiberUnmount(Po, s);
      } catch {}
    switch (s.tag) {
      case 5:
        pt || q0(s, r);
      case 6:
        var l = st,
          u = Yt;
        (st = null),
          An(e, r, s),
          (st = l),
          (Yt = u),
          st !== null &&
            (Yt
              ? ((e = st),
                (s = s.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(s)
                  : e.removeChild(s))
              : st.removeChild(s.stateNode));
        break;
      case 18:
        st !== null &&
          (Yt
            ? ((e = st),
              (s = s.stateNode),
              e.nodeType === 8
                ? Ps(e.parentNode, s)
                : e.nodeType === 1 && Ps(e, s),
              kr(e))
            : Ps(st, s.stateNode));
        break;
      case 4:
        (l = st),
          (u = Yt),
          (st = s.stateNode.containerInfo),
          (Yt = !0),
          An(e, r, s),
          (st = l),
          (Yt = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !pt &&
          ((l = s.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
        ) {
          u = l = l.next;
          do {
            var p = u,
              g = p.destroy;
            (p = p.tag),
              g !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && ul(s, r, g),
              (u = u.next);
          } while (u !== l);
        }
        An(e, r, s);
        break;
      case 1:
        if (
          !pt &&
          (q0(s, r),
          (l = s.stateNode),
          typeof l.componentWillUnmount == "function")
        )
          try {
            (l.props = s.memoizedProps),
              (l.state = s.memoizedState),
              l.componentWillUnmount();
          } catch (_) {
            Ue(s, r, _);
          }
        An(e, r, s);
        break;
      case 21:
        An(e, r, s);
        break;
      case 22:
        s.mode & 1
          ? ((pt = (l = pt) || s.memoizedState !== null), An(e, r, s), (pt = l))
          : An(e, r, s);
        break;
      default:
        An(e, r, s);
    }
  }
  function If(e) {
    var r = e.updateQueue;
    if (r !== null) {
      e.updateQueue = null;
      var s = e.stateNode;
      s === null && (s = e.stateNode = new a2()),
        r.forEach(function (l) {
          var u = m2.bind(null, e, l);
          s.has(l) || (s.add(l), l.then(u, u));
        });
    }
  }
  function Zt(e, r) {
    var s = r.deletions;
    if (s !== null)
      for (var l = 0; l < s.length; l++) {
        var u = s[l];
        try {
          var p = e,
            g = r,
            _ = g;
          e: for (; _ !== null; ) {
            switch (_.tag) {
              case 5:
                (st = _.stateNode), (Yt = !1);
                break e;
              case 3:
                (st = _.stateNode.containerInfo), (Yt = !0);
                break e;
              case 4:
                (st = _.stateNode.containerInfo), (Yt = !0);
                break e;
            }
            _ = _.return;
          }
          if (st === null) throw Error(o(160));
          Mf(p, g, u), (st = null), (Yt = !1);
          var w = u.alternate;
          w !== null && (w.return = null), (u.return = null);
        } catch (R) {
          Ue(u, r, R);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; ) Rf(r, e), (r = r.sibling);
  }
  function Rf(e, r) {
    var s = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Zt(r, e), sn(e), l & 4)) {
          try {
            Wr(3, e, e.return), pa(3, e);
          } catch (ee) {
            Ue(e, e.return, ee);
          }
          try {
            Wr(5, e, e.return);
          } catch (ee) {
            Ue(e, e.return, ee);
          }
        }
        break;
      case 1:
        Zt(r, e), sn(e), l & 512 && s !== null && q0(s, s.return);
        break;
      case 5:
        if (
          (Zt(r, e),
          sn(e),
          l & 512 && s !== null && q0(s, s.return),
          e.flags & 32)
        ) {
          var u = e.stateNode;
          try {
            hr(u, "");
          } catch (ee) {
            Ue(e, e.return, ee);
          }
        }
        if (l & 4 && ((u = e.stateNode), u != null)) {
          var p = e.memoizedProps,
            g = s !== null ? s.memoizedProps : p,
            _ = e.type,
            w = e.updateQueue;
          if (((e.updateQueue = null), w !== null))
            try {
              _ === "input" && p.type === "radio" && p.name != null && iu(u, p),
                Ui(_, g);
              var R = Ui(_, p);
              for (g = 0; g < w.length; g += 2) {
                var H = w[g],
                  z = w[g + 1];
                H === "style"
                  ? hu(u, z)
                  : H === "dangerouslySetInnerHTML"
                    ? fu(u, z)
                    : H === "children"
                      ? hr(u, z)
                      : I(u, H, z, R);
              }
              switch (_) {
                case "input":
                  Ai(u, p);
                  break;
                case "textarea":
                  cu(u, p);
                  break;
                case "select":
                  var D = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!p.multiple;
                  var Q = p.value;
                  Q != null
                    ? k0(u, !!p.multiple, Q, !1)
                    : D !== !!p.multiple &&
                      (p.defaultValue != null
                        ? k0(u, !!p.multiple, p.defaultValue, !0)
                        : k0(u, !!p.multiple, p.multiple ? [] : "", !1));
              }
              u[Lr] = p;
            } catch (ee) {
              Ue(e, e.return, ee);
            }
        }
        break;
      case 6:
        if ((Zt(r, e), sn(e), l & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (u = e.stateNode), (p = e.memoizedProps);
          try {
            u.nodeValue = p;
          } catch (ee) {
            Ue(e, e.return, ee);
          }
        }
        break;
      case 3:
        if (
          (Zt(r, e), sn(e), l & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            kr(r.containerInfo);
          } catch (ee) {
            Ue(e, e.return, ee);
          }
        break;
      case 4:
        Zt(r, e), sn(e);
        break;
      case 13:
        Zt(r, e),
          sn(e),
          (u = e.child),
          u.flags & 8192 &&
            ((p = u.memoizedState !== null),
            (u.stateNode.isHidden = p),
            !p ||
              (u.alternate !== null && u.alternate.memoizedState !== null) ||
              (gl = qe())),
          l & 4 && If(e);
        break;
      case 22:
        if (
          ((H = s !== null && s.memoizedState !== null),
          e.mode & 1 ? ((pt = (R = pt) || H), Zt(r, e), (pt = R)) : Zt(r, e),
          sn(e),
          l & 8192)
        ) {
          if (
            ((R = e.memoizedState !== null),
            (e.stateNode.isHidden = R) && !H && (e.mode & 1) !== 0)
          )
            for (Z = e, H = e.child; H !== null; ) {
              for (z = Z = H; Z !== null; ) {
                switch (((D = Z), (Q = D.child), D.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Wr(4, D, D.return);
                    break;
                  case 1:
                    q0(D, D.return);
                    var J = D.stateNode;
                    if (typeof J.componentWillUnmount == "function") {
                      (l = D), (s = D.return);
                      try {
                        (r = l),
                          (J.props = r.memoizedProps),
                          (J.state = r.memoizedState),
                          J.componentWillUnmount();
                      } catch (ee) {
                        Ue(l, s, ee);
                      }
                    }
                    break;
                  case 5:
                    q0(D, D.return);
                    break;
                  case 22:
                    if (D.memoizedState !== null) {
                      Bf(z);
                      continue;
                    }
                }
                Q !== null ? ((Q.return = D), (Z = Q)) : Bf(z);
              }
              H = H.sibling;
            }
          e: for (H = null, z = e; ; ) {
            if (z.tag === 5) {
              if (H === null) {
                H = z;
                try {
                  (u = z.stateNode),
                    R
                      ? ((p = u.style),
                        typeof p.setProperty == "function"
                          ? p.setProperty("display", "none", "important")
                          : (p.display = "none"))
                      : ((_ = z.stateNode),
                        (w = z.memoizedProps.style),
                        (g =
                          w != null && w.hasOwnProperty("display")
                            ? w.display
                            : null),
                        (_.style.display = pu("display", g)));
                } catch (ee) {
                  Ue(e, e.return, ee);
                }
              }
            } else if (z.tag === 6) {
              if (H === null)
                try {
                  z.stateNode.nodeValue = R ? "" : z.memoizedProps;
                } catch (ee) {
                  Ue(e, e.return, ee);
                }
            } else if (
              ((z.tag !== 22 && z.tag !== 23) ||
                z.memoizedState === null ||
                z === e) &&
              z.child !== null
            ) {
              (z.child.return = z), (z = z.child);
              continue;
            }
            if (z === e) break e;
            for (; z.sibling === null; ) {
              if (z.return === null || z.return === e) break e;
              H === z && (H = null), (z = z.return);
            }
            H === z && (H = null),
              (z.sibling.return = z.return),
              (z = z.sibling);
          }
        }
        break;
      case 19:
        Zt(r, e), sn(e), l & 4 && If(e);
        break;
      case 21:
        break;
      default:
        Zt(r, e), sn(e);
    }
  }
  function sn(e) {
    var r = e.flags;
    if (r & 2) {
      try {
        e: {
          for (var s = e.return; s !== null; ) {
            if (Ff(s)) {
              var l = s;
              break e;
            }
            s = s.return;
          }
          throw Error(o(160));
        }
        switch (l.tag) {
          case 5:
            var u = l.stateNode;
            l.flags & 32 && (hr(u, ""), (l.flags &= -33));
            var p = jf(e);
            pl(e, p, u);
            break;
          case 3:
          case 4:
            var g = l.stateNode.containerInfo,
              _ = jf(e);
            fl(e, _, g);
            break;
          default:
            throw Error(o(161));
        }
      } catch (w) {
        Ue(e, e.return, w);
      }
      e.flags &= -3;
    }
    r & 4096 && (e.flags &= -4097);
  }
  function s2(e, r, s) {
    (Z = e), Nf(e);
  }
  function Nf(e, r, s) {
    for (var l = (e.mode & 1) !== 0; Z !== null; ) {
      var u = Z,
        p = u.child;
      if (u.tag === 22 && l) {
        var g = u.memoizedState !== null || fa;
        if (!g) {
          var _ = u.alternate,
            w = (_ !== null && _.memoizedState !== null) || pt;
          _ = fa;
          var R = pt;
          if (((fa = g), (pt = w) && !R))
            for (Z = u; Z !== null; )
              (g = Z),
                (w = g.child),
                g.tag === 22 && g.memoizedState !== null
                  ? $f(u)
                  : w !== null
                    ? ((w.return = g), (Z = w))
                    : $f(u);
          for (; p !== null; ) (Z = p), Nf(p), (p = p.sibling);
          (Z = u), (fa = _), (pt = R);
        }
        Lf(e);
      } else
        (u.subtreeFlags & 8772) !== 0 && p !== null
          ? ((p.return = u), (Z = p))
          : Lf(e);
    }
  }
  function Lf(e) {
    for (; Z !== null; ) {
      var r = Z;
      if ((r.flags & 8772) !== 0) {
        var s = r.alternate;
        try {
          if ((r.flags & 8772) !== 0)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                pt || pa(5, r);
                break;
              case 1:
                var l = r.stateNode;
                if (r.flags & 4 && !pt)
                  if (s === null) l.componentDidMount();
                  else {
                    var u =
                      r.elementType === r.type
                        ? s.memoizedProps
                        : Qt(r.type, s.memoizedProps);
                    l.componentDidUpdate(
                      u,
                      s.memoizedState,
                      l.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var p = r.updateQueue;
                p !== null && Md(r, p, l);
                break;
              case 3:
                var g = r.updateQueue;
                if (g !== null) {
                  if (((s = null), r.child !== null))
                    switch (r.child.tag) {
                      case 5:
                        s = r.child.stateNode;
                        break;
                      case 1:
                        s = r.child.stateNode;
                    }
                  Md(r, g, s);
                }
                break;
              case 5:
                var _ = r.stateNode;
                if (s === null && r.flags & 4) {
                  s = _;
                  var w = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && s.focus();
                      break;
                    case "img":
                      w.src && (s.src = w.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var R = r.alternate;
                  if (R !== null) {
                    var H = R.memoizedState;
                    if (H !== null) {
                      var z = H.dehydrated;
                      z !== null && kr(z);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
          pt || (r.flags & 512 && dl(r));
        } catch (D) {
          Ue(r, r.return, D);
        }
      }
      if (r === e) {
        Z = null;
        break;
      }
      if (((s = r.sibling), s !== null)) {
        (s.return = r.return), (Z = s);
        break;
      }
      Z = r.return;
    }
  }
  function Bf(e) {
    for (; Z !== null; ) {
      var r = Z;
      if (r === e) {
        Z = null;
        break;
      }
      var s = r.sibling;
      if (s !== null) {
        (s.return = r.return), (Z = s);
        break;
      }
      Z = r.return;
    }
  }
  function $f(e) {
    for (; Z !== null; ) {
      var r = Z;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var s = r.return;
            try {
              pa(4, r);
            } catch (w) {
              Ue(r, s, w);
            }
            break;
          case 1:
            var l = r.stateNode;
            if (typeof l.componentDidMount == "function") {
              var u = r.return;
              try {
                l.componentDidMount();
              } catch (w) {
                Ue(r, u, w);
              }
            }
            var p = r.return;
            try {
              dl(r);
            } catch (w) {
              Ue(r, p, w);
            }
            break;
          case 5:
            var g = r.return;
            try {
              dl(r);
            } catch (w) {
              Ue(r, g, w);
            }
        }
      } catch (w) {
        Ue(r, r.return, w);
      }
      if (r === e) {
        Z = null;
        break;
      }
      var _ = r.sibling;
      if (_ !== null) {
        (_.return = r.return), (Z = _);
        break;
      }
      Z = r.return;
    }
  }
  var l2 = Math.ceil,
    ha = B.ReactCurrentDispatcher,
    hl = B.ReactCurrentOwner,
    zt = B.ReactCurrentBatchConfig,
    Pe = 0,
    rt = null,
    Xe = null,
    lt = 0,
    It = 0,
    W0 = Rn(0),
    et = 0,
    Kr = null,
    s0 = 0,
    ma = 0,
    ml = 0,
    Xr = null,
    kt = null,
    gl = 0,
    K0 = 1 / 0,
    _n = null,
    ga = !1,
    bl = null,
    Dn = null,
    ba = !1,
    Hn = null,
    va = 0,
    Qr = 0,
    vl = null,
    ya = -1,
    _a = 0;
  function yt() {
    return (Pe & 6) !== 0 ? qe() : ya !== -1 ? ya : (ya = qe());
  }
  function zn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Pe & 2) !== 0 && lt !== 0
        ? lt & -lt
        : Gg.transition !== null
          ? (_a === 0 && (_a = Tu()), _a)
          : ((e = Ie),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : $u(e.type))),
            e);
  }
  function Jt(e, r, s, l) {
    if (50 < Qr) throw ((Qr = 0), (vl = null), Error(o(185)));
    _r(e, s, l),
      ((Pe & 2) === 0 || e !== rt) &&
        (e === rt && ((Pe & 2) === 0 && (ma |= s), et === 4 && Vn(e, lt)),
        Pt(e, l),
        s === 1 &&
          Pe === 0 &&
          (r.mode & 1) === 0 &&
          ((K0 = qe() + 500), Ko && Ln()));
  }
  function Pt(e, r) {
    var s = e.callbackNode;
    G1(e, r);
    var l = To(e, e === rt ? lt : 0);
    if (l === 0)
      s !== null && Pu(s), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((r = l & -l), e.callbackPriority !== r)) {
      if ((s != null && Pu(s), r === 1))
        e.tag === 0 ? Ug(Df.bind(null, e)) : Cd(Df.bind(null, e)),
          Dg(function () {
            (Pe & 6) === 0 && Ln();
          }),
          (s = null);
      else {
        switch (Fu(l)) {
          case 1:
            s = Yi;
            break;
          case 4:
            s = Ou;
            break;
          case 16:
            s = ko;
            break;
          case 536870912:
            s = Eu;
            break;
          default:
            s = ko;
        }
        s = Kf(s, Af.bind(null, e));
      }
      (e.callbackPriority = r), (e.callbackNode = s);
    }
  }
  function Af(e, r) {
    if (((ya = -1), (_a = 0), (Pe & 6) !== 0)) throw Error(o(327));
    var s = e.callbackNode;
    if (X0() && e.callbackNode !== s) return null;
    var l = To(e, e === rt ? lt : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || r) r = xa(e, l);
    else {
      r = l;
      var u = Pe;
      Pe |= 2;
      var p = zf();
      (rt !== e || lt !== r) && ((_n = null), (K0 = qe() + 500), c0(e, r));
      do
        try {
          d2();
          break;
        } catch (_) {
          Hf(e, _);
        }
      while (!0);
      Ls(),
        (ha.current = p),
        (Pe = u),
        Xe !== null ? (r = 0) : ((rt = null), (lt = 0), (r = et));
    }
    if (r !== 0) {
      if (
        (r === 2 && ((u = Zi(e)), u !== 0 && ((l = u), (r = yl(e, u)))),
        r === 1)
      )
        throw ((s = Kr), c0(e, 0), Vn(e, l), Pt(e, qe()), s);
      if (r === 6) Vn(e, l);
      else {
        if (
          ((u = e.current.alternate),
          (l & 30) === 0 &&
            !c2(u) &&
            ((r = xa(e, l)),
            r === 2 && ((p = Zi(e)), p !== 0 && ((l = p), (r = yl(e, p)))),
            r === 1))
        )
          throw ((s = Kr), c0(e, 0), Vn(e, l), Pt(e, qe()), s);
        switch (((e.finishedWork = u), (e.finishedLanes = l), r)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            u0(e, kt, _n);
            break;
          case 3:
            if (
              (Vn(e, l),
              (l & 130023424) === l && ((r = gl + 500 - qe()), 10 < r))
            ) {
              if (To(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & l) !== l)) {
                yt(), (e.pingedLanes |= e.suspendedLanes & u);
                break;
              }
              e.timeoutHandle = ks(u0.bind(null, e, kt, _n), r);
              break;
            }
            u0(e, kt, _n);
            break;
          case 4:
            if ((Vn(e, l), (l & 4194240) === l)) break;
            for (r = e.eventTimes, u = -1; 0 < l; ) {
              var g = 31 - Wt(l);
              (p = 1 << g), (g = r[g]), g > u && (u = g), (l &= ~p);
            }
            if (
              ((l = u),
              (l = qe() - l),
              (l =
                (120 > l
                  ? 120
                  : 480 > l
                    ? 480
                    : 1080 > l
                      ? 1080
                      : 1920 > l
                        ? 1920
                        : 3e3 > l
                          ? 3e3
                          : 4320 > l
                            ? 4320
                            : 1960 * l2(l / 1960)) - l),
              10 < l)
            ) {
              e.timeoutHandle = ks(u0.bind(null, e, kt, _n), l);
              break;
            }
            u0(e, kt, _n);
            break;
          case 5:
            u0(e, kt, _n);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Pt(e, qe()), e.callbackNode === s ? Af.bind(null, e) : null;
  }
  function yl(e, r) {
    var s = Xr;
    return (
      e.current.memoizedState.isDehydrated && (c0(e, r).flags |= 256),
      (e = xa(e, r)),
      e !== 2 && ((r = kt), (kt = s), r !== null && _l(r)),
      e
    );
  }
  function _l(e) {
    kt === null ? (kt = e) : kt.push.apply(kt, e);
  }
  function c2(e) {
    for (var r = e; ; ) {
      if (r.flags & 16384) {
        var s = r.updateQueue;
        if (s !== null && ((s = s.stores), s !== null))
          for (var l = 0; l < s.length; l++) {
            var u = s[l],
              p = u.getSnapshot;
            u = u.value;
            try {
              if (!Kt(p(), u)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((s = r.child), r.subtreeFlags & 16384 && s !== null))
        (s.return = r), (r = s);
      else {
        if (r === e) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === e) return !0;
          r = r.return;
        }
        (r.sibling.return = r.return), (r = r.sibling);
      }
    }
    return !0;
  }
  function Vn(e, r) {
    for (
      r &= ~ml,
        r &= ~ma,
        e.suspendedLanes |= r,
        e.pingedLanes &= ~r,
        e = e.expirationTimes;
      0 < r;

    ) {
      var s = 31 - Wt(r),
        l = 1 << s;
      (e[s] = -1), (r &= ~l);
    }
  }
  function Df(e) {
    if ((Pe & 6) !== 0) throw Error(o(327));
    X0();
    var r = To(e, 0);
    if ((r & 1) === 0) return Pt(e, qe()), null;
    var s = xa(e, r);
    if (e.tag !== 0 && s === 2) {
      var l = Zi(e);
      l !== 0 && ((r = l), (s = yl(e, l)));
    }
    if (s === 1) throw ((s = Kr), c0(e, 0), Vn(e, r), Pt(e, qe()), s);
    if (s === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = r),
      u0(e, kt, _n),
      Pt(e, qe()),
      null
    );
  }
  function xl(e, r) {
    var s = Pe;
    Pe |= 1;
    try {
      return e(r);
    } finally {
      (Pe = s), Pe === 0 && ((K0 = qe() + 500), Ko && Ln());
    }
  }
  function l0(e) {
    Hn !== null && Hn.tag === 0 && (Pe & 6) === 0 && X0();
    var r = Pe;
    Pe |= 1;
    var s = zt.transition,
      l = Ie;
    try {
      if (((zt.transition = null), (Ie = 1), e)) return e();
    } finally {
      (Ie = l), (zt.transition = s), (Pe = r), (Pe & 6) === 0 && Ln();
    }
  }
  function Sl() {
    (It = W0.current), $e(W0);
  }
  function c0(e, r) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var s = e.timeoutHandle;
    if ((s !== -1 && ((e.timeoutHandle = -1), Ag(s)), Xe !== null))
      for (s = Xe.return; s !== null; ) {
        var l = s;
        switch ((js(l), l.tag)) {
          case 1:
            (l = l.type.childContextTypes), l != null && qo();
            break;
          case 3:
            U0(), $e(St), $e(ut), qs();
            break;
          case 5:
            Us(l);
            break;
          case 4:
            U0();
            break;
          case 13:
            $e(He);
            break;
          case 19:
            $e(He);
            break;
          case 10:
            Bs(l.type._context);
            break;
          case 22:
          case 23:
            Sl();
        }
        s = s.return;
      }
    if (
      ((rt = e),
      (Xe = e = Un(e.current, null)),
      (lt = It = r),
      (et = 0),
      (Kr = null),
      (ml = ma = s0 = 0),
      (kt = Xr = null),
      o0 !== null)
    ) {
      for (r = 0; r < o0.length; r++)
        if (((s = o0[r]), (l = s.interleaved), l !== null)) {
          s.interleaved = null;
          var u = l.next,
            p = s.pending;
          if (p !== null) {
            var g = p.next;
            (p.next = u), (l.next = g);
          }
          s.pending = l;
        }
      o0 = null;
    }
    return e;
  }
  function Hf(e, r) {
    do {
      var s = Xe;
      try {
        if ((Ls(), (aa.current = ca), ia)) {
          for (var l = ze.memoizedState; l !== null; ) {
            var u = l.queue;
            u !== null && (u.pending = null), (l = l.next);
          }
          ia = !1;
        }
        if (
          ((i0 = 0),
          (nt = Je = ze = null),
          (zr = !1),
          (Vr = 0),
          (hl.current = null),
          s === null || s.return === null)
        ) {
          (et = 1), (Kr = r), (Xe = null);
          break;
        }
        e: {
          var p = e,
            g = s.return,
            _ = s,
            w = r;
          if (
            ((r = lt),
            (_.flags |= 32768),
            w !== null && typeof w == "object" && typeof w.then == "function")
          ) {
            var R = w,
              H = _,
              z = H.tag;
            if ((H.mode & 1) === 0 && (z === 0 || z === 11 || z === 15)) {
              var D = H.alternate;
              D
                ? ((H.updateQueue = D.updateQueue),
                  (H.memoizedState = D.memoizedState),
                  (H.lanes = D.lanes))
                : ((H.updateQueue = null), (H.memoizedState = null));
            }
            var Q = ff(g);
            if (Q !== null) {
              (Q.flags &= -257),
                pf(Q, g, _, p, r),
                Q.mode & 1 && df(p, R, r),
                (r = Q),
                (w = R);
              var J = r.updateQueue;
              if (J === null) {
                var ee = new Set();
                ee.add(w), (r.updateQueue = ee);
              } else J.add(w);
              break e;
            } else {
              if ((r & 1) === 0) {
                df(p, R, r), Cl();
                break e;
              }
              w = Error(o(426));
            }
          } else if (De && _.mode & 1) {
            var We = ff(g);
            if (We !== null) {
              (We.flags & 65536) === 0 && (We.flags |= 256),
                pf(We, g, _, p, r),
                Rs(G0(w, _));
              break e;
            }
          }
          (p = w = G0(w, _)),
            et !== 4 && (et = 2),
            Xr === null ? (Xr = [p]) : Xr.push(p),
            (p = g);
          do {
            switch (p.tag) {
              case 3:
                (p.flags |= 65536), (r &= -r), (p.lanes |= r);
                var j = cf(p, w, r);
                jd(p, j);
                break e;
              case 1:
                _ = w;
                var E = p.type,
                  M = p.stateNode;
                if (
                  (p.flags & 128) === 0 &&
                  (typeof E.getDerivedStateFromError == "function" ||
                    (M !== null &&
                      typeof M.componentDidCatch == "function" &&
                      (Dn === null || !Dn.has(M))))
                ) {
                  (p.flags |= 65536), (r &= -r), (p.lanes |= r);
                  var G = uf(p, _, r);
                  jd(p, G);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        Uf(s);
      } catch (ne) {
        (r = ne), Xe === s && s !== null && (Xe = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function zf() {
    var e = ha.current;
    return (ha.current = ca), e === null ? ca : e;
  }
  function Cl() {
    (et === 0 || et === 3 || et === 2) && (et = 4),
      rt === null ||
        ((s0 & 268435455) === 0 && (ma & 268435455) === 0) ||
        Vn(rt, lt);
  }
  function xa(e, r) {
    var s = Pe;
    Pe |= 2;
    var l = zf();
    (rt !== e || lt !== r) && ((_n = null), c0(e, r));
    do
      try {
        u2();
        break;
      } catch (u) {
        Hf(e, u);
      }
    while (!0);
    if ((Ls(), (Pe = s), (ha.current = l), Xe !== null)) throw Error(o(261));
    return (rt = null), (lt = 0), et;
  }
  function u2() {
    for (; Xe !== null; ) Vf(Xe);
  }
  function d2() {
    for (; Xe !== null && !L1(); ) Vf(Xe);
  }
  function Vf(e) {
    var r = Wf(e.alternate, e, It);
    (e.memoizedProps = e.pendingProps),
      r === null ? Uf(e) : (Xe = r),
      (hl.current = null);
  }
  function Uf(e) {
    var r = e;
    do {
      var s = r.alternate;
      if (((e = r.return), (r.flags & 32768) === 0)) {
        if (((s = r2(s, r, It)), s !== null)) {
          Xe = s;
          return;
        }
      } else {
        if (((s = o2(s, r)), s !== null)) {
          (s.flags &= 32767), (Xe = s);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (et = 6), (Xe = null);
          return;
        }
      }
      if (((r = r.sibling), r !== null)) {
        Xe = r;
        return;
      }
      Xe = r = e;
    } while (r !== null);
    et === 0 && (et = 5);
  }
  function u0(e, r, s) {
    var l = Ie,
      u = zt.transition;
    try {
      (zt.transition = null), (Ie = 1), f2(e, r, s, l);
    } finally {
      (zt.transition = u), (Ie = l);
    }
    return null;
  }
  function f2(e, r, s, l) {
    do X0();
    while (Hn !== null);
    if ((Pe & 6) !== 0) throw Error(o(327));
    s = e.finishedWork;
    var u = e.finishedLanes;
    if (s === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), s === e.current))
      throw Error(o(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var p = s.lanes | s.childLanes;
    if (
      (q1(e, p),
      e === rt && ((Xe = rt = null), (lt = 0)),
      ((s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0) ||
        ba ||
        ((ba = !0),
        Kf(ko, function () {
          return X0(), null;
        })),
      (p = (s.flags & 15990) !== 0),
      (s.subtreeFlags & 15990) !== 0 || p)
    ) {
      (p = zt.transition), (zt.transition = null);
      var g = Ie;
      Ie = 1;
      var _ = Pe;
      (Pe |= 4),
        (hl.current = null),
        i2(e, s),
        Rf(s, e),
        Mg(Cs),
        (Mo = !!Ss),
        (Cs = Ss = null),
        (e.current = s),
        s2(s),
        B1(),
        (Pe = _),
        (Ie = g),
        (zt.transition = p);
    } else e.current = s;
    if (
      (ba && ((ba = !1), (Hn = e), (va = u)),
      (p = e.pendingLanes),
      p === 0 && (Dn = null),
      D1(s.stateNode),
      Pt(e, qe()),
      r !== null)
    )
      for (l = e.onRecoverableError, s = 0; s < r.length; s++)
        (u = r[s]), l(u.value, { componentStack: u.stack, digest: u.digest });
    if (ga) throw ((ga = !1), (e = bl), (bl = null), e);
    return (
      (va & 1) !== 0 && e.tag !== 0 && X0(),
      (p = e.pendingLanes),
      (p & 1) !== 0 ? (e === vl ? Qr++ : ((Qr = 0), (vl = e))) : (Qr = 0),
      Ln(),
      null
    );
  }
  function X0() {
    if (Hn !== null) {
      var e = Fu(va),
        r = zt.transition,
        s = Ie;
      try {
        if (((zt.transition = null), (Ie = 16 > e ? 16 : e), Hn === null))
          var l = !1;
        else {
          if (((e = Hn), (Hn = null), (va = 0), (Pe & 6) !== 0))
            throw Error(o(331));
          var u = Pe;
          for (Pe |= 4, Z = e.current; Z !== null; ) {
            var p = Z,
              g = p.child;
            if ((Z.flags & 16) !== 0) {
              var _ = p.deletions;
              if (_ !== null) {
                for (var w = 0; w < _.length; w++) {
                  var R = _[w];
                  for (Z = R; Z !== null; ) {
                    var H = Z;
                    switch (H.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Wr(8, H, p);
                    }
                    var z = H.child;
                    if (z !== null) (z.return = H), (Z = z);
                    else
                      for (; Z !== null; ) {
                        H = Z;
                        var D = H.sibling,
                          Q = H.return;
                        if ((Tf(H), H === R)) {
                          Z = null;
                          break;
                        }
                        if (D !== null) {
                          (D.return = Q), (Z = D);
                          break;
                        }
                        Z = Q;
                      }
                  }
                }
                var J = p.alternate;
                if (J !== null) {
                  var ee = J.child;
                  if (ee !== null) {
                    J.child = null;
                    do {
                      var We = ee.sibling;
                      (ee.sibling = null), (ee = We);
                    } while (ee !== null);
                  }
                }
                Z = p;
              }
            }
            if ((p.subtreeFlags & 2064) !== 0 && g !== null)
              (g.return = p), (Z = g);
            else
              e: for (; Z !== null; ) {
                if (((p = Z), (p.flags & 2048) !== 0))
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wr(9, p, p.return);
                  }
                var j = p.sibling;
                if (j !== null) {
                  (j.return = p.return), (Z = j);
                  break e;
                }
                Z = p.return;
              }
          }
          var E = e.current;
          for (Z = E; Z !== null; ) {
            g = Z;
            var M = g.child;
            if ((g.subtreeFlags & 2064) !== 0 && M !== null)
              (M.return = g), (Z = M);
            else
              e: for (g = E; Z !== null; ) {
                if (((_ = Z), (_.flags & 2048) !== 0))
                  try {
                    switch (_.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pa(9, _);
                    }
                  } catch (ne) {
                    Ue(_, _.return, ne);
                  }
                if (_ === g) {
                  Z = null;
                  break e;
                }
                var G = _.sibling;
                if (G !== null) {
                  (G.return = _.return), (Z = G);
                  break e;
                }
                Z = _.return;
              }
          }
          if (
            ((Pe = u),
            Ln(),
            nn && typeof nn.onPostCommitFiberRoot == "function")
          )
            try {
              nn.onPostCommitFiberRoot(Po, e);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        (Ie = s), (zt.transition = r);
      }
    }
    return !1;
  }
  function Gf(e, r, s) {
    (r = G0(s, r)),
      (r = cf(e, r, 1)),
      (e = $n(e, r, 1)),
      (r = yt()),
      e !== null && (_r(e, 1, r), Pt(e, r));
  }
  function Ue(e, r, s) {
    if (e.tag === 3) Gf(e, e, s);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Gf(r, e, s);
          break;
        } else if (r.tag === 1) {
          var l = r.stateNode;
          if (
            typeof r.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Dn === null || !Dn.has(l)))
          ) {
            (e = G0(s, e)),
              (e = uf(r, e, 1)),
              (r = $n(r, e, 1)),
              (e = yt()),
              r !== null && (_r(r, 1, e), Pt(r, e));
            break;
          }
        }
        r = r.return;
      }
  }
  function p2(e, r, s) {
    var l = e.pingCache;
    l !== null && l.delete(r),
      (r = yt()),
      (e.pingedLanes |= e.suspendedLanes & s),
      rt === e &&
        (lt & s) === s &&
        (et === 4 || (et === 3 && (lt & 130023424) === lt && 500 > qe() - gl)
          ? c0(e, 0)
          : (ml |= s)),
      Pt(e, r);
  }
  function qf(e, r) {
    r === 0 &&
      ((e.mode & 1) === 0
        ? (r = 1)
        : ((r = Eo), (Eo <<= 1), (Eo & 130023424) === 0 && (Eo = 4194304)));
    var s = yt();
    (e = bn(e, r)), e !== null && (_r(e, r, s), Pt(e, s));
  }
  function h2(e) {
    var r = e.memoizedState,
      s = 0;
    r !== null && (s = r.retryLane), qf(e, s);
  }
  function m2(e, r) {
    var s = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          u = e.memoizedState;
        u !== null && (s = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(r), qf(e, s);
  }
  var Wf;
  Wf = function (e, r, s) {
    if (e !== null)
      if (e.memoizedProps !== r.pendingProps || St.current) wt = !0;
      else {
        if ((e.lanes & s) === 0 && (r.flags & 128) === 0)
          return (wt = !1), n2(e, r, s);
        wt = (e.flags & 131072) !== 0;
      }
    else (wt = !1), De && (r.flags & 1048576) !== 0 && wd(r, Qo, r.index);
    switch (((r.lanes = 0), r.tag)) {
      case 2:
        var l = r.type;
        da(e, r), (e = r.pendingProps);
        var u = B0(r, ut.current);
        z0(r, s), (u = Xs(null, r, l, e, u, s));
        var p = Qs();
        return (
          (r.flags |= 1),
          typeof u == "object" &&
          u !== null &&
          typeof u.render == "function" &&
          u.$$typeof === void 0
            ? ((r.tag = 1),
              (r.memoizedState = null),
              (r.updateQueue = null),
              Ct(l) ? ((p = !0), Wo(r)) : (p = !1),
              (r.memoizedState =
                u.state !== null && u.state !== void 0 ? u.state : null),
              Ds(r),
              (u.updater = na),
              (r.stateNode = u),
              (u._reactInternals = r),
              zs(r, l, e, s),
              (r = ol(null, r, l, !0, p, s)))
            : ((r.tag = 0), De && p && Fs(r), vt(null, r, u, s), (r = r.child)),
          r
        );
      case 16:
        l = r.elementType;
        e: {
          switch (
            (da(e, r),
            (e = r.pendingProps),
            (u = l._init),
            (l = u(l._payload)),
            (r.type = l),
            (u = r.tag = b2(l)),
            (e = Qt(l, e)),
            u)
          ) {
            case 0:
              r = rl(null, r, l, e, s);
              break e;
            case 1:
              r = yf(null, r, l, e, s);
              break e;
            case 11:
              r = hf(null, r, l, e, s);
              break e;
            case 14:
              r = mf(null, r, l, Qt(l.type, e), s);
              break e;
          }
          throw Error(o(306, l, ""));
        }
        return r;
      case 0:
        return (
          (l = r.type),
          (u = r.pendingProps),
          (u = r.elementType === l ? u : Qt(l, u)),
          rl(e, r, l, u, s)
        );
      case 1:
        return (
          (l = r.type),
          (u = r.pendingProps),
          (u = r.elementType === l ? u : Qt(l, u)),
          yf(e, r, l, u, s)
        );
      case 3:
        e: {
          if ((_f(r), e === null)) throw Error(o(387));
          (l = r.pendingProps),
            (p = r.memoizedState),
            (u = p.element),
            Fd(e, r),
            ta(r, l, null, s);
          var g = r.memoizedState;
          if (((l = g.element), p.isDehydrated))
            if (
              ((p = {
                element: l,
                isDehydrated: !1,
                cache: g.cache,
                pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                transitions: g.transitions,
              }),
              (r.updateQueue.baseState = p),
              (r.memoizedState = p),
              r.flags & 256)
            ) {
              (u = G0(Error(o(423)), r)), (r = xf(e, r, l, s, u));
              break e;
            } else if (l !== u) {
              (u = G0(Error(o(424)), r)), (r = xf(e, r, l, s, u));
              break e;
            } else
              for (
                Mt = In(r.stateNode.containerInfo.firstChild),
                  jt = r,
                  De = !0,
                  Xt = null,
                  s = Ad(r, null, l, s),
                  r.child = s;
                s;

              )
                (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
          else {
            if ((D0(), l === u)) {
              r = yn(e, r, s);
              break e;
            }
            vt(e, r, l, s);
          }
          r = r.child;
        }
        return r;
      case 5:
        return (
          Dd(r),
          e === null && Is(r),
          (l = r.type),
          (u = r.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (g = u.children),
          ws(l, u) ? (g = null) : p !== null && ws(l, p) && (r.flags |= 32),
          vf(e, r),
          vt(e, r, g, s),
          r.child
        );
      case 6:
        return e === null && Is(r), null;
      case 13:
        return Sf(e, r, s);
      case 4:
        return (
          Vs(r, r.stateNode.containerInfo),
          (l = r.pendingProps),
          e === null ? (r.child = V0(r, null, l, s)) : vt(e, r, l, s),
          r.child
        );
      case 11:
        return (
          (l = r.type),
          (u = r.pendingProps),
          (u = r.elementType === l ? u : Qt(l, u)),
          hf(e, r, l, u, s)
        );
      case 7:
        return vt(e, r, r.pendingProps, s), r.child;
      case 8:
        return vt(e, r, r.pendingProps.children, s), r.child;
      case 12:
        return vt(e, r, r.pendingProps.children, s), r.child;
      case 10:
        e: {
          if (
            ((l = r.type._context),
            (u = r.pendingProps),
            (p = r.memoizedProps),
            (g = u.value),
            Ne(Zo, l._currentValue),
            (l._currentValue = g),
            p !== null)
          )
            if (Kt(p.value, g)) {
              if (p.children === u.children && !St.current) {
                r = yn(e, r, s);
                break e;
              }
            } else
              for (p = r.child, p !== null && (p.return = r); p !== null; ) {
                var _ = p.dependencies;
                if (_ !== null) {
                  g = p.child;
                  for (var w = _.firstContext; w !== null; ) {
                    if (w.context === l) {
                      if (p.tag === 1) {
                        (w = vn(-1, s & -s)), (w.tag = 2);
                        var R = p.updateQueue;
                        if (R !== null) {
                          R = R.shared;
                          var H = R.pending;
                          H === null
                            ? (w.next = w)
                            : ((w.next = H.next), (H.next = w)),
                            (R.pending = w);
                        }
                      }
                      (p.lanes |= s),
                        (w = p.alternate),
                        w !== null && (w.lanes |= s),
                        $s(p.return, s, r),
                        (_.lanes |= s);
                      break;
                    }
                    w = w.next;
                  }
                } else if (p.tag === 10) g = p.type === r.type ? null : p.child;
                else if (p.tag === 18) {
                  if (((g = p.return), g === null)) throw Error(o(341));
                  (g.lanes |= s),
                    (_ = g.alternate),
                    _ !== null && (_.lanes |= s),
                    $s(g, s, r),
                    (g = p.sibling);
                } else g = p.child;
                if (g !== null) g.return = p;
                else
                  for (g = p; g !== null; ) {
                    if (g === r) {
                      g = null;
                      break;
                    }
                    if (((p = g.sibling), p !== null)) {
                      (p.return = g.return), (g = p);
                      break;
                    }
                    g = g.return;
                  }
                p = g;
              }
          vt(e, r, u.children, s), (r = r.child);
        }
        return r;
      case 9:
        return (
          (u = r.type),
          (l = r.pendingProps.children),
          z0(r, s),
          (u = Dt(u)),
          (l = l(u)),
          (r.flags |= 1),
          vt(e, r, l, s),
          r.child
        );
      case 14:
        return (
          (l = r.type),
          (u = Qt(l, r.pendingProps)),
          (u = Qt(l.type, u)),
          mf(e, r, l, u, s)
        );
      case 15:
        return gf(e, r, r.type, r.pendingProps, s);
      case 17:
        return (
          (l = r.type),
          (u = r.pendingProps),
          (u = r.elementType === l ? u : Qt(l, u)),
          da(e, r),
          (r.tag = 1),
          Ct(l) ? ((e = !0), Wo(r)) : (e = !1),
          z0(r, s),
          Nd(r, l, u),
          zs(r, l, u, s),
          ol(null, r, l, !0, e, s)
        );
      case 19:
        return wf(e, r, s);
      case 22:
        return bf(e, r, s);
    }
    throw Error(o(156, r.tag));
  };
  function Kf(e, r) {
    return ku(e, r);
  }
  function g2(e, r, s, l) {
    (this.tag = e),
      (this.key = s),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = r),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Vt(e, r, s, l) {
    return new g2(e, r, s, l);
  }
  function wl(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function b2(e) {
    if (typeof e == "function") return wl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ce)) return 11;
      if (e === ge) return 14;
    }
    return 2;
  }
  function Un(e, r) {
    var s = e.alternate;
    return (
      s === null
        ? ((s = Vt(e.tag, r, e.key, e.mode)),
          (s.elementType = e.elementType),
          (s.type = e.type),
          (s.stateNode = e.stateNode),
          (s.alternate = e),
          (e.alternate = s))
        : ((s.pendingProps = r),
          (s.type = e.type),
          (s.flags = 0),
          (s.subtreeFlags = 0),
          (s.deletions = null)),
      (s.flags = e.flags & 14680064),
      (s.childLanes = e.childLanes),
      (s.lanes = e.lanes),
      (s.child = e.child),
      (s.memoizedProps = e.memoizedProps),
      (s.memoizedState = e.memoizedState),
      (s.updateQueue = e.updateQueue),
      (r = e.dependencies),
      (s.dependencies =
        r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
      (s.sibling = e.sibling),
      (s.index = e.index),
      (s.ref = e.ref),
      s
    );
  }
  function Sa(e, r, s, l, u, p) {
    var g = 2;
    if (((l = e), typeof e == "function")) wl(e) && (g = 1);
    else if (typeof e == "string") g = 5;
    else
      e: switch (e) {
        case N:
          return d0(s.children, u, p, r);
        case X:
          (g = 8), (u |= 8);
          break;
        case he:
          return (
            (e = Vt(12, s, r, u | 2)), (e.elementType = he), (e.lanes = p), e
          );
        case ye:
          return (e = Vt(13, s, r, u)), (e.elementType = ye), (e.lanes = p), e;
        case Se:
          return (e = Vt(19, s, r, u)), (e.elementType = Se), (e.lanes = p), e;
        case we:
          return Ca(s, u, p, r);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ce:
                g = 10;
                break e;
              case te:
                g = 9;
                break e;
              case ce:
                g = 11;
                break e;
              case ge:
                g = 14;
                break e;
              case me:
                (g = 16), (l = null);
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return (
      (r = Vt(g, s, r, u)), (r.elementType = e), (r.type = l), (r.lanes = p), r
    );
  }
  function d0(e, r, s, l) {
    return (e = Vt(7, e, l, r)), (e.lanes = s), e;
  }
  function Ca(e, r, s, l) {
    return (
      (e = Vt(22, e, l, r)),
      (e.elementType = we),
      (e.lanes = s),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function kl(e, r, s) {
    return (e = Vt(6, e, null, r)), (e.lanes = s), e;
  }
  function Pl(e, r, s) {
    return (
      (r = Vt(4, e.children !== null ? e.children : [], e.key, r)),
      (r.lanes = s),
      (r.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      r
    );
  }
  function v2(e, r, s, l, u) {
    (this.tag = r),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ji(0)),
      (this.expirationTimes = Ji(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ji(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Ol(e, r, s, l, u, p, g, _, w) {
    return (
      (e = new v2(e, r, s, _, w)),
      r === 1 ? ((r = 1), p === !0 && (r |= 8)) : (r = 0),
      (p = Vt(3, null, null, r)),
      (e.current = p),
      (p.stateNode = e),
      (p.memoizedState = {
        element: l,
        isDehydrated: s,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ds(p),
      e
    );
  }
  function y2(e, r, s) {
    var l =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: $,
      key: l == null ? null : "" + l,
      children: e,
      containerInfo: r,
      implementation: s,
    };
  }
  function Xf(e) {
    if (!e) return Nn;
    e = e._reactInternals;
    e: {
      if (Jn(e) !== e || e.tag !== 1) throw Error(o(170));
      var r = e;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Ct(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var s = e.type;
      if (Ct(s)) return xd(e, s, r);
    }
    return r;
  }
  function Qf(e, r, s, l, u, p, g, _, w) {
    return (
      (e = Ol(s, l, !0, e, u, p, g, _, w)),
      (e.context = Xf(null)),
      (s = e.current),
      (l = yt()),
      (u = zn(s)),
      (p = vn(l, u)),
      (p.callback = r ?? null),
      $n(s, p, u),
      (e.current.lanes = u),
      _r(e, u, l),
      Pt(e, l),
      e
    );
  }
  function wa(e, r, s, l) {
    var u = r.current,
      p = yt(),
      g = zn(u);
    return (
      (s = Xf(s)),
      r.context === null ? (r.context = s) : (r.pendingContext = s),
      (r = vn(p, g)),
      (r.payload = { element: e }),
      (l = l === void 0 ? null : l),
      l !== null && (r.callback = l),
      (e = $n(u, r, g)),
      e !== null && (Jt(e, u, g, p), ea(e, u, g)),
      g
    );
  }
  function ka(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Yf(e, r) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var s = e.retryLane;
      e.retryLane = s !== 0 && s < r ? s : r;
    }
  }
  function El(e, r) {
    Yf(e, r), (e = e.alternate) && Yf(e, r);
  }
  function _2() {
    return null;
  }
  var Zf =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Tl(e) {
    this._internalRoot = e;
  }
  (Pa.prototype.render = Tl.prototype.render =
    function (e) {
      var r = this._internalRoot;
      if (r === null) throw Error(o(409));
      wa(e, r, null, null);
    }),
    (Pa.prototype.unmount = Tl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var r = e.containerInfo;
          l0(function () {
            wa(null, e, null, null);
          }),
            (r[pn] = null);
        }
      });
  function Pa(e) {
    this._internalRoot = e;
  }
  Pa.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var r = Iu();
      e = { blockedOn: null, target: e, priority: r };
      for (var s = 0; s < Fn.length && r !== 0 && r < Fn[s].priority; s++);
      Fn.splice(s, 0, e), s === 0 && Lu(e);
    }
  };
  function Fl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Oa(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Jf() {}
  function x2(e, r, s, l, u) {
    if (u) {
      if (typeof l == "function") {
        var p = l;
        l = function () {
          var R = ka(g);
          p.call(R);
        };
      }
      var g = Qf(r, l, e, 0, null, !1, !1, "", Jf);
      return (
        (e._reactRootContainer = g),
        (e[pn] = g.current),
        Rr(e.nodeType === 8 ? e.parentNode : e),
        l0(),
        g
      );
    }
    for (; (u = e.lastChild); ) e.removeChild(u);
    if (typeof l == "function") {
      var _ = l;
      l = function () {
        var R = ka(w);
        _.call(R);
      };
    }
    var w = Ol(e, 0, !1, null, null, !1, !1, "", Jf);
    return (
      (e._reactRootContainer = w),
      (e[pn] = w.current),
      Rr(e.nodeType === 8 ? e.parentNode : e),
      l0(function () {
        wa(r, w, s, l);
      }),
      w
    );
  }
  function Ea(e, r, s, l, u) {
    var p = s._reactRootContainer;
    if (p) {
      var g = p;
      if (typeof u == "function") {
        var _ = u;
        u = function () {
          var w = ka(g);
          _.call(w);
        };
      }
      wa(r, g, e, u);
    } else g = x2(s, r, e, u, l);
    return ka(g);
  }
  (ju = function (e) {
    switch (e.tag) {
      case 3:
        var r = e.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var s = yr(r.pendingLanes);
          s !== 0 &&
            (es(r, s | 1),
            Pt(r, qe()),
            (Pe & 6) === 0 && ((K0 = qe() + 500), Ln()));
        }
        break;
      case 13:
        l0(function () {
          var l = bn(e, 1);
          if (l !== null) {
            var u = yt();
            Jt(l, e, 1, u);
          }
        }),
          El(e, 1);
    }
  }),
    (ts = function (e) {
      if (e.tag === 13) {
        var r = bn(e, 134217728);
        if (r !== null) {
          var s = yt();
          Jt(r, e, 134217728, s);
        }
        El(e, 134217728);
      }
    }),
    (Mu = function (e) {
      if (e.tag === 13) {
        var r = zn(e),
          s = bn(e, r);
        if (s !== null) {
          var l = yt();
          Jt(s, e, r, l);
        }
        El(e, r);
      }
    }),
    (Iu = function () {
      return Ie;
    }),
    (Ru = function (e, r) {
      var s = Ie;
      try {
        return (Ie = e), r();
      } finally {
        Ie = s;
      }
    }),
    (Wi = function (e, r, s) {
      switch (r) {
        case "input":
          if ((Ai(e, s), (r = s.name), s.type === "radio" && r != null)) {
            for (s = e; s.parentNode; ) s = s.parentNode;
            for (
              s = s.querySelectorAll(
                "input[name=" + JSON.stringify("" + r) + '][type="radio"]',
              ),
                r = 0;
              r < s.length;
              r++
            ) {
              var l = s[r];
              if (l !== e && l.form === e.form) {
                var u = Go(l);
                if (!u) throw Error(o(90));
                xt(l), Ai(l, u);
              }
            }
          }
          break;
        case "textarea":
          cu(e, s);
          break;
        case "select":
          (r = s.value), r != null && k0(e, !!s.multiple, r, !1);
      }
    }),
    (vu = xl),
    (yu = l0);
  var S2 = { usingClientEntryPoint: !1, Events: [Br, N0, Go, gu, bu, xl] },
    Yr = {
      findFiberByHostInstance: e0,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    C2 = {
      bundleType: Yr.bundleType,
      version: Yr.version,
      rendererPackageName: Yr.rendererPackageName,
      rendererConfig: Yr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: B.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Cu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Yr.findFiberByHostInstance || _2,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ta = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ta.isDisabled && Ta.supportsFiber)
      try {
        (Po = Ta.inject(C2)), (nn = Ta);
      } catch {}
  }
  return (
    (Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = S2),
    (Ot.createPortal = function (e, r) {
      var s =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Fl(r)) throw Error(o(200));
      return y2(e, r, null, s);
    }),
    (Ot.createRoot = function (e, r) {
      if (!Fl(e)) throw Error(o(299));
      var s = !1,
        l = "",
        u = Zf;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (s = !0),
          r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (u = r.onRecoverableError)),
        (r = Ol(e, 1, !1, null, null, s, !1, l, u)),
        (e[pn] = r.current),
        Rr(e.nodeType === 8 ? e.parentNode : e),
        new Tl(r)
      );
    }),
    (Ot.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var r = e._reactInternals;
      if (r === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return (e = Cu(r)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ot.flushSync = function (e) {
      return l0(e);
    }),
    (Ot.hydrate = function (e, r, s) {
      if (!Oa(r)) throw Error(o(200));
      return Ea(null, e, r, !0, s);
    }),
    (Ot.hydrateRoot = function (e, r, s) {
      if (!Fl(e)) throw Error(o(405));
      var l = (s != null && s.hydratedSources) || null,
        u = !1,
        p = "",
        g = Zf;
      if (
        (s != null &&
          (s.unstable_strictMode === !0 && (u = !0),
          s.identifierPrefix !== void 0 && (p = s.identifierPrefix),
          s.onRecoverableError !== void 0 && (g = s.onRecoverableError)),
        (r = Qf(r, null, e, 1, s ?? null, u, !1, p, g)),
        (e[pn] = r.current),
        Rr(e),
        l)
      )
        for (e = 0; e < l.length; e++)
          (s = l[e]),
            (u = s._getVersion),
            (u = u(s._source)),
            r.mutableSourceEagerHydrationData == null
              ? (r.mutableSourceEagerHydrationData = [s, u])
              : r.mutableSourceEagerHydrationData.push(s, u);
      return new Pa(r);
    }),
    (Ot.render = function (e, r, s) {
      if (!Oa(r)) throw Error(o(200));
      return Ea(null, e, r, !1, s);
    }),
    (Ot.unmountComponentAtNode = function (e) {
      if (!Oa(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (l0(function () {
            Ea(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[pn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ot.unstable_batchedUpdates = xl),
    (Ot.unstable_renderSubtreeIntoContainer = function (e, r, s, l) {
      if (!Oa(s)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return Ea(e, r, s, !1, l);
    }),
    (Ot.version = "18.2.0-next-9e3b772b8-20220608"),
    Ot
  );
}
var up;
function Nh() {
  if (up) return Nl.exports;
  up = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (t) {
        console.error(t);
      }
  }
  return n(), (Nl.exports = L2()), Nl.exports;
}
var dp;
function B2() {
  if (dp) return Fa;
  dp = 1;
  var n = Nh();
  return (Fa.createRoot = n.createRoot), (Fa.hydrateRoot = n.hydrateRoot), Fa;
}
var fp = B2(),
  bt = function () {
    return (
      (bt =
        Object.assign ||
        function (t) {
          for (var o, a = 1, i = arguments.length; a < i; a++) {
            o = arguments[a];
            for (var c in o)
              Object.prototype.hasOwnProperty.call(o, c) && (t[c] = o[c]);
          }
          return t;
        }),
      bt.apply(this, arguments)
    );
  };
function ti(n, t, o) {
  if (o || arguments.length === 2)
    for (var a = 0, i = t.length, c; a < i; a++)
      (c || !(a in t)) &&
        (c || (c = Array.prototype.slice.call(t, 0, a)), (c[a] = t[a]));
  return n.concat(c || Array.prototype.slice.call(t));
}
var Ae = "-ms-",
  ao = "-moz-",
  Me = "-webkit-",
  Lh = "comm",
  Pi = "rule",
  Nc = "decl",
  $2 = "@import",
  Bh = "@keyframes",
  A2 = "@layer",
  $h = Math.abs,
  Lc = String.fromCharCode,
  ic = Object.assign;
function D2(n, t) {
  return at(n, 0) ^ 45
    ? (((((((t << 2) ^ at(n, 0)) << 2) ^ at(n, 1)) << 2) ^ at(n, 2)) << 2) ^
        at(n, 3)
    : 0;
}
function Ah(n) {
  return n.trim();
}
function xn(n, t) {
  return (n = t.exec(n)) ? n[0] : n;
}
function xe(n, t, o) {
  return n.replace(t, o);
}
function Va(n, t, o) {
  return n.indexOf(t, o);
}
function at(n, t) {
  return n.charCodeAt(t) | 0;
}
function rr(n, t, o) {
  return n.slice(t, o);
}
function cn(n) {
  return n.length;
}
function Dh(n) {
  return n.length;
}
function no(n, t) {
  return t.push(n), n;
}
function H2(n, t) {
  return n.map(t).join("");
}
function pp(n, t) {
  return n.filter(function (o) {
    return !xn(o, t);
  });
}
var Oi = 1,
  or = 1,
  Hh = 0,
  qt = 0,
  Ye = 0,
  cr = "";
function Ei(n, t, o, a, i, c, d, h) {
  return {
    value: n,
    root: t,
    parent: o,
    type: a,
    props: i,
    children: c,
    line: Oi,
    column: or,
    length: d,
    return: "",
    siblings: h,
  };
}
function qn(n, t) {
  return ic(
    Ei("", null, null, "", null, null, 0, n.siblings),
    n,
    { length: -n.length },
    t,
  );
}
function Q0(n) {
  for (; n.root; ) n = qn(n.root, { children: [n] });
  no(n, n.siblings);
}
function z2() {
  return Ye;
}
function V2() {
  return (
    (Ye = qt > 0 ? at(cr, --qt) : 0), or--, Ye === 10 && ((or = 1), Oi--), Ye
  );
}
function tn() {
  return (
    (Ye = qt < Hh ? at(cr, qt++) : 0), or++, Ye === 10 && ((or = 1), Oi++), Ye
  );
}
function b0() {
  return at(cr, qt);
}
function Ua() {
  return qt;
}
function Ti(n, t) {
  return rr(cr, n, t);
}
function sc(n) {
  switch (n) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function U2(n) {
  return (Oi = or = 1), (Hh = cn((cr = n))), (qt = 0), [];
}
function G2(n) {
  return (cr = ""), n;
}
function $l(n) {
  return Ah(Ti(qt - 1, lc(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function q2(n) {
  for (; (Ye = b0()) && Ye < 33; ) tn();
  return sc(n) > 2 || sc(Ye) > 3 ? "" : " ";
}
function W2(n, t) {
  for (
    ;
    --t &&
    tn() &&
    !(Ye < 48 || Ye > 102 || (Ye > 57 && Ye < 65) || (Ye > 70 && Ye < 97));

  );
  return Ti(n, Ua() + (t < 6 && b0() == 32 && tn() == 32));
}
function lc(n) {
  for (; tn(); )
    switch (Ye) {
      case n:
        return qt;
      case 34:
      case 39:
        n !== 34 && n !== 39 && lc(Ye);
        break;
      case 40:
        n === 41 && lc(n);
        break;
      case 92:
        tn();
        break;
    }
  return qt;
}
function K2(n, t) {
  for (; tn() && n + Ye !== 57; ) if (n + Ye === 84 && b0() === 47) break;
  return "/*" + Ti(t, qt - 1) + "*" + Lc(n === 47 ? n : tn());
}
function X2(n) {
  for (; !sc(b0()); ) tn();
  return Ti(n, qt);
}
function Q2(n) {
  return G2(Ga("", null, null, null, [""], (n = U2(n)), 0, [0], n));
}
function Ga(n, t, o, a, i, c, d, h, f) {
  for (
    var m = 0,
      b = 0,
      v = d,
      y = 0,
      x = 0,
      S = 0,
      O = 1,
      k = 1,
      P = 1,
      T = 0,
      I = "",
      B = i,
      F = c,
      $ = a,
      N = I;
    k;

  )
    switch (((S = T), (T = tn()))) {
      case 40:
        if (S != 108 && at(N, v - 1) == 58) {
          Va((N += xe($l(T), "&", "&\f")), "&\f", $h(m ? h[m - 1] : 0)) != -1 &&
            (P = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        N += $l(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        N += q2(S);
        break;
      case 92:
        N += W2(Ua() - 1, 7);
        continue;
      case 47:
        switch (b0()) {
          case 42:
          case 47:
            no(Y2(K2(tn(), Ua()), t, o, f), f);
            break;
          default:
            N += "/";
        }
        break;
      case 123 * O:
        h[m++] = cn(N) * P;
      case 125 * O:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            k = 0;
          case 59 + b:
            P == -1 && (N = xe(N, /\f/g, "")),
              x > 0 &&
                cn(N) - v &&
                no(
                  x > 32
                    ? mp(N + ";", a, o, v - 1, f)
                    : mp(xe(N, " ", "") + ";", a, o, v - 2, f),
                  f,
                );
            break;
          case 59:
            N += ";";
          default:
            if (
              (no(
                ($ = hp(N, t, o, m, b, i, h, I, (B = []), (F = []), v, c)),
                c,
              ),
              T === 123)
            )
              if (b === 0) Ga(N, t, $, $, B, c, v, h, F);
              else
                switch (y === 99 && at(N, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ga(
                      n,
                      $,
                      $,
                      a && no(hp(n, $, $, 0, 0, i, h, I, i, (B = []), v, F), F),
                      i,
                      F,
                      v,
                      h,
                      a ? B : F,
                    );
                    break;
                  default:
                    Ga(N, $, $, $, [""], F, 0, h, F);
                }
        }
        (m = b = x = 0), (O = P = 1), (I = N = ""), (v = d);
        break;
      case 58:
        (v = 1 + cn(N)), (x = S);
      default:
        if (O < 1) {
          if (T == 123) --O;
          else if (T == 125 && O++ == 0 && V2() == 125) continue;
        }
        switch (((N += Lc(T)), T * O)) {
          case 38:
            P = b > 0 ? 1 : ((N += "\f"), -1);
            break;
          case 44:
            (h[m++] = (cn(N) - 1) * P), (P = 1);
            break;
          case 64:
            b0() === 45 && (N += $l(tn())),
              (y = b0()),
              (b = v = cn((I = N += X2(Ua())))),
              T++;
            break;
          case 45:
            S === 45 && cn(N) == 2 && (O = 0);
        }
    }
  return c;
}
function hp(n, t, o, a, i, c, d, h, f, m, b, v) {
  for (
    var y = i - 1, x = i === 0 ? c : [""], S = Dh(x), O = 0, k = 0, P = 0;
    O < a;
    ++O
  )
    for (var T = 0, I = rr(n, y + 1, (y = $h((k = d[O])))), B = n; T < S; ++T)
      (B = Ah(k > 0 ? x[T] + " " + I : xe(I, /&\f/g, x[T]))) && (f[P++] = B);
  return Ei(n, t, o, i === 0 ? Pi : h, f, m, b, v);
}
function Y2(n, t, o, a) {
  return Ei(n, t, o, Lh, Lc(z2()), rr(n, 2, -2), 0, a);
}
function mp(n, t, o, a, i) {
  return Ei(n, t, o, Nc, rr(n, 0, a), rr(n, a + 1, -1), a, i);
}
function zh(n, t, o) {
  switch (D2(n, t)) {
    case 5103:
      return Me + "print-" + n + n;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Me + n + n;
    case 4789:
      return ao + n + n;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Me + n + ao + n + Ae + n + n;
    case 5936:
      switch (at(n, t + 11)) {
        case 114:
          return Me + n + Ae + xe(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        case 108:
          return Me + n + Ae + xe(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        case 45:
          return Me + n + Ae + xe(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
    case 6828:
    case 4268:
    case 2903:
      return Me + n + Ae + n + n;
    case 6165:
      return Me + n + Ae + "flex-" + n + n;
    case 5187:
      return (
        Me + n + xe(n, /(\w+).+(:[^]+)/, Me + "box-$1$2" + Ae + "flex-$1$2") + n
      );
    case 5443:
      return (
        Me +
        n +
        Ae +
        "flex-item-" +
        xe(n, /flex-|-self/g, "") +
        (xn(n, /flex-|baseline/)
          ? ""
          : Ae + "grid-row-" + xe(n, /flex-|-self/g, "")) +
        n
      );
    case 4675:
      return (
        Me +
        n +
        Ae +
        "flex-line-pack" +
        xe(n, /align-content|flex-|-self/g, "") +
        n
      );
    case 5548:
      return Me + n + Ae + xe(n, "shrink", "negative") + n;
    case 5292:
      return Me + n + Ae + xe(n, "basis", "preferred-size") + n;
    case 6060:
      return (
        Me +
        "box-" +
        xe(n, "-grow", "") +
        Me +
        n +
        Ae +
        xe(n, "grow", "positive") +
        n
      );
    case 4554:
      return Me + xe(n, /([^-])(transform)/g, "$1" + Me + "$2") + n;
    case 6187:
      return (
        xe(
          xe(xe(n, /(zoom-|grab)/, Me + "$1"), /(image-set)/, Me + "$1"),
          n,
          "",
        ) + n
      );
    case 5495:
    case 3959:
      return xe(n, /(image-set\([^]*)/, Me + "$1$`$1");
    case 4968:
      return (
        xe(
          xe(n, /(.+:)(flex-)?(.*)/, Me + "box-pack:$3" + Ae + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        Me +
        n +
        n
      );
    case 4200:
      if (!xn(n, /flex-|baseline/))
        return Ae + "grid-column-align" + rr(n, t) + n;
      break;
    case 2592:
    case 3360:
      return Ae + xe(n, "template-", "") + n;
    case 4384:
    case 3616:
      return o &&
        o.some(function (a, i) {
          return (t = i), xn(a.props, /grid-\w+-end/);
        })
        ? ~Va(n + (o = o[t].value), "span", 0)
          ? n
          : Ae +
            xe(n, "-start", "") +
            n +
            Ae +
            "grid-row-span:" +
            (~Va(o, "span", 0) ? xn(o, /\d+/) : +xn(o, /\d+/) - +xn(n, /\d+/)) +
            ";"
        : Ae + xe(n, "-start", "") + n;
    case 4896:
    case 4128:
      return o &&
        o.some(function (a) {
          return xn(a.props, /grid-\w+-start/);
        })
        ? n
        : Ae + xe(xe(n, "-end", "-span"), "span ", "") + n;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return xe(n, /(.+)-inline(.+)/, Me + "$1$2") + n;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (cn(n) - 1 - t > 6)
        switch (at(n, t + 1)) {
          case 109:
            if (at(n, t + 4) !== 45) break;
          case 102:
            return (
              xe(
                n,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Me +
                  "$2-$3$1" +
                  ao +
                  (at(n, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + n
            );
          case 115:
            return ~Va(n, "stretch", 0)
              ? zh(xe(n, "stretch", "fill-available"), t, o) + n
              : n;
        }
      break;
    case 5152:
    case 5920:
      return xe(
        n,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (a, i, c, d, h, f, m) {
          return (
            Ae +
            i +
            ":" +
            c +
            m +
            (d ? Ae + i + "-span:" + (h ? f : +f - +c) + m : "") +
            n
          );
        },
      );
    case 4949:
      if (at(n, t + 6) === 121) return xe(n, ":", ":" + Me) + n;
      break;
    case 6444:
      switch (at(n, at(n, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            xe(
              n,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                Me +
                (at(n, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Me +
                "$2$3$1" +
                Ae +
                "$2box$3",
            ) + n
          );
        case 100:
          return xe(n, ":", ":" + Ae) + n;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return xe(n, "scroll-", "scroll-snap-") + n;
  }
  return n;
}
function ni(n, t) {
  for (var o = "", a = 0; a < n.length; a++) o += t(n[a], a, n, t) || "";
  return o;
}
function Z2(n, t, o, a) {
  switch (n.type) {
    case A2:
      if (n.children.length) break;
    case $2:
    case Nc:
      return (n.return = n.return || n.value);
    case Lh:
      return "";
    case Bh:
      return (n.return = n.value + "{" + ni(n.children, a) + "}");
    case Pi:
      if (!cn((n.value = n.props.join(",")))) return "";
  }
  return cn((o = ni(n.children, a)))
    ? (n.return = n.value + "{" + o + "}")
    : "";
}
function J2(n) {
  var t = Dh(n);
  return function (o, a, i, c) {
    for (var d = "", h = 0; h < t; h++) d += n[h](o, a, i, c) || "";
    return d;
  };
}
function eb(n) {
  return function (t) {
    t.root || ((t = t.return) && n(t));
  };
}
function tb(n, t, o, a) {
  if (n.length > -1 && !n.return)
    switch (n.type) {
      case Nc:
        n.return = zh(n.value, n.length, o);
        return;
      case Bh:
        return ni([qn(n, { value: xe(n.value, "@", "@" + Me) })], a);
      case Pi:
        if (n.length)
          return H2((o = n.props), function (i) {
            switch (xn(i, (a = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Q0(qn(n, { props: [xe(i, /:(read-\w+)/, ":" + ao + "$1")] })),
                  Q0(qn(n, { props: [i] })),
                  ic(n, { props: pp(o, a) });
                break;
              case "::placeholder":
                Q0(
                  qn(n, {
                    props: [xe(i, /:(plac\w+)/, ":" + Me + "input-$1")],
                  }),
                ),
                  Q0(qn(n, { props: [xe(i, /:(plac\w+)/, ":" + ao + "$1")] })),
                  Q0(qn(n, { props: [xe(i, /:(plac\w+)/, Ae + "input-$1")] })),
                  Q0(qn(n, { props: [i] })),
                  ic(n, { props: pp(o, a) });
                break;
            }
            return "";
          });
    }
}
var nb = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Nt = {},
  ar =
    (typeof process < "u" &&
      Nt !== void 0 &&
      (Nt.REACT_APP_SC_ATTR || Nt.SC_ATTR)) ||
    "data-styled",
  Vh = "active",
  Uh = "data-styled-version",
  Fi = "6.1.18",
  Bc = `/*!sc*/
`,
  ri = typeof window < "u" && typeof document < "u",
  rb = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
        Nt !== void 0 &&
        Nt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        Nt.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? Nt.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
        Nt.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        Nt !== void 0 &&
        Nt.SC_DISABLE_SPEEDY !== void 0 &&
        Nt.SC_DISABLE_SPEEDY !== "" &&
        Nt.SC_DISABLE_SPEEDY !== "false" &&
        Nt.SC_DISABLE_SPEEDY),
  ji = Object.freeze([]),
  ir = Object.freeze({});
function ob(n, t, o) {
  return (
    o === void 0 && (o = ir), (n.theme !== o.theme && n.theme) || t || o.theme
  );
}
var Gh = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  ab = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  ib = /(^-|-$)/g;
function gp(n) {
  return n.replace(ab, "-").replace(ib, "");
}
var sb = /(a)(d)/gi,
  ja = 52,
  bp = function (n) {
    return String.fromCharCode(n + (n > 25 ? 39 : 97));
  };
function cc(n) {
  var t,
    o = "";
  for (t = Math.abs(n); t > ja; t = (t / ja) | 0) o = bp(t % ja) + o;
  return (bp(t % ja) + o).replace(sb, "$1-$2");
}
var Al,
  qh = 5381,
  Z0 = function (n, t) {
    for (var o = t.length; o; ) n = (33 * n) ^ t.charCodeAt(--o);
    return n;
  },
  Wh = function (n) {
    return Z0(qh, n);
  };
function lb(n) {
  return cc(Wh(n) >>> 0);
}
function cb(n) {
  return n.displayName || n.name || "Component";
}
function Dl(n) {
  return typeof n == "string" && !0;
}
var Kh = typeof Symbol == "function" && Symbol.for,
  Xh = Kh ? Symbol.for("react.memo") : 60115,
  ub = Kh ? Symbol.for("react.forward_ref") : 60112,
  db = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  fb = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Qh = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  pb =
    (((Al = {})[ub] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Al[Xh] = Qh),
    Al);
function vp(n) {
  return ("type" in (t = n) && t.type.$$typeof) === Xh
    ? Qh
    : "$$typeof" in n
      ? pb[n.$$typeof]
      : db;
  var t;
}
var hb = Object.defineProperty,
  mb = Object.getOwnPropertyNames,
  yp = Object.getOwnPropertySymbols,
  gb = Object.getOwnPropertyDescriptor,
  bb = Object.getPrototypeOf,
  _p = Object.prototype;
function Yh(n, t, o) {
  if (typeof t != "string") {
    if (_p) {
      var a = bb(t);
      a && a !== _p && Yh(n, a, o);
    }
    var i = mb(t);
    yp && (i = i.concat(yp(t)));
    for (var c = vp(n), d = vp(t), h = 0; h < i.length; ++h) {
      var f = i[h];
      if (!(f in fb || (o && o[f]) || (d && f in d) || (c && f in c))) {
        var m = gb(t, f);
        try {
          hb(n, f, m);
        } catch {}
      }
    }
  }
  return n;
}
function y0(n) {
  return typeof n == "function";
}
function $c(n) {
  return typeof n == "object" && "styledComponentId" in n;
}
function p0(n, t) {
  return n && t ? "".concat(n, " ").concat(t) : n || t || "";
}
function xp(n, t) {
  if (n.length === 0) return "";
  for (var o = n[0], a = 1; a < n.length; a++) o += n[a];
  return o;
}
function so(n) {
  return (
    n !== null &&
    typeof n == "object" &&
    n.constructor.name === Object.name &&
    !("props" in n && n.$$typeof)
  );
}
function uc(n, t, o) {
  if ((o === void 0 && (o = !1), !o && !so(n) && !Array.isArray(n))) return t;
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++) n[a] = uc(n[a], t[a]);
  else if (so(t)) for (var a in t) n[a] = uc(n[a], t[a]);
  return n;
}
function Ac(n, t) {
  Object.defineProperty(n, "toString", { value: t });
}
function _0(n) {
  for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(n, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""),
  );
}
var vb = (function () {
    function n(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (n.prototype.indexOfGroup = function (t) {
        for (var o = 0, a = 0; a < t; a++) o += this.groupSizes[a];
        return o;
      }),
      (n.prototype.insertRules = function (t, o) {
        if (t >= this.groupSizes.length) {
          for (var a = this.groupSizes, i = a.length, c = i; t >= c; )
            if ((c <<= 1) < 0) throw _0(16, "".concat(t));
          (this.groupSizes = new Uint32Array(c)),
            this.groupSizes.set(a),
            (this.length = c);
          for (var d = i; d < c; d++) this.groupSizes[d] = 0;
        }
        for (
          var h = this.indexOfGroup(t + 1), f = ((d = 0), o.length);
          d < f;
          d++
        )
          this.tag.insertRule(h, o[d]) && (this.groupSizes[t]++, h++);
      }),
      (n.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var o = this.groupSizes[t],
            a = this.indexOfGroup(t),
            i = a + o;
          this.groupSizes[t] = 0;
          for (var c = a; c < i; c++) this.tag.deleteRule(a);
        }
      }),
      (n.prototype.getGroup = function (t) {
        var o = "";
        if (t >= this.length || this.groupSizes[t] === 0) return o;
        for (
          var a = this.groupSizes[t],
            i = this.indexOfGroup(t),
            c = i + a,
            d = i;
          d < c;
          d++
        )
          o += "".concat(this.tag.getRule(d)).concat(Bc);
        return o;
      }),
      n
    );
  })(),
  qa = new Map(),
  oi = new Map(),
  Wa = 1,
  Ma = function (n) {
    if (qa.has(n)) return qa.get(n);
    for (; oi.has(Wa); ) Wa++;
    var t = Wa++;
    return qa.set(n, t), oi.set(t, n), t;
  },
  yb = function (n, t) {
    (Wa = t + 1), qa.set(n, t), oi.set(t, n);
  },
  _b = "style[".concat(ar, "][").concat(Uh, '="').concat(Fi, '"]'),
  xb = new RegExp(
    "^".concat(ar, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  ),
  Sb = function (n, t, o) {
    for (var a, i = o.split(","), c = 0, d = i.length; c < d; c++)
      (a = i[c]) && n.registerName(t, a);
  },
  Cb = function (n, t) {
    for (
      var o,
        a = ((o = t.textContent) !== null && o !== void 0 ? o : "").split(Bc),
        i = [],
        c = 0,
        d = a.length;
      c < d;
      c++
    ) {
      var h = a[c].trim();
      if (h) {
        var f = h.match(xb);
        if (f) {
          var m = 0 | parseInt(f[1], 10),
            b = f[2];
          m !== 0 && (yb(b, m), Sb(n, b, f[3]), n.getTag().insertRules(m, i)),
            (i.length = 0);
        } else i.push(h);
      }
    }
  },
  Sp = function (n) {
    for (
      var t = document.querySelectorAll(_b), o = 0, a = t.length;
      o < a;
      o++
    ) {
      var i = t[o];
      i &&
        i.getAttribute(ar) !== Vh &&
        (Cb(n, i), i.parentNode && i.parentNode.removeChild(i));
    }
  };
function wb() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Zh = function (n) {
    var t = document.head,
      o = n || t,
      a = document.createElement("style"),
      i = (function (h) {
        var f = Array.from(h.querySelectorAll("style[".concat(ar, "]")));
        return f[f.length - 1];
      })(o),
      c = i !== void 0 ? i.nextSibling : null;
    a.setAttribute(ar, Vh), a.setAttribute(Uh, Fi);
    var d = wb();
    return d && a.setAttribute("nonce", d), o.insertBefore(a, c), a;
  },
  kb = (function () {
    function n(t) {
      (this.element = Zh(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (o) {
          if (o.sheet) return o.sheet;
          for (var a = document.styleSheets, i = 0, c = a.length; i < c; i++) {
            var d = a[i];
            if (d.ownerNode === o) return d;
          }
          throw _0(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (n.prototype.insertRule = function (t, o) {
        try {
          return this.sheet.insertRule(o, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (n.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (n.prototype.getRule = function (t) {
        var o = this.sheet.cssRules[t];
        return o && o.cssText ? o.cssText : "";
      }),
      n
    );
  })(),
  Pb = (function () {
    function n(t) {
      (this.element = Zh(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (n.prototype.insertRule = function (t, o) {
        if (t <= this.length && t >= 0) {
          var a = document.createTextNode(o);
          return (
            this.element.insertBefore(a, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (n.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (n.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      n
    );
  })(),
  Ob = (function () {
    function n(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (n.prototype.insertRule = function (t, o) {
        return (
          t <= this.length && (this.rules.splice(t, 0, o), this.length++, !0)
        );
      }),
      (n.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (n.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      n
    );
  })(),
  Cp = ri,
  Eb = { isServer: !ri, useCSSOMInjection: !rb },
  Jh = (function () {
    function n(t, o, a) {
      t === void 0 && (t = ir), o === void 0 && (o = {});
      var i = this;
      (this.options = bt(bt({}, Eb), t)),
        (this.gs = o),
        (this.names = new Map(a)),
        (this.server = !!t.isServer),
        !this.server && ri && Cp && ((Cp = !1), Sp(this)),
        Ac(this, function () {
          return (function (c) {
            for (
              var d = c.getTag(),
                h = d.length,
                f = "",
                m = function (v) {
                  var y = (function (P) {
                    return oi.get(P);
                  })(v);
                  if (y === void 0) return "continue";
                  var x = c.names.get(y),
                    S = d.getGroup(v);
                  if (x === void 0 || !x.size || S.length === 0)
                    return "continue";
                  var O = ""
                      .concat(ar, ".g")
                      .concat(v, '[id="')
                      .concat(y, '"]'),
                    k = "";
                  x !== void 0 &&
                    x.forEach(function (P) {
                      P.length > 0 && (k += "".concat(P, ","));
                    }),
                    (f += ""
                      .concat(S)
                      .concat(O, '{content:"')
                      .concat(k, '"}')
                      .concat(Bc));
                },
                b = 0;
              b < h;
              b++
            )
              m(b);
            return f;
          })(i);
        });
    }
    return (
      (n.registerId = function (t) {
        return Ma(t);
      }),
      (n.prototype.rehydrate = function () {
        !this.server && ri && Sp(this);
      }),
      (n.prototype.reconstructWithOptions = function (t, o) {
        return (
          o === void 0 && (o = !0),
          new n(
            bt(bt({}, this.options), t),
            this.gs,
            (o && this.names) || void 0,
          )
        );
      }),
      (n.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (n.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (o) {
              var a = o.useCSSOMInjection,
                i = o.target;
              return o.isServer ? new Ob(i) : a ? new kb(i) : new Pb(i);
            })(this.options)),
            new vb(t)))
        );
        var t;
      }),
      (n.prototype.hasNameForId = function (t, o) {
        return this.names.has(t) && this.names.get(t).has(o);
      }),
      (n.prototype.registerName = function (t, o) {
        if ((Ma(t), this.names.has(t))) this.names.get(t).add(o);
        else {
          var a = new Set();
          a.add(o), this.names.set(t, a);
        }
      }),
      (n.prototype.insertRules = function (t, o, a) {
        this.registerName(t, o), this.getTag().insertRules(Ma(t), a);
      }),
      (n.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (n.prototype.clearRules = function (t) {
        this.getTag().clearGroup(Ma(t)), this.clearNames(t);
      }),
      (n.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      n
    );
  })(),
  Tb = /&/g,
  Fb = /^\s*\/\/.*$/gm;
function em(n, t) {
  return n.map(function (o) {
    return (
      o.type === "rule" &&
        ((o.value = "".concat(t, " ").concat(o.value)),
        (o.value = o.value.replaceAll(",", ",".concat(t, " "))),
        (o.props = o.props.map(function (a) {
          return "".concat(t, " ").concat(a);
        }))),
      Array.isArray(o.children) &&
        o.type !== "@keyframes" &&
        (o.children = em(o.children, t)),
      o
    );
  });
}
function jb(n) {
  var t,
    o,
    a,
    i = ir,
    c = i.options,
    d = c === void 0 ? ir : c,
    h = i.plugins,
    f = h === void 0 ? ji : h,
    m = function (y, x, S) {
      return S.startsWith(o) && S.endsWith(o) && S.replaceAll(o, "").length > 0
        ? ".".concat(t)
        : y;
    },
    b = f.slice();
  b.push(function (y) {
    y.type === Pi &&
      y.value.includes("&") &&
      (y.props[0] = y.props[0].replace(Tb, o).replace(a, m));
  }),
    d.prefix && b.push(tb),
    b.push(Z2);
  var v = function (y, x, S, O) {
    x === void 0 && (x = ""),
      S === void 0 && (S = ""),
      O === void 0 && (O = "&"),
      (t = O),
      (o = x),
      (a = new RegExp("\\".concat(o, "\\b"), "g"));
    var k = y.replace(Fb, ""),
      P = Q2(S || x ? "".concat(S, " ").concat(x, " { ").concat(k, " }") : k);
    d.namespace && (P = em(P, d.namespace));
    var T = [];
    return (
      ni(
        P,
        J2(
          b.concat(
            eb(function (I) {
              return T.push(I);
            }),
          ),
        ),
      ),
      T
    );
  };
  return (
    (v.hash = f.length
      ? f
          .reduce(function (y, x) {
            return x.name || _0(15), Z0(y, x.name);
          }, qh)
          .toString()
      : ""),
    v
  );
}
var Mb = new Jh(),
  dc = jb(),
  tm = Ve.createContext({
    shouldForwardProp: void 0,
    styleSheet: Mb,
    stylis: dc,
  });
tm.Consumer;
Ve.createContext(void 0);
function wp() {
  return V.useContext(tm);
}
var Ib = (function () {
    function n(t, o) {
      var a = this;
      (this.inject = function (i, c) {
        c === void 0 && (c = dc);
        var d = a.name + c.hash;
        i.hasNameForId(a.id, d) ||
          i.insertRules(a.id, d, c(a.rules, d, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = o),
        Ac(this, function () {
          throw _0(12, String(a.name));
        });
    }
    return (
      (n.prototype.getName = function (t) {
        return t === void 0 && (t = dc), this.name + t.hash;
      }),
      n
    );
  })(),
  Rb = function (n) {
    return n >= "A" && n <= "Z";
  };
function kp(n) {
  for (var t = "", o = 0; o < n.length; o++) {
    var a = n[o];
    if (o === 1 && a === "-" && n[0] === "-") return n;
    Rb(a) ? (t += "-" + a.toLowerCase()) : (t += a);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var nm = function (n) {
    return n == null || n === !1 || n === "";
  },
  rm = function (n) {
    var t,
      o,
      a = [];
    for (var i in n) {
      var c = n[i];
      n.hasOwnProperty(i) &&
        !nm(c) &&
        ((Array.isArray(c) && c.isCss) || y0(c)
          ? a.push("".concat(kp(i), ":"), c, ";")
          : so(c)
            ? a.push.apply(
                a,
                ti(ti(["".concat(i, " {")], rm(c), !1), ["}"], !1),
              )
            : a.push(
                ""
                  .concat(kp(i), ": ")
                  .concat(
                    ((t = i),
                    (o = c) == null || typeof o == "boolean" || o === ""
                      ? ""
                      : typeof o != "number" ||
                          o === 0 ||
                          t in nb ||
                          t.startsWith("--")
                        ? String(o).trim()
                        : "".concat(o, "px")),
                    ";",
                  ),
              ));
    }
    return a;
  };
function v0(n, t, o, a) {
  if (nm(n)) return [];
  if ($c(n)) return [".".concat(n.styledComponentId)];
  if (y0(n)) {
    if (!y0((c = n)) || (c.prototype && c.prototype.isReactComponent) || !t)
      return [n];
    var i = n(t);
    return v0(i, t, o, a);
  }
  var c;
  return n instanceof Ib
    ? o
      ? (n.inject(o, a), [n.getName(a)])
      : [n]
    : so(n)
      ? rm(n)
      : Array.isArray(n)
        ? Array.prototype.concat.apply(
            ji,
            n.map(function (d) {
              return v0(d, t, o, a);
            }),
          )
        : [n.toString()];
}
function Nb(n) {
  for (var t = 0; t < n.length; t += 1) {
    var o = n[t];
    if (y0(o) && !$c(o)) return !1;
  }
  return !0;
}
var Lb = Wh(Fi),
  Bb = (function () {
    function n(t, o, a) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (a === void 0 || a.isStatic) && Nb(t)),
        (this.componentId = o),
        (this.baseHash = Z0(Lb, o)),
        (this.baseStyle = a),
        Jh.registerId(o);
    }
    return (
      (n.prototype.generateAndInjectStyles = function (t, o, a) {
        var i = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, o, a)
          : "";
        if (this.isStatic && !a.hash)
          if (
            this.staticRulesId &&
            o.hasNameForId(this.componentId, this.staticRulesId)
          )
            i = p0(i, this.staticRulesId);
          else {
            var c = xp(v0(this.rules, t, o, a)),
              d = cc(Z0(this.baseHash, c) >>> 0);
            if (!o.hasNameForId(this.componentId, d)) {
              var h = a(c, ".".concat(d), void 0, this.componentId);
              o.insertRules(this.componentId, d, h);
            }
            (i = p0(i, d)), (this.staticRulesId = d);
          }
        else {
          for (
            var f = Z0(this.baseHash, a.hash), m = "", b = 0;
            b < this.rules.length;
            b++
          ) {
            var v = this.rules[b];
            if (typeof v == "string") m += v;
            else if (v) {
              var y = xp(v0(v, t, o, a));
              (f = Z0(f, y + b)), (m += y);
            }
          }
          if (m) {
            var x = cc(f >>> 0);
            o.hasNameForId(this.componentId, x) ||
              o.insertRules(
                this.componentId,
                x,
                a(m, ".".concat(x), void 0, this.componentId),
              ),
              (i = p0(i, x));
          }
        }
        return i;
      }),
      n
    );
  })(),
  ai = Ve.createContext(void 0);
ai.Consumer;
function om(n) {
  var t = Ve.useContext(ai),
    o = V.useMemo(
      function () {
        return (function (a, i) {
          if (!a) throw _0(14);
          if (y0(a)) {
            var c = a(i);
            return c;
          }
          if (Array.isArray(a) || typeof a != "object") throw _0(8);
          return i ? bt(bt({}, i), a) : a;
        })(n.theme, t);
      },
      [n.theme, t],
    );
  return n.children
    ? Ve.createElement(ai.Provider, { value: o }, n.children)
    : null;
}
var Hl = {};
function $b(n, t, o) {
  var a = $c(n),
    i = n,
    c = !Dl(n),
    d = t.attrs,
    h = d === void 0 ? ji : d,
    f = t.componentId,
    m =
      f === void 0
        ? (function (B, F) {
            var $ = typeof B != "string" ? "sc" : gp(B);
            Hl[$] = (Hl[$] || 0) + 1;
            var N = "".concat($, "-").concat(lb(Fi + $ + Hl[$]));
            return F ? "".concat(F, "-").concat(N) : N;
          })(t.displayName, t.parentComponentId)
        : f,
    b = t.displayName,
    v =
      b === void 0
        ? (function (B) {
            return Dl(B) ? "styled.".concat(B) : "Styled(".concat(cb(B), ")");
          })(n)
        : b,
    y =
      t.displayName && t.componentId
        ? "".concat(gp(t.displayName), "-").concat(t.componentId)
        : t.componentId || m,
    x = a && i.attrs ? i.attrs.concat(h).filter(Boolean) : h,
    S = t.shouldForwardProp;
  if (a && i.shouldForwardProp) {
    var O = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var k = t.shouldForwardProp;
      S = function (B, F) {
        return O(B, F) && k(B, F);
      };
    } else S = O;
  }
  var P = new Bb(o, y, a ? i.componentStyle : void 0);
  function T(B, F) {
    return (function ($, N, X) {
      var he = $.attrs,
        Ce = $.componentStyle,
        te = $.defaultProps,
        ce = $.foldedComponentIds,
        ye = $.styledComponentId,
        Se = $.target,
        ge = Ve.useContext(ai),
        me = wp(),
        we = $.shouldForwardProp || me.shouldForwardProp,
        q = ob(N, ge, te) || ir,
        Y = (function (_e, de, be) {
          for (
            var pe,
              Re = bt(bt({}, de), { className: void 0, theme: be }),
              Zn = 0;
            Zn < _e.length;
            Zn += 1
          ) {
            var Bt = y0((pe = _e[Zn])) ? pe(Re) : pe;
            for (var xt in Bt)
              Re[xt] =
                xt === "className"
                  ? p0(Re[xt], Bt[xt])
                  : xt === "style"
                    ? bt(bt({}, Re[xt]), Bt[xt])
                    : Bt[xt];
          }
          return (
            de.className && (Re.className = p0(Re.className, de.className)), Re
          );
        })(he, N, q),
        C = Y.as || Se,
        A = {};
      for (var K in Y)
        Y[K] === void 0 ||
          K[0] === "$" ||
          K === "as" ||
          (K === "theme" && Y.theme === q) ||
          (K === "forwardedAs"
            ? (A.as = Y.forwardedAs)
            : (we && !we(K, C)) || (A[K] = Y[K]));
      var le = (function (_e, de) {
          var be = wp(),
            pe = _e.generateAndInjectStyles(de, be.styleSheet, be.stylis);
          return pe;
        })(Ce, Y),
        oe = p0(ce, ye);
      return (
        le && (oe += " " + le),
        Y.className && (oe += " " + Y.className),
        (A[Dl(C) && !Gh.has(C) ? "class" : "className"] = oe),
        X && (A.ref = X),
        V.createElement(C, A)
      );
    })(I, B, F);
  }
  T.displayName = v;
  var I = Ve.forwardRef(T);
  return (
    (I.attrs = x),
    (I.componentStyle = P),
    (I.displayName = v),
    (I.shouldForwardProp = S),
    (I.foldedComponentIds = a
      ? p0(i.foldedComponentIds, i.styledComponentId)
      : ""),
    (I.styledComponentId = y),
    (I.target = a ? i.target : n),
    Object.defineProperty(I, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (B) {
        this._foldedDefaultProps = a
          ? (function (F) {
              for (var $ = [], N = 1; N < arguments.length; N++)
                $[N - 1] = arguments[N];
              for (var X = 0, he = $; X < he.length; X++) uc(F, he[X], !0);
              return F;
            })({}, i.defaultProps, B)
          : B;
      },
    }),
    Ac(I, function () {
      return ".".concat(I.styledComponentId);
    }),
    c &&
      Yh(I, n, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    I
  );
}
function Pp(n, t) {
  for (var o = [n[0]], a = 0, i = t.length; a < i; a += 1)
    o.push(t[a], n[a + 1]);
  return o;
}
var Op = function (n) {
  return Object.assign(n, { isCss: !0 });
};
function Ab(n) {
  for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
  if (y0(n) || so(n)) return Op(v0(Pp(ji, ti([n], t, !0))));
  var a = n;
  return t.length === 0 && a.length === 1 && typeof a[0] == "string"
    ? v0(a)
    : Op(v0(Pp(a, t)));
}
function fc(n, t, o) {
  if ((o === void 0 && (o = ir), !t)) throw _0(1, t);
  var a = function (i) {
    for (var c = [], d = 1; d < arguments.length; d++) c[d - 1] = arguments[d];
    return n(t, o, Ab.apply(void 0, ti([i], c, !1)));
  };
  return (
    (a.attrs = function (i) {
      return fc(
        n,
        t,
        bt(bt({}, o), {
          attrs: Array.prototype.concat(o.attrs, i).filter(Boolean),
        }),
      );
    }),
    (a.withConfig = function (i) {
      return fc(n, t, bt(bt({}, o), i));
    }),
    a
  );
}
var am = function (n) {
    return fc($b, n);
  },
  Ke = am;
Gh.forEach(function (n) {
  Ke[n] = am(n);
});
const Db = ({ isDark: n = !1 }) =>
    W.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "113",
      height: "24",
      viewBox: "0 0 113 24",
      fill: "none",
      children: [
        W.jsx("path", {
          d: "M35.3052 12.7696V12.4883C35.3052 11.7814 35.0635 11.2405 34.5801 10.8654C34.1114 10.4759 33.4962 10.2812 32.7345 10.2812C32.1486 10.2812 31.6872 10.3821 31.3503 10.5841C31.028 10.7716 30.7204 11.0601 30.4274 11.4496C30.3396 11.565 30.2443 11.6444 30.1418 11.6876C30.0393 11.7309 29.9001 11.7526 29.7243 11.7526H29.0652C28.9041 11.7526 28.7576 11.6949 28.6258 11.5795C28.5086 11.4641 28.4573 11.327 28.472 11.1683C28.5159 10.7356 28.7283 10.31 29.1091 9.89167C29.5046 9.45891 30.0246 9.10548 30.6691 8.8314C31.3136 8.55731 32.0021 8.42027 32.7345 8.42027C34.0967 8.42027 35.1953 8.79534 36.0302 9.54546C36.8798 10.2956 37.3046 11.3486 37.3046 12.7046V19.3043C37.3046 19.463 37.246 19.6 37.1288 19.7154C37.0116 19.8308 36.8725 19.8885 36.7114 19.8885H35.8984C35.7373 19.8885 35.5981 19.8308 35.4809 19.7154C35.3638 19.6 35.3052 19.463 35.3052 19.3043V18.4171C35.0708 18.9365 34.5728 19.3476 33.8111 19.6505C33.0494 19.9535 32.2877 20.1049 31.526 20.1049C30.779 20.1049 30.1125 19.9751 29.5266 19.7154C28.9407 19.4413 28.4866 19.0735 28.1643 18.6119C27.8567 18.1503 27.7029 17.6309 27.7029 17.0539C27.7029 15.972 28.1131 15.1281 28.9334 14.5223C29.7536 13.902 30.8449 13.4836 32.2071 13.2672L35.3052 12.7696ZM35.3052 14.5006L32.7125 14.9117C31.7604 15.056 31.0207 15.294 30.4934 15.6258C29.966 15.9432 29.7024 16.3471 29.7024 16.8375C29.7024 17.1982 29.8708 17.5228 30.2077 17.8113C30.5446 18.0998 31.0573 18.244 31.7457 18.244C32.8004 18.244 33.6573 17.9483 34.3164 17.3569C34.9756 16.7654 35.3052 15.9937 35.3052 15.0416V14.5006Z",
          fill: n ? "#FBFDFF" : "#020617",
        }),
        W.jsx("path", {
          d: "M42.5097 19.3043C42.5097 19.463 42.4511 19.6 42.3339 19.7154C42.2167 19.8308 42.0776 19.8885 41.9164 19.8885H41.1035C40.9424 19.8885 40.8032 19.8308 40.686 19.7154C40.5688 19.6 40.5102 19.463 40.5102 19.3043V5.10962C40.5102 4.95094 40.5688 4.8139 40.686 4.6985C40.8032 4.58309 40.9424 4.52539 41.1035 4.52539H41.9164C42.0776 4.52539 42.2167 4.58309 42.3339 4.6985C42.4511 4.8139 42.5097 4.95094 42.5097 5.10962V19.3043Z",
          fill: n ? "#FBFDFF" : "#020617",
        }),
        W.jsx("path", {
          d: "M50.4241 18.244C51.8889 18.244 52.8776 17.6814 53.3903 16.5562C53.4929 16.3399 53.5954 16.1884 53.6979 16.1018C53.8005 16.0153 53.9396 15.972 54.1154 15.972H54.7745C54.9357 15.972 55.0748 16.0297 55.192 16.1451C55.3092 16.2461 55.3678 16.3687 55.3678 16.513C55.3678 17.0034 55.17 17.53 54.7745 18.0926C54.3791 18.6552 53.8078 19.1312 53.0607 19.5207C52.3137 19.9102 51.4348 20.1049 50.4241 20.1049C49.3841 20.1049 48.4833 19.8885 47.7216 19.4558C46.9599 19.023 46.374 18.4316 45.9639 17.6814C45.5537 16.9169 45.3267 16.0658 45.2827 15.1281C45.2681 14.955 45.2608 14.6232 45.2608 14.1328C45.2608 13.7866 45.2681 13.5413 45.2827 13.3971C45.4146 11.9257 45.9199 10.7284 46.7988 9.80512C47.6777 8.88189 48.8861 8.42027 50.4241 8.42027C51.4348 8.42027 52.3064 8.61502 53.0388 9.00451C53.7858 9.37957 54.3498 9.8484 54.7306 10.411C55.1261 10.9592 55.3385 11.4785 55.3678 11.9689C55.3824 12.1276 55.3238 12.2647 55.192 12.3801C55.0748 12.4955 54.9357 12.5532 54.7745 12.5532H54.1154C53.9396 12.5532 53.8005 12.5099 53.6979 12.4233C53.5954 12.3368 53.4929 12.1853 53.3903 11.9689C52.8776 10.8438 51.8889 10.2812 50.4241 10.2812C49.6185 10.2812 48.9154 10.548 48.3148 11.0818C47.7143 11.6155 47.3701 12.4233 47.2822 13.5053C47.2675 13.6639 47.2602 13.9236 47.2602 14.2842C47.2602 14.616 47.2675 14.8613 47.2822 15.0199C47.3847 16.1018 47.7289 16.9097 48.3148 17.4434C48.9154 17.9772 49.6185 18.244 50.4241 18.244Z",
          fill: n ? "#FBFDFF" : "#020617",
        }),
        W.jsx("path", {
          d: "M68.1485 19.3043C68.1485 19.463 68.0899 19.6 67.9727 19.7154C67.8555 19.8308 67.7164 19.8885 67.5552 19.8885H66.7423C66.5812 19.8885 66.442 19.8308 66.3248 19.7154C66.2076 19.6 66.149 19.463 66.149 19.3043V13.5918C66.149 12.5099 65.8781 11.6876 65.3361 11.1251C64.7941 10.5625 64.0398 10.2812 63.073 10.2812C62.1209 10.2812 61.3665 10.5625 60.8099 11.1251C60.2679 11.6876 59.997 12.5099 59.997 13.5918V19.3043C59.997 19.463 59.9384 19.6 59.8212 19.7154C59.704 19.8308 59.5648 19.8885 59.4037 19.8885H58.5908C58.4296 19.8885 58.2905 19.8308 58.1733 19.7154C58.0561 19.6 57.9975 19.463 57.9975 19.3043V5.10962C57.9975 4.95094 58.0561 4.8139 58.1733 4.6985C58.2905 4.58309 58.4296 4.52539 58.5908 4.52539H59.4037C59.5648 4.52539 59.704 4.58309 59.8212 4.6985C59.9384 4.8139 59.997 4.95094 59.997 5.10962V9.89167C60.3192 9.47333 60.7586 9.12712 61.3153 8.85304C61.8865 8.56453 62.5823 8.42027 63.4026 8.42027C64.3254 8.42027 65.1457 8.61502 65.8634 9.00451C66.5812 9.39399 67.1378 9.95659 67.5333 10.6923C67.9434 11.4136 68.1485 12.2719 68.1485 13.2672V19.3043Z",
          fill: n ? "#FBFDFF" : "#020617",
        }),
        W.jsx("path", {
          d: "M75.8478 8.42027C77.4152 8.42027 78.6529 8.91074 79.5611 9.89167C80.4692 10.8726 80.9233 12.207 80.9233 13.8947V14.479C80.9233 14.6377 80.8647 14.7747 80.7476 14.8901C80.6304 15.0055 80.4912 15.0632 80.3301 15.0632H72.7718V15.193C72.8011 16.1451 73.0941 16.8952 73.6507 17.4434C74.2219 17.9772 74.9543 18.244 75.8478 18.244C76.5802 18.244 77.1442 18.1503 77.5397 17.9627C77.9498 17.7752 78.316 17.5083 78.6383 17.1621C78.7554 17.0467 78.858 16.9674 78.9459 16.9241C79.0484 16.8808 79.1802 16.8592 79.3414 16.8592H80.0005C80.1763 16.8592 80.3228 16.9169 80.4399 17.0323C80.5571 17.1477 80.6084 17.2847 80.5937 17.4434C80.5352 17.8329 80.3154 18.2368 79.9346 18.6552C79.5684 19.0591 79.0337 19.4053 78.3307 19.6938C77.6422 19.9679 76.8146 20.1049 75.8478 20.1049C74.9104 20.1049 74.0755 19.8957 73.3431 19.4774C72.6107 19.0446 72.0248 18.4532 71.5853 17.7031C71.1605 16.9529 70.9042 16.1091 70.8163 15.1714C70.787 14.7386 70.7724 14.4069 70.7724 14.176C70.7724 13.9452 70.787 13.6134 70.8163 13.1807C70.9042 12.2863 71.1605 11.4785 71.5853 10.7572C72.0248 10.0359 72.6034 9.46612 73.3211 9.04778C74.0535 8.62944 74.8957 8.42027 75.8478 8.42027ZM78.9459 13.2456V13.1807C78.9459 12.3007 78.6602 11.6011 78.089 11.0818C77.5324 10.548 76.7853 10.2812 75.8478 10.2812C74.9983 10.2812 74.2732 10.548 73.6726 11.0818C73.0867 11.6155 72.7865 12.3152 72.7718 13.1807V13.2456H78.9459Z",
          fill: n ? "#FBFDFF" : "#020617",
        }),
        W.jsx("path", {
          d: "M85.5734 9.89167C85.925 9.44448 86.3205 9.09106 86.7599 8.8314C87.1993 8.55731 87.7853 8.42027 88.5177 8.42027C90.2314 8.42027 91.4326 9.04778 92.121 10.3028C92.5458 9.69693 93.0292 9.23531 93.5712 8.91795C94.1131 8.58617 94.8235 8.42027 95.7024 8.42027C97.1379 8.42027 98.1999 8.84582 98.8883 9.69693C99.5914 10.548 99.943 11.7526 99.943 13.3105V19.3043C99.943 19.463 99.8844 19.6 99.7672 19.7154C99.65 19.8308 99.5108 19.8885 99.3497 19.8885H98.5368C98.3756 19.8885 98.2365 19.8308 98.1193 19.7154C98.0021 19.6 97.9435 19.463 97.9435 19.3043V13.5269C97.9435 11.3631 97.0793 10.2812 95.3509 10.2812C94.5599 10.2812 93.93 10.5408 93.4613 11.0601C92.9926 11.5795 92.7582 12.3512 92.7582 13.3754V19.3043C92.7582 19.463 92.6996 19.6 92.5824 19.7154C92.4652 19.8308 92.3261 19.8885 92.165 19.8885H91.352C91.1909 19.8885 91.0517 19.8308 90.9345 19.7154C90.8174 19.6 90.7588 19.463 90.7588 19.3043V13.5269C90.7588 11.3631 89.8945 10.2812 88.1661 10.2812C87.3751 10.2812 86.7453 10.5408 86.2765 11.0601C85.8078 11.5795 85.5734 12.3512 85.5734 13.3754V19.3043C85.5734 19.463 85.5148 19.6 85.3977 19.7154C85.2805 19.8308 85.1413 19.8885 84.9802 19.8885H84.1672C84.0061 19.8885 83.867 19.8308 83.7498 19.7154C83.6326 19.6 83.574 19.463 83.574 19.3043V9.22089C83.574 9.06221 83.6326 8.92516 83.7498 8.80976C83.867 8.69436 84.0061 8.63665 84.1672 8.63665H84.9802C85.1413 8.63665 85.2805 8.69436 85.3977 8.80976C85.5148 8.92516 85.5734 9.06221 85.5734 9.22089V9.89167Z",
          fill: n ? "#FBFDFF" : "#020617",
        }),
        W.jsx("path", {
          d: "M106.097 23.4805C105.965 23.8267 105.752 23.9998 105.459 23.9998H104.559C104.412 23.9998 104.288 23.9493 104.185 23.8483C104.083 23.7474 104.031 23.6247 104.031 23.4805C104.031 23.4228 104.039 23.3723 104.053 23.329L106.163 18.8066L101.812 9.30744C101.797 9.26416 101.79 9.21368 101.79 9.15597C101.79 9.01172 101.841 8.8891 101.944 8.78812C102.046 8.68714 102.171 8.63665 102.317 8.63665H103.218C103.511 8.63665 103.724 8.80976 103.855 9.15597L107.239 16.513L110.667 9.15597C110.799 8.80976 111.011 8.63665 111.304 8.63665H112.205C112.351 8.63665 112.476 8.68714 112.578 8.78812C112.681 8.8891 112.732 9.01172 112.732 9.15597C112.732 9.21368 112.725 9.26416 112.71 9.30744L106.097 23.4805Z",
          fill: n ? "#FBFDFF" : "#020617",
        }),
        W.jsx("path", {
          d: "M19.3958 12.7306L12.0181 0.205008C11.9824 0.143159 11.9306 0.0916386 11.8681 0.0556463C11.8056 0.019654 11.7345 0.000462384 11.662 8.25127e-06C11.5895 -0.000445881 11.5181 0.0178533 11.4551 0.0530595C11.3922 0.0882657 11.3398 0.139134 11.3033 0.200531L9.09371 3.95372C9.02135 4.07658 8.98326 4.21595 8.98326 4.35781C8.98326 4.49967 9.02135 4.63904 9.09371 4.7619L13.9044 12.9332C13.9769 13.0562 14.0811 13.1583 14.2066 13.2292C14.3321 13.3001 14.4744 13.3374 14.6193 13.3373H19.0384C19.1107 13.3371 19.1817 13.3182 19.2443 13.2827C19.3069 13.2471 19.3589 13.1961 19.3951 13.1347C19.4313 13.0733 19.4504 13.0036 19.4505 12.9327C19.4506 12.8618 19.4317 12.7921 19.3958 12.7306Z",
          fill: n ? "#FBFDFF" : "#020617",
        }),
        W.jsx("path", {
          d: "M0.0568897 19.2769L7.43458 6.75134C7.47078 6.68998 7.52283 6.63904 7.58546 6.60362C7.64809 6.5682 7.71911 6.54956 7.79142 6.54956C7.86373 6.54956 7.93478 6.5682 7.99741 6.60362C8.06004 6.63904 8.11206 6.68998 8.14826 6.75134L10.359 10.5012C10.4313 10.6242 10.4694 10.7638 10.4694 10.9058C10.4694 11.0479 10.4313 11.1874 10.359 11.3105L5.54819 19.4818C5.47604 19.6047 5.37206 19.7068 5.24675 19.7778C5.12144 19.8487 4.97923 19.886 4.83452 19.8858H0.414299C0.341483 19.8862 0.269874 19.8676 0.206748 19.8321C0.143622 19.7965 0.0912388 19.7451 0.0549242 19.6833C0.0186097 19.6214 -0.000341874 19.5512 4.66863e-06 19.4798C0.000351211 19.4085 0.019976 19.3384 0.0568897 19.2769Z",
          fill: n ? "#FBFDFF" : "#020617",
        }),
        W.jsx("path", {
          d: "M8.1472 19.8832H22.9026C22.975 19.8831 23.0461 19.8643 23.1087 19.8288C23.1714 19.7933 23.2233 19.7422 23.2595 19.6807C23.2956 19.6192 23.3145 19.5494 23.3144 19.4785C23.3143 19.4075 23.2952 19.3379 23.2589 19.2765L21.0516 15.5244C20.9792 15.4014 20.875 15.2993 20.7495 15.2284C20.624 15.1574 20.4816 15.1202 20.3368 15.1203H10.7153C10.5704 15.1202 10.4281 15.1574 10.3026 15.2284C10.1771 15.2993 10.0729 15.4014 10.0005 15.5244L7.79095 19.2765C7.75466 19.3379 7.7355 19.4075 7.73539 19.4785C7.73529 19.5494 7.75423 19.6192 7.79034 19.6807C7.82645 19.7422 7.87846 19.7933 7.9411 19.8288C8.00375 19.8643 8.07482 19.8831 8.1472 19.8832Z",
          fill: n ? "#FBFDFF" : "#020617",
        }),
      ],
    }),
  Hb = ({ isDark: n = !1 }) =>
    W.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: [
        W.jsx("path", {
          d: "M14.8223 13.4397V2.00037L12.3848 2V3.07335H13.4866V12.3663H12.3848V13.4397H14.8223Z",
          fill: n ? "#FBFDFF" : "#475569",
        }),
        W.jsx("path", {
          d: "M2.00227 12.3667V3.07333L3.09827 3.07369V2.00035H0.666626V13.44H3.09827V12.3667H2.00227Z",
          fill: n ? "#FBFDFF" : "#475569",
        }),
        W.jsx("path", {
          d: "M7.79621 4.21892L10.4846 8.74039C10.4979 8.76271 10.5047 8.78796 10.5047 8.81344C10.5045 8.83892 10.4975 8.86417 10.4844 8.88626C10.4711 8.90836 10.4522 8.92685 10.4294 8.9397C10.4066 8.95255 10.3807 8.95931 10.3543 8.95931H8.74406C8.6913 8.95931 8.63944 8.94579 8.59367 8.92031C8.54813 8.89461 8.51003 8.85786 8.48365 8.81344L6.73067 5.86391C6.70429 5.81949 6.69031 5.76922 6.69031 5.71804C6.69031 5.66685 6.70429 5.61658 6.73067 5.57216L7.5358 4.21734C7.5491 4.19525 7.56804 4.17676 7.59104 4.16413C7.61403 4.15151 7.63996 4.14497 7.66634 4.14497C7.69272 4.14497 7.71865 4.15196 7.74165 4.16504C7.76442 4.17789 7.78313 4.1966 7.79621 4.21892Z",
          fill: n ? "#FBFDFF" : "#475569",
        }),
        W.jsx("path", {
          d: "M6.1246 6.58215L3.43617 11.1036C3.42264 11.1259 3.41565 11.1512 3.41565 11.1769C3.41565 11.2028 3.42241 11.2281 3.43572 11.2504C3.44879 11.2727 3.46796 11.2912 3.49095 11.3041C3.51395 11.3169 3.53988 11.3235 3.56648 11.3235H5.17742C5.23018 11.3235 5.28181 11.3101 5.32758 11.2844C5.37313 11.2587 5.41101 11.222 5.43738 11.1776L7.19037 8.22804C7.21675 8.18363 7.2305 8.13335 7.2305 8.08194C7.2305 8.03054 7.21675 7.98026 7.19037 7.93584L6.38478 6.58215C6.37148 6.56006 6.35254 6.54179 6.32977 6.52894C6.307 6.51609 6.28107 6.50933 6.25469 6.50933C6.22831 6.50933 6.20238 6.51609 6.17961 6.52894C6.15684 6.54157 6.1379 6.56006 6.1246 6.58215Z",
          fill: n ? "#FBFDFF" : "#475569",
        }),
        W.jsx("path", {
          d: "M6.386 11.3223H11.7629C11.7892 11.3223 11.8152 11.3155 11.8379 11.3027C11.8607 11.2898 11.8797 11.2713 11.893 11.2492C11.906 11.2269 11.913 11.2019 11.913 11.1762C11.913 11.1505 11.906 11.1255 11.8927 11.1031L11.0885 9.74877C11.0621 9.70435 11.0242 9.6676 10.9785 9.6419C10.9327 9.6162 10.8808 9.6029 10.8281 9.6029H7.32167C7.26892 9.6029 7.21706 9.6162 7.17129 9.6419C7.12552 9.6676 7.08764 9.70435 7.06126 9.74877L6.25613 11.1031C6.24283 11.1252 6.23584 11.1505 6.23584 11.1762C6.23584 11.2019 6.2426 11.2269 6.25591 11.2492C6.26898 11.2713 6.28792 11.2898 6.31092 11.3027C6.33369 11.3155 6.35962 11.3223 6.386 11.3223Z",
          fill: n ? "#FBFDFF" : "#475569",
        }),
      ],
    }),
  zb = Ke.a`
  .transition {
    transition:
      fill 0.2s,
      stroke 0.2s;
  }
  &:hover svg path:last-of-type {
    fill: #1ba32a !important;
    stroke: #1ba32a !important;
  }
  &:hover svg path:first-of-type {
    fill: ${({ theme: n }) => (n.mode === "dark" ? "#FFFFFF !important" : "#000000 !important")};
    stroke: ${({ theme: n }) => (n.mode === "dark" ? "#FFFFFF !important" : "#000000 !important")};
  }
`,
  Vb = () =>
    W.jsxs(zb, {
      className: "flex items-baseline gap-1 mx-auto my-8 w-fit",
      href: "https://buildwithfern.com/?utm_campaign=buildWith&utm_medium=docs&utm_source=alchemy.docs.buildwithfern.com",
      "data-state": "closed",
      children: [
        W.jsx("span", {
          className: "text-(color:--grayscale-a11)",
          children: "Built with",
        }),
        W.jsxs("svg", {
          viewBox: "0 0 604 164",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "transition",
          style: {
            aspectRatio: "604 / 164",
            height: "14px",
            marginTop: "-2px",
          },
          children: [
            W.jsx("path", {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M295.294 0H255.861H255.836C234.047 0 221.437 11.4661 221.437 33.483V47.2372H193.242V75.2033H221.437V160.5H253.547V75.2033H288.404V47.2372H253.547V37.3728C253.547 30.7118 257.208 27.9661 263.87 27.9661H295.294V0ZM345.26 43.8081C311.777 43.8081 288.844 67.1979 288.844 103.198H288.87C288.87 139.884 311.802 163.96 346.43 163.96C375.311 163.96 392.727 149.291 399.388 126.816H366.591C363.591 133.02 356.955 137.367 346.633 137.367C331.277 137.367 321.87 129.562 320.497 115.35H400.761C401.219 110.545 401.447 106.401 401.447 102.283C401.447 66.2826 378.744 43.8081 345.26 43.8081ZM369.108 90.5877V91.0453H320.269C321.184 77.7487 329.675 69.0284 345.26 69.0284C360.845 69.0284 369.108 77.7487 369.108 90.5877ZM412.668 47.2321H440.863V67.1898C443.609 54.3508 452.787 47.2321 467.227 47.2321H487.414V51.122C487.414 64.4186 476.634 75.1982 463.338 75.1982C450.727 75.1982 444.753 81.6304 444.753 94.4694V160.52H412.642V47.2321H412.668ZM526.939 47.24H498.744H498.719V160.503H530.829V96.0789C530.829 81.6382 539.321 72.6891 552.16 72.6891C564.999 72.6891 571.889 80.0366 571.889 95.1637V160.528H604V91.7315C604 61.7061 586.559 43.8078 558.821 43.8078C545.753 43.8078 533.601 48.8417 526.939 58.7061V47.24Z",
              className: "fill-(color:--grayscale-a10)",
            }),
            W.jsx("path", {
              d: "M149.383 80.2222C138.594 71.101 122.341 67.4445 107.936 78.0925C107.273 78.5747 106.449 77.751 106.952 77.1081C110.367 72.7082 114.325 67.9668 117.519 63.2053C120.774 58.3233 125.636 54.8275 131.241 53.1198C161.076 44.079 152.116 0 152.116 0C152.116 0 106.027 2.97342 111.713 42.7329C112.657 49.3829 110.889 56.1535 106.731 61.4374C101.628 67.8865 95.7008 74.0543 91.4014 78.5144C90.4973 79.4386 88.9705 78.5546 89.3321 77.309C93.4909 63.3058 96.5246 41.648 82.1195 27.685L61.848 10.849L57.9504 15.9922C46.3581 31.2812 49.7534 52.8385 65.0625 64.4108C73.8422 71.0407 77.8201 78.2533 77.1973 86.169C76.8156 90.9104 74.6659 95.3505 71.4514 98.8663C65.4041 105.496 59.7586 112.608 55.3989 120.846C54.7962 121.991 53.0483 121.549 53.1086 120.243C53.7314 106.641 52.4255 75.983 29.5221 65.0336L3.88635 55.1289L1.89737 61.0556C-4.55174 80.182 5.99588 100.614 25.1021 107.104C41.7171 112.749 47.6439 123.457 43.6458 139.51C43.465 140.092 40.572 156.627 40.9738 163.96H59.3969C60.0198 152.589 71.9536 145.115 82.3003 149.756C85.2135 151.062 88.207 152.93 91.2809 155.341C107.755 168.32 132.025 165.246 144.983 148.752L148.68 144.05L125.375 127.315C109.383 114.738 88.0463 120.424 72.255 131.192C70.929 132.096 69.2414 130.65 69.9847 129.203C89.0709 91.7542 113.883 91.8346 123.607 100.152C135.4 110.238 153.261 108.429 163.266 96.5961L166.139 93.2007L149.363 80.2222H149.383Z",
              className: "fill-(color:--grayscale-a10)",
            }),
          ],
        }),
      ],
    }),
  Ub = ({ isDark: n = !1 }) =>
    W.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: W.jsx("path", {
        d: "M12.6556 3.56509C11.7258 3.13937 10.7441 2.83735 9.73575 2.66675C9.59776 2.91342 9.47291 3.16721 9.36172 3.42705C8.28762 3.2652 7.19533 3.2652 6.12123 3.42705C6.00998 3.16723 5.88513 2.91345 5.7472 2.66675C4.73819 2.83879 3.75589 3.14153 2.82508 3.56732C0.977194 6.3013 0.47626 8.96738 0.726727 11.5956C1.8089 12.3952 3.02016 13.0033 4.30785 13.3934C4.5978 13.0034 4.85437 12.5897 5.07484 12.1567C4.65609 12.0003 4.25193 11.8073 3.86703 11.58C3.96833 11.5066 4.0674 11.4309 4.16314 11.3574C5.28311 11.8841 6.50551 12.1572 7.74314 12.1572C8.98079 12.1572 10.2032 11.8841 11.3232 11.3574C11.42 11.4364 11.5191 11.5121 11.6193 11.58C11.2336 11.8077 10.8287 12.001 10.4092 12.1578C10.6294 12.5906 10.886 13.004 11.1762 13.3934C12.465 13.0048 13.6772 12.397 14.7596 11.5967C15.0534 8.54883 14.2575 5.90723 12.6556 3.56509ZM5.39209 9.97927C4.69413 9.97927 4.1175 9.34587 4.1175 8.56664C4.1175 7.78741 4.67409 7.14844 5.38987 7.14844C6.10565 7.14844 6.67782 7.78741 6.66558 8.56664C6.65334 9.34587 6.10342 9.97927 5.39209 9.97927ZM10.0942 9.97927C9.39511 9.97927 8.82071 9.34587 8.82071 8.56664C8.82071 7.78741 9.3773 7.14844 10.0942 7.14844C10.8111 7.14844 11.3788 7.78741 11.3666 8.56664C11.3543 9.34587 10.8055 9.97927 10.0942 9.97927Z",
        fill: n ? "#FBFDFF" : "#475569",
      }),
    }),
  Gb = ({ isDark: n = !1 }) =>
    W.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: W.jsx("path", {
        d: "M2.79998 4.39995L7.54461 7.6847C7.81856 7.87436 8.18139 7.87436 8.45534 7.6847L13.2 4.39995M3.19998 12.8H12.8C13.6836 12.8 14.4 12.0836 14.4 11.2V4.79995C14.4 3.9163 13.6836 3.19995 12.8 3.19995H3.19998C2.31632 3.19995 1.59998 3.9163 1.59998 4.79995V11.2C1.59998 12.0836 2.31632 12.8 3.19998 12.8Z",
        stroke: n ? "#FBFDFF" : "#475569",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  qb = ({ isDark: n = !1 }) =>
    W.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      children: W.jsx("path", {
        d: "M4.875 3.75012C3 3.75012 1.5 5.25012 1.5 7.12512V12.7501C1.5 13.1479 1.65804 13.5295 1.93934 13.8108C2.22064 14.0921 2.60218 14.2501 3 14.2501H15C15.3978 14.2501 15.7794 14.0921 16.0607 13.8108C16.342 13.5295 16.5 13.1479 16.5 12.7501V6.75012C16.5 5.10012 15.15 3.75012 13.5 3.75012H4.875ZM4.875 3.75012C6.75 3.75012 8.25 5.25012 8.25 7.12512V12.7501C8.25 13.1479 8.09196 13.5295 7.81066 13.8108C7.52936 14.0921 7.14782 14.2501 6.75 14.2501M11.25 6.75012H13.5V8.25012M4.5 7.50012H5.25",
        stroke: n ? "#FBFDFF" : "#475569",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  Wb = ({ isDark: n = !1 }) =>
    W.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      children: W.jsx("path", {
        d: "M9 6.00012V3.00012H6M1.5 10.5001H3M15 10.5001H16.5M11.25 9.75012V11.2501M6.75 9.75012V11.2501M4.5 6.00012H13.5C14.3284 6.00012 15 6.67169 15 7.50012V13.5001C15 14.3285 14.3284 15.0001 13.5 15.0001H4.5C3.67157 15.0001 3 14.3285 3 13.5001V7.50012C3 6.67169 3.67157 6.00012 4.5 6.00012Z",
        stroke: n ? "#FBFDFF" : "#475569",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  Kb = ({ isDark: n = !1 }) =>
    W.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: W.jsx("path", {
        d: "M1.59998 7.73277H4.79998L6.43233 2.3999L9.95051 13.5999L11.1922 7.73277H14.4",
        stroke: n ? "#FBFDFF" : "#475569",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  Xb = ({ isDark: n = !1 }) =>
    W.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: W.jsx("path", {
        d: "M9.69706 9.69712C8.7598 10.6344 7.2402 10.6344 6.30294 9.69712M9.69706 9.69712C10.6343 8.75986 10.6343 7.24026 9.69706 6.30301M9.69706 9.69712L12.2426 12.2427M6.30294 9.69712C5.36569 8.75986 5.36569 7.24026 6.30294 6.30301M6.30294 9.69712L3.75736 12.2427M6.30294 6.30301C7.2402 5.36575 8.7598 5.36575 9.69706 6.30301M6.30294 6.30301L3.75736 3.75742M9.69706 6.30301L12.2426 3.75742M12.5255 12.5255C10.0261 15.0249 5.97387 15.0249 3.47452 12.5255C0.975162 10.0262 0.975162 5.97394 3.47452 3.47458C5.97387 0.975224 10.0261 0.975224 12.5255 3.47458C15.0248 5.97394 15.0248 10.0262 12.5255 12.5255Z",
        stroke: n ? "#FBFDFF" : "#475569",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  Qb = ({ isDark: n = !1 }) =>
    W.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: W.jsx("path", {
        d: "M9.15275 6.92804L14.2525 1H13.044L8.61591 6.14724L5.07919 1H1L6.34821 8.78354L1 15H2.20855L6.88474 9.56434L10.6198 15H14.699L9.15245 6.92804H9.15275ZM7.49748 8.85211L6.95559 8.07705L2.644 1.90978H4.50026L7.97976 6.88696L8.52165 7.66202L13.0446 14.1316H11.1883L7.49748 8.85241V8.85211Z",
        fill: n ? "#FBFDFF" : "#475569",
      }),
    }),
  Yb = [
    {
      title: "Support & platform",
      links: [
        {
          href: "https://www.alchemy.com/support",
          text: "FAQs and support",
          Icon: Xb,
        },
        {
          href: "https://status.alchemy.com",
          text: "Platform status",
          Icon: Kb,
        },
        {
          href: "https://www.alchemy.com/contact-sales",
          text: "Contact sales",
          Icon: Gb,
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          href: "https://www.alchemy.com/docs/llms.txt",
          text: "llms.txt for AI builders",
          Icon: Wb,
        },
        {
          href: "https://www.alchemy.com/university",
          text: "Alchemy University",
          Icon: Hb,
        },
      ],
    },
    {
      title: "Stay updated",
      links: [
        {
          href: "https://alchemysupercharged.substack.com/subscribe?just_signed_up=true&skip_redirect_check=true&utm_medium=web&utm_source=embed",
          text: "Subscribe to our newsletter",
          Icon: qb,
        },
        { href: "https://x.com/alchemy", text: "Follow us on X", Icon: Qb },
        {
          href: "https://discord.gg/alchemy-builders",
          text: "Join our discord",
          Icon: Ub,
        },
      ],
    },
  ],
  Zb = Ke.div`
  padding: 48px 24px 54px;
  color: ${({ theme: n }) => (n.mode === "dark" ? "#FBFDFF" : "#020617")};
`,
  Jb = Ke.div`
  max-width: 1010px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`,
  ev = Ke.div`
  padding: 48px 0px;
  border-top: 1px solid
    ${({ theme: n }) => (n.mode === "dark" ? "#3f3f40" : "#d4d4e8")};
  border-bottom: 1px solid
    ${({ theme: n }) => (n.mode === "dark" ? "#3f3f40" : "#d4d4e8")};
  display: flex;
`,
  tv = Ke.div`
  display: flex;
  flex-direction: column;
  row-gap: 36px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 64px;
    justify-content: space-between;
  }
`,
  nv = Ke.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;
`,
  rv = Ke.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.32px;
  color: ${({ theme: n }) => (n.mode === "dark" ? "#FFFFFF" : "#000000")};
  margin: 0;
`,
  ov = Ke.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  &:hover {
    color: #5167ff;

    svg {
      /* Add hover effect to icon paths depending on if they use fill or stroke */
      path[fill] {
        fill: #5167ff;
      }
      path[stroke] {
        stroke: #5167ff;
      }
    }
  }
`,
  av = Ke.div`
  justify-content: center;
  padding-top: 18px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 28px;
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 0;
  }
`,
  iv = Ke.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
    width: 100%;
    justify-content: space-between;
  }
`,
  sv = Ke.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 24px;
  }
`,
  lv = Ke.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    justify-content: flex-end;
  }
`,
  cv = Ke.a`
  text-decoration: none;
  &:hover {
    color: #5167ff;
  }
`,
  uv = Ke.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    margin-bottom: 12px;
  }
`,
  dv = () => {
    const [n, t] = V.useState(
      document.documentElement.classList.contains("dark"),
    );
    V.useEffect(() => {
      const a = new MutationObserver((i) => {
        i.forEach((c) => {
          c.target === document.documentElement &&
            c.attributeName === "class" &&
            t(document.documentElement.classList.contains("dark"));
        });
      });
      return (
        a.observe(document.documentElement, {
          attributes: !0,
          attributeFilter: ["class"],
        }),
        () => a.disconnect()
      );
    }, []);
    const o = { mode: n ? "dark" : "light" };
    return W.jsx(om, {
      theme: o,
      children: W.jsx(Zb, {
        children: W.jsxs(Jb, {
          children: [
            W.jsx(ev, {
              children: W.jsxs(tv, {
                children: [
                  W.jsx(uv, { children: W.jsx(Db, { isDark: n }) }),
                  Yb.map(({ title: a, links: i }) =>
                    W.jsxs(
                      nv,
                      {
                        children: [
                          W.jsx(rv, { children: a }),
                          i.map(({ href: c, text: d, Icon: h }) =>
                            W.jsxs(
                              ov,
                              {
                                href: c,
                                children: [
                                  W.jsx(h, { isDark: n }),
                                  W.jsx("span", { children: d }),
                                ],
                              },
                              d,
                            ),
                          ),
                        ],
                      },
                      a,
                    ),
                  ),
                ],
              }),
            }),
            W.jsx(av, {
              children: W.jsxs(iv, {
                children: [
                  W.jsxs(sv, {
                    children: [
                      W.jsx(cv, {
                        href: "https://legal.alchemy.com/#contract-kduihkaqm",
                        children: "Terms & Conditions",
                      }),
                      W.jsxs("span", {
                        children: [
                          "© ",
                          new Date().getFullYear(),
                          " Alchemy Insights, Inc",
                        ],
                      }),
                    ],
                  }),
                  W.jsx(lv, { children: W.jsx(Vb, {}) }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
  },
  fv = "modulepreload",
  pv = function (n) {
    return "/" + n;
  },
  Ep = {},
  Ia = function (t, o, a) {
    let i = Promise.resolve();
    if (o && o.length > 0) {
      let d = function (m) {
        return Promise.all(
          m.map((b) =>
            Promise.resolve(b).then(
              (v) => ({ status: "fulfilled", value: v }),
              (v) => ({ status: "rejected", reason: v }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const h = document.querySelector("meta[property=csp-nonce]"),
        f =
          (h == null ? void 0 : h.nonce) ||
          (h == null ? void 0 : h.getAttribute("nonce"));
      i = d(
        o.map((m) => {
          if (((m = pv(m)), m in Ep)) return;
          Ep[m] = !0;
          const b = m.endsWith(".css"),
            v = b ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${m}"]${v}`)) return;
          const y = document.createElement("link");
          if (
            ((y.rel = b ? "stylesheet" : fv),
            b || (y.as = "script"),
            (y.crossOrigin = ""),
            (y.href = m),
            f && y.setAttribute("nonce", f),
            document.head.appendChild(y),
            b)
          )
            return new Promise((x, S) => {
              y.addEventListener("load", x),
                y.addEventListener("error", () =>
                  S(new Error(`Unable to preload CSS for ${m}`)),
                );
            });
        }),
      );
    }
    function c(d) {
      const h = new Event("vite:preloadError", { cancelable: !0 });
      if (((h.payload = d), window.dispatchEvent(h), !h.defaultPrevented))
        throw d;
    }
    return i.then((d) => {
      for (const h of d || []) h.status === "rejected" && c(h.reason);
      return t().catch(c);
    });
  };
let it = class extends Error {
  constructor(t) {
    super(t), (this.name = "ShikiError");
  }
};
function hv(n) {
  return Dc(n);
}
function Dc(n) {
  return Array.isArray(n)
    ? mv(n)
    : n instanceof RegExp
      ? n
      : typeof n == "object"
        ? gv(n)
        : n;
}
function mv(n) {
  let t = [];
  for (let o = 0, a = n.length; o < a; o++) t[o] = Dc(n[o]);
  return t;
}
function gv(n) {
  let t = {};
  for (let o in n) t[o] = Dc(n[o]);
  return t;
}
function im(n, ...t) {
  return (
    t.forEach((o) => {
      for (let a in o) n[a] = o[a];
    }),
    n
  );
}
function sm(n) {
  const t = ~n.lastIndexOf("/") || ~n.lastIndexOf("\\");
  return t === 0
    ? n
    : ~t === n.length - 1
      ? sm(n.substring(0, n.length - 1))
      : n.substr(~t + 1);
}
var zl = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g,
  Ra = class {
    static hasCaptures(n) {
      return n === null ? !1 : ((zl.lastIndex = 0), zl.test(n));
    }
    static replaceCaptures(n, t, o) {
      return n.replace(zl, (a, i, c, d) => {
        let h = o[parseInt(i || c, 10)];
        if (h) {
          let f = t.substring(h.start, h.end);
          for (; f[0] === "."; ) f = f.substring(1);
          switch (d) {
            case "downcase":
              return f.toLowerCase();
            case "upcase":
              return f.toUpperCase();
            default:
              return f;
          }
        } else return a;
      });
    }
  };
function lm(n, t) {
  return n < t ? -1 : n > t ? 1 : 0;
}
function cm(n, t) {
  if (n === null && t === null) return 0;
  if (!n) return -1;
  if (!t) return 1;
  let o = n.length,
    a = t.length;
  if (o === a) {
    for (let i = 0; i < o; i++) {
      let c = lm(n[i], t[i]);
      if (c !== 0) return c;
    }
    return 0;
  }
  return o - a;
}
function Tp(n) {
  return !!(
    /^#[0-9a-f]{6}$/i.test(n) ||
    /^#[0-9a-f]{8}$/i.test(n) ||
    /^#[0-9a-f]{3}$/i.test(n) ||
    /^#[0-9a-f]{4}$/i.test(n)
  );
}
function um(n) {
  return n.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
}
var dm = class {
    constructor(n) {
      L(this, "cache", new Map());
      this.fn = n;
    }
    get(n) {
      if (this.cache.has(n)) return this.cache.get(n);
      const t = this.fn(n);
      return this.cache.set(n, t), t;
    }
  },
  ii = class {
    constructor(n, t, o) {
      L(this, "_cachedMatchRoot", new dm((n) => this._root.match(n)));
      (this._colorMap = n), (this._defaults = t), (this._root = o);
    }
    static createFromRawTheme(n, t) {
      return this.createFromParsedTheme(yv(n), t);
    }
    static createFromParsedTheme(n, t) {
      return xv(n, t);
    }
    getColorMap() {
      return this._colorMap.getColorMap();
    }
    getDefaults() {
      return this._defaults;
    }
    match(n) {
      if (n === null) return this._defaults;
      const t = n.scopeName,
        a = this._cachedMatchRoot
          .get(t)
          .find((i) => bv(n.parent, i.parentScopes));
      return a ? new fm(a.fontStyle, a.foreground, a.background) : null;
    }
  },
  Vl = class Ka {
    constructor(t, o) {
      (this.parent = t), (this.scopeName = o);
    }
    static push(t, o) {
      for (const a of o) t = new Ka(t, a);
      return t;
    }
    static from(...t) {
      let o = null;
      for (let a = 0; a < t.length; a++) o = new Ka(o, t[a]);
      return o;
    }
    push(t) {
      return new Ka(this, t);
    }
    getSegments() {
      let t = this;
      const o = [];
      for (; t; ) o.push(t.scopeName), (t = t.parent);
      return o.reverse(), o;
    }
    toString() {
      return this.getSegments().join(" ");
    }
    extends(t) {
      return this === t
        ? !0
        : this.parent === null
          ? !1
          : this.parent.extends(t);
    }
    getExtensionIfDefined(t) {
      const o = [];
      let a = this;
      for (; a && a !== t; ) o.push(a.scopeName), (a = a.parent);
      return a === t ? o.reverse() : void 0;
    }
  };
function bv(n, t) {
  if (t.length === 0) return !0;
  for (let o = 0; o < t.length; o++) {
    let a = t[o],
      i = !1;
    if (a === ">") {
      if (o === t.length - 1) return !1;
      (a = t[++o]), (i = !0);
    }
    for (; n && !vv(n.scopeName, a); ) {
      if (i) return !1;
      n = n.parent;
    }
    if (!n) return !1;
    n = n.parent;
  }
  return !0;
}
function vv(n, t) {
  return t === n || (n.startsWith(t) && n[t.length] === ".");
}
var fm = class {
  constructor(n, t, o) {
    (this.fontStyle = n), (this.foregroundId = t), (this.backgroundId = o);
  }
};
function yv(n) {
  if (!n) return [];
  if (!n.settings || !Array.isArray(n.settings)) return [];
  let t = n.settings,
    o = [],
    a = 0;
  for (let i = 0, c = t.length; i < c; i++) {
    let d = t[i];
    if (!d.settings) continue;
    let h;
    if (typeof d.scope == "string") {
      let v = d.scope;
      (v = v.replace(/^[,]+/, "")),
        (v = v.replace(/[,]+$/, "")),
        (h = v.split(","));
    } else Array.isArray(d.scope) ? (h = d.scope) : (h = [""]);
    let f = -1;
    if (typeof d.settings.fontStyle == "string") {
      f = 0;
      let v = d.settings.fontStyle.split(" ");
      for (let y = 0, x = v.length; y < x; y++)
        switch (v[y]) {
          case "italic":
            f = f | 1;
            break;
          case "bold":
            f = f | 2;
            break;
          case "underline":
            f = f | 4;
            break;
          case "strikethrough":
            f = f | 8;
            break;
        }
    }
    let m = null;
    typeof d.settings.foreground == "string" &&
      Tp(d.settings.foreground) &&
      (m = d.settings.foreground);
    let b = null;
    typeof d.settings.background == "string" &&
      Tp(d.settings.background) &&
      (b = d.settings.background);
    for (let v = 0, y = h.length; v < y; v++) {
      let S = h[v].trim().split(" "),
        O = S[S.length - 1],
        k = null;
      S.length > 1 && ((k = S.slice(0, S.length - 1)), k.reverse()),
        (o[a++] = new _v(O, k, i, f, m, b));
    }
  }
  return o;
}
var _v = class {
    constructor(n, t, o, a, i, c) {
      (this.scope = n),
        (this.parentScopes = t),
        (this.index = o),
        (this.fontStyle = a),
        (this.foreground = i),
        (this.background = c);
    }
  },
  gt = ((n) => (
    (n[(n.NotSet = -1)] = "NotSet"),
    (n[(n.None = 0)] = "None"),
    (n[(n.Italic = 1)] = "Italic"),
    (n[(n.Bold = 2)] = "Bold"),
    (n[(n.Underline = 4)] = "Underline"),
    (n[(n.Strikethrough = 8)] = "Strikethrough"),
    n
  ))(gt || {});
function xv(n, t) {
  n.sort((f, m) => {
    let b = lm(f.scope, m.scope);
    return b !== 0 || ((b = cm(f.parentScopes, m.parentScopes)), b !== 0)
      ? b
      : f.index - m.index;
  });
  let o = 0,
    a = "#000000",
    i = "#ffffff";
  for (; n.length >= 1 && n[0].scope === ""; ) {
    let f = n.shift();
    f.fontStyle !== -1 && (o = f.fontStyle),
      f.foreground !== null && (a = f.foreground),
      f.background !== null && (i = f.background);
  }
  let c = new Sv(t),
    d = new fm(o, c.getId(a), c.getId(i)),
    h = new wv(new pc(0, null, -1, 0, 0), []);
  for (let f = 0, m = n.length; f < m; f++) {
    let b = n[f];
    h.insert(
      0,
      b.scope,
      b.parentScopes,
      b.fontStyle,
      c.getId(b.foreground),
      c.getId(b.background),
    );
  }
  return new ii(c, d, h);
}
var Sv = class {
    constructor(n) {
      L(this, "_isFrozen");
      L(this, "_lastColorId");
      L(this, "_id2color");
      L(this, "_color2id");
      if (
        ((this._lastColorId = 0),
        (this._id2color = []),
        (this._color2id = Object.create(null)),
        Array.isArray(n))
      ) {
        this._isFrozen = !0;
        for (let t = 0, o = n.length; t < o; t++)
          (this._color2id[n[t]] = t), (this._id2color[t] = n[t]);
      } else this._isFrozen = !1;
    }
    getId(n) {
      if (n === null) return 0;
      n = n.toUpperCase();
      let t = this._color2id[n];
      if (t) return t;
      if (this._isFrozen) throw new Error(`Missing color in color map - ${n}`);
      return (
        (t = ++this._lastColorId),
        (this._color2id[n] = t),
        (this._id2color[t] = n),
        t
      );
    }
    getColorMap() {
      return this._id2color.slice(0);
    }
  },
  Cv = Object.freeze([]),
  pc = class pm {
    constructor(t, o, a, i, c) {
      L(this, "scopeDepth");
      L(this, "parentScopes");
      L(this, "fontStyle");
      L(this, "foreground");
      L(this, "background");
      (this.scopeDepth = t),
        (this.parentScopes = o || Cv),
        (this.fontStyle = a),
        (this.foreground = i),
        (this.background = c);
    }
    clone() {
      return new pm(
        this.scopeDepth,
        this.parentScopes,
        this.fontStyle,
        this.foreground,
        this.background,
      );
    }
    static cloneArr(t) {
      let o = [];
      for (let a = 0, i = t.length; a < i; a++) o[a] = t[a].clone();
      return o;
    }
    acceptOverwrite(t, o, a, i) {
      this.scopeDepth > t
        ? console.log("how did this happen?")
        : (this.scopeDepth = t),
        o !== -1 && (this.fontStyle = o),
        a !== 0 && (this.foreground = a),
        i !== 0 && (this.background = i);
    }
  },
  wv = class hc {
    constructor(t, o = [], a = {}) {
      L(this, "_rulesWithParentScopes");
      (this._mainRule = t),
        (this._children = a),
        (this._rulesWithParentScopes = o);
    }
    static _cmpBySpecificity(t, o) {
      if (t.scopeDepth !== o.scopeDepth) return o.scopeDepth - t.scopeDepth;
      let a = 0,
        i = 0;
      for (
        ;
        t.parentScopes[a] === ">" && a++,
          o.parentScopes[i] === ">" && i++,
          !(a >= t.parentScopes.length || i >= o.parentScopes.length);

      ) {
        const c = o.parentScopes[i].length - t.parentScopes[a].length;
        if (c !== 0) return c;
        a++, i++;
      }
      return o.parentScopes.length - t.parentScopes.length;
    }
    match(t) {
      if (t !== "") {
        let a = t.indexOf("."),
          i,
          c;
        if (
          (a === -1
            ? ((i = t), (c = ""))
            : ((i = t.substring(0, a)), (c = t.substring(a + 1))),
          this._children.hasOwnProperty(i))
        )
          return this._children[i].match(c);
      }
      const o = this._rulesWithParentScopes.concat(this._mainRule);
      return o.sort(hc._cmpBySpecificity), o;
    }
    insert(t, o, a, i, c, d) {
      if (o === "") {
        this._doInsertHere(t, a, i, c, d);
        return;
      }
      let h = o.indexOf("."),
        f,
        m;
      h === -1
        ? ((f = o), (m = ""))
        : ((f = o.substring(0, h)), (m = o.substring(h + 1)));
      let b;
      this._children.hasOwnProperty(f)
        ? (b = this._children[f])
        : ((b = new hc(
            this._mainRule.clone(),
            pc.cloneArr(this._rulesWithParentScopes),
          )),
          (this._children[f] = b)),
        b.insert(t + 1, m, a, i, c, d);
    }
    _doInsertHere(t, o, a, i, c) {
      if (o === null) {
        this._mainRule.acceptOverwrite(t, a, i, c);
        return;
      }
      for (let d = 0, h = this._rulesWithParentScopes.length; d < h; d++) {
        let f = this._rulesWithParentScopes[d];
        if (cm(f.parentScopes, o) === 0) {
          f.acceptOverwrite(t, a, i, c);
          return;
        }
      }
      a === -1 && (a = this._mainRule.fontStyle),
        i === 0 && (i = this._mainRule.foreground),
        c === 0 && (c = this._mainRule.background),
        this._rulesWithParentScopes.push(new pc(t, o, a, i, c));
    }
  },
  sr = class Ut {
    static toBinaryStr(t) {
      return t.toString(2).padStart(32, "0");
    }
    static print(t) {
      const o = Ut.getLanguageId(t),
        a = Ut.getTokenType(t),
        i = Ut.getFontStyle(t),
        c = Ut.getForeground(t),
        d = Ut.getBackground(t);
      console.log({
        languageId: o,
        tokenType: a,
        fontStyle: i,
        foreground: c,
        background: d,
      });
    }
    static getLanguageId(t) {
      return (t & 255) >>> 0;
    }
    static getTokenType(t) {
      return (t & 768) >>> 8;
    }
    static containsBalancedBrackets(t) {
      return (t & 1024) !== 0;
    }
    static getFontStyle(t) {
      return (t & 30720) >>> 11;
    }
    static getForeground(t) {
      return (t & 16744448) >>> 15;
    }
    static getBackground(t) {
      return (t & 4278190080) >>> 24;
    }
    static set(t, o, a, i, c, d, h) {
      let f = Ut.getLanguageId(t),
        m = Ut.getTokenType(t),
        b = Ut.containsBalancedBrackets(t) ? 1 : 0,
        v = Ut.getFontStyle(t),
        y = Ut.getForeground(t),
        x = Ut.getBackground(t);
      return (
        o !== 0 && (f = o),
        a !== 8 && (m = a),
        i !== null && (b = i ? 1 : 0),
        c !== -1 && (v = c),
        d !== 0 && (y = d),
        h !== 0 && (x = h),
        ((f << 0) |
          (m << 8) |
          (b << 10) |
          (v << 11) |
          (y << 15) |
          (x << 24)) >>>
          0
      );
    }
  };
function si(n, t) {
  const o = [],
    a = kv(n);
  let i = a.next();
  for (; i !== null; ) {
    let f = 0;
    if (i.length === 2 && i.charAt(1) === ":") {
      switch (i.charAt(0)) {
        case "R":
          f = 1;
          break;
        case "L":
          f = -1;
          break;
        default:
          console.log(`Unknown priority ${i} in scope selector`);
      }
      i = a.next();
    }
    let m = d();
    if ((o.push({ matcher: m, priority: f }), i !== ",")) break;
    i = a.next();
  }
  return o;
  function c() {
    if (i === "-") {
      i = a.next();
      const f = c();
      return (m) => !!f && !f(m);
    }
    if (i === "(") {
      i = a.next();
      const f = h();
      return i === ")" && (i = a.next()), f;
    }
    if (Fp(i)) {
      const f = [];
      do f.push(i), (i = a.next());
      while (Fp(i));
      return (m) => t(f, m);
    }
    return null;
  }
  function d() {
    const f = [];
    let m = c();
    for (; m; ) f.push(m), (m = c());
    return (b) => f.every((v) => v(b));
  }
  function h() {
    const f = [];
    let m = d();
    for (; m && (f.push(m), i === "|" || i === ","); ) {
      do i = a.next();
      while (i === "|" || i === ",");
      m = d();
    }
    return (b) => f.some((v) => v(b));
  }
}
function Fp(n) {
  return !!n && !!n.match(/[\w\.:]+/);
}
function kv(n) {
  let t = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g,
    o = t.exec(n);
  return {
    next: () => {
      if (!o) return null;
      const a = o[0];
      return (o = t.exec(n)), a;
    },
  };
}
function hm(n) {
  typeof n.dispose == "function" && n.dispose();
}
var lo = class {
    constructor(n) {
      this.scopeName = n;
    }
    toKey() {
      return this.scopeName;
    }
  },
  Pv = class {
    constructor(n, t) {
      (this.scopeName = n), (this.ruleName = t);
    }
    toKey() {
      return `${this.scopeName}#${this.ruleName}`;
    }
  },
  Ov = class {
    constructor() {
      L(this, "_references", []);
      L(this, "_seenReferenceKeys", new Set());
      L(this, "visitedRule", new Set());
    }
    get references() {
      return this._references;
    }
    add(n) {
      const t = n.toKey();
      this._seenReferenceKeys.has(t) ||
        (this._seenReferenceKeys.add(t), this._references.push(n));
    }
  },
  Ev = class {
    constructor(n, t) {
      L(this, "seenFullScopeRequests", new Set());
      L(this, "seenPartialScopeRequests", new Set());
      L(this, "Q");
      (this.repo = n),
        (this.initialScopeName = t),
        this.seenFullScopeRequests.add(this.initialScopeName),
        (this.Q = [new lo(this.initialScopeName)]);
    }
    processQueue() {
      const n = this.Q;
      this.Q = [];
      const t = new Ov();
      for (const o of n) Tv(o, this.initialScopeName, this.repo, t);
      for (const o of t.references)
        if (o instanceof lo) {
          if (this.seenFullScopeRequests.has(o.scopeName)) continue;
          this.seenFullScopeRequests.add(o.scopeName), this.Q.push(o);
        } else {
          if (
            this.seenFullScopeRequests.has(o.scopeName) ||
            this.seenPartialScopeRequests.has(o.toKey())
          )
            continue;
          this.seenPartialScopeRequests.add(o.toKey()), this.Q.push(o);
        }
    }
  };
function Tv(n, t, o, a) {
  const i = o.lookup(n.scopeName);
  if (!i) {
    if (n.scopeName === t) throw new Error(`No grammar provided for <${t}>`);
    return;
  }
  const c = o.lookup(t);
  n instanceof lo
    ? Xa({ baseGrammar: c, selfGrammar: i }, a)
    : mc(
        n.ruleName,
        { baseGrammar: c, selfGrammar: i, repository: i.repository },
        a,
      );
  const d = o.injections(n.scopeName);
  if (d) for (const h of d) a.add(new lo(h));
}
function mc(n, t, o) {
  if (t.repository && t.repository[n]) {
    const a = t.repository[n];
    li([a], t, o);
  }
}
function Xa(n, t) {
  n.selfGrammar.patterns &&
    Array.isArray(n.selfGrammar.patterns) &&
    li(
      n.selfGrammar.patterns,
      { ...n, repository: n.selfGrammar.repository },
      t,
    ),
    n.selfGrammar.injections &&
      li(
        Object.values(n.selfGrammar.injections),
        { ...n, repository: n.selfGrammar.repository },
        t,
      );
}
function li(n, t, o) {
  for (const a of n) {
    if (o.visitedRule.has(a)) continue;
    o.visitedRule.add(a);
    const i = a.repository ? im({}, t.repository, a.repository) : t.repository;
    Array.isArray(a.patterns) && li(a.patterns, { ...t, repository: i }, o);
    const c = a.include;
    if (!c) continue;
    const d = mm(c);
    switch (d.kind) {
      case 0:
        Xa({ ...t, selfGrammar: t.baseGrammar }, o);
        break;
      case 1:
        Xa(t, o);
        break;
      case 2:
        mc(d.ruleName, { ...t, repository: i }, o);
        break;
      case 3:
      case 4:
        const h =
          d.scopeName === t.selfGrammar.scopeName
            ? t.selfGrammar
            : d.scopeName === t.baseGrammar.scopeName
              ? t.baseGrammar
              : void 0;
        if (h) {
          const f = {
            baseGrammar: t.baseGrammar,
            selfGrammar: h,
            repository: i,
          };
          d.kind === 4 ? mc(d.ruleName, f, o) : Xa(f, o);
        } else
          d.kind === 4
            ? o.add(new Pv(d.scopeName, d.ruleName))
            : o.add(new lo(d.scopeName));
        break;
    }
  }
}
var Fv = class {
    constructor() {
      L(this, "kind", 0);
    }
  },
  jv = class {
    constructor() {
      L(this, "kind", 1);
    }
  },
  Mv = class {
    constructor(n) {
      L(this, "kind", 2);
      this.ruleName = n;
    }
  },
  Iv = class {
    constructor(n) {
      L(this, "kind", 3);
      this.scopeName = n;
    }
  },
  Rv = class {
    constructor(n, t) {
      L(this, "kind", 4);
      (this.scopeName = n), (this.ruleName = t);
    }
  };
function mm(n) {
  if (n === "$base") return new Fv();
  if (n === "$self") return new jv();
  const t = n.indexOf("#");
  if (t === -1) return new Iv(n);
  if (t === 0) return new Mv(n.substring(1));
  {
    const o = n.substring(0, t),
      a = n.substring(t + 1);
    return new Rv(o, a);
  }
}
var Nv = /\\(\d+)/,
  jp = /\\(\d+)/g,
  Lv = -1,
  gm = -2;
var vo = class {
    constructor(n, t, o, a) {
      L(this, "$location");
      L(this, "id");
      L(this, "_nameIsCapturing");
      L(this, "_name");
      L(this, "_contentNameIsCapturing");
      L(this, "_contentName");
      (this.$location = n),
        (this.id = t),
        (this._name = o || null),
        (this._nameIsCapturing = Ra.hasCaptures(this._name)),
        (this._contentName = a || null),
        (this._contentNameIsCapturing = Ra.hasCaptures(this._contentName));
    }
    get debugName() {
      const n = this.$location
        ? `${sm(this.$location.filename)}:${this.$location.line}`
        : "unknown";
      return `${this.constructor.name}#${this.id} @ ${n}`;
    }
    getName(n, t) {
      return !this._nameIsCapturing ||
        this._name === null ||
        n === null ||
        t === null
        ? this._name
        : Ra.replaceCaptures(this._name, n, t);
    }
    getContentName(n, t) {
      return !this._contentNameIsCapturing || this._contentName === null
        ? this._contentName
        : Ra.replaceCaptures(this._contentName, n, t);
    }
  },
  Bv = class extends vo {
    constructor(t, o, a, i, c) {
      super(t, o, a, i);
      L(this, "retokenizeCapturedWithRuleId");
      this.retokenizeCapturedWithRuleId = c;
    }
    dispose() {}
    collectPatterns(t, o) {
      throw new Error("Not supported!");
    }
    compile(t, o) {
      throw new Error("Not supported!");
    }
    compileAG(t, o, a, i) {
      throw new Error("Not supported!");
    }
  },
  $v = class extends vo {
    constructor(t, o, a, i, c) {
      super(t, o, a, null);
      L(this, "_match");
      L(this, "captures");
      L(this, "_cachedCompiledPatterns");
      (this._match = new co(i, this.id)),
        (this.captures = c),
        (this._cachedCompiledPatterns = null);
    }
    dispose() {
      this._cachedCompiledPatterns &&
        (this._cachedCompiledPatterns.dispose(),
        (this._cachedCompiledPatterns = null));
    }
    get debugMatchRegExp() {
      return `${this._match.source}`;
    }
    collectPatterns(t, o) {
      o.push(this._match);
    }
    compile(t, o) {
      return this._getCachedCompiledPatterns(t).compile(t);
    }
    compileAG(t, o, a, i) {
      return this._getCachedCompiledPatterns(t).compileAG(t, a, i);
    }
    _getCachedCompiledPatterns(t) {
      return (
        this._cachedCompiledPatterns ||
          ((this._cachedCompiledPatterns = new uo()),
          this.collectPatterns(t, this._cachedCompiledPatterns)),
        this._cachedCompiledPatterns
      );
    }
  },
  Mp = class extends vo {
    constructor(t, o, a, i, c) {
      super(t, o, a, i);
      L(this, "hasMissingPatterns");
      L(this, "patterns");
      L(this, "_cachedCompiledPatterns");
      (this.patterns = c.patterns),
        (this.hasMissingPatterns = c.hasMissingPatterns),
        (this._cachedCompiledPatterns = null);
    }
    dispose() {
      this._cachedCompiledPatterns &&
        (this._cachedCompiledPatterns.dispose(),
        (this._cachedCompiledPatterns = null));
    }
    collectPatterns(t, o) {
      for (const a of this.patterns) t.getRule(a).collectPatterns(t, o);
    }
    compile(t, o) {
      return this._getCachedCompiledPatterns(t).compile(t);
    }
    compileAG(t, o, a, i) {
      return this._getCachedCompiledPatterns(t).compileAG(t, a, i);
    }
    _getCachedCompiledPatterns(t) {
      return (
        this._cachedCompiledPatterns ||
          ((this._cachedCompiledPatterns = new uo()),
          this.collectPatterns(t, this._cachedCompiledPatterns)),
        this._cachedCompiledPatterns
      );
    }
  },
  gc = class extends vo {
    constructor(t, o, a, i, c, d, h, f, m, b) {
      super(t, o, a, i);
      L(this, "_begin");
      L(this, "beginCaptures");
      L(this, "_end");
      L(this, "endHasBackReferences");
      L(this, "endCaptures");
      L(this, "applyEndPatternLast");
      L(this, "hasMissingPatterns");
      L(this, "patterns");
      L(this, "_cachedCompiledPatterns");
      (this._begin = new co(c, this.id)),
        (this.beginCaptures = d),
        (this._end = new co(h || "￿", -1)),
        (this.endHasBackReferences = this._end.hasBackReferences),
        (this.endCaptures = f),
        (this.applyEndPatternLast = m || !1),
        (this.patterns = b.patterns),
        (this.hasMissingPatterns = b.hasMissingPatterns),
        (this._cachedCompiledPatterns = null);
    }
    dispose() {
      this._cachedCompiledPatterns &&
        (this._cachedCompiledPatterns.dispose(),
        (this._cachedCompiledPatterns = null));
    }
    get debugBeginRegExp() {
      return `${this._begin.source}`;
    }
    get debugEndRegExp() {
      return `${this._end.source}`;
    }
    getEndWithResolvedBackReferences(t, o) {
      return this._end.resolveBackReferences(t, o);
    }
    collectPatterns(t, o) {
      o.push(this._begin);
    }
    compile(t, o) {
      return this._getCachedCompiledPatterns(t, o).compile(t);
    }
    compileAG(t, o, a, i) {
      return this._getCachedCompiledPatterns(t, o).compileAG(t, a, i);
    }
    _getCachedCompiledPatterns(t, o) {
      if (!this._cachedCompiledPatterns) {
        this._cachedCompiledPatterns = new uo();
        for (const a of this.patterns)
          t.getRule(a).collectPatterns(t, this._cachedCompiledPatterns);
        this.applyEndPatternLast
          ? this._cachedCompiledPatterns.push(
              this._end.hasBackReferences ? this._end.clone() : this._end,
            )
          : this._cachedCompiledPatterns.unshift(
              this._end.hasBackReferences ? this._end.clone() : this._end,
            );
      }
      return (
        this._end.hasBackReferences &&
          (this.applyEndPatternLast
            ? this._cachedCompiledPatterns.setSource(
                this._cachedCompiledPatterns.length() - 1,
                o,
              )
            : this._cachedCompiledPatterns.setSource(0, o)),
        this._cachedCompiledPatterns
      );
    }
  },
  ci = class extends vo {
    constructor(t, o, a, i, c, d, h, f, m) {
      super(t, o, a, i);
      L(this, "_begin");
      L(this, "beginCaptures");
      L(this, "whileCaptures");
      L(this, "_while");
      L(this, "whileHasBackReferences");
      L(this, "hasMissingPatterns");
      L(this, "patterns");
      L(this, "_cachedCompiledPatterns");
      L(this, "_cachedCompiledWhilePatterns");
      (this._begin = new co(c, this.id)),
        (this.beginCaptures = d),
        (this.whileCaptures = f),
        (this._while = new co(h, gm)),
        (this.whileHasBackReferences = this._while.hasBackReferences),
        (this.patterns = m.patterns),
        (this.hasMissingPatterns = m.hasMissingPatterns),
        (this._cachedCompiledPatterns = null),
        (this._cachedCompiledWhilePatterns = null);
    }
    dispose() {
      this._cachedCompiledPatterns &&
        (this._cachedCompiledPatterns.dispose(),
        (this._cachedCompiledPatterns = null)),
        this._cachedCompiledWhilePatterns &&
          (this._cachedCompiledWhilePatterns.dispose(),
          (this._cachedCompiledWhilePatterns = null));
    }
    get debugBeginRegExp() {
      return `${this._begin.source}`;
    }
    get debugWhileRegExp() {
      return `${this._while.source}`;
    }
    getWhileWithResolvedBackReferences(t, o) {
      return this._while.resolveBackReferences(t, o);
    }
    collectPatterns(t, o) {
      o.push(this._begin);
    }
    compile(t, o) {
      return this._getCachedCompiledPatterns(t).compile(t);
    }
    compileAG(t, o, a, i) {
      return this._getCachedCompiledPatterns(t).compileAG(t, a, i);
    }
    _getCachedCompiledPatterns(t) {
      if (!this._cachedCompiledPatterns) {
        this._cachedCompiledPatterns = new uo();
        for (const o of this.patterns)
          t.getRule(o).collectPatterns(t, this._cachedCompiledPatterns);
      }
      return this._cachedCompiledPatterns;
    }
    compileWhile(t, o) {
      return this._getCachedCompiledWhilePatterns(t, o).compile(t);
    }
    compileWhileAG(t, o, a, i) {
      return this._getCachedCompiledWhilePatterns(t, o).compileAG(t, a, i);
    }
    _getCachedCompiledWhilePatterns(t, o) {
      return (
        this._cachedCompiledWhilePatterns ||
          ((this._cachedCompiledWhilePatterns = new uo()),
          this._cachedCompiledWhilePatterns.push(
            this._while.hasBackReferences ? this._while.clone() : this._while,
          )),
        this._while.hasBackReferences &&
          this._cachedCompiledWhilePatterns.setSource(0, o || "￿"),
        this._cachedCompiledWhilePatterns
      );
    }
  },
  bm = class ht {
    static createCaptureRule(t, o, a, i, c) {
      return t.registerRule((d) => new Bv(o, d, a, i, c));
    }
    static getCompiledRuleId(t, o, a) {
      return (
        t.id ||
          o.registerRule((i) => {
            if (((t.id = i), t.match))
              return new $v(
                t.$vscodeTextmateLocation,
                t.id,
                t.name,
                t.match,
                ht._compileCaptures(t.captures, o, a),
              );
            if (typeof t.begin > "u") {
              t.repository && (a = im({}, a, t.repository));
              let c = t.patterns;
              return (
                typeof c > "u" && t.include && (c = [{ include: t.include }]),
                new Mp(
                  t.$vscodeTextmateLocation,
                  t.id,
                  t.name,
                  t.contentName,
                  ht._compilePatterns(c, o, a),
                )
              );
            }
            return t.while
              ? new ci(
                  t.$vscodeTextmateLocation,
                  t.id,
                  t.name,
                  t.contentName,
                  t.begin,
                  ht._compileCaptures(t.beginCaptures || t.captures, o, a),
                  t.while,
                  ht._compileCaptures(t.whileCaptures || t.captures, o, a),
                  ht._compilePatterns(t.patterns, o, a),
                )
              : new gc(
                  t.$vscodeTextmateLocation,
                  t.id,
                  t.name,
                  t.contentName,
                  t.begin,
                  ht._compileCaptures(t.beginCaptures || t.captures, o, a),
                  t.end,
                  ht._compileCaptures(t.endCaptures || t.captures, o, a),
                  t.applyEndPatternLast,
                  ht._compilePatterns(t.patterns, o, a),
                );
          }),
        t.id
      );
    }
    static _compileCaptures(t, o, a) {
      let i = [];
      if (t) {
        let c = 0;
        for (const d in t) {
          if (d === "$vscodeTextmateLocation") continue;
          const h = parseInt(d, 10);
          h > c && (c = h);
        }
        for (let d = 0; d <= c; d++) i[d] = null;
        for (const d in t) {
          if (d === "$vscodeTextmateLocation") continue;
          const h = parseInt(d, 10);
          let f = 0;
          t[d].patterns && (f = ht.getCompiledRuleId(t[d], o, a)),
            (i[h] = ht.createCaptureRule(
              o,
              t[d].$vscodeTextmateLocation,
              t[d].name,
              t[d].contentName,
              f,
            ));
        }
      }
      return i;
    }
    static _compilePatterns(t, o, a) {
      let i = [];
      if (t)
        for (let c = 0, d = t.length; c < d; c++) {
          const h = t[c];
          let f = -1;
          if (h.include) {
            const m = mm(h.include);
            switch (m.kind) {
              case 0:
              case 1:
                f = ht.getCompiledRuleId(a[h.include], o, a);
                break;
              case 2:
                let b = a[m.ruleName];
                b && (f = ht.getCompiledRuleId(b, o, a));
                break;
              case 3:
              case 4:
                const v = m.scopeName,
                  y = m.kind === 4 ? m.ruleName : null,
                  x = o.getExternalGrammar(v, a);
                if (x)
                  if (y) {
                    let S = x.repository[y];
                    S && (f = ht.getCompiledRuleId(S, o, x.repository));
                  } else
                    f = ht.getCompiledRuleId(
                      x.repository.$self,
                      o,
                      x.repository,
                    );
                break;
            }
          } else f = ht.getCompiledRuleId(h, o, a);
          if (f !== -1) {
            const m = o.getRule(f);
            let b = !1;
            if (
              ((m instanceof Mp || m instanceof gc || m instanceof ci) &&
                m.hasMissingPatterns &&
                m.patterns.length === 0 &&
                (b = !0),
              b)
            )
              continue;
            i.push(f);
          }
        }
      return {
        patterns: i,
        hasMissingPatterns: (t ? t.length : 0) !== i.length,
      };
    }
  },
  co = class vm {
    constructor(t, o) {
      L(this, "source");
      L(this, "ruleId");
      L(this, "hasAnchor");
      L(this, "hasBackReferences");
      L(this, "_anchorCache");
      if (t && typeof t == "string") {
        const a = t.length;
        let i = 0,
          c = [],
          d = !1;
        for (let h = 0; h < a; h++)
          if (t.charAt(h) === "\\" && h + 1 < a) {
            const m = t.charAt(h + 1);
            m === "z"
              ? (c.push(t.substring(i, h)),
                c.push("$(?!\\n)(?<!\\n)"),
                (i = h + 2))
              : (m === "A" || m === "G") && (d = !0),
              h++;
          }
        (this.hasAnchor = d),
          i === 0
            ? (this.source = t)
            : (c.push(t.substring(i, a)), (this.source = c.join("")));
      } else (this.hasAnchor = !1), (this.source = t);
      this.hasAnchor
        ? (this._anchorCache = this._buildAnchorCache())
        : (this._anchorCache = null),
        (this.ruleId = o),
        typeof this.source == "string"
          ? (this.hasBackReferences = Nv.test(this.source))
          : (this.hasBackReferences = !1);
    }
    clone() {
      return new vm(this.source, this.ruleId);
    }
    setSource(t) {
      this.source !== t &&
        ((this.source = t),
        this.hasAnchor && (this._anchorCache = this._buildAnchorCache()));
    }
    resolveBackReferences(t, o) {
      if (typeof this.source != "string")
        throw new Error(
          "This method should only be called if the source is a string",
        );
      let a = o.map((i) => t.substring(i.start, i.end));
      return (
        (jp.lastIndex = 0),
        this.source.replace(jp, (i, c) => um(a[parseInt(c, 10)] || ""))
      );
    }
    _buildAnchorCache() {
      if (typeof this.source != "string")
        throw new Error(
          "This method should only be called if the source is a string",
        );
      let t = [],
        o = [],
        a = [],
        i = [],
        c,
        d,
        h,
        f;
      for (c = 0, d = this.source.length; c < d; c++)
        (h = this.source.charAt(c)),
          (t[c] = h),
          (o[c] = h),
          (a[c] = h),
          (i[c] = h),
          h === "\\" &&
            c + 1 < d &&
            ((f = this.source.charAt(c + 1)),
            f === "A"
              ? ((t[c + 1] = "￿"),
                (o[c + 1] = "￿"),
                (a[c + 1] = "A"),
                (i[c + 1] = "A"))
              : f === "G"
                ? ((t[c + 1] = "￿"),
                  (o[c + 1] = "G"),
                  (a[c + 1] = "￿"),
                  (i[c + 1] = "G"))
                : ((t[c + 1] = f),
                  (o[c + 1] = f),
                  (a[c + 1] = f),
                  (i[c + 1] = f)),
            c++);
      return {
        A0_G0: t.join(""),
        A0_G1: o.join(""),
        A1_G0: a.join(""),
        A1_G1: i.join(""),
      };
    }
    resolveAnchors(t, o) {
      return !this.hasAnchor ||
        !this._anchorCache ||
        typeof this.source != "string"
        ? this.source
        : t
          ? o
            ? this._anchorCache.A1_G1
            : this._anchorCache.A1_G0
          : o
            ? this._anchorCache.A0_G1
            : this._anchorCache.A0_G0;
    }
  },
  uo = class {
    constructor() {
      L(this, "_items");
      L(this, "_hasAnchors");
      L(this, "_cached");
      L(this, "_anchorCache");
      (this._items = []),
        (this._hasAnchors = !1),
        (this._cached = null),
        (this._anchorCache = {
          A0_G0: null,
          A0_G1: null,
          A1_G0: null,
          A1_G1: null,
        });
    }
    dispose() {
      this._disposeCaches();
    }
    _disposeCaches() {
      this._cached && (this._cached.dispose(), (this._cached = null)),
        this._anchorCache.A0_G0 &&
          (this._anchorCache.A0_G0.dispose(), (this._anchorCache.A0_G0 = null)),
        this._anchorCache.A0_G1 &&
          (this._anchorCache.A0_G1.dispose(), (this._anchorCache.A0_G1 = null)),
        this._anchorCache.A1_G0 &&
          (this._anchorCache.A1_G0.dispose(), (this._anchorCache.A1_G0 = null)),
        this._anchorCache.A1_G1 &&
          (this._anchorCache.A1_G1.dispose(), (this._anchorCache.A1_G1 = null));
    }
    push(n) {
      this._items.push(n), (this._hasAnchors = this._hasAnchors || n.hasAnchor);
    }
    unshift(n) {
      this._items.unshift(n),
        (this._hasAnchors = this._hasAnchors || n.hasAnchor);
    }
    length() {
      return this._items.length;
    }
    setSource(n, t) {
      this._items[n].source !== t &&
        (this._disposeCaches(), this._items[n].setSource(t));
    }
    compile(n) {
      if (!this._cached) {
        let t = this._items.map((o) => o.source);
        this._cached = new Ip(
          n,
          t,
          this._items.map((o) => o.ruleId),
        );
      }
      return this._cached;
    }
    compileAG(n, t, o) {
      return this._hasAnchors
        ? t
          ? o
            ? (this._anchorCache.A1_G1 ||
                (this._anchorCache.A1_G1 = this._resolveAnchors(n, t, o)),
              this._anchorCache.A1_G1)
            : (this._anchorCache.A1_G0 ||
                (this._anchorCache.A1_G0 = this._resolveAnchors(n, t, o)),
              this._anchorCache.A1_G0)
          : o
            ? (this._anchorCache.A0_G1 ||
                (this._anchorCache.A0_G1 = this._resolveAnchors(n, t, o)),
              this._anchorCache.A0_G1)
            : (this._anchorCache.A0_G0 ||
                (this._anchorCache.A0_G0 = this._resolveAnchors(n, t, o)),
              this._anchorCache.A0_G0)
        : this.compile(n);
    }
    _resolveAnchors(n, t, o) {
      let a = this._items.map((i) => i.resolveAnchors(t, o));
      return new Ip(
        n,
        a,
        this._items.map((i) => i.ruleId),
      );
    }
  },
  Ip = class {
    constructor(n, t, o) {
      L(this, "scanner");
      (this.regExps = t),
        (this.rules = o),
        (this.scanner = n.createOnigScanner(t));
    }
    dispose() {
      typeof this.scanner.dispose == "function" && this.scanner.dispose();
    }
    toString() {
      const n = [];
      for (let t = 0, o = this.rules.length; t < o; t++)
        n.push("   - " + this.rules[t] + ": " + this.regExps[t]);
      return n.join(`
`);
    }
    findNextMatchSync(n, t, o) {
      const a = this.scanner.findNextMatchSync(n, t, o);
      return a
        ? { ruleId: this.rules[a.index], captureIndices: a.captureIndices }
        : null;
    }
  },
  Ul = class {
    constructor(n, t) {
      (this.languageId = n), (this.tokenType = t);
    }
  },
  Cn,
  Av =
    ((Cn = class {
      constructor(t, o) {
        L(this, "_defaultAttributes");
        L(this, "_embeddedLanguagesMatcher");
        L(
          this,
          "_getBasicScopeAttributes",
          new dm((t) => {
            const o = this._scopeToLanguage(t),
              a = this._toStandardTokenType(t);
            return new Ul(o, a);
          }),
        );
        (this._defaultAttributes = new Ul(t, 8)),
          (this._embeddedLanguagesMatcher = new Dv(Object.entries(o || {})));
      }
      getDefaultAttributes() {
        return this._defaultAttributes;
      }
      getBasicScopeAttributes(t) {
        return t === null
          ? Cn._NULL_SCOPE_METADATA
          : this._getBasicScopeAttributes.get(t);
      }
      _scopeToLanguage(t) {
        return this._embeddedLanguagesMatcher.match(t) || 0;
      }
      _toStandardTokenType(t) {
        const o = t.match(Cn.STANDARD_TOKEN_TYPE_REGEXP);
        if (!o) return 8;
        switch (o[1]) {
          case "comment":
            return 1;
          case "string":
            return 2;
          case "regex":
            return 3;
          case "meta.embedded":
            return 0;
        }
        throw new Error("Unexpected match for standard token type!");
      }
    }),
    L(Cn, "_NULL_SCOPE_METADATA", new Ul(0, 0)),
    L(
      Cn,
      "STANDARD_TOKEN_TYPE_REGEXP",
      /\b(comment|string|regex|meta\.embedded)\b/,
    ),
    Cn),
  Dv = class {
    constructor(n) {
      L(this, "values");
      L(this, "scopesRegExp");
      if (n.length === 0) (this.values = null), (this.scopesRegExp = null);
      else {
        this.values = new Map(n);
        const t = n.map(([o, a]) => um(o));
        t.sort(),
          t.reverse(),
          (this.scopesRegExp = new RegExp(`^((${t.join(")|(")}))($|\\.)`, ""));
      }
    }
    match(n) {
      if (!this.scopesRegExp) return;
      const t = n.match(this.scopesRegExp);
      if (t) return this.values.get(t[1]);
    }
  },
  Rp = class {
    constructor(n, t) {
      (this.stack = n), (this.stoppedEarly = t);
    }
  };
function ym(n, t, o, a, i, c, d, h) {
  const f = t.content.length;
  let m = !1,
    b = -1;
  if (d) {
    const x = Hv(n, t, o, a, i, c);
    (i = x.stack), (a = x.linePos), (o = x.isFirstLine), (b = x.anchorPosition);
  }
  const v = Date.now();
  for (; !m; ) {
    if (h !== 0 && Date.now() - v > h) return new Rp(i, !0);
    y();
  }
  return new Rp(i, !1);
  function y() {
    const x = zv(n, t, o, a, i, b);
    if (!x) {
      c.produce(i, f), (m = !0);
      return;
    }
    const S = x.captureIndices,
      O = x.matchedRuleId,
      k = S && S.length > 0 ? S[0].end > a : !1;
    if (O === Lv) {
      const P = i.getRule(n);
      c.produce(i, S[0].start),
        (i = i.withContentNameScopesList(i.nameScopesList)),
        ro(n, t, o, i, c, P.endCaptures, S),
        c.produce(i, S[0].end);
      const T = i;
      if (
        ((i = i.parent), (b = T.getAnchorPos()), !k && T.getEnterPos() === a)
      ) {
        (i = T), c.produce(i, f), (m = !0);
        return;
      }
    } else {
      const P = n.getRule(O);
      c.produce(i, S[0].start);
      const T = i,
        I = P.getName(t.content, S),
        B = i.contentNameScopesList.pushAttributed(I, n);
      if (
        ((i = i.push(O, a, b, S[0].end === f, null, B, B)), P instanceof gc)
      ) {
        const F = P;
        ro(n, t, o, i, c, F.beginCaptures, S),
          c.produce(i, S[0].end),
          (b = S[0].end);
        const $ = F.getContentName(t.content, S),
          N = B.pushAttributed($, n);
        if (
          ((i = i.withContentNameScopesList(N)),
          F.endHasBackReferences &&
            (i = i.withEndRule(
              F.getEndWithResolvedBackReferences(t.content, S),
            )),
          !k && T.hasSameRuleAs(i))
        ) {
          (i = i.pop()), c.produce(i, f), (m = !0);
          return;
        }
      } else if (P instanceof ci) {
        const F = P;
        ro(n, t, o, i, c, F.beginCaptures, S),
          c.produce(i, S[0].end),
          (b = S[0].end);
        const $ = F.getContentName(t.content, S),
          N = B.pushAttributed($, n);
        if (
          ((i = i.withContentNameScopesList(N)),
          F.whileHasBackReferences &&
            (i = i.withEndRule(
              F.getWhileWithResolvedBackReferences(t.content, S),
            )),
          !k && T.hasSameRuleAs(i))
        ) {
          (i = i.pop()), c.produce(i, f), (m = !0);
          return;
        }
      } else if (
        (ro(n, t, o, i, c, P.captures, S),
        c.produce(i, S[0].end),
        (i = i.pop()),
        !k)
      ) {
        (i = i.safePop()), c.produce(i, f), (m = !0);
        return;
      }
    }
    S[0].end > a && ((a = S[0].end), (o = !1));
  }
}
function Hv(n, t, o, a, i, c) {
  let d = i.beginRuleCapturedEOL ? 0 : -1;
  const h = [];
  for (let f = i; f; f = f.pop()) {
    const m = f.getRule(n);
    m instanceof ci && h.push({ rule: m, stack: f });
  }
  for (let f = h.pop(); f; f = h.pop()) {
    const { ruleScanner: m, findOptions: b } = Gv(
        f.rule,
        n,
        f.stack.endRule,
        o,
        a === d,
      ),
      v = m.findNextMatchSync(t, a, b);
    if (v) {
      if (v.ruleId !== gm) {
        i = f.stack.pop();
        break;
      }
      v.captureIndices &&
        v.captureIndices.length &&
        (c.produce(f.stack, v.captureIndices[0].start),
        ro(n, t, o, f.stack, c, f.rule.whileCaptures, v.captureIndices),
        c.produce(f.stack, v.captureIndices[0].end),
        (d = v.captureIndices[0].end),
        v.captureIndices[0].end > a &&
          ((a = v.captureIndices[0].end), (o = !1)));
    } else {
      i = f.stack.pop();
      break;
    }
  }
  return { stack: i, linePos: a, anchorPosition: d, isFirstLine: o };
}
function zv(n, t, o, a, i, c) {
  const d = Vv(n, t, o, a, i, c),
    h = n.getInjections();
  if (h.length === 0) return d;
  const f = Uv(h, n, t, o, a, i, c);
  if (!f) return d;
  if (!d) return f;
  const m = d.captureIndices[0].start,
    b = f.captureIndices[0].start;
  return b < m || (f.priorityMatch && b === m) ? f : d;
}
function Vv(n, t, o, a, i, c) {
  const d = i.getRule(n),
    { ruleScanner: h, findOptions: f } = _m(d, n, i.endRule, o, a === c),
    m = h.findNextMatchSync(t, a, f);
  return m
    ? { captureIndices: m.captureIndices, matchedRuleId: m.ruleId }
    : null;
}
function Uv(n, t, o, a, i, c, d) {
  let h = Number.MAX_VALUE,
    f = null,
    m,
    b = 0;
  const v = c.contentNameScopesList.getScopeNames();
  for (let y = 0, x = n.length; y < x; y++) {
    const S = n[y];
    if (!S.matcher(v)) continue;
    const O = t.getRule(S.ruleId),
      { ruleScanner: k, findOptions: P } = _m(O, t, null, a, i === d),
      T = k.findNextMatchSync(o, i, P);
    if (!T) continue;
    const I = T.captureIndices[0].start;
    if (
      !(I >= h) &&
      ((h = I),
      (f = T.captureIndices),
      (m = T.ruleId),
      (b = S.priority),
      h === i)
    )
      break;
  }
  return f
    ? { priorityMatch: b === -1, captureIndices: f, matchedRuleId: m }
    : null;
}
function _m(n, t, o, a, i) {
  return { ruleScanner: n.compileAG(t, o, a, i), findOptions: 0 };
}
function Gv(n, t, o, a, i) {
  return { ruleScanner: n.compileWhileAG(t, o, a, i), findOptions: 0 };
}
function ro(n, t, o, a, i, c, d) {
  if (c.length === 0) return;
  const h = t.content,
    f = Math.min(c.length, d.length),
    m = [],
    b = d[0].end;
  for (let v = 0; v < f; v++) {
    const y = c[v];
    if (y === null) continue;
    const x = d[v];
    if (x.length === 0) continue;
    if (x.start > b) break;
    for (; m.length > 0 && m[m.length - 1].endPos <= x.start; )
      i.produceFromScopes(m[m.length - 1].scopes, m[m.length - 1].endPos),
        m.pop();
    if (
      (m.length > 0
        ? i.produceFromScopes(m[m.length - 1].scopes, x.start)
        : i.produce(a, x.start),
      y.retokenizeCapturedWithRuleId)
    ) {
      const O = y.getName(h, d),
        k = a.contentNameScopesList.pushAttributed(O, n),
        P = y.getContentName(h, d),
        T = k.pushAttributed(P, n),
        I = a.push(y.retokenizeCapturedWithRuleId, x.start, -1, !1, null, k, T),
        B = n.createOnigString(h.substring(0, x.end));
      ym(n, B, o && x.start === 0, x.start, I, i, !1, 0), hm(B);
      continue;
    }
    const S = y.getName(h, d);
    if (S !== null) {
      const k = (
        m.length > 0 ? m[m.length - 1].scopes : a.contentNameScopesList
      ).pushAttributed(S, n);
      m.push(new qv(k, x.end));
    }
  }
  for (; m.length > 0; )
    i.produceFromScopes(m[m.length - 1].scopes, m[m.length - 1].endPos),
      m.pop();
}
var qv = class {
  constructor(n, t) {
    L(this, "scopes");
    L(this, "endPos");
    (this.scopes = n), (this.endPos = t);
  }
};
function Wv(n, t, o, a, i, c, d, h) {
  return new Xv(n, t, o, a, i, c, d, h);
}
function Np(n, t, o, a, i) {
  const c = si(t, ui),
    d = bm.getCompiledRuleId(o, a, i.repository);
  for (const h of c)
    n.push({
      debugSelector: t,
      matcher: h.matcher,
      ruleId: d,
      grammar: i,
      priority: h.priority,
    });
}
function ui(n, t) {
  if (t.length < n.length) return !1;
  let o = 0;
  return n.every((a) => {
    for (let i = o; i < t.length; i++) if (Kv(t[i], a)) return (o = i + 1), !0;
    return !1;
  });
}
function Kv(n, t) {
  if (!n) return !1;
  if (n === t) return !0;
  const o = t.length;
  return n.length > o && n.substr(0, o) === t && n[o] === ".";
}
var Xv = class {
  constructor(n, t, o, a, i, c, d, h) {
    L(this, "_rootId");
    L(this, "_lastRuleId");
    L(this, "_ruleId2desc");
    L(this, "_includedGrammars");
    L(this, "_grammarRepository");
    L(this, "_grammar");
    L(this, "_injections");
    L(this, "_basicScopeAttributesProvider");
    L(this, "_tokenTypeMatchers");
    if (
      ((this._rootScopeName = n),
      (this.balancedBracketSelectors = c),
      (this._onigLib = h),
      (this._basicScopeAttributesProvider = new Av(o, a)),
      (this._rootId = -1),
      (this._lastRuleId = 0),
      (this._ruleId2desc = [null]),
      (this._includedGrammars = {}),
      (this._grammarRepository = d),
      (this._grammar = Lp(t, null)),
      (this._injections = null),
      (this._tokenTypeMatchers = []),
      i)
    )
      for (const f of Object.keys(i)) {
        const m = si(f, ui);
        for (const b of m)
          this._tokenTypeMatchers.push({ matcher: b.matcher, type: i[f] });
      }
  }
  get themeProvider() {
    return this._grammarRepository;
  }
  dispose() {
    for (const n of this._ruleId2desc) n && n.dispose();
  }
  createOnigScanner(n) {
    return this._onigLib.createOnigScanner(n);
  }
  createOnigString(n) {
    return this._onigLib.createOnigString(n);
  }
  getMetadataForScope(n) {
    return this._basicScopeAttributesProvider.getBasicScopeAttributes(n);
  }
  _collectInjections() {
    const n = {
        lookup: (i) =>
          i === this._rootScopeName
            ? this._grammar
            : this.getExternalGrammar(i),
        injections: (i) => this._grammarRepository.injections(i),
      },
      t = [],
      o = this._rootScopeName,
      a = n.lookup(o);
    if (a) {
      const i = a.injections;
      if (i) for (let d in i) Np(t, d, i[d], this, a);
      const c = this._grammarRepository.injections(o);
      c &&
        c.forEach((d) => {
          const h = this.getExternalGrammar(d);
          if (h) {
            const f = h.injectionSelector;
            f && Np(t, f, h, this, h);
          }
        });
    }
    return t.sort((i, c) => i.priority - c.priority), t;
  }
  getInjections() {
    return (
      this._injections === null &&
        (this._injections = this._collectInjections()),
      this._injections
    );
  }
  registerRule(n) {
    const t = ++this._lastRuleId,
      o = n(t);
    return (this._ruleId2desc[t] = o), o;
  }
  getRule(n) {
    return this._ruleId2desc[n];
  }
  getExternalGrammar(n, t) {
    if (this._includedGrammars[n]) return this._includedGrammars[n];
    if (this._grammarRepository) {
      const o = this._grammarRepository.lookup(n);
      if (o)
        return (
          (this._includedGrammars[n] = Lp(o, t && t.$base)),
          this._includedGrammars[n]
        );
    }
  }
  tokenizeLine(n, t, o = 0) {
    const a = this._tokenize(n, t, !1, o);
    return {
      tokens: a.lineTokens.getResult(a.ruleStack, a.lineLength),
      ruleStack: a.ruleStack,
      stoppedEarly: a.stoppedEarly,
    };
  }
  tokenizeLine2(n, t, o = 0) {
    const a = this._tokenize(n, t, !0, o);
    return {
      tokens: a.lineTokens.getBinaryResult(a.ruleStack, a.lineLength),
      ruleStack: a.ruleStack,
      stoppedEarly: a.stoppedEarly,
    };
  }
  _tokenize(n, t, o, a) {
    this._rootId === -1 &&
      ((this._rootId = bm.getCompiledRuleId(
        this._grammar.repository.$self,
        this,
        this._grammar.repository,
      )),
      this.getInjections());
    let i;
    if (!t || t === bc.NULL) {
      i = !0;
      const m = this._basicScopeAttributesProvider.getDefaultAttributes(),
        b = this.themeProvider.getDefaults(),
        v = sr.set(
          0,
          m.languageId,
          m.tokenType,
          null,
          b.fontStyle,
          b.foregroundId,
          b.backgroundId,
        ),
        y = this.getRule(this._rootId).getName(null, null);
      let x;
      y
        ? (x = io.createRootAndLookUpScopeName(y, v, this))
        : (x = io.createRoot("unknown", v)),
        (t = new bc(null, this._rootId, -1, -1, !1, null, x, x));
    } else (i = !1), t.reset();
    n =
      n +
      `
`;
    const c = this.createOnigString(n),
      d = c.content.length,
      h = new Yv(o, n, this._tokenTypeMatchers, this.balancedBracketSelectors),
      f = ym(this, c, i, 0, t, h, !0, a);
    return (
      hm(c),
      {
        lineLength: d,
        lineTokens: h,
        ruleStack: f.stack,
        stoppedEarly: f.stoppedEarly,
      }
    );
  }
};
function Lp(n, t) {
  return (
    (n = hv(n)),
    (n.repository = n.repository || {}),
    (n.repository.$self = {
      $vscodeTextmateLocation: n.$vscodeTextmateLocation,
      patterns: n.patterns,
      name: n.scopeName,
    }),
    (n.repository.$base = t || n.repository.$self),
    n
  );
}
var io = class ln {
    constructor(t, o, a) {
      (this.parent = t), (this.scopePath = o), (this.tokenAttributes = a);
    }
    static fromExtension(t, o) {
      let a = t,
        i = (t == null ? void 0 : t.scopePath) ?? null;
      for (const c of o)
        (i = Vl.push(i, c.scopeNames)),
          (a = new ln(a, i, c.encodedTokenAttributes));
      return a;
    }
    static createRoot(t, o) {
      return new ln(null, new Vl(null, t), o);
    }
    static createRootAndLookUpScopeName(t, o, a) {
      const i = a.getMetadataForScope(t),
        c = new Vl(null, t),
        d = a.themeProvider.themeMatch(c),
        h = ln.mergeAttributes(o, i, d);
      return new ln(null, c, h);
    }
    get scopeName() {
      return this.scopePath.scopeName;
    }
    toString() {
      return this.getScopeNames().join(" ");
    }
    equals(t) {
      return ln.equals(this, t);
    }
    static equals(t, o) {
      do {
        if (t === o || (!t && !o)) return !0;
        if (
          !t ||
          !o ||
          t.scopeName !== o.scopeName ||
          t.tokenAttributes !== o.tokenAttributes
        )
          return !1;
        (t = t.parent), (o = o.parent);
      } while (!0);
    }
    static mergeAttributes(t, o, a) {
      let i = -1,
        c = 0,
        d = 0;
      return (
        a !== null &&
          ((i = a.fontStyle), (c = a.foregroundId), (d = a.backgroundId)),
        sr.set(t, o.languageId, o.tokenType, null, i, c, d)
      );
    }
    pushAttributed(t, o) {
      if (t === null) return this;
      if (t.indexOf(" ") === -1) return ln._pushAttributed(this, t, o);
      const a = t.split(/ /g);
      let i = this;
      for (const c of a) i = ln._pushAttributed(i, c, o);
      return i;
    }
    static _pushAttributed(t, o, a) {
      const i = a.getMetadataForScope(o),
        c = t.scopePath.push(o),
        d = a.themeProvider.themeMatch(c),
        h = ln.mergeAttributes(t.tokenAttributes, i, d);
      return new ln(t, c, h);
    }
    getScopeNames() {
      return this.scopePath.getSegments();
    }
    getExtensionIfDefined(t) {
      var i;
      const o = [];
      let a = this;
      for (; a && a !== t; )
        o.push({
          encodedTokenAttributes: a.tokenAttributes,
          scopeNames: a.scopePath.getExtensionIfDefined(
            ((i = a.parent) == null ? void 0 : i.scopePath) ?? null,
          ),
        }),
          (a = a.parent);
      return a === t ? o.reverse() : void 0;
    }
  },
  Gt,
  bc =
    ((Gt = class {
      constructor(t, o, a, i, c, d, h, f) {
        L(this, "_stackElementBrand");
        L(this, "_enterPos");
        L(this, "_anchorPos");
        L(this, "depth");
        (this.parent = t),
          (this.ruleId = o),
          (this.beginRuleCapturedEOL = c),
          (this.endRule = d),
          (this.nameScopesList = h),
          (this.contentNameScopesList = f),
          (this.depth = this.parent ? this.parent.depth + 1 : 1),
          (this._enterPos = a),
          (this._anchorPos = i);
      }
      equals(t) {
        return t === null ? !1 : Gt._equals(this, t);
      }
      static _equals(t, o) {
        return t === o
          ? !0
          : this._structuralEquals(t, o)
            ? io.equals(t.contentNameScopesList, o.contentNameScopesList)
            : !1;
      }
      static _structuralEquals(t, o) {
        do {
          if (t === o || (!t && !o)) return !0;
          if (
            !t ||
            !o ||
            t.depth !== o.depth ||
            t.ruleId !== o.ruleId ||
            t.endRule !== o.endRule
          )
            return !1;
          (t = t.parent), (o = o.parent);
        } while (!0);
      }
      clone() {
        return this;
      }
      static _reset(t) {
        for (; t; ) (t._enterPos = -1), (t._anchorPos = -1), (t = t.parent);
      }
      reset() {
        Gt._reset(this);
      }
      pop() {
        return this.parent;
      }
      safePop() {
        return this.parent ? this.parent : this;
      }
      push(t, o, a, i, c, d, h) {
        return new Gt(this, t, o, a, i, c, d, h);
      }
      getEnterPos() {
        return this._enterPos;
      }
      getAnchorPos() {
        return this._anchorPos;
      }
      getRule(t) {
        return t.getRule(this.ruleId);
      }
      toString() {
        const t = [];
        return this._writeString(t, 0), "[" + t.join(",") + "]";
      }
      _writeString(t, o) {
        var a, i;
        return (
          this.parent && (o = this.parent._writeString(t, o)),
          (t[o++] =
            `(${this.ruleId}, ${(a = this.nameScopesList) == null ? void 0 : a.toString()}, ${(i = this.contentNameScopesList) == null ? void 0 : i.toString()})`),
          o
        );
      }
      withContentNameScopesList(t) {
        return this.contentNameScopesList === t
          ? this
          : this.parent.push(
              this.ruleId,
              this._enterPos,
              this._anchorPos,
              this.beginRuleCapturedEOL,
              this.endRule,
              this.nameScopesList,
              t,
            );
      }
      withEndRule(t) {
        return this.endRule === t
          ? this
          : new Gt(
              this.parent,
              this.ruleId,
              this._enterPos,
              this._anchorPos,
              this.beginRuleCapturedEOL,
              t,
              this.nameScopesList,
              this.contentNameScopesList,
            );
      }
      hasSameRuleAs(t) {
        let o = this;
        for (; o && o._enterPos === t._enterPos; ) {
          if (o.ruleId === t.ruleId) return !0;
          o = o.parent;
        }
        return !1;
      }
      toStateStackFrame() {
        var t, o, a;
        return {
          ruleId: this.ruleId,
          beginRuleCapturedEOL: this.beginRuleCapturedEOL,
          endRule: this.endRule,
          nameScopesList:
            ((o = this.nameScopesList) == null
              ? void 0
              : o.getExtensionIfDefined(
                  ((t = this.parent) == null ? void 0 : t.nameScopesList) ??
                    null,
                )) ?? [],
          contentNameScopesList:
            ((a = this.contentNameScopesList) == null
              ? void 0
              : a.getExtensionIfDefined(this.nameScopesList)) ?? [],
        };
      }
      static pushFrame(t, o) {
        const a = io.fromExtension(
          (t == null ? void 0 : t.nameScopesList) ?? null,
          o.nameScopesList,
        );
        return new Gt(
          t,
          o.ruleId,
          o.enterPos ?? -1,
          o.anchorPos ?? -1,
          o.beginRuleCapturedEOL,
          o.endRule,
          a,
          io.fromExtension(a, o.contentNameScopesList),
        );
      }
    }),
    L(Gt, "NULL", new Gt(null, 0, 0, 0, !1, null, null, null)),
    Gt),
  Qv = class {
    constructor(n, t) {
      L(this, "balancedBracketScopes");
      L(this, "unbalancedBracketScopes");
      L(this, "allowAny", !1);
      (this.balancedBracketScopes = n.flatMap((o) =>
        o === "*"
          ? ((this.allowAny = !0), [])
          : si(o, ui).map((a) => a.matcher),
      )),
        (this.unbalancedBracketScopes = t.flatMap((o) =>
          si(o, ui).map((a) => a.matcher),
        ));
    }
    get matchesAlways() {
      return this.allowAny && this.unbalancedBracketScopes.length === 0;
    }
    get matchesNever() {
      return this.balancedBracketScopes.length === 0 && !this.allowAny;
    }
    match(n) {
      for (const t of this.unbalancedBracketScopes) if (t(n)) return !1;
      for (const t of this.balancedBracketScopes) if (t(n)) return !0;
      return this.allowAny;
    }
  },
  Yv = class {
    constructor(n, t, o, a) {
      L(this, "_emitBinaryTokens");
      L(this, "_lineText");
      L(this, "_tokens");
      L(this, "_binaryTokens");
      L(this, "_lastTokenEndIndex");
      L(this, "_tokenTypeOverrides");
      (this.balancedBracketSelectors = a),
        (this._emitBinaryTokens = n),
        (this._tokenTypeOverrides = o),
        (this._lineText = null),
        (this._tokens = []),
        (this._binaryTokens = []),
        (this._lastTokenEndIndex = 0);
    }
    produce(n, t) {
      this.produceFromScopes(n.contentNameScopesList, t);
    }
    produceFromScopes(n, t) {
      var a;
      if (this._lastTokenEndIndex >= t) return;
      if (this._emitBinaryTokens) {
        let i = (n == null ? void 0 : n.tokenAttributes) ?? 0,
          c = !1;
        if (
          ((a = this.balancedBracketSelectors) != null &&
            a.matchesAlways &&
            (c = !0),
          this._tokenTypeOverrides.length > 0 ||
            (this.balancedBracketSelectors &&
              !this.balancedBracketSelectors.matchesAlways &&
              !this.balancedBracketSelectors.matchesNever))
        ) {
          const d = (n == null ? void 0 : n.getScopeNames()) ?? [];
          for (const h of this._tokenTypeOverrides)
            h.matcher(d) && (i = sr.set(i, 0, h.type, null, -1, 0, 0));
          this.balancedBracketSelectors &&
            (c = this.balancedBracketSelectors.match(d));
        }
        if (
          (c && (i = sr.set(i, 0, 8, c, -1, 0, 0)),
          this._binaryTokens.length > 0 &&
            this._binaryTokens[this._binaryTokens.length - 1] === i)
        ) {
          this._lastTokenEndIndex = t;
          return;
        }
        this._binaryTokens.push(this._lastTokenEndIndex),
          this._binaryTokens.push(i),
          (this._lastTokenEndIndex = t);
        return;
      }
      const o = (n == null ? void 0 : n.getScopeNames()) ?? [];
      this._tokens.push({
        startIndex: this._lastTokenEndIndex,
        endIndex: t,
        scopes: o,
      }),
        (this._lastTokenEndIndex = t);
    }
    getResult(n, t) {
      return (
        this._tokens.length > 0 &&
          this._tokens[this._tokens.length - 1].startIndex === t - 1 &&
          this._tokens.pop(),
        this._tokens.length === 0 &&
          ((this._lastTokenEndIndex = -1),
          this.produce(n, t),
          (this._tokens[this._tokens.length - 1].startIndex = 0)),
        this._tokens
      );
    }
    getBinaryResult(n, t) {
      this._binaryTokens.length > 0 &&
        this._binaryTokens[this._binaryTokens.length - 2] === t - 1 &&
        (this._binaryTokens.pop(), this._binaryTokens.pop()),
        this._binaryTokens.length === 0 &&
          ((this._lastTokenEndIndex = -1),
          this.produce(n, t),
          (this._binaryTokens[this._binaryTokens.length - 2] = 0));
      const o = new Uint32Array(this._binaryTokens.length);
      for (let a = 0, i = this._binaryTokens.length; a < i; a++)
        o[a] = this._binaryTokens[a];
      return o;
    }
  },
  Zv = class {
    constructor(n, t) {
      L(this, "_grammars", new Map());
      L(this, "_rawGrammars", new Map());
      L(this, "_injectionGrammars", new Map());
      L(this, "_theme");
      (this._onigLib = t), (this._theme = n);
    }
    dispose() {
      for (const n of this._grammars.values()) n.dispose();
    }
    setTheme(n) {
      this._theme = n;
    }
    getColorMap() {
      return this._theme.getColorMap();
    }
    addGrammar(n, t) {
      this._rawGrammars.set(n.scopeName, n),
        t && this._injectionGrammars.set(n.scopeName, t);
    }
    lookup(n) {
      return this._rawGrammars.get(n);
    }
    injections(n) {
      return this._injectionGrammars.get(n);
    }
    getDefaults() {
      return this._theme.getDefaults();
    }
    themeMatch(n) {
      return this._theme.match(n);
    }
    grammarForScopeName(n, t, o, a, i) {
      if (!this._grammars.has(n)) {
        let c = this._rawGrammars.get(n);
        if (!c) return null;
        this._grammars.set(n, Wv(n, c, t, o, a, i, this, this._onigLib));
      }
      return this._grammars.get(n);
    }
  },
  Jv = class {
    constructor(t) {
      L(this, "_options");
      L(this, "_syncRegistry");
      L(this, "_ensureGrammarCache");
      (this._options = t),
        (this._syncRegistry = new Zv(
          ii.createFromRawTheme(t.theme, t.colorMap),
          t.onigLib,
        )),
        (this._ensureGrammarCache = new Map());
    }
    dispose() {
      this._syncRegistry.dispose();
    }
    setTheme(t, o) {
      this._syncRegistry.setTheme(ii.createFromRawTheme(t, o));
    }
    getColorMap() {
      return this._syncRegistry.getColorMap();
    }
    loadGrammarWithEmbeddedLanguages(t, o, a) {
      return this.loadGrammarWithConfiguration(t, o, { embeddedLanguages: a });
    }
    loadGrammarWithConfiguration(t, o, a) {
      return this._loadGrammar(
        t,
        o,
        a.embeddedLanguages,
        a.tokenTypes,
        new Qv(
          a.balancedBracketSelectors || [],
          a.unbalancedBracketSelectors || [],
        ),
      );
    }
    loadGrammar(t) {
      return this._loadGrammar(t, 0, null, null, null);
    }
    _loadGrammar(t, o, a, i, c) {
      const d = new Ev(this._syncRegistry, t);
      for (; d.Q.length > 0; )
        d.Q.map((h) => this._loadSingleGrammar(h.scopeName)), d.processQueue();
      return this._grammarForScopeName(t, o, a, i, c);
    }
    _loadSingleGrammar(t) {
      this._ensureGrammarCache.has(t) ||
        (this._doLoadSingleGrammar(t), this._ensureGrammarCache.set(t, !0));
    }
    _doLoadSingleGrammar(t) {
      const o = this._options.loadGrammar(t);
      if (o) {
        const a =
          typeof this._options.getInjections == "function"
            ? this._options.getInjections(t)
            : void 0;
        this._syncRegistry.addGrammar(o, a);
      }
    }
    addGrammar(t, o = [], a = 0, i = null) {
      return (
        this._syncRegistry.addGrammar(t, o),
        this._grammarForScopeName(t.scopeName, a, i)
      );
    }
    _grammarForScopeName(t, o = 0, a = null, i = null, c = null) {
      return this._syncRegistry.grammarForScopeName(t, o, a, i, c);
    }
  },
  vc = bc.NULL;
const e5 = [
  "area",
  "base",
  "basefont",
  "bgsound",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "image",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
];
class yo {
  constructor(t, o, a) {
    (this.normal = o), (this.property = t), a && (this.space = a);
  }
}
yo.prototype.normal = {};
yo.prototype.property = {};
yo.prototype.space = void 0;
function xm(n, t) {
  const o = {},
    a = {};
  for (const i of n) Object.assign(o, i.property), Object.assign(a, i.normal);
  return new yo(o, a, t);
}
function yc(n) {
  return n.toLowerCase();
}
class Tt {
  constructor(t, o) {
    (this.attribute = o), (this.property = t);
  }
}
Tt.prototype.attribute = "";
Tt.prototype.booleanish = !1;
Tt.prototype.boolean = !1;
Tt.prototype.commaOrSpaceSeparated = !1;
Tt.prototype.commaSeparated = !1;
Tt.prototype.defined = !1;
Tt.prototype.mustUseProperty = !1;
Tt.prototype.number = !1;
Tt.prototype.overloadedBoolean = !1;
Tt.prototype.property = "";
Tt.prototype.spaceSeparated = !1;
Tt.prototype.space = void 0;
let t5 = 0;
const ve = S0(),
  Qe = S0(),
  _c = S0(),
  U = S0(),
  Le = S0(),
  er = S0(),
  Rt = S0();
function S0() {
  return 2 ** ++t5;
}
const xc = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: ve,
        booleanish: Qe,
        commaOrSpaceSeparated: Rt,
        commaSeparated: er,
        number: U,
        overloadedBoolean: _c,
        spaceSeparated: Le,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Gl = Object.keys(xc);
class Hc extends Tt {
  constructor(t, o, a, i) {
    let c = -1;
    if ((super(t, o), Bp(this, "space", i), typeof a == "number"))
      for (; ++c < Gl.length; ) {
        const d = Gl[c];
        Bp(this, Gl[c], (a & xc[d]) === xc[d]);
      }
  }
}
Hc.prototype.defined = !0;
function Bp(n, t, o) {
  o && (n[t] = o);
}
function ur(n) {
  const t = {},
    o = {};
  for (const [a, i] of Object.entries(n.properties)) {
    const c = new Hc(a, n.transform(n.attributes || {}, a), i, n.space);
    n.mustUseProperty &&
      n.mustUseProperty.includes(a) &&
      (c.mustUseProperty = !0),
      (t[a] = c),
      (o[yc(a)] = a),
      (o[yc(c.attribute)] = a);
  }
  return new yo(t, o, n.space);
}
const Sm = ur({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Qe,
    ariaAutoComplete: null,
    ariaBusy: Qe,
    ariaChecked: Qe,
    ariaColCount: U,
    ariaColIndex: U,
    ariaColSpan: U,
    ariaControls: Le,
    ariaCurrent: null,
    ariaDescribedBy: Le,
    ariaDetails: null,
    ariaDisabled: Qe,
    ariaDropEffect: Le,
    ariaErrorMessage: null,
    ariaExpanded: Qe,
    ariaFlowTo: Le,
    ariaGrabbed: Qe,
    ariaHasPopup: null,
    ariaHidden: Qe,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Le,
    ariaLevel: U,
    ariaLive: null,
    ariaModal: Qe,
    ariaMultiLine: Qe,
    ariaMultiSelectable: Qe,
    ariaOrientation: null,
    ariaOwns: Le,
    ariaPlaceholder: null,
    ariaPosInSet: U,
    ariaPressed: Qe,
    ariaReadOnly: Qe,
    ariaRelevant: null,
    ariaRequired: Qe,
    ariaRoleDescription: Le,
    ariaRowCount: U,
    ariaRowIndex: U,
    ariaRowSpan: U,
    ariaSelected: Qe,
    ariaSetSize: U,
    ariaSort: null,
    ariaValueMax: U,
    ariaValueMin: U,
    ariaValueNow: U,
    ariaValueText: null,
    role: null,
  },
  transform(n, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  },
});
function Cm(n, t) {
  return t in n ? n[t] : t;
}
function wm(n, t) {
  return Cm(n, t.toLowerCase());
}
const n5 = ur({
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv",
    },
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: er,
      acceptCharset: Le,
      accessKey: Le,
      action: null,
      allow: null,
      allowFullScreen: ve,
      allowPaymentRequest: ve,
      allowUserMedia: ve,
      alt: null,
      as: null,
      async: ve,
      autoCapitalize: null,
      autoComplete: Le,
      autoFocus: ve,
      autoPlay: ve,
      blocking: Le,
      capture: null,
      charSet: null,
      checked: ve,
      cite: null,
      className: Le,
      cols: U,
      colSpan: null,
      content: null,
      contentEditable: Qe,
      controls: ve,
      controlsList: Le,
      coords: U | er,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: ve,
      defer: ve,
      dir: null,
      dirName: null,
      disabled: ve,
      download: _c,
      draggable: Qe,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: ve,
      formTarget: null,
      headers: Le,
      height: U,
      hidden: _c,
      high: U,
      href: null,
      hrefLang: null,
      htmlFor: Le,
      httpEquiv: Le,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: ve,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: ve,
      itemId: null,
      itemProp: Le,
      itemRef: Le,
      itemScope: ve,
      itemType: Le,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: ve,
      low: U,
      manifest: null,
      max: null,
      maxLength: U,
      media: null,
      method: null,
      min: null,
      minLength: U,
      multiple: ve,
      muted: ve,
      name: null,
      nonce: null,
      noModule: ve,
      noValidate: ve,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: ve,
      optimum: U,
      pattern: null,
      ping: Le,
      placeholder: null,
      playsInline: ve,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: ve,
      referrerPolicy: null,
      rel: Le,
      required: ve,
      reversed: ve,
      rows: U,
      rowSpan: U,
      sandbox: Le,
      scope: null,
      scoped: ve,
      seamless: ve,
      selected: ve,
      shadowRootClonable: ve,
      shadowRootDelegatesFocus: ve,
      shadowRootMode: null,
      shape: null,
      size: U,
      sizes: null,
      slot: null,
      span: U,
      spellCheck: Qe,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: U,
      step: null,
      style: null,
      tabIndex: U,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: ve,
      useMap: null,
      value: Qe,
      width: U,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: Le,
      axis: null,
      background: null,
      bgColor: null,
      border: U,
      borderColor: null,
      bottomMargin: U,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: ve,
      declare: ve,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: U,
      leftMargin: U,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: U,
      marginWidth: U,
      noResize: ve,
      noHref: ve,
      noShade: ve,
      noWrap: ve,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: U,
      rules: null,
      scheme: null,
      scrolling: Qe,
      standby: null,
      summary: null,
      text: null,
      topMargin: U,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: U,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: ve,
      disableRemotePlayback: ve,
      prefix: null,
      property: null,
      results: U,
      security: null,
      unselectable: null,
    },
    space: "html",
    transform: wm,
  }),
  r5 = ur({
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      transformOrigin: "transform-origin",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin",
    },
    properties: {
      about: Rt,
      accentHeight: U,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: U,
      amplitude: U,
      arabicForm: null,
      ascent: U,
      attributeName: null,
      attributeType: null,
      azimuth: U,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: U,
      by: null,
      calcMode: null,
      capHeight: U,
      className: Le,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: U,
      diffuseConstant: U,
      direction: null,
      display: null,
      dur: null,
      divisor: U,
      dominantBaseline: null,
      download: ve,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: U,
      enableBackground: null,
      end: null,
      event: null,
      exponent: U,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: U,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: er,
      g2: er,
      glyphName: er,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: U,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: U,
      horizOriginX: U,
      horizOriginY: U,
      id: null,
      ideographic: U,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: U,
      k: U,
      k1: U,
      k2: U,
      k3: U,
      k4: U,
      kernelMatrix: Rt,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: U,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: U,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: U,
      overlineThickness: U,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: U,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: Le,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: U,
      pointsAtY: U,
      pointsAtZ: U,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: Rt,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: Rt,
      rev: Rt,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: Rt,
      requiredFeatures: Rt,
      requiredFonts: Rt,
      requiredFormats: Rt,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: U,
      specularExponent: U,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: U,
      strikethroughThickness: U,
      string: null,
      stroke: null,
      strokeDashArray: Rt,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: U,
      strokeOpacity: U,
      strokeWidth: null,
      style: null,
      surfaceScale: U,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: Rt,
      tabIndex: U,
      tableValues: null,
      target: null,
      targetX: U,
      targetY: U,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: Rt,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: U,
      underlineThickness: U,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: U,
      values: null,
      vAlphabetic: U,
      vMathematical: U,
      vectorEffect: null,
      vHanging: U,
      vIdeographic: U,
      version: null,
      vertAdvY: U,
      vertOriginX: U,
      vertOriginY: U,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: U,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: "svg",
    transform: Cm,
  }),
  km = ur({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
    space: "xlink",
    transform(n, t) {
      return "xlink:" + t.slice(5).toLowerCase();
    },
  }),
  Pm = ur({
    attributes: { xmlnsxlink: "xmlns:xlink" },
    properties: { xmlnsXLink: null, xmlns: null },
    space: "xmlns",
    transform: wm,
  }),
  Om = ur({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: "xml",
    transform(n, t) {
      return "xml:" + t.slice(3).toLowerCase();
    },
  }),
  o5 = /[A-Z]/g,
  $p = /-[a-z]/g,
  a5 = /^data[-\w.:]+$/i;
function i5(n, t) {
  const o = yc(t);
  let a = t,
    i = Tt;
  if (o in n.normal) return n.property[n.normal[o]];
  if (o.length > 4 && o.slice(0, 4) === "data" && a5.test(t)) {
    if (t.charAt(4) === "-") {
      const c = t.slice(5).replace($p, l5);
      a = "data" + c.charAt(0).toUpperCase() + c.slice(1);
    } else {
      const c = t.slice(4);
      if (!$p.test(c)) {
        let d = c.replace(o5, s5);
        d.charAt(0) !== "-" && (d = "-" + d), (t = "data" + d);
      }
    }
    i = Hc;
  }
  return new i(a, t);
}
function s5(n) {
  return "-" + n.toLowerCase();
}
function l5(n) {
  return n.charAt(1).toUpperCase();
}
const c5 = xm([Sm, n5, km, Pm, Om], "html"),
  Em = xm([Sm, r5, km, Pm, Om], "svg"),
  Ap = {}.hasOwnProperty;
function u5(n, t) {
  const o = t || {};
  function a(i, ...c) {
    let d = a.invalid;
    const h = a.handlers;
    if (i && Ap.call(i, n)) {
      const f = String(i[n]);
      d = Ap.call(h, f) ? h[f] : a.unknown;
    }
    if (d) return d.call(this, i, ...c);
  }
  return (
    (a.handlers = o.handlers || {}),
    (a.invalid = o.invalid),
    (a.unknown = o.unknown),
    a
  );
}
const d5 = /["&'<>`]/g,
  f5 = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  p5 = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
  h5 = /[|\\{}()[\]^$+*?.]/g,
  Dp = new WeakMap();
function m5(n, t) {
  if (
    ((n = n.replace(t.subset ? g5(t.subset) : d5, a)), t.subset || t.escapeOnly)
  )
    return n;
  return n.replace(f5, o).replace(p5, a);
  function o(i, c, d) {
    return t.format(
      (i.charCodeAt(0) - 55296) * 1024 + i.charCodeAt(1) - 56320 + 65536,
      d.charCodeAt(c + 2),
      t,
    );
  }
  function a(i, c, d) {
    return t.format(i.charCodeAt(0), d.charCodeAt(c + 1), t);
  }
}
function g5(n) {
  let t = Dp.get(n);
  return t || ((t = b5(n)), Dp.set(n, t)), t;
}
function b5(n) {
  const t = [];
  let o = -1;
  for (; ++o < n.length; ) t.push(n[o].replace(h5, "\\$&"));
  return new RegExp("(?:" + t.join("|") + ")", "g");
}
const v5 = /[\dA-Fa-f]/;
function y5(n, t, o) {
  const a = "&#x" + n.toString(16).toUpperCase();
  return o && t && !v5.test(String.fromCharCode(t)) ? a : a + ";";
}
const _5 = /\d/;
function x5(n, t, o) {
  const a = "&#" + String(n);
  return o && t && !_5.test(String.fromCharCode(t)) ? a : a + ";";
}
const S5 = [
    "AElig",
    "AMP",
    "Aacute",
    "Acirc",
    "Agrave",
    "Aring",
    "Atilde",
    "Auml",
    "COPY",
    "Ccedil",
    "ETH",
    "Eacute",
    "Ecirc",
    "Egrave",
    "Euml",
    "GT",
    "Iacute",
    "Icirc",
    "Igrave",
    "Iuml",
    "LT",
    "Ntilde",
    "Oacute",
    "Ocirc",
    "Ograve",
    "Oslash",
    "Otilde",
    "Ouml",
    "QUOT",
    "REG",
    "THORN",
    "Uacute",
    "Ucirc",
    "Ugrave",
    "Uuml",
    "Yacute",
    "aacute",
    "acirc",
    "acute",
    "aelig",
    "agrave",
    "amp",
    "aring",
    "atilde",
    "auml",
    "brvbar",
    "ccedil",
    "cedil",
    "cent",
    "copy",
    "curren",
    "deg",
    "divide",
    "eacute",
    "ecirc",
    "egrave",
    "eth",
    "euml",
    "frac12",
    "frac14",
    "frac34",
    "gt",
    "iacute",
    "icirc",
    "iexcl",
    "igrave",
    "iquest",
    "iuml",
    "laquo",
    "lt",
    "macr",
    "micro",
    "middot",
    "nbsp",
    "not",
    "ntilde",
    "oacute",
    "ocirc",
    "ograve",
    "ordf",
    "ordm",
    "oslash",
    "otilde",
    "ouml",
    "para",
    "plusmn",
    "pound",
    "quot",
    "raquo",
    "reg",
    "sect",
    "shy",
    "sup1",
    "sup2",
    "sup3",
    "szlig",
    "thorn",
    "times",
    "uacute",
    "ucirc",
    "ugrave",
    "uml",
    "uuml",
    "yacute",
    "yen",
    "yuml",
  ],
  ql = {
    nbsp: " ",
    iexcl: "¡",
    cent: "¢",
    pound: "£",
    curren: "¤",
    yen: "¥",
    brvbar: "¦",
    sect: "§",
    uml: "¨",
    copy: "©",
    ordf: "ª",
    laquo: "«",
    not: "¬",
    shy: "­",
    reg: "®",
    macr: "¯",
    deg: "°",
    plusmn: "±",
    sup2: "²",
    sup3: "³",
    acute: "´",
    micro: "µ",
    para: "¶",
    middot: "·",
    cedil: "¸",
    sup1: "¹",
    ordm: "º",
    raquo: "»",
    frac14: "¼",
    frac12: "½",
    frac34: "¾",
    iquest: "¿",
    Agrave: "À",
    Aacute: "Á",
    Acirc: "Â",
    Atilde: "Ã",
    Auml: "Ä",
    Aring: "Å",
    AElig: "Æ",
    Ccedil: "Ç",
    Egrave: "È",
    Eacute: "É",
    Ecirc: "Ê",
    Euml: "Ë",
    Igrave: "Ì",
    Iacute: "Í",
    Icirc: "Î",
    Iuml: "Ï",
    ETH: "Ð",
    Ntilde: "Ñ",
    Ograve: "Ò",
    Oacute: "Ó",
    Ocirc: "Ô",
    Otilde: "Õ",
    Ouml: "Ö",
    times: "×",
    Oslash: "Ø",
    Ugrave: "Ù",
    Uacute: "Ú",
    Ucirc: "Û",
    Uuml: "Ü",
    Yacute: "Ý",
    THORN: "Þ",
    szlig: "ß",
    agrave: "à",
    aacute: "á",
    acirc: "â",
    atilde: "ã",
    auml: "ä",
    aring: "å",
    aelig: "æ",
    ccedil: "ç",
    egrave: "è",
    eacute: "é",
    ecirc: "ê",
    euml: "ë",
    igrave: "ì",
    iacute: "í",
    icirc: "î",
    iuml: "ï",
    eth: "ð",
    ntilde: "ñ",
    ograve: "ò",
    oacute: "ó",
    ocirc: "ô",
    otilde: "õ",
    ouml: "ö",
    divide: "÷",
    oslash: "ø",
    ugrave: "ù",
    uacute: "ú",
    ucirc: "û",
    uuml: "ü",
    yacute: "ý",
    thorn: "þ",
    yuml: "ÿ",
    fnof: "ƒ",
    Alpha: "Α",
    Beta: "Β",
    Gamma: "Γ",
    Delta: "Δ",
    Epsilon: "Ε",
    Zeta: "Ζ",
    Eta: "Η",
    Theta: "Θ",
    Iota: "Ι",
    Kappa: "Κ",
    Lambda: "Λ",
    Mu: "Μ",
    Nu: "Ν",
    Xi: "Ξ",
    Omicron: "Ο",
    Pi: "Π",
    Rho: "Ρ",
    Sigma: "Σ",
    Tau: "Τ",
    Upsilon: "Υ",
    Phi: "Φ",
    Chi: "Χ",
    Psi: "Ψ",
    Omega: "Ω",
    alpha: "α",
    beta: "β",
    gamma: "γ",
    delta: "δ",
    epsilon: "ε",
    zeta: "ζ",
    eta: "η",
    theta: "θ",
    iota: "ι",
    kappa: "κ",
    lambda: "λ",
    mu: "μ",
    nu: "ν",
    xi: "ξ",
    omicron: "ο",
    pi: "π",
    rho: "ρ",
    sigmaf: "ς",
    sigma: "σ",
    tau: "τ",
    upsilon: "υ",
    phi: "φ",
    chi: "χ",
    psi: "ψ",
    omega: "ω",
    thetasym: "ϑ",
    upsih: "ϒ",
    piv: "ϖ",
    bull: "•",
    hellip: "…",
    prime: "′",
    Prime: "″",
    oline: "‾",
    frasl: "⁄",
    weierp: "℘",
    image: "ℑ",
    real: "ℜ",
    trade: "™",
    alefsym: "ℵ",
    larr: "←",
    uarr: "↑",
    rarr: "→",
    darr: "↓",
    harr: "↔",
    crarr: "↵",
    lArr: "⇐",
    uArr: "⇑",
    rArr: "⇒",
    dArr: "⇓",
    hArr: "⇔",
    forall: "∀",
    part: "∂",
    exist: "∃",
    empty: "∅",
    nabla: "∇",
    isin: "∈",
    notin: "∉",
    ni: "∋",
    prod: "∏",
    sum: "∑",
    minus: "−",
    lowast: "∗",
    radic: "√",
    prop: "∝",
    infin: "∞",
    ang: "∠",
    and: "∧",
    or: "∨",
    cap: "∩",
    cup: "∪",
    int: "∫",
    there4: "∴",
    sim: "∼",
    cong: "≅",
    asymp: "≈",
    ne: "≠",
    equiv: "≡",
    le: "≤",
    ge: "≥",
    sub: "⊂",
    sup: "⊃",
    nsub: "⊄",
    sube: "⊆",
    supe: "⊇",
    oplus: "⊕",
    otimes: "⊗",
    perp: "⊥",
    sdot: "⋅",
    lceil: "⌈",
    rceil: "⌉",
    lfloor: "⌊",
    rfloor: "⌋",
    lang: "〈",
    rang: "〉",
    loz: "◊",
    spades: "♠",
    clubs: "♣",
    hearts: "♥",
    diams: "♦",
    quot: '"',
    amp: "&",
    lt: "<",
    gt: ">",
    OElig: "Œ",
    oelig: "œ",
    Scaron: "Š",
    scaron: "š",
    Yuml: "Ÿ",
    circ: "ˆ",
    tilde: "˜",
    ensp: " ",
    emsp: " ",
    thinsp: " ",
    zwnj: "‌",
    zwj: "‍",
    lrm: "‎",
    rlm: "‏",
    ndash: "–",
    mdash: "—",
    lsquo: "‘",
    rsquo: "’",
    sbquo: "‚",
    ldquo: "“",
    rdquo: "”",
    bdquo: "„",
    dagger: "†",
    Dagger: "‡",
    permil: "‰",
    lsaquo: "‹",
    rsaquo: "›",
    euro: "€",
  },
  C5 = ["cent", "copy", "divide", "gt", "lt", "not", "para", "times"],
  Tm = {}.hasOwnProperty,
  Sc = {};
let Na;
for (Na in ql) Tm.call(ql, Na) && (Sc[ql[Na]] = Na);
const w5 = /[^\dA-Za-z]/;
function k5(n, t, o, a) {
  const i = String.fromCharCode(n);
  if (Tm.call(Sc, i)) {
    const c = Sc[i],
      d = "&" + c;
    return o &&
      S5.includes(c) &&
      !C5.includes(c) &&
      (!a || (t && t !== 61 && w5.test(String.fromCharCode(t))))
      ? d
      : d + ";";
  }
  return "";
}
function P5(n, t, o) {
  let a = y5(n, t, o.omitOptionalSemicolons),
    i;
  if (
    ((o.useNamedReferences || o.useShortestReferences) &&
      (i = k5(n, t, o.omitOptionalSemicolons, o.attribute)),
    (o.useShortestReferences || !i) && o.useShortestReferences)
  ) {
    const c = x5(n, t, o.omitOptionalSemicolons);
    c.length < a.length && (a = c);
  }
  return i && (!o.useShortestReferences || i.length < a.length) ? i : a;
}
function tr(n, t) {
  return m5(n, Object.assign({ format: P5 }, t));
}
const O5 = /^>|^->|<!--|-->|--!>|<!-$/g,
  E5 = [">"],
  T5 = ["<", ">"];
function F5(n, t, o, a) {
  return a.settings.bogusComments
    ? "<?" +
        tr(
          n.value,
          Object.assign({}, a.settings.characterReferences, { subset: E5 }),
        ) +
        ">"
    : "<!--" + n.value.replace(O5, i) + "-->";
  function i(c) {
    return tr(
      c,
      Object.assign({}, a.settings.characterReferences, { subset: T5 }),
    );
  }
}
function j5(n, t, o, a) {
  return (
    "<!" +
    (a.settings.upperDoctype ? "DOCTYPE" : "doctype") +
    (a.settings.tightDoctype ? "" : " ") +
    "html>"
  );
}
function Hp(n, t) {
  const o = String(n);
  if (typeof t != "string") throw new TypeError("Expected character");
  let a = 0,
    i = o.indexOf(t);
  for (; i !== -1; ) a++, (i = o.indexOf(t, i + t.length));
  return a;
}
function M5(n, t) {
  const o = t || {};
  return (n[n.length - 1] === "" ? [...n, ""] : n)
    .join((o.padRight ? " " : "") + "," + (o.padLeft === !1 ? "" : " "))
    .trim();
}
function I5(n) {
  return n.join(" ").trim();
}
const R5 = /[ \t\n\f\r]/g;
function zc(n) {
  return typeof n == "object" ? (n.type === "text" ? zp(n.value) : !1) : zp(n);
}
function zp(n) {
  return n.replace(R5, "") === "";
}
const tt = jm(1),
  Fm = jm(-1),
  N5 = [];
function jm(n) {
  return t;
  function t(o, a, i) {
    const c = o ? o.children : N5;
    let d = (a || 0) + n,
      h = c[d];
    if (!i) for (; h && zc(h); ) (d += n), (h = c[d]);
    return h;
  }
}
const L5 = {}.hasOwnProperty;
function Mm(n) {
  return t;
  function t(o, a, i) {
    return L5.call(n, o.tagName) && n[o.tagName](o, a, i);
  }
}
const Vc = Mm({
  body: $5,
  caption: Wl,
  colgroup: Wl,
  dd: z5,
  dt: H5,
  head: Wl,
  html: B5,
  li: D5,
  optgroup: V5,
  option: U5,
  p: A5,
  rp: Vp,
  rt: Vp,
  tbody: q5,
  td: Up,
  tfoot: W5,
  th: Up,
  thead: G5,
  tr: K5,
});
function Wl(n, t, o) {
  const a = tt(o, t, !0);
  return (
    !a ||
    (a.type !== "comment" && !(a.type === "text" && zc(a.value.charAt(0))))
  );
}
function B5(n, t, o) {
  const a = tt(o, t);
  return !a || a.type !== "comment";
}
function $5(n, t, o) {
  const a = tt(o, t);
  return !a || a.type !== "comment";
}
function A5(n, t, o) {
  const a = tt(o, t);
  return a
    ? a.type === "element" &&
        (a.tagName === "address" ||
          a.tagName === "article" ||
          a.tagName === "aside" ||
          a.tagName === "blockquote" ||
          a.tagName === "details" ||
          a.tagName === "div" ||
          a.tagName === "dl" ||
          a.tagName === "fieldset" ||
          a.tagName === "figcaption" ||
          a.tagName === "figure" ||
          a.tagName === "footer" ||
          a.tagName === "form" ||
          a.tagName === "h1" ||
          a.tagName === "h2" ||
          a.tagName === "h3" ||
          a.tagName === "h4" ||
          a.tagName === "h5" ||
          a.tagName === "h6" ||
          a.tagName === "header" ||
          a.tagName === "hgroup" ||
          a.tagName === "hr" ||
          a.tagName === "main" ||
          a.tagName === "menu" ||
          a.tagName === "nav" ||
          a.tagName === "ol" ||
          a.tagName === "p" ||
          a.tagName === "pre" ||
          a.tagName === "section" ||
          a.tagName === "table" ||
          a.tagName === "ul")
    : !o ||
        !(
          o.type === "element" &&
          (o.tagName === "a" ||
            o.tagName === "audio" ||
            o.tagName === "del" ||
            o.tagName === "ins" ||
            o.tagName === "map" ||
            o.tagName === "noscript" ||
            o.tagName === "video")
        );
}
function D5(n, t, o) {
  const a = tt(o, t);
  return !a || (a.type === "element" && a.tagName === "li");
}
function H5(n, t, o) {
  const a = tt(o, t);
  return !!(
    a &&
    a.type === "element" &&
    (a.tagName === "dt" || a.tagName === "dd")
  );
}
function z5(n, t, o) {
  const a = tt(o, t);
  return (
    !a || (a.type === "element" && (a.tagName === "dt" || a.tagName === "dd"))
  );
}
function Vp(n, t, o) {
  const a = tt(o, t);
  return (
    !a || (a.type === "element" && (a.tagName === "rp" || a.tagName === "rt"))
  );
}
function V5(n, t, o) {
  const a = tt(o, t);
  return !a || (a.type === "element" && a.tagName === "optgroup");
}
function U5(n, t, o) {
  const a = tt(o, t);
  return (
    !a ||
    (a.type === "element" &&
      (a.tagName === "option" || a.tagName === "optgroup"))
  );
}
function G5(n, t, o) {
  const a = tt(o, t);
  return !!(
    a &&
    a.type === "element" &&
    (a.tagName === "tbody" || a.tagName === "tfoot")
  );
}
function q5(n, t, o) {
  const a = tt(o, t);
  return (
    !a ||
    (a.type === "element" && (a.tagName === "tbody" || a.tagName === "tfoot"))
  );
}
function W5(n, t, o) {
  return !tt(o, t);
}
function K5(n, t, o) {
  const a = tt(o, t);
  return !a || (a.type === "element" && a.tagName === "tr");
}
function Up(n, t, o) {
  const a = tt(o, t);
  return (
    !a || (a.type === "element" && (a.tagName === "td" || a.tagName === "th"))
  );
}
const X5 = Mm({ body: Z5, colgroup: J5, head: Y5, html: Q5, tbody: ey });
function Q5(n) {
  const t = tt(n, -1);
  return !t || t.type !== "comment";
}
function Y5(n) {
  const t = new Set();
  for (const a of n.children)
    if (
      a.type === "element" &&
      (a.tagName === "base" || a.tagName === "title")
    ) {
      if (t.has(a.tagName)) return !1;
      t.add(a.tagName);
    }
  const o = n.children[0];
  return !o || o.type === "element";
}
function Z5(n) {
  const t = tt(n, -1, !0);
  return (
    !t ||
    (t.type !== "comment" &&
      !(t.type === "text" && zc(t.value.charAt(0))) &&
      !(
        t.type === "element" &&
        (t.tagName === "meta" ||
          t.tagName === "link" ||
          t.tagName === "script" ||
          t.tagName === "style" ||
          t.tagName === "template")
      ))
  );
}
function J5(n, t, o) {
  const a = Fm(o, t),
    i = tt(n, -1, !0);
  return o &&
    a &&
    a.type === "element" &&
    a.tagName === "colgroup" &&
    Vc(a, o.children.indexOf(a), o)
    ? !1
    : !!(i && i.type === "element" && i.tagName === "col");
}
function ey(n, t, o) {
  const a = Fm(o, t),
    i = tt(n, -1);
  return o &&
    a &&
    a.type === "element" &&
    (a.tagName === "thead" || a.tagName === "tbody") &&
    Vc(a, o.children.indexOf(a), o)
    ? !1
    : !!(i && i.type === "element" && i.tagName === "tr");
}
const La = {
  name: [
    [
      `	
\f\r &/=>`.split(""),
      `	
\f\r "&'/=>\``.split(""),
    ],
    [
      `\0	
\f\r "&'/<=>`.split(""),
      `\0	
\f\r "&'/<=>\``.split(""),
    ],
  ],
  unquoted: [
    [
      `	
\f\r &>`.split(""),
      `\0	
\f\r "&'<=>\``.split(""),
    ],
    [
      `\0	
\f\r "&'<=>\``.split(""),
      `\0	
\f\r "&'<=>\``.split(""),
    ],
  ],
  single: [
    ["&'".split(""), "\"&'`".split("")],
    ["\0&'".split(""), "\0\"&'`".split("")],
  ],
  double: [
    ['"&'.split(""), "\"&'`".split("")],
    ['\0"&'.split(""), "\0\"&'`".split("")],
  ],
};
function ty(n, t, o, a) {
  const i = a.schema,
    c = i.space === "svg" ? !1 : a.settings.omitOptionalTags;
  let d =
    i.space === "svg"
      ? a.settings.closeEmptyElements
      : a.settings.voids.includes(n.tagName.toLowerCase());
  const h = [];
  let f;
  i.space === "html" && n.tagName === "svg" && (a.schema = Em);
  const m = ny(a, n.properties),
    b = a.all(i.space === "html" && n.tagName === "template" ? n.content : n);
  return (
    (a.schema = i),
    b && (d = !1),
    (m || !c || !X5(n, t, o)) &&
      (h.push("<", n.tagName, m ? " " + m : ""),
      d &&
        (i.space === "svg" || a.settings.closeSelfClosing) &&
        ((f = m.charAt(m.length - 1)),
        (!a.settings.tightSelfClosing ||
          f === "/" ||
          (f && f !== '"' && f !== "'")) &&
          h.push(" "),
        h.push("/")),
      h.push(">")),
    h.push(b),
    !d && (!c || !Vc(n, t, o)) && h.push("</" + n.tagName + ">"),
    h.join("")
  );
}
function ny(n, t) {
  const o = [];
  let a = -1,
    i;
  if (t) {
    for (i in t)
      if (t[i] !== null && t[i] !== void 0) {
        const c = ry(n, i, t[i]);
        c && o.push(c);
      }
  }
  for (; ++a < o.length; ) {
    const c = n.settings.tightAttributes
      ? o[a].charAt(o[a].length - 1)
      : void 0;
    a !== o.length - 1 && c !== '"' && c !== "'" && (o[a] += " ");
  }
  return o.join("");
}
function ry(n, t, o) {
  const a = i5(n.schema, t),
    i = n.settings.allowParseErrors && n.schema.space === "html" ? 0 : 1,
    c = n.settings.allowDangerousCharacters ? 0 : 1;
  let d = n.quote,
    h;
  if (
    (a.overloadedBoolean && (o === a.attribute || o === "")
      ? (o = !0)
      : (a.boolean || a.overloadedBoolean) &&
        (typeof o != "string" || o === a.attribute || o === "") &&
        (o = !!o),
    o == null || o === !1 || (typeof o == "number" && Number.isNaN(o)))
  )
    return "";
  const f = tr(
    a.attribute,
    Object.assign({}, n.settings.characterReferences, {
      subset: La.name[i][c],
    }),
  );
  return o === !0 ||
    ((o = Array.isArray(o)
      ? (a.commaSeparated ? M5 : I5)(o, {
          padLeft: !n.settings.tightCommaSeparatedLists,
        })
      : String(o)),
    n.settings.collapseEmptyAttributes && !o)
    ? f
    : (n.settings.preferUnquoted &&
        (h = tr(
          o,
          Object.assign({}, n.settings.characterReferences, {
            attribute: !0,
            subset: La.unquoted[i][c],
          }),
        )),
      h !== o &&
        (n.settings.quoteSmart &&
          Hp(o, d) > Hp(o, n.alternative) &&
          (d = n.alternative),
        (h =
          d +
          tr(
            o,
            Object.assign({}, n.settings.characterReferences, {
              subset: (d === "'" ? La.single : La.double)[i][c],
              attribute: !0,
            }),
          ) +
          d)),
      f + (h && "=" + h));
}
const oy = ["<", "&"];
function Im(n, t, o, a) {
  return o &&
    o.type === "element" &&
    (o.tagName === "script" || o.tagName === "style")
    ? n.value
    : tr(
        n.value,
        Object.assign({}, a.settings.characterReferences, { subset: oy }),
      );
}
function ay(n, t, o, a) {
  return a.settings.allowDangerousHtml ? n.value : Im(n, t, o, a);
}
function iy(n, t, o, a) {
  return a.all(n);
}
const sy = u5("type", {
  invalid: ly,
  unknown: cy,
  handlers: {
    comment: F5,
    doctype: j5,
    element: ty,
    raw: ay,
    root: iy,
    text: Im,
  },
});
function ly(n) {
  throw new Error("Expected node, not `" + n + "`");
}
function cy(n) {
  const t = n;
  throw new Error("Cannot compile unknown node `" + t.type + "`");
}
const uy = {},
  dy = {},
  fy = [];
function py(n, t) {
  const o = t || uy,
    a = o.quote || '"',
    i = a === '"' ? "'" : '"';
  if (a !== '"' && a !== "'")
    throw new Error("Invalid quote `" + a + "`, expected `'` or `\"`");
  return {
    one: hy,
    all: my,
    settings: {
      omitOptionalTags: o.omitOptionalTags || !1,
      allowParseErrors: o.allowParseErrors || !1,
      allowDangerousCharacters: o.allowDangerousCharacters || !1,
      quoteSmart: o.quoteSmart || !1,
      preferUnquoted: o.preferUnquoted || !1,
      tightAttributes: o.tightAttributes || !1,
      upperDoctype: o.upperDoctype || !1,
      tightDoctype: o.tightDoctype || !1,
      bogusComments: o.bogusComments || !1,
      tightCommaSeparatedLists: o.tightCommaSeparatedLists || !1,
      tightSelfClosing: o.tightSelfClosing || !1,
      collapseEmptyAttributes: o.collapseEmptyAttributes || !1,
      allowDangerousHtml: o.allowDangerousHtml || !1,
      voids: o.voids || e5,
      characterReferences: o.characterReferences || dy,
      closeSelfClosing: o.closeSelfClosing || !1,
      closeEmptyElements: o.closeEmptyElements || !1,
    },
    schema: o.space === "svg" ? Em : c5,
    quote: a,
    alternative: i,
  }.one(Array.isArray(n) ? { type: "root", children: n } : n, void 0, void 0);
}
function hy(n, t, o) {
  return sy(n, t, o, this);
}
function my(n) {
  const t = [],
    o = (n && n.children) || fy;
  let a = -1;
  for (; ++a < o.length; ) t[a] = this.one(o[a], a, n);
  return t.join("");
}
function di(n, t) {
  const o = typeof n == "string" ? {} : { ...n.colorReplacements },
    a = typeof n == "string" ? n : n.name;
  for (const [i, c] of Object.entries(
    (t == null ? void 0 : t.colorReplacements) || {},
  ))
    typeof c == "string" ? (o[i] = c) : i === a && Object.assign(o, c);
  return o;
}
function Qn(n, t) {
  return (
    n && ((t == null ? void 0 : t[n == null ? void 0 : n.toLowerCase()]) || n)
  );
}
function gy(n) {
  return Array.isArray(n) ? n : [n];
}
async function Rm(n) {
  return Promise.resolve(typeof n == "function" ? n() : n).then(
    (t) => t.default || t,
  );
}
function Uc(n) {
  return !n || ["plaintext", "txt", "text", "plain"].includes(n);
}
function by(n) {
  return n === "ansi" || Uc(n);
}
function Gc(n) {
  return n === "none";
}
function vy(n) {
  return Gc(n);
}
function Nm(n, t) {
  var a;
  if (!t) return n;
  n.properties || (n.properties = {}),
    (a = n.properties).class || (a.class = []),
    typeof n.properties.class == "string" &&
      (n.properties.class = n.properties.class.split(/\s+/g)),
    Array.isArray(n.properties.class) || (n.properties.class = []);
  const o = Array.isArray(t) ? t : t.split(/\s+/g);
  for (const i of o)
    i && !n.properties.class.includes(i) && n.properties.class.push(i);
  return n;
}
function Mi(n, t = !1) {
  var c;
  const o = n.split(/(\r?\n)/g);
  let a = 0;
  const i = [];
  for (let d = 0; d < o.length; d += 2) {
    const h = t ? o[d] + (o[d + 1] || "") : o[d];
    i.push([h, a]),
      (a += o[d].length),
      (a += ((c = o[d + 1]) == null ? void 0 : c.length) || 0);
  }
  return i;
}
function yy(n) {
  const t = Mi(n, !0).map(([i]) => i);
  function o(i) {
    if (i === n.length)
      return { line: t.length - 1, character: t[t.length - 1].length };
    let c = i,
      d = 0;
    for (const h of t) {
      if (c < h.length) break;
      (c -= h.length), d++;
    }
    return { line: d, character: c };
  }
  function a(i, c) {
    let d = 0;
    for (let h = 0; h < i; h++) d += t[h].length;
    return (d += c), d;
  }
  return { lines: t, indexToPos: o, posToIndex: a };
}
const qc = "light-dark()";
function _y(n, t) {
  let o = 0;
  const a = [];
  for (const i of t)
    i > o &&
      a.push({ ...n, content: n.content.slice(o, i), offset: n.offset + o }),
      (o = i);
  return (
    o < n.content.length &&
      a.push({ ...n, content: n.content.slice(o), offset: n.offset + o }),
    a
  );
}
function xy(n, t) {
  const o = Array.from(t instanceof Set ? t : new Set(t)).sort((a, i) => a - i);
  return o.length
    ? n.map((a) =>
        a.flatMap((i) => {
          const c = o
            .filter((d) => i.offset < d && d < i.offset + i.content.length)
            .map((d) => d - i.offset)
            .sort((d, h) => d - h);
          return c.length ? _y(i, c) : i;
        }),
      )
    : n;
}
function Sy(n, t, o, a, i = "css-vars") {
  const c = {
      content: n.content,
      explanation: n.explanation,
      offset: n.offset,
    },
    d = t.map((b) => fi(n.variants[b])),
    h = new Set(d.flatMap((b) => Object.keys(b))),
    f = {},
    m = (b, v) => {
      const y = v === "color" ? "" : v === "background-color" ? "-bg" : `-${v}`;
      return o + t[b] + (v === "color" ? "" : y);
    };
  return (
    d.forEach((b, v) => {
      for (const y of h) {
        const x = b[y] || "inherit";
        if (v === 0 && a)
          if (a === qc && d.length > 1) {
            const S = t.findIndex((T) => T === "light"),
              O = t.findIndex((T) => T === "dark");
            if (S === -1 || O === -1)
              throw new it(
                'When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes',
              );
            const k = d[S][y] || "inherit",
              P = d[O][y] || "inherit";
            (f[y] = `light-dark(${k}, ${P})`),
              i === "css-vars" && (f[m(v, y)] = x);
          } else f[y] = x;
        else i === "css-vars" && (f[m(v, y)] = x);
      }
    }),
    (c.htmlStyle = f),
    c
  );
}
function fi(n) {
  const t = {};
  if (
    (n.color && (t.color = n.color),
    n.bgColor && (t["background-color"] = n.bgColor),
    n.fontStyle)
  ) {
    n.fontStyle & gt.Italic && (t["font-style"] = "italic"),
      n.fontStyle & gt.Bold && (t["font-weight"] = "bold");
    const o = [];
    n.fontStyle & gt.Underline && o.push("underline"),
      n.fontStyle & gt.Strikethrough && o.push("line-through"),
      o.length && (t["text-decoration"] = o.join(" "));
  }
  return t;
}
function Cc(n) {
  return typeof n == "string"
    ? n
    : Object.entries(n)
        .map(([t, o]) => `${t}:${o}`)
        .join(";");
}
const Lm = new WeakMap();
function Ii(n, t) {
  Lm.set(n, t);
}
function fo(n) {
  return Lm.get(n);
}
class dr {
  constructor(...t) {
    L(this, "_stacks", {});
    L(this, "lang");
    if (t.length === 2) {
      const [o, a] = t;
      (this.lang = a), (this._stacks = o);
    } else {
      const [o, a, i] = t;
      (this.lang = a), (this._stacks = { [i]: o });
    }
  }
  get themes() {
    return Object.keys(this._stacks);
  }
  get theme() {
    return this.themes[0];
  }
  get _stack() {
    return this._stacks[this.theme];
  }
  static initial(t, o) {
    return new dr(Object.fromEntries(gy(o).map((a) => [a, vc])), t);
  }
  getInternalStack(t = this.theme) {
    return this._stacks[t];
  }
  getScopes(t = this.theme) {
    return Cy(this._stacks[t]);
  }
  toJSON() {
    return {
      lang: this.lang,
      theme: this.theme,
      themes: this.themes,
      scopes: this.getScopes(),
    };
  }
}
function Cy(n) {
  const t = [],
    o = new Set();
  function a(i) {
    var d;
    if (o.has(i)) return;
    o.add(i);
    const c =
      (d = i == null ? void 0 : i.nameScopesList) == null
        ? void 0
        : d.scopeName;
    c && t.push(c), i.parent && a(i.parent);
  }
  return a(n), t;
}
function wy(n, t) {
  if (!(n instanceof dr)) throw new it("Invalid grammar state");
  return n.getInternalStack(t);
}
function ky() {
  const n = new WeakMap();
  function t(o) {
    if (!n.has(o.meta)) {
      let a = function (d) {
        if (typeof d == "number") {
          if (d < 0 || d > o.source.length)
            throw new it(
              `Invalid decoration offset: ${d}. Code length: ${o.source.length}`,
            );
          return { ...i.indexToPos(d), offset: d };
        } else {
          const h = i.lines[d.line];
          if (h === void 0)
            throw new it(
              `Invalid decoration position ${JSON.stringify(d)}. Lines length: ${i.lines.length}`,
            );
          if (d.character < 0 || d.character > h.length)
            throw new it(
              `Invalid decoration position ${JSON.stringify(d)}. Line ${d.line} length: ${h.length}`,
            );
          return { ...d, offset: i.posToIndex(d.line, d.character) };
        }
      };
      const i = yy(o.source),
        c = (o.options.decorations || []).map((d) => ({
          ...d,
          start: a(d.start),
          end: a(d.end),
        }));
      Py(c), n.set(o.meta, { decorations: c, converter: i, source: o.source });
    }
    return n.get(o.meta);
  }
  return {
    name: "shiki:decorations",
    tokens(o) {
      var d;
      if (!((d = this.options.decorations) != null && d.length)) return;
      const i = t(this).decorations.flatMap((h) => [
        h.start.offset,
        h.end.offset,
      ]);
      return xy(o, i);
    },
    code(o) {
      var b;
      if (!((b = this.options.decorations) != null && b.length)) return;
      const a = t(this),
        i = Array.from(o.children).filter(
          (v) => v.type === "element" && v.tagName === "span",
        );
      if (i.length !== a.converter.lines.length)
        throw new it(
          `Number of lines in code element (${i.length}) does not match the number of lines in the source (${a.converter.lines.length}). Failed to apply decorations.`,
        );
      function c(v, y, x, S) {
        const O = i[v];
        let k = "",
          P = -1,
          T = -1;
        if (
          (y === 0 && (P = 0),
          x === 0 && (T = 0),
          x === Number.POSITIVE_INFINITY && (T = O.children.length),
          P === -1 || T === -1)
        )
          for (let B = 0; B < O.children.length; B++)
            (k += Bm(O.children[B])),
              P === -1 && k.length === y && (P = B + 1),
              T === -1 && k.length === x && (T = B + 1);
        if (P === -1)
          throw new it(
            `Failed to find start index for decoration ${JSON.stringify(S.start)}`,
          );
        if (T === -1)
          throw new it(
            `Failed to find end index for decoration ${JSON.stringify(S.end)}`,
          );
        const I = O.children.slice(P, T);
        if (!S.alwaysWrap && I.length === O.children.length) h(O, S, "line");
        else if (!S.alwaysWrap && I.length === 1 && I[0].type === "element")
          h(I[0], S, "token");
        else {
          const B = {
            type: "element",
            tagName: "span",
            properties: {},
            children: I,
          };
          h(B, S, "wrapper"), O.children.splice(P, I.length, B);
        }
      }
      function d(v, y) {
        i[v] = h(i[v], y, "line");
      }
      function h(v, y, x) {
        var k;
        const S = y.properties || {},
          O = y.transform || ((P) => P);
        return (
          (v.tagName = y.tagName || "span"),
          (v.properties = { ...v.properties, ...S, class: v.properties.class }),
          (k = y.properties) != null && k.class && Nm(v, y.properties.class),
          (v = O(v, x) || v),
          v
        );
      }
      const f = [],
        m = a.decorations.sort(
          (v, y) =>
            y.start.offset - v.start.offset || v.end.offset - y.end.offset,
        );
      for (const v of m) {
        const { start: y, end: x } = v;
        if (y.line === x.line) c(y.line, y.character, x.character, v);
        else if (y.line < x.line) {
          c(y.line, y.character, Number.POSITIVE_INFINITY, v);
          for (let S = y.line + 1; S < x.line; S++) f.unshift(() => d(S, v));
          c(x.line, 0, x.character, v);
        }
      }
      f.forEach((v) => v());
    },
  };
}
function Py(n) {
  for (let t = 0; t < n.length; t++) {
    const o = n[t];
    if (o.start.offset > o.end.offset)
      throw new it(
        `Invalid decoration range: ${JSON.stringify(o.start)} - ${JSON.stringify(o.end)}`,
      );
    for (let a = t + 1; a < n.length; a++) {
      const i = n[a],
        c = o.start.offset <= i.start.offset && i.start.offset < o.end.offset,
        d = o.start.offset < i.end.offset && i.end.offset <= o.end.offset,
        h = i.start.offset <= o.start.offset && o.start.offset < i.end.offset,
        f = i.start.offset < o.end.offset && o.end.offset <= i.end.offset;
      if (c || d || h || f) {
        if ((c && d) || (h && f)) continue;
        throw new it(
          `Decorations ${JSON.stringify(o.start)} and ${JSON.stringify(i.start)} intersect.`,
        );
      }
    }
  }
}
function Bm(n) {
  return n.type === "text"
    ? n.value
    : n.type === "element"
      ? n.children.map(Bm).join("")
      : "";
}
const Oy = [ky()];
function pi(n) {
  return [...(n.transformers || []), ...Oy];
}
var h0 = [
    "black",
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
    "brightBlack",
    "brightRed",
    "brightGreen",
    "brightYellow",
    "brightBlue",
    "brightMagenta",
    "brightCyan",
    "brightWhite",
  ],
  Kl = {
    1: "bold",
    2: "dim",
    3: "italic",
    4: "underline",
    7: "reverse",
    8: "hidden",
    9: "strikethrough",
  };
function Ey(n, t) {
  const o = n.indexOf("\x1B", t);
  if (o !== -1 && n[o + 1] === "[") {
    const a = n.indexOf("m", o);
    if (a !== -1)
      return {
        sequence: n.substring(o + 2, a).split(";"),
        startPosition: o,
        position: a + 1,
      };
  }
  return { position: n.length };
}
function Gp(n) {
  const t = n.shift();
  if (t === "2") {
    const o = n.splice(0, 3).map((a) => Number.parseInt(a));
    return o.length !== 3 || o.some((a) => Number.isNaN(a))
      ? void 0
      : { type: "rgb", rgb: o };
  } else if (t === "5") {
    const o = n.shift();
    if (o) return { type: "table", index: Number(o) };
  }
}
function Ty(n) {
  const t = [];
  for (; n.length > 0; ) {
    const o = n.shift();
    if (!o) continue;
    const a = Number.parseInt(o);
    if (!Number.isNaN(a))
      if (a === 0) t.push({ type: "resetAll" });
      else if (a <= 9) Kl[a] && t.push({ type: "setDecoration", value: Kl[a] });
      else if (a <= 29) {
        const i = Kl[a - 20];
        i &&
          (t.push({ type: "resetDecoration", value: i }),
          i === "dim" && t.push({ type: "resetDecoration", value: "bold" }));
      } else if (a <= 37)
        t.push({
          type: "setForegroundColor",
          value: { type: "named", name: h0[a - 30] },
        });
      else if (a === 38) {
        const i = Gp(n);
        i && t.push({ type: "setForegroundColor", value: i });
      } else if (a === 39) t.push({ type: "resetForegroundColor" });
      else if (a <= 47)
        t.push({
          type: "setBackgroundColor",
          value: { type: "named", name: h0[a - 40] },
        });
      else if (a === 48) {
        const i = Gp(n);
        i && t.push({ type: "setBackgroundColor", value: i });
      } else
        a === 49
          ? t.push({ type: "resetBackgroundColor" })
          : a === 53
            ? t.push({ type: "setDecoration", value: "overline" })
            : a === 55
              ? t.push({ type: "resetDecoration", value: "overline" })
              : a >= 90 && a <= 97
                ? t.push({
                    type: "setForegroundColor",
                    value: { type: "named", name: h0[a - 90 + 8] },
                  })
                : a >= 100 &&
                  a <= 107 &&
                  t.push({
                    type: "setBackgroundColor",
                    value: { type: "named", name: h0[a - 100 + 8] },
                  });
  }
  return t;
}
function Fy() {
  let n = null,
    t = null,
    o = new Set();
  return {
    parse(a) {
      const i = [];
      let c = 0;
      do {
        const d = Ey(a, c),
          h = d.sequence ? a.substring(c, d.startPosition) : a.substring(c);
        if (
          (h.length > 0 &&
            i.push({
              value: h,
              foreground: n,
              background: t,
              decorations: new Set(o),
            }),
          d.sequence)
        ) {
          const f = Ty(d.sequence);
          for (const m of f)
            m.type === "resetAll"
              ? ((n = null), (t = null), o.clear())
              : m.type === "resetForegroundColor"
                ? (n = null)
                : m.type === "resetBackgroundColor"
                  ? (t = null)
                  : m.type === "resetDecoration" && o.delete(m.value);
          for (const m of f)
            m.type === "setForegroundColor"
              ? (n = m.value)
              : m.type === "setBackgroundColor"
                ? (t = m.value)
                : m.type === "setDecoration" && o.add(m.value);
        }
        c = d.position;
      } while (c < a.length);
      return i;
    },
  };
}
var jy = {
  black: "#000000",
  red: "#bb0000",
  green: "#00bb00",
  yellow: "#bbbb00",
  blue: "#0000bb",
  magenta: "#ff00ff",
  cyan: "#00bbbb",
  white: "#eeeeee",
  brightBlack: "#555555",
  brightRed: "#ff5555",
  brightGreen: "#00ff00",
  brightYellow: "#ffff55",
  brightBlue: "#5555ff",
  brightMagenta: "#ff55ff",
  brightCyan: "#55ffff",
  brightWhite: "#ffffff",
};
function My(n = jy) {
  function t(h) {
    return n[h];
  }
  function o(h) {
    return `#${h.map((f) => Math.max(0, Math.min(f, 255)).toString(16).padStart(2, "0")).join("")}`;
  }
  let a;
  function i() {
    if (a) return a;
    a = [];
    for (let m = 0; m < h0.length; m++) a.push(t(h0[m]));
    let h = [0, 95, 135, 175, 215, 255];
    for (let m = 0; m < 6; m++)
      for (let b = 0; b < 6; b++)
        for (let v = 0; v < 6; v++) a.push(o([h[m], h[b], h[v]]));
    let f = 8;
    for (let m = 0; m < 24; m++, f += 10) a.push(o([f, f, f]));
    return a;
  }
  function c(h) {
    return i()[h];
  }
  function d(h) {
    switch (h.type) {
      case "named":
        return t(h.name);
      case "rgb":
        return o(h.rgb);
      case "table":
        return c(h.index);
    }
  }
  return { value: d };
}
function Iy(n, t, o) {
  const a = di(n, o),
    i = Mi(t),
    c = My(
      Object.fromEntries(
        h0.map((h) => {
          var f;
          return [
            h,
            (f = n.colors) == null
              ? void 0
              : f[`terminal.ansi${h[0].toUpperCase()}${h.substring(1)}`],
          ];
        }),
      ),
    ),
    d = Fy();
  return i.map((h) =>
    d.parse(h[0]).map((f) => {
      let m, b;
      f.decorations.has("reverse")
        ? ((m = f.background ? c.value(f.background) : n.bg),
          (b = f.foreground ? c.value(f.foreground) : n.fg))
        : ((m = f.foreground ? c.value(f.foreground) : n.fg),
          (b = f.background ? c.value(f.background) : void 0)),
        (m = Qn(m, a)),
        (b = Qn(b, a)),
        f.decorations.has("dim") && (m = Ry(m));
      let v = gt.None;
      return (
        f.decorations.has("bold") && (v |= gt.Bold),
        f.decorations.has("italic") && (v |= gt.Italic),
        f.decorations.has("underline") && (v |= gt.Underline),
        f.decorations.has("strikethrough") && (v |= gt.Strikethrough),
        { content: f.value, offset: h[1], color: m, bgColor: b, fontStyle: v }
      );
    }),
  );
}
function Ry(n) {
  const t = n.match(/#([0-9a-f]{3})([0-9a-f]{3})?([0-9a-f]{2})?/);
  if (t)
    if (t[3]) {
      const a = Math.round(Number.parseInt(t[3], 16) / 2)
        .toString(16)
        .padStart(2, "0");
      return `#${t[1]}${t[2]}${a}`;
    } else
      return t[2]
        ? `#${t[1]}${t[2]}80`
        : `#${Array.from(t[1])
            .map((a) => `${a}${a}`)
            .join("")}80`;
  const o = n.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
  return o ? `var(${o[1]}-dim)` : n;
}
function Wc(n, t, o = {}) {
  const { lang: a = "text", theme: i = n.getLoadedThemes()[0] } = o;
  if (Uc(a) || Gc(i))
    return Mi(t).map((f) => [{ content: f[0], offset: f[1] }]);
  const { theme: c, colorMap: d } = n.setTheme(i);
  if (a === "ansi") return Iy(c, t, o);
  const h = n.getLanguage(a);
  if (o.grammarState) {
    if (o.grammarState.lang !== h.name)
      throw new it(
        `Grammar state language "${o.grammarState.lang}" does not match highlight language "${h.name}"`,
      );
    if (!o.grammarState.themes.includes(c.name))
      throw new it(
        `Grammar state themes "${o.grammarState.themes}" do not contain highlight theme "${c.name}"`,
      );
  }
  return Ly(t, h, c, d, o);
}
function Ny(...n) {
  if (n.length === 2) return fo(n[1]);
  const [t, o, a = {}] = n,
    { lang: i = "text", theme: c = t.getLoadedThemes()[0] } = a;
  if (Uc(i) || Gc(c))
    throw new it("Plain language does not have grammar state");
  if (i === "ansi") throw new it("ANSI language does not have grammar state");
  const { theme: d, colorMap: h } = t.setTheme(c),
    f = t.getLanguage(i);
  return new dr(hi(o, f, d, h, a).stateStack, f.name, d.name);
}
function Ly(n, t, o, a, i) {
  const c = hi(n, t, o, a, i),
    d = new dr(hi(n, t, o, a, i).stateStack, t.name, o.name);
  return Ii(c.tokens, d), c.tokens;
}
function hi(n, t, o, a, i) {
  const c = di(o, i),
    { tokenizeMaxLineLength: d = 0, tokenizeTimeLimit: h = 500 } = i,
    f = Mi(n);
  let m = i.grammarState
      ? (wy(i.grammarState, o.name) ?? vc)
      : i.grammarContextCode != null
        ? hi(i.grammarContextCode, t, o, a, {
            ...i,
            grammarState: void 0,
            grammarContextCode: void 0,
          }).stateStack
        : vc,
    b = [];
  const v = [];
  for (let y = 0, x = f.length; y < x; y++) {
    const [S, O] = f[y];
    if (S === "") {
      (b = []), v.push([]);
      continue;
    }
    if (d > 0 && S.length >= d) {
      (b = []), v.push([{ content: S, offset: O, color: "", fontStyle: 0 }]);
      continue;
    }
    let k, P, T;
    i.includeExplanation &&
      ((k = t.tokenizeLine(S, m, h)), (P = k.tokens), (T = 0));
    const I = t.tokenizeLine2(S, m, h),
      B = I.tokens.length / 2;
    for (let F = 0; F < B; F++) {
      const $ = I.tokens[2 * F],
        N = F + 1 < B ? I.tokens[2 * F + 2] : S.length;
      if ($ === N) continue;
      const X = I.tokens[2 * F + 1],
        he = Qn(a[sr.getForeground(X)], c),
        Ce = sr.getFontStyle(X),
        te = {
          content: S.substring($, N),
          offset: O + $,
          color: he,
          fontStyle: Ce,
        };
      if (i.includeExplanation) {
        const ce = [];
        if (i.includeExplanation !== "scopeName")
          for (const Se of o.settings) {
            let ge;
            switch (typeof Se.scope) {
              case "string":
                ge = Se.scope.split(/,/).map((me) => me.trim());
                break;
              case "object":
                ge = Se.scope;
                break;
              default:
                continue;
            }
            ce.push({ settings: Se, selectors: ge.map((me) => me.split(/ /)) });
          }
        te.explanation = [];
        let ye = 0;
        for (; $ + ye < N; ) {
          const Se = P[T],
            ge = S.substring(Se.startIndex, Se.endIndex);
          (ye += ge.length),
            te.explanation.push({
              content: ge,
              scopes:
                i.includeExplanation === "scopeName"
                  ? By(Se.scopes)
                  : $y(ce, Se.scopes),
            }),
            (T += 1);
        }
      }
      b.push(te);
    }
    v.push(b), (b = []), (m = I.ruleStack);
  }
  return { tokens: v, stateStack: m };
}
function By(n) {
  return n.map((t) => ({ scopeName: t }));
}
function $y(n, t) {
  const o = [];
  for (let a = 0, i = t.length; a < i; a++) {
    const c = t[a];
    o[a] = { scopeName: c, themeMatches: Dy(n, c, t.slice(0, a)) };
  }
  return o;
}
function qp(n, t) {
  return n === t || (t.substring(0, n.length) === n && t[n.length] === ".");
}
function Ay(n, t, o) {
  if (!qp(n[n.length - 1], t)) return !1;
  let a = n.length - 2,
    i = o.length - 1;
  for (; a >= 0 && i >= 0; ) qp(n[a], o[i]) && (a -= 1), (i -= 1);
  return a === -1;
}
function Dy(n, t, o) {
  const a = [];
  for (const { selectors: i, settings: c } of n)
    for (const d of i)
      if (Ay(d, t, o)) {
        a.push(c);
        break;
      }
  return a;
}
function $m(n, t, o) {
  const a = Object.entries(o.themes)
      .filter((f) => f[1])
      .map((f) => ({ color: f[0], theme: f[1] })),
    i = a.map((f) => {
      const m = Wc(n, t, { ...o, theme: f.theme }),
        b = fo(m),
        v = typeof f.theme == "string" ? f.theme : f.theme.name;
      return { tokens: m, state: b, theme: v };
    }),
    c = Hy(...i.map((f) => f.tokens)),
    d = c[0].map((f, m) =>
      f.map((b, v) => {
        const y = { content: b.content, variants: {}, offset: b.offset };
        return (
          "includeExplanation" in o &&
            o.includeExplanation &&
            (y.explanation = b.explanation),
          c.forEach((x, S) => {
            const { content: O, explanation: k, offset: P, ...T } = x[m][v];
            y.variants[a[S].color] = T;
          }),
          y
        );
      }),
    ),
    h = i[0].state
      ? new dr(
          Object.fromEntries(
            i.map((f) => {
              var m;
              return [
                f.theme,
                (m = f.state) == null ? void 0 : m.getInternalStack(f.theme),
              ];
            }),
          ),
          i[0].state.lang,
        )
      : void 0;
  return h && Ii(d, h), d;
}
function Hy(...n) {
  const t = n.map(() => []),
    o = n.length;
  for (let a = 0; a < n[0].length; a++) {
    const i = n.map((f) => f[a]),
      c = t.map(() => []);
    t.forEach((f, m) => f.push(c[m]));
    const d = i.map(() => 0),
      h = i.map((f) => f[0]);
    for (; h.every((f) => f); ) {
      const f = Math.min(...h.map((m) => m.content.length));
      for (let m = 0; m < o; m++) {
        const b = h[m];
        b.content.length === f
          ? (c[m].push(b), (d[m] += 1), (h[m] = i[m][d[m]]))
          : (c[m].push({ ...b, content: b.content.slice(0, f) }),
            (h[m] = {
              ...b,
              content: b.content.slice(f),
              offset: b.offset + f,
            }));
      }
    }
  }
  return t;
}
function mi(n, t, o) {
  let a, i, c, d, h, f;
  if ("themes" in o) {
    const {
        defaultColor: m = "light",
        cssVariablePrefix: b = "--shiki-",
        colorsRendering: v = "css-vars",
      } = o,
      y = Object.entries(o.themes)
        .filter((P) => P[1])
        .map((P) => ({ color: P[0], theme: P[1] }))
        .sort((P, T) => (P.color === m ? -1 : T.color === m ? 1 : 0));
    if (y.length === 0) throw new it("`themes` option must not be empty");
    const x = $m(n, t, o);
    if (((f = fo(x)), m && qc !== m && !y.find((P) => P.color === m)))
      throw new it(
        `\`themes\` option must contain the defaultColor key \`${m}\``,
      );
    const S = y.map((P) => n.getTheme(P.theme)),
      O = y.map((P) => P.color);
    (c = x.map((P) => P.map((T) => Sy(T, O, b, m, v)))), f && Ii(c, f);
    const k = y.map((P) => di(P.theme, o));
    (i = Wp(y, S, k, b, m, "fg", v)),
      (a = Wp(y, S, k, b, m, "bg", v)),
      (d = `shiki-themes ${S.map((P) => P.name).join(" ")}`),
      (h = m ? void 0 : [i, a].join(";"));
  } else if ("theme" in o) {
    const m = di(o.theme, o);
    c = Wc(n, t, o);
    const b = n.getTheme(o.theme);
    (a = Qn(b.bg, m)), (i = Qn(b.fg, m)), (d = b.name), (f = fo(c));
  } else
    throw new it(
      "Invalid options, either `theme` or `themes` must be provided",
    );
  return {
    tokens: c,
    fg: i,
    bg: a,
    themeName: d,
    rootStyle: h,
    grammarState: f,
  };
}
function Wp(n, t, o, a, i, c, d) {
  return n
    .map((h, f) => {
      const m = Qn(t[f][c], o[f]) || "inherit",
        b = `${a + h.color}${c === "bg" ? "-bg" : ""}:${m}`;
      if (f === 0 && i) {
        if (i === qc && n.length > 1) {
          const v = n.findIndex((O) => O.color === "light"),
            y = n.findIndex((O) => O.color === "dark");
          if (v === -1 || y === -1)
            throw new it(
              'When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes',
            );
          const x = Qn(t[v][c], o[v]) || "inherit",
            S = Qn(t[y][c], o[y]) || "inherit";
          return `light-dark(${x}, ${S});${b}`;
        }
        return m;
      }
      return d === "css-vars" ? b : null;
    })
    .filter((h) => !!h)
    .join(";");
}
function gi(
  n,
  t,
  o,
  a = {
    meta: {},
    options: o,
    codeToHast: (i, c) => gi(n, i, c),
    codeToTokens: (i, c) => mi(n, i, c),
  },
) {
  var S, O;
  let i = t;
  for (const k of pi(o))
    i = ((S = k.preprocess) == null ? void 0 : S.call(a, i, o)) || i;
  let {
    tokens: c,
    fg: d,
    bg: h,
    themeName: f,
    rootStyle: m,
    grammarState: b,
  } = mi(n, i, o);
  const { mergeWhitespaces: v = !0, mergeSameStyleTokens: y = !1 } = o;
  v === !0 ? (c = Vy(c)) : v === "never" && (c = Uy(c)), y && (c = Gy(c));
  const x = {
    ...a,
    get source() {
      return i;
    },
  };
  for (const k of pi(o))
    c = ((O = k.tokens) == null ? void 0 : O.call(x, c)) || c;
  return zy(c, { ...o, fg: d, bg: h, themeName: f, rootStyle: m }, x, b);
}
function zy(n, t, o, a = fo(n)) {
  var S, O, k;
  const i = pi(t),
    c = [],
    d = { type: "root", children: [] },
    { structure: h = "classic", tabindex: f = "0" } = t;
  let m = {
      type: "element",
      tagName: "pre",
      properties: {
        class: `shiki ${t.themeName || ""}`,
        style: t.rootStyle || `background-color:${t.bg};color:${t.fg}`,
        ...(f !== !1 && f != null ? { tabindex: f.toString() } : {}),
        ...Object.fromEntries(
          Array.from(Object.entries(t.meta || {})).filter(
            ([P]) => !P.startsWith("_"),
          ),
        ),
      },
      children: [],
    },
    b = { type: "element", tagName: "code", properties: {}, children: c };
  const v = [],
    y = {
      ...o,
      structure: h,
      addClassToHast: Nm,
      get source() {
        return o.source;
      },
      get tokens() {
        return n;
      },
      get options() {
        return t;
      },
      get root() {
        return d;
      },
      get pre() {
        return m;
      },
      get code() {
        return b;
      },
      get lines() {
        return v;
      },
    };
  if (
    (n.forEach((P, T) => {
      var F, $;
      T &&
        (h === "inline"
          ? d.children.push({
              type: "element",
              tagName: "br",
              properties: {},
              children: [],
            })
          : h === "classic" &&
            c.push({
              type: "text",
              value: `
`,
            }));
      let I = {
          type: "element",
          tagName: "span",
          properties: { class: "line" },
          children: [],
        },
        B = 0;
      for (const N of P) {
        let X = {
          type: "element",
          tagName: "span",
          properties: { ...N.htmlAttrs },
          children: [{ type: "text", value: N.content }],
        };
        const he = Cc(N.htmlStyle || fi(N));
        he && (X.properties.style = he);
        for (const Ce of i)
          X =
            ((F = Ce == null ? void 0 : Ce.span) == null
              ? void 0
              : F.call(y, X, T + 1, B, I, N)) || X;
        h === "inline"
          ? d.children.push(X)
          : h === "classic" && I.children.push(X),
          (B += N.content.length);
      }
      if (h === "classic") {
        for (const N of i)
          I =
            (($ = N == null ? void 0 : N.line) == null
              ? void 0
              : $.call(y, I, T + 1)) || I;
        v.push(I), c.push(I);
      }
    }),
    h === "classic")
  ) {
    for (const P of i)
      b =
        ((S = P == null ? void 0 : P.code) == null ? void 0 : S.call(y, b)) ||
        b;
    m.children.push(b);
    for (const P of i)
      m =
        ((O = P == null ? void 0 : P.pre) == null ? void 0 : O.call(y, m)) || m;
    d.children.push(m);
  }
  let x = d;
  for (const P of i)
    x =
      ((k = P == null ? void 0 : P.root) == null ? void 0 : k.call(y, x)) || x;
  return a && Ii(x, a), x;
}
function Vy(n) {
  return n.map((t) => {
    const o = [];
    let a = "",
      i = 0;
    return (
      t.forEach((c, d) => {
        const f = !(
          c.fontStyle &&
          (c.fontStyle & gt.Underline || c.fontStyle & gt.Strikethrough)
        );
        f && c.content.match(/^\s+$/) && t[d + 1]
          ? (i || (i = c.offset), (a += c.content))
          : a
            ? (f
                ? o.push({ ...c, offset: i, content: a + c.content })
                : o.push({ content: a, offset: i }, c),
              (i = 0),
              (a = ""))
            : o.push(c);
      }),
      o
    );
  });
}
function Uy(n) {
  return n.map((t) =>
    t.flatMap((o) => {
      if (o.content.match(/^\s+$/)) return o;
      const a = o.content.match(/^(\s*)(.*?)(\s*)$/);
      if (!a) return o;
      const [, i, c, d] = a;
      if (!i && !d) return o;
      const h = [{ ...o, offset: o.offset + i.length, content: c }];
      return (
        i && h.unshift({ content: i, offset: o.offset }),
        d && h.push({ content: d, offset: o.offset + i.length + c.length }),
        h
      );
    }),
  );
}
function Gy(n) {
  return n.map((t) => {
    const o = [];
    for (const a of t) {
      if (o.length === 0) {
        o.push({ ...a });
        continue;
      }
      const i = o[o.length - 1],
        c = Cc(i.htmlStyle || fi(i)),
        d = Cc(a.htmlStyle || fi(a)),
        h =
          i.fontStyle &&
          (i.fontStyle & gt.Underline || i.fontStyle & gt.Strikethrough),
        f =
          a.fontStyle &&
          (a.fontStyle & gt.Underline || a.fontStyle & gt.Strikethrough);
      !h && !f && c === d ? (i.content += a.content) : o.push({ ...a });
    }
    return o;
  });
}
const qy = py;
function Wy(n, t, o) {
  var c;
  const a = {
    meta: {},
    options: o,
    codeToHast: (d, h) => gi(n, d, h),
    codeToTokens: (d, h) => mi(n, d, h),
  };
  let i = qy(gi(n, t, o, a));
  for (const d of pi(o))
    i = ((c = d.postprocess) == null ? void 0 : c.call(a, i, o)) || i;
  return i;
}
const Kp = { light: "#333333", dark: "#bbbbbb" },
  Xp = { light: "#fffffe", dark: "#1e1e1e" },
  Qp = "__shiki_resolved";
function Kc(n) {
  var h, f, m, b, v;
  if (n != null && n[Qp]) return n;
  const t = { ...n };
  t.tokenColors &&
    !t.settings &&
    ((t.settings = t.tokenColors), delete t.tokenColors),
    t.type || (t.type = "dark"),
    (t.colorReplacements = { ...t.colorReplacements }),
    t.settings || (t.settings = []);
  let { bg: o, fg: a } = t;
  if (!o || !a) {
    const y = t.settings ? t.settings.find((x) => !x.name && !x.scope) : void 0;
    (h = y == null ? void 0 : y.settings) != null &&
      h.foreground &&
      (a = y.settings.foreground),
      (f = y == null ? void 0 : y.settings) != null &&
        f.background &&
        (o = y.settings.background),
      !a &&
        (m = t == null ? void 0 : t.colors) != null &&
        m["editor.foreground"] &&
        (a = t.colors["editor.foreground"]),
      !o &&
        (b = t == null ? void 0 : t.colors) != null &&
        b["editor.background"] &&
        (o = t.colors["editor.background"]),
      a || (a = t.type === "light" ? Kp.light : Kp.dark),
      o || (o = t.type === "light" ? Xp.light : Xp.dark),
      (t.fg = a),
      (t.bg = o);
  }
  (t.settings[0] && t.settings[0].settings && !t.settings[0].scope) ||
    t.settings.unshift({ settings: { foreground: t.fg, background: t.bg } });
  let i = 0;
  const c = new Map();
  function d(y) {
    var S;
    if (c.has(y)) return c.get(y);
    i += 1;
    const x = `#${i.toString(16).padStart(8, "0").toLowerCase()}`;
    return (S = t.colorReplacements) != null && S[`#${x}`]
      ? d(y)
      : (c.set(y, x), x);
  }
  t.settings = t.settings.map((y) => {
    var k, P;
    const x =
        ((k = y.settings) == null ? void 0 : k.foreground) &&
        !y.settings.foreground.startsWith("#"),
      S =
        ((P = y.settings) == null ? void 0 : P.background) &&
        !y.settings.background.startsWith("#");
    if (!x && !S) return y;
    const O = { ...y, settings: { ...y.settings } };
    if (x) {
      const T = d(y.settings.foreground);
      (t.colorReplacements[T] = y.settings.foreground),
        (O.settings.foreground = T);
    }
    if (S) {
      const T = d(y.settings.background);
      (t.colorReplacements[T] = y.settings.background),
        (O.settings.background = T);
    }
    return O;
  });
  for (const y of Object.keys(t.colors || {}))
    if (
      (y === "editor.foreground" ||
        y === "editor.background" ||
        y.startsWith("terminal.ansi")) &&
      !((v = t.colors[y]) != null && v.startsWith("#"))
    ) {
      const x = d(t.colors[y]);
      (t.colorReplacements[x] = t.colors[y]), (t.colors[y] = x);
    }
  return (
    Object.defineProperty(t, Qp, { enumerable: !1, writable: !1, value: !0 }), t
  );
}
async function Am(n) {
  return Array.from(
    new Set(
      (
        await Promise.all(
          n
            .filter((t) => !by(t))
            .map(
              async (t) =>
                await Rm(t).then((o) => (Array.isArray(o) ? o : [o])),
            ),
        )
      ).flat(),
    ),
  );
}
async function Dm(n) {
  return (
    await Promise.all(n.map(async (o) => (vy(o) ? null : Kc(await Rm(o)))))
  ).filter((o) => !!o);
}
let Ky = 3;
function Xy(n, t = 3) {
  t > Ky || console.trace(`[SHIKI DEPRECATE]: ${n}`);
}
class J0 extends Error {
  constructor(t) {
    super(t), (this.name = "ShikiError");
  }
}
class Qy extends Jv {
  constructor(o, a, i, c = {}) {
    super(o);
    L(this, "_resolvedThemes", new Map());
    L(this, "_resolvedGrammars", new Map());
    L(this, "_langMap", new Map());
    L(this, "_langGraph", new Map());
    L(this, "_textmateThemeCache", new WeakMap());
    L(this, "_loadedThemesCache", null);
    L(this, "_loadedLanguagesCache", null);
    (this._resolver = o),
      (this._themes = a),
      (this._langs = i),
      (this._alias = c),
      this._themes.map((d) => this.loadTheme(d)),
      this.loadLanguages(this._langs);
  }
  getTheme(o) {
    return typeof o == "string"
      ? this._resolvedThemes.get(o)
      : this.loadTheme(o);
  }
  loadTheme(o) {
    const a = Kc(o);
    return (
      a.name &&
        (this._resolvedThemes.set(a.name, a), (this._loadedThemesCache = null)),
      a
    );
  }
  getLoadedThemes() {
    return (
      this._loadedThemesCache ||
        (this._loadedThemesCache = [...this._resolvedThemes.keys()]),
      this._loadedThemesCache
    );
  }
  setTheme(o) {
    let a = this._textmateThemeCache.get(o);
    a || ((a = ii.createFromRawTheme(o)), this._textmateThemeCache.set(o, a)),
      this._syncRegistry.setTheme(a);
  }
  getGrammar(o) {
    if (this._alias[o]) {
      const a = new Set([o]);
      for (; this._alias[o]; ) {
        if (((o = this._alias[o]), a.has(o)))
          throw new J0(
            `Circular alias \`${Array.from(a).join(" -> ")} -> ${o}\``,
          );
        a.add(o);
      }
    }
    return this._resolvedGrammars.get(o);
  }
  loadLanguage(o) {
    var d, h, f, m;
    if (this.getGrammar(o.name)) return;
    const a = new Set(
      [...this._langMap.values()].filter((b) => {
        var v;
        return (v = b.embeddedLangsLazy) == null ? void 0 : v.includes(o.name);
      }),
    );
    this._resolver.addLanguage(o);
    const i = {
      balancedBracketSelectors: o.balancedBracketSelectors || ["*"],
      unbalancedBracketSelectors: o.unbalancedBracketSelectors || [],
    };
    this._syncRegistry._rawGrammars.set(o.scopeName, o);
    const c = this.loadGrammarWithConfiguration(o.scopeName, 1, i);
    if (
      ((c.name = o.name),
      this._resolvedGrammars.set(o.name, c),
      o.aliases &&
        o.aliases.forEach((b) => {
          this._alias[b] = o.name;
        }),
      (this._loadedLanguagesCache = null),
      a.size)
    )
      for (const b of a)
        this._resolvedGrammars.delete(b.name),
          (this._loadedLanguagesCache = null),
          (h =
            (d = this._syncRegistry) == null ? void 0 : d._injectionGrammars) ==
            null || h.delete(b.scopeName),
          (m = (f = this._syncRegistry) == null ? void 0 : f._grammars) ==
            null || m.delete(b.scopeName),
          this.loadLanguage(this._langMap.get(b.name));
  }
  dispose() {
    super.dispose(),
      this._resolvedThemes.clear(),
      this._resolvedGrammars.clear(),
      this._langMap.clear(),
      this._langGraph.clear(),
      (this._loadedThemesCache = null);
  }
  loadLanguages(o) {
    for (const c of o) this.resolveEmbeddedLanguages(c);
    const a = Array.from(this._langGraph.entries()),
      i = a.filter(([c, d]) => !d);
    if (i.length) {
      const c = a
        .filter(([d, h]) => {
          var f;
          return (
            h &&
            ((f = h.embeddedLangs) == null
              ? void 0
              : f.some((m) => i.map(([b]) => b).includes(m)))
          );
        })
        .filter((d) => !i.includes(d));
      throw new J0(
        `Missing languages ${i.map(([d]) => `\`${d}\``).join(", ")}, required by ${c.map(([d]) => `\`${d}\``).join(", ")}`,
      );
    }
    for (const [c, d] of a) this._resolver.addLanguage(d);
    for (const [c, d] of a) this.loadLanguage(d);
  }
  getLoadedLanguages() {
    return (
      this._loadedLanguagesCache ||
        (this._loadedLanguagesCache = [
          ...new Set([
            ...this._resolvedGrammars.keys(),
            ...Object.keys(this._alias),
          ]),
        ]),
      this._loadedLanguagesCache
    );
  }
  resolveEmbeddedLanguages(o) {
    if (
      (this._langMap.set(o.name, o),
      this._langGraph.set(o.name, o),
      o.embeddedLangs)
    )
      for (const a of o.embeddedLangs)
        this._langGraph.set(a, this._langMap.get(a));
  }
}
class Yy {
  constructor(t, o) {
    L(this, "_langs", new Map());
    L(this, "_scopeToLang", new Map());
    L(this, "_injections", new Map());
    L(this, "_onigLib");
    (this._onigLib = {
      createOnigScanner: (a) => t.createScanner(a),
      createOnigString: (a) => t.createString(a),
    }),
      o.forEach((a) => this.addLanguage(a));
  }
  get onigLib() {
    return this._onigLib;
  }
  getLangRegistration(t) {
    return this._langs.get(t);
  }
  loadGrammar(t) {
    return this._scopeToLang.get(t);
  }
  addLanguage(t) {
    this._langs.set(t.name, t),
      t.aliases &&
        t.aliases.forEach((o) => {
          this._langs.set(o, t);
        }),
      this._scopeToLang.set(t.scopeName, t),
      t.injectTo &&
        t.injectTo.forEach((o) => {
          this._injections.get(o) || this._injections.set(o, []),
            this._injections.get(o).push(t.scopeName);
        });
  }
  getInjections(t) {
    const o = t.split(".");
    let a = [];
    for (let i = 1; i <= o.length; i++) {
      const c = o.slice(0, i).join(".");
      a = [...a, ...(this._injections.get(c) || [])];
    }
    return a;
  }
}
let Jr = 0;
function Zy(n) {
  (Jr += 1),
    n.warnings !== !1 &&
      Jr >= 10 &&
      Jr % 10 === 0 &&
      console.warn(
        `[Shiki] ${Jr} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`,
      );
  let t = !1;
  if (!n.engine)
    throw new J0("`engine` option is required for synchronous mode");
  const o = (n.langs || []).flat(1),
    a = (n.themes || []).flat(1).map(Kc),
    i = new Yy(n.engine, o),
    c = new Qy(i, a, o, n.langAlias);
  let d;
  function h(T) {
    k();
    const I = c.getGrammar(typeof T == "string" ? T : T.name);
    if (!I)
      throw new J0(
        `Language \`${T}\` not found, you may need to load it first`,
      );
    return I;
  }
  function f(T) {
    if (T === "none")
      return { bg: "", fg: "", name: "none", settings: [], type: "dark" };
    k();
    const I = c.getTheme(T);
    if (!I)
      throw new J0(`Theme \`${T}\` not found, you may need to load it first`);
    return I;
  }
  function m(T) {
    k();
    const I = f(T);
    d !== T && (c.setTheme(I), (d = T));
    const B = c.getColorMap();
    return { theme: I, colorMap: B };
  }
  function b() {
    return k(), c.getLoadedThemes();
  }
  function v() {
    return k(), c.getLoadedLanguages();
  }
  function y(...T) {
    k(), c.loadLanguages(T.flat(1));
  }
  async function x(...T) {
    return y(await Am(T));
  }
  function S(...T) {
    k();
    for (const I of T.flat(1)) c.loadTheme(I);
  }
  async function O(...T) {
    return k(), S(await Dm(T));
  }
  function k() {
    if (t) throw new J0("Shiki instance has been disposed");
  }
  function P() {
    t || ((t = !0), c.dispose(), (Jr -= 1));
  }
  return {
    setTheme: m,
    getTheme: f,
    getLanguage: h,
    getLoadedThemes: b,
    getLoadedLanguages: v,
    loadLanguage: x,
    loadLanguageSync: y,
    loadTheme: O,
    loadThemeSync: S,
    dispose: P,
    [Symbol.dispose]: P,
  };
}
async function Jy(n) {
  n.engine ||
    Xy(
      "`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.",
    );
  const [t, o, a] = await Promise.all([
    Dm(n.themes || []),
    Am(n.langs || []),
    n.engine,
  ]);
  return Zy({ ...n, themes: t, langs: o, engine: a });
}
async function e4(n) {
  const t = await Jy(n);
  return {
    getLastGrammarState: (...o) => Ny(t, ...o),
    codeToTokensBase: (o, a) => Wc(t, o, a),
    codeToTokensWithThemes: (o, a) => $m(t, o, a),
    codeToTokens: (o, a) => mi(t, o, a),
    codeToHast: (o, a) => gi(t, o, a),
    codeToHtml: (o, a) => Wy(t, o, a),
    getBundledLanguages: () => ({}),
    getBundledThemes: () => ({}),
    ...t,
    getInternalContext: () => t,
  };
}
function t4(n) {
  return n.replace(/[- _]+/g, "").toLowerCase();
}
const n4 = String.raw`(?:[?*+]|\{\d+(?:,\d*)?\})`;
new RegExp(
  String.raw`
\\(?: \d+
  | c[A-Za-z]
  | [gk]<[^>]+>
  | [pPu]\{[^\}]+\}
  | u[A-Fa-f\d]{4}
  | x[A-Fa-f\d]{2}
  )
| \((?: \? (?: [:=!>]
  | <(?:[=!]|[^>]+>)
  | [A-Za-z\-]+:
  | \(DEFINE\)
  ))?
| (?<qBase>${n4})(?<qMod>[?+]?)(?<invalidQ>[?*+\{]?)
| \\?.
`.replace(/\s+/g, ""),
  "gsu",
);
var r4 = String.fromCodePoint,
  o4 = String.raw,
  bi = {
    flagGroups: (() => {
      try {
        new RegExp("(?i:)");
      } catch {
        return !1;
      }
      return !0;
    })(),
    unicodeSets: (() => {
      try {
        new RegExp("", "v");
      } catch {
        return !1;
      }
      return !0;
    })(),
  };
bi.bugFlagVLiteralHyphenIsRange = bi.unicodeSets
  ? (() => {
      try {
        new RegExp(o4`[\d\-a]`, "v");
      } catch {
        return !0;
      }
      return !1;
    })()
  : !1;
bi.bugNestedClassIgnoresNegation =
  bi.unicodeSets && new RegExp("[[^a]]", "v").test("a");
function a4(n, t, o) {
  return n.has(t) || n.set(t, o), n.get(t);
}
`C Other
Cc Control cntrl
Cf Format
Cn Unassigned
Co Private_Use
Cs Surrogate
L Letter
LC Cased_Letter
Ll Lowercase_Letter
Lm Modifier_Letter
Lo Other_Letter
Lt Titlecase_Letter
Lu Uppercase_Letter
M Mark Combining_Mark
Mc Spacing_Mark
Me Enclosing_Mark
Mn Nonspacing_Mark
N Number
Nd Decimal_Number digit
Nl Letter_Number
No Other_Number
P Punctuation punct
Pc Connector_Punctuation
Pd Dash_Punctuation
Pe Close_Punctuation
Pf Final_Punctuation
Pi Initial_Punctuation
Po Other_Punctuation
Ps Open_Punctuation
S Symbol
Sc Currency_Symbol
Sk Modifier_Symbol
Sm Math_Symbol
So Other_Symbol
Z Separator
Zl Line_Separator
Zp Paragraph_Separator
Zs Space_Separator
ASCII
ASCII_Hex_Digit AHex
Alphabetic Alpha
Any
Assigned
Bidi_Control Bidi_C
Bidi_Mirrored Bidi_M
Case_Ignorable CI
Cased
Changes_When_Casefolded CWCF
Changes_When_Casemapped CWCM
Changes_When_Lowercased CWL
Changes_When_NFKC_Casefolded CWKCF
Changes_When_Titlecased CWT
Changes_When_Uppercased CWU
Dash
Default_Ignorable_Code_Point DI
Deprecated Dep
Diacritic Dia
Emoji
Emoji_Component EComp
Emoji_Modifier EMod
Emoji_Modifier_Base EBase
Emoji_Presentation EPres
Extended_Pictographic ExtPict
Extender Ext
Grapheme_Base Gr_Base
Grapheme_Extend Gr_Ext
Hex_Digit Hex
IDS_Binary_Operator IDSB
IDS_Trinary_Operator IDST
ID_Continue IDC
ID_Start IDS
Ideographic Ideo
Join_Control Join_C
Logical_Order_Exception LOE
Lowercase Lower
Math
Noncharacter_Code_Point NChar
Pattern_Syntax Pat_Syn
Pattern_White_Space Pat_WS
Quotation_Mark QMark
Radical
Regional_Indicator RI
Sentence_Terminal STerm
Soft_Dotted SD
Terminal_Punctuation Term
Unified_Ideograph UIdeo
Uppercase Upper
Variation_Selector VS
White_Space space
XID_Continue XIDC
XID_Start XIDS`
  .split(/\s/)
  .map((n) => [t4(n), n]);
new Map([
  Wn(453),
  Wn(456),
  Wn(459),
  Wn(498),
  ...Xl(8072, 8079),
  ...Xl(8088, 8095),
  ...Xl(8104, 8111),
  Wn(8124),
  Wn(8140),
  Wn(8188),
]);
function i4(n, t) {
  const o = [];
  for (let a = n; a <= t; a++) o.push(a);
  return o;
}
function Wn(n) {
  const t = r4(n);
  return [t.toLowerCase(), t];
}
function Xl(n, t) {
  return i4(n, t).map((o) => Wn(o));
}
var Kn,
  Sn,
  m0,
  Xn,
  g0,
  bo,
  wc,
  Yn,
  Fe =
    ((Yn = class extends RegExp {
      constructor(o, a, i) {
        var t = (...qC) => (
          super(...qC),
          f0(this, bo),
          f0(this, Kn, new Map()),
          f0(this, Sn, null),
          f0(this, m0),
          f0(this, Xn, null),
          f0(this, g0, null),
          L(this, "rawOptions", {}),
          this
        );
        const c = !!(i != null && i.lazyCompile);
        if (o instanceof RegExp) {
          if (i)
            throw new Error("Cannot provide options when copying a regexp");
          const d = o;
          t(d, a),
            en(this, m0, d.source),
            d instanceof Yn &&
              (en(this, Kn, _t(d, Kn)),
              en(this, Xn, _t(d, Xn)),
              en(this, g0, _t(d, g0)),
              (this.rawOptions = d.rawOptions));
        } else {
          const d = { hiddenCaptures: [], strategy: null, transfers: [], ...i };
          t(c ? "" : o, a),
            en(this, m0, o),
            en(this, Kn, l4(d.hiddenCaptures, d.transfers)),
            en(this, g0, d.strategy),
            (this.rawOptions = i ?? {});
        }
        c || en(this, Sn, this);
      }
      get source() {
        return _t(this, m0) || "(?:)";
      }
      exec(o) {
        if (!_t(this, Sn)) {
          const { lazyCompile: c, ...d } = this.rawOptions;
          en(this, Sn, new Yn(_t(this, m0), this.flags, d));
        }
        const a = this.global || this.sticky,
          i = this.lastIndex;
        if (_t(this, g0) === "clip_search" && a && i) {
          this.lastIndex = 0;
          const c = Ml(this, bo, wc).call(this, o.slice(i));
          return c && (s4(c, i, o, this.hasIndices), (this.lastIndex += i)), c;
        }
        return Ml(this, bo, wc).call(this, o);
      }
    }),
    (Kn = new WeakMap()),
    (Sn = new WeakMap()),
    (m0 = new WeakMap()),
    (Xn = new WeakMap()),
    (g0 = new WeakMap()),
    (bo = new WeakSet()),
    (wc = function (o) {
      _t(this, Sn).lastIndex = this.lastIndex;
      const a = tp(Yn.prototype, this, "exec").call(_t(this, Sn), o);
      if (((this.lastIndex = _t(this, Sn).lastIndex), !a || !_t(this, Kn).size))
        return a;
      const i = [...a];
      a.length = 1;
      let c;
      this.hasIndices && ((c = [...a.indices]), (a.indices.length = 1));
      const d = [0];
      for (let h = 1; h < i.length; h++) {
        const { hidden: f, transferTo: m } = _t(this, Kn).get(h) ?? {};
        if (
          (f
            ? d.push(null)
            : (d.push(a.length),
              a.push(i[h]),
              this.hasIndices && a.indices.push(c[h])),
          m && i[h] !== void 0)
        ) {
          const b = d[m];
          if (!b) throw new Error(`Invalid capture transfer to "${b}"`);
          if (
            ((a[b] = i[h]), this.hasIndices && (a.indices[b] = c[h]), a.groups)
          ) {
            _t(this, Xn) || en(this, Xn, c4(this.source));
            const v = _t(this, Xn).get(m);
            v &&
              ((a.groups[v] = i[h]),
              this.hasIndices && (a.indices.groups[v] = c[h]));
          }
        }
      }
      return a;
    }),
    Yn);
function s4(n, t, o, a) {
  if (((n.index += t), (n.input = o), a)) {
    const i = n.indices;
    for (let d = 0; d < i.length; d++) {
      const h = i[d];
      h && (i[d] = [h[0] + t, h[1] + t]);
    }
    const c = i.groups;
    c &&
      Object.keys(c).forEach((d) => {
        const h = c[d];
        h && (c[d] = [h[0] + t, h[1] + t]);
      });
  }
}
function l4(n, t) {
  const o = new Map();
  for (const a of n) o.set(a, { hidden: !0 });
  for (const [a, i] of t) for (const c of i) a4(o, c, {}).transferTo = a;
  return o;
}
function c4(n) {
  const t = /(?<capture>\((?:\?<(?![=!])(?<name>[^>]+)>|(?!\?)))|\\?./gsu,
    o = new Map();
  let a = 0,
    i = 0,
    c;
  for (; (c = t.exec(n)); ) {
    const {
      0: d,
      groups: { capture: h, name: f },
    } = c;
    d === "[" ? a++ : a ? d === "]" && a-- : h && (i++, f && o.set(i, f));
  }
  return o;
}
const Yp = 4294967295;
class u4 {
  constructor(t, o = {}) {
    L(this, "regexps");
    (this.patterns = t), (this.options = o);
    const { forgiving: a = !1, cache: i, regexConstructor: c } = o;
    if (!c) throw new Error("Option `regexConstructor` is not provided");
    this.regexps = t.map((d) => {
      if (typeof d != "string") return d;
      const h = i == null ? void 0 : i.get(d);
      if (h) {
        if (h instanceof RegExp) return h;
        if (a) return null;
        throw h;
      }
      try {
        const f = c(d);
        return i == null || i.set(d, f), f;
      } catch (f) {
        if ((i == null || i.set(d, f), a)) return null;
        throw f;
      }
    });
  }
  findNextMatchSync(t, o, a) {
    const i = typeof t == "string" ? t : t.content,
      c = [];
    function d(h, f, m = 0) {
      return {
        index: h,
        captureIndices: f.indices.map((b) =>
          b == null
            ? { start: Yp, end: Yp, length: 0 }
            : { start: b[0] + m, end: b[1] + m, length: b[1] - b[0] },
        ),
      };
    }
    for (let h = 0; h < this.regexps.length; h++) {
      const f = this.regexps[h];
      if (f)
        try {
          f.lastIndex = o;
          const m = f.exec(i);
          if (!m) continue;
          if (m.index === o) return d(h, m, 0);
          c.push([h, m, 0]);
        } catch (m) {
          if (this.options.forgiving) continue;
          throw m;
        }
    }
    if (c.length) {
      const h = Math.min(...c.map((f) => f[1].index));
      for (const [f, m, b] of c) if (m.index === h) return d(f, m, b);
    }
    return null;
  }
}
function d4() {
  const n = {
    cache: new Map(),
    regexConstructor: () => {
      throw new Error("JavaScriptRawEngine: only support precompiled grammar");
    },
  };
  return {
    createScanner(t) {
      return new u4(t, n);
    },
    createString(t) {
      return { content: t };
    },
  };
}
function x0(n) {
  "@babel/helpers - typeof";
  return (
    (x0 =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    x0(n)
  );
}
function f4(n, t) {
  if (x0(n) != "object" || !n) return n;
  var o = n[Symbol.toPrimitive];
  if (o !== void 0) {
    var a = o.call(n, t);
    if (x0(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Hm(n) {
  var t = f4(n, "string");
  return x0(t) == "symbol" ? t : t + "";
}
function oo(n, t, o) {
  return (
    (t = Hm(t)) in n
      ? Object.defineProperty(n, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[t] = o),
    n
  );
}
function Zp(n, t) {
  var o = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    t &&
      (a = a.filter(function (i) {
        return Object.getOwnPropertyDescriptor(n, i).enumerable;
      })),
      o.push.apply(o, a);
  }
  return o;
}
function se(n) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zp(Object(o), !0).forEach(function (a) {
          oo(n, a, o[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
        : Zp(Object(o)).forEach(function (a) {
            Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(o, a));
          });
  }
  return n;
}
function p4(n) {
  if (Array.isArray(n)) return n;
}
function h4(n, t) {
  var o =
    n == null
      ? null
      : (typeof Symbol < "u" && n[Symbol.iterator]) || n["@@iterator"];
  if (o != null) {
    var a,
      i,
      c,
      d,
      h = [],
      f = !0,
      m = !1;
    try {
      if (((c = (o = o.call(n)).next), t === 0)) {
        if (Object(o) !== o) return;
        f = !1;
      } else
        for (
          ;
          !(f = (a = c.call(o)).done) && (h.push(a.value), h.length !== t);
          f = !0
        );
    } catch (b) {
      (m = !0), (i = b);
    } finally {
      try {
        if (!f && o.return != null && ((d = o.return()), Object(d) !== d))
          return;
      } finally {
        if (m) throw i;
      }
    }
    return h;
  }
}
function kc(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var o = 0, a = Array(t); o < t; o++) a[o] = n[o];
  return a;
}
function zm(n, t) {
  if (n) {
    if (typeof n == "string") return kc(n, t);
    var o = {}.toString.call(n).slice(8, -1);
    return (
      o === "Object" && n.constructor && (o = n.constructor.name),
      o === "Map" || o === "Set"
        ? Array.from(n)
        : o === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
          ? kc(n, t)
          : void 0
    );
  }
}
function m4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wn(n, t) {
  return p4(n) || h4(n, t) || zm(n, t) || m4();
}
function g4(n, t) {
  if (n == null) return {};
  var o = {};
  for (var a in n)
    if ({}.hasOwnProperty.call(n, a)) {
      if (t.indexOf(a) !== -1) continue;
      o[a] = n[a];
    }
  return o;
}
function Pn(n, t) {
  if (n == null) return {};
  var o,
    a,
    i = g4(n, t);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (a = 0; a < c.length; a++)
      (o = c[a]),
        t.indexOf(o) === -1 &&
          {}.propertyIsEnumerable.call(n, o) &&
          (i[o] = n[o]);
  }
  return i;
}
var b4 = [
  "defaultInputValue",
  "defaultMenuIsOpen",
  "defaultValue",
  "inputValue",
  "menuIsOpen",
  "onChange",
  "onInputChange",
  "onMenuClose",
  "onMenuOpen",
  "value",
];
function v4(n) {
  var t = n.defaultInputValue,
    o = t === void 0 ? "" : t,
    a = n.defaultMenuIsOpen,
    i = a === void 0 ? !1 : a,
    c = n.defaultValue,
    d = c === void 0 ? null : c,
    h = n.inputValue,
    f = n.menuIsOpen,
    m = n.onChange,
    b = n.onInputChange,
    v = n.onMenuClose,
    y = n.onMenuOpen,
    x = n.value,
    S = Pn(n, b4),
    O = V.useState(h !== void 0 ? h : o),
    k = wn(O, 2),
    P = k[0],
    T = k[1],
    I = V.useState(f !== void 0 ? f : i),
    B = wn(I, 2),
    F = B[0],
    $ = B[1],
    N = V.useState(x !== void 0 ? x : d),
    X = wn(N, 2),
    he = X[0],
    Ce = X[1],
    te = V.useCallback(
      function (q, Y) {
        typeof m == "function" && m(q, Y), Ce(q);
      },
      [m],
    ),
    ce = V.useCallback(
      function (q, Y) {
        var C;
        typeof b == "function" && (C = b(q, Y)), T(C !== void 0 ? C : q);
      },
      [b],
    ),
    ye = V.useCallback(
      function () {
        typeof y == "function" && y(), $(!0);
      },
      [y],
    ),
    Se = V.useCallback(
      function () {
        typeof v == "function" && v(), $(!1);
      },
      [v],
    ),
    ge = h !== void 0 ? h : P,
    me = f !== void 0 ? f : F,
    we = x !== void 0 ? x : he;
  return se(
    se({}, S),
    {},
    {
      inputValue: ge,
      menuIsOpen: me,
      onChange: te,
      onInputChange: ce,
      onMenuClose: Se,
      onMenuOpen: ye,
      value: we,
    },
  );
}
function ue() {
  return (
    (ue = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t];
            for (var a in o) ({}).hasOwnProperty.call(o, a) && (n[a] = o[a]);
          }
          return n;
        }),
    ue.apply(null, arguments)
  );
}
function y4(n, t) {
  if (!(n instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Jp(n, t) {
  for (var o = 0; o < t.length; o++) {
    var a = t[o];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(n, Hm(a.key), a);
  }
}
function _4(n, t, o) {
  return (
    t && Jp(n.prototype, t),
    o && Jp(n, o),
    Object.defineProperty(n, "prototype", { writable: !1 }),
    n
  );
}
function Pc(n, t) {
  return (
    (Pc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (o, a) {
          return (o.__proto__ = a), o;
        }),
    Pc(n, t)
  );
}
function x4(n, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (n.prototype = Object.create(t && t.prototype, {
    constructor: { value: n, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(n, "prototype", { writable: !1 }),
    t && Pc(n, t);
}
function vi(n) {
  return (
    (vi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    vi(n)
  );
}
function Vm() {
  try {
    var n = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Vm = function () {
    return !!n;
  })();
}
function S4(n) {
  if (n === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return n;
}
function C4(n, t) {
  if (t && (x0(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return S4(n);
}
function w4(n) {
  var t = Vm();
  return function () {
    var o,
      a = vi(n);
    if (t) {
      var i = vi(this).constructor;
      o = Reflect.construct(a, arguments, i);
    } else o = a.apply(this, arguments);
    return C4(this, o);
  };
}
function k4(n) {
  if (Array.isArray(n)) return kc(n);
}
function P4(n) {
  if (
    (typeof Symbol < "u" && n[Symbol.iterator] != null) ||
    n["@@iterator"] != null
  )
    return Array.from(n);
}
function O4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xc(n) {
  return k4(n) || P4(n) || zm(n) || O4();
}
function E4(n) {
  if (n.sheet) return n.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === n) return document.styleSheets[t];
}
function T4(n) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", n.key),
    n.nonce !== void 0 && t.setAttribute("nonce", n.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var F4 = (function () {
    function n(o) {
      var a = this;
      (this._insertTag = function (i) {
        var c;
        a.tags.length === 0
          ? a.insertionPoint
            ? (c = a.insertionPoint.nextSibling)
            : a.prepend
              ? (c = a.container.firstChild)
              : (c = a.before)
          : (c = a.tags[a.tags.length - 1].nextSibling),
          a.container.insertBefore(i, c),
          a.tags.push(i);
      }),
        (this.isSpeedy = o.speedy === void 0 ? !0 : o.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = o.nonce),
        (this.key = o.key),
        (this.container = o.container),
        (this.prepend = o.prepend),
        (this.insertionPoint = o.insertionPoint),
        (this.before = null);
    }
    var t = n.prototype;
    return (
      (t.hydrate = function (a) {
        a.forEach(this._insertTag);
      }),
      (t.insert = function (a) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(T4(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var c = E4(i);
          try {
            c.insertRule(a, c.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(a));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (a) {
          var i;
          return (i = a.parentNode) == null ? void 0 : i.removeChild(a);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      n
    );
  })(),
  mt = "-ms-",
  yi = "-moz-",
  Ee = "-webkit-",
  Um = "comm",
  Qc = "rule",
  Yc = "decl",
  j4 = "@import",
  Gm = "@keyframes",
  M4 = "@layer",
  I4 = Math.abs,
  Ri = String.fromCharCode,
  R4 = Object.assign;
function N4(n, t) {
  return ct(n, 0) ^ 45
    ? (((((((t << 2) ^ ct(n, 0)) << 2) ^ ct(n, 1)) << 2) ^ ct(n, 2)) << 2) ^
        ct(n, 3)
    : 0;
}
function qm(n) {
  return n.trim();
}
function L4(n, t) {
  return (n = t.exec(n)) ? n[0] : n;
}
function Te(n, t, o) {
  return n.replace(t, o);
}
function Oc(n, t) {
  return n.indexOf(t);
}
function ct(n, t) {
  return n.charCodeAt(t) | 0;
}
function po(n, t, o) {
  return n.slice(t, o);
}
function un(n) {
  return n.length;
}
function Zc(n) {
  return n.length;
}
function Ba(n, t) {
  return t.push(n), n;
}
function B4(n, t) {
  return n.map(t).join("");
}
var Ni = 1,
  lr = 1,
  Wm = 0,
  Et = 0,
  Ze = 0,
  fr = "";
function Li(n, t, o, a, i, c, d) {
  return {
    value: n,
    root: t,
    parent: o,
    type: a,
    props: i,
    children: c,
    line: Ni,
    column: lr,
    length: d,
    return: "",
  };
}
function eo(n, t) {
  return R4(Li("", null, null, "", null, null, 0), n, { length: -n.length }, t);
}
function $4() {
  return Ze;
}
function A4() {
  return (
    (Ze = Et > 0 ? ct(fr, --Et) : 0), lr--, Ze === 10 && ((lr = 1), Ni--), Ze
  );
}
function Lt() {
  return (
    (Ze = Et < Wm ? ct(fr, Et++) : 0), lr++, Ze === 10 && ((lr = 1), Ni++), Ze
  );
}
function fn() {
  return ct(fr, Et);
}
function Qa() {
  return Et;
}
function _o(n, t) {
  return po(fr, n, t);
}
function ho(n) {
  switch (n) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Km(n) {
  return (Ni = lr = 1), (Wm = un((fr = n))), (Et = 0), [];
}
function Xm(n) {
  return (fr = ""), n;
}
function Ya(n) {
  return qm(_o(Et - 1, Ec(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function D4(n) {
  for (; (Ze = fn()) && Ze < 33; ) Lt();
  return ho(n) > 2 || ho(Ze) > 3 ? "" : " ";
}
function H4(n, t) {
  for (
    ;
    --t &&
    Lt() &&
    !(Ze < 48 || Ze > 102 || (Ze > 57 && Ze < 65) || (Ze > 70 && Ze < 97));

  );
  return _o(n, Qa() + (t < 6 && fn() == 32 && Lt() == 32));
}
function Ec(n) {
  for (; Lt(); )
    switch (Ze) {
      case n:
        return Et;
      case 34:
      case 39:
        n !== 34 && n !== 39 && Ec(Ze);
        break;
      case 40:
        n === 41 && Ec(n);
        break;
      case 92:
        Lt();
        break;
    }
  return Et;
}
function z4(n, t) {
  for (; Lt() && n + Ze !== 57; ) if (n + Ze === 84 && fn() === 47) break;
  return "/*" + _o(t, Et - 1) + "*" + Ri(n === 47 ? n : Lt());
}
function V4(n) {
  for (; !ho(fn()); ) Lt();
  return _o(n, Et);
}
function U4(n) {
  return Xm(Za("", null, null, null, [""], (n = Km(n)), 0, [0], n));
}
function Za(n, t, o, a, i, c, d, h, f) {
  for (
    var m = 0,
      b = 0,
      v = d,
      y = 0,
      x = 0,
      S = 0,
      O = 1,
      k = 1,
      P = 1,
      T = 0,
      I = "",
      B = i,
      F = c,
      $ = a,
      N = I;
    k;

  )
    switch (((S = T), (T = Lt()))) {
      case 40:
        if (S != 108 && ct(N, v - 1) == 58) {
          Oc((N += Te(Ya(T), "&", "&\f")), "&\f") != -1 && (P = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        N += Ya(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        N += D4(S);
        break;
      case 92:
        N += H4(Qa() - 1, 7);
        continue;
      case 47:
        switch (fn()) {
          case 42:
          case 47:
            Ba(G4(z4(Lt(), Qa()), t, o), f);
            break;
          default:
            N += "/";
        }
        break;
      case 123 * O:
        h[m++] = un(N) * P;
      case 125 * O:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            k = 0;
          case 59 + b:
            P == -1 && (N = Te(N, /\f/g, "")),
              x > 0 &&
                un(N) - v &&
                Ba(
                  x > 32
                    ? th(N + ";", a, o, v - 1)
                    : th(Te(N, " ", "") + ";", a, o, v - 2),
                  f,
                );
            break;
          case 59:
            N += ";";
          default:
            if (
              (Ba(($ = eh(N, t, o, m, b, i, h, I, (B = []), (F = []), v)), c),
              T === 123)
            )
              if (b === 0) Za(N, t, $, $, B, c, v, h, F);
              else
                switch (y === 99 && ct(N, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Za(
                      n,
                      $,
                      $,
                      a && Ba(eh(n, $, $, 0, 0, i, h, I, i, (B = []), v), F),
                      i,
                      F,
                      v,
                      h,
                      a ? B : F,
                    );
                    break;
                  default:
                    Za(N, $, $, $, [""], F, 0, h, F);
                }
        }
        (m = b = x = 0), (O = P = 1), (I = N = ""), (v = d);
        break;
      case 58:
        (v = 1 + un(N)), (x = S);
      default:
        if (O < 1) {
          if (T == 123) --O;
          else if (T == 125 && O++ == 0 && A4() == 125) continue;
        }
        switch (((N += Ri(T)), T * O)) {
          case 38:
            P = b > 0 ? 1 : ((N += "\f"), -1);
            break;
          case 44:
            (h[m++] = (un(N) - 1) * P), (P = 1);
            break;
          case 64:
            fn() === 45 && (N += Ya(Lt())),
              (y = fn()),
              (b = v = un((I = N += V4(Qa())))),
              T++;
            break;
          case 45:
            S === 45 && un(N) == 2 && (O = 0);
        }
    }
  return c;
}
function eh(n, t, o, a, i, c, d, h, f, m, b) {
  for (
    var v = i - 1, y = i === 0 ? c : [""], x = Zc(y), S = 0, O = 0, k = 0;
    S < a;
    ++S
  )
    for (var P = 0, T = po(n, v + 1, (v = I4((O = d[S])))), I = n; P < x; ++P)
      (I = qm(O > 0 ? y[P] + " " + T : Te(T, /&\f/g, y[P]))) && (f[k++] = I);
  return Li(n, t, o, i === 0 ? Qc : h, f, m, b);
}
function G4(n, t, o) {
  return Li(n, t, o, Um, Ri($4()), po(n, 2, -2), 0);
}
function th(n, t, o, a) {
  return Li(n, t, o, Yc, po(n, 0, a), po(n, a + 1, -1), a);
}
function nr(n, t) {
  for (var o = "", a = Zc(n), i = 0; i < a; i++) o += t(n[i], i, n, t) || "";
  return o;
}
function q4(n, t, o, a) {
  switch (n.type) {
    case M4:
      if (n.children.length) break;
    case j4:
    case Yc:
      return (n.return = n.return || n.value);
    case Um:
      return "";
    case Gm:
      return (n.return = n.value + "{" + nr(n.children, a) + "}");
    case Qc:
      n.value = n.props.join(",");
  }
  return un((o = nr(n.children, a)))
    ? (n.return = n.value + "{" + o + "}")
    : "";
}
function W4(n) {
  var t = Zc(n);
  return function (o, a, i, c) {
    for (var d = "", h = 0; h < t; h++) d += n[h](o, a, i, c) || "";
    return d;
  };
}
function K4(n) {
  return function (t) {
    t.root || ((t = t.return) && n(t));
  };
}
function X4(n) {
  var t = Object.create(null);
  return function (o) {
    return t[o] === void 0 && (t[o] = n(o)), t[o];
  };
}
var Q4 = function (t, o, a) {
    for (
      var i = 0, c = 0;
      (i = c), (c = fn()), i === 38 && c === 12 && (o[a] = 1), !ho(c);

    )
      Lt();
    return _o(t, Et);
  },
  Y4 = function (t, o) {
    var a = -1,
      i = 44;
    do
      switch (ho(i)) {
        case 0:
          i === 38 && fn() === 12 && (o[a] = 1), (t[a] += Q4(Et - 1, o, a));
          break;
        case 2:
          t[a] += Ya(i);
          break;
        case 4:
          if (i === 44) {
            (t[++a] = fn() === 58 ? "&\f" : ""), (o[a] = t[a].length);
            break;
          }
        default:
          t[a] += Ri(i);
      }
    while ((i = Lt()));
    return t;
  },
  Z4 = function (t, o) {
    return Xm(Y4(Km(t), o));
  },
  nh = new WeakMap(),
  J4 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var o = t.value,
          a = t.parent,
          i = t.column === a.column && t.line === a.line;
        a.type !== "rule";

      )
        if (((a = a.parent), !a)) return;
      if (
        !(t.props.length === 1 && o.charCodeAt(0) !== 58 && !nh.get(a)) &&
        !i
      ) {
        nh.set(t, !0);
        for (
          var c = [], d = Z4(o, c), h = a.props, f = 0, m = 0;
          f < d.length;
          f++
        )
          for (var b = 0; b < h.length; b++, m++)
            t.props[m] = c[f] ? d[f].replace(/&\f/g, h[b]) : h[b] + " " + d[f];
      }
    }
  },
  e3 = function (t) {
    if (t.type === "decl") {
      var o = t.value;
      o.charCodeAt(0) === 108 &&
        o.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Qm(n, t) {
  switch (N4(n, t)) {
    case 5103:
      return Ee + "print-" + n + n;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Ee + n + n;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ee + n + yi + n + mt + n + n;
    case 6828:
    case 4268:
      return Ee + n + mt + n + n;
    case 6165:
      return Ee + n + mt + "flex-" + n + n;
    case 5187:
      return (
        Ee + n + Te(n, /(\w+).+(:[^]+)/, Ee + "box-$1$2" + mt + "flex-$1$2") + n
      );
    case 5443:
      return Ee + n + mt + "flex-item-" + Te(n, /flex-|-self/, "") + n;
    case 4675:
      return (
        Ee +
        n +
        mt +
        "flex-line-pack" +
        Te(n, /align-content|flex-|-self/, "") +
        n
      );
    case 5548:
      return Ee + n + mt + Te(n, "shrink", "negative") + n;
    case 5292:
      return Ee + n + mt + Te(n, "basis", "preferred-size") + n;
    case 6060:
      return (
        Ee +
        "box-" +
        Te(n, "-grow", "") +
        Ee +
        n +
        mt +
        Te(n, "grow", "positive") +
        n
      );
    case 4554:
      return Ee + Te(n, /([^-])(transform)/g, "$1" + Ee + "$2") + n;
    case 6187:
      return (
        Te(
          Te(Te(n, /(zoom-|grab)/, Ee + "$1"), /(image-set)/, Ee + "$1"),
          n,
          "",
        ) + n
      );
    case 5495:
    case 3959:
      return Te(n, /(image-set\([^]*)/, Ee + "$1$`$1");
    case 4968:
      return (
        Te(
          Te(n, /(.+:)(flex-)?(.*)/, Ee + "box-pack:$3" + mt + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        Ee +
        n +
        n
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Te(n, /(.+)-inline(.+)/, Ee + "$1$2") + n;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (un(n) - 1 - t > 6)
        switch (ct(n, t + 1)) {
          case 109:
            if (ct(n, t + 4) !== 45) break;
          case 102:
            return (
              Te(
                n,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Ee +
                  "$2-$3$1" +
                  yi +
                  (ct(n, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + n
            );
          case 115:
            return ~Oc(n, "stretch")
              ? Qm(Te(n, "stretch", "fill-available"), t) + n
              : n;
        }
      break;
    case 4949:
      if (ct(n, t + 1) !== 115) break;
    case 6444:
      switch (ct(n, un(n) - 3 - (~Oc(n, "!important") && 10))) {
        case 107:
          return Te(n, ":", ":" + Ee) + n;
        case 101:
          return (
            Te(
              n,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Ee +
                (ct(n, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Ee +
                "$2$3$1" +
                mt +
                "$2box$3",
            ) + n
          );
      }
      break;
    case 5936:
      switch (ct(n, t + 11)) {
        case 114:
          return Ee + n + mt + Te(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        case 108:
          return Ee + n + mt + Te(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        case 45:
          return Ee + n + mt + Te(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
      return Ee + n + mt + n + n;
  }
  return n;
}
var t3 = function (t, o, a, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Yc:
          t.return = Qm(t.value, t.length);
          break;
        case Gm:
          return nr([eo(t, { value: Te(t.value, "@", "@" + Ee) })], i);
        case Qc:
          if (t.length)
            return B4(t.props, function (c) {
              switch (L4(c, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return nr(
                    [eo(t, { props: [Te(c, /:(read-\w+)/, ":" + yi + "$1")] })],
                    i,
                  );
                case "::placeholder":
                  return nr(
                    [
                      eo(t, {
                        props: [Te(c, /:(plac\w+)/, ":" + Ee + "input-$1")],
                      }),
                      eo(t, { props: [Te(c, /:(plac\w+)/, ":" + yi + "$1")] }),
                      eo(t, { props: [Te(c, /:(plac\w+)/, mt + "input-$1")] }),
                    ],
                    i,
                  );
              }
              return "";
            });
      }
  },
  n3 = [t3],
  r3 = function (t) {
    var o = t.key;
    if (o === "css") {
      var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(a, function (O) {
        var k = O.getAttribute("data-emotion");
        k.indexOf(" ") !== -1 &&
          (document.head.appendChild(O), O.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || n3,
      c = {},
      d,
      h = [];
    (d = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
        function (O) {
          for (
            var k = O.getAttribute("data-emotion").split(" "), P = 1;
            P < k.length;
            P++
          )
            c[k[P]] = !0;
          h.push(O);
        },
      );
    var f,
      m = [J4, e3];
    {
      var b,
        v = [
          q4,
          K4(function (O) {
            b.insert(O);
          }),
        ],
        y = W4(m.concat(i, v)),
        x = function (k) {
          return nr(U4(k), y);
        };
      f = function (k, P, T, I) {
        (b = T),
          x(k ? k + "{" + P.styles + "}" : P.styles),
          I && (S.inserted[P.name] = !0);
      };
    }
    var S = {
      key: o,
      sheet: new F4({
        key: o,
        container: d,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: c,
      registered: {},
      insert: f,
    };
    return S.sheet.hydrate(h), S;
  },
  Ql = { exports: {} },
  je = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rh;
function o3() {
  if (rh) return je;
  rh = 1;
  var n = typeof Symbol == "function" && Symbol.for,
    t = n ? Symbol.for("react.element") : 60103,
    o = n ? Symbol.for("react.portal") : 60106,
    a = n ? Symbol.for("react.fragment") : 60107,
    i = n ? Symbol.for("react.strict_mode") : 60108,
    c = n ? Symbol.for("react.profiler") : 60114,
    d = n ? Symbol.for("react.provider") : 60109,
    h = n ? Symbol.for("react.context") : 60110,
    f = n ? Symbol.for("react.async_mode") : 60111,
    m = n ? Symbol.for("react.concurrent_mode") : 60111,
    b = n ? Symbol.for("react.forward_ref") : 60112,
    v = n ? Symbol.for("react.suspense") : 60113,
    y = n ? Symbol.for("react.suspense_list") : 60120,
    x = n ? Symbol.for("react.memo") : 60115,
    S = n ? Symbol.for("react.lazy") : 60116,
    O = n ? Symbol.for("react.block") : 60121,
    k = n ? Symbol.for("react.fundamental") : 60117,
    P = n ? Symbol.for("react.responder") : 60118,
    T = n ? Symbol.for("react.scope") : 60119;
  function I(F) {
    if (typeof F == "object" && F !== null) {
      var $ = F.$$typeof;
      switch ($) {
        case t:
          switch (((F = F.type), F)) {
            case f:
            case m:
            case a:
            case c:
            case i:
            case v:
              return F;
            default:
              switch (((F = F && F.$$typeof), F)) {
                case h:
                case b:
                case S:
                case x:
                case d:
                  return F;
                default:
                  return $;
              }
          }
        case o:
          return $;
      }
    }
  }
  function B(F) {
    return I(F) === m;
  }
  return (
    (je.AsyncMode = f),
    (je.ConcurrentMode = m),
    (je.ContextConsumer = h),
    (je.ContextProvider = d),
    (je.Element = t),
    (je.ForwardRef = b),
    (je.Fragment = a),
    (je.Lazy = S),
    (je.Memo = x),
    (je.Portal = o),
    (je.Profiler = c),
    (je.StrictMode = i),
    (je.Suspense = v),
    (je.isAsyncMode = function (F) {
      return B(F) || I(F) === f;
    }),
    (je.isConcurrentMode = B),
    (je.isContextConsumer = function (F) {
      return I(F) === h;
    }),
    (je.isContextProvider = function (F) {
      return I(F) === d;
    }),
    (je.isElement = function (F) {
      return typeof F == "object" && F !== null && F.$$typeof === t;
    }),
    (je.isForwardRef = function (F) {
      return I(F) === b;
    }),
    (je.isFragment = function (F) {
      return I(F) === a;
    }),
    (je.isLazy = function (F) {
      return I(F) === S;
    }),
    (je.isMemo = function (F) {
      return I(F) === x;
    }),
    (je.isPortal = function (F) {
      return I(F) === o;
    }),
    (je.isProfiler = function (F) {
      return I(F) === c;
    }),
    (je.isStrictMode = function (F) {
      return I(F) === i;
    }),
    (je.isSuspense = function (F) {
      return I(F) === v;
    }),
    (je.isValidElementType = function (F) {
      return (
        typeof F == "string" ||
        typeof F == "function" ||
        F === a ||
        F === m ||
        F === c ||
        F === i ||
        F === v ||
        F === y ||
        (typeof F == "object" &&
          F !== null &&
          (F.$$typeof === S ||
            F.$$typeof === x ||
            F.$$typeof === d ||
            F.$$typeof === h ||
            F.$$typeof === b ||
            F.$$typeof === k ||
            F.$$typeof === P ||
            F.$$typeof === T ||
            F.$$typeof === O))
      );
    }),
    (je.typeOf = I),
    je
  );
}
var oh;
function a3() {
  return oh || ((oh = 1), (Ql.exports = o3())), Ql.exports;
}
var Yl, ah;
function i3() {
  if (ah) return Yl;
  ah = 1;
  var n = a3(),
    t = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    o = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    a = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    i = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    c = {};
  (c[n.ForwardRef] = a), (c[n.Memo] = i);
  function d(S) {
    return n.isMemo(S) ? i : c[S.$$typeof] || t;
  }
  var h = Object.defineProperty,
    f = Object.getOwnPropertyNames,
    m = Object.getOwnPropertySymbols,
    b = Object.getOwnPropertyDescriptor,
    v = Object.getPrototypeOf,
    y = Object.prototype;
  function x(S, O, k) {
    if (typeof O != "string") {
      if (y) {
        var P = v(O);
        P && P !== y && x(S, P, k);
      }
      var T = f(O);
      m && (T = T.concat(m(O)));
      for (var I = d(S), B = d(O), F = 0; F < T.length; ++F) {
        var $ = T[F];
        if (!o[$] && !(k && k[$]) && !(B && B[$]) && !(I && I[$])) {
          var N = b(O, $);
          try {
            h(S, $, N);
          } catch {}
        }
      }
    }
    return S;
  }
  return (Yl = x), Yl;
}
i3();
var s3 = !0;
function l3(n, t, o) {
  var a = "";
  return (
    o.split(" ").forEach(function (i) {
      n[i] !== void 0 ? t.push(n[i] + ";") : i && (a += i + " ");
    }),
    a
  );
}
var Ym = function (t, o, a) {
    var i = t.key + "-" + o.name;
    (a === !1 || s3 === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = o.styles);
  },
  c3 = function (t, o, a) {
    Ym(t, o, a);
    var i = t.key + "-" + o.name;
    if (t.inserted[o.name] === void 0) {
      var c = o;
      do t.insert(o === c ? "." + i : "", c, t.sheet, !0), (c = c.next);
      while (c !== void 0);
    }
  };
function u3(n) {
  for (var t = 0, o, a = 0, i = n.length; i >= 4; ++a, i -= 4)
    (o =
      (n.charCodeAt(a) & 255) |
      ((n.charCodeAt(++a) & 255) << 8) |
      ((n.charCodeAt(++a) & 255) << 16) |
      ((n.charCodeAt(++a) & 255) << 24)),
      (o = (o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)),
      (o ^= o >>> 24),
      (t =
        ((o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (n.charCodeAt(a + 2) & 255) << 16;
    case 2:
      t ^= (n.charCodeAt(a + 1) & 255) << 8;
    case 1:
      (t ^= n.charCodeAt(a) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var d3 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  f3 = /[A-Z]|^ms/g,
  p3 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Zm = function (t) {
    return t.charCodeAt(1) === 45;
  },
  ih = function (t) {
    return t != null && typeof t != "boolean";
  },
  Zl = X4(function (n) {
    return Zm(n) ? n : n.replace(f3, "-$&").toLowerCase();
  }),
  sh = function (t, o) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof o == "string")
          return o.replace(p3, function (a, i, c) {
            return (dn = { name: i, styles: c, next: dn }), i;
          });
    }
    return d3[t] !== 1 && !Zm(t) && typeof o == "number" && o !== 0
      ? o + "px"
      : o;
  };
function mo(n, t, o) {
  if (o == null) return "";
  var a = o;
  if (a.__emotion_styles !== void 0) return a;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var i = o;
      if (i.anim === 1)
        return (dn = { name: i.name, styles: i.styles, next: dn }), i.name;
      var c = o;
      if (c.styles !== void 0) {
        var d = c.next;
        if (d !== void 0)
          for (; d !== void 0; )
            (dn = { name: d.name, styles: d.styles, next: dn }), (d = d.next);
        var h = c.styles + ";";
        return h;
      }
      return h3(n, t, o);
    }
    case "function": {
      if (n !== void 0) {
        var f = dn,
          m = o(n);
        return (dn = f), mo(n, t, m);
      }
      break;
    }
  }
  var b = o;
  return b;
}
function h3(n, t, o) {
  var a = "";
  if (Array.isArray(o))
    for (var i = 0; i < o.length; i++) a += mo(n, t, o[i]) + ";";
  else
    for (var c in o) {
      var d = o[c];
      if (typeof d != "object") {
        var h = d;
        ih(h) && (a += Zl(c) + ":" + sh(c, h) + ";");
      } else if (Array.isArray(d) && typeof d[0] == "string" && t == null)
        for (var f = 0; f < d.length; f++)
          ih(d[f]) && (a += Zl(c) + ":" + sh(c, d[f]) + ";");
      else {
        var m = mo(n, t, d);
        switch (c) {
          case "animation":
          case "animationName": {
            a += Zl(c) + ":" + m + ";";
            break;
          }
          default:
            a += c + "{" + m + "}";
        }
      }
    }
  return a;
}
var lh = /label:\s*([^\s;{]+)\s*(;|$)/g,
  dn;
function Jm(n, t, o) {
  if (
    n.length === 1 &&
    typeof n[0] == "object" &&
    n[0] !== null &&
    n[0].styles !== void 0
  )
    return n[0];
  var a = !0,
    i = "";
  dn = void 0;
  var c = n[0];
  if (c == null || c.raw === void 0) (a = !1), (i += mo(o, t, c));
  else {
    var d = c;
    i += d[0];
  }
  for (var h = 1; h < n.length; h++)
    if (((i += mo(o, t, n[h])), a)) {
      var f = c;
      i += f[h];
    }
  lh.lastIndex = 0;
  for (var m = "", b; (b = lh.exec(i)) !== null; ) m += "-" + b[1];
  var v = u3(i) + m;
  return { name: v, styles: i, next: dn };
}
var m3 = function (t) {
    return t();
  },
  g3 = ip.useInsertionEffect ? ip.useInsertionEffect : !1,
  b3 = g3 || m3,
  e1 = V.createContext(typeof HTMLElement < "u" ? r3({ key: "css" }) : null);
e1.Provider;
var v3 = function (t) {
    return V.forwardRef(function (o, a) {
      var i = V.useContext(e1);
      return t(o, i, a);
    });
  },
  y3 = V.createContext({}),
  Jc = {}.hasOwnProperty,
  Tc = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  _3 = function (t, o) {
    var a = {};
    for (var i in o) Jc.call(o, i) && (a[i] = o[i]);
    return (a[Tc] = t), a;
  },
  x3 = function (t) {
    var o = t.cache,
      a = t.serialized,
      i = t.isStringTag;
    return (
      Ym(o, a, i),
      b3(function () {
        return c3(o, a, i);
      }),
      null
    );
  },
  S3 = v3(function (n, t, o) {
    var a = n.css;
    typeof a == "string" && t.registered[a] !== void 0 && (a = t.registered[a]);
    var i = n[Tc],
      c = [a],
      d = "";
    typeof n.className == "string"
      ? (d = l3(t.registered, c, n.className))
      : n.className != null && (d = n.className + " ");
    var h = Jm(c, void 0, V.useContext(y3));
    d += t.key + "-" + h.name;
    var f = {};
    for (var m in n) Jc.call(n, m) && m !== "css" && m !== Tc && (f[m] = n[m]);
    return (
      (f.className = d),
      o && (f.ref = o),
      V.createElement(
        V.Fragment,
        null,
        V.createElement(x3, {
          cache: t,
          serialized: h,
          isStringTag: typeof i == "string",
        }),
        V.createElement(i, f),
      )
    );
  }),
  C3 = S3,
  re = function (t, o) {
    var a = arguments;
    if (o == null || !Jc.call(o, "css"))
      return V.createElement.apply(void 0, a);
    var i = a.length,
      c = new Array(i);
    (c[0] = C3), (c[1] = _3(t, o));
    for (var d = 2; d < i; d++) c[d] = a[d];
    return V.createElement.apply(null, c);
  };
(function (n) {
  var t;
  t || (t = n.JSX || (n.JSX = {}));
})(re || (re = {}));
function eu() {
  for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++)
    t[o] = arguments[o];
  return Jm(t);
}
function w3() {
  var n = eu.apply(void 0, arguments),
    t = "animation-" + n.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + n.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
}
function k3(n, t) {
  return (
    t || (t = n.slice(0)),
    Object.freeze(
      Object.defineProperties(n, { raw: { value: Object.freeze(t) } }),
    )
  );
}
var P3 = Nh();
const O3 = Math.min,
  E3 = Math.max,
  _i = Math.round,
  $a = Math.floor,
  xi = (n) => ({ x: n, y: n });
function T3(n) {
  const { x: t, y: o, width: a, height: i } = n;
  return {
    width: a,
    height: i,
    top: o,
    left: t,
    right: t + a,
    bottom: o + i,
    x: t,
    y: o,
  };
}
function Bi() {
  return typeof window < "u";
}
function t1(n) {
  return r1(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function kn(n) {
  var t;
  return (
    (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function n1(n) {
  var t;
  return (t = (r1(n) ? n.ownerDocument : n.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function r1(n) {
  return Bi() ? n instanceof Node || n instanceof kn(n).Node : !1;
}
function F3(n) {
  return Bi() ? n instanceof Element || n instanceof kn(n).Element : !1;
}
function tu(n) {
  return Bi() ? n instanceof HTMLElement || n instanceof kn(n).HTMLElement : !1;
}
function ch(n) {
  return !Bi() || typeof ShadowRoot > "u"
    ? !1
    : n instanceof ShadowRoot || n instanceof kn(n).ShadowRoot;
}
function o1(n) {
  const { overflow: t, overflowX: o, overflowY: a, display: i } = nu(n);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + a + o) &&
    !["inline", "contents"].includes(i)
  );
}
function j3() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function M3(n) {
  return ["html", "body", "#document"].includes(t1(n));
}
function nu(n) {
  return kn(n).getComputedStyle(n);
}
function I3(n) {
  if (t1(n) === "html") return n;
  const t = n.assignedSlot || n.parentNode || (ch(n) && n.host) || n1(n);
  return ch(t) ? t.host : t;
}
function a1(n) {
  const t = I3(n);
  return M3(t)
    ? n.ownerDocument
      ? n.ownerDocument.body
      : n.body
    : tu(t) && o1(t)
      ? t
      : a1(t);
}
function Si(n, t, o) {
  var a;
  t === void 0 && (t = []), o === void 0 && (o = !0);
  const i = a1(n),
    c = i === ((a = n.ownerDocument) == null ? void 0 : a.body),
    d = kn(i);
  if (c) {
    const h = Fc(d);
    return t.concat(
      d,
      d.visualViewport || [],
      o1(i) ? i : [],
      h && o ? Si(h) : [],
    );
  }
  return t.concat(i, Si(i, [], o));
}
function Fc(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function R3(n) {
  const t = nu(n);
  let o = parseFloat(t.width) || 0,
    a = parseFloat(t.height) || 0;
  const i = tu(n),
    c = i ? n.offsetWidth : o,
    d = i ? n.offsetHeight : a,
    h = _i(o) !== c || _i(a) !== d;
  return h && ((o = c), (a = d)), { width: o, height: a, $: h };
}
function ru(n) {
  return F3(n) ? n : n.contextElement;
}
function uh(n) {
  const t = ru(n);
  if (!tu(t)) return xi(1);
  const o = t.getBoundingClientRect(),
    { width: a, height: i, $: c } = R3(t);
  let d = (c ? _i(o.width) : o.width) / a,
    h = (c ? _i(o.height) : o.height) / i;
  return (
    (!d || !Number.isFinite(d)) && (d = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    { x: d, y: h }
  );
}
const N3 = xi(0);
function L3(n) {
  const t = kn(n);
  return !j3() || !t.visualViewport
    ? N3
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function B3(n, t, o) {
  return !1;
}
function dh(n, t, o, a) {
  t === void 0 && (t = !1);
  const i = n.getBoundingClientRect(),
    c = ru(n);
  let d = xi(1);
  t && (d = uh(n));
  const h = B3() ? L3(c) : xi(0);
  let f = (i.left + h.x) / d.x,
    m = (i.top + h.y) / d.y,
    b = i.width / d.x,
    v = i.height / d.y;
  if (c) {
    const y = kn(c),
      x = a;
    let S = y,
      O = Fc(S);
    for (; O && a && x !== S; ) {
      const k = uh(O),
        P = O.getBoundingClientRect(),
        T = nu(O),
        I = P.left + (O.clientLeft + parseFloat(T.paddingLeft)) * k.x,
        B = P.top + (O.clientTop + parseFloat(T.paddingTop)) * k.y;
      (f *= k.x),
        (m *= k.y),
        (b *= k.x),
        (v *= k.y),
        (f += I),
        (m += B),
        (S = kn(O)),
        (O = Fc(S));
    }
  }
  return T3({ width: b, height: v, x: f, y: m });
}
function i1(n, t) {
  return (
    n.x === t.x && n.y === t.y && n.width === t.width && n.height === t.height
  );
}
function $3(n, t) {
  let o = null,
    a;
  const i = n1(n);
  function c() {
    var h;
    clearTimeout(a), (h = o) == null || h.disconnect(), (o = null);
  }
  function d(h, f) {
    h === void 0 && (h = !1), f === void 0 && (f = 1), c();
    const m = n.getBoundingClientRect(),
      { left: b, top: v, width: y, height: x } = m;
    if ((h || t(), !y || !x)) return;
    const S = $a(v),
      O = $a(i.clientWidth - (b + y)),
      k = $a(i.clientHeight - (v + x)),
      P = $a(b),
      I = {
        rootMargin: -S + "px " + -O + "px " + -k + "px " + -P + "px",
        threshold: E3(0, O3(1, f)) || 1,
      };
    let B = !0;
    function F($) {
      const N = $[0].intersectionRatio;
      if (N !== f) {
        if (!B) return d();
        N
          ? d(!1, N)
          : (a = setTimeout(() => {
              d(!1, 1e-7);
            }, 1e3));
      }
      N === 1 && !i1(m, n.getBoundingClientRect()) && d(), (B = !1);
    }
    try {
      o = new IntersectionObserver(F, { ...I, root: i.ownerDocument });
    } catch {
      o = new IntersectionObserver(F, I);
    }
    o.observe(n);
  }
  return d(!0), c;
}
function A3(n, t, o, a) {
  a === void 0 && (a = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: c = !0,
      elementResize: d = typeof ResizeObserver == "function",
      layoutShift: h = typeof IntersectionObserver == "function",
      animationFrame: f = !1,
    } = a,
    m = ru(n),
    b = i || c ? [...(m ? Si(m) : []), ...Si(t)] : [];
  b.forEach((P) => {
    i && P.addEventListener("scroll", o, { passive: !0 }),
      c && P.addEventListener("resize", o);
  });
  const v = m && h ? $3(m, o) : null;
  let y = -1,
    x = null;
  d &&
    ((x = new ResizeObserver((P) => {
      let [T] = P;
      T &&
        T.target === m &&
        x &&
        (x.unobserve(t),
        cancelAnimationFrame(y),
        (y = requestAnimationFrame(() => {
          var I;
          (I = x) == null || I.observe(t);
        }))),
        o();
    })),
    m && !f && x.observe(m),
    x.observe(t));
  let S,
    O = f ? dh(n) : null;
  f && k();
  function k() {
    const P = dh(n);
    O && !i1(O, P) && o(), (O = P), (S = requestAnimationFrame(k));
  }
  return (
    o(),
    () => {
      var P;
      b.forEach((T) => {
        i && T.removeEventListener("scroll", o),
          c && T.removeEventListener("resize", o);
      }),
        v == null || v(),
        (P = x) == null || P.disconnect(),
        (x = null),
        f && cancelAnimationFrame(S);
    }
  );
}
var jc = V.useLayoutEffect,
  D3 = [
    "className",
    "clearValue",
    "cx",
    "getStyles",
    "getClassNames",
    "getValue",
    "hasValue",
    "isMulti",
    "isRtl",
    "options",
    "selectOption",
    "selectProps",
    "setValue",
    "theme",
  ],
  Ci = function () {};
function H3(n, t) {
  return t ? (t[0] === "-" ? n + t : n + "__" + t) : n;
}
function z3(n, t) {
  for (
    var o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), i = 2;
    i < o;
    i++
  )
    a[i - 2] = arguments[i];
  var c = [].concat(a);
  if (t && n)
    for (var d in t) t.hasOwnProperty(d) && t[d] && c.push("".concat(H3(n, d)));
  return c
    .filter(function (h) {
      return h;
    })
    .map(function (h) {
      return String(h).trim();
    })
    .join(" ");
}
var fh = function (t) {
    return Y3(t)
      ? t.filter(Boolean)
      : x0(t) === "object" && t !== null
        ? [t]
        : [];
  },
  s1 = function (t) {
    t.className,
      t.clearValue,
      t.cx,
      t.getStyles,
      t.getClassNames,
      t.getValue,
      t.hasValue,
      t.isMulti,
      t.isRtl,
      t.options,
      t.selectOption,
      t.selectProps,
      t.setValue,
      t.theme;
    var o = Pn(t, D3);
    return se({}, o);
  },
  Ge = function (t, o, a) {
    var i = t.cx,
      c = t.getStyles,
      d = t.getClassNames,
      h = t.className;
    return { css: c(o, t), className: i(a ?? {}, d(o, t), h) };
  };
function $i(n) {
  return [document.documentElement, document.body, window].indexOf(n) > -1;
}
function V3(n) {
  return $i(n) ? window.innerHeight : n.clientHeight;
}
function l1(n) {
  return $i(n) ? window.pageYOffset : n.scrollTop;
}
function wi(n, t) {
  if ($i(n)) {
    window.scrollTo(0, t);
    return;
  }
  n.scrollTop = t;
}
function U3(n) {
  var t = getComputedStyle(n),
    o = t.position === "absolute",
    a = /(auto|scroll)/;
  if (t.position === "fixed") return document.documentElement;
  for (var i = n; (i = i.parentElement); )
    if (
      ((t = getComputedStyle(i)),
      !(o && t.position === "static") &&
        a.test(t.overflow + t.overflowY + t.overflowX))
    )
      return i;
  return document.documentElement;
}
function G3(n, t, o, a) {
  return o * ((n = n / a - 1) * n * n + 1) + t;
}
function Aa(n, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200,
    a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Ci,
    i = l1(n),
    c = t - i,
    d = 10,
    h = 0;
  function f() {
    h += d;
    var m = G3(h, i, c, o);
    wi(n, m), h < o ? window.requestAnimationFrame(f) : a(n);
  }
  f();
}
function ph(n, t) {
  var o = n.getBoundingClientRect(),
    a = t.getBoundingClientRect(),
    i = t.offsetHeight / 3;
  a.bottom + i > o.bottom
    ? wi(
        n,
        Math.min(
          t.offsetTop + t.clientHeight - n.offsetHeight + i,
          n.scrollHeight,
        ),
      )
    : a.top - i < o.top && wi(n, Math.max(t.offsetTop - i, 0));
}
function q3(n) {
  var t = n.getBoundingClientRect();
  return {
    bottom: t.bottom,
    height: t.height,
    left: t.left,
    right: t.right,
    top: t.top,
    width: t.width,
  };
}
function hh() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function W3() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  } catch {
    return !1;
  }
}
var c1 = !1,
  K3 = {
    get passive() {
      return (c1 = !0);
    },
  },
  Da = typeof window < "u" ? window : {};
Da.addEventListener &&
  Da.removeEventListener &&
  (Da.addEventListener("p", Ci, K3), Da.removeEventListener("p", Ci, !1));
var X3 = c1;
function Q3(n) {
  return n != null;
}
function Y3(n) {
  return Array.isArray(n);
}
function Ha(n, t, o) {
  return n ? t : o;
}
var Z3 = function (t) {
    for (
      var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1;
      i < o;
      i++
    )
      a[i - 1] = arguments[i];
    var c = Object.entries(t).filter(function (d) {
      var h = wn(d, 1),
        f = h[0];
      return !a.includes(f);
    });
    return c.reduce(function (d, h) {
      var f = wn(h, 2),
        m = f[0],
        b = f[1];
      return (d[m] = b), d;
    }, {});
  },
  J3 = ["children", "innerProps"],
  e8 = ["children", "innerProps"];
function t8(n) {
  var t = n.maxHeight,
    o = n.menuEl,
    a = n.minHeight,
    i = n.placement,
    c = n.shouldScroll,
    d = n.isFixedPosition,
    h = n.controlHeight,
    f = U3(o),
    m = { placement: "bottom", maxHeight: t };
  if (!o || !o.offsetParent) return m;
  var b = f.getBoundingClientRect(),
    v = b.height,
    y = o.getBoundingClientRect(),
    x = y.bottom,
    S = y.height,
    O = y.top,
    k = o.offsetParent.getBoundingClientRect(),
    P = k.top,
    T = d ? window.innerHeight : V3(f),
    I = l1(f),
    B = parseInt(getComputedStyle(o).marginBottom, 10),
    F = parseInt(getComputedStyle(o).marginTop, 10),
    $ = P - F,
    N = T - O,
    X = $ + I,
    he = v - I - O,
    Ce = x - T + I + B,
    te = I + O - F,
    ce = 160;
  switch (i) {
    case "auto":
    case "bottom":
      if (N >= S) return { placement: "bottom", maxHeight: t };
      if (he >= S && !d)
        return c && Aa(f, Ce, ce), { placement: "bottom", maxHeight: t };
      if ((!d && he >= a) || (d && N >= a)) {
        c && Aa(f, Ce, ce);
        var ye = d ? N - B : he - B;
        return { placement: "bottom", maxHeight: ye };
      }
      if (i === "auto" || d) {
        var Se = t,
          ge = d ? $ : X;
        return (
          ge >= a && (Se = Math.min(ge - B - h, t)),
          { placement: "top", maxHeight: Se }
        );
      }
      if (i === "bottom")
        return c && wi(f, Ce), { placement: "bottom", maxHeight: t };
      break;
    case "top":
      if ($ >= S) return { placement: "top", maxHeight: t };
      if (X >= S && !d)
        return c && Aa(f, te, ce), { placement: "top", maxHeight: t };
      if ((!d && X >= a) || (d && $ >= a)) {
        var me = t;
        return (
          ((!d && X >= a) || (d && $ >= a)) && (me = d ? $ - F : X - F),
          c && Aa(f, te, ce),
          { placement: "top", maxHeight: me }
        );
      }
      return { placement: "bottom", maxHeight: t };
    default:
      throw new Error('Invalid placement provided "'.concat(i, '".'));
  }
  return m;
}
function n8(n) {
  var t = { bottom: "top", top: "bottom" };
  return n ? t[n] : "bottom";
}
var u1 = function (t) {
    return t === "auto" ? "bottom" : t;
  },
  r8 = function (t, o) {
    var a,
      i = t.placement,
      c = t.theme,
      d = c.borderRadius,
      h = c.spacing,
      f = c.colors;
    return se(
      ((a = { label: "menu" }),
      oo(a, n8(i), "100%"),
      oo(a, "position", "absolute"),
      oo(a, "width", "100%"),
      oo(a, "zIndex", 1),
      a),
      o
        ? {}
        : {
            backgroundColor: f.neutral0,
            borderRadius: d,
            boxShadow:
              "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
            marginBottom: h.menuGutter,
            marginTop: h.menuGutter,
          },
    );
  },
  d1 = V.createContext(null),
  o8 = function (t) {
    var o = t.children,
      a = t.minMenuHeight,
      i = t.maxMenuHeight,
      c = t.menuPlacement,
      d = t.menuPosition,
      h = t.menuShouldScrollIntoView,
      f = t.theme,
      m = V.useContext(d1) || {},
      b = m.setPortalPlacement,
      v = V.useRef(null),
      y = V.useState(i),
      x = wn(y, 2),
      S = x[0],
      O = x[1],
      k = V.useState(null),
      P = wn(k, 2),
      T = P[0],
      I = P[1],
      B = f.spacing.controlHeight;
    return (
      jc(
        function () {
          var F = v.current;
          if (F) {
            var $ = d === "fixed",
              N = h && !$,
              X = t8({
                maxHeight: i,
                menuEl: F,
                minHeight: a,
                placement: c,
                shouldScroll: N,
                isFixedPosition: $,
                controlHeight: B,
              });
            O(X.maxHeight), I(X.placement), b == null || b(X.placement);
          }
        },
        [i, c, d, h, a, b, B],
      ),
      o({
        ref: v,
        placerProps: se(se({}, t), {}, { placement: T || u1(c), maxHeight: S }),
      })
    );
  },
  a8 = function (t) {
    var o = t.children,
      a = t.innerRef,
      i = t.innerProps;
    return re("div", ue({}, Ge(t, "menu", { menu: !0 }), { ref: a }, i), o);
  },
  i8 = a8,
  s8 = function (t, o) {
    var a = t.maxHeight,
      i = t.theme.spacing.baseUnit;
    return se(
      {
        maxHeight: a,
        overflowY: "auto",
        position: "relative",
        WebkitOverflowScrolling: "touch",
      },
      o ? {} : { paddingBottom: i, paddingTop: i },
    );
  },
  l8 = function (t) {
    var o = t.children,
      a = t.innerProps,
      i = t.innerRef,
      c = t.isMulti;
    return re(
      "div",
      ue(
        {},
        Ge(t, "menuList", { "menu-list": !0, "menu-list--is-multi": c }),
        { ref: i },
        a,
      ),
      o,
    );
  },
  f1 = function (t, o) {
    var a = t.theme,
      i = a.spacing.baseUnit,
      c = a.colors;
    return se(
      { textAlign: "center" },
      o
        ? {}
        : {
            color: c.neutral40,
            padding: "".concat(i * 2, "px ").concat(i * 3, "px"),
          },
    );
  },
  c8 = f1,
  u8 = f1,
  d8 = function (t) {
    var o = t.children,
      a = o === void 0 ? "No options" : o,
      i = t.innerProps,
      c = Pn(t, J3);
    return re(
      "div",
      ue(
        {},
        Ge(
          se(se({}, c), {}, { children: a, innerProps: i }),
          "noOptionsMessage",
          { "menu-notice": !0, "menu-notice--no-options": !0 },
        ),
        i,
      ),
      a,
    );
  },
  f8 = function (t) {
    var o = t.children,
      a = o === void 0 ? "Loading..." : o,
      i = t.innerProps,
      c = Pn(t, e8);
    return re(
      "div",
      ue(
        {},
        Ge(
          se(se({}, c), {}, { children: a, innerProps: i }),
          "loadingMessage",
          { "menu-notice": !0, "menu-notice--loading": !0 },
        ),
        i,
      ),
      a,
    );
  },
  p8 = function (t) {
    var o = t.rect,
      a = t.offset,
      i = t.position;
    return { left: o.left, position: i, top: a, width: o.width, zIndex: 1 };
  },
  h8 = function (t) {
    var o = t.appendTo,
      a = t.children,
      i = t.controlElement,
      c = t.innerProps,
      d = t.menuPlacement,
      h = t.menuPosition,
      f = V.useRef(null),
      m = V.useRef(null),
      b = V.useState(u1(d)),
      v = wn(b, 2),
      y = v[0],
      x = v[1],
      S = V.useMemo(function () {
        return { setPortalPlacement: x };
      }, []),
      O = V.useState(null),
      k = wn(O, 2),
      P = k[0],
      T = k[1],
      I = V.useCallback(
        function () {
          if (i) {
            var N = q3(i),
              X = h === "fixed" ? 0 : window.pageYOffset,
              he = N[y] + X;
            (he !== (P == null ? void 0 : P.offset) ||
              N.left !== (P == null ? void 0 : P.rect.left) ||
              N.width !== (P == null ? void 0 : P.rect.width)) &&
              T({ offset: he, rect: N });
          }
        },
        [
          i,
          h,
          y,
          P == null ? void 0 : P.offset,
          P == null ? void 0 : P.rect.left,
          P == null ? void 0 : P.rect.width,
        ],
      );
    jc(
      function () {
        I();
      },
      [I],
    );
    var B = V.useCallback(
      function () {
        typeof m.current == "function" && (m.current(), (m.current = null)),
          i &&
            f.current &&
            (m.current = A3(i, f.current, I, {
              elementResize: "ResizeObserver" in window,
            }));
      },
      [i, I],
    );
    jc(
      function () {
        B();
      },
      [B],
    );
    var F = V.useCallback(
      function (N) {
        (f.current = N), B();
      },
      [B],
    );
    if ((!o && h !== "fixed") || !P) return null;
    var $ = re(
      "div",
      ue(
        { ref: F },
        Ge(
          se(se({}, t), {}, { offset: P.offset, position: h, rect: P.rect }),
          "menuPortal",
          { "menu-portal": !0 },
        ),
        c,
      ),
      a,
    );
    return re(d1.Provider, { value: S }, o ? P3.createPortal($, o) : $);
  },
  m8 = function (t) {
    var o = t.isDisabled,
      a = t.isRtl;
    return {
      label: "container",
      direction: a ? "rtl" : void 0,
      pointerEvents: o ? "none" : void 0,
      position: "relative",
    };
  },
  g8 = function (t) {
    var o = t.children,
      a = t.innerProps,
      i = t.isDisabled,
      c = t.isRtl;
    return re(
      "div",
      ue({}, Ge(t, "container", { "--is-disabled": i, "--is-rtl": c }), a),
      o,
    );
  },
  b8 = function (t, o) {
    var a = t.theme.spacing,
      i = t.isMulti,
      c = t.hasValue,
      d = t.selectProps.controlShouldRenderValue;
    return se(
      {
        alignItems: "center",
        display: i && c && d ? "flex" : "grid",
        flex: 1,
        flexWrap: "wrap",
        WebkitOverflowScrolling: "touch",
        position: "relative",
        overflow: "hidden",
      },
      o
        ? {}
        : {
            padding: ""
              .concat(a.baseUnit / 2, "px ")
              .concat(a.baseUnit * 2, "px"),
          },
    );
  },
  v8 = function (t) {
    var o = t.children,
      a = t.innerProps,
      i = t.isMulti,
      c = t.hasValue;
    return re(
      "div",
      ue(
        {},
        Ge(t, "valueContainer", {
          "value-container": !0,
          "value-container--is-multi": i,
          "value-container--has-value": c,
        }),
        a,
      ),
      o,
    );
  },
  y8 = function () {
    return {
      alignItems: "center",
      alignSelf: "stretch",
      display: "flex",
      flexShrink: 0,
    };
  },
  _8 = function (t) {
    var o = t.children,
      a = t.innerProps;
    return re(
      "div",
      ue({}, Ge(t, "indicatorsContainer", { indicators: !0 }), a),
      o,
    );
  },
  mh,
  x8 = ["size"],
  S8 = ["innerProps", "isRtl", "size"],
  C8 = {
    name: "8mmkcg",
    styles:
      "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0",
  },
  p1 = function (t) {
    var o = t.size,
      a = Pn(t, x8);
    return re(
      "svg",
      ue(
        {
          height: o,
          width: o,
          viewBox: "0 0 20 20",
          "aria-hidden": "true",
          focusable: "false",
          css: C8,
        },
        a,
      ),
    );
  },
  ou = function (t) {
    return re(
      p1,
      ue({ size: 20 }, t),
      re("path", {
        d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z",
      }),
    );
  },
  h1 = function (t) {
    return re(
      p1,
      ue({ size: 20 }, t),
      re("path", {
        d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z",
      }),
    );
  },
  m1 = function (t, o) {
    var a = t.isFocused,
      i = t.theme,
      c = i.spacing.baseUnit,
      d = i.colors;
    return se(
      {
        label: "indicatorContainer",
        display: "flex",
        transition: "color 150ms",
      },
      o
        ? {}
        : {
            color: a ? d.neutral60 : d.neutral20,
            padding: c * 2,
            ":hover": { color: a ? d.neutral80 : d.neutral40 },
          },
    );
  },
  w8 = m1,
  k8 = function (t) {
    var o = t.children,
      a = t.innerProps;
    return re(
      "div",
      ue(
        {},
        Ge(t, "dropdownIndicator", { indicator: !0, "dropdown-indicator": !0 }),
        a,
      ),
      o || re(h1, null),
    );
  },
  P8 = m1,
  O8 = function (t) {
    var o = t.children,
      a = t.innerProps;
    return re(
      "div",
      ue(
        {},
        Ge(t, "clearIndicator", { indicator: !0, "clear-indicator": !0 }),
        a,
      ),
      o || re(ou, null),
    );
  },
  E8 = function (t, o) {
    var a = t.isDisabled,
      i = t.theme,
      c = i.spacing.baseUnit,
      d = i.colors;
    return se(
      { label: "indicatorSeparator", alignSelf: "stretch", width: 1 },
      o
        ? {}
        : {
            backgroundColor: a ? d.neutral10 : d.neutral20,
            marginBottom: c * 2,
            marginTop: c * 2,
          },
    );
  },
  T8 = function (t) {
    var o = t.innerProps;
    return re(
      "span",
      ue({}, o, Ge(t, "indicatorSeparator", { "indicator-separator": !0 })),
    );
  },
  F8 = w3(
    mh ||
      (mh = k3([
        `
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`,
      ])),
  ),
  j8 = function (t, o) {
    var a = t.isFocused,
      i = t.size,
      c = t.theme,
      d = c.colors,
      h = c.spacing.baseUnit;
    return se(
      {
        label: "loadingIndicator",
        display: "flex",
        transition: "color 150ms",
        alignSelf: "center",
        fontSize: i,
        lineHeight: 1,
        marginRight: i,
        textAlign: "center",
        verticalAlign: "middle",
      },
      o ? {} : { color: a ? d.neutral60 : d.neutral20, padding: h * 2 },
    );
  },
  Jl = function (t) {
    var o = t.delay,
      a = t.offset;
    return re("span", {
      css: eu(
        {
          animation: ""
            .concat(F8, " 1s ease-in-out ")
            .concat(o, "ms infinite;"),
          backgroundColor: "currentColor",
          borderRadius: "1em",
          display: "inline-block",
          marginLeft: a ? "1em" : void 0,
          height: "1em",
          verticalAlign: "top",
          width: "1em",
        },
        "",
        "",
      ),
    });
  },
  M8 = function (t) {
    var o = t.innerProps,
      a = t.isRtl,
      i = t.size,
      c = i === void 0 ? 4 : i,
      d = Pn(t, S8);
    return re(
      "div",
      ue(
        {},
        Ge(
          se(se({}, d), {}, { innerProps: o, isRtl: a, size: c }),
          "loadingIndicator",
          { indicator: !0, "loading-indicator": !0 },
        ),
        o,
      ),
      re(Jl, { delay: 0, offset: a }),
      re(Jl, { delay: 160, offset: !0 }),
      re(Jl, { delay: 320, offset: !a }),
    );
  },
  I8 = function (t, o) {
    var a = t.isDisabled,
      i = t.isFocused,
      c = t.theme,
      d = c.colors,
      h = c.borderRadius,
      f = c.spacing;
    return se(
      {
        label: "control",
        alignItems: "center",
        cursor: "default",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        minHeight: f.controlHeight,
        outline: "0 !important",
        position: "relative",
        transition: "all 100ms",
      },
      o
        ? {}
        : {
            backgroundColor: a ? d.neutral5 : d.neutral0,
            borderColor: a ? d.neutral10 : i ? d.primary : d.neutral20,
            borderRadius: h,
            borderStyle: "solid",
            borderWidth: 1,
            boxShadow: i ? "0 0 0 1px ".concat(d.primary) : void 0,
            "&:hover": { borderColor: i ? d.primary : d.neutral30 },
          },
    );
  },
  R8 = function (t) {
    var o = t.children,
      a = t.isDisabled,
      i = t.isFocused,
      c = t.innerRef,
      d = t.innerProps,
      h = t.menuIsOpen;
    return re(
      "div",
      ue(
        { ref: c },
        Ge(t, "control", {
          control: !0,
          "control--is-disabled": a,
          "control--is-focused": i,
          "control--menu-is-open": h,
        }),
        d,
        { "aria-disabled": a || void 0 },
      ),
      o,
    );
  },
  N8 = R8,
  L8 = ["data"],
  B8 = function (t, o) {
    var a = t.theme.spacing;
    return o
      ? {}
      : { paddingBottom: a.baseUnit * 2, paddingTop: a.baseUnit * 2 };
  },
  $8 = function (t) {
    var o = t.children,
      a = t.cx,
      i = t.getStyles,
      c = t.getClassNames,
      d = t.Heading,
      h = t.headingProps,
      f = t.innerProps,
      m = t.label,
      b = t.theme,
      v = t.selectProps;
    return re(
      "div",
      ue({}, Ge(t, "group", { group: !0 }), f),
      re(
        d,
        ue({}, h, {
          selectProps: v,
          theme: b,
          getStyles: i,
          getClassNames: c,
          cx: a,
        }),
        m,
      ),
      re("div", null, o),
    );
  },
  A8 = function (t, o) {
    var a = t.theme,
      i = a.colors,
      c = a.spacing;
    return se(
      { label: "group", cursor: "default", display: "block" },
      o
        ? {}
        : {
            color: i.neutral40,
            fontSize: "75%",
            fontWeight: 500,
            marginBottom: "0.25em",
            paddingLeft: c.baseUnit * 3,
            paddingRight: c.baseUnit * 3,
            textTransform: "uppercase",
          },
    );
  },
  D8 = function (t) {
    var o = s1(t);
    o.data;
    var a = Pn(o, L8);
    return re("div", ue({}, Ge(t, "groupHeading", { "group-heading": !0 }), a));
  },
  H8 = $8,
  z8 = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
  V8 = function (t, o) {
    var a = t.isDisabled,
      i = t.value,
      c = t.theme,
      d = c.spacing,
      h = c.colors;
    return se(
      se(
        {
          visibility: a ? "hidden" : "visible",
          transform: i ? "translateZ(0)" : "",
        },
        U8,
      ),
      o
        ? {}
        : {
            margin: d.baseUnit / 2,
            paddingBottom: d.baseUnit / 2,
            paddingTop: d.baseUnit / 2,
            color: h.neutral80,
          },
    );
  },
  g1 = {
    gridArea: "1 / 2",
    font: "inherit",
    minWidth: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0,
  },
  U8 = {
    flex: "1 1 auto",
    display: "inline-grid",
    gridArea: "1 / 1 / 2 / 3",
    gridTemplateColumns: "0 min-content",
    "&:after": se(
      {
        content: 'attr(data-value) " "',
        visibility: "hidden",
        whiteSpace: "pre",
      },
      g1,
    ),
  },
  G8 = function (t) {
    return se(
      {
        label: "input",
        color: "inherit",
        background: 0,
        opacity: t ? 0 : 1,
        width: "100%",
      },
      g1,
    );
  },
  q8 = function (t) {
    var o = t.cx,
      a = t.value,
      i = s1(t),
      c = i.innerRef,
      d = i.isDisabled,
      h = i.isHidden,
      f = i.inputClassName,
      m = Pn(i, z8);
    return re(
      "div",
      ue({}, Ge(t, "input", { "input-container": !0 }), {
        "data-value": a || "",
      }),
      re(
        "input",
        ue(
          { className: o({ input: !0 }, f), ref: c, style: G8(h), disabled: d },
          m,
        ),
      ),
    );
  },
  W8 = q8,
  K8 = function (t, o) {
    var a = t.theme,
      i = a.spacing,
      c = a.borderRadius,
      d = a.colors;
    return se(
      { label: "multiValue", display: "flex", minWidth: 0 },
      o
        ? {}
        : {
            backgroundColor: d.neutral10,
            borderRadius: c / 2,
            margin: i.baseUnit / 2,
          },
    );
  },
  X8 = function (t, o) {
    var a = t.theme,
      i = a.borderRadius,
      c = a.colors,
      d = t.cropWithEllipsis;
    return se(
      {
        overflow: "hidden",
        textOverflow: d || d === void 0 ? "ellipsis" : void 0,
        whiteSpace: "nowrap",
      },
      o
        ? {}
        : {
            borderRadius: i / 2,
            color: c.neutral80,
            fontSize: "85%",
            padding: 3,
            paddingLeft: 6,
          },
    );
  },
  Q8 = function (t, o) {
    var a = t.theme,
      i = a.spacing,
      c = a.borderRadius,
      d = a.colors,
      h = t.isFocused;
    return se(
      { alignItems: "center", display: "flex" },
      o
        ? {}
        : {
            borderRadius: c / 2,
            backgroundColor: h ? d.dangerLight : void 0,
            paddingLeft: i.baseUnit,
            paddingRight: i.baseUnit,
            ":hover": { backgroundColor: d.dangerLight, color: d.danger },
          },
    );
  },
  b1 = function (t) {
    var o = t.children,
      a = t.innerProps;
    return re("div", a, o);
  },
  Y8 = b1,
  Z8 = b1;
function J8(n) {
  var t = n.children,
    o = n.innerProps;
  return re("div", ue({ role: "button" }, o), t || re(ou, { size: 14 }));
}
var e9 = function (t) {
    var o = t.children,
      a = t.components,
      i = t.data,
      c = t.innerProps,
      d = t.isDisabled,
      h = t.removeProps,
      f = t.selectProps,
      m = a.Container,
      b = a.Label,
      v = a.Remove;
    return re(
      m,
      {
        data: i,
        innerProps: se(
          se(
            {},
            Ge(t, "multiValue", {
              "multi-value": !0,
              "multi-value--is-disabled": d,
            }),
          ),
          c,
        ),
        selectProps: f,
      },
      re(
        b,
        {
          data: i,
          innerProps: se(
            {},
            Ge(t, "multiValueLabel", { "multi-value__label": !0 }),
          ),
          selectProps: f,
        },
        o,
      ),
      re(v, {
        data: i,
        innerProps: se(
          se({}, Ge(t, "multiValueRemove", { "multi-value__remove": !0 })),
          {},
          { "aria-label": "Remove ".concat(o || "option") },
          h,
        ),
        selectProps: f,
      }),
    );
  },
  t9 = e9,
  n9 = function (t, o) {
    var a = t.isDisabled,
      i = t.isFocused,
      c = t.isSelected,
      d = t.theme,
      h = d.spacing,
      f = d.colors;
    return se(
      {
        label: "option",
        cursor: "default",
        display: "block",
        fontSize: "inherit",
        width: "100%",
        userSelect: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      },
      o
        ? {}
        : {
            backgroundColor: c ? f.primary : i ? f.primary25 : "transparent",
            color: a ? f.neutral20 : c ? f.neutral0 : "inherit",
            padding: ""
              .concat(h.baseUnit * 2, "px ")
              .concat(h.baseUnit * 3, "px"),
            ":active": {
              backgroundColor: a ? void 0 : c ? f.primary : f.primary50,
            },
          },
    );
  },
  r9 = function (t) {
    var o = t.children,
      a = t.isDisabled,
      i = t.isFocused,
      c = t.isSelected,
      d = t.innerRef,
      h = t.innerProps;
    return re(
      "div",
      ue(
        {},
        Ge(t, "option", {
          option: !0,
          "option--is-disabled": a,
          "option--is-focused": i,
          "option--is-selected": c,
        }),
        { ref: d, "aria-disabled": a },
        h,
      ),
      o,
    );
  },
  o9 = r9,
  a9 = function (t, o) {
    var a = t.theme,
      i = a.spacing,
      c = a.colors;
    return se(
      { label: "placeholder", gridArea: "1 / 1 / 2 / 3" },
      o
        ? {}
        : {
            color: c.neutral50,
            marginLeft: i.baseUnit / 2,
            marginRight: i.baseUnit / 2,
          },
    );
  },
  i9 = function (t) {
    var o = t.children,
      a = t.innerProps;
    return re("div", ue({}, Ge(t, "placeholder", { placeholder: !0 }), a), o);
  },
  s9 = i9,
  l9 = function (t, o) {
    var a = t.isDisabled,
      i = t.theme,
      c = i.spacing,
      d = i.colors;
    return se(
      {
        label: "singleValue",
        gridArea: "1 / 1 / 2 / 3",
        maxWidth: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      o
        ? {}
        : {
            color: a ? d.neutral40 : d.neutral80,
            marginLeft: c.baseUnit / 2,
            marginRight: c.baseUnit / 2,
          },
    );
  },
  c9 = function (t) {
    var o = t.children,
      a = t.isDisabled,
      i = t.innerProps;
    return re(
      "div",
      ue(
        {},
        Ge(t, "singleValue", {
          "single-value": !0,
          "single-value--is-disabled": a,
        }),
        i,
      ),
      o,
    );
  },
  u9 = c9,
  d9 = {
    ClearIndicator: O8,
    Control: N8,
    DropdownIndicator: k8,
    DownChevron: h1,
    CrossIcon: ou,
    Group: H8,
    GroupHeading: D8,
    IndicatorsContainer: _8,
    IndicatorSeparator: T8,
    Input: W8,
    LoadingIndicator: M8,
    Menu: i8,
    MenuList: l8,
    MenuPortal: h8,
    LoadingMessage: f8,
    NoOptionsMessage: d8,
    MultiValue: t9,
    MultiValueContainer: Y8,
    MultiValueLabel: Z8,
    MultiValueRemove: J8,
    Option: o9,
    Placeholder: s9,
    SelectContainer: g8,
    SingleValue: u9,
    ValueContainer: v8,
  },
  f9 = function (t) {
    return se(se({}, d9), t.components);
  },
  gh =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function p9(n, t) {
  return !!(n === t || (gh(n) && gh(t)));
}
function h9(n, t) {
  if (n.length !== t.length) return !1;
  for (var o = 0; o < n.length; o++) if (!p9(n[o], t[o])) return !1;
  return !0;
}
function m9(n, t) {
  t === void 0 && (t = h9);
  var o = null;
  function a() {
    for (var i = [], c = 0; c < arguments.length; c++) i[c] = arguments[c];
    if (o && o.lastThis === this && t(i, o.lastArgs)) return o.lastResult;
    var d = n.apply(this, i);
    return (o = { lastResult: d, lastArgs: i, lastThis: this }), d;
  }
  return (
    (a.clear = function () {
      o = null;
    }),
    a
  );
}
var g9 = {
    name: "7pg0cj-a11yText",
    styles:
      "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap",
  },
  b9 = function (t) {
    return re("span", ue({ css: g9 }, t));
  },
  bh = b9,
  v9 = {
    guidance: function (t) {
      var o = t.isSearchable,
        a = t.isMulti,
        i = t.tabSelectsValue,
        c = t.context,
        d = t.isInitialFocus;
      switch (c) {
        case "menu":
          return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(
            i ? ", press Tab to select the option and exit the menu" : "",
            ".",
          );
        case "input":
          return d
            ? ""
                .concat(t["aria-label"] || "Select", " is focused ")
                .concat(
                  o ? ",type to refine list" : "",
                  ", press Down to open the menu, ",
                )
                .concat(a ? " press left to focus selected values" : "")
            : "";
        case "value":
          return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
        default:
          return "";
      }
    },
    onChange: function (t) {
      var o = t.action,
        a = t.label,
        i = a === void 0 ? "" : a,
        c = t.labels,
        d = t.isDisabled;
      switch (o) {
        case "deselect-option":
        case "pop-value":
        case "remove-value":
          return "option ".concat(i, ", deselected.");
        case "clear":
          return "All selected options have been cleared.";
        case "initial-input-focus":
          return "option"
            .concat(c.length > 1 ? "s" : "", " ")
            .concat(c.join(","), ", selected.");
        case "select-option":
          return d
            ? "option ".concat(i, " is disabled. Select another option.")
            : "option ".concat(i, ", selected.");
        default:
          return "";
      }
    },
    onFocus: function (t) {
      var o = t.context,
        a = t.focused,
        i = t.options,
        c = t.label,
        d = c === void 0 ? "" : c,
        h = t.selectValue,
        f = t.isDisabled,
        m = t.isSelected,
        b = t.isAppleDevice,
        v = function (O, k) {
          return O && O.length
            ? "".concat(O.indexOf(k) + 1, " of ").concat(O.length)
            : "";
        };
      if (o === "value" && h)
        return "value ".concat(d, " focused, ").concat(v(h, a), ".");
      if (o === "menu" && b) {
        var y = f ? " disabled" : "",
          x = "".concat(m ? " selected" : "").concat(y);
        return "".concat(d).concat(x, ", ").concat(v(i, a), ".");
      }
      return "";
    },
    onFilter: function (t) {
      var o = t.inputValue,
        a = t.resultsMessage;
      return "".concat(a).concat(o ? " for search term " + o : "", ".");
    },
  },
  y9 = function (t) {
    var o = t.ariaSelection,
      a = t.focusedOption,
      i = t.focusedValue,
      c = t.focusableOptions,
      d = t.isFocused,
      h = t.selectValue,
      f = t.selectProps,
      m = t.id,
      b = t.isAppleDevice,
      v = f.ariaLiveMessages,
      y = f.getOptionLabel,
      x = f.inputValue,
      S = f.isMulti,
      O = f.isOptionDisabled,
      k = f.isSearchable,
      P = f.menuIsOpen,
      T = f.options,
      I = f.screenReaderStatus,
      B = f.tabSelectsValue,
      F = f.isLoading,
      $ = f["aria-label"],
      N = f["aria-live"],
      X = V.useMemo(
        function () {
          return se(se({}, v9), v || {});
        },
        [v],
      ),
      he = V.useMemo(
        function () {
          var ge = "";
          if (o && X.onChange) {
            var me = o.option,
              we = o.options,
              q = o.removedValue,
              Y = o.removedValues,
              C = o.value,
              A = function (pe) {
                return Array.isArray(pe) ? null : pe;
              },
              K = q || me || A(C),
              le = K ? y(K) : "",
              oe = we || Y || void 0,
              _e = oe ? oe.map(y) : [],
              de = se({ isDisabled: K && O(K, h), label: le, labels: _e }, o);
            ge = X.onChange(de);
          }
          return ge;
        },
        [o, X, O, h, y],
      ),
      Ce = V.useMemo(
        function () {
          var ge = "",
            me = a || i,
            we = !!(a && h && h.includes(a));
          if (me && X.onFocus) {
            var q = {
              focused: me,
              label: y(me),
              isDisabled: O(me, h),
              isSelected: we,
              options: c,
              context: me === a ? "menu" : "value",
              selectValue: h,
              isAppleDevice: b,
            };
            ge = X.onFocus(q);
          }
          return ge;
        },
        [a, i, y, O, X, c, h, b],
      ),
      te = V.useMemo(
        function () {
          var ge = "";
          if (P && T.length && !F && X.onFilter) {
            var me = I({ count: c.length });
            ge = X.onFilter({ inputValue: x, resultsMessage: me });
          }
          return ge;
        },
        [c, x, P, X, T, I, F],
      ),
      ce = (o == null ? void 0 : o.action) === "initial-input-focus",
      ye = V.useMemo(
        function () {
          var ge = "";
          if (X.guidance) {
            var me = i ? "value" : P ? "menu" : "input";
            ge = X.guidance({
              "aria-label": $,
              context: me,
              isDisabled: a && O(a, h),
              isMulti: S,
              isSearchable: k,
              tabSelectsValue: B,
              isInitialFocus: ce,
            });
          }
          return ge;
        },
        [$, a, i, S, O, k, P, X, h, B, ce],
      ),
      Se = re(
        V.Fragment,
        null,
        re("span", { id: "aria-selection" }, he),
        re("span", { id: "aria-focused" }, Ce),
        re("span", { id: "aria-results" }, te),
        re("span", { id: "aria-guidance" }, ye),
      );
    return re(
      V.Fragment,
      null,
      re(bh, { id: m }, ce && Se),
      re(
        bh,
        {
          "aria-live": N,
          "aria-atomic": "false",
          "aria-relevant": "additions text",
          role: "log",
        },
        d && !ce && Se,
      ),
    );
  },
  _9 = y9,
  Mc = [
    { base: "A", letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ" },
    { base: "AA", letters: "Ꜳ" },
    { base: "AE", letters: "ÆǼǢ" },
    { base: "AO", letters: "Ꜵ" },
    { base: "AU", letters: "Ꜷ" },
    { base: "AV", letters: "ꜸꜺ" },
    { base: "AY", letters: "Ꜽ" },
    { base: "B", letters: "BⒷＢḂḄḆɃƂƁ" },
    { base: "C", letters: "CⒸＣĆĈĊČÇḈƇȻꜾ" },
    { base: "D", letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ" },
    { base: "DZ", letters: "ǱǄ" },
    { base: "Dz", letters: "ǲǅ" },
    { base: "E", letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ" },
    { base: "F", letters: "FⒻＦḞƑꝻ" },
    { base: "G", letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ" },
    { base: "H", letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ" },
    { base: "I", letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ" },
    { base: "J", letters: "JⒿＪĴɈ" },
    { base: "K", letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ" },
    { base: "L", letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ" },
    { base: "LJ", letters: "Ǉ" },
    { base: "Lj", letters: "ǈ" },
    { base: "M", letters: "MⓂＭḾṀṂⱮƜ" },
    { base: "N", letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ" },
    { base: "NJ", letters: "Ǌ" },
    { base: "Nj", letters: "ǋ" },
    { base: "O", letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ" },
    { base: "OI", letters: "Ƣ" },
    { base: "OO", letters: "Ꝏ" },
    { base: "OU", letters: "Ȣ" },
    { base: "P", letters: "PⓅＰṔṖƤⱣꝐꝒꝔ" },
    { base: "Q", letters: "QⓆＱꝖꝘɊ" },
    { base: "R", letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ" },
    { base: "S", letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ" },
    { base: "T", letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ" },
    { base: "TZ", letters: "Ꜩ" },
    { base: "U", letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ" },
    { base: "V", letters: "VⓋＶṼṾƲꝞɅ" },
    { base: "VY", letters: "Ꝡ" },
    { base: "W", letters: "WⓌＷẀẂŴẆẄẈⱲ" },
    { base: "X", letters: "XⓍＸẊẌ" },
    { base: "Y", letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ" },
    { base: "Z", letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ" },
    { base: "a", letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ" },
    { base: "aa", letters: "ꜳ" },
    { base: "ae", letters: "æǽǣ" },
    { base: "ao", letters: "ꜵ" },
    { base: "au", letters: "ꜷ" },
    { base: "av", letters: "ꜹꜻ" },
    { base: "ay", letters: "ꜽ" },
    { base: "b", letters: "bⓑｂḃḅḇƀƃɓ" },
    { base: "c", letters: "cⓒｃćĉċčçḉƈȼꜿↄ" },
    { base: "d", letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ" },
    { base: "dz", letters: "ǳǆ" },
    { base: "e", letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ" },
    { base: "f", letters: "fⓕｆḟƒꝼ" },
    { base: "g", letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ" },
    { base: "h", letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ" },
    { base: "hv", letters: "ƕ" },
    { base: "i", letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı" },
    { base: "j", letters: "jⓙｊĵǰɉ" },
    { base: "k", letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ" },
    { base: "l", letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ" },
    { base: "lj", letters: "ǉ" },
    { base: "m", letters: "mⓜｍḿṁṃɱɯ" },
    { base: "n", letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ" },
    { base: "nj", letters: "ǌ" },
    { base: "o", letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ" },
    { base: "oi", letters: "ƣ" },
    { base: "ou", letters: "ȣ" },
    { base: "oo", letters: "ꝏ" },
    { base: "p", letters: "pⓟｐṕṗƥᵽꝑꝓꝕ" },
    { base: "q", letters: "qⓠｑɋꝗꝙ" },
    { base: "r", letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ" },
    { base: "s", letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ" },
    { base: "t", letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ" },
    { base: "tz", letters: "ꜩ" },
    { base: "u", letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ" },
    { base: "v", letters: "vⓥｖṽṿʋꝟʌ" },
    { base: "vy", letters: "ꝡ" },
    { base: "w", letters: "wⓦｗẁẃŵẇẅẘẉⱳ" },
    { base: "x", letters: "xⓧｘẋẍ" },
    { base: "y", letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ" },
    { base: "z", letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ" },
  ],
  x9 = new RegExp(
    "[" +
      Mc.map(function (n) {
        return n.letters;
      }).join("") +
      "]",
    "g",
  ),
  v1 = {};
for (var ec = 0; ec < Mc.length; ec++)
  for (var tc = Mc[ec], nc = 0; nc < tc.letters.length; nc++)
    v1[tc.letters[nc]] = tc.base;
var y1 = function (t) {
    return t.replace(x9, function (o) {
      return v1[o];
    });
  },
  S9 = m9(y1),
  vh = function (t) {
    return t.replace(/^\s+|\s+$/g, "");
  },
  C9 = function (t) {
    return "".concat(t.label, " ").concat(t.value);
  },
  w9 = function (t) {
    return function (o, a) {
      if (o.data.__isNew__) return !0;
      var i = se(
          {
            ignoreCase: !0,
            ignoreAccents: !0,
            stringify: C9,
            trim: !0,
            matchFrom: "any",
          },
          t,
        ),
        c = i.ignoreCase,
        d = i.ignoreAccents,
        h = i.stringify,
        f = i.trim,
        m = i.matchFrom,
        b = f ? vh(a) : a,
        v = f ? vh(h(o)) : h(o);
      return (
        c && ((b = b.toLowerCase()), (v = v.toLowerCase())),
        d && ((b = S9(b)), (v = y1(v))),
        m === "start" ? v.substr(0, b.length) === b : v.indexOf(b) > -1
      );
    };
  },
  k9 = ["innerRef"];
function P9(n) {
  var t = n.innerRef,
    o = Pn(n, k9),
    a = Z3(o, "onExited", "in", "enter", "exit", "appear");
  return re(
    "input",
    ue({ ref: t }, a, {
      css: eu(
        {
          label: "dummyInput",
          background: 0,
          border: 0,
          caretColor: "transparent",
          fontSize: "inherit",
          gridArea: "1 / 1 / 2 / 3",
          outline: 0,
          padding: 0,
          width: 1,
          color: "transparent",
          left: -100,
          opacity: 0,
          position: "relative",
          transform: "scale(.01)",
        },
        "",
        "",
      ),
    }),
  );
}
var O9 = function (t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function E9(n) {
  var t = n.isEnabled,
    o = n.onBottomArrive,
    a = n.onBottomLeave,
    i = n.onTopArrive,
    c = n.onTopLeave,
    d = V.useRef(!1),
    h = V.useRef(!1),
    f = V.useRef(0),
    m = V.useRef(null),
    b = V.useCallback(
      function (k, P) {
        if (m.current !== null) {
          var T = m.current,
            I = T.scrollTop,
            B = T.scrollHeight,
            F = T.clientHeight,
            $ = m.current,
            N = P > 0,
            X = B - F - I,
            he = !1;
          X > P && d.current && (a && a(k), (d.current = !1)),
            N && h.current && (c && c(k), (h.current = !1)),
            N && P > X
              ? (o && !d.current && o(k),
                ($.scrollTop = B),
                (he = !0),
                (d.current = !0))
              : !N &&
                -P > I &&
                (i && !h.current && i(k),
                ($.scrollTop = 0),
                (he = !0),
                (h.current = !0)),
            he && O9(k);
        }
      },
      [o, a, i, c],
    ),
    v = V.useCallback(
      function (k) {
        b(k, k.deltaY);
      },
      [b],
    ),
    y = V.useCallback(function (k) {
      f.current = k.changedTouches[0].clientY;
    }, []),
    x = V.useCallback(
      function (k) {
        var P = f.current - k.changedTouches[0].clientY;
        b(k, P);
      },
      [b],
    ),
    S = V.useCallback(
      function (k) {
        if (k) {
          var P = X3 ? { passive: !1 } : !1;
          k.addEventListener("wheel", v, P),
            k.addEventListener("touchstart", y, P),
            k.addEventListener("touchmove", x, P);
        }
      },
      [x, y, v],
    ),
    O = V.useCallback(
      function (k) {
        k &&
          (k.removeEventListener("wheel", v, !1),
          k.removeEventListener("touchstart", y, !1),
          k.removeEventListener("touchmove", x, !1));
      },
      [x, y, v],
    );
  return (
    V.useEffect(
      function () {
        if (t) {
          var k = m.current;
          return (
            S(k),
            function () {
              O(k);
            }
          );
        }
      },
      [t, S, O],
    ),
    function (k) {
      m.current = k;
    }
  );
}
var yh = ["boxSizing", "height", "overflow", "paddingRight", "position"],
  _h = {
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
    height: "100%",
  };
function xh(n) {
  n.cancelable && n.preventDefault();
}
function Sh(n) {
  n.stopPropagation();
}
function Ch() {
  var n = this.scrollTop,
    t = this.scrollHeight,
    o = n + this.offsetHeight;
  n === 0 ? (this.scrollTop = 1) : o === t && (this.scrollTop = n - 1);
}
function wh() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var kh = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  to = 0,
  Y0 = { capture: !1, passive: !1 };
function T9(n) {
  var t = n.isEnabled,
    o = n.accountForScrollbars,
    a = o === void 0 ? !0 : o,
    i = V.useRef({}),
    c = V.useRef(null),
    d = V.useCallback(
      function (f) {
        if (kh) {
          var m = document.body,
            b = m && m.style;
          if (
            (a &&
              yh.forEach(function (S) {
                var O = b && b[S];
                i.current[S] = O;
              }),
            a && to < 1)
          ) {
            var v = parseInt(i.current.paddingRight, 10) || 0,
              y = document.body ? document.body.clientWidth : 0,
              x = window.innerWidth - y + v || 0;
            Object.keys(_h).forEach(function (S) {
              var O = _h[S];
              b && (b[S] = O);
            }),
              b && (b.paddingRight = "".concat(x, "px"));
          }
          m &&
            wh() &&
            (m.addEventListener("touchmove", xh, Y0),
            f &&
              (f.addEventListener("touchstart", Ch, Y0),
              f.addEventListener("touchmove", Sh, Y0))),
            (to += 1);
        }
      },
      [a],
    ),
    h = V.useCallback(
      function (f) {
        if (kh) {
          var m = document.body,
            b = m && m.style;
          (to = Math.max(to - 1, 0)),
            a &&
              to < 1 &&
              yh.forEach(function (v) {
                var y = i.current[v];
                b && (b[v] = y);
              }),
            m &&
              wh() &&
              (m.removeEventListener("touchmove", xh, Y0),
              f &&
                (f.removeEventListener("touchstart", Ch, Y0),
                f.removeEventListener("touchmove", Sh, Y0)));
        }
      },
      [a],
    );
  return (
    V.useEffect(
      function () {
        if (t) {
          var f = c.current;
          return (
            d(f),
            function () {
              h(f);
            }
          );
        }
      },
      [t, d, h],
    ),
    function (f) {
      c.current = f;
    }
  );
}
var F9 = function (t) {
    var o = t.target;
    return (
      o.ownerDocument.activeElement && o.ownerDocument.activeElement.blur()
    );
  },
  j9 = {
    name: "1kfdb0e",
    styles: "position:fixed;left:0;bottom:0;right:0;top:0",
  };
function M9(n) {
  var t = n.children,
    o = n.lockEnabled,
    a = n.captureEnabled,
    i = a === void 0 ? !0 : a,
    c = n.onBottomArrive,
    d = n.onBottomLeave,
    h = n.onTopArrive,
    f = n.onTopLeave,
    m = E9({
      isEnabled: i,
      onBottomArrive: c,
      onBottomLeave: d,
      onTopArrive: h,
      onTopLeave: f,
    }),
    b = T9({ isEnabled: o }),
    v = function (x) {
      m(x), b(x);
    };
  return re(V.Fragment, null, o && re("div", { onClick: F9, css: j9 }), t(v));
}
var I9 = {
    name: "1a0ro4n-requiredInput",
    styles:
      "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%",
  },
  R9 = function (t) {
    var o = t.name,
      a = t.onFocus;
    return re("input", {
      required: !0,
      name: o,
      tabIndex: -1,
      "aria-hidden": "true",
      onFocus: a,
      css: I9,
      value: "",
      onChange: function () {},
    });
  },
  N9 = R9;
function au(n) {
  var t;
  return typeof window < "u" && window.navigator != null
    ? n.test(
        ((t = window.navigator.userAgentData) === null || t === void 0
          ? void 0
          : t.platform) || window.navigator.platform,
      )
    : !1;
}
function L9() {
  return au(/^iPhone/i);
}
function _1() {
  return au(/^Mac/i);
}
function B9() {
  return au(/^iPad/i) || (_1() && navigator.maxTouchPoints > 1);
}
function $9() {
  return L9() || B9();
}
function A9() {
  return _1() || $9();
}
var D9 = function (t) {
    return t.label;
  },
  H9 = function (t) {
    return t.label;
  },
  z9 = function (t) {
    return t.value;
  },
  V9 = function (t) {
    return !!t.isDisabled;
  },
  U9 = {
    clearIndicator: P8,
    container: m8,
    control: I8,
    dropdownIndicator: w8,
    group: B8,
    groupHeading: A8,
    indicatorsContainer: y8,
    indicatorSeparator: E8,
    input: V8,
    loadingIndicator: j8,
    loadingMessage: u8,
    menu: r8,
    menuList: s8,
    menuPortal: p8,
    multiValue: K8,
    multiValueLabel: X8,
    multiValueRemove: Q8,
    noOptionsMessage: c8,
    option: n9,
    placeholder: a9,
    singleValue: l9,
    valueContainer: b8,
  },
  G9 = {
    primary: "#2684FF",
    primary75: "#4C9AFF",
    primary50: "#B2D4FF",
    primary25: "#DEEBFF",
    danger: "#DE350B",
    dangerLight: "#FFBDAD",
    neutral0: "hsl(0, 0%, 100%)",
    neutral5: "hsl(0, 0%, 95%)",
    neutral10: "hsl(0, 0%, 90%)",
    neutral20: "hsl(0, 0%, 80%)",
    neutral30: "hsl(0, 0%, 70%)",
    neutral40: "hsl(0, 0%, 60%)",
    neutral50: "hsl(0, 0%, 50%)",
    neutral60: "hsl(0, 0%, 40%)",
    neutral70: "hsl(0, 0%, 30%)",
    neutral80: "hsl(0, 0%, 20%)",
    neutral90: "hsl(0, 0%, 10%)",
  },
  q9 = 4,
  x1 = 4,
  W9 = 38,
  K9 = x1 * 2,
  X9 = { baseUnit: x1, controlHeight: W9, menuGutter: K9 },
  rc = { borderRadius: q9, colors: G9, spacing: X9 },
  Q9 = {
    "aria-live": "polite",
    backspaceRemovesValue: !0,
    blurInputOnSelect: hh(),
    captureMenuScroll: !hh(),
    classNames: {},
    closeMenuOnSelect: !0,
    closeMenuOnScroll: !1,
    components: {},
    controlShouldRenderValue: !0,
    escapeClearsValue: !1,
    filterOption: w9(),
    formatGroupLabel: D9,
    getOptionLabel: H9,
    getOptionValue: z9,
    isDisabled: !1,
    isLoading: !1,
    isMulti: !1,
    isRtl: !1,
    isSearchable: !0,
    isOptionDisabled: V9,
    loadingMessage: function () {
      return "Loading...";
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: !1,
    menuPlacement: "bottom",
    menuPosition: "absolute",
    menuShouldBlockScroll: !1,
    menuShouldScrollIntoView: !W3(),
    noOptionsMessage: function () {
      return "No options";
    },
    openMenuOnFocus: !1,
    openMenuOnClick: !0,
    options: [],
    pageSize: 5,
    placeholder: "Select...",
    screenReaderStatus: function (t) {
      var o = t.count;
      return "".concat(o, " result").concat(o !== 1 ? "s" : "", " available");
    },
    styles: {},
    tabIndex: 0,
    tabSelectsValue: !0,
    unstyled: !1,
  };
function Ph(n, t, o, a) {
  var i = w1(n, t, o),
    c = k1(n, t, o),
    d = C1(n, t),
    h = ki(n, t);
  return {
    type: "option",
    data: t,
    isDisabled: i,
    isSelected: c,
    label: d,
    value: h,
    index: a,
  };
}
function Ja(n, t) {
  return n.options
    .map(function (o, a) {
      if ("options" in o) {
        var i = o.options
          .map(function (d, h) {
            return Ph(n, d, t, h);
          })
          .filter(function (d) {
            return Eh(n, d);
          });
        return i.length > 0
          ? { type: "group", data: o, options: i, index: a }
          : void 0;
      }
      var c = Ph(n, o, t, a);
      return Eh(n, c) ? c : void 0;
    })
    .filter(Q3);
}
function S1(n) {
  return n.reduce(function (t, o) {
    return (
      o.type === "group"
        ? t.push.apply(
            t,
            Xc(
              o.options.map(function (a) {
                return a.data;
              }),
            ),
          )
        : t.push(o.data),
      t
    );
  }, []);
}
function Oh(n, t) {
  return n.reduce(function (o, a) {
    return (
      a.type === "group"
        ? o.push.apply(
            o,
            Xc(
              a.options.map(function (i) {
                return {
                  data: i.data,
                  id: "".concat(t, "-").concat(a.index, "-").concat(i.index),
                };
              }),
            ),
          )
        : o.push({ data: a.data, id: "".concat(t, "-").concat(a.index) }),
      o
    );
  }, []);
}
function Y9(n, t) {
  return S1(Ja(n, t));
}
function Eh(n, t) {
  var o = n.inputValue,
    a = o === void 0 ? "" : o,
    i = t.data,
    c = t.isSelected,
    d = t.label,
    h = t.value;
  return (!O1(n) || !c) && P1(n, { label: d, value: h, data: i }, a);
}
function Z9(n, t) {
  var o = n.focusedValue,
    a = n.selectValue,
    i = a.indexOf(o);
  if (i > -1) {
    var c = t.indexOf(o);
    if (c > -1) return o;
    if (i < t.length) return t[i];
  }
  return null;
}
function J9(n, t) {
  var o = n.focusedOption;
  return o && t.indexOf(o) > -1 ? o : t[0];
}
var oc = function (t, o) {
    var a,
      i =
        (a = t.find(function (c) {
          return c.data === o;
        })) === null || a === void 0
          ? void 0
          : a.id;
    return i || null;
  },
  C1 = function (t, o) {
    return t.getOptionLabel(o);
  },
  ki = function (t, o) {
    return t.getOptionValue(o);
  };
function w1(n, t, o) {
  return typeof n.isOptionDisabled == "function"
    ? n.isOptionDisabled(t, o)
    : !1;
}
function k1(n, t, o) {
  if (o.indexOf(t) > -1) return !0;
  if (typeof n.isOptionSelected == "function") return n.isOptionSelected(t, o);
  var a = ki(n, t);
  return o.some(function (i) {
    return ki(n, i) === a;
  });
}
function P1(n, t, o) {
  return n.filterOption ? n.filterOption(t, o) : !0;
}
var O1 = function (t) {
    var o = t.hideSelectedOptions,
      a = t.isMulti;
    return o === void 0 ? a : o;
  },
  e6 = 1,
  E1 = (function (n) {
    x4(o, n);
    var t = w4(o);
    function o(a) {
      var i;
      if (
        (y4(this, o),
        (i = t.call(this, a)),
        (i.state = {
          ariaSelection: null,
          focusedOption: null,
          focusedOptionId: null,
          focusableOptionsWithIds: [],
          focusedValue: null,
          inputIsHidden: !1,
          isFocused: !1,
          selectValue: [],
          clearFocusValueOnUpdate: !1,
          prevWasFocused: !1,
          inputIsHiddenAfterUpdate: void 0,
          prevProps: void 0,
          instancePrefix: "",
        }),
        (i.blockOptionHover = !1),
        (i.isComposing = !1),
        (i.commonProps = void 0),
        (i.initialTouchX = 0),
        (i.initialTouchY = 0),
        (i.openAfterFocus = !1),
        (i.scrollToFocusedOptionOnUpdate = !1),
        (i.userIsDragging = void 0),
        (i.isAppleDevice = A9()),
        (i.controlRef = null),
        (i.getControlRef = function (f) {
          i.controlRef = f;
        }),
        (i.focusedOptionRef = null),
        (i.getFocusedOptionRef = function (f) {
          i.focusedOptionRef = f;
        }),
        (i.menuListRef = null),
        (i.getMenuListRef = function (f) {
          i.menuListRef = f;
        }),
        (i.inputRef = null),
        (i.getInputRef = function (f) {
          i.inputRef = f;
        }),
        (i.focus = i.focusInput),
        (i.blur = i.blurInput),
        (i.onChange = function (f, m) {
          var b = i.props,
            v = b.onChange,
            y = b.name;
          (m.name = y), i.ariaOnChange(f, m), v(f, m);
        }),
        (i.setValue = function (f, m, b) {
          var v = i.props,
            y = v.closeMenuOnSelect,
            x = v.isMulti,
            S = v.inputValue;
          i.onInputChange("", { action: "set-value", prevInputValue: S }),
            y &&
              (i.setState({ inputIsHiddenAfterUpdate: !x }), i.onMenuClose()),
            i.setState({ clearFocusValueOnUpdate: !0 }),
            i.onChange(f, { action: m, option: b });
        }),
        (i.selectOption = function (f) {
          var m = i.props,
            b = m.blurInputOnSelect,
            v = m.isMulti,
            y = m.name,
            x = i.state.selectValue,
            S = v && i.isOptionSelected(f, x),
            O = i.isOptionDisabled(f, x);
          if (S) {
            var k = i.getOptionValue(f);
            i.setValue(
              x.filter(function (P) {
                return i.getOptionValue(P) !== k;
              }),
              "deselect-option",
              f,
            );
          } else if (!O)
            v
              ? i.setValue([].concat(Xc(x), [f]), "select-option", f)
              : i.setValue(f, "select-option");
          else {
            i.ariaOnChange(f, { action: "select-option", option: f, name: y });
            return;
          }
          b && i.blurInput();
        }),
        (i.removeValue = function (f) {
          var m = i.props.isMulti,
            b = i.state.selectValue,
            v = i.getOptionValue(f),
            y = b.filter(function (S) {
              return i.getOptionValue(S) !== v;
            }),
            x = Ha(m, y, y[0] || null);
          i.onChange(x, { action: "remove-value", removedValue: f }),
            i.focusInput();
        }),
        (i.clearValue = function () {
          var f = i.state.selectValue;
          i.onChange(Ha(i.props.isMulti, [], null), {
            action: "clear",
            removedValues: f,
          });
        }),
        (i.popValue = function () {
          var f = i.props.isMulti,
            m = i.state.selectValue,
            b = m[m.length - 1],
            v = m.slice(0, m.length - 1),
            y = Ha(f, v, v[0] || null);
          b && i.onChange(y, { action: "pop-value", removedValue: b });
        }),
        (i.getFocusedOptionId = function (f) {
          return oc(i.state.focusableOptionsWithIds, f);
        }),
        (i.getFocusableOptionsWithIds = function () {
          return Oh(Ja(i.props, i.state.selectValue), i.getElementId("option"));
        }),
        (i.getValue = function () {
          return i.state.selectValue;
        }),
        (i.cx = function () {
          for (var f = arguments.length, m = new Array(f), b = 0; b < f; b++)
            m[b] = arguments[b];
          return z3.apply(void 0, [i.props.classNamePrefix].concat(m));
        }),
        (i.getOptionLabel = function (f) {
          return C1(i.props, f);
        }),
        (i.getOptionValue = function (f) {
          return ki(i.props, f);
        }),
        (i.getStyles = function (f, m) {
          var b = i.props.unstyled,
            v = U9[f](m, b);
          v.boxSizing = "border-box";
          var y = i.props.styles[f];
          return y ? y(v, m) : v;
        }),
        (i.getClassNames = function (f, m) {
          var b, v;
          return (b = (v = i.props.classNames)[f]) === null || b === void 0
            ? void 0
            : b.call(v, m);
        }),
        (i.getElementId = function (f) {
          return "".concat(i.state.instancePrefix, "-").concat(f);
        }),
        (i.getComponents = function () {
          return f9(i.props);
        }),
        (i.buildCategorizedOptions = function () {
          return Ja(i.props, i.state.selectValue);
        }),
        (i.getCategorizedOptions = function () {
          return i.props.menuIsOpen ? i.buildCategorizedOptions() : [];
        }),
        (i.buildFocusableOptions = function () {
          return S1(i.buildCategorizedOptions());
        }),
        (i.getFocusableOptions = function () {
          return i.props.menuIsOpen ? i.buildFocusableOptions() : [];
        }),
        (i.ariaOnChange = function (f, m) {
          i.setState({ ariaSelection: se({ value: f }, m) });
        }),
        (i.onMenuMouseDown = function (f) {
          f.button === 0 &&
            (f.stopPropagation(), f.preventDefault(), i.focusInput());
        }),
        (i.onMenuMouseMove = function (f) {
          i.blockOptionHover = !1;
        }),
        (i.onControlMouseDown = function (f) {
          if (!f.defaultPrevented) {
            var m = i.props.openMenuOnClick;
            i.state.isFocused
              ? i.props.menuIsOpen
                ? f.target.tagName !== "INPUT" &&
                  f.target.tagName !== "TEXTAREA" &&
                  i.onMenuClose()
                : m && i.openMenu("first")
              : (m && (i.openAfterFocus = !0), i.focusInput()),
              f.target.tagName !== "INPUT" &&
                f.target.tagName !== "TEXTAREA" &&
                f.preventDefault();
          }
        }),
        (i.onDropdownIndicatorMouseDown = function (f) {
          if (
            !(f && f.type === "mousedown" && f.button !== 0) &&
            !i.props.isDisabled
          ) {
            var m = i.props,
              b = m.isMulti,
              v = m.menuIsOpen;
            i.focusInput(),
              v
                ? (i.setState({ inputIsHiddenAfterUpdate: !b }),
                  i.onMenuClose())
                : i.openMenu("first"),
              f.preventDefault();
          }
        }),
        (i.onClearIndicatorMouseDown = function (f) {
          (f && f.type === "mousedown" && f.button !== 0) ||
            (i.clearValue(),
            f.preventDefault(),
            (i.openAfterFocus = !1),
            f.type === "touchend"
              ? i.focusInput()
              : setTimeout(function () {
                  return i.focusInput();
                }));
        }),
        (i.onScroll = function (f) {
          typeof i.props.closeMenuOnScroll == "boolean"
            ? f.target instanceof HTMLElement &&
              $i(f.target) &&
              i.props.onMenuClose()
            : typeof i.props.closeMenuOnScroll == "function" &&
              i.props.closeMenuOnScroll(f) &&
              i.props.onMenuClose();
        }),
        (i.onCompositionStart = function () {
          i.isComposing = !0;
        }),
        (i.onCompositionEnd = function () {
          i.isComposing = !1;
        }),
        (i.onTouchStart = function (f) {
          var m = f.touches,
            b = m && m.item(0);
          b &&
            ((i.initialTouchX = b.clientX),
            (i.initialTouchY = b.clientY),
            (i.userIsDragging = !1));
        }),
        (i.onTouchMove = function (f) {
          var m = f.touches,
            b = m && m.item(0);
          if (b) {
            var v = Math.abs(b.clientX - i.initialTouchX),
              y = Math.abs(b.clientY - i.initialTouchY),
              x = 5;
            i.userIsDragging = v > x || y > x;
          }
        }),
        (i.onTouchEnd = function (f) {
          i.userIsDragging ||
            (i.controlRef &&
              !i.controlRef.contains(f.target) &&
              i.menuListRef &&
              !i.menuListRef.contains(f.target) &&
              i.blurInput(),
            (i.initialTouchX = 0),
            (i.initialTouchY = 0));
        }),
        (i.onControlTouchEnd = function (f) {
          i.userIsDragging || i.onControlMouseDown(f);
        }),
        (i.onClearIndicatorTouchEnd = function (f) {
          i.userIsDragging || i.onClearIndicatorMouseDown(f);
        }),
        (i.onDropdownIndicatorTouchEnd = function (f) {
          i.userIsDragging || i.onDropdownIndicatorMouseDown(f);
        }),
        (i.handleInputChange = function (f) {
          var m = i.props.inputValue,
            b = f.currentTarget.value;
          i.setState({ inputIsHiddenAfterUpdate: !1 }),
            i.onInputChange(b, { action: "input-change", prevInputValue: m }),
            i.props.menuIsOpen || i.onMenuOpen();
        }),
        (i.onInputFocus = function (f) {
          i.props.onFocus && i.props.onFocus(f),
            i.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
            (i.openAfterFocus || i.props.openMenuOnFocus) &&
              i.openMenu("first"),
            (i.openAfterFocus = !1);
        }),
        (i.onInputBlur = function (f) {
          var m = i.props.inputValue;
          if (i.menuListRef && i.menuListRef.contains(document.activeElement)) {
            i.inputRef.focus();
            return;
          }
          i.props.onBlur && i.props.onBlur(f),
            i.onInputChange("", { action: "input-blur", prevInputValue: m }),
            i.onMenuClose(),
            i.setState({ focusedValue: null, isFocused: !1 });
        }),
        (i.onOptionHover = function (f) {
          if (!(i.blockOptionHover || i.state.focusedOption === f)) {
            var m = i.getFocusableOptions(),
              b = m.indexOf(f);
            i.setState({
              focusedOption: f,
              focusedOptionId: b > -1 ? i.getFocusedOptionId(f) : null,
            });
          }
        }),
        (i.shouldHideSelectedOptions = function () {
          return O1(i.props);
        }),
        (i.onValueInputFocus = function (f) {
          f.preventDefault(), f.stopPropagation(), i.focus();
        }),
        (i.onKeyDown = function (f) {
          var m = i.props,
            b = m.isMulti,
            v = m.backspaceRemovesValue,
            y = m.escapeClearsValue,
            x = m.inputValue,
            S = m.isClearable,
            O = m.isDisabled,
            k = m.menuIsOpen,
            P = m.onKeyDown,
            T = m.tabSelectsValue,
            I = m.openMenuOnFocus,
            B = i.state,
            F = B.focusedOption,
            $ = B.focusedValue,
            N = B.selectValue;
          if (!O && !(typeof P == "function" && (P(f), f.defaultPrevented))) {
            switch (((i.blockOptionHover = !0), f.key)) {
              case "ArrowLeft":
                if (!b || x) return;
                i.focusValue("previous");
                break;
              case "ArrowRight":
                if (!b || x) return;
                i.focusValue("next");
                break;
              case "Delete":
              case "Backspace":
                if (x) return;
                if ($) i.removeValue($);
                else {
                  if (!v) return;
                  b ? i.popValue() : S && i.clearValue();
                }
                break;
              case "Tab":
                if (
                  i.isComposing ||
                  f.shiftKey ||
                  !k ||
                  !T ||
                  !F ||
                  (I && i.isOptionSelected(F, N))
                )
                  return;
                i.selectOption(F);
                break;
              case "Enter":
                if (f.keyCode === 229) break;
                if (k) {
                  if (!F || i.isComposing) return;
                  i.selectOption(F);
                  break;
                }
                return;
              case "Escape":
                k
                  ? (i.setState({ inputIsHiddenAfterUpdate: !1 }),
                    i.onInputChange("", {
                      action: "menu-close",
                      prevInputValue: x,
                    }),
                    i.onMenuClose())
                  : S && y && i.clearValue();
                break;
              case " ":
                if (x) return;
                if (!k) {
                  i.openMenu("first");
                  break;
                }
                if (!F) return;
                i.selectOption(F);
                break;
              case "ArrowUp":
                k ? i.focusOption("up") : i.openMenu("last");
                break;
              case "ArrowDown":
                k ? i.focusOption("down") : i.openMenu("first");
                break;
              case "PageUp":
                if (!k) return;
                i.focusOption("pageup");
                break;
              case "PageDown":
                if (!k) return;
                i.focusOption("pagedown");
                break;
              case "Home":
                if (!k) return;
                i.focusOption("first");
                break;
              case "End":
                if (!k) return;
                i.focusOption("last");
                break;
              default:
                return;
            }
            f.preventDefault();
          }
        }),
        (i.state.instancePrefix =
          "react-select-" + (i.props.instanceId || ++e6)),
        (i.state.selectValue = fh(a.value)),
        a.menuIsOpen && i.state.selectValue.length)
      ) {
        var c = i.getFocusableOptionsWithIds(),
          d = i.buildFocusableOptions(),
          h = d.indexOf(i.state.selectValue[0]);
        (i.state.focusableOptionsWithIds = c),
          (i.state.focusedOption = d[h]),
          (i.state.focusedOptionId = oc(c, d[h]));
      }
      return i;
    }
    return (
      _4(
        o,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.startListeningComposition(),
                this.startListeningToTouch(),
                this.props.closeMenuOnScroll &&
                  document &&
                  document.addEventListener &&
                  document.addEventListener("scroll", this.onScroll, !0),
                this.props.autoFocus && this.focusInput(),
                this.props.menuIsOpen &&
                  this.state.focusedOption &&
                  this.menuListRef &&
                  this.focusedOptionRef &&
                  ph(this.menuListRef, this.focusedOptionRef);
            },
          },
          {
            key: "componentDidUpdate",
            value: function (i) {
              var c = this.props,
                d = c.isDisabled,
                h = c.menuIsOpen,
                f = this.state.isFocused;
              ((f && !d && i.isDisabled) || (f && h && !i.menuIsOpen)) &&
                this.focusInput(),
                f && d && !i.isDisabled
                  ? this.setState({ isFocused: !1 }, this.onMenuClose)
                  : !f &&
                    !d &&
                    i.isDisabled &&
                    this.inputRef === document.activeElement &&
                    this.setState({ isFocused: !0 }),
                this.menuListRef &&
                  this.focusedOptionRef &&
                  this.scrollToFocusedOptionOnUpdate &&
                  (ph(this.menuListRef, this.focusedOptionRef),
                  (this.scrollToFocusedOptionOnUpdate = !1));
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.stopListeningComposition(),
                this.stopListeningToTouch(),
                document.removeEventListener("scroll", this.onScroll, !0);
            },
          },
          {
            key: "onMenuOpen",
            value: function () {
              this.props.onMenuOpen();
            },
          },
          {
            key: "onMenuClose",
            value: function () {
              this.onInputChange("", {
                action: "menu-close",
                prevInputValue: this.props.inputValue,
              }),
                this.props.onMenuClose();
            },
          },
          {
            key: "onInputChange",
            value: function (i, c) {
              this.props.onInputChange(i, c);
            },
          },
          {
            key: "focusInput",
            value: function () {
              this.inputRef && this.inputRef.focus();
            },
          },
          {
            key: "blurInput",
            value: function () {
              this.inputRef && this.inputRef.blur();
            },
          },
          {
            key: "openMenu",
            value: function (i) {
              var c = this,
                d = this.state,
                h = d.selectValue,
                f = d.isFocused,
                m = this.buildFocusableOptions(),
                b = i === "first" ? 0 : m.length - 1;
              if (!this.props.isMulti) {
                var v = m.indexOf(h[0]);
                v > -1 && (b = v);
              }
              (this.scrollToFocusedOptionOnUpdate = !(f && this.menuListRef)),
                this.setState(
                  {
                    inputIsHiddenAfterUpdate: !1,
                    focusedValue: null,
                    focusedOption: m[b],
                    focusedOptionId: this.getFocusedOptionId(m[b]),
                  },
                  function () {
                    return c.onMenuOpen();
                  },
                );
            },
          },
          {
            key: "focusValue",
            value: function (i) {
              var c = this.state,
                d = c.selectValue,
                h = c.focusedValue;
              if (this.props.isMulti) {
                this.setState({ focusedOption: null });
                var f = d.indexOf(h);
                h || (f = -1);
                var m = d.length - 1,
                  b = -1;
                if (d.length) {
                  switch (i) {
                    case "previous":
                      f === 0 ? (b = 0) : f === -1 ? (b = m) : (b = f - 1);
                      break;
                    case "next":
                      f > -1 && f < m && (b = f + 1);
                      break;
                  }
                  this.setState({
                    inputIsHidden: b !== -1,
                    focusedValue: d[b],
                  });
                }
              }
            },
          },
          {
            key: "focusOption",
            value: function () {
              var i =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : "first",
                c = this.props.pageSize,
                d = this.state.focusedOption,
                h = this.getFocusableOptions();
              if (h.length) {
                var f = 0,
                  m = h.indexOf(d);
                d || (m = -1),
                  i === "up"
                    ? (f = m > 0 ? m - 1 : h.length - 1)
                    : i === "down"
                      ? (f = (m + 1) % h.length)
                      : i === "pageup"
                        ? ((f = m - c), f < 0 && (f = 0))
                        : i === "pagedown"
                          ? ((f = m + c),
                            f > h.length - 1 && (f = h.length - 1))
                          : i === "last" && (f = h.length - 1),
                  (this.scrollToFocusedOptionOnUpdate = !0),
                  this.setState({
                    focusedOption: h[f],
                    focusedValue: null,
                    focusedOptionId: this.getFocusedOptionId(h[f]),
                  });
              }
            },
          },
          {
            key: "getTheme",
            value: function () {
              return this.props.theme
                ? typeof this.props.theme == "function"
                  ? this.props.theme(rc)
                  : se(se({}, rc), this.props.theme)
                : rc;
            },
          },
          {
            key: "getCommonProps",
            value: function () {
              var i = this.clearValue,
                c = this.cx,
                d = this.getStyles,
                h = this.getClassNames,
                f = this.getValue,
                m = this.selectOption,
                b = this.setValue,
                v = this.props,
                y = v.isMulti,
                x = v.isRtl,
                S = v.options,
                O = this.hasValue();
              return {
                clearValue: i,
                cx: c,
                getStyles: d,
                getClassNames: h,
                getValue: f,
                hasValue: O,
                isMulti: y,
                isRtl: x,
                options: S,
                selectOption: m,
                selectProps: v,
                setValue: b,
                theme: this.getTheme(),
              };
            },
          },
          {
            key: "hasValue",
            value: function () {
              var i = this.state.selectValue;
              return i.length > 0;
            },
          },
          {
            key: "hasOptions",
            value: function () {
              return !!this.getFocusableOptions().length;
            },
          },
          {
            key: "isClearable",
            value: function () {
              var i = this.props,
                c = i.isClearable,
                d = i.isMulti;
              return c === void 0 ? d : c;
            },
          },
          {
            key: "isOptionDisabled",
            value: function (i, c) {
              return w1(this.props, i, c);
            },
          },
          {
            key: "isOptionSelected",
            value: function (i, c) {
              return k1(this.props, i, c);
            },
          },
          {
            key: "filterOption",
            value: function (i, c) {
              return P1(this.props, i, c);
            },
          },
          {
            key: "formatOptionLabel",
            value: function (i, c) {
              if (typeof this.props.formatOptionLabel == "function") {
                var d = this.props.inputValue,
                  h = this.state.selectValue;
                return this.props.formatOptionLabel(i, {
                  context: c,
                  inputValue: d,
                  selectValue: h,
                });
              } else return this.getOptionLabel(i);
            },
          },
          {
            key: "formatGroupLabel",
            value: function (i) {
              return this.props.formatGroupLabel(i);
            },
          },
          {
            key: "startListeningComposition",
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener(
                  "compositionstart",
                  this.onCompositionStart,
                  !1,
                ),
                document.addEventListener(
                  "compositionend",
                  this.onCompositionEnd,
                  !1,
                ));
            },
          },
          {
            key: "stopListeningComposition",
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener(
                  "compositionstart",
                  this.onCompositionStart,
                ),
                document.removeEventListener(
                  "compositionend",
                  this.onCompositionEnd,
                ));
            },
          },
          {
            key: "startListeningToTouch",
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener("touchstart", this.onTouchStart, !1),
                document.addEventListener("touchmove", this.onTouchMove, !1),
                document.addEventListener("touchend", this.onTouchEnd, !1));
            },
          },
          {
            key: "stopListeningToTouch",
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener("touchstart", this.onTouchStart),
                document.removeEventListener("touchmove", this.onTouchMove),
                document.removeEventListener("touchend", this.onTouchEnd));
            },
          },
          {
            key: "renderInput",
            value: function () {
              var i = this.props,
                c = i.isDisabled,
                d = i.isSearchable,
                h = i.inputId,
                f = i.inputValue,
                m = i.tabIndex,
                b = i.form,
                v = i.menuIsOpen,
                y = i.required,
                x = this.getComponents(),
                S = x.Input,
                O = this.state,
                k = O.inputIsHidden,
                P = O.ariaSelection,
                T = this.commonProps,
                I = h || this.getElementId("input"),
                B = se(
                  se(
                    se(
                      {
                        "aria-autocomplete": "list",
                        "aria-expanded": v,
                        "aria-haspopup": !0,
                        "aria-errormessage": this.props["aria-errormessage"],
                        "aria-invalid": this.props["aria-invalid"],
                        "aria-label": this.props["aria-label"],
                        "aria-labelledby": this.props["aria-labelledby"],
                        "aria-required": y,
                        role: "combobox",
                        "aria-activedescendant": this.isAppleDevice
                          ? void 0
                          : this.state.focusedOptionId || "",
                      },
                      v && { "aria-controls": this.getElementId("listbox") },
                    ),
                    !d && { "aria-readonly": !0 },
                  ),
                  this.hasValue()
                    ? (P == null ? void 0 : P.action) ===
                        "initial-input-focus" && {
                        "aria-describedby": this.getElementId("live-region"),
                      }
                    : { "aria-describedby": this.getElementId("placeholder") },
                );
              return d
                ? V.createElement(
                    S,
                    ue(
                      {},
                      T,
                      {
                        autoCapitalize: "none",
                        autoComplete: "off",
                        autoCorrect: "off",
                        id: I,
                        innerRef: this.getInputRef,
                        isDisabled: c,
                        isHidden: k,
                        onBlur: this.onInputBlur,
                        onChange: this.handleInputChange,
                        onFocus: this.onInputFocus,
                        spellCheck: "false",
                        tabIndex: m,
                        form: b,
                        type: "text",
                        value: f,
                      },
                      B,
                    ),
                  )
                : V.createElement(
                    P9,
                    ue(
                      {
                        id: I,
                        innerRef: this.getInputRef,
                        onBlur: this.onInputBlur,
                        onChange: Ci,
                        onFocus: this.onInputFocus,
                        disabled: c,
                        tabIndex: m,
                        inputMode: "none",
                        form: b,
                        value: "",
                      },
                      B,
                    ),
                  );
            },
          },
          {
            key: "renderPlaceholderOrValue",
            value: function () {
              var i = this,
                c = this.getComponents(),
                d = c.MultiValue,
                h = c.MultiValueContainer,
                f = c.MultiValueLabel,
                m = c.MultiValueRemove,
                b = c.SingleValue,
                v = c.Placeholder,
                y = this.commonProps,
                x = this.props,
                S = x.controlShouldRenderValue,
                O = x.isDisabled,
                k = x.isMulti,
                P = x.inputValue,
                T = x.placeholder,
                I = this.state,
                B = I.selectValue,
                F = I.focusedValue,
                $ = I.isFocused;
              if (!this.hasValue() || !S)
                return P
                  ? null
                  : V.createElement(
                      v,
                      ue({}, y, {
                        key: "placeholder",
                        isDisabled: O,
                        isFocused: $,
                        innerProps: { id: this.getElementId("placeholder") },
                      }),
                      T,
                    );
              if (k)
                return B.map(function (X, he) {
                  var Ce = X === F,
                    te = ""
                      .concat(i.getOptionLabel(X), "-")
                      .concat(i.getOptionValue(X));
                  return V.createElement(
                    d,
                    ue({}, y, {
                      components: { Container: h, Label: f, Remove: m },
                      isFocused: Ce,
                      isDisabled: O,
                      key: te,
                      index: he,
                      removeProps: {
                        onClick: function () {
                          return i.removeValue(X);
                        },
                        onTouchEnd: function () {
                          return i.removeValue(X);
                        },
                        onMouseDown: function (ye) {
                          ye.preventDefault();
                        },
                      },
                      data: X,
                    }),
                    i.formatOptionLabel(X, "value"),
                  );
                });
              if (P) return null;
              var N = B[0];
              return V.createElement(
                b,
                ue({}, y, { data: N, isDisabled: O }),
                this.formatOptionLabel(N, "value"),
              );
            },
          },
          {
            key: "renderClearIndicator",
            value: function () {
              var i = this.getComponents(),
                c = i.ClearIndicator,
                d = this.commonProps,
                h = this.props,
                f = h.isDisabled,
                m = h.isLoading,
                b = this.state.isFocused;
              if (!this.isClearable() || !c || f || !this.hasValue() || m)
                return null;
              var v = {
                onMouseDown: this.onClearIndicatorMouseDown,
                onTouchEnd: this.onClearIndicatorTouchEnd,
                "aria-hidden": "true",
              };
              return V.createElement(
                c,
                ue({}, d, { innerProps: v, isFocused: b }),
              );
            },
          },
          {
            key: "renderLoadingIndicator",
            value: function () {
              var i = this.getComponents(),
                c = i.LoadingIndicator,
                d = this.commonProps,
                h = this.props,
                f = h.isDisabled,
                m = h.isLoading,
                b = this.state.isFocused;
              if (!c || !m) return null;
              var v = { "aria-hidden": "true" };
              return V.createElement(
                c,
                ue({}, d, { innerProps: v, isDisabled: f, isFocused: b }),
              );
            },
          },
          {
            key: "renderIndicatorSeparator",
            value: function () {
              var i = this.getComponents(),
                c = i.DropdownIndicator,
                d = i.IndicatorSeparator;
              if (!c || !d) return null;
              var h = this.commonProps,
                f = this.props.isDisabled,
                m = this.state.isFocused;
              return V.createElement(
                d,
                ue({}, h, { isDisabled: f, isFocused: m }),
              );
            },
          },
          {
            key: "renderDropdownIndicator",
            value: function () {
              var i = this.getComponents(),
                c = i.DropdownIndicator;
              if (!c) return null;
              var d = this.commonProps,
                h = this.props.isDisabled,
                f = this.state.isFocused,
                m = {
                  onMouseDown: this.onDropdownIndicatorMouseDown,
                  onTouchEnd: this.onDropdownIndicatorTouchEnd,
                  "aria-hidden": "true",
                };
              return V.createElement(
                c,
                ue({}, d, { innerProps: m, isDisabled: h, isFocused: f }),
              );
            },
          },
          {
            key: "renderMenu",
            value: function () {
              var i = this,
                c = this.getComponents(),
                d = c.Group,
                h = c.GroupHeading,
                f = c.Menu,
                m = c.MenuList,
                b = c.MenuPortal,
                v = c.LoadingMessage,
                y = c.NoOptionsMessage,
                x = c.Option,
                S = this.commonProps,
                O = this.state.focusedOption,
                k = this.props,
                P = k.captureMenuScroll,
                T = k.inputValue,
                I = k.isLoading,
                B = k.loadingMessage,
                F = k.minMenuHeight,
                $ = k.maxMenuHeight,
                N = k.menuIsOpen,
                X = k.menuPlacement,
                he = k.menuPosition,
                Ce = k.menuPortalTarget,
                te = k.menuShouldBlockScroll,
                ce = k.menuShouldScrollIntoView,
                ye = k.noOptionsMessage,
                Se = k.onMenuScrollToTop,
                ge = k.onMenuScrollToBottom;
              if (!N) return null;
              var me = function (le, oe) {
                  var _e = le.type,
                    de = le.data,
                    be = le.isDisabled,
                    pe = le.isSelected,
                    Re = le.label,
                    Zn = le.value,
                    Bt = O === de,
                    xt = be
                      ? void 0
                      : function () {
                          return i.onOptionHover(de);
                        },
                    C0 = be
                      ? void 0
                      : function () {
                          return i.selectOption(de);
                        },
                    w0 = "".concat(i.getElementId("option"), "-").concat(oe),
                    xo = {
                      id: w0,
                      onClick: C0,
                      onMouseMove: xt,
                      onMouseOver: xt,
                      tabIndex: -1,
                      role: "option",
                      "aria-selected": i.isAppleDevice ? void 0 : pe,
                    };
                  return V.createElement(
                    x,
                    ue({}, S, {
                      innerProps: xo,
                      data: de,
                      isDisabled: be,
                      isSelected: pe,
                      key: w0,
                      label: Re,
                      type: _e,
                      value: Zn,
                      isFocused: Bt,
                      innerRef: Bt ? i.getFocusedOptionRef : void 0,
                    }),
                    i.formatOptionLabel(le.data, "menu"),
                  );
                },
                we;
              if (this.hasOptions())
                we = this.getCategorizedOptions().map(function (K) {
                  if (K.type === "group") {
                    var le = K.data,
                      oe = K.options,
                      _e = K.index,
                      de = "".concat(i.getElementId("group"), "-").concat(_e),
                      be = "".concat(de, "-heading");
                    return V.createElement(
                      d,
                      ue({}, S, {
                        key: de,
                        data: le,
                        options: oe,
                        Heading: h,
                        headingProps: { id: be, data: K.data },
                        label: i.formatGroupLabel(K.data),
                      }),
                      K.options.map(function (pe) {
                        return me(pe, "".concat(_e, "-").concat(pe.index));
                      }),
                    );
                  } else if (K.type === "option")
                    return me(K, "".concat(K.index));
                });
              else if (I) {
                var q = B({ inputValue: T });
                if (q === null) return null;
                we = V.createElement(v, S, q);
              } else {
                var Y = ye({ inputValue: T });
                if (Y === null) return null;
                we = V.createElement(y, S, Y);
              }
              var C = {
                  minMenuHeight: F,
                  maxMenuHeight: $,
                  menuPlacement: X,
                  menuPosition: he,
                  menuShouldScrollIntoView: ce,
                },
                A = V.createElement(o8, ue({}, S, C), function (K) {
                  var le = K.ref,
                    oe = K.placerProps,
                    _e = oe.placement,
                    de = oe.maxHeight;
                  return V.createElement(
                    f,
                    ue({}, S, C, {
                      innerRef: le,
                      innerProps: {
                        onMouseDown: i.onMenuMouseDown,
                        onMouseMove: i.onMenuMouseMove,
                      },
                      isLoading: I,
                      placement: _e,
                    }),
                    V.createElement(
                      M9,
                      {
                        captureEnabled: P,
                        onTopArrive: Se,
                        onBottomArrive: ge,
                        lockEnabled: te,
                      },
                      function (be) {
                        return V.createElement(
                          m,
                          ue({}, S, {
                            innerRef: function (Re) {
                              i.getMenuListRef(Re), be(Re);
                            },
                            innerProps: {
                              role: "listbox",
                              "aria-multiselectable": S.isMulti,
                              id: i.getElementId("listbox"),
                            },
                            isLoading: I,
                            maxHeight: de,
                            focusedOption: O,
                          }),
                          we,
                        );
                      },
                    ),
                  );
                });
              return Ce || he === "fixed"
                ? V.createElement(
                    b,
                    ue({}, S, {
                      appendTo: Ce,
                      controlElement: this.controlRef,
                      menuPlacement: X,
                      menuPosition: he,
                    }),
                    A,
                  )
                : A;
            },
          },
          {
            key: "renderFormField",
            value: function () {
              var i = this,
                c = this.props,
                d = c.delimiter,
                h = c.isDisabled,
                f = c.isMulti,
                m = c.name,
                b = c.required,
                v = this.state.selectValue;
              if (b && !this.hasValue() && !h)
                return V.createElement(N9, {
                  name: m,
                  onFocus: this.onValueInputFocus,
                });
              if (!(!m || h))
                if (f)
                  if (d) {
                    var y = v
                      .map(function (O) {
                        return i.getOptionValue(O);
                      })
                      .join(d);
                    return V.createElement("input", {
                      name: m,
                      type: "hidden",
                      value: y,
                    });
                  } else {
                    var x =
                      v.length > 0
                        ? v.map(function (O, k) {
                            return V.createElement("input", {
                              key: "i-".concat(k),
                              name: m,
                              type: "hidden",
                              value: i.getOptionValue(O),
                            });
                          })
                        : V.createElement("input", {
                            name: m,
                            type: "hidden",
                            value: "",
                          });
                    return V.createElement("div", null, x);
                  }
                else {
                  var S = v[0] ? this.getOptionValue(v[0]) : "";
                  return V.createElement("input", {
                    name: m,
                    type: "hidden",
                    value: S,
                  });
                }
            },
          },
          {
            key: "renderLiveRegion",
            value: function () {
              var i = this.commonProps,
                c = this.state,
                d = c.ariaSelection,
                h = c.focusedOption,
                f = c.focusedValue,
                m = c.isFocused,
                b = c.selectValue,
                v = this.getFocusableOptions();
              return V.createElement(
                _9,
                ue({}, i, {
                  id: this.getElementId("live-region"),
                  ariaSelection: d,
                  focusedOption: h,
                  focusedValue: f,
                  isFocused: m,
                  selectValue: b,
                  focusableOptions: v,
                  isAppleDevice: this.isAppleDevice,
                }),
              );
            },
          },
          {
            key: "render",
            value: function () {
              var i = this.getComponents(),
                c = i.Control,
                d = i.IndicatorsContainer,
                h = i.SelectContainer,
                f = i.ValueContainer,
                m = this.props,
                b = m.className,
                v = m.id,
                y = m.isDisabled,
                x = m.menuIsOpen,
                S = this.state.isFocused,
                O = (this.commonProps = this.getCommonProps());
              return V.createElement(
                h,
                ue({}, O, {
                  className: b,
                  innerProps: { id: v, onKeyDown: this.onKeyDown },
                  isDisabled: y,
                  isFocused: S,
                }),
                this.renderLiveRegion(),
                V.createElement(
                  c,
                  ue({}, O, {
                    innerRef: this.getControlRef,
                    innerProps: {
                      onMouseDown: this.onControlMouseDown,
                      onTouchEnd: this.onControlTouchEnd,
                    },
                    isDisabled: y,
                    isFocused: S,
                    menuIsOpen: x,
                  }),
                  V.createElement(
                    f,
                    ue({}, O, { isDisabled: y }),
                    this.renderPlaceholderOrValue(),
                    this.renderInput(),
                  ),
                  V.createElement(
                    d,
                    ue({}, O, { isDisabled: y }),
                    this.renderClearIndicator(),
                    this.renderLoadingIndicator(),
                    this.renderIndicatorSeparator(),
                    this.renderDropdownIndicator(),
                  ),
                ),
                this.renderMenu(),
                this.renderFormField(),
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (i, c) {
              var d = c.prevProps,
                h = c.clearFocusValueOnUpdate,
                f = c.inputIsHiddenAfterUpdate,
                m = c.ariaSelection,
                b = c.isFocused,
                v = c.prevWasFocused,
                y = c.instancePrefix,
                x = i.options,
                S = i.value,
                O = i.menuIsOpen,
                k = i.inputValue,
                P = i.isMulti,
                T = fh(S),
                I = {};
              if (
                d &&
                (S !== d.value ||
                  x !== d.options ||
                  O !== d.menuIsOpen ||
                  k !== d.inputValue)
              ) {
                var B = O ? Y9(i, T) : [],
                  F = O ? Oh(Ja(i, T), "".concat(y, "-option")) : [],
                  $ = h ? Z9(c, T) : null,
                  N = J9(c, B),
                  X = oc(F, N);
                I = {
                  selectValue: T,
                  focusedOption: N,
                  focusedOptionId: X,
                  focusableOptionsWithIds: F,
                  focusedValue: $,
                  clearFocusValueOnUpdate: !1,
                };
              }
              var he =
                  f != null && i !== d
                    ? { inputIsHidden: f, inputIsHiddenAfterUpdate: void 0 }
                    : {},
                Ce = m,
                te = b && v;
              return (
                b &&
                  !te &&
                  ((Ce = {
                    value: Ha(P, T, T[0] || null),
                    options: T,
                    action: "initial-input-focus",
                  }),
                  (te = !v)),
                (m == null ? void 0 : m.action) === "initial-input-focus" &&
                  (Ce = null),
                se(
                  se(se({}, I), he),
                  {},
                  { prevProps: i, ariaSelection: Ce, prevWasFocused: te },
                )
              );
            },
          },
        ],
      ),
      o
    );
  })(V.Component);
E1.defaultProps = Q9;
var t6 = V.forwardRef(function (n, t) {
    var o = v4(n);
    return V.createElement(E1, ue({ ref: t }, o));
  }),
  n6 = t6;
function Th({ isDark: n, context: t, isFocused: o = !1, isSelected: a = !1 }) {
  if (t === "control")
    return o ? (n ? "#222222" : "#E8E8E8") : n ? "#383838" : "#F1F1F1";
  if (t === "option")
    return a ? (n ? "#111111" : "#FCFCFC") : n ? "#222222" : "#F1F1F1";
  if (t === "menu" || t === "menuList") return n ? "#222222" : "#F1F1F1";
}
const ac = ({ isDark: n, options: t, selectedOption: o, onChange: a }) =>
    W.jsx(n6, {
      styles: {
        control: (i, c) => ({
          ...i,
          backgroundColor: Th({
            isDark: n,
            context: "control",
            isFocused: c.isFocused,
          }),
          borderRadius: "6px",
          border: `1px solid ${n ? "#383838" : "#F1F1F1"}`,
          fontFamily: "monospace",
          fontSize: "14px",
          minHeight: "initial",
          padding: "3px 0px",
        }),
        indicatorSeparator: () => ({ display: "none" }),
        container: (i) => ({ ...i }),
        singleValue: (i) => ({
          ...i,
          color: n ? "#EDEDED" : "black",
          borderRadius: "6px",
        }),
        menu: (i) => ({
          ...i,
          width: "max-content",
          minWidth: "100%",
          borderRadius: "6px",
          backgroundColor: n ? "#222222" : "#F1F1F1",
        }),
        dropdownIndicator: (i) => ({
          ...i,
          color: n ? "#EDEDED" : "black",
          padding: "0px 2px",
        }),
        menuList: (i) => ({
          ...i,
          backgroundColor: n ? "#222222" : "#F1F1F1",
          padding: "4px",
          border: `1px solid ${n ? "#222222" : "#F1F1F1"}`,
          borderRadius: "6px",
          fontSize: "14px",
        }),
        option: (i, c) => ({
          ...i,
          padding: "4px 8px",
          fontFamily: "monospace",
          borderRadius: "6px",
          backgroundColor: Th({
            isDark: n,
            context: "option",
            isSelected: c.isSelected,
          }),
          color: n ? "#EDEDED" : "black",
          ":hover": { backgroundColor: n ? "#181818" : "#F6F6F6" },
          ":not(:first-of-type):not(:last-of-type)": { margin: "4px 0px" },
        }),
        valueContainer: (i) => ({
          ...i,
          paddingRight: "0px",
          textAlign: "center",
        }),
      },
      isSearchable: !1,
      options: t,
      value: t.find((i) => i.value === o),
      onChange: (i) => {
        i && a(i.value);
      },
    }),
  r6 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "alchemy_getAssetTransfers",
  "params": [
    "0x0",
    "0x0000000000000000000000000000000000000000",
    "0x5c43B1eD97e52d009611D89b74fA829FE4ac56b1",
    true,
    [
      "erc721",
      "erc1155"
    ]
  ],
  "id": 1
}'`,
  o6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: r6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  a6 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "alchemy_getTokenBalances",
  "params": [
    "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
    "erc20",
    {
      "maxCount": 10
    }
  ],
  "id": 1
}'`,
  i6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: a6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  s6 = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}'`,
  l6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: s6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  c6 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}'`,
  u6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: c6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  d6 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}'`,
  f6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: d6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  p6 = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}'`,
  h6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: p6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  m6 = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}'`,
  g6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: m6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  b6 = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_chainId",
  "params": [],
  "id": 1
}'`,
  v6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: b6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  y6 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_chainId",
  "params": [],
  "id": 1
}'`,
  _6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: y6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  x6 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_chainId",
  "params": [],
  "id": 1
}'`,
  S6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: x6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  C6 = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_chainId",
  "params": [],
  "id": 1
}'`,
  w6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: C6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  k6 = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_chainId",
  "params": [],
  "id": 1
}'`,
  P6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: k6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  O6 = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_estimateGas",
  "params": [
    {
      "from": "0x136F5049f18590b440e98bbb7FDdD1B3cbA92af7",
      "to": "0x44aa93095d6749a706051658b970b941c72c1d53",
      "value": "0x1"
    }
  ],
  "id": 1
}'`,
  E6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: O6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  T6 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_estimateGas",
  "params": [
    {
      "from": "0xeA091DE7679D2b148be201590e613f4e7074950d",
      "to": "0x44aa93095d6749a706051658b970b941c72c1d53",
      "value": "0x1"
    }
  ],
  "id": 1
}'`,
  F6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: T6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  j6 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_estimateGas",
  "params": [
    {
      "from": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",
      "to": "0x44aa93095d6749a706051658b970b941c72c1d53",
      "value": "0x1"
    }
  ],
  "id": 1
}'`,
  M6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: j6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  I6 = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_estimateGas",
  "params": [
    {
      "from": "0x67A7334BD35b99310f3EDe2111B65B654B76DF43",
      "to": "0x44aa93095d6749a706051658b970b941c72c1d53",
      "value": "0x1"
    }
  ],
  "id": 1
}'`,
  R6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: I6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  N6 = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_estimateGas",
  "params": [
    {
      "from": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",
      "to": "0x44aa93095d6749a706051658b970b941c72c1d53",
      "value": "0x1"
    }
  ],
  "id": 1
}'`,
  L6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: N6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  B6 = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_gasPrice",
  "params": [],
  "id": 1
}'`,
  $6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: B6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  A6 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_gasPrice",
  "params": [],
  "id": 1
}'`,
  D6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: A6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  H6 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_gasPrice",
  "params": [],
  "id": 1
}'`,
  z6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: H6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  V6 = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_gasPrice",
  "params": [],
  "id": 1
}'`,
  U6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: V6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  G6 = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_gasPrice",
  "params": [],
  "id": 1
}'`,
  q6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: G6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  W6 = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBalance",
  "params": [
    "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",
    "latest"
  ],
  "id": 1
}'`,
  K6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: W6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  X6 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBalance",
  "params": [
    "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",
    "latest"
  ],
  "id": 1
}'`,
  Q6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: X6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Y6 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBalance",
  "params": [
    "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",
    "latest"
  ],
  "id": 1
}'`,
  Z6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Y6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  J6 = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBalance",
  "params": [
    "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",
    "latest"
  ],
  "id": 1
}'`,
  e_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: J6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  t_ = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBalance",
  "params": [
    "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",
    "latest"
  ],
  "id": 1
}'`,
  n_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: t_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  r_ = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBlockByNumber",
  "params": [
    "0x68b3",
    false
  ],
  "id": 1
}'`,
  o_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: r_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  a_ = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBlockByNumber",
  "params": [
    "0x68b3",
    false
  ],
  "id": 1
}'`,
  i_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: a_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  s_ = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBlockByNumber",
  "params": [
    "0x68b3",
    false
  ],
  "id": 1
}'`,
  l_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: s_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  c_ = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBlockByNumber",
  "params": [
    "0x68b3",
    false
  ],
  "id": 1
}'`,
  u_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: c_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  d_ = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBlockByNumber",
  "params": [
    "0x68b3",
    false
  ],
  "id": 1
}'`,
  f_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: d_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  p_ = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBlockReceipts",
  "params": [
    "latest"
  ],
  "id": 1
}'`,
  h_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: p_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  m_ = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBlockReceipts",
  "params": [
    "latest"
  ],
  "id": 1
}'`,
  g_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: m_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  b_ = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBlockReceipts",
  "params": [
    "latest"
  ],
  "id": 1
}'`,
  v_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: b_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  y_ = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBlockReceipts",
  "params": [
    "latest"
  ],
  "id": 1
}'`,
  __ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: y_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  x_ = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBlockReceipts",
  "params": [
    "latest"
  ],
  "id": 1
}'`,
  S_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: x_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  C_ = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getLogs",
  "params": [
    {
      "fromBlock": "0x137d3c2",
      "toBlock": "0x137d3c3",
      "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "topics": []
    }
  ],
  "id": 1
}'`,
  w_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: C_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  k_ = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getLogs",
  "params": [
    {
      "fromBlock": "0x137d3c2",
      "toBlock": "0x137d3c3",
      "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "topics": []
    }
  ],
  "id": 1
}'`,
  P_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: k_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  O_ = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getLogs",
  "params": [
    {
      "fromBlock": "0x137d3c2",
      "toBlock": "0x137d3c3",
      "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "topics": []
    }
  ],
  "id": 1
}'`,
  E_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: O_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  T_ = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getLogs",
  "params": [
    {
      "fromBlock": "0x137d3c2",
      "toBlock": "0x137d3c3",
      "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "topics": []
    }
  ],
  "id": 1
}'`,
  F_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: T_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  j_ = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getLogs",
  "params": [
    {
      "fromBlock": "0x137d3c2",
      "toBlock": "0x137d3c3",
      "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "topics": []
    }
  ],
  "id": 1
}'`,
  M_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: j_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  I_ = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionByHash",
  "params": [
    "0x1058fd1f920b95591f7d937b03d6e66c5d88bdf606284c51e42e5c4b7efb2b73"
  ],
  "id": 1
}'`,
  R_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: I_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  N_ = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionByHash",
  "params": [
    "0xca5320b77a4321c83865bbd5b59bae521ad26fa42c079c317bec60a6e639b045"
  ],
  "id": 1
}'`,
  L_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: N_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  B_ = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionByHash",
  "params": [
    "0xf8b955c1b95e0ce539ded4baf94a54035d36020decb904fce95b33707217d02a"
  ],
  "id": 1
}'`,
  $_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: B_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  A_ = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionByHash",
  "params": [
    "0x4400d8e9c86da035f9a4fc5a2c4a0b7b3b0fc79540c705fe92abd08b10078866"
  ],
  "id": 1
}'`,
  D_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: A_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  H_ = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionByHash",
  "params": [
    "0x9a05c39f9d682f5660ccc0feda8f8d1ff233e67b2bdb5550a9faf0ae50330e4b"
  ],
  "id": 1
}'`,
  z_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: H_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  V_ = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionCount",
  "params": [
    "0x28452B38064b1DC5E5e2AE4C1BE5D4C392f38dCF",
    "latest"
  ],
  "id": 1
}'`,
  U_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: V_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  G_ = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionCount",
  "params": [
    "0x2b9d5Ee187892AF23Ddd328ce0774dE81465800d",
    "latest"
  ],
  "id": 1
}'`,
  q_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: G_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  W_ = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionCount",
  "params": [
    "0xc94770007dda54cF92009BFF0dE90c06F603a09f",
    "latest"
  ],
  "id": 1
}'`,
  K_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: W_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  X_ = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionCount",
  "params": [
    "0x67A7334BD35b99310f3EDe2111B65B654B76DF43"
  ],
  "id": 1
}'`,
  Q_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: X_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Y_ = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionCount",
  "params": [
    "0xE4f575e07D7c9E31BB2900e1B23C3584b4a6fa2d"
  ],
  "id": 1
}'`,
  Z_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Y_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  J_ = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionReceipt",
  "params": [
    "0x1058fd1f920b95591f7d937b03d6e66c5d88bdf606284c51e42e5c4b7efb2b73"
  ],
  "id": 1
}'`,
  e7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: J_ },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  t7 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionReceipt",
  "params": [
    "0xca5320b77a4321c83865bbd5b59bae521ad26fa42c079c317bec60a6e639b045"
  ],
  "id": 1
}'`,
  n7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: t7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  r7 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionReceipt",
  "params": [
    "0xf8b955c1b95e0ce539ded4baf94a54035d36020decb904fce95b33707217d02a"
  ],
  "id": 1
}'`,
  o7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: r7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  a7 = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionReceipt",
  "params": [
    "0x4400d8e9c86da035f9a4fc5a2c4a0b7b3b0fc79540c705fe92abd08b10078866"
  ],
  "id": 1
}'`,
  i7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: a7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  s7 = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionReceipt",
  "params": [
    "0x9a05c39f9d682f5660ccc0feda8f8d1ff233e67b2bdb5550a9faf0ae50330e4b"
  ],
  "id": 1
}'`,
  l7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: s7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  c7 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "getAccountInfo",
  "params": [
    "5s749uxx2gcdUL9WaDRhLt3Du2KUREhPT1H8QAXrBZzm"
  ],
  "id": 1
}'`,
  u7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: c7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  d7 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "getBalance",
  "params": [
    "5s749uxx2gcdUL9WaDRhLt3Du2KUREhPT1H8QAXrBZzm"
  ],
  "id": 1
}'`,
  f7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: d7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  p7 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "getLatestBlockhash",
  "params": [],
  "id": 1
}'`,
  h7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: p7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  m7 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "getSignaturesForAddress",
  "params": [
    "Lowq9dkpY43VpjfYeRjtKfGA6JtB7HaMmwQgXkjHLvN",
    {
      "limit": 1
    }
  ],
  "id": 1
}'`,
  g7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: m7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  b7 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "getTokenAccountBalance",
  "params": [
    "4acnoRQj96CkGWHp5uzgF67fRJCUtdFR66ZAHh2mohNB"
  ],
  "id": 1
}'`,
  v7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: b7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  y7 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "getTokenAccountsByOwner",
  "params": [
    "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN",
    {
      "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
    },
    {
      "encoding": "jsonParsed"
    }
  ],
  "id": 1
}'`,
  _7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: y7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  x7 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "getTransaction",
  "params": [
    "4MHz27QAFhn6hTpssCgBBFs2fK7a4MfU1rV5XccMxgCALACDVavDtF3JgLPAtuC8aNGBfdHDALbGvX1fL7cdqokt",
    {
      "maxSupportedTransactionVersion": 0
    }
  ],
  "id": 1
}'`,
  S7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: x7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  C7 = `{
  "jsonrpc": "2.0",
  "id": "1",
  "result": {
    "transfers": [
      {
        "blockNum": "0xb0eadc",
        "uniqueId": "0x3847245c01829b043431067fb2bfa95f7b5bdc7e4246c843e7a573ab6f26f5ff:external",
        "hash": "0x3847245c01829b043431067fb2bfa95f7b5bdc7e4246c843e7a573ab6f26f5ff",
        "from": "0xef4396d9ff8107086d215a1c9f8866c54795d7c7",
        "to": "0x5c43b1ed97e52d009611d89b74fa829fe4ac56b1",
        "value": 0.5,
        "erc721TokenId": null,
        "erc1155Metadata": null,
        "tokenId": null,
        "asset": "ETH",
        "category": "external",
        "rawContract": {
          "value": "0x6f05b59d3b20000",
          "address": null,
          "decimal": "0x12"
        }
      },
      {
        "blockNum": "0xb96042",
        "uniqueId": "0x5c88806ce2e4a42c5fbd5804f340ed887995914546cf92ec39eb5472cf22c88c:external",
        "hash": "0x5c88806ce2e4a42c5fbd5804f340ed887995914546cf92ec39eb5472cf22c88c",
        "from": "0xef4396d9ff8107086d215a1c9f8866c54795d7c7",
        "to": "0x5c43b1ed97e52d009611d89b74fa829fe4ac56b1",
        "value": 0.27,
        "erc721TokenId": null,
        "erc1155Metadata": null,
        "tokenId": null,
        "asset": "ETH",
        "category": "external",
        "rawContract": {
          "value": "0x3bf3b91c95b0000",
          "address": null,
          "decimal": "0x12"
        }
      }
    ],
    "pageKey": ""
  }
}`,
  w7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: C7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  k7 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    "tokenBalances": [
      {
        "contractAddress": "0x000000000000e63d2c9c29d3edf6efb99071f92c",
        "tokenBalance": "0x00000000000000000000000000000000000000000000001b1ae4d6e2ef500000"
      },
      {
        "contractAddress": "0x00000000002514bf58ae82408e1e217f16a1dfa0",
        "tokenBalance": "0x000000000000000000000000000000000000000000002a5a058fc295ed000000"
      },
      {
        "contractAddress": "0x000000000072cd55f05d07ec75f33390fb0eaa97",
        "tokenBalance": "0x00000000000000000000000000000000000000000000152d02c7e14af6800000"
      },
      {
        "contractAddress": "0x0000000000c39a0f674c12a5e63eb8031b550b6f",
        "tokenBalance": "0x000000000000000000000000000000000000000000000004563918244f400000"
      },
      {
        "contractAddress": "0x0000000000c5dc95539589fbd24be07c6c14eca4",
        "tokenBalance": "0x00000000000000000000000000000000000000000000f3859ffa9ede12c00000"
      },
      {
        "contractAddress": "0x0000000000dec1295e1663e7e1916d0e80905d9d",
        "tokenBalance": "0x0000000000000000000000000000000000000000000000878678326eac900000"
      },
      {
        "contractAddress": "0x0000000000f593134dcf221a84c2fa0fc5c75bfc",
        "tokenBalance": "0x00000000000000000000000000000000000000000000152d02c7e14af6800000"
      },
      {
        "contractAddress": "0x00000000366b8a1ec86d6c8e00c861bf2245d946",
        "tokenBalance": "0x000000000000000000000000000000000000000000000000000aa87bee538000"
      },
      {
        "contractAddress": "0x000000004bb4e57ca59cf7cfea73d57a34bf0776",
        "tokenBalance": "0x00000000000000000000000000000000000000000000152d02c7e14af6800000"
      },
      {
        "contractAddress": "0x00000000f9fd50c832d79facfe6f4e8ce90a5efb",
        "tokenBalance": "0x0000000000000000000000000000000000000000014adf4b7320334b90000000"
      }
    ],
    "pageKey": "0x00000000f9fd50c832d79facfe6f4e8ce90a5efb"
  }
}`,
  P7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: k7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  O7 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x14c3bbfa"
}`,
  E7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: O7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  T7 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1e3a66b"
}`,
  F7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: T7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  j7 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x159fee5"
}`,
  M7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: j7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  I7 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x82ee7dd"
}`,
  R7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: I7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  N7 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x4582eef"
}`,
  L7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: N7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  B7 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xa4b1"
}`,
  $7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: B7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  A7 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x2105"
}`,
  D7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: A7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  H7 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1"
}`,
  z7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: H7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  V7 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xa"
}`,
  U7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: V7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  G7 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x89"
}`,
  q7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: G7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  W7 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x64a3"
}`,
  K7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: W7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  X7 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5208"
}`,
  Q7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: X7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Y7 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5208"
}`,
  Z7 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Y7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  J7 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5208"
}`,
  ex = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: J7 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  tx = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5208"
}`,
  nx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: tx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  rx = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x989680"
}`,
  ox = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: rx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ax = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x4c539c"
}`,
  ix = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ax },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  sx = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5b377580e"
}`,
  lx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: sx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  cx = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xf55cd"
}`,
  ux = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: cx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  dx = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x60db8841a"
}`,
  fx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: dx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  px = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x0"
}`,
  hx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: px },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  mx = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x0"
}`,
  gx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: mx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  bx = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xcd5"
}`,
  vx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: bx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  yx = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x0"
}`,
  _x = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: yx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  xx = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x41d6"
}`,
  Sx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: xx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Cx = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "difficulty": "0x0",
    "extraData": "0x",
    "gasLimit": "0x112a63c2",
    "gasUsed": "0xe98",
    "hash": "0x6811031da42d29d04877f3d5fa897a4e834636d9970463b95f88efb84b610282",
    "l1BlockNumber": "0xc1e390",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000010000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000",
    "miner": "0x0000000000000000000000000000000000000000",
    "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "nonce": "0x0000000000000000",
    "number": "0x68b3",
    "parentHash": "0x38a187fc1fefb95bcdbcdc56ca6b4f52238abba06eaf912abd0abe16c03d43d0",
    "receiptsRoot": "0x1d220c0afe5a137179acf4e986c3f02e386a9054a2e20e2aa56b0c19da0122af",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "size": "0x526",
    "stateRoot": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "timestamp": "0x60d6831c",
    "transactions": [
      "0x6793645cc5b60e9359b5e2e276134a6c487a77e4658672beb67aa2d67f0625a5"
    ],
    "transactionsRoot": "0x3ccf19333f7451099bb3e6506993f81e5cd04cdcaa0c7ed69bc61fc5e587c149",
    "uncles": []
  }
}`,
  wx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Cx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  kx = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "hash": "0x620b9417a60e9e7bd126fb3395f3804418cabe8c7c7a930c12d56adfb60407f9",
    "parentHash": "0xebfd02abe7416a833e72f66b98b537a383822eb9f05360116dd4f4031e301f2b",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "miner": "0x4200000000000000000000000000000000000011",
    "stateRoot": "0x86a6738387735f26591f16020c7ebde8d865d4ecf4b58cd0673543cf4520465c",
    "transactionsRoot": "0x2f426a5602d9e067d5e55534ca0d95b88de16d36cea8aa1656c38da163c7e2bc",
    "receiptsRoot": "0x637d9e6847368bb52b56e90dd608facc34122c153872e8733cb0b01caa581f85",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "difficulty": "0x0",
    "number": "0x68b3",
    "gasLimit": "0x1c9c380",
    "gasUsed": "0xfa0d",
    "timestamp": "0x648b2e49",
    "extraData": "0x",
    "mixHash": "0xf1bb8a16840e0228dd4e8ffe397b7f5c904e753391ddea21a7b2587a2a45088d",
    "nonce": "0x0000000000000000",
    "baseFeePerGas": "0x32",
    "size": "0x364",
    "uncles": [],
    "transactions": [
      "0xefe62dd3a14fda9acbbc4bc5be56f500738ec38f829990f50695f5e70a5bd2ce"
    ]
  }
}`,
  Px = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: kx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ox = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "hash": "0xf7756d836b6716aaeffc2139c032752ba5acf02fe94acb65743f0d177554b2e2",
    "parentHash": "0xbc33aa8829350cc2e3ba7cf64d4beb2f1b554d570efc8bccb7b05ef50d76a47a",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "miner": "0x33bc13fdf135073277971b4d9f4f72082e907996",
    "stateRoot": "0x8af5429b649f9fc633ce3c95219026fd08a249867e28c7eab22994eaa6125bb9",
    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "difficulty": "0x1046bb7e3f8",
    "number": "0x68b3",
    "gasLimit": "0x1388",
    "gasUsed": "0x0",
    "timestamp": "0x55bf47e3",
    "extraData": "0x476574682f76312e302e302d30636463373634372f6c696e75782f676f312e34",
    "mixHash": "0x8c2dc0f970fa3aa6beb64c9f06a202a4314acfa4effaa4c75fd5bc9f9c77a519",
    "nonce": "0x28df43dd283aab1d",
    "size": "0x223",
    "uncles": [],
    "transactions": []
  }
}`,
  Ex = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ox },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Tx = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "difficulty": "0x2",
    "extraData": "0xd98301090a846765746889676f312e31352e3133856c696e7578000000000000f3da7a0ca19b1a5da05ca1905a32b3ebae4cce47710c8df48820d358910242382e601271c66b6f2f1d5f369d2f099da09b5213353d6d1bb6cfcf7b5df450938d01",
    "gasLimit": "0xe4e1c0",
    "gasUsed": "0x272b9",
    "hash": "0x1c94c9f5a496d0ae23515a562674e32ec74cebcfe23e28572d91388324a98d41",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000008100000000000000000000000000000000000000000000000200000000000000000020100080000000010200000000000000000000000000000000000000000000002000000000000000000000000000000000400000000400000000000000100000000000000000000000000000000000000000000480000100000000000000000000100000000004000000800000000000000000200000000000000000000000000000000000000000000000000000000008000000000000000000800000000010000000000000000000800000000100000000000000010040000000000000000000",
    "miner": "0x0000000000000000000000000000000000000000",
    "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "nonce": "0x0000000000000000",
    "number": "0x68b3",
    "parentHash": "0x2cccf442c63fcca5cf333e9006d8cb76920923ed6ca30aa56c4cd3dfe7cd22e0",
    "receiptsRoot": "0xcf2a408bb1c10b78efc5e632269bd78e6b51b9c414d8e87e6c1e18b9566400f6",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "size": "0x311",
    "stateRoot": "0xe3d2f1f88c9cba26e5771debf672b98d538ab34fb4f77301b7e145769bf86128",
    "timestamp": "0x618ec7cd",
    "transactions": [
      "0xc5f5da9e78d7d30fa65cdbc7c1d8e9c55fb7ced01766eb98406c844ef5be2bb8"
    ],
    "transactionsRoot": "0x8e983e943ff02b4b1958137d6a9e520719a647c9b3d654f31a0809800e410e22",
    "uncles": []
  }
}`,
  Fx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Tx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  jx = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "difficulty": "0x7",
    "extraData": "0xd58301090083626f7286676f312e3133856c696e75780000000000000000000086f17e9e040f9e2fdb548694799d85acaf5863dd16409938ce854d7dd65a181f6abfb6bfb21fdc2b517a26e33d9b5107da2cd756e739ed5b66f33547f12574c400",
    "gasLimit": "0x1312d00",
    "gasUsed": "0x0",
    "hash": "0x349ab21a9d4048c556785c9192c79b5ca9a9b81240c7cb14a9ee1b8dd22dc011",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "miner": "0x0000000000000000000000000000000000000000",
    "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "nonce": "0x0000000000000000",
    "number": "0x68b3",
    "parentHash": "0xb3811adb670ee2c965d372fbc84aefab5a8119285ca34793ca649c3d825f76b4",
    "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "size": "0x261",
    "stateRoot": "0x1f37a8f688f30f6713aad6755d22c8aeccc277dc1930d91d6312d720ad3b93c4",
    "timestamp": "0x5ed361f4",
    "transactions": [],
    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "uncles": []
  }
}`,
  Mx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: jx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ix = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "blockHash": "0x6d72cf7c9b3d2bc141cc6d659af183597fd2862f1d1774cff58ab41fa8fbafe7",
      "blockNumber": "0x14c8b834",
      "contractAddress": null,
      "cumulativeGasUsed": "0x0",
      "effectiveGasPrice": "0x989680",
      "from": "0x00000000000000000000000000000000000a4b05",
      "gasUsed": "0x0",
      "gasUsedForL1": "0x0",
      "l1BlockNumber": "0x15adf25",
      "logs": [],
      "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "status": "0x1",
      "timeboosted": false,
      "to": "0x00000000000000000000000000000000000a4b05",
      "transactionHash": "0xe5f0c6cb2b3abbcb69cfbee9936b6fe2556fde0baec2139d138929b6a998a56d",
      "transactionIndex": "0x0",
      "type": "0x6a"
    },
    {
      "blockHash": "0x6d72cf7c9b3d2bc141cc6d659af183597fd2862f1d1774cff58ab41fa8fbafe7",
      "blockNumber": "0x14c8b834",
      "contractAddress": null,
      "cumulativeGasUsed": "0xb9e31",
      "effectiveGasPrice": "0x989680",
      "from": "0x596dc0184eaa5e4477ddc61de35865258ccb9127",
      "gasUsed": "0x6babe",
      "gasUsedForL1": "0x427f",
      "l1BlockNumber": "0x15adf25",
      "logs": [],
      "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "status": "0x0",
      "timeboosted": false,
      "to": "0x99b71057fe318d9b1e1dbd7a966d876505478d6a",
      "transactionHash": "0x22202f7cebdf58a056f54739034c370bee1c8c2aceda9fa3b51d8f31d818cc4e",
      "transactionIndex": "0x2",
      "type": "0x2"
    }
  ]
}`,
  Rx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ix },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Nx = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "type": "0x7e",
      "status": "0x1",
      "cumulativeGasUsed": "0xb44c",
      "logs": [],
      "depositNonce": "0x1e44582",
      "depositReceiptVersion": "0x1",
      "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "transactionHash": "0x96b7a44ddb15de3b7afc38e9d28ad165623cd5e3be1f5131adde7a144db9208a",
      "transactionIndex": "0x0",
      "blockHash": "0xe452ed6525aff11bc9da702331e637f4bd633378ffea396de6923f098166d6bb",
      "blockNumber": "0x1e44580",
      "gasUsed": "0xb44c",
      "effectiveGasPrice": "0x0",
      "from": "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0001",
      "to": "0x4200000000000000000000000000000000000015",
      "contractAddress": null,
      "l1GasPrice": "0x6d5f6acf",
      "l1GasUsed": "0x6da",
      "l1Fee": "0x0",
      "l1BaseFeeScalar": "0x8dd",
      "l1BlobBaseFee": "0x1",
      "l1BlobBaseFeeScalar": "0x101c12"
    },
    {
      "type": "0x2",
      "status": "0x0",
      "cumulativeGasUsed": "0x209a2",
      "logs": [],
      "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "transactionHash": "0x8e3007e3aa3c8f3e2d8973c827bc5317169f9649c3f63cd78818c675c32993d7",
      "transactionIndex": "0x1",
      "blockHash": "0xe452ed6525aff11bc9da702331e637f4bd633378ffea396de6923f098166d6bb",
      "blockNumber": "0x1e44580",
      "gasUsed": "0x15556",
      "effectiveGasPrice": "0x81913aa0",
      "from": "0x4ab6e6ce2c95cf2a1468295bf83d140df4022508",
      "to": "0x27920e8039d2b6e93e36f5d5f53b998e2e631a70",
      "contractAddress": null,
      "l1GasPrice": "0x6d5f6acf",
      "l1GasUsed": "0x640",
      "l1Fee": "0x18d1115fc",
      "l1BaseFeeScalar": "0x8dd",
      "l1BlobBaseFee": "0x1",
      "l1BlobBaseFeeScalar": "0x101c12"
    }
  ]
}`,
  Lx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Nx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Bx = `{
  "jsonrpc": "2.0",
  "id": "1",
  "result": [
    {
      "blockHash": "0x19514ce955c65e4dd2cd41f435a75a46a08535b8fc16bc660f8092b32590b182",
      "blockNumber": "0x6f55",
      "contractAddress": null,
      "cumulativeGasUsed": "0x18c36",
      "from": "0x22896bfc68814bfd855b1a167255ee497006e730",
      "gasUsed": "0x18c36",
      "blobGasUsed": "0x20000",
      "effectiveGasPrice": "0x9502f907",
      "blobGasPrice": "0x32",
      "logs": [
        {
          "address": "0xfd584430cafa2f451b4e2ebcf3986a21fff04350",
          "topics": [
            "0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d",
            "0x4be29e0e4eb91f98f709d98803cba271592782e293b84a625e025cbb40197ba8",
            "0x000000000000000000000000835281a2563db4ebf1b626172e085dc406bfc7d2",
            "0x00000000000000000000000022896bfc68814bfd855b1a167255ee497006e730"
          ],
          "data": "0x",
          "blockNumber": "0x6f55",
          "transactionHash": "0x4a481e4649da999d92db0585c36cba94c18a33747e95dc235330e6c737c6f975",
          "transactionIndex": "0x0",
          "blockHash": "0x19514ce955c65e4dd2cd41f435a75a46a08535b8fc16bc660f8092b32590b182",
          "logIndex": "0x0",
          "removed": false
        }
      ],
      "logsBloom": "0x00000004000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000080020000000000000200010000000000000000000001000000800000000000000000000000000000000000000000000000000000100100000000000000000000008000000000000000000000000000000002000000000000000000000",
      "status": "0x1",
      "to": "0xfd584430cafa2f451b4e2ebcf3986a21fff04350",
      "transactionHash": "0x4a481e4649da999d92db0585c36cba94c18a33747e95dc235330e6c737c6f975",
      "transactionIndex": "0x0",
      "type": "0x0"
    },
    {
      "blockHash": "0x19514ce955c65e4dd2cd41f435a75a46a08535b8fc16bc660f8092b32590b182",
      "blockNumber": "0x6f55",
      "contractAddress": null,
      "cumulativeGasUsed": "0x1de3e",
      "from": "0x712e3a792c974b3e3dbe41229ad4290791c75a82",
      "gasUsed": "0x5208",
      "blobGasUsed": "0x20000",
      "effectiveGasPrice": "0x9502f907",
      "blobGasPrice": "0x32",
      "logs": [],
      "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "status": "0x1",
      "to": "0xd42e2b1c14d02f1df5369a9827cb8e6f3f75f338",
      "transactionHash": "0xefb83b4e3f1c317e8da0f8e2fbb2fe964f34ee184466032aeecac79f20eacaf6",
      "transactionIndex": "0x1",
      "type": "0x2"
    }
  ]
}`,
  $x = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Bx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ax = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "blockHash": "0x48cd4955100e5587717e3b4924c22be52cb10f77cabb9bbeadd0798a2f4cc4b5",
      "blockNumber": "0x82f885a",
      "contractAddress": null,
      "cumulativeGasUsed": "0xb44c",
      "depositNonce": "0x1e9c5e5",
      "depositReceiptVersion": "0x1",
      "effectiveGasPrice": "0x0",
      "from": "0xdeaddeaddeaddeaddeaddeaddeaddeaddead0001",
      "gasUsed": "0xb44c",
      "logs": [],
      "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "status": "0x1",
      "to": "0x4200000000000000000000000000000000000015",
      "transactionHash": "0x6ead7b8a54ac06a575e3f0c4b156f1014e07aee39177fd7a81485d822e22dd4c",
      "transactionIndex": "0x0",
      "type": "0x7e"
    },
    {
      "blockHash": "0x48cd4955100e5587717e3b4924c22be52cb10f77cabb9bbeadd0798a2f4cc4b5",
      "blockNumber": "0x82f885a",
      "contractAddress": null,
      "cumulativeGasUsed": "0x15eb7a",
      "effectiveGasPrice": "0x2705ab",
      "from": "0x94612af2bb246111f5e10e03daa61531da953744",
      "gasUsed": "0xd9189",
      "l1BaseFeeScalar": "0x146b",
      "l1BlobBaseFee": "0x1",
      "l1BlobBaseFeeScalar": "0xf79c5",
      "l1Fee": "0x159130969d",
      "l1GasPrice": "0x5bc25fe1",
      "l1GasUsed": "0x2cf7",
      "logs": [],
      "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "status": "0x1",
      "to": "0x843e4f915067555f88bb04c975770716a908b81a",
      "transactionHash": "0xb2ac0696e6d8e1469c11bb9ce4ca2e7f3933acb9020279b8facfa9dbf3f1dd08",
      "transactionIndex": "0x2",
      "type": "0x2"
    }
  ]
}`,
  Dx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ax },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Hx = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "blockHash": "0xff4342337c839fe4136587b76f70627cbc23344519cfc1d4b1e55eca050ff0ef",
      "blockNumber": "0x458c592",
      "contractAddress": null,
      "cumulativeGasUsed": "0x63c1e",
      "effectiveGasPrice": "0x5d21dba000",
      "from": "0xc322df633783978110306ddd27cf5e26faa38c29",
      "gasUsed": "0xbdaa",
      "logs": [
        {
          "address": "0xca3a02a77f1e8afe0cf540fdf78119e798a7e830",
          "topics": [
            "0x0ee3434002f792e08e39ca9c2d6ac9633baa2babb2033cb5d556288db3466646",
            "0x0000000000000000000000000000000000000000000000000000000000000003",
            "0x00000000000000000000000000000000000000000000000000000000000001a8"
          ],
          "data": "0x0000000000000000000000000000000000000000000000000000000000000000",
          "blockNumber": "0x458c592",
          "transactionHash": "0x2d359afd47eb304f2af2ba7951a1a716d709d5df268172dc0546ed2dd4e43768",
          "transactionIndex": "0x1",
          "blockHash": "0xff4342337c839fe4136587b76f70627cbc23344519cfc1d4b1e55eca050ff0ef",
          "logIndex": "0x1c",
          "removed": false
        },
        {
          "address": "0x0000000000000000000000000000000000001010",
          "topics": [
            "0x4dfe1bbbcf077ddc3e01291eea2d5c70c2b422b415d95645b9adcfd678cb1d63",
            "0x0000000000000000000000000000000000000000000000000000000000001010",
            "0x000000000000000000000000c322df633783978110306ddd27cf5e26faa38c29",
            "0x00000000000000000000000025b9fc2ed95bbaa9c030e57c860545a17694f90d"
          ],
          "data": "0x0000000000000000000000000000000000000000000000000044eb97541b049800000000000000000000000000000000000000000000000c84abfdf95379ab77000000000000000000000000000000000000000000000a33ba22691ee90e8ad300000000000000000000000000000000000000000000000c84671261ff5ea6df000000000000000000000000000000000000000000000a33ba6754b63d298f6b",
          "blockNumber": "0x458c592",
          "transactionHash": "0x2d359afd47eb304f2af2ba7951a1a716d709d5df268172dc0546ed2dd4e43768",
          "transactionIndex": "0x1",
          "blockHash": "0xff4342337c839fe4136587b76f70627cbc23344519cfc1d4b1e55eca050ff0ef",
          "logIndex": "0x1d",
          "removed": false
        }
      ],
      "logsBloom": "0x00000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000008000020000000000000000000004000000000000000000000000000000800000000000100000000100000000000000010000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000080000000000000000008000000200000000100000000000000000000000000200000800000000400000000404000000000000000000281000000000000000000000000000800110002000000000000000200000000000000000000000000000000000000000000000000100000",
      "status": "0x1",
      "to": "0xca3a02a77f1e8afe0cf540fdf78119e798a7e830",
      "transactionHash": "0x2d359afd47eb304f2af2ba7951a1a716d709d5df268172dc0546ed2dd4e43768",
      "transactionIndex": "0x1",
      "type": "0x0"
    }
  ]
}`,
  zx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Hx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Vx = `{
  "jsonrpc": "2.0",
  "id": "1",
  "result": [
    {
      "logIndex": "0x0",
      "removed": false,
      "blockNumber": "0x233",
      "blockHash": "0xfc139f5e2edee9e9c888d8df9a2d2226133a9bd87c88ccbd9c930d3d4c9f9ef5",
      "transactionHash": "0x66e7a140c8fa27fe98fde923defea7562c3ca2d6bb89798aabec65782c08f63d",
      "transactionIndex": "0x0",
      "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",
      "data": "0x0000000000000000000000000000000000000000000000000000000000000004",
      "topics": [
        "0x04474795f5b996ff80cb47c148d4c5ccdbe09ef27551820caa9c2f8ed149cce3"
      ]
    },
    {
      "logIndex": "0x0",
      "removed": false,
      "blockNumber": "0x238",
      "blockHash": "0x98b0ec0f9fea0018a644959accbe69cd046a8582e89402e1ab0ada91cad644ed",
      "transactionHash": "0xdb17aa1c2ce609132f599155d384c0bc5334c988a6c368056d7e167e23eee058",
      "transactionIndex": "0x0",
      "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",
      "data": "0x0000000000000000000000000000000000000000000000000000000000000007",
      "topics": [
        "0x04474795f5b996ff80cb47c148d4c5ccdbe09ef27551820caa9c2f8ed149cce3"
      ]
    }
  ]
}`,
  Ux = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Vx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Gx = `{
  "jsonrpc": "2.0",
  "id": "1",
  "result": [
    {
      "logIndex": "0x0",
      "removed": false,
      "blockNumber": "0x233",
      "blockHash": "0xfc139f5e2edee9e9c888d8df9a2d2226133a9bd87c88ccbd9c930d3d4c9f9ef5",
      "transactionHash": "0x66e7a140c8fa27fe98fde923defea7562c3ca2d6bb89798aabec65782c08f63d",
      "transactionIndex": "0x0",
      "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",
      "data": "0x0000000000000000000000000000000000000000000000000000000000000004",
      "topics": [
        "0x04474795f5b996ff80cb47c148d4c5ccdbe09ef27551820caa9c2f8ed149cce3"
      ]
    },
    {
      "logIndex": "0x0",
      "removed": false,
      "blockNumber": "0x238",
      "blockHash": "0x98b0ec0f9fea0018a644959accbe69cd046a8582e89402e1ab0ada91cad644ed",
      "transactionHash": "0xdb17aa1c2ce609132f599155d384c0bc5334c988a6c368056d7e167e23eee058",
      "transactionIndex": "0x0",
      "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",
      "data": "0x0000000000000000000000000000000000000000000000000000000000000007",
      "topics": [
        "0x04474795f5b996ff80cb47c148d4c5ccdbe09ef27551820caa9c2f8ed149cce3"
      ]
    }
  ]
}`,
  qx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Gx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Wx = `{
  "jsonrpc": "2.0",
  "id": "1",
  "result": [
    {
      "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "topics": [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x000000000000000000000000000000d40b595b94918a28b27d1e2c66f43a51d3",
        "0x00000000000000000000000006fac8c6785976a793339b10433e2fb66e58ff25"
      ],
      "data": "0x00000000000000000000000000000000000000000000000000f8854f2e000000",
      "blockHash": "0x1173417caa141e297983cd155a756d5ae648bfd90a30c02e9b06443ce934d6bb",
      "blockNumber": "0x137d3c2",
      "blockTimestamp": "0x66abe777",
      "transactionHash": "0x30b7ff0e86ebd3931e39f72c9b969e4b9a119243e99d2cf6f1feb77734468f13",
      "transactionIndex": "0x0",
      "logIndex": "0x0",
      "removed": false
    },
    {
      "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "topics": [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x000000000000000000000000000000d40b595b94918a28b27d1e2c66f43a51d3",
        "0x000000000000000000000000fa4118485c9508f07b76298819c6cec7ecde9893"
      ],
      "data": "0x000000000000000000000000000000000000000000000000068f641d00000000",
      "blockHash": "0x1173417caa141e297983cd155a756d5ae648bfd90a30c02e9b06443ce934d6bb",
      "blockNumber": "0x137d3c2",
      "blockTimestamp": "0x66abe777",
      "transactionHash": "0x30b7ff0e86ebd3931e39f72c9b969e4b9a119243e99d2cf6f1feb77734468f13",
      "transactionIndex": "0x0",
      "logIndex": "0x4",
      "removed": false
    }
  ]
}
`,
  Kx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Wx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Xx = `{
  "jsonrpc": "2.0",
  "id": "1",
  "result": [
    {
      "logIndex": "0x0",
      "removed": false,
      "blockNumber": "0x233",
      "blockHash": "0xfc139f5e2edee9e9c888d8df9a2d2226133a9bd87c88ccbd9c930d3d4c9f9ef5",
      "transactionHash": "0x66e7a140c8fa27fe98fde923defea7562c3ca2d6bb89798aabec65782c08f63d",
      "transactionIndex": "0x0",
      "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",
      "data": "0x0000000000000000000000000000000000000000000000000000000000000004",
      "topics": [
        "0x04474795f5b996ff80cb47c148d4c5ccdbe09ef27551820caa9c2f8ed149cce3"
      ]
    },
    {
      "logIndex": "0x0",
      "removed": false,
      "blockNumber": "0x238",
      "blockHash": "0x98b0ec0f9fea0018a644959accbe69cd046a8582e89402e1ab0ada91cad644ed",
      "transactionHash": "0xdb17aa1c2ce609132f599155d384c0bc5334c988a6c368056d7e167e23eee058",
      "transactionIndex": "0x0",
      "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",
      "data": "0x0000000000000000000000000000000000000000000000000000000000000007",
      "topics": [
        "0x04474795f5b996ff80cb47c148d4c5ccdbe09ef27551820caa9c2f8ed149cce3"
      ]
    }
  ]
}`,
  Qx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Xx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Yx = `{
  "jsonrpc": "2.0",
  "id": "1",
  "result": [
    {
      "logIndex": "0x0",
      "removed": false,
      "blockNumber": "0x233",
      "blockHash": "0xfc139f5e2edee9e9c888d8df9a2d2226133a9bd87c88ccbd9c930d3d4c9f9ef5",
      "transactionHash": "0x66e7a140c8fa27fe98fde923defea7562c3ca2d6bb89798aabec65782c08f63d",
      "transactionIndex": "0x0",
      "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",
      "data": "0x0000000000000000000000000000000000000000000000000000000000000004",
      "topics": [
        "0x04474795f5b996ff80cb47c148d4c5ccdbe09ef27551820caa9c2f8ed149cce3"
      ]
    },
    {
      "logIndex": "0x0",
      "removed": false,
      "blockNumber": "0x238",
      "blockHash": "0x98b0ec0f9fea0018a644959accbe69cd046a8582e89402e1ab0ada91cad644ed",
      "transactionHash": "0xdb17aa1c2ce609132f599155d384c0bc5334c988a6c368056d7e167e23eee058",
      "transactionIndex": "0x0",
      "address": "0x42699a7612a82f1d9c36148af9c77354759b210b",
      "data": "0x0000000000000000000000000000000000000000000000000000000000000007",
      "topics": [
        "0x04474795f5b996ff80cb47c148d4c5ccdbe09ef27551820caa9c2f8ed149cce3"
      ]
    }
  ]
}`,
  Zx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Yx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Jx = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "blockHash": "0xd1a0b15fc7764bc0b3451e7a95032353f9355d3bb23a811769aa9acd6ba8f056",
    "blockNumber": "0x14c8ad71",
    "from": "0x28452b38064b1dc5e5e2ae4c1be5d4c392f38dcf",
    "gas": "0x251e0",
    "gasPrice": "0xaf2fa8",
    "maxFeePerGas": "0x15dc310",
    "maxPriorityFeePerGas": "0x0",
    "hash": "0x1058fd1f920b95591f7d937b03d6e66c5d88bdf606284c51e42e5c4b7efb2b73",
    "input": "0x447a709e0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000012000000000000000000000000095c0d21482fd6bc204e588c06632fdb1cf51b0180000000000000000000000000000000000000000000000000042c7b81e6e7c48000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000416f9e0325458a3a3d5f1d1cad01f03e2af71f8b6a41076c21c0d8d93ca6d8c99a6dc1ba0cce9533cfe5661a69972ba8faa63c126819baf2d4320240398aa9c77a1c000000000000000000000000000000000000000000000000000000000000000000000000000000000000002b38a73dd32a2eafe849825a4b515ae5187eda4200000000000000000000000000000000000000000000000000038f2a7973fbaa00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000041af7cb61230d823ddc9f526b8ef86e56283bedabe8dc925d9710c1be86e94a14a01110ece5b611d85c10dea7b29205c8dcba408538962d328d4fef262cb30fc1a1b00000000000000000000000000000000000000000000000000000000000000",
    "nonce": "0x15c0e",
    "to": "0x5fcb496a31b7ae91e7c9078ec662bd7a55cd3079",
    "transactionIndex": "0x1",
    "value": "0x0",
    "type": "0x2",
    "accessList": [],
    "chainId": "0xa4b1",
    "v": "0x0",
    "r": "0x28a720cfd42c6a538ea3dacf15b283836243331e44bc2d761ddc258c2ef16b60",
    "s": "0x4bc3324edc5e810498508a3efd4bb035ec865c23cc50995d287d2e4497d4ad1d",
    "yParity": "0x0"
  }
}`,
  eS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Jx },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  tS = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "type": "0x2",
    "chainId": "0x2105",
    "nonce": "0x5add29",
    "gas": "0x1312d00",
    "maxFeePerGas": "0x5f5e245",
    "maxPriorityFeePerGas": "0x145",
    "to": "0x94bd91a1ecab2066efcfaf2636629dd9d4ae8832",
    "value": "0x0",
    "accessList": [],
    "input": "0x",
    "r": "0xcdeab067108f561b73ea09587f6788b41b5c48d385369202a0a728ba8c18e00",
    "s": "0x3b51b01894e0123769ca78875aaaffd9cdf35541ece398f4aea41f842377eda4",
    "yParity": "0x0",
    "v": "0x0",
    "hash": "0xca5320b77a4321c83865bbd5b59bae521ad26fa42c079c317bec60a6e639b045",
    "blockHash": "0x915c056ea95103e47b6b159aa462bcc74f998dc2827932128fbcbb2a65f17ed4",
    "blockNumber": "0x1e4405c",
    "transactionIndex": "0x10b",
    "from": "0x2b9d5ee187892af23ddd328ce0774de81465800d",
    "gasPrice": "0xd6946"
  }
}`,
  nS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: tS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  rS = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "type": "0x2",
    "chainId": "0x1",
    "nonce": "0xc",
    "gas": "0x6fd1d",
    "maxFeePerGas": "0x8e8876be",
    "maxPriorityFeePerGas": "0x5f5e100",
    "to": "0x0000000000001ff3684f28c67538d4d072c22734",
    "value": "0x2a5dde2535269d",
    "accessList": [],
    "input": "0x2213bc0b0000000000000000000000005418226af9c8d5d287a78fbbbcd337b86ec07d610000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002a5dde2535269d0000000000000000000000005418226af9c8d5d287a78fbbbcd337b86ec07d6100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000007e41fff991f00000000000000000000000009738f49cb0ab39f71c60efe3e525b7a1c05c9c4000000000000000000000000ea60cd69f2b9fd6eb067bddbbf86a5bdeffbbc550000000000000000000000000000000000000000000001029e3bb247ca49940500000000000000000000000000000000000000000000000000000000000000a0d22075ec0285078a691e78c32057350000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000002e000000000000000000000000000000000000000000000000000000000000004c000000000000000000000000000000000000000000000000000000000000005c000000000000000000000000000000000000000000000000000000000000000c438c9c147000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000000000000000005000000000000000000000000ad01c20d5886137e056775af56915de824c8fce5000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010438c9c147000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000000000000002710000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000024d0e30db00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001a4d92aadfb0000000000000000000000005418226af9c8d5d287a78fbbbcd337b86ec07d61000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000000000000000000000000000000000000001c92475ab80a6830dfb43d756a860e657365ea2864c6008c4f0cae1484ed3ed9a98139f000000000000000000000000000000000000000000000000000000006852ddbc000000000000000000000000a8020ecbc321e0c8cea26b3507f207482d0100c20000000000000000000000000000000000000000000000000000000000000120000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000000000000000000000000000002a5871dfd021dc0000000000000000000000000000000000000000000000000000000000000041126cb8c3bbd95f1e84894cf44a0b5af09681cce9237768fc4c29b6b11918decd548adea33954b46832daf7bed6bc14f133d22a6512a8ca1f24b8c079aedd03f21b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c4103b48be0000000000000000000000005418226af9c8d5d287a78fbbbcd337b86ec07d61000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000000000000000000000000000000000000000002710000000000000000000000000e40f64d9926c5c514a0cba558a7543152925e9ba0000000000000000000000000000000000000000000000000000000000001e01000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012438c9c147000000000000000000000000ea60cd69f2b9fd6eb067bddbbf86a5bdeffbbc550000000000000000000000000000000000000000000000000000000000000064000000000000000000000000ea60cd69f2b9fd6eb067bddbbf86a5bdeffbbc55000000000000000000000000000000000000000000000000000000000000002400000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000044a9059cbb000000000000000000000000382ffce2287252f930e1c8dc9328dac5bf282ba10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "r": "0x8bf948d23d63de324e35b9b4ab92cb5deb56a5dcd45a8768048a3d14dbbde4ba",
    "s": "0x10ee77bfb17e60b0aa05938f5672741ee3c20497069fbecf10c68189ffec429c",
    "yParity": "0x0",
    "v": "0x0",
    "hash": "0xf8b955c1b95e0ce539ded4baf94a54035d36020decb904fce95b33707217d02a",
    "blockHash": "0x8195eb02b95b1224adc063b8f06155d719cd5dafbe5164b7985b3b223bd3b8dc",
    "blockNumber": "0x15ade1c",
    "transactionIndex": "0xcb",
    "from": "0x09738f49cb0ab39f71c60efe3e525b7a1c05c9c4",
    "gasPrice": "0x6c1954f4"
  }
}`,
  oS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: rS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  aS = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "blockHash": "0x64c69d5485eff30067e6af83396e37ccf9d59f0b1bb819614e676366e5050a40",
    "blockNumber": "0x82f7bae",
    "from": "0x67a7334bd35b99310f3ede2111b65b654b76df43",
    "gas": "0x7a1200",
    "gasPrice": "0x475",
    "maxFeePerGas": "0x1e8d67",
    "maxPriorityFeePerGas": "0x1",
    "hash": "0x4400d8e9c86da035f9a4fc5a2c4a0b7b3b0fc79540c705fe92abd08b10078866",
    "input": "0x",
    "nonce": "0x45410",
    "to": "0x27f68ab2b6502449557bd0bd4b52c05e6fffca85",
    "transactionIndex": "0x1b",
    "value": "0x0",
    "type": "0x2",
    "accessList": [],
    "chainId": "0xa",
    "v": "0x0",
    "r": "0x2c00aadba9d46fa0b3effcb8923ea5672af06238d029e115ab9997b8aafb8a7e",
    "s": "0x259ead663bb5959ec597da67221b2c88345740c015f99405c8f937eb579b407a",
    "yParity": "0x0"
  }
}`,
  iS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: aS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  sS = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "blockHash": "0x66e01e57dca034945064a2d58d4794f90601804b3f42aa809d4a6450f1b2d724",
    "blockNumber": "0x458beff",
    "from": "0xe4f575e07d7c9e31bb2900e1b23c3584b4a6fa2d",
    "gas": "0x41295",
    "gasPrice": "0x1fa3061dd4",
    "maxPriorityFeePerGas": "0x60db88400",
    "maxFeePerGas": "0x38a1c8c7ac",
    "hash": "0x9a05c39f9d682f5660ccc0feda8f8d1ff233e67b2bdb5550a9faf0ae50330e4b",
    "input": "0x22a775b60000000000000000000000000000000000000000000000000000000000000040000000000000000000000000e4f575e07d7c9e31bb2900e1b23c3584b4a6fa2de4f575e07d7c9e31bb2900e1b23c3584b4a6fa2d00000000000000000000055500000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000000412f697066732f6261666b726569676575766336723764673763326b726a33376369787865347a35706b717637736f68773669656d326f3568667262616834646d75000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000e4f575e07d7c9e31bb2900e1b23c3584b4a6fa2d00000000000000000000000000000000000000000000000000000000000027100000000000000000000000000000000000000000000000000000000000000001000000000000000000000000e4f575e07d7c9e31bb2900e1b23c3584b4a6fa2d00000000000000000000000000000000000000000000000000000000000003e8000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000",
    "nonce": "0x510",
    "to": "0xb3ec12aa047aea9d2abb3e4795d72aa70b29cb6c",
    "transactionIndex": "0x55",
    "value": "0x0",
    "type": "0x2",
    "accessList": [],
    "chainId": "0x89",
    "v": "0x1",
    "yParity": "0x1",
    "r": "0x2e6eb3b537c197c3ecaf084701e4aaaccb05b807dd9b4bdf520adc75d1403f61",
    "s": "0x2f710024ce850f65f35345132d2b551d53a84f21cb07e05e0c1aaa614a3cd485"
  }
}`,
  lS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: sS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  cS = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x15c29"
}`,
  uS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: cS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  dS = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5ae51f"
}`,
  fS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: dS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  pS = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x21a"
}`,
  hS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: pS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  mS = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x455ff"
}`,
  gS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: mS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  bS = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x513"
}`,
  vS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: bS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  yS = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "blockHash": "0xd1a0b15fc7764bc0b3451e7a95032353f9355d3bb23a811769aa9acd6ba8f056",
    "blockNumber": "0x14c8ad71",
    "contractAddress": null,
    "cumulativeGasUsed": "0x1c75b",
    "effectiveGasPrice": "0xaf2fa8",
    "from": "0x28452b38064b1dc5e5e2ae4c1be5d4c392f38dcf",
    "gasUsed": "0x1c75b",
    "gasUsedForL1": "0x6545",
    "l1BlockNumber": "0x15adeec",
    "logs": [
      {
        "address": "0x5fcb496a31b7ae91e7c9078ec662bd7a55cd3079",
        "topics": [
          "0xb59adc820ca642dad493a0a6e0bdf979dcae037dea114b70d5c66b1c0b791c4b",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x00000000000000000000000095c0d21482fd6bc204e588c06632fdb1cf51b018",
          "0x0000000000000000000000000000000000000000000000000000000000000000"
        ],
        "data": "0x0000000000000000000000000000000000000000000000000000000000022e60000000000000000000000000000000000000000000000000000000006852e79f000000000000000000000000000000000000000000000000000000006852e7da",
        "blockNumber": "0x14c8ad71",
        "transactionHash": "0x1058fd1f920b95591f7d937b03d6e66c5d88bdf606284c51e42e5c4b7efb2b73",
        "transactionIndex": "0x1",
        "blockHash": "0xd1a0b15fc7764bc0b3451e7a95032353f9355d3bb23a811769aa9acd6ba8f056",
        "logIndex": "0x0",
        "removed": false
      },
      {
        "address": "0x5fcb496a31b7ae91e7c9078ec662bd7a55cd3079",
        "topics": [
          "0x7f5bdabbd27a8fc572781b177055488d7c6729a2bade4f57da9d200f31c15d47",
          "0x0000000000000000000000000000000000000000000000000000000000000001",
          "0x00000000000000000000000095c0d21482fd6bc204e588c06632fdb1cf51b018",
          "0x00000000000000000000000095c0d21482fd6bc204e588c06632fdb1cf51b018"
        ],
        "data": "0x0000000000000000000000000000000000000000000000000000000000022e600000000000000000000000000000000000000000000000000042c7b81e6e7c4800000000000000000000000000000000000000000000000000038f2a7973fbaa000000000000000000000000000000000000000000000000000000006852e79f000000000000000000000000000000000000000000000000000000006852e7da",
        "blockNumber": "0x14c8ad71",
        "transactionHash": "0x1058fd1f920b95591f7d937b03d6e66c5d88bdf606284c51e42e5c4b7efb2b73",
        "transactionIndex": "0x1",
        "blockHash": "0xd1a0b15fc7764bc0b3451e7a95032353f9355d3bb23a811769aa9acd6ba8f056",
        "logIndex": "0x1",
        "removed": false
      }
    ],
    "logsBloom": "0x00000000000000000000200000000000000000000000002100000000000000000000800000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000040000000000040000000000000000020000000000000000000800000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000008000000000000000000000000000000000000008000004000000000000000000100001000060000000000000000000000000000000000000000000000000000000000000000000",
    "status": "0x1",
    "timeboosted": false,
    "to": "0x5fcb496a31b7ae91e7c9078ec662bd7a55cd3079",
    "transactionHash": "0x1058fd1f920b95591f7d937b03d6e66c5d88bdf606284c51e42e5c4b7efb2b73",
    "transactionIndex": "0x1",
    "type": "0x2"
  }
}`,
  _S = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: yS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  xS = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "type": "0x2",
    "status": "0x1",
    "cumulativeGasUsed": "0x45ef713",
    "logs": [],
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "transactionHash": "0xca5320b77a4321c83865bbd5b59bae521ad26fa42c079c317bec60a6e639b045",
    "transactionIndex": "0x10b",
    "blockHash": "0x915c056ea95103e47b6b159aa462bcc74f998dc2827932128fbcbb2a65f17ed4",
    "blockNumber": "0x1e4405c",
    "gasUsed": "0x1afff5",
    "effectiveGasPrice": "0xd6946",
    "from": "0x2b9d5ee187892af23ddd328ce0774de81465800d",
    "to": "0x94bd91a1ecab2066efcfaf2636629dd9d4ae8832",
    "contractAddress": null,
    "l1GasPrice": "0x64060050",
    "l1GasUsed": "0x640",
    "l1Fee": "0x16b200748",
    "l1BaseFeeScalar": "0x8dd",
    "l1BlobBaseFee": "0x1",
    "l1BlobBaseFeeScalar": "0x101c12"
  }
}`,
  SS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: xS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  CS = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "type": "0x2",
    "status": "0x1",
    "cumulativeGasUsed": "0x13beec6",
    "logs": [
      {
        "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "topics": [
          "0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c",
          "0x0000000000000000000000005418226af9c8d5d287a78fbbbcd337b86ec07d61"
        ],
        "data": "0x000000000000000000000000000000000000000000000000002a5871dfd021dc",
        "blockHash": "0x8195eb02b95b1224adc063b8f06155d719cd5dafbe5164b7985b3b223bd3b8dc",
        "blockNumber": "0x15ade1c",
        "blockTimestamp": "0x6852ddb7",
        "transactionHash": "0xf8b955c1b95e0ce539ded4baf94a54035d36020decb904fce95b33707217d02a",
        "transactionIndex": "0xcb",
        "logIndex": "0x21a",
        "removed": false
      },
      {
        "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000005418226af9c8d5d287a78fbbbcd337b86ec07d61",
          "0x000000000000000000000000a8020ecbc321e0c8cea26b3507f207482d0100c2"
        ],
        "data": "0x000000000000000000000000000000000000000000000000002a5871dfd021dc",
        "blockHash": "0x8195eb02b95b1224adc063b8f06155d719cd5dafbe5164b7985b3b223bd3b8dc",
        "blockNumber": "0x15ade1c",
        "blockTimestamp": "0x6852ddb7",
        "transactionHash": "0xf8b955c1b95e0ce539ded4baf94a54035d36020decb904fce95b33707217d02a",
        "transactionIndex": "0xcb",
        "logIndex": "0x21b",
        "removed": false
      },
      {
        "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x000000000000000000000000a8020ecbc321e0c8cea26b3507f207482d0100c2",
          "0x0000000000000000000000005418226af9c8d5d287a78fbbbcd337b86ec07d61"
        ],
        "data": "0x0000000000000000000000000000000000000000000000000000000001c92475",
        "blockHash": "0x8195eb02b95b1224adc063b8f06155d719cd5dafbe5164b7985b3b223bd3b8dc",
        "blockNumber": "0x15ade1c",
        "blockTimestamp": "0x6852ddb7",
        "transactionHash": "0xf8b955c1b95e0ce539ded4baf94a54035d36020decb904fce95b33707217d02a",
        "transactionIndex": "0xcb",
        "logIndex": "0x21c",
        "removed": false
      },
      {
        "address": "0x5418226af9c8d5d287a78fbbbcd337b86ec07d61",
        "topics": [],
        "data": "0x1d2932dc648a3bd5e208716b1240e9a79cc9aafc8378be4c7be038a2ed1a1cc400000000000000000000000001c92475",
        "blockHash": "0x8195eb02b95b1224adc063b8f06155d719cd5dafbe5164b7985b3b223bd3b8dc",
        "blockNumber": "0x15ade1c",
        "blockTimestamp": "0x6852ddb7",
        "transactionHash": "0xf8b955c1b95e0ce539ded4baf94a54035d36020decb904fce95b33707217d02a",
        "transactionIndex": "0xcb",
        "logIndex": "0x21d",
        "removed": false
      },
      {
        "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000005418226af9c8d5d287a78fbbbcd337b86ec07d61",
          "0x000000000000000000000000e40f64d9926c5c514a0cba558a7543152925e9ba"
        ],
        "data": "0x0000000000000000000000000000000000000000000000000000000001c92475",
        "blockHash": "0x8195eb02b95b1224adc063b8f06155d719cd5dafbe5164b7985b3b223bd3b8dc",
        "blockNumber": "0x15ade1c",
        "blockTimestamp": "0x6852ddb7",
        "transactionHash": "0xf8b955c1b95e0ce539ded4baf94a54035d36020decb904fce95b33707217d02a",
        "transactionIndex": "0xcb",
        "logIndex": "0x21e",
        "removed": false
      },
      {
        "address": "0xea60cd69f2b9fd6eb067bddbbf86a5bdeffbbc55",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x000000000000000000000000e40f64d9926c5c514a0cba558a7543152925e9ba",
          "0x0000000000000000000000005418226af9c8d5d287a78fbbbcd337b86ec07d61"
        ],
        "data": "0x00000000000000000000000000000000000000000000010d4f480df898dae421",
        "blockHash": "0x8195eb02b95b1224adc063b8f06155d719cd5dafbe5164b7985b3b223bd3b8dc",
        "blockNumber": "0x15ade1c",
        "blockTimestamp": "0x6852ddb7",
        "transactionHash": "0xf8b955c1b95e0ce539ded4baf94a54035d36020decb904fce95b33707217d02a",
        "transactionIndex": "0xcb",
        "logIndex": "0x21f",
        "removed": false
      },
      {
        "address": "0xe40f64d9926c5c514a0cba558a7543152925e9ba",
        "topics": [
          "0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1"
        ],
        "data": "0x0000000000000000000000000000000000000000000000000000001a6e5c19eb0000000000000000000000000000000000000000000f9d1b611f6040d12cfcfd",
        "blockHash": "0x8195eb02b95b1224adc063b8f06155d719cd5dafbe5164b7985b3b223bd3b8dc",
        "blockNumber": "0x15ade1c",
        "blockTimestamp": "0x6852ddb7",
        "transactionHash": "0xf8b955c1b95e0ce539ded4baf94a54035d36020decb904fce95b33707217d02a",
        "transactionIndex": "0xcb",
        "logIndex": "0x220",
        "removed": false
      },
      {
        "address": "0xe40f64d9926c5c514a0cba558a7543152925e9ba",
        "topics": [
          "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
          "0x0000000000000000000000005418226af9c8d5d287a78fbbbcd337b86ec07d61",
          "0x0000000000000000000000005418226af9c8d5d287a78fbbbcd337b86ec07d61"
        ],
        "data": "0x0000000000000000000000000000000000000000000000000000000001c924750000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010d4f480df898dae421",
        "blockHash": "0x8195eb02b95b1224adc063b8f06155d719cd5dafbe5164b7985b3b223bd3b8dc",
        "blockNumber": "0x15ade1c",
        "blockTimestamp": "0x6852ddb7",
        "transactionHash": "0xf8b955c1b95e0ce539ded4baf94a54035d36020decb904fce95b33707217d02a",
        "transactionIndex": "0xcb",
        "logIndex": "0x221",
        "removed": false
      },
      {
        "address": "0xea60cd69f2b9fd6eb067bddbbf86a5bdeffbbc55",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000005418226af9c8d5d287a78fbbbcd337b86ec07d61",
          "0x000000000000000000000000382ffce2287252f930e1c8dc9328dac5bf282ba1"
        ],
        "data": "0x000000000000000000000000000000000000000000000002b16eccf090e3780a",
        "blockHash": "0x8195eb02b95b1224adc063b8f06155d719cd5dafbe5164b7985b3b223bd3b8dc",
        "blockNumber": "0x15ade1c",
        "blockTimestamp": "0x6852ddb7",
        "transactionHash": "0xf8b955c1b95e0ce539ded4baf94a54035d36020decb904fce95b33707217d02a",
        "transactionIndex": "0xcb",
        "logIndex": "0x222",
        "removed": false
      },
      {
        "address": "0xea60cd69f2b9fd6eb067bddbbf86a5bdeffbbc55",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000005418226af9c8d5d287a78fbbbcd337b86ec07d61",
          "0x00000000000000000000000009738f49cb0ab39f71c60efe3e525b7a1c05c9c4"
        ],
        "data": "0x00000000000000000000000000000000000000000000010a9dd9410807f76c17",
        "blockHash": "0x8195eb02b95b1224adc063b8f06155d719cd5dafbe5164b7985b3b223bd3b8dc",
        "blockNumber": "0x15ade1c",
        "blockTimestamp": "0x6852ddb7",
        "transactionHash": "0xf8b955c1b95e0ce539ded4baf94a54035d36020decb904fce95b33707217d02a",
        "transactionIndex": "0xcb",
        "logIndex": "0x223",
        "removed": false
      }
    ],
    "logsBloom": "0x00200000001000000000000080000001000000000000000000000000000000001000000000000000002000000000000002200000080000000010400000002000000000000000004008000008000000200000002000000000000000008000000000000018000000000000000000000000000000000000100000000010000100000000000000000000000000000000000000000049010000080002004000001000000000000200200000040020000000000000000000000000000000000000000000000002000000000000000000000000000000000000001080000100000010000000200000000000000000000000000000000000000000400000000000000000",
    "transactionHash": "0xf8b955c1b95e0ce539ded4baf94a54035d36020decb904fce95b33707217d02a",
    "transactionIndex": "0xcb",
    "blockHash": "0x8195eb02b95b1224adc063b8f06155d719cd5dafbe5164b7985b3b223bd3b8dc",
    "blockNumber": "0x15ade1c",
    "gasUsed": "0x4f11e",
    "effectiveGasPrice": "0x6c1954f4",
    "from": "0x09738f49cb0ab39f71c60efe3e525b7a1c05c9c4",
    "to": "0x0000000000001ff3684f28c67538d4d072c22734",
    "contractAddress": null
  }
}`,
  wS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: CS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  kS = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "blockHash": "0x64c69d5485eff30067e6af83396e37ccf9d59f0b1bb819614e676366e5050a40",
    "blockNumber": "0x82f7bae",
    "contractAddress": null,
    "cumulativeGasUsed": "0xfb6443",
    "effectiveGasPrice": "0x475",
    "from": "0x67a7334bd35b99310f3ede2111b65b654b76df43",
    "gasUsed": "0x568a8",
    "l1BaseFeeScalar": "0x146b",
    "l1BlobBaseFee": "0x1",
    "l1BlobBaseFeeScalar": "0xf79c5",
    "l1Fee": "0x52bc0a9d5",
    "l1GasPrice": "0x9e487441",
    "l1GasUsed": "0x640",
    "logs": [],
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "status": "0x1",
    "to": "0x27f68ab2b6502449557bd0bd4b52c05e6fffca85",
    "transactionHash": "0x4400d8e9c86da035f9a4fc5a2c4a0b7b3b0fc79540c705fe92abd08b10078866",
    "transactionIndex": "0x1b",
    "type": "0x2"
  }
}`,
  PS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: kS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  OS = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "blockHash": "0x66e01e57dca034945064a2d58d4794f90601804b3f42aa809d4a6450f1b2d724",
    "blockNumber": "0x458beff",
    "contractAddress": null,
    "cumulativeGasUsed": "0xb43ff1",
    "effectiveGasPrice": "0x1fa3061dd4",
    "from": "0xe4f575e07d7c9e31bb2900e1b23c3584b4a6fa2d",
    "gasUsed": "0x404a0",
    "logs": [
      {
        "address": "0xb3ec12aa047aea9d2abb3e4795d72aa70b29cb6c",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x000000000000000000000000e4f575e07d7c9e31bb2900e1b23c3584b4a6fa2d",
          "0xe4f575e07d7c9e31bb2900e1b23c3584b4a6fa2d000000000000000000000555"
        ],
        "data": "0x",
        "blockNumber": "0x458beff",
        "transactionHash": "0x9a05c39f9d682f5660ccc0feda8f8d1ff233e67b2bdb5550a9faf0ae50330e4b",
        "transactionIndex": "0x55",
        "blockHash": "0x66e01e57dca034945064a2d58d4794f90601804b3f42aa809d4a6450f1b2d724",
        "logIndex": "0x1bc",
        "removed": false
      },
      {
        "address": "0xb3ec12aa047aea9d2abb3e4795d72aa70b29cb6c",
        "topics": [
          "0x3fa96d7b6bcbfe71ef171666d84db3cf52fa2d1c8afdb1cc8e486177f208b7df"
        ],
        "data": "0xe4f575e07d7c9e31bb2900e1b23c3584b4a6fa2d00000000000000000000055500000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000001000000000000000000000000e4f575e07d7c9e31bb2900e1b23c3584b4a6fa2d00000000000000000000000000000000000000000000000000000000000003e8",
        "blockNumber": "0x458beff",
        "transactionHash": "0x9a05c39f9d682f5660ccc0feda8f8d1ff233e67b2bdb5550a9faf0ae50330e4b",
        "transactionIndex": "0x55",
        "blockHash": "0x66e01e57dca034945064a2d58d4794f90601804b3f42aa809d4a6450f1b2d724",
        "logIndex": "0x1bd",
        "removed": false
      },
      {
        "address": "0xb3ec12aa047aea9d2abb3e4795d72aa70b29cb6c",
        "topics": [
          "0x841ffb90d4cabdd1f16034f3fa831d79060febbb8167bdd54a49269365bdf78f"
        ],
        "data": "0xe4f575e07d7c9e31bb2900e1b23c3584b4a6fa2d00000000000000000000055500000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000001000000000000000000000000e4f575e07d7c9e31bb2900e1b23c3584b4a6fa2d0000000000000000000000000000000000000000000000000000000000002710",
        "blockNumber": "0x458beff",
        "transactionHash": "0x9a05c39f9d682f5660ccc0feda8f8d1ff233e67b2bdb5550a9faf0ae50330e4b",
        "transactionIndex": "0x55",
        "blockHash": "0x66e01e57dca034945064a2d58d4794f90601804b3f42aa809d4a6450f1b2d724",
        "logIndex": "0x1be",
        "removed": false
      },
      {
        "address": "0x0000000000000000000000000000000000001010",
        "topics": [
          "0x4dfe1bbbcf077ddc3e01291eea2d5c70c2b422b415d95645b9adcfd678cb1d63",
          "0x0000000000000000000000000000000000000000000000000000000000001010",
          "0x000000000000000000000000e4f575e07d7c9e31bb2900e1b23c3584b4a6fa2d",
          "0x000000000000000000000000a8b52f02108aa5f4b675bdcc973760022d7c6020"
        ],
        "data": "0x000000000000000000000000000000000000000000000000001852e185628000000000000000000000000000000000000000000000000000b6ddac9a5ae512300000000000000000000000000000000000000000000000452af37db644af716d000000000000000000000000000000000000000000000000b6c559b8d58292300000000000000000000000000000000000000000000000452b0bd097ca11f16d",
        "blockNumber": "0x458beff",
        "transactionHash": "0x9a05c39f9d682f5660ccc0feda8f8d1ff233e67b2bdb5550a9faf0ae50330e4b",
        "transactionIndex": "0x55",
        "blockHash": "0x66e01e57dca034945064a2d58d4794f90601804b3f42aa809d4a6450f1b2d724",
        "logIndex": "0x1bf",
        "removed": false
      }
    ],
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000080000000000000000000000002000000008000000000000000000000000000000000000000000000000008000020800000000000000000000100000000000000000000020000000000000000000800000000000000000090000010000000000000000000800080000000000080400000000000000000040000000000000000200000000000014000000000080000000000000000002002000000000000004000000002000000000001002000000000000000000000000000140000000020000800000000000000000001000000000000000000000000000000000000100000",
    "status": "0x1",
    "to": "0xb3ec12aa047aea9d2abb3e4795d72aa70b29cb6c",
    "transactionHash": "0x9a05c39f9d682f5660ccc0feda8f8d1ff233e67b2bdb5550a9faf0ae50330e4b",
    "transactionIndex": "0x55",
    "type": "0x2"
  }
}`,
  ES = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: OS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  TS = `{
  "jsonrpc": "2.0",
  "result": {
    "context": {
      "apiVersion": "2.2.16",
      "slot": 347437423
    },
    "value": {
      "data": "",
      "executable": false,
      "lamports": 4789143966,
      "owner": "11111111111111111111111111111111",
      "rentEpoch": 18446744073709552000,
      "space": 0
    }
  },
  "id": 1
}`,
  FS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: TS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  jS = `{
  "jsonrpc": "2.0",
  "result": {
    "context": {
      "apiVersion": "2.2.16",
      "slot": 347437337
    },
    "value": 4790497497
  },
  "id": 1
}`,
  MS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: jS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  IS = `{
  "jsonrpc": "2.0",
  "result": {
    "context": {
      "apiVersion": "2.2.16",
      "slot": 347437066
    },
    "value": {
      "blockhash": "2YJjJHhrodn25Hj5PMZA9ceeokwi2qZY4GRPDcm51BrW",
      "lastValidBlockHeight": 325643222
    }
  },
  "id": 1
}`,
  RS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: IS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  NS = `{
  "jsonrpc": "2.0",
  "result": [
    {
      "blockTime": 1750179883,
      "confirmationStatus": "finalized",
      "err": null,
      "memo": "[36] da6faf71-74f6-4703-88e1-5f57dd4b8263",
      "signature": "4dULk2bvZLgaDQs2vi5da38dknAwPS7j1RXuLquqQPoVdcCybRTExkHjqmJo6CMK2J68Ra1TjHjTupGV1NyGzqUM",
      "slot": 347427320
    }
  ],
  "id": 1
}`,
  LS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: NS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  BS = `{
  "jsonrpc": "2.0",
  "result": {
    "context": {
      "apiVersion": "2.2.16",
      "slot": 347442214
    },
    "value": {
      "amount": "2470628",
      "decimals": 6,
      "uiAmount": 2.470628,
      "uiAmountString": "2.470628"
    }
  },
  "id": 1
}`,
  $S = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: BS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  AS = `{
  "jsonrpc": "2.0",
  "result": {
    "context": {
      "apiVersion": "2.2.16",
      "slot": 347666089
    },
    "value": [
      {
        "account": {
          "data": {
            "parsed": {
              "info": {
                "isNative": false,
                "mint": "4yibHttjEA1WTt3akHRcMr7qQsFYFRNwBupirYpZQGXz",
                "owner": "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN",
                "state": "initialized",
                "tokenAmount": {
                  "amount": "1709679427060254",
                  "decimals": 2,
                  "uiAmount": 17096794270602.54,
                  "uiAmountString": "17096794270602.54"
                }
              },
              "type": "account"
            },
            "program": "spl-token",
            "space": 165
          },
          "executable": false,
          "lamports": 2039280,
          "owner": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          "rentEpoch": 18446744073709552000,
          "space": 165
        },
        "pubkey": "Dkp4ZocRpvSmJg7ep45ahVRUrZ6KnUm1UWvHyB5AjQpw"
      },
      {
        "account": {
          "data": {
            "parsed": {
              "info": {
                "isNative": false,
                "mint": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
                "owner": "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN",
                "state": "initialized",
                "tokenAmount": {
                  "amount": "75396888",
                  "decimals": 6,
                  "uiAmount": 75.396888,
                  "uiAmountString": "75.396888"
                }
              },
              "type": "account"
            },
            "program": "spl-token",
            "space": 165
          },
          "executable": false,
          "lamports": 2039280,
          "owner": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          "rentEpoch": 18446744073709552000,
          "space": 165
        },
        "pubkey": "BkYnufYntmd2FX1WGGFTcn4jNATvALJ3iBfp8JS7CfcK"
      }
    ]
  },
  "id": 1
}`,
  DS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: AS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  HS = `{
  "jsonrpc": "2.0",
  "result": {
    "blockTime": 1750178045,
    "meta": {
      "computeUnitsConsumed": 596,
      "err": null,
      "fee": 12030,
      "innerInstructions": [],
      "loadedAddresses": {
        "readonly": [],
        "writable": []
      },
      "logMessages": [
        "Program ComputeBudget111111111111111111111111111111 invoke [1]",
        "Program ComputeBudget111111111111111111111111111111 success",
        "Program ComputeBudget111111111111111111111111111111 invoke [1]",
        "Program ComputeBudget111111111111111111111111111111 success",
        "Program ComputeBudget111111111111111111111111111111 invoke [1]",
        "Program ComputeBudget111111111111111111111111111111 success",
        "Program Minimox7jqQmMpF6Z34DTNwE9iJyNkruzvvYQRaHpAP invoke [1]",
        "Program Minimox7jqQmMpF6Z34DTNwE9iJyNkruzvvYQRaHpAP consumed 146 of 253 compute units",
        "Program Minimox7jqQmMpF6Z34DTNwE9iJyNkruzvvYQRaHpAP success"
      ],
      "postBalances": [
        15683558119,
        2561280,
        1,
        1141440
      ],
      "postTokenBalances": [],
      "preBalances": [
        15683570149,
        2561280,
        1,
        1141440
      ],
      "preTokenBalances": [],
      "rewards": [],
      "status": {
        "Ok": null
      }
    },
    "slot": 347422760,
    "transaction": {
      "message": {
        "accountKeys": [
          "Data6X2sFNz6WFGJ5nXBCYMvyVvJUQh5oUJLkPd9pM58",
          "J4HJYz4p7TRP96WVFky3vh7XryxoFehHjoRySUTeSeXw",
          "ComputeBudget111111111111111111111111111111",
          "Minimox7jqQmMpF6Z34DTNwE9iJyNkruzvvYQRaHpAP"
        ],
        "addressTableLookups": [],
        "header": {
          "numReadonlySignedAccounts": 0,
          "numReadonlyUnsignedAccounts": 2,
          "numRequiredSignatures": 1
        },
        "instructions": [
          {
            "accounts": [],
            "data": "JyEy5H",
            "programIdIndex": 2,
            "stackHeight": null
          },
          {
            "accounts": [],
            "data": "3ay2hEw4e3yH",
            "programIdIndex": 2,
            "stackHeight": null
          },
          {
            "accounts": [],
            "data": "UpuvjR",
            "programIdIndex": 2,
            "stackHeight": null
          },
          {
            "accounts": [
              0,
              1
            ],
            "data": "LYjjAVXYzaRnFN2zXWZqAneMD6UBEFJhJmvirk4K7tyb5ZE5quqxNRkGvVtCzA58442bGvcbhtYNURoZ4n9HMnLU53fEP3V5B7HMjj8Cc2faYMgof2B4CLEvLDvtYrJjqgd8zV2G8vZ5QVEbw1vw3PkVDZ69ETpYMzGYVHJrPcZCWfZ",
            "programIdIndex": 3,
            "stackHeight": null
          }
        ],
        "recentBlockhash": "9Dso8sccZ1M8KPLgb6hvWYmMshHPLANpSBprGqC6b7kv"
      },
      "signatures": [
        "4MHz27QAFhn6hTpssCgBBFs2fK7a4MfU1rV5XccMxgCALACDVavDtF3JgLPAtuC8aNGBfdHDALbGvX1fL7cdqokt"
      ]
    },
    "version": 0
  },
  "id": 1
}`,
  zS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: HS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
var Ic = ((n) => (
  (n.CLI = "bash"),
  (n.JavaScript = "javascript"),
  (n.Python = "python"),
  (n.JSON = "json"),
  n
))(Ic || {});
const VS = [
  { value: "bash", label: "curl" },
  { value: "json", label: "JSON" },
];
var go = ((n) => (
  (n.ethereumMainnet = "ethereum-mainnet"),
  (n.arbitrumMainnet = "arb-mainnet"),
  (n.baseMainnet = "base-mainnet"),
  (n.optimismMainnet = "opt-mainnet"),
  (n.solanaMainnet = "solana-mainnet"),
  (n.polygonMainnet = "polygon-mainnet"),
  n
))(go || {});
const US = [
  { value: "ethereum-mainnet", label: "Ethereum" },
  { value: "arb-mainnet", label: "Arbitrum" },
  { value: "base-mainnet", label: "Base" },
  { value: "opt-mainnet", label: "Optimism" },
  { value: "polygon-mainnet", label: "Polygon PoS" },
  { value: "solana-mainnet", label: "Solana" },
];
var ei = ((n) => (
  (n.alchemy_getAssetTransfers = "alchemy_getAssetTransfers"),
  (n.alchemy_getTokenBalances = "alchemy_getTokenBalances"),
  (n.eth_blockNumber = "eth_blockNumber"),
  (n.eth_chainId = "eth_chainId"),
  (n.eth_estimateGas = "eth_estimateGas"),
  (n.eth_gasPrice = "eth_gasPrice"),
  (n.eth_getBalance = "eth_getBalance"),
  (n.eth_getBlockByNumber = "eth_getBlockByNumber"),
  (n.eth_getBlockReceipts = "eth_getBlockReceipts"),
  (n.eth_getLogs = "eth_getLogs"),
  (n.eth_getTransactionByHash = "eth_getTransactionByHash"),
  (n.eth_getTransactionCount = "eth_getTransactionCount"),
  (n.eth_getTransactionReceipt = "eth_getTransactionReceipt"),
  (n.getAccountInfo = "getAccountInfo"),
  (n.getBalance = "getBalance"),
  (n.getLatestBlockhash = "getLatestBlockhash"),
  (n.getSignaturesForAddress = "getSignaturesForAddress"),
  (n.getTokenAccountBalance = "getTokenAccountBalance"),
  (n.getTokenAccountsByOwner = "getTokenAccountsByOwner"),
  (n.getTransaction = "getTransaction"),
  n
))(ei || {});
const GS = [
    "getTokenAccountsByOwner",
    "getTokenAccountBalance",
    "getLatestBlockhash",
    "getSignaturesForAddress",
    "getTransaction",
    "getAccountInfo",
    "getBalance",
  ],
  Fh = [
    "eth_getBlockByNumber",
    "eth_getTransactionByHash",
    "eth_getTransactionCount",
    "eth_getTransactionReceipt",
    "eth_getBlockReceipts",
    "eth_getLogs",
    "eth_getBalance",
    "eth_estimateGas",
    "eth_gasPrice",
    "eth_chainId",
    "eth_blockNumber",
  ],
  qS = ["alchemy_getAssetTransfers", "alchemy_getTokenBalances"],
  jh = Object.assign({
    "./code-samples/alchemy_getAssetTransfers/bash/ethereum-mainnet/request":
      o6,
    "./code-samples/alchemy_getTokenBalances/bash/ethereum-mainnet/request": i6,
    "./code-samples/eth_blockNumber/bash/arb-mainnet/request": l6,
    "./code-samples/eth_blockNumber/bash/base-mainnet/request": u6,
    "./code-samples/eth_blockNumber/bash/ethereum-mainnet/request": f6,
    "./code-samples/eth_blockNumber/bash/opt-mainnet/request": h6,
    "./code-samples/eth_blockNumber/bash/polygon-mainnet/request": g6,
    "./code-samples/eth_chainId/bash/arb-mainnet/request": v6,
    "./code-samples/eth_chainId/bash/base-mainnet/request": _6,
    "./code-samples/eth_chainId/bash/ethereum-mainnet/request": S6,
    "./code-samples/eth_chainId/bash/opt-mainnet/request": w6,
    "./code-samples/eth_chainId/bash/polygon-mainnet/request": P6,
    "./code-samples/eth_estimateGas/bash/arb-mainnet/request": E6,
    "./code-samples/eth_estimateGas/bash/base-mainnet/request": F6,
    "./code-samples/eth_estimateGas/bash/ethereum-mainnet/request": M6,
    "./code-samples/eth_estimateGas/bash/opt-mainnet/request": R6,
    "./code-samples/eth_estimateGas/bash/polygon-mainnet/request": L6,
    "./code-samples/eth_gasPrice/bash/arb-mainnet/request": $6,
    "./code-samples/eth_gasPrice/bash/base-mainnet/request": D6,
    "./code-samples/eth_gasPrice/bash/ethereum-mainnet/request": z6,
    "./code-samples/eth_gasPrice/bash/opt-mainnet/request": U6,
    "./code-samples/eth_gasPrice/bash/polygon-mainnet/request": q6,
    "./code-samples/eth_getBalance/bash/arb-mainnet/request": K6,
    "./code-samples/eth_getBalance/bash/base-mainnet/request": Q6,
    "./code-samples/eth_getBalance/bash/ethereum-mainnet/request": Z6,
    "./code-samples/eth_getBalance/bash/opt-mainnet/request": e_,
    "./code-samples/eth_getBalance/bash/polygon-mainnet/request": n_,
    "./code-samples/eth_getBlockByNumber/bash/arb-mainnet/request": o_,
    "./code-samples/eth_getBlockByNumber/bash/base-mainnet/request": i_,
    "./code-samples/eth_getBlockByNumber/bash/ethereum-mainnet/request": l_,
    "./code-samples/eth_getBlockByNumber/bash/opt-mainnet/request": u_,
    "./code-samples/eth_getBlockByNumber/bash/polygon-mainnet/request": f_,
    "./code-samples/eth_getBlockReceipts/bash/arb-mainnet/request": h_,
    "./code-samples/eth_getBlockReceipts/bash/base-mainnet/request": g_,
    "./code-samples/eth_getBlockReceipts/bash/ethereum-mainnet/request": v_,
    "./code-samples/eth_getBlockReceipts/bash/opt-mainnet/request": __,
    "./code-samples/eth_getBlockReceipts/bash/polygon-mainnet/request": S_,
    "./code-samples/eth_getLogs/bash/arb-mainnet/request": w_,
    "./code-samples/eth_getLogs/bash/base-mainnet/request": P_,
    "./code-samples/eth_getLogs/bash/ethereum-mainnet/request": E_,
    "./code-samples/eth_getLogs/bash/opt-mainnet/request": F_,
    "./code-samples/eth_getLogs/bash/polygon-mainnet/request": M_,
    "./code-samples/eth_getTransactionByHash/bash/arb-mainnet/request": R_,
    "./code-samples/eth_getTransactionByHash/bash/base-mainnet/request": L_,
    "./code-samples/eth_getTransactionByHash/bash/ethereum-mainnet/request": $_,
    "./code-samples/eth_getTransactionByHash/bash/opt-mainnet/request": D_,
    "./code-samples/eth_getTransactionByHash/bash/polygon-mainnet/request": z_,
    "./code-samples/eth_getTransactionCount/bash/arb-mainnet/request": U_,
    "./code-samples/eth_getTransactionCount/bash/base-mainnet/request": q_,
    "./code-samples/eth_getTransactionCount/bash/ethereum-mainnet/request": K_,
    "./code-samples/eth_getTransactionCount/bash/opt-mainnet/request": Q_,
    "./code-samples/eth_getTransactionCount/bash/polygon-mainnet/request": Z_,
    "./code-samples/eth_getTransactionReceipt/bash/arb-mainnet/request": e7,
    "./code-samples/eth_getTransactionReceipt/bash/base-mainnet/request": n7,
    "./code-samples/eth_getTransactionReceipt/bash/ethereum-mainnet/request":
      o7,
    "./code-samples/eth_getTransactionReceipt/bash/opt-mainnet/request": i7,
    "./code-samples/eth_getTransactionReceipt/bash/polygon-mainnet/request": l7,
    "./code-samples/getAccountInfo/bash/solana-mainnet/request": u7,
    "./code-samples/getBalance/bash/solana-mainnet/request": f7,
    "./code-samples/getLatestBlockhash/bash/solana-mainnet/request": h7,
    "./code-samples/getSignaturesForAddress/bash/solana-mainnet/request": g7,
    "./code-samples/getTokenAccountBalance/bash/solana-mainnet/request": v7,
    "./code-samples/getTokenAccountsByOwner/bash/solana-mainnet/request": _7,
    "./code-samples/getTransaction/bash/solana-mainnet/request": S7,
  }),
  Mh = Object.assign({
    "./code-samples/alchemy_getAssetTransfers/bash/ethereum-mainnet/response":
      w7,
    "./code-samples/alchemy_getTokenBalances/bash/ethereum-mainnet/response":
      P7,
    "./code-samples/eth_blockNumber/bash/arb-mainnet/response": E7,
    "./code-samples/eth_blockNumber/bash/base-mainnet/response": F7,
    "./code-samples/eth_blockNumber/bash/ethereum-mainnet/response": M7,
    "./code-samples/eth_blockNumber/bash/opt-mainnet/response": R7,
    "./code-samples/eth_blockNumber/bash/polygon-mainnet/response": L7,
    "./code-samples/eth_chainId/bash/arb-mainnet/response": $7,
    "./code-samples/eth_chainId/bash/base-mainnet/response": D7,
    "./code-samples/eth_chainId/bash/ethereum-mainnet/response": z7,
    "./code-samples/eth_chainId/bash/opt-mainnet/response": U7,
    "./code-samples/eth_chainId/bash/polygon-mainnet/response": q7,
    "./code-samples/eth_estimateGas/bash/arb-mainnet/response": K7,
    "./code-samples/eth_estimateGas/bash/base-mainnet/response": Q7,
    "./code-samples/eth_estimateGas/bash/ethereum-mainnet/response": Z7,
    "./code-samples/eth_estimateGas/bash/opt-mainnet/response": ex,
    "./code-samples/eth_estimateGas/bash/polygon-mainnet/response": nx,
    "./code-samples/eth_gasPrice/bash/arb-mainnet/response": ox,
    "./code-samples/eth_gasPrice/bash/base-mainnet/response": ix,
    "./code-samples/eth_gasPrice/bash/ethereum-mainnet/response": lx,
    "./code-samples/eth_gasPrice/bash/opt-mainnet/response": ux,
    "./code-samples/eth_gasPrice/bash/polygon-mainnet/response": fx,
    "./code-samples/eth_getBalance/bash/arb-mainnet/response": hx,
    "./code-samples/eth_getBalance/bash/base-mainnet/response": gx,
    "./code-samples/eth_getBalance/bash/ethereum-mainnet/response": vx,
    "./code-samples/eth_getBalance/bash/opt-mainnet/response": _x,
    "./code-samples/eth_getBalance/bash/polygon-mainnet/response": Sx,
    "./code-samples/eth_getBlockByNumber/bash/arb-mainnet/response": wx,
    "./code-samples/eth_getBlockByNumber/bash/base-mainnet/response": Px,
    "./code-samples/eth_getBlockByNumber/bash/ethereum-mainnet/response": Ex,
    "./code-samples/eth_getBlockByNumber/bash/opt-mainnet/response": Fx,
    "./code-samples/eth_getBlockByNumber/bash/polygon-mainnet/response": Mx,
    "./code-samples/eth_getBlockReceipts/bash/arb-mainnet/response": Rx,
    "./code-samples/eth_getBlockReceipts/bash/base-mainnet/response": Lx,
    "./code-samples/eth_getBlockReceipts/bash/ethereum-mainnet/response": $x,
    "./code-samples/eth_getBlockReceipts/bash/opt-mainnet/response": Dx,
    "./code-samples/eth_getBlockReceipts/bash/polygon-mainnet/response": zx,
    "./code-samples/eth_getLogs/bash/arb-mainnet/response": Ux,
    "./code-samples/eth_getLogs/bash/base-mainnet/response": qx,
    "./code-samples/eth_getLogs/bash/ethereum-mainnet/response": Kx,
    "./code-samples/eth_getLogs/bash/opt-mainnet/response": Qx,
    "./code-samples/eth_getLogs/bash/polygon-mainnet/response": Zx,
    "./code-samples/eth_getTransactionByHash/bash/arb-mainnet/response": eS,
    "./code-samples/eth_getTransactionByHash/bash/base-mainnet/response": nS,
    "./code-samples/eth_getTransactionByHash/bash/ethereum-mainnet/response":
      oS,
    "./code-samples/eth_getTransactionByHash/bash/opt-mainnet/response": iS,
    "./code-samples/eth_getTransactionByHash/bash/polygon-mainnet/response": lS,
    "./code-samples/eth_getTransactionCount/bash/arb-mainnet/response": uS,
    "./code-samples/eth_getTransactionCount/bash/base-mainnet/response": fS,
    "./code-samples/eth_getTransactionCount/bash/ethereum-mainnet/response": hS,
    "./code-samples/eth_getTransactionCount/bash/opt-mainnet/response": gS,
    "./code-samples/eth_getTransactionCount/bash/polygon-mainnet/response": vS,
    "./code-samples/eth_getTransactionReceipt/bash/arb-mainnet/response": _S,
    "./code-samples/eth_getTransactionReceipt/bash/base-mainnet/response": SS,
    "./code-samples/eth_getTransactionReceipt/bash/ethereum-mainnet/response":
      wS,
    "./code-samples/eth_getTransactionReceipt/bash/opt-mainnet/response": PS,
    "./code-samples/eth_getTransactionReceipt/bash/polygon-mainnet/response":
      ES,
    "./code-samples/getAccountInfo/bash/solana-mainnet/response": FS,
    "./code-samples/getBalance/bash/solana-mainnet/response": MS,
    "./code-samples/getLatestBlockhash/bash/solana-mainnet/response": RS,
    "./code-samples/getSignaturesForAddress/bash/solana-mainnet/response": LS,
    "./code-samples/getTokenAccountBalance/bash/solana-mainnet/response": $S,
    "./code-samples/getTokenAccountsByOwner/bash/solana-mainnet/response": DS,
    "./code-samples/getTransaction/bash/solana-mainnet/response": zS,
  });
function WS() {
  const n = {};
  function t(o) {
    const a = o.replace("./code-samples/", "").split("/"),
      [i, c, d] = a;
    return { apiKey: i, langKey: c, chainKey: d };
  }
  for (const o in jh) {
    const { apiKey: a, langKey: i, chainKey: c } = t(o);
    n[a] || (n[a] = {}),
      n[a][i] || (n[a][i] = {}),
      n[a][i][c] || (n[a][i][c] = { request: "", response: "" }),
      (n[a][i][c].request = jh[o].default);
  }
  for (const o in Mh) {
    const { apiKey: a, langKey: i, chainKey: c } = t(o);
    n[a] || (n[a] = {}),
      n[a][i] || (n[a][i] = {}),
      n[a][i][c] || (n[a][i][c] = { request: "", response: "" }),
      (n[a][i][c].response = Mh[o].default);
  }
  return n;
}
const za = WS(),
  KS = Ke.div`
  background-color: ${({ theme: n }) => (n.mode === "dark" ? "#121212" : "#FAFAFA")};
  border-radius: 24px;
  border: ${({ theme: n }) => (n.mode === "dark" ? "1px solid #383838" : "1px solid #EAEAEA")};
`,
  XS = Ke.div`
  margin-top: 24px;
  overflow-x: auto;
  height: 300px;

  .shiki {
    background-color: ${({ theme: n }) => (n.mode === "dark" ? "#121212" : "#FAFAFA")} !important;
  }

  html.dark .shiki,
  html.dark .shiki span {
    color: var(--shiki-dark) !important;
    background-color: var(--shiki-dark-bg) !important;
  }

  code {
    counter-reset: step;
    counter-increment: step 0;
    box-shadow: none;
    background-color: transparent;
    white-space: unset;
    padding-inline: 0px;
  }

  code .line::before {
    content: counter(step);
    counter-increment: step;
    width: 1rem;
    margin-right: 1.5rem;
    display: inline-block;
    text-align: right;
    color: rgba(115, 138, 148, 0.4);
  }
`,
  QS = Ke.button`
  background-color: ${({ theme: n }) => (n.mode === "dark" ? "#1C1C1C" : "#383838")};
  color: ${({ theme: n }) => (n.mode === "dark", "#EDEDED")};
  padding: 6px 12px;
  border-radius: 100px;
  border: none;
  cursor: ${({ disabled: n }) => (n ? "not-allowed" : "pointer")};
  font-family: monospace;
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 8px;
`,
  YS = Ke.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  height: 300px;
  width: 100%;
`,
  ZS = Ke.div`
  width: 16px;
  height: 16px;
  border: 2px solid
    ${({ theme: n }) => (n.mode === "dark" ? "#EDEDED" : "#111111")};
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,
  JS = Ke.div`
  background-color: ${({ theme: n }) => (n.mode === "dark" ? "#131313" : "#fbfbfb")};
  border-radius: 0 0 24px 24px;
  padding: 24px 32px;
  color: ${({ theme: n }) => (n.mode === "dark" ? "#EDEDED" : "#111111")};
  display: flex;
  justify-content: space-between;
`,
  eC = (n) =>
    n === go.solanaMainnet
      ? GS.map((o) => ({ value: o, label: o }))
      : (n === go.ethereumMainnet ? [...qS, ...Fh] : Fh).map((o) => ({
          value: o,
          label: o,
        })),
  tC = () => {
    var X, he, Ce;
    const [n, t] = Ve.useState(
      document.documentElement.classList.contains("dark"),
    );
    Ve.useEffect(() => {
      const te = new MutationObserver((ce) => {
        ce.forEach((ye) => {
          ye.target === document.documentElement &&
            ye.attributeName === "class" &&
            t(document.documentElement.classList.contains("dark"));
        });
      });
      return (
        te.observe(document.documentElement, {
          attributes: !0,
          attributeFilter: ["class"],
        }),
        () => te.disconnect()
      );
    }, []);
    const o = { mode: n ? "dark" : "light" },
      [a, i] = Ve.useState(Ic.CLI),
      [c, d] = Ve.useState(go.ethereumMainnet),
      [h, f] = Ve.useState(ei.eth_getBlockByNumber),
      [m, b] = Ve.useState(a),
      [v, y] = Ve.useState(!1),
      x = () => {
        var te, ce, ye;
        i(Ic.JSON),
          T(),
          O(
            ((ye =
              (ce = (te = za[h]) == null ? void 0 : te[a]) == null
                ? void 0
                : ce[c]) == null
              ? void 0
              : ye.response) ?? "",
          ),
          y(!0);
      },
      [S, O] = Ve.useState(
        ((Ce =
          (he = (X = za[h]) == null ? void 0 : X[a]) == null
            ? void 0
            : he[c]) == null
          ? void 0
          : Ce.request) ?? "Something went wrong",
      ),
      [k, P] = Ve.useState(!1),
      T = () => {
        P(!0),
          setTimeout(
            () => {
              P(!1);
            },
            Math.floor(Math.random() * 300) + 100,
          );
      },
      I = (te, ce, ye = m) => {
        var Se, ge, me;
        i(ye),
          d(te),
          f(ce),
          O(
            ((me =
              (ge = (Se = za[ce]) == null ? void 0 : Se[ye]) == null
                ? void 0
                : ge[te]) == null
              ? void 0
              : me.request) ?? "Something went wrong",
          ),
          y(!1);
      },
      [B, F] = Ve.useState(""),
      [$, N] = Ve.useState(null);
    return (
      Ve.useEffect(() => {
        (async () => {
          const ce = await e4({
            langs: [
              Ia(() => Promise.resolve().then(() => oC), void 0),
              Ia(() => Promise.resolve().then(() => sC), void 0),
            ],
            themes: [
              Ia(() => Promise.resolve().then(() => cC), void 0),
              Ia(() => Promise.resolve().then(() => dC), void 0),
            ],
            engine: d4(),
          });
          N(ce);
        })();
      }, []),
      Ve.useEffect(() => {
        (async () => {
          if ($)
            try {
              const ce = await $.codeToHtml(S, {
                lang: a,
                themes: {
                  light: "github-light",
                  dark: "material-theme-darker",
                },
              });
              F(ce);
            } catch (ce) {
              console.error("Error generating code HTML:", ce),
                F(`<pre><code>${S}</code></pre>`);
            }
        })();
      }, [S, a, n, $]),
      W.jsxs(om, {
        theme: o,
        children: [
          W.jsx("h3", {
            className: "mb-6",
            children: "Query the blockchain instantly",
          }),
          W.jsxs(KS, {
            children: [
              W.jsxs("div", {
                style: { padding: "24px 24px 0px" },
                children: [
                  W.jsxs("div", {
                    style: { display: "flex", justifyContent: "space-between" },
                    children: [
                      W.jsxs("div", {
                        style: {
                          display: "flex",
                          gap: "8px",
                          alignItems: "center",
                          flexWrap: "wrap",
                          marginRight: "8px",
                        },
                        children: [
                          W.jsx("span", {
                            style: {
                              color: n ? "#EDEDED" : "#94A3B8",
                              minWidth: "9ch",
                              display: "inline-block",
                            },
                            children: v ? "Response" : "Request",
                          }),
                          W.jsx(ac, {
                            isDark: n,
                            options: VS.filter((te) => {
                              var ye, Se;
                              const ce =
                                (Se =
                                  (ye = za[h]) == null
                                    ? void 0
                                    : ye[te.value]) == null
                                  ? void 0
                                  : Se[c];
                              return ce && ce.request && ce.response;
                            }),
                            selectedOption: m,
                            onChange: (te) => {
                              b(te), I(c, h, te);
                            },
                          }),
                          W.jsx(ac, {
                            isDark: n,
                            options: US,
                            selectedOption: c,
                            onChange: (te) => {
                              te === go.solanaMainnet && te !== c
                                ? I(te, ei.getTokenAccountsByOwner)
                                : te !== c && I(te, ei.eth_getBlockByNumber);
                            },
                          }),
                          W.jsx(ac, {
                            isDark: n,
                            options: eC(c),
                            selectedOption: h,
                            onChange: (te) => {
                              I(c, te);
                            },
                          }),
                        ],
                      }),
                      W.jsxs(QS, {
                        onMouseOver: (te) => {
                          te.currentTarget.style.backgroundColor = "#4b5563";
                        },
                        onMouseOut: (te) => {
                          te.currentTarget.style.backgroundColor = n
                            ? "#1C1C1C"
                            : "#383838";
                        },
                        onClick: x,
                        disabled: v,
                        children: [
                          "RUN",
                          " ",
                          W.jsx("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 12 12",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: W.jsx("path", {
                              d: "M9.07199 5.43326C9.77475 5.83939 9.77732 6.35029 9.07199 6.80944L3.62211 10.6211C2.93734 11.0001 2.47226 10.7763 2.42344 9.95629L2.40032 1.97858C2.3849 1.22324 2.98487 1.00982 3.55659 1.37198L9.07199 5.43326Z",
                              stroke: "#EDEDED",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  k
                    ? W.jsx(YS, { children: W.jsx(ZS, {}) })
                    : W.jsx(XS, { dangerouslySetInnerHTML: { __html: B } }),
                ],
              }),
              W.jsxs(JS, {
                children: [
                  W.jsxs("div", {
                    style: { color: n ? "#EDEDED" : "#111111" },
                    children: [
                      W.jsx("p", {
                        style: {
                          fontWeight: 600,
                          fontSize: "20px",
                          marginBottom: "8px",
                        },
                        children: "Quickstart",
                      }),
                      W.jsx("span", {
                        style: { fontSize: "14px" },
                        children: "Guides for 500+ endpoints on 80+ networks",
                      }),
                    ],
                  }),
                  W.jsx("div", {
                    style: { display: "flex", alignSelf: "end" },
                    children: W.jsx("span", {
                      children: W.jsxs("a", {
                        href: "https://www.alchemy.com/docs/alchemy-quickstart-guide",
                        style: {
                          color: n ? "#EDEDED" : "#383838",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                        },
                        onMouseOver: (te) =>
                          (te.currentTarget.style.color =
                            "rgba(81, 103, 255, 1)"),
                        onMouseOut: (te) =>
                          (te.currentTarget.style.color = n
                            ? "#EDEDED"
                            : "#383838"),
                        children: [
                          "Get started ",
                          W.jsx("svg", {
                            style: { marginLeft: "4px" },
                            width: "8",
                            height: "9",
                            viewBox: "0 0 8 9",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: W.jsx("path", {
                              d: "M1.63872 1.22041L7.32005 1.22033M7.32005 1.22033L7.32005 6.82086M7.32005 1.22033L0.720385 7.81999",
                              stroke: "currentColor",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  Ih = "fern-footer",
  Rh = async () => {
    var t;
    if (!document.getElementById("alchemy-footer")) {
      const o = document.createElement("div");
      o.setAttribute("id", "alchemy-footer"),
        o.setAttribute("data-react-component", "true");
      let a = document.getElementById(Ih);
      a ||
        ((a = document.createElement("div")),
        a.setAttribute("id", Ih),
        document.body.appendChild(a));
      let i = document.getElementById("code-block-id");
      i ||
        ((i = document.createElement("div")),
        i.setAttribute("id", "code-block-id"),
        document.body.appendChild(i)),
        a.insertBefore(o, a.firstChild),
        fp
          .createRoot(o)
          .render(W.jsx(Ve.StrictMode, { children: W.jsx(dv, {}) })),
        fp
          .createRoot(i)
          .render(W.jsx(Ve.StrictMode, { children: W.jsx(tC, {}) })),
        a && (a.style.display = "block"),
        i && (i.style.display = "block"),
        (t = document.getElementById("builtwithfern")) == null || t.remove();
    }
  };
window.addEventListener("load", async () => {
  window.location.pathname.replace(/\/+$/, "") === "/docs" && (await Rh()),
    new MutationObserver(async (t) => {
      var i;
      const o = window.location.pathname.replace(/\/+$/, "");
      o === "/docs" &&
        t.some(
          (c) =>
            c.type === "childList" &&
            !document.getElementById("alchemy-footer"),
        ) &&
        (await Rh()),
        o !== "/docs" &&
          document.getElementById("alchemy-footer") &&
          ((i = document.getElementById("alchemy-footer")) == null ||
            i.remove());
    }).observe(document.body, { childList: !0, subtree: !0 });
});
const nC = Object.freeze({
    displayName: "Shell",
    name: "shellscript",
    patterns: [{ include: "#initial_context" }],
    repository: {
      alias_statement: {
        begin: new Fe(
          "(?:(?=([\\t ]*))\\1)(alias)(?:(?=([\\t ]*))\\3)((?:((?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])-[\\p{L}\\p{M}\\p{N}\\p{Pc}]+)\\b(?:(?=([\\t ]*))\\6))*)(?:(?=([\\t ]*))\\7)((?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])[\\-0-9A-Z_a-z]+(?![\\p{L}\\p{M}\\p{N}\\p{Pc}]))(?:(\\[)((?:(?:\\$?(?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])[\\-0-9A-Z_a-z]+(?![\\p{L}\\p{M}\\p{N}\\p{Pc}])|@)|\\*)|(-?\\p{Nd}+))(\\]))?(?:(?:(=)|(\\+=))|(-=))",
          "dgv",
          { hiddenCaptures: [1, 3, 6, 7] },
        ),
        beginCaptures: {
          1: { name: "storage.type.alias.shell" },
          2: {
            patterns: [
              {
                match: new RegExp(
                  "(?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])-[\\p{L}\\p{M}\\p{N}\\p{Pc}]+\\b",
                  "dgv",
                ),
                name: "string.unquoted.argument.shell constant.other.option.shell",
              },
            ],
          },
          3: {
            name: "string.unquoted.argument.shell constant.other.option.shell",
          },
          4: { name: "variable.other.assignment.shell" },
          5: { name: "punctuation.definition.array.access.shell" },
          6: { name: "variable.other.assignment.shell" },
          7: { name: "constant.numeric.shell constant.numeric.integer.shell" },
          8: { name: "punctuation.definition.array.access.shell" },
          9: { name: "keyword.operator.assignment.shell" },
          10: { name: "keyword.operator.assignment.compound.shell" },
          11: { name: "keyword.operator.assignment.compound.shell" },
        },
        end: new RegExp(
          "(?=[\\t ]|(?=\\n?$))|(?:(?:(?:(;)|(&&))|(\\|\\|))|(&))",
          "dgv",
        ),
        endCaptures: {
          1: { name: "punctuation.terminator.statement.semicolon.shell" },
          2: { name: "punctuation.separator.statement.and.shell" },
          3: { name: "punctuation.separator.statement.or.shell" },
          4: { name: "punctuation.separator.statement.background.shell" },
        },
        name: "meta.expression.assignment.alias.shell",
        patterns: [{ include: "#normal_context" }],
      },
      argument: {
        begin: new Fe(
          "(?:(?=([\\t ]+))\\1)(?![\\n\\#\\&\\(\\[\\|]|(?=\\n?$)|;)",
          "dgv",
          { hiddenCaptures: [1] },
        ),
        beginCaptures: {},
        end: new RegExp("(?=[\\t \\&\\;\\|]|(?=\\n?$)|[\\n\\)\\`])", "dgv"),
        endCaptures: {},
        name: "meta.argument.shell",
        patterns: [
          { include: "#argument_context" },
          { include: "#line_continuation" },
        ],
      },
      argument_context: {
        patterns: [
          {
            captures: {
              1: {
                name: "string.unquoted.argument.shell",
                patterns: [
                  {
                    match: new RegExp("\\*", "dgv"),
                    name: "variable.language.special.wildcard.shell",
                  },
                  { include: "#variable" },
                  { include: "#numeric_literal" },
                  {
                    captures: { 1: { name: "constant.language.$1.shell" } },
                    match: new RegExp(
                      "(?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])\\b(true|false)\\b(?![\\p{L}\\p{M}\\p{N}\\p{Pc}])",
                      "dgv",
                    ),
                  },
                ],
              },
            },
            match: new Fe(
              '(?:(?=([\\t ]*))\\1)([^\\t\\n "\\$\\&-\\)\\;\\<\\>\\\\\\`\\|]+(?!>))',
              "dgv",
              { hiddenCaptures: [1] },
            ),
          },
          { include: "#normal_context" },
        ],
      },
      arithmetic_double: {
        patterns: [
          {
            begin: new RegExp("\\(\\(", "dgv"),
            beginCaptures: {
              0: { name: "punctuation.section.arithmetic.double.shell" },
            },
            end: new RegExp("\\)\\p{space}*\\)", "dgv"),
            endCaptures: {
              0: { name: "punctuation.section.arithmetic.double.shell" },
            },
            name: "meta.arithmetic.shell",
            patterns: [{ include: "#math" }, { include: "#string" }],
          },
        ],
      },
      arithmetic_no_dollar: {
        patterns: [
          {
            begin: new RegExp("\\(", "dgv"),
            beginCaptures: {
              0: { name: "punctuation.section.arithmetic.single.shell" },
            },
            end: new RegExp("\\)", "dgv"),
            endCaptures: {
              0: { name: "punctuation.section.arithmetic.single.shell" },
            },
            name: "meta.arithmetic.shell",
            patterns: [{ include: "#math" }, { include: "#string" }],
          },
        ],
      },
      array_access_inline: {
        captures: {
          1: { name: "punctuation.section.array.shell" },
          2: {
            patterns: [
              { include: "#special_expansion" },
              { include: "#string" },
              { include: "#variable" },
            ],
          },
          3: { name: "punctuation.section.array.shell" },
        },
        match: new RegExp("(\\[)([^\\]\\[]+)(\\])", "dgv"),
      },
      array_value: {
        begin: new Fe(
          "(?:(?=([\\t ]*))\\1)((?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])[\\-0-9A-Z_a-z]+(?![\\p{L}\\p{M}\\p{N}\\p{Pc}]))(?:(\\[)((?:(?:\\$?(?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])[\\-0-9A-Z_a-z]+(?![\\p{L}\\p{M}\\p{N}\\p{Pc}])|@)|\\*)|(-?\\p{Nd}+))(\\]))?(?:(?:(=)|(\\+=))|(-=))(?:(?=([\\t ]*))\\10)(\\()",
          "dgv",
          { hiddenCaptures: [1, 10] },
        ),
        beginCaptures: {
          1: { name: "variable.other.assignment.shell" },
          2: { name: "punctuation.definition.array.access.shell" },
          3: { name: "variable.other.assignment.shell" },
          4: { name: "constant.numeric.shell constant.numeric.integer.shell" },
          5: { name: "punctuation.definition.array.access.shell" },
          6: { name: "keyword.operator.assignment.shell" },
          7: { name: "keyword.operator.assignment.compound.shell" },
          8: { name: "keyword.operator.assignment.compound.shell" },
          9: { name: "punctuation.definition.array.shell" },
        },
        end: new RegExp("\\)", "dgv"),
        endCaptures: { 0: { name: "punctuation.definition.array.shell" } },
        patterns: [
          { include: "#comment" },
          {
            captures: {
              1: {
                name: "variable.other.assignment.array.shell entity.other.attribute-name.shell",
              },
              2: {
                name: "keyword.operator.assignment.shell punctuation.definition.assignment.shell",
              },
            },
            match: new RegExp(
              "((?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])[\\-0-9A-Z_a-z]+(?![\\p{L}\\p{M}\\p{N}\\p{Pc}]))(=)",
              "dgv",
            ),
          },
          {
            captures: {
              1: { name: "punctuation.definition.bracket.named-array.shell" },
              2: {
                name: "string.unquoted.shell entity.other.attribute-name.bracket.shell",
              },
              3: { name: "punctuation.definition.bracket.named-array.shell" },
              4: { name: "punctuation.definition.assignment.shell" },
            },
            match: new RegExp("(\\[)([^\\n]+?)(\\])(=)", "dgv"),
          },
          { include: "#normal_context" },
          { include: "#simple_unquoted" },
        ],
      },
      assignment_statement: {
        patterns: [
          { include: "#array_value" },
          { include: "#modified_assignment_statement" },
          { include: "#normal_assignment_statement" },
        ],
      },
      basic_command_name: {
        captures: {
          1: { name: "storage.modifier.$1.shell" },
          2: {
            name: "entity.name.function.call.shell entity.name.command.shell",
            patterns: [
              {
                match: new RegExp(
                  "(?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])(?:continue|return|break)(?![\\p{L}\\p{M}\\p{N}\\p{Pc}])",
                  "dgv",
                ),
                name: "keyword.control.$0.shell",
              },
              {
                match: new RegExp(
                  "(?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])(?:unfunction|continue|autoload|unsetopt|bindkey|builtin|getopts|command|declare|unalias|history|unlimit|typeset|suspend|source|printf|unhash|disown|ulimit|return|which|alias|break|false|print|shift|times|umask|unset|read|type|exec|eval|wait|echo|dirs|jobs|kill|hash|stat|exit|test|trap|true|let|set|pwd|cd|fg|bg|fc|[\\.\\:])(?!\\/)(?![\\p{L}\\p{M}\\p{N}\\p{Pc}])(?!-)",
                  "dgv",
                ),
                name: "support.function.builtin.shell",
              },
              { include: "#variable" },
            ],
          },
        },
        match: new RegExp(
          `(?![\\n\\!\\#\\&\\(\\)\\<\\>\\[\\{\\|]|(?=\\n?$)|[\\t \\;])(?!nocorrect |nocorrect\\t|nocorrect(?=\\n?$)|readonly |readonly\\t|readonly(?=\\n?$)|function |function\\t|function(?=\\n?$)|foreach |foreach\\t|foreach(?=\\n?$)|coproc |coproc\\t|coproc(?=\\n?$)|logout |logout\\t|logout(?=\\n?$)|export |export\\t|export(?=\\n?$)|select |select\\t|select(?=\\n?$)|repeat |repeat\\t|repeat(?=\\n?$)|pushd |pushd\\t|pushd(?=\\n?$)|until |until\\t|until(?=\\n?$)|while |while\\t|while(?=\\n?$)|local |local\\t|local(?=\\n?$)|case |case\\t|case(?=\\n?$)|done |done\\t|done(?=\\n?$)|elif |elif\\t|elif(?=\\n?$)|else |else\\t|else(?=\\n?$)|esac |esac\\t|esac(?=\\n?$)|popd |popd\\t|popd(?=\\n?$)|then |then\\t|then(?=\\n?$)|time |time\\t|time(?=\\n?$)|for |for\\t|for(?=\\n?$)|end |end\\t|end(?=\\n?$)|fi |fi\\t|fi(?=\\n?$)|do |do\\t|do(?=\\n?$)|in |in\\t|in(?=\\n?$)|if |if\\t|if(?=\\n?$))(?:((?<=^|[\\t \\&\\;])(?:readonly|declare|typeset|export|local)(?=[\\t \\&\\;]|(?=\\n?$)))|((?!["']|\\\\\\n?(?=\\n?$))[^\\t\\n\\r \\!"'\\<\\>]+?))(?:(?=[\\t ])|(?=[\\n\\&\\)\\;\\\`\\{\\|\\}]|[\\t ]*#|\\])(?<!\\\\))`,
          "dgv",
        ),
        name: "meta.statement.command.name.basic.shell",
      },
      block_comment: {
        begin: new Fe("(?:(?=(\\p{space}*))\\1)(/\\*)", "dgv", {
          hiddenCaptures: [1],
        }),
        beginCaptures: {
          1: { name: "punctuation.definition.comment.begin.shell" },
        },
        end: new RegExp("\\*\\/", "dgv"),
        endCaptures: {
          0: { name: "punctuation.definition.comment.end.shell" },
        },
        name: "comment.block.shell",
      },
      boolean: {
        match: new RegExp("\\b(?:true|false)\\b", "dgv"),
        name: "constant.language.$0.shell",
      },
      case_statement: {
        begin: new Fe(
          "\\b(case)\\b(?:(?=([\\t ]*))\\2)([^\\n]+?)(?:(?=([\\t ]*))\\4)\\b(in)\\b",
          "dgv",
          { hiddenCaptures: [2, 4] },
        ),
        beginCaptures: {
          1: { name: "keyword.control.case.shell" },
          2: { patterns: [{ include: "#initial_context" }] },
          3: { name: "keyword.control.in.shell" },
        },
        end: new RegExp("\\besac\\b", "dgv"),
        endCaptures: { 0: { name: "keyword.control.esac.shell" } },
        name: "meta.case.shell",
        patterns: [
          { include: "#comment" },
          {
            captures: {
              1: { name: "keyword.operator.pattern.case.default.shell" },
            },
            match: new Fe("(?:(?=([\\t ]*))\\1)(\\* *\\))", "dgv", {
              hiddenCaptures: [1],
            }),
          },
          {
            begin: new Fe(
              "(?<!\\))(?!(?:(?=([\\t ]*))\\1)(?:esac\\b|(?=\\n?$)))",
              "dgv",
              { hiddenCaptures: [1] },
            ),
            beginCaptures: {},
            end: new RegExp("(?=\\besac\\b)|(\\))", "dgv"),
            endCaptures: { 1: { name: "keyword.operator.pattern.case.shell" } },
            name: "meta.case.entry.pattern.shell",
            patterns: [{ include: "#case_statement_context" }],
          },
          {
            begin: new RegExp("(?<=\\))", "dgv"),
            beginCaptures: {},
            end: new RegExp("(;;)|(?=\\besac\\b)", "dgv"),
            endCaptures: {
              1: { name: "punctuation.terminator.statement.case.shell" },
            },
            name: "meta.case.entry.body.shell",
            patterns: [
              { include: "#typical_statements" },
              { include: "#initial_context" },
            ],
          },
        ],
      },
      case_statement_context: {
        patterns: [
          {
            match: new RegExp("\\*", "dgv"),
            name: "variable.language.special.quantifier.star.shell keyword.operator.quantifier.star.shell punctuation.definition.arbitrary-repetition.shell punctuation.definition.regex.arbitrary-repetition.shell",
          },
          {
            match: new RegExp("\\+", "dgv"),
            name: "variable.language.special.quantifier.plus.shell keyword.operator.quantifier.plus.shell punctuation.definition.arbitrary-repetition.shell punctuation.definition.regex.arbitrary-repetition.shell",
          },
          {
            match: new RegExp("\\?", "dgv"),
            name: "variable.language.special.quantifier.question.shell keyword.operator.quantifier.question.shell punctuation.definition.arbitrary-repetition.shell punctuation.definition.regex.arbitrary-repetition.shell",
          },
          {
            match: new RegExp("@", "dgv"),
            name: "variable.language.special.at.shell keyword.operator.at.shell punctuation.definition.regex.at.shell",
          },
          {
            match: new RegExp("\\|", "dgv"),
            name: "keyword.operator.orvariable.language.special.or.shell keyword.operator.alternation.ruby.shell punctuation.definition.regex.alternation.shell punctuation.separator.regex.alternation.shell",
          },
          {
            match: new RegExp("\\\\[^\\n]", "dgv"),
            name: "constant.character.escape.shell",
          },
          {
            match: new RegExp("(?<=\\tin| in|[\\t ]|;;)\\(", "dgv"),
            name: "keyword.operator.pattern.case.shell",
          },
          {
            begin: new RegExp("(?<=\\P{space})(\\()", "dgv"),
            beginCaptures: {
              1: {
                name: "punctuation.definition.group.shell punctuation.definition.regex.group.shell",
              },
            },
            end: new RegExp("\\)", "dgv"),
            endCaptures: {
              0: {
                name: "punctuation.definition.group.shell punctuation.definition.regex.group.shell",
              },
            },
            name: "meta.parenthese.shell",
            patterns: [{ include: "#case_statement_context" }],
          },
          {
            begin: new RegExp("\\[", "dgv"),
            beginCaptures: {
              0: { name: "punctuation.definition.character-class.shell" },
            },
            end: new RegExp("\\]", "dgv"),
            endCaptures: {
              0: { name: "punctuation.definition.character-class.shell" },
            },
            name: "string.regexp.character-class.shell",
            patterns: [
              {
                match: new RegExp("\\\\[^\\n]", "dgv"),
                name: "constant.character.escape.shell",
              },
            ],
          },
          { include: "#string" },
          {
            match: new RegExp("[^\\t\\n \\)\\*\\?\\@\\[\\|]", "dgv"),
            name: "string.unquoted.pattern.shell string.regexp.unquoted.shell",
          },
        ],
      },
      command_name_range: {
        begin: new RegExp("(?:)", "dgv"),
        beginCaptures: {},
        end: new RegExp(
          "(?=[\\t \\&\\;\\|]|(?=\\n?$)|[\\n\\)\\`])|(?=<)",
          "dgv",
        ),
        endCaptures: {},
        name: "meta.statement.command.name.shell",
        patterns: [
          {
            match: new RegExp(
              "(?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])(?:continue|return|break)(?![\\p{L}\\p{M}\\p{N}\\p{Pc}])",
              "dgv",
            ),
            name: "entity.name.function.call.shell entity.name.command.shell keyword.control.$0.shell",
          },
          {
            match: new RegExp(
              "(?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])(?:unfunction|continue|autoload|unsetopt|bindkey|builtin|getopts|command|declare|unalias|history|unlimit|typeset|suspend|source|printf|unhash|disown|ulimit|return|which|alias|break|false|print|shift|times|umask|unset|read|type|exec|eval|wait|echo|dirs|jobs|kill|hash|stat|exit|test|trap|true|let|set|pwd|cd|fg|bg|fc|[\\.\\:])(?!\\/)(?![\\p{L}\\p{M}\\p{N}\\p{Pc}])(?!-)",
              "dgv",
            ),
            name: "entity.name.function.call.shell entity.name.command.shell support.function.builtin.shell",
          },
          { include: "#variable" },
          {
            captures: {
              1: {
                name: "entity.name.function.call.shell entity.name.command.shell",
              },
            },
            match: new Fe(
              `(?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])(?<=^|["'\\)\\}])([^\\t\\n\\r "\\&'\\)\\;-\\>\\\`\\{\\|]+)`,
              "dgv",
              { strategy: "clip_search" },
            ),
          },
          {
            begin: new Fe(
              `(?:^|(?<![\\t\\n \\#\\&\\;\\{\\|]))(\\$?)((")|('))`,
              "dgv",
              { strategy: "clip_search" },
            ),
            beginCaptures: {
              1: {
                name: "meta.statement.command.name.quoted.shell punctuation.definition.string.shell entity.name.function.call.shell entity.name.command.shell",
              },
              2: {},
              3: {
                name: "meta.statement.command.name.quoted.shell string.quoted.double.shell punctuation.definition.string.begin.shell entity.name.function.call.shell entity.name.command.shell",
              },
              4: {
                name: "meta.statement.command.name.quoted.shell string.quoted.single.shell punctuation.definition.string.begin.shell entity.name.function.call.shell entity.name.command.shell",
              },
            },
            end: new Fe("(?<!^)(?<=\\2)()()", "dgv", {
              strategy: "clip_search",
            }),
            endCaptures: {},
            patterns: [
              { include: "#continuation_of_single_quoted_command_name" },
              { include: "#continuation_of_double_quoted_command_name" },
            ],
          },
          { include: "#line_continuation" },
          { include: "#simple_unquoted" },
        ],
      },
      command_statement: {
        begin: new Fe(
          "(?:(?=([\\t ]*))\\1)(?![\\n\\!\\#\\&\\(\\)\\<\\>\\[\\{\\|]|(?=\\n?$)|[\\t \\;])(?!nocorrect |nocorrect\\t|nocorrect(?=\\n?$)|readonly |readonly\\t|readonly(?=\\n?$)|function |function\\t|function(?=\\n?$)|foreach |foreach\\t|foreach(?=\\n?$)|coproc |coproc\\t|coproc(?=\\n?$)|logout |logout\\t|logout(?=\\n?$)|export |export\\t|export(?=\\n?$)|select |select\\t|select(?=\\n?$)|repeat |repeat\\t|repeat(?=\\n?$)|pushd |pushd\\t|pushd(?=\\n?$)|until |until\\t|until(?=\\n?$)|while |while\\t|while(?=\\n?$)|local |local\\t|local(?=\\n?$)|case |case\\t|case(?=\\n?$)|done |done\\t|done(?=\\n?$)|elif |elif\\t|elif(?=\\n?$)|else |else\\t|else(?=\\n?$)|esac |esac\\t|esac(?=\\n?$)|popd |popd\\t|popd(?=\\n?$)|then |then\\t|then(?=\\n?$)|time |time\\t|time(?=\\n?$)|for |for\\t|for(?=\\n?$)|end |end\\t|end(?=\\n?$)|fi |fi\\t|fi(?=\\n?$)|do |do\\t|do(?=\\n?$)|in |in\\t|in(?=\\n?$)|if |if\\t|if(?=\\n?$))(?!\\\\\\n?(?=\\n?$))",
          "dgv",
          { hiddenCaptures: [1] },
        ),
        beginCaptures: {},
        end: new RegExp(
          "(?=[\\n\\&\\)\\;\\`\\{\\|\\}]|[\\t ]*#|\\])(?<!\\\\)",
          "dgv",
        ),
        endCaptures: {},
        name: "meta.statement.command.shell",
        patterns: [
          { include: "#command_name_range" },
          { include: "#line_continuation" },
          { include: "#option" },
          { include: "#argument" },
          { include: "#string" },
          { include: "#heredoc" },
        ],
      },
      comment: {
        captures: {
          1: { name: "comment.line.number-sign.shell meta.shebang.shell" },
          2: { name: "punctuation.definition.comment.shebang.shell" },
          3: { name: "comment.line.number-sign.shell" },
          4: { name: "punctuation.definition.comment.shell" },
        },
        match: new Fe(
          "(?:^|(?:(?=([\\t ]+))\\1))(?:((#!)[^\\n]*)|((#)[^\\n]*))",
          "dgv",
          { hiddenCaptures: [1] },
        ),
      },
      comments: {
        patterns: [{ include: "#block_comment" }, { include: "#line_comment" }],
      },
      "compound-command": {
        patterns: [
          {
            begin: new RegExp("\\[", "dgv"),
            beginCaptures: {
              0: { name: "punctuation.definition.logical-expression.shell" },
            },
            end: new RegExp("\\]", "dgv"),
            endCaptures: {
              0: { name: "punctuation.definition.logical-expression.shell" },
            },
            name: "meta.scope.logical-expression.shell",
            patterns: [
              { include: "#logical-expression" },
              { include: "#initial_context" },
            ],
          },
          {
            begin: new RegExp(
              "(?<=\\p{space}|^)\\{(?=\\p{space}|(?=\\n?$))",
              "dgv",
            ),
            beginCaptures: {
              0: { name: "punctuation.definition.group.shell" },
            },
            end: new RegExp("(?<=^|;)\\p{space}*(\\})", "dgv"),
            endCaptures: { 1: { name: "punctuation.definition.group.shell" } },
            name: "meta.scope.group.shell",
            patterns: [{ include: "#initial_context" }],
          },
        ],
      },
      continuation_of_double_quoted_command_name: {
        begin: new RegExp('(?<=")', "dgvy"),
        beginCaptures: {},
        contentName:
          "meta.statement.command.name.continuation string.quoted.double entity.name.function.call entity.name.command",
        end: new RegExp('"', "dgv"),
        endCaptures: {
          0: {
            name: "string.quoted.double.shell punctuation.definition.string.end.shell entity.name.function.call.shell entity.name.command.shell",
          },
        },
        patterns: [
          {
            match: new RegExp('\\\\[\\n"\\$\\\\\\`]', "dgv"),
            name: "constant.character.escape.shell",
          },
          { include: "#variable" },
          { include: "#interpolation" },
        ],
      },
      continuation_of_single_quoted_command_name: {
        begin: new RegExp("(?<=')", "dgvy"),
        beginCaptures: {},
        contentName:
          "meta.statement.command.name.continuation string.quoted.single entity.name.function.call entity.name.command",
        end: new RegExp("'", "dgv"),
        endCaptures: {
          0: {
            name: "string.quoted.single.shell punctuation.definition.string.end.shell entity.name.function.call.shell entity.name.command.shell",
          },
        },
      },
      custom_command_names: { patterns: [] },
      custom_commands: { patterns: [] },
      double_quote_context: {
        patterns: [
          {
            match: new RegExp('\\\\[\\n"\\$\\\\\\`]', "dgv"),
            name: "constant.character.escape.shell",
          },
          { include: "#variable" },
          { include: "#interpolation" },
        ],
      },
      double_quote_escape_char: {
        match: new RegExp('\\\\[\\n"\\$\\\\\\`]', "dgv"),
        name: "constant.character.escape.shell",
      },
      floating_keyword: {
        patterns: [
          {
            match: new RegExp(
              "(?<=^|[\\t \\&\\;])(?:then|elif|else|done|end|do|if|fi)(?=[\\t \\&\\;]|(?=\\n?$))",
              "dgv",
            ),
            name: "keyword.control.$0.shell",
          },
        ],
      },
      for_statement: {
        patterns: [
          {
            begin: new Fe(
              "\\b(for)\\b(?:(?=([\\t ]*))\\2)((?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])[\\-0-9A-Z_a-z]+(?![\\p{L}\\p{M}\\p{N}\\p{Pc}]))(?:(?=([\\t ]*))\\4)\\b(in)\\b",
              "dgv",
              { hiddenCaptures: [2, 4] },
            ),
            beginCaptures: {
              1: { name: "keyword.control.for.shell" },
              2: { name: "variable.other.for.shell" },
              3: { name: "keyword.control.in.shell" },
            },
            end: new RegExp(
              "(?=[\\n\\&\\)\\;\\`\\{\\|\\}]|[\\t ]*#|\\])(?<!\\\\)",
              "dgv",
            ),
            endCaptures: {},
            name: "meta.for.in.shell",
            patterns: [
              { include: "#string" },
              { include: "#simple_unquoted" },
              { include: "#normal_context" },
            ],
          },
          {
            begin: new RegExp("\\b(for)\\b", "dgv"),
            beginCaptures: { 1: { name: "keyword.control.for.shell" } },
            end: new RegExp(
              "(?=[\\n\\&\\)\\;\\`\\{\\|\\}]|[\\t ]*#|\\])(?<!\\\\)",
              "dgv",
            ),
            endCaptures: {},
            name: "meta.for.shell",
            patterns: [
              { include: "#arithmetic_double" },
              { include: "#normal_context" },
            ],
          },
        ],
      },
      function_definition: {
        applyEndPatternLast: 1,
        begin: new Fe(
          `(?:(?=([\\t ]*))\\1)(?:\\b(function)\\b(?:(?=([\\t ]*))\\3)([^\\t\\n\\r "'\\(\\)\\=]+)(?:(\\()(?:(?=([\\t ]*))\\6)(\\)))?|([^\\t\\n\\r "'\\(\\)\\=]+)(?:(?=([\\t ]*))\\9)(\\()(?:(?=([\\t ]*))\\11)(\\)))`,
          "dgv",
          { hiddenCaptures: [1, 3, 6, 9, 11] },
        ),
        beginCaptures: {
          1: { name: "storage.type.function.shell" },
          2: { name: "entity.name.function.shell" },
          3: { name: "punctuation.definition.arguments.shell" },
          4: { name: "punctuation.definition.arguments.shell" },
          5: { name: "entity.name.function.shell" },
          6: { name: "punctuation.definition.arguments.shell" },
          7: { name: "punctuation.definition.arguments.shell" },
        },
        end: new RegExp("(?<=[\\)\\}])", "dgv"),
        endCaptures: {},
        name: "meta.function.shell",
        patterns: [
          { match: new RegExp("[\\t\\n ]", "dgvy") },
          {
            begin: new RegExp("\\{", "dgv"),
            beginCaptures: {
              0: {
                name: "punctuation.definition.group.shell punctuation.section.function.definition.shell",
              },
            },
            end: new RegExp("\\}", "dgv"),
            endCaptures: {
              0: {
                name: "punctuation.definition.group.shell punctuation.section.function.definition.shell",
              },
            },
            name: "meta.function.body.shell",
            patterns: [{ include: "#initial_context" }],
          },
          {
            begin: new RegExp("\\(", "dgv"),
            beginCaptures: {
              0: {
                name: "punctuation.definition.group.shell punctuation.section.function.definition.shell",
              },
            },
            end: new RegExp("\\)", "dgv"),
            endCaptures: {
              0: {
                name: "punctuation.definition.group.shell punctuation.section.function.definition.shell",
              },
            },
            name: "meta.function.body.shell",
            patterns: [{ include: "#initial_context" }],
          },
          { include: "#initial_context" },
        ],
      },
      heredoc: {
        patterns: [
          {
            begin: new Fe(
              `((?<!<)<<-)(?:(?=([\\t ]*))\\2)(["'])(?:(?=([\\t ]*))\\4)([^"']+?)(?=["\\&'\\;\\<\\p{space}])(\\3)([^\\n]*)`,
              "dgv",
              { hiddenCaptures: [2, 4] },
            ),
            beginCaptures: {
              1: { name: "keyword.operator.heredoc.shell" },
              2: { name: "punctuation.definition.string.heredoc.quote.shell" },
              3: {
                name: "punctuation.definition.string.heredoc.delimiter.shell",
              },
              4: { name: "punctuation.definition.string.heredoc.quote.shell" },
              5: {
                patterns: [
                  { include: "#redirect_fix" },
                  { include: "#typical_statements" },
                ],
              },
            },
            contentName: "string.quoted.heredoc.indent.$3",
            end: new RegExp(
              "^\\t*\\3(?=[\\&\\;\\p{space}]|(?=\\n?$))()()()",
              "dgv",
            ),
            endCaptures: {
              0: { name: "punctuation.definition.string.heredoc.$0.shell" },
            },
            patterns: [],
          },
          {
            begin: new Fe(
              `((?<!<)<<(?!<))(?:(?=([\\t ]*))\\2)(["'])(?:(?=([\\t ]*))\\4)([^"']+?)(?=["\\&'\\;\\<\\p{space}])(\\3)([^\\n]*)`,
              "dgv",
              { hiddenCaptures: [2, 4] },
            ),
            beginCaptures: {
              1: { name: "keyword.operator.heredoc.shell" },
              2: { name: "punctuation.definition.string.heredoc.quote.shell" },
              3: {
                name: "punctuation.definition.string.heredoc.delimiter.shell",
              },
              4: { name: "punctuation.definition.string.heredoc.quote.shell" },
              5: {
                patterns: [
                  { include: "#redirect_fix" },
                  { include: "#typical_statements" },
                ],
              },
            },
            contentName: "string.quoted.heredoc.no-indent.$3",
            end: new RegExp(
              "^\\3(?=[\\&\\;\\p{space}]|(?=\\n?$))()()()",
              "dgv",
            ),
            endCaptures: {
              0: {
                name: "punctuation.definition.string.heredoc.delimiter.shell",
              },
            },
            patterns: [],
          },
          {
            begin: new Fe(
              `((?<!<)<<-)(?:(?=([\\t ]*))\\2)([^\\t "']+)(?=["\\&'\\;\\<\\p{space}])([^\\n]*)`,
              "dgv",
              { hiddenCaptures: [2] },
            ),
            beginCaptures: {
              1: { name: "keyword.operator.heredoc.shell" },
              2: {
                name: "punctuation.definition.string.heredoc.delimiter.shell",
              },
              3: {
                patterns: [
                  { include: "#redirect_fix" },
                  { include: "#typical_statements" },
                ],
              },
            },
            contentName: "string.unquoted.heredoc.indent.$2",
            end: new RegExp(
              "^\\t*\\2(?=[\\&\\;\\p{space}]|(?=\\n?$))()()",
              "dgv",
            ),
            endCaptures: {
              0: {
                name: "punctuation.definition.string.heredoc.delimiter.shell",
              },
            },
            patterns: [
              { include: "#double_quote_escape_char" },
              { include: "#variable" },
              { include: "#interpolation" },
            ],
          },
          {
            begin: new Fe(
              `((?<!<)<<(?!<))(?:(?=([\\t ]*))\\2)([^\\t "']+)(?=["\\&'\\;\\<\\p{space}])([^\\n]*)`,
              "dgv",
              { hiddenCaptures: [2] },
            ),
            beginCaptures: {
              1: { name: "keyword.operator.heredoc.shell" },
              2: {
                name: "punctuation.definition.string.heredoc.delimiter.shell",
              },
              3: {
                patterns: [
                  { include: "#redirect_fix" },
                  { include: "#typical_statements" },
                ],
              },
            },
            contentName: "string.unquoted.heredoc.no-indent.$2",
            end: new RegExp("^\\2(?=[\\&\\;\\p{space}]|(?=\\n?$))()()", "dgv"),
            endCaptures: {
              0: {
                name: "punctuation.definition.string.heredoc.delimiter.shell",
              },
            },
            patterns: [
              { include: "#double_quote_escape_char" },
              { include: "#variable" },
              { include: "#interpolation" },
            ],
          },
        ],
      },
      herestring: {
        patterns: [
          {
            begin: new RegExp("(<<<)\\p{space}*(('))", "dgv"),
            beginCaptures: {
              1: { name: "keyword.operator.herestring.shell" },
              2: { name: "string.quoted.single.shell" },
              3: { name: "punctuation.definition.string.begin.shell" },
            },
            contentName: "string.quoted.single.shell",
            end: new RegExp("(')", "dgv"),
            endCaptures: {
              0: { name: "string.quoted.single.shell" },
              1: { name: "punctuation.definition.string.end.shell" },
            },
            name: "meta.herestring.shell",
          },
          {
            begin: new RegExp('(<<<)\\p{space}*(("))', "dgv"),
            beginCaptures: {
              1: { name: "keyword.operator.herestring.shell" },
              2: { name: "string.quoted.double.shell" },
              3: { name: "punctuation.definition.string.begin.shell" },
            },
            contentName: "string.quoted.double.shell",
            end: new RegExp('(")', "dgv"),
            endCaptures: {
              0: { name: "string.quoted.double.shell" },
              1: { name: "punctuation.definition.string.end.shell" },
            },
            name: "meta.herestring.shell",
            patterns: [{ include: "#double_quote_context" }],
          },
          {
            captures: {
              1: { name: "keyword.operator.herestring.shell" },
              2: {
                name: "string.unquoted.herestring.shell",
                patterns: [{ include: "#initial_context" }],
              },
            },
            match: new RegExp(
              "(<<<)\\p{space}*(([^\\)\\\\\\p{space}]|\\\\[^\\n])+)",
              "dgv",
            ),
            name: "meta.herestring.shell",
          },
        ],
      },
      initial_context: {
        patterns: [
          { include: "#comment" },
          { include: "#pipeline" },
          { include: "#normal_statement_seperator" },
          { include: "#logical_expression_double" },
          { include: "#logical_expression_single" },
          { include: "#assignment_statement" },
          { include: "#case_statement" },
          { include: "#for_statement" },
          { include: "#loop" },
          { include: "#function_definition" },
          { include: "#line_continuation" },
          { include: "#arithmetic_double" },
          { include: "#misc_ranges" },
          { include: "#variable" },
          { include: "#interpolation" },
          { include: "#heredoc" },
          { include: "#herestring" },
          { include: "#redirection" },
          { include: "#pathname" },
          { include: "#floating_keyword" },
          { include: "#alias_statement" },
          { include: "#normal_statement" },
          { include: "#string" },
          { include: "#support" },
        ],
      },
      inline_comment: {
        captures: {
          1: {
            name: "comment.block.shell punctuation.definition.comment.begin.shell",
          },
          2: { name: "comment.block.shell" },
          3: {
            patterns: [
              {
                match: new RegExp("\\*\\/", "dgv"),
                name: "comment.block.shell punctuation.definition.comment.end.shell",
              },
              { match: new RegExp("\\*", "dgv"), name: "comment.block.shell" },
            ],
          },
        },
        match: new Fe(
          "(/\\*)((?:(?=((?:[^\\*]|(?:(?=(\\*+))\\4)[^\\/])*))\\3)((?:(?=(\\*+))\\6)/))",
          "dgv",
          { hiddenCaptures: [3, 4, 6] },
        ),
      },
      interpolation: {
        patterns: [
          { include: "#arithmetic_dollar" },
          { include: "#subshell_dollar" },
          {
            begin: new RegExp("`", "dgv"),
            beginCaptures: {
              0: { name: "punctuation.definition.evaluation.backticks.shell" },
            },
            end: new RegExp("`", "dgv"),
            endCaptures: {
              0: { name: "punctuation.definition.evaluation.backticks.shell" },
            },
            name: "string.interpolated.backtick.shell",
            patterns: [
              {
                match: new RegExp("\\\\[\\$\\\\\\`]", "dgv"),
                name: "constant.character.escape.shell",
              },
              {
                begin: new RegExp(
                  "(?<=[^\\p{L}\\p{M}\\p{N}\\p{Pc}])(?=#)(?!#\\{)",
                  "dgv",
                ),
                beginCaptures: {
                  1: { name: "punctuation.whitespace.comment.leading.shell" },
                },
                end: new Fe("(?!^)", "dgv", { strategy: "clip_search" }),
                patterns: [
                  {
                    begin: new RegExp("#", "dgv"),
                    beginCaptures: {
                      0: { name: "punctuation.definition.comment.shell" },
                    },
                    end: new RegExp("(?=`)", "dgv"),
                    name: "comment.line.number-sign.shell",
                  },
                ],
              },
              { include: "#initial_context" },
            ],
          },
        ],
      },
      keyword: {
        patterns: [
          {
            match: new RegExp(
              "(?<=^|[\\&\\;\\p{space}])(then|else|elif|fi|for|in|do|done|select|continue|esac|while|until|return)(?=[\\&\\;\\p{space}]|(?=\\n?$))",
              "dgv",
            ),
            name: "keyword.control.shell",
          },
          {
            match: new RegExp(
              "(?<=^|[\\&\\;\\p{space}])(?:export|declare|typeset|local|readonly)(?=[\\&\\;\\p{space}]|(?=\\n?$))",
              "dgv",
            ),
            name: "storage.modifier.shell",
          },
        ],
      },
      line_comment: {
        begin: new Fe("(?:(?=(\\p{space}*))\\1)(//)", "dgv", {
          hiddenCaptures: [1],
        }),
        beginCaptures: { 1: { name: "punctuation.definition.comment.shell" } },
        end: new RegExp("(?<=\\n)(?<!\\\\\\n)", "dgv"),
        endCaptures: {},
        name: "comment.line.double-slash.shell",
        patterns: [{ include: "#line_continuation_character" }],
      },
      line_continuation: {
        match: new RegExp("\\\\(?=\\n)", "dgv"),
        name: "constant.character.escape.line-continuation.shell",
      },
      "logical-expression": {
        patterns: [
          { include: "#arithmetic_no_dollar" },
          {
            match: new RegExp("=[\\=\\~]?|!=?|[\\<\\>]|&&|\\|\\|", "dgv"),
            name: "keyword.operator.logical.shell",
          },
          {
            match: new RegExp(
              "(?<!\\P{space})-(nt|ot|ef|eq|ne|l[et]|g[et]|[GLNOSa-hknopr-uwxz])\\b",
              "dgv",
            ),
            name: "keyword.operator.logical.shell",
          },
        ],
      },
      logical_expression_context: {
        patterns: [
          { include: "#regex_comparison" },
          { include: "#arithmetic_no_dollar" },
          { include: "#logical-expression" },
          { include: "#logical_expression_single" },
          { include: "#logical_expression_double" },
          { include: "#comment" },
          { include: "#boolean" },
          { include: "#redirect_number" },
          { include: "#numeric_literal" },
          { include: "#pipeline" },
          { include: "#normal_statement_seperator" },
          { include: "#string" },
          { include: "#variable" },
          { include: "#interpolation" },
          { include: "#heredoc" },
          { include: "#herestring" },
          { include: "#pathname" },
          { include: "#floating_keyword" },
          { include: "#support" },
        ],
      },
      logical_expression_double: {
        begin: new RegExp("\\[\\[", "dgv"),
        beginCaptures: {
          0: { name: "punctuation.definition.logical-expression.shell" },
        },
        end: new RegExp("\\]\\]", "dgv"),
        endCaptures: {
          0: { name: "punctuation.definition.logical-expression.shell" },
        },
        name: "meta.scope.logical-expression.shell",
        patterns: [{ include: "#logical_expression_context" }],
      },
      logical_expression_single: {
        begin: new RegExp("\\[", "dgv"),
        beginCaptures: {
          0: { name: "punctuation.definition.logical-expression.shell" },
        },
        end: new RegExp("\\]", "dgv"),
        endCaptures: {
          0: { name: "punctuation.definition.logical-expression.shell" },
        },
        name: "meta.scope.logical-expression.shell",
        patterns: [{ include: "#logical_expression_context" }],
      },
      loop: {
        patterns: [
          {
            begin: new RegExp(
              "(?<=^|[\\&\\;\\p{space}])(for)\\p{space}+([^\\n]+?)\\p{space}+(in)(?=[\\&\\;\\p{space}]|(?=\\n?$))",
              "dgv",
            ),
            beginCaptures: {
              1: { name: "keyword.control.shell" },
              2: {
                name: "variable.other.loop.shell",
                patterns: [{ include: "#string" }],
              },
              3: { name: "keyword.control.shell" },
            },
            end: new RegExp(
              "(?<=^|[\\&\\;\\p{space}])done(?=[\\&\\;\\p{space}]|(?=\\n?$)|\\))",
              "dgv",
            ),
            endCaptures: { 0: { name: "keyword.control.shell" } },
            name: "meta.scope.for-in-loop.shell",
            patterns: [{ include: "#initial_context" }],
          },
          {
            begin: new RegExp(
              "(?<=^|[\\&\\;\\p{space}])(while|until)(?=[\\&\\;\\p{space}]|(?=\\n?$))",
              "dgv",
            ),
            beginCaptures: { 1: { name: "keyword.control.shell" } },
            end: new RegExp(
              "(?<=^|[\\&\\;\\p{space}])done(?=[\\&\\;\\p{space}]|(?=\\n?$)|\\))",
              "dgv",
            ),
            endCaptures: { 0: { name: "keyword.control.shell" } },
            name: "meta.scope.while-loop.shell",
            patterns: [{ include: "#initial_context" }],
          },
          {
            begin: new RegExp(
              "(?<=^|[\\&\\;\\p{space}])(select)\\p{space}+((?:[^\\\\\\p{space}]|\\\\[^\\n])+)(?=[\\&\\;\\p{space}]|(?=\\n?$))",
              "dgv",
            ),
            beginCaptures: {
              1: { name: "keyword.control.shell" },
              2: { name: "variable.other.loop.shell" },
            },
            end: new RegExp(
              "(?<=^|[\\&\\;\\p{space}])(done)(?=[\\&\\;\\p{space}]|(?=\\n?$)|\\))",
              "dgv",
            ),
            endCaptures: { 1: { name: "keyword.control.shell" } },
            name: "meta.scope.select-block.shell",
            patterns: [{ include: "#initial_context" }],
          },
          {
            begin: new RegExp(
              "(?<=^|[\\&\\;\\p{space}])if(?=[\\&\\;\\p{space}]|(?=\\n?$))",
              "dgv",
            ),
            beginCaptures: { 0: { name: "keyword.control.if.shell" } },
            end: new RegExp(
              "(?<=^|[\\&\\;\\p{space}])fi(?=[\\&\\;\\p{space}]|(?=\\n?$))",
              "dgv",
            ),
            endCaptures: { 0: { name: "keyword.control.fi.shell" } },
            name: "meta.scope.if-block.shell",
            patterns: [{ include: "#initial_context" }],
          },
        ],
      },
      math: {
        patterns: [
          { include: "#variable" },
          {
            match: new RegExp(
              "\\+{1,2}|-{1,2}|[\\!\\~]|\\*{1,2}|[\\%\\/]|<[\\<\\=]?|>[\\=\\>]?|==|!=|^|\\|{1,2}|&{1,2}|[\\,\\:\\=\\?]|[\\-\\%\\&\\*\\+\\/\\^\\|]=|<<=|>>=",
              "dgv",
            ),
            name: "keyword.operator.arithmetic.shell",
          },
          {
            match: new RegExp("0[Xx]\\p{AHex}+", "dgv"),
            name: "constant.numeric.hex.shell",
          },
          {
            match: new RegExp(";", "dgv"),
            name: "punctuation.separator.semicolon.range",
          },
          {
            match: new RegExp("0\\p{Nd}+", "dgv"),
            name: "constant.numeric.octal.shell",
          },
          {
            match: new RegExp("\\p{Nd}{1,2}#[0-9\\@-Z_a-z]+", "dgv"),
            name: "constant.numeric.other.shell",
          },
          {
            match: new RegExp("\\p{Nd}+", "dgv"),
            name: "constant.numeric.integer.shell",
          },
          {
            match: new RegExp(
              "(?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])[0-9A-Z_a-z]+(?![\\p{L}\\p{M}\\p{N}\\p{Pc}])",
              "dgv",
            ),
            name: "variable.other.normal.shell",
          },
        ],
      },
      math_operators: {
        patterns: [
          {
            match: new RegExp(
              "\\+{1,2}|-{1,2}|[\\!\\~]|\\*{1,2}|[\\%\\/]|<[\\<\\=]?|>[\\=\\>]?|==|!=|^|\\|{1,2}|&{1,2}|[\\,\\:\\=\\?]|[\\-\\%\\&\\*\\+\\/\\^\\|]=|<<=|>>=",
              "dgv",
            ),
            name: "keyword.operator.arithmetic.shell",
          },
          {
            match: new RegExp("0[Xx]\\p{AHex}+", "dgv"),
            name: "constant.numeric.hex.shell",
          },
          {
            match: new RegExp("0\\p{Nd}+", "dgv"),
            name: "constant.numeric.octal.shell",
          },
          {
            match: new RegExp("\\p{Nd}{1,2}#[0-9\\@-Z_a-z]+", "dgv"),
            name: "constant.numeric.other.shell",
          },
          {
            match: new RegExp("\\p{Nd}+", "dgv"),
            name: "constant.numeric.integer.shell",
          },
        ],
      },
      misc_ranges: {
        patterns: [
          { include: "#logical_expression_single" },
          { include: "#logical_expression_double" },
          { include: "#subshell_dollar" },
          {
            begin: new RegExp(
              "(?<![^\\t ])(\\{)(?![\\$\\p{L}\\p{M}\\p{N}\\p{Pc}])",
              "dgv",
            ),
            beginCaptures: {
              1: { name: "punctuation.definition.group.shell" },
            },
            end: new RegExp("\\}", "dgv"),
            endCaptures: { 0: { name: "punctuation.definition.group.shell" } },
            name: "meta.scope.group.shell",
            patterns: [{ include: "#initial_context" }],
          },
        ],
      },
      modified_assignment_statement: {
        begin: new RegExp(
          "(?<=^|[\\t \\&\\;])(?:readonly|declare|typeset|export|local)(?=[\\t \\&\\;]|(?=\\n?$))",
          "dgv",
        ),
        beginCaptures: { 0: { name: "storage.modifier.$0.shell" } },
        end: new RegExp(
          "(?=[\\n\\&\\)\\;\\`\\{\\|\\}]|[\\t ]*#|\\])(?<!\\\\)",
          "dgv",
        ),
        endCaptures: {},
        name: "meta.statement.shell meta.expression.assignment.modified.shell",
        patterns: [
          {
            match: new RegExp(
              "(?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])-[\\p{L}\\p{M}\\p{N}\\p{Pc}]+\\b",
              "dgv",
            ),
            name: "string.unquoted.argument.shell constant.other.option.shell",
          },
          { include: "#array_value" },
          {
            captures: {
              1: { name: "variable.other.assignment.shell" },
              2: { name: "punctuation.definition.array.access.shell" },
              3: { name: "variable.other.assignment.shell" },
              4: {
                name: "constant.numeric.shell constant.numeric.integer.shell",
              },
              5: { name: "punctuation.definition.array.access.shell" },
              6: { name: "keyword.operator.assignment.shell" },
              7: { name: "keyword.operator.assignment.compound.shell" },
              8: { name: "keyword.operator.assignment.compound.shell" },
              9: { name: "constant.numeric.shell constant.numeric.hex.shell" },
              10: {
                name: "constant.numeric.shell constant.numeric.octal.shell",
              },
              11: {
                name: "constant.numeric.shell constant.numeric.other.shell",
              },
              12: {
                name: "constant.numeric.shell constant.numeric.decimal.shell",
              },
              13: {
                name: "constant.numeric.shell constant.numeric.version.shell",
              },
              14: {
                name: "constant.numeric.shell constant.numeric.integer.shell",
              },
            },
            match: new RegExp(
              "((?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])[\\-0-9A-Z_a-z]+(?![\\p{L}\\p{M}\\p{N}\\p{Pc}]))(?:(\\[)((?:(?:\\$?(?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])[\\-0-9A-Z_a-z]+(?![\\p{L}\\p{M}\\p{N}\\p{Pc}])|@)|\\*)|(-?\\p{Nd}+))(\\]))?(?:(?:(=)|(\\+=))|(-=))?(?:(?<=[\\t \\=]|^|[\\(\\[\\{])(?:(?:(?:(?:(?:(0[Xx]\\p{AHex}+)|(0\\p{Nd}+))|(\\p{Nd}{1,2}#[0-9\\@-Z_a-z]+))|(-?\\p{Nd}+\\.\\p{Nd}+))|(-?\\p{Nd}+(?:\\.\\p{Nd}+)+))|(-?\\p{Nd}+))(?=[\\t ]|(?=\\n?$)|[\\)\\;\\}]))?",
              "dgv",
            ),
          },
          { include: "#normal_context" },
        ],
      },
      modifiers: {
        match: new RegExp(
          "(?<=^|[\\t \\&\\;])(?:readonly|declare|typeset|export|local)(?=[\\t \\&\\;]|(?=\\n?$))",
          "dgv",
        ),
        name: "storage.modifier.$0.shell",
      },
      normal_assignment_statement: {
        begin: new Fe(
          "(?:(?=([\\t ]*))\\1)((?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])[\\-0-9A-Z_a-z]+(?![\\p{L}\\p{M}\\p{N}\\p{Pc}]))(?:(\\[)((?:(?:\\$?(?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])[\\-0-9A-Z_a-z]+(?![\\p{L}\\p{M}\\p{N}\\p{Pc}])|@)|\\*)|(-?\\p{Nd}+))(\\]))?(?:(?:(=)|(\\+=))|(-=))",
          "dgv",
          { hiddenCaptures: [1] },
        ),
        beginCaptures: {
          1: { name: "variable.other.assignment.shell" },
          2: { name: "punctuation.definition.array.access.shell" },
          3: { name: "variable.other.assignment.shell" },
          4: { name: "constant.numeric.shell constant.numeric.integer.shell" },
          5: { name: "punctuation.definition.array.access.shell" },
          6: { name: "keyword.operator.assignment.shell" },
          7: { name: "keyword.operator.assignment.compound.shell" },
          8: { name: "keyword.operator.assignment.compound.shell" },
        },
        end: new RegExp(
          "(?=[\\n\\&\\)\\;\\`\\{\\|\\}]|[\\t ]*#|\\])(?<!\\\\)",
          "dgv",
        ),
        endCaptures: {},
        name: "meta.expression.assignment.shell",
        patterns: [
          { include: "#comment" },
          { include: "#string" },
          { include: "#normal_assignment_statement" },
          {
            begin: new RegExp(
              "(?<=[\\t ])(?![\\t ]|[\\p{L}\\p{M}\\p{N}\\p{Pc}]+=)",
              "dgv",
            ),
            beginCaptures: {},
            end: new RegExp(
              "(?=[\\n\\&\\)\\;\\`\\{\\|\\}]|[\\t ]*#|\\])(?<!\\\\)",
              "dgv",
            ),
            endCaptures: {},
            name: "meta.statement.command.env.shell",
            patterns: [
              { include: "#command_name_range" },
              { include: "#line_continuation" },
              { include: "#option" },
              { include: "#argument" },
              { include: "#string" },
            ],
          },
          { include: "#simple_unquoted" },
          { include: "#normal_context" },
        ],
      },
      normal_context: {
        patterns: [
          { include: "#comment" },
          { include: "#pipeline" },
          { include: "#normal_statement_seperator" },
          { include: "#misc_ranges" },
          { include: "#boolean" },
          { include: "#redirect_number" },
          { include: "#numeric_literal" },
          { include: "#string" },
          { include: "#variable" },
          { include: "#interpolation" },
          { include: "#heredoc" },
          { include: "#herestring" },
          { include: "#redirection" },
          { include: "#pathname" },
          { include: "#floating_keyword" },
          { include: "#support" },
          { include: "#parenthese" },
        ],
      },
      normal_statement: {
        begin: new Fe(
          "(?!^(?:(?=([\\t ]*))\\1)(?=\\n?$))(?:(?<=(?:^until| until|\\tuntil|^while| while|\\twhile|^elif| elif|\\telif|^else| else|\\telse|^then| then|\\tthen|^do| do|\\tdo|^if| if|\\tif) )|(?<=^|[\\!\\&\\(\\;\\`\\{\\|]))(?:(?=([\\t ]*))\\2)(?!nocorrect[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|nocorrect\\$|function[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|function\\$|foreach[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|foreach\\$|repeat[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|repeat\\$|logout[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|logout\\$|coproc[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|coproc\\$|select[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|select\\$|while[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|while\\$|pushd[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|pushd\\$|until[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|until\\$|case[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|case\\$|done[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|done\\$|elif[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|elif\\$|else[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|else\\$|esac[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|esac\\$|popd[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|popd\\$|then[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|then\\$|time[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|time\\$|for[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|for\\$|end[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|end\\$|fi[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|fi\\$|do[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|do\\$|in[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|in\\$|if[^\\p{L}\\p{M}\\p{N}\\p{Pc}]|if\\$)",
          "dgv",
          { hiddenCaptures: [1, 2] },
        ),
        beginCaptures: {},
        end: new RegExp(
          "(?=[\\n\\&\\)\\;\\`\\{\\|\\}]|[\\t ]*#|\\])(?<!\\\\)",
          "dgv",
        ),
        endCaptures: {},
        name: "meta.statement.shell",
        patterns: [{ include: "#typical_statements" }],
      },
      normal_statement_seperator: {
        captures: {
          1: { name: "punctuation.terminator.statement.semicolon.shell" },
          2: { name: "punctuation.separator.statement.and.shell" },
          3: { name: "punctuation.separator.statement.or.shell" },
          4: { name: "punctuation.separator.statement.background.shell" },
        },
        match: new RegExp("(?:(?:(;)|(&&))|(\\|\\|))|(&)", "dgv"),
      },
      numeric_literal: {
        captures: {
          1: { name: "constant.numeric.shell constant.numeric.hex.shell" },
          2: { name: "constant.numeric.shell constant.numeric.octal.shell" },
          3: { name: "constant.numeric.shell constant.numeric.other.shell" },
          4: { name: "constant.numeric.shell constant.numeric.decimal.shell" },
          5: { name: "constant.numeric.shell constant.numeric.version.shell" },
          6: { name: "constant.numeric.shell constant.numeric.integer.shell" },
        },
        match: new RegExp(
          "(?<=[\\t \\=]|^|[\\(\\[\\{])(?:(?:(?:(?:(?:(0[Xx]\\p{AHex}+)|(0\\p{Nd}+))|(\\p{Nd}{1,2}#[0-9\\@-Z_a-z]+))|(-?\\p{Nd}+\\.\\p{Nd}+))|(-?\\p{Nd}+(?:\\.\\p{Nd}+)+))|(-?\\p{Nd}+))(?=[\\t ]|(?=\\n?$)|[\\)\\;\\}])",
          "dgv",
        ),
      },
      option: {
        begin: new Fe(
          "(?:(?=([\\t ]+))\\1)(-)((?![\\n\\!\\#\\&\\(\\)\\<\\>\\[\\{\\|]|(?=\\n?$)|[\\t \\;]))",
          "dgv",
          { hiddenCaptures: [1] },
        ),
        beginCaptures: {
          1: {
            name: "string.unquoted.argument.shell constant.other.option.dash.shell",
          },
          2: {
            name: "string.unquoted.argument.shell constant.other.option.shell",
          },
        },
        contentName: "string.unquoted.argument constant.other.option",
        end: new RegExp(
          "(?=[\\t ])|(?=[\\n\\&\\)\\;\\`\\{\\|\\}]|[\\t ]*#|\\])(?<!\\\\)",
          "dgv",
        ),
        endCaptures: {},
        patterns: [{ include: "#option_context" }],
      },
      option_context: {
        patterns: [
          { include: "#misc_ranges" },
          { include: "#string" },
          { include: "#variable" },
          { include: "#interpolation" },
          { include: "#heredoc" },
          { include: "#herestring" },
          { include: "#redirection" },
          { include: "#pathname" },
          { include: "#floating_keyword" },
          { include: "#support" },
        ],
      },
      parenthese: {
        patterns: [
          {
            begin: new RegExp("\\(", "dgv"),
            beginCaptures: {
              0: { name: "punctuation.section.parenthese.shell" },
            },
            end: new RegExp("\\)", "dgv"),
            endCaptures: {
              0: { name: "punctuation.section.parenthese.shell" },
            },
            name: "meta.parenthese.group.shell",
            patterns: [{ include: "#initial_context" }],
          },
        ],
      },
      pathname: {
        patterns: [
          {
            match: new RegExp("(?<=[\\:\\=\\p{space}]|^)~", "dgv"),
            name: "keyword.operator.tilde.shell",
          },
          {
            match: new RegExp("[\\*\\?]", "dgv"),
            name: "keyword.operator.glob.shell",
          },
          {
            begin: new RegExp("([\\!\\*\\+\\?\\@])(\\()", "dgv"),
            beginCaptures: {
              1: { name: "keyword.operator.extglob.shell" },
              2: { name: "punctuation.definition.extglob.shell" },
            },
            end: new RegExp("\\)", "dgv"),
            endCaptures: {
              0: { name: "punctuation.definition.extglob.shell" },
            },
            name: "meta.structure.extglob.shell",
            patterns: [{ include: "#initial_context" }],
          },
        ],
      },
      pipeline: {
        patterns: [
          {
            match: new RegExp(
              "(?<=^|[\\&\\;\\p{space}])(time)(?=[\\&\\;\\p{space}]|(?=\\n?$))",
              "dgv",
            ),
            name: "keyword.other.shell",
          },
          {
            match: new RegExp("[\\!\\|]", "dgv"),
            name: "keyword.operator.pipe.shell",
          },
        ],
      },
      redirect_fix: {
        captures: {
          1: { name: "keyword.operator.redirect.shell" },
          2: { name: "string.unquoted.argument.shell" },
        },
        match: new Fe(
          '(>>?)(?:(?=([\\t ]*))\\2)([^\\t\\n "\\$\\&-\\)\\;\\<\\>\\\\\\`\\|]+)',
          "dgv",
          { hiddenCaptures: [2] },
        ),
      },
      redirect_number: {
        captures: {
          1: { name: "keyword.operator.redirect.stdout.shell" },
          2: { name: "keyword.operator.redirect.stderr.shell" },
          3: { name: "keyword.operator.redirect.$3.shell" },
        },
        match: new RegExp("(?<=[\\t ])(?:(1)|(2)|(\\p{Nd}+))(?=>)", "dgv"),
      },
      redirection: {
        patterns: [
          {
            begin: new RegExp("[\\<\\>]\\(", "dgv"),
            beginCaptures: {
              0: { name: "punctuation.definition.string.begin.shell" },
            },
            end: new RegExp("\\)", "dgv"),
            endCaptures: {
              0: { name: "punctuation.definition.string.end.shell" },
            },
            name: "string.interpolated.process-substitution.shell",
            patterns: [{ include: "#initial_context" }],
          },
          {
            match: new RegExp(
              "(?<![\\<\\>])(&>|\\p{Nd}*>&\\p{Nd}*|\\p{Nd}*(>>|[\\<\\>])|\\p{Nd}*<&|\\p{Nd}*<>)(?![\\<\\>])",
              "dgv",
            ),
            name: "keyword.operator.redirect.shell",
          },
        ],
      },
      regex_comparison: {
        match: new RegExp("=~", "dgv"),
        name: "keyword.operator.logical.regex.shell",
      },
      regexp: { patterns: [{ match: new RegExp("[^\\n]+", "dgv") }] },
      simple_options: {
        captures: {
          0: {
            patterns: [
              {
                captures: {
                  1: {
                    name: "string.unquoted.argument.shell constant.other.option.dash.shell",
                  },
                  2: {
                    name: "string.unquoted.argument.shell constant.other.option.shell",
                  },
                },
                match: new Fe(
                  "(?:(?=([\\t ]+))\\1)(-)([\\p{L}\\p{M}\\p{N}\\p{Pc}]+)",
                  "dgv",
                  { hiddenCaptures: [1] },
                ),
              },
            ],
          },
        },
        match: new Fe(
          "(?:(?:(?=([\\t ]+))\\1)-[\\p{L}\\p{M}\\p{N}\\p{Pc}]+)*",
          "dgv",
          { hiddenCaptures: [1] },
        ),
      },
      simple_unquoted: {
        match: new RegExp('[^\\t\\n "\\$\\&-\\)\\;\\<\\>\\\\\\`\\|]', "dgv"),
        name: "string.unquoted.shell",
      },
      special_expansion: {
        match: new RegExp("!|:[\\-\\=\\?]?|[\\*\\@]|##?|%%|[\\%\\/]", "dgv"),
        name: "keyword.operator.expansion.shell",
      },
      start_of_command: {
        match: new Fe(
          "(?:(?=([\\t ]*))\\1)(?![\\n\\!\\#\\&\\(\\)\\<\\>\\[\\{\\|]|(?=\\n?$)|[\\t \\;])(?!nocorrect |nocorrect\\t|nocorrect(?=\\n?$)|readonly |readonly\\t|readonly(?=\\n?$)|function |function\\t|function(?=\\n?$)|foreach |foreach\\t|foreach(?=\\n?$)|coproc |coproc\\t|coproc(?=\\n?$)|logout |logout\\t|logout(?=\\n?$)|export |export\\t|export(?=\\n?$)|select |select\\t|select(?=\\n?$)|repeat |repeat\\t|repeat(?=\\n?$)|pushd |pushd\\t|pushd(?=\\n?$)|until |until\\t|until(?=\\n?$)|while |while\\t|while(?=\\n?$)|local |local\\t|local(?=\\n?$)|case |case\\t|case(?=\\n?$)|done |done\\t|done(?=\\n?$)|elif |elif\\t|elif(?=\\n?$)|else |else\\t|else(?=\\n?$)|esac |esac\\t|esac(?=\\n?$)|popd |popd\\t|popd(?=\\n?$)|then |then\\t|then(?=\\n?$)|time |time\\t|time(?=\\n?$)|for |for\\t|for(?=\\n?$)|end |end\\t|end(?=\\n?$)|fi |fi\\t|fi(?=\\n?$)|do |do\\t|do(?=\\n?$)|in |in\\t|in(?=\\n?$)|if |if\\t|if(?=\\n?$))(?!\\\\\\n?(?=\\n?$))",
          "dgv",
          { hiddenCaptures: [1] },
        ),
      },
      string: {
        patterns: [
          {
            match: new RegExp("\\\\[^\\n]", "dgv"),
            name: "constant.character.escape.shell",
          },
          {
            begin: new RegExp("'", "dgv"),
            beginCaptures: {
              0: { name: "punctuation.definition.string.begin.shell" },
            },
            end: new RegExp("'", "dgv"),
            endCaptures: {
              0: { name: "punctuation.definition.string.end.shell" },
            },
            name: "string.quoted.single.shell",
          },
          {
            begin: new RegExp('\\$?"', "dgv"),
            beginCaptures: {
              0: { name: "punctuation.definition.string.begin.shell" },
            },
            end: new RegExp('"', "dgv"),
            endCaptures: {
              0: { name: "punctuation.definition.string.end.shell" },
            },
            name: "string.quoted.double.shell",
            patterns: [
              {
                match: new RegExp('\\\\[\\n"\\$\\\\\\`]', "dgv"),
                name: "constant.character.escape.shell",
              },
              { include: "#variable" },
              { include: "#interpolation" },
            ],
          },
          {
            begin: new RegExp("\\$'", "dgv"),
            beginCaptures: {
              0: { name: "punctuation.definition.string.begin.shell" },
            },
            end: new RegExp("'", "dgv"),
            endCaptures: {
              0: { name: "punctuation.definition.string.end.shell" },
            },
            name: "string.quoted.single.dollar.shell",
            patterns: [
              {
                match: new RegExp("\\\\['\\\\abefnrtv]", "dgv"),
                name: "constant.character.escape.ansi-c.shell",
              },
              {
                match: new RegExp('\\\\[0-9]{3}"', "dgv"),
                name: "constant.character.escape.octal.shell",
              },
              {
                match: new RegExp('\\\\x\\p{AHex}{2}"', "dgv"),
                name: "constant.character.escape.hex.shell",
              },
              {
                match: new RegExp('\\\\c[^\\n]"', "dgv"),
                name: "constant.character.escape.control-char.shell",
              },
            ],
          },
        ],
      },
      subshell_dollar: {
        patterns: [
          {
            begin: new RegExp("\\$\\(", "dgv"),
            beginCaptures: {
              0: { name: "punctuation.definition.subshell.single.shell" },
            },
            end: new RegExp("\\)", "dgv"),
            endCaptures: {
              0: { name: "punctuation.definition.subshell.single.shell" },
            },
            name: "meta.scope.subshell",
            patterns: [
              { include: "#parenthese" },
              { include: "#initial_context" },
            ],
          },
        ],
      },
      support: {
        patterns: [
          {
            match: new RegExp(
              "(?<=^|[\\&\\;\\p{space}])[\\.\\:](?=[\\&\\;\\p{space}]|(?=\\n?$))",
              "dgv",
            ),
            name: "support.function.builtin.shell",
          },
        ],
      },
      typical_statements: {
        patterns: [
          { include: "#assignment_statement" },
          { include: "#case_statement" },
          { include: "#for_statement" },
          { include: "#while_statement" },
          { include: "#function_definition" },
          { include: "#command_statement" },
          { include: "#line_continuation" },
          { include: "#arithmetic_double" },
          { include: "#normal_context" },
        ],
      },
      variable: {
        patterns: [
          {
            captures: {
              1: {
                name: "punctuation.definition.variable.shell variable.parameter.positional.all.shell",
              },
              2: { name: "variable.parameter.positional.all.shell" },
            },
            match: new RegExp("(\\$)(@(?![\\p{L}\\p{M}\\p{N}\\p{Pc}]))", "dgv"),
          },
          {
            captures: {
              1: {
                name: "punctuation.definition.variable.shell variable.parameter.positional.shell",
              },
              2: { name: "variable.parameter.positional.shell" },
            },
            match: new RegExp(
              "(\\$)([0-9](?![\\p{L}\\p{M}\\p{N}\\p{Pc}]))",
              "dgv",
            ),
          },
          {
            captures: {
              1: {
                name: "punctuation.definition.variable.shell variable.language.special.shell",
              },
              2: { name: "variable.language.special.shell" },
            },
            match: new RegExp(
              "(\\$)([\\-\\!\\#\\$\\*0\\?_](?![\\p{L}\\p{M}\\p{N}\\p{Pc}]))",
              "dgv",
            ),
          },
          {
            begin: new Fe("(\\$)(\\{)(?:(?=([\\t ]*))\\3)(?=\\p{Nd})", "dgv", {
              hiddenCaptures: [3],
            }),
            beginCaptures: {
              1: {
                name: "punctuation.definition.variable.shell variable.parameter.positional.shell",
              },
              2: {
                name: "punctuation.section.bracket.curly.variable.begin.shell punctuation.definition.variable.shell variable.parameter.positional.shell",
              },
            },
            contentName: "meta.parameter-expansion",
            end: new RegExp("\\}", "dgv"),
            endCaptures: {
              0: {
                name: "punctuation.section.bracket.curly.variable.end.shell punctuation.definition.variable.shell variable.parameter.positional.shell",
              },
            },
            patterns: [
              { include: "#special_expansion" },
              { include: "#array_access_inline" },
              {
                match: new RegExp("[0-9]+", "dgv"),
                name: "variable.parameter.positional.shell",
              },
              {
                match: new RegExp(
                  "(?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])[\\-0-9A-Z_a-z]+(?![\\p{L}\\p{M}\\p{N}\\p{Pc}])",
                  "dgv",
                ),
                name: "variable.other.normal.shell",
              },
              { include: "#variable" },
              { include: "#string" },
            ],
          },
          {
            begin: new RegExp("(\\$)(\\{)", "dgv"),
            beginCaptures: {
              1: { name: "punctuation.definition.variable.shell" },
              2: {
                name: "punctuation.section.bracket.curly.variable.begin.shell punctuation.definition.variable.shell",
              },
            },
            contentName: "meta.parameter-expansion",
            end: new RegExp("\\}", "dgv"),
            endCaptures: {
              0: {
                name: "punctuation.section.bracket.curly.variable.end.shell punctuation.definition.variable.shell",
              },
            },
            patterns: [
              { include: "#special_expansion" },
              { include: "#array_access_inline" },
              {
                match: new RegExp(
                  "(?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])[\\-0-9A-Z_a-z]+(?![\\p{L}\\p{M}\\p{N}\\p{Pc}])",
                  "dgv",
                ),
                name: "variable.other.normal.shell",
              },
              { include: "#variable" },
              { include: "#string" },
            ],
          },
          {
            captures: {
              1: {
                name: "punctuation.definition.variable.shell variable.other.normal.shell",
              },
              2: { name: "variable.other.normal.shell" },
            },
            match: new RegExp(
              "(\\$)([\\p{L}\\p{M}\\p{N}\\p{Pc}]+(?![\\p{L}\\p{M}\\p{N}\\p{Pc}]))",
              "dgv",
            ),
          },
        ],
      },
      while_statement: {
        patterns: [
          {
            begin: new RegExp("\\b(while)\\b", "dgv"),
            beginCaptures: { 1: { name: "keyword.control.while.shell" } },
            end: new RegExp(
              "(?=[\\n\\&\\)\\;\\`\\{\\|\\}]|[\\t ]*#|\\])(?<!\\\\)",
              "dgv",
            ),
            endCaptures: {},
            name: "meta.while.shell",
            patterns: [
              { include: "#line_continuation" },
              { include: "#math_operators" },
              { include: "#option" },
              { include: "#simple_unquoted" },
              { include: "#normal_context" },
              { include: "#string" },
            ],
          },
        ],
      },
    },
    scopeName: "source.shell",
    embeddedLangs: void 0,
    aliases: ["bash", "sh", "shell", "zsh"],
  }),
  rC = [nC],
  oC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: rC },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  aC = Object.freeze({
    displayName: "JSON",
    name: "json",
    patterns: [{ include: "#value" }],
    repository: {
      array: {
        begin: new RegExp("\\[", "dgv"),
        beginCaptures: {
          0: { name: "punctuation.definition.array.begin.json" },
        },
        end: new RegExp("\\]", "dgv"),
        endCaptures: { 0: { name: "punctuation.definition.array.end.json" } },
        name: "meta.structure.array.json",
        patterns: [
          { include: "#value" },
          {
            match: new RegExp(",", "dgv"),
            name: "punctuation.separator.array.json",
          },
          {
            match: new RegExp("[^\\]\\p{space}]", "dgv"),
            name: "invalid.illegal.expected-array-separator.json",
          },
        ],
      },
      comments: {
        patterns: [
          {
            begin: new RegExp("\\/\\*\\*(?!\\/)", "dgv"),
            captures: { 0: { name: "punctuation.definition.comment.json" } },
            end: new RegExp("\\*\\/", "dgv"),
            name: "comment.block.documentation.json",
          },
          {
            begin: new RegExp("\\/\\*", "dgv"),
            captures: { 0: { name: "punctuation.definition.comment.json" } },
            end: new RegExp("\\*\\/", "dgv"),
            name: "comment.block.json",
          },
          {
            captures: { 1: { name: "punctuation.definition.comment.json" } },
            match: new RegExp("(\\/\\/)[^\\n]*(?=\\n?$)\\n?", "dgv"),
            name: "comment.line.double-slash.js",
          },
        ],
      },
      constant: {
        match: new RegExp("\\b(?:true|false|null)\\b", "dgv"),
        name: "constant.language.json",
      },
      number: {
        match: new RegExp(
          "-?(?:0|[1-9]\\p{Nd}*)(?:(?:\\.\\p{Nd}+)?(?:[Ee][\\-\\+]?\\p{Nd}+)?)?",
          "dgv",
        ),
        name: "constant.numeric.json",
      },
      object: {
        begin: new RegExp("\\{", "dgv"),
        beginCaptures: {
          0: { name: "punctuation.definition.dictionary.begin.json" },
        },
        end: new RegExp("\\}", "dgv"),
        endCaptures: {
          0: { name: "punctuation.definition.dictionary.end.json" },
        },
        name: "meta.structure.dictionary.json",
        patterns: [
          { include: "#objectkey" },
          { include: "#comments" },
          {
            begin: new RegExp(":", "dgv"),
            beginCaptures: {
              0: { name: "punctuation.separator.dictionary.key-value.json" },
            },
            end: new RegExp("(,)|(?=\\})", "dgv"),
            endCaptures: {
              1: { name: "punctuation.separator.dictionary.pair.json" },
            },
            name: "meta.structure.dictionary.value.json",
            patterns: [
              { include: "#value" },
              {
                match: new RegExp("[^\\,\\p{space}]", "dgv"),
                name: "invalid.illegal.expected-dictionary-separator.json",
              },
            ],
          },
          {
            match: new RegExp("[^\\}\\p{space}]", "dgv"),
            name: "invalid.illegal.expected-dictionary-separator.json",
          },
        ],
      },
      objectkey: {
        begin: new RegExp('"', "dgv"),
        beginCaptures: {
          0: { name: "punctuation.support.type.property-name.begin.json" },
        },
        end: new RegExp('"', "dgv"),
        endCaptures: {
          0: { name: "punctuation.support.type.property-name.end.json" },
        },
        name: "string.json support.type.property-name.json",
        patterns: [{ include: "#stringcontent" }],
      },
      string: {
        begin: new RegExp('"', "dgv"),
        beginCaptures: {
          0: { name: "punctuation.definition.string.begin.json" },
        },
        end: new RegExp('"', "dgv"),
        endCaptures: { 0: { name: "punctuation.definition.string.end.json" } },
        name: "string.quoted.double.json",
        patterns: [{ include: "#stringcontent" }],
      },
      stringcontent: {
        patterns: [
          {
            match: new RegExp('\\\\(?:["\\/\\\\bfnrt]|u\\p{AHex}{4})', "dgv"),
            name: "constant.character.escape.json",
          },
          {
            match: new RegExp("\\\\[^\\n]", "dgv"),
            name: "invalid.illegal.unrecognized-string-escape.json",
          },
        ],
      },
      value: {
        patterns: [
          { include: "#constant" },
          { include: "#number" },
          { include: "#string" },
          { include: "#array" },
          { include: "#object" },
          { include: "#comments" },
        ],
      },
    },
    scopeName: "source.json",
    embeddedLangs: void 0,
    aliases: void 0,
  }),
  iC = [aC],
  sC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: iC },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  lC = Object.freeze(
    JSON.parse(
      '{"colors":{"activityBar.activeBorder":"#f9826c","activityBar.background":"#fff","activityBar.border":"#e1e4e8","activityBar.foreground":"#2f363d","activityBar.inactiveForeground":"#959da5","activityBarBadge.background":"#2188ff","activityBarBadge.foreground":"#fff","badge.background":"#dbedff","badge.foreground":"#005cc5","breadcrumb.activeSelectionForeground":"#586069","breadcrumb.focusForeground":"#2f363d","breadcrumb.foreground":"#6a737d","breadcrumbPicker.background":"#fafbfc","button.background":"#159739","button.foreground":"#fff","button.hoverBackground":"#138934","button.secondaryBackground":"#e1e4e8","button.secondaryForeground":"#1b1f23","button.secondaryHoverBackground":"#d1d5da","checkbox.background":"#fafbfc","checkbox.border":"#d1d5da","debugToolBar.background":"#fff","descriptionForeground":"#6a737d","diffEditor.insertedTextBackground":"#34d05822","diffEditor.removedTextBackground":"#d73a4922","dropdown.background":"#fafbfc","dropdown.border":"#e1e4e8","dropdown.foreground":"#2f363d","dropdown.listBackground":"#fff","editor.background":"#fff","editor.findMatchBackground":"#ffdf5d","editor.findMatchHighlightBackground":"#ffdf5d66","editor.focusedStackFrameHighlightBackground":"#28a74525","editor.foldBackground":"#d1d5da11","editor.foreground":"#24292e","editor.inactiveSelectionBackground":"#0366d611","editor.lineHighlightBackground":"#f6f8fa","editor.linkedEditingBackground":"#0366d611","editor.selectionBackground":"#0366d625","editor.selectionHighlightBackground":"#34d05840","editor.selectionHighlightBorder":"#34d05800","editor.stackFrameHighlightBackground":"#ffd33d33","editor.wordHighlightBackground":"#34d05800","editor.wordHighlightBorder":"#24943e99","editor.wordHighlightStrongBackground":"#34d05800","editor.wordHighlightStrongBorder":"#24943e50","editorBracketHighlight.foreground1":"#005cc5","editorBracketHighlight.foreground2":"#e36209","editorBracketHighlight.foreground3":"#5a32a3","editorBracketHighlight.foreground4":"#005cc5","editorBracketHighlight.foreground5":"#e36209","editorBracketHighlight.foreground6":"#5a32a3","editorBracketMatch.background":"#34d05840","editorBracketMatch.border":"#34d05800","editorCursor.foreground":"#044289","editorError.foreground":"#cb2431","editorGroup.border":"#e1e4e8","editorGroupHeader.tabsBackground":"#f6f8fa","editorGroupHeader.tabsBorder":"#e1e4e8","editorGutter.addedBackground":"#28a745","editorGutter.deletedBackground":"#d73a49","editorGutter.modifiedBackground":"#2188ff","editorIndentGuide.activeBackground":"#d7dbe0","editorIndentGuide.background":"#eff2f6","editorLineNumber.activeForeground":"#24292e","editorLineNumber.foreground":"#1b1f234d","editorOverviewRuler.border":"#fff","editorWarning.foreground":"#f9c513","editorWhitespace.foreground":"#d1d5da","editorWidget.background":"#f6f8fa","errorForeground":"#cb2431","focusBorder":"#2188ff","foreground":"#444d56","gitDecoration.addedResourceForeground":"#28a745","gitDecoration.conflictingResourceForeground":"#e36209","gitDecoration.deletedResourceForeground":"#d73a49","gitDecoration.ignoredResourceForeground":"#959da5","gitDecoration.modifiedResourceForeground":"#005cc5","gitDecoration.submoduleResourceForeground":"#959da5","gitDecoration.untrackedResourceForeground":"#28a745","input.background":"#fafbfc","input.border":"#e1e4e8","input.foreground":"#2f363d","input.placeholderForeground":"#959da5","list.activeSelectionBackground":"#e2e5e9","list.activeSelectionForeground":"#2f363d","list.focusBackground":"#cce5ff","list.hoverBackground":"#ebf0f4","list.hoverForeground":"#2f363d","list.inactiveFocusBackground":"#dbedff","list.inactiveSelectionBackground":"#e8eaed","list.inactiveSelectionForeground":"#2f363d","notificationCenterHeader.background":"#e1e4e8","notificationCenterHeader.foreground":"#6a737d","notifications.background":"#fafbfc","notifications.border":"#e1e4e8","notifications.foreground":"#2f363d","notificationsErrorIcon.foreground":"#d73a49","notificationsInfoIcon.foreground":"#005cc5","notificationsWarningIcon.foreground":"#e36209","panel.background":"#f6f8fa","panel.border":"#e1e4e8","panelInput.border":"#e1e4e8","panelTitle.activeBorder":"#f9826c","panelTitle.activeForeground":"#2f363d","panelTitle.inactiveForeground":"#6a737d","pickerGroup.border":"#e1e4e8","pickerGroup.foreground":"#2f363d","progressBar.background":"#2188ff","quickInput.background":"#fafbfc","quickInput.foreground":"#2f363d","scrollbar.shadow":"#6a737d33","scrollbarSlider.activeBackground":"#959da588","scrollbarSlider.background":"#959da533","scrollbarSlider.hoverBackground":"#959da544","settings.headerForeground":"#2f363d","settings.modifiedItemIndicator":"#2188ff","sideBar.background":"#f6f8fa","sideBar.border":"#e1e4e8","sideBar.foreground":"#586069","sideBarSectionHeader.background":"#f6f8fa","sideBarSectionHeader.border":"#e1e4e8","sideBarSectionHeader.foreground":"#2f363d","sideBarTitle.foreground":"#2f363d","statusBar.background":"#fff","statusBar.border":"#e1e4e8","statusBar.debuggingBackground":"#f9826c","statusBar.debuggingForeground":"#fff","statusBar.foreground":"#586069","statusBar.noFolderBackground":"#fff","statusBarItem.prominentBackground":"#e8eaed","statusBarItem.remoteBackground":"#fff","statusBarItem.remoteForeground":"#586069","tab.activeBackground":"#fff","tab.activeBorder":"#fff","tab.activeBorderTop":"#f9826c","tab.activeForeground":"#2f363d","tab.border":"#e1e4e8","tab.hoverBackground":"#fff","tab.inactiveBackground":"#f6f8fa","tab.inactiveForeground":"#6a737d","tab.unfocusedActiveBorder":"#fff","tab.unfocusedActiveBorderTop":"#e1e4e8","tab.unfocusedHoverBackground":"#fff","terminal.ansiBlack":"#24292e","terminal.ansiBlue":"#0366d6","terminal.ansiBrightBlack":"#959da5","terminal.ansiBrightBlue":"#005cc5","terminal.ansiBrightCyan":"#3192aa","terminal.ansiBrightGreen":"#22863a","terminal.ansiBrightMagenta":"#5a32a3","terminal.ansiBrightRed":"#cb2431","terminal.ansiBrightWhite":"#d1d5da","terminal.ansiBrightYellow":"#b08800","terminal.ansiCyan":"#1b7c83","terminal.ansiGreen":"#28a745","terminal.ansiMagenta":"#5a32a3","terminal.ansiRed":"#d73a49","terminal.ansiWhite":"#6a737d","terminal.ansiYellow":"#dbab09","terminal.foreground":"#586069","terminal.tab.activeBorder":"#f9826c","terminalCursor.background":"#d1d5da","terminalCursor.foreground":"#005cc5","textBlockQuote.background":"#fafbfc","textBlockQuote.border":"#e1e4e8","textCodeBlock.background":"#f6f8fa","textLink.activeForeground":"#005cc5","textLink.foreground":"#0366d6","textPreformat.foreground":"#586069","textSeparator.foreground":"#d1d5da","titleBar.activeBackground":"#fff","titleBar.activeForeground":"#2f363d","titleBar.border":"#e1e4e8","titleBar.inactiveBackground":"#f6f8fa","titleBar.inactiveForeground":"#6a737d","tree.indentGuidesStroke":"#e1e4e8","welcomePage.buttonBackground":"#f6f8fa","welcomePage.buttonHoverBackground":"#e1e4e8"},"displayName":"GitHub Light","name":"github-light","semanticHighlighting":true,"tokenColors":[{"scope":["comment","punctuation.definition.comment","string.comment"],"settings":{"foreground":"#6a737d"}},{"scope":["constant","entity.name.constant","variable.other.constant","variable.other.enummember","variable.language"],"settings":{"foreground":"#005cc5"}},{"scope":["entity","entity.name"],"settings":{"foreground":"#6f42c1"}},{"scope":"variable.parameter.function","settings":{"foreground":"#24292e"}},{"scope":"entity.name.tag","settings":{"foreground":"#22863a"}},{"scope":"keyword","settings":{"foreground":"#d73a49"}},{"scope":["storage","storage.type"],"settings":{"foreground":"#d73a49"}},{"scope":["storage.modifier.package","storage.modifier.import","storage.type.java"],"settings":{"foreground":"#24292e"}},{"scope":["string","punctuation.definition.string","string punctuation.section.embedded source"],"settings":{"foreground":"#032f62"}},{"scope":"support","settings":{"foreground":"#005cc5"}},{"scope":"meta.property-name","settings":{"foreground":"#005cc5"}},{"scope":"variable","settings":{"foreground":"#e36209"}},{"scope":"variable.other","settings":{"foreground":"#24292e"}},{"scope":"invalid.broken","settings":{"fontStyle":"italic","foreground":"#b31d28"}},{"scope":"invalid.deprecated","settings":{"fontStyle":"italic","foreground":"#b31d28"}},{"scope":"invalid.illegal","settings":{"fontStyle":"italic","foreground":"#b31d28"}},{"scope":"invalid.unimplemented","settings":{"fontStyle":"italic","foreground":"#b31d28"}},{"scope":"carriage-return","settings":{"background":"#d73a49","content":"^M","fontStyle":"italic underline","foreground":"#fafbfc"}},{"scope":"message.error","settings":{"foreground":"#b31d28"}},{"scope":"string variable","settings":{"foreground":"#005cc5"}},{"scope":["source.regexp","string.regexp"],"settings":{"foreground":"#032f62"}},{"scope":["string.regexp.character-class","string.regexp constant.character.escape","string.regexp source.ruby.embedded","string.regexp string.regexp.arbitrary-repitition"],"settings":{"foreground":"#032f62"}},{"scope":"string.regexp constant.character.escape","settings":{"fontStyle":"bold","foreground":"#22863a"}},{"scope":"support.constant","settings":{"foreground":"#005cc5"}},{"scope":"support.variable","settings":{"foreground":"#005cc5"}},{"scope":"meta.module-reference","settings":{"foreground":"#005cc5"}},{"scope":"punctuation.definition.list.begin.markdown","settings":{"foreground":"#e36209"}},{"scope":["markup.heading","markup.heading entity.name"],"settings":{"fontStyle":"bold","foreground":"#005cc5"}},{"scope":"markup.quote","settings":{"foreground":"#22863a"}},{"scope":"markup.italic","settings":{"fontStyle":"italic","foreground":"#24292e"}},{"scope":"markup.bold","settings":{"fontStyle":"bold","foreground":"#24292e"}},{"scope":["markup.underline"],"settings":{"fontStyle":"underline"}},{"scope":["markup.strikethrough"],"settings":{"fontStyle":"strikethrough"}},{"scope":"markup.inline.raw","settings":{"foreground":"#005cc5"}},{"scope":["markup.deleted","meta.diff.header.from-file","punctuation.definition.deleted"],"settings":{"background":"#ffeef0","foreground":"#b31d28"}},{"scope":["markup.inserted","meta.diff.header.to-file","punctuation.definition.inserted"],"settings":{"background":"#f0fff4","foreground":"#22863a"}},{"scope":["markup.changed","punctuation.definition.changed"],"settings":{"background":"#ffebda","foreground":"#e36209"}},{"scope":["markup.ignored","markup.untracked"],"settings":{"background":"#005cc5","foreground":"#f6f8fa"}},{"scope":"meta.diff.range","settings":{"fontStyle":"bold","foreground":"#6f42c1"}},{"scope":"meta.diff.header","settings":{"foreground":"#005cc5"}},{"scope":"meta.separator","settings":{"fontStyle":"bold","foreground":"#005cc5"}},{"scope":"meta.output","settings":{"foreground":"#005cc5"}},{"scope":["brackethighlighter.tag","brackethighlighter.curly","brackethighlighter.round","brackethighlighter.square","brackethighlighter.angle","brackethighlighter.quote"],"settings":{"foreground":"#586069"}},{"scope":"brackethighlighter.unmatched","settings":{"foreground":"#b31d28"}},{"scope":["constant.other.reference.link","string.other.link"],"settings":{"fontStyle":"underline","foreground":"#032f62"}}],"type":"light"}',
    ),
  ),
  cC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: lC },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  uC = Object.freeze(
    JSON.parse(
      '{"colors":{"activityBar.activeBorder":"#80CBC4","activityBar.background":"#212121","activityBar.border":"#21212160","activityBar.dropBackground":"#f0717880","activityBar.foreground":"#EEFFFF","activityBarBadge.background":"#80CBC4","activityBarBadge.foreground":"#000000","badge.background":"#00000030","badge.foreground":"#545454","breadcrumb.activeSelectionForeground":"#80CBC4","breadcrumb.background":"#212121","breadcrumb.focusForeground":"#EEFFFF","breadcrumb.foreground":"#676767","breadcrumbPicker.background":"#212121","button.background":"#61616150","button.foreground":"#ffffff","debugConsole.errorForeground":"#f07178","debugConsole.infoForeground":"#89DDFF","debugConsole.warningForeground":"#FFCB6B","debugToolBar.background":"#212121","diffEditor.insertedTextBackground":"#89DDFF20","diffEditor.removedTextBackground":"#ff9cac20","dropdown.background":"#212121","dropdown.border":"#FFFFFF10","editor.background":"#212121","editor.findMatchBackground":"#000000","editor.findMatchBorder":"#80CBC4","editor.findMatchHighlight":"#EEFFFF","editor.findMatchHighlightBackground":"#00000050","editor.findMatchHighlightBorder":"#ffffff30","editor.findRangeHighlightBackground":"#FFCB6B30","editor.foreground":"#EEFFFF","editor.lineHighlightBackground":"#00000050","editor.lineHighlightBorder":"#00000000","editor.rangeHighlightBackground":"#FFFFFF0d","editor.selectionBackground":"#61616150","editor.selectionHighlightBackground":"#FFCC0020","editor.wordHighlightBackground":"#ff9cac30","editor.wordHighlightStrongBackground":"#C3E88D30","editorBracketMatch.background":"#212121","editorBracketMatch.border":"#FFCC0050","editorCursor.foreground":"#FFCC00","editorError.foreground":"#f0717870","editorGroup.border":"#00000030","editorGroup.dropBackground":"#f0717880","editorGroup.focusedEmptyBorder":"#f07178","editorGroupHeader.tabsBackground":"#212121","editorGutter.addedBackground":"#C3E88D60","editorGutter.deletedBackground":"#f0717860","editorGutter.modifiedBackground":"#82AAFF60","editorHoverWidget.background":"#212121","editorHoverWidget.border":"#FFFFFF10","editorIndentGuide.activeBackground":"#424242","editorIndentGuide.background":"#42424270","editorInfo.foreground":"#82AAFF70","editorLineNumber.activeForeground":"#676767","editorLineNumber.foreground":"#424242","editorLink.activeForeground":"#EEFFFF","editorMarkerNavigation.background":"#EEFFFF05","editorOverviewRuler.border":"#212121","editorOverviewRuler.errorForeground":"#f0717840","editorOverviewRuler.findMatchForeground":"#80CBC4","editorOverviewRuler.infoForeground":"#82AAFF40","editorOverviewRuler.warningForeground":"#FFCB6B40","editorRuler.foreground":"#424242","editorSuggestWidget.background":"#212121","editorSuggestWidget.border":"#FFFFFF10","editorSuggestWidget.foreground":"#EEFFFF","editorSuggestWidget.highlightForeground":"#80CBC4","editorSuggestWidget.selectedBackground":"#00000050","editorWarning.foreground":"#FFCB6B70","editorWhitespace.foreground":"#EEFFFF40","editorWidget.background":"#212121","editorWidget.border":"#80CBC4","editorWidget.resizeBorder":"#80CBC4","extensionBadge.remoteForeground":"#EEFFFF","extensionButton.prominentBackground":"#C3E88D90","extensionButton.prominentForeground":"#EEFFFF","extensionButton.prominentHoverBackground":"#C3E88D","focusBorder":"#FFFFFF00","foreground":"#EEFFFF","gitDecoration.conflictingResourceForeground":"#FFCB6B90","gitDecoration.deletedResourceForeground":"#f0717890","gitDecoration.ignoredResourceForeground":"#67676790","gitDecoration.modifiedResourceForeground":"#82AAFF90","gitDecoration.untrackedResourceForeground":"#C3E88D90","input.background":"#2B2B2B","input.border":"#FFFFFF10","input.foreground":"#EEFFFF","input.placeholderForeground":"#EEFFFF60","inputOption.activeBackground":"#EEFFFF30","inputOption.activeBorder":"#EEFFFF30","inputValidation.errorBorder":"#f07178","inputValidation.infoBorder":"#82AAFF","inputValidation.warningBorder":"#FFCB6B","list.activeSelectionBackground":"#212121","list.activeSelectionForeground":"#80CBC4","list.dropBackground":"#f0717880","list.focusBackground":"#EEFFFF20","list.focusForeground":"#EEFFFF","list.highlightForeground":"#80CBC4","list.hoverBackground":"#212121","list.hoverForeground":"#FFFFFF","list.inactiveSelectionBackground":"#00000030","list.inactiveSelectionForeground":"#80CBC4","listFilterWidget.background":"#00000030","listFilterWidget.noMatchesOutline":"#00000030","listFilterWidget.outline":"#00000030","menu.background":"#212121","menu.foreground":"#EEFFFF","menu.selectionBackground":"#00000050","menu.selectionBorder":"#00000030","menu.selectionForeground":"#80CBC4","menu.separatorBackground":"#EEFFFF","menubar.selectionBackground":"#00000030","menubar.selectionBorder":"#00000030","menubar.selectionForeground":"#80CBC4","notebook.focusedCellBorder":"#80CBC4","notebook.inactiveFocusedCellBorder":"#80CBC450","notificationLink.foreground":"#80CBC4","notifications.background":"#212121","notifications.foreground":"#EEFFFF","panel.background":"#212121","panel.border":"#21212160","panel.dropBackground":"#EEFFFF","panelTitle.activeBorder":"#80CBC4","panelTitle.activeForeground":"#FFFFFF","panelTitle.inactiveForeground":"#EEFFFF","peekView.border":"#00000030","peekViewEditor.background":"#2B2B2B","peekViewEditor.matchHighlightBackground":"#61616150","peekViewEditorGutter.background":"#2B2B2B","peekViewResult.background":"#2B2B2B","peekViewResult.matchHighlightBackground":"#61616150","peekViewResult.selectionBackground":"#67676770","peekViewTitle.background":"#2B2B2B","peekViewTitleDescription.foreground":"#EEFFFF60","pickerGroup.border":"#FFFFFF1a","pickerGroup.foreground":"#80CBC4","progressBar.background":"#80CBC4","quickInput.background":"#212121","quickInput.foreground":"#676767","quickInput.list.focusBackground":"#EEFFFF20","sash.hoverBorder":"#80CBC450","scrollbar.shadow":"#00000030","scrollbarSlider.activeBackground":"#80CBC4","scrollbarSlider.background":"#EEFFFF20","scrollbarSlider.hoverBackground":"#EEFFFF10","selection.background":"#00000080","settings.checkboxBackground":"#212121","settings.checkboxForeground":"#EEFFFF","settings.dropdownBackground":"#212121","settings.dropdownForeground":"#EEFFFF","settings.headerForeground":"#80CBC4","settings.modifiedItemIndicator":"#80CBC4","settings.numberInputBackground":"#212121","settings.numberInputForeground":"#EEFFFF","settings.textInputBackground":"#212121","settings.textInputForeground":"#EEFFFF","sideBar.background":"#212121","sideBar.border":"#21212160","sideBar.foreground":"#676767","sideBarSectionHeader.background":"#212121","sideBarSectionHeader.border":"#21212160","sideBarTitle.foreground":"#EEFFFF","statusBar.background":"#212121","statusBar.border":"#21212160","statusBar.debuggingBackground":"#C792EA","statusBar.debuggingForeground":"#ffffff","statusBar.foreground":"#616161","statusBar.noFolderBackground":"#212121","statusBarItem.activeBackground":"#f0717880","statusBarItem.hoverBackground":"#54545420","statusBarItem.remoteBackground":"#80CBC4","statusBarItem.remoteForeground":"#000000","tab.activeBackground":"#212121","tab.activeBorder":"#80CBC4","tab.activeForeground":"#FFFFFF","tab.activeModifiedBorder":"#676767","tab.border":"#212121","tab.inactiveBackground":"#212121","tab.inactiveForeground":"#676767","tab.inactiveModifiedBorder":"#904348","tab.unfocusedActiveBorder":"#545454","tab.unfocusedActiveForeground":"#EEFFFF","tab.unfocusedActiveModifiedBorder":"#c05a60","tab.unfocusedInactiveModifiedBorder":"#904348","terminal.ansiBlack":"#000000","terminal.ansiBlue":"#82AAFF","terminal.ansiBrightBlack":"#545454","terminal.ansiBrightBlue":"#82AAFF","terminal.ansiBrightCyan":"#89DDFF","terminal.ansiBrightGreen":"#C3E88D","terminal.ansiBrightMagenta":"#C792EA","terminal.ansiBrightRed":"#f07178","terminal.ansiBrightWhite":"#ffffff","terminal.ansiBrightYellow":"#FFCB6B","terminal.ansiCyan":"#89DDFF","terminal.ansiGreen":"#C3E88D","terminal.ansiMagenta":"#C792EA","terminal.ansiRed":"#f07178","terminal.ansiWhite":"#ffffff","terminal.ansiYellow":"#FFCB6B","terminalCursor.background":"#000000","terminalCursor.foreground":"#FFCB6B","textLink.activeForeground":"#EEFFFF","textLink.foreground":"#80CBC4","titleBar.activeBackground":"#212121","titleBar.activeForeground":"#EEFFFF","titleBar.border":"#21212160","titleBar.inactiveBackground":"#212121","titleBar.inactiveForeground":"#676767","tree.indentGuidesStroke":"#424242","widget.shadow":"#00000030"},"displayName":"Material Theme Darker","name":"material-theme-darker","semanticHighlighting":true,"tokenColors":[{"settings":{"background":"#212121","foreground":"#EEFFFF"}},{"scope":"string","settings":{"foreground":"#C3E88D"}},{"scope":"punctuation, constant.other.symbol","settings":{"foreground":"#89DDFF"}},{"scope":"constant.character.escape, text.html constant.character.entity.named","settings":{"foreground":"#EEFFFF"}},{"scope":"constant.language.boolean","settings":{"foreground":"#ff9cac"}},{"scope":"constant.numeric","settings":{"foreground":"#F78C6C"}},{"scope":"variable, variable.parameter, support.variable, variable.language, support.constant, meta.definition.variable entity.name.function, meta.function-call.arguments","settings":{"foreground":"#EEFFFF"}},{"scope":"keyword.other","settings":{"foreground":"#F78C6C"}},{"scope":"keyword, modifier, variable.language.this, support.type.object, constant.language","settings":{"foreground":"#89DDFF"}},{"scope":"entity.name.function, support.function","settings":{"foreground":"#82AAFF"}},{"scope":"storage.type, storage.modifier, storage.control","settings":{"foreground":"#C792EA"}},{"scope":"support.module, support.node","settings":{"fontStyle":"italic","foreground":"#f07178"}},{"scope":"support.type, constant.other.key","settings":{"foreground":"#FFCB6B"}},{"scope":"entity.name.type, entity.other.inherited-class, entity.other","settings":{"foreground":"#FFCB6B"}},{"scope":"comment","settings":{"fontStyle":"italic","foreground":"#545454"}},{"scope":"comment punctuation.definition.comment, string.quoted.docstring","settings":{"fontStyle":"italic","foreground":"#545454"}},{"scope":"punctuation","settings":{"foreground":"#89DDFF"}},{"scope":"entity.name, entity.name.type.class, support.type, support.class, meta.use","settings":{"foreground":"#FFCB6B"}},{"scope":"variable.object.property, meta.field.declaration entity.name.function","settings":{"foreground":"#f07178"}},{"scope":"meta.definition.method entity.name.function","settings":{"foreground":"#f07178"}},{"scope":"meta.function entity.name.function","settings":{"foreground":"#82AAFF"}},{"scope":"template.expression.begin, template.expression.end, punctuation.definition.template-expression.begin, punctuation.definition.template-expression.end","settings":{"foreground":"#89DDFF"}},{"scope":"meta.embedded, source.groovy.embedded, meta.template.expression","settings":{"foreground":"#EEFFFF"}},{"scope":"entity.name.tag.yaml","settings":{"foreground":"#f07178"}},{"scope":"meta.object-literal.key, meta.object-literal.key string, support.type.property-name.json","settings":{"foreground":"#f07178"}},{"scope":"constant.language.json","settings":{"foreground":"#89DDFF"}},{"scope":"entity.other.attribute-name.class","settings":{"foreground":"#FFCB6B"}},{"scope":"entity.other.attribute-name.id","settings":{"foreground":"#F78C6C"}},{"scope":"source.css entity.name.tag","settings":{"foreground":"#FFCB6B"}},{"scope":"support.type.property-name.css","settings":{"foreground":"#B2CCD6"}},{"scope":"meta.tag, punctuation.definition.tag","settings":{"foreground":"#89DDFF"}},{"scope":"entity.name.tag","settings":{"foreground":"#f07178"}},{"scope":"entity.other.attribute-name","settings":{"foreground":"#C792EA"}},{"scope":"punctuation.definition.entity.html","settings":{"foreground":"#EEFFFF"}},{"scope":"markup.heading","settings":{"foreground":"#89DDFF"}},{"scope":"text.html.markdown meta.link.inline, meta.link.reference","settings":{"foreground":"#f07178"}},{"scope":"text.html.markdown beginning.punctuation.definition.list","settings":{"foreground":"#89DDFF"}},{"scope":"markup.italic","settings":{"fontStyle":"italic","foreground":"#f07178"}},{"scope":"markup.bold","settings":{"fontStyle":"bold","foreground":"#f07178"}},{"scope":"markup.bold markup.italic, markup.italic markup.bold","settings":{"fontStyle":"italic bold","foreground":"#f07178"}},{"scope":"markup.fenced_code.block.markdown punctuation.definition.markdown","settings":{"foreground":"#C3E88D"}},{"scope":"markup.inline.raw.string.markdown","settings":{"foreground":"#C3E88D"}},{"scope":"keyword.other.definition.ini","settings":{"foreground":"#f07178"}},{"scope":"entity.name.section.group-title.ini","settings":{"foreground":"#89DDFF"}},{"scope":"source.cs meta.class.identifier storage.type","settings":{"foreground":"#FFCB6B"}},{"scope":"source.cs meta.method.identifier entity.name.function","settings":{"foreground":"#f07178"}},{"scope":"source.cs meta.method-call meta.method, source.cs entity.name.function","settings":{"foreground":"#82AAFF"}},{"scope":"source.cs storage.type","settings":{"foreground":"#FFCB6B"}},{"scope":"source.cs meta.method.return-type","settings":{"foreground":"#FFCB6B"}},{"scope":"source.cs meta.preprocessor","settings":{"foreground":"#545454"}},{"scope":"source.cs entity.name.type.namespace","settings":{"foreground":"#EEFFFF"}},{"scope":"meta.jsx.children, SXNested","settings":{"foreground":"#EEFFFF"}},{"scope":"support.class.component","settings":{"foreground":"#FFCB6B"}},{"scope":"source.cpp meta.block variable.other","settings":{"foreground":"#EEFFFF"}},{"scope":"source.python meta.member.access.python","settings":{"foreground":"#f07178"}},{"scope":"source.python meta.function-call.python, meta.function-call.arguments","settings":{"foreground":"#82AAFF"}},{"scope":"meta.block","settings":{"foreground":"#f07178"}},{"scope":"entity.name.function.call","settings":{"foreground":"#82AAFF"}},{"scope":"source.php support.other.namespace, source.php meta.use support.class","settings":{"foreground":"#EEFFFF"}},{"scope":"constant.keyword","settings":{"fontStyle":"italic","foreground":"#89DDFF"}},{"scope":"entity.name.function","settings":{"foreground":"#82AAFF"}},{"settings":{"background":"#212121","foreground":"#EEFFFF"}},{"scope":["constant.other.placeholder"],"settings":{"foreground":"#f07178"}},{"scope":["markup.deleted"],"settings":{"foreground":"#f07178"}},{"scope":["markup.inserted"],"settings":{"foreground":"#C3E88D"}},{"scope":["markup.underline"],"settings":{"fontStyle":"underline"}},{"scope":["keyword.control"],"settings":{"fontStyle":"italic","foreground":"#89DDFF"}},{"scope":["variable.parameter"],"settings":{"fontStyle":"italic"}},{"scope":["variable.parameter.function.language.special.self.python"],"settings":{"fontStyle":"italic","foreground":"#f07178"}},{"scope":["constant.character.format.placeholder.other.python"],"settings":{"foreground":"#F78C6C"}},{"scope":["markup.quote"],"settings":{"fontStyle":"italic","foreground":"#89DDFF"}},{"scope":["markup.fenced_code.block"],"settings":{"foreground":"#EEFFFF90"}},{"scope":["punctuation.definition.quote"],"settings":{"foreground":"#ff9cac"}},{"scope":["meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#C792EA"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#FFCB6B"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#F78C6C"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#f07178"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#916b53"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#82AAFF"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#ff9cac"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#C792EA"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#C3E88D"}}],"type":"dark"}',
    ),
  ),
  dC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: uC },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
