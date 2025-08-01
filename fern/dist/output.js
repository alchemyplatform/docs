var kb = Object.defineProperty;
var Cb = Object.getPrototypeOf;
var Pb = Reflect.get;
var tp = (n) => {
  throw TypeError(n);
};
var Ob = (n, t, o) =>
  t in n
    ? kb(n, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
    : (n[t] = o);
var B = (n, t, o) => Ob(n, typeof t != "symbol" ? t + "" : t, o),
  Il = (n, t, o) => t.has(n) || tp("Cannot " + o);
var yt = (n, t, o) => (
    Il(n, t, "read from private field"), o ? o.call(n) : t.get(n)
  ),
  d0 = (n, t, o) =>
    t.has(n)
      ? tp("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(n)
        : t.set(n, o),
  Jt = (n, t, o, a) => (
    Il(n, t, "write to private field"), a ? a.call(n, o) : t.set(n, o), o
  ),
  Fl = (n, t, o) => (Il(n, t, "access private method"), o);
var np = (n, t, o) => Pb(Cb(n), o, t);
function Eb(n, t) {
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
function Tb(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Rl = { exports: {} },
  Zr = {},
  Ml = { exports: {} },
  ke = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rp;
function jb() {
  if (rp) return ke;
  rp = 1;
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
  function y(w) {
    return w === null || typeof w != "object"
      ? null
      : ((w = (v && w[v]) || w["@@iterator"]),
        typeof w == "function" ? w : null);
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
  function C(w, A, W) {
    (this.props = w),
      (this.context = A),
      (this.refs = O),
      (this.updater = W || x);
  }
  (C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (w, A) {
      if (typeof w != "object" && typeof w != "function" && w != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, w, A, "setState");
    }),
    (C.prototype.forceUpdate = function (w) {
      this.updater.enqueueForceUpdate(this, w, "forceUpdate");
    });
  function P() {}
  P.prototype = C.prototype;
  function T(w, A, W) {
    (this.props = w),
      (this.context = A),
      (this.refs = O),
      (this.updater = W || x);
  }
  var R = (T.prototype = new P());
  (R.constructor = T), S(R, C.prototype), (R.isPureReactComponent = !0);
  var L = Array.isArray,
    j = Object.prototype.hasOwnProperty,
    $ = { current: null },
    N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function K(w, A, W) {
    var se,
      re = {},
      ye = null,
      ue = null;
    if (A != null)
      for (se in (A.ref !== void 0 && (ue = A.ref),
      A.key !== void 0 && (ye = "" + A.key),
      A))
        j.call(A, se) && !N.hasOwnProperty(se) && (re[se] = A[se]);
    var ge = arguments.length - 2;
    if (ge === 1) re.children = W;
    else if (1 < ge) {
      for (var fe = Array(ge), Me = 0; Me < ge; Me++)
        fe[Me] = arguments[Me + 2];
      re.children = fe;
    }
    if (w && w.defaultProps)
      for (se in ((ge = w.defaultProps), ge))
        re[se] === void 0 && (re[se] = ge[se]);
    return {
      $$typeof: n,
      type: w,
      key: ye,
      ref: ue,
      props: re,
      _owner: $.current,
    };
  }
  function pe(w, A) {
    return {
      $$typeof: n,
      type: w.type,
      key: A,
      ref: w.ref,
      props: w.props,
      _owner: w._owner,
    };
  }
  function Se(w) {
    return typeof w == "object" && w !== null && w.$$typeof === n;
  }
  function ee(w) {
    var A = { "=": "=0", ":": "=2" };
    return (
      "$" +
      w.replace(/[=:]/g, function (W) {
        return A[W];
      })
    );
  }
  var le = /\/+/g;
  function ve(w, A) {
    return typeof w == "object" && w !== null && w.key != null
      ? ee("" + w.key)
      : A.toString(36);
  }
  function xe(w, A, W, se, re) {
    var ye = typeof w;
    (ye === "undefined" || ye === "boolean") && (w = null);
    var ue = !1;
    if (w === null) ue = !0;
    else
      switch (ye) {
        case "string":
        case "number":
          ue = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case n:
            case t:
              ue = !0;
          }
      }
    if (ue)
      return (
        (ue = w),
        (re = re(ue)),
        (w = se === "" ? "." + ve(ue, 0) : se),
        L(re)
          ? ((W = ""),
            w != null && (W = w.replace(le, "$&/") + "/"),
            xe(re, A, W, "", function (Me) {
              return Me;
            }))
          : re != null &&
            (Se(re) &&
              (re = pe(
                re,
                W +
                  (!re.key || (ue && ue.key === re.key)
                    ? ""
                    : ("" + re.key).replace(le, "$&/") + "/") +
                  w,
              )),
            A.push(re)),
        1
      );
    if (((ue = 0), (se = se === "" ? "." : se + ":"), L(w)))
      for (var ge = 0; ge < w.length; ge++) {
        ye = w[ge];
        var fe = se + ve(ye, ge);
        ue += xe(ye, A, W, fe, re);
      }
    else if (((fe = y(w)), typeof fe == "function"))
      for (w = fe.call(w), ge = 0; !(ye = w.next()).done; )
        (ye = ye.value), (fe = se + ve(ye, ge++)), (ue += xe(ye, A, W, fe, re));
    else if (ye === "object")
      throw (
        ((A = String(w)),
        Error(
          "Objects are not valid as a React child (found: " +
            (A === "[object Object]"
              ? "object with keys {" + Object.keys(w).join(", ") + "}"
              : A) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return ue;
  }
  function me(w, A, W) {
    if (w == null) return w;
    var se = [],
      re = 0;
    return (
      xe(w, se, "", "", function (ye) {
        return A.call(W, ye, re++);
      }),
      se
    );
  }
  function he(w) {
    if (w._status === -1) {
      var A = w._result;
      (A = A()),
        A.then(
          function (W) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 1), (w._result = W));
          },
          function (W) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 2), (w._result = W));
          },
        ),
        w._status === -1 && ((w._status = 0), (w._result = A));
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var we = { current: null },
    q = { transition: null },
    Q = {
      ReactCurrentDispatcher: we,
      ReactCurrentBatchConfig: q,
      ReactCurrentOwner: $,
    };
  return (
    (ke.Children = {
      map: me,
      forEach: function (w, A, W) {
        me(
          w,
          function () {
            A.apply(this, arguments);
          },
          W,
        );
      },
      count: function (w) {
        var A = 0;
        return (
          me(w, function () {
            A++;
          }),
          A
        );
      },
      toArray: function (w) {
        return (
          me(w, function (A) {
            return A;
          }) || []
        );
      },
      only: function (w) {
        if (!Se(w))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return w;
      },
    }),
    (ke.Component = C),
    (ke.Fragment = o),
    (ke.Profiler = i),
    (ke.PureComponent = T),
    (ke.StrictMode = a),
    (ke.Suspense = f),
    (ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q),
    (ke.cloneElement = function (w, A, W) {
      if (w == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            w +
            ".",
        );
      var se = S({}, w.props),
        re = w.key,
        ye = w.ref,
        ue = w._owner;
      if (A != null) {
        if (
          (A.ref !== void 0 && ((ye = A.ref), (ue = $.current)),
          A.key !== void 0 && (re = "" + A.key),
          w.type && w.type.defaultProps)
        )
          var ge = w.type.defaultProps;
        for (fe in A)
          j.call(A, fe) &&
            !N.hasOwnProperty(fe) &&
            (se[fe] = A[fe] === void 0 && ge !== void 0 ? ge[fe] : A[fe]);
      }
      var fe = arguments.length - 2;
      if (fe === 1) se.children = W;
      else if (1 < fe) {
        ge = Array(fe);
        for (var Me = 0; Me < fe; Me++) ge[Me] = arguments[Me + 2];
        se.children = ge;
      }
      return {
        $$typeof: n,
        type: w.type,
        key: re,
        ref: ye,
        props: se,
        _owner: ue,
      };
    }),
    (ke.createContext = function (w) {
      return (
        (w = {
          $$typeof: d,
          _currentValue: w,
          _currentValue2: w,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (w.Provider = { $$typeof: c, _context: w }),
        (w.Consumer = w)
      );
    }),
    (ke.createElement = K),
    (ke.createFactory = function (w) {
      var A = K.bind(null, w);
      return (A.type = w), A;
    }),
    (ke.createRef = function () {
      return { current: null };
    }),
    (ke.forwardRef = function (w) {
      return { $$typeof: h, render: w };
    }),
    (ke.isValidElement = Se),
    (ke.lazy = function (w) {
      return { $$typeof: b, _payload: { _status: -1, _result: w }, _init: he };
    }),
    (ke.memo = function (w, A) {
      return { $$typeof: m, type: w, compare: A === void 0 ? null : A };
    }),
    (ke.startTransition = function (w) {
      var A = q.transition;
      q.transition = {};
      try {
        w();
      } finally {
        q.transition = A;
      }
    }),
    (ke.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (ke.useCallback = function (w, A) {
      return we.current.useCallback(w, A);
    }),
    (ke.useContext = function (w) {
      return we.current.useContext(w);
    }),
    (ke.useDebugValue = function () {}),
    (ke.useDeferredValue = function (w) {
      return we.current.useDeferredValue(w);
    }),
    (ke.useEffect = function (w, A) {
      return we.current.useEffect(w, A);
    }),
    (ke.useId = function () {
      return we.current.useId();
    }),
    (ke.useImperativeHandle = function (w, A, W) {
      return we.current.useImperativeHandle(w, A, W);
    }),
    (ke.useInsertionEffect = function (w, A) {
      return we.current.useInsertionEffect(w, A);
    }),
    (ke.useLayoutEffect = function (w, A) {
      return we.current.useLayoutEffect(w, A);
    }),
    (ke.useMemo = function (w, A) {
      return we.current.useMemo(w, A);
    }),
    (ke.useReducer = function (w, A, W) {
      return we.current.useReducer(w, A, W);
    }),
    (ke.useRef = function (w) {
      return we.current.useRef(w);
    }),
    (ke.useState = function (w) {
      return we.current.useState(w);
    }),
    (ke.useSyncExternalStore = function (w, A, W) {
      return we.current.useSyncExternalStore(w, A, W);
    }),
    (ke.useTransition = function () {
      return we.current.useTransition();
    }),
    (ke.version = "18.2.0"),
    ke
  );
}
var op;
function Nc() {
  return op || ((op = 1), (Ml.exports = jb())), Ml.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ap;
function Ib() {
  if (ap) return Zr;
  ap = 1;
  var n = Nc(),
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
var ip;
function Fb() {
  return ip || ((ip = 1), (Rl.exports = Ib())), Rl.exports;
}
var Re = Fb(),
  V = Nc();
const Ue = Tb(V),
  sp = Eb({ __proto__: null, default: Ue }, [V]);
var ja = {},
  Nl = { exports: {} },
  Pt = {},
  Bl = { exports: {} },
  Ll = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lp;
function Rb() {
  return (
    lp ||
      ((lp = 1),
      (function (n) {
        function t(q, Q) {
          var w = q.length;
          q.push(Q);
          e: for (; 0 < w; ) {
            var A = (w - 1) >>> 1,
              W = q[A];
            if (0 < i(W, Q)) (q[A] = Q), (q[w] = W), (w = A);
            else break e;
          }
        }
        function o(q) {
          return q.length === 0 ? null : q[0];
        }
        function a(q) {
          if (q.length === 0) return null;
          var Q = q[0],
            w = q.pop();
          if (w !== Q) {
            q[0] = w;
            e: for (var A = 0, W = q.length, se = W >>> 1; A < se; ) {
              var re = 2 * (A + 1) - 1,
                ye = q[re],
                ue = re + 1,
                ge = q[ue];
              if (0 > i(ye, w))
                ue < W && 0 > i(ge, ye)
                  ? ((q[A] = ge), (q[ue] = w), (A = ue))
                  : ((q[A] = ye), (q[re] = w), (A = re));
              else if (ue < W && 0 > i(ge, w))
                (q[A] = ge), (q[ue] = w), (A = ue);
              else break e;
            }
          }
          return Q;
        }
        function i(q, Q) {
          var w = q.sortIndex - Q.sortIndex;
          return w !== 0 ? w : q.id - Q.id;
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
          C = typeof setTimeout == "function" ? setTimeout : null,
          P = typeof clearTimeout == "function" ? clearTimeout : null,
          T = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function R(q) {
          for (var Q = o(m); Q !== null; ) {
            if (Q.callback === null) a(m);
            else if (Q.startTime <= q)
              a(m), (Q.sortIndex = Q.expirationTime), t(f, Q);
            else break;
            Q = o(m);
          }
        }
        function L(q) {
          if (((O = !1), R(q), !S))
            if (o(f) !== null) (S = !0), he(j);
            else {
              var Q = o(m);
              Q !== null && we(L, Q.startTime - q);
            }
        }
        function j(q, Q) {
          (S = !1), O && ((O = !1), P(K), (K = -1)), (x = !0);
          var w = y;
          try {
            for (
              R(Q), v = o(f);
              v !== null && (!(v.expirationTime > Q) || (q && !ee()));

            ) {
              var A = v.callback;
              if (typeof A == "function") {
                (v.callback = null), (y = v.priorityLevel);
                var W = A(v.expirationTime <= Q);
                (Q = n.unstable_now()),
                  typeof W == "function"
                    ? (v.callback = W)
                    : v === o(f) && a(f),
                  R(Q);
              } else a(f);
              v = o(f);
            }
            if (v !== null) var se = !0;
            else {
              var re = o(m);
              re !== null && we(L, re.startTime - Q), (se = !1);
            }
            return se;
          } finally {
            (v = null), (y = w), (x = !1);
          }
        }
        var $ = !1,
          N = null,
          K = -1,
          pe = 5,
          Se = -1;
        function ee() {
          return !(n.unstable_now() - Se < pe);
        }
        function le() {
          if (N !== null) {
            var q = n.unstable_now();
            Se = q;
            var Q = !0;
            try {
              Q = N(!0, q);
            } finally {
              Q ? ve() : (($ = !1), (N = null));
            }
          } else $ = !1;
        }
        var ve;
        if (typeof T == "function")
          ve = function () {
            T(le);
          };
        else if (typeof MessageChannel < "u") {
          var xe = new MessageChannel(),
            me = xe.port2;
          (xe.port1.onmessage = le),
            (ve = function () {
              me.postMessage(null);
            });
        } else
          ve = function () {
            C(le, 0);
          };
        function he(q) {
          (N = q), $ || (($ = !0), ve());
        }
        function we(q, Q) {
          K = C(function () {
            q(n.unstable_now());
          }, Q);
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
            S || x || ((S = !0), he(j));
          }),
          (n.unstable_forceFrameRate = function (q) {
            0 > q || 125 < q
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (pe = 0 < q ? Math.floor(1e3 / q) : 5);
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
                var Q = 3;
                break;
              default:
                Q = y;
            }
            var w = y;
            y = Q;
            try {
              return q();
            } finally {
              y = w;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (q, Q) {
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
            var w = y;
            y = q;
            try {
              return Q();
            } finally {
              y = w;
            }
          }),
          (n.unstable_scheduleCallback = function (q, Q, w) {
            var A = n.unstable_now();
            switch (
              (typeof w == "object" && w !== null
                ? ((w = w.delay),
                  (w = typeof w == "number" && 0 < w ? A + w : A))
                : (w = A),
              q)
            ) {
              case 1:
                var W = -1;
                break;
              case 2:
                W = 250;
                break;
              case 5:
                W = 1073741823;
                break;
              case 4:
                W = 1e4;
                break;
              default:
                W = 5e3;
            }
            return (
              (W = w + W),
              (q = {
                id: b++,
                callback: Q,
                priorityLevel: q,
                startTime: w,
                expirationTime: W,
                sortIndex: -1,
              }),
              w > A
                ? ((q.sortIndex = w),
                  t(m, q),
                  o(f) === null &&
                    q === o(m) &&
                    (O ? (P(K), (K = -1)) : (O = !0), we(L, w - A)))
                : ((q.sortIndex = W), t(f, q), S || x || ((S = !0), he(j))),
              q
            );
          }),
          (n.unstable_shouldYield = ee),
          (n.unstable_wrapCallback = function (q) {
            var Q = y;
            return function () {
              var w = y;
              y = Q;
              try {
                return q.apply(this, arguments);
              } finally {
                y = w;
              }
            };
          });
      })(Ll)),
    Ll
  );
}
var cp;
function Mb() {
  return cp || ((cp = 1), (Bl.exports = Rb())), Bl.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var up;
function Nb() {
  if (up) return Pt;
  up = 1;
  var n = Nc(),
    t = Mb();
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
  var C = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      C[e] = new O(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var r = e[0];
      C[r] = new O(r, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        C[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      C[e] = new O(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        C[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      C[e] = new O(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      C[e] = new O(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      C[e] = new O(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      C[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var P = /[\-:]([a-z])/g;
  function T(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var r = e.replace(P, T);
      C[r] = new O(r, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var r = e.replace(P, T);
        C[r] = new O(r, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var r = e.replace(P, T);
      C[r] = new O(r, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      C[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (C.xlinkHref = new O(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      C[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function R(e, r, s, l) {
    var u = C.hasOwnProperty(r) ? C[r] : null;
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
  var L = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    j = Symbol.for("react.element"),
    $ = Symbol.for("react.portal"),
    N = Symbol.for("react.fragment"),
    K = Symbol.for("react.strict_mode"),
    pe = Symbol.for("react.profiler"),
    Se = Symbol.for("react.provider"),
    ee = Symbol.for("react.context"),
    le = Symbol.for("react.forward_ref"),
    ve = Symbol.for("react.suspense"),
    xe = Symbol.for("react.suspense_list"),
    me = Symbol.for("react.memo"),
    he = Symbol.for("react.lazy"),
    we = Symbol.for("react.offscreen"),
    q = Symbol.iterator;
  function Q(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (q && e[q]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var w = Object.assign,
    A;
  function W(e) {
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
  var se = !1;
  function re(e, r) {
    if (!e || se) return "";
    se = !0;
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
          } catch (M) {
            var l = M;
          }
          Reflect.construct(e, [], r);
        } else {
          try {
            r.call();
          } catch (M) {
            l = M;
          }
          e.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (M) {
          l = M;
        }
        e();
      }
    } catch (M) {
      if (M && l && typeof M.stack == "string") {
        for (
          var u = M.stack.split(`
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
                  var k =
                    `
` + u[g].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      k.includes("<anonymous>") &&
                      (k = k.replace("<anonymous>", e.displayName)),
                    k
                  );
                }
              while (1 <= g && 0 <= _);
            break;
          }
      }
    } finally {
      (se = !1), (Error.prepareStackTrace = s);
    }
    return (e = e ? e.displayName || e.name : "") ? W(e) : "";
  }
  function ye(e) {
    switch (e.tag) {
      case 5:
        return W(e.type);
      case 16:
        return W("Lazy");
      case 13:
        return W("Suspense");
      case 19:
        return W("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = re(e.type, !1)), e;
      case 11:
        return (e = re(e.type.render, !1)), e;
      case 1:
        return (e = re(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ue(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case N:
        return "Fragment";
      case $:
        return "Portal";
      case pe:
        return "Profiler";
      case K:
        return "StrictMode";
      case ve:
        return "Suspense";
      case xe:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ee:
          return (e.displayName || "Context") + ".Consumer";
        case Se:
          return (e._context.displayName || "Context") + ".Provider";
        case le:
          var r = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = r.displayName || r.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case me:
          return (
            (r = e.displayName || null), r !== null ? r : ue(e.type) || "Memo"
          );
        case he:
          (r = e._payload), (e = e._init);
          try {
            return ue(e(r));
          } catch {}
      }
    return null;
  }
  function ge(e) {
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
        return ue(r);
      case 8:
        return r === K ? "StrictMode" : "Mode";
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
  function fe(e) {
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
  function Me(e) {
    var r = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (r === "checkbox" || r === "radio")
    );
  }
  function Yn(e) {
    var r = Me(e) ? "checked" : "value",
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
    e._valueTracker || (e._valueTracker = Yn(e));
  }
  function _t(e) {
    if (!e) return !1;
    var r = e._valueTracker;
    if (!r) return !0;
    var s = r.getValue(),
      l = "";
    return (
      e && (l = Me(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== s ? (r.setValue(e), !0) : !1
    );
  }
  function w0(e) {
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
  function k0(e, r) {
    var s = r.checked;
    return w({}, r, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: s ?? e._wrapperState.initialChecked,
    });
  }
  function xo(e, r) {
    var s = r.defaultValue == null ? "" : r.defaultValue,
      l = r.checked != null ? r.checked : r.defaultChecked;
    (s = fe(r.value != null ? r.value : s)),
      (e._wrapperState = {
        initialChecked: l,
        initialValue: s,
        controlled:
          r.type === "checkbox" || r.type === "radio"
            ? r.checked != null
            : r.value != null,
      });
  }
  function su(e, r) {
    (r = r.checked), r != null && R(e, "checked", r, !1);
  }
  function Ai(e, r) {
    su(e, r);
    var s = fe(r.value),
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
      : r.hasOwnProperty("defaultValue") && Di(e, r.type, fe(r.defaultValue)),
      r.checked == null &&
        r.defaultChecked != null &&
        (e.defaultChecked = !!r.defaultChecked);
  }
  function lu(e, r, s) {
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
    (r !== "number" || w0(e.ownerDocument) !== e) &&
      (s == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + s && (e.defaultValue = "" + s));
  }
  var pr = Array.isArray;
  function C0(e, r, s, l) {
    if (((e = e.options), r)) {
      r = {};
      for (var u = 0; u < s.length; u++) r["$" + s[u]] = !0;
      for (s = 0; s < e.length; s++)
        (u = r.hasOwnProperty("$" + e[s].value)),
          e[s].selected !== u && (e[s].selected = u),
          u && l && (e[s].defaultSelected = !0);
    } else {
      for (s = "" + fe(s), r = null, u = 0; u < e.length; u++) {
        if (e[u].value === s) {
          (e[u].selected = !0), l && (e[u].defaultSelected = !0);
          return;
        }
        r !== null || e[u].disabled || (r = e[u]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function zi(e, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(o(91));
    return w({}, r, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function cu(e, r) {
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
    e._wrapperState = { initialValue: fe(s) };
  }
  function uu(e, r) {
    var s = fe(r.value),
      l = fe(r.defaultValue);
    s != null &&
      ((s = "" + s),
      s !== e.value && (e.value = s),
      r.defaultValue == null && e.defaultValue !== s && (e.defaultValue = s)),
      l != null && (e.defaultValue = "" + l);
  }
  function du(e) {
    var r = e.textContent;
    r === e._wrapperState.initialValue &&
      r !== "" &&
      r !== null &&
      (e.value = r);
  }
  function fu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Hi(e, r) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? fu(r)
      : e === "http://www.w3.org/2000/svg" && r === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var So,
    pu = (function (e) {
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
    Eg = ["Webkit", "ms", "Moz", "O"];
  Object.keys(mr).forEach(function (e) {
    Eg.forEach(function (r) {
      (r = r + e.charAt(0).toUpperCase() + e.substring(1)), (mr[r] = mr[e]);
    });
  });
  function hu(e, r, s) {
    return r == null || typeof r == "boolean" || r === ""
      ? ""
      : s || typeof r != "number" || r === 0 || (mr.hasOwnProperty(e) && mr[e])
        ? ("" + r).trim()
        : r + "px";
  }
  function mu(e, r) {
    e = e.style;
    for (var s in r)
      if (r.hasOwnProperty(s)) {
        var l = s.indexOf("--") === 0,
          u = hu(s, r[s], l);
        s === "float" && (s = "cssFloat"), l ? e.setProperty(s, u) : (e[s] = u);
      }
  }
  var Tg = w(
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
      if (Tg[e] && (r.children != null || r.dangerouslySetInnerHTML != null))
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
  function gu(e) {
    if ((e = Lr(e))) {
      if (typeof Wi != "function") throw Error(o(280));
      var r = e.stateNode;
      r && ((r = Go(r)), Wi(e.stateNode, e.type, r));
    }
  }
  function bu(e) {
    P0 ? (O0 ? O0.push(e) : (O0 = [e])) : (P0 = e);
  }
  function vu() {
    if (P0) {
      var e = P0,
        r = O0;
      if (((O0 = P0 = null), gu(e), r)) for (e = 0; e < r.length; e++) gu(r[e]);
    }
  }
  function yu(e, r) {
    return e(r);
  }
  function _u() {}
  var Ki = !1;
  function xu(e, r, s) {
    if (Ki) return e(r, s);
    Ki = !0;
    try {
      return yu(e, r, s);
    } finally {
      (Ki = !1), (P0 !== null || O0 !== null) && (_u(), vu());
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
  function jg(e, r, s, l, u, p, g, _, k) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(s, M);
    } catch (z) {
      this.onError(z);
    }
  }
  var vr = !1,
    wo = null,
    ko = !1,
    Qi = null,
    Ig = {
      onError: function (e) {
        (vr = !0), (wo = e);
      },
    };
  function Fg(e, r, s, l, u, p, g, _, k) {
    (vr = !1), (wo = null), jg.apply(Ig, arguments);
  }
  function Rg(e, r, s, l, u, p, g, _, k) {
    if ((Fg.apply(this, arguments), vr)) {
      if (vr) {
        var M = wo;
        (vr = !1), (wo = null);
      } else throw Error(o(198));
      ko || ((ko = !0), (Qi = M));
    }
  }
  function Zn(e) {
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
  function Su(e) {
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
  function wu(e) {
    if (Zn(e) !== e) throw Error(o(188));
  }
  function Mg(e) {
    var r = e.alternate;
    if (!r) {
      if (((r = Zn(e)), r === null)) throw Error(o(188));
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
          if (p === s) return wu(u), e;
          if (p === l) return wu(u), r;
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
  function ku(e) {
    return (e = Mg(e)), e !== null ? Cu(e) : null;
  }
  function Cu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var r = Cu(e);
      if (r !== null) return r;
      e = e.sibling;
    }
    return null;
  }
  var Pu = t.unstable_scheduleCallback,
    Ou = t.unstable_cancelCallback,
    Ng = t.unstable_shouldYield,
    Bg = t.unstable_requestPaint,
    qe = t.unstable_now,
    Lg = t.unstable_getCurrentPriorityLevel,
    Yi = t.unstable_ImmediatePriority,
    Eu = t.unstable_UserBlockingPriority,
    Co = t.unstable_NormalPriority,
    $g = t.unstable_LowPriority,
    Tu = t.unstable_IdlePriority,
    Po = null,
    tn = null;
  function Ag(e) {
    if (tn && typeof tn.onCommitFiberRoot == "function")
      try {
        tn.onCommitFiberRoot(Po, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var qt = Math.clz32 ? Math.clz32 : Hg,
    Dg = Math.log,
    zg = Math.LN2;
  function Hg(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Dg(e) / zg) | 0)) | 0;
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
        (s = 31 - qt(r)), (u = 1 << s), (l |= e[s]), (r &= ~u);
    return l;
  }
  function Vg(e, r) {
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
  function Ug(e, r) {
    for (
      var s = e.suspendedLanes,
        l = e.pingedLanes,
        u = e.expirationTimes,
        p = e.pendingLanes;
      0 < p;

    ) {
      var g = 31 - qt(p),
        _ = 1 << g,
        k = u[g];
      k === -1
        ? ((_ & s) === 0 || (_ & l) !== 0) && (u[g] = Vg(_, r))
        : k <= r && (e.expiredLanes |= _),
        (p &= ~_);
    }
  }
  function Zi(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ju() {
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
      (r = 31 - qt(r)),
      (e[r] = s);
  }
  function Gg(e, r) {
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
      var u = 31 - qt(s),
        p = 1 << u;
      (r[u] = 0), (l[u] = -1), (e[u] = -1), (s &= ~p);
    }
  }
  function es(e, r) {
    var s = (e.entangledLanes |= r);
    for (e = e.entanglements; s; ) {
      var l = 31 - qt(s),
        u = 1 << l;
      (u & r) | (e[l] & r) && (e[l] |= r), (s &= ~u);
    }
  }
  var Fe = 0;
  function Iu(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Fu,
    ts,
    Ru,
    Mu,
    Nu,
    ns = !1,
    jo = [],
    Pn = null,
    On = null,
    En = null,
    xr = new Map(),
    Sr = new Map(),
    Tn = [],
    qg =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Bu(e, r) {
    switch (e) {
      case "focusin":
      case "focusout":
        Pn = null;
        break;
      case "dragenter":
      case "dragleave":
        On = null;
        break;
      case "mouseover":
      case "mouseout":
        En = null;
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
  function wr(e, r, s, l, u, p) {
    return e === null || e.nativeEvent !== p
      ? ((e = {
          blockedOn: r,
          domEventName: s,
          eventSystemFlags: l,
          nativeEvent: p,
          targetContainers: [u],
        }),
        r !== null && ((r = Lr(r)), r !== null && ts(r)),
        e)
      : ((e.eventSystemFlags |= l),
        (r = e.targetContainers),
        u !== null && r.indexOf(u) === -1 && r.push(u),
        e);
  }
  function Wg(e, r, s, l, u) {
    switch (r) {
      case "focusin":
        return (Pn = wr(Pn, e, r, s, l, u)), !0;
      case "dragenter":
        return (On = wr(On, e, r, s, l, u)), !0;
      case "mouseover":
        return (En = wr(En, e, r, s, l, u)), !0;
      case "pointerover":
        var p = u.pointerId;
        return xr.set(p, wr(xr.get(p) || null, e, r, s, l, u)), !0;
      case "gotpointercapture":
        return (
          (p = u.pointerId), Sr.set(p, wr(Sr.get(p) || null, e, r, s, l, u)), !0
        );
    }
    return !1;
  }
  function Lu(e) {
    var r = Jn(e.target);
    if (r !== null) {
      var s = Zn(r);
      if (s !== null) {
        if (((r = s.tag), r === 13)) {
          if (((r = Su(s)), r !== null)) {
            (e.blockedOn = r),
              Nu(e.priority, function () {
                Ru(s);
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
  function Io(e) {
    if (e.blockedOn !== null) return !1;
    for (var r = e.targetContainers; 0 < r.length; ) {
      var s = os(e.domEventName, e.eventSystemFlags, r[0], e.nativeEvent);
      if (s === null) {
        s = e.nativeEvent;
        var l = new s.constructor(s.type, s);
        (Gi = l), s.target.dispatchEvent(l), (Gi = null);
      } else return (r = Lr(s)), r !== null && ts(r), (e.blockedOn = s), !1;
      r.shift();
    }
    return !0;
  }
  function $u(e, r, s) {
    Io(e) && s.delete(r);
  }
  function Kg() {
    (ns = !1),
      Pn !== null && Io(Pn) && (Pn = null),
      On !== null && Io(On) && (On = null),
      En !== null && Io(En) && (En = null),
      xr.forEach($u),
      Sr.forEach($u);
  }
  function kr(e, r) {
    e.blockedOn === r &&
      ((e.blockedOn = null),
      ns ||
        ((ns = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, Kg)));
  }
  function Cr(e) {
    function r(u) {
      return kr(u, e);
    }
    if (0 < jo.length) {
      kr(jo[0], e);
      for (var s = 1; s < jo.length; s++) {
        var l = jo[s];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (
      Pn !== null && kr(Pn, e),
        On !== null && kr(On, e),
        En !== null && kr(En, e),
        xr.forEach(r),
        Sr.forEach(r),
        s = 0;
      s < Tn.length;
      s++
    )
      (l = Tn[s]), l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < Tn.length && ((s = Tn[0]), s.blockedOn === null); )
      Lu(s), s.blockedOn === null && Tn.shift();
  }
  var E0 = L.ReactCurrentBatchConfig,
    Fo = !0;
  function Xg(e, r, s, l) {
    var u = Fe,
      p = E0.transition;
    E0.transition = null;
    try {
      (Fe = 1), rs(e, r, s, l);
    } finally {
      (Fe = u), (E0.transition = p);
    }
  }
  function Qg(e, r, s, l) {
    var u = Fe,
      p = E0.transition;
    E0.transition = null;
    try {
      (Fe = 4), rs(e, r, s, l);
    } finally {
      (Fe = u), (E0.transition = p);
    }
  }
  function rs(e, r, s, l) {
    if (Fo) {
      var u = os(e, r, s, l);
      if (u === null) xs(e, r, l, Ro, s), Bu(e, l);
      else if (Wg(u, e, r, s, l)) l.stopPropagation();
      else if ((Bu(e, l), r & 4 && -1 < qg.indexOf(e))) {
        for (; u !== null; ) {
          var p = Lr(u);
          if (
            (p !== null && Fu(p),
            (p = os(e, r, s, l)),
            p === null && xs(e, r, l, Ro, s),
            p === u)
          )
            break;
          u = p;
        }
        u !== null && l.stopPropagation();
      } else xs(e, r, l, null, s);
    }
  }
  var Ro = null;
  function os(e, r, s, l) {
    if (((Ro = null), (e = qi(l)), (e = Jn(e)), e !== null))
      if (((r = Zn(e)), r === null)) e = null;
      else if (((s = r.tag), s === 13)) {
        if (((e = Su(r)), e !== null)) return e;
        e = null;
      } else if (s === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        e = null;
      } else r !== e && (e = null);
    return (Ro = e), null;
  }
  function Au(e) {
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
        switch (Lg()) {
          case Yi:
            return 1;
          case Eu:
            return 4;
          case Co:
          case $g:
            return 16;
          case Tu:
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
    Mo = null;
  function Du() {
    if (Mo) return Mo;
    var e,
      r = as,
      s = r.length,
      l,
      u = "value" in jn ? jn.value : jn.textContent,
      p = u.length;
    for (e = 0; e < s && r[e] === u[e]; e++);
    var g = s - e;
    for (l = 1; l <= g && r[s - l] === u[p - l]; l++);
    return (Mo = u.slice(e, 1 < l ? 1 - l : void 0));
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
  function Bo() {
    return !0;
  }
  function zu() {
    return !1;
  }
  function Tt(e) {
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
          ? Bo
          : zu),
        (this.isPropagationStopped = zu),
        this
      );
    }
    return (
      w(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var s = this.nativeEvent;
          s &&
            (s.preventDefault
              ? s.preventDefault()
              : typeof s.returnValue != "unknown" && (s.returnValue = !1),
            (this.isDefaultPrevented = Bo));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
            (this.isPropagationStopped = Bo));
        },
        persist: function () {},
        isPersistent: Bo,
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
    is = Tt(T0),
    Pr = w({}, T0, { view: 0, detail: 0 }),
    Yg = Tt(Pr),
    ss,
    ls,
    Or,
    Lo = w({}, Pr, {
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
    Hu = Tt(Lo),
    Zg = w({}, Lo, { dataTransfer: 0 }),
    Jg = Tt(Zg),
    e1 = w({}, Pr, { relatedTarget: 0 }),
    cs = Tt(e1),
    t1 = w({}, T0, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    n1 = Tt(t1),
    r1 = w({}, T0, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    o1 = Tt(r1),
    a1 = w({}, T0, { data: 0 }),
    Vu = Tt(a1),
    i1 = {
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
    s1 = {
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
    l1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function c1(e) {
    var r = this.nativeEvent;
    return r.getModifierState
      ? r.getModifierState(e)
      : (e = l1[e])
        ? !!r[e]
        : !1;
  }
  function us() {
    return c1;
  }
  var u1 = w({}, Pr, {
      key: function (e) {
        if (e.key) {
          var r = i1[e.key] || e.key;
          if (r !== "Unidentified") return r;
        }
        return e.type === "keypress"
          ? ((e = No(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? s1[e.keyCode] || "Unidentified"
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
    d1 = Tt(u1),
    f1 = w({}, Lo, {
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
    Uu = Tt(f1),
    p1 = w({}, Pr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: us,
    }),
    h1 = Tt(p1),
    m1 = w({}, T0, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    g1 = Tt(m1),
    b1 = w({}, Lo, {
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
    v1 = Tt(b1),
    y1 = [9, 13, 27, 32],
    ds = h && "CompositionEvent" in window,
    Er = null;
  h && "documentMode" in document && (Er = document.documentMode);
  var _1 = h && "TextEvent" in window && !Er,
    Gu = h && (!ds || (Er && 8 < Er && 11 >= Er)),
    qu = " ",
    Wu = !1;
  function Ku(e, r) {
    switch (e) {
      case "keyup":
        return y1.indexOf(r.keyCode) !== -1;
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
  function Xu(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var j0 = !1;
  function x1(e, r) {
    switch (e) {
      case "compositionend":
        return Xu(r);
      case "keypress":
        return r.which !== 32 ? null : ((Wu = !0), qu);
      case "textInput":
        return (e = r.data), e === qu && Wu ? null : e;
      default:
        return null;
    }
  }
  function S1(e, r) {
    if (j0)
      return e === "compositionend" || (!ds && Ku(e, r))
        ? ((e = Du()), (Mo = as = jn = null), (j0 = !1), e)
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
        return Gu && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var w1 = {
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
  function Qu(e) {
    var r = e && e.nodeName && e.nodeName.toLowerCase();
    return r === "input" ? !!w1[e.type] : r === "textarea";
  }
  function Yu(e, r, s, l) {
    bu(l),
      (r = Ho(r, "onChange")),
      0 < r.length &&
        ((s = new is("onChange", "change", null, s, l)),
        e.push({ event: s, listeners: r }));
  }
  var Tr = null,
    jr = null;
  function k1(e) {
    md(e, 0);
  }
  function $o(e) {
    var r = N0(e);
    if (_t(r)) return e;
  }
  function C1(e, r) {
    if (e === "change") return r;
  }
  var Zu = !1;
  if (h) {
    var fs;
    if (h) {
      var ps = "oninput" in document;
      if (!ps) {
        var Ju = document.createElement("div");
        Ju.setAttribute("oninput", "return;"),
          (ps = typeof Ju.oninput == "function");
      }
      fs = ps;
    } else fs = !1;
    Zu = fs && (!document.documentMode || 9 < document.documentMode);
  }
  function ed() {
    Tr && (Tr.detachEvent("onpropertychange", td), (jr = Tr = null));
  }
  function td(e) {
    if (e.propertyName === "value" && $o(jr)) {
      var r = [];
      Yu(r, jr, e, qi(e)), xu(k1, r);
    }
  }
  function P1(e, r, s) {
    e === "focusin"
      ? (ed(), (Tr = r), (jr = s), Tr.attachEvent("onpropertychange", td))
      : e === "focusout" && ed();
  }
  function O1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return $o(jr);
  }
  function E1(e, r) {
    if (e === "click") return $o(r);
  }
  function T1(e, r) {
    if (e === "input" || e === "change") return $o(r);
  }
  function j1(e, r) {
    return (e === r && (e !== 0 || 1 / e === 1 / r)) || (e !== e && r !== r);
  }
  var Wt = typeof Object.is == "function" ? Object.is : j1;
  function Ir(e, r) {
    if (Wt(e, r)) return !0;
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
      if (!f.call(r, u) || !Wt(e[u], r[u])) return !1;
    }
    return !0;
  }
  function nd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function rd(e, r) {
    var s = nd(e);
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
      s = nd(s);
    }
  }
  function od(e, r) {
    return e && r
      ? e === r
        ? !0
        : e && e.nodeType === 3
          ? !1
          : r && r.nodeType === 3
            ? od(e, r.parentNode)
            : "contains" in e
              ? e.contains(r)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(r) & 16)
                : !1
      : !1;
  }
  function ad() {
    for (var e = window, r = w0(); r instanceof e.HTMLIFrameElement; ) {
      try {
        var s = typeof r.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) e = r.contentWindow;
      else break;
      r = w0(e.document);
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
  function I1(e) {
    var r = ad(),
      s = e.focusedElem,
      l = e.selectionRange;
    if (
      r !== s &&
      s &&
      s.ownerDocument &&
      od(s.ownerDocument.documentElement, s)
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
            (u = rd(s, p));
          var g = rd(s, l);
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
  var F1 = h && "documentMode" in document && 11 >= document.documentMode,
    I0 = null,
    ms = null,
    Fr = null,
    gs = !1;
  function id(e, r, s) {
    var l =
      s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    gs ||
      I0 == null ||
      I0 !== w0(l) ||
      ((l = I0),
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
      (Fr && Ir(Fr, l)) ||
        ((Fr = l),
        (l = Ho(ms, "onSelect")),
        0 < l.length &&
          ((r = new is("onSelect", "select", null, r, s)),
          e.push({ event: r, listeners: l }),
          (r.target = I0))));
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
  var F0 = {
      animationend: Ao("Animation", "AnimationEnd"),
      animationiteration: Ao("Animation", "AnimationIteration"),
      animationstart: Ao("Animation", "AnimationStart"),
      transitionend: Ao("Transition", "TransitionEnd"),
    },
    bs = {},
    sd = {};
  h &&
    ((sd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete F0.animationend.animation,
      delete F0.animationiteration.animation,
      delete F0.animationstart.animation),
    "TransitionEvent" in window || delete F0.transitionend.transition);
  function Do(e) {
    if (bs[e]) return bs[e];
    if (!F0[e]) return e;
    var r = F0[e],
      s;
    for (s in r) if (r.hasOwnProperty(s) && s in sd) return (bs[e] = r[s]);
    return e;
  }
  var ld = Do("animationend"),
    cd = Do("animationiteration"),
    ud = Do("animationstart"),
    dd = Do("transitionend"),
    fd = new Map(),
    pd =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function In(e, r) {
    fd.set(e, r), c(r, [e]);
  }
  for (var vs = 0; vs < pd.length; vs++) {
    var ys = pd[vs],
      R1 = ys.toLowerCase(),
      M1 = ys[0].toUpperCase() + ys.slice(1);
    In(R1, "on" + M1);
  }
  In(ld, "onAnimationEnd"),
    In(cd, "onAnimationIteration"),
    In(ud, "onAnimationStart"),
    In("dblclick", "onDoubleClick"),
    In("focusin", "onFocus"),
    In("focusout", "onBlur"),
    In(dd, "onTransitionEnd"),
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
  var Rr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    N1 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Rr),
    );
  function hd(e, r, s) {
    var l = e.type || "unknown-event";
    (e.currentTarget = s), Rg(l, r, void 0, e), (e.currentTarget = null);
  }
  function md(e, r) {
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
              k = _.instance,
              M = _.currentTarget;
            if (((_ = _.listener), k !== p && u.isPropagationStopped()))
              break e;
            hd(u, _, M), (p = k);
          }
        else
          for (g = 0; g < l.length; g++) {
            if (
              ((_ = l[g]),
              (k = _.instance),
              (M = _.currentTarget),
              (_ = _.listener),
              k !== p && u.isPropagationStopped())
            )
              break e;
            hd(u, _, M), (p = k);
          }
      }
    }
    if (ko) throw ((e = Qi), (ko = !1), (Qi = null), e);
  }
  function Le(e, r) {
    var s = r[Os];
    s === void 0 && (s = r[Os] = new Set());
    var l = e + "__bubble";
    s.has(l) || (gd(r, e, 2, !1), s.add(l));
  }
  function _s(e, r, s) {
    var l = 0;
    r && (l |= 4), gd(s, e, l, r);
  }
  var zo = "_reactListening" + Math.random().toString(36).slice(2);
  function Mr(e) {
    if (!e[zo]) {
      (e[zo] = !0),
        a.forEach(function (s) {
          s !== "selectionchange" && (N1.has(s) || _s(s, !1, e), _s(s, !0, e));
        });
      var r = e.nodeType === 9 ? e : e.ownerDocument;
      r === null || r[zo] || ((r[zo] = !0), _s("selectionchange", !1, r));
    }
  }
  function gd(e, r, s, l) {
    switch (Au(r)) {
      case 1:
        var u = Xg;
        break;
      case 4:
        u = Qg;
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
              var k = g.tag;
              if (
                (k === 3 || k === 4) &&
                ((k = g.stateNode.containerInfo),
                k === u || (k.nodeType === 8 && k.parentNode === u))
              )
                return;
              g = g.return;
            }
          for (; _ !== null; ) {
            if (((g = Jn(_)), g === null)) return;
            if (((k = g.tag), k === 5 || k === 6)) {
              l = p = g;
              continue e;
            }
            _ = _.parentNode;
          }
        }
        l = l.return;
      }
    xu(function () {
      var M = p,
        z = qi(s),
        H = [];
      e: {
        var D = fd.get(e);
        if (D !== void 0) {
          var X = is,
            Z = e;
          switch (e) {
            case "keypress":
              if (No(s) === 0) break e;
            case "keydown":
            case "keyup":
              X = d1;
              break;
            case "focusin":
              (Z = "focus"), (X = cs);
              break;
            case "focusout":
              (Z = "blur"), (X = cs);
              break;
            case "beforeblur":
            case "afterblur":
              X = cs;
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
              X = Hu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              X = Jg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              X = h1;
              break;
            case ld:
            case cd:
            case ud:
              X = n1;
              break;
            case dd:
              X = g1;
              break;
            case "scroll":
              X = Yg;
              break;
            case "wheel":
              X = v1;
              break;
            case "copy":
            case "cut":
            case "paste":
              X = o1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              X = Uu;
          }
          var J = (r & 4) !== 0,
            We = !J && e === "scroll",
            I = J ? (D !== null ? D + "Capture" : null) : D;
          J = [];
          for (var E = M, F; E !== null; ) {
            F = E;
            var G = F.stateNode;
            if (
              (F.tag === 5 &&
                G !== null &&
                ((F = G),
                I !== null &&
                  ((G = gr(E, I)), G != null && J.push(Nr(E, G, F)))),
              We)
            )
              break;
            E = E.return;
          }
          0 < J.length &&
            ((D = new X(D, Z, null, s, z)), H.push({ event: D, listeners: J }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (
            ((D = e === "mouseover" || e === "pointerover"),
            (X = e === "mouseout" || e === "pointerout"),
            D &&
              s !== Gi &&
              (Z = s.relatedTarget || s.fromElement) &&
              (Jn(Z) || Z[fn]))
          )
            break e;
          if (
            (X || D) &&
            ((D =
              z.window === z
                ? z
                : (D = z.ownerDocument)
                  ? D.defaultView || D.parentWindow
                  : window),
            X
              ? ((Z = s.relatedTarget || s.toElement),
                (X = M),
                (Z = Z ? Jn(Z) : null),
                Z !== null &&
                  ((We = Zn(Z)), Z !== We || (Z.tag !== 5 && Z.tag !== 6)) &&
                  (Z = null))
              : ((X = null), (Z = M)),
            X !== Z)
          ) {
            if (
              ((J = Hu),
              (G = "onMouseLeave"),
              (I = "onMouseEnter"),
              (E = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((J = Uu),
                (G = "onPointerLeave"),
                (I = "onPointerEnter"),
                (E = "pointer")),
              (We = X == null ? D : N0(X)),
              (F = Z == null ? D : N0(Z)),
              (D = new J(G, E + "leave", X, s, z)),
              (D.target = We),
              (D.relatedTarget = F),
              (G = null),
              Jn(z) === M &&
                ((J = new J(I, E + "enter", Z, s, z)),
                (J.target = F),
                (J.relatedTarget = We),
                (G = J)),
              (We = G),
              X && Z)
            )
              t: {
                for (J = X, I = Z, E = 0, F = J; F; F = R0(F)) E++;
                for (F = 0, G = I; G; G = R0(G)) F++;
                for (; 0 < E - F; ) (J = R0(J)), E--;
                for (; 0 < F - E; ) (I = R0(I)), F--;
                for (; E--; ) {
                  if (J === I || (I !== null && J === I.alternate)) break t;
                  (J = R0(J)), (I = R0(I));
                }
                J = null;
              }
            else J = null;
            X !== null && bd(H, D, X, J, !1),
              Z !== null && We !== null && bd(H, We, Z, J, !0);
          }
        }
        e: {
          if (
            ((D = M ? N0(M) : window),
            (X = D.nodeName && D.nodeName.toLowerCase()),
            X === "select" || (X === "input" && D.type === "file"))
          )
            var te = C1;
          else if (Qu(D))
            if (Zu) te = T1;
            else {
              te = O1;
              var oe = P1;
            }
          else
            (X = D.nodeName) &&
              X.toLowerCase() === "input" &&
              (D.type === "checkbox" || D.type === "radio") &&
              (te = E1);
          if (te && (te = te(e, M))) {
            Yu(H, te, s, z);
            break e;
          }
          oe && oe(e, D, M),
            e === "focusout" &&
              (oe = D._wrapperState) &&
              oe.controlled &&
              D.type === "number" &&
              Di(D, "number", D.value);
        }
        switch (((oe = M ? N0(M) : window), e)) {
          case "focusin":
            (Qu(oe) || oe.contentEditable === "true") &&
              ((I0 = oe), (ms = M), (Fr = null));
            break;
          case "focusout":
            Fr = ms = I0 = null;
            break;
          case "mousedown":
            gs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (gs = !1), id(H, s, z);
            break;
          case "selectionchange":
            if (F1) break;
          case "keydown":
          case "keyup":
            id(H, s, z);
        }
        var ae;
        if (ds)
          e: {
            switch (e) {
              case "compositionstart":
                var de = "onCompositionStart";
                break e;
              case "compositionend":
                de = "onCompositionEnd";
                break e;
              case "compositionupdate":
                de = "onCompositionUpdate";
                break e;
            }
            de = void 0;
          }
        else
          j0
            ? Ku(e, s) && (de = "onCompositionEnd")
            : e === "keydown" &&
              s.keyCode === 229 &&
              (de = "onCompositionStart");
        de &&
          (Gu &&
            s.locale !== "ko" &&
            (j0 || de !== "onCompositionStart"
              ? de === "onCompositionEnd" && j0 && (ae = Du())
              : ((jn = z),
                (as = "value" in jn ? jn.value : jn.textContent),
                (j0 = !0))),
          (oe = Ho(M, de)),
          0 < oe.length &&
            ((de = new Vu(de, e, null, s, z)),
            H.push({ event: de, listeners: oe }),
            ae
              ? (de.data = ae)
              : ((ae = Xu(s)), ae !== null && (de.data = ae)))),
          (ae = _1 ? x1(e, s) : S1(e, s)) &&
            ((M = Ho(M, "onBeforeInput")),
            0 < M.length &&
              ((z = new Vu("onBeforeInput", "beforeinput", null, s, z)),
              H.push({ event: z, listeners: M }),
              (z.data = ae)));
      }
      md(H, r);
    });
  }
  function Nr(e, r, s) {
    return { instance: e, listener: r, currentTarget: s };
  }
  function Ho(e, r) {
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
  function R0(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function bd(e, r, s, l, u) {
    for (var p = r._reactName, g = []; s !== null && s !== l; ) {
      var _ = s,
        k = _.alternate,
        M = _.stateNode;
      if (k !== null && k === l) break;
      _.tag === 5 &&
        M !== null &&
        ((_ = M),
        u
          ? ((k = gr(s, p)), k != null && g.unshift(Nr(s, k, _)))
          : u || ((k = gr(s, p)), k != null && g.push(Nr(s, k, _)))),
        (s = s.return);
    }
    g.length !== 0 && e.push({ event: r, listeners: g });
  }
  var B1 = /\r\n?/g,
    L1 = /\u0000|\uFFFD/g;
  function vd(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        B1,
        `
`,
      )
      .replace(L1, "");
  }
  function Vo(e, r, s) {
    if (((r = vd(r)), vd(e) !== r && s)) throw Error(o(425));
  }
  function Uo() {}
  var Ss = null,
    ws = null;
  function ks(e, r) {
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
  var Cs = typeof setTimeout == "function" ? setTimeout : void 0,
    $1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    yd = typeof Promise == "function" ? Promise : void 0,
    A1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof yd < "u"
          ? function (e) {
              return yd.resolve(null).then(e).catch(D1);
            }
          : Cs;
  function D1(e) {
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
            e.removeChild(u), Cr(r);
            return;
          }
          l--;
        } else (s !== "$" && s !== "$?" && s !== "$!") || l++;
      s = u;
    } while (s);
    Cr(r);
  }
  function Fn(e) {
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
  function _d(e) {
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
  var M0 = Math.random().toString(36).slice(2),
    nn = "__reactFiber$" + M0,
    Br = "__reactProps$" + M0,
    fn = "__reactContainer$" + M0,
    Os = "__reactEvents$" + M0,
    z1 = "__reactListeners$" + M0,
    H1 = "__reactHandles$" + M0;
  function Jn(e) {
    var r = e[nn];
    if (r) return r;
    for (var s = e.parentNode; s; ) {
      if ((r = s[fn] || s[nn])) {
        if (
          ((s = r.alternate),
          r.child !== null || (s !== null && s.child !== null))
        )
          for (e = _d(e); e !== null; ) {
            if ((s = e[nn])) return s;
            e = _d(e);
          }
        return r;
      }
      (e = s), (s = e.parentNode);
    }
    return null;
  }
  function Lr(e) {
    return (
      (e = e[nn] || e[fn]),
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
    return e[Br] || null;
  }
  var Es = [],
    B0 = -1;
  function Rn(e) {
    return { current: e };
  }
  function $e(e) {
    0 > B0 || ((e.current = Es[B0]), (Es[B0] = null), B0--);
  }
  function Ne(e, r) {
    B0++, (Es[B0] = e.current), (e.current = r);
  }
  var Mn = {},
    ct = Rn(Mn),
    xt = Rn(!1),
    e0 = Mn;
  function L0(e, r) {
    var s = e.type.contextTypes;
    if (!s) return Mn;
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
  function St(e) {
    return (e = e.childContextTypes), e != null;
  }
  function qo() {
    $e(xt), $e(ct);
  }
  function xd(e, r, s) {
    if (ct.current !== Mn) throw Error(o(168));
    Ne(ct, r), Ne(xt, s);
  }
  function Sd(e, r, s) {
    var l = e.stateNode;
    if (((r = r.childContextTypes), typeof l.getChildContext != "function"))
      return s;
    l = l.getChildContext();
    for (var u in l) if (!(u in r)) throw Error(o(108, ge(e) || "Unknown", u));
    return w({}, s, l);
  }
  function Wo(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Mn),
      (e0 = ct.current),
      Ne(ct, e),
      Ne(xt, xt.current),
      !0
    );
  }
  function wd(e, r, s) {
    var l = e.stateNode;
    if (!l) throw Error(o(169));
    s
      ? ((e = Sd(e, r, e0)),
        (l.__reactInternalMemoizedMergedChildContext = e),
        $e(xt),
        $e(ct),
        Ne(ct, e))
      : $e(xt),
      Ne(xt, s);
  }
  var pn = null,
    Ko = !1,
    Ts = !1;
  function kd(e) {
    pn === null ? (pn = [e]) : pn.push(e);
  }
  function V1(e) {
    (Ko = !0), kd(e);
  }
  function Nn() {
    if (!Ts && pn !== null) {
      Ts = !0;
      var e = 0,
        r = Fe;
      try {
        var s = pn;
        for (Fe = 1; e < s.length; e++) {
          var l = s[e];
          do l = l(!0);
          while (l !== null);
        }
        (pn = null), (Ko = !1);
      } catch (u) {
        throw (pn !== null && (pn = pn.slice(e + 1)), Pu(Yi, Nn), u);
      } finally {
        (Fe = r), (Ts = !1);
      }
    }
    return null;
  }
  var $0 = [],
    A0 = 0,
    Xo = null,
    Qo = 0,
    Lt = [],
    $t = 0,
    t0 = null,
    hn = 1,
    mn = "";
  function n0(e, r) {
    ($0[A0++] = Qo), ($0[A0++] = Xo), (Xo = e), (Qo = r);
  }
  function Cd(e, r, s) {
    (Lt[$t++] = hn), (Lt[$t++] = mn), (Lt[$t++] = t0), (t0 = e);
    var l = hn;
    e = mn;
    var u = 32 - qt(l) - 1;
    (l &= ~(1 << u)), (s += 1);
    var p = 32 - qt(r) + u;
    if (30 < p) {
      var g = u - (u % 5);
      (p = (l & ((1 << g) - 1)).toString(32)),
        (l >>= g),
        (u -= g),
        (hn = (1 << (32 - qt(r) + u)) | (s << u) | l),
        (mn = p + e);
    } else (hn = (1 << p) | (s << u) | l), (mn = e);
  }
  function js(e) {
    e.return !== null && (n0(e, 1), Cd(e, 1, 0));
  }
  function Is(e) {
    for (; e === Xo; )
      (Xo = $0[--A0]), ($0[A0] = null), (Qo = $0[--A0]), ($0[A0] = null);
    for (; e === t0; )
      (t0 = Lt[--$t]),
        (Lt[$t] = null),
        (mn = Lt[--$t]),
        (Lt[$t] = null),
        (hn = Lt[--$t]),
        (Lt[$t] = null);
  }
  var jt = null,
    It = null,
    De = !1,
    Kt = null;
  function Pd(e, r) {
    var s = Ht(5, null, null, 0);
    (s.elementType = "DELETED"),
      (s.stateNode = r),
      (s.return = e),
      (r = e.deletions),
      r === null ? ((e.deletions = [s]), (e.flags |= 16)) : r.push(s);
  }
  function Od(e, r) {
    switch (e.tag) {
      case 5:
        var s = e.type;
        return (
          (r =
            r.nodeType !== 1 || s.toLowerCase() !== r.nodeName.toLowerCase()
              ? null
              : r),
          r !== null
            ? ((e.stateNode = r), (jt = e), (It = Fn(r.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (r = e.pendingProps === "" || r.nodeType !== 3 ? null : r),
          r !== null ? ((e.stateNode = r), (jt = e), (It = null), !0) : !1
        );
      case 13:
        return (
          (r = r.nodeType !== 8 ? null : r),
          r !== null
            ? ((s = t0 !== null ? { id: hn, overflow: mn } : null),
              (e.memoizedState = {
                dehydrated: r,
                treeContext: s,
                retryLane: 1073741824,
              }),
              (s = Ht(18, null, null, 0)),
              (s.stateNode = r),
              (s.return = e),
              (e.child = s),
              (jt = e),
              (It = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Fs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Rs(e) {
    if (De) {
      var r = It;
      if (r) {
        var s = r;
        if (!Od(e, r)) {
          if (Fs(e)) throw Error(o(418));
          r = Fn(s.nextSibling);
          var l = jt;
          r && Od(e, r)
            ? Pd(l, s)
            : ((e.flags = (e.flags & -4097) | 2), (De = !1), (jt = e));
        }
      } else {
        if (Fs(e)) throw Error(o(418));
        (e.flags = (e.flags & -4097) | 2), (De = !1), (jt = e);
      }
    }
  }
  function Ed(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    jt = e;
  }
  function Yo(e) {
    if (e !== jt) return !1;
    if (!De) return Ed(e), (De = !0), !1;
    var r;
    if (
      ((r = e.tag !== 3) &&
        !(r = e.tag !== 5) &&
        ((r = e.type),
        (r = r !== "head" && r !== "body" && !ks(e.type, e.memoizedProps))),
      r && (r = It))
    ) {
      if (Fs(e)) throw (Td(), Error(o(418)));
      for (; r; ) Pd(e, r), (r = Fn(r.nextSibling));
    }
    if ((Ed(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, r = 0; e; ) {
          if (e.nodeType === 8) {
            var s = e.data;
            if (s === "/$") {
              if (r === 0) {
                It = Fn(e.nextSibling);
                break e;
              }
              r--;
            } else (s !== "$" && s !== "$!" && s !== "$?") || r++;
          }
          e = e.nextSibling;
        }
        It = null;
      }
    } else It = jt ? Fn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Td() {
    for (var e = It; e; ) e = Fn(e.nextSibling);
  }
  function D0() {
    (It = jt = null), (De = !1);
  }
  function Ms(e) {
    Kt === null ? (Kt = [e]) : Kt.push(e);
  }
  var U1 = L.ReactCurrentBatchConfig;
  function Xt(e, r) {
    if (e && e.defaultProps) {
      (r = w({}, r)), (e = e.defaultProps);
      for (var s in e) r[s] === void 0 && (r[s] = e[s]);
      return r;
    }
    return r;
  }
  var Zo = Rn(null),
    Jo = null,
    z0 = null,
    Ns = null;
  function Bs() {
    Ns = z0 = Jo = null;
  }
  function Ls(e) {
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
  function H0(e, r) {
    (Jo = e),
      (Ns = z0 = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & r) !== 0 && (wt = !0), (e.firstContext = null));
  }
  function At(e) {
    var r = e._currentValue;
    if (Ns !== e)
      if (((e = { context: e, memoizedValue: r, next: null }), z0 === null)) {
        if (Jo === null) throw Error(o(308));
        (z0 = e), (Jo.dependencies = { lanes: 0, firstContext: e });
      } else z0 = z0.next = e;
    return r;
  }
  var r0 = null;
  function As(e) {
    r0 === null ? (r0 = [e]) : r0.push(e);
  }
  function jd(e, r, s, l) {
    var u = r.interleaved;
    return (
      u === null ? ((s.next = s), As(r)) : ((s.next = u.next), (u.next = s)),
      (r.interleaved = s),
      gn(e, l)
    );
  }
  function gn(e, r) {
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
  function Id(e, r) {
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
  function bn(e, r) {
    return {
      eventTime: e,
      lane: r,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Ln(e, r, s) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Ce & 2) !== 0)) {
      var u = l.pending;
      return (
        u === null ? (r.next = r) : ((r.next = u.next), (u.next = r)),
        (l.pending = r),
        gn(e, s)
      );
    }
    return (
      (u = l.interleaved),
      u === null ? ((r.next = r), As(l)) : ((r.next = u.next), (u.next = r)),
      (l.interleaved = r),
      gn(e, s)
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
  function Fd(e, r) {
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
      var k = _,
        M = k.next;
      (k.next = null), g === null ? (p = M) : (g.next = M), (g = k);
      var z = e.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (_ = z.lastBaseUpdate),
        _ !== g &&
          (_ === null ? (z.firstBaseUpdate = M) : (_.next = M),
          (z.lastBaseUpdate = k)));
    }
    if (p !== null) {
      var H = u.baseState;
      (g = 0), (z = M = k = null), (_ = p);
      do {
        var D = _.lane,
          X = _.eventTime;
        if ((l & D) === D) {
          z !== null &&
            (z = z.next =
              {
                eventTime: X,
                lane: 0,
                tag: _.tag,
                payload: _.payload,
                callback: _.callback,
                next: null,
              });
          e: {
            var Z = e,
              J = _;
            switch (((D = r), (X = s), J.tag)) {
              case 1:
                if (((Z = J.payload), typeof Z == "function")) {
                  H = Z.call(X, H, D);
                  break e;
                }
                H = Z;
                break e;
              case 3:
                Z.flags = (Z.flags & -65537) | 128;
              case 0:
                if (
                  ((Z = J.payload),
                  (D = typeof Z == "function" ? Z.call(X, H, D) : Z),
                  D == null)
                )
                  break e;
                H = w({}, H, D);
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
          (X = {
            eventTime: X,
            lane: D,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null,
          }),
            z === null ? ((M = z = X), (k = H)) : (z = z.next = X),
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
        (z === null && (k = H),
        (u.baseState = k),
        (u.firstBaseUpdate = M),
        (u.lastBaseUpdate = z),
        (r = u.shared.interleaved),
        r !== null)
      ) {
        u = r;
        do (g |= u.lane), (u = u.next);
        while (u !== r);
      } else p === null && (u.shared.lanes = 0);
      (i0 |= g), (e.lanes = g), (e.memoizedState = H);
    }
  }
  function Rd(e, r, s) {
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
  var Md = new n.Component().refs;
  function zs(e, r, s, l) {
    (r = e.memoizedState),
      (s = s(l, r)),
      (s = s == null ? r : w({}, r, s)),
      (e.memoizedState = s),
      e.lanes === 0 && (e.updateQueue.baseState = s);
  }
  var na = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Zn(e) === e : !1;
    },
    enqueueSetState: function (e, r, s) {
      e = e._reactInternals;
      var l = vt(),
        u = zn(e),
        p = bn(l, u);
      (p.payload = r),
        s != null && (p.callback = s),
        (r = Ln(e, p, u)),
        r !== null && (Zt(r, e, u, l), ea(r, e, u));
    },
    enqueueReplaceState: function (e, r, s) {
      e = e._reactInternals;
      var l = vt(),
        u = zn(e),
        p = bn(l, u);
      (p.tag = 1),
        (p.payload = r),
        s != null && (p.callback = s),
        (r = Ln(e, p, u)),
        r !== null && (Zt(r, e, u, l), ea(r, e, u));
    },
    enqueueForceUpdate: function (e, r) {
      e = e._reactInternals;
      var s = vt(),
        l = zn(e),
        u = bn(s, l);
      (u.tag = 2),
        r != null && (u.callback = r),
        (r = Ln(e, u, l)),
        r !== null && (Zt(r, e, l, s), ea(r, e, l));
    },
  };
  function Nd(e, r, s, l, u, p, g) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, p, g)
        : r.prototype && r.prototype.isPureReactComponent
          ? !Ir(s, l) || !Ir(u, p)
          : !0
    );
  }
  function Bd(e, r, s) {
    var l = !1,
      u = Mn,
      p = r.contextType;
    return (
      typeof p == "object" && p !== null
        ? (p = At(p))
        : ((u = St(r) ? e0 : ct.current),
          (l = r.contextTypes),
          (p = (l = l != null) ? L0(e, u) : Mn)),
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
  function Hs(e, r, s, l) {
    var u = e.stateNode;
    (u.props = s), (u.state = e.memoizedState), (u.refs = Md), Ds(e);
    var p = r.contextType;
    typeof p == "object" && p !== null
      ? (u.context = At(p))
      : ((p = St(r) ? e0 : ct.current), (u.context = L0(e, p))),
      (u.state = e.memoizedState),
      (p = r.getDerivedStateFromProps),
      typeof p == "function" && (zs(e, r, p, s), (u.state = e.memoizedState)),
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
              _ === Md && (_ = u.refs = {}),
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
  function $d(e) {
    var r = e._init;
    return r(e._payload);
  }
  function Ad(e) {
    function r(I, E) {
      if (e) {
        var F = I.deletions;
        F === null ? ((I.deletions = [E]), (I.flags |= 16)) : F.push(E);
      }
    }
    function s(I, E) {
      if (!e) return null;
      for (; E !== null; ) r(I, E), (E = E.sibling);
      return null;
    }
    function l(I, E) {
      for (I = new Map(); E !== null; )
        E.key !== null ? I.set(E.key, E) : I.set(E.index, E), (E = E.sibling);
      return I;
    }
    function u(I, E) {
      return (I = Vn(I, E)), (I.index = 0), (I.sibling = null), I;
    }
    function p(I, E, F) {
      return (
        (I.index = F),
        e
          ? ((F = I.alternate),
            F !== null
              ? ((F = F.index), F < E ? ((I.flags |= 2), E) : F)
              : ((I.flags |= 2), E))
          : ((I.flags |= 1048576), E)
      );
    }
    function g(I) {
      return e && I.alternate === null && (I.flags |= 2), I;
    }
    function _(I, E, F, G) {
      return E === null || E.tag !== 6
        ? ((E = Cl(F, I.mode, G)), (E.return = I), E)
        : ((E = u(E, F)), (E.return = I), E);
    }
    function k(I, E, F, G) {
      var te = F.type;
      return te === N
        ? z(I, E, F.props.children, G, F.key)
        : E !== null &&
            (E.elementType === te ||
              (typeof te == "object" &&
                te !== null &&
                te.$$typeof === he &&
                $d(te) === E.type))
          ? ((G = u(E, F.props)), (G.ref = $r(I, E, F)), (G.return = I), G)
          : ((G = Sa(F.type, F.key, F.props, null, I.mode, G)),
            (G.ref = $r(I, E, F)),
            (G.return = I),
            G);
    }
    function M(I, E, F, G) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== F.containerInfo ||
        E.stateNode.implementation !== F.implementation
        ? ((E = Pl(F, I.mode, G)), (E.return = I), E)
        : ((E = u(E, F.children || [])), (E.return = I), E);
    }
    function z(I, E, F, G, te) {
      return E === null || E.tag !== 7
        ? ((E = u0(F, I.mode, G, te)), (E.return = I), E)
        : ((E = u(E, F)), (E.return = I), E);
    }
    function H(I, E, F) {
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return (E = Cl("" + E, I.mode, F)), (E.return = I), E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case j:
            return (
              (F = Sa(E.type, E.key, E.props, null, I.mode, F)),
              (F.ref = $r(I, null, E)),
              (F.return = I),
              F
            );
          case $:
            return (E = Pl(E, I.mode, F)), (E.return = I), E;
          case he:
            var G = E._init;
            return H(I, G(E._payload), F);
        }
        if (pr(E) || Q(E))
          return (E = u0(E, I.mode, F, null)), (E.return = I), E;
        ra(I, E);
      }
      return null;
    }
    function D(I, E, F, G) {
      var te = E !== null ? E.key : null;
      if ((typeof F == "string" && F !== "") || typeof F == "number")
        return te !== null ? null : _(I, E, "" + F, G);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case j:
            return F.key === te ? k(I, E, F, G) : null;
          case $:
            return F.key === te ? M(I, E, F, G) : null;
          case he:
            return (te = F._init), D(I, E, te(F._payload), G);
        }
        if (pr(F) || Q(F)) return te !== null ? null : z(I, E, F, G, null);
        ra(I, F);
      }
      return null;
    }
    function X(I, E, F, G, te) {
      if ((typeof G == "string" && G !== "") || typeof G == "number")
        return (I = I.get(F) || null), _(E, I, "" + G, te);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case j:
            return (
              (I = I.get(G.key === null ? F : G.key) || null), k(E, I, G, te)
            );
          case $:
            return (
              (I = I.get(G.key === null ? F : G.key) || null), M(E, I, G, te)
            );
          case he:
            var oe = G._init;
            return X(I, E, F, oe(G._payload), te);
        }
        if (pr(G) || Q(G)) return (I = I.get(F) || null), z(E, I, G, te, null);
        ra(E, G);
      }
      return null;
    }
    function Z(I, E, F, G) {
      for (
        var te = null, oe = null, ae = E, de = (E = 0), rt = null;
        ae !== null && de < F.length;
        de++
      ) {
        ae.index > de ? ((rt = ae), (ae = null)) : (rt = ae.sibling);
        var Pe = D(I, ae, F[de], G);
        if (Pe === null) {
          ae === null && (ae = rt);
          break;
        }
        e && ae && Pe.alternate === null && r(I, ae),
          (E = p(Pe, E, de)),
          oe === null ? (te = Pe) : (oe.sibling = Pe),
          (oe = Pe),
          (ae = rt);
      }
      if (de === F.length) return s(I, ae), De && n0(I, de), te;
      if (ae === null) {
        for (; de < F.length; de++)
          (ae = H(I, F[de], G)),
            ae !== null &&
              ((E = p(ae, E, de)),
              oe === null ? (te = ae) : (oe.sibling = ae),
              (oe = ae));
        return De && n0(I, de), te;
      }
      for (ae = l(I, ae); de < F.length; de++)
        (rt = X(ae, I, de, F[de], G)),
          rt !== null &&
            (e &&
              rt.alternate !== null &&
              ae.delete(rt.key === null ? de : rt.key),
            (E = p(rt, E, de)),
            oe === null ? (te = rt) : (oe.sibling = rt),
            (oe = rt));
      return (
        e &&
          ae.forEach(function (Un) {
            return r(I, Un);
          }),
        De && n0(I, de),
        te
      );
    }
    function J(I, E, F, G) {
      var te = Q(F);
      if (typeof te != "function") throw Error(o(150));
      if (((F = te.call(F)), F == null)) throw Error(o(151));
      for (
        var oe = (te = null), ae = E, de = (E = 0), rt = null, Pe = F.next();
        ae !== null && !Pe.done;
        de++, Pe = F.next()
      ) {
        ae.index > de ? ((rt = ae), (ae = null)) : (rt = ae.sibling);
        var Un = D(I, ae, Pe.value, G);
        if (Un === null) {
          ae === null && (ae = rt);
          break;
        }
        e && ae && Un.alternate === null && r(I, ae),
          (E = p(Un, E, de)),
          oe === null ? (te = Un) : (oe.sibling = Un),
          (oe = Un),
          (ae = rt);
      }
      if (Pe.done) return s(I, ae), De && n0(I, de), te;
      if (ae === null) {
        for (; !Pe.done; de++, Pe = F.next())
          (Pe = H(I, Pe.value, G)),
            Pe !== null &&
              ((E = p(Pe, E, de)),
              oe === null ? (te = Pe) : (oe.sibling = Pe),
              (oe = Pe));
        return De && n0(I, de), te;
      }
      for (ae = l(I, ae); !Pe.done; de++, Pe = F.next())
        (Pe = X(ae, I, de, Pe.value, G)),
          Pe !== null &&
            (e &&
              Pe.alternate !== null &&
              ae.delete(Pe.key === null ? de : Pe.key),
            (E = p(Pe, E, de)),
            oe === null ? (te = Pe) : (oe.sibling = Pe),
            (oe = Pe));
      return (
        e &&
          ae.forEach(function (wb) {
            return r(I, wb);
          }),
        De && n0(I, de),
        te
      );
    }
    function We(I, E, F, G) {
      if (
        (typeof F == "object" &&
          F !== null &&
          F.type === N &&
          F.key === null &&
          (F = F.props.children),
        typeof F == "object" && F !== null)
      ) {
        switch (F.$$typeof) {
          case j:
            e: {
              for (var te = F.key, oe = E; oe !== null; ) {
                if (oe.key === te) {
                  if (((te = F.type), te === N)) {
                    if (oe.tag === 7) {
                      s(I, oe.sibling),
                        (E = u(oe, F.props.children)),
                        (E.return = I),
                        (I = E);
                      break e;
                    }
                  } else if (
                    oe.elementType === te ||
                    (typeof te == "object" &&
                      te !== null &&
                      te.$$typeof === he &&
                      $d(te) === oe.type)
                  ) {
                    s(I, oe.sibling),
                      (E = u(oe, F.props)),
                      (E.ref = $r(I, oe, F)),
                      (E.return = I),
                      (I = E);
                    break e;
                  }
                  s(I, oe);
                  break;
                } else r(I, oe);
                oe = oe.sibling;
              }
              F.type === N
                ? ((E = u0(F.props.children, I.mode, G, F.key)),
                  (E.return = I),
                  (I = E))
                : ((G = Sa(F.type, F.key, F.props, null, I.mode, G)),
                  (G.ref = $r(I, E, F)),
                  (G.return = I),
                  (I = G));
            }
            return g(I);
          case $:
            e: {
              for (oe = F.key; E !== null; ) {
                if (E.key === oe)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === F.containerInfo &&
                    E.stateNode.implementation === F.implementation
                  ) {
                    s(I, E.sibling),
                      (E = u(E, F.children || [])),
                      (E.return = I),
                      (I = E);
                    break e;
                  } else {
                    s(I, E);
                    break;
                  }
                else r(I, E);
                E = E.sibling;
              }
              (E = Pl(F, I.mode, G)), (E.return = I), (I = E);
            }
            return g(I);
          case he:
            return (oe = F._init), We(I, E, oe(F._payload), G);
        }
        if (pr(F)) return Z(I, E, F, G);
        if (Q(F)) return J(I, E, F, G);
        ra(I, F);
      }
      return (typeof F == "string" && F !== "") || typeof F == "number"
        ? ((F = "" + F),
          E !== null && E.tag === 6
            ? (s(I, E.sibling), (E = u(E, F)), (E.return = I), (I = E))
            : (s(I, E), (E = Cl(F, I.mode, G)), (E.return = I), (I = E)),
          g(I))
        : s(I, E);
    }
    return We;
  }
  var V0 = Ad(!0),
    Dd = Ad(!1),
    Ar = {},
    rn = Rn(Ar),
    Dr = Rn(Ar),
    zr = Rn(Ar);
  function o0(e) {
    if (e === Ar) throw Error(o(174));
    return e;
  }
  function Vs(e, r) {
    switch ((Ne(zr, r), Ne(Dr, e), Ne(rn, Ar), (e = r.nodeType), e)) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Hi(null, "");
        break;
      default:
        (e = e === 8 ? r.parentNode : r),
          (r = e.namespaceURI || null),
          (e = e.tagName),
          (r = Hi(r, e));
    }
    $e(rn), Ne(rn, r);
  }
  function U0() {
    $e(rn), $e(Dr), $e(zr);
  }
  function zd(e) {
    o0(zr.current);
    var r = o0(rn.current),
      s = Hi(r, e.type);
    r !== s && (Ne(Dr, e), Ne(rn, s));
  }
  function Us(e) {
    Dr.current === e && ($e(rn), $e(Dr));
  }
  var ze = Rn(0);
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
  var aa = L.ReactCurrentDispatcher,
    Ws = L.ReactCurrentBatchConfig,
    a0 = 0,
    He = null,
    Ze = null,
    tt = null,
    ia = !1,
    Hr = !1,
    Vr = 0,
    G1 = 0;
  function ut() {
    throw Error(o(321));
  }
  function Ks(e, r) {
    if (r === null) return !1;
    for (var s = 0; s < r.length && s < e.length; s++)
      if (!Wt(e[s], r[s])) return !1;
    return !0;
  }
  function Xs(e, r, s, l, u, p) {
    if (
      ((a0 = p),
      (He = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (aa.current = e === null || e.memoizedState === null ? X1 : Q1),
      (e = s(l, u)),
      Hr)
    ) {
      p = 0;
      do {
        if (((Hr = !1), (Vr = 0), 25 <= p)) throw Error(o(301));
        (p += 1),
          (tt = Ze = null),
          (r.updateQueue = null),
          (aa.current = Y1),
          (e = s(l, u));
      } while (Hr);
    }
    if (
      ((aa.current = ca),
      (r = Ze !== null && Ze.next !== null),
      (a0 = 0),
      (tt = Ze = He = null),
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
  function on() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return tt === null ? (He.memoizedState = tt = e) : (tt = tt.next = e), tt;
  }
  function Dt() {
    if (Ze === null) {
      var e = He.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ze.next;
    var r = tt === null ? He.memoizedState : tt.next;
    if (r !== null) (tt = r), (Ze = e);
    else {
      if (e === null) throw Error(o(310));
      (Ze = e),
        (e = {
          memoizedState: Ze.memoizedState,
          baseState: Ze.baseState,
          baseQueue: Ze.baseQueue,
          queue: Ze.queue,
          next: null,
        }),
        tt === null ? (He.memoizedState = tt = e) : (tt = tt.next = e);
    }
    return tt;
  }
  function Ur(e, r) {
    return typeof r == "function" ? r(e) : r;
  }
  function Ys(e) {
    var r = Dt(),
      s = r.queue;
    if (s === null) throw Error(o(311));
    s.lastRenderedReducer = e;
    var l = Ze,
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
        k = null,
        M = p;
      do {
        var z = M.lane;
        if ((a0 & z) === z)
          k !== null &&
            (k = k.next =
              {
                lane: 0,
                action: M.action,
                hasEagerState: M.hasEagerState,
                eagerState: M.eagerState,
                next: null,
              }),
            (l = M.hasEagerState ? M.eagerState : e(l, M.action));
        else {
          var H = {
            lane: z,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null,
          };
          k === null ? ((_ = k = H), (g = l)) : (k = k.next = H),
            (He.lanes |= z),
            (i0 |= z);
        }
        M = M.next;
      } while (M !== null && M !== p);
      k === null ? (g = l) : (k.next = _),
        Wt(l, r.memoizedState) || (wt = !0),
        (r.memoizedState = l),
        (r.baseState = g),
        (r.baseQueue = k),
        (s.lastRenderedState = l);
    }
    if (((e = s.interleaved), e !== null)) {
      u = e;
      do (p = u.lane), (He.lanes |= p), (i0 |= p), (u = u.next);
      while (u !== e);
    } else u === null && (s.lanes = 0);
    return [r.memoizedState, s.dispatch];
  }
  function Zs(e) {
    var r = Dt(),
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
      Wt(p, r.memoizedState) || (wt = !0),
        (r.memoizedState = p),
        r.baseQueue === null && (r.baseState = p),
        (s.lastRenderedState = p);
    }
    return [p, l];
  }
  function Hd() {}
  function Vd(e, r) {
    var s = He,
      l = Dt(),
      u = r(),
      p = !Wt(l.memoizedState, u);
    if (
      (p && ((l.memoizedState = u), (wt = !0)),
      (l = l.queue),
      Js(qd.bind(null, s, l, e), [e]),
      l.getSnapshot !== r || p || (tt !== null && tt.memoizedState.tag & 1))
    ) {
      if (
        ((s.flags |= 2048),
        Gr(9, Gd.bind(null, s, l, u, r), void 0, null),
        nt === null)
      )
        throw Error(o(349));
      (a0 & 30) !== 0 || Ud(s, r, u);
    }
    return u;
  }
  function Ud(e, r, s) {
    (e.flags |= 16384),
      (e = { getSnapshot: r, value: s }),
      (r = He.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (He.updateQueue = r),
          (r.stores = [e]))
        : ((s = r.stores), s === null ? (r.stores = [e]) : s.push(e));
  }
  function Gd(e, r, s, l) {
    (r.value = s), (r.getSnapshot = l), Wd(r) && Kd(e);
  }
  function qd(e, r, s) {
    return s(function () {
      Wd(r) && Kd(e);
    });
  }
  function Wd(e) {
    var r = e.getSnapshot;
    e = e.value;
    try {
      var s = r();
      return !Wt(e, s);
    } catch {
      return !0;
    }
  }
  function Kd(e) {
    var r = gn(e, 1);
    r !== null && Zt(r, e, 1, -1);
  }
  function Xd(e) {
    var r = on();
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
      (e = e.dispatch = K1.bind(null, He, e)),
      [r.memoizedState, e]
    );
  }
  function Gr(e, r, s, l) {
    return (
      (e = { tag: e, create: r, destroy: s, deps: l, next: null }),
      (r = He.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (He.updateQueue = r),
          (r.lastEffect = e.next = e))
        : ((s = r.lastEffect),
          s === null
            ? (r.lastEffect = e.next = e)
            : ((l = s.next), (s.next = e), (e.next = l), (r.lastEffect = e))),
      e
    );
  }
  function Qd() {
    return Dt().memoizedState;
  }
  function sa(e, r, s, l) {
    var u = on();
    (He.flags |= e),
      (u.memoizedState = Gr(1 | r, s, void 0, l === void 0 ? null : l));
  }
  function la(e, r, s, l) {
    var u = Dt();
    l = l === void 0 ? null : l;
    var p = void 0;
    if (Ze !== null) {
      var g = Ze.memoizedState;
      if (((p = g.destroy), l !== null && Ks(l, g.deps))) {
        u.memoizedState = Gr(r, s, p, l);
        return;
      }
    }
    (He.flags |= e), (u.memoizedState = Gr(1 | r, s, p, l));
  }
  function Yd(e, r) {
    return sa(8390656, 8, e, r);
  }
  function Js(e, r) {
    return la(2048, 8, e, r);
  }
  function Zd(e, r) {
    return la(4, 2, e, r);
  }
  function Jd(e, r) {
    return la(4, 4, e, r);
  }
  function ef(e, r) {
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
  function tf(e, r, s) {
    return (
      (s = s != null ? s.concat([e]) : null), la(4, 4, ef.bind(null, r, e), s)
    );
  }
  function el() {}
  function nf(e, r) {
    var s = Dt();
    r = r === void 0 ? null : r;
    var l = s.memoizedState;
    return l !== null && r !== null && Ks(r, l[1])
      ? l[0]
      : ((s.memoizedState = [e, r]), e);
  }
  function rf(e, r) {
    var s = Dt();
    r = r === void 0 ? null : r;
    var l = s.memoizedState;
    return l !== null && r !== null && Ks(r, l[1])
      ? l[0]
      : ((e = e()), (s.memoizedState = [e, r]), e);
  }
  function of(e, r, s) {
    return (a0 & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (wt = !0)), (e.memoizedState = s))
      : (Wt(s, r) ||
          ((s = ju()), (He.lanes |= s), (i0 |= s), (e.baseState = !0)),
        r);
  }
  function q1(e, r) {
    var s = Fe;
    (Fe = s !== 0 && 4 > s ? s : 4), e(!0);
    var l = Ws.transition;
    Ws.transition = {};
    try {
      e(!1), r();
    } finally {
      (Fe = s), (Ws.transition = l);
    }
  }
  function af() {
    return Dt().memoizedState;
  }
  function W1(e, r, s) {
    var l = zn(e);
    if (
      ((s = {
        lane: l,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      sf(e))
    )
      lf(r, s);
    else if (((s = jd(e, r, s, l)), s !== null)) {
      var u = vt();
      Zt(s, e, l, u), cf(s, r, l);
    }
  }
  function K1(e, r, s) {
    var l = zn(e),
      u = {
        lane: l,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (sf(e)) lf(r, u);
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
          if (((u.hasEagerState = !0), (u.eagerState = _), Wt(_, g))) {
            var k = r.interleaved;
            k === null
              ? ((u.next = u), As(r))
              : ((u.next = k.next), (k.next = u)),
              (r.interleaved = u);
            return;
          }
        } catch {
        } finally {
        }
      (s = jd(e, r, u, l)),
        s !== null && ((u = vt()), Zt(s, e, l, u), cf(s, r, l));
    }
  }
  function sf(e) {
    var r = e.alternate;
    return e === He || (r !== null && r === He);
  }
  function lf(e, r) {
    Hr = ia = !0;
    var s = e.pending;
    s === null ? (r.next = r) : ((r.next = s.next), (s.next = r)),
      (e.pending = r);
  }
  function cf(e, r, s) {
    if ((s & 4194240) !== 0) {
      var l = r.lanes;
      (l &= e.pendingLanes), (s |= l), (r.lanes = s), es(e, s);
    }
  }
  var ca = {
      readContext: At,
      useCallback: ut,
      useContext: ut,
      useEffect: ut,
      useImperativeHandle: ut,
      useInsertionEffect: ut,
      useLayoutEffect: ut,
      useMemo: ut,
      useReducer: ut,
      useRef: ut,
      useState: ut,
      useDebugValue: ut,
      useDeferredValue: ut,
      useTransition: ut,
      useMutableSource: ut,
      useSyncExternalStore: ut,
      useId: ut,
      unstable_isNewReconciler: !1,
    },
    X1 = {
      readContext: At,
      useCallback: function (e, r) {
        return (on().memoizedState = [e, r === void 0 ? null : r]), e;
      },
      useContext: At,
      useEffect: Yd,
      useImperativeHandle: function (e, r, s) {
        return (
          (s = s != null ? s.concat([e]) : null),
          sa(4194308, 4, ef.bind(null, r, e), s)
        );
      },
      useLayoutEffect: function (e, r) {
        return sa(4194308, 4, e, r);
      },
      useInsertionEffect: function (e, r) {
        return sa(4, 2, e, r);
      },
      useMemo: function (e, r) {
        var s = on();
        return (
          (r = r === void 0 ? null : r),
          (e = e()),
          (s.memoizedState = [e, r]),
          e
        );
      },
      useReducer: function (e, r, s) {
        var l = on();
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
          (e = e.dispatch = W1.bind(null, He, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var r = on();
        return (e = { current: e }), (r.memoizedState = e);
      },
      useState: Xd,
      useDebugValue: el,
      useDeferredValue: function (e) {
        return (on().memoizedState = e);
      },
      useTransition: function () {
        var e = Xd(!1),
          r = e[0];
        return (e = q1.bind(null, e[1])), (on().memoizedState = e), [r, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, r, s) {
        var l = He,
          u = on();
        if (De) {
          if (s === void 0) throw Error(o(407));
          s = s();
        } else {
          if (((s = r()), nt === null)) throw Error(o(349));
          (a0 & 30) !== 0 || Ud(l, r, s);
        }
        u.memoizedState = s;
        var p = { value: s, getSnapshot: r };
        return (
          (u.queue = p),
          Yd(qd.bind(null, l, p, e), [e]),
          (l.flags |= 2048),
          Gr(9, Gd.bind(null, l, p, s, r), void 0, null),
          s
        );
      },
      useId: function () {
        var e = on(),
          r = nt.identifierPrefix;
        if (De) {
          var s = mn,
            l = hn;
          (s = (l & ~(1 << (32 - qt(l) - 1))).toString(32) + s),
            (r = ":" + r + "R" + s),
            (s = Vr++),
            0 < s && (r += "H" + s.toString(32)),
            (r += ":");
        } else (s = G1++), (r = ":" + r + "r" + s.toString(32) + ":");
        return (e.memoizedState = r);
      },
      unstable_isNewReconciler: !1,
    },
    Q1 = {
      readContext: At,
      useCallback: nf,
      useContext: At,
      useEffect: Js,
      useImperativeHandle: tf,
      useInsertionEffect: Zd,
      useLayoutEffect: Jd,
      useMemo: rf,
      useReducer: Ys,
      useRef: Qd,
      useState: function () {
        return Ys(Ur);
      },
      useDebugValue: el,
      useDeferredValue: function (e) {
        var r = Dt();
        return of(r, Ze.memoizedState, e);
      },
      useTransition: function () {
        var e = Ys(Ur)[0],
          r = Dt().memoizedState;
        return [e, r];
      },
      useMutableSource: Hd,
      useSyncExternalStore: Vd,
      useId: af,
      unstable_isNewReconciler: !1,
    },
    Y1 = {
      readContext: At,
      useCallback: nf,
      useContext: At,
      useEffect: Js,
      useImperativeHandle: tf,
      useInsertionEffect: Zd,
      useLayoutEffect: Jd,
      useMemo: rf,
      useReducer: Zs,
      useRef: Qd,
      useState: function () {
        return Zs(Ur);
      },
      useDebugValue: el,
      useDeferredValue: function (e) {
        var r = Dt();
        return Ze === null ? (r.memoizedState = e) : of(r, Ze.memoizedState, e);
      },
      useTransition: function () {
        var e = Zs(Ur)[0],
          r = Dt().memoizedState;
        return [e, r];
      },
      useMutableSource: Hd,
      useSyncExternalStore: Vd,
      useId: af,
      unstable_isNewReconciler: !1,
    };
  function G0(e, r) {
    try {
      var s = "",
        l = r;
      do (s += ye(l)), (l = l.return);
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
  var Z1 = typeof WeakMap == "function" ? WeakMap : Map;
  function uf(e, r, s) {
    (s = bn(-1, s)), (s.tag = 3), (s.payload = { element: null });
    var l = r.value;
    return (
      (s.callback = function () {
        ga || ((ga = !0), (bl = l)), nl(e, r);
      }),
      s
    );
  }
  function df(e, r, s) {
    (s = bn(-1, s)), (s.tag = 3);
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
              (An === null ? (An = new Set([this])) : An.add(this));
          var g = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: g !== null ? g : "",
          });
        }),
      s
    );
  }
  function ff(e, r, s) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Z1();
      var u = new Set();
      l.set(r, u);
    } else (u = l.get(r)), u === void 0 && ((u = new Set()), l.set(r, u));
    u.has(s) || (u.add(s), (e = fb.bind(null, e, r, s)), r.then(e, e));
  }
  function pf(e) {
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
  function hf(e, r, s, l, u) {
    return (e.mode & 1) === 0
      ? (e === r
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (s.flags |= 131072),
            (s.flags &= -52805),
            s.tag === 1 &&
              (s.alternate === null
                ? (s.tag = 17)
                : ((r = bn(-1, 1)), (r.tag = 2), Ln(s, r, 1))),
            (s.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = u), e);
  }
  var J1 = L.ReactCurrentOwner,
    wt = !1;
  function bt(e, r, s, l) {
    r.child = e === null ? Dd(r, null, s, l) : V0(r, e.child, s, l);
  }
  function mf(e, r, s, l, u) {
    s = s.render;
    var p = r.ref;
    return (
      H0(r, u),
      (l = Xs(e, r, s, l, p, u)),
      (s = Qs()),
      e !== null && !wt
        ? ((r.updateQueue = e.updateQueue),
          (r.flags &= -2053),
          (e.lanes &= ~u),
          vn(e, r, u))
        : (De && s && js(r), (r.flags |= 1), bt(e, r, l, u), r.child)
    );
  }
  function gf(e, r, s, l, u) {
    if (e === null) {
      var p = s.type;
      return typeof p == "function" &&
        !kl(p) &&
        p.defaultProps === void 0 &&
        s.compare === null &&
        s.defaultProps === void 0
        ? ((r.tag = 15), (r.type = p), bf(e, r, p, l, u))
        : ((e = Sa(s.type, null, l, r, r.mode, u)),
          (e.ref = r.ref),
          (e.return = r),
          (r.child = e));
    }
    if (((p = e.child), (e.lanes & u) === 0)) {
      var g = p.memoizedProps;
      if (
        ((s = s.compare), (s = s !== null ? s : Ir), s(g, l) && e.ref === r.ref)
      )
        return vn(e, r, u);
    }
    return (
      (r.flags |= 1),
      (e = Vn(p, l)),
      (e.ref = r.ref),
      (e.return = r),
      (r.child = e)
    );
  }
  function bf(e, r, s, l, u) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (Ir(p, l) && e.ref === r.ref)
        if (((wt = !1), (r.pendingProps = l = p), (e.lanes & u) !== 0))
          (e.flags & 131072) !== 0 && (wt = !0);
        else return (r.lanes = e.lanes), vn(e, r, u);
    }
    return rl(e, r, s, l, u);
  }
  function vf(e, r, s) {
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
          Ne(W0, Ft),
          (Ft |= s);
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
            Ne(W0, Ft),
            (Ft |= e),
            null
          );
        (r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (l = p !== null ? p.baseLanes : s),
          Ne(W0, Ft),
          (Ft |= l);
      }
    else
      p !== null ? ((l = p.baseLanes | s), (r.memoizedState = null)) : (l = s),
        Ne(W0, Ft),
        (Ft |= l);
    return bt(e, r, u, s), r.child;
  }
  function yf(e, r) {
    var s = r.ref;
    ((e === null && s !== null) || (e !== null && e.ref !== s)) &&
      ((r.flags |= 512), (r.flags |= 2097152));
  }
  function rl(e, r, s, l, u) {
    var p = St(s) ? e0 : ct.current;
    return (
      (p = L0(r, p)),
      H0(r, u),
      (s = Xs(e, r, s, l, p, u)),
      (l = Qs()),
      e !== null && !wt
        ? ((r.updateQueue = e.updateQueue),
          (r.flags &= -2053),
          (e.lanes &= ~u),
          vn(e, r, u))
        : (De && l && js(r), (r.flags |= 1), bt(e, r, s, u), r.child)
    );
  }
  function _f(e, r, s, l, u) {
    if (St(s)) {
      var p = !0;
      Wo(r);
    } else p = !1;
    if ((H0(r, u), r.stateNode === null))
      da(e, r), Bd(r, s, l), Hs(r, s, l, u), (l = !0);
    else if (e === null) {
      var g = r.stateNode,
        _ = r.memoizedProps;
      g.props = _;
      var k = g.context,
        M = s.contextType;
      typeof M == "object" && M !== null
        ? (M = At(M))
        : ((M = St(s) ? e0 : ct.current), (M = L0(r, M)));
      var z = s.getDerivedStateFromProps,
        H =
          typeof z == "function" ||
          typeof g.getSnapshotBeforeUpdate == "function";
      H ||
        (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
          typeof g.componentWillReceiveProps != "function") ||
        ((_ !== l || k !== M) && Ld(r, g, l, M)),
        (Bn = !1);
      var D = r.memoizedState;
      (g.state = D),
        ta(r, l, g, u),
        (k = r.memoizedState),
        _ !== l || D !== k || xt.current || Bn
          ? (typeof z == "function" && (zs(r, s, z, l), (k = r.memoizedState)),
            (_ = Bn || Nd(r, s, _, l, D, k, M))
              ? (H ||
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
                (r.memoizedState = k)),
            (g.props = l),
            (g.state = k),
            (g.context = M),
            (l = _))
          : (typeof g.componentDidMount == "function" && (r.flags |= 4194308),
            (l = !1));
    } else {
      (g = r.stateNode),
        Id(e, r),
        (_ = r.memoizedProps),
        (M = r.type === r.elementType ? _ : Xt(r.type, _)),
        (g.props = M),
        (H = r.pendingProps),
        (D = g.context),
        (k = s.contextType),
        typeof k == "object" && k !== null
          ? (k = At(k))
          : ((k = St(s) ? e0 : ct.current), (k = L0(r, k)));
      var X = s.getDerivedStateFromProps;
      (z =
        typeof X == "function" ||
        typeof g.getSnapshotBeforeUpdate == "function") ||
        (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
          typeof g.componentWillReceiveProps != "function") ||
        ((_ !== H || D !== k) && Ld(r, g, l, k)),
        (Bn = !1),
        (D = r.memoizedState),
        (g.state = D),
        ta(r, l, g, u);
      var Z = r.memoizedState;
      _ !== H || D !== Z || xt.current || Bn
        ? (typeof X == "function" && (zs(r, s, X, l), (Z = r.memoizedState)),
          (M = Bn || Nd(r, s, M, l, D, Z, k) || !1)
            ? (z ||
                (typeof g.UNSAFE_componentWillUpdate != "function" &&
                  typeof g.componentWillUpdate != "function") ||
                (typeof g.componentWillUpdate == "function" &&
                  g.componentWillUpdate(l, Z, k),
                typeof g.UNSAFE_componentWillUpdate == "function" &&
                  g.UNSAFE_componentWillUpdate(l, Z, k)),
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
              (r.memoizedState = Z)),
          (g.props = l),
          (g.state = Z),
          (g.context = k),
          (l = M))
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
    yf(e, r);
    var g = (r.flags & 128) !== 0;
    if (!l && !g) return u && wd(r, s, !1), vn(e, r, p);
    (l = r.stateNode), (J1.current = r);
    var _ =
      g && typeof s.getDerivedStateFromError != "function" ? null : l.render();
    return (
      (r.flags |= 1),
      e !== null && g
        ? ((r.child = V0(r, e.child, null, p)), (r.child = V0(r, null, _, p)))
        : bt(e, r, _, p),
      (r.memoizedState = l.state),
      u && wd(r, s, !0),
      r.child
    );
  }
  function xf(e) {
    var r = e.stateNode;
    r.pendingContext
      ? xd(e, r.pendingContext, r.pendingContext !== r.context)
      : r.context && xd(e, r.context, !1),
      Vs(e, r.containerInfo);
  }
  function Sf(e, r, s, l, u) {
    return D0(), Ms(u), (r.flags |= 256), bt(e, r, s, l), r.child;
  }
  var al = { dehydrated: null, treeContext: null, retryLane: 0 };
  function il(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function wf(e, r, s) {
    var l = r.pendingProps,
      u = ze.current,
      p = !1,
      g = (r.flags & 128) !== 0,
      _;
    if (
      ((_ = g) ||
        (_ = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      _
        ? ((p = !0), (r.flags &= -129))
        : (e === null || e.memoizedState !== null) && (u |= 1),
      Ne(ze, u & 1),
      e === null)
    )
      return (
        Rs(r),
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
                  : (p = wa(g, l, 0, null)),
                (e = u0(e, l, s, null)),
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
      return eb(e, r, g, l, _, u, s);
    if (p) {
      (p = l.fallback), (g = r.mode), (u = e.child), (_ = u.sibling);
      var k = { mode: "hidden", children: l.children };
      return (
        (g & 1) === 0 && r.child !== u
          ? ((l = r.child),
            (l.childLanes = 0),
            (l.pendingProps = k),
            (r.deletions = null))
          : ((l = Vn(u, k)), (l.subtreeFlags = u.subtreeFlags & 14680064)),
        _ !== null ? (p = Vn(_, p)) : ((p = u0(p, g, s, null)), (p.flags |= 2)),
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
      (l = Vn(p, { mode: "visible", children: l.children })),
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
      (r = wa({ mode: "visible", children: r }, e.mode, 0, null)),
      (r.return = e),
      (e.child = r)
    );
  }
  function ua(e, r, s, l) {
    return (
      l !== null && Ms(l),
      V0(r, e.child, null, s),
      (e = sl(r, r.pendingProps.children)),
      (e.flags |= 2),
      (r.memoizedState = null),
      e
    );
  }
  function eb(e, r, s, l, u, p, g) {
    if (s)
      return r.flags & 256
        ? ((r.flags &= -257), (l = tl(Error(o(422)))), ua(e, r, g, l))
        : r.memoizedState !== null
          ? ((r.child = e.child), (r.flags |= 128), null)
          : ((p = l.fallback),
            (u = r.mode),
            (l = wa({ mode: "visible", children: l.children }, u, 0, null)),
            (p = u0(p, u, g, null)),
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
      if (((l = nt), l !== null)) {
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
            ((p.retryLane = u), gn(e, u), Zt(l, e, u, -1));
      }
      return wl(), (l = tl(Error(o(421)))), ua(e, r, g, l);
    }
    return u.data === "$?"
      ? ((r.flags |= 128),
        (r.child = e.child),
        (r = pb.bind(null, e)),
        (u._reactRetry = r),
        null)
      : ((e = p.treeContext),
        (It = Fn(u.nextSibling)),
        (jt = r),
        (De = !0),
        (Kt = null),
        e !== null &&
          ((Lt[$t++] = hn),
          (Lt[$t++] = mn),
          (Lt[$t++] = t0),
          (hn = e.id),
          (mn = e.overflow),
          (t0 = r)),
        (r = sl(r, l.children)),
        (r.flags |= 4096),
        r);
  }
  function kf(e, r, s) {
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
  function Cf(e, r, s) {
    var l = r.pendingProps,
      u = l.revealOrder,
      p = l.tail;
    if ((bt(e, r, l.children, s), (l = ze.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (r.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = r.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && kf(e, s, r);
          else if (e.tag === 19) kf(e, s, r);
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
    if ((Ne(ze, l), (r.mode & 1) === 0)) r.memoizedState = null;
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
  function vn(e, r, s) {
    if (
      (e !== null && (r.dependencies = e.dependencies),
      (i0 |= r.lanes),
      (s & r.childLanes) === 0)
    )
      return null;
    if (e !== null && r.child !== e.child) throw Error(o(153));
    if (r.child !== null) {
      for (
        e = r.child, s = Vn(e, e.pendingProps), r.child = s, s.return = r;
        e.sibling !== null;

      )
        (e = e.sibling),
          (s = s.sibling = Vn(e, e.pendingProps)),
          (s.return = r);
      s.sibling = null;
    }
    return r.child;
  }
  function tb(e, r, s) {
    switch (r.tag) {
      case 3:
        xf(r), D0();
        break;
      case 5:
        zd(r);
        break;
      case 1:
        St(r.type) && Wo(r);
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
            ? (Ne(ze, ze.current & 1), (r.flags |= 128), null)
            : (s & r.child.childLanes) !== 0
              ? wf(e, r, s)
              : (Ne(ze, ze.current & 1),
                (e = vn(e, r, s)),
                e !== null ? e.sibling : null);
        Ne(ze, ze.current & 1);
        break;
      case 19:
        if (((l = (s & r.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (l) return Cf(e, r, s);
          r.flags |= 128;
        }
        if (
          ((u = r.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Ne(ze, ze.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (r.lanes = 0), vf(e, r, s);
    }
    return vn(e, r, s);
  }
  var Pf, cl, Of, Ef;
  (Pf = function (e, r) {
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
    (Of = function (e, r, s, l) {
      var u = e.memoizedProps;
      if (u !== l) {
        (e = r.stateNode), o0(rn.current);
        var p = null;
        switch (s) {
          case "input":
            (u = k0(e, u)), (l = k0(e, l)), (p = []);
            break;
          case "select":
            (u = w({}, u, { value: void 0 })),
              (l = w({}, l, { value: void 0 })),
              (p = []);
            break;
          case "textarea":
            (u = zi(e, u)), (l = zi(e, l)), (p = []);
            break;
          default:
            typeof u.onClick != "function" &&
              typeof l.onClick == "function" &&
              (e.onclick = Uo);
        }
        Vi(s, l);
        var g;
        s = null;
        for (M in u)
          if (!l.hasOwnProperty(M) && u.hasOwnProperty(M) && u[M] != null)
            if (M === "style") {
              var _ = u[M];
              for (g in _) _.hasOwnProperty(g) && (s || (s = {}), (s[g] = ""));
            } else
              M !== "dangerouslySetInnerHTML" &&
                M !== "children" &&
                M !== "suppressContentEditableWarning" &&
                M !== "suppressHydrationWarning" &&
                M !== "autoFocus" &&
                (i.hasOwnProperty(M)
                  ? p || (p = [])
                  : (p = p || []).push(M, null));
        for (M in l) {
          var k = l[M];
          if (
            ((_ = u != null ? u[M] : void 0),
            l.hasOwnProperty(M) && k !== _ && (k != null || _ != null))
          )
            if (M === "style")
              if (_) {
                for (g in _)
                  !_.hasOwnProperty(g) ||
                    (k && k.hasOwnProperty(g)) ||
                    (s || (s = {}), (s[g] = ""));
                for (g in k)
                  k.hasOwnProperty(g) &&
                    _[g] !== k[g] &&
                    (s || (s = {}), (s[g] = k[g]));
              } else s || (p || (p = []), p.push(M, s)), (s = k);
            else
              M === "dangerouslySetInnerHTML"
                ? ((k = k ? k.__html : void 0),
                  (_ = _ ? _.__html : void 0),
                  k != null && _ !== k && (p = p || []).push(M, k))
                : M === "children"
                  ? (typeof k != "string" && typeof k != "number") ||
                    (p = p || []).push(M, "" + k)
                  : M !== "suppressContentEditableWarning" &&
                    M !== "suppressHydrationWarning" &&
                    (i.hasOwnProperty(M)
                      ? (k != null && M === "onScroll" && Le("scroll", e),
                        p || _ === k || (p = []))
                      : (p = p || []).push(M, k));
        }
        s && (p = p || []).push("style", s);
        var M = p;
        (r.updateQueue = M) && (r.flags |= 4);
      }
    }),
    (Ef = function (e, r, s, l) {
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
  function dt(e) {
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
  function nb(e, r, s) {
    var l = r.pendingProps;
    switch ((Is(r), r.tag)) {
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
        return dt(r), null;
      case 1:
        return St(r.type) && qo(), dt(r), null;
      case 3:
        return (
          (l = r.stateNode),
          U0(),
          $e(xt),
          $e(ct),
          qs(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (Yo(r)
              ? (r.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (r.flags & 256) === 0) ||
                ((r.flags |= 1024), Kt !== null && (_l(Kt), (Kt = null)))),
          cl(e, r),
          dt(r),
          null
        );
      case 5:
        Us(r);
        var u = o0(zr.current);
        if (((s = r.type), e !== null && r.stateNode != null))
          Of(e, r, s, l, u),
            e.ref !== r.ref && ((r.flags |= 512), (r.flags |= 2097152));
        else {
          if (!l) {
            if (r.stateNode === null) throw Error(o(166));
            return dt(r), null;
          }
          if (((e = o0(rn.current)), Yo(r))) {
            (l = r.stateNode), (s = r.type);
            var p = r.memoizedProps;
            switch (((l[nn] = r), (l[Br] = p), (e = (r.mode & 1) !== 0), s)) {
              case "dialog":
                Le("cancel", l), Le("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                Le("load", l);
                break;
              case "video":
              case "audio":
                for (u = 0; u < Rr.length; u++) Le(Rr[u], l);
                break;
              case "source":
                Le("error", l);
                break;
              case "img":
              case "image":
              case "link":
                Le("error", l), Le("load", l);
                break;
              case "details":
                Le("toggle", l);
                break;
              case "input":
                xo(l, p), Le("invalid", l);
                break;
              case "select":
                (l._wrapperState = { wasMultiple: !!p.multiple }),
                  Le("invalid", l);
                break;
              case "textarea":
                cu(l, p), Le("invalid", l);
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
                    Le("scroll", l);
              }
            switch (s) {
              case "input":
                Bt(l), lu(l, p, !0);
                break;
              case "textarea":
                Bt(l), du(l);
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
              e === "http://www.w3.org/1999/xhtml" && (e = fu(s)),
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
              (e[nn] = r),
              (e[Br] = l),
              Pf(e, r, !1, !1),
              (r.stateNode = e);
            e: {
              switch (((g = Ui(s, l)), s)) {
                case "dialog":
                  Le("cancel", e), Le("close", e), (u = l);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Le("load", e), (u = l);
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < Rr.length; u++) Le(Rr[u], e);
                  u = l;
                  break;
                case "source":
                  Le("error", e), (u = l);
                  break;
                case "img":
                case "image":
                case "link":
                  Le("error", e), Le("load", e), (u = l);
                  break;
                case "details":
                  Le("toggle", e), (u = l);
                  break;
                case "input":
                  xo(e, l), (u = k0(e, l)), Le("invalid", e);
                  break;
                case "option":
                  u = l;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!l.multiple }),
                    (u = w({}, l, { value: void 0 })),
                    Le("invalid", e);
                  break;
                case "textarea":
                  cu(e, l), (u = zi(e, l)), Le("invalid", e);
                  break;
                default:
                  u = l;
              }
              Vi(s, u), (_ = u);
              for (p in _)
                if (_.hasOwnProperty(p)) {
                  var k = _[p];
                  p === "style"
                    ? mu(e, k)
                    : p === "dangerouslySetInnerHTML"
                      ? ((k = k ? k.__html : void 0), k != null && pu(e, k))
                      : p === "children"
                        ? typeof k == "string"
                          ? (s !== "textarea" || k !== "") && hr(e, k)
                          : typeof k == "number" && hr(e, "" + k)
                        : p !== "suppressContentEditableWarning" &&
                          p !== "suppressHydrationWarning" &&
                          p !== "autoFocus" &&
                          (i.hasOwnProperty(p)
                            ? k != null && p === "onScroll" && Le("scroll", e)
                            : k != null && R(e, p, k, g));
                }
              switch (s) {
                case "input":
                  Bt(e), lu(e, l, !1);
                  break;
                case "textarea":
                  Bt(e), du(e);
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + fe(l.value));
                  break;
                case "select":
                  (e.multiple = !!l.multiple),
                    (p = l.value),
                    p != null
                      ? C0(e, !!l.multiple, p, !1)
                      : l.defaultValue != null &&
                        C0(e, !!l.multiple, l.defaultValue, !0);
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
        return dt(r), null;
      case 6:
        if (e && r.stateNode != null) Ef(e, r, e.memoizedProps, l);
        else {
          if (typeof l != "string" && r.stateNode === null) throw Error(o(166));
          if (((s = o0(zr.current)), o0(rn.current), Yo(r))) {
            if (
              ((l = r.stateNode),
              (s = r.memoizedProps),
              (l[nn] = r),
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
              (l[nn] = r),
              (r.stateNode = l);
        }
        return dt(r), null;
      case 13:
        if (
          ($e(ze),
          (l = r.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (De && It !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0)
            Td(), D0(), (r.flags |= 98560), (p = !1);
          else if (((p = Yo(r)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!p) throw Error(o(318));
              if (
                ((p = r.memoizedState),
                (p = p !== null ? p.dehydrated : null),
                !p)
              )
                throw Error(o(317));
              p[nn] = r;
            } else
              D0(),
                (r.flags & 128) === 0 && (r.memoizedState = null),
                (r.flags |= 4);
            dt(r), (p = !1);
          } else Kt !== null && (_l(Kt), (Kt = null)), (p = !0);
          if (!p) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0
          ? ((r.lanes = s), r)
          : ((l = l !== null),
            l !== (e !== null && e.memoizedState !== null) &&
              l &&
              ((r.child.flags |= 8192),
              (r.mode & 1) !== 0 &&
                (e === null || (ze.current & 1) !== 0
                  ? Je === 0 && (Je = 3)
                  : wl())),
            r.updateQueue !== null && (r.flags |= 4),
            dt(r),
            null);
      case 4:
        return (
          U0(),
          cl(e, r),
          e === null && Mr(r.stateNode.containerInfo),
          dt(r),
          null
        );
      case 10:
        return Ls(r.type._context), dt(r), null;
      case 17:
        return St(r.type) && qo(), dt(r), null;
      case 19:
        if (($e(ze), (p = r.memoizedState), p === null)) return dt(r), null;
        if (((l = (r.flags & 128) !== 0), (g = p.rendering), g === null))
          if (l) qr(p, !1);
          else {
            if (Je !== 0 || (e !== null && (e.flags & 128) !== 0))
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
                  return Ne(ze, (ze.current & 1) | 2), r.child;
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
                return dt(r), null;
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
            (s = ze.current),
            Ne(ze, l ? (s & 1) | 2 : s & 1),
            r)
          : (dt(r), null);
      case 22:
      case 23:
        return (
          Sl(),
          (l = r.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== l && (r.flags |= 8192),
          l && (r.mode & 1) !== 0
            ? (Ft & 1073741824) !== 0 &&
              (dt(r), r.subtreeFlags & 6 && (r.flags |= 8192))
            : dt(r),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, r.tag));
  }
  function rb(e, r) {
    switch ((Is(r), r.tag)) {
      case 1:
        return (
          St(r.type) && qo(),
          (e = r.flags),
          e & 65536 ? ((r.flags = (e & -65537) | 128), r) : null
        );
      case 3:
        return (
          U0(),
          $e(xt),
          $e(ct),
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
          ($e(ze), (e = r.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (r.alternate === null) throw Error(o(340));
          D0();
        }
        return (
          (e = r.flags), e & 65536 ? ((r.flags = (e & -65537) | 128), r) : null
        );
      case 19:
        return $e(ze), null;
      case 4:
        return U0(), null;
      case 10:
        return Ls(r.type._context), null;
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
    ft = !1,
    ob = typeof WeakSet == "function" ? WeakSet : Set,
    Y = null;
  function q0(e, r) {
    var s = e.ref;
    if (s !== null)
      if (typeof s == "function")
        try {
          s(null);
        } catch (l) {
          Ve(e, r, l);
        }
      else s.current = null;
  }
  function ul(e, r, s) {
    try {
      s();
    } catch (l) {
      Ve(e, r, l);
    }
  }
  var Tf = !1;
  function ab(e, r) {
    if (((Ss = Fo), (e = ad()), hs(e))) {
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
              k = -1,
              M = 0,
              z = 0,
              H = e,
              D = null;
            t: for (;;) {
              for (
                var X;
                H !== s || (u !== 0 && H.nodeType !== 3) || (_ = g + u),
                  H !== p || (l !== 0 && H.nodeType !== 3) || (k = g + l),
                  H.nodeType === 3 && (g += H.nodeValue.length),
                  (X = H.firstChild) !== null;

              )
                (D = H), (H = X);
              for (;;) {
                if (H === e) break t;
                if (
                  (D === s && ++M === u && (_ = g),
                  D === p && ++z === l && (k = g),
                  (X = H.nextSibling) !== null)
                )
                  break;
                (H = D), (D = H.parentNode);
              }
              H = X;
            }
            s = _ === -1 || k === -1 ? null : { start: _, end: k };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (
      ws = { focusedElem: e, selectionRange: s }, Fo = !1, Y = r;
      Y !== null;

    )
      if (((r = Y), (e = r.child), (r.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = r), (Y = e);
      else
        for (; Y !== null; ) {
          r = Y;
          try {
            var Z = r.alternate;
            if ((r.flags & 1024) !== 0)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Z !== null) {
                    var J = Z.memoizedProps,
                      We = Z.memoizedState,
                      I = r.stateNode,
                      E = I.getSnapshotBeforeUpdate(
                        r.elementType === r.type ? J : Xt(r.type, J),
                        We,
                      );
                    I.__reactInternalSnapshotBeforeUpdate = E;
                  }
                  break;
                case 3:
                  var F = r.stateNode.containerInfo;
                  F.nodeType === 1
                    ? (F.textContent = "")
                    : F.nodeType === 9 &&
                      F.documentElement &&
                      F.removeChild(F.documentElement);
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
            Ve(r, r.return, G);
          }
          if (((e = r.sibling), e !== null)) {
            (e.return = r.return), (Y = e);
            break;
          }
          Y = r.return;
        }
    return (Z = Tf), (Tf = !1), Z;
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
  function jf(e) {
    var r = e.alternate;
    r !== null && ((e.alternate = null), jf(r)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((r = e.stateNode),
        r !== null &&
          (delete r[nn],
          delete r[Br],
          delete r[Os],
          delete r[z1],
          delete r[H1])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function If(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ff(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || If(e.return)) return null;
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
  var it = null,
    Qt = !1;
  function $n(e, r, s) {
    for (s = s.child; s !== null; ) Rf(e, r, s), (s = s.sibling);
  }
  function Rf(e, r, s) {
    if (tn && typeof tn.onCommitFiberUnmount == "function")
      try {
        tn.onCommitFiberUnmount(Po, s);
      } catch {}
    switch (s.tag) {
      case 5:
        ft || q0(s, r);
      case 6:
        var l = it,
          u = Qt;
        (it = null),
          $n(e, r, s),
          (it = l),
          (Qt = u),
          it !== null &&
            (Qt
              ? ((e = it),
                (s = s.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(s)
                  : e.removeChild(s))
              : it.removeChild(s.stateNode));
        break;
      case 18:
        it !== null &&
          (Qt
            ? ((e = it),
              (s = s.stateNode),
              e.nodeType === 8
                ? Ps(e.parentNode, s)
                : e.nodeType === 1 && Ps(e, s),
              Cr(e))
            : Ps(it, s.stateNode));
        break;
      case 4:
        (l = it),
          (u = Qt),
          (it = s.stateNode.containerInfo),
          (Qt = !0),
          $n(e, r, s),
          (it = l),
          (Qt = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !ft &&
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
        $n(e, r, s);
        break;
      case 1:
        if (
          !ft &&
          (q0(s, r),
          (l = s.stateNode),
          typeof l.componentWillUnmount == "function")
        )
          try {
            (l.props = s.memoizedProps),
              (l.state = s.memoizedState),
              l.componentWillUnmount();
          } catch (_) {
            Ve(s, r, _);
          }
        $n(e, r, s);
        break;
      case 21:
        $n(e, r, s);
        break;
      case 22:
        s.mode & 1
          ? ((ft = (l = ft) || s.memoizedState !== null), $n(e, r, s), (ft = l))
          : $n(e, r, s);
        break;
      default:
        $n(e, r, s);
    }
  }
  function Mf(e) {
    var r = e.updateQueue;
    if (r !== null) {
      e.updateQueue = null;
      var s = e.stateNode;
      s === null && (s = e.stateNode = new ob()),
        r.forEach(function (l) {
          var u = hb.bind(null, e, l);
          s.has(l) || (s.add(l), l.then(u, u));
        });
    }
  }
  function Yt(e, r) {
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
                (it = _.stateNode), (Qt = !1);
                break e;
              case 3:
                (it = _.stateNode.containerInfo), (Qt = !0);
                break e;
              case 4:
                (it = _.stateNode.containerInfo), (Qt = !0);
                break e;
            }
            _ = _.return;
          }
          if (it === null) throw Error(o(160));
          Rf(p, g, u), (it = null), (Qt = !1);
          var k = u.alternate;
          k !== null && (k.return = null), (u.return = null);
        } catch (M) {
          Ve(u, r, M);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; ) Nf(r, e), (r = r.sibling);
  }
  function Nf(e, r) {
    var s = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Yt(r, e), an(e), l & 4)) {
          try {
            Wr(3, e, e.return), pa(3, e);
          } catch (J) {
            Ve(e, e.return, J);
          }
          try {
            Wr(5, e, e.return);
          } catch (J) {
            Ve(e, e.return, J);
          }
        }
        break;
      case 1:
        Yt(r, e), an(e), l & 512 && s !== null && q0(s, s.return);
        break;
      case 5:
        if (
          (Yt(r, e),
          an(e),
          l & 512 && s !== null && q0(s, s.return),
          e.flags & 32)
        ) {
          var u = e.stateNode;
          try {
            hr(u, "");
          } catch (J) {
            Ve(e, e.return, J);
          }
        }
        if (l & 4 && ((u = e.stateNode), u != null)) {
          var p = e.memoizedProps,
            g = s !== null ? s.memoizedProps : p,
            _ = e.type,
            k = e.updateQueue;
          if (((e.updateQueue = null), k !== null))
            try {
              _ === "input" && p.type === "radio" && p.name != null && su(u, p),
                Ui(_, g);
              var M = Ui(_, p);
              for (g = 0; g < k.length; g += 2) {
                var z = k[g],
                  H = k[g + 1];
                z === "style"
                  ? mu(u, H)
                  : z === "dangerouslySetInnerHTML"
                    ? pu(u, H)
                    : z === "children"
                      ? hr(u, H)
                      : R(u, z, H, M);
              }
              switch (_) {
                case "input":
                  Ai(u, p);
                  break;
                case "textarea":
                  uu(u, p);
                  break;
                case "select":
                  var D = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!p.multiple;
                  var X = p.value;
                  X != null
                    ? C0(u, !!p.multiple, X, !1)
                    : D !== !!p.multiple &&
                      (p.defaultValue != null
                        ? C0(u, !!p.multiple, p.defaultValue, !0)
                        : C0(u, !!p.multiple, p.multiple ? [] : "", !1));
              }
              u[Br] = p;
            } catch (J) {
              Ve(e, e.return, J);
            }
        }
        break;
      case 6:
        if ((Yt(r, e), an(e), l & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (u = e.stateNode), (p = e.memoizedProps);
          try {
            u.nodeValue = p;
          } catch (J) {
            Ve(e, e.return, J);
          }
        }
        break;
      case 3:
        if (
          (Yt(r, e), an(e), l & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            Cr(r.containerInfo);
          } catch (J) {
            Ve(e, e.return, J);
          }
        break;
      case 4:
        Yt(r, e), an(e);
        break;
      case 13:
        Yt(r, e),
          an(e),
          (u = e.child),
          u.flags & 8192 &&
            ((p = u.memoizedState !== null),
            (u.stateNode.isHidden = p),
            !p ||
              (u.alternate !== null && u.alternate.memoizedState !== null) ||
              (gl = qe())),
          l & 4 && Mf(e);
        break;
      case 22:
        if (
          ((z = s !== null && s.memoizedState !== null),
          e.mode & 1 ? ((ft = (M = ft) || z), Yt(r, e), (ft = M)) : Yt(r, e),
          an(e),
          l & 8192)
        ) {
          if (
            ((M = e.memoizedState !== null),
            (e.stateNode.isHidden = M) && !z && (e.mode & 1) !== 0)
          )
            for (Y = e, z = e.child; z !== null; ) {
              for (H = Y = z; Y !== null; ) {
                switch (((D = Y), (X = D.child), D.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Wr(4, D, D.return);
                    break;
                  case 1:
                    q0(D, D.return);
                    var Z = D.stateNode;
                    if (typeof Z.componentWillUnmount == "function") {
                      (l = D), (s = D.return);
                      try {
                        (r = l),
                          (Z.props = r.memoizedProps),
                          (Z.state = r.memoizedState),
                          Z.componentWillUnmount();
                      } catch (J) {
                        Ve(l, s, J);
                      }
                    }
                    break;
                  case 5:
                    q0(D, D.return);
                    break;
                  case 22:
                    if (D.memoizedState !== null) {
                      $f(H);
                      continue;
                    }
                }
                X !== null ? ((X.return = D), (Y = X)) : $f(H);
              }
              z = z.sibling;
            }
          e: for (z = null, H = e; ; ) {
            if (H.tag === 5) {
              if (z === null) {
                z = H;
                try {
                  (u = H.stateNode),
                    M
                      ? ((p = u.style),
                        typeof p.setProperty == "function"
                          ? p.setProperty("display", "none", "important")
                          : (p.display = "none"))
                      : ((_ = H.stateNode),
                        (k = H.memoizedProps.style),
                        (g =
                          k != null && k.hasOwnProperty("display")
                            ? k.display
                            : null),
                        (_.style.display = hu("display", g)));
                } catch (J) {
                  Ve(e, e.return, J);
                }
              }
            } else if (H.tag === 6) {
              if (z === null)
                try {
                  H.stateNode.nodeValue = M ? "" : H.memoizedProps;
                } catch (J) {
                  Ve(e, e.return, J);
                }
            } else if (
              ((H.tag !== 22 && H.tag !== 23) ||
                H.memoizedState === null ||
                H === e) &&
              H.child !== null
            ) {
              (H.child.return = H), (H = H.child);
              continue;
            }
            if (H === e) break e;
            for (; H.sibling === null; ) {
              if (H.return === null || H.return === e) break e;
              z === H && (z = null), (H = H.return);
            }
            z === H && (z = null),
              (H.sibling.return = H.return),
              (H = H.sibling);
          }
        }
        break;
      case 19:
        Yt(r, e), an(e), l & 4 && Mf(e);
        break;
      case 21:
        break;
      default:
        Yt(r, e), an(e);
    }
  }
  function an(e) {
    var r = e.flags;
    if (r & 2) {
      try {
        e: {
          for (var s = e.return; s !== null; ) {
            if (If(s)) {
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
            var p = Ff(e);
            pl(e, p, u);
            break;
          case 3:
          case 4:
            var g = l.stateNode.containerInfo,
              _ = Ff(e);
            fl(e, _, g);
            break;
          default:
            throw Error(o(161));
        }
      } catch (k) {
        Ve(e, e.return, k);
      }
      e.flags &= -3;
    }
    r & 4096 && (e.flags &= -4097);
  }
  function ib(e, r, s) {
    (Y = e), Bf(e);
  }
  function Bf(e, r, s) {
    for (var l = (e.mode & 1) !== 0; Y !== null; ) {
      var u = Y,
        p = u.child;
      if (u.tag === 22 && l) {
        var g = u.memoizedState !== null || fa;
        if (!g) {
          var _ = u.alternate,
            k = (_ !== null && _.memoizedState !== null) || ft;
          _ = fa;
          var M = ft;
          if (((fa = g), (ft = k) && !M))
            for (Y = u; Y !== null; )
              (g = Y),
                (k = g.child),
                g.tag === 22 && g.memoizedState !== null
                  ? Af(u)
                  : k !== null
                    ? ((k.return = g), (Y = k))
                    : Af(u);
          for (; p !== null; ) (Y = p), Bf(p), (p = p.sibling);
          (Y = u), (fa = _), (ft = M);
        }
        Lf(e);
      } else
        (u.subtreeFlags & 8772) !== 0 && p !== null
          ? ((p.return = u), (Y = p))
          : Lf(e);
    }
  }
  function Lf(e) {
    for (; Y !== null; ) {
      var r = Y;
      if ((r.flags & 8772) !== 0) {
        var s = r.alternate;
        try {
          if ((r.flags & 8772) !== 0)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                ft || pa(5, r);
                break;
              case 1:
                var l = r.stateNode;
                if (r.flags & 4 && !ft)
                  if (s === null) l.componentDidMount();
                  else {
                    var u =
                      r.elementType === r.type
                        ? s.memoizedProps
                        : Xt(r.type, s.memoizedProps);
                    l.componentDidUpdate(
                      u,
                      s.memoizedState,
                      l.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var p = r.updateQueue;
                p !== null && Rd(r, p, l);
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
                  Rd(r, g, s);
                }
                break;
              case 5:
                var _ = r.stateNode;
                if (s === null && r.flags & 4) {
                  s = _;
                  var k = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k.autoFocus && s.focus();
                      break;
                    case "img":
                      k.src && (s.src = k.src);
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
                  var M = r.alternate;
                  if (M !== null) {
                    var z = M.memoizedState;
                    if (z !== null) {
                      var H = z.dehydrated;
                      H !== null && Cr(H);
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
          ft || (r.flags & 512 && dl(r));
        } catch (D) {
          Ve(r, r.return, D);
        }
      }
      if (r === e) {
        Y = null;
        break;
      }
      if (((s = r.sibling), s !== null)) {
        (s.return = r.return), (Y = s);
        break;
      }
      Y = r.return;
    }
  }
  function $f(e) {
    for (; Y !== null; ) {
      var r = Y;
      if (r === e) {
        Y = null;
        break;
      }
      var s = r.sibling;
      if (s !== null) {
        (s.return = r.return), (Y = s);
        break;
      }
      Y = r.return;
    }
  }
  function Af(e) {
    for (; Y !== null; ) {
      var r = Y;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var s = r.return;
            try {
              pa(4, r);
            } catch (k) {
              Ve(r, s, k);
            }
            break;
          case 1:
            var l = r.stateNode;
            if (typeof l.componentDidMount == "function") {
              var u = r.return;
              try {
                l.componentDidMount();
              } catch (k) {
                Ve(r, u, k);
              }
            }
            var p = r.return;
            try {
              dl(r);
            } catch (k) {
              Ve(r, p, k);
            }
            break;
          case 5:
            var g = r.return;
            try {
              dl(r);
            } catch (k) {
              Ve(r, g, k);
            }
        }
      } catch (k) {
        Ve(r, r.return, k);
      }
      if (r === e) {
        Y = null;
        break;
      }
      var _ = r.sibling;
      if (_ !== null) {
        (_.return = r.return), (Y = _);
        break;
      }
      Y = r.return;
    }
  }
  var sb = Math.ceil,
    ha = L.ReactCurrentDispatcher,
    hl = L.ReactCurrentOwner,
    zt = L.ReactCurrentBatchConfig,
    Ce = 0,
    nt = null,
    Ke = null,
    st = 0,
    Ft = 0,
    W0 = Rn(0),
    Je = 0,
    Kr = null,
    i0 = 0,
    ma = 0,
    ml = 0,
    Xr = null,
    kt = null,
    gl = 0,
    K0 = 1 / 0,
    yn = null,
    ga = !1,
    bl = null,
    An = null,
    ba = !1,
    Dn = null,
    va = 0,
    Qr = 0,
    vl = null,
    ya = -1,
    _a = 0;
  function vt() {
    return (Ce & 6) !== 0 ? qe() : ya !== -1 ? ya : (ya = qe());
  }
  function zn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Ce & 2) !== 0 && st !== 0
        ? st & -st
        : U1.transition !== null
          ? (_a === 0 && (_a = ju()), _a)
          : ((e = Fe),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Au(e.type))),
            e);
  }
  function Zt(e, r, s, l) {
    if (50 < Qr) throw ((Qr = 0), (vl = null), Error(o(185)));
    _r(e, s, l),
      ((Ce & 2) === 0 || e !== nt) &&
        (e === nt && ((Ce & 2) === 0 && (ma |= s), Je === 4 && Hn(e, st)),
        Ct(e, l),
        s === 1 &&
          Ce === 0 &&
          (r.mode & 1) === 0 &&
          ((K0 = qe() + 500), Ko && Nn()));
  }
  function Ct(e, r) {
    var s = e.callbackNode;
    Ug(e, r);
    var l = To(e, e === nt ? st : 0);
    if (l === 0)
      s !== null && Ou(s), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((r = l & -l), e.callbackPriority !== r)) {
      if ((s != null && Ou(s), r === 1))
        e.tag === 0 ? V1(zf.bind(null, e)) : kd(zf.bind(null, e)),
          A1(function () {
            (Ce & 6) === 0 && Nn();
          }),
          (s = null);
      else {
        switch (Iu(l)) {
          case 1:
            s = Yi;
            break;
          case 4:
            s = Eu;
            break;
          case 16:
            s = Co;
            break;
          case 536870912:
            s = Tu;
            break;
          default:
            s = Co;
        }
        s = Xf(s, Df.bind(null, e));
      }
      (e.callbackPriority = r), (e.callbackNode = s);
    }
  }
  function Df(e, r) {
    if (((ya = -1), (_a = 0), (Ce & 6) !== 0)) throw Error(o(327));
    var s = e.callbackNode;
    if (X0() && e.callbackNode !== s) return null;
    var l = To(e, e === nt ? st : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || r) r = xa(e, l);
    else {
      r = l;
      var u = Ce;
      Ce |= 2;
      var p = Vf();
      (nt !== e || st !== r) && ((yn = null), (K0 = qe() + 500), l0(e, r));
      do
        try {
          ub();
          break;
        } catch (_) {
          Hf(e, _);
        }
      while (!0);
      Bs(),
        (ha.current = p),
        (Ce = u),
        Ke !== null ? (r = 0) : ((nt = null), (st = 0), (r = Je));
    }
    if (r !== 0) {
      if (
        (r === 2 && ((u = Zi(e)), u !== 0 && ((l = u), (r = yl(e, u)))),
        r === 1)
      )
        throw ((s = Kr), l0(e, 0), Hn(e, l), Ct(e, qe()), s);
      if (r === 6) Hn(e, l);
      else {
        if (
          ((u = e.current.alternate),
          (l & 30) === 0 &&
            !lb(u) &&
            ((r = xa(e, l)),
            r === 2 && ((p = Zi(e)), p !== 0 && ((l = p), (r = yl(e, p)))),
            r === 1))
        )
          throw ((s = Kr), l0(e, 0), Hn(e, l), Ct(e, qe()), s);
        switch (((e.finishedWork = u), (e.finishedLanes = l), r)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            c0(e, kt, yn);
            break;
          case 3:
            if (
              (Hn(e, l),
              (l & 130023424) === l && ((r = gl + 500 - qe()), 10 < r))
            ) {
              if (To(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & l) !== l)) {
                vt(), (e.pingedLanes |= e.suspendedLanes & u);
                break;
              }
              e.timeoutHandle = Cs(c0.bind(null, e, kt, yn), r);
              break;
            }
            c0(e, kt, yn);
            break;
          case 4:
            if ((Hn(e, l), (l & 4194240) === l)) break;
            for (r = e.eventTimes, u = -1; 0 < l; ) {
              var g = 31 - qt(l);
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
                            : 1960 * sb(l / 1960)) - l),
              10 < l)
            ) {
              e.timeoutHandle = Cs(c0.bind(null, e, kt, yn), l);
              break;
            }
            c0(e, kt, yn);
            break;
          case 5:
            c0(e, kt, yn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Ct(e, qe()), e.callbackNode === s ? Df.bind(null, e) : null;
  }
  function yl(e, r) {
    var s = Xr;
    return (
      e.current.memoizedState.isDehydrated && (l0(e, r).flags |= 256),
      (e = xa(e, r)),
      e !== 2 && ((r = kt), (kt = s), r !== null && _l(r)),
      e
    );
  }
  function _l(e) {
    kt === null ? (kt = e) : kt.push.apply(kt, e);
  }
  function lb(e) {
    for (var r = e; ; ) {
      if (r.flags & 16384) {
        var s = r.updateQueue;
        if (s !== null && ((s = s.stores), s !== null))
          for (var l = 0; l < s.length; l++) {
            var u = s[l],
              p = u.getSnapshot;
            u = u.value;
            try {
              if (!Wt(p(), u)) return !1;
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
  function Hn(e, r) {
    for (
      r &= ~ml,
        r &= ~ma,
        e.suspendedLanes |= r,
        e.pingedLanes &= ~r,
        e = e.expirationTimes;
      0 < r;

    ) {
      var s = 31 - qt(r),
        l = 1 << s;
      (e[s] = -1), (r &= ~l);
    }
  }
  function zf(e) {
    if ((Ce & 6) !== 0) throw Error(o(327));
    X0();
    var r = To(e, 0);
    if ((r & 1) === 0) return Ct(e, qe()), null;
    var s = xa(e, r);
    if (e.tag !== 0 && s === 2) {
      var l = Zi(e);
      l !== 0 && ((r = l), (s = yl(e, l)));
    }
    if (s === 1) throw ((s = Kr), l0(e, 0), Hn(e, r), Ct(e, qe()), s);
    if (s === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = r),
      c0(e, kt, yn),
      Ct(e, qe()),
      null
    );
  }
  function xl(e, r) {
    var s = Ce;
    Ce |= 1;
    try {
      return e(r);
    } finally {
      (Ce = s), Ce === 0 && ((K0 = qe() + 500), Ko && Nn());
    }
  }
  function s0(e) {
    Dn !== null && Dn.tag === 0 && (Ce & 6) === 0 && X0();
    var r = Ce;
    Ce |= 1;
    var s = zt.transition,
      l = Fe;
    try {
      if (((zt.transition = null), (Fe = 1), e)) return e();
    } finally {
      (Fe = l), (zt.transition = s), (Ce = r), (Ce & 6) === 0 && Nn();
    }
  }
  function Sl() {
    (Ft = W0.current), $e(W0);
  }
  function l0(e, r) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var s = e.timeoutHandle;
    if ((s !== -1 && ((e.timeoutHandle = -1), $1(s)), Ke !== null))
      for (s = Ke.return; s !== null; ) {
        var l = s;
        switch ((Is(l), l.tag)) {
          case 1:
            (l = l.type.childContextTypes), l != null && qo();
            break;
          case 3:
            U0(), $e(xt), $e(ct), qs();
            break;
          case 5:
            Us(l);
            break;
          case 4:
            U0();
            break;
          case 13:
            $e(ze);
            break;
          case 19:
            $e(ze);
            break;
          case 10:
            Ls(l.type._context);
            break;
          case 22:
          case 23:
            Sl();
        }
        s = s.return;
      }
    if (
      ((nt = e),
      (Ke = e = Vn(e.current, null)),
      (st = Ft = r),
      (Je = 0),
      (Kr = null),
      (ml = ma = i0 = 0),
      (kt = Xr = null),
      r0 !== null)
    ) {
      for (r = 0; r < r0.length; r++)
        if (((s = r0[r]), (l = s.interleaved), l !== null)) {
          s.interleaved = null;
          var u = l.next,
            p = s.pending;
          if (p !== null) {
            var g = p.next;
            (p.next = u), (l.next = g);
          }
          s.pending = l;
        }
      r0 = null;
    }
    return e;
  }
  function Hf(e, r) {
    do {
      var s = Ke;
      try {
        if ((Bs(), (aa.current = ca), ia)) {
          for (var l = He.memoizedState; l !== null; ) {
            var u = l.queue;
            u !== null && (u.pending = null), (l = l.next);
          }
          ia = !1;
        }
        if (
          ((a0 = 0),
          (tt = Ze = He = null),
          (Hr = !1),
          (Vr = 0),
          (hl.current = null),
          s === null || s.return === null)
        ) {
          (Je = 1), (Kr = r), (Ke = null);
          break;
        }
        e: {
          var p = e,
            g = s.return,
            _ = s,
            k = r;
          if (
            ((r = st),
            (_.flags |= 32768),
            k !== null && typeof k == "object" && typeof k.then == "function")
          ) {
            var M = k,
              z = _,
              H = z.tag;
            if ((z.mode & 1) === 0 && (H === 0 || H === 11 || H === 15)) {
              var D = z.alternate;
              D
                ? ((z.updateQueue = D.updateQueue),
                  (z.memoizedState = D.memoizedState),
                  (z.lanes = D.lanes))
                : ((z.updateQueue = null), (z.memoizedState = null));
            }
            var X = pf(g);
            if (X !== null) {
              (X.flags &= -257),
                hf(X, g, _, p, r),
                X.mode & 1 && ff(p, M, r),
                (r = X),
                (k = M);
              var Z = r.updateQueue;
              if (Z === null) {
                var J = new Set();
                J.add(k), (r.updateQueue = J);
              } else Z.add(k);
              break e;
            } else {
              if ((r & 1) === 0) {
                ff(p, M, r), wl();
                break e;
              }
              k = Error(o(426));
            }
          } else if (De && _.mode & 1) {
            var We = pf(g);
            if (We !== null) {
              (We.flags & 65536) === 0 && (We.flags |= 256),
                hf(We, g, _, p, r),
                Ms(G0(k, _));
              break e;
            }
          }
          (p = k = G0(k, _)),
            Je !== 4 && (Je = 2),
            Xr === null ? (Xr = [p]) : Xr.push(p),
            (p = g);
          do {
            switch (p.tag) {
              case 3:
                (p.flags |= 65536), (r &= -r), (p.lanes |= r);
                var I = uf(p, k, r);
                Fd(p, I);
                break e;
              case 1:
                _ = k;
                var E = p.type,
                  F = p.stateNode;
                if (
                  (p.flags & 128) === 0 &&
                  (typeof E.getDerivedStateFromError == "function" ||
                    (F !== null &&
                      typeof F.componentDidCatch == "function" &&
                      (An === null || !An.has(F))))
                ) {
                  (p.flags |= 65536), (r &= -r), (p.lanes |= r);
                  var G = df(p, _, r);
                  Fd(p, G);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        Gf(s);
      } catch (te) {
        (r = te), Ke === s && s !== null && (Ke = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Vf() {
    var e = ha.current;
    return (ha.current = ca), e === null ? ca : e;
  }
  function wl() {
    (Je === 0 || Je === 3 || Je === 2) && (Je = 4),
      nt === null ||
        ((i0 & 268435455) === 0 && (ma & 268435455) === 0) ||
        Hn(nt, st);
  }
  function xa(e, r) {
    var s = Ce;
    Ce |= 2;
    var l = Vf();
    (nt !== e || st !== r) && ((yn = null), l0(e, r));
    do
      try {
        cb();
        break;
      } catch (u) {
        Hf(e, u);
      }
    while (!0);
    if ((Bs(), (Ce = s), (ha.current = l), Ke !== null)) throw Error(o(261));
    return (nt = null), (st = 0), Je;
  }
  function cb() {
    for (; Ke !== null; ) Uf(Ke);
  }
  function ub() {
    for (; Ke !== null && !Ng(); ) Uf(Ke);
  }
  function Uf(e) {
    var r = Kf(e.alternate, e, Ft);
    (e.memoizedProps = e.pendingProps),
      r === null ? Gf(e) : (Ke = r),
      (hl.current = null);
  }
  function Gf(e) {
    var r = e;
    do {
      var s = r.alternate;
      if (((e = r.return), (r.flags & 32768) === 0)) {
        if (((s = nb(s, r, Ft)), s !== null)) {
          Ke = s;
          return;
        }
      } else {
        if (((s = rb(s, r)), s !== null)) {
          (s.flags &= 32767), (Ke = s);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Je = 6), (Ke = null);
          return;
        }
      }
      if (((r = r.sibling), r !== null)) {
        Ke = r;
        return;
      }
      Ke = r = e;
    } while (r !== null);
    Je === 0 && (Je = 5);
  }
  function c0(e, r, s) {
    var l = Fe,
      u = zt.transition;
    try {
      (zt.transition = null), (Fe = 1), db(e, r, s, l);
    } finally {
      (zt.transition = u), (Fe = l);
    }
    return null;
  }
  function db(e, r, s, l) {
    do X0();
    while (Dn !== null);
    if ((Ce & 6) !== 0) throw Error(o(327));
    s = e.finishedWork;
    var u = e.finishedLanes;
    if (s === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), s === e.current))
      throw Error(o(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var p = s.lanes | s.childLanes;
    if (
      (Gg(e, p),
      e === nt && ((Ke = nt = null), (st = 0)),
      ((s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0) ||
        ba ||
        ((ba = !0),
        Xf(Co, function () {
          return X0(), null;
        })),
      (p = (s.flags & 15990) !== 0),
      (s.subtreeFlags & 15990) !== 0 || p)
    ) {
      (p = zt.transition), (zt.transition = null);
      var g = Fe;
      Fe = 1;
      var _ = Ce;
      (Ce |= 4),
        (hl.current = null),
        ab(e, s),
        Nf(s, e),
        I1(ws),
        (Fo = !!Ss),
        (ws = Ss = null),
        (e.current = s),
        ib(s),
        Bg(),
        (Ce = _),
        (Fe = g),
        (zt.transition = p);
    } else e.current = s;
    if (
      (ba && ((ba = !1), (Dn = e), (va = u)),
      (p = e.pendingLanes),
      p === 0 && (An = null),
      Ag(s.stateNode),
      Ct(e, qe()),
      r !== null)
    )
      for (l = e.onRecoverableError, s = 0; s < r.length; s++)
        (u = r[s]), l(u.value, { componentStack: u.stack, digest: u.digest });
    if (ga) throw ((ga = !1), (e = bl), (bl = null), e);
    return (
      (va & 1) !== 0 && e.tag !== 0 && X0(),
      (p = e.pendingLanes),
      (p & 1) !== 0 ? (e === vl ? Qr++ : ((Qr = 0), (vl = e))) : (Qr = 0),
      Nn(),
      null
    );
  }
  function X0() {
    if (Dn !== null) {
      var e = Iu(va),
        r = zt.transition,
        s = Fe;
      try {
        if (((zt.transition = null), (Fe = 16 > e ? 16 : e), Dn === null))
          var l = !1;
        else {
          if (((e = Dn), (Dn = null), (va = 0), (Ce & 6) !== 0))
            throw Error(o(331));
          var u = Ce;
          for (Ce |= 4, Y = e.current; Y !== null; ) {
            var p = Y,
              g = p.child;
            if ((Y.flags & 16) !== 0) {
              var _ = p.deletions;
              if (_ !== null) {
                for (var k = 0; k < _.length; k++) {
                  var M = _[k];
                  for (Y = M; Y !== null; ) {
                    var z = Y;
                    switch (z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Wr(8, z, p);
                    }
                    var H = z.child;
                    if (H !== null) (H.return = z), (Y = H);
                    else
                      for (; Y !== null; ) {
                        z = Y;
                        var D = z.sibling,
                          X = z.return;
                        if ((jf(z), z === M)) {
                          Y = null;
                          break;
                        }
                        if (D !== null) {
                          (D.return = X), (Y = D);
                          break;
                        }
                        Y = X;
                      }
                  }
                }
                var Z = p.alternate;
                if (Z !== null) {
                  var J = Z.child;
                  if (J !== null) {
                    Z.child = null;
                    do {
                      var We = J.sibling;
                      (J.sibling = null), (J = We);
                    } while (J !== null);
                  }
                }
                Y = p;
              }
            }
            if ((p.subtreeFlags & 2064) !== 0 && g !== null)
              (g.return = p), (Y = g);
            else
              e: for (; Y !== null; ) {
                if (((p = Y), (p.flags & 2048) !== 0))
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wr(9, p, p.return);
                  }
                var I = p.sibling;
                if (I !== null) {
                  (I.return = p.return), (Y = I);
                  break e;
                }
                Y = p.return;
              }
          }
          var E = e.current;
          for (Y = E; Y !== null; ) {
            g = Y;
            var F = g.child;
            if ((g.subtreeFlags & 2064) !== 0 && F !== null)
              (F.return = g), (Y = F);
            else
              e: for (g = E; Y !== null; ) {
                if (((_ = Y), (_.flags & 2048) !== 0))
                  try {
                    switch (_.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pa(9, _);
                    }
                  } catch (te) {
                    Ve(_, _.return, te);
                  }
                if (_ === g) {
                  Y = null;
                  break e;
                }
                var G = _.sibling;
                if (G !== null) {
                  (G.return = _.return), (Y = G);
                  break e;
                }
                Y = _.return;
              }
          }
          if (
            ((Ce = u),
            Nn(),
            tn && typeof tn.onPostCommitFiberRoot == "function")
          )
            try {
              tn.onPostCommitFiberRoot(Po, e);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        (Fe = s), (zt.transition = r);
      }
    }
    return !1;
  }
  function qf(e, r, s) {
    (r = G0(s, r)),
      (r = uf(e, r, 1)),
      (e = Ln(e, r, 1)),
      (r = vt()),
      e !== null && (_r(e, 1, r), Ct(e, r));
  }
  function Ve(e, r, s) {
    if (e.tag === 3) qf(e, e, s);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          qf(r, e, s);
          break;
        } else if (r.tag === 1) {
          var l = r.stateNode;
          if (
            typeof r.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (An === null || !An.has(l)))
          ) {
            (e = G0(s, e)),
              (e = df(r, e, 1)),
              (r = Ln(r, e, 1)),
              (e = vt()),
              r !== null && (_r(r, 1, e), Ct(r, e));
            break;
          }
        }
        r = r.return;
      }
  }
  function fb(e, r, s) {
    var l = e.pingCache;
    l !== null && l.delete(r),
      (r = vt()),
      (e.pingedLanes |= e.suspendedLanes & s),
      nt === e &&
        (st & s) === s &&
        (Je === 4 || (Je === 3 && (st & 130023424) === st && 500 > qe() - gl)
          ? l0(e, 0)
          : (ml |= s)),
      Ct(e, r);
  }
  function Wf(e, r) {
    r === 0 &&
      ((e.mode & 1) === 0
        ? (r = 1)
        : ((r = Eo), (Eo <<= 1), (Eo & 130023424) === 0 && (Eo = 4194304)));
    var s = vt();
    (e = gn(e, r)), e !== null && (_r(e, r, s), Ct(e, s));
  }
  function pb(e) {
    var r = e.memoizedState,
      s = 0;
    r !== null && (s = r.retryLane), Wf(e, s);
  }
  function hb(e, r) {
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
    l !== null && l.delete(r), Wf(e, s);
  }
  var Kf;
  Kf = function (e, r, s) {
    if (e !== null)
      if (e.memoizedProps !== r.pendingProps || xt.current) wt = !0;
      else {
        if ((e.lanes & s) === 0 && (r.flags & 128) === 0)
          return (wt = !1), tb(e, r, s);
        wt = (e.flags & 131072) !== 0;
      }
    else (wt = !1), De && (r.flags & 1048576) !== 0 && Cd(r, Qo, r.index);
    switch (((r.lanes = 0), r.tag)) {
      case 2:
        var l = r.type;
        da(e, r), (e = r.pendingProps);
        var u = L0(r, ct.current);
        H0(r, s), (u = Xs(null, r, l, e, u, s));
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
              St(l) ? ((p = !0), Wo(r)) : (p = !1),
              (r.memoizedState =
                u.state !== null && u.state !== void 0 ? u.state : null),
              Ds(r),
              (u.updater = na),
              (r.stateNode = u),
              (u._reactInternals = r),
              Hs(r, l, e, s),
              (r = ol(null, r, l, !0, p, s)))
            : ((r.tag = 0), De && p && js(r), bt(null, r, u, s), (r = r.child)),
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
            (u = r.tag = gb(l)),
            (e = Xt(l, e)),
            u)
          ) {
            case 0:
              r = rl(null, r, l, e, s);
              break e;
            case 1:
              r = _f(null, r, l, e, s);
              break e;
            case 11:
              r = mf(null, r, l, e, s);
              break e;
            case 14:
              r = gf(null, r, l, Xt(l.type, e), s);
              break e;
          }
          throw Error(o(306, l, ""));
        }
        return r;
      case 0:
        return (
          (l = r.type),
          (u = r.pendingProps),
          (u = r.elementType === l ? u : Xt(l, u)),
          rl(e, r, l, u, s)
        );
      case 1:
        return (
          (l = r.type),
          (u = r.pendingProps),
          (u = r.elementType === l ? u : Xt(l, u)),
          _f(e, r, l, u, s)
        );
      case 3:
        e: {
          if ((xf(r), e === null)) throw Error(o(387));
          (l = r.pendingProps),
            (p = r.memoizedState),
            (u = p.element),
            Id(e, r),
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
              (u = G0(Error(o(423)), r)), (r = Sf(e, r, l, s, u));
              break e;
            } else if (l !== u) {
              (u = G0(Error(o(424)), r)), (r = Sf(e, r, l, s, u));
              break e;
            } else
              for (
                It = Fn(r.stateNode.containerInfo.firstChild),
                  jt = r,
                  De = !0,
                  Kt = null,
                  s = Dd(r, null, l, s),
                  r.child = s;
                s;

              )
                (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
          else {
            if ((D0(), l === u)) {
              r = vn(e, r, s);
              break e;
            }
            bt(e, r, l, s);
          }
          r = r.child;
        }
        return r;
      case 5:
        return (
          zd(r),
          e === null && Rs(r),
          (l = r.type),
          (u = r.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (g = u.children),
          ks(l, u) ? (g = null) : p !== null && ks(l, p) && (r.flags |= 32),
          yf(e, r),
          bt(e, r, g, s),
          r.child
        );
      case 6:
        return e === null && Rs(r), null;
      case 13:
        return wf(e, r, s);
      case 4:
        return (
          Vs(r, r.stateNode.containerInfo),
          (l = r.pendingProps),
          e === null ? (r.child = V0(r, null, l, s)) : bt(e, r, l, s),
          r.child
        );
      case 11:
        return (
          (l = r.type),
          (u = r.pendingProps),
          (u = r.elementType === l ? u : Xt(l, u)),
          mf(e, r, l, u, s)
        );
      case 7:
        return bt(e, r, r.pendingProps, s), r.child;
      case 8:
        return bt(e, r, r.pendingProps.children, s), r.child;
      case 12:
        return bt(e, r, r.pendingProps.children, s), r.child;
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
            if (Wt(p.value, g)) {
              if (p.children === u.children && !xt.current) {
                r = vn(e, r, s);
                break e;
              }
            } else
              for (p = r.child, p !== null && (p.return = r); p !== null; ) {
                var _ = p.dependencies;
                if (_ !== null) {
                  g = p.child;
                  for (var k = _.firstContext; k !== null; ) {
                    if (k.context === l) {
                      if (p.tag === 1) {
                        (k = bn(-1, s & -s)), (k.tag = 2);
                        var M = p.updateQueue;
                        if (M !== null) {
                          M = M.shared;
                          var z = M.pending;
                          z === null
                            ? (k.next = k)
                            : ((k.next = z.next), (z.next = k)),
                            (M.pending = k);
                        }
                      }
                      (p.lanes |= s),
                        (k = p.alternate),
                        k !== null && (k.lanes |= s),
                        $s(p.return, s, r),
                        (_.lanes |= s);
                      break;
                    }
                    k = k.next;
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
          bt(e, r, u.children, s), (r = r.child);
        }
        return r;
      case 9:
        return (
          (u = r.type),
          (l = r.pendingProps.children),
          H0(r, s),
          (u = At(u)),
          (l = l(u)),
          (r.flags |= 1),
          bt(e, r, l, s),
          r.child
        );
      case 14:
        return (
          (l = r.type),
          (u = Xt(l, r.pendingProps)),
          (u = Xt(l.type, u)),
          gf(e, r, l, u, s)
        );
      case 15:
        return bf(e, r, r.type, r.pendingProps, s);
      case 17:
        return (
          (l = r.type),
          (u = r.pendingProps),
          (u = r.elementType === l ? u : Xt(l, u)),
          da(e, r),
          (r.tag = 1),
          St(l) ? ((e = !0), Wo(r)) : (e = !1),
          H0(r, s),
          Bd(r, l, u),
          Hs(r, l, u, s),
          ol(null, r, l, !0, e, s)
        );
      case 19:
        return Cf(e, r, s);
      case 22:
        return vf(e, r, s);
    }
    throw Error(o(156, r.tag));
  };
  function Xf(e, r) {
    return Pu(e, r);
  }
  function mb(e, r, s, l) {
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
  function Ht(e, r, s, l) {
    return new mb(e, r, s, l);
  }
  function kl(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function gb(e) {
    if (typeof e == "function") return kl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === le)) return 11;
      if (e === me) return 14;
    }
    return 2;
  }
  function Vn(e, r) {
    var s = e.alternate;
    return (
      s === null
        ? ((s = Ht(e.tag, r, e.key, e.mode)),
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
    if (((l = e), typeof e == "function")) kl(e) && (g = 1);
    else if (typeof e == "string") g = 5;
    else
      e: switch (e) {
        case N:
          return u0(s.children, u, p, r);
        case K:
          (g = 8), (u |= 8);
          break;
        case pe:
          return (
            (e = Ht(12, s, r, u | 2)), (e.elementType = pe), (e.lanes = p), e
          );
        case ve:
          return (e = Ht(13, s, r, u)), (e.elementType = ve), (e.lanes = p), e;
        case xe:
          return (e = Ht(19, s, r, u)), (e.elementType = xe), (e.lanes = p), e;
        case we:
          return wa(s, u, p, r);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Se:
                g = 10;
                break e;
              case ee:
                g = 9;
                break e;
              case le:
                g = 11;
                break e;
              case me:
                g = 14;
                break e;
              case he:
                (g = 16), (l = null);
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return (
      (r = Ht(g, s, r, u)), (r.elementType = e), (r.type = l), (r.lanes = p), r
    );
  }
  function u0(e, r, s, l) {
    return (e = Ht(7, e, l, r)), (e.lanes = s), e;
  }
  function wa(e, r, s, l) {
    return (
      (e = Ht(22, e, l, r)),
      (e.elementType = we),
      (e.lanes = s),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Cl(e, r, s) {
    return (e = Ht(6, e, null, r)), (e.lanes = s), e;
  }
  function Pl(e, r, s) {
    return (
      (r = Ht(4, e.children !== null ? e.children : [], e.key, r)),
      (r.lanes = s),
      (r.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      r
    );
  }
  function bb(e, r, s, l, u) {
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
  function Ol(e, r, s, l, u, p, g, _, k) {
    return (
      (e = new bb(e, r, s, _, k)),
      r === 1 ? ((r = 1), p === !0 && (r |= 8)) : (r = 0),
      (p = Ht(3, null, null, r)),
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
  function vb(e, r, s) {
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
  function Qf(e) {
    if (!e) return Mn;
    e = e._reactInternals;
    e: {
      if (Zn(e) !== e || e.tag !== 1) throw Error(o(170));
      var r = e;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (St(r.type)) {
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
      if (St(s)) return Sd(e, s, r);
    }
    return r;
  }
  function Yf(e, r, s, l, u, p, g, _, k) {
    return (
      (e = Ol(s, l, !0, e, u, p, g, _, k)),
      (e.context = Qf(null)),
      (s = e.current),
      (l = vt()),
      (u = zn(s)),
      (p = bn(l, u)),
      (p.callback = r ?? null),
      Ln(s, p, u),
      (e.current.lanes = u),
      _r(e, u, l),
      Ct(e, l),
      e
    );
  }
  function ka(e, r, s, l) {
    var u = r.current,
      p = vt(),
      g = zn(u);
    return (
      (s = Qf(s)),
      r.context === null ? (r.context = s) : (r.pendingContext = s),
      (r = bn(p, g)),
      (r.payload = { element: e }),
      (l = l === void 0 ? null : l),
      l !== null && (r.callback = l),
      (e = Ln(u, r, g)),
      e !== null && (Zt(e, u, g, p), ea(e, u, g)),
      g
    );
  }
  function Ca(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Zf(e, r) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var s = e.retryLane;
      e.retryLane = s !== 0 && s < r ? s : r;
    }
  }
  function El(e, r) {
    Zf(e, r), (e = e.alternate) && Zf(e, r);
  }
  function yb() {
    return null;
  }
  var Jf =
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
      ka(e, r, null, null);
    }),
    (Pa.prototype.unmount = Tl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var r = e.containerInfo;
          s0(function () {
            ka(null, e, null, null);
          }),
            (r[fn] = null);
        }
      });
  function Pa(e) {
    this._internalRoot = e;
  }
  Pa.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var r = Mu();
      e = { blockedOn: null, target: e, priority: r };
      for (var s = 0; s < Tn.length && r !== 0 && r < Tn[s].priority; s++);
      Tn.splice(s, 0, e), s === 0 && Lu(e);
    }
  };
  function jl(e) {
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
  function ep() {}
  function _b(e, r, s, l, u) {
    if (u) {
      if (typeof l == "function") {
        var p = l;
        l = function () {
          var M = Ca(g);
          p.call(M);
        };
      }
      var g = Yf(r, l, e, 0, null, !1, !1, "", ep);
      return (
        (e._reactRootContainer = g),
        (e[fn] = g.current),
        Mr(e.nodeType === 8 ? e.parentNode : e),
        s0(),
        g
      );
    }
    for (; (u = e.lastChild); ) e.removeChild(u);
    if (typeof l == "function") {
      var _ = l;
      l = function () {
        var M = Ca(k);
        _.call(M);
      };
    }
    var k = Ol(e, 0, !1, null, null, !1, !1, "", ep);
    return (
      (e._reactRootContainer = k),
      (e[fn] = k.current),
      Mr(e.nodeType === 8 ? e.parentNode : e),
      s0(function () {
        ka(r, k, s, l);
      }),
      k
    );
  }
  function Ea(e, r, s, l, u) {
    var p = s._reactRootContainer;
    if (p) {
      var g = p;
      if (typeof u == "function") {
        var _ = u;
        u = function () {
          var k = Ca(g);
          _.call(k);
        };
      }
      ka(r, g, e, u);
    } else g = _b(s, r, e, u, l);
    return Ca(g);
  }
  (Fu = function (e) {
    switch (e.tag) {
      case 3:
        var r = e.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var s = yr(r.pendingLanes);
          s !== 0 &&
            (es(r, s | 1),
            Ct(r, qe()),
            (Ce & 6) === 0 && ((K0 = qe() + 500), Nn()));
        }
        break;
      case 13:
        s0(function () {
          var l = gn(e, 1);
          if (l !== null) {
            var u = vt();
            Zt(l, e, 1, u);
          }
        }),
          El(e, 1);
    }
  }),
    (ts = function (e) {
      if (e.tag === 13) {
        var r = gn(e, 134217728);
        if (r !== null) {
          var s = vt();
          Zt(r, e, 134217728, s);
        }
        El(e, 134217728);
      }
    }),
    (Ru = function (e) {
      if (e.tag === 13) {
        var r = zn(e),
          s = gn(e, r);
        if (s !== null) {
          var l = vt();
          Zt(s, e, r, l);
        }
        El(e, r);
      }
    }),
    (Mu = function () {
      return Fe;
    }),
    (Nu = function (e, r) {
      var s = Fe;
      try {
        return (Fe = e), r();
      } finally {
        Fe = s;
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
                _t(l), Ai(l, u);
              }
            }
          }
          break;
        case "textarea":
          uu(e, s);
          break;
        case "select":
          (r = s.value), r != null && C0(e, !!s.multiple, r, !1);
      }
    }),
    (yu = xl),
    (_u = s0);
  var xb = { usingClientEntryPoint: !1, Events: [Lr, N0, Go, bu, vu, xl] },
    Yr = {
      findFiberByHostInstance: Jn,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    Sb = {
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
      currentDispatcherRef: L.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = ku(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Yr.findFiberByHostInstance || yb,
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
        (Po = Ta.inject(Sb)), (tn = Ta);
      } catch {}
  }
  return (
    (Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xb),
    (Pt.createPortal = function (e, r) {
      var s =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!jl(r)) throw Error(o(200));
      return vb(e, r, null, s);
    }),
    (Pt.createRoot = function (e, r) {
      if (!jl(e)) throw Error(o(299));
      var s = !1,
        l = "",
        u = Jf;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (s = !0),
          r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (u = r.onRecoverableError)),
        (r = Ol(e, 1, !1, null, null, s, !1, l, u)),
        (e[fn] = r.current),
        Mr(e.nodeType === 8 ? e.parentNode : e),
        new Tl(r)
      );
    }),
    (Pt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var r = e._reactInternals;
      if (r === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return (e = ku(r)), (e = e === null ? null : e.stateNode), e;
    }),
    (Pt.flushSync = function (e) {
      return s0(e);
    }),
    (Pt.hydrate = function (e, r, s) {
      if (!Oa(r)) throw Error(o(200));
      return Ea(null, e, r, !0, s);
    }),
    (Pt.hydrateRoot = function (e, r, s) {
      if (!jl(e)) throw Error(o(405));
      var l = (s != null && s.hydratedSources) || null,
        u = !1,
        p = "",
        g = Jf;
      if (
        (s != null &&
          (s.unstable_strictMode === !0 && (u = !0),
          s.identifierPrefix !== void 0 && (p = s.identifierPrefix),
          s.onRecoverableError !== void 0 && (g = s.onRecoverableError)),
        (r = Yf(r, null, e, 1, s ?? null, u, !1, p, g)),
        (e[fn] = r.current),
        Mr(e),
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
    (Pt.render = function (e, r, s) {
      if (!Oa(r)) throw Error(o(200));
      return Ea(null, e, r, !1, s);
    }),
    (Pt.unmountComponentAtNode = function (e) {
      if (!Oa(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (s0(function () {
            Ea(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[fn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Pt.unstable_batchedUpdates = xl),
    (Pt.unstable_renderSubtreeIntoContainer = function (e, r, s, l) {
      if (!Oa(s)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return Ea(e, r, s, !1, l);
    }),
    (Pt.version = "18.2.0-next-9e3b772b8-20220608"),
    Pt
  );
}
var dp;
function Mh() {
  if (dp) return Nl.exports;
  dp = 1;
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
  return n(), (Nl.exports = Nb()), Nl.exports;
}
var fp;
function Bb() {
  if (fp) return ja;
  fp = 1;
  var n = Mh();
  return (ja.createRoot = n.createRoot), (ja.hydrateRoot = n.hydrateRoot), ja;
}
var Lb = Bb();
const $b = "modulepreload",
  Ab = function (n) {
    return "/" + n;
  },
  pp = {},
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
          if (((m = Ab(m)), m in pp)) return;
          pp[m] = !0;
          const b = m.endsWith(".css"),
            v = b ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${m}"]${v}`)) return;
          const y = document.createElement("link");
          if (
            ((y.rel = b ? "stylesheet" : $b),
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
let at = class extends Error {
  constructor(t) {
    super(t), (this.name = "ShikiError");
  }
};
function Db(n) {
  return Bc(n);
}
function Bc(n) {
  return Array.isArray(n)
    ? zb(n)
    : n instanceof RegExp
      ? n
      : typeof n == "object"
        ? Hb(n)
        : n;
}
function zb(n) {
  let t = [];
  for (let o = 0, a = n.length; o < a; o++) t[o] = Bc(n[o]);
  return t;
}
function Hb(n) {
  let t = {};
  for (let o in n) t[o] = Bc(n[o]);
  return t;
}
function Nh(n, ...t) {
  return (
    t.forEach((o) => {
      for (let a in o) n[a] = o[a];
    }),
    n
  );
}
function Bh(n) {
  const t = ~n.lastIndexOf("/") || ~n.lastIndexOf("\\");
  return t === 0
    ? n
    : ~t === n.length - 1
      ? Bh(n.substring(0, n.length - 1))
      : n.substr(~t + 1);
}
var $l = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g,
  Fa = class {
    static hasCaptures(n) {
      return n === null ? !1 : (($l.lastIndex = 0), $l.test(n));
    }
    static replaceCaptures(n, t, o) {
      return n.replace($l, (a, i, c, d) => {
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
function Lh(n, t) {
  return n < t ? -1 : n > t ? 1 : 0;
}
function $h(n, t) {
  if (n === null && t === null) return 0;
  if (!n) return -1;
  if (!t) return 1;
  let o = n.length,
    a = t.length;
  if (o === a) {
    for (let i = 0; i < o; i++) {
      let c = Lh(n[i], t[i]);
      if (c !== 0) return c;
    }
    return 0;
  }
  return o - a;
}
function hp(n) {
  return !!(
    /^#[0-9a-f]{6}$/i.test(n) ||
    /^#[0-9a-f]{8}$/i.test(n) ||
    /^#[0-9a-f]{3}$/i.test(n) ||
    /^#[0-9a-f]{4}$/i.test(n)
  );
}
function Ah(n) {
  return n.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
}
var Dh = class {
    constructor(n) {
      B(this, "cache", new Map());
      this.fn = n;
    }
    get(n) {
      if (this.cache.has(n)) return this.cache.get(n);
      const t = this.fn(n);
      return this.cache.set(n, t), t;
    }
  },
  ti = class {
    constructor(n, t, o) {
      B(this, "_cachedMatchRoot", new Dh((n) => this._root.match(n)));
      (this._colorMap = n), (this._defaults = t), (this._root = o);
    }
    static createFromRawTheme(n, t) {
      return this.createFromParsedTheme(Gb(n), t);
    }
    static createFromParsedTheme(n, t) {
      return Wb(n, t);
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
          .find((i) => Vb(n.parent, i.parentScopes));
      return a ? new zh(a.fontStyle, a.foreground, a.background) : null;
    }
  },
  Al = class Va {
    constructor(t, o) {
      (this.parent = t), (this.scopeName = o);
    }
    static push(t, o) {
      for (const a of o) t = new Va(t, a);
      return t;
    }
    static from(...t) {
      let o = null;
      for (let a = 0; a < t.length; a++) o = new Va(o, t[a]);
      return o;
    }
    push(t) {
      return new Va(this, t);
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
function Vb(n, t) {
  if (t.length === 0) return !0;
  for (let o = 0; o < t.length; o++) {
    let a = t[o],
      i = !1;
    if (a === ">") {
      if (o === t.length - 1) return !1;
      (a = t[++o]), (i = !0);
    }
    for (; n && !Ub(n.scopeName, a); ) {
      if (i) return !1;
      n = n.parent;
    }
    if (!n) return !1;
    n = n.parent;
  }
  return !0;
}
function Ub(n, t) {
  return t === n || (n.startsWith(t) && n[t.length] === ".");
}
var zh = class {
  constructor(n, t, o) {
    (this.fontStyle = n), (this.foregroundId = t), (this.backgroundId = o);
  }
};
function Gb(n) {
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
      hp(d.settings.foreground) &&
      (m = d.settings.foreground);
    let b = null;
    typeof d.settings.background == "string" &&
      hp(d.settings.background) &&
      (b = d.settings.background);
    for (let v = 0, y = h.length; v < y; v++) {
      let S = h[v].trim().split(" "),
        O = S[S.length - 1],
        C = null;
      S.length > 1 && ((C = S.slice(0, S.length - 1)), C.reverse()),
        (o[a++] = new qb(O, C, i, f, m, b));
    }
  }
  return o;
}
var qb = class {
    constructor(n, t, o, a, i, c) {
      (this.scope = n),
        (this.parentScopes = t),
        (this.index = o),
        (this.fontStyle = a),
        (this.foreground = i),
        (this.background = c);
    }
  },
  mt = ((n) => (
    (n[(n.NotSet = -1)] = "NotSet"),
    (n[(n.None = 0)] = "None"),
    (n[(n.Italic = 1)] = "Italic"),
    (n[(n.Bold = 2)] = "Bold"),
    (n[(n.Underline = 4)] = "Underline"),
    (n[(n.Strikethrough = 8)] = "Strikethrough"),
    n
  ))(mt || {});
function Wb(n, t) {
  n.sort((f, m) => {
    let b = Lh(f.scope, m.scope);
    return b !== 0 || ((b = $h(f.parentScopes, m.parentScopes)), b !== 0)
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
  let c = new Kb(t),
    d = new zh(o, c.getId(a), c.getId(i)),
    h = new Qb(new ic(0, null, -1, 0, 0), []);
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
  return new ti(c, d, h);
}
var Kb = class {
    constructor(n) {
      B(this, "_isFrozen");
      B(this, "_lastColorId");
      B(this, "_id2color");
      B(this, "_color2id");
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
  Xb = Object.freeze([]),
  ic = class Hh {
    constructor(t, o, a, i, c) {
      B(this, "scopeDepth");
      B(this, "parentScopes");
      B(this, "fontStyle");
      B(this, "foreground");
      B(this, "background");
      (this.scopeDepth = t),
        (this.parentScopes = o || Xb),
        (this.fontStyle = a),
        (this.foreground = i),
        (this.background = c);
    }
    clone() {
      return new Hh(
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
  Qb = class sc {
    constructor(t, o = [], a = {}) {
      B(this, "_rulesWithParentScopes");
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
      return o.sort(sc._cmpBySpecificity), o;
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
        : ((b = new sc(
            this._mainRule.clone(),
            ic.cloneArr(this._rulesWithParentScopes),
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
        if ($h(f.parentScopes, o) === 0) {
          f.acceptOverwrite(t, a, i, c);
          return;
        }
      }
      a === -1 && (a = this._mainRule.fontStyle),
        i === 0 && (i = this._mainRule.foreground),
        c === 0 && (c = this._mainRule.background),
        this._rulesWithParentScopes.push(new ic(t, o, a, i, c));
    }
  },
  rr = class Vt {
    static toBinaryStr(t) {
      return t.toString(2).padStart(32, "0");
    }
    static print(t) {
      const o = Vt.getLanguageId(t),
        a = Vt.getTokenType(t),
        i = Vt.getFontStyle(t),
        c = Vt.getForeground(t),
        d = Vt.getBackground(t);
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
      let f = Vt.getLanguageId(t),
        m = Vt.getTokenType(t),
        b = Vt.containsBalancedBrackets(t) ? 1 : 0,
        v = Vt.getFontStyle(t),
        y = Vt.getForeground(t),
        x = Vt.getBackground(t);
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
function ni(n, t) {
  const o = [],
    a = Yb(n);
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
    if (mp(i)) {
      const f = [];
      do f.push(i), (i = a.next());
      while (mp(i));
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
function mp(n) {
  return !!n && !!n.match(/[\w\.:]+/);
}
function Yb(n) {
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
function Vh(n) {
  typeof n.dispose == "function" && n.dispose();
}
var so = class {
    constructor(n) {
      this.scopeName = n;
    }
    toKey() {
      return this.scopeName;
    }
  },
  Zb = class {
    constructor(n, t) {
      (this.scopeName = n), (this.ruleName = t);
    }
    toKey() {
      return `${this.scopeName}#${this.ruleName}`;
    }
  },
  Jb = class {
    constructor() {
      B(this, "_references", []);
      B(this, "_seenReferenceKeys", new Set());
      B(this, "visitedRule", new Set());
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
  ev = class {
    constructor(n, t) {
      B(this, "seenFullScopeRequests", new Set());
      B(this, "seenPartialScopeRequests", new Set());
      B(this, "Q");
      (this.repo = n),
        (this.initialScopeName = t),
        this.seenFullScopeRequests.add(this.initialScopeName),
        (this.Q = [new so(this.initialScopeName)]);
    }
    processQueue() {
      const n = this.Q;
      this.Q = [];
      const t = new Jb();
      for (const o of n) tv(o, this.initialScopeName, this.repo, t);
      for (const o of t.references)
        if (o instanceof so) {
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
function tv(n, t, o, a) {
  const i = o.lookup(n.scopeName);
  if (!i) {
    if (n.scopeName === t) throw new Error(`No grammar provided for <${t}>`);
    return;
  }
  const c = o.lookup(t);
  n instanceof so
    ? Ua({ baseGrammar: c, selfGrammar: i }, a)
    : lc(
        n.ruleName,
        { baseGrammar: c, selfGrammar: i, repository: i.repository },
        a,
      );
  const d = o.injections(n.scopeName);
  if (d) for (const h of d) a.add(new so(h));
}
function lc(n, t, o) {
  if (t.repository && t.repository[n]) {
    const a = t.repository[n];
    ri([a], t, o);
  }
}
function Ua(n, t) {
  n.selfGrammar.patterns &&
    Array.isArray(n.selfGrammar.patterns) &&
    ri(
      n.selfGrammar.patterns,
      { ...n, repository: n.selfGrammar.repository },
      t,
    ),
    n.selfGrammar.injections &&
      ri(
        Object.values(n.selfGrammar.injections),
        { ...n, repository: n.selfGrammar.repository },
        t,
      );
}
function ri(n, t, o) {
  for (const a of n) {
    if (o.visitedRule.has(a)) continue;
    o.visitedRule.add(a);
    const i = a.repository ? Nh({}, t.repository, a.repository) : t.repository;
    Array.isArray(a.patterns) && ri(a.patterns, { ...t, repository: i }, o);
    const c = a.include;
    if (!c) continue;
    const d = Uh(c);
    switch (d.kind) {
      case 0:
        Ua({ ...t, selfGrammar: t.baseGrammar }, o);
        break;
      case 1:
        Ua(t, o);
        break;
      case 2:
        lc(d.ruleName, { ...t, repository: i }, o);
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
          d.kind === 4 ? lc(d.ruleName, f, o) : Ua(f, o);
        } else
          d.kind === 4
            ? o.add(new Zb(d.scopeName, d.ruleName))
            : o.add(new so(d.scopeName));
        break;
    }
  }
}
var nv = class {
    constructor() {
      B(this, "kind", 0);
    }
  },
  rv = class {
    constructor() {
      B(this, "kind", 1);
    }
  },
  ov = class {
    constructor(n) {
      B(this, "kind", 2);
      this.ruleName = n;
    }
  },
  av = class {
    constructor(n) {
      B(this, "kind", 3);
      this.scopeName = n;
    }
  },
  iv = class {
    constructor(n, t) {
      B(this, "kind", 4);
      (this.scopeName = n), (this.ruleName = t);
    }
  };
function Uh(n) {
  if (n === "$base") return new nv();
  if (n === "$self") return new rv();
  const t = n.indexOf("#");
  if (t === -1) return new av(n);
  if (t === 0) return new ov(n.substring(1));
  {
    const o = n.substring(0, t),
      a = n.substring(t + 1);
    return new iv(o, a);
  }
}
var sv = /\\(\d+)/,
  gp = /\\(\d+)/g,
  lv = -1,
  Gh = -2;
var vo = class {
    constructor(n, t, o, a) {
      B(this, "$location");
      B(this, "id");
      B(this, "_nameIsCapturing");
      B(this, "_name");
      B(this, "_contentNameIsCapturing");
      B(this, "_contentName");
      (this.$location = n),
        (this.id = t),
        (this._name = o || null),
        (this._nameIsCapturing = Fa.hasCaptures(this._name)),
        (this._contentName = a || null),
        (this._contentNameIsCapturing = Fa.hasCaptures(this._contentName));
    }
    get debugName() {
      const n = this.$location
        ? `${Bh(this.$location.filename)}:${this.$location.line}`
        : "unknown";
      return `${this.constructor.name}#${this.id} @ ${n}`;
    }
    getName(n, t) {
      return !this._nameIsCapturing ||
        this._name === null ||
        n === null ||
        t === null
        ? this._name
        : Fa.replaceCaptures(this._name, n, t);
    }
    getContentName(n, t) {
      return !this._contentNameIsCapturing || this._contentName === null
        ? this._contentName
        : Fa.replaceCaptures(this._contentName, n, t);
    }
  },
  cv = class extends vo {
    constructor(t, o, a, i, c) {
      super(t, o, a, i);
      B(this, "retokenizeCapturedWithRuleId");
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
  uv = class extends vo {
    constructor(t, o, a, i, c) {
      super(t, o, a, null);
      B(this, "_match");
      B(this, "captures");
      B(this, "_cachedCompiledPatterns");
      (this._match = new lo(i, this.id)),
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
          ((this._cachedCompiledPatterns = new co()),
          this.collectPatterns(t, this._cachedCompiledPatterns)),
        this._cachedCompiledPatterns
      );
    }
  },
  bp = class extends vo {
    constructor(t, o, a, i, c) {
      super(t, o, a, i);
      B(this, "hasMissingPatterns");
      B(this, "patterns");
      B(this, "_cachedCompiledPatterns");
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
          ((this._cachedCompiledPatterns = new co()),
          this.collectPatterns(t, this._cachedCompiledPatterns)),
        this._cachedCompiledPatterns
      );
    }
  },
  cc = class extends vo {
    constructor(t, o, a, i, c, d, h, f, m, b) {
      super(t, o, a, i);
      B(this, "_begin");
      B(this, "beginCaptures");
      B(this, "_end");
      B(this, "endHasBackReferences");
      B(this, "endCaptures");
      B(this, "applyEndPatternLast");
      B(this, "hasMissingPatterns");
      B(this, "patterns");
      B(this, "_cachedCompiledPatterns");
      (this._begin = new lo(c, this.id)),
        (this.beginCaptures = d),
        (this._end = new lo(h || "￿", -1)),
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
        this._cachedCompiledPatterns = new co();
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
  oi = class extends vo {
    constructor(t, o, a, i, c, d, h, f, m) {
      super(t, o, a, i);
      B(this, "_begin");
      B(this, "beginCaptures");
      B(this, "whileCaptures");
      B(this, "_while");
      B(this, "whileHasBackReferences");
      B(this, "hasMissingPatterns");
      B(this, "patterns");
      B(this, "_cachedCompiledPatterns");
      B(this, "_cachedCompiledWhilePatterns");
      (this._begin = new lo(c, this.id)),
        (this.beginCaptures = d),
        (this.whileCaptures = f),
        (this._while = new lo(h, Gh)),
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
        this._cachedCompiledPatterns = new co();
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
          ((this._cachedCompiledWhilePatterns = new co()),
          this._cachedCompiledWhilePatterns.push(
            this._while.hasBackReferences ? this._while.clone() : this._while,
          )),
        this._while.hasBackReferences &&
          this._cachedCompiledWhilePatterns.setSource(0, o || "￿"),
        this._cachedCompiledWhilePatterns
      );
    }
  },
  qh = class pt {
    static createCaptureRule(t, o, a, i, c) {
      return t.registerRule((d) => new cv(o, d, a, i, c));
    }
    static getCompiledRuleId(t, o, a) {
      return (
        t.id ||
          o.registerRule((i) => {
            if (((t.id = i), t.match))
              return new uv(
                t.$vscodeTextmateLocation,
                t.id,
                t.name,
                t.match,
                pt._compileCaptures(t.captures, o, a),
              );
            if (typeof t.begin > "u") {
              t.repository && (a = Nh({}, a, t.repository));
              let c = t.patterns;
              return (
                typeof c > "u" && t.include && (c = [{ include: t.include }]),
                new bp(
                  t.$vscodeTextmateLocation,
                  t.id,
                  t.name,
                  t.contentName,
                  pt._compilePatterns(c, o, a),
                )
              );
            }
            return t.while
              ? new oi(
                  t.$vscodeTextmateLocation,
                  t.id,
                  t.name,
                  t.contentName,
                  t.begin,
                  pt._compileCaptures(t.beginCaptures || t.captures, o, a),
                  t.while,
                  pt._compileCaptures(t.whileCaptures || t.captures, o, a),
                  pt._compilePatterns(t.patterns, o, a),
                )
              : new cc(
                  t.$vscodeTextmateLocation,
                  t.id,
                  t.name,
                  t.contentName,
                  t.begin,
                  pt._compileCaptures(t.beginCaptures || t.captures, o, a),
                  t.end,
                  pt._compileCaptures(t.endCaptures || t.captures, o, a),
                  t.applyEndPatternLast,
                  pt._compilePatterns(t.patterns, o, a),
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
          t[d].patterns && (f = pt.getCompiledRuleId(t[d], o, a)),
            (i[h] = pt.createCaptureRule(
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
            const m = Uh(h.include);
            switch (m.kind) {
              case 0:
              case 1:
                f = pt.getCompiledRuleId(a[h.include], o, a);
                break;
              case 2:
                let b = a[m.ruleName];
                b && (f = pt.getCompiledRuleId(b, o, a));
                break;
              case 3:
              case 4:
                const v = m.scopeName,
                  y = m.kind === 4 ? m.ruleName : null,
                  x = o.getExternalGrammar(v, a);
                if (x)
                  if (y) {
                    let S = x.repository[y];
                    S && (f = pt.getCompiledRuleId(S, o, x.repository));
                  } else
                    f = pt.getCompiledRuleId(
                      x.repository.$self,
                      o,
                      x.repository,
                    );
                break;
            }
          } else f = pt.getCompiledRuleId(h, o, a);
          if (f !== -1) {
            const m = o.getRule(f);
            let b = !1;
            if (
              ((m instanceof bp || m instanceof cc || m instanceof oi) &&
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
  lo = class Wh {
    constructor(t, o) {
      B(this, "source");
      B(this, "ruleId");
      B(this, "hasAnchor");
      B(this, "hasBackReferences");
      B(this, "_anchorCache");
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
          ? (this.hasBackReferences = sv.test(this.source))
          : (this.hasBackReferences = !1);
    }
    clone() {
      return new Wh(this.source, this.ruleId);
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
        (gp.lastIndex = 0),
        this.source.replace(gp, (i, c) => Ah(a[parseInt(c, 10)] || ""))
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
  co = class {
    constructor() {
      B(this, "_items");
      B(this, "_hasAnchors");
      B(this, "_cached");
      B(this, "_anchorCache");
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
        this._cached = new vp(
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
      return new vp(
        n,
        a,
        this._items.map((i) => i.ruleId),
      );
    }
  },
  vp = class {
    constructor(n, t, o) {
      B(this, "scanner");
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
  Dl = class {
    constructor(n, t) {
      (this.languageId = n), (this.tokenType = t);
    }
  },
  Sn,
  dv =
    ((Sn = class {
      constructor(t, o) {
        B(this, "_defaultAttributes");
        B(this, "_embeddedLanguagesMatcher");
        B(
          this,
          "_getBasicScopeAttributes",
          new Dh((t) => {
            const o = this._scopeToLanguage(t),
              a = this._toStandardTokenType(t);
            return new Dl(o, a);
          }),
        );
        (this._defaultAttributes = new Dl(t, 8)),
          (this._embeddedLanguagesMatcher = new fv(Object.entries(o || {})));
      }
      getDefaultAttributes() {
        return this._defaultAttributes;
      }
      getBasicScopeAttributes(t) {
        return t === null
          ? Sn._NULL_SCOPE_METADATA
          : this._getBasicScopeAttributes.get(t);
      }
      _scopeToLanguage(t) {
        return this._embeddedLanguagesMatcher.match(t) || 0;
      }
      _toStandardTokenType(t) {
        const o = t.match(Sn.STANDARD_TOKEN_TYPE_REGEXP);
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
    B(Sn, "_NULL_SCOPE_METADATA", new Dl(0, 0)),
    B(
      Sn,
      "STANDARD_TOKEN_TYPE_REGEXP",
      /\b(comment|string|regex|meta\.embedded)\b/,
    ),
    Sn),
  fv = class {
    constructor(n) {
      B(this, "values");
      B(this, "scopesRegExp");
      if (n.length === 0) (this.values = null), (this.scopesRegExp = null);
      else {
        this.values = new Map(n);
        const t = n.map(([o, a]) => Ah(o));
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
  yp = class {
    constructor(n, t) {
      (this.stack = n), (this.stoppedEarly = t);
    }
  };
function Kh(n, t, o, a, i, c, d, h) {
  const f = t.content.length;
  let m = !1,
    b = -1;
  if (d) {
    const x = pv(n, t, o, a, i, c);
    (i = x.stack), (a = x.linePos), (o = x.isFirstLine), (b = x.anchorPosition);
  }
  const v = Date.now();
  for (; !m; ) {
    if (h !== 0 && Date.now() - v > h) return new yp(i, !0);
    y();
  }
  return new yp(i, !1);
  function y() {
    const x = hv(n, t, o, a, i, b);
    if (!x) {
      c.produce(i, f), (m = !0);
      return;
    }
    const S = x.captureIndices,
      O = x.matchedRuleId,
      C = S && S.length > 0 ? S[0].end > a : !1;
    if (O === lv) {
      const P = i.getRule(n);
      c.produce(i, S[0].start),
        (i = i.withContentNameScopesList(i.nameScopesList)),
        no(n, t, o, i, c, P.endCaptures, S),
        c.produce(i, S[0].end);
      const T = i;
      if (
        ((i = i.parent), (b = T.getAnchorPos()), !C && T.getEnterPos() === a)
      ) {
        (i = T), c.produce(i, f), (m = !0);
        return;
      }
    } else {
      const P = n.getRule(O);
      c.produce(i, S[0].start);
      const T = i,
        R = P.getName(t.content, S),
        L = i.contentNameScopesList.pushAttributed(R, n);
      if (
        ((i = i.push(O, a, b, S[0].end === f, null, L, L)), P instanceof cc)
      ) {
        const j = P;
        no(n, t, o, i, c, j.beginCaptures, S),
          c.produce(i, S[0].end),
          (b = S[0].end);
        const $ = j.getContentName(t.content, S),
          N = L.pushAttributed($, n);
        if (
          ((i = i.withContentNameScopesList(N)),
          j.endHasBackReferences &&
            (i = i.withEndRule(
              j.getEndWithResolvedBackReferences(t.content, S),
            )),
          !C && T.hasSameRuleAs(i))
        ) {
          (i = i.pop()), c.produce(i, f), (m = !0);
          return;
        }
      } else if (P instanceof oi) {
        const j = P;
        no(n, t, o, i, c, j.beginCaptures, S),
          c.produce(i, S[0].end),
          (b = S[0].end);
        const $ = j.getContentName(t.content, S),
          N = L.pushAttributed($, n);
        if (
          ((i = i.withContentNameScopesList(N)),
          j.whileHasBackReferences &&
            (i = i.withEndRule(
              j.getWhileWithResolvedBackReferences(t.content, S),
            )),
          !C && T.hasSameRuleAs(i))
        ) {
          (i = i.pop()), c.produce(i, f), (m = !0);
          return;
        }
      } else if (
        (no(n, t, o, i, c, P.captures, S),
        c.produce(i, S[0].end),
        (i = i.pop()),
        !C)
      ) {
        (i = i.safePop()), c.produce(i, f), (m = !0);
        return;
      }
    }
    S[0].end > a && ((a = S[0].end), (o = !1));
  }
}
function pv(n, t, o, a, i, c) {
  let d = i.beginRuleCapturedEOL ? 0 : -1;
  const h = [];
  for (let f = i; f; f = f.pop()) {
    const m = f.getRule(n);
    m instanceof oi && h.push({ rule: m, stack: f });
  }
  for (let f = h.pop(); f; f = h.pop()) {
    const { ruleScanner: m, findOptions: b } = bv(
        f.rule,
        n,
        f.stack.endRule,
        o,
        a === d,
      ),
      v = m.findNextMatchSync(t, a, b);
    if (v) {
      if (v.ruleId !== Gh) {
        i = f.stack.pop();
        break;
      }
      v.captureIndices &&
        v.captureIndices.length &&
        (c.produce(f.stack, v.captureIndices[0].start),
        no(n, t, o, f.stack, c, f.rule.whileCaptures, v.captureIndices),
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
function hv(n, t, o, a, i, c) {
  const d = mv(n, t, o, a, i, c),
    h = n.getInjections();
  if (h.length === 0) return d;
  const f = gv(h, n, t, o, a, i, c);
  if (!f) return d;
  if (!d) return f;
  const m = d.captureIndices[0].start,
    b = f.captureIndices[0].start;
  return b < m || (f.priorityMatch && b === m) ? f : d;
}
function mv(n, t, o, a, i, c) {
  const d = i.getRule(n),
    { ruleScanner: h, findOptions: f } = Xh(d, n, i.endRule, o, a === c),
    m = h.findNextMatchSync(t, a, f);
  return m
    ? { captureIndices: m.captureIndices, matchedRuleId: m.ruleId }
    : null;
}
function gv(n, t, o, a, i, c, d) {
  let h = Number.MAX_VALUE,
    f = null,
    m,
    b = 0;
  const v = c.contentNameScopesList.getScopeNames();
  for (let y = 0, x = n.length; y < x; y++) {
    const S = n[y];
    if (!S.matcher(v)) continue;
    const O = t.getRule(S.ruleId),
      { ruleScanner: C, findOptions: P } = Xh(O, t, null, a, i === d),
      T = C.findNextMatchSync(o, i, P);
    if (!T) continue;
    const R = T.captureIndices[0].start;
    if (
      !(R >= h) &&
      ((h = R),
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
function Xh(n, t, o, a, i) {
  return { ruleScanner: n.compileAG(t, o, a, i), findOptions: 0 };
}
function bv(n, t, o, a, i) {
  return { ruleScanner: n.compileWhileAG(t, o, a, i), findOptions: 0 };
}
function no(n, t, o, a, i, c, d) {
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
        C = a.contentNameScopesList.pushAttributed(O, n),
        P = y.getContentName(h, d),
        T = C.pushAttributed(P, n),
        R = a.push(y.retokenizeCapturedWithRuleId, x.start, -1, !1, null, C, T),
        L = n.createOnigString(h.substring(0, x.end));
      Kh(n, L, o && x.start === 0, x.start, R, i, !1, 0), Vh(L);
      continue;
    }
    const S = y.getName(h, d);
    if (S !== null) {
      const C = (
        m.length > 0 ? m[m.length - 1].scopes : a.contentNameScopesList
      ).pushAttributed(S, n);
      m.push(new vv(C, x.end));
    }
  }
  for (; m.length > 0; )
    i.produceFromScopes(m[m.length - 1].scopes, m[m.length - 1].endPos),
      m.pop();
}
var vv = class {
  constructor(n, t) {
    B(this, "scopes");
    B(this, "endPos");
    (this.scopes = n), (this.endPos = t);
  }
};
function yv(n, t, o, a, i, c, d, h) {
  return new xv(n, t, o, a, i, c, d, h);
}
function _p(n, t, o, a, i) {
  const c = ni(t, ai),
    d = qh.getCompiledRuleId(o, a, i.repository);
  for (const h of c)
    n.push({
      debugSelector: t,
      matcher: h.matcher,
      ruleId: d,
      grammar: i,
      priority: h.priority,
    });
}
function ai(n, t) {
  if (t.length < n.length) return !1;
  let o = 0;
  return n.every((a) => {
    for (let i = o; i < t.length; i++) if (_v(t[i], a)) return (o = i + 1), !0;
    return !1;
  });
}
function _v(n, t) {
  if (!n) return !1;
  if (n === t) return !0;
  const o = t.length;
  return n.length > o && n.substr(0, o) === t && n[o] === ".";
}
var xv = class {
  constructor(n, t, o, a, i, c, d, h) {
    B(this, "_rootId");
    B(this, "_lastRuleId");
    B(this, "_ruleId2desc");
    B(this, "_includedGrammars");
    B(this, "_grammarRepository");
    B(this, "_grammar");
    B(this, "_injections");
    B(this, "_basicScopeAttributesProvider");
    B(this, "_tokenTypeMatchers");
    if (
      ((this._rootScopeName = n),
      (this.balancedBracketSelectors = c),
      (this._onigLib = h),
      (this._basicScopeAttributesProvider = new dv(o, a)),
      (this._rootId = -1),
      (this._lastRuleId = 0),
      (this._ruleId2desc = [null]),
      (this._includedGrammars = {}),
      (this._grammarRepository = d),
      (this._grammar = xp(t, null)),
      (this._injections = null),
      (this._tokenTypeMatchers = []),
      i)
    )
      for (const f of Object.keys(i)) {
        const m = ni(f, ai);
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
      if (i) for (let d in i) _p(t, d, i[d], this, a);
      const c = this._grammarRepository.injections(o);
      c &&
        c.forEach((d) => {
          const h = this.getExternalGrammar(d);
          if (h) {
            const f = h.injectionSelector;
            f && _p(t, f, h, this, h);
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
          (this._includedGrammars[n] = xp(o, t && t.$base)),
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
      ((this._rootId = qh.getCompiledRuleId(
        this._grammar.repository.$self,
        this,
        this._grammar.repository,
      )),
      this.getInjections());
    let i;
    if (!t || t === uc.NULL) {
      i = !0;
      const m = this._basicScopeAttributesProvider.getDefaultAttributes(),
        b = this.themeProvider.getDefaults(),
        v = rr.set(
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
        ? (x = ao.createRootAndLookUpScopeName(y, v, this))
        : (x = ao.createRoot("unknown", v)),
        (t = new uc(null, this._rootId, -1, -1, !1, null, x, x));
    } else (i = !1), t.reset();
    n =
      n +
      `
`;
    const c = this.createOnigString(n),
      d = c.content.length,
      h = new wv(o, n, this._tokenTypeMatchers, this.balancedBracketSelectors),
      f = Kh(this, c, i, 0, t, h, !0, a);
    return (
      Vh(c),
      {
        lineLength: d,
        lineTokens: h,
        ruleStack: f.stack,
        stoppedEarly: f.stoppedEarly,
      }
    );
  }
};
function xp(n, t) {
  return (
    (n = Db(n)),
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
var ao = class sn {
    constructor(t, o, a) {
      (this.parent = t), (this.scopePath = o), (this.tokenAttributes = a);
    }
    static fromExtension(t, o) {
      let a = t,
        i = (t == null ? void 0 : t.scopePath) ?? null;
      for (const c of o)
        (i = Al.push(i, c.scopeNames)),
          (a = new sn(a, i, c.encodedTokenAttributes));
      return a;
    }
    static createRoot(t, o) {
      return new sn(null, new Al(null, t), o);
    }
    static createRootAndLookUpScopeName(t, o, a) {
      const i = a.getMetadataForScope(t),
        c = new Al(null, t),
        d = a.themeProvider.themeMatch(c),
        h = sn.mergeAttributes(o, i, d);
      return new sn(null, c, h);
    }
    get scopeName() {
      return this.scopePath.scopeName;
    }
    toString() {
      return this.getScopeNames().join(" ");
    }
    equals(t) {
      return sn.equals(this, t);
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
        rr.set(t, o.languageId, o.tokenType, null, i, c, d)
      );
    }
    pushAttributed(t, o) {
      if (t === null) return this;
      if (t.indexOf(" ") === -1) return sn._pushAttributed(this, t, o);
      const a = t.split(/ /g);
      let i = this;
      for (const c of a) i = sn._pushAttributed(i, c, o);
      return i;
    }
    static _pushAttributed(t, o, a) {
      const i = a.getMetadataForScope(o),
        c = t.scopePath.push(o),
        d = a.themeProvider.themeMatch(c),
        h = sn.mergeAttributes(t.tokenAttributes, i, d);
      return new sn(t, c, h);
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
  Ut,
  uc =
    ((Ut = class {
      constructor(t, o, a, i, c, d, h, f) {
        B(this, "_stackElementBrand");
        B(this, "_enterPos");
        B(this, "_anchorPos");
        B(this, "depth");
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
        return t === null ? !1 : Ut._equals(this, t);
      }
      static _equals(t, o) {
        return t === o
          ? !0
          : this._structuralEquals(t, o)
            ? ao.equals(t.contentNameScopesList, o.contentNameScopesList)
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
        Ut._reset(this);
      }
      pop() {
        return this.parent;
      }
      safePop() {
        return this.parent ? this.parent : this;
      }
      push(t, o, a, i, c, d, h) {
        return new Ut(this, t, o, a, i, c, d, h);
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
          : new Ut(
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
        const a = ao.fromExtension(
          (t == null ? void 0 : t.nameScopesList) ?? null,
          o.nameScopesList,
        );
        return new Ut(
          t,
          o.ruleId,
          o.enterPos ?? -1,
          o.anchorPos ?? -1,
          o.beginRuleCapturedEOL,
          o.endRule,
          a,
          ao.fromExtension(a, o.contentNameScopesList),
        );
      }
    }),
    B(Ut, "NULL", new Ut(null, 0, 0, 0, !1, null, null, null)),
    Ut),
  Sv = class {
    constructor(n, t) {
      B(this, "balancedBracketScopes");
      B(this, "unbalancedBracketScopes");
      B(this, "allowAny", !1);
      (this.balancedBracketScopes = n.flatMap((o) =>
        o === "*"
          ? ((this.allowAny = !0), [])
          : ni(o, ai).map((a) => a.matcher),
      )),
        (this.unbalancedBracketScopes = t.flatMap((o) =>
          ni(o, ai).map((a) => a.matcher),
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
  wv = class {
    constructor(n, t, o, a) {
      B(this, "_emitBinaryTokens");
      B(this, "_lineText");
      B(this, "_tokens");
      B(this, "_binaryTokens");
      B(this, "_lastTokenEndIndex");
      B(this, "_tokenTypeOverrides");
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
            h.matcher(d) && (i = rr.set(i, 0, h.type, null, -1, 0, 0));
          this.balancedBracketSelectors &&
            (c = this.balancedBracketSelectors.match(d));
        }
        if (
          (c && (i = rr.set(i, 0, 8, c, -1, 0, 0)),
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
  kv = class {
    constructor(n, t) {
      B(this, "_grammars", new Map());
      B(this, "_rawGrammars", new Map());
      B(this, "_injectionGrammars", new Map());
      B(this, "_theme");
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
        this._grammars.set(n, yv(n, c, t, o, a, i, this, this._onigLib));
      }
      return this._grammars.get(n);
    }
  },
  Cv = class {
    constructor(t) {
      B(this, "_options");
      B(this, "_syncRegistry");
      B(this, "_ensureGrammarCache");
      (this._options = t),
        (this._syncRegistry = new kv(
          ti.createFromRawTheme(t.theme, t.colorMap),
          t.onigLib,
        )),
        (this._ensureGrammarCache = new Map());
    }
    dispose() {
      this._syncRegistry.dispose();
    }
    setTheme(t, o) {
      this._syncRegistry.setTheme(ti.createFromRawTheme(t, o));
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
        new Sv(
          a.balancedBracketSelectors || [],
          a.unbalancedBracketSelectors || [],
        ),
      );
    }
    loadGrammar(t) {
      return this._loadGrammar(t, 0, null, null, null);
    }
    _loadGrammar(t, o, a, i, c) {
      const d = new ev(this._syncRegistry, t);
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
  dc = uc.NULL;
const Pv = [
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
function Qh(n, t) {
  const o = {},
    a = {};
  for (const i of n) Object.assign(o, i.property), Object.assign(a, i.normal);
  return new yo(o, a, t);
}
function fc(n) {
  return n.toLowerCase();
}
class Et {
  constructor(t, o) {
    (this.attribute = o), (this.property = t);
  }
}
Et.prototype.attribute = "";
Et.prototype.booleanish = !1;
Et.prototype.boolean = !1;
Et.prototype.commaOrSpaceSeparated = !1;
Et.prototype.commaSeparated = !1;
Et.prototype.defined = !1;
Et.prototype.mustUseProperty = !1;
Et.prototype.number = !1;
Et.prototype.overloadedBoolean = !1;
Et.prototype.property = "";
Et.prototype.spaceSeparated = !1;
Et.prototype.space = void 0;
let Ov = 0;
const be = x0(),
  Xe = x0(),
  pc = x0(),
  U = x0(),
  Be = x0(),
  er = x0(),
  Rt = x0();
function x0() {
  return 2 ** ++Ov;
}
const hc = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: be,
        booleanish: Xe,
        commaOrSpaceSeparated: Rt,
        commaSeparated: er,
        number: U,
        overloadedBoolean: pc,
        spaceSeparated: Be,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  zl = Object.keys(hc);
class Lc extends Et {
  constructor(t, o, a, i) {
    let c = -1;
    if ((super(t, o), Sp(this, "space", i), typeof a == "number"))
      for (; ++c < zl.length; ) {
        const d = zl[c];
        Sp(this, zl[c], (a & hc[d]) === hc[d]);
      }
  }
}
Lc.prototype.defined = !0;
function Sp(n, t, o) {
  o && (n[t] = o);
}
function cr(n) {
  const t = {},
    o = {};
  for (const [a, i] of Object.entries(n.properties)) {
    const c = new Lc(a, n.transform(n.attributes || {}, a), i, n.space);
    n.mustUseProperty &&
      n.mustUseProperty.includes(a) &&
      (c.mustUseProperty = !0),
      (t[a] = c),
      (o[fc(a)] = a),
      (o[fc(c.attribute)] = a);
  }
  return new yo(t, o, n.space);
}
const Yh = cr({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Xe,
    ariaAutoComplete: null,
    ariaBusy: Xe,
    ariaChecked: Xe,
    ariaColCount: U,
    ariaColIndex: U,
    ariaColSpan: U,
    ariaControls: Be,
    ariaCurrent: null,
    ariaDescribedBy: Be,
    ariaDetails: null,
    ariaDisabled: Xe,
    ariaDropEffect: Be,
    ariaErrorMessage: null,
    ariaExpanded: Xe,
    ariaFlowTo: Be,
    ariaGrabbed: Xe,
    ariaHasPopup: null,
    ariaHidden: Xe,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Be,
    ariaLevel: U,
    ariaLive: null,
    ariaModal: Xe,
    ariaMultiLine: Xe,
    ariaMultiSelectable: Xe,
    ariaOrientation: null,
    ariaOwns: Be,
    ariaPlaceholder: null,
    ariaPosInSet: U,
    ariaPressed: Xe,
    ariaReadOnly: Xe,
    ariaRelevant: null,
    ariaRequired: Xe,
    ariaRoleDescription: Be,
    ariaRowCount: U,
    ariaRowIndex: U,
    ariaRowSpan: U,
    ariaSelected: Xe,
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
function Zh(n, t) {
  return t in n ? n[t] : t;
}
function Jh(n, t) {
  return Zh(n, t.toLowerCase());
}
const Ev = cr({
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
      acceptCharset: Be,
      accessKey: Be,
      action: null,
      allow: null,
      allowFullScreen: be,
      allowPaymentRequest: be,
      allowUserMedia: be,
      alt: null,
      as: null,
      async: be,
      autoCapitalize: null,
      autoComplete: Be,
      autoFocus: be,
      autoPlay: be,
      blocking: Be,
      capture: null,
      charSet: null,
      checked: be,
      cite: null,
      className: Be,
      cols: U,
      colSpan: null,
      content: null,
      contentEditable: Xe,
      controls: be,
      controlsList: Be,
      coords: U | er,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: be,
      defer: be,
      dir: null,
      dirName: null,
      disabled: be,
      download: pc,
      draggable: Xe,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: be,
      formTarget: null,
      headers: Be,
      height: U,
      hidden: pc,
      high: U,
      href: null,
      hrefLang: null,
      htmlFor: Be,
      httpEquiv: Be,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: be,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: be,
      itemId: null,
      itemProp: Be,
      itemRef: Be,
      itemScope: be,
      itemType: Be,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: be,
      low: U,
      manifest: null,
      max: null,
      maxLength: U,
      media: null,
      method: null,
      min: null,
      minLength: U,
      multiple: be,
      muted: be,
      name: null,
      nonce: null,
      noModule: be,
      noValidate: be,
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
      open: be,
      optimum: U,
      pattern: null,
      ping: Be,
      placeholder: null,
      playsInline: be,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: be,
      referrerPolicy: null,
      rel: Be,
      required: be,
      reversed: be,
      rows: U,
      rowSpan: U,
      sandbox: Be,
      scope: null,
      scoped: be,
      seamless: be,
      selected: be,
      shadowRootClonable: be,
      shadowRootDelegatesFocus: be,
      shadowRootMode: null,
      shape: null,
      size: U,
      sizes: null,
      slot: null,
      span: U,
      spellCheck: Xe,
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
      typeMustMatch: be,
      useMap: null,
      value: Xe,
      width: U,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: Be,
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
      compact: be,
      declare: be,
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
      noResize: be,
      noHref: be,
      noShade: be,
      noWrap: be,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: U,
      rules: null,
      scheme: null,
      scrolling: Xe,
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
      disablePictureInPicture: be,
      disableRemotePlayback: be,
      prefix: null,
      property: null,
      results: U,
      security: null,
      unselectable: null,
    },
    space: "html",
    transform: Jh,
  }),
  Tv = cr({
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
      className: Be,
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
      download: be,
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
      ping: Be,
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
    transform: Zh,
  }),
  em = cr({
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
  tm = cr({
    attributes: { xmlnsxlink: "xmlns:xlink" },
    properties: { xmlnsXLink: null, xmlns: null },
    space: "xmlns",
    transform: Jh,
  }),
  nm = cr({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: "xml",
    transform(n, t) {
      return "xml:" + t.slice(3).toLowerCase();
    },
  }),
  jv = /[A-Z]/g,
  wp = /-[a-z]/g,
  Iv = /^data[-\w.:]+$/i;
function Fv(n, t) {
  const o = fc(t);
  let a = t,
    i = Et;
  if (o in n.normal) return n.property[n.normal[o]];
  if (o.length > 4 && o.slice(0, 4) === "data" && Iv.test(t)) {
    if (t.charAt(4) === "-") {
      const c = t.slice(5).replace(wp, Mv);
      a = "data" + c.charAt(0).toUpperCase() + c.slice(1);
    } else {
      const c = t.slice(4);
      if (!wp.test(c)) {
        let d = c.replace(jv, Rv);
        d.charAt(0) !== "-" && (d = "-" + d), (t = "data" + d);
      }
    }
    i = Lc;
  }
  return new i(a, t);
}
function Rv(n) {
  return "-" + n.toLowerCase();
}
function Mv(n) {
  return n.charAt(1).toUpperCase();
}
const Nv = Qh([Yh, Ev, em, tm, nm], "html"),
  rm = Qh([Yh, Tv, em, tm, nm], "svg"),
  kp = {}.hasOwnProperty;
function Bv(n, t) {
  const o = t || {};
  function a(i, ...c) {
    let d = a.invalid;
    const h = a.handlers;
    if (i && kp.call(i, n)) {
      const f = String(i[n]);
      d = kp.call(h, f) ? h[f] : a.unknown;
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
const Lv = /["&'<>`]/g,
  $v = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  Av = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
  Dv = /[|\\{}()[\]^$+*?.]/g,
  Cp = new WeakMap();
function zv(n, t) {
  if (
    ((n = n.replace(t.subset ? Hv(t.subset) : Lv, a)), t.subset || t.escapeOnly)
  )
    return n;
  return n.replace($v, o).replace(Av, a);
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
function Hv(n) {
  let t = Cp.get(n);
  return t || ((t = Vv(n)), Cp.set(n, t)), t;
}
function Vv(n) {
  const t = [];
  let o = -1;
  for (; ++o < n.length; ) t.push(n[o].replace(Dv, "\\$&"));
  return new RegExp("(?:" + t.join("|") + ")", "g");
}
const Uv = /[\dA-Fa-f]/;
function Gv(n, t, o) {
  const a = "&#x" + n.toString(16).toUpperCase();
  return o && t && !Uv.test(String.fromCharCode(t)) ? a : a + ";";
}
const qv = /\d/;
function Wv(n, t, o) {
  const a = "&#" + String(n);
  return o && t && !qv.test(String.fromCharCode(t)) ? a : a + ";";
}
const Kv = [
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
  Hl = {
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
  Xv = ["cent", "copy", "divide", "gt", "lt", "not", "para", "times"],
  om = {}.hasOwnProperty,
  mc = {};
let Ra;
for (Ra in Hl) om.call(Hl, Ra) && (mc[Hl[Ra]] = Ra);
const Qv = /[^\dA-Za-z]/;
function Yv(n, t, o, a) {
  const i = String.fromCharCode(n);
  if (om.call(mc, i)) {
    const c = mc[i],
      d = "&" + c;
    return o &&
      Kv.includes(c) &&
      !Xv.includes(c) &&
      (!a || (t && t !== 61 && Qv.test(String.fromCharCode(t))))
      ? d
      : d + ";";
  }
  return "";
}
function Zv(n, t, o) {
  let a = Gv(n, t, o.omitOptionalSemicolons),
    i;
  if (
    ((o.useNamedReferences || o.useShortestReferences) &&
      (i = Yv(n, t, o.omitOptionalSemicolons, o.attribute)),
    (o.useShortestReferences || !i) && o.useShortestReferences)
  ) {
    const c = Wv(n, t, o.omitOptionalSemicolons);
    c.length < a.length && (a = c);
  }
  return i && (!o.useShortestReferences || i.length < a.length) ? i : a;
}
function tr(n, t) {
  return zv(n, Object.assign({ format: Zv }, t));
}
const Jv = /^>|^->|<!--|-->|--!>|<!-$/g,
  ey = [">"],
  ty = ["<", ">"];
function ny(n, t, o, a) {
  return a.settings.bogusComments
    ? "<?" +
        tr(
          n.value,
          Object.assign({}, a.settings.characterReferences, { subset: ey }),
        ) +
        ">"
    : "<!--" + n.value.replace(Jv, i) + "-->";
  function i(c) {
    return tr(
      c,
      Object.assign({}, a.settings.characterReferences, { subset: ty }),
    );
  }
}
function ry(n, t, o, a) {
  return (
    "<!" +
    (a.settings.upperDoctype ? "DOCTYPE" : "doctype") +
    (a.settings.tightDoctype ? "" : " ") +
    "html>"
  );
}
function Pp(n, t) {
  const o = String(n);
  if (typeof t != "string") throw new TypeError("Expected character");
  let a = 0,
    i = o.indexOf(t);
  for (; i !== -1; ) a++, (i = o.indexOf(t, i + t.length));
  return a;
}
function oy(n, t) {
  const o = t || {};
  return (n[n.length - 1] === "" ? [...n, ""] : n)
    .join((o.padRight ? " " : "") + "," + (o.padLeft === !1 ? "" : " "))
    .trim();
}
function ay(n) {
  return n.join(" ").trim();
}
const iy = /[ \t\n\f\r]/g;
function $c(n) {
  return typeof n == "object" ? (n.type === "text" ? Op(n.value) : !1) : Op(n);
}
function Op(n) {
  return n.replace(iy, "") === "";
}
const et = im(1),
  am = im(-1),
  sy = [];
function im(n) {
  return t;
  function t(o, a, i) {
    const c = o ? o.children : sy;
    let d = (a || 0) + n,
      h = c[d];
    if (!i) for (; h && $c(h); ) (d += n), (h = c[d]);
    return h;
  }
}
const ly = {}.hasOwnProperty;
function sm(n) {
  return t;
  function t(o, a, i) {
    return ly.call(n, o.tagName) && n[o.tagName](o, a, i);
  }
}
const Ac = sm({
  body: uy,
  caption: Vl,
  colgroup: Vl,
  dd: hy,
  dt: py,
  head: Vl,
  html: cy,
  li: fy,
  optgroup: my,
  option: gy,
  p: dy,
  rp: Ep,
  rt: Ep,
  tbody: vy,
  td: Tp,
  tfoot: yy,
  th: Tp,
  thead: by,
  tr: _y,
});
function Vl(n, t, o) {
  const a = et(o, t, !0);
  return (
    !a ||
    (a.type !== "comment" && !(a.type === "text" && $c(a.value.charAt(0))))
  );
}
function cy(n, t, o) {
  const a = et(o, t);
  return !a || a.type !== "comment";
}
function uy(n, t, o) {
  const a = et(o, t);
  return !a || a.type !== "comment";
}
function dy(n, t, o) {
  const a = et(o, t);
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
function fy(n, t, o) {
  const a = et(o, t);
  return !a || (a.type === "element" && a.tagName === "li");
}
function py(n, t, o) {
  const a = et(o, t);
  return !!(
    a &&
    a.type === "element" &&
    (a.tagName === "dt" || a.tagName === "dd")
  );
}
function hy(n, t, o) {
  const a = et(o, t);
  return (
    !a || (a.type === "element" && (a.tagName === "dt" || a.tagName === "dd"))
  );
}
function Ep(n, t, o) {
  const a = et(o, t);
  return (
    !a || (a.type === "element" && (a.tagName === "rp" || a.tagName === "rt"))
  );
}
function my(n, t, o) {
  const a = et(o, t);
  return !a || (a.type === "element" && a.tagName === "optgroup");
}
function gy(n, t, o) {
  const a = et(o, t);
  return (
    !a ||
    (a.type === "element" &&
      (a.tagName === "option" || a.tagName === "optgroup"))
  );
}
function by(n, t, o) {
  const a = et(o, t);
  return !!(
    a &&
    a.type === "element" &&
    (a.tagName === "tbody" || a.tagName === "tfoot")
  );
}
function vy(n, t, o) {
  const a = et(o, t);
  return (
    !a ||
    (a.type === "element" && (a.tagName === "tbody" || a.tagName === "tfoot"))
  );
}
function yy(n, t, o) {
  return !et(o, t);
}
function _y(n, t, o) {
  const a = et(o, t);
  return !a || (a.type === "element" && a.tagName === "tr");
}
function Tp(n, t, o) {
  const a = et(o, t);
  return (
    !a || (a.type === "element" && (a.tagName === "td" || a.tagName === "th"))
  );
}
const xy = sm({ body: ky, colgroup: Cy, head: wy, html: Sy, tbody: Py });
function Sy(n) {
  const t = et(n, -1);
  return !t || t.type !== "comment";
}
function wy(n) {
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
function ky(n) {
  const t = et(n, -1, !0);
  return (
    !t ||
    (t.type !== "comment" &&
      !(t.type === "text" && $c(t.value.charAt(0))) &&
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
function Cy(n, t, o) {
  const a = am(o, t),
    i = et(n, -1, !0);
  return o &&
    a &&
    a.type === "element" &&
    a.tagName === "colgroup" &&
    Ac(a, o.children.indexOf(a), o)
    ? !1
    : !!(i && i.type === "element" && i.tagName === "col");
}
function Py(n, t, o) {
  const a = am(o, t),
    i = et(n, -1);
  return o &&
    a &&
    a.type === "element" &&
    (a.tagName === "thead" || a.tagName === "tbody") &&
    Ac(a, o.children.indexOf(a), o)
    ? !1
    : !!(i && i.type === "element" && i.tagName === "tr");
}
const Ma = {
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
function Oy(n, t, o, a) {
  const i = a.schema,
    c = i.space === "svg" ? !1 : a.settings.omitOptionalTags;
  let d =
    i.space === "svg"
      ? a.settings.closeEmptyElements
      : a.settings.voids.includes(n.tagName.toLowerCase());
  const h = [];
  let f;
  i.space === "html" && n.tagName === "svg" && (a.schema = rm);
  const m = Ey(a, n.properties),
    b = a.all(i.space === "html" && n.tagName === "template" ? n.content : n);
  return (
    (a.schema = i),
    b && (d = !1),
    (m || !c || !xy(n, t, o)) &&
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
    !d && (!c || !Ac(n, t, o)) && h.push("</" + n.tagName + ">"),
    h.join("")
  );
}
function Ey(n, t) {
  const o = [];
  let a = -1,
    i;
  if (t) {
    for (i in t)
      if (t[i] !== null && t[i] !== void 0) {
        const c = Ty(n, i, t[i]);
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
function Ty(n, t, o) {
  const a = Fv(n.schema, t),
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
      subset: Ma.name[i][c],
    }),
  );
  return o === !0 ||
    ((o = Array.isArray(o)
      ? (a.commaSeparated ? oy : ay)(o, {
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
            subset: Ma.unquoted[i][c],
          }),
        )),
      h !== o &&
        (n.settings.quoteSmart &&
          Pp(o, d) > Pp(o, n.alternative) &&
          (d = n.alternative),
        (h =
          d +
          tr(
            o,
            Object.assign({}, n.settings.characterReferences, {
              subset: (d === "'" ? Ma.single : Ma.double)[i][c],
              attribute: !0,
            }),
          ) +
          d)),
      f + (h && "=" + h));
}
const jy = ["<", "&"];
function lm(n, t, o, a) {
  return o &&
    o.type === "element" &&
    (o.tagName === "script" || o.tagName === "style")
    ? n.value
    : tr(
        n.value,
        Object.assign({}, a.settings.characterReferences, { subset: jy }),
      );
}
function Iy(n, t, o, a) {
  return a.settings.allowDangerousHtml ? n.value : lm(n, t, o, a);
}
function Fy(n, t, o, a) {
  return a.all(n);
}
const Ry = Bv("type", {
  invalid: My,
  unknown: Ny,
  handlers: {
    comment: ny,
    doctype: ry,
    element: Oy,
    raw: Iy,
    root: Fy,
    text: lm,
  },
});
function My(n) {
  throw new Error("Expected node, not `" + n + "`");
}
function Ny(n) {
  const t = n;
  throw new Error("Cannot compile unknown node `" + t.type + "`");
}
const By = {},
  Ly = {},
  $y = [];
function Ay(n, t) {
  const o = t || By,
    a = o.quote || '"',
    i = a === '"' ? "'" : '"';
  if (a !== '"' && a !== "'")
    throw new Error("Invalid quote `" + a + "`, expected `'` or `\"`");
  return {
    one: Dy,
    all: zy,
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
      voids: o.voids || Pv,
      characterReferences: o.characterReferences || Ly,
      closeSelfClosing: o.closeSelfClosing || !1,
      closeEmptyElements: o.closeEmptyElements || !1,
    },
    schema: o.space === "svg" ? rm : Nv,
    quote: a,
    alternative: i,
  }.one(Array.isArray(n) ? { type: "root", children: n } : n, void 0, void 0);
}
function Dy(n, t, o) {
  return Ry(n, t, o, this);
}
function zy(n) {
  const t = [],
    o = (n && n.children) || $y;
  let a = -1;
  for (; ++a < o.length; ) t[a] = this.one(o[a], a, n);
  return t.join("");
}
function ii(n, t) {
  const o = typeof n == "string" ? {} : { ...n.colorReplacements },
    a = typeof n == "string" ? n : n.name;
  for (const [i, c] of Object.entries(
    (t == null ? void 0 : t.colorReplacements) || {},
  ))
    typeof c == "string" ? (o[i] = c) : i === a && Object.assign(o, c);
  return o;
}
function Xn(n, t) {
  return (
    n && ((t == null ? void 0 : t[n == null ? void 0 : n.toLowerCase()]) || n)
  );
}
function Hy(n) {
  return Array.isArray(n) ? n : [n];
}
async function cm(n) {
  return Promise.resolve(typeof n == "function" ? n() : n).then(
    (t) => t.default || t,
  );
}
function Dc(n) {
  return !n || ["plaintext", "txt", "text", "plain"].includes(n);
}
function Vy(n) {
  return n === "ansi" || Dc(n);
}
function zc(n) {
  return n === "none";
}
function Uy(n) {
  return zc(n);
}
function um(n, t) {
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
function Pi(n, t = !1) {
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
function Gy(n) {
  const t = Pi(n, !0).map(([i]) => i);
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
const Hc = "light-dark()";
function qy(n, t) {
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
function Wy(n, t) {
  const o = Array.from(t instanceof Set ? t : new Set(t)).sort((a, i) => a - i);
  return o.length
    ? n.map((a) =>
        a.flatMap((i) => {
          const c = o
            .filter((d) => i.offset < d && d < i.offset + i.content.length)
            .map((d) => d - i.offset)
            .sort((d, h) => d - h);
          return c.length ? qy(i, c) : i;
        }),
      )
    : n;
}
function Ky(n, t, o, a, i = "css-vars") {
  const c = {
      content: n.content,
      explanation: n.explanation,
      offset: n.offset,
    },
    d = t.map((b) => si(n.variants[b])),
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
          if (a === Hc && d.length > 1) {
            const S = t.findIndex((T) => T === "light"),
              O = t.findIndex((T) => T === "dark");
            if (S === -1 || O === -1)
              throw new at(
                'When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes',
              );
            const C = d[S][y] || "inherit",
              P = d[O][y] || "inherit";
            (f[y] = `light-dark(${C}, ${P})`),
              i === "css-vars" && (f[m(v, y)] = x);
          } else f[y] = x;
        else i === "css-vars" && (f[m(v, y)] = x);
      }
    }),
    (c.htmlStyle = f),
    c
  );
}
function si(n) {
  const t = {};
  if (
    (n.color && (t.color = n.color),
    n.bgColor && (t["background-color"] = n.bgColor),
    n.fontStyle)
  ) {
    n.fontStyle & mt.Italic && (t["font-style"] = "italic"),
      n.fontStyle & mt.Bold && (t["font-weight"] = "bold");
    const o = [];
    n.fontStyle & mt.Underline && o.push("underline"),
      n.fontStyle & mt.Strikethrough && o.push("line-through"),
      o.length && (t["text-decoration"] = o.join(" "));
  }
  return t;
}
function gc(n) {
  return typeof n == "string"
    ? n
    : Object.entries(n)
        .map(([t, o]) => `${t}:${o}`)
        .join(";");
}
const dm = new WeakMap();
function Oi(n, t) {
  dm.set(n, t);
}
function uo(n) {
  return dm.get(n);
}
class ur {
  constructor(...t) {
    B(this, "_stacks", {});
    B(this, "lang");
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
    return new ur(Object.fromEntries(Hy(o).map((a) => [a, dc])), t);
  }
  getInternalStack(t = this.theme) {
    return this._stacks[t];
  }
  getScopes(t = this.theme) {
    return Xy(this._stacks[t]);
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
function Xy(n) {
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
function Qy(n, t) {
  if (!(n instanceof ur)) throw new at("Invalid grammar state");
  return n.getInternalStack(t);
}
function Yy() {
  const n = new WeakMap();
  function t(o) {
    if (!n.has(o.meta)) {
      let a = function (d) {
        if (typeof d == "number") {
          if (d < 0 || d > o.source.length)
            throw new at(
              `Invalid decoration offset: ${d}. Code length: ${o.source.length}`,
            );
          return { ...i.indexToPos(d), offset: d };
        } else {
          const h = i.lines[d.line];
          if (h === void 0)
            throw new at(
              `Invalid decoration position ${JSON.stringify(d)}. Lines length: ${i.lines.length}`,
            );
          if (d.character < 0 || d.character > h.length)
            throw new at(
              `Invalid decoration position ${JSON.stringify(d)}. Line ${d.line} length: ${h.length}`,
            );
          return { ...d, offset: i.posToIndex(d.line, d.character) };
        }
      };
      const i = Gy(o.source),
        c = (o.options.decorations || []).map((d) => ({
          ...d,
          start: a(d.start),
          end: a(d.end),
        }));
      Zy(c), n.set(o.meta, { decorations: c, converter: i, source: o.source });
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
      return Wy(o, i);
    },
    code(o) {
      var b;
      if (!((b = this.options.decorations) != null && b.length)) return;
      const a = t(this),
        i = Array.from(o.children).filter(
          (v) => v.type === "element" && v.tagName === "span",
        );
      if (i.length !== a.converter.lines.length)
        throw new at(
          `Number of lines in code element (${i.length}) does not match the number of lines in the source (${a.converter.lines.length}). Failed to apply decorations.`,
        );
      function c(v, y, x, S) {
        const O = i[v];
        let C = "",
          P = -1,
          T = -1;
        if (
          (y === 0 && (P = 0),
          x === 0 && (T = 0),
          x === Number.POSITIVE_INFINITY && (T = O.children.length),
          P === -1 || T === -1)
        )
          for (let L = 0; L < O.children.length; L++)
            (C += fm(O.children[L])),
              P === -1 && C.length === y && (P = L + 1),
              T === -1 && C.length === x && (T = L + 1);
        if (P === -1)
          throw new at(
            `Failed to find start index for decoration ${JSON.stringify(S.start)}`,
          );
        if (T === -1)
          throw new at(
            `Failed to find end index for decoration ${JSON.stringify(S.end)}`,
          );
        const R = O.children.slice(P, T);
        if (!S.alwaysWrap && R.length === O.children.length) h(O, S, "line");
        else if (!S.alwaysWrap && R.length === 1 && R[0].type === "element")
          h(R[0], S, "token");
        else {
          const L = {
            type: "element",
            tagName: "span",
            properties: {},
            children: R,
          };
          h(L, S, "wrapper"), O.children.splice(P, R.length, L);
        }
      }
      function d(v, y) {
        i[v] = h(i[v], y, "line");
      }
      function h(v, y, x) {
        var C;
        const S = y.properties || {},
          O = y.transform || ((P) => P);
        return (
          (v.tagName = y.tagName || "span"),
          (v.properties = { ...v.properties, ...S, class: v.properties.class }),
          (C = y.properties) != null && C.class && um(v, y.properties.class),
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
function Zy(n) {
  for (let t = 0; t < n.length; t++) {
    const o = n[t];
    if (o.start.offset > o.end.offset)
      throw new at(
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
        throw new at(
          `Decorations ${JSON.stringify(o.start)} and ${JSON.stringify(i.start)} intersect.`,
        );
      }
    }
  }
}
function fm(n) {
  return n.type === "text"
    ? n.value
    : n.type === "element"
      ? n.children.map(fm).join("")
      : "";
}
const Jy = [Yy()];
function li(n) {
  return [...(n.transformers || []), ...Jy];
}
var f0 = [
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
  Ul = {
    1: "bold",
    2: "dim",
    3: "italic",
    4: "underline",
    7: "reverse",
    8: "hidden",
    9: "strikethrough",
  };
function e_(n, t) {
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
function jp(n) {
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
function t_(n) {
  const t = [];
  for (; n.length > 0; ) {
    const o = n.shift();
    if (!o) continue;
    const a = Number.parseInt(o);
    if (!Number.isNaN(a))
      if (a === 0) t.push({ type: "resetAll" });
      else if (a <= 9) Ul[a] && t.push({ type: "setDecoration", value: Ul[a] });
      else if (a <= 29) {
        const i = Ul[a - 20];
        i &&
          (t.push({ type: "resetDecoration", value: i }),
          i === "dim" && t.push({ type: "resetDecoration", value: "bold" }));
      } else if (a <= 37)
        t.push({
          type: "setForegroundColor",
          value: { type: "named", name: f0[a - 30] },
        });
      else if (a === 38) {
        const i = jp(n);
        i && t.push({ type: "setForegroundColor", value: i });
      } else if (a === 39) t.push({ type: "resetForegroundColor" });
      else if (a <= 47)
        t.push({
          type: "setBackgroundColor",
          value: { type: "named", name: f0[a - 40] },
        });
      else if (a === 48) {
        const i = jp(n);
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
                    value: { type: "named", name: f0[a - 90 + 8] },
                  })
                : a >= 100 &&
                  a <= 107 &&
                  t.push({
                    type: "setBackgroundColor",
                    value: { type: "named", name: f0[a - 100 + 8] },
                  });
  }
  return t;
}
function n_() {
  let n = null,
    t = null,
    o = new Set();
  return {
    parse(a) {
      const i = [];
      let c = 0;
      do {
        const d = e_(a, c),
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
          const f = t_(d.sequence);
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
var r_ = {
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
function o_(n = r_) {
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
    for (let m = 0; m < f0.length; m++) a.push(t(f0[m]));
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
function a_(n, t, o) {
  const a = ii(n, o),
    i = Pi(t),
    c = o_(
      Object.fromEntries(
        f0.map((h) => {
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
    d = n_();
  return i.map((h) =>
    d.parse(h[0]).map((f) => {
      let m, b;
      f.decorations.has("reverse")
        ? ((m = f.background ? c.value(f.background) : n.bg),
          (b = f.foreground ? c.value(f.foreground) : n.fg))
        : ((m = f.foreground ? c.value(f.foreground) : n.fg),
          (b = f.background ? c.value(f.background) : void 0)),
        (m = Xn(m, a)),
        (b = Xn(b, a)),
        f.decorations.has("dim") && (m = i_(m));
      let v = mt.None;
      return (
        f.decorations.has("bold") && (v |= mt.Bold),
        f.decorations.has("italic") && (v |= mt.Italic),
        f.decorations.has("underline") && (v |= mt.Underline),
        f.decorations.has("strikethrough") && (v |= mt.Strikethrough),
        { content: f.value, offset: h[1], color: m, bgColor: b, fontStyle: v }
      );
    }),
  );
}
function i_(n) {
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
function Vc(n, t, o = {}) {
  const { lang: a = "text", theme: i = n.getLoadedThemes()[0] } = o;
  if (Dc(a) || zc(i))
    return Pi(t).map((f) => [{ content: f[0], offset: f[1] }]);
  const { theme: c, colorMap: d } = n.setTheme(i);
  if (a === "ansi") return a_(c, t, o);
  const h = n.getLanguage(a);
  if (o.grammarState) {
    if (o.grammarState.lang !== h.name)
      throw new at(
        `Grammar state language "${o.grammarState.lang}" does not match highlight language "${h.name}"`,
      );
    if (!o.grammarState.themes.includes(c.name))
      throw new at(
        `Grammar state themes "${o.grammarState.themes}" do not contain highlight theme "${c.name}"`,
      );
  }
  return l_(t, h, c, d, o);
}
function s_(...n) {
  if (n.length === 2) return uo(n[1]);
  const [t, o, a = {}] = n,
    { lang: i = "text", theme: c = t.getLoadedThemes()[0] } = a;
  if (Dc(i) || zc(c))
    throw new at("Plain language does not have grammar state");
  if (i === "ansi") throw new at("ANSI language does not have grammar state");
  const { theme: d, colorMap: h } = t.setTheme(c),
    f = t.getLanguage(i);
  return new ur(ci(o, f, d, h, a).stateStack, f.name, d.name);
}
function l_(n, t, o, a, i) {
  const c = ci(n, t, o, a, i),
    d = new ur(ci(n, t, o, a, i).stateStack, t.name, o.name);
  return Oi(c.tokens, d), c.tokens;
}
function ci(n, t, o, a, i) {
  const c = ii(o, i),
    { tokenizeMaxLineLength: d = 0, tokenizeTimeLimit: h = 500 } = i,
    f = Pi(n);
  let m = i.grammarState
      ? (Qy(i.grammarState, o.name) ?? dc)
      : i.grammarContextCode != null
        ? ci(i.grammarContextCode, t, o, a, {
            ...i,
            grammarState: void 0,
            grammarContextCode: void 0,
          }).stateStack
        : dc,
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
    let C, P, T;
    i.includeExplanation &&
      ((C = t.tokenizeLine(S, m, h)), (P = C.tokens), (T = 0));
    const R = t.tokenizeLine2(S, m, h),
      L = R.tokens.length / 2;
    for (let j = 0; j < L; j++) {
      const $ = R.tokens[2 * j],
        N = j + 1 < L ? R.tokens[2 * j + 2] : S.length;
      if ($ === N) continue;
      const K = R.tokens[2 * j + 1],
        pe = Xn(a[rr.getForeground(K)], c),
        Se = rr.getFontStyle(K),
        ee = {
          content: S.substring($, N),
          offset: O + $,
          color: pe,
          fontStyle: Se,
        };
      if (i.includeExplanation) {
        const le = [];
        if (i.includeExplanation !== "scopeName")
          for (const xe of o.settings) {
            let me;
            switch (typeof xe.scope) {
              case "string":
                me = xe.scope.split(/,/).map((he) => he.trim());
                break;
              case "object":
                me = xe.scope;
                break;
              default:
                continue;
            }
            le.push({ settings: xe, selectors: me.map((he) => he.split(/ /)) });
          }
        ee.explanation = [];
        let ve = 0;
        for (; $ + ve < N; ) {
          const xe = P[T],
            me = S.substring(xe.startIndex, xe.endIndex);
          (ve += me.length),
            ee.explanation.push({
              content: me,
              scopes:
                i.includeExplanation === "scopeName"
                  ? c_(xe.scopes)
                  : u_(le, xe.scopes),
            }),
            (T += 1);
        }
      }
      b.push(ee);
    }
    v.push(b), (b = []), (m = R.ruleStack);
  }
  return { tokens: v, stateStack: m };
}
function c_(n) {
  return n.map((t) => ({ scopeName: t }));
}
function u_(n, t) {
  const o = [];
  for (let a = 0, i = t.length; a < i; a++) {
    const c = t[a];
    o[a] = { scopeName: c, themeMatches: f_(n, c, t.slice(0, a)) };
  }
  return o;
}
function Ip(n, t) {
  return n === t || (t.substring(0, n.length) === n && t[n.length] === ".");
}
function d_(n, t, o) {
  if (!Ip(n[n.length - 1], t)) return !1;
  let a = n.length - 2,
    i = o.length - 1;
  for (; a >= 0 && i >= 0; ) Ip(n[a], o[i]) && (a -= 1), (i -= 1);
  return a === -1;
}
function f_(n, t, o) {
  const a = [];
  for (const { selectors: i, settings: c } of n)
    for (const d of i)
      if (d_(d, t, o)) {
        a.push(c);
        break;
      }
  return a;
}
function pm(n, t, o) {
  const a = Object.entries(o.themes)
      .filter((f) => f[1])
      .map((f) => ({ color: f[0], theme: f[1] })),
    i = a.map((f) => {
      const m = Vc(n, t, { ...o, theme: f.theme }),
        b = uo(m),
        v = typeof f.theme == "string" ? f.theme : f.theme.name;
      return { tokens: m, state: b, theme: v };
    }),
    c = p_(...i.map((f) => f.tokens)),
    d = c[0].map((f, m) =>
      f.map((b, v) => {
        const y = { content: b.content, variants: {}, offset: b.offset };
        return (
          "includeExplanation" in o &&
            o.includeExplanation &&
            (y.explanation = b.explanation),
          c.forEach((x, S) => {
            const { content: O, explanation: C, offset: P, ...T } = x[m][v];
            y.variants[a[S].color] = T;
          }),
          y
        );
      }),
    ),
    h = i[0].state
      ? new ur(
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
  return h && Oi(d, h), d;
}
function p_(...n) {
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
function ui(n, t, o) {
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
    if (y.length === 0) throw new at("`themes` option must not be empty");
    const x = pm(n, t, o);
    if (((f = uo(x)), m && Hc !== m && !y.find((P) => P.color === m)))
      throw new at(
        `\`themes\` option must contain the defaultColor key \`${m}\``,
      );
    const S = y.map((P) => n.getTheme(P.theme)),
      O = y.map((P) => P.color);
    (c = x.map((P) => P.map((T) => Ky(T, O, b, m, v)))), f && Oi(c, f);
    const C = y.map((P) => ii(P.theme, o));
    (i = Fp(y, S, C, b, m, "fg", v)),
      (a = Fp(y, S, C, b, m, "bg", v)),
      (d = `shiki-themes ${S.map((P) => P.name).join(" ")}`),
      (h = m ? void 0 : [i, a].join(";"));
  } else if ("theme" in o) {
    const m = ii(o.theme, o);
    c = Vc(n, t, o);
    const b = n.getTheme(o.theme);
    (a = Xn(b.bg, m)), (i = Xn(b.fg, m)), (d = b.name), (f = uo(c));
  } else
    throw new at(
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
function Fp(n, t, o, a, i, c, d) {
  return n
    .map((h, f) => {
      const m = Xn(t[f][c], o[f]) || "inherit",
        b = `${a + h.color}${c === "bg" ? "-bg" : ""}:${m}`;
      if (f === 0 && i) {
        if (i === Hc && n.length > 1) {
          const v = n.findIndex((O) => O.color === "light"),
            y = n.findIndex((O) => O.color === "dark");
          if (v === -1 || y === -1)
            throw new at(
              'When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes',
            );
          const x = Xn(t[v][c], o[v]) || "inherit",
            S = Xn(t[y][c], o[y]) || "inherit";
          return `light-dark(${x}, ${S});${b}`;
        }
        return m;
      }
      return d === "css-vars" ? b : null;
    })
    .filter((h) => !!h)
    .join(";");
}
function di(
  n,
  t,
  o,
  a = {
    meta: {},
    options: o,
    codeToHast: (i, c) => di(n, i, c),
    codeToTokens: (i, c) => ui(n, i, c),
  },
) {
  var S, O;
  let i = t;
  for (const C of li(o))
    i = ((S = C.preprocess) == null ? void 0 : S.call(a, i, o)) || i;
  let {
    tokens: c,
    fg: d,
    bg: h,
    themeName: f,
    rootStyle: m,
    grammarState: b,
  } = ui(n, i, o);
  const { mergeWhitespaces: v = !0, mergeSameStyleTokens: y = !1 } = o;
  v === !0 ? (c = m_(c)) : v === "never" && (c = g_(c)), y && (c = b_(c));
  const x = {
    ...a,
    get source() {
      return i;
    },
  };
  for (const C of li(o))
    c = ((O = C.tokens) == null ? void 0 : O.call(x, c)) || c;
  return h_(c, { ...o, fg: d, bg: h, themeName: f, rootStyle: m }, x, b);
}
function h_(n, t, o, a = uo(n)) {
  var S, O, C;
  const i = li(t),
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
      addClassToHast: um,
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
      var j, $;
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
      let R = {
          type: "element",
          tagName: "span",
          properties: { class: "line" },
          children: [],
        },
        L = 0;
      for (const N of P) {
        let K = {
          type: "element",
          tagName: "span",
          properties: { ...N.htmlAttrs },
          children: [{ type: "text", value: N.content }],
        };
        const pe = gc(N.htmlStyle || si(N));
        pe && (K.properties.style = pe);
        for (const Se of i)
          K =
            ((j = Se == null ? void 0 : Se.span) == null
              ? void 0
              : j.call(y, K, T + 1, L, R, N)) || K;
        h === "inline"
          ? d.children.push(K)
          : h === "classic" && R.children.push(K),
          (L += N.content.length);
      }
      if (h === "classic") {
        for (const N of i)
          R =
            (($ = N == null ? void 0 : N.line) == null
              ? void 0
              : $.call(y, R, T + 1)) || R;
        v.push(R), c.push(R);
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
      ((C = P == null ? void 0 : P.root) == null ? void 0 : C.call(y, x)) || x;
  return a && Oi(x, a), x;
}
function m_(n) {
  return n.map((t) => {
    const o = [];
    let a = "",
      i = 0;
    return (
      t.forEach((c, d) => {
        const f = !(
          c.fontStyle &&
          (c.fontStyle & mt.Underline || c.fontStyle & mt.Strikethrough)
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
function g_(n) {
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
function b_(n) {
  return n.map((t) => {
    const o = [];
    for (const a of t) {
      if (o.length === 0) {
        o.push({ ...a });
        continue;
      }
      const i = o[o.length - 1],
        c = gc(i.htmlStyle || si(i)),
        d = gc(a.htmlStyle || si(a)),
        h =
          i.fontStyle &&
          (i.fontStyle & mt.Underline || i.fontStyle & mt.Strikethrough),
        f =
          a.fontStyle &&
          (a.fontStyle & mt.Underline || a.fontStyle & mt.Strikethrough);
      !h && !f && c === d ? (i.content += a.content) : o.push({ ...a });
    }
    return o;
  });
}
const v_ = Ay;
function y_(n, t, o) {
  var c;
  const a = {
    meta: {},
    options: o,
    codeToHast: (d, h) => di(n, d, h),
    codeToTokens: (d, h) => ui(n, d, h),
  };
  let i = v_(di(n, t, o, a));
  for (const d of li(o))
    i = ((c = d.postprocess) == null ? void 0 : c.call(a, i, o)) || i;
  return i;
}
const Rp = { light: "#333333", dark: "#bbbbbb" },
  Mp = { light: "#fffffe", dark: "#1e1e1e" },
  Np = "__shiki_resolved";
function Uc(n) {
  var h, f, m, b, v;
  if (n != null && n[Np]) return n;
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
      a || (a = t.type === "light" ? Rp.light : Rp.dark),
      o || (o = t.type === "light" ? Mp.light : Mp.dark),
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
    var C, P;
    const x =
        ((C = y.settings) == null ? void 0 : C.foreground) &&
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
    Object.defineProperty(t, Np, { enumerable: !1, writable: !1, value: !0 }), t
  );
}
async function hm(n) {
  return Array.from(
    new Set(
      (
        await Promise.all(
          n
            .filter((t) => !Vy(t))
            .map(
              async (t) =>
                await cm(t).then((o) => (Array.isArray(o) ? o : [o])),
            ),
        )
      ).flat(),
    ),
  );
}
async function mm(n) {
  return (
    await Promise.all(n.map(async (o) => (Uy(o) ? null : Uc(await cm(o)))))
  ).filter((o) => !!o);
}
let __ = 3;
function x_(n, t = 3) {
  t > __ || console.trace(`[SHIKI DEPRECATE]: ${n}`);
}
class Z0 extends Error {
  constructor(t) {
    super(t), (this.name = "ShikiError");
  }
}
class S_ extends Cv {
  constructor(o, a, i, c = {}) {
    super(o);
    B(this, "_resolvedThemes", new Map());
    B(this, "_resolvedGrammars", new Map());
    B(this, "_langMap", new Map());
    B(this, "_langGraph", new Map());
    B(this, "_textmateThemeCache", new WeakMap());
    B(this, "_loadedThemesCache", null);
    B(this, "_loadedLanguagesCache", null);
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
    const a = Uc(o);
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
    a || ((a = ti.createFromRawTheme(o)), this._textmateThemeCache.set(o, a)),
      this._syncRegistry.setTheme(a);
  }
  getGrammar(o) {
    if (this._alias[o]) {
      const a = new Set([o]);
      for (; this._alias[o]; ) {
        if (((o = this._alias[o]), a.has(o)))
          throw new Z0(
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
      throw new Z0(
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
class w_ {
  constructor(t, o) {
    B(this, "_langs", new Map());
    B(this, "_scopeToLang", new Map());
    B(this, "_injections", new Map());
    B(this, "_onigLib");
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
function k_(n) {
  (Jr += 1),
    n.warnings !== !1 &&
      Jr >= 10 &&
      Jr % 10 === 0 &&
      console.warn(
        `[Shiki] ${Jr} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`,
      );
  let t = !1;
  if (!n.engine)
    throw new Z0("`engine` option is required for synchronous mode");
  const o = (n.langs || []).flat(1),
    a = (n.themes || []).flat(1).map(Uc),
    i = new w_(n.engine, o),
    c = new S_(i, a, o, n.langAlias);
  let d;
  function h(T) {
    C();
    const R = c.getGrammar(typeof T == "string" ? T : T.name);
    if (!R)
      throw new Z0(
        `Language \`${T}\` not found, you may need to load it first`,
      );
    return R;
  }
  function f(T) {
    if (T === "none")
      return { bg: "", fg: "", name: "none", settings: [], type: "dark" };
    C();
    const R = c.getTheme(T);
    if (!R)
      throw new Z0(`Theme \`${T}\` not found, you may need to load it first`);
    return R;
  }
  function m(T) {
    C();
    const R = f(T);
    d !== T && (c.setTheme(R), (d = T));
    const L = c.getColorMap();
    return { theme: R, colorMap: L };
  }
  function b() {
    return C(), c.getLoadedThemes();
  }
  function v() {
    return C(), c.getLoadedLanguages();
  }
  function y(...T) {
    C(), c.loadLanguages(T.flat(1));
  }
  async function x(...T) {
    return y(await hm(T));
  }
  function S(...T) {
    C();
    for (const R of T.flat(1)) c.loadTheme(R);
  }
  async function O(...T) {
    return C(), S(await mm(T));
  }
  function C() {
    if (t) throw new Z0("Shiki instance has been disposed");
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
async function C_(n) {
  n.engine ||
    x_(
      "`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.",
    );
  const [t, o, a] = await Promise.all([
    mm(n.themes || []),
    hm(n.langs || []),
    n.engine,
  ]);
  return k_({ ...n, themes: t, langs: o, engine: a });
}
async function P_(n) {
  const t = await C_(n);
  return {
    getLastGrammarState: (...o) => s_(t, ...o),
    codeToTokensBase: (o, a) => Vc(t, o, a),
    codeToTokensWithThemes: (o, a) => pm(t, o, a),
    codeToTokens: (o, a) => ui(t, o, a),
    codeToHast: (o, a) => di(t, o, a),
    codeToHtml: (o, a) => y_(t, o, a),
    getBundledLanguages: () => ({}),
    getBundledThemes: () => ({}),
    ...t,
    getInternalContext: () => t,
  };
}
function O_(n) {
  return n.replace(/[- _]+/g, "").toLowerCase();
}
const E_ = String.raw`(?:[?*+]|\{\d+(?:,\d*)?\})`;
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
| (?<qBase>${E_})(?<qMod>[?+]?)(?<invalidQ>[?*+\{]?)
| \\?.
`.replace(/\s+/g, ""),
  "gsu",
);
var T_ = String.fromCodePoint,
  j_ = String.raw,
  fi = {
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
fi.bugFlagVLiteralHyphenIsRange = fi.unicodeSets
  ? (() => {
      try {
        new RegExp(j_`[\d\-a]`, "v");
      } catch {
        return !0;
      }
      return !1;
    })()
  : !1;
fi.bugNestedClassIgnoresNegation =
  fi.unicodeSets && new RegExp("[[^a]]", "v").test("a");
function I_(n, t, o) {
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
  .map((n) => [O_(n), n]);
new Map([
  Gn(453),
  Gn(456),
  Gn(459),
  Gn(498),
  ...Gl(8072, 8079),
  ...Gl(8088, 8095),
  ...Gl(8104, 8111),
  Gn(8124),
  Gn(8140),
  Gn(8188),
]);
function F_(n, t) {
  const o = [];
  for (let a = n; a <= t; a++) o.push(a);
  return o;
}
function Gn(n) {
  const t = T_(n);
  return [t.toLowerCase(), t];
}
function Gl(n, t) {
  return F_(n, t).map((o) => Gn(o));
}
var Wn,
  xn,
  h0,
  Kn,
  m0,
  bo,
  bc,
  Qn,
  Te =
    ((Qn = class extends RegExp {
      constructor(o, a, i) {
        var t = (...xk) => (
          super(...xk),
          d0(this, bo),
          d0(this, Wn, new Map()),
          d0(this, xn, null),
          d0(this, h0),
          d0(this, Kn, null),
          d0(this, m0, null),
          B(this, "rawOptions", {}),
          this
        );
        const c = !!(i != null && i.lazyCompile);
        if (o instanceof RegExp) {
          if (i)
            throw new Error("Cannot provide options when copying a regexp");
          const d = o;
          t(d, a),
            Jt(this, h0, d.source),
            d instanceof Qn &&
              (Jt(this, Wn, yt(d, Wn)),
              Jt(this, Kn, yt(d, Kn)),
              Jt(this, m0, yt(d, m0)),
              (this.rawOptions = d.rawOptions));
        } else {
          const d = { hiddenCaptures: [], strategy: null, transfers: [], ...i };
          t(c ? "" : o, a),
            Jt(this, h0, o),
            Jt(this, Wn, M_(d.hiddenCaptures, d.transfers)),
            Jt(this, m0, d.strategy),
            (this.rawOptions = i ?? {});
        }
        c || Jt(this, xn, this);
      }
      get source() {
        return yt(this, h0) || "(?:)";
      }
      exec(o) {
        if (!yt(this, xn)) {
          const { lazyCompile: c, ...d } = this.rawOptions;
          Jt(this, xn, new Qn(yt(this, h0), this.flags, d));
        }
        const a = this.global || this.sticky,
          i = this.lastIndex;
        if (yt(this, m0) === "clip_search" && a && i) {
          this.lastIndex = 0;
          const c = Fl(this, bo, bc).call(this, o.slice(i));
          return c && (R_(c, i, o, this.hasIndices), (this.lastIndex += i)), c;
        }
        return Fl(this, bo, bc).call(this, o);
      }
    }),
    (Wn = new WeakMap()),
    (xn = new WeakMap()),
    (h0 = new WeakMap()),
    (Kn = new WeakMap()),
    (m0 = new WeakMap()),
    (bo = new WeakSet()),
    (bc = function (o) {
      yt(this, xn).lastIndex = this.lastIndex;
      const a = np(Qn.prototype, this, "exec").call(yt(this, xn), o);
      if (((this.lastIndex = yt(this, xn).lastIndex), !a || !yt(this, Wn).size))
        return a;
      const i = [...a];
      a.length = 1;
      let c;
      this.hasIndices && ((c = [...a.indices]), (a.indices.length = 1));
      const d = [0];
      for (let h = 1; h < i.length; h++) {
        const { hidden: f, transferTo: m } = yt(this, Wn).get(h) ?? {};
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
            yt(this, Kn) || Jt(this, Kn, N_(this.source));
            const v = yt(this, Kn).get(m);
            v &&
              ((a.groups[v] = i[h]),
              this.hasIndices && (a.indices.groups[v] = c[h]));
          }
        }
      }
      return a;
    }),
    Qn);
function R_(n, t, o, a) {
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
function M_(n, t) {
  const o = new Map();
  for (const a of n) o.set(a, { hidden: !0 });
  for (const [a, i] of t) for (const c of i) I_(o, c, {}).transferTo = a;
  return o;
}
function N_(n) {
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
const Bp = 4294967295;
class B_ {
  constructor(t, o = {}) {
    B(this, "regexps");
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
            ? { start: Bp, end: Bp, length: 0 }
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
function L_() {
  const n = {
    cache: new Map(),
    regexConstructor: () => {
      throw new Error("JavaScriptRawEngine: only support precompiled grammar");
    },
  };
  return {
    createScanner(t) {
      return new B_(t, n);
    },
    createString(t) {
      return { content: t };
    },
  };
}
var gt = function () {
  return (
    (gt =
      Object.assign ||
      function (t) {
        for (var o, a = 1, i = arguments.length; a < i; a++) {
          o = arguments[a];
          for (var c in o)
            Object.prototype.hasOwnProperty.call(o, c) && (t[c] = o[c]);
        }
        return t;
      }),
    gt.apply(this, arguments)
  );
};
function pi(n, t, o) {
  if (o || arguments.length === 2)
    for (var a = 0, i = t.length, c; a < i; a++)
      (c || !(a in t)) &&
        (c || (c = Array.prototype.slice.call(t, 0, a)), (c[a] = t[a]));
  return n.concat(c || Array.prototype.slice.call(t));
}
var Ae = "-ms-",
  io = "-moz-",
  Ie = "-webkit-",
  gm = "comm",
  Ei = "rule",
  Gc = "decl",
  $_ = "@import",
  bm = "@keyframes",
  A_ = "@layer",
  vm = Math.abs,
  qc = String.fromCharCode,
  vc = Object.assign;
function D_(n, t) {
  return ot(n, 0) ^ 45
    ? (((((((t << 2) ^ ot(n, 0)) << 2) ^ ot(n, 1)) << 2) ^ ot(n, 2)) << 2) ^
        ot(n, 3)
    : 0;
}
function ym(n) {
  return n.trim();
}
function _n(n, t) {
  return (n = t.exec(n)) ? n[0] : n;
}
function _e(n, t, o) {
  return n.replace(t, o);
}
function Ga(n, t, o) {
  return n.indexOf(t, o);
}
function ot(n, t) {
  return n.charCodeAt(t) | 0;
}
function or(n, t, o) {
  return n.slice(t, o);
}
function ln(n) {
  return n.length;
}
function _m(n) {
  return n.length;
}
function ro(n, t) {
  return t.push(n), n;
}
function z_(n, t) {
  return n.map(t).join("");
}
function Lp(n, t) {
  return n.filter(function (o) {
    return !_n(o, t);
  });
}
var Ti = 1,
  ar = 1,
  xm = 0,
  Gt = 0,
  Qe = 0,
  dr = "";
function ji(n, t, o, a, i, c, d, h) {
  return {
    value: n,
    root: t,
    parent: o,
    type: a,
    props: i,
    children: c,
    line: Ti,
    column: ar,
    length: d,
    return: "",
    siblings: h,
  };
}
function qn(n, t) {
  return vc(
    ji("", null, null, "", null, null, 0, n.siblings),
    n,
    { length: -n.length },
    t,
  );
}
function Q0(n) {
  for (; n.root; ) n = qn(n.root, { children: [n] });
  ro(n, n.siblings);
}
function H_() {
  return Qe;
}
function V_() {
  return (
    (Qe = Gt > 0 ? ot(dr, --Gt) : 0), ar--, Qe === 10 && ((ar = 1), Ti--), Qe
  );
}
function en() {
  return (
    (Qe = Gt < xm ? ot(dr, Gt++) : 0), ar++, Qe === 10 && ((ar = 1), Ti++), Qe
  );
}
function g0() {
  return ot(dr, Gt);
}
function qa() {
  return Gt;
}
function Ii(n, t) {
  return or(dr, n, t);
}
function yc(n) {
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
function U_(n) {
  return (Ti = ar = 1), (xm = ln((dr = n))), (Gt = 0), [];
}
function G_(n) {
  return (dr = ""), n;
}
function ql(n) {
  return ym(Ii(Gt - 1, _c(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function q_(n) {
  for (; (Qe = g0()) && Qe < 33; ) en();
  return yc(n) > 2 || yc(Qe) > 3 ? "" : " ";
}
function W_(n, t) {
  for (
    ;
    --t &&
    en() &&
    !(Qe < 48 || Qe > 102 || (Qe > 57 && Qe < 65) || (Qe > 70 && Qe < 97));

  );
  return Ii(n, qa() + (t < 6 && g0() == 32 && en() == 32));
}
function _c(n) {
  for (; en(); )
    switch (Qe) {
      case n:
        return Gt;
      case 34:
      case 39:
        n !== 34 && n !== 39 && _c(Qe);
        break;
      case 40:
        n === 41 && _c(n);
        break;
      case 92:
        en();
        break;
    }
  return Gt;
}
function K_(n, t) {
  for (; en() && n + Qe !== 57; ) if (n + Qe === 84 && g0() === 47) break;
  return "/*" + Ii(t, Gt - 1) + "*" + qc(n === 47 ? n : en());
}
function X_(n) {
  for (; !yc(g0()); ) en();
  return Ii(n, Gt);
}
function Q_(n) {
  return G_(Wa("", null, null, null, [""], (n = U_(n)), 0, [0], n));
}
function Wa(n, t, o, a, i, c, d, h, f) {
  for (
    var m = 0,
      b = 0,
      v = d,
      y = 0,
      x = 0,
      S = 0,
      O = 1,
      C = 1,
      P = 1,
      T = 0,
      R = "",
      L = i,
      j = c,
      $ = a,
      N = R;
    C;

  )
    switch (((S = T), (T = en()))) {
      case 40:
        if (S != 108 && ot(N, v - 1) == 58) {
          Ga((N += _e(ql(T), "&", "&\f")), "&\f", vm(m ? h[m - 1] : 0)) != -1 &&
            (P = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        N += ql(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        N += q_(S);
        break;
      case 92:
        N += W_(qa() - 1, 7);
        continue;
      case 47:
        switch (g0()) {
          case 42:
          case 47:
            ro(Y_(K_(en(), qa()), t, o, f), f);
            break;
          default:
            N += "/";
        }
        break;
      case 123 * O:
        h[m++] = ln(N) * P;
      case 125 * O:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            C = 0;
          case 59 + b:
            P == -1 && (N = _e(N, /\f/g, "")),
              x > 0 &&
                ln(N) - v &&
                ro(
                  x > 32
                    ? Ap(N + ";", a, o, v - 1, f)
                    : Ap(_e(N, " ", "") + ";", a, o, v - 2, f),
                  f,
                );
            break;
          case 59:
            N += ";";
          default:
            if (
              (ro(
                ($ = $p(N, t, o, m, b, i, h, R, (L = []), (j = []), v, c)),
                c,
              ),
              T === 123)
            )
              if (b === 0) Wa(N, t, $, $, L, c, v, h, j);
              else
                switch (y === 99 && ot(N, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Wa(
                      n,
                      $,
                      $,
                      a && ro($p(n, $, $, 0, 0, i, h, R, i, (L = []), v, j), j),
                      i,
                      j,
                      v,
                      h,
                      a ? L : j,
                    );
                    break;
                  default:
                    Wa(N, $, $, $, [""], j, 0, h, j);
                }
        }
        (m = b = x = 0), (O = P = 1), (R = N = ""), (v = d);
        break;
      case 58:
        (v = 1 + ln(N)), (x = S);
      default:
        if (O < 1) {
          if (T == 123) --O;
          else if (T == 125 && O++ == 0 && V_() == 125) continue;
        }
        switch (((N += qc(T)), T * O)) {
          case 38:
            P = b > 0 ? 1 : ((N += "\f"), -1);
            break;
          case 44:
            (h[m++] = (ln(N) - 1) * P), (P = 1);
            break;
          case 64:
            g0() === 45 && (N += ql(en())),
              (y = g0()),
              (b = v = ln((R = N += X_(qa())))),
              T++;
            break;
          case 45:
            S === 45 && ln(N) == 2 && (O = 0);
        }
    }
  return c;
}
function $p(n, t, o, a, i, c, d, h, f, m, b, v) {
  for (
    var y = i - 1, x = i === 0 ? c : [""], S = _m(x), O = 0, C = 0, P = 0;
    O < a;
    ++O
  )
    for (var T = 0, R = or(n, y + 1, (y = vm((C = d[O])))), L = n; T < S; ++T)
      (L = ym(C > 0 ? x[T] + " " + R : _e(R, /&\f/g, x[T]))) && (f[P++] = L);
  return ji(n, t, o, i === 0 ? Ei : h, f, m, b, v);
}
function Y_(n, t, o, a) {
  return ji(n, t, o, gm, qc(H_()), or(n, 2, -2), 0, a);
}
function Ap(n, t, o, a, i) {
  return ji(n, t, o, Gc, or(n, 0, a), or(n, a + 1, -1), a, i);
}
function Sm(n, t, o) {
  switch (D_(n, t)) {
    case 5103:
      return Ie + "print-" + n + n;
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
      return Ie + n + n;
    case 4789:
      return io + n + n;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ie + n + io + n + Ae + n + n;
    case 5936:
      switch (ot(n, t + 11)) {
        case 114:
          return Ie + n + Ae + _e(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        case 108:
          return Ie + n + Ae + _e(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        case 45:
          return Ie + n + Ae + _e(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
    case 6828:
    case 4268:
    case 2903:
      return Ie + n + Ae + n + n;
    case 6165:
      return Ie + n + Ae + "flex-" + n + n;
    case 5187:
      return (
        Ie + n + _e(n, /(\w+).+(:[^]+)/, Ie + "box-$1$2" + Ae + "flex-$1$2") + n
      );
    case 5443:
      return (
        Ie +
        n +
        Ae +
        "flex-item-" +
        _e(n, /flex-|-self/g, "") +
        (_n(n, /flex-|baseline/)
          ? ""
          : Ae + "grid-row-" + _e(n, /flex-|-self/g, "")) +
        n
      );
    case 4675:
      return (
        Ie +
        n +
        Ae +
        "flex-line-pack" +
        _e(n, /align-content|flex-|-self/g, "") +
        n
      );
    case 5548:
      return Ie + n + Ae + _e(n, "shrink", "negative") + n;
    case 5292:
      return Ie + n + Ae + _e(n, "basis", "preferred-size") + n;
    case 6060:
      return (
        Ie +
        "box-" +
        _e(n, "-grow", "") +
        Ie +
        n +
        Ae +
        _e(n, "grow", "positive") +
        n
      );
    case 4554:
      return Ie + _e(n, /([^-])(transform)/g, "$1" + Ie + "$2") + n;
    case 6187:
      return (
        _e(
          _e(_e(n, /(zoom-|grab)/, Ie + "$1"), /(image-set)/, Ie + "$1"),
          n,
          "",
        ) + n
      );
    case 5495:
    case 3959:
      return _e(n, /(image-set\([^]*)/, Ie + "$1$`$1");
    case 4968:
      return (
        _e(
          _e(n, /(.+:)(flex-)?(.*)/, Ie + "box-pack:$3" + Ae + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        Ie +
        n +
        n
      );
    case 4200:
      if (!_n(n, /flex-|baseline/))
        return Ae + "grid-column-align" + or(n, t) + n;
      break;
    case 2592:
    case 3360:
      return Ae + _e(n, "template-", "") + n;
    case 4384:
    case 3616:
      return o &&
        o.some(function (a, i) {
          return (t = i), _n(a.props, /grid-\w+-end/);
        })
        ? ~Ga(n + (o = o[t].value), "span", 0)
          ? n
          : Ae +
            _e(n, "-start", "") +
            n +
            Ae +
            "grid-row-span:" +
            (~Ga(o, "span", 0) ? _n(o, /\d+/) : +_n(o, /\d+/) - +_n(n, /\d+/)) +
            ";"
        : Ae + _e(n, "-start", "") + n;
    case 4896:
    case 4128:
      return o &&
        o.some(function (a) {
          return _n(a.props, /grid-\w+-start/);
        })
        ? n
        : Ae + _e(_e(n, "-end", "-span"), "span ", "") + n;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return _e(n, /(.+)-inline(.+)/, Ie + "$1$2") + n;
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
      if (ln(n) - 1 - t > 6)
        switch (ot(n, t + 1)) {
          case 109:
            if (ot(n, t + 4) !== 45) break;
          case 102:
            return (
              _e(
                n,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Ie +
                  "$2-$3$1" +
                  io +
                  (ot(n, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + n
            );
          case 115:
            return ~Ga(n, "stretch", 0)
              ? Sm(_e(n, "stretch", "fill-available"), t, o) + n
              : n;
        }
      break;
    case 5152:
    case 5920:
      return _e(
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
      if (ot(n, t + 6) === 121) return _e(n, ":", ":" + Ie) + n;
      break;
    case 6444:
      switch (ot(n, ot(n, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            _e(
              n,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                Ie +
                (ot(n, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Ie +
                "$2$3$1" +
                Ae +
                "$2box$3",
            ) + n
          );
        case 100:
          return _e(n, ":", ":" + Ae) + n;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return _e(n, "scroll-", "scroll-snap-") + n;
  }
  return n;
}
function hi(n, t) {
  for (var o = "", a = 0; a < n.length; a++) o += t(n[a], a, n, t) || "";
  return o;
}
function Z_(n, t, o, a) {
  switch (n.type) {
    case A_:
      if (n.children.length) break;
    case $_:
    case Gc:
      return (n.return = n.return || n.value);
    case gm:
      return "";
    case bm:
      return (n.return = n.value + "{" + hi(n.children, a) + "}");
    case Ei:
      if (!ln((n.value = n.props.join(",")))) return "";
  }
  return ln((o = hi(n.children, a)))
    ? (n.return = n.value + "{" + o + "}")
    : "";
}
function J_(n) {
  var t = _m(n);
  return function (o, a, i, c) {
    for (var d = "", h = 0; h < t; h++) d += n[h](o, a, i, c) || "";
    return d;
  };
}
function e2(n) {
  return function (t) {
    t.root || ((t = t.return) && n(t));
  };
}
function t2(n, t, o, a) {
  if (n.length > -1 && !n.return)
    switch (n.type) {
      case Gc:
        n.return = Sm(n.value, n.length, o);
        return;
      case bm:
        return hi([qn(n, { value: _e(n.value, "@", "@" + Ie) })], a);
      case Ei:
        if (n.length)
          return z_((o = n.props), function (i) {
            switch (_n(i, (a = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Q0(qn(n, { props: [_e(i, /:(read-\w+)/, ":" + io + "$1")] })),
                  Q0(qn(n, { props: [i] })),
                  vc(n, { props: Lp(o, a) });
                break;
              case "::placeholder":
                Q0(
                  qn(n, {
                    props: [_e(i, /:(plac\w+)/, ":" + Ie + "input-$1")],
                  }),
                ),
                  Q0(qn(n, { props: [_e(i, /:(plac\w+)/, ":" + io + "$1")] })),
                  Q0(qn(n, { props: [_e(i, /:(plac\w+)/, Ae + "input-$1")] })),
                  Q0(qn(n, { props: [i] })),
                  vc(n, { props: Lp(o, a) });
                break;
            }
            return "";
          });
    }
}
var n2 = {
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
  Mt = {},
  ir =
    (typeof process < "u" &&
      Mt !== void 0 &&
      (Mt.REACT_APP_SC_ATTR || Mt.SC_ATTR)) ||
    "data-styled",
  wm = "active",
  km = "data-styled-version",
  Fi = "6.1.18",
  Wc = `/*!sc*/
`,
  mi = typeof window < "u" && typeof document < "u",
  r2 = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
        Mt !== void 0 &&
        Mt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        Mt.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? Mt.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
        Mt.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        Mt !== void 0 &&
        Mt.SC_DISABLE_SPEEDY !== void 0 &&
        Mt.SC_DISABLE_SPEEDY !== "" &&
        Mt.SC_DISABLE_SPEEDY !== "false" &&
        Mt.SC_DISABLE_SPEEDY),
  Ri = Object.freeze([]),
  sr = Object.freeze({});
function o2(n, t, o) {
  return (
    o === void 0 && (o = sr), (n.theme !== o.theme && n.theme) || t || o.theme
  );
}
var Cm = new Set([
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
  a2 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  i2 = /(^-|-$)/g;
function Dp(n) {
  return n.replace(a2, "-").replace(i2, "");
}
var s2 = /(a)(d)/gi,
  Na = 52,
  zp = function (n) {
    return String.fromCharCode(n + (n > 25 ? 39 : 97));
  };
function xc(n) {
  var t,
    o = "";
  for (t = Math.abs(n); t > Na; t = (t / Na) | 0) o = zp(t % Na) + o;
  return (zp(t % Na) + o).replace(s2, "$1-$2");
}
var Wl,
  Pm = 5381,
  J0 = function (n, t) {
    for (var o = t.length; o; ) n = (33 * n) ^ t.charCodeAt(--o);
    return n;
  },
  Om = function (n) {
    return J0(Pm, n);
  };
function l2(n) {
  return xc(Om(n) >>> 0);
}
function c2(n) {
  return n.displayName || n.name || "Component";
}
function Kl(n) {
  return typeof n == "string" && !0;
}
var Em = typeof Symbol == "function" && Symbol.for,
  Tm = Em ? Symbol.for("react.memo") : 60115,
  u2 = Em ? Symbol.for("react.forward_ref") : 60112,
  d2 = {
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
  f2 = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  jm = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  p2 =
    (((Wl = {})[u2] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Wl[Tm] = jm),
    Wl);
function Hp(n) {
  return ("type" in (t = n) && t.type.$$typeof) === Tm
    ? jm
    : "$$typeof" in n
      ? p2[n.$$typeof]
      : d2;
  var t;
}
var h2 = Object.defineProperty,
  m2 = Object.getOwnPropertyNames,
  Vp = Object.getOwnPropertySymbols,
  g2 = Object.getOwnPropertyDescriptor,
  b2 = Object.getPrototypeOf,
  Up = Object.prototype;
function Im(n, t, o) {
  if (typeof t != "string") {
    if (Up) {
      var a = b2(t);
      a && a !== Up && Im(n, a, o);
    }
    var i = m2(t);
    Vp && (i = i.concat(Vp(t)));
    for (var c = Hp(n), d = Hp(t), h = 0; h < i.length; ++h) {
      var f = i[h];
      if (!(f in f2 || (o && o[f]) || (d && f in d) || (c && f in c))) {
        var m = g2(t, f);
        try {
          h2(n, f, m);
        } catch {}
      }
    }
  }
  return n;
}
function v0(n) {
  return typeof n == "function";
}
function Kc(n) {
  return typeof n == "object" && "styledComponentId" in n;
}
function p0(n, t) {
  return n && t ? "".concat(n, " ").concat(t) : n || t || "";
}
function Gp(n, t) {
  if (n.length === 0) return "";
  for (var o = n[0], a = 1; a < n.length; a++) o += n[a];
  return o;
}
function fo(n) {
  return (
    n !== null &&
    typeof n == "object" &&
    n.constructor.name === Object.name &&
    !("props" in n && n.$$typeof)
  );
}
function Sc(n, t, o) {
  if ((o === void 0 && (o = !1), !o && !fo(n) && !Array.isArray(n))) return t;
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++) n[a] = Sc(n[a], t[a]);
  else if (fo(t)) for (var a in t) n[a] = Sc(n[a], t[a]);
  return n;
}
function Xc(n, t) {
  Object.defineProperty(n, "toString", { value: t });
}
function y0(n) {
  for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(n, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""),
  );
}
var v2 = (function () {
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
            if ((c <<= 1) < 0) throw y0(16, "".concat(t));
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
          o += "".concat(this.tag.getRule(d)).concat(Wc);
        return o;
      }),
      n
    );
  })(),
  Ka = new Map(),
  gi = new Map(),
  Xa = 1,
  Ba = function (n) {
    if (Ka.has(n)) return Ka.get(n);
    for (; gi.has(Xa); ) Xa++;
    var t = Xa++;
    return Ka.set(n, t), gi.set(t, n), t;
  },
  y2 = function (n, t) {
    (Xa = t + 1), Ka.set(n, t), gi.set(t, n);
  },
  _2 = "style[".concat(ir, "][").concat(km, '="').concat(Fi, '"]'),
  x2 = new RegExp(
    "^".concat(ir, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  ),
  S2 = function (n, t, o) {
    for (var a, i = o.split(","), c = 0, d = i.length; c < d; c++)
      (a = i[c]) && n.registerName(t, a);
  },
  w2 = function (n, t) {
    for (
      var o,
        a = ((o = t.textContent) !== null && o !== void 0 ? o : "").split(Wc),
        i = [],
        c = 0,
        d = a.length;
      c < d;
      c++
    ) {
      var h = a[c].trim();
      if (h) {
        var f = h.match(x2);
        if (f) {
          var m = 0 | parseInt(f[1], 10),
            b = f[2];
          m !== 0 && (y2(b, m), S2(n, b, f[3]), n.getTag().insertRules(m, i)),
            (i.length = 0);
        } else i.push(h);
      }
    }
  },
  qp = function (n) {
    for (
      var t = document.querySelectorAll(_2), o = 0, a = t.length;
      o < a;
      o++
    ) {
      var i = t[o];
      i &&
        i.getAttribute(ir) !== wm &&
        (w2(n, i), i.parentNode && i.parentNode.removeChild(i));
    }
  };
function k2() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Fm = function (n) {
    var t = document.head,
      o = n || t,
      a = document.createElement("style"),
      i = (function (h) {
        var f = Array.from(h.querySelectorAll("style[".concat(ir, "]")));
        return f[f.length - 1];
      })(o),
      c = i !== void 0 ? i.nextSibling : null;
    a.setAttribute(ir, wm), a.setAttribute(km, Fi);
    var d = k2();
    return d && a.setAttribute("nonce", d), o.insertBefore(a, c), a;
  },
  C2 = (function () {
    function n(t) {
      (this.element = Fm(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (o) {
          if (o.sheet) return o.sheet;
          for (var a = document.styleSheets, i = 0, c = a.length; i < c; i++) {
            var d = a[i];
            if (d.ownerNode === o) return d;
          }
          throw y0(17);
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
  P2 = (function () {
    function n(t) {
      (this.element = Fm(t)),
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
  O2 = (function () {
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
  Wp = mi,
  E2 = { isServer: !mi, useCSSOMInjection: !r2 },
  Rm = (function () {
    function n(t, o, a) {
      t === void 0 && (t = sr), o === void 0 && (o = {});
      var i = this;
      (this.options = gt(gt({}, E2), t)),
        (this.gs = o),
        (this.names = new Map(a)),
        (this.server = !!t.isServer),
        !this.server && mi && Wp && ((Wp = !1), qp(this)),
        Xc(this, function () {
          return (function (c) {
            for (
              var d = c.getTag(),
                h = d.length,
                f = "",
                m = function (v) {
                  var y = (function (P) {
                    return gi.get(P);
                  })(v);
                  if (y === void 0) return "continue";
                  var x = c.names.get(y),
                    S = d.getGroup(v);
                  if (x === void 0 || !x.size || S.length === 0)
                    return "continue";
                  var O = ""
                      .concat(ir, ".g")
                      .concat(v, '[id="')
                      .concat(y, '"]'),
                    C = "";
                  x !== void 0 &&
                    x.forEach(function (P) {
                      P.length > 0 && (C += "".concat(P, ","));
                    }),
                    (f += ""
                      .concat(S)
                      .concat(O, '{content:"')
                      .concat(C, '"}')
                      .concat(Wc));
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
        return Ba(t);
      }),
      (n.prototype.rehydrate = function () {
        !this.server && mi && qp(this);
      }),
      (n.prototype.reconstructWithOptions = function (t, o) {
        return (
          o === void 0 && (o = !0),
          new n(
            gt(gt({}, this.options), t),
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
              return o.isServer ? new O2(i) : a ? new C2(i) : new P2(i);
            })(this.options)),
            new v2(t)))
        );
        var t;
      }),
      (n.prototype.hasNameForId = function (t, o) {
        return this.names.has(t) && this.names.get(t).has(o);
      }),
      (n.prototype.registerName = function (t, o) {
        if ((Ba(t), this.names.has(t))) this.names.get(t).add(o);
        else {
          var a = new Set();
          a.add(o), this.names.set(t, a);
        }
      }),
      (n.prototype.insertRules = function (t, o, a) {
        this.registerName(t, o), this.getTag().insertRules(Ba(t), a);
      }),
      (n.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (n.prototype.clearRules = function (t) {
        this.getTag().clearGroup(Ba(t)), this.clearNames(t);
      }),
      (n.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      n
    );
  })(),
  T2 = /&/g,
  j2 = /^\s*\/\/.*$/gm;
function Mm(n, t) {
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
        (o.children = Mm(o.children, t)),
      o
    );
  });
}
function I2(n) {
  var t,
    o,
    a,
    i = sr,
    c = i.options,
    d = c === void 0 ? sr : c,
    h = i.plugins,
    f = h === void 0 ? Ri : h,
    m = function (y, x, S) {
      return S.startsWith(o) && S.endsWith(o) && S.replaceAll(o, "").length > 0
        ? ".".concat(t)
        : y;
    },
    b = f.slice();
  b.push(function (y) {
    y.type === Ei &&
      y.value.includes("&") &&
      (y.props[0] = y.props[0].replace(T2, o).replace(a, m));
  }),
    d.prefix && b.push(t2),
    b.push(Z_);
  var v = function (y, x, S, O) {
    x === void 0 && (x = ""),
      S === void 0 && (S = ""),
      O === void 0 && (O = "&"),
      (t = O),
      (o = x),
      (a = new RegExp("\\".concat(o, "\\b"), "g"));
    var C = y.replace(j2, ""),
      P = Q_(S || x ? "".concat(S, " ").concat(x, " { ").concat(C, " }") : C);
    d.namespace && (P = Mm(P, d.namespace));
    var T = [];
    return (
      hi(
        P,
        J_(
          b.concat(
            e2(function (R) {
              return T.push(R);
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
            return x.name || y0(15), J0(y, x.name);
          }, Pm)
          .toString()
      : ""),
    v
  );
}
var F2 = new Rm(),
  wc = I2(),
  Nm = Ue.createContext({
    shouldForwardProp: void 0,
    styleSheet: F2,
    stylis: wc,
  });
Nm.Consumer;
Ue.createContext(void 0);
function Kp() {
  return V.useContext(Nm);
}
var R2 = (function () {
    function n(t, o) {
      var a = this;
      (this.inject = function (i, c) {
        c === void 0 && (c = wc);
        var d = a.name + c.hash;
        i.hasNameForId(a.id, d) ||
          i.insertRules(a.id, d, c(a.rules, d, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = o),
        Xc(this, function () {
          throw y0(12, String(a.name));
        });
    }
    return (
      (n.prototype.getName = function (t) {
        return t === void 0 && (t = wc), this.name + t.hash;
      }),
      n
    );
  })(),
  M2 = function (n) {
    return n >= "A" && n <= "Z";
  };
function Xp(n) {
  for (var t = "", o = 0; o < n.length; o++) {
    var a = n[o];
    if (o === 1 && a === "-" && n[0] === "-") return n;
    M2(a) ? (t += "-" + a.toLowerCase()) : (t += a);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Bm = function (n) {
    return n == null || n === !1 || n === "";
  },
  Lm = function (n) {
    var t,
      o,
      a = [];
    for (var i in n) {
      var c = n[i];
      n.hasOwnProperty(i) &&
        !Bm(c) &&
        ((Array.isArray(c) && c.isCss) || v0(c)
          ? a.push("".concat(Xp(i), ":"), c, ";")
          : fo(c)
            ? a.push.apply(
                a,
                pi(pi(["".concat(i, " {")], Lm(c), !1), ["}"], !1),
              )
            : a.push(
                ""
                  .concat(Xp(i), ": ")
                  .concat(
                    ((t = i),
                    (o = c) == null || typeof o == "boolean" || o === ""
                      ? ""
                      : typeof o != "number" ||
                          o === 0 ||
                          t in n2 ||
                          t.startsWith("--")
                        ? String(o).trim()
                        : "".concat(o, "px")),
                    ";",
                  ),
              ));
    }
    return a;
  };
function b0(n, t, o, a) {
  if (Bm(n)) return [];
  if (Kc(n)) return [".".concat(n.styledComponentId)];
  if (v0(n)) {
    if (!v0((c = n)) || (c.prototype && c.prototype.isReactComponent) || !t)
      return [n];
    var i = n(t);
    return b0(i, t, o, a);
  }
  var c;
  return n instanceof R2
    ? o
      ? (n.inject(o, a), [n.getName(a)])
      : [n]
    : fo(n)
      ? Lm(n)
      : Array.isArray(n)
        ? Array.prototype.concat.apply(
            Ri,
            n.map(function (d) {
              return b0(d, t, o, a);
            }),
          )
        : [n.toString()];
}
function N2(n) {
  for (var t = 0; t < n.length; t += 1) {
    var o = n[t];
    if (v0(o) && !Kc(o)) return !1;
  }
  return !0;
}
var B2 = Om(Fi),
  L2 = (function () {
    function n(t, o, a) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (a === void 0 || a.isStatic) && N2(t)),
        (this.componentId = o),
        (this.baseHash = J0(B2, o)),
        (this.baseStyle = a),
        Rm.registerId(o);
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
            var c = Gp(b0(this.rules, t, o, a)),
              d = xc(J0(this.baseHash, c) >>> 0);
            if (!o.hasNameForId(this.componentId, d)) {
              var h = a(c, ".".concat(d), void 0, this.componentId);
              o.insertRules(this.componentId, d, h);
            }
            (i = p0(i, d)), (this.staticRulesId = d);
          }
        else {
          for (
            var f = J0(this.baseHash, a.hash), m = "", b = 0;
            b < this.rules.length;
            b++
          ) {
            var v = this.rules[b];
            if (typeof v == "string") m += v;
            else if (v) {
              var y = Gp(b0(v, t, o, a));
              (f = J0(f, y + b)), (m += y);
            }
          }
          if (m) {
            var x = xc(f >>> 0);
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
  bi = Ue.createContext(void 0);
bi.Consumer;
function $2(n) {
  var t = Ue.useContext(bi),
    o = V.useMemo(
      function () {
        return (function (a, i) {
          if (!a) throw y0(14);
          if (v0(a)) {
            var c = a(i);
            return c;
          }
          if (Array.isArray(a) || typeof a != "object") throw y0(8);
          return i ? gt(gt({}, i), a) : a;
        })(n.theme, t);
      },
      [n.theme, t],
    );
  return n.children
    ? Ue.createElement(bi.Provider, { value: o }, n.children)
    : null;
}
var Xl = {};
function A2(n, t, o) {
  var a = Kc(n),
    i = n,
    c = !Kl(n),
    d = t.attrs,
    h = d === void 0 ? Ri : d,
    f = t.componentId,
    m =
      f === void 0
        ? (function (L, j) {
            var $ = typeof L != "string" ? "sc" : Dp(L);
            Xl[$] = (Xl[$] || 0) + 1;
            var N = "".concat($, "-").concat(l2(Fi + $ + Xl[$]));
            return j ? "".concat(j, "-").concat(N) : N;
          })(t.displayName, t.parentComponentId)
        : f,
    b = t.displayName,
    v =
      b === void 0
        ? (function (L) {
            return Kl(L) ? "styled.".concat(L) : "Styled(".concat(c2(L), ")");
          })(n)
        : b,
    y =
      t.displayName && t.componentId
        ? "".concat(Dp(t.displayName), "-").concat(t.componentId)
        : t.componentId || m,
    x = a && i.attrs ? i.attrs.concat(h).filter(Boolean) : h,
    S = t.shouldForwardProp;
  if (a && i.shouldForwardProp) {
    var O = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var C = t.shouldForwardProp;
      S = function (L, j) {
        return O(L, j) && C(L, j);
      };
    } else S = O;
  }
  var P = new L2(o, y, a ? i.componentStyle : void 0);
  function T(L, j) {
    return (function ($, N, K) {
      var pe = $.attrs,
        Se = $.componentStyle,
        ee = $.defaultProps,
        le = $.foldedComponentIds,
        ve = $.styledComponentId,
        xe = $.target,
        me = Ue.useContext(bi),
        he = Kp(),
        we = $.shouldForwardProp || he.shouldForwardProp,
        q = o2(N, me, ee) || sr,
        Q = (function (ye, ue, ge) {
          for (
            var fe,
              Me = gt(gt({}, ue), { className: void 0, theme: ge }),
              Yn = 0;
            Yn < ye.length;
            Yn += 1
          ) {
            var Bt = v0((fe = ye[Yn])) ? fe(Me) : fe;
            for (var _t in Bt)
              Me[_t] =
                _t === "className"
                  ? p0(Me[_t], Bt[_t])
                  : _t === "style"
                    ? gt(gt({}, Me[_t]), Bt[_t])
                    : Bt[_t];
          }
          return (
            ue.className && (Me.className = p0(Me.className, ue.className)), Me
          );
        })(pe, N, q),
        w = Q.as || xe,
        A = {};
      for (var W in Q)
        Q[W] === void 0 ||
          W[0] === "$" ||
          W === "as" ||
          (W === "theme" && Q.theme === q) ||
          (W === "forwardedAs"
            ? (A.as = Q.forwardedAs)
            : (we && !we(W, w)) || (A[W] = Q[W]));
      var se = (function (ye, ue) {
          var ge = Kp(),
            fe = ye.generateAndInjectStyles(ue, ge.styleSheet, ge.stylis);
          return fe;
        })(Se, Q),
        re = p0(le, ve);
      return (
        se && (re += " " + se),
        Q.className && (re += " " + Q.className),
        (A[Kl(w) && !Cm.has(w) ? "class" : "className"] = re),
        K && (A.ref = K),
        V.createElement(w, A)
      );
    })(R, L, j);
  }
  T.displayName = v;
  var R = Ue.forwardRef(T);
  return (
    (R.attrs = x),
    (R.componentStyle = P),
    (R.displayName = v),
    (R.shouldForwardProp = S),
    (R.foldedComponentIds = a
      ? p0(i.foldedComponentIds, i.styledComponentId)
      : ""),
    (R.styledComponentId = y),
    (R.target = a ? i.target : n),
    Object.defineProperty(R, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (L) {
        this._foldedDefaultProps = a
          ? (function (j) {
              for (var $ = [], N = 1; N < arguments.length; N++)
                $[N - 1] = arguments[N];
              for (var K = 0, pe = $; K < pe.length; K++) Sc(j, pe[K], !0);
              return j;
            })({}, i.defaultProps, L)
          : L;
      },
    }),
    Xc(R, function () {
      return ".".concat(R.styledComponentId);
    }),
    c &&
      Im(R, n, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    R
  );
}
function Qp(n, t) {
  for (var o = [n[0]], a = 0, i = t.length; a < i; a += 1)
    o.push(t[a], n[a + 1]);
  return o;
}
var Yp = function (n) {
  return Object.assign(n, { isCss: !0 });
};
function D2(n) {
  for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
  if (v0(n) || fo(n)) return Yp(b0(Qp(Ri, pi([n], t, !0))));
  var a = n;
  return t.length === 0 && a.length === 1 && typeof a[0] == "string"
    ? b0(a)
    : Yp(b0(Qp(a, t)));
}
function kc(n, t, o) {
  if ((o === void 0 && (o = sr), !t)) throw y0(1, t);
  var a = function (i) {
    for (var c = [], d = 1; d < arguments.length; d++) c[d - 1] = arguments[d];
    return n(t, o, D2.apply(void 0, pi([i], c, !1)));
  };
  return (
    (a.attrs = function (i) {
      return kc(
        n,
        t,
        gt(gt({}, o), {
          attrs: Array.prototype.concat(o.attrs, i).filter(Boolean),
        }),
      );
    }),
    (a.withConfig = function (i) {
      return kc(n, t, gt(gt({}, o), i));
    }),
    a
  );
}
var $m = function (n) {
    return kc(A2, n);
  },
  S0 = $m;
Cm.forEach(function (n) {
  S0[n] = $m(n);
});
function _0(n) {
  "@babel/helpers - typeof";
  return (
    (_0 =
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
    _0(n)
  );
}
function z2(n, t) {
  if (_0(n) != "object" || !n) return n;
  var o = n[Symbol.toPrimitive];
  if (o !== void 0) {
    var a = o.call(n, t);
    if (_0(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Am(n) {
  var t = z2(n, "string");
  return _0(t) == "symbol" ? t : t + "";
}
function oo(n, t, o) {
  return (
    (t = Am(t)) in n
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
function ie(n) {
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
function H2(n) {
  if (Array.isArray(n)) return n;
}
function V2(n, t) {
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
function Cc(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var o = 0, a = Array(t); o < t; o++) a[o] = n[o];
  return a;
}
function Dm(n, t) {
  if (n) {
    if (typeof n == "string") return Cc(n, t);
    var o = {}.toString.call(n).slice(8, -1);
    return (
      o === "Object" && n.constructor && (o = n.constructor.name),
      o === "Map" || o === "Set"
        ? Array.from(n)
        : o === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
          ? Cc(n, t)
          : void 0
    );
  }
}
function U2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wn(n, t) {
  return H2(n) || V2(n, t) || Dm(n, t) || U2();
}
function G2(n, t) {
  if (n == null) return {};
  var o = {};
  for (var a in n)
    if ({}.hasOwnProperty.call(n, a)) {
      if (t.indexOf(a) !== -1) continue;
      o[a] = n[a];
    }
  return o;
}
function Cn(n, t) {
  if (n == null) return {};
  var o,
    a,
    i = G2(n, t);
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
var q2 = [
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
function W2(n) {
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
    S = Cn(n, q2),
    O = V.useState(h !== void 0 ? h : o),
    C = wn(O, 2),
    P = C[0],
    T = C[1],
    R = V.useState(f !== void 0 ? f : i),
    L = wn(R, 2),
    j = L[0],
    $ = L[1],
    N = V.useState(x !== void 0 ? x : d),
    K = wn(N, 2),
    pe = K[0],
    Se = K[1],
    ee = V.useCallback(
      function (q, Q) {
        typeof m == "function" && m(q, Q), Se(q);
      },
      [m],
    ),
    le = V.useCallback(
      function (q, Q) {
        var w;
        typeof b == "function" && (w = b(q, Q)), T(w !== void 0 ? w : q);
      },
      [b],
    ),
    ve = V.useCallback(
      function () {
        typeof y == "function" && y(), $(!0);
      },
      [y],
    ),
    xe = V.useCallback(
      function () {
        typeof v == "function" && v(), $(!1);
      },
      [v],
    ),
    me = h !== void 0 ? h : P,
    he = f !== void 0 ? f : j,
    we = x !== void 0 ? x : pe;
  return ie(
    ie({}, S),
    {},
    {
      inputValue: me,
      menuIsOpen: he,
      onChange: ee,
      onInputChange: le,
      onMenuClose: xe,
      onMenuOpen: ve,
      value: we,
    },
  );
}
function ce() {
  return (
    (ce = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t];
            for (var a in o) ({}).hasOwnProperty.call(o, a) && (n[a] = o[a]);
          }
          return n;
        }),
    ce.apply(null, arguments)
  );
}
function K2(n, t) {
  if (!(n instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Jp(n, t) {
  for (var o = 0; o < t.length; o++) {
    var a = t[o];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(n, Am(a.key), a);
  }
}
function X2(n, t, o) {
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
function Q2(n, t) {
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
function zm() {
  try {
    var n = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (zm = function () {
    return !!n;
  })();
}
function Y2(n) {
  if (n === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return n;
}
function Z2(n, t) {
  if (t && (_0(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Y2(n);
}
function J2(n) {
  var t = zm();
  return function () {
    var o,
      a = vi(n);
    if (t) {
      var i = vi(this).constructor;
      o = Reflect.construct(a, arguments, i);
    } else o = a.apply(this, arguments);
    return Z2(this, o);
  };
}
function e5(n) {
  if (Array.isArray(n)) return Cc(n);
}
function t5(n) {
  if (
    (typeof Symbol < "u" && n[Symbol.iterator] != null) ||
    n["@@iterator"] != null
  )
    return Array.from(n);
}
function n5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qc(n) {
  return e5(n) || t5(n) || Dm(n) || n5();
}
function r5(n) {
  if (n.sheet) return n.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === n) return document.styleSheets[t];
}
function o5(n) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", n.key),
    n.nonce !== void 0 && t.setAttribute("nonce", n.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var a5 = (function () {
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
          this._insertTag(o5(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var c = r5(i);
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
  ht = "-ms-",
  yi = "-moz-",
  Oe = "-webkit-",
  Hm = "comm",
  Yc = "rule",
  Zc = "decl",
  i5 = "@import",
  Vm = "@keyframes",
  s5 = "@layer",
  l5 = Math.abs,
  Mi = String.fromCharCode,
  c5 = Object.assign;
function u5(n, t) {
  return lt(n, 0) ^ 45
    ? (((((((t << 2) ^ lt(n, 0)) << 2) ^ lt(n, 1)) << 2) ^ lt(n, 2)) << 2) ^
        lt(n, 3)
    : 0;
}
function Um(n) {
  return n.trim();
}
function d5(n, t) {
  return (n = t.exec(n)) ? n[0] : n;
}
function Ee(n, t, o) {
  return n.replace(t, o);
}
function Oc(n, t) {
  return n.indexOf(t);
}
function lt(n, t) {
  return n.charCodeAt(t) | 0;
}
function po(n, t, o) {
  return n.slice(t, o);
}
function cn(n) {
  return n.length;
}
function Jc(n) {
  return n.length;
}
function La(n, t) {
  return t.push(n), n;
}
function f5(n, t) {
  return n.map(t).join("");
}
var Ni = 1,
  lr = 1,
  Gm = 0,
  Ot = 0,
  Ye = 0,
  fr = "";
function Bi(n, t, o, a, i, c, d) {
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
  return c5(Bi("", null, null, "", null, null, 0), n, { length: -n.length }, t);
}
function p5() {
  return Ye;
}
function h5() {
  return (
    (Ye = Ot > 0 ? lt(fr, --Ot) : 0), lr--, Ye === 10 && ((lr = 1), Ni--), Ye
  );
}
function Nt() {
  return (
    (Ye = Ot < Gm ? lt(fr, Ot++) : 0), lr++, Ye === 10 && ((lr = 1), Ni++), Ye
  );
}
function dn() {
  return lt(fr, Ot);
}
function Qa() {
  return Ot;
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
function qm(n) {
  return (Ni = lr = 1), (Gm = cn((fr = n))), (Ot = 0), [];
}
function Wm(n) {
  return (fr = ""), n;
}
function Ya(n) {
  return Um(_o(Ot - 1, Ec(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function m5(n) {
  for (; (Ye = dn()) && Ye < 33; ) Nt();
  return ho(n) > 2 || ho(Ye) > 3 ? "" : " ";
}
function g5(n, t) {
  for (
    ;
    --t &&
    Nt() &&
    !(Ye < 48 || Ye > 102 || (Ye > 57 && Ye < 65) || (Ye > 70 && Ye < 97));

  );
  return _o(n, Qa() + (t < 6 && dn() == 32 && Nt() == 32));
}
function Ec(n) {
  for (; Nt(); )
    switch (Ye) {
      case n:
        return Ot;
      case 34:
      case 39:
        n !== 34 && n !== 39 && Ec(Ye);
        break;
      case 40:
        n === 41 && Ec(n);
        break;
      case 92:
        Nt();
        break;
    }
  return Ot;
}
function b5(n, t) {
  for (; Nt() && n + Ye !== 57; ) if (n + Ye === 84 && dn() === 47) break;
  return "/*" + _o(t, Ot - 1) + "*" + Mi(n === 47 ? n : Nt());
}
function v5(n) {
  for (; !ho(dn()); ) Nt();
  return _o(n, Ot);
}
function y5(n) {
  return Wm(Za("", null, null, null, [""], (n = qm(n)), 0, [0], n));
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
      C = 1,
      P = 1,
      T = 0,
      R = "",
      L = i,
      j = c,
      $ = a,
      N = R;
    C;

  )
    switch (((S = T), (T = Nt()))) {
      case 40:
        if (S != 108 && lt(N, v - 1) == 58) {
          Oc((N += Ee(Ya(T), "&", "&\f")), "&\f") != -1 && (P = -1);
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
        N += m5(S);
        break;
      case 92:
        N += g5(Qa() - 1, 7);
        continue;
      case 47:
        switch (dn()) {
          case 42:
          case 47:
            La(_5(b5(Nt(), Qa()), t, o), f);
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
            C = 0;
          case 59 + b:
            P == -1 && (N = Ee(N, /\f/g, "")),
              x > 0 &&
                cn(N) - v &&
                La(
                  x > 32
                    ? th(N + ";", a, o, v - 1)
                    : th(Ee(N, " ", "") + ";", a, o, v - 2),
                  f,
                );
            break;
          case 59:
            N += ";";
          default:
            if (
              (La(($ = eh(N, t, o, m, b, i, h, R, (L = []), (j = []), v)), c),
              T === 123)
            )
              if (b === 0) Za(N, t, $, $, L, c, v, h, j);
              else
                switch (y === 99 && lt(N, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Za(
                      n,
                      $,
                      $,
                      a && La(eh(n, $, $, 0, 0, i, h, R, i, (L = []), v), j),
                      i,
                      j,
                      v,
                      h,
                      a ? L : j,
                    );
                    break;
                  default:
                    Za(N, $, $, $, [""], j, 0, h, j);
                }
        }
        (m = b = x = 0), (O = P = 1), (R = N = ""), (v = d);
        break;
      case 58:
        (v = 1 + cn(N)), (x = S);
      default:
        if (O < 1) {
          if (T == 123) --O;
          else if (T == 125 && O++ == 0 && h5() == 125) continue;
        }
        switch (((N += Mi(T)), T * O)) {
          case 38:
            P = b > 0 ? 1 : ((N += "\f"), -1);
            break;
          case 44:
            (h[m++] = (cn(N) - 1) * P), (P = 1);
            break;
          case 64:
            dn() === 45 && (N += Ya(Nt())),
              (y = dn()),
              (b = v = cn((R = N += v5(Qa())))),
              T++;
            break;
          case 45:
            S === 45 && cn(N) == 2 && (O = 0);
        }
    }
  return c;
}
function eh(n, t, o, a, i, c, d, h, f, m, b) {
  for (
    var v = i - 1, y = i === 0 ? c : [""], x = Jc(y), S = 0, O = 0, C = 0;
    S < a;
    ++S
  )
    for (var P = 0, T = po(n, v + 1, (v = l5((O = d[S])))), R = n; P < x; ++P)
      (R = Um(O > 0 ? y[P] + " " + T : Ee(T, /&\f/g, y[P]))) && (f[C++] = R);
  return Bi(n, t, o, i === 0 ? Yc : h, f, m, b);
}
function _5(n, t, o) {
  return Bi(n, t, o, Hm, Mi(p5()), po(n, 2, -2), 0);
}
function th(n, t, o, a) {
  return Bi(n, t, o, Zc, po(n, 0, a), po(n, a + 1, -1), a);
}
function nr(n, t) {
  for (var o = "", a = Jc(n), i = 0; i < a; i++) o += t(n[i], i, n, t) || "";
  return o;
}
function x5(n, t, o, a) {
  switch (n.type) {
    case s5:
      if (n.children.length) break;
    case i5:
    case Zc:
      return (n.return = n.return || n.value);
    case Hm:
      return "";
    case Vm:
      return (n.return = n.value + "{" + nr(n.children, a) + "}");
    case Yc:
      n.value = n.props.join(",");
  }
  return cn((o = nr(n.children, a)))
    ? (n.return = n.value + "{" + o + "}")
    : "";
}
function S5(n) {
  var t = Jc(n);
  return function (o, a, i, c) {
    for (var d = "", h = 0; h < t; h++) d += n[h](o, a, i, c) || "";
    return d;
  };
}
function w5(n) {
  return function (t) {
    t.root || ((t = t.return) && n(t));
  };
}
function k5(n) {
  var t = Object.create(null);
  return function (o) {
    return t[o] === void 0 && (t[o] = n(o)), t[o];
  };
}
var C5 = function (t, o, a) {
    for (
      var i = 0, c = 0;
      (i = c), (c = dn()), i === 38 && c === 12 && (o[a] = 1), !ho(c);

    )
      Nt();
    return _o(t, Ot);
  },
  P5 = function (t, o) {
    var a = -1,
      i = 44;
    do
      switch (ho(i)) {
        case 0:
          i === 38 && dn() === 12 && (o[a] = 1), (t[a] += C5(Ot - 1, o, a));
          break;
        case 2:
          t[a] += Ya(i);
          break;
        case 4:
          if (i === 44) {
            (t[++a] = dn() === 58 ? "&\f" : ""), (o[a] = t[a].length);
            break;
          }
        default:
          t[a] += Mi(i);
      }
    while ((i = Nt()));
    return t;
  },
  O5 = function (t, o) {
    return Wm(P5(qm(t), o));
  },
  nh = new WeakMap(),
  E5 = function (t) {
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
          var c = [], d = O5(o, c), h = a.props, f = 0, m = 0;
          f < d.length;
          f++
        )
          for (var b = 0; b < h.length; b++, m++)
            t.props[m] = c[f] ? d[f].replace(/&\f/g, h[b]) : h[b] + " " + d[f];
      }
    }
  },
  T5 = function (t) {
    if (t.type === "decl") {
      var o = t.value;
      o.charCodeAt(0) === 108 &&
        o.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Km(n, t) {
  switch (u5(n, t)) {
    case 5103:
      return Oe + "print-" + n + n;
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
      return Oe + n + n;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Oe + n + yi + n + ht + n + n;
    case 6828:
    case 4268:
      return Oe + n + ht + n + n;
    case 6165:
      return Oe + n + ht + "flex-" + n + n;
    case 5187:
      return (
        Oe + n + Ee(n, /(\w+).+(:[^]+)/, Oe + "box-$1$2" + ht + "flex-$1$2") + n
      );
    case 5443:
      return Oe + n + ht + "flex-item-" + Ee(n, /flex-|-self/, "") + n;
    case 4675:
      return (
        Oe +
        n +
        ht +
        "flex-line-pack" +
        Ee(n, /align-content|flex-|-self/, "") +
        n
      );
    case 5548:
      return Oe + n + ht + Ee(n, "shrink", "negative") + n;
    case 5292:
      return Oe + n + ht + Ee(n, "basis", "preferred-size") + n;
    case 6060:
      return (
        Oe +
        "box-" +
        Ee(n, "-grow", "") +
        Oe +
        n +
        ht +
        Ee(n, "grow", "positive") +
        n
      );
    case 4554:
      return Oe + Ee(n, /([^-])(transform)/g, "$1" + Oe + "$2") + n;
    case 6187:
      return (
        Ee(
          Ee(Ee(n, /(zoom-|grab)/, Oe + "$1"), /(image-set)/, Oe + "$1"),
          n,
          "",
        ) + n
      );
    case 5495:
    case 3959:
      return Ee(n, /(image-set\([^]*)/, Oe + "$1$`$1");
    case 4968:
      return (
        Ee(
          Ee(n, /(.+:)(flex-)?(.*)/, Oe + "box-pack:$3" + ht + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        Oe +
        n +
        n
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ee(n, /(.+)-inline(.+)/, Oe + "$1$2") + n;
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
        switch (lt(n, t + 1)) {
          case 109:
            if (lt(n, t + 4) !== 45) break;
          case 102:
            return (
              Ee(
                n,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Oe +
                  "$2-$3$1" +
                  yi +
                  (lt(n, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + n
            );
          case 115:
            return ~Oc(n, "stretch")
              ? Km(Ee(n, "stretch", "fill-available"), t) + n
              : n;
        }
      break;
    case 4949:
      if (lt(n, t + 1) !== 115) break;
    case 6444:
      switch (lt(n, cn(n) - 3 - (~Oc(n, "!important") && 10))) {
        case 107:
          return Ee(n, ":", ":" + Oe) + n;
        case 101:
          return (
            Ee(
              n,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Oe +
                (lt(n, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Oe +
                "$2$3$1" +
                ht +
                "$2box$3",
            ) + n
          );
      }
      break;
    case 5936:
      switch (lt(n, t + 11)) {
        case 114:
          return Oe + n + ht + Ee(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        case 108:
          return Oe + n + ht + Ee(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        case 45:
          return Oe + n + ht + Ee(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
      return Oe + n + ht + n + n;
  }
  return n;
}
var j5 = function (t, o, a, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Zc:
          t.return = Km(t.value, t.length);
          break;
        case Vm:
          return nr([eo(t, { value: Ee(t.value, "@", "@" + Oe) })], i);
        case Yc:
          if (t.length)
            return f5(t.props, function (c) {
              switch (d5(c, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return nr(
                    [eo(t, { props: [Ee(c, /:(read-\w+)/, ":" + yi + "$1")] })],
                    i,
                  );
                case "::placeholder":
                  return nr(
                    [
                      eo(t, {
                        props: [Ee(c, /:(plac\w+)/, ":" + Oe + "input-$1")],
                      }),
                      eo(t, { props: [Ee(c, /:(plac\w+)/, ":" + yi + "$1")] }),
                      eo(t, { props: [Ee(c, /:(plac\w+)/, ht + "input-$1")] }),
                    ],
                    i,
                  );
              }
              return "";
            });
      }
  },
  I5 = [j5],
  F5 = function (t) {
    var o = t.key;
    if (o === "css") {
      var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(a, function (O) {
        var C = O.getAttribute("data-emotion");
        C.indexOf(" ") !== -1 &&
          (document.head.appendChild(O), O.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || I5,
      c = {},
      d,
      h = [];
    (d = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
        function (O) {
          for (
            var C = O.getAttribute("data-emotion").split(" "), P = 1;
            P < C.length;
            P++
          )
            c[C[P]] = !0;
          h.push(O);
        },
      );
    var f,
      m = [E5, T5];
    {
      var b,
        v = [
          x5,
          w5(function (O) {
            b.insert(O);
          }),
        ],
        y = S5(m.concat(i, v)),
        x = function (C) {
          return nr(y5(C), y);
        };
      f = function (C, P, T, R) {
        (b = T),
          x(C ? C + "{" + P.styles + "}" : P.styles),
          R && (S.inserted[P.name] = !0);
      };
    }
    var S = {
      key: o,
      sheet: new a5({
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
function R5() {
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
    C = n ? Symbol.for("react.fundamental") : 60117,
    P = n ? Symbol.for("react.responder") : 60118,
    T = n ? Symbol.for("react.scope") : 60119;
  function R(j) {
    if (typeof j == "object" && j !== null) {
      var $ = j.$$typeof;
      switch ($) {
        case t:
          switch (((j = j.type), j)) {
            case f:
            case m:
            case a:
            case c:
            case i:
            case v:
              return j;
            default:
              switch (((j = j && j.$$typeof), j)) {
                case h:
                case b:
                case S:
                case x:
                case d:
                  return j;
                default:
                  return $;
              }
          }
        case o:
          return $;
      }
    }
  }
  function L(j) {
    return R(j) === m;
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
    (je.isAsyncMode = function (j) {
      return L(j) || R(j) === f;
    }),
    (je.isConcurrentMode = L),
    (je.isContextConsumer = function (j) {
      return R(j) === h;
    }),
    (je.isContextProvider = function (j) {
      return R(j) === d;
    }),
    (je.isElement = function (j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }),
    (je.isForwardRef = function (j) {
      return R(j) === b;
    }),
    (je.isFragment = function (j) {
      return R(j) === a;
    }),
    (je.isLazy = function (j) {
      return R(j) === S;
    }),
    (je.isMemo = function (j) {
      return R(j) === x;
    }),
    (je.isPortal = function (j) {
      return R(j) === o;
    }),
    (je.isProfiler = function (j) {
      return R(j) === c;
    }),
    (je.isStrictMode = function (j) {
      return R(j) === i;
    }),
    (je.isSuspense = function (j) {
      return R(j) === v;
    }),
    (je.isValidElementType = function (j) {
      return (
        typeof j == "string" ||
        typeof j == "function" ||
        j === a ||
        j === m ||
        j === c ||
        j === i ||
        j === v ||
        j === y ||
        (typeof j == "object" &&
          j !== null &&
          (j.$$typeof === S ||
            j.$$typeof === x ||
            j.$$typeof === d ||
            j.$$typeof === h ||
            j.$$typeof === b ||
            j.$$typeof === C ||
            j.$$typeof === P ||
            j.$$typeof === T ||
            j.$$typeof === O))
      );
    }),
    (je.typeOf = R),
    je
  );
}
var oh;
function M5() {
  return oh || ((oh = 1), (Ql.exports = R5())), Ql.exports;
}
var Yl, ah;
function N5() {
  if (ah) return Yl;
  ah = 1;
  var n = M5(),
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
  function x(S, O, C) {
    if (typeof O != "string") {
      if (y) {
        var P = v(O);
        P && P !== y && x(S, P, C);
      }
      var T = f(O);
      m && (T = T.concat(m(O)));
      for (var R = d(S), L = d(O), j = 0; j < T.length; ++j) {
        var $ = T[j];
        if (!o[$] && !(C && C[$]) && !(L && L[$]) && !(R && R[$])) {
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
N5();
var B5 = !0;
function L5(n, t, o) {
  var a = "";
  return (
    o.split(" ").forEach(function (i) {
      n[i] !== void 0 ? t.push(n[i] + ";") : i && (a += i + " ");
    }),
    a
  );
}
var Xm = function (t, o, a) {
    var i = t.key + "-" + o.name;
    (a === !1 || B5 === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = o.styles);
  },
  $5 = function (t, o, a) {
    Xm(t, o, a);
    var i = t.key + "-" + o.name;
    if (t.inserted[o.name] === void 0) {
      var c = o;
      do t.insert(o === c ? "." + i : "", c, t.sheet, !0), (c = c.next);
      while (c !== void 0);
    }
  };
function A5(n) {
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
var D5 = {
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
  z5 = /[A-Z]|^ms/g,
  H5 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Qm = function (t) {
    return t.charCodeAt(1) === 45;
  },
  ih = function (t) {
    return t != null && typeof t != "boolean";
  },
  Zl = k5(function (n) {
    return Qm(n) ? n : n.replace(z5, "-$&").toLowerCase();
  }),
  sh = function (t, o) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof o == "string")
          return o.replace(H5, function (a, i, c) {
            return (un = { name: i, styles: c, next: un }), i;
          });
    }
    return D5[t] !== 1 && !Qm(t) && typeof o == "number" && o !== 0
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
        return (un = { name: i.name, styles: i.styles, next: un }), i.name;
      var c = o;
      if (c.styles !== void 0) {
        var d = c.next;
        if (d !== void 0)
          for (; d !== void 0; )
            (un = { name: d.name, styles: d.styles, next: un }), (d = d.next);
        var h = c.styles + ";";
        return h;
      }
      return V5(n, t, o);
    }
    case "function": {
      if (n !== void 0) {
        var f = un,
          m = o(n);
        return (un = f), mo(n, t, m);
      }
      break;
    }
  }
  var b = o;
  return b;
}
function V5(n, t, o) {
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
  un;
function Ym(n, t, o) {
  if (
    n.length === 1 &&
    typeof n[0] == "object" &&
    n[0] !== null &&
    n[0].styles !== void 0
  )
    return n[0];
  var a = !0,
    i = "";
  un = void 0;
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
  var v = A5(i) + m;
  return { name: v, styles: i, next: un };
}
var U5 = function (t) {
    return t();
  },
  G5 = sp.useInsertionEffect ? sp.useInsertionEffect : !1,
  q5 = G5 || U5,
  Zm = V.createContext(typeof HTMLElement < "u" ? F5({ key: "css" }) : null);
Zm.Provider;
var W5 = function (t) {
    return V.forwardRef(function (o, a) {
      var i = V.useContext(Zm);
      return t(o, i, a);
    });
  },
  K5 = V.createContext({}),
  eu = {}.hasOwnProperty,
  Tc = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  X5 = function (t, o) {
    var a = {};
    for (var i in o) eu.call(o, i) && (a[i] = o[i]);
    return (a[Tc] = t), a;
  },
  Q5 = function (t) {
    var o = t.cache,
      a = t.serialized,
      i = t.isStringTag;
    return (
      Xm(o, a, i),
      q5(function () {
        return $5(o, a, i);
      }),
      null
    );
  },
  Y5 = W5(function (n, t, o) {
    var a = n.css;
    typeof a == "string" && t.registered[a] !== void 0 && (a = t.registered[a]);
    var i = n[Tc],
      c = [a],
      d = "";
    typeof n.className == "string"
      ? (d = L5(t.registered, c, n.className))
      : n.className != null && (d = n.className + " ");
    var h = Ym(c, void 0, V.useContext(K5));
    d += t.key + "-" + h.name;
    var f = {};
    for (var m in n) eu.call(n, m) && m !== "css" && m !== Tc && (f[m] = n[m]);
    return (
      (f.className = d),
      o && (f.ref = o),
      V.createElement(
        V.Fragment,
        null,
        V.createElement(Q5, {
          cache: t,
          serialized: h,
          isStringTag: typeof i == "string",
        }),
        V.createElement(i, f),
      )
    );
  }),
  Z5 = Y5,
  ne = function (t, o) {
    var a = arguments;
    if (o == null || !eu.call(o, "css"))
      return V.createElement.apply(void 0, a);
    var i = a.length,
      c = new Array(i);
    (c[0] = Z5), (c[1] = X5(t, o));
    for (var d = 2; d < i; d++) c[d] = a[d];
    return V.createElement.apply(null, c);
  };
(function (n) {
  var t;
  t || (t = n.JSX || (n.JSX = {}));
})(ne || (ne = {}));
function tu() {
  for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++)
    t[o] = arguments[o];
  return Ym(t);
}
function J5() {
  var n = tu.apply(void 0, arguments),
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
function ex(n, t) {
  return (
    t || (t = n.slice(0)),
    Object.freeze(
      Object.defineProperties(n, { raw: { value: Object.freeze(t) } }),
    )
  );
}
var tx = Mh();
const nx = Math.min,
  rx = Math.max,
  _i = Math.round,
  $a = Math.floor,
  xi = (n) => ({ x: n, y: n });
function ox(n) {
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
function Li() {
  return typeof window < "u";
}
function Jm(n) {
  return tg(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function kn(n) {
  var t;
  return (
    (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function eg(n) {
  var t;
  return (t = (tg(n) ? n.ownerDocument : n.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function tg(n) {
  return Li() ? n instanceof Node || n instanceof kn(n).Node : !1;
}
function ax(n) {
  return Li() ? n instanceof Element || n instanceof kn(n).Element : !1;
}
function nu(n) {
  return Li() ? n instanceof HTMLElement || n instanceof kn(n).HTMLElement : !1;
}
function ch(n) {
  return !Li() || typeof ShadowRoot > "u"
    ? !1
    : n instanceof ShadowRoot || n instanceof kn(n).ShadowRoot;
}
function ng(n) {
  const { overflow: t, overflowX: o, overflowY: a, display: i } = ru(n);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + a + o) &&
    !["inline", "contents"].includes(i)
  );
}
function ix() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function sx(n) {
  return ["html", "body", "#document"].includes(Jm(n));
}
function ru(n) {
  return kn(n).getComputedStyle(n);
}
function lx(n) {
  if (Jm(n) === "html") return n;
  const t = n.assignedSlot || n.parentNode || (ch(n) && n.host) || eg(n);
  return ch(t) ? t.host : t;
}
function rg(n) {
  const t = lx(n);
  return sx(t)
    ? n.ownerDocument
      ? n.ownerDocument.body
      : n.body
    : nu(t) && ng(t)
      ? t
      : rg(t);
}
function Si(n, t, o) {
  var a;
  t === void 0 && (t = []), o === void 0 && (o = !0);
  const i = rg(n),
    c = i === ((a = n.ownerDocument) == null ? void 0 : a.body),
    d = kn(i);
  if (c) {
    const h = jc(d);
    return t.concat(
      d,
      d.visualViewport || [],
      ng(i) ? i : [],
      h && o ? Si(h) : [],
    );
  }
  return t.concat(i, Si(i, [], o));
}
function jc(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function cx(n) {
  const t = ru(n);
  let o = parseFloat(t.width) || 0,
    a = parseFloat(t.height) || 0;
  const i = nu(n),
    c = i ? n.offsetWidth : o,
    d = i ? n.offsetHeight : a,
    h = _i(o) !== c || _i(a) !== d;
  return h && ((o = c), (a = d)), { width: o, height: a, $: h };
}
function ou(n) {
  return ax(n) ? n : n.contextElement;
}
function uh(n) {
  const t = ou(n);
  if (!nu(t)) return xi(1);
  const o = t.getBoundingClientRect(),
    { width: a, height: i, $: c } = cx(t);
  let d = (c ? _i(o.width) : o.width) / a,
    h = (c ? _i(o.height) : o.height) / i;
  return (
    (!d || !Number.isFinite(d)) && (d = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    { x: d, y: h }
  );
}
const ux = xi(0);
function dx(n) {
  const t = kn(n);
  return !ix() || !t.visualViewport
    ? ux
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function fx(n, t, o) {
  return !1;
}
function dh(n, t, o, a) {
  t === void 0 && (t = !1);
  const i = n.getBoundingClientRect(),
    c = ou(n);
  let d = xi(1);
  t && (d = uh(n));
  const h = fx() ? dx(c) : xi(0);
  let f = (i.left + h.x) / d.x,
    m = (i.top + h.y) / d.y,
    b = i.width / d.x,
    v = i.height / d.y;
  if (c) {
    const y = kn(c),
      x = a;
    let S = y,
      O = jc(S);
    for (; O && a && x !== S; ) {
      const C = uh(O),
        P = O.getBoundingClientRect(),
        T = ru(O),
        R = P.left + (O.clientLeft + parseFloat(T.paddingLeft)) * C.x,
        L = P.top + (O.clientTop + parseFloat(T.paddingTop)) * C.y;
      (f *= C.x),
        (m *= C.y),
        (b *= C.x),
        (v *= C.y),
        (f += R),
        (m += L),
        (S = kn(O)),
        (O = jc(S));
    }
  }
  return ox({ width: b, height: v, x: f, y: m });
}
function og(n, t) {
  return (
    n.x === t.x && n.y === t.y && n.width === t.width && n.height === t.height
  );
}
function px(n, t) {
  let o = null,
    a;
  const i = eg(n);
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
      C = $a(i.clientHeight - (v + x)),
      P = $a(b),
      R = {
        rootMargin: -S + "px " + -O + "px " + -C + "px " + -P + "px",
        threshold: rx(0, nx(1, f)) || 1,
      };
    let L = !0;
    function j($) {
      const N = $[0].intersectionRatio;
      if (N !== f) {
        if (!L) return d();
        N
          ? d(!1, N)
          : (a = setTimeout(() => {
              d(!1, 1e-7);
            }, 1e3));
      }
      N === 1 && !og(m, n.getBoundingClientRect()) && d(), (L = !1);
    }
    try {
      o = new IntersectionObserver(j, { ...R, root: i.ownerDocument });
    } catch {
      o = new IntersectionObserver(j, R);
    }
    o.observe(n);
  }
  return d(!0), c;
}
function hx(n, t, o, a) {
  a === void 0 && (a = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: c = !0,
      elementResize: d = typeof ResizeObserver == "function",
      layoutShift: h = typeof IntersectionObserver == "function",
      animationFrame: f = !1,
    } = a,
    m = ou(n),
    b = i || c ? [...(m ? Si(m) : []), ...Si(t)] : [];
  b.forEach((P) => {
    i && P.addEventListener("scroll", o, { passive: !0 }),
      c && P.addEventListener("resize", o);
  });
  const v = m && h ? px(m, o) : null;
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
          var R;
          (R = x) == null || R.observe(t);
        }))),
        o();
    })),
    m && !f && x.observe(m),
    x.observe(t));
  let S,
    O = f ? dh(n) : null;
  f && C();
  function C() {
    const P = dh(n);
    O && !og(O, P) && o(), (O = P), (S = requestAnimationFrame(C));
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
var Ic = V.useLayoutEffect,
  mx = [
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
  wi = function () {};
function gx(n, t) {
  return t ? (t[0] === "-" ? n + t : n + "__" + t) : n;
}
function bx(n, t) {
  for (
    var o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), i = 2;
    i < o;
    i++
  )
    a[i - 2] = arguments[i];
  var c = [].concat(a);
  if (t && n)
    for (var d in t) t.hasOwnProperty(d) && t[d] && c.push("".concat(gx(n, d)));
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
    return Px(t)
      ? t.filter(Boolean)
      : _0(t) === "object" && t !== null
        ? [t]
        : [];
  },
  ag = function (t) {
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
    var o = Cn(t, mx);
    return ie({}, o);
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
function vx(n) {
  return $i(n) ? window.innerHeight : n.clientHeight;
}
function ig(n) {
  return $i(n) ? window.pageYOffset : n.scrollTop;
}
function ki(n, t) {
  if ($i(n)) {
    window.scrollTo(0, t);
    return;
  }
  n.scrollTop = t;
}
function yx(n) {
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
function _x(n, t, o, a) {
  return o * ((n = n / a - 1) * n * n + 1) + t;
}
function Aa(n, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200,
    a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : wi,
    i = ig(n),
    c = t - i,
    d = 10,
    h = 0;
  function f() {
    h += d;
    var m = _x(h, i, c, o);
    ki(n, m), h < o ? window.requestAnimationFrame(f) : a(n);
  }
  f();
}
function ph(n, t) {
  var o = n.getBoundingClientRect(),
    a = t.getBoundingClientRect(),
    i = t.offsetHeight / 3;
  a.bottom + i > o.bottom
    ? ki(
        n,
        Math.min(
          t.offsetTop + t.clientHeight - n.offsetHeight + i,
          n.scrollHeight,
        ),
      )
    : a.top - i < o.top && ki(n, Math.max(t.offsetTop - i, 0));
}
function xx(n) {
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
function Sx() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  } catch {
    return !1;
  }
}
var sg = !1,
  wx = {
    get passive() {
      return (sg = !0);
    },
  },
  Da = typeof window < "u" ? window : {};
Da.addEventListener &&
  Da.removeEventListener &&
  (Da.addEventListener("p", wi, wx), Da.removeEventListener("p", wi, !1));
var kx = sg;
function Cx(n) {
  return n != null;
}
function Px(n) {
  return Array.isArray(n);
}
function za(n, t, o) {
  return n ? t : o;
}
var Ox = function (t) {
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
  Ex = ["children", "innerProps"],
  Tx = ["children", "innerProps"];
function jx(n) {
  var t = n.maxHeight,
    o = n.menuEl,
    a = n.minHeight,
    i = n.placement,
    c = n.shouldScroll,
    d = n.isFixedPosition,
    h = n.controlHeight,
    f = yx(o),
    m = { placement: "bottom", maxHeight: t };
  if (!o || !o.offsetParent) return m;
  var b = f.getBoundingClientRect(),
    v = b.height,
    y = o.getBoundingClientRect(),
    x = y.bottom,
    S = y.height,
    O = y.top,
    C = o.offsetParent.getBoundingClientRect(),
    P = C.top,
    T = d ? window.innerHeight : vx(f),
    R = ig(f),
    L = parseInt(getComputedStyle(o).marginBottom, 10),
    j = parseInt(getComputedStyle(o).marginTop, 10),
    $ = P - j,
    N = T - O,
    K = $ + R,
    pe = v - R - O,
    Se = x - T + R + L,
    ee = R + O - j,
    le = 160;
  switch (i) {
    case "auto":
    case "bottom":
      if (N >= S) return { placement: "bottom", maxHeight: t };
      if (pe >= S && !d)
        return c && Aa(f, Se, le), { placement: "bottom", maxHeight: t };
      if ((!d && pe >= a) || (d && N >= a)) {
        c && Aa(f, Se, le);
        var ve = d ? N - L : pe - L;
        return { placement: "bottom", maxHeight: ve };
      }
      if (i === "auto" || d) {
        var xe = t,
          me = d ? $ : K;
        return (
          me >= a && (xe = Math.min(me - L - h, t)),
          { placement: "top", maxHeight: xe }
        );
      }
      if (i === "bottom")
        return c && ki(f, Se), { placement: "bottom", maxHeight: t };
      break;
    case "top":
      if ($ >= S) return { placement: "top", maxHeight: t };
      if (K >= S && !d)
        return c && Aa(f, ee, le), { placement: "top", maxHeight: t };
      if ((!d && K >= a) || (d && $ >= a)) {
        var he = t;
        return (
          ((!d && K >= a) || (d && $ >= a)) && (he = d ? $ - j : K - j),
          c && Aa(f, ee, le),
          { placement: "top", maxHeight: he }
        );
      }
      return { placement: "bottom", maxHeight: t };
    default:
      throw new Error('Invalid placement provided "'.concat(i, '".'));
  }
  return m;
}
function Ix(n) {
  var t = { bottom: "top", top: "bottom" };
  return n ? t[n] : "bottom";
}
var lg = function (t) {
    return t === "auto" ? "bottom" : t;
  },
  Fx = function (t, o) {
    var a,
      i = t.placement,
      c = t.theme,
      d = c.borderRadius,
      h = c.spacing,
      f = c.colors;
    return ie(
      ((a = { label: "menu" }),
      oo(a, Ix(i), "100%"),
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
  cg = V.createContext(null),
  Rx = function (t) {
    var o = t.children,
      a = t.minMenuHeight,
      i = t.maxMenuHeight,
      c = t.menuPlacement,
      d = t.menuPosition,
      h = t.menuShouldScrollIntoView,
      f = t.theme,
      m = V.useContext(cg) || {},
      b = m.setPortalPlacement,
      v = V.useRef(null),
      y = V.useState(i),
      x = wn(y, 2),
      S = x[0],
      O = x[1],
      C = V.useState(null),
      P = wn(C, 2),
      T = P[0],
      R = P[1],
      L = f.spacing.controlHeight;
    return (
      Ic(
        function () {
          var j = v.current;
          if (j) {
            var $ = d === "fixed",
              N = h && !$,
              K = jx({
                maxHeight: i,
                menuEl: j,
                minHeight: a,
                placement: c,
                shouldScroll: N,
                isFixedPosition: $,
                controlHeight: L,
              });
            O(K.maxHeight), R(K.placement), b == null || b(K.placement);
          }
        },
        [i, c, d, h, a, b, L],
      ),
      o({
        ref: v,
        placerProps: ie(ie({}, t), {}, { placement: T || lg(c), maxHeight: S }),
      })
    );
  },
  Mx = function (t) {
    var o = t.children,
      a = t.innerRef,
      i = t.innerProps;
    return ne("div", ce({}, Ge(t, "menu", { menu: !0 }), { ref: a }, i), o);
  },
  Nx = Mx,
  Bx = function (t, o) {
    var a = t.maxHeight,
      i = t.theme.spacing.baseUnit;
    return ie(
      {
        maxHeight: a,
        overflowY: "auto",
        position: "relative",
        WebkitOverflowScrolling: "touch",
      },
      o ? {} : { paddingBottom: i, paddingTop: i },
    );
  },
  Lx = function (t) {
    var o = t.children,
      a = t.innerProps,
      i = t.innerRef,
      c = t.isMulti;
    return ne(
      "div",
      ce(
        {},
        Ge(t, "menuList", { "menu-list": !0, "menu-list--is-multi": c }),
        { ref: i },
        a,
      ),
      o,
    );
  },
  ug = function (t, o) {
    var a = t.theme,
      i = a.spacing.baseUnit,
      c = a.colors;
    return ie(
      { textAlign: "center" },
      o
        ? {}
        : {
            color: c.neutral40,
            padding: "".concat(i * 2, "px ").concat(i * 3, "px"),
          },
    );
  },
  $x = ug,
  Ax = ug,
  Dx = function (t) {
    var o = t.children,
      a = o === void 0 ? "No options" : o,
      i = t.innerProps,
      c = Cn(t, Ex);
    return ne(
      "div",
      ce(
        {},
        Ge(
          ie(ie({}, c), {}, { children: a, innerProps: i }),
          "noOptionsMessage",
          { "menu-notice": !0, "menu-notice--no-options": !0 },
        ),
        i,
      ),
      a,
    );
  },
  zx = function (t) {
    var o = t.children,
      a = o === void 0 ? "Loading..." : o,
      i = t.innerProps,
      c = Cn(t, Tx);
    return ne(
      "div",
      ce(
        {},
        Ge(
          ie(ie({}, c), {}, { children: a, innerProps: i }),
          "loadingMessage",
          { "menu-notice": !0, "menu-notice--loading": !0 },
        ),
        i,
      ),
      a,
    );
  },
  Hx = function (t) {
    var o = t.rect,
      a = t.offset,
      i = t.position;
    return { left: o.left, position: i, top: a, width: o.width, zIndex: 1 };
  },
  Vx = function (t) {
    var o = t.appendTo,
      a = t.children,
      i = t.controlElement,
      c = t.innerProps,
      d = t.menuPlacement,
      h = t.menuPosition,
      f = V.useRef(null),
      m = V.useRef(null),
      b = V.useState(lg(d)),
      v = wn(b, 2),
      y = v[0],
      x = v[1],
      S = V.useMemo(function () {
        return { setPortalPlacement: x };
      }, []),
      O = V.useState(null),
      C = wn(O, 2),
      P = C[0],
      T = C[1],
      R = V.useCallback(
        function () {
          if (i) {
            var N = xx(i),
              K = h === "fixed" ? 0 : window.pageYOffset,
              pe = N[y] + K;
            (pe !== (P == null ? void 0 : P.offset) ||
              N.left !== (P == null ? void 0 : P.rect.left) ||
              N.width !== (P == null ? void 0 : P.rect.width)) &&
              T({ offset: pe, rect: N });
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
    Ic(
      function () {
        R();
      },
      [R],
    );
    var L = V.useCallback(
      function () {
        typeof m.current == "function" && (m.current(), (m.current = null)),
          i &&
            f.current &&
            (m.current = hx(i, f.current, R, {
              elementResize: "ResizeObserver" in window,
            }));
      },
      [i, R],
    );
    Ic(
      function () {
        L();
      },
      [L],
    );
    var j = V.useCallback(
      function (N) {
        (f.current = N), L();
      },
      [L],
    );
    if ((!o && h !== "fixed") || !P) return null;
    var $ = ne(
      "div",
      ce(
        { ref: j },
        Ge(
          ie(ie({}, t), {}, { offset: P.offset, position: h, rect: P.rect }),
          "menuPortal",
          { "menu-portal": !0 },
        ),
        c,
      ),
      a,
    );
    return ne(cg.Provider, { value: S }, o ? tx.createPortal($, o) : $);
  },
  Ux = function (t) {
    var o = t.isDisabled,
      a = t.isRtl;
    return {
      label: "container",
      direction: a ? "rtl" : void 0,
      pointerEvents: o ? "none" : void 0,
      position: "relative",
    };
  },
  Gx = function (t) {
    var o = t.children,
      a = t.innerProps,
      i = t.isDisabled,
      c = t.isRtl;
    return ne(
      "div",
      ce({}, Ge(t, "container", { "--is-disabled": i, "--is-rtl": c }), a),
      o,
    );
  },
  qx = function (t, o) {
    var a = t.theme.spacing,
      i = t.isMulti,
      c = t.hasValue,
      d = t.selectProps.controlShouldRenderValue;
    return ie(
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
  Wx = function (t) {
    var o = t.children,
      a = t.innerProps,
      i = t.isMulti,
      c = t.hasValue;
    return ne(
      "div",
      ce(
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
  Kx = function () {
    return {
      alignItems: "center",
      alignSelf: "stretch",
      display: "flex",
      flexShrink: 0,
    };
  },
  Xx = function (t) {
    var o = t.children,
      a = t.innerProps;
    return ne(
      "div",
      ce({}, Ge(t, "indicatorsContainer", { indicators: !0 }), a),
      o,
    );
  },
  mh,
  Qx = ["size"],
  Yx = ["innerProps", "isRtl", "size"],
  Zx = {
    name: "8mmkcg",
    styles:
      "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0",
  },
  dg = function (t) {
    var o = t.size,
      a = Cn(t, Qx);
    return ne(
      "svg",
      ce(
        {
          height: o,
          width: o,
          viewBox: "0 0 20 20",
          "aria-hidden": "true",
          focusable: "false",
          css: Zx,
        },
        a,
      ),
    );
  },
  au = function (t) {
    return ne(
      dg,
      ce({ size: 20 }, t),
      ne("path", {
        d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z",
      }),
    );
  },
  fg = function (t) {
    return ne(
      dg,
      ce({ size: 20 }, t),
      ne("path", {
        d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z",
      }),
    );
  },
  pg = function (t, o) {
    var a = t.isFocused,
      i = t.theme,
      c = i.spacing.baseUnit,
      d = i.colors;
    return ie(
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
  Jx = pg,
  e4 = function (t) {
    var o = t.children,
      a = t.innerProps;
    return ne(
      "div",
      ce(
        {},
        Ge(t, "dropdownIndicator", { indicator: !0, "dropdown-indicator": !0 }),
        a,
      ),
      o || ne(fg, null),
    );
  },
  t4 = pg,
  n4 = function (t) {
    var o = t.children,
      a = t.innerProps;
    return ne(
      "div",
      ce(
        {},
        Ge(t, "clearIndicator", { indicator: !0, "clear-indicator": !0 }),
        a,
      ),
      o || ne(au, null),
    );
  },
  r4 = function (t, o) {
    var a = t.isDisabled,
      i = t.theme,
      c = i.spacing.baseUnit,
      d = i.colors;
    return ie(
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
  o4 = function (t) {
    var o = t.innerProps;
    return ne(
      "span",
      ce({}, o, Ge(t, "indicatorSeparator", { "indicator-separator": !0 })),
    );
  },
  a4 = J5(
    mh ||
      (mh = ex([
        `
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`,
      ])),
  ),
  i4 = function (t, o) {
    var a = t.isFocused,
      i = t.size,
      c = t.theme,
      d = c.colors,
      h = c.spacing.baseUnit;
    return ie(
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
    return ne("span", {
      css: tu(
        {
          animation: ""
            .concat(a4, " 1s ease-in-out ")
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
  s4 = function (t) {
    var o = t.innerProps,
      a = t.isRtl,
      i = t.size,
      c = i === void 0 ? 4 : i,
      d = Cn(t, Yx);
    return ne(
      "div",
      ce(
        {},
        Ge(
          ie(ie({}, d), {}, { innerProps: o, isRtl: a, size: c }),
          "loadingIndicator",
          { indicator: !0, "loading-indicator": !0 },
        ),
        o,
      ),
      ne(Jl, { delay: 0, offset: a }),
      ne(Jl, { delay: 160, offset: !0 }),
      ne(Jl, { delay: 320, offset: !a }),
    );
  },
  l4 = function (t, o) {
    var a = t.isDisabled,
      i = t.isFocused,
      c = t.theme,
      d = c.colors,
      h = c.borderRadius,
      f = c.spacing;
    return ie(
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
  c4 = function (t) {
    var o = t.children,
      a = t.isDisabled,
      i = t.isFocused,
      c = t.innerRef,
      d = t.innerProps,
      h = t.menuIsOpen;
    return ne(
      "div",
      ce(
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
  u4 = c4,
  d4 = ["data"],
  f4 = function (t, o) {
    var a = t.theme.spacing;
    return o
      ? {}
      : { paddingBottom: a.baseUnit * 2, paddingTop: a.baseUnit * 2 };
  },
  p4 = function (t) {
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
    return ne(
      "div",
      ce({}, Ge(t, "group", { group: !0 }), f),
      ne(
        d,
        ce({}, h, {
          selectProps: v,
          theme: b,
          getStyles: i,
          getClassNames: c,
          cx: a,
        }),
        m,
      ),
      ne("div", null, o),
    );
  },
  h4 = function (t, o) {
    var a = t.theme,
      i = a.colors,
      c = a.spacing;
    return ie(
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
  m4 = function (t) {
    var o = ag(t);
    o.data;
    var a = Cn(o, d4);
    return ne("div", ce({}, Ge(t, "groupHeading", { "group-heading": !0 }), a));
  },
  g4 = p4,
  b4 = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
  v4 = function (t, o) {
    var a = t.isDisabled,
      i = t.value,
      c = t.theme,
      d = c.spacing,
      h = c.colors;
    return ie(
      ie(
        {
          visibility: a ? "hidden" : "visible",
          transform: i ? "translateZ(0)" : "",
        },
        y4,
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
  hg = {
    gridArea: "1 / 2",
    font: "inherit",
    minWidth: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0,
  },
  y4 = {
    flex: "1 1 auto",
    display: "inline-grid",
    gridArea: "1 / 1 / 2 / 3",
    gridTemplateColumns: "0 min-content",
    "&:after": ie(
      {
        content: 'attr(data-value) " "',
        visibility: "hidden",
        whiteSpace: "pre",
      },
      hg,
    ),
  },
  _4 = function (t) {
    return ie(
      {
        label: "input",
        color: "inherit",
        background: 0,
        opacity: t ? 0 : 1,
        width: "100%",
      },
      hg,
    );
  },
  x4 = function (t) {
    var o = t.cx,
      a = t.value,
      i = ag(t),
      c = i.innerRef,
      d = i.isDisabled,
      h = i.isHidden,
      f = i.inputClassName,
      m = Cn(i, b4);
    return ne(
      "div",
      ce({}, Ge(t, "input", { "input-container": !0 }), {
        "data-value": a || "",
      }),
      ne(
        "input",
        ce(
          { className: o({ input: !0 }, f), ref: c, style: _4(h), disabled: d },
          m,
        ),
      ),
    );
  },
  S4 = x4,
  w4 = function (t, o) {
    var a = t.theme,
      i = a.spacing,
      c = a.borderRadius,
      d = a.colors;
    return ie(
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
  k4 = function (t, o) {
    var a = t.theme,
      i = a.borderRadius,
      c = a.colors,
      d = t.cropWithEllipsis;
    return ie(
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
  C4 = function (t, o) {
    var a = t.theme,
      i = a.spacing,
      c = a.borderRadius,
      d = a.colors,
      h = t.isFocused;
    return ie(
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
  mg = function (t) {
    var o = t.children,
      a = t.innerProps;
    return ne("div", a, o);
  },
  P4 = mg,
  O4 = mg;
function E4(n) {
  var t = n.children,
    o = n.innerProps;
  return ne("div", ce({ role: "button" }, o), t || ne(au, { size: 14 }));
}
var T4 = function (t) {
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
    return ne(
      m,
      {
        data: i,
        innerProps: ie(
          ie(
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
      ne(
        b,
        {
          data: i,
          innerProps: ie(
            {},
            Ge(t, "multiValueLabel", { "multi-value__label": !0 }),
          ),
          selectProps: f,
        },
        o,
      ),
      ne(v, {
        data: i,
        innerProps: ie(
          ie({}, Ge(t, "multiValueRemove", { "multi-value__remove": !0 })),
          {},
          { "aria-label": "Remove ".concat(o || "option") },
          h,
        ),
        selectProps: f,
      }),
    );
  },
  j4 = T4,
  I4 = function (t, o) {
    var a = t.isDisabled,
      i = t.isFocused,
      c = t.isSelected,
      d = t.theme,
      h = d.spacing,
      f = d.colors;
    return ie(
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
  F4 = function (t) {
    var o = t.children,
      a = t.isDisabled,
      i = t.isFocused,
      c = t.isSelected,
      d = t.innerRef,
      h = t.innerProps;
    return ne(
      "div",
      ce(
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
  R4 = F4,
  M4 = function (t, o) {
    var a = t.theme,
      i = a.spacing,
      c = a.colors;
    return ie(
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
  N4 = function (t) {
    var o = t.children,
      a = t.innerProps;
    return ne("div", ce({}, Ge(t, "placeholder", { placeholder: !0 }), a), o);
  },
  B4 = N4,
  L4 = function (t, o) {
    var a = t.isDisabled,
      i = t.theme,
      c = i.spacing,
      d = i.colors;
    return ie(
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
  $4 = function (t) {
    var o = t.children,
      a = t.isDisabled,
      i = t.innerProps;
    return ne(
      "div",
      ce(
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
  A4 = $4,
  D4 = {
    ClearIndicator: n4,
    Control: u4,
    DropdownIndicator: e4,
    DownChevron: fg,
    CrossIcon: au,
    Group: g4,
    GroupHeading: m4,
    IndicatorsContainer: Xx,
    IndicatorSeparator: o4,
    Input: S4,
    LoadingIndicator: s4,
    Menu: Nx,
    MenuList: Lx,
    MenuPortal: Vx,
    LoadingMessage: zx,
    NoOptionsMessage: Dx,
    MultiValue: j4,
    MultiValueContainer: P4,
    MultiValueLabel: O4,
    MultiValueRemove: E4,
    Option: R4,
    Placeholder: B4,
    SelectContainer: Gx,
    SingleValue: A4,
    ValueContainer: Wx,
  },
  z4 = function (t) {
    return ie(ie({}, D4), t.components);
  },
  gh =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function H4(n, t) {
  return !!(n === t || (gh(n) && gh(t)));
}
function V4(n, t) {
  if (n.length !== t.length) return !1;
  for (var o = 0; o < n.length; o++) if (!H4(n[o], t[o])) return !1;
  return !0;
}
function U4(n, t) {
  t === void 0 && (t = V4);
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
var G4 = {
    name: "7pg0cj-a11yText",
    styles:
      "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap",
  },
  q4 = function (t) {
    return ne("span", ce({ css: G4 }, t));
  },
  bh = q4,
  W4 = {
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
        v = function (O, C) {
          return O && O.length
            ? "".concat(O.indexOf(C) + 1, " of ").concat(O.length)
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
  K4 = function (t) {
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
      C = f.isSearchable,
      P = f.menuIsOpen,
      T = f.options,
      R = f.screenReaderStatus,
      L = f.tabSelectsValue,
      j = f.isLoading,
      $ = f["aria-label"],
      N = f["aria-live"],
      K = V.useMemo(
        function () {
          return ie(ie({}, W4), v || {});
        },
        [v],
      ),
      pe = V.useMemo(
        function () {
          var me = "";
          if (o && K.onChange) {
            var he = o.option,
              we = o.options,
              q = o.removedValue,
              Q = o.removedValues,
              w = o.value,
              A = function (fe) {
                return Array.isArray(fe) ? null : fe;
              },
              W = q || he || A(w),
              se = W ? y(W) : "",
              re = we || Q || void 0,
              ye = re ? re.map(y) : [],
              ue = ie({ isDisabled: W && O(W, h), label: se, labels: ye }, o);
            me = K.onChange(ue);
          }
          return me;
        },
        [o, K, O, h, y],
      ),
      Se = V.useMemo(
        function () {
          var me = "",
            he = a || i,
            we = !!(a && h && h.includes(a));
          if (he && K.onFocus) {
            var q = {
              focused: he,
              label: y(he),
              isDisabled: O(he, h),
              isSelected: we,
              options: c,
              context: he === a ? "menu" : "value",
              selectValue: h,
              isAppleDevice: b,
            };
            me = K.onFocus(q);
          }
          return me;
        },
        [a, i, y, O, K, c, h, b],
      ),
      ee = V.useMemo(
        function () {
          var me = "";
          if (P && T.length && !j && K.onFilter) {
            var he = R({ count: c.length });
            me = K.onFilter({ inputValue: x, resultsMessage: he });
          }
          return me;
        },
        [c, x, P, K, T, R, j],
      ),
      le = (o == null ? void 0 : o.action) === "initial-input-focus",
      ve = V.useMemo(
        function () {
          var me = "";
          if (K.guidance) {
            var he = i ? "value" : P ? "menu" : "input";
            me = K.guidance({
              "aria-label": $,
              context: he,
              isDisabled: a && O(a, h),
              isMulti: S,
              isSearchable: C,
              tabSelectsValue: L,
              isInitialFocus: le,
            });
          }
          return me;
        },
        [$, a, i, S, O, C, P, K, h, L, le],
      ),
      xe = ne(
        V.Fragment,
        null,
        ne("span", { id: "aria-selection" }, pe),
        ne("span", { id: "aria-focused" }, Se),
        ne("span", { id: "aria-results" }, ee),
        ne("span", { id: "aria-guidance" }, ve),
      );
    return ne(
      V.Fragment,
      null,
      ne(bh, { id: m }, le && xe),
      ne(
        bh,
        {
          "aria-live": N,
          "aria-atomic": "false",
          "aria-relevant": "additions text",
          role: "log",
        },
        d && !le && xe,
      ),
    );
  },
  X4 = K4,
  Fc = [
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
  Q4 = new RegExp(
    "[" +
      Fc.map(function (n) {
        return n.letters;
      }).join("") +
      "]",
    "g",
  ),
  gg = {};
for (var ec = 0; ec < Fc.length; ec++)
  for (var tc = Fc[ec], nc = 0; nc < tc.letters.length; nc++)
    gg[tc.letters[nc]] = tc.base;
var bg = function (t) {
    return t.replace(Q4, function (o) {
      return gg[o];
    });
  },
  Y4 = U4(bg),
  vh = function (t) {
    return t.replace(/^\s+|\s+$/g, "");
  },
  Z4 = function (t) {
    return "".concat(t.label, " ").concat(t.value);
  },
  J4 = function (t) {
    return function (o, a) {
      if (o.data.__isNew__) return !0;
      var i = ie(
          {
            ignoreCase: !0,
            ignoreAccents: !0,
            stringify: Z4,
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
        d && ((b = Y4(b)), (v = bg(v))),
        m === "start" ? v.substr(0, b.length) === b : v.indexOf(b) > -1
      );
    };
  },
  e3 = ["innerRef"];
function t3(n) {
  var t = n.innerRef,
    o = Cn(n, e3),
    a = Ox(o, "onExited", "in", "enter", "exit", "appear");
  return ne(
    "input",
    ce({ ref: t }, a, {
      css: tu(
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
var n3 = function (t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function r3(n) {
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
      function (C, P) {
        if (m.current !== null) {
          var T = m.current,
            R = T.scrollTop,
            L = T.scrollHeight,
            j = T.clientHeight,
            $ = m.current,
            N = P > 0,
            K = L - j - R,
            pe = !1;
          K > P && d.current && (a && a(C), (d.current = !1)),
            N && h.current && (c && c(C), (h.current = !1)),
            N && P > K
              ? (o && !d.current && o(C),
                ($.scrollTop = L),
                (pe = !0),
                (d.current = !0))
              : !N &&
                -P > R &&
                (i && !h.current && i(C),
                ($.scrollTop = 0),
                (pe = !0),
                (h.current = !0)),
            pe && n3(C);
        }
      },
      [o, a, i, c],
    ),
    v = V.useCallback(
      function (C) {
        b(C, C.deltaY);
      },
      [b],
    ),
    y = V.useCallback(function (C) {
      f.current = C.changedTouches[0].clientY;
    }, []),
    x = V.useCallback(
      function (C) {
        var P = f.current - C.changedTouches[0].clientY;
        b(C, P);
      },
      [b],
    ),
    S = V.useCallback(
      function (C) {
        if (C) {
          var P = kx ? { passive: !1 } : !1;
          C.addEventListener("wheel", v, P),
            C.addEventListener("touchstart", y, P),
            C.addEventListener("touchmove", x, P);
        }
      },
      [x, y, v],
    ),
    O = V.useCallback(
      function (C) {
        C &&
          (C.removeEventListener("wheel", v, !1),
          C.removeEventListener("touchstart", y, !1),
          C.removeEventListener("touchmove", x, !1));
      },
      [x, y, v],
    );
  return (
    V.useEffect(
      function () {
        if (t) {
          var C = m.current;
          return (
            S(C),
            function () {
              O(C);
            }
          );
        }
      },
      [t, S, O],
    ),
    function (C) {
      m.current = C;
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
function wh() {
  var n = this.scrollTop,
    t = this.scrollHeight,
    o = n + this.offsetHeight;
  n === 0 ? (this.scrollTop = 1) : o === t && (this.scrollTop = n - 1);
}
function kh() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var Ch = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  to = 0,
  Y0 = { capture: !1, passive: !1 };
function o3(n) {
  var t = n.isEnabled,
    o = n.accountForScrollbars,
    a = o === void 0 ? !0 : o,
    i = V.useRef({}),
    c = V.useRef(null),
    d = V.useCallback(
      function (f) {
        if (Ch) {
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
            kh() &&
            (m.addEventListener("touchmove", xh, Y0),
            f &&
              (f.addEventListener("touchstart", wh, Y0),
              f.addEventListener("touchmove", Sh, Y0))),
            (to += 1);
        }
      },
      [a],
    ),
    h = V.useCallback(
      function (f) {
        if (Ch) {
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
              kh() &&
              (m.removeEventListener("touchmove", xh, Y0),
              f &&
                (f.removeEventListener("touchstart", wh, Y0),
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
var a3 = function (t) {
    var o = t.target;
    return (
      o.ownerDocument.activeElement && o.ownerDocument.activeElement.blur()
    );
  },
  i3 = {
    name: "1kfdb0e",
    styles: "position:fixed;left:0;bottom:0;right:0;top:0",
  };
function s3(n) {
  var t = n.children,
    o = n.lockEnabled,
    a = n.captureEnabled,
    i = a === void 0 ? !0 : a,
    c = n.onBottomArrive,
    d = n.onBottomLeave,
    h = n.onTopArrive,
    f = n.onTopLeave,
    m = r3({
      isEnabled: i,
      onBottomArrive: c,
      onBottomLeave: d,
      onTopArrive: h,
      onTopLeave: f,
    }),
    b = o3({ isEnabled: o }),
    v = function (x) {
      m(x), b(x);
    };
  return ne(V.Fragment, null, o && ne("div", { onClick: a3, css: i3 }), t(v));
}
var l3 = {
    name: "1a0ro4n-requiredInput",
    styles:
      "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%",
  },
  c3 = function (t) {
    var o = t.name,
      a = t.onFocus;
    return ne("input", {
      required: !0,
      name: o,
      tabIndex: -1,
      "aria-hidden": "true",
      onFocus: a,
      css: l3,
      value: "",
      onChange: function () {},
    });
  },
  u3 = c3;
function iu(n) {
  var t;
  return typeof window < "u" && window.navigator != null
    ? n.test(
        ((t = window.navigator.userAgentData) === null || t === void 0
          ? void 0
          : t.platform) || window.navigator.platform,
      )
    : !1;
}
function d3() {
  return iu(/^iPhone/i);
}
function vg() {
  return iu(/^Mac/i);
}
function f3() {
  return iu(/^iPad/i) || (vg() && navigator.maxTouchPoints > 1);
}
function p3() {
  return d3() || f3();
}
function h3() {
  return vg() || p3();
}
var m3 = function (t) {
    return t.label;
  },
  g3 = function (t) {
    return t.label;
  },
  b3 = function (t) {
    return t.value;
  },
  v3 = function (t) {
    return !!t.isDisabled;
  },
  y3 = {
    clearIndicator: t4,
    container: Ux,
    control: l4,
    dropdownIndicator: Jx,
    group: f4,
    groupHeading: h4,
    indicatorsContainer: Kx,
    indicatorSeparator: r4,
    input: v4,
    loadingIndicator: i4,
    loadingMessage: Ax,
    menu: Fx,
    menuList: Bx,
    menuPortal: Hx,
    multiValue: w4,
    multiValueLabel: k4,
    multiValueRemove: C4,
    noOptionsMessage: $x,
    option: I4,
    placeholder: M4,
    singleValue: L4,
    valueContainer: qx,
  },
  _3 = {
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
  x3 = 4,
  yg = 4,
  S3 = 38,
  w3 = yg * 2,
  k3 = { baseUnit: yg, controlHeight: S3, menuGutter: w3 },
  rc = { borderRadius: x3, colors: _3, spacing: k3 },
  C3 = {
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
    filterOption: J4(),
    formatGroupLabel: m3,
    getOptionLabel: g3,
    getOptionValue: b3,
    isDisabled: !1,
    isLoading: !1,
    isMulti: !1,
    isRtl: !1,
    isSearchable: !0,
    isOptionDisabled: v3,
    loadingMessage: function () {
      return "Loading...";
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: !1,
    menuPlacement: "bottom",
    menuPosition: "absolute",
    menuShouldBlockScroll: !1,
    menuShouldScrollIntoView: !Sx(),
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
  var i = Sg(n, t, o),
    c = wg(n, t, o),
    d = xg(n, t),
    h = Ci(n, t);
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
    .filter(Cx);
}
function _g(n) {
  return n.reduce(function (t, o) {
    return (
      o.type === "group"
        ? t.push.apply(
            t,
            Qc(
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
            Qc(
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
function P3(n, t) {
  return _g(Ja(n, t));
}
function Eh(n, t) {
  var o = n.inputValue,
    a = o === void 0 ? "" : o,
    i = t.data,
    c = t.isSelected,
    d = t.label,
    h = t.value;
  return (!Cg(n) || !c) && kg(n, { label: d, value: h, data: i }, a);
}
function O3(n, t) {
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
function E3(n, t) {
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
  xg = function (t, o) {
    return t.getOptionLabel(o);
  },
  Ci = function (t, o) {
    return t.getOptionValue(o);
  };
function Sg(n, t, o) {
  return typeof n.isOptionDisabled == "function"
    ? n.isOptionDisabled(t, o)
    : !1;
}
function wg(n, t, o) {
  if (o.indexOf(t) > -1) return !0;
  if (typeof n.isOptionSelected == "function") return n.isOptionSelected(t, o);
  var a = Ci(n, t);
  return o.some(function (i) {
    return Ci(n, i) === a;
  });
}
function kg(n, t, o) {
  return n.filterOption ? n.filterOption(t, o) : !0;
}
var Cg = function (t) {
    var o = t.hideSelectedOptions,
      a = t.isMulti;
    return o === void 0 ? a : o;
  },
  T3 = 1,
  Pg = (function (n) {
    Q2(o, n);
    var t = J2(o);
    function o(a) {
      var i;
      if (
        (K2(this, o),
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
        (i.isAppleDevice = h3()),
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
            var C = i.getOptionValue(f);
            i.setValue(
              x.filter(function (P) {
                return i.getOptionValue(P) !== C;
              }),
              "deselect-option",
              f,
            );
          } else if (!O)
            v
              ? i.setValue([].concat(Qc(x), [f]), "select-option", f)
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
            x = za(m, y, y[0] || null);
          i.onChange(x, { action: "remove-value", removedValue: f }),
            i.focusInput();
        }),
        (i.clearValue = function () {
          var f = i.state.selectValue;
          i.onChange(za(i.props.isMulti, [], null), {
            action: "clear",
            removedValues: f,
          });
        }),
        (i.popValue = function () {
          var f = i.props.isMulti,
            m = i.state.selectValue,
            b = m[m.length - 1],
            v = m.slice(0, m.length - 1),
            y = za(f, v, v[0] || null);
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
          return bx.apply(void 0, [i.props.classNamePrefix].concat(m));
        }),
        (i.getOptionLabel = function (f) {
          return xg(i.props, f);
        }),
        (i.getOptionValue = function (f) {
          return Ci(i.props, f);
        }),
        (i.getStyles = function (f, m) {
          var b = i.props.unstyled,
            v = y3[f](m, b);
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
          return z4(i.props);
        }),
        (i.buildCategorizedOptions = function () {
          return Ja(i.props, i.state.selectValue);
        }),
        (i.getCategorizedOptions = function () {
          return i.props.menuIsOpen ? i.buildCategorizedOptions() : [];
        }),
        (i.buildFocusableOptions = function () {
          return _g(i.buildCategorizedOptions());
        }),
        (i.getFocusableOptions = function () {
          return i.props.menuIsOpen ? i.buildFocusableOptions() : [];
        }),
        (i.ariaOnChange = function (f, m) {
          i.setState({ ariaSelection: ie({ value: f }, m) });
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
          return Cg(i.props);
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
            C = m.menuIsOpen,
            P = m.onKeyDown,
            T = m.tabSelectsValue,
            R = m.openMenuOnFocus,
            L = i.state,
            j = L.focusedOption,
            $ = L.focusedValue,
            N = L.selectValue;
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
                  !C ||
                  !T ||
                  !j ||
                  (R && i.isOptionSelected(j, N))
                )
                  return;
                i.selectOption(j);
                break;
              case "Enter":
                if (f.keyCode === 229) break;
                if (C) {
                  if (!j || i.isComposing) return;
                  i.selectOption(j);
                  break;
                }
                return;
              case "Escape":
                C
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
                if (!C) {
                  i.openMenu("first");
                  break;
                }
                if (!j) return;
                i.selectOption(j);
                break;
              case "ArrowUp":
                C ? i.focusOption("up") : i.openMenu("last");
                break;
              case "ArrowDown":
                C ? i.focusOption("down") : i.openMenu("first");
                break;
              case "PageUp":
                if (!C) return;
                i.focusOption("pageup");
                break;
              case "PageDown":
                if (!C) return;
                i.focusOption("pagedown");
                break;
              case "Home":
                if (!C) return;
                i.focusOption("first");
                break;
              case "End":
                if (!C) return;
                i.focusOption("last");
                break;
              default:
                return;
            }
            f.preventDefault();
          }
        }),
        (i.state.instancePrefix =
          "react-select-" + (i.props.instanceId || ++T3)),
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
      X2(
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
                  : ie(ie({}, rc), this.props.theme)
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
              return Sg(this.props, i, c);
            },
          },
          {
            key: "isOptionSelected",
            value: function (i, c) {
              return wg(this.props, i, c);
            },
          },
          {
            key: "filterOption",
            value: function (i, c) {
              return kg(this.props, i, c);
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
                C = O.inputIsHidden,
                P = O.ariaSelection,
                T = this.commonProps,
                R = h || this.getElementId("input"),
                L = ie(
                  ie(
                    ie(
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
                    ce(
                      {},
                      T,
                      {
                        autoCapitalize: "none",
                        autoComplete: "off",
                        autoCorrect: "off",
                        id: R,
                        innerRef: this.getInputRef,
                        isDisabled: c,
                        isHidden: C,
                        onBlur: this.onInputBlur,
                        onChange: this.handleInputChange,
                        onFocus: this.onInputFocus,
                        spellCheck: "false",
                        tabIndex: m,
                        form: b,
                        type: "text",
                        value: f,
                      },
                      L,
                    ),
                  )
                : V.createElement(
                    t3,
                    ce(
                      {
                        id: R,
                        innerRef: this.getInputRef,
                        onBlur: this.onInputBlur,
                        onChange: wi,
                        onFocus: this.onInputFocus,
                        disabled: c,
                        tabIndex: m,
                        inputMode: "none",
                        form: b,
                        value: "",
                      },
                      L,
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
                C = x.isMulti,
                P = x.inputValue,
                T = x.placeholder,
                R = this.state,
                L = R.selectValue,
                j = R.focusedValue,
                $ = R.isFocused;
              if (!this.hasValue() || !S)
                return P
                  ? null
                  : V.createElement(
                      v,
                      ce({}, y, {
                        key: "placeholder",
                        isDisabled: O,
                        isFocused: $,
                        innerProps: { id: this.getElementId("placeholder") },
                      }),
                      T,
                    );
              if (C)
                return L.map(function (K, pe) {
                  var Se = K === j,
                    ee = ""
                      .concat(i.getOptionLabel(K), "-")
                      .concat(i.getOptionValue(K));
                  return V.createElement(
                    d,
                    ce({}, y, {
                      components: { Container: h, Label: f, Remove: m },
                      isFocused: Se,
                      isDisabled: O,
                      key: ee,
                      index: pe,
                      removeProps: {
                        onClick: function () {
                          return i.removeValue(K);
                        },
                        onTouchEnd: function () {
                          return i.removeValue(K);
                        },
                        onMouseDown: function (ve) {
                          ve.preventDefault();
                        },
                      },
                      data: K,
                    }),
                    i.formatOptionLabel(K, "value"),
                  );
                });
              if (P) return null;
              var N = L[0];
              return V.createElement(
                b,
                ce({}, y, { data: N, isDisabled: O }),
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
                ce({}, d, { innerProps: v, isFocused: b }),
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
                ce({}, d, { innerProps: v, isDisabled: f, isFocused: b }),
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
                ce({}, h, { isDisabled: f, isFocused: m }),
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
                ce({}, d, { innerProps: m, isDisabled: h, isFocused: f }),
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
                C = this.props,
                P = C.captureMenuScroll,
                T = C.inputValue,
                R = C.isLoading,
                L = C.loadingMessage,
                j = C.minMenuHeight,
                $ = C.maxMenuHeight,
                N = C.menuIsOpen,
                K = C.menuPlacement,
                pe = C.menuPosition,
                Se = C.menuPortalTarget,
                ee = C.menuShouldBlockScroll,
                le = C.menuShouldScrollIntoView,
                ve = C.noOptionsMessage,
                xe = C.onMenuScrollToTop,
                me = C.onMenuScrollToBottom;
              if (!N) return null;
              var he = function (se, re) {
                  var ye = se.type,
                    ue = se.data,
                    ge = se.isDisabled,
                    fe = se.isSelected,
                    Me = se.label,
                    Yn = se.value,
                    Bt = O === ue,
                    _t = ge
                      ? void 0
                      : function () {
                          return i.onOptionHover(ue);
                        },
                    w0 = ge
                      ? void 0
                      : function () {
                          return i.selectOption(ue);
                        },
                    k0 = "".concat(i.getElementId("option"), "-").concat(re),
                    xo = {
                      id: k0,
                      onClick: w0,
                      onMouseMove: _t,
                      onMouseOver: _t,
                      tabIndex: -1,
                      role: "option",
                      "aria-selected": i.isAppleDevice ? void 0 : fe,
                    };
                  return V.createElement(
                    x,
                    ce({}, S, {
                      innerProps: xo,
                      data: ue,
                      isDisabled: ge,
                      isSelected: fe,
                      key: k0,
                      label: Me,
                      type: ye,
                      value: Yn,
                      isFocused: Bt,
                      innerRef: Bt ? i.getFocusedOptionRef : void 0,
                    }),
                    i.formatOptionLabel(se.data, "menu"),
                  );
                },
                we;
              if (this.hasOptions())
                we = this.getCategorizedOptions().map(function (W) {
                  if (W.type === "group") {
                    var se = W.data,
                      re = W.options,
                      ye = W.index,
                      ue = "".concat(i.getElementId("group"), "-").concat(ye),
                      ge = "".concat(ue, "-heading");
                    return V.createElement(
                      d,
                      ce({}, S, {
                        key: ue,
                        data: se,
                        options: re,
                        Heading: h,
                        headingProps: { id: ge, data: W.data },
                        label: i.formatGroupLabel(W.data),
                      }),
                      W.options.map(function (fe) {
                        return he(fe, "".concat(ye, "-").concat(fe.index));
                      }),
                    );
                  } else if (W.type === "option")
                    return he(W, "".concat(W.index));
                });
              else if (R) {
                var q = L({ inputValue: T });
                if (q === null) return null;
                we = V.createElement(v, S, q);
              } else {
                var Q = ve({ inputValue: T });
                if (Q === null) return null;
                we = V.createElement(y, S, Q);
              }
              var w = {
                  minMenuHeight: j,
                  maxMenuHeight: $,
                  menuPlacement: K,
                  menuPosition: pe,
                  menuShouldScrollIntoView: le,
                },
                A = V.createElement(Rx, ce({}, S, w), function (W) {
                  var se = W.ref,
                    re = W.placerProps,
                    ye = re.placement,
                    ue = re.maxHeight;
                  return V.createElement(
                    f,
                    ce({}, S, w, {
                      innerRef: se,
                      innerProps: {
                        onMouseDown: i.onMenuMouseDown,
                        onMouseMove: i.onMenuMouseMove,
                      },
                      isLoading: R,
                      placement: ye,
                    }),
                    V.createElement(
                      s3,
                      {
                        captureEnabled: P,
                        onTopArrive: xe,
                        onBottomArrive: me,
                        lockEnabled: ee,
                      },
                      function (ge) {
                        return V.createElement(
                          m,
                          ce({}, S, {
                            innerRef: function (Me) {
                              i.getMenuListRef(Me), ge(Me);
                            },
                            innerProps: {
                              role: "listbox",
                              "aria-multiselectable": S.isMulti,
                              id: i.getElementId("listbox"),
                            },
                            isLoading: R,
                            maxHeight: ue,
                            focusedOption: O,
                          }),
                          we,
                        );
                      },
                    ),
                  );
                });
              return Se || pe === "fixed"
                ? V.createElement(
                    b,
                    ce({}, S, {
                      appendTo: Se,
                      controlElement: this.controlRef,
                      menuPlacement: K,
                      menuPosition: pe,
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
                return V.createElement(u3, {
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
                        ? v.map(function (O, C) {
                            return V.createElement("input", {
                              key: "i-".concat(C),
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
                X4,
                ce({}, i, {
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
                ce({}, O, {
                  className: b,
                  innerProps: { id: v, onKeyDown: this.onKeyDown },
                  isDisabled: y,
                  isFocused: S,
                }),
                this.renderLiveRegion(),
                V.createElement(
                  c,
                  ce({}, O, {
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
                    ce({}, O, { isDisabled: y }),
                    this.renderPlaceholderOrValue(),
                    this.renderInput(),
                  ),
                  V.createElement(
                    d,
                    ce({}, O, { isDisabled: y }),
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
                C = i.inputValue,
                P = i.isMulti,
                T = fh(S),
                R = {};
              if (
                d &&
                (S !== d.value ||
                  x !== d.options ||
                  O !== d.menuIsOpen ||
                  C !== d.inputValue)
              ) {
                var L = O ? P3(i, T) : [],
                  j = O ? Oh(Ja(i, T), "".concat(y, "-option")) : [],
                  $ = h ? O3(c, T) : null,
                  N = E3(c, L),
                  K = oc(j, N);
                R = {
                  selectValue: T,
                  focusedOption: N,
                  focusedOptionId: K,
                  focusableOptionsWithIds: j,
                  focusedValue: $,
                  clearFocusValueOnUpdate: !1,
                };
              }
              var pe =
                  f != null && i !== d
                    ? { inputIsHidden: f, inputIsHiddenAfterUpdate: void 0 }
                    : {},
                Se = m,
                ee = b && v;
              return (
                b &&
                  !ee &&
                  ((Se = {
                    value: za(P, T, T[0] || null),
                    options: T,
                    action: "initial-input-focus",
                  }),
                  (ee = !v)),
                (m == null ? void 0 : m.action) === "initial-input-focus" &&
                  (Se = null),
                ie(
                  ie(ie({}, R), pe),
                  {},
                  { prevProps: i, ariaSelection: Se, prevWasFocused: ee },
                )
              );
            },
          },
        ],
      ),
      o
    );
  })(V.Component);
Pg.defaultProps = C3;
var j3 = V.forwardRef(function (n, t) {
    var o = W2(n);
    return V.createElement(Pg, ce({ ref: t }, o));
  }),
  I3 = j3;
function Th({ isDark: n, context: t, isFocused: o = !1, isSelected: a = !1 }) {
  if (t === "control")
    return o ? (n ? "#222222" : "#E8E8E8") : n ? "#383838" : "#F1F1F1";
  if (t === "option")
    return a ? (n ? "#111111" : "#FCFCFC") : n ? "#222222" : "#F1F1F1";
  if (t === "menu" || t === "menuList") return n ? "#222222" : "#F1F1F1";
}
const ac = ({ isDark: n, options: t, selectedOption: o, onChange: a }) =>
    Re.jsx(I3, {
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
  F3 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  R3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: F3 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  M3 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  N3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: M3 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  B3 = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}'`,
  L3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: B3 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  $3 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}'`,
  A3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: $3 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  D3 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}'`,
  z3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: D3 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  H3 = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}'`,
  V3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: H3 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  U3 = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}'`,
  G3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: U3 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  q3 = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_chainId",
  "params": [],
  "id": 1
}'`,
  W3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: q3 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  K3 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_chainId",
  "params": [],
  "id": 1
}'`,
  X3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: K3 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Q3 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_chainId",
  "params": [],
  "id": 1
}'`,
  Y3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Q3 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Z3 = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_chainId",
  "params": [],
  "id": 1
}'`,
  J3 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Z3 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  eS = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_chainId",
  "params": [],
  "id": 1
}'`,
  tS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: eS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  nS = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  rS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: nS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  oS = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  aS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: oS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  iS = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  sS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: iS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  lS = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  cS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: lS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  uS = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  dS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: uS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  fS = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_gasPrice",
  "params": [],
  "id": 1
}'`,
  pS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: fS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  hS = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_gasPrice",
  "params": [],
  "id": 1
}'`,
  mS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: hS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  gS = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_gasPrice",
  "params": [],
  "id": 1
}'`,
  bS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: gS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  vS = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_gasPrice",
  "params": [],
  "id": 1
}'`,
  yS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: vS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  _S = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_gasPrice",
  "params": [],
  "id": 1
}'`,
  xS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: _S },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  SS = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  wS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: SS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  kS = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  CS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: kS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  PS = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  OS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: PS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ES = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  TS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ES },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  jS = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  IS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: jS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  FS = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  RS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: FS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  MS = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  NS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: MS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  BS = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  LS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: BS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  $S = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  AS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: $S },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  DS = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  zS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: DS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  HS = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBlockReceipts",
  "params": [
    "latest"
  ],
  "id": 1
}'`,
  VS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: HS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  US = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBlockReceipts",
  "params": [
    "latest"
  ],
  "id": 1
}'`,
  GS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: US },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  qS = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBlockReceipts",
  "params": [
    "latest"
  ],
  "id": 1
}'`,
  WS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: qS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  KS = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBlockReceipts",
  "params": [
    "latest"
  ],
  "id": 1
}'`,
  XS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: KS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  QS = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getBlockReceipts",
  "params": [
    "latest"
  ],
  "id": 1
}'`,
  YS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: QS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ZS = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  JS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ZS },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  e6 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  t6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: e6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  n6 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  r6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: n6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  o6 = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  a6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: o6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  i6 = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  s6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: i6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  l6 = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionByHash",
  "params": [
    "0x1058fd1f920b95591f7d937b03d6e66c5d88bdf606284c51e42e5c4b7efb2b73"
  ],
  "id": 1
}'`,
  c6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: l6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  u6 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionByHash",
  "params": [
    "0xca5320b77a4321c83865bbd5b59bae521ad26fa42c079c317bec60a6e639b045"
  ],
  "id": 1
}'`,
  d6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: u6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  f6 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionByHash",
  "params": [
    "0xf8b955c1b95e0ce539ded4baf94a54035d36020decb904fce95b33707217d02a"
  ],
  "id": 1
}'`,
  p6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: f6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  h6 = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionByHash",
  "params": [
    "0x4400d8e9c86da035f9a4fc5a2c4a0b7b3b0fc79540c705fe92abd08b10078866"
  ],
  "id": 1
}'`,
  m6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: h6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  g6 = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionByHash",
  "params": [
    "0x9a05c39f9d682f5660ccc0feda8f8d1ff233e67b2bdb5550a9faf0ae50330e4b"
  ],
  "id": 1
}'`,
  b6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: g6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  v6 = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  y6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: v6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  _6 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  x6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: _6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  S6 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  w6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: S6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  k6 = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionCount",
  "params": [
    "0x67A7334BD35b99310f3EDe2111B65B654B76DF43"
  ],
  "id": 1
}'`,
  C6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: k6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  P6 = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionCount",
  "params": [
    "0xE4f575e07D7c9E31BB2900e1B23C3584b4a6fa2d"
  ],
  "id": 1
}'`,
  O6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: P6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  E6 = `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionReceipt",
  "params": [
    "0x1058fd1f920b95591f7d937b03d6e66c5d88bdf606284c51e42e5c4b7efb2b73"
  ],
  "id": 1
}'`,
  T6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: E6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  j6 = `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionReceipt",
  "params": [
    "0xca5320b77a4321c83865bbd5b59bae521ad26fa42c079c317bec60a6e639b045"
  ],
  "id": 1
}'`,
  I6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: j6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  F6 = `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionReceipt",
  "params": [
    "0xf8b955c1b95e0ce539ded4baf94a54035d36020decb904fce95b33707217d02a"
  ],
  "id": 1
}'`,
  R6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: F6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  M6 = `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionReceipt",
  "params": [
    "0x4400d8e9c86da035f9a4fc5a2c4a0b7b3b0fc79540c705fe92abd08b10078866"
  ],
  "id": 1
}'`,
  N6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: M6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  B6 = `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionReceipt",
  "params": [
    "0x9a05c39f9d682f5660ccc0feda8f8d1ff233e67b2bdb5550a9faf0ae50330e4b"
  ],
  "id": 1
}'`,
  L6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: B6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  $6 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "getAccountInfo",
  "params": [
    "5s749uxx2gcdUL9WaDRhLt3Du2KUREhPT1H8QAXrBZzm"
  ],
  "id": 1
}'`,
  A6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: $6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  D6 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "getBalance",
  "params": [
    "5s749uxx2gcdUL9WaDRhLt3Du2KUREhPT1H8QAXrBZzm"
  ],
  "id": 1
}'`,
  z6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: D6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  H6 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "getLatestBlockhash",
  "params": [],
  "id": 1
}'`,
  V6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: H6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  U6 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  G6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: U6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  q6 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "getTokenAccountBalance",
  "params": [
    "4acnoRQj96CkGWHp5uzgF67fRJCUtdFR66ZAHh2mohNB"
  ],
  "id": 1
}'`,
  W6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: q6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  K6 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  X6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: K6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Q6 = `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
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
  Y6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Q6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Z6 = `{
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
  J6 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Z6 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  e8 = `{
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
  t8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: e8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  n8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x14c3bbfa"
}`,
  r8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: n8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  o8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1e3a66b"
}`,
  a8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: o8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  i8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x159fee5"
}`,
  s8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: i8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  l8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x82ee7dd"
}`,
  c8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: l8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  u8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x4582eef"
}`,
  d8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: u8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  f8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xa4b1"
}`,
  p8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: f8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  h8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x2105"
}`,
  m8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: h8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  g8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1"
}`,
  b8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: g8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  v8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xa"
}`,
  y8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: v8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  _8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x89"
}`,
  x8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: _8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  S8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x64a3"
}`,
  w8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: S8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  k8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5208"
}`,
  C8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: k8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  P8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5208"
}`,
  O8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: P8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  E8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5208"
}`,
  T8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: E8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  j8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5208"
}`,
  I8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: j8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  F8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x989680"
}`,
  R8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: F8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  M8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x4c539c"
}`,
  N8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: M8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  B8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5b377580e"
}`,
  L8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: B8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  $8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xf55cd"
}`,
  A8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: $8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  D8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x60db8841a"
}`,
  z8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: D8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  H8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x0"
}`,
  V8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: H8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  U8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x0"
}`,
  G8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: U8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  q8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xcd5"
}`,
  W8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: q8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  K8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x0"
}`,
  X8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: K8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Q8 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x41d6"
}`,
  Y8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Q8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Z8 = `{
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
  J8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Z8 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  e9 = `{
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
  t9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: e9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  n9 = `{
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
  r9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: n9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  o9 = `{
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
  a9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: o9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  i9 = `{
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
  s9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: i9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  l9 = `{
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
  c9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: l9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  u9 = `{
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
  d9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: u9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  f9 = `{
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
  p9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: f9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  h9 = `{
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
  m9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: h9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  g9 = `{
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
  b9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: g9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  v9 = `{
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
  y9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: v9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  _9 = `{
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
  x9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: _9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  S9 = `{
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
  w9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: S9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  k9 = `{
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
  C9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: k9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  P9 = `{
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
  O9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: P9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  E9 = `{
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
  T9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: E9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  j9 = `{
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
  I9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: j9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  F9 = `{
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
  R9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: F9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  M9 = `{
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
  N9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: M9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  B9 = `{
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
  L9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: B9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  $9 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x15c29"
}`,
  A9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: $9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  D9 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5ae51f"
}`,
  z9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: D9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  H9 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x21a"
}`,
  V9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: H9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  U9 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x455ff"
}`,
  G9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: U9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  q9 = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x513"
}`,
  W9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: q9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  K9 = `{
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
  X9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: K9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Q9 = `{
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
  Y9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Q9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Z9 = `{
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
  J9 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Z9 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ew = `{
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
  tw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ew },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  nw = `{
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
  rw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: nw },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ow = `{
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
  aw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ow },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  iw = `{
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
  sw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: iw },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  lw = `{
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
  cw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: lw },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  uw = `{
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
  dw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: uw },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  fw = `{
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
  pw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: fw },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  hw = `{
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
  mw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: hw },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  gw = `{
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
  bw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: gw },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
var Rc = ((n) => (
  (n.CLI = "bash"),
  (n.JavaScript = "javascript"),
  (n.Python = "python"),
  (n.JSON = "json"),
  n
))(Rc || {});
const vw = [
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
const yw = [
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
const _w = [
    "getTokenAccountsByOwner",
    "getTokenAccountBalance",
    "getLatestBlockhash",
    "getSignaturesForAddress",
    "getTransaction",
    "getAccountInfo",
    "getBalance",
  ],
  jh = [
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
  xw = ["alchemy_getAssetTransfers", "alchemy_getTokenBalances"],
  Ih = Object.assign({
    "./code-samples/alchemy_getAssetTransfers/bash/ethereum-mainnet/request":
      R3,
    "./code-samples/alchemy_getTokenBalances/bash/ethereum-mainnet/request": N3,
    "./code-samples/eth_blockNumber/bash/arb-mainnet/request": L3,
    "./code-samples/eth_blockNumber/bash/base-mainnet/request": A3,
    "./code-samples/eth_blockNumber/bash/ethereum-mainnet/request": z3,
    "./code-samples/eth_blockNumber/bash/opt-mainnet/request": V3,
    "./code-samples/eth_blockNumber/bash/polygon-mainnet/request": G3,
    "./code-samples/eth_chainId/bash/arb-mainnet/request": W3,
    "./code-samples/eth_chainId/bash/base-mainnet/request": X3,
    "./code-samples/eth_chainId/bash/ethereum-mainnet/request": Y3,
    "./code-samples/eth_chainId/bash/opt-mainnet/request": J3,
    "./code-samples/eth_chainId/bash/polygon-mainnet/request": tS,
    "./code-samples/eth_estimateGas/bash/arb-mainnet/request": rS,
    "./code-samples/eth_estimateGas/bash/base-mainnet/request": aS,
    "./code-samples/eth_estimateGas/bash/ethereum-mainnet/request": sS,
    "./code-samples/eth_estimateGas/bash/opt-mainnet/request": cS,
    "./code-samples/eth_estimateGas/bash/polygon-mainnet/request": dS,
    "./code-samples/eth_gasPrice/bash/arb-mainnet/request": pS,
    "./code-samples/eth_gasPrice/bash/base-mainnet/request": mS,
    "./code-samples/eth_gasPrice/bash/ethereum-mainnet/request": bS,
    "./code-samples/eth_gasPrice/bash/opt-mainnet/request": yS,
    "./code-samples/eth_gasPrice/bash/polygon-mainnet/request": xS,
    "./code-samples/eth_getBalance/bash/arb-mainnet/request": wS,
    "./code-samples/eth_getBalance/bash/base-mainnet/request": CS,
    "./code-samples/eth_getBalance/bash/ethereum-mainnet/request": OS,
    "./code-samples/eth_getBalance/bash/opt-mainnet/request": TS,
    "./code-samples/eth_getBalance/bash/polygon-mainnet/request": IS,
    "./code-samples/eth_getBlockByNumber/bash/arb-mainnet/request": RS,
    "./code-samples/eth_getBlockByNumber/bash/base-mainnet/request": NS,
    "./code-samples/eth_getBlockByNumber/bash/ethereum-mainnet/request": LS,
    "./code-samples/eth_getBlockByNumber/bash/opt-mainnet/request": AS,
    "./code-samples/eth_getBlockByNumber/bash/polygon-mainnet/request": zS,
    "./code-samples/eth_getBlockReceipts/bash/arb-mainnet/request": VS,
    "./code-samples/eth_getBlockReceipts/bash/base-mainnet/request": GS,
    "./code-samples/eth_getBlockReceipts/bash/ethereum-mainnet/request": WS,
    "./code-samples/eth_getBlockReceipts/bash/opt-mainnet/request": XS,
    "./code-samples/eth_getBlockReceipts/bash/polygon-mainnet/request": YS,
    "./code-samples/eth_getLogs/bash/arb-mainnet/request": JS,
    "./code-samples/eth_getLogs/bash/base-mainnet/request": t6,
    "./code-samples/eth_getLogs/bash/ethereum-mainnet/request": r6,
    "./code-samples/eth_getLogs/bash/opt-mainnet/request": a6,
    "./code-samples/eth_getLogs/bash/polygon-mainnet/request": s6,
    "./code-samples/eth_getTransactionByHash/bash/arb-mainnet/request": c6,
    "./code-samples/eth_getTransactionByHash/bash/base-mainnet/request": d6,
    "./code-samples/eth_getTransactionByHash/bash/ethereum-mainnet/request": p6,
    "./code-samples/eth_getTransactionByHash/bash/opt-mainnet/request": m6,
    "./code-samples/eth_getTransactionByHash/bash/polygon-mainnet/request": b6,
    "./code-samples/eth_getTransactionCount/bash/arb-mainnet/request": y6,
    "./code-samples/eth_getTransactionCount/bash/base-mainnet/request": x6,
    "./code-samples/eth_getTransactionCount/bash/ethereum-mainnet/request": w6,
    "./code-samples/eth_getTransactionCount/bash/opt-mainnet/request": C6,
    "./code-samples/eth_getTransactionCount/bash/polygon-mainnet/request": O6,
    "./code-samples/eth_getTransactionReceipt/bash/arb-mainnet/request": T6,
    "./code-samples/eth_getTransactionReceipt/bash/base-mainnet/request": I6,
    "./code-samples/eth_getTransactionReceipt/bash/ethereum-mainnet/request":
      R6,
    "./code-samples/eth_getTransactionReceipt/bash/opt-mainnet/request": N6,
    "./code-samples/eth_getTransactionReceipt/bash/polygon-mainnet/request": L6,
    "./code-samples/getAccountInfo/bash/solana-mainnet/request": A6,
    "./code-samples/getBalance/bash/solana-mainnet/request": z6,
    "./code-samples/getLatestBlockhash/bash/solana-mainnet/request": V6,
    "./code-samples/getSignaturesForAddress/bash/solana-mainnet/request": G6,
    "./code-samples/getTokenAccountBalance/bash/solana-mainnet/request": W6,
    "./code-samples/getTokenAccountsByOwner/bash/solana-mainnet/request": X6,
    "./code-samples/getTransaction/bash/solana-mainnet/request": Y6,
  }),
  Fh = Object.assign({
    "./code-samples/alchemy_getAssetTransfers/bash/ethereum-mainnet/response":
      J6,
    "./code-samples/alchemy_getTokenBalances/bash/ethereum-mainnet/response":
      t8,
    "./code-samples/eth_blockNumber/bash/arb-mainnet/response": r8,
    "./code-samples/eth_blockNumber/bash/base-mainnet/response": a8,
    "./code-samples/eth_blockNumber/bash/ethereum-mainnet/response": s8,
    "./code-samples/eth_blockNumber/bash/opt-mainnet/response": c8,
    "./code-samples/eth_blockNumber/bash/polygon-mainnet/response": d8,
    "./code-samples/eth_chainId/bash/arb-mainnet/response": p8,
    "./code-samples/eth_chainId/bash/base-mainnet/response": m8,
    "./code-samples/eth_chainId/bash/ethereum-mainnet/response": b8,
    "./code-samples/eth_chainId/bash/opt-mainnet/response": y8,
    "./code-samples/eth_chainId/bash/polygon-mainnet/response": x8,
    "./code-samples/eth_estimateGas/bash/arb-mainnet/response": w8,
    "./code-samples/eth_estimateGas/bash/base-mainnet/response": C8,
    "./code-samples/eth_estimateGas/bash/ethereum-mainnet/response": O8,
    "./code-samples/eth_estimateGas/bash/opt-mainnet/response": T8,
    "./code-samples/eth_estimateGas/bash/polygon-mainnet/response": I8,
    "./code-samples/eth_gasPrice/bash/arb-mainnet/response": R8,
    "./code-samples/eth_gasPrice/bash/base-mainnet/response": N8,
    "./code-samples/eth_gasPrice/bash/ethereum-mainnet/response": L8,
    "./code-samples/eth_gasPrice/bash/opt-mainnet/response": A8,
    "./code-samples/eth_gasPrice/bash/polygon-mainnet/response": z8,
    "./code-samples/eth_getBalance/bash/arb-mainnet/response": V8,
    "./code-samples/eth_getBalance/bash/base-mainnet/response": G8,
    "./code-samples/eth_getBalance/bash/ethereum-mainnet/response": W8,
    "./code-samples/eth_getBalance/bash/opt-mainnet/response": X8,
    "./code-samples/eth_getBalance/bash/polygon-mainnet/response": Y8,
    "./code-samples/eth_getBlockByNumber/bash/arb-mainnet/response": J8,
    "./code-samples/eth_getBlockByNumber/bash/base-mainnet/response": t9,
    "./code-samples/eth_getBlockByNumber/bash/ethereum-mainnet/response": r9,
    "./code-samples/eth_getBlockByNumber/bash/opt-mainnet/response": a9,
    "./code-samples/eth_getBlockByNumber/bash/polygon-mainnet/response": s9,
    "./code-samples/eth_getBlockReceipts/bash/arb-mainnet/response": c9,
    "./code-samples/eth_getBlockReceipts/bash/base-mainnet/response": d9,
    "./code-samples/eth_getBlockReceipts/bash/ethereum-mainnet/response": p9,
    "./code-samples/eth_getBlockReceipts/bash/opt-mainnet/response": m9,
    "./code-samples/eth_getBlockReceipts/bash/polygon-mainnet/response": b9,
    "./code-samples/eth_getLogs/bash/arb-mainnet/response": y9,
    "./code-samples/eth_getLogs/bash/base-mainnet/response": x9,
    "./code-samples/eth_getLogs/bash/ethereum-mainnet/response": w9,
    "./code-samples/eth_getLogs/bash/opt-mainnet/response": C9,
    "./code-samples/eth_getLogs/bash/polygon-mainnet/response": O9,
    "./code-samples/eth_getTransactionByHash/bash/arb-mainnet/response": T9,
    "./code-samples/eth_getTransactionByHash/bash/base-mainnet/response": I9,
    "./code-samples/eth_getTransactionByHash/bash/ethereum-mainnet/response":
      R9,
    "./code-samples/eth_getTransactionByHash/bash/opt-mainnet/response": N9,
    "./code-samples/eth_getTransactionByHash/bash/polygon-mainnet/response": L9,
    "./code-samples/eth_getTransactionCount/bash/arb-mainnet/response": A9,
    "./code-samples/eth_getTransactionCount/bash/base-mainnet/response": z9,
    "./code-samples/eth_getTransactionCount/bash/ethereum-mainnet/response": V9,
    "./code-samples/eth_getTransactionCount/bash/opt-mainnet/response": G9,
    "./code-samples/eth_getTransactionCount/bash/polygon-mainnet/response": W9,
    "./code-samples/eth_getTransactionReceipt/bash/arb-mainnet/response": X9,
    "./code-samples/eth_getTransactionReceipt/bash/base-mainnet/response": Y9,
    "./code-samples/eth_getTransactionReceipt/bash/ethereum-mainnet/response":
      J9,
    "./code-samples/eth_getTransactionReceipt/bash/opt-mainnet/response": tw,
    "./code-samples/eth_getTransactionReceipt/bash/polygon-mainnet/response":
      rw,
    "./code-samples/getAccountInfo/bash/solana-mainnet/response": aw,
    "./code-samples/getBalance/bash/solana-mainnet/response": sw,
    "./code-samples/getLatestBlockhash/bash/solana-mainnet/response": cw,
    "./code-samples/getSignaturesForAddress/bash/solana-mainnet/response": dw,
    "./code-samples/getTokenAccountBalance/bash/solana-mainnet/response": pw,
    "./code-samples/getTokenAccountsByOwner/bash/solana-mainnet/response": mw,
    "./code-samples/getTransaction/bash/solana-mainnet/response": bw,
  });
function Sw() {
  const n = {};
  function t(o) {
    const a = o.replace("./code-samples/", "").split("/"),
      [i, c, d] = a;
    return { apiKey: i, langKey: c, chainKey: d };
  }
  for (const o in Ih) {
    const { apiKey: a, langKey: i, chainKey: c } = t(o);
    n[a] || (n[a] = {}),
      n[a][i] || (n[a][i] = {}),
      n[a][i][c] || (n[a][i][c] = { request: "", response: "" }),
      (n[a][i][c].request = Ih[o].default);
  }
  for (const o in Fh) {
    const { apiKey: a, langKey: i, chainKey: c } = t(o);
    n[a] || (n[a] = {}),
      n[a][i] || (n[a][i] = {}),
      n[a][i][c] || (n[a][i][c] = { request: "", response: "" }),
      (n[a][i][c].response = Fh[o].default);
  }
  return n;
}
const Ha = Sw(),
  ww = S0.div`
  background-color: ${({ theme: n }) => (n.mode === "dark" ? "#121212" : "#FAFAFA")};
  border-radius: 24px;
  border: ${({ theme: n }) => (n.mode === "dark" ? "1px solid #383838" : "1px solid #EAEAEA")};
`,
  kw = S0.div`
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
  Cw = S0.button`
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
  Pw = S0.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  height: 300px;
  width: 100%;
`,
  Ow = S0.div`
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
  Ew = S0.div`
  background-color: ${({ theme: n }) => (n.mode === "dark" ? "#131313" : "#fbfbfb")};
  border-radius: 0 0 24px 24px;
  padding: 24px 32px;
  color: ${({ theme: n }) => (n.mode === "dark" ? "#EDEDED" : "#111111")};
  display: flex;
  justify-content: space-between;
`,
  Tw = (n) =>
    n === go.solanaMainnet
      ? _w.map((o) => ({ value: o, label: o }))
      : (n === go.ethereumMainnet ? [...xw, ...jh] : jh).map((o) => ({
          value: o,
          label: o,
        })),
  jw = () => {
    var K, pe, Se;
    const [n, t] = Ue.useState(
      document.documentElement.classList.contains("dark"),
    );
    Ue.useEffect(() => {
      const ee = new MutationObserver((le) => {
        le.forEach((ve) => {
          ve.target === document.documentElement &&
            ve.attributeName === "class" &&
            t(document.documentElement.classList.contains("dark"));
        });
      });
      return (
        ee.observe(document.documentElement, {
          attributes: !0,
          attributeFilter: ["class"],
        }),
        () => ee.disconnect()
      );
    }, []);
    const o = { mode: n ? "dark" : "light" },
      [a, i] = Ue.useState(Rc.CLI),
      [c, d] = Ue.useState(go.ethereumMainnet),
      [h, f] = Ue.useState(ei.eth_getBlockByNumber),
      [m, b] = Ue.useState(a),
      [v, y] = Ue.useState(!1),
      x = () => {
        var ee, le, ve;
        i(Rc.JSON),
          T(),
          O(
            ((ve =
              (le = (ee = Ha[h]) == null ? void 0 : ee[a]) == null
                ? void 0
                : le[c]) == null
              ? void 0
              : ve.response) ?? "",
          ),
          y(!0);
      },
      [S, O] = Ue.useState(
        ((Se =
          (pe = (K = Ha[h]) == null ? void 0 : K[a]) == null
            ? void 0
            : pe[c]) == null
          ? void 0
          : Se.request) ?? "Something went wrong",
      ),
      [C, P] = Ue.useState(!1),
      T = () => {
        P(!0),
          setTimeout(
            () => {
              P(!1);
            },
            Math.floor(Math.random() * 300) + 100,
          );
      },
      R = (ee, le, ve = m) => {
        var xe, me, he;
        i(ve),
          d(ee),
          f(le),
          O(
            ((he =
              (me = (xe = Ha[le]) == null ? void 0 : xe[ve]) == null
                ? void 0
                : me[ee]) == null
              ? void 0
              : he.request) ?? "Something went wrong",
          ),
          y(!1);
      },
      [L, j] = Ue.useState(""),
      [$, N] = Ue.useState(null);
    return (
      Ue.useEffect(
        () => (
          (async () => {
            const le = await P_({
              langs: [
                Ia(() => Promise.resolve().then(() => Rw), void 0),
                Ia(() => Promise.resolve().then(() => Bw), void 0),
              ],
              themes: [
                Ia(() => Promise.resolve().then(() => $w), void 0),
                Ia(() => Promise.resolve().then(() => Dw), void 0),
              ],
              engine: L_(),
            });
            N(le);
          })(),
          () => {
            $ == null || $.dispose();
          }
        ),
        [],
      ),
      Ue.useEffect(() => {
        (async () => {
          if ($)
            try {
              const le = await $.codeToHtml(S, {
                lang: a,
                themes: {
                  light: "github-light",
                  dark: "material-theme-darker",
                },
              });
              j(le);
            } catch (le) {
              console.error("Error generating code HTML:", le),
                j(`<pre><code>${S}</code></pre>`);
            }
        })();
      }, [S, a, n, $]),
      Re.jsxs($2, {
        theme: o,
        children: [
          Re.jsx("h3", {
            className: "mb-6",
            children: "Query the blockchain instantly",
          }),
          Re.jsxs(ww, {
            children: [
              Re.jsxs("div", {
                style: { padding: "24px 24px 0px" },
                children: [
                  Re.jsxs("div", {
                    style: { display: "flex", justifyContent: "space-between" },
                    children: [
                      Re.jsxs("div", {
                        style: {
                          display: "flex",
                          gap: "8px",
                          alignItems: "center",
                          flexWrap: "wrap",
                          marginRight: "8px",
                        },
                        children: [
                          Re.jsx("span", {
                            style: {
                              color: n ? "#EDEDED" : "#94A3B8",
                              minWidth: "9ch",
                              display: "inline-block",
                            },
                            children: v ? "Response" : "Request",
                          }),
                          Re.jsx(ac, {
                            isDark: n,
                            options: vw.filter((ee) => {
                              var ve, xe;
                              const le =
                                (xe =
                                  (ve = Ha[h]) == null
                                    ? void 0
                                    : ve[ee.value]) == null
                                  ? void 0
                                  : xe[c];
                              return le && le.request && le.response;
                            }),
                            selectedOption: m,
                            onChange: (ee) => {
                              b(ee), R(c, h, ee);
                            },
                          }),
                          Re.jsx(ac, {
                            isDark: n,
                            options: yw,
                            selectedOption: c,
                            onChange: (ee) => {
                              ee === go.solanaMainnet && ee !== c
                                ? R(ee, ei.getTokenAccountsByOwner)
                                : ee !== c && R(ee, ei.eth_getBlockByNumber);
                            },
                          }),
                          Re.jsx(ac, {
                            isDark: n,
                            options: Tw(c),
                            selectedOption: h,
                            onChange: (ee) => {
                              R(c, ee);
                            },
                          }),
                        ],
                      }),
                      Re.jsxs(Cw, {
                        onMouseOver: (ee) => {
                          ee.currentTarget.style.backgroundColor = "#4b5563";
                        },
                        onMouseOut: (ee) => {
                          ee.currentTarget.style.backgroundColor = n
                            ? "#1C1C1C"
                            : "#383838";
                        },
                        onClick: x,
                        disabled: v,
                        children: [
                          "RUN",
                          " ",
                          Re.jsx("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 12 12",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: Re.jsx("path", {
                              d: "M9.07199 5.43326C9.77475 5.83939 9.77732 6.35029 9.07199 6.80944L3.62211 10.6211C2.93734 11.0001 2.47226 10.7763 2.42344 9.95629L2.40032 1.97858C2.3849 1.22324 2.98487 1.00982 3.55659 1.37198L9.07199 5.43326Z",
                              stroke: "#EDEDED",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  C
                    ? Re.jsx(Pw, { children: Re.jsx(Ow, {}) })
                    : Re.jsx(kw, { dangerouslySetInnerHTML: { __html: L } }),
                ],
              }),
              Re.jsxs(Ew, {
                children: [
                  Re.jsxs("div", {
                    style: { color: n ? "#EDEDED" : "#111111" },
                    children: [
                      Re.jsx("p", {
                        style: {
                          fontWeight: 600,
                          fontSize: "20px",
                          marginBottom: "8px",
                        },
                        children: "Quickstart",
                      }),
                      Re.jsx("span", {
                        style: { fontSize: "14px" },
                        children: "Guides for 500+ endpoints on 80+ networks",
                      }),
                    ],
                  }),
                  Re.jsx("div", {
                    style: { display: "flex", alignSelf: "end" },
                    children: Re.jsx("span", {
                      children: Re.jsxs("a", {
                        href: "https://www.alchemy.com/docs/alchemy-quickstart-guide",
                        style: {
                          color: n ? "#EDEDED" : "#383838",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                        },
                        onMouseOver: (ee) =>
                          (ee.currentTarget.style.color =
                            "rgba(81, 103, 255, 1)"),
                        onMouseOut: (ee) =>
                          (ee.currentTarget.style.color = n
                            ? "#EDEDED"
                            : "#383838"),
                        children: [
                          "Get started ",
                          Re.jsx("svg", {
                            style: { marginLeft: "4px" },
                            width: "8",
                            height: "9",
                            viewBox: "0 0 8 9",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: Re.jsx("path", {
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
  Mc = "code-block-id",
  Rh = async () => {
    var o;
    let n = document.getElementById(Mc);
    if (
      (n ||
        ((n = document.createElement("div")),
        n.setAttribute("id", Mc),
        document.body.appendChild(n)),
      n.hasChildNodes())
    )
      return;
    Lb.createRoot(n).render(
      Re.jsx(Ue.StrictMode, { children: Re.jsx(jw, {}) }),
    ),
      (n.style.display = "block"),
      (o = document.getElementById("builtwithfern")) == null || o.remove();
  },
  Og = async () => {
    window.location.pathname.replace(/\/+$/, "") === "/docs" && (await Rh()),
      new MutationObserver(async (o) => {
        if (!(window.location.pathname.replace(/\/+$/, "") === "/docs")) return;
        o.some((d) => {
          var m;
          const h = d.type === "childList",
            f = !(
              (m = document.getElementById(Mc)) != null && m.hasChildNodes()
            );
          return h && f;
        }) && (await Rh());
      }).observe(document.body, { childList: !0, subtree: !0 });
  };
Og();
window.addEventListener("popstate", Og);
const Iw = Object.freeze({
    displayName: "Shell",
    name: "shellscript",
    patterns: [{ include: "#initial_context" }],
    repository: {
      alias_statement: {
        begin: new Te(
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
        begin: new Te(
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
            match: new Te(
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
        begin: new Te(
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
        begin: new Te("(?:(?=(\\p{space}*))\\1)(/\\*)", "dgv", {
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
        begin: new Te(
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
            match: new Te("(?:(?=([\\t ]*))\\1)(\\* *\\))", "dgv", {
              hiddenCaptures: [1],
            }),
          },
          {
            begin: new Te(
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
            match: new Te(
              `(?<![\\p{L}\\p{M}\\p{N}\\p{Pc}])(?<=^|["'\\)\\}])([^\\t\\n\\r "\\&'\\)\\;-\\>\\\`\\{\\|]+)`,
              "dgv",
              { strategy: "clip_search" },
            ),
          },
          {
            begin: new Te(
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
            end: new Te("(?<!^)(?<=\\2)()()", "dgv", {
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
        begin: new Te(
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
        match: new Te(
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
            begin: new Te(
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
        begin: new Te(
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
            begin: new Te(
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
            begin: new Te(
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
            begin: new Te(
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
            begin: new Te(
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
        match: new Te(
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
                end: new Te("(?!^)", "dgv", { strategy: "clip_search" }),
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
        begin: new Te("(?:(?=(\\p{space}*))\\1)(//)", "dgv", {
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
        begin: new Te(
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
        begin: new Te(
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
        begin: new Te(
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
        match: new Te(
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
                match: new Te(
                  "(?:(?=([\\t ]+))\\1)(-)([\\p{L}\\p{M}\\p{N}\\p{Pc}]+)",
                  "dgv",
                  { hiddenCaptures: [1] },
                ),
              },
            ],
          },
        },
        match: new Te(
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
        match: new Te(
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
            begin: new Te("(\\$)(\\{)(?:(?=([\\t ]*))\\3)(?=\\p{Nd})", "dgv", {
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
  Fw = [Iw],
  Rw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Fw },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Mw = Object.freeze({
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
  Nw = [Mw],
  Bw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Nw },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Lw = Object.freeze(
    JSON.parse(
      '{"colors":{"activityBar.activeBorder":"#f9826c","activityBar.background":"#fff","activityBar.border":"#e1e4e8","activityBar.foreground":"#2f363d","activityBar.inactiveForeground":"#959da5","activityBarBadge.background":"#2188ff","activityBarBadge.foreground":"#fff","badge.background":"#dbedff","badge.foreground":"#005cc5","breadcrumb.activeSelectionForeground":"#586069","breadcrumb.focusForeground":"#2f363d","breadcrumb.foreground":"#6a737d","breadcrumbPicker.background":"#fafbfc","button.background":"#159739","button.foreground":"#fff","button.hoverBackground":"#138934","button.secondaryBackground":"#e1e4e8","button.secondaryForeground":"#1b1f23","button.secondaryHoverBackground":"#d1d5da","checkbox.background":"#fafbfc","checkbox.border":"#d1d5da","debugToolBar.background":"#fff","descriptionForeground":"#6a737d","diffEditor.insertedTextBackground":"#34d05822","diffEditor.removedTextBackground":"#d73a4922","dropdown.background":"#fafbfc","dropdown.border":"#e1e4e8","dropdown.foreground":"#2f363d","dropdown.listBackground":"#fff","editor.background":"#fff","editor.findMatchBackground":"#ffdf5d","editor.findMatchHighlightBackground":"#ffdf5d66","editor.focusedStackFrameHighlightBackground":"#28a74525","editor.foldBackground":"#d1d5da11","editor.foreground":"#24292e","editor.inactiveSelectionBackground":"#0366d611","editor.lineHighlightBackground":"#f6f8fa","editor.linkedEditingBackground":"#0366d611","editor.selectionBackground":"#0366d625","editor.selectionHighlightBackground":"#34d05840","editor.selectionHighlightBorder":"#34d05800","editor.stackFrameHighlightBackground":"#ffd33d33","editor.wordHighlightBackground":"#34d05800","editor.wordHighlightBorder":"#24943e99","editor.wordHighlightStrongBackground":"#34d05800","editor.wordHighlightStrongBorder":"#24943e50","editorBracketHighlight.foreground1":"#005cc5","editorBracketHighlight.foreground2":"#e36209","editorBracketHighlight.foreground3":"#5a32a3","editorBracketHighlight.foreground4":"#005cc5","editorBracketHighlight.foreground5":"#e36209","editorBracketHighlight.foreground6":"#5a32a3","editorBracketMatch.background":"#34d05840","editorBracketMatch.border":"#34d05800","editorCursor.foreground":"#044289","editorError.foreground":"#cb2431","editorGroup.border":"#e1e4e8","editorGroupHeader.tabsBackground":"#f6f8fa","editorGroupHeader.tabsBorder":"#e1e4e8","editorGutter.addedBackground":"#28a745","editorGutter.deletedBackground":"#d73a49","editorGutter.modifiedBackground":"#2188ff","editorIndentGuide.activeBackground":"#d7dbe0","editorIndentGuide.background":"#eff2f6","editorLineNumber.activeForeground":"#24292e","editorLineNumber.foreground":"#1b1f234d","editorOverviewRuler.border":"#fff","editorWarning.foreground":"#f9c513","editorWhitespace.foreground":"#d1d5da","editorWidget.background":"#f6f8fa","errorForeground":"#cb2431","focusBorder":"#2188ff","foreground":"#444d56","gitDecoration.addedResourceForeground":"#28a745","gitDecoration.conflictingResourceForeground":"#e36209","gitDecoration.deletedResourceForeground":"#d73a49","gitDecoration.ignoredResourceForeground":"#959da5","gitDecoration.modifiedResourceForeground":"#005cc5","gitDecoration.submoduleResourceForeground":"#959da5","gitDecoration.untrackedResourceForeground":"#28a745","input.background":"#fafbfc","input.border":"#e1e4e8","input.foreground":"#2f363d","input.placeholderForeground":"#959da5","list.activeSelectionBackground":"#e2e5e9","list.activeSelectionForeground":"#2f363d","list.focusBackground":"#cce5ff","list.hoverBackground":"#ebf0f4","list.hoverForeground":"#2f363d","list.inactiveFocusBackground":"#dbedff","list.inactiveSelectionBackground":"#e8eaed","list.inactiveSelectionForeground":"#2f363d","notificationCenterHeader.background":"#e1e4e8","notificationCenterHeader.foreground":"#6a737d","notifications.background":"#fafbfc","notifications.border":"#e1e4e8","notifications.foreground":"#2f363d","notificationsErrorIcon.foreground":"#d73a49","notificationsInfoIcon.foreground":"#005cc5","notificationsWarningIcon.foreground":"#e36209","panel.background":"#f6f8fa","panel.border":"#e1e4e8","panelInput.border":"#e1e4e8","panelTitle.activeBorder":"#f9826c","panelTitle.activeForeground":"#2f363d","panelTitle.inactiveForeground":"#6a737d","pickerGroup.border":"#e1e4e8","pickerGroup.foreground":"#2f363d","progressBar.background":"#2188ff","quickInput.background":"#fafbfc","quickInput.foreground":"#2f363d","scrollbar.shadow":"#6a737d33","scrollbarSlider.activeBackground":"#959da588","scrollbarSlider.background":"#959da533","scrollbarSlider.hoverBackground":"#959da544","settings.headerForeground":"#2f363d","settings.modifiedItemIndicator":"#2188ff","sideBar.background":"#f6f8fa","sideBar.border":"#e1e4e8","sideBar.foreground":"#586069","sideBarSectionHeader.background":"#f6f8fa","sideBarSectionHeader.border":"#e1e4e8","sideBarSectionHeader.foreground":"#2f363d","sideBarTitle.foreground":"#2f363d","statusBar.background":"#fff","statusBar.border":"#e1e4e8","statusBar.debuggingBackground":"#f9826c","statusBar.debuggingForeground":"#fff","statusBar.foreground":"#586069","statusBar.noFolderBackground":"#fff","statusBarItem.prominentBackground":"#e8eaed","statusBarItem.remoteBackground":"#fff","statusBarItem.remoteForeground":"#586069","tab.activeBackground":"#fff","tab.activeBorder":"#fff","tab.activeBorderTop":"#f9826c","tab.activeForeground":"#2f363d","tab.border":"#e1e4e8","tab.hoverBackground":"#fff","tab.inactiveBackground":"#f6f8fa","tab.inactiveForeground":"#6a737d","tab.unfocusedActiveBorder":"#fff","tab.unfocusedActiveBorderTop":"#e1e4e8","tab.unfocusedHoverBackground":"#fff","terminal.ansiBlack":"#24292e","terminal.ansiBlue":"#0366d6","terminal.ansiBrightBlack":"#959da5","terminal.ansiBrightBlue":"#005cc5","terminal.ansiBrightCyan":"#3192aa","terminal.ansiBrightGreen":"#22863a","terminal.ansiBrightMagenta":"#5a32a3","terminal.ansiBrightRed":"#cb2431","terminal.ansiBrightWhite":"#d1d5da","terminal.ansiBrightYellow":"#b08800","terminal.ansiCyan":"#1b7c83","terminal.ansiGreen":"#28a745","terminal.ansiMagenta":"#5a32a3","terminal.ansiRed":"#d73a49","terminal.ansiWhite":"#6a737d","terminal.ansiYellow":"#dbab09","terminal.foreground":"#586069","terminal.tab.activeBorder":"#f9826c","terminalCursor.background":"#d1d5da","terminalCursor.foreground":"#005cc5","textBlockQuote.background":"#fafbfc","textBlockQuote.border":"#e1e4e8","textCodeBlock.background":"#f6f8fa","textLink.activeForeground":"#005cc5","textLink.foreground":"#0366d6","textPreformat.foreground":"#586069","textSeparator.foreground":"#d1d5da","titleBar.activeBackground":"#fff","titleBar.activeForeground":"#2f363d","titleBar.border":"#e1e4e8","titleBar.inactiveBackground":"#f6f8fa","titleBar.inactiveForeground":"#6a737d","tree.indentGuidesStroke":"#e1e4e8","welcomePage.buttonBackground":"#f6f8fa","welcomePage.buttonHoverBackground":"#e1e4e8"},"displayName":"GitHub Light","name":"github-light","semanticHighlighting":true,"tokenColors":[{"scope":["comment","punctuation.definition.comment","string.comment"],"settings":{"foreground":"#6a737d"}},{"scope":["constant","entity.name.constant","variable.other.constant","variable.other.enummember","variable.language"],"settings":{"foreground":"#005cc5"}},{"scope":["entity","entity.name"],"settings":{"foreground":"#6f42c1"}},{"scope":"variable.parameter.function","settings":{"foreground":"#24292e"}},{"scope":"entity.name.tag","settings":{"foreground":"#22863a"}},{"scope":"keyword","settings":{"foreground":"#d73a49"}},{"scope":["storage","storage.type"],"settings":{"foreground":"#d73a49"}},{"scope":["storage.modifier.package","storage.modifier.import","storage.type.java"],"settings":{"foreground":"#24292e"}},{"scope":["string","punctuation.definition.string","string punctuation.section.embedded source"],"settings":{"foreground":"#032f62"}},{"scope":"support","settings":{"foreground":"#005cc5"}},{"scope":"meta.property-name","settings":{"foreground":"#005cc5"}},{"scope":"variable","settings":{"foreground":"#e36209"}},{"scope":"variable.other","settings":{"foreground":"#24292e"}},{"scope":"invalid.broken","settings":{"fontStyle":"italic","foreground":"#b31d28"}},{"scope":"invalid.deprecated","settings":{"fontStyle":"italic","foreground":"#b31d28"}},{"scope":"invalid.illegal","settings":{"fontStyle":"italic","foreground":"#b31d28"}},{"scope":"invalid.unimplemented","settings":{"fontStyle":"italic","foreground":"#b31d28"}},{"scope":"carriage-return","settings":{"background":"#d73a49","content":"^M","fontStyle":"italic underline","foreground":"#fafbfc"}},{"scope":"message.error","settings":{"foreground":"#b31d28"}},{"scope":"string variable","settings":{"foreground":"#005cc5"}},{"scope":["source.regexp","string.regexp"],"settings":{"foreground":"#032f62"}},{"scope":["string.regexp.character-class","string.regexp constant.character.escape","string.regexp source.ruby.embedded","string.regexp string.regexp.arbitrary-repitition"],"settings":{"foreground":"#032f62"}},{"scope":"string.regexp constant.character.escape","settings":{"fontStyle":"bold","foreground":"#22863a"}},{"scope":"support.constant","settings":{"foreground":"#005cc5"}},{"scope":"support.variable","settings":{"foreground":"#005cc5"}},{"scope":"meta.module-reference","settings":{"foreground":"#005cc5"}},{"scope":"punctuation.definition.list.begin.markdown","settings":{"foreground":"#e36209"}},{"scope":["markup.heading","markup.heading entity.name"],"settings":{"fontStyle":"bold","foreground":"#005cc5"}},{"scope":"markup.quote","settings":{"foreground":"#22863a"}},{"scope":"markup.italic","settings":{"fontStyle":"italic","foreground":"#24292e"}},{"scope":"markup.bold","settings":{"fontStyle":"bold","foreground":"#24292e"}},{"scope":["markup.underline"],"settings":{"fontStyle":"underline"}},{"scope":["markup.strikethrough"],"settings":{"fontStyle":"strikethrough"}},{"scope":"markup.inline.raw","settings":{"foreground":"#005cc5"}},{"scope":["markup.deleted","meta.diff.header.from-file","punctuation.definition.deleted"],"settings":{"background":"#ffeef0","foreground":"#b31d28"}},{"scope":["markup.inserted","meta.diff.header.to-file","punctuation.definition.inserted"],"settings":{"background":"#f0fff4","foreground":"#22863a"}},{"scope":["markup.changed","punctuation.definition.changed"],"settings":{"background":"#ffebda","foreground":"#e36209"}},{"scope":["markup.ignored","markup.untracked"],"settings":{"background":"#005cc5","foreground":"#f6f8fa"}},{"scope":"meta.diff.range","settings":{"fontStyle":"bold","foreground":"#6f42c1"}},{"scope":"meta.diff.header","settings":{"foreground":"#005cc5"}},{"scope":"meta.separator","settings":{"fontStyle":"bold","foreground":"#005cc5"}},{"scope":"meta.output","settings":{"foreground":"#005cc5"}},{"scope":["brackethighlighter.tag","brackethighlighter.curly","brackethighlighter.round","brackethighlighter.square","brackethighlighter.angle","brackethighlighter.quote"],"settings":{"foreground":"#586069"}},{"scope":"brackethighlighter.unmatched","settings":{"foreground":"#b31d28"}},{"scope":["constant.other.reference.link","string.other.link"],"settings":{"fontStyle":"underline","foreground":"#032f62"}}],"type":"light"}',
    ),
  ),
  $w = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Lw },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Aw = Object.freeze(
    JSON.parse(
      '{"colors":{"activityBar.activeBorder":"#80CBC4","activityBar.background":"#212121","activityBar.border":"#21212160","activityBar.dropBackground":"#f0717880","activityBar.foreground":"#EEFFFF","activityBarBadge.background":"#80CBC4","activityBarBadge.foreground":"#000000","badge.background":"#00000030","badge.foreground":"#545454","breadcrumb.activeSelectionForeground":"#80CBC4","breadcrumb.background":"#212121","breadcrumb.focusForeground":"#EEFFFF","breadcrumb.foreground":"#676767","breadcrumbPicker.background":"#212121","button.background":"#61616150","button.foreground":"#ffffff","debugConsole.errorForeground":"#f07178","debugConsole.infoForeground":"#89DDFF","debugConsole.warningForeground":"#FFCB6B","debugToolBar.background":"#212121","diffEditor.insertedTextBackground":"#89DDFF20","diffEditor.removedTextBackground":"#ff9cac20","dropdown.background":"#212121","dropdown.border":"#FFFFFF10","editor.background":"#212121","editor.findMatchBackground":"#000000","editor.findMatchBorder":"#80CBC4","editor.findMatchHighlight":"#EEFFFF","editor.findMatchHighlightBackground":"#00000050","editor.findMatchHighlightBorder":"#ffffff30","editor.findRangeHighlightBackground":"#FFCB6B30","editor.foreground":"#EEFFFF","editor.lineHighlightBackground":"#00000050","editor.lineHighlightBorder":"#00000000","editor.rangeHighlightBackground":"#FFFFFF0d","editor.selectionBackground":"#61616150","editor.selectionHighlightBackground":"#FFCC0020","editor.wordHighlightBackground":"#ff9cac30","editor.wordHighlightStrongBackground":"#C3E88D30","editorBracketMatch.background":"#212121","editorBracketMatch.border":"#FFCC0050","editorCursor.foreground":"#FFCC00","editorError.foreground":"#f0717870","editorGroup.border":"#00000030","editorGroup.dropBackground":"#f0717880","editorGroup.focusedEmptyBorder":"#f07178","editorGroupHeader.tabsBackground":"#212121","editorGutter.addedBackground":"#C3E88D60","editorGutter.deletedBackground":"#f0717860","editorGutter.modifiedBackground":"#82AAFF60","editorHoverWidget.background":"#212121","editorHoverWidget.border":"#FFFFFF10","editorIndentGuide.activeBackground":"#424242","editorIndentGuide.background":"#42424270","editorInfo.foreground":"#82AAFF70","editorLineNumber.activeForeground":"#676767","editorLineNumber.foreground":"#424242","editorLink.activeForeground":"#EEFFFF","editorMarkerNavigation.background":"#EEFFFF05","editorOverviewRuler.border":"#212121","editorOverviewRuler.errorForeground":"#f0717840","editorOverviewRuler.findMatchForeground":"#80CBC4","editorOverviewRuler.infoForeground":"#82AAFF40","editorOverviewRuler.warningForeground":"#FFCB6B40","editorRuler.foreground":"#424242","editorSuggestWidget.background":"#212121","editorSuggestWidget.border":"#FFFFFF10","editorSuggestWidget.foreground":"#EEFFFF","editorSuggestWidget.highlightForeground":"#80CBC4","editorSuggestWidget.selectedBackground":"#00000050","editorWarning.foreground":"#FFCB6B70","editorWhitespace.foreground":"#EEFFFF40","editorWidget.background":"#212121","editorWidget.border":"#80CBC4","editorWidget.resizeBorder":"#80CBC4","extensionBadge.remoteForeground":"#EEFFFF","extensionButton.prominentBackground":"#C3E88D90","extensionButton.prominentForeground":"#EEFFFF","extensionButton.prominentHoverBackground":"#C3E88D","focusBorder":"#FFFFFF00","foreground":"#EEFFFF","gitDecoration.conflictingResourceForeground":"#FFCB6B90","gitDecoration.deletedResourceForeground":"#f0717890","gitDecoration.ignoredResourceForeground":"#67676790","gitDecoration.modifiedResourceForeground":"#82AAFF90","gitDecoration.untrackedResourceForeground":"#C3E88D90","input.background":"#2B2B2B","input.border":"#FFFFFF10","input.foreground":"#EEFFFF","input.placeholderForeground":"#EEFFFF60","inputOption.activeBackground":"#EEFFFF30","inputOption.activeBorder":"#EEFFFF30","inputValidation.errorBorder":"#f07178","inputValidation.infoBorder":"#82AAFF","inputValidation.warningBorder":"#FFCB6B","list.activeSelectionBackground":"#212121","list.activeSelectionForeground":"#80CBC4","list.dropBackground":"#f0717880","list.focusBackground":"#EEFFFF20","list.focusForeground":"#EEFFFF","list.highlightForeground":"#80CBC4","list.hoverBackground":"#212121","list.hoverForeground":"#FFFFFF","list.inactiveSelectionBackground":"#00000030","list.inactiveSelectionForeground":"#80CBC4","listFilterWidget.background":"#00000030","listFilterWidget.noMatchesOutline":"#00000030","listFilterWidget.outline":"#00000030","menu.background":"#212121","menu.foreground":"#EEFFFF","menu.selectionBackground":"#00000050","menu.selectionBorder":"#00000030","menu.selectionForeground":"#80CBC4","menu.separatorBackground":"#EEFFFF","menubar.selectionBackground":"#00000030","menubar.selectionBorder":"#00000030","menubar.selectionForeground":"#80CBC4","notebook.focusedCellBorder":"#80CBC4","notebook.inactiveFocusedCellBorder":"#80CBC450","notificationLink.foreground":"#80CBC4","notifications.background":"#212121","notifications.foreground":"#EEFFFF","panel.background":"#212121","panel.border":"#21212160","panel.dropBackground":"#EEFFFF","panelTitle.activeBorder":"#80CBC4","panelTitle.activeForeground":"#FFFFFF","panelTitle.inactiveForeground":"#EEFFFF","peekView.border":"#00000030","peekViewEditor.background":"#2B2B2B","peekViewEditor.matchHighlightBackground":"#61616150","peekViewEditorGutter.background":"#2B2B2B","peekViewResult.background":"#2B2B2B","peekViewResult.matchHighlightBackground":"#61616150","peekViewResult.selectionBackground":"#67676770","peekViewTitle.background":"#2B2B2B","peekViewTitleDescription.foreground":"#EEFFFF60","pickerGroup.border":"#FFFFFF1a","pickerGroup.foreground":"#80CBC4","progressBar.background":"#80CBC4","quickInput.background":"#212121","quickInput.foreground":"#676767","quickInput.list.focusBackground":"#EEFFFF20","sash.hoverBorder":"#80CBC450","scrollbar.shadow":"#00000030","scrollbarSlider.activeBackground":"#80CBC4","scrollbarSlider.background":"#EEFFFF20","scrollbarSlider.hoverBackground":"#EEFFFF10","selection.background":"#00000080","settings.checkboxBackground":"#212121","settings.checkboxForeground":"#EEFFFF","settings.dropdownBackground":"#212121","settings.dropdownForeground":"#EEFFFF","settings.headerForeground":"#80CBC4","settings.modifiedItemIndicator":"#80CBC4","settings.numberInputBackground":"#212121","settings.numberInputForeground":"#EEFFFF","settings.textInputBackground":"#212121","settings.textInputForeground":"#EEFFFF","sideBar.background":"#212121","sideBar.border":"#21212160","sideBar.foreground":"#676767","sideBarSectionHeader.background":"#212121","sideBarSectionHeader.border":"#21212160","sideBarTitle.foreground":"#EEFFFF","statusBar.background":"#212121","statusBar.border":"#21212160","statusBar.debuggingBackground":"#C792EA","statusBar.debuggingForeground":"#ffffff","statusBar.foreground":"#616161","statusBar.noFolderBackground":"#212121","statusBarItem.activeBackground":"#f0717880","statusBarItem.hoverBackground":"#54545420","statusBarItem.remoteBackground":"#80CBC4","statusBarItem.remoteForeground":"#000000","tab.activeBackground":"#212121","tab.activeBorder":"#80CBC4","tab.activeForeground":"#FFFFFF","tab.activeModifiedBorder":"#676767","tab.border":"#212121","tab.inactiveBackground":"#212121","tab.inactiveForeground":"#676767","tab.inactiveModifiedBorder":"#904348","tab.unfocusedActiveBorder":"#545454","tab.unfocusedActiveForeground":"#EEFFFF","tab.unfocusedActiveModifiedBorder":"#c05a60","tab.unfocusedInactiveModifiedBorder":"#904348","terminal.ansiBlack":"#000000","terminal.ansiBlue":"#82AAFF","terminal.ansiBrightBlack":"#545454","terminal.ansiBrightBlue":"#82AAFF","terminal.ansiBrightCyan":"#89DDFF","terminal.ansiBrightGreen":"#C3E88D","terminal.ansiBrightMagenta":"#C792EA","terminal.ansiBrightRed":"#f07178","terminal.ansiBrightWhite":"#ffffff","terminal.ansiBrightYellow":"#FFCB6B","terminal.ansiCyan":"#89DDFF","terminal.ansiGreen":"#C3E88D","terminal.ansiMagenta":"#C792EA","terminal.ansiRed":"#f07178","terminal.ansiWhite":"#ffffff","terminal.ansiYellow":"#FFCB6B","terminalCursor.background":"#000000","terminalCursor.foreground":"#FFCB6B","textLink.activeForeground":"#EEFFFF","textLink.foreground":"#80CBC4","titleBar.activeBackground":"#212121","titleBar.activeForeground":"#EEFFFF","titleBar.border":"#21212160","titleBar.inactiveBackground":"#212121","titleBar.inactiveForeground":"#676767","tree.indentGuidesStroke":"#424242","widget.shadow":"#00000030"},"displayName":"Material Theme Darker","name":"material-theme-darker","semanticHighlighting":true,"tokenColors":[{"settings":{"background":"#212121","foreground":"#EEFFFF"}},{"scope":"string","settings":{"foreground":"#C3E88D"}},{"scope":"punctuation, constant.other.symbol","settings":{"foreground":"#89DDFF"}},{"scope":"constant.character.escape, text.html constant.character.entity.named","settings":{"foreground":"#EEFFFF"}},{"scope":"constant.language.boolean","settings":{"foreground":"#ff9cac"}},{"scope":"constant.numeric","settings":{"foreground":"#F78C6C"}},{"scope":"variable, variable.parameter, support.variable, variable.language, support.constant, meta.definition.variable entity.name.function, meta.function-call.arguments","settings":{"foreground":"#EEFFFF"}},{"scope":"keyword.other","settings":{"foreground":"#F78C6C"}},{"scope":"keyword, modifier, variable.language.this, support.type.object, constant.language","settings":{"foreground":"#89DDFF"}},{"scope":"entity.name.function, support.function","settings":{"foreground":"#82AAFF"}},{"scope":"storage.type, storage.modifier, storage.control","settings":{"foreground":"#C792EA"}},{"scope":"support.module, support.node","settings":{"fontStyle":"italic","foreground":"#f07178"}},{"scope":"support.type, constant.other.key","settings":{"foreground":"#FFCB6B"}},{"scope":"entity.name.type, entity.other.inherited-class, entity.other","settings":{"foreground":"#FFCB6B"}},{"scope":"comment","settings":{"fontStyle":"italic","foreground":"#545454"}},{"scope":"comment punctuation.definition.comment, string.quoted.docstring","settings":{"fontStyle":"italic","foreground":"#545454"}},{"scope":"punctuation","settings":{"foreground":"#89DDFF"}},{"scope":"entity.name, entity.name.type.class, support.type, support.class, meta.use","settings":{"foreground":"#FFCB6B"}},{"scope":"variable.object.property, meta.field.declaration entity.name.function","settings":{"foreground":"#f07178"}},{"scope":"meta.definition.method entity.name.function","settings":{"foreground":"#f07178"}},{"scope":"meta.function entity.name.function","settings":{"foreground":"#82AAFF"}},{"scope":"template.expression.begin, template.expression.end, punctuation.definition.template-expression.begin, punctuation.definition.template-expression.end","settings":{"foreground":"#89DDFF"}},{"scope":"meta.embedded, source.groovy.embedded, meta.template.expression","settings":{"foreground":"#EEFFFF"}},{"scope":"entity.name.tag.yaml","settings":{"foreground":"#f07178"}},{"scope":"meta.object-literal.key, meta.object-literal.key string, support.type.property-name.json","settings":{"foreground":"#f07178"}},{"scope":"constant.language.json","settings":{"foreground":"#89DDFF"}},{"scope":"entity.other.attribute-name.class","settings":{"foreground":"#FFCB6B"}},{"scope":"entity.other.attribute-name.id","settings":{"foreground":"#F78C6C"}},{"scope":"source.css entity.name.tag","settings":{"foreground":"#FFCB6B"}},{"scope":"support.type.property-name.css","settings":{"foreground":"#B2CCD6"}},{"scope":"meta.tag, punctuation.definition.tag","settings":{"foreground":"#89DDFF"}},{"scope":"entity.name.tag","settings":{"foreground":"#f07178"}},{"scope":"entity.other.attribute-name","settings":{"foreground":"#C792EA"}},{"scope":"punctuation.definition.entity.html","settings":{"foreground":"#EEFFFF"}},{"scope":"markup.heading","settings":{"foreground":"#89DDFF"}},{"scope":"text.html.markdown meta.link.inline, meta.link.reference","settings":{"foreground":"#f07178"}},{"scope":"text.html.markdown beginning.punctuation.definition.list","settings":{"foreground":"#89DDFF"}},{"scope":"markup.italic","settings":{"fontStyle":"italic","foreground":"#f07178"}},{"scope":"markup.bold","settings":{"fontStyle":"bold","foreground":"#f07178"}},{"scope":"markup.bold markup.italic, markup.italic markup.bold","settings":{"fontStyle":"italic bold","foreground":"#f07178"}},{"scope":"markup.fenced_code.block.markdown punctuation.definition.markdown","settings":{"foreground":"#C3E88D"}},{"scope":"markup.inline.raw.string.markdown","settings":{"foreground":"#C3E88D"}},{"scope":"keyword.other.definition.ini","settings":{"foreground":"#f07178"}},{"scope":"entity.name.section.group-title.ini","settings":{"foreground":"#89DDFF"}},{"scope":"source.cs meta.class.identifier storage.type","settings":{"foreground":"#FFCB6B"}},{"scope":"source.cs meta.method.identifier entity.name.function","settings":{"foreground":"#f07178"}},{"scope":"source.cs meta.method-call meta.method, source.cs entity.name.function","settings":{"foreground":"#82AAFF"}},{"scope":"source.cs storage.type","settings":{"foreground":"#FFCB6B"}},{"scope":"source.cs meta.method.return-type","settings":{"foreground":"#FFCB6B"}},{"scope":"source.cs meta.preprocessor","settings":{"foreground":"#545454"}},{"scope":"source.cs entity.name.type.namespace","settings":{"foreground":"#EEFFFF"}},{"scope":"meta.jsx.children, SXNested","settings":{"foreground":"#EEFFFF"}},{"scope":"support.class.component","settings":{"foreground":"#FFCB6B"}},{"scope":"source.cpp meta.block variable.other","settings":{"foreground":"#EEFFFF"}},{"scope":"source.python meta.member.access.python","settings":{"foreground":"#f07178"}},{"scope":"source.python meta.function-call.python, meta.function-call.arguments","settings":{"foreground":"#82AAFF"}},{"scope":"meta.block","settings":{"foreground":"#f07178"}},{"scope":"entity.name.function.call","settings":{"foreground":"#82AAFF"}},{"scope":"source.php support.other.namespace, source.php meta.use support.class","settings":{"foreground":"#EEFFFF"}},{"scope":"constant.keyword","settings":{"fontStyle":"italic","foreground":"#89DDFF"}},{"scope":"entity.name.function","settings":{"foreground":"#82AAFF"}},{"settings":{"background":"#212121","foreground":"#EEFFFF"}},{"scope":["constant.other.placeholder"],"settings":{"foreground":"#f07178"}},{"scope":["markup.deleted"],"settings":{"foreground":"#f07178"}},{"scope":["markup.inserted"],"settings":{"foreground":"#C3E88D"}},{"scope":["markup.underline"],"settings":{"fontStyle":"underline"}},{"scope":["keyword.control"],"settings":{"fontStyle":"italic","foreground":"#89DDFF"}},{"scope":["variable.parameter"],"settings":{"fontStyle":"italic"}},{"scope":["variable.parameter.function.language.special.self.python"],"settings":{"fontStyle":"italic","foreground":"#f07178"}},{"scope":["constant.character.format.placeholder.other.python"],"settings":{"foreground":"#F78C6C"}},{"scope":["markup.quote"],"settings":{"fontStyle":"italic","foreground":"#89DDFF"}},{"scope":["markup.fenced_code.block"],"settings":{"foreground":"#EEFFFF90"}},{"scope":["punctuation.definition.quote"],"settings":{"foreground":"#ff9cac"}},{"scope":["meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#C792EA"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#FFCB6B"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#F78C6C"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#f07178"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#916b53"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#82AAFF"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#ff9cac"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#C792EA"}},{"scope":["meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#C3E88D"}}],"type":"dark"}',
    ),
  ),
  Dw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Aw },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
